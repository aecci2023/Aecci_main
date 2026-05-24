import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { Download } from "lucide-react"

export default function LegalWing() {
  return (
    <div className="py-24 max-w-[1280px] mx-auto px-6 md:px-12 text-left">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <span className="text-xs font-bold text-primary uppercase tracking-widest mb-3 block">Chamber Wing</span>
        <h1 className="font-heading font-black text-4xl md:text-5xl text-foreground mb-4">LEGAL WING</h1>
        <p className="text-lg text-primary font-bold italic mb-8">
            "Your Leading Partner for Resolving International Disputes and Handling Every Aspect of Your Legal Needs."
        </p>

        <div className="space-y-6 font-body text-base text-muted-foreground leading-relaxed">
          <p>
            The AECCI-Legal Wing is dedicated to providing comprehensive and specialized legal services tailored to the complexities of international trade and commercial business. Our team of seasoned legal professionals offers expert assistance in navigating the intricate landscape of business law, with a particular emphasis on resolving international trade disputes.
          </p>

          <div className="flex flex-wrap gap-4 py-8">
            <Link to="/services/legal-wing" className="bg-primary text-primary-foreground font-bold px-4 py-2 rounded-full text-xs shadow-md">Why AECCI?</Link>
            <Link to="/aecci-legal-expertise" className="bg-muted text-foreground hover:bg-muted/80 font-bold px-4 py-2 rounded-full text-xs shadow-sm">Our Expertise</Link>
            <Link to="/aecci-legal-what-we-do" className="bg-muted text-foreground hover:bg-muted/80 font-bold px-4 py-2 rounded-full text-xs shadow-sm">What We Do</Link>
            <Link to="/aecci-legal-initiatives" className="bg-muted text-foreground hover:bg-muted/80 font-bold px-4 py-2 rounded-full text-xs shadow-sm">Our Initiatives</Link>
            <Link to="/aecci-legal-our-team" className="bg-muted text-foreground hover:bg-muted/80 font-bold px-4 py-2 rounded-full text-xs shadow-sm">Our Team</Link>
          </div>

          <h2 className="font-heading font-black text-3xl text-foreground mb-4">Why AECCI?</h2>
          <p>
            At AECCI, we recognize that exporters and importers face issues due to lack of awareness about necessary legal documentation, trade procedures, and policies. Often, deals are made on trust without proper documentation, leading to disputes and business disagreements.
          </p>
          <p>
            With a team of experienced professionals well-versed in international trade regulations and dispute resolution mechanisms, AECCI-Legal Wing offers unparalleled expertise to safeguard your business interests.
          </p>
          <p>
            The Legal wing goes hand-in-hand throughout your business journey, so that while taking care of making the initial procedures easier for you, complexity of expansion of business can also be taken care well in time.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-4 py-6">
             <a href="https://www.aecci.org.in/wp-content/uploads/2023/08/COMMERCIAL-TRADE-DISPUTE-RESOULUTION-pdf-.pdf" target="_blank" rel="noreferrer" className="flex items-center text-primary hover:underline text-xs font-bold uppercase tracking-widest border border-primary/20 px-4 py-2 rounded-full bg-primary/5">
               <Download className="mr-2 size-4" /> TRADE DISPUTE RESOLUTION MECHANISM (PDF)
             </a>
             <Link to="/collaboration-partnering-firm" className="flex items-center text-foreground hover:underline text-xs font-bold uppercase tracking-widest border border-border px-4 py-2 rounded-full bg-card">
               AECCI OVERSEAS COLLABORATION
             </Link>
             <Link to="/meet-our-wings-experts" className="flex items-center text-foreground hover:underline text-xs font-bold uppercase tracking-widest border border-border px-4 py-2 rounded-full bg-card">
               OUR WINGS EXPERTS
             </Link>
             <Link to="/arbitration-center" className="flex items-center text-foreground hover:underline text-xs font-bold uppercase tracking-widest border border-border px-4 py-2 rounded-full bg-card">
               ARBITRATION CENTER
             </Link>
             <a href="https://e-platform.aecci.org.in/legal-wing-request" target="_blank" rel="noreferrer" className="flex items-center text-foreground hover:underline text-xs font-bold uppercase tracking-widest border border-border px-4 py-2 rounded-full bg-card">
               SUBMIT YOUR QUERY
             </a>
          </div>

          <div className="bg-card border border-border p-8 rounded-2xl shadow-sm mt-8 space-y-4">
             <h3 className="font-heading font-black text-2xl text-foreground mb-2">How we can help?</h3>
             <p>A Trusted and Recognized Trade Organization Supporting Businesses Across Every Industry and Sector, All Consolidated within a Unified Platform.</p>
             <Link to="/services" className="text-primary hover:underline text-xs font-bold uppercase tracking-widest block mt-4">
               FIND OUT MORE ABOUT OUR WINGS →
             </Link>
          </div>

        </div>
      </motion.div>
    </div>
  )
}
