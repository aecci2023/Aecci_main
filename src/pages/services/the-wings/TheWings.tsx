import { motion } from "framer-motion"
import { ArrowRight } from "@phosphor-icons/react"
import { Link } from "react-router-dom"

export default function TheWings() {
  const wings = [
    {
      title: "Export Wing",
      desc: "Offers essential documents handy such as: Certificates of Origin (Non-Preferential) and makes shipping abroad secure & easy.",
      img: "https://www.aecci.org.in/wp-content/uploads/2020/11/exp-wings.jpg",
      href: "/services/the-wings/exports-wing",
      btnText: "EXPORT WING"
    },
    {
      title: "Legal Wing",
      desc: "Provides assistance on legal issues concerning commercial & business affairs and helps the clients in resolving international trade disputes.",
      img: "https://www.aecci.org.in/wp-content/uploads/2020/11/legal-win.jpg",
      href: "/services/legal-wing",
      btnText: "LEGAL WING"
    },
    {
      title: "HR Support Wing",
      desc: "Proving assistant and guidance to employees on a wide range of topics. Promoting a positive and supportive solution by addressing concerns.",
      img: "https://www.aecci.org.in/wp-content/uploads/2023/02/istockphoto-1327034671-170667a.jpg",
      href: "/services/the-wings/hr-support-wing",
      btnText: "HR SUPPORT WING"
    },
    {
      title: "Professional Wing",
      desc: "Consultation and services to establish new ventures and to deal with day to day issues in existing business, expansion and diversification plans.",
      img: "https://www.aecci.org.in/wp-content/uploads/2020/11/prof-wing.jpg",
      href: "/services/the-wings/professional-wing",
      btnText: "PROFESSIONAL WING"
    },
    {
      title: "Business Advice Wing",
      desc: "Specializes in understanding the needs of every business & understands the importance of delivering strategic advice for every business.",
      img: "https://www.aecci.org.in/wp-content/uploads/2020/11/business-advices.jpg",
      href: "/services/the-wings/business-advice-wing",
      btnText: "BUSINESS ADVICE WING"
    },
    {
      title: "Women Wing",
      desc: "Successful women in our wing encourage other women members to become economically empowered and contribute in the development of our nation.",
      img: "https://www.aecci.org.in/wp-content/uploads/2020/11/women-wingss.jpg",
      href: "/services/the-wings/women-wing",
      btnText: "WOMEN WING"
    },
    {
      title: "Event and Seminar Wing",
      desc: "Creating opportunities for businesses through mega events to gain valuable insights while making new business contacts and strengthening existing relationships.",
      img: "https://www.aecci.org.in/wp-content/uploads/2020/11/evt-sem.jpg",
      href: "/services/the-wings/event-and-seminar-wing",
      btnText: "EVENT SEMINAR WING"
    },
    {
      title: "Meet our Wing Experts",
      desc: "AECCI Wings: Your Trusted Team of Certified Experts, Catering to Your Diverse Needs Worldwide and Locally.",
      img: "https://www.aecci.org.in/wp-content/uploads/2023/11/Website-Slider-66-2.png",
      href: "/meet-our-wings-experts",
      btnText: "MEET OUR WING EXPERTS"
    }
  ]

  return (
    <div className="py-24 max-w-[1280px] mx-auto px-6 md:px-12 text-left">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <span className="text-xs font-bold text-primary uppercase tracking-widest mb-3 block">Specialized Departments</span>
        <h1 className="font-heading font-black text-4xl md:text-5xl text-foreground mb-6">The Wings</h1>

        <p className="font-body text-base text-muted-foreground leading-relaxed max-w-3xl mb-16">
          Combinations of highly educated and experienced professionals who are committed to providing expert consultations to our global business partners through the various stages of business – all under one roof.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {wings.map((svc, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.4 }}
              className="bg-card border border-border rounded-2xl overflow-hidden shadow-lg flex flex-col group hover:border-primary/40 transition-colors"
            >
              <div className="h-40 overflow-hidden">
                 <img src={svc.img} alt={svc.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-5 flex flex-col flex-1 text-left">
                <h3 className="font-heading font-bold text-lg text-foreground mb-2">{svc.title}</h3>
                <p className="text-xs text-muted-foreground mb-6 flex-1">
                  {svc.desc}
                </p>
                <Link to={svc.href} className="inline-flex items-center text-[10px] font-bold text-primary hover:text-primary/80 uppercase tracking-widest group/btn mt-auto">
                  {svc.btnText} <ArrowRight className="ml-2 size-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
