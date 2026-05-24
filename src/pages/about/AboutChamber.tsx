import { motion } from "framer-motion"

export default function AboutChamber() {
  return (
    <div className="py-24 max-w-4xl mx-auto px-6 md:px-12 text-left">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <span className="text-xs font-bold text-primary uppercase tracking-widest mb-3 block">About Chamber</span>
        <h1 className="font-heading font-black text-4xl md:text-5xl text-foreground mb-8">About The Chamber</h1>

        <div className="space-y-6 font-body text-base text-muted-foreground leading-relaxed">
          <p>
            The Asian Exporters’ Chamber of Commerce and Industry (AECCI), recognized by the Ministry of Commerce and Industry, Govt of India, is one of the most dynamic and well-established non-profit organizations devoted to the cause of promoting the private sector contribution to the economy. The Chamber is registered with the largest chambers network globally “World Chambers Network” i.e. the Official Global Chambers directory.
          </p>
          <p>
            The Chamber has devised several promotional and developmental services to provide support to the private sector initiatives in industry, trade and services to the Asian community.
          </p>

          <h2 className="font-heading font-black text-2xl text-foreground mt-12 mb-4">CHAMBER’S CORE-VALUE</h2>
          <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-xl italic">
            "We want to create something worth creating that will endure the test of time. independency and neutrality, honesty in managing arbitrations, preserving the rights of the client, secrecy and confidentiality, prompt & responsible affiliation, distinction in performance and working with the spirit of one team. We do this by relentlessly focusing on our customer's success, building high-quality systems and planning for a long-term scale. We're grounded by humility and driven by ambition."
          </div>

          <h2 className="font-heading font-black text-2xl text-foreground mt-12 mb-4">MISSION</h2>
          <p>
            The Chamber’s mission is to lead the overall development, to ensure future prosperity via a pro-business climate, to represent the unified voice of the trade community and to reduce the business frictions through well-functioning networks.
          </p>

          <h2 className="font-heading font-black text-2xl text-foreground mt-12 mb-4">VISION</h2>
          <p>
            The Chamber’s Vision is to see a voluntary partnership of businesses and professionals working together to build a healthy and prosperous economy with improved quality of life in the community.
          </p>
        </div>
      </motion.div>
    </div>
  )
}
