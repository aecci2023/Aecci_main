import { motion } from "framer-motion"
import { ArrowUpRight } from "@phosphor-icons/react"
import collaborationImg from "@/assets/networking/international-collaboration.png"
import calendarImg from "@/assets/networking/calendar-february.png"
import exhibitionsImg from "@/assets/networking/worldwide-exhibitions.png"

const networkingItems = [
  {
    id: "collaboration",
    title: "International Collaboration",
    desc: "Connect with our global network of collaborators across 35+ partner countries.",
    img: collaborationImg,
    href: "#",
    isClickable: true,
  },
  {
    id: "calendar",
    title: "Chamber Calendar",
    desc: "Key scheduled meetings, webinars, and trade event dates for February 2025.",
    img: calendarImg,
    href: "#",
    isClickable: false,
  },
  {
    id: "exhibitions",
    title: "Worldwide Exhibitions",
    desc: "Access the full schedule of worldwide exhibitions and trade expos for 2025-2026.",
    img: exhibitionsImg,
    href: "#",
    isClickable: true,
  },
] as const

export default function NetworkingSection() {
  return (
    <section id="networking-portals" className="py-20 bg-card/10 border-b border-border overflow-hidden">
      <div className="mx-auto max-w-[1280px] px-6 md:px-12">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold text-primary uppercase tracking-widest mb-3 block">
            AECCI CONNECT
          </span>
          <h2 className="font-heading font-black text-3xl md:text-4xl text-foreground">
            AECCI Networking
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-emerald-400 mx-auto mt-4 rounded-full" />
          <p className="font-body text-sm md:text-base text-muted-foreground mt-4 max-w-2xl mx-auto">
            Participate in global networking sessions, check upcoming exhibitions, and coordinate with partner organizations.
          </p>
        </div>

        {/* 3-Column Grid Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {networkingItems.map((item, idx) => {
            return (
              <motion.a
                key={item.id}
                href={item.isClickable ? item.href : undefined}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                onClick={(e) => {
                  if (!item.isClickable) {
                    e.preventDefault();
                  }
                }}
                className={`group relative rounded-3xl border border-border/80 bg-card overflow-hidden shadow-lg hover:shadow-2xl hover:border-primary/45 transition-all duration-300 flex flex-col justify-between ${
                  item.isClickable ? "cursor-pointer" : "cursor-default"
                }`}
              >
                {/* Image Container with square aspect ratio */}
                <div className="relative overflow-hidden aspect-square w-full bg-white flex items-center justify-center p-6 border-b border-border/40">
                  <img
                    src={item.img}
                    alt={item.title}
                    className={`w-full h-full object-contain transition-transform duration-700 ${
                      item.isClickable ? "group-hover:scale-[1.03]" : ""
                    }`}
                  />
                  
                  {/* Hover overlay for clickable items */}
                  {item.isClickable && (
                    <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="p-4 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 shadow-lg">
                        <ArrowUpRight className="size-6" />
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Caption Content */}
                <div className="p-6 flex flex-col text-left justify-between flex-1 bg-card">
                  <div>
                    <h3 className="font-heading font-black text-base text-foreground group-hover:text-primary transition-colors mb-2">
                      {item.title}
                    </h3>
                    <p className="font-body text-xs text-muted-foreground leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  
                  {item.isClickable && (
                    <div className="mt-4 flex items-center gap-1 text-primary text-xs font-bold font-heading uppercase tracking-wider group-hover:translate-x-1 transition-transform">
                      <span>Access Portal</span>
                      <ArrowUpRight className="size-3.5" />
                    </div>
                  )}
                </div>
              </motion.a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
