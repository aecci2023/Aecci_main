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
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import {
  ShieldCheck,
  ArrowRight,
  Lock,
  Check,
  Sparkles,
  Clock,
  Download,
  Receipt,
  FileText,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  useCreateSubscriptionOrderMutation,
  useVerifySubscriptionPaymentMutation,
  useGetSubscriptionHistoryQuery,
  useGetUserByIdQuery,
} from "@/store/api/adminApi";
import { toast } from "sonner";
import { format } from "date-fns";

const PLANS = [
  {
    id: "explorer",
    name: "Explorer Plan",
    price: "₹3,999",
    priceVal: 3999,
    slots: "1 Deal Room Session Slot",
    validity: "30 Days Validity",
    popular: false,
    color: "from-blue-600 to-indigo-600",
    features: [
      "Access to 1 session slot (any country)",
      "Basic Country Intelligence (Overview & Import Requirements)",
      "1 personalized Opportunity Report",
      "Standard email support",
      "Cannot book additional sessions",
    ],
  },
  {
    id: "growth",
    name: "Growth Plan",
    price: "₹14,999",
    priceVal: 14999,
    slots: "4 Deal Room Session Slots",
    validity: "90 Days Validity",
    popular: true,
    color: "from-emerald-600 to-teal-600",
    features: [
      "Access to 4 session slots (any country)",
      "Full Country Intelligence (all tabs unlocked)",
      "4 personalized Opportunity Reports",
      "Unlimited pre-session Q&A with Partners",
      "Priority support + 1 Live Q&A with AECCI team",
      "Access to basic follow-up services",
    ],
  },
  {
    id: "market_entry",
    name: "Market Entry Plan",
    price: "₹44,999",
    priceVal: 44999,
    slots: "8 Deal Room Session Slots",
    validity: "180 Days Validity",
    popular: false,
    color: "from-purple-600 to-indigo-600",
    features: [
      "Access to 8 session slots",
      "Unlimited Country Intelligence & Partner Briefs",
      "Unlimited Opportunity Reports",
      "Full Partner Coordination (warm intros)",
      "Priority Support + 1 strategy call with partner",
      "Discounted follow-up documentation & advisory",
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise Plan",
    price: "₹1,50,000",
    priceVal: 150000,
    slots: "Unlimited Slots",
    validity: "365 Days Validity",
    popular: false,
    color: "from-rose-600 to-pink-600",
    features: [
      "Unlimited Deal Room sessions",
      "Custom Country Studies & Global Trade Radar alerts",
      "Dedicated account manager",
      "White-label platform features",
      "Multi-user/team access dashboard",
      "Highest priority post-event strategy support",
    ],
  },
];

export default function PaymentPage() {
  const navigate = useNavigate();
  const [currentUser] = useState<any>(() => {
    const userStr = localStorage.getItem("user");
    if (userStr) {
      try {
        return JSON.parse(userStr);
      } catch (e) {
        console.error(e);
        return null;
      }
    }
    return null;
  });

  const { data: userData } = useGetUserByIdQuery(currentUser?.id as string, {
    skip: !currentUser?.id,
  });

  const dbUser = userData?.data;

  const { data: historyData, isLoading: isHistoryLoading } =
    useGetSubscriptionHistoryQuery(undefined, {
      skip: !currentUser?.id,
    });

  const [createOrder, { isLoading: isCreating }] =
    useCreateSubscriptionOrderMutation();
  const [verifyPayment, { isLoading: isVerifying }] =
    useVerifySubscriptionPaymentMutation();

  const [buyingPlanId, setBuyingPlanId] = useState<string | null>(null);

  const isProcessing = isCreating || isVerifying;

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handleBuyPlan = async (planId: string) => {
    if (!dbUser?.id) {
      toast.error("Please log in to purchase a plan.");
      return;
    }
    setBuyingPlanId(planId);

    try {
      // 1. Create Subscription Order
      const orderResponse = await createOrder({ planName: planId }).unwrap();

      if (!orderResponse.success) {
        throw new Error("Failed to create order");
      }

      // 2. Load Razorpay script
      const scriptLoaded = await loadRazorpayScript();
      if (!scriptLoaded) {
        toast.error(
          "Razorpay SDK failed to load. Please check your internet connection.",
        );
        return;
      }

      const selectedPlan = PLANS.find((p) => p.id === planId);

      // 3. Open Razorpay Widget
      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID || "rzp_test_YourKeyId",
        amount: orderResponse.amount,
        currency: orderResponse.currency,
        name: "AECCI Global",
        description: `Purchase: ${selectedPlan?.name || "Plan"}`,
        order_id: orderResponse.orderId,
        handler: async function (response: any) {
          try {
            // 4. Verify Payment on success
            const verifyRes = await verifyPayment({
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
              planName: planId,
            }).unwrap();

            if (verifyRes.success) {
              toast.success("Subscription activated successfully!");

              // Sync local storage user state
              const updatedUser = {
                ...currentUser,
                verificationStatus:
                  dbUser.verificationStatus === "approved" ? "active" : dbUser.verificationStatus,
                planName: planId,
                planActive: true,
              };
              localStorage.setItem("user", JSON.stringify(updatedUser));

              navigate("/dashboard/payment-success");
            }
          } catch (err: any) {
            console.error(err);
            toast.error(
              err?.data?.message || "Subscription verification failed.",
            );
          }
        },
        prefill: {
          name: dbUser.fullName || "",
          email: dbUser.email || "",
          contact: dbUser.mobileNumber || "",
        },
        theme: {
          color: "#16a34a", // Emerald green theme
        },
      };

      const rzp1 = new (window as any).Razorpay(options);
      rzp1.on("payment.failed", function (response: any) {
        toast.error(response.error.description || "Payment failed");
      });
      rzp1.open();
    } catch (error: any) {
      console.error(error);
      toast.error(error?.data?.message || "Failed to initiate transaction.");
    } finally {
      setBuyingPlanId(null);
    }
  };

  const history = historyData?.data || [];

  return (
    <>
      <Header>
        <div className="flex items-center space-x-2">
          <span className="font-semibold text-sm text-muted-foreground">
            AECCI Hub
          </span>
          <span className="text-muted-foreground">/</span>
          <span className="font-semibold text-sm">Subscription Plans</span>
        </div>
        <div className="ml-auto flex items-center space-x-4">
          <Search />
          <ProfileDropdown />
        </div>
      </Header>

      <Main fluid className="space-y-10 py-6 max-w-7xl mx-auto">
        <div className="text-center space-y-3">
          <Badge className="bg-primary/10 text-primary border-primary/20 text-xs px-3 py-1 font-semibold">
            AECCI Premium Access
          </Badge>
          <h1 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-primary via-emerald-600 to-indigo-600 bg-clip-text text-transparent sm:text-5xl">
            Choose Your Deal Room Plan
          </h1>
          <p className="text-muted-foreground text-base max-w-2xl mx-auto">
            Unlock guaranteed 1-on-1 matches with verified buyers, customs
            experts, and international trading partners.
          </p>
        </div>

        {/* Current subscription alert */}
        {dbUser?.planName && dbUser?.planActive && (
          <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-4 max-w-2xl mx-auto flex items-center gap-4">
            <Sparkles className="size-8 text-emerald-600 shrink-0 animate-pulse" />
            <div>
              <p className="font-semibold text-emerald-800 dark:text-emerald-300">
                You have an active plan!
              </p>
              <p className="text-xs text-emerald-700/80 dark:text-emerald-400/80">
                Currently subscribed to the{" "}
                <strong className="uppercase">{dbUser.planName} Plan</strong>{" "}
                with{" "}
                <strong>
                  {dbUser.slotsRemaining} / {dbUser.slotsTotal}
                </strong>{" "}
                session slots remaining.
              </p>
            </div>
          </div>
        )}

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PLANS.map((plan) => {
            const isCurrent =
              dbUser?.planName === plan.id && dbUser?.planActive;
            return (
              <Card
                key={plan.id}
                className={`flex flex-col relative border shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 ${
                  plan.popular
                    ? "border-emerald-500 ring-2 ring-emerald-500/20"
                    : "border-border"
                }`}
              >
                {plan.popular && (
                  <span className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 bg-emerald-600 text-white font-bold text-[10px] tracking-wider uppercase px-3 py-1 rounded-full shadow-sm">
                    Recommended
                  </span>
                )}
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-center mb-1">
                    <CardTitle className="text-lg font-bold">
                      {plan.name}
                    </CardTitle>
                    {isCurrent && (
                      <Badge
                        variant="outline"
                        className="bg-emerald-50 text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-400 border-emerald-500/30"
                      >
                        Current
                      </Badge>
                    )}
                  </div>
                  <CardDescription className="text-sm font-medium">
                    {plan.validity}
                  </CardDescription>
                  <div className="mt-4 flex items-baseline gap-1">
                    <span className="text-3xl font-extrabold tracking-tight">
                      {plan.price}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      one-time
                    </span>
                  </div>
                </CardHeader>

                <CardContent className="flex-1 space-y-4 pt-0">
                  <div className="rounded-lg bg-muted/40 p-3 text-xs font-semibold text-primary flex items-center gap-2 border">
                    <Clock className="size-4 shrink-0" />
                    <span>{plan.slots}</span>
                  </div>

                  <ul className="space-y-2 text-xs text-muted-foreground">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex gap-2 items-start">
                        <Check className="size-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter className="pt-4 border-t bg-muted/10">
                  <Button
                    onClick={() => handleBuyPlan(plan.id)}
                    disabled={isProcessing || isCurrent}
                    className={`w-full font-semibold ${
                      plan.popular
                        ? "bg-emerald-600 hover:bg-emerald-700 text-white"
                        : "bg-primary hover:bg-primary/95 text-primary-foreground"
                    }`}
                  >
                    {isProcessing && buyingPlanId === plan.id ? (
                      "Processing Transaction..."
                    ) : isCurrent ? (
                      "Current Plan"
                    ) : (
                      <span className="flex items-center gap-1.5 justify-center">
                        Select Plan <ArrowRight className="size-4" />
                      </span>
                    )}
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>

        {/* Secure Transaction badge */}
        <div className="flex flex-col items-center justify-center gap-2 max-w-sm mx-auto text-center border p-4 rounded-xl bg-muted/20">
          <div className="flex items-center gap-1 text-emerald-600 font-semibold text-sm">
            <Lock className="size-4" /> 256-Bit Encrypted Payments
          </div>
          <div className="flex items-center gap-1.5 text-[10px] text-muted-foreground">
            <ShieldCheck className="size-3.5 text-emerald-500" /> Secure
            checkout processed via Razorpay gateway.
          </div>
        </div>

        {/* Billing History Section */}
        <div className="pt-10 border-t">
          <div className="flex items-center gap-2.5 mb-4">
            <Receipt className="size-6 text-primary" />
            <div>
              <h2 className="text-2xl font-bold tracking-tight">
                Billing & Invoice History
              </h2>
              <p className="text-muted-foreground text-xs">
                Receipts and PDF invoices of your platform plan purchases.
              </p>
            </div>
          </div>

          <div className="bg-background border rounded-lg overflow-hidden">
            {isHistoryLoading ? (
              <div className="p-8 text-center text-muted-foreground animate-pulse text-sm">
                Loading billing history...
              </div>
            ) : history.length === 0 ? (
              <div className="p-8 text-center text-muted-foreground text-sm flex flex-col items-center gap-2">
                <FileText className="size-8 text-muted-foreground/50" />
                No purchases found. Your plan invoices will be listed here.
              </div>
            ) : (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Plan</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Payment Reference</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Invoice</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {history.map((purchase: any) => (
                    <TableRow key={purchase.id}>
                      <TableCell className="text-xs">
                        {format(
                          new Date(purchase.createdAt),
                          "MMM dd, yyyy h:mm a",
                        )}
                      </TableCell>
                      <TableCell className="font-semibold uppercase text-xs">
                        {purchase.planName}
                      </TableCell>
                      <TableCell className="text-xs">
                        ₹{purchase.amount.toLocaleString()}
                      </TableCell>
                      <TableCell className="font-mono text-xs text-muted-foreground">
                        {purchase.paymentReference || "N/A"}
                      </TableCell>
                      <TableCell>
                        <Badge
                          className={
                            purchase.paymentStatus === "paid"
                              ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20"
                              : "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20"
                          }
                        >
                          {purchase.paymentStatus}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        {purchase.invoiceUrl ? (
                          <Button
                            asChild
                            size="sm"
                            variant="ghost"
                            className="h-8 text-xs text-primary hover:underline"
                          >
                            <a
                              href={purchase.invoiceUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-1.5"
                            >
                              <Download className="size-3.5" /> PDF
                            </a>
                          </Button>
                        ) : (
                          <span className="text-xs text-muted-foreground italic flex items-center gap-1 justify-end">
                            <Clock className="size-3" /> Generating...
                          </span>
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            )}
          </div>
        </div>
      </Main>
    </>
  );
}
