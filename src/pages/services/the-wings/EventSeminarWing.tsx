import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { Download } from "lucide-react"

export default function EventSeminarWing() {
  return (
    <div className="py-24 max-w-[1280px] mx-auto px-6 md:px-12 text-left">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <span className="text-xs font-bold text-primary uppercase tracking-widest mb-3 block">Chamber Wing</span>
        <h1 className="font-heading font-black text-4xl md:text-5xl text-foreground mb-8">Events and Seminars Wing</h1>

        <div className="space-y-6 font-body text-base text-muted-foreground leading-relaxed">
          <p className="text-xl font-medium text-foreground mb-8">
            We creates great opportunities for businesses through mega events to gain valuable insights while making new business contacts and strengthening existing relationships.
          </p>

          <p>
            The AECCI Events & Seminars Wing is committed to fostering business growth and professional development through a variety of specialized events and conferences. Our team organizes insightful seminars, interactive workshops, and impactful networking events tailored to the needs of businesses and professionals. We aim to provide valuable opportunities for knowledge sharing, industry collaboration, and strategic growth, helping participants navigate the evolving landscape of their respective industries.
          </p>

          <div className="flex flex-wrap gap-4 py-8">
            <Link to="/services/the-wings/event-and-seminar-wing" className="bg-primary text-primary-foreground font-bold px-4 py-2 rounded-full text-xs shadow-md">Why AECCI?</Link>
            <Link to="/services/the-wings/event-and-seminar-wing-our-expertise" className="bg-muted text-foreground hover:bg-muted/80 font-bold px-4 py-2 rounded-full text-xs shadow-sm">Our Expertise</Link>
            <Link to="/services/the-wings/event-and-seminar-wing-what-we-do" className="bg-muted text-foreground hover:bg-muted/80 font-bold px-4 py-2 rounded-full text-xs shadow-sm">What We Do</Link>
            <Link to="/services/the-wings/event-and-seminar-wing-our-initiatives" className="bg-muted text-foreground hover:bg-muted/80 font-bold px-4 py-2 rounded-full text-xs shadow-sm">Our Initiatives</Link>
            <Link to="/services/the-wings/event-and-seminar-wing-our-team" className="bg-muted text-foreground hover:bg-muted/80 font-bold px-4 py-2 rounded-full text-xs shadow-sm">Reach Our Team</Link>
          </div>

          <h2 className="font-heading font-black text-3xl text-foreground mb-4">Why AECCI?</h2>
          <p>
            AECCI ensures to provide an invaluable platform for businesses, professionals, and industry leaders. We offer a range of insightful seminars, interactive workshops, and impactful networking events to facilitate knowledge sharing, industry collaboration, and strategic growth. While opening up the business and networking opportunities for your business, we design the programme to appeal to all our members throughout Asian Business Community, covering multiple sectors and encouraging all types of business networking.
          </p>

          <div className="bg-card border border-border p-6 rounded-2xl shadow-sm mt-8 space-y-4">
             <a href="https://eplatform.aecci.org.in/pages/registerpage.jsp" target="_blank" rel="noreferrer" className="flex items-center text-foreground hover:underline text-sm font-bold">
               Login & Book Your Spot →
             </a>
             <a href="https://www.aecci.org.in/wp-content/uploads/2023/04/Wing-Application-Form.pdf" target="_blank" rel="noreferrer" className="flex items-center text-primary hover:underline text-sm font-bold">
               <Download className="mr-2 size-4" /> Fill the Wing Application Form (PDF)
             </a>
             <a href="https://aecci.org.in/wp-content/uploads/2020/12/BROCHURE-PREEVENT_2021-NEW.pdf" target="_blank" rel="noreferrer" className="flex items-center text-primary hover:underline text-sm font-bold">
               <Download className="mr-2 size-4" /> Opportunities to Sponsor our Upcoming Events (PDF)
             </a>
          </div>

        </div>
      </motion.div>
    </div>
  )
}
