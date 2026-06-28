import { Check, Sparkles, Coins, ShieldAlert } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

const PLANS = [
  {
    name: "Explorer",
    price: "₹2,999",
    period: "per country slot",
    desc: "For companies evaluating target segments and logistics duties.",
    features: [
      "Access to 1 Active Deal Room session",
      "Sovereign tariff check logs",
      "Verified distributor profile database",
      "Standard document compliance support",
      "Email desk assistance",
    ],
    isPopular: false,
    cta: "Book Access",
    accent: "border-border/60",
    ctaClass: "bg-muted/60 border border-border text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary",
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
    accent: "border-border/60",
    ctaClass: "bg-muted/60 border border-border text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary",
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
    accent: "border-primary ring-1 ring-primary/40",
    ctaClass: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25",
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
    accent: "border-border/60",
    ctaClass: "bg-muted/60 border border-border text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const card = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

export default function AccessPlans() {
  return (
    <section id="pricing" className="bg-background py-16 md:py-24 relative border-b border-border/60 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_40%_at_50%_0%,hsl(var(--primary)/0.05),transparent)] pointer-events-none" />

      <div className="mx-auto max-w-[1280px] px-6 md:px-12 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/8 border border-primary/15 text-primary text-xs font-semibold uppercase tracking-wider mb-5">
            <Coins className="size-3.5" /> Global Expansion Plans
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground tracking-tight leading-[1.1] mb-4">
            Access Plans &{" "}
            <span className="text-primary">Memberships</span>
          </h2>
          <p className="text-muted-foreground text-base leading-relaxed">
            Select the right platform tier for your international growth. Gain direct access to active deal rooms and verify credentials instantly.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch"
        >
          {PLANS.map((plan) => (
            <motion.div key={plan.name} variants={card} className="h-full">
              <Card className={cn(
                "h-full flex flex-col rounded-2xl border bg-card/60 backdrop-blur-sm relative overflow-hidden shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1",
                plan.isPopular ? "bg-card shadow-xl hover:shadow-primary/10" : "bg-card/40 hover:bg-card/80",
                plan.accent,
              )}>
                {plan.isPopular && (
                  <div className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent" />
                )}
                {plan.isPopular && (
                  <div className="px-6 pt-4 pb-0">
                    <Badge className="bg-primary/10 text-primary border border-primary/20 text-[9px] font-bold uppercase tracking-widest flex items-center gap-1.5 w-fit">
                      <Sparkles className="size-2.5" /> Most Popular
                    </Badge>
                  </div>
                )}

                <CardHeader className={cn("p-6 pb-4", plan.isPopular ? "pt-3" : "")}>
                  <div className="flex items-start justify-between mb-3">
                    <CardTitle className="text-base font-bold text-foreground">{plan.name}</CardTitle>
                    {plan.name === "Enterprise" && (
                      <Badge variant="outline" className="text-[9px] border-border text-muted-foreground">Custom</Badge>
                    )}
                  </div>
                  <div className="flex items-baseline gap-1.5 mb-3">
                    <span className="text-3xl font-black text-foreground tracking-tight leading-none">{plan.price}</span>
                    <span className="text-[9px] text-muted-foreground font-mono tracking-wider leading-none">{plan.period}</span>
                  </div>
                  <p className="text-muted-foreground text-xs leading-relaxed">{plan.desc}</p>
                </CardHeader>

                <CardContent className="px-6 pb-6 pt-0 flex-1">
                  <Separator className="mb-4 opacity-50" />
                  <ul className="space-y-2.5">
                    {plan.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2.5 text-xs text-foreground/80 leading-relaxed">
                        <span className="size-4 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mt-0.5 shrink-0">
                          <Check className="size-2.5 text-primary stroke-[3px]" />
                        </span>
                        {feat}
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter className="p-6 pt-0">
                  <Button asChild className={cn("w-full rounded-xl font-bold transition-all duration-300 text-xs", plan.ctaClass)}>
                    <a href="https://e-platform.aecci.org.in/request-trial-version" target="_blank" rel="noopener noreferrer">
                      {plan.cta}
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-10 flex items-center justify-center gap-2 text-[10px] text-muted-foreground text-center font-mono">
          <ShieldAlert className="size-4 text-muted-foreground/70" />
          <span>All fees are exclusive of GST. Payments processed securely via Chamber Administrative Portal.</span>
        </div>
      </div>
    </section>
  );
}
