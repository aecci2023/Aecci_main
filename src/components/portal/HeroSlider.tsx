import * as React from "react"
import { motion } from "framer-motion"
import {
  Globe,
  Buildings,
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
    id: "services",
    badge: { Icon: Buildings, text: "AECCI Services" },
    heading: "Empowering Indian Exporters",
    highlight: "Worldwide",
    description:
      "We provide comprehensive assistance, trade facilitation, and professional guidance to help businesses navigate international markets and scale globally.",
    ctas: [
      { label: "Our Services", href: "/services", primary: true },
    ],
    bgImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1600",
  },
  {
    id: "e-platform",
    badge: { Icon: Globe, text: "Digital E-Platform" },
    heading: "Chamber Services, Digitized &",
    highlight: "Accelerated",
    description:
      "Verify Certificates of Origin instantly, submit customs documents electronically, request trade recommendation letters, and manage membership online.",
    ctas: [
      { label: "Members Login", href: "https://e-platform.aecci.org.in/login", primary: true },
      { label: "Learn More", href: "/e-platform", primary: false },
    ],
    bgImage: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=1600",
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
        "relative min-h-[640px] md:min-h-[700px] flex items-center overflow-hidden bg-cover bg-center"
      )}
      style={{
        backgroundImage: `url(${slide.bgImage})`,
      }}
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-slate-950/75 mix-blend-multiply z-0" />

      {/* Decorative Blobs & Grids */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden z-10">
        <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-primary/10 blur-3xl opacity-40" />
        <div className="absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-primary/10 blur-3xl opacity-40" />
        <div
          className="absolute inset-0 opacity-[0.03] text-white"
          style={{
            backgroundImage: "radial-gradient(circle, currentColor 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="relative z-20 mx-auto max-w-[1280px] w-full px-6 md:px-12 py-16 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Column: Animated Text Content */}
        <div className="flex flex-col items-start text-left">
          {/* Badge */}
          <motion.div
            initial="hidden"
            animate={isActive ? "visible" : "hidden"}
            variants={contentVariants}
            custom={0.0}
            className="inline-flex items-center gap-2 bg-primary/20 text-primary-foreground text-xs font-bold px-4 py-1.5 rounded-full border border-primary/30 mb-6 tracking-wide"
          >
            <BadgeIcon className="size-4 text-primary" />
            {slide.badge.text}
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial="hidden"
            animate={isActive ? "visible" : "hidden"}
            variants={contentVariants}
            custom={0.1}
            className="font-heading font-black text-3xl sm:text-5xl lg:text-6xl leading-[1.1] text-white tracking-tight mb-6"
          >
            {slide.heading}
            <br />
            <span className="bg-gradient-to-r from-primary to-emerald-400 bg-clip-text text-transparent">
              {slide.highlight}
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial="hidden"
            animate={isActive ? "visible" : "hidden"}
            variants={contentVariants}
            custom={0.2}
            className="font-body text-base md:text-lg text-slate-200 mb-10 max-w-xl leading-relaxed whitespace-pre-line"
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
                    : "bg-white/10 border border-white/20 text-white hover:bg-white/20"
                )}
              >
                {cta.label}
                {cta.primary && <ArrowRight className="size-4 ml-2" />}
              </a>
            ))}
          </motion.div>
        </div>

        {/* Right Column: Interactive Slide Visuals */}
        <div className="hidden md:flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isActive ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="w-full flex justify-center"
          >
            {slide.id === "services" && (
              <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 shadow-2xl relative overflow-hidden w-full max-w-md">
                <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 via-transparent to-primary/5 opacity-60 pointer-events-none" />
                <div className="relative z-10">
                  <h4 className="font-heading font-bold text-white text-lg mb-4">Core Chamber Benefits</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { name: "Trade Facilitation", desc: "Global export pathways" },
                      { name: "Market Advisory", desc: "Expert economic studies" },
                      { name: "Attestation Services", desc: "Swift custom compliance" },
                      { name: "Business Network", desc: "Unlock cross-border trade" },
                    ].map((benefit, idx) => (
                      <div
                        key={idx}
                        className="p-3 rounded-xl bg-white/5 border border-white/10 hover:border-emerald-500/30 transition-colors"
                      >
                        <p className="text-xs font-bold text-white">{benefit.name}</p>
                        <p className="text-[10px] text-slate-300">{benefit.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {slide.id === "e-platform" && (
              <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 shadow-2xl relative overflow-hidden w-full max-w-md">
                <div className="absolute inset-0 bg-gradient-to-tr from-sky-500/10 via-transparent to-primary/5 opacity-60 pointer-events-none" />
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex size-14 items-center justify-center rounded-2xl bg-sky-500/20 border border-sky-500/30 text-sky-400">
                      <Globe className="size-8" />
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-white text-lg">E-Platform</h4>
                      <p className="text-xs text-slate-300">Digitized & Accelerated</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="p-4 rounded-xl bg-black/30 border border-white/10">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-xs font-semibold text-slate-300">Certificate of Origin</span>
                        <span className="text-xs font-bold text-sky-400">Instant</span>
                      </div>
                      <p className="text-2xl font-black text-white">Digital Attestation</p>
                    </div>

                    <div className="p-4 rounded-xl bg-black/30 border border-white/10">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-xs font-semibold text-slate-300">Verification</span>
                        <span className="text-xs font-bold text-primary">Secure Portal</span>
                      </div>
                      <p className="text-2xl font-black text-white">Online Validation</p>
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
