import { motion } from "framer-motion";
import {
  Users,
  Target,
  Shield,
  Zap,
  TrendingUp,
  Lightbulb,
  Award,
  Heart,
  Star,
  CheckCircle2,
  Globe,
} from "lucide-react";
import { Globe3D, type GlobeMarker } from "@/components/ui/3d-globe";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const sampleMarkers: GlobeMarker[] = [
  {
    lat: -15.7939,
    lng: -47.8828,
    src: "https://flagcdn.com/w80/br.png",
    label: "Brazil",
  },
  {
    lat: 11.5564,
    lng: 104.9282,
    src: "https://flagcdn.com/w80/kh.png",
    label: "Cambodia",
  },
  {
    lat: 55.6761,
    lng: 12.5683,
    src: "https://flagcdn.com/w80/dk.png",
    label: "Denmark",
  },
  {
    lat: 30.0444,
    lng: 31.2357,
    src: "https://flagcdn.com/w80/eg.png",
    label: "Egypt",
  },
  {
    lat: 19.4326,
    lng: -99.1332,
    src: "https://flagcdn.com/w80/mx.png",
    label: "Mexico",
  },
  {
    lat: -6.163,
    lng: 35.7516,
    src: "https://flagcdn.com/w80/tz.png",
    label: "Tanzania",
  },
  {
    lat: 25.0443,
    lng: -77.3504,
    src: "https://flagcdn.com/w80/bs.png",
    label: "Bahamas",
  },
  {
    lat: 43.8563,
    lng: 18.4131,
    src: "https://flagcdn.com/w80/ba.png",
    label: "Bosnia & Herzegovina",
  },
  {
    lat: -25.9692,
    lng: 32.5732,
    src: "https://flagcdn.com/w80/mz.png",
    label: "Mozambique",
  },
  {
    lat: 36.7538,
    lng: 3.0588,
    src: "https://flagcdn.com/w80/dz.png",
    label: "Algeria",
  },
  {
    lat: 9.0765,
    lng: 7.3986,
    src: "https://flagcdn.com/w80/ng.png",
    label: "Nigeria",
  },
  {
    lat: 21.0285,
    lng: 105.8542,
    src: "https://flagcdn.com/w80/vn.png",
    label: "Vietnam",
  },
  {
    lat: 51.5074,
    lng: -0.1278,
    src: "https://flagcdn.com/w80/gb.png",
    label: "United Kingdom",
  },
  {
    lat: 39.9042,
    lng: 116.4074,
    src: "https://flagcdn.com/w80/cn.png",
    label: "China",
  },
  {
    lat: 33.6844,
    lng: 73.0479,
    src: "https://flagcdn.com/w80/pk.png",
    label: "Pakistan",
  },
  {
    lat: 23.588,
    lng: 58.3829,
    src: "https://flagcdn.com/w80/om.png",
    label: "Oman",
  },
  {
    lat: 39.9334,
    lng: 32.8597,
    src: "https://flagcdn.com/w80/tr.png",
    label: "Turkey",
  },
  {
    lat: 37.9838,
    lng: 23.7275,
    src: "https://flagcdn.com/w80/gr.png",
    label: "Greece",
  },
  {
    lat: 13.7563,
    lng: 100.5018,
    src: "https://flagcdn.com/w80/th.png",
    label: "Thailand",
  },
  {
    lat: 8.9806,
    lng: 38.7578,
    src: "https://flagcdn.com/w80/et.png",
    label: "Ethiopia",
  },
  {
    lat: 4.8594,
    lng: 31.5713,
    src: "https://flagcdn.com/w80/ss.png",
    label: "South Sudan",
  },
  {
    lat: 6.9271,
    lng: 79.8612,
    src: "https://flagcdn.com/w80/lk.png",
    label: "Sri Lanka",
  },
  {
    lat: 24.4539,
    lng: 54.3773,
    src: "https://flagcdn.com/w80/ae.png",
    label: "United Arab Emirates",
  },
  {
    lat: 41.2995,
    lng: 69.2401,
    src: "https://flagcdn.com/w80/uz.png",
    label: "Uzbekistan",
  },
  {
    lat: 31.9454,
    lng: 35.9284,
    src: "https://flagcdn.com/w80/jo.png",
    label: "Jordan",
  },
  {
    lat: 33.8938,
    lng: 35.5018,
    src: "https://flagcdn.com/w80/lb.png",
    label: "Lebanon",
  },
  {
    lat: -6.2088,
    lng: 106.8456,
    src: "https://flagcdn.com/w80/id.png",
    label: "Indonesia",
  },
  {
    lat: 34.0209,
    lng: -6.8416,
    src: "https://flagcdn.com/w80/ma.png",
    label: "Morocco",
  },
  {
    lat: 52.52,
    lng: 13.405,
    src: "https://flagcdn.com/w80/de.png",
    label: "Germany",
  },
  {
    lat: 38.7223,
    lng: -9.1393,
    src: "https://flagcdn.com/w80/pt.png",
    label: "Portugal",
  },
  {
    lat: 52.2297,
    lng: 21.0122,
    src: "https://flagcdn.com/w80/pl.png",
    label: "Poland",
  },
  {
    lat: -1.2921,
    lng: 36.8219,
    src: "https://flagcdn.com/w80/ke.png",
    label: "Kenya",
  },
  {
    lat: 52.3676,
    lng: 4.9041,
    src: "https://flagcdn.com/w80/nl.png",
    label: "Netherlands",
  },
  {
    lat: 1.3521,
    lng: 103.8198,
    src: "https://flagcdn.com/w80/sg.png",
    label: "Singapore",
  },
  {
    lat: 45.4215,
    lng: -75.6972,
    src: "https://flagcdn.com/w80/ca.png",
    label: "Canada",
  },
  {
    lat: 14.5995,
    lng: 120.9842,
    src: "https://flagcdn.com/w80/ph.png",
    label: "Philippines",
  },
  {
    lat: 1.6508,
    lng: 17.6791,
    src: "https://flagcdn.com/w80/za.png",
    label: "Africa",
  },
  {
    lat: 5.6037,
    lng: -0.187,
    src: "https://flagcdn.com/w80/gh.png",
    label: "Ghana",
  },
  {
    lat: -22.5609,
    lng: 17.0658,
    src: "https://flagcdn.com/w80/na.png",
    label: "Namibia",
  },
  {
    lat: 32.8872,
    lng: 13.1913,
    src: "https://flagcdn.com/w80/ly.png",
    label: "Libya",
  },
  {
    lat: 59.3293,
    lng: 18.0686,
    src: "https://flagcdn.com/w80/se.png",
    label: "Sweden",
  },
  {
    lat: 35.1856,
    lng: 33.3823,
    src: "https://flagcdn.com/w80/cy.png",
    label: "Cyprus",
  },
  {
    lat: 47.4979,
    lng: 19.0402,
    src: "https://flagcdn.com/w80/hu.png",
    label: "Hungary",
  },
  {
    lat: 59.437,
    lng: 24.7536,
    src: "https://flagcdn.com/w80/ee.png",
    label: "Estonia",
  },
  {
    lat: 41.9028,
    lng: 12.4964,
    src: "https://flagcdn.com/w80/it.png",
    label: "Italy",
  },
  {
    lat: 40.1792,
    lng: 44.4991,
    src: "https://flagcdn.com/w80/am.png",
    label: "Armenia",
  },
  {
    lat: 15.3694,
    lng: 44.191,
    src: "https://flagcdn.com/w80/ye.png",
    label: "Yemen",
  },
  {
    lat: 36.8065,
    lng: 10.1815,
    src: "https://flagcdn.com/w80/tn.png",
    label: "Tunisia",
  },
  {
    lat: 50.0755,
    lng: 14.4378,
    src: "https://flagcdn.com/w80/cz.png",
    label: "Czech Republic",
  },
  {
    lat: 40.4168,
    lng: -3.7038,
    src: "https://flagcdn.com/w80/es.png",
    label: "Spain",
  },
  {
    lat: 48.2082,
    lng: 16.3738,
    src: "https://flagcdn.com/w80/at.png",
    label: "Austria",
  },
];

const coreValues = [
  {
    title: "Trust",
    icon: Shield,
    desc: "Built on transparency, professionalism and credibility.",
  },
  {
    title: "Global Collaboration",
    icon: Globe,
    desc: "Meaningful partnerships create sustainable growth.",
  },
  {
    title: "Innovation",
    icon: Zap,
    desc: "Leveraging technology for efficient trade facilitation.",
  },
  {
    title: "Business Excellence",
    icon: Award,
    desc: "World-class support to compete in global markets.",
  },
  {
    title: "Integrity",
    icon: CheckCircle2,
    desc: "Highest standards of ethics, confidentiality and impartiality.",
  },
  {
    title: "Member Success",
    icon: Heart,
    desc: "Measured by the growth and achievements of our members.",
  },
  {
    title: "Future Ready",
    icon: Star,
    desc: "Evolving to meet the changing needs of global commerce.",
  },
];

export default function AboutChamber() {
  return (
    <div className="w-full bg-background text-foreground">
      {/* Hero */}
      <section className="relative w-full py-24 md:py-40 bg-foreground overflow-hidden min-h-[600px] md:min-h-[800px] flex items-center">
        <div className="absolute right-0 top-0 w-1/2 h-full bg-primary/20 blur-[100px] pointer-events-none rounded-full translate-x-1/3 -translate-y-1/4 z-0" />

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="absolute top-1/2 -translate-y-1/2 right-0 translate-x-[50%] z-0 w-[700px] h-[700px] md:w-[1000px] md:h-[1000px] lg:w-[1300px] lg:h-[1300px] pointer-events-none md:pointer-events-auto"
        >
          <div className="absolute inset-0 z-10">
            <Globe3D
              className="h-full w-full"
              markers={sampleMarkers}
              config={{
                atmosphereColor: "#2bb17b",
                atmosphereIntensity: 25,
                bumpScale: 5,
                autoRotateSpeed: 0.8,
              }}
            />
          </div>
          <div className="absolute inset-20 bg-primary/20 blur-[80px] rounded-full pointer-events-none z-0" />
        </motion.div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative z-20 pointer-events-auto max-w-xl lg:max-w-3xl"
          >
            <span className="text-xs font-bold text-primary uppercase tracking-widest mb-3 block">
              About AECCI
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 leading-tight text-background">
              Connecting Indian Businesses to{" "}
              <span className="text-primary">Global Opportunities</span>
            </h1>
            <p className="text-background/70 text-base md:text-lg leading-relaxed mb-6">
              The Asian Exporters' Chamber of Commerce &amp; Industry (AECCI),
              recognized by the Ministry of Commerce and Industry, Govt of
              India, is one of the most dynamic and well-established non-profit
              organizations devoted to the cause of promoting the private sector
              contribution to the economy.
            </p>
            <p className="text-background/70 text-base md:text-lg leading-relaxed">
              The Chamber is registered with the largest chambers network
              globally "World Chambers Network" i.e. the Official Global
              Chambers directory, and has devised several promotional and
              developmental services to provide support to the private sector
              initiatives in industry, trade and services to the Asian
              community.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Digital Ecosystem */}
      <section className="py-20 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Badge
              variant="outline"
              className="mb-6 gap-1.5 px-3 py-1 text-sm border-primary/30 text-primary"
            >
              <Zap className="w-3.5 h-3.5" />
              The Digital Trade Ecosystem
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              A Global Deal Room
            </h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-4">
              More than a traditional chamber, AECCI is building a Global Deal
              Room — a digital ecosystem where Indian exporters, manufacturers,
              startups and service providers can directly engage with
              international trade experts, legal advisors, investment
              consultants and business organizations from across the globe.
            </p>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-8">
              Through the Global Deal Room, Indian exporters can engage directly
              with international buyers, distribution partners, trade
              representatives, and sourcing agents to explore new business
              opportunities worldwide.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card className="border-border shadow-sm">
                <CardContent className="p-4 flex items-start gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary shrink-0">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">
                      Direct Engagement
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Connect with buyers &amp; partners
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-border shadow-sm">
                <CardContent className="p-4 flex items-start gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary shrink-0">
                    <Target className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">
                      Expert Consultation
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Legal &amp; trade advice
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-square md:aspect-video lg:aspect-square bg-muted rounded-3xl overflow-hidden shadow-xl border border-border flex items-center justify-center p-8 relative">
              <div className="w-full h-full bg-card rounded-2xl shadow-sm border border-border p-6 flex flex-col gap-4 relative z-10">
                <div className="h-8 bg-muted rounded-md w-1/3 mb-4" />
                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div className="h-24 bg-primary/10 rounded-xl" />
                  <div className="h-24 bg-primary/10 rounded-xl" />
                  <div className="h-24 bg-primary/10 rounded-xl" />
                </div>
                <div className="h-32 bg-muted rounded-xl w-full border border-border mt-2" />
                <div className="h-8 bg-muted rounded-md w-1/4 mt-auto" />
              </div>
              <div className="absolute -bottom-6 -left-6 md:-left-12 p-4 bg-card rounded-xl shadow-lg border border-border flex items-center gap-3 z-20">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    Trade Ecosystem
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Expanding Network
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Strategic Mission */}
      <section className="py-20 md:py-28 bg-foreground overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center text-center"
          >
            <span className="text-xs font-bold text-primary uppercase tracking-widest mb-4 block">
              Our Strategic Mission
            </span>
            <blockquote className="text-2xl md:text-4xl lg:text-5xl text-background font-bold leading-tight mb-10 max-w-5xl">
              "To make global business connections faster, smarter and more
              accessible for every Indian enterprise."
            </blockquote>
            <Separator className="w-16 mb-10 bg-primary" />
            <p className="text-background/70 text-base md:text-lg leading-relaxed mb-6 max-w-4xl">
              Through strategic international collaborations and industry
              experts spanning over 50 countries, AECCI creates meaningful
              opportunities that help businesses expand into international
              markets with confidence.
            </p>
            <p className="text-background/70 text-base md:text-lg leading-relaxed max-w-4xl">
              Whether you are looking to enter a new market, understand foreign
              regulations, identify trusted partners or negotiate international
              deals, AECCI provides the platform, expertise, and global network
              to make it happen.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 md:py-24 bg-muted/30">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Mission */}
            <div className="bg-foreground p-10 md:p-16 flex flex-col justify-center">
              <h3 className="text-xl md:text-2xl font-bold mb-6 uppercase tracking-wider text-primary">
                Our Mission
              </h3>
              <p className="text-background/70 text-base md:text-lg leading-relaxed mb-4">
                To bridge the gap between Indian businesses and the global
                marketplace by providing seamless access to international
                expertise, strategic partnerships, business intelligence and
                cross-border opportunities through a single digital platform.
              </p>
              <p className="text-background/70 text-base md:text-lg leading-relaxed">
                The Chamber's mission is to lead the overall development, to
                ensure future prosperity via a pro-business climate, to
                represent the unified voice of the trade community and to reduce
                the business frictions through well-functioning networks.
              </p>
            </div>

            {/* Mission Icon */}
            <div className="bg-card p-10 md:p-16 flex items-center justify-center min-h-[280px] border border-border">
              <div className="w-40 h-40 rounded-full flex items-center justify-center text-primary/20 border-2 border-primary/20">
                <Target className="w-20 h-20 stroke-[1.5] text-primary/40" />
              </div>
            </div>

            {/* Vision Icon */}
            <div className="bg-card p-10 md:p-16 flex items-center justify-center min-h-[280px] border border-border order-4 md:order-3">
              <div className="w-40 h-40 rounded-full flex items-center justify-center border-2 border-primary/20">
                <Lightbulb className="w-20 h-20 stroke-[1.5] text-primary/40" />
              </div>
            </div>

            {/* Vision */}
            <div className="bg-primary p-10 md:p-16 flex flex-col justify-center order-3 md:order-4">
              <h3 className="text-xl md:text-2xl font-bold mb-6 uppercase tracking-wider text-primary-foreground">
                Our Vision
              </h3>
              <p className="text-primary-foreground/90 text-base md:text-lg leading-relaxed mb-4">
                To become Asia's most trusted digital trade ecosystem that
                empowers businesses to build international partnerships,
                accelerate exports and unlock global growth through technology,
                collaboration and expert guidance.
              </p>
              <p className="text-primary-foreground/90 text-base md:text-lg leading-relaxed">
                The Chamber's Vision is to see a voluntary partnership of
                businesses and professionals working together to build a healthy
                and prosperous economy with improved quality of life in the
                community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <span className="text-xs font-bold text-primary uppercase tracking-widest mb-3 block">
              What We Stand For
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
              The foundation of everything we do is built upon these guiding
              principles.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {coreValues.map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
              >
                <Card className="h-full border-border hover:border-primary/40 transition-colors group">
                  <CardContent className="p-6 flex flex-col gap-4">
                    <div className="w-12 h-12 bg-muted group-hover:bg-primary/10 rounded-xl flex items-center justify-center text-muted-foreground group-hover:text-primary transition-colors">
                      <value.icon className="w-6 h-6" />
                    </div>
                    <p className="font-semibold text-foreground">
                      {value.title}
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {value.desc}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing Quote */}
      <section className="py-20 md:py-28 bg-foreground">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="italic text-background/70 text-base md:text-lg leading-loose">
              "We want to create something worth creating that will endure the
              test of time. Independency and neutrality, honesty in managing
              arbitrations, preserving the rights of the client, secrecy and
              confidentiality, prompt &amp; responsible affiliation, distinction
              in performance and working with the spirit of one team. We do this
              by relentlessly focusing on our customer's success, building
              high-quality systems and planning for a long-term scale."
            </p>
            <div className="mt-8 w-16 h-1 bg-primary mx-auto rounded-full" />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
