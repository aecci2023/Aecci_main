import { ShieldCheck, AlertTriangle, Radar, ShieldAlert } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const ACTIVE_MARKETS = [
  { name: "Kenya (Nairobi Hub)", code: "KE", tariff: "0% for Agro Imports", clearance: "Fast-track, 4m attestation" },
  { name: "Netherlands (Rotterdam)", code: "NL", tariff: "Preferential EU Rates", clearance: "Rotterdam customs pre-checked" },
  { name: "Singapore (Port Node)", code: "SG", tariff: "0% under CECA Agreement", clearance: "Instant SSL API verification" },
]

const EMERGING_MARKETS = [
  { name: "Ghana (Accra Node)", code: "GH", tariff: "5% Standard duties", clearance: "Awaiting local registry sync" },
  { name: "Mexico (Monterrey)", code: "MX", tariff: "Varies (Auto components)", clearance: "Monterrey logistics checks active" },
  { name: "Vietnam (Hanoi Port)", code: "VN", tariff: "FTA Pending Review", clearance: "Regional attestation pending" },
]

const HIGH_RISK_MARKETS = [
  { name: "Libya (Tripoli Node)", code: "LY", tariff: "Suspended Tariffs", clearance: "Customs processing block active" },
  { name: "Sudan (Port Sudan)", code: "SD", tariff: "Unstable duties", clearance: "Port clearance logs offline" },
  { name: "Syria (Latakia Port)", code: "SY", tariff: "Embargoed categories", clearance: "Attestation services frozen" },
]

export default function TradeRadar() {
  return (
    <section className="bg-background py-16 md:py-24 border-b border-border/60 relative">
      <div className="mx-auto max-w-[1280px] px-6 md:px-12 relative z-10 font-mono text-xs text-muted-foreground">
        
        <div className="text-center max-w-2xl mx-auto mb-16 font-sans">
          <Badge className="bg-primary/10 text-primary border-primary/20 mb-4 px-3 py-1 font-mono uppercase tracking-widest text-xs">
            Exclusive AECCI Feature
          </Badge>
          <h2 className="text-3xl md:text-5xl font-heading font-black text-foreground tracking-tight flex items-center justify-center gap-3">
            <Radar className="size-8 text-primary shrink-0 animate-[spin_8s_linear_infinite]" /> GLOBAL TRADE RADAR™
          </h2>
          <p className="text-muted-foreground mt-4 text-base leading-relaxed font-light">
            Actionable intelligence updates detailing tariff validations, custom clearing statuses, and regulatory risk ratings.
          </p>
        </div>

        {/* Radar Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Column 1: Active Markets (Green) */}
          <Card className="bg-card border-emerald-500/20 hover:border-emerald-500/50 transition-colors rounded-2xl p-6 flex flex-col justify-start relative shadow-sm">
            <div className="flex items-center justify-between pb-3 border-b border-border mb-4">
              <span className="text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1.5 uppercase tracking-wider text-[11px] font-sans">
                <ShieldCheck className="size-4 text-emerald-500" />
                Active Markets
              </span>
              <Badge className="bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 text-[9px] font-bold flex items-center gap-1.5 py-0.5 px-2">
                <span className="size-1.5 rounded-full bg-emerald-500" />
                LOW RISK
              </Badge>
            </div>
            
            <div className="space-y-4">
              {ACTIVE_MARKETS.map((c) => (
                <div key={c.name} className="p-3 rounded-xl bg-muted/20 border border-border/60 space-y-1 hover:border-emerald-500/40 transition-all duration-300">
                  <p className="font-bold text-foreground text-xs font-sans flex items-center gap-2">
                    <Badge variant="outline" className="font-mono text-[9px] font-bold px-1.5 py-0.5 border-primary/30 text-primary bg-primary/5 rounded shrink-0">
                      {c.code}
                    </Badge>
                    <span>{c.name}</span>
                  </p>
                  <p className="text-[10px] text-muted-foreground font-mono">Tariff: {c.tariff}</p>
                  <p className="text-[9px] text-muted-foreground/80 font-mono">Logistics: {c.clearance}</p>
                </div>
              ))}
            </div>
          </Card>

          {/* Column 2: Emerging Markets (Yellow) */}
          <Card className="bg-card border-amber-500/20 hover:border-amber-500/50 transition-colors rounded-2xl p-6 flex flex-col justify-start relative shadow-sm">
            <div className="flex items-center justify-between pb-3 border-b border-border mb-4">
              <span className="text-amber-600 dark:text-amber-400 font-bold flex items-center gap-1.5 uppercase tracking-wider text-[11px] font-sans">
                <AlertTriangle className="size-4 text-amber-500" />
                Emerging Markets
              </span>
              <Badge className="bg-amber-500/10 text-amber-650 dark:text-amber-400 border border-amber-500/20 text-[9px] font-bold flex items-center gap-1.5 py-0.5 px-2">
                <span className="size-1.5 rounded-full bg-amber-500" />
                MODERATE
              </Badge>
            </div>

            <div className="space-y-4">
              {EMERGING_MARKETS.map((c) => (
                <div key={c.name} className="p-3 rounded-xl bg-muted/20 border border-border/60 space-y-1 hover:border-amber-500/40 transition-all duration-300">
                  <p className="font-bold text-foreground text-xs font-sans flex items-center gap-2">
                    <Badge variant="outline" className="font-mono text-[9px] font-bold px-1.5 py-0.5 border-primary/30 text-primary bg-primary/5 rounded shrink-0">
                      {c.code}
                    </Badge>
                    <span>{c.name}</span>
                  </p>
                  <p className="text-[10px] text-muted-foreground font-mono">Tariff: {c.tariff}</p>
                  <p className="text-[9px] text-muted-foreground/80 font-mono">Logistics: {c.clearance}</p>
                </div>
              ))}
            </div>
          </Card>

          {/* Column 3: High-Risk Markets (Red) */}
          <Card className="bg-card border-red-500/20 hover:border-red-500/50 transition-colors rounded-2xl p-6 flex flex-col justify-start relative shadow-sm">
            <div className="flex items-center justify-between pb-3 border-b border-border mb-4">
              <span className="text-red-600 dark:text-red-400 font-bold flex items-center gap-1.5 uppercase tracking-wider text-[11px] font-sans">
                <ShieldAlert className="size-4 text-red-500" />
                High-Risk Zones
              </span>
              <Badge className="bg-red-500/10 text-red-650 dark:text-red-400 border border-red-500/20 text-[9px] font-bold flex items-center gap-1.5 py-0.5 px-2">
                <span className="size-1.5 rounded-full bg-red-500" />
                HIGH RISK
              </Badge>
            </div>

            <div className="space-y-4">
              {HIGH_RISK_MARKETS.map((c) => (
                <div key={c.name} className="p-3 rounded-xl bg-muted/20 border border-border/60 space-y-1 hover:border-red-500/40 transition-all duration-300">
                  <p className="font-bold text-foreground text-xs font-sans flex items-center gap-2">
                    <Badge variant="outline" className="font-mono text-[9px] font-bold px-1.5 py-0.5 border-primary/30 text-primary bg-primary/5 rounded shrink-0">
                      {c.code}
                    </Badge>
                    <span>{c.name}</span>
                  </p>
                  <p className="text-[10px] text-red-600 dark:text-red-400 font-mono font-bold">Status: {c.tariff}</p>
                  <p className="text-[9px] text-muted-foreground/80 font-mono">Logistics: {c.clearance}</p>
                </div>
              ))}
            </div>
          </Card>

        </div>
      </div>
    </section>
  )
}



