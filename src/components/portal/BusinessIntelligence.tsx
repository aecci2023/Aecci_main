import {
  BarChart, Bar, ResponsiveContainer, XAxis, YAxis, Tooltip, CartesianGrid,
} from "recharts";
import { Award, Zap, ShieldCheck, LineChart, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const SECTOR_DATA = [
  { name: "Agro-Processing", volume: 420, growth: "+24%" },
  { name: "FMCG Consumables", volume: 380, growth: "+19%" },
  { name: "SaaS & Tech Tools", volume: 310, growth: "+31%" },
  { name: "Building Materials", volume: 290, growth: "+14%" },
  { name: "Bio-Med & Pharma", volume: 240, growth: "+18%" },
];

export default function BusinessIntelligence() {
  return (
    <section className="bg-background py-16 md:py-24 border-b border-border/60 relative">
      <div className="mx-auto max-w-[1280px] px-6 md:px-12 relative z-10 font-mono text-xs text-muted-foreground">
        <div className="text-center max-w-2xl mx-auto mb-16 font-sans">
          <Badge className="bg-primary/10 text-primary border-primary/20 mb-4 px-3 py-1 font-mono uppercase tracking-widest text-xs">
            Live Intelligence Hub
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground tracking-tight flex items-center justify-center gap-3">
            <LineChart className="size-8 text-primary shrink-0" /> LIVE BUSINESS INTELLIGENCE
          </h2>
          <p className="text-muted-foreground mt-4 text-base leading-relaxed font-light">
            Real-time market insights, attestation volumes, and trending product segments compiled from our digital shipping registries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Chart */}
          <Card className="lg:col-span-6 bg-card border-border rounded-2xl p-6 flex flex-col justify-between shadow-sm">
            <div>
              <div className="flex items-center gap-2 text-[10px] text-muted-foreground font-bold uppercase tracking-wider pb-3 border-b border-border mb-4">
                <TrendingUp className="size-4 text-primary" />
                <span>Sector Performance & Growth Tiers</span>
              </div>
              <p className="text-[11px] text-muted-foreground mb-6 font-sans font-light">
                Relative processing volume indexed by Certificate of Origin submissions this quarter.
              </p>
            </div>
            <div className="h-60 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={SECTOR_DATA} margin={{ left: -25, right: 10, bottom: 0, top: 10 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} opacity={0.07} stroke="var(--border)" />
                  <XAxis dataKey="name" stroke="var(--muted-foreground)" fontSize={9} tickLine={false} axisLine={false} opacity={0.7} />
                  <YAxis stroke="var(--muted-foreground)" fontSize={9} tickLine={false} axisLine={false} opacity={0.7} />
                  <Tooltip
                    contentStyle={{ backgroundColor: "var(--card)", borderColor: "var(--border)", borderRadius: "8px" }}
                    itemStyle={{ color: "var(--primary)", fontSize: "11px" }}
                    labelStyle={{ color: "var(--foreground)", fontSize: "11px", fontFamily: "monospace" }}
                  />
                  <Bar dataKey="volume" fill="var(--primary)" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </Card>

          {/* Demand Index */}
          <Card className="lg:col-span-3 bg-card border-border rounded-2xl p-6 flex flex-col justify-between shadow-sm">
            <div>
              <div className="flex items-center gap-2 text-[10px] text-muted-foreground font-bold uppercase tracking-wider pb-3 border-b border-border mb-4 font-sans">
                <Award className="size-4 text-chart-4" />
                <span>Demand Index</span>
              </div>
              <div className="space-y-4">
                {SECTOR_DATA.map((item) => (
                  <div key={item.name} className="flex items-center justify-between pb-2 border-b border-border/40 last:border-0 last:pb-0">
                    <div>
                      <p className="font-bold text-foreground text-[11px] font-sans">{item.name}</p>
                      <p className="text-[9px] text-muted-foreground font-mono">Index Score: {item.volume}</p>
                    </div>
                    <span className="text-[10px] font-bold text-primary font-mono">{item.growth}</span>
                  </div>
                ))}
              </div>
            </div>
          </Card>

          {/* Clearance Speed */}
          <Card className="lg:col-span-3 bg-card border-border rounded-2xl p-6 flex flex-col justify-between shadow-sm">
            <div>
              <div className="flex items-center gap-2 text-[10px] text-muted-foreground font-bold uppercase tracking-wider pb-3 border-b border-border mb-4 font-sans">
                <Zap className="size-4 text-chart-2" />
                <span>Clearance Speed</span>
              </div>
              <div className="space-y-6 pt-2">
                <div className="space-y-1">
                  <p className="text-[9px] text-muted-foreground font-bold uppercase tracking-widest">Avg e-CO Attestation</p>
                  <p className="text-3xl font-black text-foreground tracking-wide font-sans">4m 12s</p>
                  <p className="text-[10px] text-primary">99.87% Accuracy rate</p>
                </div>
                <div className="space-y-1">
                  <p className="text-[9px] text-muted-foreground font-bold uppercase tracking-widest">Daily Requests Filed</p>
                  <p className="text-3xl font-black text-foreground tracking-wide font-sans">1,842</p>
                  <p className="text-[10px] text-chart-2">Secure API routing active</p>
                </div>
                <div className="space-y-1">
                  <p className="text-[9px] text-muted-foreground font-bold uppercase tracking-widest">Port Clearance Uplift</p>
                  <p className="text-3xl font-black text-foreground tracking-wide font-sans">+65%</p>
                  <p className="text-[10px] text-primary">Faster transit times</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2 mt-4 pt-3 border-t border-border/60 text-[9px] text-muted-foreground">
              <ShieldCheck className="size-3.5 text-muted-foreground/80" />
              <span>Verifiable on India Customs Ledger</span>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
