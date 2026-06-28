import { motion } from "framer-motion";
import { ArrowRight, Users, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const DEPARTURES = [
  { country: "Kenya", code: "NBO", status: "SESSION OPEN", variant: "success", sector: "FMCG • Agro-Processing", slots: "4/10", time: "11:30 GMT" },
  { country: "Ghana", code: "ACC", status: "SESSION OPEN", variant: "success", sector: "Building Materials", slots: "6/10", time: "12:45 GMT" },
  { country: "Netherlands", code: "AMS", status: "CLOSING SOON", variant: "warning", sector: "Bio-Tech • Medical", slots: "1/10", time: "15:00 GMT" },
  { country: "Singapore", code: "SIN", status: "COMING SOON", variant: "info", sector: "Fintech • SaaS", slots: "10/10", time: "16:30 GMT" },
  { country: "Mexico", code: "MEX", status: "PREMIUM ACCESS", variant: "premium", sector: "Automotive Parts", slots: "3/5", time: "18:00 GMT" },
];

const STATUS_CONFIG = {
  success: { dot: "bg-primary", badge: "bg-primary/10 text-primary border-primary/20", ping: true },
  warning: { dot: "bg-chart-4", badge: "bg-chart-4/10 text-chart-4 border-chart-4/20", ping: true },
  info: { dot: "bg-chart-2", badge: "bg-chart-2/10 text-chart-2 border-chart-2/20", ping: false },
  premium: { dot: "bg-chart-5", badge: "bg-chart-5/10 text-chart-5 border-chart-5/20", ping: false },
};

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const row = {
  hidden: { opacity: 0, x: -16 },
  show: { opacity: 1, x: 0, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

export default function LiveAccessWall() {
  return (
    <section className="bg-background py-16 md:py-24 border-y border-border/60 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_40%_at_50%_-20%,hsl(var(--primary)/0.06),transparent)] pointer-events-none" />

      <div className="mx-auto max-w-[1280px] px-6 md:px-12 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/8 border border-primary/15 text-primary text-xs font-semibold uppercase tracking-wider">
              <span className="relative flex size-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full size-2 bg-primary" />
              </span>
              Live Deal Room Access
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground tracking-tight leading-[1.1]">
              Live Market{" "}
              <span className="text-primary">Access Wall</span>
            </h2>
            <p className="text-muted-foreground text-base md:text-lg max-w-xl leading-relaxed">
              Real-time schedule of active country deal rooms. Book your access slot to pitch directly to verified global distributors.
            </p>
          </div>
          <Button asChild variant="outline" className="rounded-full border-border shrink-0 gap-2 hover:bg-primary/5 hover:border-primary/30 hover:text-primary transition-all">
            <a href="#pricing">View All Slots <ArrowRight className="size-4" /></a>
          </Button>
        </div>

        {/* Table Card */}
        <Card className="border-border/60 rounded-2xl overflow-hidden shadow-md bg-card/50 backdrop-blur-sm">
          {/* Column Headers */}
          <div className="hidden md:grid grid-cols-12 gap-4 px-6 py-3 bg-muted/40 border-b border-border/60 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
            <div className="col-span-3">Destination</div>
            <div className="col-span-1 text-center">Code</div>
            <div className="col-span-3">Industry Sectors</div>
            <div className="col-span-2">Status</div>
            <div className="col-span-1 text-center">Slots</div>
            <div className="col-span-1 text-center">Time</div>
            <div className="col-span-1 text-right">Action</div>
          </div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="divide-y divide-border/40"
          >
            {DEPARTURES.map((item) => {
              const cfg = STATUS_CONFIG[item.variant as keyof typeof STATUS_CONFIG];
              const canBook = item.variant === "success" || item.variant === "warning";
              return (
                <motion.div
                  key={item.country}
                  variants={row}
                  className="grid grid-cols-12 gap-4 items-center px-6 py-4 hover:bg-muted/30 transition-colors duration-200 group"
                >
                  {/* Country */}
                  <div className="col-span-12 md:col-span-3 flex items-center gap-3">
                    <div className={cn("size-2 rounded-full shrink-0", cfg.dot, cfg.ping && "animate-pulse")} />
                    <span className="font-bold text-base text-foreground group-hover:text-primary transition-colors">{item.country}</span>
                  </div>

                  {/* Code */}
                  <div className="col-span-3 md:col-span-1 md:text-center">
                    <Badge variant="outline" className="font-mono text-[10px] font-bold border-border bg-muted/50">{item.code}</Badge>
                  </div>

                  {/* Sector */}
                  <div className="col-span-9 md:col-span-3 text-xs text-muted-foreground">{item.sector}</div>

                  {/* Status */}
                  <div className="col-span-6 md:col-span-2">
                    <Badge className={cn("font-bold text-[10px] tracking-wider border px-2.5 py-1", cfg.badge)}>
                      {item.status}
                    </Badge>
                  </div>

                  {/* Slots */}
                  <div className="col-span-3 md:col-span-1 md:text-center flex items-center gap-1.5 text-xs font-semibold text-foreground">
                    <Users className="size-3 text-muted-foreground md:hidden" />
                    {item.slots}
                  </div>

                  {/* Time */}
                  <div className="col-span-3 md:col-span-1 text-center hidden md:flex items-center justify-center gap-1 text-xs text-muted-foreground">
                    <Clock className="size-3" />{item.time}
                  </div>

                  {/* CTA */}
                  <div className="col-span-12 md:col-span-1 md:text-right">
                    <Button
                      asChild
                      size="sm"
                      className={cn(
                        "w-full md:w-auto rounded-lg font-bold text-xs transition-all",
                        canBook
                          ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm shadow-primary/20"
                          : "bg-muted text-foreground hover:bg-muted/80 border border-border",
                      )}
                    >
                      <a href="#pricing">{item.variant === "info" ? "Pre-Register" : "Book Slot"}</a>
                    </Button>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </Card>
      </div>
    </section>
  );
}
