import { motion } from "framer-motion";

export default function AboutChamber() {
  return (
    <div className="py-24 max-w-4xl mx-auto px-6 md:px-12 text-left">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <span className="text-xs font-bold text-primary uppercase tracking-widest mb-3 block">
          About AECCI
        </span>

        <h1 className="font-heading font-black text-4xl md:text-5xl text-foreground mb-8">
          Connecting Indian Businesses to Global Opportunities
        </h1>

        <div className="space-y-6 font-body text-base text-muted-foreground leading-relaxed">
          <p>
            The Asian Exporters' Chamber of Commerce & Industry (AECCI) is a
            Government of India recognized Chamber under the Ministry of
            Commerce & Industry, committed to transforming the way Indian
            businesses connect with the world.
          </p>

          <p>
            More than a traditional chamber, AECCI is building a Global Deal
            Room—a digital ecosystem where Indian exporters, manufacturers,
            startups, and service providers can directly engage with
            international trade experts, legal advisors, investment consultants,
            and business organizations from across the globe. Through the Global
            Deal Room, Indian exporters can engage directly with international
            buyers, distribution partners, trade representatives, and sourcing
            agents to explore new business opportunities worldwide.
          </p>

          <h2 className="font-heading font-black text-2xl text-foreground mt-12 mb-4">
            Our Mission
          </h2>

          <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-xl italic">
            To make global business connections faster, smarter and more
            accessible for every Indian enterprise.
            <br />
            <br />
            Through strategic international collaborations and industry experts
            spanning over 50 countries, AECCI creates meaningful opportunities
            that help businesses expand into international markets with
            confidence.
            <br />
            <br />
            Whether you are looking to enter a new market, understand foreign
            regulations, identify trusted partners or negotiate international
            deals, AECCI provides the platform, expertise, and global network to
            make it happen.
          </div>

          <h2 className="font-heading font-black text-2xl text-foreground mt-12 mb-4">
            Our Vision
          </h2>

          <p>
            To become Asia's most trusted digital trade ecosystem that empowers
            businesses to build international partnerships, accelerate exports,
            and unlock global growth through technology, collaboration, and
            expert guidance.
          </p>

          <h2 className="font-heading font-black text-2xl text-foreground mt-12 mb-4">
            Strategic Objective
          </h2>

          <p>
            To bridge the gap between Indian businesses and the global
            marketplace by providing seamless access to international expertise,
            strategic partnerships, business intelligence, and cross-border
            opportunities through a single digital platform.
          </p>

          <h2 className="font-heading font-black text-2xl text-foreground mt-12 mb-4">
            Our Core Values
          </h2>

          <div className="space-y-4">
            <p>
              <strong>Trust</strong> – Every connection on our platform is built
              on transparency, professionalism, and credibility.
            </p>

            <p>
              <strong>Global Collaboration</strong> – We believe meaningful
              partnerships create sustainable business growth across borders.
            </p>

            <p>
              <strong>Innovation</strong> – We leverage technology to make
              international business meetings and trade facilitation more
              efficient than ever before.
            </p>

            <p>
              <strong>Business Excellence</strong> – We deliver world-class
              support that enables businesses to compete confidently in global
              markets.
            </p>

            <p>
              <strong>Integrity</strong> – We uphold the highest standards of
              ethics, confidentiality, and impartiality in every interaction.
            </p>

            <p>
              <strong>Member Success</strong> – Our success is measured by the
              growth, partnerships, and achievements of our members.
            </p>

            <p>
              <strong>Future Ready</strong> – We continuously evolve to meet the
              changing needs of global commerce and digital trade.
            </p>
          </div>

          <blockquote className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-xl italic font-heading text-lg text-foreground/80 mt-8 shadow-sm">
            ❝ AECCI is committed to creating a trusted global ecosystem where
            Indian businesses can connect, collaborate, and grow beyond
            borders. ❞
          </blockquote>
        </div>
      </motion.div>
    </div>
  );
}