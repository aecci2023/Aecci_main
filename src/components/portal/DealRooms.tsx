import { Briefcase, ChevronRight, Target, Calendar } from "lucide-react"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const ROOMS = [
  {
    country: "Kenya Access Room",
    code: "KE",
    sectors: ["FMCG", "Agro", "Building Materials"],
    partner: "East Africa Chamber",
    date: "15 July, 2026",
    slotsLeft: 4,
    totalSlots: 10,
    demand: "CRITICAL",
    gradient: "from-amber-500/10 to-orange-500/10",
  },
  {
    country: "Netherlands Gateway",
    code: "NL",
    sectors: ["Bio-Tech", "Agro Foods", "Medical Goods"],
    partner: "Rotterdam Alliance",
    date: "22 July, 2026",
    slotsLeft: 1,
    totalSlots: 10,
    demand: "HIGH",
    gradient: "from-emerald-500/10 to-teal-500/10",
  },
  {
    country: "Ghana Expansion Room",
    code: "GH",
    sectors: ["Infrastructure", "Agro", "Steel & Cement"],
    partner: "Accra Trade Authority",
    date: "28 July, 2026",
    slotsLeft: 6,
    totalSlots: 10,
    demand: "HIGH",
    gradient: "from-sky-500/10 to-blue-500/10",
  },
  {
    country: "Singapore Tech Hub",
    code: "SG",
    sectors: ["SaaS & Tech", "Fine Foods", "E-Commerce"],
    partner: "Enterprise Singapore",
    date: "05 August, 2026",
    slotsLeft: 9,
    totalSlots: 10,
    demand: "STEADY",
    gradient: "from-purple-500/10 to-pink-500/10",
  },
]

export default function DealRooms() {
  return (
    <section className="bg-background py-16 md:py-24 relative border-b border-border/60">
      <div className="mx-auto max-w-[1280px] px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Badge className="bg-primary/10 text-primary border-primary/20 mb-4 px-3 py-1 font-mono uppercase tracking-widest text-xs">
            Connect & Pitch Directly
          </Badge>
          <h2 className="text-3xl md:text-5xl font-heading font-black text-foreground tracking-tight flex items-center justify-center gap-3">
            <Target className="size-8 text-primary shrink-0" /> ACTIVE GLOBAL DEAL ROOMS
          </h2>
          <p className="text-muted-foreground mt-4 text-base leading-relaxed font-light">
            Pre-vetted country access sessions matching Indian exporters with verified distributors and trade advisors. Slots are strictly limited.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ROOMS.map((room) => {
            const slotsPercentage = (room.slotsLeft / room.totalSlots) * 100
            const isCritical = room.slotsLeft <= 2
            
            return (
              <Card
                key={room.country}
                className="bg-card border-border hover:border-border/80 transition-all duration-300 rounded-2xl flex flex-col justify-between overflow-hidden relative group hover:-translate-y-1 shadow-sm"
              >
                {/* Visual gradient backdrop */}
                <div className={`absolute inset-0 bg-gradient-to-br ${room.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

                <CardHeader className="p-6 pb-4 relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="outline" className="font-mono text-[10px] font-bold px-1.5 py-0.5 border-primary/30 text-primary bg-primary/5 rounded">
                      {room.code}
                    </Badge>
                    <Badge className={cn(
                      "font-mono text-[9px] tracking-wider uppercase border border-none px-2 py-0.5",
                      room.demand === "CRITICAL"
                        ? "bg-red-500/15 text-red-650 dark:text-red-400"
                        : room.demand === "HIGH"
                        ? "bg-amber-500/15 text-amber-650 dark:text-amber-400"
                        : "bg-emerald-500/15 text-emerald-650 dark:text-emerald-400"
                    )}>
                      {room.demand} Demand
                    </Badge>
                  </div>
                  <CardTitle className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                    {room.country}
                  </CardTitle>
                </CardHeader>

                <CardContent className="px-6 pb-6 pt-0 space-y-4 relative z-10 flex-1">
                  {/* Sectors */}
                  <div className="flex flex-wrap gap-1.5">
                    {room.sectors.map((sec) => (
                      <span
                        key={sec}
                        className="text-[10px] font-bold bg-muted border border-border/40 text-foreground/80 px-2.5 py-0.5 rounded-full"
                      >
                        {sec}
                      </span>
                    ))}
                  </div>

                  {/* Details */}
                  <div className="space-y-2.5 text-xs text-muted-foreground pt-2 border-t border-border/60">
                    <div className="flex items-center gap-2">
                      <Briefcase className="size-3.5 text-muted-foreground/80" />
                      <span>Partner: <strong>{room.partner}</strong></span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="size-3.5 text-muted-foreground/80" />
                      <span>Session: <strong>{room.date}</strong></span>
                    </div>
                  </div>

                  {/* Progress Indicator for slots */}
                  <div className="space-y-1.5 pt-2">
                    <div className="flex items-center justify-between text-[11px] font-mono">
                      <span className="text-muted-foreground">Available Slots:</span>
                      <span className={cn(
                        "font-bold",
                        isCritical ? "text-red-600 dark:text-red-400" : "text-foreground"
                      )}>
                        {room.slotsLeft}/{room.totalSlots} left
                      </span>
                    </div>
                    <div className="h-1.5 bg-muted border border-border/40 rounded-full overflow-hidden">
                      <div
                        className={cn(
                          "h-full rounded-full transition-all duration-500",
                          isCritical ? "bg-red-500" : "bg-primary"
                        )}
                        style={{ width: `${slotsPercentage}%` }}
                      />
                    </div>
                  </div>
                </CardContent>

                <CardFooter className="p-6 pt-0 relative z-10">
                  <Button asChild className="w-full rounded-xl bg-muted border border-border text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary font-bold transition-all duration-300">
                    <a href="#pricing">
                      Book Access <ChevronRight className="size-4 ml-1.5" />
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}


