import { motion } from "framer-motion";
import { CountUp } from "@/components/ui/count-up";

export default function StatsStrip() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" as const },
    },
  };

  return (
    <section className="border-y border-border bg-card/25 backdrop-blur-md py-8 md:py-12">
      <div className="mx-auto max-w-[1280px] px-6 md:px-12">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8"
        >
          <motion.div
            variants={item}
            className="flex flex-col items-center justify-center text-center group cursor-default"
          >
            <span className="font-heading font-black text-3xl md:text-4xl text-primary group-hover:text-primary/70 transition-colors duration-300">
              <CountUp value={10218} suffix="+" />
            </span>
            <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mt-2">
              Active Exporters
            </span>
          </motion.div>
          <motion.div
            variants={item}
            className="flex flex-col items-center justify-center text-center group cursor-default"
          >
            <span className="font-heading font-black text-3xl md:text-4xl text-primary group-hover:text-primary/70 transition-colors duration-300">
              <CountUp value={35} suffix="+" />
            </span>
            <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mt-2">
              Asian Territories
            </span>
          </motion.div>
          <motion.div
            variants={item}
            className="flex flex-col items-center justify-center text-center group cursor-default"
          >
            <span className="font-heading font-black text-3xl md:text-4xl text-primary group-hover:text-primary/70 transition-colors duration-300">
              <CountUp value={39} />
            </span>
            <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mt-2">
              State Collaborations
            </span>
          </motion.div>
          <motion.div
            variants={item}
            className="flex flex-col items-center justify-center text-center group cursor-default"
          >
            <span className="font-heading font-black text-3xl md:text-4xl text-primary group-hover:text-primary/70 transition-colors duration-300">
              <CountUp value={7} />
            </span>
            <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mt-2">
              Specialized Wings
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
