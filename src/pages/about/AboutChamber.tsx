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
            The Asian Exporters' Chamber of Commerce &amp; Industry (AECCI) is a Government of India
            recognized Chamber under the Ministry of Commerce &amp; Industry, committed to
            transforming the way Indian businesses connect with the world.
          </p>

          <p>
            More than a traditional chamber, AECCI is building a Global Deal Room- a digital ecosystem
            where Indian exporters, manufacturers, startups and service providers can directly engage
            with international trade experts, legal advisors, investment consultants and business
            organizations from across the globe. Through the Global Deal Room, Indian exporters can
            engage directly with international buyers, distribution partners, trade representatives, and
            sourcing agents to explore new business opportunities worldwide.
          </p>

          <h2 className="font-heading font-black text-2xl text-foreground mt-12 mb-4">
            Our mission is simple:
          </h2>
          <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-xl italic">
            To make global business connections faster, smarter and more accessible for every Indian enterprise.
            <br />
            Through strategic international collaborations and industry experts spanning over 50
            countries, AECCI creates meaningful opportunities that help businesses expand into
            international markets with confidence.
            <br />
            Whether you are looking to enter a new market, understand foreign regulations, identify
            trusted partners or negotiate international deals, AECCI provides the platform, expertise,
            and global network to make it happen.
          </div>

          <h2 className="font-heading font-black text-2xl text-foreground mt-12 mb-4">
            Our Vision
          </h2>
          <p>
            To become Asia's most trusted digital trade ecosystem that empowers businesses to build
            international partnerships, accelerate exports and unlock global growth through technology,
            collaboration and expert guidance.
          </p>

          <h2 className="font-heading font-black text-2xl text-foreground mt-12 mb-4">
            Our Mission
          </h2>
          <p>
            To bridge the gap between Indian businesses and the global marketplace by providing
            seamless access to international expertise, strategic partnerships, business intelligence and
            cross-border opportunities through a single digital platform.
          </p>

          <h2 className="font-heading font-black text-2xl text-foreground mt-12 mb-4">
            CHAMBER'S CORE-VALUE
          </h2>
          <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-xl italic">
            "We want to create something worth creating that will endure the
            test of time. independency and neutrality, honesty in managing
            arbitrations, preserving the rights of the client, secrecy and
            confidentiality, prompt &amp; responsible affiliation, distinction in
            performance and working with the spirit of one team. We do this by
            relentlessly focusing on our customer's success, building
            high-quality systems and planning for a long-term scale. We're
            grounded by humility and driven by ambition."
          </div>

          <p>
            The Asian Exporters' Chamber of Commerce and Industry (AECCI),
            recognized by the Ministry of Commerce and Industry, Govt of India,
            is one of the most dynamic and well-established non-profit
            organizations devoted to the cause of promoting the private sector
            contribution to the economy. The Chamber is registered with the
            largest chambers network globally "World Chambers Network" i.e. the
            Official Global Chambers directory.
          </p>
          <p>
            The Chamber has devised several promotional and developmental
            services to provide support to the private sector initiatives in
            industry, trade and services to the Asian community.
          </p>

          <h2 className="font-heading font-black text-2xl text-foreground mt-12 mb-4">
            Our Core Values
          </h2>
          <p>
            <b>Trust-</b> Every connection on our platform is built on transparency, professionalism and credibility.
            <br />
            <b>Global Collaboration-</b> We believe meaningful partnerships create sustainable business growth across borders.
            <br />
            <b>Innovation-</b> We leverage technology to make international business meetings and trade facilitation more efficient than ever before.
            <br />
            <b>Business Excellence-</b> We deliver world-class support that enables businesses to compete confidently in global markets.
            <br />
            <b>Integrity-</b> We uphold the highest standards of ethics, confidentiality and impartiality in every interaction.
            <br />
            <b>Member Success-</b> Our success is measured by the growth, partnerships, and achievements of our members.
            <br />
            <b>Future Ready-</b> We continuously evolve to meet the changing needs of global commerce and digital trade.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
