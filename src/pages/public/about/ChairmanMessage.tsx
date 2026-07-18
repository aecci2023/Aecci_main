import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
import { Globe, Handshake, Shield, TrendingUp, Quote } from "lucide-react";
import chairmanBg from "@/assets/images/image.png";
import { HeroVideoDialog } from "@/components/ui/hero-video-dialog";
import videoThumb from "@/assets/videos/thumbnail.png";
import videoSrc from "@/assets/videos/globalconnect_new.mp4";

const pillars = [
  { icon: Handshake, label: "Trust", sub: "Building Relationships" },
  { icon: Globe, label: "Global", sub: "Connecting Markets" },
  { icon: TrendingUp, label: "Growth", sub: "Creating Opportunities" },
  { icon: Shield, label: "Integrity", sub: "Delivering Excellence" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

export default function ChairmanMessage() {
  return (
    <div className="w-full min-h-screen bg-[#050b14] text-white py-10 md:py-16 px-4 md:px-8 relative overflow-hidden flex flex-col justify-between">
      {/* Premium Glow Elements */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/10 blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-emerald-500/5 blur-[150px] pointer-events-none rounded-full" />

      {/* Main Grid Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 relative z-10 w-full flex-1 items-stretch"
      >
        {/* LEFT COLUMN: Framed Image and Pillars */}
        <div className="lg:col-span-5 flex flex-col justify-between h-full">
          {/* Framed Image */}
          <motion.div variants={itemVariants} className="flex flex-col items-center">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="w-full aspect-[4/5] md:aspect-[3/4] lg:aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative group bg-[#0d1625]"
            >
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat group-hover:scale-105 transition-transform duration-700"
                style={{ backgroundImage: `url(${chairmanBg})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050b14] via-[#050b14]/10 to-transparent opacity-60" />
            </motion.div>
            <div className="text-center mt-6">
              <h2 className="text-2xl md:text-3xl font-bold font-serif text-primary">Shri Jaheer Bukhari</h2>
              <p className="text-white/50 text-xs tracking-widest uppercase mt-1">Chairman, AECCI</p>
            </div>
          </motion.div>

          {/* Pillars Cards */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 gap-4 mt-8 w-full"
          >
            {pillars.map(({ icon: Icon, label, sub }) => (
              <motion.div
                key={label}
                whileHover={{ y: -4, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="p-4 rounded-2xl bg-[#0b1424]/80 border border-white/5 hover:border-primary/20 transition-all duration-300 flex items-center gap-3 shadow-md group"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white group-hover:scale-110 transition-all duration-300 shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-xs uppercase tracking-wider text-white group-hover:text-primary transition-colors">
                    {label}
                  </h4>
                  <p className="text-[10px] text-white/50 leading-tight">
                    {sub}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* RIGHT COLUMN: Message Content */}
        <motion.div
          variants={itemVariants}
          className="lg:col-span-7 bg-[#0b1424]/60 backdrop-blur border border-white/5 rounded-3xl p-6 md:p-10 lg:p-12 shadow-2xl flex flex-col justify-between relative overflow-hidden h-full"
        >
          <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 blur-3xl pointer-events-none rounded-full" />

          <div>
            <div className="flex items-center gap-4 mb-6">
              <span className="text-xs font-bold text-primary uppercase tracking-widest">Leadership Perspective</span>
              <div className="h-px flex-1 bg-white/10" />
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight leading-[1.15] text-white mb-6">
              CHAIRMAN'S <span className="text-primary">MESSAGE</span>
            </h1>

            <div className="relative text-white/80 space-y-5 text-sm md:text-base leading-relaxed">
              <div className="absolute -left-6 -top-4 text-primary/10 pointer-events-none select-none">
                <Quote className="w-12 h-12 rotate-180" />
              </div>
              <p className="text-xl md:text-2xl text-primary font-serif italic mb-4">
                Welcome to AECCI
              </p>
              <p>
                At AECCI, our mission is to empower Indian businesses by connecting them with global opportunities, trusted experts, and strategic international partners. Through our Global Deal Room, we provide a platform for exporters, manufacturers, entrepreneurs, and investors to build meaningful business relationships, access new markets, and receive expert guidance.
              </p>
              <p>
                By fostering collaboration with government bodies, trade organizations, and international business networks, we are committed to helping Indian enterprises grow confidently in the global marketplace.
              </p>
              <p>
                We invite you to join AECCI and become part of a dynamic global network shaping the future of international trade.
              </p>

              {/* Highlight Callout Box to fill empty space */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 p-5 rounded-2xl bg-[#050b14]/50 border border-white/5 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 blur-xl pointer-events-none rounded-full" />
                <div className="space-y-1">
                  <span className="text-[10px] uppercase font-bold text-primary tracking-widest">Active Footprint</span>
                  <h5 className="font-bold text-sm text-white">50+ Countries Connected</h5>
                  <p className="text-[10px] text-white/50 leading-relaxed">
                    Partnering with global chambers and trade offices to establish verified routes for exporters.
                  </p>
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] uppercase font-bold text-primary tracking-widest">Digital Solutions</span>
                  <h5 className="font-bold text-sm text-white">Global Deal Room</h5>
                  <p className="text-[10px] text-white/50 leading-relaxed">
                    A digital-first platform connecting Indian suppliers directly to international distribution pathways.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Signature and motto */}
          <div className="mt-8 border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-center sm:text-left">
              <p className="text-white/50 text-[10px] tracking-[0.2em] uppercase mb-1">
                Together we connect. Together we grow.
              </p>
              <h4 className="text-primary font-bold text-xs uppercase tracking-wider">
                Together we succeed.
              </h4>
            </div>

            <div className="text-center sm:text-right">
              <p className="font-serif italic text-2xl text-primary mb-1">Shri Jaheer Bukhari</p>
              <p className="text-[10px] text-white/50 tracking-widest uppercase">Chairman, AECCI</p>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Chairman Video Section (Separate) */}
      <section className="max-w-7xl mx-auto mt-16 md:mt-20 px-4 relative z-10 w-full">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-2">
            Hear from our <span className="text-primary">Chairman</span>
          </h2>
          <p className="text-white/50 text-sm">Watch the video address to learn more about our strategic global objectives.</p>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative mx-auto max-w-5xl rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-[#0d1625]/50 backdrop-blur p-2"
        >
          <HeroVideoDialog
            className="block"
            animationStyle="from-center"
            videoSrc={videoSrc}
            thumbnailSrc={videoThumb}
            thumbnailAlt="Chairman Message Video"
            defaultOpen={false}
          />
        </motion.div>
      </section>

      {/* Footer bar */}
      <div className="max-w-7xl mx-auto w-full border-t border-white/5 mt-12 pt-6 pb-2 flex flex-col sm:flex-row items-center justify-between text-xs tracking-widest gap-3 relative z-10">
        <a
          href="https://www.aecci.org.in"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-white/50 hover:text-primary transition-colors cursor-pointer"
        >
          <Globe className="w-4 h-4" />
          <span>www.aecci.org.in</span>
        </a>
        <div className="text-primary font-bold uppercase">
          SOURCING ENTERPRISE
        </div>
      </div>
    </div>
  );
}
