import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { Download, Phone } from "lucide-react"

export default function HrSupportWing() {
  return (
    <div className="py-24 max-w-[1280px] mx-auto px-6 md:px-12 text-left">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <span className="text-xs font-bold text-primary uppercase tracking-widest mb-3 block">Chamber Wing</span>
        <h1 className="font-heading font-black text-4xl md:text-5xl text-foreground mb-4">HR Support Wing</h1>
        <p className="text-lg text-primary font-bold italic mb-8">
            Ensuring Employee Well-Being and Driving Business Growth through Exceptional HR Support
        </p>

        <div className="space-y-6 font-body text-base text-muted-foreground leading-relaxed">
          <p className="font-bold text-foreground">Do Employees have Question You Just Can't Answer?</p>
          <p>
            In any case, does your business seek out the guidance of reliable experts who can point the way forward? You just got on right page!! We're here to provide you with all the HR Support you could possibly want!!
          </p>
          <p>
            We constantly keep pushing ourselves to plan forward, consider the future, and act in ways that will help us influence the ever-evolving business landscape to stay relevant and effective. As far as human resources go, we've got you covered for a seamless operation.
          </p>

          <h2 className="font-heading font-black text-2xl text-foreground mt-12 mb-4">HR Support included with our Chamber Membership</h2>
          <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-xl">
             <ul className="list-disc pl-5 space-y-2 text-foreground font-medium">
                 <li>The HR Support is confidential, free and unlimited*.</li>
                 <li>All Chamber members have access to 24/7* HR support as part of their membership.</li>
                 <li>This service helps you to avoid costly mistakes and better understand if your organization compiles with relevant employment laws and regulations</li>
             </ul>
          </div>

          <h2 className="font-heading font-black text-2xl text-foreground mt-12 mb-4">This is Why You Need HR Support</h2>
          <p>
            With the high cost of employment tribunals in mind, businesses can contact our HR support for guidance on how to prevent these costly disputes. Our members get unlimited access to the support, which is staffed by knowledgeable advisers who can answer inquiries and assist with problems. Each of the helplines is staffed 24/7/365 to answer any kind of issue, favourable or bad.
          </p>
          <p>
            The experts in our human resources department can help you with any questions you may have. Your companies may save money and time by joining our membership and outsourcing HR processes including hiring, performance reviews, and employee communication. By using our services, you can be certain that you and your employees will always be up-to-date with the latest information on employment law and regulations.
          </p>

          <h2 className="font-heading font-black text-2xl text-foreground mt-12 mb-4">What HR Solution does AECCI Provide?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <ul className="list-disc pl-5 space-y-3 font-semibold text-foreground">
                  <li>Employment Law</li>
                  <li>Staff Grievances and Disputes</li>
                  <li>Disciplinary Issues</li>
                  <li>Contracts of Employment</li>
                  <li>Managing Apprentices</li>
                  <li>Calculating Settlement Agreements</li>
              </ul>
              <div className="rounded-xl overflow-hidden shadow-lg border border-border">
                  <img src="https://www.aecci.org.in/wp-content/uploads/2023/02/HR-SUpporrt.png" alt="HR Support" className="w-full h-auto" />
              </div>
          </div>

          <blockquote className="bg-muted border border-border p-6 rounded-xl italic font-heading text-lg text-foreground/80 mt-8 shadow-sm">
            "AECCIs HR Support in Standardizing Hiring, Onboarding, and Offboarding"
          </blockquote>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="bg-card border border-border p-6 rounded-2xl shadow-sm space-y-4">
                 <h3 className="font-heading font-bold text-lg text-foreground mb-2 flex items-center gap-2"><Phone className="size-5 text-primary" /> Contact HR Support Wing</h3>
                 <p className="text-sm"><span className="font-bold text-foreground">Email:</span> info@aecci.org.in, hr@aecci.org.in</p>
                 <p className="text-sm"><span className="font-bold text-foreground">Board lines:</span> +91-22-412 711 45 | 46</p>
                 <p className="text-[10px] text-muted-foreground uppercase tracking-widest mt-4">*(Consultation available with prior appointment)</p>
              </div>

              <div className="bg-card border border-border p-6 rounded-2xl shadow-sm space-y-4 flex flex-col justify-center">
                 <a href="https://www.aecci.org.in/wp-content/uploads/2023/04/Wing-Application-Form.pdf" target="_blank" rel="noreferrer" className="flex items-center text-primary hover:underline text-sm font-bold">
                   <Download className="mr-2 size-4" /> Fill the Wing Application Form (PDF)
                 </a>
                 <a href="https://wa.me/8433720996" target="_blank" rel="noreferrer" className="flex items-center text-foreground hover:underline text-sm font-bold">
                   <Phone className="mr-2 size-4" /> Ready To Join!!
                 </a>
                 <Link to="/about/jobs-opportunities" className="flex items-center text-foreground hover:underline text-sm font-bold">
                   Job Opportunities →
                 </Link>
              </div>
          </div>

        </div>
      </motion.div>
    </div>
  )
}
