import { motion } from "framer-motion";
import { ShieldCheck, AlertTriangle, Radar, ShieldAlert } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const ACTIVE_MARKETS = [
  { name: "Kenya (Nairobi Hub)", code: "KE", tariff: "0% for Agro Imports", clearance: "Fast-track, 4m attestation" },
  { name: "Netherlands (Rotterdam)", code: "NL", tariff: "Preferential EU Rates", clearance: "Rotterdam pre-checked" },
  { name: "Singapore (Port Node)", code: "SG", tariff: "0% under CECA Agreement", clearance: "Instant SSL API verification" },
];

const EMERGING_MARKETS = [
  { name: "Ghana (Accra Node)", code: "GH", tariff: "5% Standard duties", clearance: "Awaiting registry sync" },
  { name: "Mexico (Monterrey)", code: "MX", tariff: "Varies (Auto components)", clearance: "Logistics checks active" },
  { name: "Vietnam (Hanoi Port)", code: "VN", tariff: "FTA Pending Review", clearance: "Regional attestation pending" },
];

const HIGH_RISK_MARKETS = [
  { name: "Libya (Tripoli Node)", code: "LY", tariff: "Suspended Tariffs", clearance: "Customs processing block active" },
  { name: "Sudan (Port Sudan)", code: "SD", tariff: "Unstable duties", clearance: "Port clearance logs offline" },
  { name: "Syria (Latakia Port)", code: "SY", tariff: "Embargoed categories", clearance: "Attestation services frozen" },
];

const COLUMNS = [
  {
    title: "Active Markets",
    risk: "LOW RISK",
    icon: ShieldCheck,
    accent: "text-primary",
    badgeClass: "bg-primary/10 text-primary border-primary/20",
    cardBorder: "border-primary/15 hover:border-primary/35",
    dotColor: "bg-primary",
    markets: ACTIVE_MARKETS,
    isRisk: false,
  },
  {
    title: "Emerging Markets",
    risk: "MODERATE",
    icon: AlertTriangle,
    accent: "text-chart-4",
    badgeClass: "bg-chart-4/10 text-chart-4 border-chart-4/20",
    cardBorder: "border-chart-4/15 hover:border-chart-4/35",
    dotColor: "bg-chart-4",
    markets: EMERGING_MARKETS,
    isRisk: false,
  },
  {
    title: "High-Risk Zones",
    risk: "HIGH RISK",
    icon: ShieldAlert,
    accent: "text-destructive",
    badgeClass: "bg-destructive/10 text-destructive border-destructive/20",
    cardBorder: "border-destructive/15 hover:border-destructive/35",
    dotColor: "bg-destructive",
    markets: HIGH_RISK_MARKETS,
    isRisk: true,
  },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const col = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

export default function TradeRadar() {
  return (
    <section className="bg-background py-16 md:py-24 border-b border-border/60 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_100%,hsl(var(--primary)/0.04),transparent)] pointer-events-none" />

      <div className="mx-auto max-w-[1280px] px-6 md:px-12 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/8 border border-primary/15 text-primary text-xs font-semibold uppercase tracking-wider mb-5">
            <Radar className="size-3.5" /> Exclusive AECCI Feature
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground tracking-tight leading-[1.1] mb-4">
            Global Trade{" "}
            <span className="text-primary">Radar™</span>
          </h2>
          <p className="text-muted-foreground text-base leading-relaxed">
            Actionable intelligence detailing tariff validations, custom clearing statuses, and regulatory risk ratings.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
        >
          {COLUMNS.map((col_) => {
            const Icon = col_.icon;
            return (
              <motion.div key={col_.title} variants={col}>
                <Card className={cn("h-full rounded-2xl border bg-card/50 backdrop-blur-sm p-6 flex flex-col shadow-sm transition-colors duration-300", col_.cardBorder)}>
                  {/* Header */}
                  <div className="flex items-center justify-between pb-4 border-b border-border/50 mb-5">
                    <span className={cn("font-bold flex items-center gap-2 text-[11px] uppercase tracking-wider", col_.accent)}>
                      <Icon className="size-4" />
                      {col_.title}
                    </span>
                    <Badge className={cn("text-[9px] font-bold border px-2 py-0.5 flex items-center gap-1.5", col_.badgeClass)}>
                      <span className={cn("size-1.5 rounded-full", col_.dotColor)} />
                      {col_.risk}
                    </Badge>
                  </div>

                  {/* Markets */}
                  <div className="space-y-3 flex-1">
                    {col_.markets.map((m) => (
                      <div key={m.name} className="p-3.5 rounded-xl bg-muted/25 border border-border/40 hover:bg-muted/40 transition-colors space-y-1.5">
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className="font-mono text-[9px] font-bold border-border bg-muted/50 shrink-0">{m.code}</Badge>
                          <span className="text-xs font-bold text-foreground leading-none">{m.name}</span>
                        </div>
                        <p className={cn("text-[10px] font-mono", col_.isRisk ? "text-destructive font-semibold" : "text-muted-foreground")}>
                          {col_.isRisk ? "Status: " : "Tariff: "}{m.tariff}
                        </p>
                        <p className="text-[9px] text-muted-foreground/70 font-mono">Logistics: {m.clearance}</p>
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
