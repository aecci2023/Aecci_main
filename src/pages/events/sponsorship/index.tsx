import { motion } from "framer-motion";
import {
  Eye,
  TrendingUp,
  Users,
  Globe,
  Award,
  Shield,
  Sliders,
  Zap,
  Trophy,
  Briefcase,
  Heart,
  Target,
  Plane,
  Monitor,
  HandshakeIcon,
  Phone,
  Mail,
  CheckCircle2,
} from "lucide-react";

const benefits = [
  {
    icon: Eye,
    text: "Showcase your brand before a highly targeted business audience.",
  },
  {
    icon: TrendingUp,
    text: "Gain visibility across AECCI's events, publications, website, newsletters, and digital platforms.",
  },
  {
    icon: Users,
    text: "Connect with Indian exporters, manufacturers, MSMEs, startups, and global business leaders.",
  },
  {
    icon: Globe,
    text: "Build relationships with international buyers, distributors, investors, and trade organizations through the Global Deal Room.",
  },
  {
    icon: Trophy,
    text: "Participate in high-impact networking events, trade forums, and B2B business meetings.",
  },
  {
    icon: Award,
    text: "Demonstrate your organization's commitment to promoting international trade and economic development.",
  },
  {
    icon: Shield,
    text: "Enhance brand credibility by partnering with one of India's leading trade promotion organizations.",
  },
  {
    icon: Sliders,
    text: "Access customized sponsorship opportunities tailored to your business objectives.",
  },
];

const events = [
  { icon: Globe, label: "International Trade Conferences" },
  { icon: Award, label: "Business Excellence Awards" },
  { icon: Users, label: "B2B Networking Forums" },
  { icon: TrendingUp, label: "Export Promotion Programs" },
  { icon: Briefcase, label: "Investor Meets" },
  { icon: Heart, label: "Women Entrepreneurship Initiatives" },
  { icon: Target, label: "Golf Networking Events" },
  { icon: Plane, label: "International Trade Delegations" },
  { icon: Monitor, label: "Webinars & Industry Summits" },
  { icon: Zap, label: "Global Deal Room Business Sessions" },
];

export default function SponsorshipPage() {
  return (
    <div className="w-full bg-background font-body text-foreground">

      {/* Hero */}
      <section className="relative w-full py-24 md:py-40 bg-slate-900 text-white overflow-hidden min-h-[520px] flex items-center">
        <div className="absolute right-0 top-0 w-1/2 h-full bg-primary/20 blur-[100px] pointer-events-none rounded-full transform translate-x-1/3 -translate-y-1/4 z-0" />
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none z-0" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="text-xs font-bold text-primary uppercase tracking-widest mb-3 block">
              Sponsorship Opportunities
            </span>
            <h1 className="font-heading font-black text-3xl md:text-4xl lg:text-5xl mb-8 leading-[1.1]">
              Partner with AECCI.<br />
              Amplify Your Brand.<br />
              <span className="text-primary">Shape Global Business.</span>
            </h1>
            <p className="text-slate-300 text-lg md:text-xl leading-relaxed">
              Sponsoring AECCI is more than supporting an event—it's an opportunity to position your brand at the heart of India's growing global trade ecosystem.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-slate-600 text-lg md:text-xl leading-relaxed text-center"
          >
            Through our conferences, business forums, trade delegations, networking events and the Global Deal Room, AECCI connects businesses with exporters, international buyers, government representatives, trade experts, investors and industry leaders from India and around the world. Whether your objective is brand visibility, lead generation, strategic partnerships or market expansion—AECCI sponsorship provides a powerful platform to engage with decision-makers and influential business communities.
          </motion.p>
        </div>
      </section>

      {/* Why Sponsor */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-xs font-bold text-primary uppercase tracking-widest mb-3 block">
              Why Sponsor AECCI?
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-black text-slate-900 mb-6">
              Sponsorship Benefits
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
              As an AECCI Sponsor, you gain access to a unique ecosystem designed to maximize your business visibility and create meaningful commercial opportunities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((b, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.07, duration: 0.5 }}
                whileHover={{ y: -4, boxShadow: "0 10px 25px -5px rgba(0,0,0,0.08)" }}
                className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-start gap-4 group hover:border-primary/30 transition-colors"
              >
                <div className="p-3 bg-primary/10 rounded-xl text-primary group-hover:bg-primary/20 transition-colors flex-shrink-0">
                  <b.icon className="w-5 h-5" />
                </div>
                <p className="text-slate-700 leading-relaxed">{b.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Deal Room Advantage */}
      <section className="relative py-24 md:py-32 bg-slate-950 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.04] text-primary pointer-events-none">
          <Globe className="w-[600px] h-[600px]" />
        </div>

        <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold mb-6 text-sm">
              <Zap className="w-4 h-4" />
              <span>The Global Deal Room Advantage</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-black text-white mb-8 leading-tight">
              Your Sponsorship Extends<br />
              <span className="text-primary">Beyond Physical Events</span>
            </h2>
            <p className="text-slate-300 text-lg md:text-xl leading-relaxed mb-6 max-w-3xl mx-auto">
              As AECCI expands its Global Deal Room, sponsors gain enhanced visibility within a growing digital ecosystem where businesses connect for international trade, investment, legal advisory, technology partnerships, and cross-border collaborations.
            </p>
            <p className="text-slate-300 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
              This enables your brand to remain visible throughout the year—not just during individual events.
            </p>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
              {[
                { icon: Globe, title: "Year-Round Visibility", desc: "Brand presence in a live digital ecosystem, not just event days." },
                { icon: HandshakeIcon, title: "Cross-Border Connect", desc: "Trade, investment, legal advisory & technology partnerships." },
                { icon: TrendingUp, title: "Growing Network", desc: "Expanding reach as the Global Deal Room scales internationally." },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col gap-4"
                >
                  <div className="p-3 bg-primary/10 rounded-xl text-primary w-fit">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-white text-lg">{item.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Signature Events */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-xs font-bold text-primary uppercase tracking-widest mb-3 block">
              Platforms That Drive Impact
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-black text-slate-900 mb-6">
              Sponsor Our Signature Events
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
              AECCI hosts a wide range of national and international initiatives. These platforms offer direct engagement with influential business leaders, policymakers, entrepreneurs, exporters, and international partners.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {events.map((ev, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05, duration: 0.4 }}
                whileHover={{ y: -4, boxShadow: "0 10px 25px -5px rgba(0,0,0,0.1)" }}
                className="bg-slate-50 hover:bg-primary/5 border border-slate-100 hover:border-primary/20 rounded-2xl p-5 flex flex-col items-center text-center gap-3 transition-colors group cursor-default"
              >
                <div className="p-3 bg-white rounded-xl shadow-sm text-slate-400 group-hover:text-primary transition-colors">
                  <ev.icon className="w-6 h-6" />
                </div>
                <p className="text-sm font-semibold text-slate-700 group-hover:text-slate-900 leading-snug">
                  {ev.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-black text-slate-900 mb-6 leading-tight">
              Let's Build Global Opportunities Together
            </h2>
            <p className="text-slate-800 text-lg md:text-xl leading-relaxed mb-4 max-w-3xl mx-auto">
              By partnering with AECCI, you're not only increasing your brand visibility—you're contributing to a stronger global business ecosystem that connects Indian enterprises with international markets.
            </p>
            <p className="text-slate-800 text-lg leading-relaxed mb-10 max-w-3xl mx-auto">
              Become an AECCI Sponsor and position your organization where business relationships begin and global opportunities grow.
            </p>

            <div className="inline-flex flex-col sm:flex-row items-center gap-6 bg-white/50 backdrop-blur-sm rounded-2xl px-8 py-6 border border-white/60 shadow-sm">
              <div className="flex items-center gap-3 text-slate-900">
                <div className="p-2 bg-slate-900/10 rounded-lg">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-600 mb-0.5">Mobile / WhatsApp</p>
                  <a href="tel:+918433720996" className="font-bold text-lg hover:underline">
                    0091-8433720996
                  </a>
                </div>
              </div>

              <div className="hidden sm:block w-px h-12 bg-slate-900/20" />

              <div className="flex items-center gap-3 text-slate-900">
                <div className="p-2 bg-slate-900/10 rounded-lg">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-600 mb-0.5">Email</p>
                  <a href="mailto:info@aecci.org.in" className="font-bold text-lg hover:underline">
                    info@aecci.org.in
                  </a>
                </div>
              </div>
            </div>

            <p className="mt-6 text-slate-700 text-sm">
              Contact our Sponsorship Team to explore customized partnership opportunities designed to meet your marketing and business development goals.
            </p>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
