import { Check, Sparkles, Coins, ShieldAlert } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const PLANS = [
  {
    name: "Explorer",
    price: "₹2,999",
    period: "per country slot",
    desc: "Perfect for companies evaluating target segments and logistics duties.",
    features: [
      "Access to 1 Active Deal Room session",
      "Sovereign tariff check logs",
      "Verified distributor profile database",
      "Standard document compliance support",
      "Email desk assistance",
    ],
    isPopular: false,
    cta: "Book Access",
  },
  {
    name: "Premium",
    price: "₹14,999",
    period: "quarterly membership",
    desc: "Designed for active exporters seeking continuous buyer connections.",
    features: [
      "Access to 5 Active Deal Room slots",
      "Priority document attestation (e-CO)",
      "Direct introducing mail to local partners",
      "Sovereign trade advisory reports",
      "24/7 Priority support hotline",
    ],
    isPopular: false,
    cta: "Select Premium",
  },
  {
    name: "Market Entry",
    price: "₹49,999",
    period: "full market launch plan",
    desc: "Complete operational compliance and guaranteed distributor matches.",
    features: [
      "Unlimited Deal Room sessions",
      "Custom compliance audit & validation",
      "Guaranteed local partner matchmaking",
      "Legal Trade Visa invitation letters",
      "Fast-track Nhava Sheva port clearances",
      "Global Trade Radar™ alerts",
    ],
    isPopular: true,
    cta: "Initiate Launch",
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "tailored agency pricing",
    desc: "Dedicated support for export agencies, ministries, and global corporations.",
    features: [
      "White-labeled deal room corridors",
      "Multi-user team dashboard roles",
      "Bespoke sovereign market studies",
      "Direct customs port API integration",
      "Dedicated account trade director",
    ],
    isPopular: false,
    cta: "Contact Trade Director",
  },
];

export default function AccessPlans() {
  return (
    <section id="pricing" className="bg-background py-16 md:py-24 relative border-b border-border/60">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(16,185,129,0.02),transparent_70%)] pointer-events-none" />

      <div className="mx-auto max-w-[1280px] px-6 md:px-12 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Badge className="bg-primary/10 text-primary border-primary/20 mb-4 px-3 py-1 font-mono uppercase tracking-widest text-xs">
            Global Expansion Plans
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground tracking-tight flex items-center justify-center gap-3">
            <Coins className="size-8 text-primary shrink-0" /> ACCESS PLANS & MEMBERSHIPS
          </h2>
          <p className="text-muted-foreground mt-4 text-base leading-relaxed font-light">
            Select the right platform tier for your international growth. Gain direct access to active deal rooms and verify credentials instantly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {PLANS.map((plan) => (
            <Card
              key={plan.name}
              className={cn(
                "rounded-2xl border flex flex-col justify-between overflow-hidden relative group transition-all duration-300 shadow-sm",
                plan.isPopular
                  ? "bg-card border-primary shadow-xl shadow-primary/5 ring-1 ring-primary"
                  : "bg-card/45 border-border/80 hover:border-border hover:bg-card",
              )}
            >
              {plan.isPopular && (
                <div className="absolute top-0 right-0 left-0 bg-primary py-1.5 text-[10px] font-bold text-primary-foreground tracking-widest uppercase text-center flex items-center justify-center gap-1.5 z-10 font-mono">
                  <Sparkles className="size-3" />
                  Most Popular Choice
                </div>
              )}

              <CardHeader className={cn("p-6 pb-4 relative z-10", plan.isPopular ? "pt-10" : "")}>
                <CardTitle className="text-lg font-bold text-foreground mb-2">{plan.name}</CardTitle>
                <div className="flex items-baseline gap-1.5 my-3">
                  <span className="text-3xl md:text-4xl font-black text-foreground tracking-tight">{plan.price}</span>
                  <span className="text-[10px] text-muted-foreground font-mono tracking-wider">{plan.period}</span>
                </div>
                <p className="text-muted-foreground text-xs leading-relaxed font-light mt-1.5">{plan.desc}</p>
              </CardHeader>

              <CardContent className="px-6 pb-6 pt-0 flex-1 relative z-10">
                <ul className="space-y-3 pt-4 border-t border-border/60">
                  {plan.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2.5 text-xs text-foreground/90 font-light leading-relaxed">
                      <span className="size-4 rounded-full bg-primary/10 border border-primary/20 text-primary flex items-center justify-center mt-0.5 shrink-0">
                        <Check className="size-2.5 stroke-[3px]" />
                      </span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter className="p-6 pt-0 relative z-10">
                <Button
                  asChild
                  className={cn(
                    "w-full rounded-xl font-bold transition-all duration-300 py-5 text-xs",
                    plan.isPopular
                      ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25"
                      : "bg-muted border border-border/60 text-foreground hover:bg-muted/80",
                  )}
                >
                  <a href="https://e-platform.aecci.org.in/request-trial-version" target="_blank" rel="noopener noreferrer">
                    {plan.cta}
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-10 flex items-center justify-center gap-2 text-[10px] text-muted-foreground text-center font-mono">
          <ShieldAlert className="size-4 text-muted-foreground/85" />
          <span>All fees are exclusive of GST. Payments processed securely via Chamber Administrative Portal.</span>
        </div>
      </div>
    </section>
  );
}
