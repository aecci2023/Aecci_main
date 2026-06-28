import { motion } from "framer-motion";
import { ArrowRight, Globe, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const DEPARTURES = [
  { country: "KENYA", code: "NBO", status: "SESSION OPEN", variant: "success", sector: "FMCG • AGRO", slots: "4/10 Left", time: "11:30 GMT" },
  { country: "GHANA", code: "ACC", status: "SESSION OPEN", variant: "success", sector: "BUILDING MAT.", slots: "6/10 Left", time: "12:45 GMT" },
  { country: "NETHERLANDS", code: "AMS", status: "CLOSING SOON", variant: "warning", sector: "BIO-TECH • MED", slots: "1/10 Left", time: "15:00 GMT" },
  { country: "SINGAPORE", code: "SIN", status: "COMING SOON", variant: "info", sector: "FINTECH • TECH", slots: "10/10 Open", time: "16:30 GMT" },
  { country: "MEXICO", code: "MEX", status: "PREMIUM ACCESS", variant: "premium", sector: "AUTOMOTIVE", slots: "3/5 Left", time: "18:00 GMT" },
];

export default function LiveAccessWall() {
  return (
    <section className="bg-background py-16 md:py-24 border-y border-border/60 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(16,185,129,0.03),transparent_70%)] pointer-events-none" />

      <div className="mx-auto max-w-[1280px] px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-chart-4/10 border border-chart-4/20 text-chart-4 text-xs font-semibold uppercase tracking-wider mb-4">
              <span className="size-2 rounded-full bg-chart-4 animate-ping" />
              Live Deal Room Access
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground tracking-tight flex items-center gap-3">
              <Globe className="size-8 text-primary shrink-0" /> LIVE MARKET ACCESS WALL
            </h2>
            <p className="text-muted-foreground text-base md:text-lg mt-3 max-w-2xl leading-relaxed">
              Real-time schedule of active country deal rooms. Book your access slot immediately to pitch directly to verified global distributors and trade buyers.
            </p>
          </div>

          <Button asChild variant="outline" className="rounded-full border-border text-foreground hover:bg-muted shrink-0">
            <a href="#pricing">View All Access Slots <ArrowRight className="size-4 ml-2" /></a>
          </Button>
        </div>

        <div className="rounded-2xl border border-border bg-card p-6 shadow-md relative overflow-hidden">
          <div className="grid grid-cols-12 gap-4 text-muted-foreground text-[10px] font-bold uppercase tracking-widest pb-3 border-b border-border mb-4 font-mono hidden md:grid">
            <div className="col-span-3">Destination Country</div>
            <div className="col-span-1 text-center">Port Code</div>
            <div className="col-span-3">Focus Industry Sectors</div>
            <div className="col-span-2">Session Status</div>
            <div className="col-span-1 text-center">Remaining Slots</div>
            <div className="col-span-2 text-right">Action</div>
          </div>

          <div className="space-y-3 font-mono">
            {DEPARTURES.map((item, idx) => (
              <motion.div
                key={item.country}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="grid grid-cols-12 gap-4 items-center p-4 rounded-xl border border-border/50 bg-muted/20 hover:bg-muted/60 transition-all duration-300 group"
              >
                <div className="col-span-12 md:col-span-3 flex items-center gap-3">
                  <span className="text-foreground font-bold text-base md:text-lg tracking-wide group-hover:text-primary transition-colors">
                    {item.country}
                  </span>
                </div>

                <div className="col-span-4 md:col-span-1 text-muted-foreground font-bold md:text-center text-sm">
                  <Badge variant="outline" className="bg-background border-border font-bold text-foreground">
                    {item.code}
                  </Badge>
                </div>

                <div className="col-span-8 md:col-span-3 text-muted-foreground text-xs">{item.sector}</div>

                <div className="col-span-6 md:col-span-2">
                  {item.variant === "success" && (
                    <Badge className="bg-primary/10 text-primary border border-primary/20 font-bold text-[10px] tracking-wider py-1 px-2.5">
                      ● {item.status}
                    </Badge>
                  )}
                  {item.variant === "warning" && (
                    <Badge className="bg-chart-4/10 text-chart-4 border border-chart-4/20 font-bold text-[10px] tracking-wider py-1 px-2.5">
                      ▲ {item.status}
                    </Badge>
                  )}
                  {item.variant === "info" && (
                    <Badge className="bg-chart-2/10 text-chart-2 border border-chart-2/20 font-bold text-[10px] tracking-wider py-1 px-2.5">
                      ○ {item.status}
                    </Badge>
                  )}
                  {item.variant === "premium" && (
                    <Badge className="bg-chart-5/10 text-chart-5 border border-chart-5/20 font-bold text-[10px] tracking-wider py-1 px-2.5">
                      ✦ {item.status}
                    </Badge>
                  )}
                </div>

                <div className="col-span-6 md:col-span-1 md:text-center text-foreground font-semibold text-xs flex items-center gap-1.5 justify-end md:justify-center">
                  <Users className="size-3.5 text-muted-foreground md:hidden" />
                  {item.slots}
                </div>

                <div className="col-span-12 md:col-span-2 text-right">
                  <Button
                    asChild
                    size="sm"
                    className={cn(
                      "w-full rounded-lg font-bold transition-all text-xs",
                      item.variant === "success" || item.variant === "warning"
                        ? "bg-chart-4 text-foreground hover:bg-chart-4/90"
                        : "bg-muted text-foreground hover:bg-muted/80 border border-border",
                    )}
                  >
                    <a href="#pricing">{item.variant === "info" ? "Pre-Register" : "Book Slot"}</a>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
