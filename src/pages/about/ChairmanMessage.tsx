import { motion } from "framer-motion"

export default function ChairmanMessage() {
  return (
    <div className="py-24 max-w-4xl mx-auto px-6 md:px-12 text-left">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <span className="text-xs font-bold text-primary uppercase tracking-widest mb-3 block">Chairman's Message</span>
        <h1 className="font-heading font-black text-4xl md:text-5xl text-foreground mb-8">Building Global Connections. Creating New Opportunities.</h1>

        <div className="space-y-6 font-body text-base text-muted-foreground leading-relaxed">
          <p className="font-bold text-foreground">Welcome to the Asian Exporters' Chamber of Commerce &  Industry (AECCI).</p>

          {/* <p>Welcome to AECCI website!</p> */}

          <p>
            The world of international trade is evolving rapidly, and businesses today need more than
            information- they need the right connections, trusted expertise and timely opportunities. At
            AECCI, we are committed to making global business more accessible for Indian enterprises
            by creating an ecosystem where meaningful partnerships can flourish.
          </p>

          <p>
            Our vision is to transform AECCI from a traditional chamber into a dynamic Global Deal
            Room- a platform where Indian exporters, manufacturers, startups and entrepreneurs can
            connect directly with international experts, trade advisors, legal professionals, investment
            advisors   and business organizations across the world.<br></br>
            Through this initiative, we aim to simplify cross-border business by providing a trusted
            environment for business growth, expert consultations, strategic partnerships and market
            access. Whether you are entering a new international market or expanding your global
            presence, AECCI is committed to supporting your journey with the right network and
            resources.<br></br>
            Our strength lies in collaboration. By working closely with government institutions, trade
            promotion organizations, industry experts and diplomats, we are building a global
            ecosystem that empowers businesses to grow beyond borders.<br></br>
            As global markets become increasingly interconnected, India&#39;s exporters have an
            unprecedented opportunity to lead. We believe innovation, digital connectivity and
            international collaborations will define the next era of trade, and AECCI is proud to be at the
            forefront of this transformation.<br></br>
            I warmly invite exporters, entrepreneurs, investors, professionals, trade organizations and
            international partners to become part of this growing global network. Together, we can
            create new opportunities, strengthen international partnerships and contribute to India&#39;s
            emergence as a leading global trading nation.
          </p>

          <p>Thank you for visiting AECCI. We look forward  to partnering with you in shaping the future
          of global commerce.</p>

          <div className="pt-2 pb-4">
          <p className="font-heading font-black text-xl text-foreground">Shri Jaheer Bukhari</p>
          <p className="text-xs font-bold text-primary uppercase tracking-widest mt-1">Hon’ble Board Chairman</p>
          <p className="text-xs font-bold text-primary uppercase tracking-widest mt-1">Asian Exporters' Chamber of Commerce & Industry (AECCI)</p>
          </div>

          <blockquote className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-xl italic font-heading text-lg text-foreground/80 mt-8 shadow-sm">
            ❝ Our vision gives us a deep conviction that our endeavor will help spur India & Asia's role as a global trade hub & support long-term growth for the nation & the broader region.❞
          </blockquote>

        </div>
      </motion.div>
    </div>
  )
}
