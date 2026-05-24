import { motion } from "framer-motion"
import { ArrowRight } from "@phosphor-icons/react"
import { Link } from "react-router-dom"

export default function EntrepreneurHub() {
  const initiatives = [
    {
      title: "Startup India",
      desc: "Startup India is a flagship initiative of the Government of India, intended to build a strong eco-system for nurturing innovation and Startups in the country to drive sustainable economic growth and generate large-scale employment opportunities.",
      img: "https://www.aecci.org.in/wp-content/uploads/2020/11/startup-india.jpg",
      href: "/services/entrepreneur-hub/startup-india",
      btnText: "STARTUP INDIA"
    },
    {
      title: "Investment India",
      desc: "India has recently emerged as one of the most attractive destination for investment as well as doing business at global level.",
      img: "https://www.aecci.org.in/wp-content/uploads/2020/11/invest.jpg",
      href: "/services/entrepreneur-hub/investment-india",
      btnText: "INVESTMENT INDIA"
    },
    {
      title: "Make in India",
      desc: "Make in India is an initiative by the Government of India to encourage companies to manufacture in India and incentivize dedicated investments into manufacturing.",
      img: "https://www.aecci.org.in/wp-content/uploads/2020/11/makeinindia.jpg",
      href: "/services/entrepreneur-hub/make-in-india",
      btnText: "MAKE IN INDIA"
    }
  ]

  return (
    <div className="py-24 max-w-[1280px] mx-auto px-6 md:px-12 text-left">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <span className="text-xs font-bold text-primary uppercase tracking-widest mb-3 block">Incubation & Growth</span>
        <h1 className="font-heading font-black text-4xl md:text-5xl text-foreground mb-6">Entrepreneur Hub</h1>

        <p className="font-body text-base text-muted-foreground leading-relaxed max-w-3xl mb-16">
          To encourage entrepreneurship, to kick-start innovative businesses that will eventually create employment opportunities, the government of India offers innumerable schemes to make the process easier & rewarding.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {initiatives.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.4 }}
              className="bg-card border border-border rounded-2xl overflow-hidden shadow-lg flex flex-col group hover:border-primary/40 transition-colors"
            >
              <div className="h-48 overflow-hidden">
                 <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-6 flex flex-col flex-1 text-left">
                <h3 className="font-heading font-black text-xl text-foreground mb-3">{item.title}</h3>
                <p className="text-sm text-muted-foreground mb-6 flex-1">
                  {item.desc}
                </p>
                <Link to={item.href} className="inline-flex items-center text-xs font-bold text-primary hover:text-primary/80 uppercase tracking-widest group/btn mt-auto">
                  {item.btnText} <ArrowRight className="ml-2 size-4 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
