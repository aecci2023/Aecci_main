import { motion } from "framer-motion"
import { ArrowUpRight, DownloadSimple } from "@phosphor-icons/react"
import advertiseImg from "@/assets/banners/advertise-with-us.png"
import viewpointImg from "@/assets/banners/aecci-viewpoint.png"

export default function PromoRow() {
  return (
    <section id="promo-banners" className="py-16 bg-background border-b border-border overflow-hidden">
      <div className="mx-auto max-w-[1280px] px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
          
          {/* Column 1: Advertise With Us banner & Media Kit button */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center gap-6"
          >
            <div className="w-full rounded-2xl overflow-hidden border border-border/80 shadow-md hover:shadow-xl hover:border-primary/45 transition-all duration-300 group cursor-pointer bg-[#00703C]">
              <img 
                src={advertiseImg} 
                alt="Advertise With Us" 
                className="w-full h-auto object-cover transition-transform duration-750 group-hover:scale-[1.01]"
              />
            </div>
            <a 
              href="#" 
              className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/95 text-primary-foreground text-xs font-extrabold px-8 h-12 rounded-xl transition-all shadow-md shadow-primary/10 active:scale-98 cursor-pointer w-full sm:w-auto"
            >
              <DownloadSimple className="size-4" />
              <span>Media Kit</span>
            </a>
          </motion.div>

          {/* Column 2: AECCI Viewpoint banner & Join Us button */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col items-center gap-6"
          >
            <div className="w-full rounded-2xl overflow-hidden border border-border/80 shadow-md hover:shadow-xl hover:border-primary/45 transition-all duration-300 group cursor-pointer bg-[#00703C]">
              <img 
                src={viewpointImg} 
                alt="AECCI Viewpoint" 
                className="w-full h-auto object-cover transition-transform duration-750 group-hover:scale-[1.01]"
              />
            </div>
            <a 
              href="#" 
              className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/95 text-primary-foreground text-xs font-extrabold px-8 h-12 rounded-xl transition-all shadow-md shadow-primary/10 active:scale-98 cursor-pointer w-full sm:w-auto"
            >
              <span>Join us!</span>
              <ArrowUpRight className="size-4" />
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
