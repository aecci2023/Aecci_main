import { motion } from "framer-motion";

export default function OurHistory() {
  return (
    <div className="py-24 max-w-4xl mx-auto px-6 md:px-12 text-left">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <span className="text-xs font-bold text-primary uppercase tracking-widest mb-3 block">
          Our History
        </span>
        <h1 className="font-heading font-black text-4xl md:text-5xl text-foreground mb-8">
          Our History
        </h1>

        <div className="space-y-6 font-body text-base text-muted-foreground leading-relaxed">
          <p className="text-xl font-medium text-foreground mb-8">
            Founded in 2014 with a dream to do something for the betterment of
            the business community and with the pure objective of trade
            orientation.
          </p>

          <p>
            The Asian Exporters’ Chamber of Commerce and Industry ( AECCI ) was
            founded in 2014 by its Honourable chairman Mr. Jaheer Bukhari, who
            is an expert in the EXIM sector with long experience of 22 years in
            Global consultation. With his dream to do something for the
            betterment of the business community, he got the idea to form a
            Chamber; a chamber with the pure objective of trade orientation and
            that can be easily accessed by the business community.
          </p>

          <p>
            This idea with the dedication, hard work and persistence of the core
            team made it possible and today AECCI is known as a chamber that
            works in the public domain. The Chamber has made its reputation by
            organizing more than 30 business promotion events in a single year
            and is proud to have a large member base of loyal and trustworthy
            businessmen and professionals. AECCI, as a non-governmental but
            recognised institution is promoting, representing and safeguarding
            the interests of the Asian business community.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
