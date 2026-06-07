import { motion } from "framer-motion"
import { DownloadSimple } from "@phosphor-icons/react"
import advertiseImg from "@/assets/banners/advertise-with-us.png"

export default function PromoRow() {
  return (
    <section id="promo-banners" className="py-10 md:py-16 bg-background border-b border-border overflow-hidden">
      <div className="mx-auto max-w-[1280px] px-6 md:px-12 flex justify-center">
        <div className="max-w-xl w-full">
          
          {/* Column 1: Advertise With Us banner & Media Kit button */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center gap-6"
          >
            <div className="w-full rounded-2xl overflow-hidden border border-border/80 shadow-md hover:shadow-xl hover:border-primary/45 transition-all duration-300 group cursor-pointer bg-primary">
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

        </div>
      </div>
    </section>
  )
}
