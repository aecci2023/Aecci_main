import { Link } from "react-router-dom";
import { ArrowRight, Users, Globe, Building2, ShieldCheck, Handshake, ChevronLeft, ChevronRight } from "lucide-react";
import AnimatedWorldMap from "@/components/portal/AnimatedWorldMap";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ArbitrationHero from "@/components/portal/ArbitrationHero";
import PromoRow from "@/components/portal/PromoRow";

const slides = [
  {
    id: 1,
    subtitle: "BRIDGING INDIA TO THE WORLD",
    title: (
      <>
        Connecting Indian Businesses<br />
        to <span className="text-primary">Global Opportunities</span>
      </>
    ),
    description: (
      <>
        <p>The Asian Exporters' Chamber of Commerce & Industry (AECCI) is a Government of India recognised Chamber under the Ministry of Commerce & Industry, committed to transforming the way Indian businesses connect with the world.</p>
        <p>More than a traditional chamber, AECCI is building a Global Deal Room – a digital ecosystem where Indian exporters, manufacturers, startups and service providers can directly engage with global buyers, investors and partners.</p>
      </>
    ),
    buttons: (
      <>
        <Link to="/signup" className="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-8 py-3.5 rounded-lg transition-colors">
          Join AECCI Today <ArrowRight className="ml-2 w-5 h-5" />
        </Link>
        <Link to="/global-connect" className="inline-flex items-center justify-center bg-transparent border border-border hover:bg-foreground/5 text-foreground font-semibold px-8 py-3.5 rounded-lg transition-colors">
          Explore Services
        </Link>
      </>
    ),
    bgType: "map",
  },
  {
    id: 2,
    subtitle: "COMPREHENSIVE SUPPORT",
    title: (
      <>
        End-to-End Services for<br />
        <span className="text-primary">Global Trade</span>
      </>
    ),
    description: (
      <>
        <p>We provide legal support, trade dispute resolution, international marketing, and documentation assistance to make your export journey seamless.</p>
        <p>Leverage our expert panels and extensive network to mitigate risks and expand your global footprint with confidence.</p>
      </>
    ),
    buttons: (
      <>
        <Link to="/global-connect" className="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-8 py-3.5 rounded-lg transition-colors">
          View All Services <ArrowRight className="ml-2 w-5 h-5" />
        </Link>
      </>
    ),
    bgType: "image",
    bgUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 3,
    subtitle: "STAY AHEAD",
    title: (
      <>
        Upcoming Events &<br />
        <span className="text-primary">Trade Fairs</span>
      </>
    ),
    description: (
      <>
        <p>Join our exclusive B2B networking events, international trade exhibitions, and buyer-seller meets to connect with global decision-makers.</p>
        <p>Participate in capacity-building workshops and masterclasses conducted by industry experts to stay competitive in international markets.</p>
      </>
    ),
    buttons: (
      <>
        <Link to="/events/upcoming-events" className="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-8 py-3.5 rounded-lg transition-colors">
          View Calendar <ArrowRight className="ml-2 w-5 h-5" />
        </Link>
      </>
    ),
    bgType: "image",
    bgUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop",
  }
];

export default function MainHomepage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[currentSlide];

  return (
    <div className="w-full font-sans">
      <main className="bg-background text-foreground flex flex-col overflow-hidden">

        {/* HERO SLIDER SECTION - FORCED DARK MODE */}
        <div className="dark bg-background text-foreground w-full">
          <section className="relative w-full min-h-[450px] md:min-h-[500px] lg:min-h-[600px] flex overflow-hidden">
            {/* Background Slider */}
            <div className="absolute inset-0 z-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key={slide.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1 }}
                  className="absolute inset-0"
                >
                  {slide.bgType === "map" ? (
                    <AnimatedWorldMap />
                  ) : (
                    <div
                      className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
                      style={{ backgroundImage: `url(${slide.bgUrl})` }}
                    />
                  )}
                </motion.div>
              </AnimatePresence>

              {/* Dark gradient overlay to make text readable on the left */}
              <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-transparent pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background pointer-events-none" />

            </div>

            <div className="relative z-10 max-w-[1400px] w-full mx-auto px-6 pt-16 md:pt-24 lg:pt-32 pb-12">

              {/* Slide Navigation Controls */}
              <div className="absolute right-6 bottom-12 flex gap-3 z-20 hidden md:flex">
                <button
                  onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
                  className="w-10 h-10 rounded-full border border-border bg-background/50 backdrop-blur hover:bg-primary hover:border-primary hover:text-primary-foreground flex items-center justify-center transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
                  className="w-10 h-10 rounded-full border border-border bg-background/50 backdrop-blur hover:bg-primary hover:border-primary hover:text-primary-foreground flex items-center justify-center transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={slide.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="w-full lg:w-[65%]"
                >
                  <p className="text-primary font-bold text-xs tracking-[0.2em] uppercase mb-4 inline-block">
                    {slide.subtitle}
                  </p>
                  <h1 className="text-4xl md:text-5xl lg:text-[4rem] font-extrabold text-foreground leading-[1.1] mb-6 tracking-tight">
                    {slide.title}
                  </h1>

                  <div className="space-y-4 text-muted-foreground text-sm md:text-base leading-relaxed max-w-xl mb-8">
                    {slide.description}
                  </div>

                  <div className="flex flex-wrap gap-4 pt-4">
                    {slide.buttons}
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Mobile slide indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 md:hidden">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentSlide(i)}
                    className={`w-2 h-2 rounded-full transition-colors ${currentSlide === i ? 'bg-primary' : 'bg-border'}`}
                  />
                ))}
              </div>
            </div>
          </section>
        </div>

        {/* STATS AND CARDS SECTION (not part of slider) */}
        <section className="relative z-10 max-w-[1400px] w-full mx-auto px-6 py-12 space-y-8">

          {/* Stats Strip */}
          <div className="dark bg-card text-foreground backdrop-blur-md border border-border rounded-2xl p-6 md:p-8 shadow-xl">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 divide-x divide-border">
              <div className="flex items-center gap-4 px-2">
                <Globe className="w-8 h-8 text-primary" />
                <div>
                  <h4 className="text-lg font-bold text-foreground">40+</h4>
                  <p className="text-xs text-muted-foreground leading-tight font-medium uppercase tracking-wide">Countries<br />Connected</p>
                </div>
              </div>
              <div className="flex items-center gap-4 px-4">
                <Handshake className="w-8 h-8 text-primary" />
                <div>
                  <h4 className="text-lg font-bold text-foreground">5000+</h4>
                  <p className="text-xs text-muted-foreground leading-tight font-medium uppercase tracking-wide">Business<br />Members</p>
                </div>
              </div>
              <div className="flex items-center gap-4 px-4">
                <Building2 className="w-8 h-8 text-primary" />
                <div>
                  <h4 className="text-lg font-bold text-foreground">100+</h4>
                  <p className="text-xs text-muted-foreground leading-tight font-medium uppercase tracking-wide">Global Business<br />Partners</p>
                </div>
              </div>
              <div className="flex items-center gap-4 px-4">
                <Users className="w-8 h-8 text-emerald-500" />
                <div>
                  <h4 className="text-lg font-bold text-foreground">Industry</h4>
                  <p className="text-xs text-muted-foreground leading-tight font-medium uppercase tracking-wide">Focused<br />Networks</p>
                </div>
              </div>
              <div className="flex items-center gap-4 px-4">
                <ShieldCheck className="w-8 h-8 text-emerald-500" />
                <div>
                  <h4 className="text-lg font-bold text-foreground">Government</h4>
                  <p className="text-xs text-muted-foreground leading-tight font-medium uppercase tracking-wide">Recognised<br />Chamber</p>
                </div>
              </div>
            </div>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Services Card */}
            <div className="dark relative overflow-hidden rounded-2xl p-8 min-h-[220px] flex flex-col justify-between group border border-border bg-card text-foreground shadow-xl hover:border-primary/50 transition-colors">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -z-10 group-hover:bg-primary/20 transition-colors" />
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-foreground mb-2">Our Services</h3>
                <p className="text-sm text-muted-foreground max-w-[200px] leading-relaxed">
                  End-to-end support for exporters, manufacturers and service providers
                </p>
              </div>
              <Link to="/global-connect" className="inline-flex items-center justify-center px-4 py-2 mt-6 rounded-full border border-border text-xs font-semibold hover:bg-muted/40 text-foreground transition-colors w-fit relative z-10">
                Explore Services <ArrowRight className="w-3 h-3 ml-2" />
              </Link>
            </div>

            {/* Global Deal Room Card */}
            <div className="dark relative overflow-hidden rounded-2xl p-8 min-h-[220px] flex flex-col justify-between group border border-border bg-card text-foreground shadow-xl hover:border-blue-500/50 transition-colors">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl -z-10 group-hover:bg-blue-500/20 transition-colors" />
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-foreground mb-2">Global Deal Room</h3>
                <p className="text-sm text-muted-foreground max-w-[200px] leading-relaxed">
                  Connect, collaborate and close deals with global buyers
                </p>
              </div>
              <Link to="/global-connect" className="inline-flex items-center justify-center px-4 py-2 mt-6 rounded-full border border-border text-xs font-semibold hover:bg-muted/40 text-foreground transition-colors w-fit relative z-10">
                Enter Deal Room <ArrowRight className="w-3 h-3 ml-2" />
              </Link>
            </div>

            {/* Become a Member Card */}
            <div className="dark relative overflow-hidden rounded-2xl p-8 min-h-[220px] flex flex-col justify-between group border border-border bg-card text-foreground shadow-xl hover:border-emerald-500/50 transition-colors">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl -z-10 group-hover:bg-emerald-500/20 transition-colors" />
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-foreground mb-2">Become a Member</h3>
                <p className="text-sm text-muted-foreground max-w-[200px] leading-relaxed">
                  Join AECCI and unlock exclusive global business opportunities
                </p>
              </div>
              <Link to="/signup" className="inline-flex items-center justify-center px-4 py-2 mt-6 rounded-full border border-border text-xs font-semibold hover:bg-muted/40 text-foreground transition-colors w-fit relative z-10">
                Join Now <ArrowRight className="w-3 h-3 ml-2" />
              </Link>
            </div>
          </div>

          {/* Bottom Trust Strip */}
          <div className="dark bg-card text-foreground flex flex-wrap md:flex-nowrap items-center justify-between gap-4 p-6 border border-border rounded-xl text-xs text-muted-foreground font-medium shadow-md">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-primary/20 rounded flex items-center justify-center border border-primary/30">🏛️</div>
              <p>Ministry of Commerce & Industry<br /><span className="text-foreground">Government of India Recognised</span></p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full border border-primary/50 flex items-center justify-center bg-primary/10 text-primary">✓</div>
              <p>ISO 9001:2015<br /><span className="text-foreground">Certified</span></p>
            </div>
            <div className="flex items-center gap-3">
              <Users className="w-6 h-6 text-primary" />
              <p>Trusted by<br /><span className="text-foreground">Thousands of Businesses</span></p>
            </div>
            <div className="flex items-center gap-3">
              <Globe className="w-6 h-6 text-primary" />
              <p>Building Global Trade<br /><span className="text-foreground">Connections Since 2008</span></p>
            </div>
          </div>

        </section>

        {/* Legal & Dispute Resolution Hero */}
        <ArbitrationHero />

        {/* Join the Chamber / Book Country Slot Callout */}
        <PromoRow />
      </main>
    </div>
  );
}
