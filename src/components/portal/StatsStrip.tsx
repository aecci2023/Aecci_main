import { motion } from "framer-motion";
import { CountUp } from "@/components/ui/count-up";

import { Users, Globe, Building2, Layers, Handshake } from "lucide-react";

const STATS = [
  {
    value: 10218,
    suffix: "+",
    label: "Active Exporters",
    icon: Users,
    color: "text-primary",
  },
  {
    value: 35,
    suffix: "+",
    label: "Asian Territories",
    icon: Globe,
    color: "text-chart-2",
  },
  {
    value: 39,
    suffix: "",
    label: "State Collaborations",
    icon: Building2,
    color: "text-chart-3",
  },
  {
    value: 55,
    suffix: "+",
    label: "Global Collaborations",
    icon: Handshake,
    color: "text-chart-4",
  },
  {
    value: 7,
    suffix: "",
    label: "Specialized Wings",
    icon: Layers,
    color: "text-chart-5",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  },
};

export default function StatsStrip() {
  return (
    <section className="border-y border-border/60 bg-card/30 backdrop-blur-sm">
      <div className="mx-auto max-w-[1280px] px-6 md:px-12 py-8 md:py-12">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-0 divide-y md:divide-y-0 md:divide-x divide-border/40"
        >
          {STATS.map(({ value, suffix, label, icon: Icon, color }) => (
            <motion.div
              key={label}
              variants={item}
              className="flex flex-col items-center justify-center text-center gap-2 py-6 md:py-4 px-6 group cursor-default"
            >
              <div
                className={`size-9 rounded-xl bg-primary/8 border border-primary/15 flex items-center justify-center mb-1 group-hover:scale-110 transition-transform duration-300 ${color}`}
              >
                <Icon className="size-4" />
              </div>
              <span className="font-black text-3xl md:text-4xl text-foreground tabular-nums tracking-tight leading-none">
                <CountUp value={value} suffix={suffix} />
              </span>
              <span className="text-[11px] font-semibold text-muted-foreground uppercase tracking-widest">
                {label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
