import { motion } from "framer-motion";
import { Handshake, Globe, TrendingUp, Shield } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import chairmanBg from "../../assets/images/image.png";

const pillars = [
  { icon: Handshake, label: "Trust", sub: "Building Relationships" },
  { icon: Globe, label: "Global", sub: "Connecting Markets" },
  { icon: TrendingUp, label: "Growth", sub: "Creating Opportunities" },
  { icon: Shield, label: "Integrity", sub: "Delivering Excellence" },
];

export default function ChairmanMessage() {
  return (
    <div className="w-full bg-background text-foreground">

      {/* Two-column layout */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row w-full bg-foreground min-h-screen">

        {/* LEFT: Image + pillars */}
        <div className="w-full md:w-1/2 relative flex flex-col items-center pt-12 pb-24 px-6 min-h-[400px] md:min-h-[600px]">
          <div
            className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${chairmanBg})` }}
          />
          <div className="hidden md:block absolute inset-0 z-0 bg-gradient-to-t from-foreground via-transparent to-transparent opacity-90" />

          <div className="relative z-10 hidden md:flex flex-col items-center h-full w-full justify-end">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="w-full mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 text-center"
            >
              {pillars.map(({ icon: Icon, label, sub }) => (
                <div key={label} className="flex flex-col items-center">
                  <div className="w-10 h-10 flex items-center justify-center text-primary mb-2 bg-background/10 backdrop-blur-sm rounded-lg border border-primary/20">
                    <Icon className="w-5 h-5" />
                  </div>
                  <p className="text-background font-bold text-[10px] uppercase tracking-wider mb-1">{label}</p>
                  <p className="text-background/50 text-[8px] leading-tight">{sub.replace(" ", "\n")}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* RIGHT: Message */}
        <div className="w-full md:w-1/2 bg-foreground relative z-10 -mt-12 rounded-t-[60px] md:mt-0 md:-ml-8 md:rounded-t-none md:rounded-l-[80px] lg:rounded-l-[120px] shadow-2xl flex flex-col justify-between">
          <div className="px-8 py-16 md:px-14 md:py-20 lg:px-20 flex-1">

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-10 text-center"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-wide leading-none text-primary">
                CHAIRMAN'S<br />
                <span className="text-background">MESSAGE</span>
              </h1>
              <div className="flex items-center justify-center gap-4 my-6">
                <div className="h-px flex-1 bg-primary/30" />
                <div className="w-2 h-2 rotate-45 bg-primary" />
                <div className="h-px flex-1 bg-primary/30" />
              </div>
              <p className="text-primary text-xs md:text-sm font-bold uppercase tracking-[0.2em]">
                CONNECTING INDIAN ENTERPRISE<br />WITH GLOBAL OPPORTUNITIES
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-5 text-background/70 text-sm md:text-base leading-relaxed"
            >
              <p className="italic text-3xl md:text-4xl text-primary mb-4" style={{ fontFamily: "Georgia, serif" }}>
                Welcome to AECCI
              </p>
              <p>
                At AECCI, we believe that international trade is built on trust, integrity, innovation, and collaboration. Our mission is to empower exporters, manufacturers, entrepreneurs, and professionals by providing world-class business support, legal guidance, market intelligence, and global networking opportunities.
              </p>
              <p>
                We are committed to strengthening India's position in international trade through strategic partnerships, digital transformation, and sustainable business practices.
              </p>
              <p>
                Together, we can create new opportunities, expand global markets, and contribute to India's economic growth.
              </p>
              <p>
                I warmly invite exporters, industrialists, startups, and business leaders to become part of the AECCI family and join us in building a stronger global business community.
              </p>
            </motion.div>
          </div>

          {/* Banner */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full bg-primary py-4 px-8 text-center"
          >
            <p className="text-primary-foreground font-bold uppercase text-xs md:text-sm tracking-[0.15em]">
              TOGETHER WE CONNECT. TOGETHER WE GROW. TOGETHER WE SUCCEED.
            </p>
          </motion.div>

          {/* Signature */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="px-8 py-10 md:px-14 text-center"
          >
            <p className="italic text-4xl text-primary mb-4 opacity-90" style={{ fontFamily: "Georgia, serif" }}>
              Shri Jaheer Bukhari
            </p>
            <Separator className="w-12 mx-auto mb-4 bg-primary/30" />
            <p className="text-background font-bold tracking-widest text-sm mb-1">CHAIRMAN</p>
            <p className="text-background/50 text-xs tracking-wider uppercase leading-relaxed">
              ASIAN EXPORTERS' CHAMBER<br />OF COMMERCE &amp; INDUSTRY<br />
              <span className="text-primary font-bold">(AECCI)</span>
            </p>
          </motion.div>
        </div>
      </div>

      {/* Footer bar */}
      <div className="max-w-7xl mx-auto w-full bg-foreground border-t border-primary/20 py-4 px-8 flex flex-col sm:flex-row items-center justify-between text-xs tracking-widest gap-3">
        <div className="flex items-center gap-2 text-background/50 hover:text-primary transition-colors cursor-pointer">
          <Globe className="w-4 h-4" />
          <span>www.aecci.org.in</span>
        </div>
        <div className="text-primary font-bold uppercase">SOURCING ENTERPRISE</div>
      </div>
    </div>
  );
}
