import { motion } from "framer-motion"
import { ArrowUpRight } from "@phosphor-icons/react"
import { Card } from "@/components/ui/card"
import golfImg from "@/assets/chamber-dynamics/golf-tournament.png"
import excellenceImg from "@/assets/chamber-dynamics/business-excellence.png"
import womenImg from "@/assets/chamber-dynamics/women-empowerment.png"

const initiatives = [
  {
    id: "golf",
    title: "AECCI Golf Tournament",
    date: "September 2025",
    img: golfImg,
  },
  {
    id: "excellence",
    title: "Business Excellence Award",
    date: "October 2025",
    img: excellenceImg,
  },
  {
    id: "women-empowerment",
    title: "Women Empowerment Summit",
    date: "February 2025",
    img: womenImg,
  },
] as const

export default function ChamberDynamics() {
  return (
    <section id="dynamics" className="py-10 md:py-20 bg-background border-b border-border overflow-hidden">
      <div className="mx-auto max-w-[1280px] px-6 md:px-12">
        
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-16">
          <span className="text-xs font-bold text-primary uppercase tracking-widest mb-3 block">
            AECCI INITIATIVES
          </span>
          <h2 className="font-heading font-black text-3xl md:text-4xl text-foreground">
            Chamber Dynamics
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-emerald-400 mx-auto mt-4 rounded-full" />
          <p className="font-body text-sm md:text-base text-muted-foreground mt-4 max-w-2xl mx-auto">
            Over the years, AECCI has established a number of successful initiatives.
          </p>
        </div>

        {/* Grid Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {initiatives.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col cursor-pointer group"
            >
              <Card className="relative overflow-hidden shadow-lg hover:shadow-2xl hover:border-primary/45 transition-all duration-300 flex flex-col flex-1 h-full rounded-2xl">
                {/* Image Banner Container */}
                <div className="relative overflow-hidden aspect-[2.7/1] w-full bg-muted border-b border-border/40">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Hover overlay with detail icon */}
                  <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="p-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <ArrowUpRight className="size-5" />
                    </div>
                  </div>
                </div>
                
                {/* Caption and title */}
                <div className="p-5 flex flex-col text-left flex-1 justify-between bg-card/50">
                  <div>
                    <span className="text-[10px] font-bold text-primary uppercase tracking-wider">
                      {item.date}
                    </span>
                    <h3 className="font-heading font-black text-sm text-foreground mt-1 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
