import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MessageSquare } from "lucide-react";

export default function ModelClausePage() {
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
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-background mb-6 leading-tight uppercase">
              Model Clause
            </h1>
            <p className="text-background/70 text-base md:text-lg leading-relaxed">
              Anytime while seeking export if there’s any agreements prepared
              such as Distribution Agreement, Authorization Letters, PO’s, or
              any other Sales Contracts you are encouraged to mention the model
              clause of AECCI-IAC.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-sm md:text-base text-muted-foreground leading-relaxed space-y-12">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-primary underline underline-offset-4">
              AECCI-IAC MODEL CLAUSE:
            </h2>
            <div className="bg-muted p-6 md:p-10 rounded-lg border border-border shadow-sm">
              <p className="text-foreground text-base md:text-lg italic font-medium leading-loose text-justify">
                "Any dispute arising out of or in connection with this
                Agreement, including any question regarding its existence,
                validity or termination shall be referred to and finally
                resolved by arbitration in accordance with the Arbitration Rules
                of the AECCI- International Arbitration Centre (AECCI – IAC
                Rules) which rules are deemed to be incorporated by the
                reference in this clause. The seat of the arbitration shall be
                India. All proceedings of such arbitration shall be in the
                English language.
                <br />
                <br />
                The Tribunal shall consist of [one/three] arbitrator(s)."
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between bg-primary/5 p-6 rounded-lg border border-primary/20">
            <h3 className="text-lg md:text-xl font-bold text-foreground mb-4 md:mb-0">
              Need Drafting help ?
            </h3>
            <Link
              to="https://api.whatsapp.com/send/?phone=8433720996&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-bold hover:bg-primary/90 transition-colors"
            >
              <MessageSquare className="w-5 h-5" />
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
