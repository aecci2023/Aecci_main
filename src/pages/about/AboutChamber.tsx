import { Globe3D, type GlobeMarker } from "@/components/ui/3d-globe";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
import {
  Award,
  CheckCircle2,
  Globe,
  Heart,
  Lightbulb,
  Shield,
  Star,
  Target,
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
              The Asian Exporters' Chamber of Commerce & Industry (AECCI) is a Government of India
              recognized Chamber under the Ministry of Commerce & Industry, committed to
              transforming the way Indian businesses connect with the world.
            </p>
            <p className="text-background/70 text-base md:text-lg leading-relaxed">
              More than a traditional chamber, AECCI is building a Global Deal Room- a digital ecosystem
              where Indian exporters, manufacturers, startups and service providers can directly engage
              with international trade experts, legal advisors, investment consultants and business
              organizations from across the globe. Through the Global Deal Room, Indian exporters can
              engage directly with international buyers, distribution partners, trade representatives, and
              sourcing agents to explore new business opportunities worldwide.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Mission */}
<section className="relative py-24 bg-gradient-to-br from-background via-background to-primary/5 overflow-hidden">
  <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 blur-[120px] rounded-full" />
  <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary/10 blur-[100px] rounded-full" />

  <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

    <div className="grid lg:grid-cols-2 gap-16 items-center">

      {/* Left */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <span className="text-primary uppercase tracking-[4px] text-sm font-semibold">
          Our Mission
        </span>

        <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-8">
          Our mission is
          <span className="text-primary"> simple:</span>
        </h2>

        <div className="border-l-4 border-primary pl-6 mb-8">
          
          <p className="text-xl text-muted-foreground leading-relaxed">
            To make global business connections faster,
            smarter and more accessible for every Indian
            enterprise.
          </p>
        </div>

        <p className="text-muted-foreground leading-8 text-lg mb-6">
          Through strategic international collaborations and
          industry experts spanning over <span className="font-semibold text-primary">
          50 countries</span>, AECCI creates meaningful
          opportunities that help businesses expand into
          international markets with confidence.
        </p>

        <p className="text-muted-foreground leading-8 text-lg">
          Whether you are looking to enter a new market,
          understand foreign regulations, identify trusted
          partners or negotiate international deals, AECCI
          provides the platform, expertise and global network
          to make it happen.
        </p>
      </motion.div>

      {/* Right Cards */}

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="grid grid-cols-2 gap-6"
      >

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
          <Card
            key={index}
            className="rounded-3xl border-primary/20 hover:border-primary hover:shadow-2xl transition-all duration-300 bg-background/80 backdrop-blur"
          >
            <CardContent className="p-8">

              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <item.icon className="w-8 h-8 text-primary" />
              </div>

              <h4 className="font-bold text-xl mb-3">
                {item.title}
              </h4>

              <p className="text-muted-foreground">
                {item.desc}
              </p>

            </CardContent>
          </Card>
        ))}

      </motion.div>

    </div>

  </div>
</section>

  {/* Global Deal Room */}
<section className="py-20 bg-background">
  <div className="max-w-6xl mx-auto px-6 md:px-12">

    <div className="text-center mb-12">
      <span className="text-primary uppercase tracking-widest text-sm font-semibold">
        The Global Deal Room
      </span>

      <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-4">
        Where Global Business Meets
      </h2>

      <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-8">
        The AECCI Global Deal Room is designed to simplify international
        business development through one integrated platform.
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-10 items-start">

      {/* Left Content */}
      <div>
        <h3 className="text-xl font-semibold mb-6">
          It enables members to:
        </h3>

        <ul className="space-y-4">
          {[
            "Connect with verified international trade and legal experts.",
            "Schedule one-to-one and group virtual business meetings.",
            "Explore new export markets and investment opportunities.",
            "Receive market entry and regulatory guidance.",
            "Build partnerships with overseas chambers and business organizations.",
            "Access cross-border legal, compliance, taxation and trade advisory.",
            "Discover international buyers, distributors and strategic partners."
          ].map((item, index) => (
            <li key={index} className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-primary mt-1 shrink-0" />
              <span className="text-muted-foreground leading-7">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Right Highlight Card */}
      <Card className="border-primary/20 shadow-sm">
        <CardContent className="p-8">
          <Globe className="w-12 h-12 text-primary mb-6" />

          <h3 className="text-2xl font-bold mb-4">
            Real Business Outcomes
          </h3>

          <p className="text-muted-foreground leading-8">
            The Global Deal Room is not just about networking—it is about
            creating real business outcomes through trusted global
            connections. AECCI helps businesses discover opportunities,
            connect with the right partners, and confidently expand into
            international markets.
          </p>
        </CardContent>
      </Card>

    </div>

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
              To bridge the gap between Indian businesses and the global marketplace by providing
              seamless access to international expertise, strategic partnerships, business intelligence and
              cross-border opportunities through a single digital platform.
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
                To become Asia's most trusted digital trade ecosystem that empowers businesses to build
                international partnerships, accelerate exports and unlock global growth through technology,
                collaboration and expert guidance.
              </p>
              
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
     {/* Core Values */}
<section className="py-20 bg-muted/30">
  <div className="max-w-7xl mx-auto px-6 md:px-12">

    <div className="text-center mb-14">
      <span className="text-primary uppercase tracking-widest text-sm font-semibold">
        Our Core Values
      </span>

      <h2 className="text-3xl md:text-4xl font-bold mt-3">
        Values That Guide Everything We Do
      </h2>

      <p className="text-muted-foreground mt-4 max-w-3xl mx-auto">
        Our commitment to trust, innovation and global collaboration drives every
        partnership we build and every opportunity we create.
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
        <Card
          key={index}
          className="border hover:border-primary transition-all duration-300 hover:shadow-md"
        >
          <CardContent className="p-6">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
              <value.icon className="w-6 h-6 text-primary" />
            </div>

            <h3 className="text-lg font-semibold mb-3">
              {value.title}
            </h3>

            <p className="text-muted-foreground text-sm leading-7">
              {value.desc}
            </p>
          </CardContent>
        </Card>
      ))}

    </div>

  </div>
</section>
    </div>
  );
}
