import { Header } from "@/components/layout/header";
import { Main } from "@/components/layout/main";
import { ProfileDropdown } from "@/components/profile-dropdown";
import { Search } from "@/components/search";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ShieldCheck, CreditCard, ArrowRight, Lock } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import { useCreatePaymentOrderMutation, useVerifyPaymentMutation, useGetUserByIdQuery } from "@/store/api/adminApi";
import { toast } from "sonner";

export default function PaymentPage() {
  const navigate = useNavigate();
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");

  const [currentUser] = useState<any>(() => {
    const userStr = localStorage.getItem("user");
    if (userStr) {
      try {
        return JSON.parse(userStr);
      } catch (e) {
        console.log(e)
        return null;
      }
    }
    return null;
  });

  const { data: userData } = useGetUserByIdQuery(currentUser?.id as string, {
    skip: !currentUser?.id,
  });
  
  const dbUser = userData?.data;
  const price = dbUser?.dealRoomPrice || 29500;

  const [createOrder, { isLoading: isCreating }] = useCreatePaymentOrderMutation();
  const [verifyPayment, { isLoading: isVerifying }] = useVerifyPaymentMutation();

  const isProcessing = isCreating || isVerifying;

  // Use URL query parameters for sessionId if available, otherwise fallback
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const sessionId = queryParams.get('sessionId') || "dummy_session_id"; // Ideally pass actual sessionId

  const handleSimulatePayment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!dbUser?.id) return;
    
    try {
      // 1. Create Order
      const orderResponse = await createOrder({ sessionId, userId: dbUser.id }).unwrap();
      
      if (!orderResponse.success) {
        throw new Error("Failed to create order");
      }

      // 2. Load Razorpay script dynamically
      const res = await loadRazorpayScript();
      if (!res) {
        toast.error("Razorpay SDK failed to load. Are you online?");
        return;
      }

      // 3. Initialize Razorpay options
      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID || 'rzp_test_YourKeyId', // Use env var in prod
        amount: orderResponse.amount,
        currency: orderResponse.currency,
        name: "AECCI Global",
        description: "Deal Room Registration",
        order_id: orderResponse.orderId,
        handler: async function (response: any) {
          try {
            // 4. Verify Payment on success
            const verifyRes = await verifyPayment({
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
              sessionId,
              userId: dbUser.id
            }).unwrap();

            if (verifyRes.success) {
              toast.success("Payment successful!");
              const updatedUser = { ...currentUser, kycStatus: 'active', paymentStatus: 'paid' };
              localStorage.setItem("user", JSON.stringify(updatedUser));
              navigate("/dashboard/payment-success");
            }
          } catch (err) {
            console.error(err);
            toast.error("Payment verification failed.");
          }
        },
        prefill: {
          name: dbUser.fullName,
          email: dbUser.email,
          contact: dbUser.mobileNumber,
        },
        theme: {
          color: "#1e3a8a",
        },
      };

      const rzp1 = new (window as any).Razorpay(options);
      rzp1.on('payment.failed', function (response: any) {
        toast.error(response.error.description || "Payment failed");
      });
      rzp1.open();

    } catch (error) {
      console.error(error);
      toast.error("Payment process could not be initiated.");
    }
  };

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  return (
    <>
      <Header>
        <div className="flex items-center space-x-2">
          <span className="font-semibold text-sm text-muted-foreground">
            AECCI Hub
          </span>
          <span className="text-muted-foreground">/</span>
          <span className="font-semibold text-sm">Payment Gateway</span>
        </div>
        <div className="ml-auto flex items-center space-x-4">
          <Search />
          <ProfileDropdown />
        </div>
      </Header>

      <Main fluid className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Payment Gateway</h1>
          <p className="text-muted-foreground text-sm mt-1">
            Secure checkout powered by AECCI banking partner.
          </p>
        </div>

        <Card className="shadow-md">
          <CardHeader className="bg-muted/10 border-b border-border/50 pb-4">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg">Enter Payment Details</CardTitle>
              <Lock className="size-4 text-emerald-500" />
            </div>
            <CardDescription>
              Order Total:{" "}
              <span className="font-bold text-foreground">
                ${price.toLocaleString()} (USD)
              </span>
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <form onSubmit={handleSimulatePayment} className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-muted-foreground">
                  Cardholder Name
                </label>
                <Input placeholder="John Doe" required />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-muted-foreground">
                  Card Number
                </label>
                <div className="relative">
                  <Input
                    placeholder="4111 2222 3333 4444"
                    maxLength={19}
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                    required
                  />
                  <CreditCard className="size-4 text-muted-foreground absolute right-3 top-3" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-muted-foreground">
                    Expiration Date
                  </label>
                  <Input
                    placeholder="MM/YY"
                    maxLength={5}
                    value={expiry}
                    onChange={(e) => setExpiry(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-muted-foreground">
                    CVC / CVV
                  </label>
                  <Input
                    type="password"
                    placeholder="123"
                    maxLength={3}
                    value={cvc}
                    onChange={(e) => setCvc(e.target.value)}
                    required
                  />
                </div>
              </div>

              <Button
                type="submit"
                disabled={isProcessing}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-5"
              >
                {isProcessing ? "Processing..." : "Pay with Razorpay"}{" "}
                <ArrowRight className="size-4 ml-1.5" />
              </Button>
            </form>
          </CardContent>
          <CardFooter className="bg-muted/10 border-t border-border/50 pt-4 justify-center text-[10px] text-muted-foreground">
            <ShieldCheck className="size-3.5 text-emerald-500 mr-1" /> PCI-DSS
            Compliant 256-bit Secure Layer
          </CardFooter>
        </Card>
      </Main>
    </>
  );
}
