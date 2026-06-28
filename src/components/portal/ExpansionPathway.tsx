import { motion } from "framer-motion";
import { Globe, ShieldCheck, UserPlus, Send, Settings, Award, Compass, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const STEPS = [
  {
    step: "01",
    title: "Country Selection",
    desc: "Select target country corridors from the Global Command Center based on active buyer demands and sector trends.",
    icon: Globe,
    accent: "text-chart-4",
    bg: "bg-chart-4/10 border-chart-4/20",
    glow: "group-hover:shadow-chart-4/15",
  },
  {
    step: "02",
    title: "Market Validation",
    desc: "AECCI analysts validate compliance rules, product certifications, and import duty structures via tariff databases.",
    icon: ShieldCheck,
    accent: "text-primary",
    bg: "bg-primary/10 border-primary/20",
    glow: "group-hover:shadow-primary/15",
  },
  {
    step: "03",
    title: "Partner Discovery",
    desc: "Match with local country access partners and Chamber advisors who represent vetted buying houses.",
    icon: UserPlus,
    accent: "text-chart-2",
    bg: "bg-chart-2/10 border-chart-2/20",
    glow: "group-hover:shadow-chart-2/15",
  },
  {
    step: "04",
    title: "Business Intro",
    desc: "Enter the dedicated digital Deal Room, delivering direct pitches to active buyers and signing initial MoUs.",
    icon: Send,
    accent: "text-chart-5",
    bg: "bg-chart-5/10 border-chart-5/20",
    glow: "group-hover:shadow-chart-5/15",
  },
  {
    step: "05",
    title: "Expansion Support",
    desc: "Ongoing logistics guidance, digital document attestation (e-CO), and trade visa support from the central desk.",
    icon: Settings,
    accent: "text-chart-3",
    bg: "bg-chart-3/10 border-chart-3/20",
    glow: "group-hover:shadow-chart-3/15",
  },
  {
    step: "06",
    title: "Global Growth",
    desc: "Consignment dispatch, custom clearance fast-tracking, and scale into adjacent regional markets.",
    icon: Award,
    accent: "text-primary",
    bg: "bg-primary/10 border-primary/20",
    glow: "group-hover:shadow-primary/15",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.09 } },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

export default function ExpansionPathway() {
  return (
    <section className="bg-background py-16 md:py-24 relative border-b border-border/60 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_20%_80%,hsl(var(--primary)/0.04),transparent)] pointer-events-none" />

      <div className="mx-auto max-w-[1280px] px-6 md:px-12 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/8 border border-primary/15 text-primary text-xs font-semibold uppercase tracking-wider mb-5">
            <Compass className="size-3.5" /> Visual Exporter Journey
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground tracking-tight leading-[1.1] mb-4">
            Global Expansion{" "}
            <span className="text-primary">Pathway</span>
          </h2>
          <p className="text-muted-foreground text-base leading-relaxed">
            A structured path for launching your products overseas with verified matching, legal clearing, and logistical scale.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {STEPS.map((s, idx) => {
            const Icon = s.icon;
            const isLast = idx === STEPS.length - 1;
            return (
              <motion.div
                key={s.step}
                variants={item}
                className={cn(
                  "relative rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm p-6 flex flex-col gap-4",
                  "hover:border-border hover:bg-card hover:shadow-lg transition-all duration-300 group",
                  s.glow,
                )}
              >
                {/* Step connector line (desktop) */}
                {!isLast && (
                  <div className="hidden lg:block absolute -right-2.5 top-1/2 -translate-y-1/2 z-10">
                    <ArrowRight className="size-4 text-border" />
                  </div>
                )}

                <div className="flex items-start justify-between">
                  <div className={cn("size-11 rounded-xl border flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300", s.bg)}>
                    <Icon className={cn("size-5", s.accent)} />
                  </div>
                  <span className={cn("text-4xl font-black opacity-10 leading-none mt-1", s.accent)}>
                    {s.step}
                  </span>
                </div>

                <div>
                  <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest font-mono mb-1">
                    Stage {s.step}
                  </p>
                  <h4 className="text-base font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{s.title}</h4>
                  <p className="text-muted-foreground text-xs leading-relaxed">{s.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
