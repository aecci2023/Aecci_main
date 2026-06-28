import { motion } from "framer-motion";
import { Handshake, Globe, TrendingUp, Shield } from "lucide-react";
import chairmanBg from "../../assets/images/image.png";

export default function ChairmanMessage() {
  return (
    <div className="w-full bg-white font-body">

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row w-full bg-slate-950">

        {/* LEFT COLUMN: Visuals */}
        <div className="w-full md:w-1/2 relative flex flex-col items-center pt-12 pb-24 px-6 min-h-[500px]">
          {/* Background Image */}
          <div
            className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${chairmanBg})` }}
          ></div>

          {/* Subtle gradient so icons at the bottom remain readable */}
          <div className="hidden md:block absolute inset-0 z-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-90"></div>

          <div className="relative z-10 hidden md:flex flex-col items-center h-full w-full justify-end">
            {/* Bottom Icons Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="w-full mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-2 text-center"
            >
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 flex items-center justify-center text-primary mb-2 bg-slate-800 rounded-lg">
                  <Handshake className="w-5 h-5" />
                </div>
                <p className="text-white font-bold text-[10px] uppercase tracking-wider mb-1">Trust</p>
                <p className="text-slate-400 text-[8px] leading-tight">Building<br />Relationships</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 flex items-center justify-center text-primary mb-2 bg-slate-800 rounded-lg">
                  <Globe className="w-5 h-5" />
                </div>
                <p className="text-white font-bold text-[10px] uppercase tracking-wider mb-1">Global</p>
                <p className="text-slate-400 text-[8px] leading-tight">Connecting<br />Markets</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 flex items-center justify-center text-primary mb-2 bg-slate-800 rounded-lg">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <p className="text-white font-bold text-[10px] uppercase tracking-wider mb-1">Growth</p>
                <p className="text-slate-400 text-[8px] leading-tight">Creating<br />Opportunities</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 flex items-center justify-center text-primary mb-2 bg-slate-800 rounded-lg">
                  <Shield className="w-5 h-5" />
                </div>
                <p className="text-white font-bold text-[10px] uppercase tracking-wider mb-1">Integrity</p>
                <p className="text-slate-400 text-[8px] leading-tight">Delivering<br />Excellence</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* RIGHT COLUMN: Message Area */}
        <div className="w-full md:w-1/2 bg-slate-950 relative z-10 -mt-12 rounded-t-[60px] md:mt-0 md:-ml-8 md:rounded-t-none md:rounded-l-[80px] lg:rounded-l-[120px] shadow-[0_-20px_50px_rgba(0,0,0,0.5)] md:shadow-[-20px_0_50px_rgba(0,0,0,0.5)] flex flex-col justify-between">
          <div className="relative z-10 px-8 py-16 md:px-16 md:py-20 lg:px-24 flex-1">

            {/* Header Title */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-10 text-center"
            >
              <h1 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl uppercase tracking-wide leading-none text-primary">
                CHAIRMAN'S<br />
                <span className="text-white">MESSAGE</span>
              </h1>
              <div className="flex items-center justify-center gap-4 my-6">
                <div className="h-[1px] flex-1 bg-primary/30"></div>
                <div className="w-2 h-2 rotate-45 bg-primary"></div>
                <div className="h-[1px] flex-1 bg-primary/30"></div>
              </div>
              <h2 className="text-primary text-sm md:text-base font-bold uppercase tracking-[0.2em]">
                CONNECTING INDIAN ENTERPRISE<br />WITH GLOBAL OPPORTUNITIES
              </h2>
            </motion.div>

            {/* Letter Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6 text-slate-300 font-light text-sm md:text-base leading-relaxed"
            >
              <p className="font-serif italic text-3xl md:text-4xl text-primary mb-6">
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

          {/* Banner Strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full bg-primary py-4 px-8 text-center"
          >
            <p className="text-slate-900 font-black uppercase text-xs md:text-sm tracking-[0.15em]">
              TOGETHER WE <span className="text-white">CONNECT</span>.
              TOGETHER WE <span className="text-white">GROW</span>.
              TOGETHER WE <span className="text-white">SUCCEED</span>.
            </p>
          </motion.div>

          {/* Signature Area */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="px-8 py-10 md:px-16 text-center"
          >
            <div className="font-serif italic text-4xl text-primary mb-4 opacity-90" style={{ fontFamily: "'Brush Script MT', cursive" }}>
              Shri Jaheer Bukhari
            </div>
            <h4 className="text-white font-bold tracking-widest text-sm mb-1">CHAIRMAN</h4>
            <p className="text-slate-400 text-xs tracking-wider uppercase leading-relaxed">
              ASIAN EXPORTERS' CHAMBER<br />OF COMMERCE & INDUSTRY<br />
              <span className="text-primary font-bold">(AECCI)</span>
            </p>
          </motion.div>

        </div>
      </div>

      {/* GLOBAL FOOTER BAR - Now correctly placed outside the flex-row columns */}
      <div className="max-w-7xl mx-auto w-full bg-slate-950 border-t border-primary/20 py-4 px-8 flex flex-col md:flex-row items-center justify-between text-xs tracking-widest">
        <div className="flex items-center gap-2 text-slate-400 hover:text-primary transition-colors cursor-pointer mb-3 md:mb-0">
          <Globe className="w-4 h-4" />
          <span>www.aecci.org.in</span>
        </div>

        <div className="text-primary font-bold uppercase mb-3 md:mb-0">
          SOURCING ENTERPRISE
        </div>
      </div>

    </div>
  );
}
