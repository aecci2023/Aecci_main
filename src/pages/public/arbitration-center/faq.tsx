import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Is the AECCI- International Arbitration Centre (AECCI-IAC) in Navi Mumbai, India a government department?",
    a: "No, it's an independent, autonomous non-profit organization conducting International Commercial and Maritime Arbitration.",
  },
  {
    q: "Would the AECCI- IAC provide legal advice on the conduct of my arbitration?",
    a: 'Yes, as "an independent permanent arbitral institution," it specializes in commercial arbitration and offers related legal guidance.',
  },
  {
    q: "Who can submit any dispute under the AECCI- IAC Rules?",
    a: "Any contracting party or authorized representative, provided there's an existing arbitration agreement referring disputes to AECCI-IAC.",
  },
  {
    q: "What are the various kinds of disputes that can be submitted under the AECCI- IAC Rules?",
    a: "Commercial, corporate, and construction disputes based on an arbitration clause in the parties' contract.",
  },
  {
    q: "Does AECCI- IAC rules specifically contains a standard Arbitration Clause recommended for parties to include in contract to submit a dispute to AECCI- IAC for arbitration?",
    a: "Yes. It covers seat, hearing location, tribunal constitution, language, and governing law.",
  },
  {
    q: "Do the AECCI- IAC Rules have a default seat or legal place of arbitration?",
    a: "Yes — India. Absent agreement, the AECCI-IAC council decides based on case circumstances and party convenience.",
  },
  {
    q: "Are arbitrations conducted under the AECCI- IAC Rules confidential?",
    a: 'Yes. A standard confidentiality clause binds parties to "strict secrecy" from commencement through final conclusion.',
  },
  {
    q: "Would the AECCI- IAC administer my arbitration if it is seated outside Mumbai or if the governing law is not Indian law?",
    a: "Yes, it can administer proceedings outside India under applicable foreign laws.",
  },
  {
    q: "Can parties choose their own arbitrators in an arbitration administered under the AECCI- IAC Rules?",
    a: "Yes, subject to council confirmation. If parties fail to nominate, the council steps in; deadlocks trigger appointment of a Referee or Umpire Arbitrator.",
  },
  {
    q: "Would the AECCI- IAC appoint an arbitrator in an ad hoc arbitration?",
    a: "Yes, upon payment of the appointment fee.",
  },
  {
    q: "How can I commence arbitration under the AECCI- IAC Rules?",
    a: "File a Request for Arbitration with the Secretariat, backed by either a pre-existing clause or a written post-dispute agreement.",
  },
  {
    q: "Is it possible to consolidate related arbitrations under the AECCI- IAC Rules?",
    a: "Yes, if all parties agree and all claims arise under the same arbitration agreement, the council may consolidate proceedings.",
  },
  {
    q: "Is there a Case Filing Fee and Would I have to pay Case Filing Fees for a counterclaim?",
    a: "Yes — a one-time non-refundable fee: USD 300 (members) / USD 400 (non-members), payable for counterclaims as well.",
  },
  {
    q: "How do I pay the Case Filing Fee?",
    a: "The Case Filing Fee can be paid either by Cheque, Demand Draft, or Pay Order drawn in favour of 'Asian Exporters Chamber of Commerce & Industry' through bank transfer.",
  },
  {
    q: "What is the process for expressing interest in becoming an arbitrator for AECCI-International Arbitration Center?",
    a: "Email interest to AECCI-IAC with a completed application form, a covering letter detailing experience, and a detailed CV.",
  },
  {
    q: "Can you explain the Expedited Procedure under the AECCI- IAC Rules?",
    a: 'A streamlined process for low-value, simple disputes (under INR 10 Crore) targeting resolution "within 6 months at a lower cost."',
  },
  {
    q: "What is the procedure for applying for emergency interim relief in an arbitration under the AECCI- IAC Rules?",
    a: "A party may apply to the Secretariat for an Emergency Arbitrator, stating the relief sought, urgency reasons, entitlement basis, and notification steps taken.",
  },
  {
    q: "How quickly will AECCI- IAC Rules appoint an Emergency Arbitrator?",
    a: '"Within one business day" of the application and fee being received, if the Chairman grants the request.',
  },
  {
    q: "Are awards rendered in arbitrations administered under the AECCI- IAC Rules reviewed?",
    a: "Yes. Draft awards go to the Registrar, who may suggest format/content changes, though the tribunal retains final authority.",
  },
  {
    q: "What are the benefits of an arbitration administered under the AECCI- IAC Rules over a domestic ad hoc arbitration?",
    a: "Institutional rules, consolidation, emergency arbitrator mechanisms, expertise-based appointments, administrative support, cost transparency, and award scrutiny before release.",
  },
  {
    q: "Is there a Panel of Arbitrators maintained by AECCI- IAC?",
    a: "Yes, a panel consisting of 8 arbitrators.",
  },
];

export default function AecciIacFaqPage() {
  return (
    <div className="w-full bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative w-full py-16 md:py-24 bg-foreground overflow-hidden flex items-center">
        <div className="absolute right-0 top-0 w-1/2 h-full bg-primary/20 blur-[100px] pointer-events-none rounded-full translate-x-1/3 -translate-y-1/4 z-0" />
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="text-xs font-bold text-primary uppercase tracking-widest mb-3 block">
              Arbitration Center
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-background mb-6 leading-tight uppercase">
              AECCI-IAC FAQ's
            </h1>
            <p className="text-background/70 text-base md:text-lg leading-relaxed">
              Our FAQ section provides answers to some of the most commonly
              asked questions about AECCI-IAC, such as our arbitration process,
              the fees involved, and the qualifications of our arbitrators.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-sm md:text-base text-muted-foreground leading-relaxed"
          >
            In our AECCI-IAC FAQ section, we aim to provide comprehensive
            answers to the most commonly asked questions about arbitration and
            the services we offer. Whether you are a business owner, legal
            practitioner, or an individual seeking resolution for a dispute, our
            FAQ section will provide you with valuable insights into the
            arbitration process and how AECCI-IAC can assist you in achieving
            your goals.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-sm md:text-base text-muted-foreground leading-relaxed mt-4"
          >
            From the advantages of arbitration over litigation to the types of
            disputes that can be resolved through AECCI-IAC, our FAQ section
            covers all the essential information you need to know about our
            institution. With our commitment to transparency, fairness, and
            efficiency, we strive to provide our clients with the highest
            quality arbitration services possible.
          </motion.p>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, idx) => (
                <AccordionItem
                  key={idx}
                  value={`item-${idx}`}
                  className="border border-border rounded-lg px-5 bg-background hover:border-primary/40 transition-colors data-[state=open]:border-primary/60"
                >
                  <AccordionTrigger className="text-sm md:text-base font-semibold text-foreground text-left py-4 hover:no-underline">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-4">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
