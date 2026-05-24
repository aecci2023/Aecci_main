import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Quotes } from "@phosphor-icons/react"

const TESTIMONIALS = [
  {
    name: "Mr. Mike Wilson",
    role: "CEO Go Exporting, United Kingdom",
    text: "Go Exporting is proud and excited to be associated with AECCI supporting the activities of Indian exporters to the UK. Mike Wilson, CEO of the specialist export consultancy says “Our aims and those of AECCI are perfectly matched to help Asian exporters maximize their potential in the UK market with services including export readiness, market analysis, export strategy, route to market, plus practical support to identify new partners and distributors. We look forward to working together for many years to come.”"
  },
  {
    name: "Barrister Mobeen Rana",
    role: "Chairman/CEO M R Legal INN, Pakistan",
    text: "AECCI has outperformed many other chambers of commerce in the region by introducing e-meetings, e-conferences, e-live webinars that has bridged the long commercial distances for promotion of trade and commerce amongst the international business community. I wish AECCI's distinguished leadership very best in carrying the vision forward."
  },
  {
    name: "Pr Karim Adyel",
    role: "Senior Attorney Adyel Law Firm, Morocco",
    text: "It is a great honor for ADYEL LAW FIRM Morocco to become an official legal partner of AECCI Mumbai and the beginning of a fruitful collaboration in all areas and branches of international trade for the legal support of AECCI members."
  },
  {
    name: "Mr. Jafar Al-Sabbagh",
    role: "Partner Al-Khair Legal Attorneys, Jordan",
    text: "AECCI has proven to be a highly professional and responsive organization, consistently facilitating valuable connections and opportunities across borders. Their dedication to supporting legal and commercial collaboration is commendable, and we are proud to be part of this dynamic network."
  },
  {
    name: "Dr. Jamil Abdo",
    role: "Partner Abdo Advogados, Brazil",
    text: "Dear Members, Greetings from Brazil!! We are very happy with AECCI services and hope all of you are. To us it is very important to keep partnered as entities like this because we have answers when we need support."
  }
]

export default function NetworkingTestimonials() {
  return (
    <section id="networking" className="py-24 bg-card/10 overflow-hidden">
      <div className="mx-auto max-w-[1280px] px-6 md:px-12">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <span className="text-xs font-bold text-primary uppercase tracking-widest mb-3 block">Global Partners</span>
          <h2 className="font-heading font-black text-3xl md:text-4xl text-foreground">AECCI Networking</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-primary/60 mx-auto mt-4 rounded-full" />
          <p className="font-body text-sm md:text-base text-muted-foreground mt-4 max-w-2xl mx-auto">
            Hear from our esteemed international collaborators and legal partners across the globe.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.15 }
            }
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr"
        >
          {TESTIMONIALS.map((testimonial, idx) => (
            <motion.div
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
              }}
              className="h-full"
            >
              <Card className="h-full border-border bg-card/65 backdrop-blur-md shadow-xl hover:shadow-2xl hover:border-primary/30 transition-all duration-300 p-8 relative overflow-hidden flex flex-col">
                <Quotes className="absolute top-6 right-6 size-12 text-primary/10 rotate-180 pointer-events-none" />
                <CardContent className="p-0 flex flex-col h-full text-left">
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed italic flex-grow mb-6 relative z-10">
                    "{testimonial.text}"
                  </p>
                  <div className="pt-4 border-t border-border/50 flex flex-col">
                    <span className="font-heading font-black text-base text-foreground">{testimonial.name}</span>
                    <span className="text-[10px] font-bold text-primary uppercase tracking-widest mt-1">{testimonial.role}</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
