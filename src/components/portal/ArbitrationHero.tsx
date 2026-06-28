import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck } from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function ArbitrationHero() {
  return (
    <section
      id="arbitration-hero-banner"
      className="relative min-h-[400px] md:min-h-[520px] flex items-center justify-center overflow-hidden bg-cover bg-center py-14 md:py-28 border-b border-border"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=1600')" }}
    >
      <div className="absolute inset-0 bg-foreground/80 mix-blend-multiply z-0" />

      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-3xl pointer-events-none z-10" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-3xl pointer-events-none z-10" />

      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border)/5_1px,transparent_1px),linear-gradient(to_bottom,var(--border)/5_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20 pointer-events-none z-10" />

      <div className="relative z-20 mx-auto max-w-[900px] px-6 md:px-12 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-4 md:mb-8"
        >
          <Badge className="bg-primary/20 hover:bg-primary/30 text-primary-foreground text-xs font-bold px-4 py-1.5 rounded-full border border-primary/30 tracking-wide uppercase shadow-inner flex items-center gap-2">
            <ShieldCheck className="size-4 text-primary animate-pulse" />
            <span>ICCA Registered Directory</span>
          </Badge>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-bold text-3xl sm:text-4xl md:text-5xl text-background leading-tight tracking-tight mb-4 md:mb-6"
        >
          AECCI–International <br />
          <span className="text-primary">Arbitration Centre (AECCI-IAC)</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base md:text-lg text-background/70 leading-relaxed mb-6 md:mb-10 max-w-3xl font-light"
        >
          AECCI–International Arbitration Centre (AECCI-IAC), Navi Mumbai has been included in the Arbitral Institutes Directory of the International Council for Commercial Arbitration (ICCA), reflecting its growing international recognition.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Button
            asChild
            size="lg"
            className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-extrabold px-10 h-14 shadow-lg shadow-primary/25 transition-all duration-300"
          >
            <a href="#arbitration">
              <span>View Details</span>
              <ArrowRight className="size-4 ml-1.5" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
