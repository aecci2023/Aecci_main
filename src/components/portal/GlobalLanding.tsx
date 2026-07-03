import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  BarChart,
  Box,
  Clock,
  Globe,
  Handshake,
  Play,
  Rocket,
  ShieldCheck,
  User,
  UserCheck,
  Users,
  XIcon,
} from "lucide-react";

import { Link } from "react-router-dom";
import { createPortal } from "react-dom";
import AnimatedWorldMap from "./AnimatedWorldMap";
import { QRCodeSVG } from "qrcode.react";
import videoSrc from "@/assets/videos/globalroomwork_v2.mp4";

export default function GlobalLanding() {
  const [isVideoOpen, setIsVideoOpen] = useState(true);

  return (
    <>
    <div className="dark w-full font-sans">
      {/* 1. HERO SECTION */}
      <section className="relative w-full bg-background text-foreground overflow-hidden pt-24 pb-32">
        {/* Background glow */}
        <div
          className="absolute inset-0 z-0 opacity-80 mix-blend-screen pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 70% 30%, color-mix(in oklch, var(--primary) 20%, transparent) 0%, transparent 60%)",
          }}
        ></div>

        {/* The Animated SVG Map */}
        <AnimatedWorldMap />

        <div className="max-w-[1400px] mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block border border-primary/30 rounded-full px-4 py-1.5 text-xs font-bold tracking-wider text-primary uppercase bg-primary/10"
            >
              Welcome to AECCI Global Deal Room
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight"
            >
              Access Global Markets.
              <br />
              Build <span className="text-primary">Real Opportunities.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-muted-foreground max-w-2xl leading-relaxed"
            >
              Connect with verified international partners through 30-minute
              focused sessions, market intelligence, and post-session support to
              grow your export business globally.
            </motion.p>

            {/* Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-6 pt-2"
            >
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-8 h-8 text-primary shrink-0" />
                <div>
                  <h4 className="font-bold text-sm">Verified Partners</h4>
                  <p className="text-xs text-muted-foreground">
                    Trusted & screened
                    <br />
                    international partners
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-8 h-8 text-primary shrink-0" />
                <div>
                  <h4 className="font-bold text-sm">30-Minute Sessions</h4>
                  <p className="text-xs text-muted-foreground">
                    Focused, effective &<br />
                    result-oriented
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <BarChart className="w-8 h-8 text-primary shrink-0" />
                <div>
                  <h4 className="font-bold text-sm">Market Intelligence</h4>
                  <p className="text-xs text-muted-foreground">
                    Data-driven insights
                    <br />
                    for smarter decisions
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap items-center gap-4 pt-6"
            >
              <Link
                to="/login"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-3.5 px-8 rounded flex items-center gap-2 transition-colors"
              >
                Explore Deal Rooms <ArrowRight className="w-5 h-5" />
              </Link>
              <button
                onClick={() => setIsVideoOpen(true)}
                className="bg-transparent hover:bg-foreground/5 border border-border text-foreground font-semibold py-3.5 px-8 rounded flex items-center gap-2 transition-colors"
              >
                <Play className="w-4 h-4 fill-current text-primary" /> How It
                Works
              </button>
            </motion.div>
          </div>

          {/* Right Floating Card - Upcoming Deal Rooms */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-5 relative"
          >
            <div className="bg-card border border-border rounded-xl overflow-hidden shadow-2xl backdrop-blur-sm relative z-10">
              <div className="flex items-center justify-between p-5 border-b border-border bg-muted/30">
                <div className="flex items-center gap-2 text-primary text-sm font-bold uppercase tracking-wider">
                  <Clock className="w-4 h-4" /> Upcoming Deal Rooms
                </div>
                <button className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-1 transition-colors">
                  View All <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="p-2">
                {[
                  {
                    country: "Kenya",
                    sector: "Agriculture & Food Products",
                    date: "22 May 2025",
                    flag: "🇰🇪",
                  },
                  {
                    country: "UAE",
                    sector: "Building Materials & Construction",
                    date: "24 May 2025",
                    flag: "🇦🇪",
                  },
                  {
                    country: "Ghana",
                    sector: "Textiles & Garments",
                    date: "26 May 2025",
                    flag: "🇬🇭",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between p-4 hover:bg-muted/40 rounded-lg transition-colors group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-8 rounded border border-border bg-muted/20 flex items-center justify-center text-xl overflow-hidden shadow-inner">
                        {item.flag}
                      </div>
                      <div>
                        <h4 className="font-bold text-foreground text-sm">
                          {item.country}
                        </h4>
                        <p className="text-xs text-muted-foreground">
                          {item.sector}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-6">
                      <span className="text-primary text-sm font-semibold">
                        {item.date}
                      </span>
                      <button className="opacity-0 group-hover:opacity-100 transition-opacity text-xs border border-border hover:bg-muted/40 px-3 py-1.5 rounded text-foreground">
                        View Details
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination dots */}
              <div className="flex justify-center gap-1.5 pb-4">
                <div className="w-4 h-1.5 rounded-full bg-primary"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-border"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-border"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-border"></div>
              </div>
            </div>

            {/* Decorative glow behind card */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/10 blur-[100px] rounded-full -z-10 pointer-events-none" />
          </motion.div>
        </div>
      </section>

      {/* 2. REGISTRATION ROLES SECTION */}
      <section className="bg-white py-16 relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 relative z-10">
          <div className="flex items-center gap-6 mb-12">
            <div className="h-px bg-gray-300 flex-1"></div>
            <h2 className="text-sm md:text-lg font-bold text-gray-900 uppercase tracking-[0.2em] text-center whitespace-nowrap">
              CONNECT YOURSELF TO AECCI GLOBAL DEAL ROOM
            </h2>
            <div className="h-px bg-gray-300 flex-1"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1: Partner */}
            <div className="bg-gray-950 text-white rounded-2xl p-6 text-center border border-blue-500/20 hover:border-blue-500/50 transition-colors flex flex-col items-center">
              <div className="w-20 h-20 rounded-full border border-blue-500/30 flex items-center justify-center bg-blue-500/10 mb-6 shadow-[0_0_30px_color-mix(in_oklch,theme(colors.blue.500)_30%,transparent)]">
                <Handshake className="w-10 h-10 text-blue-500 drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
              </div>
              <h3 className="text-lg font-bold mb-4 min-h-[56px] flex items-center justify-center">Register as<br/>Collaboration Partner</h3>
              <p className="text-sm text-gray-400 mb-8 flex-1">
                For organizations, chambers, institutions & businesses who want to collaborate with AECCI globally.
              </p>
              <Link to="/partner/register" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded transition-colors flex items-center justify-center gap-2">
                Register as Partner <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Card 2: Participant */}
            <div className="bg-gray-950 text-white rounded-2xl p-6 text-center border border-emerald-500/20 hover:border-emerald-500/50 transition-colors flex flex-col items-center">
              <div className="w-20 h-20 rounded-full border border-emerald-500/30 flex items-center justify-center bg-emerald-500/10 mb-6 shadow-[0_0_30px_color-mix(in_oklch,theme(colors.emerald.500)_30%,transparent)]">
                <Users className="w-10 h-10 text-emerald-500 drop-shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
              </div>
              <h3 className="text-lg font-bold mb-4 min-h-[56px] flex items-center justify-center">Register as<br/>Participant</h3>
              <p className="text-sm text-gray-400 mb-8 flex-1">
                For businesses, exporters & professionals who want to participate in deal rooms and grow globally.
              </p>
              <Link to="/signup" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 rounded transition-colors flex items-center justify-center gap-2">
                Register as Participant <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Card 3: Importer */}
            <div className="bg-gray-950 text-white rounded-2xl p-6 text-center border border-purple-500/20 hover:border-purple-500/50 transition-colors flex flex-col items-center">
              <div className="w-20 h-20 rounded-full border border-purple-500/30 flex items-center justify-center bg-purple-500/10 mb-6 shadow-[0_0_30px_color-mix(in_oklch,theme(colors.purple.500)_30%,transparent)]">
                <User className="w-10 h-10 text-purple-500 drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]" />
              </div>
              <h3 className="text-lg font-bold mb-4 min-h-[56px] flex items-center justify-center">Register as<br/>Importer</h3>
              <p className="text-sm text-gray-400 mb-8 flex-1">
                For global importers looking to connect with verified Indian exporters through deal rooms.
              </p>
              <Link to="/importer/register" className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded transition-colors flex items-center justify-center gap-2">
                Register as Importer <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Card 4: Intending Agent */}
            <div className="bg-gray-950 text-white rounded-2xl p-6 text-center border border-orange-500/20 hover:border-orange-500/50 transition-colors flex flex-col items-center">
              <div className="w-20 h-20 rounded-full border border-orange-500/30 flex items-center justify-center bg-orange-500/10 mb-6 shadow-[0_0_30px_color-mix(in_oklch,theme(colors.orange.500)_30%,transparent)]">
                <UserCheck className="w-10 h-10 text-orange-500 drop-shadow-[0_0_10px_rgba(249,115,22,0.5)]" />
              </div>
              <h3 className="text-lg font-bold mb-4 min-h-[56px] flex items-center justify-center">Register as<br/>Intending Agent</h3>
              <p className="text-sm text-gray-400 mb-8 flex-1">
                For trade agents, brokers & representatives who want to explore business opportunities in India.
              </p>
              <Link to="/agent/register" className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded transition-colors flex items-center justify-center gap-2">
                Register as Agent <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. STATS STRIP */}
      <section className="bg-background py-12 border-y border-border">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 divide-x divide-border">
            <div className="flex items-center gap-4 px-4">
              <Globe className="w-10 h-10 text-primary shrink-0" />
              <div>
                <h3 className="text-3xl font-bold text-foreground">50+</h3>
                <p className="text-xs text-muted-foreground uppercase tracking-wide font-semibold mt-1">
                  Countries Covered
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 px-4">
              <Handshake className="w-10 h-10 text-primary shrink-0" />
              <div>
                <h3 className="text-3xl font-bold text-foreground">300+</h3>
                <p className="text-xs text-muted-foreground uppercase tracking-wide font-semibold mt-1">
                  Verified Partners
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 px-4">
              <Users className="w-10 h-10 text-primary shrink-0" />
              <div>
                <h3 className="text-3xl font-bold text-foreground">1500+</h3>
                <p className="text-xs text-muted-foreground uppercase tracking-wide font-semibold mt-1">
                  Exporters Onboarded
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 px-4">
              <Clock className="w-10 h-10 text-primary shrink-0" />
              <div>
                <h3 className="text-3xl font-bold text-foreground">2500+</h3>
                <p className="text-xs text-muted-foreground uppercase tracking-wide font-semibold mt-1">
                  Deal Rooms Conducted
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 px-4">
              <BarChart className="w-10 h-10 text-primary shrink-0" />
              <div>
                <h3 className="text-3xl font-bold text-foreground">₹200Cr+</h3>
                <p className="text-xs text-muted-foreground uppercase tracking-wide font-semibold mt-1">
                  Business Opportunities
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CTA & TRUST BADGES */}
      <section className="bg-white py-20 overflow-hidden relative border-t border-gray-200">
        <div className="max-w-[1400px] mx-auto px-6 relative z-10">
          {/* Main CTA Box */}
          <div className="bg-gray-950 text-white rounded-2xl p-8 md:p-12 flex flex-col lg:flex-row items-center justify-between gap-10 shadow-2xl mb-16 relative overflow-hidden border border-gray-800">
            {/* Glow inside box */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[600px] h-[200px] bg-primary/10 blur-[100px] rounded-full pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />

            <div className="flex items-center gap-6 z-10">
              <div className="w-16 h-16 rounded-full border border-primary/30 flex items-center justify-center shrink-0">
                <Rocket className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">
                  Your Next Global Opportunity is One Registration Away
                </h2>
                <p className="text-gray-400">
                  Join AECCI Global Deal Room and connect with the right
                  partners, faster.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-6 z-10 shrink-0">
              <button className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-4 px-8 rounded flex items-center gap-2 transition-colors shadow-lg shadow-primary/20 text-lg">
                Register Now <ArrowRight className="w-5 h-5" />
              </button>
              {/* QR Code */}
              <div className="hidden sm:flex flex-col items-center bg-white p-2 rounded shadow-inner border border-gray-100">
                <QRCodeSVG
                  value="https://www.aecci.org.in/signup"
                  size={80}
                  level="M"
                  fgColor="#0B1120"
                />
                <span className="text-[9px] font-bold text-gray-800 mt-1.5 uppercase tracking-wider">
                  Scan to Register
                </span>
              </div>
            </div>
          </div>

          {/* Trust Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-gray-50 rounded border border-gray-200 shrink-0">
                <ShieldCheck className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-gray-900">
                  Secure & Trusted Platform
                </h4>
                <p className="text-xs text-gray-500 mt-1">
                  Enterprise-grade security
                  <br />
                  for your business data
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-gray-50 rounded border border-gray-200 shrink-0">
                <Box className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-gray-900">
                  Transparent Process
                </h4>
                <p className="text-xs text-gray-500 mt-1">
                  Clear screening, verified partners
                  <br />& honest engagements
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-gray-50 rounded border border-gray-200 shrink-0">
                <Handshake className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-gray-900">
                  No Commitment Until You Choose
                </h4>
                <p className="text-xs text-gray-500 mt-1">
                  You decide where, when
                  <br />& how to engage
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-gray-50 rounded border border-gray-200 shrink-0">
                <Globe className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-gray-900">
                  Built for Global Trade
                </h4>
                <p className="text-xs text-gray-500 mt-1">
                  Designed by exporters,
                  <br />
                  for exporters like you
                </p>
              </div>
            </div>
          </div>

          {/* Tagline Footer */}
          <div className="mt-20 text-center border-t border-gray-200 pt-10 pb-10">
            <p className="text-xl font-medium text-gray-600 tracking-wide">
              <span className="text-gray-900 font-bold">Trusted</span> by Exporters.{" "}
              <span className="text-gray-900 font-bold">Connected</span> to the World.
            </p>
          </div>
        </div>
      </section>
    </div>

      {/* Video Modal */}
      {typeof window !== "undefined" &&
        createPortal(
          <AnimatePresence>
            {isVideoOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                role="button"
                tabIndex={0}
                onClick={() => setIsVideoOpen(false)}
                onKeyDown={(e) => {
                  if (e.key === "Escape" || e.key === "Enter" || e.key === " ")
                    setIsVideoOpen(false);
                }}
                className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-md"
              >
                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.5, opacity: 0 }}
                  transition={{ type: "spring", damping: 30, stiffness: 300 }}
                  className="relative mx-4 aspect-video w-full max-w-4xl md:mx-0"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    className="absolute -top-16 right-0 rounded-full bg-neutral-900/50 p-2 text-xl text-white ring-1 backdrop-blur-md cursor-pointer hover:bg-neutral-900/80 transition-colors"
                    onClick={() => setIsVideoOpen(false)}
                  >
                    <XIcon className="size-5" />
                  </button>
                  <div className="relative isolate z-1 size-full overflow-hidden rounded-2xl border-2 border-white bg-black">
                    <video
                      src={videoSrc}
                      className="size-full rounded-2xl object-contain"
                      autoPlay
                      controls
                      playsInline
                    />
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </>
  );
}
