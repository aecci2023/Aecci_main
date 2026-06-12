import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MapPin, Award, ShieldCheck, Mail, Globe } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

type Partner = {
  name: string
  location: string
  role: string
  certification: string
  contact: string
}

const REGIONS: Record<string, Partner[]> = {
  AFRICA: [
    { name: "Nairobi Trade Hub & Advisory", location: "Nairobi, Kenya", role: "East Africa Access Facilitator", certification: "Customs Pre-Verification Hub", contact: "nairobi-desk@aecci.org" },
    { name: "West Africa Chamber Syndicate", location: "Accra, Ghana", role: "Sovereign Trade Advisor", certification: "ECOWAS Trade Clearance Board", contact: "accra-desk@aecci.org" },
    { name: "Southern Africa Merchant Union", location: "Johannesburg, South Africa", role: "Industrial Market Advisor", certification: "SADC Advisory Council", contact: "joburg-desk@aecci.org" },
  ],
  EUROPE: [
    { name: "Rotterdam Trade & Logistics Syndicate", location: "Rotterdam, Netherlands", role: "EU Customs Port Authority Liaison", certification: "Schengen Tariff Gateway", contact: "rotterdam-desk@aecci.org" },
    { name: "Frankfurt Trade Match Alliance", location: "Frankfurt, Germany", role: "Bilateral Industrial Broker", certification: "EU Industry Validation Board", contact: "frankfurt-desk@aecci.org" },
    { name: "Baltic Exporter Hub", location: "Riga, Latvia", role: "Northern Europe Distribution Agent", certification: "Baltic Chamber Registry", contact: "riga-desk@aecci.org" },
  ],
  ASIA: [
    { name: "Enterprise Singapore Advisory Board", location: "Singapore Hub", role: "ASEAN Compliance Gateway", certification: "Singapore Fintech Registry", contact: "singapore-desk@aecci.org" },
    { name: "Tokyo Business Integration Council", location: "Tokyo, Japan", role: "Precision Engineering Matchmaker", certification: "METI Import Advisory Group", contact: "tokyo-desk@aecci.org" },
    { name: "GCC Trade Facilitation Desk", location: "Dubai, UAE", role: "Middle East Logistics Router", certification: "Dubai Chamber Partner", contact: "dubai-desk@aecci.org" },
  ],
  AMERICAS: [
    { name: "Mexico-India Commerce Association (MICA)", location: "Monterrey, Mexico", role: "Manufacturing Supply Matchmaker", certification: "USMCA Cross-Border Board", contact: "mexico-desk@aecci.org" },
    { name: "North America Deal Room Syndicate", location: "Chicago, USA", role: "FMCG Wholesale Broker", certification: "USDA Import Compliance Desk", contact: "chicago-desk@aecci.org" },
    { name: "Brazil Agro-Commerce Group", location: "São Paulo, Brazil", role: "Mercosur Market Advisory", certification: "Brazil Import Registry Authority", contact: "saopaulo-desk@aecci.org" },
  ],
}

export default function CollaborationNetwork() {
  const [activeRegion, setActiveRegion] = React.useState<string>("AFRICA")
  const currentPartners = REGIONS[activeRegion]

  return (
    <section className="bg-background py-16 md:py-24 relative border-b border-border/60">
      <div className="mx-auto max-w-[1280px] px-6 md:px-12 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Badge className="bg-primary/10 text-primary border-primary/20 mb-4 px-3 py-1 font-mono uppercase tracking-widest text-xs">
            Global Infrastructure
          </Badge>
          <h2 className="text-3xl md:text-5xl font-heading font-black text-foreground tracking-tight flex items-center justify-center gap-3">
            <Globe className="size-8 text-primary shrink-0" /> GLOBAL COLLABORATION NETWORK
          </h2>
          <p className="text-muted-foreground mt-4 text-base leading-relaxed font-light">
            We partner directly with leading sovereign trade authorities, ports, and chambers to validate markets and connect you with verified local buyers.
          </p>
        </div>

        {/* Region Tabs */}
        <div className="flex justify-center gap-2 mb-12 flex-wrap">
          {Object.keys(REGIONS).map((reg) => (
            <button
              key={reg}
              onClick={() => setActiveRegion(reg)}
              className={cn(
                "px-6 py-2 rounded-full border text-xs font-bold font-mono tracking-wider transition-all duration-200",
                activeRegion === reg
                  ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/20"
                  : "bg-muted border-border text-muted-foreground hover:text-foreground hover:border-border/80"
              )}
            >
              {reg}
            </button>
          ))}
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <AnimatePresence mode="wait">
            {currentPartners.map((part, idx) => (
              <motion.div
                key={part.name}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="rounded-2xl border border-border bg-card p-6 flex flex-col justify-between relative group hover:border-border/80 hover:bg-muted/20 transition-all duration-300 shadow-sm"
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="size-4 text-primary" />
                      <span className="text-[11px] font-bold font-mono uppercase tracking-wide">{part.location}</span>
                    </div>
                    <Badge variant="outline" className="bg-background border-border text-[9px] font-mono text-muted-foreground">
                      Verified Partner
                    </Badge>
                  </div>

                  <h4 className="text-base font-bold text-foreground group-hover:text-primary transition-colors">
                    {part.name}
                  </h4>

                  <div className="space-y-1.5 pt-3 border-t border-border/60 text-xs text-muted-foreground">
                    <p className="flex items-center gap-2">
                      <Award className="size-3.5 text-muted-foreground/85" />
                      <span>Role: <strong>{part.role}</strong></span>
                    </p>
                    <p className="flex items-center gap-2">
                      <ShieldCheck className="size-3.5 text-muted-foreground/85" />
                      <span>Auth: <strong>{part.certification}</strong></span>
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-between text-xs pt-3 border-t border-border/60 font-mono text-[10px]">
                  <span className="text-muted-foreground/80 flex items-center gap-1.5">
                    <Mail className="size-3 text-muted-foreground/50" />
                    {part.contact}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
