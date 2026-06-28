import { motion } from "framer-motion";
import {
  Briefcase,
  ChevronRight,
  Target,
  Calendar,
  TrendingUp,
} from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { cn } from "@/lib/utils";

const ROOMS = [
  {
    country: "Kenya Access Room",
    code: "KE",
    flag: "🇰🇪",
    sectors: ["FMCG", "Agro", "Building"],
    partner: "East Africa Chamber",
    date: "15 July, 2026",
    slotsLeft: 4,
    totalSlots: 10,
    demand: "CRITICAL",
    growth: "+24.5%",
  },
  {
    country: "Netherlands Gateway",
    code: "NL",
    flag: "🇳🇱",
    sectors: ["Bio-Tech", "Agro Foods", "Medical"],
    partner: "Rotterdam Alliance",
    date: "22 July, 2026",
    slotsLeft: 1,
    totalSlots: 10,
    demand: "HIGH",
    growth: "+18.2%",
  },
  {
    country: "Ghana Expansion Room",
    code: "GH",
    flag: "🇬🇭",
    sectors: ["Infrastructure", "Agro", "Steel"],
    partner: "Accra Trade Authority",
    date: "28 July, 2026",
    slotsLeft: 6,
    totalSlots: 10,
    demand: "HIGH",
    growth: "+21.1%",
  },
  {
    country: "Singapore Tech Hub",
    code: "SG",
    flag: "🇸🇬",
    sectors: ["SaaS", "Fine Foods", "E-Commerce"],
    partner: "Enterprise Singapore",
    date: "05 Aug, 2026",
    slotsLeft: 9,
    totalSlots: 10,
    demand: "STEADY",
    growth: "+31.2%",
  },
];

const DEMAND_CONFIG = {
  CRITICAL: {
    label: "Critical Demand",
    badge: "bg-destructive/10 text-destructive border-destructive/20",
    bar: "bg-destructive",
  },
  HIGH: {
    label: "High Demand",
    badge: "bg-chart-4/10 text-chart-4 border-chart-4/20",
    bar: "bg-chart-4",
  },
  STEADY: {
    label: "Steady Demand",
    badge: "bg-primary/10 text-primary border-primary/20",
    bar: "bg-primary",
  },
};

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const card = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  },
};

export default function DealRooms() {
  return (
    <section className="bg-background py-16 md:py-24 relative border-b border-border/60 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_100%,hsl(var(--primary)/0.05),transparent)] pointer-events-none" />

      <div className="mx-auto max-w-[1280px] px-6 md:px-12 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/8 border border-primary/15 text-primary text-xs font-semibold uppercase tracking-wider mb-5">
            <Target className="size-3.5" /> Connect & Pitch Directly
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground tracking-tight leading-[1.1] mb-4">
            Active Global <span className="text-primary">Deal Rooms</span>
          </h2>
          <p className="text-muted-foreground text-base leading-relaxed">
            Pre-vetted country sessions matching exporters with verified
            distributors. Slots are strictly limited.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {ROOMS.map((room) => {
            const cfg =
              DEMAND_CONFIG[room.demand as keyof typeof DEMAND_CONFIG];
            const pct = (room.slotsLeft / room.totalSlots) * 100;
            const isCritical = room.slotsLeft <= 2;

            return (
              <motion.div key={room.country} variants={card}>
                <Card className="h-full flex flex-col rounded-2xl border-border/60 bg-card/60 backdrop-blur-sm hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300 group overflow-hidden">
                  <CardHeader className="p-5 pb-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl">{room.flag}</span>
                        <Badge
                          variant="outline"
                          className="font-mono text-[10px] font-bold border-border bg-muted/50"
                        >
                          {room.code}
                        </Badge>
                      </div>
                      <Badge
                        className={cn(
                          "font-mono text-[9px] tracking-wider uppercase border px-2 py-0.5",
                          cfg.badge,
                        )}
                      >
                        {room.demand}
                      </Badge>
                    </div>
                    <CardTitle className="text-[15px] font-bold text-foreground group-hover:text-primary transition-colors leading-snug">
                      {room.country}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="px-5 pb-5 pt-0 flex-1 space-y-4">
                    {/* Sectors */}
                    <div className="flex flex-wrap gap-1.5">
                      {room.sectors.map((sec) => (
                        <span
                          key={sec}
                          className="text-[10px] font-semibold bg-muted/60 border border-border/50 text-muted-foreground px-2 py-0.5 rounded-full"
                        >
                          {sec}
                        </span>
                      ))}
                    </div>

                    {/* Meta */}
                    <div className="space-y-2 text-xs text-muted-foreground border-t border-border/50 pt-3">
                      <div className="flex items-center gap-2">
                        <Briefcase className="size-3.5 shrink-0 text-muted-foreground/60" />
                        <span className="truncate">
                          Partner:{" "}
                          <strong className="text-foreground/80">
                            {room.partner}
                          </strong>
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="size-3.5 shrink-0 text-muted-foreground/60" />
                        <span>
                          Session:{" "}
                          <strong className="text-foreground/80">
                            {room.date}
                          </strong>
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <TrendingUp className="size-3.5 shrink-0 text-primary" />
                        <span>
                          Growth:{" "}
                          <strong className="text-primary">
                            {room.growth}
                          </strong>
                        </span>
                      </div>
                    </div>

                    {/* Slots */}
                    <div className="space-y-1.5">
                      <div className="flex justify-between text-[11px] font-mono">
                        <span className="text-muted-foreground">
                          Available Slots
                        </span>
                        <span
                          className={cn(
                            "font-bold",
                            isCritical ? "text-destructive" : "text-foreground",
                          )}
                        >
                          {room.slotsLeft}/{room.totalSlots} left
                        </span>
                      </div>
                      <div className="h-1.5 bg-muted/60 rounded-full overflow-hidden border border-border/40">
                        <div
                          className={cn(
                            "h-full rounded-full transition-all duration-700",
                            isCritical ? "bg-destructive" : "bg-primary",
                          )}
                          style={{ width: `${pct}%` }}
                        />
                      </div>
                    </div>
                  </CardContent>

                  <CardFooter className="p-5 pt-0">
                    <Button
                      asChild
                      className="w-full rounded-xl font-bold text-xs bg-muted/60 border border-border text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
                    >
                      <a href="#pricing">
                        Book Access <ChevronRight className="size-3.5 ml-1" />
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
