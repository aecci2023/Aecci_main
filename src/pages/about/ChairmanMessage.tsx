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
        <h1 className="font-heading font-black text-4xl md:text-5xl text-foreground mb-8">Charting a Vision for AECCI</h1>

        <div className="space-y-6 font-body text-base text-muted-foreground leading-relaxed">
          <p className="font-bold text-foreground">A Message from Our Honorable Chairman Shri Jaheer Bukhari</p>

          <p>Welcome to AECCI website!</p>

          <p>
            Through this platform, our goal is to share valuable insights into our mission, who we are, our objectives, and the reasons that drive us. AECCI is dedicated to fostering knowledge, skills, and the adoption of best practices in investment, business, industry, trade, and sustainable policies. We are committed to engaging in productive dialogues with government bodies.
          </p>

          <p>
            Furthermore, we offer our members access to valuable business intelligence and a wealth of opportunities. We facilitate the expansion of their networks, connecting them with Asian and international business partners through various channels and events. In essence, we empower our members to forge connections and achieve their business goals. Our vision instills in us a profound belief that our endeavors will contribute to India and Asia's emergence as key players in global trade, fostering long-term growth for our nation and the wider region.
          </p>

          <p>
            To the business community at large, if you have not yet become a member, I strongly encourage you to take the leap. By joining us, you will enhance your connectivity, stay informed about new prospects, and ensure that your interests are well-represented in the corridors of policymaking. So, seize the opportunity today, embark on the journey of expanding your business, networks, and influence.
          </p>

          <p>
            We extend a warm invitation to Asian and regional companies who wish to join us in this remarkable journey. Your feedback and inquiries about AECCI are always welcome.
          </p>

          <p>Together, let's nurture the growth of India and Asia and other respective Regions.</p>

          <div className="pt-8 pb-4">
             <p className="font-heading font-black text-xl text-foreground">Shri Jaheer Bukhari</p>
             <p className="text-xs font-bold text-primary uppercase tracking-widest mt-1">Hon’ble Board Chairman</p>
          </div>

          <blockquote className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-xl italic font-heading text-lg text-foreground/80 mt-8 shadow-sm">
            ❝ Our vision gives us a deep conviction that our endeavor will help spur India & Asia's role as a global trade hub & support long-term growth for the nation & the broader region.❞
          </blockquote>

        </div>
      </motion.div>
    </div>
  )
}
