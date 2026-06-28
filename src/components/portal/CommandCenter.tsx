import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Database,
  Target,
  Handshake,
  Compass,
  Terminal,
  Calendar,
  ChevronRight,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { cn } from "@/lib/utils";

type CountryData = {
  name: string;
  code: string;
  flag: string;
  overview: string;
  opportunity: string;
  demand: string;
  demandLevel: "CRITICAL" | "HIGH" | "STEADY";
  partner: string;
  partnerLogo: string;
  session: string;
  sessionDate: string;
  volumeGrowth: string;
  topSector: string;
};

const COUNTRIES: Record<string, CountryData> = {
  KENYA: {
    name: "Kenya",
    code: "KE",
    flag: "🇰🇪",
    overview:
      "Fastest-growing tech & commerce hub in East Africa. Ideal entry point for agricultural machinery, FMCG, and construction materials.",
    opportunity:
      "Looking for 15+ Indian distributors for processed foods, solar-energy solutions, and eco-friendly packaging materials.",
    demand: "FMCG, Agro-Tech, Building Materials",
    demandLevel: "CRITICAL",
    partner: "East Africa Chamber of Commerce & Industry",
    partnerLogo: "EACCI Partner Group",
    session: "Agro & Consumer Goods Direct Deal Room",
    sessionDate: "15 July, 2026",
    volumeGrowth: "+24.5%",
    topSector: "Agro-Processing",
  },
  NETHERLANDS: {
    name: "Netherlands",
    code: "NL",
    flag: "🇳🇱",
    overview:
      "Primary gateway to the European Union market. Massive demand for biological goods, medical equipment, and organic chemicals.",
    opportunity:
      "Exclusive tender access for bio-medical suppliers and packaging distributors through the Rotterdam Port Innovation Hub.",
    demand: "Biotech, Pharmaceuticals, Sustainable Packaging",
    demandLevel: "HIGH",
    partner: "Rotterdam Trade & Logistics Syndicate",
    partnerLogo: "Rotterdam Alliance",
    session: "EU Market Attestation & Logistics Clinic",
    sessionDate: "22 July, 2026",
    volumeGrowth: "+18.2%",
    topSector: "Bio-Tech",
  },
  SINGAPORE: {
    name: "Singapore",
    code: "SG",
    flag: "🇸🇬",
    overview:
      "Financial capital of Southeast Asia. Hub for advanced technology products, fintech solutions, and premium gourmet food products.",
    opportunity:
      "AECCI partnership provides fast-track compliance pathways for SaaS companies and food-export conglomerates into ASEAN.",
    demand: "SaaS, Fine Dining Exports, E-Commerce Solutions",
    demandLevel: "HIGH",
    partner: "Singapore Enterprise and Trade Council",
    partnerLogo: "Enterprise SG",
    session: "ASEAN Tech & Logistics Advisory Board",
    sessionDate: "05 August, 2026",
    volumeGrowth: "+31.2%",
    topSector: "SaaS & Tech",
  },
  MEXICO: {
    name: "Mexico",
    code: "MX",
    flag: "🇲🇽",
    overview:
      "Key manufacturing hub bordering North America. Rapidly growing demand for automotive components and heavy industrial raw materials.",
    opportunity:
      "Bilateral integration slots with auto-assembly plants in Monterrey and parts distributors across Mexico City.",
    demand: "Automotive Components, Precision Engineering Tools",
    demandLevel: "STEADY",
    partner: "Mexico-India Commerce Association (MICA)",
    partnerLogo: "MICA Alliance",
    session: "North America Manufacturing Deal Room",
    sessionDate: "18 August, 2026",
    volumeGrowth: "+14.8%",
    topSector: "Automotive Parts",
  },
  GHANA: {
    name: "Ghana",
    code: "GH",
    flag: "🇬🇭",
    overview:
      "Extremely stable economy with strong trade agreements. Primary demand includes building materials, agricultural inputs, and pharmaceuticals.",
    opportunity:
      "Looking for suppliers of generic pharmaceutical formulations and small-scale manufacturing machinery.",
    demand: "Pharmaceuticals, Steel & Cement, Agro Inputs",
    demandLevel: "HIGH",
    partner: "Accra Chamber of Commerce & Trade Authority",
    partnerLogo: "Accra Trade Authority",
    session: "West Africa Infrastructure & Trade Session",
    sessionDate: "28 July, 2026",
    volumeGrowth: "+21.1%",
    topSector: "Infrastructure",
  },
};

const DEMAND_CONFIG = {
  CRITICAL: {
    label: "Critical",
    class: "bg-destructive/10 text-destructive border-destructive/20",
  },
  HIGH: {
    label: "High",
    class: "bg-chart-4/10 text-chart-4 border-chart-4/20",
  },
  STEADY: {
    label: "Steady",
    class: "bg-primary/10 text-primary border-primary/20",
  },
};

const fade = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  exit: { opacity: 0, y: -8, transition: { duration: 0.2 } },
};

export default function CommandCenter() {
  const [activeKey, setActiveKey] = React.useState<string>("KENYA");
  const current = COUNTRIES[activeKey];
  const demandCfg = DEMAND_CONFIG[current.demandLevel];

  return (
    <section
      id="command-center"
      className="bg-background py-16 md:py-24 border-b border-border/60 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:48px_48px] opacity-[0.18] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_50%,hsl(var(--primary)/0.03),transparent)] pointer-events-none" />

      <div className="mx-auto max-w-[1280px] px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/8 border border-primary/15 text-primary text-xs font-semibold uppercase tracking-wider mb-5">
            <Terminal className="size-3.5" /> Command Center Terminal
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground tracking-tight leading-[1.1] mb-4">
            Global Opportunity{" "}
            <span className="text-primary">Command Center</span>
          </h2>
          <p className="text-muted-foreground text-base leading-relaxed">
            Select a target market to unlock live intelligence, sector demands,
            distributor vacancies, and upcoming deal room schedules.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
          {/* Country Sidebar */}
          <div className="lg:col-span-3 space-y-2">
            <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest px-1 mb-2 font-mono">
              Active Trade Nodes
            </p>
            {Object.entries(COUNTRIES).map(([key, country]) => {
              const isActive = activeKey === key;
              return (
                <button
                  key={key}
                  onClick={() => setActiveKey(key)}
                  className={cn(
                    "w-full flex items-center justify-between p-3.5 rounded-xl border text-left transition-all duration-200",
                    isActive
                      ? "bg-primary/10 border-primary/30 shadow-sm shadow-primary/5"
                      : "bg-card/50 border-border/50 hover:bg-muted/40 hover:border-border",
                  )}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <span className="text-xl shrink-0">{country.flag}</span>
                    <div className="min-w-0">
                      <p
                        className={cn(
                          "text-xs font-bold truncate",
                          isActive ? "text-primary" : "text-foreground",
                        )}
                      >
                        {country.name}
                      </p>
                      <p className="text-[9px] text-muted-foreground font-mono mt-0.5 truncate">
                        {country.topSector}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <span
                      className={cn(
                        "text-[8px] font-black font-mono",
                        country.demandLevel === "CRITICAL"
                          ? "text-destructive"
                          : country.demandLevel === "HIGH"
                            ? "text-chart-4"
                            : "text-primary",
                      )}
                    >
                      {country.volumeGrowth}
                    </span>
                    <span
                      className={cn(
                        "size-1.5 rounded-full",
                        country.demandLevel === "CRITICAL"
                          ? "bg-destructive"
                          : country.demandLevel === "HIGH"
                            ? "bg-chart-4"
                            : "bg-primary",
                      )}
                    />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Info Panels */}
          <div className="lg:col-span-9 grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Market Overview — full width */}
            <Card className="md:col-span-2 rounded-2xl border-border/60 bg-card/50 backdrop-blur-sm p-5 relative overflow-hidden">
              <div className="absolute top-4 right-4 opacity-5 pointer-events-none">
                <Compass className="size-24 text-foreground" />
              </div>
              <div className="flex items-center gap-2 mb-3 pb-3 border-b border-border/50">
                <Database className="size-4 text-primary" />
                <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
                  01 / Market Intelligence
                </span>
              </div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.name}
                  variants={fade}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-3xl">{current.flag}</span>
                    <div>
                      <h3 className="text-lg font-bold text-foreground">
                        {current.name} Trade Corridor
                      </h3>
                      <div className="flex items-center gap-2 mt-0.5">
                        <Badge
                          className={cn(
                            "text-[9px] font-bold border",
                            demandCfg.class,
                          )}
                        >
                          {demandCfg.label} Demand
                        </Badge>
                        <span className="text-[10px] text-primary font-black font-mono">
                          {current.volumeGrowth} growth
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-foreground/80 text-sm leading-relaxed font-light">
                    {current.overview}
                  </p>
                </motion.div>
              </AnimatePresence>
            </Card>

            {/* Buyer Vacancies */}
            <Card className="rounded-2xl border-border/60 bg-card/50 backdrop-blur-sm p-5">
              <div className="flex items-center gap-2 mb-3 pb-3 border-b border-border/50">
                <Handshake className="size-4 text-chart-4" />
                <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
                  02 / Buyer Vacancies
                </span>
              </div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.name}
                  variants={fade}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  className="space-y-3"
                >
                  <p className="text-foreground/85 text-xs leading-relaxed">
                    {current.opportunity}
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    <Badge
                      variant="outline"
                      className="text-[9px] font-mono bg-muted/50 border-border"
                    >
                      Target: Exporters
                    </Badge>
                    <Badge className="bg-chart-4/10 text-chart-4 border border-chart-4/20 text-[9px] font-mono">
                      Slots Available
                    </Badge>
                  </div>
                </motion.div>
              </AnimatePresence>
            </Card>

            {/* Sector Demand */}
            <Card className="rounded-2xl border-border/60 bg-card/50 backdrop-blur-sm p-5">
              <div className="flex items-center gap-2 mb-3 pb-3 border-b border-border/50">
                <Target className="size-4 text-destructive" />
                <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
                  03 / Sector Demand
                </span>
              </div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.name}
                  variants={fade}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  className="space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] text-muted-foreground font-mono">
                      INDICATOR:
                    </span>
                    <Badge
                      className={cn(
                        "font-mono font-bold text-[9px] tracking-widest uppercase border",
                        demandCfg.class,
                      )}
                    >
                      {current.demandLevel}
                    </Badge>
                  </div>
                  <div>
                    <p className="text-[10px] text-muted-foreground font-mono mb-1">
                      DEMAND SECTORS:
                    </p>
                    <p className="text-sm font-bold text-foreground">
                      {current.demand}
                    </p>
                  </div>
                  <div className="flex items-center gap-4 pt-2 border-t border-border/40 text-[10px] font-mono">
                    <span className="text-muted-foreground">
                      GROWTH:{" "}
                      <strong className="text-primary">
                        {current.volumeGrowth}
                      </strong>
                    </span>
                    <span className="text-muted-foreground">
                      PEAK:{" "}
                      <strong className="text-foreground">
                        {current.topSector}
                      </strong>
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </Card>

            {/* Access Partner */}
            <Card className="rounded-2xl border-border/60 bg-card/50 backdrop-blur-sm p-5">
              <div className="flex items-center gap-2 mb-3 pb-3 border-b border-border/50">
                <Compass className="size-4 text-chart-2" />
                <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
                  04 / Access Partner
                </span>
              </div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.name}
                  variants={fade}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  className="space-y-3"
                >
                  <p className="text-sm font-bold text-foreground">
                    {current.partner}
                  </p>
                  <div className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-muted/50 border border-border/50">
                    <div className="size-2 rounded-full bg-chart-2 animate-pulse" />
                    <span className="text-[10px] text-foreground/80 font-mono">
                      {current.partnerLogo}
                    </span>
                  </div>
                  <p className="text-[10px] text-muted-foreground font-mono leading-relaxed">
                    Legal support, localized compliance validation, and verified
                    buyer matchmaking.
                  </p>
                </motion.div>
              </AnimatePresence>
            </Card>

            {/* Session Slot */}
            <Card className="rounded-2xl border-border/60 bg-card/50 backdrop-blur-sm p-5">
              <div className="flex items-center gap-2 mb-3 pb-3 border-b border-border/50">
                <Calendar className="size-4 text-primary" />
                <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
                  05 / Deal Room Slot
                </span>
              </div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.name}
                  variants={fade}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  className="space-y-3"
                >
                  <div>
                    <p className="text-[10px] text-muted-foreground font-mono mb-1">
                      UPCOMING SESSION:
                    </p>
                    <p className="text-sm font-bold text-foreground">
                      {current.session}
                    </p>
                  </div>
                  <div className="flex items-center justify-between text-xs pt-2 border-t border-border/40 font-mono">
                    <span className="text-muted-foreground">
                      DATE:{" "}
                      <strong className="text-chart-4">
                        {current.sessionDate}
                      </strong>
                    </span>
                    <span className="text-primary font-bold text-[10px]">
                      MATCHMAKING ACTIVE
                    </span>
                  </div>
                  <Button
                    asChild
                    size="sm"
                    className="w-full rounded-lg text-xs font-bold bg-primary/10 text-primary border border-primary/20 hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                  >
                    <a href="#pricing">
                      Book This Session{" "}
                      <ChevronRight className="size-3.5 ml-1" />
                    </a>
                  </Button>
                </motion.div>
              </AnimatePresence>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
