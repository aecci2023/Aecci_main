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
import { Checkbox } from "@/components/ui/checkbox";
import { Landmark, CreditCard } from "lucide-react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function ServicePurchasePage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [agreed, setAgreed] = useState(false);
  const serviceId = searchParams.get("service") || "advisory";

  const services = {
    advisory: {
      title: "Bespoke Trade Advisory Desk",
      base: 45000,
      price: "₹45,000 / $540",
    },
    documentation: {
      title: "Compliance & Customs Desk",
      base: 30000,
      price: "₹30,000 / $360",
    },
    coordination: {
      title: "Direct Buyer Coordination",
      base: 60000,
      price: "₹60,000 / $720",
    },
    "entry-desk": {
      title: "Nairobi Market Entry Desk",
      base: 120000,
      price: "₹1,20,000 / $1,440",
    },
  };

  const activeService =
    services[serviceId as keyof typeof services] || services.advisory;
  const gst = Math.round(activeService.base * 0.18);
  const total = activeService.base + gst;

  const handleCheckout = () => {
    if (!agreed) return;
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
          <span className="font-semibold text-sm">Services</span>
          <span className="text-muted-foreground">/</span>
          <span className="font-semibold text-sm">Checkout</span>
        </div>
        <div className="ml-auto flex items-center space-x-4">
          <Search />
          <ProfileDropdown />
        </div>
      </Header>

      <Main fluid className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Secure Checkout</h1>
          <p className="text-muted-foreground text-sm mt-1">
            Acquire your post-session facilitation support packages.
          </p>
        </div>

        <Card className="border border-border shadow-sm">
          <CardHeader className="bg-muted/10 border-b border-border/50 pb-4">
            <CardTitle className="text-lg">Billing Summary</CardTitle>
            <CardDescription>
              Order review before secure payment gateway transfer.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 pt-6">
            <div className="space-y-4">
              <div className="flex justify-between items-start gap-2">
                <div>
                  <h4 className="font-semibold text-sm text-foreground">
                    {activeService.title}
                  </h4>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    AECCI Professional Facilitation Wings
                  </p>
                </div>
                <span className="font-semibold text-sm text-foreground">
                  ₹{activeService.base.toLocaleString("en-IN")}
                </span>
              </div>

              <div className="flex justify-between text-xs text-muted-foreground">
                <span>Integrated GST (18%)</span>
                <span>+ ₹{gst.toLocaleString("en-IN")}</span>
              </div>

              <div className="border-t border-border pt-4 flex justify-between font-bold text-base text-foreground">
                <span>Total Amount Due</span>
                <span>₹{total.toLocaleString("en-IN")}</span>
              </div>
            </div>

            {/* Payment Method simulation */}
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                Simulate Payment Method
              </span>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  className="p-3 border-2 border-primary rounded-lg bg-primary/5 dark:bg-primary/10 flex flex-col items-center justify-center text-center gap-1.5"
                >
                  <CreditCard className="size-5 text-primary" />
                  <span className="text-xs font-medium">
                    Credit / Debit Card
                  </span>
                </button>
                <button
                  type="button"
                  className="p-3 border border-border rounded-lg flex flex-col items-center justify-center text-center gap-1.5 opacity-60"
                >
                  <Landmark className="size-5 text-muted-foreground" />
                  <span className="text-xs font-medium">
                    NEFT / RTGS Transfer
                  </span>
                </button>
              </div>
            </div>

            {/* Legal compliance checkbox (Layer 2) */}
            <div className="p-3 bg-amber-500/5 border border-amber-500/10 rounded-lg space-y-3">
              <div className="flex items-start gap-2">
                <Checkbox
                  id="checkout-policy"
                  checked={agreed}
                  onCheckedChange={(checked) => setAgreed(checked === true)}
                  className="mt-0.5"
                />
                <label
                  htmlFor="checkout-policy"
                  className="text-xs font-semibold text-muted-foreground leading-tight cursor-pointer"
                >
                  I agree to the Booking, Refund and Cancellation Policy{" "}
                  <span className="text-red-500">*</span>
                </label>
              </div>
              <p className="text-[10px] text-muted-foreground italic pl-6">
                Refunds are issued at 100% only if AECCI cancels the service or
                a duplicate transaction is registered.
              </p>
            </div>
          </CardContent>
          <CardFooter className="bg-muted/10 border-t border-border/50 pt-4 flex items-center justify-between">
            <Button
              disabled={!agreed}
              onClick={handleCheckout}
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-5"
            >
              Complete Secure Checkout
            </Button>
          </CardFooter>
        </Card>
      </Main>
    </>
  );
}
