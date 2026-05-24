import { motion } from "framer-motion"
import { Link } from "react-router-dom"

export default function InvestmentIndia() {
  return (
    <div className="py-24 max-w-[1280px] mx-auto px-6 md:px-12 text-left">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <span className="text-xs font-bold text-primary uppercase tracking-widest mb-3 block">Entrepreneur Hub</span>
        <h1 className="font-heading font-black text-4xl md:text-5xl text-foreground mb-8">Investment India</h1>

        <div className="space-y-6 font-body text-base text-muted-foreground leading-relaxed">
          <p className="text-xl font-medium text-foreground mb-8">
            India has recently emerged as one of the most attractive destinations for investment at the global level, not for investment only but also for doing business.
          </p>

          <p>
            India has recently emerged as one of the most attractive destinations for investment at the global level, not for investment only but also for doing business India is getting preference over other countries. Reasons may be several but most importantly it is the Indian Government's constantly evolving investor-friendly policy. Then, abundant natural resources, skilled men power, availability of cheap labour are the other major reasons attracting foreign investors to India.
          </p>
          <p>
            As a nationwide investment promotion and facilitation agency, Investment India focuses on sector-specific investor targeting and the development of new partnerships to enable sustainable investments in India. In addition to a core team that focuses on sustainable investments, Invest India also partners with substantial investment promotion agencies and multilateral organizations. Invest India also actively works with several Indian states to build capacity as well as bring in global best practices in investment targeting, promotion and facilitation areas.
          </p>
          <p>
            We at AECCI are well equipped to fulfill the consultation needs and to assist in exploring the available opportunities for the investors. Not just in India but we time to time we work on checking the investment opportunities available in the Asian community and explain these in our publications so that information can reach the maximum people.
          </p>

          <div className="pt-8">
             <Link to="/contact-us/aecci-head-office" className="bg-primary text-primary-foreground font-bold px-8 py-3 rounded-full text-sm shadow-md hover:bg-primary/90 transition-colors inline-block">
               Tell us about your Investment requirements →
             </Link>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
