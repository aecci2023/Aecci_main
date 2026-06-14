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
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function PaymentPage() {
  const navigate = useNavigate();
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");

  const handleSimulatePayment = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/dashboard/payment-success");
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
                ₹29,500 (incl. GST)
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
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-5"
              >
                Simulate Successful Payment{" "}
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
