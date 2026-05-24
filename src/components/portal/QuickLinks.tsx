import { motion } from "framer-motion"
import { ShieldCheck, MagnifyingGlass, BookOpenText, Lightbulb, Desktop, CreditCard } from "@phosphor-icons/react"

const QUICK_LINKS = [
  { id: "e-co", title: "e-CO Verification", icon: <ShieldCheck className="size-6" /> },
  { id: "research", title: "Research & Info", icon: <MagnifyingGlass className="size-6" /> },
  { id: "report", title: "AECCI Annual report", icon: <BookOpenText className="size-6" /> },
  { id: "innov", title: "India Innov. Index", icon: <Lightbulb className="size-6" /> },
  { id: "e-plat", title: "e-Platform", icon: <Desktop className="size-6" /> },
  { id: "member", title: "Membership", icon: <CreditCard className="size-6" /> },
]

export default function QuickLinks() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const item = {
    hidden: { opacity: 0, scale: 0.9, y: 10 },
    show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" as const } }
  }

  return (
    <section className="py-16 bg-card/25 border-y border-border backdrop-blur-md overflow-hidden">
      <div className="mx-auto max-w-[1280px] px-6 md:px-12">
        <div className="text-center mb-10">
           <h3 className="font-heading font-black text-2xl text-foreground">Quick Links</h3>
           <div className="h-1 w-12 bg-primary mx-auto mt-3 rounded-full opacity-50" />
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
        >
          {QUICK_LINKS.map((link) => (
            <motion.a
              key={link.id}
              href={`#${link.id}`}
              variants={item}
              className="flex flex-col items-center justify-center p-6 rounded-2xl bg-card border border-border hover:border-primary/50 hover:bg-muted/30 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 text-center group cursor-pointer"
            >
              <div className="text-primary/70 group-hover:text-primary transition-colors mb-4 bg-primary/5 p-4 rounded-full border border-primary/10">
                {link.icon}
              </div>
              <span className="font-heading font-bold text-sm text-foreground">{link.title}</span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
