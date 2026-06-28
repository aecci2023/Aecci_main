import { motion } from "framer-motion";
import { DownloadSimple } from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";
import { Megaphone } from "lucide-react";
import advertiseImg from "@/assets/banners/advertise-with-us.png";

export default function PromoRow() {
  return (
    <section
      id="promo-banners"
      className="py-14 md:py-20 bg-background border-b border-border overflow-hidden relative"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,hsl(var(--primary)/0.04),transparent)] pointer-events-none" />

      <div className="mx-auto max-w-[1280px] px-6 md:px-12 relative z-10">
        <div className="text-center max-w-xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/8 border border-primary/15 text-primary text-xs font-semibold uppercase tracking-wider mb-4">
            <Megaphone className="size-3.5" /> Media & Advertising
          </div>
          <h2 className="text-2xl md:text-3xl font-black text-foreground tracking-tight mb-3">
            Advertise With <span className="text-primary">AECCI</span>
          </h2>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Reach 10,000+ verified exporters, importers, and trade advisors
            through AECCI's digital and print channels.
          </p>
        </div>

        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-2xl space-y-5"
          >
            <div className="w-full rounded-2xl overflow-hidden border border-border/60 shadow-lg hover:shadow-xl hover:border-primary/30 transition-all duration-300 group cursor-pointer bg-primary">
              <img
                src={advertiseImg}
                alt="Advertise With Us"
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.01]"
              />
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button
                asChild
                className="w-full sm:w-auto font-bold px-8 h-12 rounded-xl gap-2 shadow-md shadow-primary/10 hover:shadow-lg hover:shadow-primary/15 transition-all duration-300"
              >
                <a href="#">
                  <DownloadSimple className="size-4" />
                  Download Media Kit
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="w-full sm:w-auto font-bold px-8 h-12 rounded-xl gap-2 border-border hover:bg-primary/5 hover:border-primary/30 hover:text-primary transition-all duration-300"
              >
                <a href="mailto:media@aecci.org.in">Contact Media Desk</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
