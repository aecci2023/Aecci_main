import { motion } from "framer-motion";
import {
  ShieldCheck,
  MagnifyingGlass,
  BookOpenText,
  Lightbulb,
  Desktop,
  CreditCard,
  ArrowRight,
} from "@phosphor-icons/react";
import { cn } from "@/lib/utils";

const QUICK_LINKS = [
  {
    id: "e-co",
    title: "e-CO Verification",
    desc: "Verify Certificates of Origin in real-time instantly.",
    icon: <ShieldCheck className="size-6" />,
    badge: "Verification",
  },
  {
    id: "research",
    title: "Research & Info",
    desc: "Access the latest trade intelligence, guidelines, and statistics.",
    icon: <MagnifyingGlass className="size-6" />,
    badge: "Database",
  },
  {
    id: "report",
    title: "AECCI Annual Report",
    desc: "Download and review our annual growth and compliance reports.",
    icon: <BookOpenText className="size-6" />,
    badge: "Documents",
  },
  {
    id: "innov",
    title: "India Innovation Index",
    desc: "Explore India's latest state-level index and development rankings.",
    icon: <Lightbulb className="size-6" />,
    badge: "Analytics",
  },
  {
    id: "e-plat",
    title: "e-Platform",
    desc: "Access secure member dashboard, e-filing, and applications.",
    icon: <Desktop className="size-6" />,
    badge: "Services",
  },
  {
    id: "member",
    title: "Membership Portal",
    desc: "Join the chamber or renew your membership registration online.",
    icon: <CreditCard className="size-6" />,
    badge: "Registration",
  },
] as const;

export default function QuickLinks() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
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
    <section
      id="quick-links"
      className="py-12 md:py-24 bg-card/15 border-y border-border backdrop-blur-md relative overflow-hidden"
    >
      {/* Decorative subtle background highlights */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,var(--primary-foreground)/4,transparent_25%)] pointer-events-none" />

      <div className="mx-auto max-w-[1280px] px-6 md:px-12 relative z-10">
        <div className="text-center mb-10 md:mb-16">
          <span className="text-xs font-bold text-primary uppercase tracking-widest mb-3 block">
            E-SERVICES & PORTALS
          </span>
          <h2 className="font-heading font-black text-3xl md:text-4xl text-foreground">
            Direct Access Points
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-emerald-400 mx-auto mt-4 rounded-full" />
          <p className="font-body text-sm md:text-base text-muted-foreground mt-4 max-w-xl mx-auto">
            Instantly navigate to our core trade tools, member platforms, and
            official digital resources.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
        >
          {QUICK_LINKS.map((link) => (
            <motion.a
              key={link.id}
              href={`#${link.id}`}
              variants={item}
              className={cn(
                "group relative flex flex-col items-start p-8 rounded-2xl bg-card border border-border/80",
                "hover:border-primary/50 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/5",
                "transition-all duration-300 text-left cursor-pointer overflow-hidden",
              )}
            >
              {/* Subtle background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-primary/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Bottom accent glow strip */}
              <div className="absolute bottom-0 left-0 h-[3px] bg-gradient-to-r from-primary to-emerald-400 w-0 group-hover:w-full transition-all duration-500" />

              {/* Icon & Badge Header */}
              <div className="flex items-center justify-between w-full mb-6 relative z-10">
                <div className="text-primary bg-primary/10 group-hover:bg-primary group-hover:text-primary-foreground border border-primary/20 p-3 rounded-xl transition-all duration-300">
                  {link.icon}
                </div>
                <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest bg-muted/60 border border-border/80 px-2.5 py-1 rounded-full group-hover:border-primary/20 group-hover:text-primary transition-colors">
                  {link.badge}
                </span>
              </div>

              {/* Content */}
              <div className="relative z-10 flex flex-col flex-1">
                <h3 className="font-heading font-black text-lg text-foreground mb-2 flex items-center gap-1.5 group-hover:text-primary transition-colors">
                  <span>{link.title}</span>
                </h3>
                <p className="font-body text-xs text-muted-foreground leading-relaxed flex-1">
                  {link.desc}
                </p>

                {/* Explore Link */}
                <div className="mt-6 flex items-center gap-1 text-primary text-xs font-bold font-heading uppercase tracking-wider group-hover:translate-x-1 transition-transform">
                  <span>Access Portal</span>
                  <ArrowRight className="size-3.5" />
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
