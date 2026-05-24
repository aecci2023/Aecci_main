import { Globe, Building, Users } from "@phosphor-icons/react"
import { Card } from "@/components/ui/card"
import { motion } from "framer-motion"

export default function Initiatives() {
  return (
    <section className="py-24 border-t border-border bg-card/10 overflow-hidden">
      <div className="mx-auto max-w-[1280px] px-6 md:px-12">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <span className="text-xs font-bold text-primary uppercase tracking-widest mb-3 block">Chamber Synergy</span>
          <h2 className="font-heading font-black text-3xl md:text-4xl text-foreground">Global Trade Initiatives</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-primary/60 mx-auto mt-4 rounded-full" />
          <p className="font-body text-sm md:text-base text-muted-foreground mt-4 max-w-2xl mx-auto">
            Our chamber continuously pioneers programs and trade agreements to lower international barriers for Asian exporters.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.2 }
            }
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <motion.div variants={{
            hidden: { opacity: 0, y: 20 },
            show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
          }}>
          <Card className="h-full border-border bg-card/85 backdrop-blur-md shadow-lg p-6 hover:-translate-y-1 transition-all duration-300 text-left">
            <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary border border-primary/20 mb-6">
              <Globe className="size-6 animate-pulse" />
            </div>
            <h3 className="font-heading font-black text-lg text-foreground mb-3">Global Exposure</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Opening exclusive channels to prestigious international trade summits, customs exhibitions, and trade forums for unmatched global visibility.
            </p>
          </Card>
          </motion.div>

          <motion.div variants={{
            hidden: { opacity: 0, y: 20 },
            show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
          }}>
          <Card className="h-full border-border bg-card/85 backdrop-blur-md shadow-lg p-6 hover:-translate-y-1 transition-all duration-300 text-left">
            <div className="flex size-12 items-center justify-center rounded-xl bg-primary/15 text-primary border border-primary/20 mb-6">
              <Building className="size-6" />
            </div>
            <h3 className="font-heading font-black text-lg text-foreground mb-3">Policy Advocacy</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Representing corporate exporter interests directly in regional trade policy negotiations with state governments and WTO regulatory bodies.
            </p>
          </Card>
          </motion.div>

          <motion.div variants={{
            hidden: { opacity: 0, y: 20 },
            show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
          }}>
          <Card className="h-full border-border bg-card/85 backdrop-blur-md shadow-lg p-6 hover:-translate-y-1 transition-all duration-300 text-left">
            <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary border border-primary/20 mb-6">
              <Users className="size-6" />
            </div>
            <h3 className="font-heading font-black text-lg text-foreground mb-3">Strategic Networking</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Creating high-value commercial alliances through our B2B Forum summits, verified buyer pipelines, and state delegations.
            </p>
          </Card>
          </motion.div>
        </motion.div>

      </div>
    </section>
  )
}
