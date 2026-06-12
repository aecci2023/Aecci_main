import * as React from "react"
import { motion } from "framer-motion"
import { Globe, ShieldCheck, UserPlus, Send, Settings, Award, Compass } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const STEPS = [
  {
    step: "01",
    title: "Country Selection",
    desc: "Exporters select target country corridors from the Global Command Center based on active buyer demands and sector trends.",
    icon: Globe,
    color: "text-amber-600 dark:text-amber-400 bg-amber-500/10 border-amber-500/25",
  },
  {
    step: "02",
    title: "Market Validation",
    desc: "AECCI analysts and tariff databases validate compliance rules, product certifications, and import duty structures.",
    icon: ShieldCheck,
    color: "text-emerald-650 dark:text-emerald-400 bg-emerald-500/10 border-emerald-500/25",
  },
  {
    step: "03",
    title: "Partner Discovery",
    desc: "Exporters match with local country access partners and Chamber advisors who represent vetted buying houses.",
    icon: UserPlus,
    color: "text-sky-600 dark:text-sky-400 bg-sky-500/10 border-sky-500/25",
  },
  {
    step: "04",
    title: "Business Intro",
    desc: "Exporters enter the dedicated digital Deal Room, delivering direct pitches to active buyers and signing initial MoUs.",
    icon: Send,
    color: "text-purple-600 dark:text-purple-400 bg-purple-500/10 border-purple-500/25",
  },
  {
    step: "05",
    title: "Expansion Support",
    desc: "Ongoing logistics guidance, digital document attestation (e-CO), and trade visa support from the central desk.",
    icon: Settings,
    color: "text-pink-600 dark:text-pink-400 bg-pink-500/10 border-pink-500/25",
  },
  {
    step: "06",
    title: "Global Growth",
    desc: "Consignment dispatch, custom clearance fast-tracking, and scale into adjacent regional markets.",
    icon: Award,
    color: "text-primary bg-primary/10 border-primary/25",
  },
]

export default function ExpansionPathway() {
  return (
    <section className="bg-background py-16 md:py-24 relative border-b border-border/60">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(16,185,129,0.02),transparent_70%)] pointer-events-none" />
      
      <div className="mx-auto max-w-[1280px] px-6 md:px-12 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Badge className="bg-primary/10 text-primary border-primary/20 mb-4 px-3 py-1 font-mono uppercase tracking-widest text-xs">
            Visual Exporter Journey
          </Badge>
          <h2 className="text-3xl md:text-5xl font-heading font-black text-foreground tracking-tight flex items-center justify-center gap-3">
            <Compass className="size-8 text-primary shrink-0" /> GLOBAL EXPANSION PATHWAY
          </h2>
          <p className="text-muted-foreground mt-4 text-base leading-relaxed font-light">
            Understand the structured path of launching your products overseas with verified matching, legal clearing, and logistical scale.
          </p>
        </div>

        {/* Funnel Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 relative">
          
          {STEPS.map((item, idx) => {
            const Icon = item.icon
            return (
              <React.Fragment key={item.step}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="rounded-2xl border border-border/40 bg-card p-5 hover:border-border hover:bg-muted/30 transition-all duration-300 flex flex-col justify-start relative group"
                >
                  {/* Step Bubble */}
                  <div className={`size-11 rounded-xl border flex items-center justify-center mb-5 ${item.color} group-hover:scale-105 transition-transform`}>
                    <Icon className="size-5" />
                  </div>
                  
                  {/* Step Index Label */}
                  <span className="text-[10px] font-mono font-bold text-muted-foreground tracking-widest uppercase">
                    Stage {item.step}
                  </span>
                  
                  {/* Title */}
                  <h4 className="text-base font-bold text-foreground mt-1.5 mb-3">
                    {item.title}
                  </h4>
                  
                  {/* Description */}
                  <p className="text-muted-foreground text-xs leading-relaxed font-sans font-light">
                    {item.desc}
                  </p>
                </motion.div>
              </React.Fragment>
            )
          })}
        </div>

      </div>
    </section>
  )
}
