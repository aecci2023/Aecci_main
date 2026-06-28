import {
  BarChart, Bar, ResponsiveContainer, XAxis, YAxis, Tooltip, CartesianGrid, Cell,
} from "recharts";
import { motion } from "framer-motion";
import { Award, Zap, ShieldCheck, LineChart, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";

const SECTOR_DATA = [
  { name: "Agro", volume: 420, growth: "+24%", full: "Agro-Processing" },
  { name: "FMCG", volume: 380, growth: "+19%", full: "FMCG Consumables" },
  { name: "SaaS", volume: 310, growth: "+31%", full: "SaaS & Tech Tools" },
  { name: "Build.", volume: 290, growth: "+14%", full: "Building Materials" },
  { name: "Bio-Med", volume: 240, growth: "+18%", full: "Bio-Med & Pharma" },
];

const CLEARANCE_STATS = [
  { label: "Avg e-CO Attestation", value: "4m 12s", sub: "99.87% Accuracy rate", color: "text-primary" },
  { label: "Daily Requests Filed", value: "1,842", sub: "Secure API routing active", color: "text-chart-2" },
  { label: "Port Clearance Uplift", value: "+65%", sub: "Faster transit times", color: "text-chart-3" },
];

const sectionVariant = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

export default function BusinessIntelligence() {
  return (
    <section className="bg-background py-16 md:py-24 border-b border-border/60 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_0%_50%,hsl(var(--primary)/0.04),transparent)] pointer-events-none" />

      <div className="mx-auto max-w-[1280px] px-6 md:px-12 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/8 border border-primary/15 text-primary text-xs font-semibold uppercase tracking-wider mb-5">
            <LineChart className="size-3.5" /> Live Intelligence Hub
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground tracking-tight leading-[1.1] mb-4">
            Live Business{" "}
            <span className="text-primary">Intelligence</span>
          </h2>
          <p className="text-muted-foreground text-base leading-relaxed">
            Real-time market insights, attestation volumes, and trending product segments from our digital shipping registries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
          {/* Chart */}
          <motion.div
            variants={sectionVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="lg:col-span-6"
          >
            <Card className="h-full rounded-2xl border-border/60 bg-card/50 backdrop-blur-sm p-6 flex flex-col shadow-sm">
              <div className="flex items-center gap-2 pb-3 border-b border-border/50 mb-4">
                <TrendingUp className="size-4 text-primary" />
                <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">Sector Performance</span>
              </div>
              <p className="text-[11px] text-muted-foreground mb-5 font-light">
                Relative volume indexed by Certificate of Origin submissions this quarter.
              </p>
              <div className="flex-1 min-h-[220px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={SECTOR_DATA} margin={{ left: -25, right: 8, bottom: 0, top: 8 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} opacity={0.07} stroke="var(--border)" />
                    <XAxis dataKey="name" stroke="var(--muted-foreground)" fontSize={9} tickLine={false} axisLine={false} opacity={0.7} />
                    <YAxis stroke="var(--muted-foreground)" fontSize={9} tickLine={false} axisLine={false} opacity={0.7} />
                    <Tooltip
                      cursor={{ fill: "var(--muted)", opacity: 0.5 }}
                      contentStyle={{ backgroundColor: "var(--card)", borderColor: "var(--border)", borderRadius: "10px", fontSize: "11px" }}
                      itemStyle={{ color: "var(--primary)" }}
                      labelStyle={{ color: "var(--foreground)", fontFamily: "monospace", fontWeight: "bold" }}
                      // eslint-disable-next-line @typescript-eslint/no-explicit-any
                      formatter={(val: any) => [val, "Volume"] as any}
                    />
                    <Bar dataKey="volume" radius={[5, 5, 0, 0]}>
                      {SECTOR_DATA.map((_, idx) => (
                        <Cell key={idx} fill={`var(--chart-${(idx % 5) + 1})`} opacity={0.8} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </Card>
          </motion.div>

          {/* Demand Index */}
          <motion.div
            variants={sectionVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <Card className="h-full rounded-2xl border-border/60 bg-card/50 backdrop-blur-sm p-6 flex flex-col shadow-sm">
              <div className="flex items-center gap-2 pb-3 border-b border-border/50 mb-4">
                <Award className="size-4 text-chart-4" />
                <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">Demand Index</span>
              </div>
              <div className="flex-1 space-y-0 divide-y divide-border/40">
                {SECTOR_DATA.map((item, i) => (
                  <div key={item.name} className="flex items-center justify-between py-3 first:pt-0 last:pb-0">
                    <div>
                      <p className="font-bold text-foreground text-[11px]">{item.full}</p>
                      <p className="text-[9px] text-muted-foreground font-mono mt-0.5">Score: {item.volume}</p>
                    </div>
                    <span className={`text-[10px] font-black font-mono`} style={{ color: `var(--chart-${(i % 5) + 1})` }}>
                      {item.growth}
                    </span>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* Clearance Speed */}
          <motion.div
            variants={sectionVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <Card className="h-full rounded-2xl border-border/60 bg-card/50 backdrop-blur-sm p-6 flex flex-col shadow-sm">
              <div className="flex items-center gap-2 pb-3 border-b border-border/50 mb-4">
                <Zap className="size-4 text-chart-2" />
                <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">Clearance Speed</span>
              </div>
              <div className="flex-1 space-y-0 divide-y divide-border/40">
                {CLEARANCE_STATS.map((s) => (
                  <div key={s.label} className="py-4 first:pt-0 last:pb-0 space-y-1">
                    <p className="text-[9px] text-muted-foreground font-bold uppercase tracking-widest">{s.label}</p>
                    <p className={`text-3xl font-black tracking-tight leading-none ${s.color}`}>{s.value}</p>
                    <p className={`text-[10px] font-medium ${s.color} opacity-80`}>{s.sub}</p>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-2 mt-4 pt-4 border-t border-border/50 text-[9px] text-muted-foreground">
                <ShieldCheck className="size-3.5 text-muted-foreground/70" />
                <span>Verifiable on India Customs Ledger</span>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
