import { motion } from "framer-motion"
import { ArrowRight, Globe, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

const DEPARTURES = [
  { country: "KENYA", code: "NBO", status: "SESSION OPEN", variant: "success", sector: "FMCG • AGRO", slots: "4/10 Left", time: "11:30 GMT" },
  { country: "GHANA", code: "ACC", status: "SESSION OPEN", variant: "success", sector: "BUILDING MAT.", slots: "6/10 Left", time: "12:45 GMT" },
  { country: "NETHERLANDS", code: "AMS", status: "CLOSING SOON", variant: "warning", sector: "BIO-TECH • MED", slots: "1/10 Left", time: "15:00 GMT" },
  { country: "SINGAPORE", code: "SIN", status: "COMING SOON", variant: "info", sector: "FINTECH • TECH", slots: "10/10 Open", time: "16:30 GMT" },
  { country: "MEXICO", code: "MEX", status: "PREMIUM ACCESS", variant: "premium", sector: "AUTOMOTIVE", slots: "3/5 Left", time: "18:00 GMT" },
]

export default function LiveAccessWall() {
  return (
    <section className="bg-background py-16 md:py-24 border-y border-border/60 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(16,185,129,0.03),transparent_70%)] pointer-events-none" />
      
      <div className="mx-auto max-w-[1280px] px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 dark:text-amber-400 text-xs font-semibold uppercase tracking-wider mb-4">
              <span className="size-2 rounded-full bg-amber-550 dark:bg-amber-400 animate-ping" />
              Live Deal Room Access
            </div>
            <h2 className="text-3xl md:text-5xl font-heading font-black text-foreground tracking-tight flex items-center gap-3">
              <Globe className="size-8 text-primary shrink-0" /> LIVE MARKET ACCESS WALL
            </h2>
            <p className="text-muted-foreground text-base md:text-lg mt-3 max-w-2xl leading-relaxed">
              Real-time schedule of active country deal rooms. Book your access slot immediately to pitch directly to verified global distributors and trade buyers.
            </p>
          </div>
          
          <Button asChild variant="outline" className="rounded-full border-border text-foreground hover:bg-muted shrink-0">
            <a href="#pricing">
              View All Access Slots <ArrowRight className="size-4 ml-2" />
            </a>
          </Button>
        </div>

        {/* Airport Departure Board Panel */}
        <div className="rounded-2xl border border-border bg-card p-6 shadow-md relative overflow-hidden">
          {/* Top Board Frame Header */}
          <div className="grid grid-cols-12 gap-4 text-muted-foreground text-[10px] font-bold uppercase tracking-widest pb-3 border-b border-border mb-4 font-mono hidden md:grid">
            <div className="col-span-3">Destination Country</div>
            <div className="col-span-1 text-center">Port Code</div>
            <div className="col-span-3">Focus Industry Sectors</div>
            <div className="col-span-2">Session Status</div>
            <div className="col-span-1 text-center">Remaining Slots</div>
            <div className="col-span-2 text-right">Action</div>
          </div>

          {/* Departure Rows */}
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
                {/* Destination Country */}
                <div className="col-span-12 md:col-span-3 flex items-center gap-3">
                  <span className="text-foreground font-bold text-base md:text-lg tracking-wide group-hover:text-primary transition-colors">
                    {item.country}
                  </span>
                </div>

                {/* Port Code */}
                <div className="col-span-4 md:col-span-1 text-muted-foreground font-bold md:text-center text-sm">
                  <Badge variant="outline" className="bg-background border-border font-bold text-foreground">
                    {item.code}
                  </Badge>
                </div>

                {/* Focus Industry Sectors */}
                <div className="col-span-8 md:col-span-3 text-muted-foreground text-xs">
                  {item.sector}
                </div>

                {/* Session Status */}
                <div className="col-span-6 md:col-span-2">
                  {item.variant === "success" && (
                    <Badge className="bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 font-bold text-[10px] tracking-wider py-1 px-2.5">
                      ● {item.status}
                    </Badge>
                  )}
                  {item.variant === "warning" && (
                    <Badge className="bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 font-bold text-[10px] tracking-wider py-1 px-2.5">
                      ▲ {item.status}
                    </Badge>
                  )}
                  {item.variant === "info" && (
                    <Badge className="bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/20 font-bold text-[10px] tracking-wider py-1 px-2.5">
                      ○ {item.status}
                    </Badge>
                  )}
                  {item.variant === "premium" && (
                    <Badge className="bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20 font-bold text-[10px] tracking-wider py-1 px-2.5">
                      ✦ {item.status}
                    </Badge>
                  )}
                </div>

                {/* Remaining Slots */}
                <div className="col-span-6 md:col-span-1 md:text-center text-foreground font-semibold text-xs flex items-center gap-1.5 justify-end md:justify-center">
                  <Users className="size-3.5 text-muted-foreground md:hidden" />
                  {item.slots}
                </div>

                {/* Action button */}
                <div className="col-span-12 md:col-span-2 text-right">
                  <Button
                    asChild
                    size="sm"
                    className={cn(
                      "w-full rounded-lg font-sans font-bold transition-all text-xs",
                      item.variant === "success" || item.variant === "warning"
                        ? "bg-amber-400 text-slate-950 hover:bg-amber-300 hover:text-slate-950"
                        : "bg-muted text-foreground hover:bg-muted/80 border border-border"
                    )}
                  >
                    <a href="#pricing">
                      {item.variant === "info" ? "Pre-Register" : "Book Slot"}
                    </a>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}


