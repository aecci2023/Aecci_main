import { motion } from "framer-motion"
import { ArrowRight } from "@phosphor-icons/react"
import { Link } from "react-router-dom"

export default function OurServices() {
  const services = [
    {
      title: "Membership",
      desc: "Membership with AECCI allows you to enjoy exclusive and wide range of support and benefits for getting ahead in business. We're here to help you with everything from raising awareness of your brand, creating new business opportunities and building your network and making you successfully reach to international markets.",
      img: "https://www.aecci.org.in/wp-content/uploads/2020/12/membership.jpg",
      href: "/services/membership",
      btnText: "MEMBERSHIPS"
    },
    {
      title: "Affiliate Professionals",
      desc: "Chamber's services are designed to help the business community were through our various initiatives and by the associated expert professional counseling, entrepreneurial and documentation services are given to members.",
      img: "https://www.aecci.org.in/wp-content/uploads/2023/12/Website-Slider-16.jpg",
      href: "/aecci-affiliate-program",
      btnText: "Affiliate Professionals"
    }
  ]

  return (
    <div className="py-24 max-w-[1280px] mx-auto px-6 md:px-12 text-left">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <span className="text-xs font-bold text-primary uppercase tracking-widest mb-3 block">Chamber Solutions</span>
        <h1 className="font-heading font-black text-4xl md:text-5xl text-foreground mb-6">Our Services</h1>

        <p className="font-body text-base text-muted-foreground leading-relaxed max-w-3xl mb-16">
          Chamber's services are designed to help the business community were through our various initiatives and by the associated expert professional counseling, entrepreneurial and documentation services are given to members.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((svc, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.4 }}
              className="bg-card border border-border rounded-2xl overflow-hidden shadow-lg flex flex-col group hover:border-primary/40 transition-colors"
            >
              <div className="h-48 overflow-hidden">
                 <img src={svc.img} alt={svc.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-6 flex flex-col flex-1 text-left">
                <h3 className="font-heading font-black text-xl text-foreground mb-3">{svc.title}</h3>
                <p className="text-sm text-muted-foreground mb-6 flex-1">
                  {svc.desc}
                </p>
                <Link to={svc.href} className="inline-flex items-center text-xs font-bold text-primary hover:text-primary/80 uppercase tracking-widest group/btn mt-auto">
                  {svc.btnText} <ArrowRight className="ml-2 size-4 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
