import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { Download, Phone } from "lucide-react"

export default function ProfessionalWing() {
  return (
    <div className="py-24 max-w-[1280px] mx-auto px-6 md:px-12 text-left">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <span className="text-xs font-bold text-primary uppercase tracking-widest mb-3 block">Chamber Wing</span>
        <h1 className="font-heading font-black text-4xl md:text-5xl text-foreground mb-8">Professional Wing</h1>

        <div className="space-y-6 font-body text-base text-muted-foreground leading-relaxed">
          <p className="text-xl font-medium text-foreground mb-8">
            Professional Wing supports Asian business community with consultation and services to establish new ventures and to deal with day to day issues in existing business, their expansion and diversification plans.
          </p>

          <p>
            AECCI's endeavor in establishing its Professional wing is to provide consultation and services for all the corporate and commercial fields in the most efficient manner. For every business various compliance are needed to be fulfilled, and the professionals like Chartered Accountant, Company Secretaries, Tax Consultant and Finance Professionals are the backbone of business. Our Professional Wing is set up to provide a platform engaging with professionals, where we have many professional experts Chartered Accountant and Company Secretary affiliated with us.
          </p>
          <p>
            The wing supports the Asian business community with consultation and services to establish new ventures and to deal with the day to day issues in existing business, their expansion and diversification plans. Our wing experts help in understanding and explore the investment opportunities available with the Asian community.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="bg-card border border-border p-6 rounded-2xl shadow-sm space-y-4">
                 <h3 className="font-heading font-bold text-lg text-foreground mb-2 flex items-center gap-2"><Phone className="size-5 text-primary" /> Professional Wing's Division</h3>
                 <p className="text-sm"><span className="font-bold text-foreground">Email:</span> professional@aecci.org.in</p>
                 <p className="text-sm"><span className="font-bold text-foreground">Board lines:</span> +91-22-412 711 45 | 46</p>
                 <p className="text-[10px] text-muted-foreground uppercase tracking-widest mt-4">*(Consultation available with prior appointment)</p>
              </div>

              <div className="bg-card border border-border p-6 rounded-2xl shadow-sm space-y-4 flex flex-col justify-center">
                 <a href="https://www.aecci.org.in/wp-content/uploads/2023/04/Wing-Application-Form.pdf" target="_blank" rel="noreferrer" className="flex items-center text-primary hover:underline text-sm font-bold">
                   <Download className="mr-2 size-4" /> Fill the Wing Application Form (PDF)
                 </a>
                 <Link to="/meet-our-wings-experts" className="flex items-center text-foreground hover:underline text-sm font-bold">
                   Meet our Professional Experts →
                 </Link>
                 <Link to="/submit-professionals-profile" className="flex items-center text-foreground hover:underline text-sm font-bold">
                   Opportunities to join as a professional →
                 </Link>
              </div>
          </div>

        </div>
      </motion.div>
    </div>
  )
}
