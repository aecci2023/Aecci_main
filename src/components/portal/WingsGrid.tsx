import { motion } from "framer-motion"
import type { Variants } from "framer-motion"
import {
  Globe,
  Briefcase,
  Gavel,
  Users,
  Lightbulb,
  Calendar,
  GenderFemale,
  ArrowRight,
} from "@phosphor-icons/react"
import { cn } from "@/lib/utils"

const wings = [
  {
    id: "export",
    title: "Export Wing",
    desc: "Certificate of Origin issuance, export documentation guidelines, customs compliance, and global trade facilitation.",
    icon: Globe,
    bgImage: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=600",
    href: "#wings",
  },
  {
    id: "professional",
    title: "Professional Wing",
    desc: "Corporate training, industry-specific skills development, and executive professional advisory programs.",
    icon: Briefcase,
    bgImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=600",
    href: "#wings",
  },
  {
    id: "legal",
    title: "Legal Wing",
    desc: "Legal arbitration rules, commercial dispute resolution, mediation panels, and trade contract advisory.",
    icon: Gavel,
    bgImage: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=600",
    href: "#wings",
  },
  {
    id: "hr",
    title: "HR Support Wing",
    desc: "Talent compliance advisory, export industry recruitment guidelines, and workforce optimization consultancy.",
    icon: Users,
    bgImage: "https://images.unsplash.com/photo-1521791136368-1a46827d3ad4?auto=format&fit=crop&q=80&w=600",
    href: "#wings",
  },
  {
    id: "advice",
    title: "Business Advice Wing",
    desc: "Cross-border financial assistance, emerging market advisory, and export venture scaling programs.",
    icon: Lightbulb,
    bgImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=600",
    href: "#wings",
  },
  {
    id: "event",
    title: "Event & Seminar Wing",
    desc: "International trade expos, B2B matchmaking networking meets, and policy-focused knowledge webinars.",
    icon: Calendar,
    bgImage: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=600",
    href: "#wings",
  },
  {
    id: "women",
    title: "Women Wing",
    desc: "Empowering female exporters through mentoring networks, cross-border venture funds, and leadership programs.",
    icon: GenderFemale,
    bgImage: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600",
    href: "#wings",
  },
] as const

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
}

export default function WingsGrid() {
  return (
    <section id="wings-grid" className="py-20 bg-background relative overflow-hidden border-b border-border">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border)/4_1px,transparent_1px),linear-gradient(to_bottom,var(--border)/4_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--primary-foreground)/5,transparent)] pointer-events-none" />

      <div className="mx-auto max-w-[1280px] px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <span className="text-xs font-bold text-primary uppercase tracking-widest mb-3 block">
            AECCI WINGS
          </span>
          <h2 className="font-heading font-black text-3xl md:text-4xl text-foreground">
            Supporting your Business
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-emerald-400 mx-auto mt-4 rounded-full" />
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {wings.map((wing) => {
            const IconComponent = wing.icon
            return (
              <motion.a
                key={wing.id}
                href={wing.href}
                variants={cardVariants}
                className={cn(
                  "group relative h-64 rounded-2xl overflow-hidden border border-border/80 shadow-lg hover:shadow-2xl hover:border-primary/50 transition-all duration-300 flex flex-col justify-end p-6 cursor-pointer",
                  wing.id === "women" ? "sm:col-span-2 lg:col-span-1" : ""
                )}
              >
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 scale-100 group-hover:scale-110"
                  style={{
                    backgroundImage: `url(${wing.bgImage})`,
                  }}
                />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent group-hover:via-slate-950/60 transition-colors duration-300" />

                {/* Floating Icon in top right */}
                <div className="absolute top-4 right-4 p-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300">
                  <IconComponent className="size-5" />
                </div>

                {/* Content */}
                <div className="relative z-10 flex flex-col text-left">
                  <h3 className="text-lg font-heading font-black text-white mb-2">
                    {wing.title}
                  </h3>
                  <p className="text-[11px] text-slate-300 leading-relaxed opacity-0 group-hover:opacity-100 group-hover:max-h-20 max-h-0 overflow-hidden transition-all duration-500 ease-in-out">
                    {wing.desc}
                  </p>

                  <div className="mt-3 flex items-center gap-1 text-primary text-xs font-bold font-heading uppercase tracking-wider group-hover:translate-x-1 transition-transform">
                    <span>Explore Wing</span>
                    <ArrowRight className="size-3" />
                  </div>
                </div>
              </motion.a>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
