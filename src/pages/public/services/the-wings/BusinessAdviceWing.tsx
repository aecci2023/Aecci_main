import { motion } from "framer-motion";
import { Download, Phone } from "lucide-react";

export default function BusinessAdviceWing() {
  return (
    <div className="py-24 max-w-[1280px] mx-auto px-6 md:px-12 text-left">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <span className="text-xs font-bold text-primary uppercase tracking-widest mb-3 block">
          Chamber Wing
        </span>
        <h1 className="font-heading font-black text-4xl md:text-5xl text-foreground mb-8">
          Business Advice Wing
        </h1>

        <div className="space-y-6 font-body text-base text-muted-foreground leading-relaxed">
          <p className="text-xl font-medium text-foreground mb-8">
            Business Advice wing is specialized in understanding the needs and
            importance of delivering the strategic business advice for every
            business.
          </p>

          <p>
            AECCI understands that getting the right information is vital to the
            success of any business; therefore we are here to provide the right
            information at the right time for your businesses. We probably have
            the answer for all your queries and otherwise we have the access to
            all the correct sources to acquire the same.
          </p>
          <p>
            Business Advice wing was established considering the need and
            importance of strategic business advice. The wing is headed by the
            Honourable Chairman of AECCI, Mr. Jaheer Bukhari. With his vast
            experience of 22 years in export-consultation, he is guiding the
            members through Individual counseling sessions.
          </p>
          <p>
            The wing provides advisory services for all your business related
            issues that can help you to save significant amount on legal fees
            and the valuable time seeking advice from other sources.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-card border border-border p-6 rounded-2xl shadow-sm space-y-4">
              <h3 className="font-heading font-bold text-lg text-foreground mb-2 flex items-center gap-2">
                <Phone className="size-5 text-primary" /> Exports Advice Wing's
                Division
              </h3>
              <p className="text-[10px] text-primary uppercase tracking-widest font-bold mb-4">
                (Advice covering worldwide exports Pro's and Con's and any
                product/service)*
              </p>
              <p className="text-sm">
                <span className="font-bold text-foreground">Email:</span>{" "}
                businessadvice@aecci.org.in
              </p>
              <p className="text-sm">
                <span className="font-bold text-foreground">Board lines:</span>{" "}
                +91-22-412 711 45 | 46 | 47
              </p>
              <p className="text-[10px] text-muted-foreground uppercase tracking-widest mt-4">
                *(Consultation available with prior appointment, consultation
                fee applicable)
              </p>
            </div>

            <div className="bg-card border border-border p-6 rounded-2xl shadow-sm space-y-4 flex flex-col justify-center">
              <a
                href="https://www.aecci.org.in/wp-content/uploads/2023/04/Wing-Application-Form.pdf"
                target="_blank"
                rel="noreferrer"
                className="flex items-center text-primary hover:underline text-sm font-bold"
              >
                <Download className="mr-2 size-4" /> Fill the Wing Application
                Form (PDF)
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
