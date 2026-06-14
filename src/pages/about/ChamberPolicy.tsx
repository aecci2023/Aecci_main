import { motion } from "framer-motion";

export default function ChamberPolicy() {
  return (
    <div className="py-24 max-w-4xl mx-auto px-6 md:px-12 text-left">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <span className="text-xs font-bold text-primary uppercase tracking-widest mb-3 block">
          Chamber Policy
        </span>
        <h1 className="font-heading font-black text-4xl md:text-5xl text-foreground mb-8">
          Chamber's Policy
        </h1>

        <div className="space-y-6 font-body text-base text-muted-foreground leading-relaxed">
          <p className="text-xl font-medium text-foreground mb-8">
            A Non-Governmental, Non-profit organization, with a legal entity as
            recognized by the Ministry of Commerce And Industry, Govt. of India
            as well as holding independent administrative and financial status.
          </p>

          <p>
            The Asian Exporters’ Chamber of Commerce and Industry (AECCI), is a
            nongovernmental (Non-profit) organization, with a legal entity as
            recognized by the Ministry of Commerce And Industry, Govt. of India
            as well as holding independent administrative and financial status.
          </p>

          <div className="bg-muted/30 border border-border p-6 rounded-xl my-8">
            <h3 className="font-heading font-bold text-lg text-foreground mb-2">
              Section (25) company
            </h3>
            <p>is registered under Section 25 of the Companies Act, 2013</p>
          </div>

          <div className="bg-muted/30 border border-border p-6 rounded-xl my-8">
            <h3 className="font-heading font-bold text-lg text-foreground mb-2">
              Director General Of Foreign Trade
            </h3>
            <p className="text-sm">
              Published in the Gazette of India Extraordinary Part I, Section I
              ( Govt. of India Ministry of Commerce and Industry, Department of
              Commerce) Director General Of Foreign Trade, New Delhi, Public
              Notice No. 55/2015-2020. Dated:18th January 2018 Enlistment under
              Appendix 2E FTP 2015-20 of M/s Asian Exporters' Chamber of
              Commerce and Industry (AECC&I) –Authorized to issue Certificate of
              Origin (Non-Preferential).
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
