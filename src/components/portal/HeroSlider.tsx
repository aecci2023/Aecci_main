import * as React from "react"
import { motion } from "framer-motion"
import {
  ShieldCheck,
  SealCheck,
  Globe,
  Buildings,
  Gavel,
  ArrowRight,
} from "@phosphor-icons/react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import type { CarouselApi } from "@/components/ui/carousel"
import { cn } from "@/lib/utils"

const slides = [
  {
    id: "identity",
    badge: { Icon: ShieldCheck, text: "ISO 9001:2015 Certified Chamber" },
    heading: "Empowering Asian Exporters.",
    highlight: "Connecting Global Trade.",
    description:
      "The Asian Exporters' Chamber of Commerce and Industry serves as the definitive gateway for modern enterprises — facilitating Certificate of Origin issuances, legal arbitration, and dynamic B2B international matchmaking.",
    ctas: [
      { label: "Explore B2B Directory", href: "#b2b-forum", primary: true },
      { label: "Track CO Certificate", href: "#coo-tracker", primary: false },
    ],
    bgGradient: "from-primary/10 via-background to-secondary/15",
  },
  {
    id: "b2b",
    badge: { Icon: Globe, text: "39 International Collaborations" },
    heading: "Virtual B2B Forum",
    highlight: "Connect. Trade. Succeed.",
    description:
      "Create meaningful one-on-one connections between Indian businesses and international Trade & Law Expert collaborators from the UK, Vietnam, and 37 more partner nations.",
    ctas: [
      { label: "Register Now", href: "#b2b-forum", primary: true },
      { label: "Learn More", href: "#b2b-forum", primary: false },
    ],
    bgGradient: "from-sky-500/10 via-background to-primary/5",
  },
  {
    id: "services",
    badge: { Icon: Buildings, text: "Expert Consultations" },
    heading: "AECCI Services & Wings",
    highlight: "Your Global Business Partner.",
    description:
      "Access a full spectrum of business support — export advisory, legal counsel, HR support, professional advisory, business advice, women entrepreneurship, and event facilitation.",
    ctas: [
      { label: "Explore Services", href: "#services", primary: true },
      { label: "Contact Us", href: "#contact", primary: false },
    ],
    bgGradient: "from-emerald-500/10 via-background to-primary/10",
  },
  {
    id: "arbitration",
    badge: { Icon: Gavel, text: "ICCA Legally Approved Rules" },
    heading: "International Arbitration",
    highlight: "Dispute Resolution & Legal Panel.",
    description:
      "Resolve international trade disputes efficiently and legally. Our arbitration center follows internationally recognized rules to protect business interests.",
    ctas: [
      { label: "Learn More", href: "#arbitration", primary: true },
      { label: "File a Case", href: "#arbitration", primary: false },
    ],
    bgGradient: "from-amber-500/10 via-background to-primary/5",
  },
] as const

type SlideType = (typeof slides)[number]

const contentVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay,
      ease: "easeOut" as const,
    },
  }),
}

function SlideContent({ slide, isActive }: { slide: SlideType; isActive: boolean }) {
  const { Icon: BadgeIcon } = slide.badge

  return (
    <div
      className={cn(
        "relative min-h-[640px] md:min-h-[700px] flex items-center overflow-hidden",
        "bg-gradient-to-br",
        slide.bgGradient
      )}
    >
      {/* Decorative Blobs & Grids */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-primary/5 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: "radial-gradient(circle, currentColor 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1280px] w-full px-6 md:px-12 py-16 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Column: Animated Text Content */}
        <div className="flex flex-col items-start text-left">
          {/* Badge */}
          <motion.div
            initial="hidden"
            animate={isActive ? "visible" : "hidden"}
            variants={contentVariants}
            custom={0.0}
            className="inline-flex items-center gap-2 bg-primary/10 text-primary text-xs font-bold px-4 py-1.5 rounded-full border border-primary/20 mb-6 tracking-wide"
          >
            <BadgeIcon className="size-4" />
            {slide.badge.text}
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial="hidden"
            animate={isActive ? "visible" : "hidden"}
            variants={contentVariants}
            custom={0.1}
            className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl leading-[1.1] text-foreground tracking-tight mb-6"
          >
            {slide.heading}
            <br />
            <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
              {slide.highlight}
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial="hidden"
            animate={isActive ? "visible" : "hidden"}
            variants={contentVariants}
            custom={0.2}
            className="font-body text-base md:text-lg text-muted-foreground mb-10 max-w-xl leading-relaxed"
          >
            {slide.description}
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial="hidden"
            animate={isActive ? "visible" : "hidden"}
            variants={contentVariants}
            custom={0.3}
            className="flex flex-wrap gap-4 w-full sm:w-auto"
          >
            {slide.ctas.map((cta) => (
              <a
                key={cta.label}
                href={cta.href}
                className={cn(
                  "w-full sm:w-auto flex items-center justify-center text-sm font-bold px-8 h-12 rounded-full transition-all hover:-translate-y-px",
                  cta.primary
                    ? "bg-primary text-primary-foreground hover:bg-primary/95 shadow-lg shadow-primary/20"
                    : "bg-muted/50 border border-border text-foreground hover:bg-muted"
                )}
              >
                {cta.label}
                {cta.primary && <ArrowRight className="size-4 ml-2" />}
              </a>
            ))}
          </motion.div>
        </div>

        {/* Right Column: Interactive Slide Visuals */}
        <div className="flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isActive ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="w-full flex justify-center"
          >
            {slide.id === "identity" && (
              <div className="relative">
                <div className="rounded-3xl border border-border/80 bg-card/45 backdrop-blur-xl p-4 shadow-2xl relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/15 via-transparent to-primary/5 opacity-60 pointer-events-none" />
                  <img
                    alt="Corporate Global Trade Network"
                    className="w-full aspect-[4/3] sm:aspect-square object-cover rounded-2xl shadow-inner transition-transform duration-700 group-hover:scale-105"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBhvDo0RYoNFzMbetVCsvPC0xsxFAlFi0QGexdINMRc1Fcnx3nCacND0aUXuGbuAzji_1PocGQsaONFK5Dj64Pq5YTnCHZfiSL5IwnqNJZVDKK0CY4p2CM08N78A95qHCbE_TgEE9-u_fO6EBbUfj3nTqtG-P1kMczBrf2Ds6Q8jXm1KZvXY0I4W9RGUh_UwJ4RuQi5AsdAQFNF9VaE_Fg9cxlTo7R6aZB2w0P5Ou0ChHe7sokY3tADS1lrvIkKszB2vKc6tv0fQ17-"
                  />
                </div>

                <div className="absolute -bottom-6 -left-6 bg-card/90 border border-border shadow-2xl p-5 rounded-2xl hidden lg:block backdrop-blur-md">
                  <div className="flex items-center gap-3">
                    <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 border border-primary/20 text-primary">
                      <SealCheck className="size-7" />
                    </div>
                    <div className="text-left">
                      <p className="font-heading font-black text-foreground text-sm">International ICCA</p>
                      <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mt-0.5">
                        Legally Approved Rules
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {slide.id === "b2b" && (
              <div className="rounded-3xl border border-border/80 bg-card/45 backdrop-blur-xl p-8 shadow-2xl relative overflow-hidden w-full max-w-md">
                <div className="absolute inset-0 bg-gradient-to-tr from-sky-500/10 via-transparent to-primary/5 opacity-60 pointer-events-none" />
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex size-14 items-center justify-center rounded-2xl bg-sky-500/10 border border-sky-500/20 text-sky-500">
                      <Globe className="size-8" />
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-foreground text-lg">Global Reach</h4>
                      <p className="text-xs text-muted-foreground">Connecting UK, Vietnam & 37+ countries</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="p-4 rounded-xl bg-background/50 border border-border/60">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-xs font-semibold text-muted-foreground">Collaborations</span>
                        <span className="text-xs font-bold text-sky-500">Active</span>
                      </div>
                      <p className="text-2xl font-black text-foreground">39 Partner Nations</p>
                    </div>

                    <div className="p-4 rounded-xl bg-background/50 border border-border/60">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-xs font-semibold text-muted-foreground">
                          B2B Matchmaking Meetings
                        </span>
                        <span className="text-xs font-bold text-primary">Live</span>
                      </div>
                      <p className="text-2xl font-black text-foreground">1-on-1 Consultations</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {slide.id === "services" && (
              <div className="rounded-3xl border border-border/80 bg-card/45 backdrop-blur-xl p-8 shadow-2xl relative overflow-hidden w-full max-w-md">
                <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 via-transparent to-primary/5 opacity-60 pointer-events-none" />
                <div className="relative z-10">
                  <h4 className="font-heading font-bold text-foreground text-lg mb-4">AECCI Service Wings</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { name: "Export Wing", desc: "COO & Logistics" },
                      { name: "Legal Wing", desc: "Arbitration & Advice" },
                      { name: "HR Support", desc: "Talent & Compliance" },
                      { name: "Professional Wing", desc: "Business Advisory" },
                      { name: "Women Entrepreneur", desc: "Support & Mentoring" },
                      { name: "Events & Seminars", desc: "Expos & Networking" },
                    ].map((wing, idx) => (
                      <div
                        key={idx}
                        className="p-3 rounded-xl bg-background/60 border border-border/40 hover:border-emerald-500/30 transition-colors"
                      >
                        <p className="text-xs font-bold text-foreground">{wing.name}</p>
                        <p className="text-[10px] text-muted-foreground">{wing.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {slide.id === "arbitration" && (
              <div className="rounded-3xl border border-border/80 bg-card/45 backdrop-blur-xl p-8 shadow-2xl relative overflow-hidden w-full max-w-md">
                <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/10 via-transparent to-primary/5 opacity-60 pointer-events-none" />
                <div className="relative z-10 text-center">
                  <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 mb-4">
                    <Gavel className="size-8" />
                  </div>
                  <h4 className="font-heading font-black text-foreground text-xl mb-1">Arbitration Center</h4>
                  <p className="text-xs text-muted-foreground uppercase tracking-widest font-semibold mb-6">
                    ICCA Approved Rules
                  </p>

                  <div className="p-4 rounded-2xl bg-amber-500/5 border border-amber-500/10 inline-block w-full">
                    <p className="text-sm font-semibold text-foreground leading-relaxed">
                      Providing legally binding dispute resolutions under standard global international trade regulations.
                    </p>
                  </div>

                  <div className="mt-6 flex justify-around text-left">
                    <div>
                      <p className="text-2xl font-black text-amber-500">100%</p>
                      <p className="text-[10px] uppercase font-bold text-muted-foreground">Legally Binding</p>
                    </div>
                    <div className="border-r border-border h-10 my-auto" />
                    <div>
                      <p className="text-2xl font-black text-primary">Fast-track</p>
                      <p className="text-[10px] uppercase font-bold text-muted-foreground">Dispute Handling</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default function HeroSlider() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [isHovered, setIsHovered] = React.useState(false)

  // Track active slide index
  const onSelect = React.useCallback((api: CarouselApi) => {
    if (!api) return
    setCurrent(api.selectedScrollSnap())
  }, [])

  React.useEffect(() => {
    if (!api) return
    api.on("select", onSelect)
    return () => {
      api.off("select", onSelect)
    }
  }, [api, onSelect])

  // Custom Autoplay Logic with Hover Pausing
  React.useEffect(() => {
    if (!api || isHovered) return

    const interval = setInterval(() => {
      api.scrollNext()
    }, 5000)

    return () => clearInterval(interval)
  }, [api, isHovered])

  return (
    <section
      id="hero-slider"
      className="relative w-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Carousel
        setApi={setApi}
        opts={{
          loop: true,
          align: "start",
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-0">
          {slides.map((slide, index) => (
            <CarouselItem key={slide.id} className="pl-0">
              <SlideContent slide={slide} isActive={current === index} />
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Custom Navigation Arrows positioned inside the container */}
        <CarouselPrevious className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 size-10 hover:bg-primary hover:text-primary-foreground border-primary/20 bg-background/80 backdrop-blur-sm shadow-md" />
        <CarouselNext className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 size-10 hover:bg-primary hover:text-primary-foreground border-primary/20 bg-background/80 backdrop-blur-sm shadow-md" />
      </Carousel>

      {/* Modern Dot Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2.5 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            className={cn(
              "h-2 rounded-full transition-all duration-300",
              current === index
                ? "w-8 bg-primary shadow-sm shadow-primary/20"
                : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
