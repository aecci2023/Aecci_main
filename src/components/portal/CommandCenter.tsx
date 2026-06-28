import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Database, Target, Handshake, Compass, Terminal, Calendar,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type CountryData = {
  name: string; code: string; overview: string; opportunity: string;
  demand: string; demandLevel: "CRITICAL" | "HIGH" | "STEADY";
  partner: string; partnerLogo: string; session: string;
  sessionDate: string; volumeGrowth: string; topSector: string;
};

const COUNTRIES: Record<string, CountryData> = {
  KENYA: {
    name: "Kenya", code: "KE",
    overview: "Fastest-growing tech & commerce hub in East Africa. Ideal entry point for agricultural machinery, fast-moving consumer goods (FMCG), and construction materials.",
    opportunity: "Looking for 15+ Indian distributors for processed foods, solar-energy solutions, and eco-friendly packaging materials.",
    demand: "FMCG, Agro-Tech, Building Materials", demandLevel: "CRITICAL",
    partner: "East Africa Chamber of Commerce & Industry", partnerLogo: "EACCI Partner Group",
    session: "Agro & Consumer Goods Direct Deal Room", sessionDate: "15 July, 2026",
    volumeGrowth: "+24.5%", topSector: "Agro-Processing",
  },
  NETHERLANDS: {
    name: "Netherlands", code: "NL",
    overview: "Primary gateway to the European Union market. Highly advanced logistics networks with massive demand for biological goods, medical equipment, and organic chemicals.",
    opportunity: "Exclusive tender access for bio-medical suppliers and packaging distributors through the Rotterdam Port Innovation Hub.",
    demand: "Biotech, Pharmaceuticals, Sustainable Packaging", demandLevel: "HIGH",
    partner: "Rotterdam Trade & Logistics Syndicate", partnerLogo: "Rotterdam Alliance",
    session: "EU Market Attestation & Logistics Clinic", sessionDate: "22 July, 2026",
    volumeGrowth: "+18.2%", topSector: "Bio-Tech",
  },
  SINGAPORE: {
    name: "Singapore", code: "SG",
    overview: "Financial capital of Southeast Asia. Hub for advanced technology products, high-grade electronics, fintech solutions, and premium gourmet food products.",
    opportunity: "AECCI partnership provides fast-track compliance pathways for SaaS companies and food-export conglomerates into ASEAN.",
    demand: "SaaS, Fine Dining Exports, E-Commerce Solutions", demandLevel: "HIGH",
    partner: "Singapore Enterprise and Trade Council", partnerLogo: "Enterprise SG",
    session: "ASEAN Tech & Logistics Advisory Board", sessionDate: "05 August, 2026",
    volumeGrowth: "+31.2%", topSector: "SaaS & Tech",
  },
  MEXICO: {
    name: "Mexico", code: "MX",
    overview: "Key manufacturing hub bordering North America. Rapidly growing demand for automotive components, engineering equipment, and heavy industrial raw materials.",
    opportunity: "Bilateral integration slots with auto-assembly plants in Monterrey and parts distributors across Mexico City.",
    demand: "Automotive Components, Precision Engineering Tools", demandLevel: "STEADY",
    partner: "Mexico-India Commerce Association (MICA)", partnerLogo: "MICA Alliance",
    session: "North America Manufacturing Deal Room", sessionDate: "18 August, 2026",
    volumeGrowth: "+14.8%", topSector: "Automotive Parts",
  },
  GHANA: {
    name: "Ghana", code: "GH",
    overview: "Extremely stable economy with strong trade agreements. Primary demand includes building materials, agricultural inputs, and pharmaceutical formulations.",
    opportunity: "Looking for suppliers of generic pharmaceutical formulations and small-scale manufacturing machinery.",
    demand: "Pharmaceuticals, Steel & Cement, Agro Inputs", demandLevel: "HIGH",
    partner: "Accra Chamber of Commerce & Trade Authority", partnerLogo: "Accra Trade Authority",
    session: "West Africa Infrastructure & Trade Session", sessionDate: "28 July, 2026",
    volumeGrowth: "+21.1%", topSector: "Infrastructure",
  },
};

export default function CommandCenter() {
  const [activeKey, setActiveKey] = React.useState<string>("KENYA");
  const current = COUNTRIES[activeKey];

  return (
    <section id="command-center" className="bg-background py-16 md:py-24 border-b border-border/60 relative">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:40px_40px] opacity-[0.25] dark:opacity-[0.12] pointer-events-none" />

      <div className="mx-auto max-w-[1280px] px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge className="bg-primary/10 text-primary border-primary/20 mb-4 px-3 py-1 font-mono uppercase tracking-widest text-xs">
            Command Center Terminal
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground tracking-tight flex items-center justify-center gap-3">
            <Terminal className="size-8 text-primary shrink-0" /> GLOBAL OPPORTUNITY COMMAND CENTER
          </h2>
          <p className="text-muted-foreground mt-4 text-base md:text-lg leading-relaxed">
            Select a target global market to unlock live intelligence, sector demands, distributor vacancies, and upcoming deal room schedules.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch font-mono">
          {/* Sidebar */}
          <div className="lg:col-span-3 space-y-2.5 flex flex-col justify-start">
            <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-wider px-2 mb-1">
              Active Trade Nodes
            </p>
            {Object.keys(COUNTRIES).map((key) => {
              const country = COUNTRIES[key];
              const isActive = activeKey === key;
              return (
                <button
                  key={key}
                  onClick={() => setActiveKey(key)}
                  className={cn(
                    "w-full flex items-center justify-between p-4 rounded-xl border transition-all duration-200 text-left relative overflow-hidden group",
                    isActive
                      ? "bg-primary/15 border-primary text-foreground shadow-lg shadow-primary/5"
                      : "bg-card border-border text-muted-foreground hover:bg-muted hover:border-border/80",
                  )}
                >
                  <div className="flex items-center gap-3">
                    <Badge variant="outline" className="font-mono text-[10px] font-bold px-1.5 py-0.5 border-primary/30 text-primary bg-primary/5 rounded shrink-0">
                      {country.code}
                    </Badge>
                    <div>
                      <p className={cn("text-xs font-bold font-sans", isActive ? "text-foreground" : "text-foreground/80 group-hover:text-foreground")}>
                        {country.name}
                      </p>
                      <p className="text-[9px] text-muted-foreground font-mono tracking-wider mt-0.5">
                        PING: {isActive ? "4ms" : "7ms"} • {country.topSector}
                      </p>
                    </div>
                  </div>
                  <span className={cn(
                    "size-1.5 rounded-full",
                    country.demandLevel === "CRITICAL" ? "bg-destructive shadow-[0_0_8px_rgba(239,68,68,0.5)]"
                    : country.demandLevel === "HIGH" ? "bg-chart-4 shadow-[0_0_8px_rgba(251,191,36,0.5)]"
                    : "bg-primary shadow-[0_0_8px_rgba(52,211,153,0.5)]",
                  )} />
                </button>
              );
            })}
          </div>

          {/* Info panels */}
          <div className="lg:col-span-9 grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Market Overview */}
            <Card className="bg-card border-border rounded-2xl relative overflow-hidden p-6 md:col-span-2">
              <div className="absolute top-0 right-0 p-3 text-muted-foreground pointer-events-none">
                <Compass className="size-16 opacity-10" />
              </div>
              <div className="flex items-center gap-2 mb-4 text-xs font-bold text-muted-foreground uppercase tracking-widest pb-3 border-b border-border/60">
                <Database className="size-4 text-primary" />
                <span>01 / Market Intelligence Overview</span>
              </div>
              <AnimatePresence mode="wait">
                <motion.div key={current.name} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }}>
                  <h3 className="text-xl font-bold text-foreground mb-3 font-sans">{current.name} Trade Corridor</h3>
                  <p className="text-foreground/90 text-xs md:text-sm leading-relaxed font-sans font-light">{current.overview}</p>
                </motion.div>
              </AnimatePresence>
            </Card>

            {/* Buyer Vacancies */}
            <Card className="bg-card border-border rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-4 text-xs font-bold text-muted-foreground uppercase tracking-widest pb-3 border-b border-border/60">
                <Handshake className="size-4 text-chart-4" />
                <span>02 / Buyer Vacancy Logs</span>
              </div>
              <AnimatePresence mode="wait">
                <motion.div key={current.name} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }} className="space-y-4 font-sans">
                  <p className="text-foreground/95 text-xs leading-relaxed font-light">{current.opportunity}</p>
                  <div className="flex gap-2">
                    <span className="text-[10px] bg-muted border border-border text-foreground px-2 py-0.5 rounded font-mono">Target: Exporters</span>
                    <span className="text-[10px] bg-chart-4/10 border border-chart-4/20 text-chart-4 px-2 py-0.5 rounded font-mono">Slots Available</span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </Card>

            {/* Sector Demand */}
            <Card className="bg-card border-border rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-4 text-xs font-bold text-muted-foreground uppercase tracking-widest pb-3 border-b border-border/60">
                <Target className="size-4 text-destructive" />
                <span>03 / Sector Demand Level</span>
              </div>
              <AnimatePresence mode="wait">
                <motion.div key={current.name} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }} className="space-y-3 font-sans">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground font-mono">INDICATOR:</span>
                    <Badge className={cn(
                      "font-mono font-bold text-[9px] tracking-widest uppercase border-none py-0.5 px-2",
                      current.demandLevel === "CRITICAL" ? "bg-destructive/10 text-destructive"
                      : current.demandLevel === "HIGH" ? "bg-chart-4/10 text-chart-4"
                      : "bg-primary/10 text-primary",
                    )}>
                      {current.demandLevel}
                    </Badge>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs text-muted-foreground font-mono">DEMAND SECTORS:</p>
                    <p className="text-sm font-bold text-foreground leading-relaxed">{current.demand}</p>
                  </div>
                  <div className="flex items-center gap-4 pt-1.5 border-t border-border/65 font-mono text-[10px]">
                    <span className="text-muted-foreground">GROWTH: <strong className="text-primary">{current.volumeGrowth}</strong></span>
                    <span className="text-muted-foreground">PEAK SECTOR: <strong className="text-foreground">{current.topSector}</strong></span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </Card>

            {/* Access Partner */}
            <Card className="bg-card border-border rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-4 text-xs font-bold text-muted-foreground uppercase tracking-widest pb-3 border-b border-border/60">
                <Compass className="size-4 text-chart-2" />
                <span>04 / AECCI Access Partner</span>
              </div>
              <AnimatePresence mode="wait">
                <motion.div key={current.name} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }} className="space-y-3 font-sans">
                  <p className="text-sm font-bold text-foreground">{current.partner}</p>
                  <div className="inline-flex items-center gap-2 p-2.5 rounded-lg bg-muted border border-border">
                    <div className="size-2 rounded-full bg-chart-2 animate-pulse" />
                    <span className="text-[10px] text-foreground/80 font-mono">{current.partnerLogo}</span>
                  </div>
                  <p className="text-[10px] text-muted-foreground font-mono leading-relaxed mt-1">
                    Provides legal support, localized compliance validation, and verified buyer matchmaking services.
                  </p>
                </motion.div>
              </AnimatePresence>
            </Card>

            {/* Session Slot */}
            <Card className="bg-card border-border rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-4 text-xs font-bold text-muted-foreground uppercase tracking-widest pb-3 border-b border-border/60">
                <Calendar className="size-4 text-primary" />
                <span>05 / Scheduled Deal Room Slot</span>
              </div>
              <AnimatePresence mode="wait">
                <motion.div key={current.name} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }} className="space-y-3 font-sans">
                  <div className="space-y-0.5">
                    <p className="text-[10px] text-muted-foreground font-mono">UPCOMING SESSION:</p>
                    <p className="text-sm font-bold text-foreground">{current.session}</p>
                  </div>
                  <div className="flex items-center justify-between text-xs pt-1.5 border-t border-border/60 font-mono">
                    <span className="text-muted-foreground">DATE: <strong className="text-chart-4">{current.sessionDate}</strong></span>
                    <span className="text-primary font-bold">MATCHMAKING ACTIVE</span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
