import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Users, PresentationChart, ArrowRight } from "@phosphor-icons/react"

export default function VirtualB2BForum() {
  return (
    <section id="virtual-b2b" className="py-24 bg-card/5 border-t border-border overflow-hidden">
      <div className="mx-auto max-w-[1280px] px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-left space-y-6"
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-[10px] font-bold px-3 py-1 rounded border border-primary/20 uppercase tracking-widest">
              AECCI Webinar
            </div>

            <h2 className="font-heading font-black text-4xl md:text-5xl text-foreground leading-[1.1]">
              VIRTUAL B2B FORUM
            </h2>

            <p className="font-body text-base text-muted-foreground leading-relaxed max-w-lg">
              Seize the opportunity to connect one-to-one with two distinguished experts coming this month from the United Kingdom and Vietnam—part of our 39 international collaborations.
            </p>
            <p className="font-body text-sm text-muted-foreground leading-relaxed max-w-lg">
              Book your slots to discuss trade potential, explore emerging markets, exchange business cards, and access exclusive international trade services. Tap into the expertise of our global network of partners and take the next step toward expanding your business internationally.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 h-12 text-sm font-bold shadow-lg">
                Register Now
              </Button>
              <Button variant="outline" className="rounded-full px-8 h-12 text-sm font-bold border-border bg-card/50 hover:bg-muted/50 text-foreground group">
                Learn More <ArrowRight className="ml-2 size-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-8 mt-8 border-t border-border/50">
                <div className="flex flex-col text-left">
                    <span className="font-heading font-black text-3xl text-foreground">10,218+</span>
                    <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mt-1">Users Registered</span>
                </div>
                <div className="flex flex-col text-left">
                    <span className="font-heading font-black text-3xl text-foreground">35+</span>
                    <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mt-1">Countries Connected</span>
                </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
               <div className="space-y-4 mt-12">
                 <div className="bg-card border border-border p-6 rounded-2xl shadow-xl flex flex-col items-center text-center hover:border-primary/40 transition-colors">
                    <div className="size-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
                        <Users className="size-6" />
                    </div>
                    <h3 className="font-heading font-bold text-foreground mb-2">Participant</h3>
                    <p className="text-xs text-muted-foreground mb-4">Join to connect and trade anytime, anywhere.</p>
                    <Button variant="outline" className="w-full text-xs font-bold rounded-full">Register</Button>
                 </div>
               </div>

               <div className="space-y-4">
                 <div className="bg-card border border-border p-6 rounded-2xl shadow-xl flex flex-col items-center text-center hover:border-primary/40 transition-colors">
                    <div className="size-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
                        <PresentationChart className="size-6" />
                    </div>
                    <h3 className="font-heading font-bold text-foreground mb-2">Collaborator</h3>
                    <p className="text-xs text-muted-foreground mb-4">Partner with us across 35+ countries.</p>
                    <Button variant="outline" className="w-full text-xs font-bold rounded-full">Register</Button>
                 </div>

                 <div className="rounded-2xl border border-border overflow-hidden shadow-lg aspect-square">
                    <img
                        src="https://www.aecci.org.in/wp-content/uploads/2024/10/www.aecci_.org_.in-8.png"
                        alt="B2B Forum Promotion"
                        className="w-full h-full object-cover"
                    />
                 </div>
               </div>
            </div>

            <div className="absolute -z-10 inset-0 bg-gradient-to-tr from-primary/10 to-transparent blur-3xl opacity-50 translate-y-12 rounded-full" />
          </motion.div>

        </div>
      </div>
    </section>
  )
}
