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
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

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

const dealRoomCards = [
  {
    icon: Globe,
    title: "Year-Round Visibility",
    desc: "Brand presence in a live digital ecosystem, not just event days.",
  },
  {
    icon: HandshakeIcon,
    title: "Cross-Border Connect",
    desc: "Trade, investment, legal advisory & technology partnerships.",
  },
  {
    icon: TrendingUp,
    title: "Growing Network",
    desc: "Expanding reach as the Global Deal Room scales internationally.",
  },
];

export default function SponsorshipPage() {
  return (
    <div className="w-full bg-background text-foreground">
      {/* Hero */}
      <section className="relative w-full py-16 md:py-24 bg-foreground overflow-hidden flex items-center">
        <div className="absolute right-0 top-0 w-1/2 h-full bg-primary/20 blur-[100px] pointer-events-none rounded-full translate-x-1/3 -translate-y-1/4 z-0" />
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="text-xs font-bold text-primary uppercase tracking-widest mb-3 block">
              Sponsorship Opportunities
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-background mb-6 leading-tight">
              Partner with AECCI.{" "}
              <span className="text-primary">Shape Global Business.</span>
            </h1>
            <p className="text-background/70 text-base md:text-lg leading-relaxed">
              Sponsoring AECCI is more than supporting an event — it's an
              opportunity to position your brand at the heart of India's growing
              global trade ecosystem.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-muted-foreground text-base md:text-lg leading-relaxed text-center max-w-4xl mx-auto"
          >
            Through our conferences, business forums, trade delegations,
            networking events and the Global Deal Room, AECCI connects
            businesses with exporters, international buyers, government
            representatives, trade experts, investors and industry leaders from
            India and around the world. Whether your objective is brand
            visibility, lead generation, strategic partnerships or market
            expansion — AECCI sponsorship provides a powerful platform to engage
            with decision-makers and influential business communities.
          </motion.p>
        </div>
      </section>

      {/* Why Sponsor */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-xs font-bold text-primary uppercase tracking-widest mb-3 block">
              Why Sponsor AECCI?
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Sponsorship Benefits
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
              As an AECCI Sponsor, you gain access to a unique ecosystem
              designed to maximize your business visibility and create
              meaningful commercial opportunities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {benefits.map((b, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.07, duration: 0.4 }}
              >
                <Card className="h-full border-border hover:border-primary/40 transition-colors group">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="p-2.5 bg-primary/10 rounded-lg text-primary group-hover:bg-primary/20 transition-colors flex-shrink-0">
                      <b.icon className="w-5 h-5" />
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {b.text}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Deal Room Advantage */}
      <section className="relative py-16 md:py-24 bg-foreground overflow-hidden">
        <div className="absolute right-0 top-0 w-1/2 h-full bg-primary/20 blur-[100px] pointer-events-none rounded-full translate-x-1/3 -translate-y-1/4 z-0" />
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold mb-6 text-sm">
              <Zap className="w-4 h-4" />
              <span>The Global Deal Room Advantage</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-background mb-6 leading-tight">
              Your Sponsorship Extends{" "}
              <span className="text-primary">Beyond Physical Events</span>
            </h2>
            <p className="text-background/70 text-sm md:text-base leading-relaxed mb-4 max-w-3xl mx-auto">
              As AECCI expands its Global Deal Room, sponsors gain enhanced
              visibility within a growing digital ecosystem where businesses
              connect for international trade, investment, legal advisory,
              technology partnerships, and cross-border collaborations.
            </p>
            <p className="text-background/70 text-sm md:text-base leading-relaxed max-w-3xl mx-auto">
              This enables your brand to remain visible throughout the year —
              not just during individual events.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {dealRoomCards.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="bg-background/5 border border-background/10 rounded-lg p-6 flex flex-col gap-4"
              >
                <div className="p-2.5 bg-primary/10 rounded-lg text-primary w-fit">
                  <item.icon className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-background text-base">
                  {item.title}
                </h4>
                <p className="text-background/60 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Signature Events */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-xs font-bold text-primary uppercase tracking-widest mb-3 block">
              Platforms That Drive Impact
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Sponsor Our Signature Events
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
              AECCI hosts a wide range of national and international
              initiatives. These platforms offer direct engagement with
              influential business leaders, policymakers, entrepreneurs,
              exporters, and international partners.
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
              >
                <Card className="h-full border-border hover:border-primary/40 transition-colors group cursor-default">
                  <CardContent className="p-5 flex flex-col items-center text-center gap-3">
                    <div className="p-3 bg-primary/10 rounded-lg text-primary group-hover:bg-primary/20 transition-colors">
                      <ev.icon className="w-5 h-5" />
                    </div>
                    <p className="text-sm font-semibold text-foreground leading-snug">
                      {ev.label}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 bg-foreground overflow-hidden">
        <div className="absolute inset-0 bg-primary/10 blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center text-center"
          >
            <img
              src="/arccilogoWithText.png"
              alt="AECCI Logo"
              className="w-32 h-auto object-contain mb-6"
            />
            <h2 className="text-3xl md:text-4xl font-bold text-background mb-4 uppercase tracking-wide">
              Let's Build Global Opportunities Together
            </h2>
            <p className="text-background/60 text-base max-w-2xl mb-3">
              By partnering with AECCI, you're not only increasing your brand
              visibility — you're contributing to a stronger global business
              ecosystem that connects Indian enterprises with international
              markets.
            </p>
            <p className="text-background/60 text-base max-w-2xl mb-10">
              Become an AECCI Sponsor and position your organization where
              business relationships begin and global opportunities grow.
            </p>

            <div className="inline-flex flex-col sm:flex-row items-center gap-6 bg-background/5 backdrop-blur-sm rounded-xl px-8 py-6 border border-background/10">
              <div className="flex items-center gap-3 text-background">
                <div className="p-2 bg-primary/10 rounded-lg text-primary">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-semibold uppercase tracking-wider text-background/50 mb-0.5">
                    Mobile / WhatsApp
                  </p>
                  <a
                    href="tel:+918433720996"
                    className="font-bold text-base text-background hover:text-primary transition-colors"
                  >
                    0091-8433720996
                  </a>
                </div>
              </div>

              <div className="hidden sm:block w-px h-10 bg-background/20" />

              <div className="flex items-center gap-3 text-background">
                <div className="p-2 bg-primary/10 rounded-lg text-primary">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-semibold uppercase tracking-wider text-background/50 mb-0.5">
                    Email
                  </p>
                  <a
                    href="mailto:info@aecci.org.in"
                    className="font-bold text-base text-background hover:text-primary transition-colors"
                  >
                    info@aecci.org.in
                  </a>
                </div>
              </div>
            </div>

            <p className="mt-6 text-background/40 text-sm">
              Contact our Sponsorship Team to explore customized partnership
              opportunities designed to meet your marketing and business
              development goals.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
