import { Globe3D, type GlobeMarker } from "@/components/ui/3d-globe";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
import {
  Award,
  CheckCircle2,
  Globe,
  Heart,
  Shield,
  Star,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";

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

export default function AboutChamber() {
  return (
    <div className="w-full bg-background text-foreground">
      {/* Hero */}
      <section className="relative w-full py-6 md:py-10 bg-[#0a1628] overflow-hidden flex items-center">
        <div className="absolute right-0 top-0 w-1/2 h-full bg-primary/20 blur-[100px] pointer-events-none rounded-full translate-x-1/3 -translate-y-1/4 z-0" />

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="absolute top-1/2 -translate-y-1/2 right-0 translate-x-[45%] z-0 w-[600px] h-[600px] md:w-[800px] md:h-[800px] lg:w-[1100px] lg:h-[1100px] pointer-events-none md:pointer-events-auto"
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

        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative z-20 pointer-events-auto max-w-xl lg:max-w-3xl"
          >
            <span className="text-xs font-bold text-primary uppercase tracking-widest mb-3 block">
              About AECCI
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-white">
              Connecting Indian Businesses to{" "}
              <span className="text-primary">Global Opportunities</span>
            </h1>
            <p className="text-white/70 text-base md:text-lg leading-relaxed mb-6">
              The Asian Exporters' Chamber of Commerce & Industry (AECCI) is a Government of India recognized Chamber under the Ministry of Commerce & Industry, committed to transforming the way Indian businesses connect with the world.
            </p>
            <p className="text-white/70 text-base md:text-lg leading-relaxed">
              More than a traditional chamber, AECCI is building a Global Deal Room- a digital ecosystem where Indian exporters, manufacturers, startups and service providers can directly engage with international trade experts, legal advisors, investment consultants and business organizations from across the globe. Through the Global Deal Room, Indian exporters can engage directly with international buyers, distribution partners, trade representatives, and sourcing agents to explore new business opportunities worldwide.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="relative py-6 md:py-8 bg-gradient-to-br from-background via-background to-primary/5 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary/10 blur-[100px] rounded-full" />

        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-primary uppercase tracking-[4px] text-xs font-bold block mb-3">
                Our Mission
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
                Our mission is <span className="text-primary">simple:</span>
              </h2>

              <div className="border-l-4 border-primary pl-6 mb-6">
                <p className="text-lg text-gray-700 leading-relaxed font-semibold">
                  To make global business connections faster, smarter and more accessible for every Indian enterprise.
                </p>
              </div>

              <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-4">
                Through strategic international collaborations and industry experts spanning over 50 countries, AECCI creates meaningful opportunities that help businesses expand into international markets with confidence.
              </p>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                Whether you are looking to enter a new market, understand foreign regulations, identify trusted partners or negotiate international deals, AECCI provides the platform, expertise and global network to make it happen.
              </p>
            </motion.div>

            {/* Right Cards */}
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  title: "50+ Countries",
                  desc: "Global Expert Network",
                  icon: Globe,
                },
                {
                  title: "Trusted Partners",
                  desc: "Verified International Connections",
                  icon: Shield,
                },
                {
                  title: "Market Expansion",
                  desc: "Access New Global Opportunities",
                  icon: TrendingUp,
                },
                {
                  title: "Business Support",
                  desc: "Regulations • Deals • Strategy",
                  icon: Users,
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -6, scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <Card className="rounded-2xl border-gray-100 hover:border-primary hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 bg-background/80 backdrop-blur group">
                    <CardContent className="p-4">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-3 text-primary group-hover:bg-primary group-hover:text-white group-hover:scale-110 transition-all duration-300">
                        <item.icon className="w-5 h-5" />
                      </div>
                      <h4 className="font-bold text-gray-900 text-sm mb-2 group-hover:text-primary transition-colors duration-300">{item.title}</h4>
                      <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Global Deal Room */}
      <section className="py-6 md:py-8 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-8">
            <span className="text-primary uppercase tracking-widest text-xs font-bold block mb-3">
              The Global Deal Room
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              Where Global Business Meets
            </h2>
            <p className="text-gray-600 text-sm mt-2 max-w-3xl mx-auto">
              The AECCI Global Deal Room is designed to simplify international business development through one integrated platform.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Left Content */}
            <div>
              <h3 className="text-base font-bold mb-4 text-gray-800">
                It enables members to:
              </h3>
              <ul className="space-y-3">
                {[
                  "Connect with verified international trade and legal experts.",
                  "Schedule one-to-one and group virtual business meetings.",
                  "Explore new export markets and investment opportunities.",
                  "Receive market entry and regulatory guidance.",
                  "Build partnerships with overseas chambers and business organizations.",
                  "Access cross-border legal, compliance, taxation and trade advisory.",
                  "Discover international buyers, distributors and strategic partners."
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ x: 4 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    className="flex items-start gap-2.5 group cursor-pointer"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-1 shrink-0 group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-gray-600 text-xs md:text-sm leading-relaxed group-hover:text-primary transition-colors duration-300">
                      {item}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Right Highlight Card */}
            <motion.div
              whileHover={{ y: -6, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Card className="border-gray-100 shadow-sm hover:shadow-lg rounded-2xl bg-white hover:border-emerald-500/20 transition-all duration-300">
                <CardContent className="p-5">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
                    <Globe className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-gray-900">
                    Real Business Outcomes
                  </h3>
                  <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
                    The Global Deal Room is not just about networking—it is about creating real business outcomes through trusted global connections. AECCI helps businesses discover opportunities, connect with the right partners, and confidently expand into international markets.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Strategic Mission */}
      <section className="py-6 md:py-10 bg-[#0a1628] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
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
            <blockquote className="text-xl md:text-2xl lg:text-3xl text-white font-semibold leading-relaxed mb-6 max-w-4xl italic">
              "To make global business connections faster, smarter and more accessible for every Indian enterprise."
            </blockquote>
            <Separator className="w-16 mb-6 bg-primary" />
            <p className="text-white/70 text-xs md:text-sm leading-relaxed mb-4 max-w-4xl">
              Through strategic international collaborations and industry experts spanning over 50 countries, AECCI creates meaningful opportunities that help businesses expand into international markets with confidence.
            </p>
            <p className="text-white/70 text-xs md:text-sm leading-relaxed max-w-4xl">
              Whether you are looking to enter a new market, understand foreign regulations, identify trusted partners or negotiate international deals, AECCI provides the platform, expertise, and global network to make it happen.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-6 md:py-8 bg-muted/20 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Mission */}
            <motion.div
              whileHover={{ y: -6, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="bg-[#0a1628] p-6 md:p-8 flex flex-col justify-center text-white relative rounded-2xl shadow-sm border border-gray-800 hover:border-primary/50 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute right-0 bottom-0 w-32 h-32 bg-primary/10 blur-2xl rounded-full" />
              <h3 className="text-lg md:text-xl font-bold mb-4 uppercase tracking-wider text-primary">
                Our Mission
              </h3>
              <p className="text-white/75 text-xs md:text-sm leading-relaxed">
                To bridge the gap between Indian businesses and the global marketplace by providing seamless access to international expertise, strategic partnerships, business intelligence and cross-border opportunities through a single digital platform.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              whileHover={{ y: -6, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="bg-white p-6 md:p-8 flex flex-col justify-center text-gray-900 relative rounded-2xl shadow-sm border border-gray-100 hover:border-emerald-500/25 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute right-0 bottom-0 w-32 h-32 bg-emerald-500/5 blur-2xl rounded-full" />
              <h3 className="text-lg md:text-xl font-bold mb-4 uppercase tracking-wider text-emerald-600">
                Our Vision
              </h3>
              <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
                To become Asia's most trusted digital trade ecosystem that empowers businesses to build international partnerships, accelerate exports and unlock global growth through technology, collaboration and expert guidance.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-6 md:py-8 bg-muted/10">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-8">
            <span className="text-primary uppercase tracking-widest text-xs font-bold block mb-3">
              Our Core Values
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              Values That Guide Everything We Do
            </h2>
            <p className="text-gray-600 text-sm mt-2 max-w-3xl mx-auto">
              Our commitment to trust, innovation and global collaboration drives every partnership we build and every opportunity we create.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Shield,
                title: "Trust",
                desc: "Every connection on our platform is built on transparency, professionalism and credibility.",
              },
              {
                icon: Globe,
                title: "Global Collaboration",
                desc: "We believe meaningful partnerships create sustainable business growth across borders.",
              },
              {
                icon: Zap,
                title: "Innovation",
                desc: "We leverage technology to make international business meetings and trade facilitation more efficient than ever before.",
              },
              {
                icon: Award,
                title: "Business Excellence",
                desc: "We deliver world-class support that enables businesses to compete confidently in global markets.",
              },
              {
                icon: CheckCircle2,
                title: "Integrity",
                desc: "We uphold the highest standards of ethics, confidentiality and impartiality in every interaction.",
              },
              {
                icon: Heart,
                title: "Member Success",
                desc: "Our success is measured by the growth, partnerships and achievements of our members.",
              },
              {
                icon: Star,
                title: "Future Ready",
                desc: "We continuously evolve to meet the changing needs of global commerce and digital trade.",
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -8, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Card className="h-full border border-gray-100 hover:border-primary bg-white hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 rounded-xl overflow-hidden group">
                  <CardContent className="p-4">
                    <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center mb-3 group-hover:bg-primary group-hover:text-white group-hover:scale-110 transition-all duration-300">
                      <value.icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-gray-900 text-base mb-2 group-hover:text-primary transition-colors duration-300">{value.title}</h3>
                    <p className="text-gray-500 text-xs leading-relaxed">{value.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
