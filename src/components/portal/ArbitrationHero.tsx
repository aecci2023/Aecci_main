import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Scale, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function ArbitrationHero() {
  return (
    <section
      id="arbitration-hero-banner"
      className="relative min-h-[420px] md:min-h-[540px] flex items-center justify-center overflow-hidden border-b border-border py-16 md:py-28"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=1600')",
      }}
    >
      {/* Layered overlays */}
      <div className="absolute inset-0 bg-foreground/82 z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,hsl(var(--primary)/0.12),transparent)] z-[1] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border)/4_1px,transparent_1px),linear-gradient(to_bottom,var(--border)/4_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-15 pointer-events-none z-[1]" />

      {/* Glow orbs */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-primary/15 rounded-full blur-3xl pointer-events-none z-[1]" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl pointer-events-none z-[1]" />

      <div className="relative z-20 mx-auto max-w-[900px] px-6 md:px-12 text-center flex flex-col items-center gap-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Badge className="bg-primary/20 text-primary-foreground border border-primary/35 text-xs font-bold px-4 py-1.5 rounded-full flex items-center gap-2 uppercase tracking-wide shadow-inner">
            <ShieldCheck className="size-4 text-primary animate-pulse" />
            ICCA Registered Directory
          </Badge>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-2"
        >
          <div className="inline-flex items-center gap-3 justify-center mb-4">
            <Scale className="size-8 text-primary opacity-80" />
          </div>
          <h2 className="font-black text-3xl sm:text-4xl md:text-5xl text-background leading-tight tracking-tight">
            AECCI–International
          </h2>
          <h2 className="font-black text-3xl sm:text-4xl md:text-5xl leading-tight tracking-tight">
            <span className="text-primary">Arbitration Centre</span>
            <span className="text-background/80"> (AECCI-IAC)</span>
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base md:text-lg text-background/65 leading-relaxed max-w-2xl font-light"
        >
          AECCI–IAC, Navi Mumbai has been included in the Arbitral Institutes
          Directory of the International Council for Commercial Arbitration
          (ICCA), reflecting its growing international recognition.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-3"
        >
          <Button
            asChild
            size="lg"
            className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-10 h-13 shadow-xl shadow-primary/25 transition-all duration-300 gap-2"
          >
            <a href="#arbitration">
              View Details <ArrowRight className="size-4" />
            </a>
          </Button>
          <Button
            asChild
            variant="ghost"
            size="lg"
            className="rounded-full text-background/70 hover:text-background hover:bg-background/10 border border-background/15 font-bold px-8 h-13 gap-2"
          >
            <a
              href="https://aecci.org.in/arbitration"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn More <ExternalLink className="size-4" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
