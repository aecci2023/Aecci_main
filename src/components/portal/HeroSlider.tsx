import * as React from "react"
import { motion, AnimatePresence, type Variants } from "framer-motion"
import {
  Globe,
  Buildings,
  ArrowRight,
  Check,
  Lock,
  CaretLeft,
  CaretRight,
  Database,
} from "@phosphor-icons/react"
import { Award, RefreshCw } from "lucide-react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import type { CarouselApi } from "@/components/ui/carousel"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { SpinningGlobe } from "./SpinningGlobe"

const slides = [
  {
    id: "global-market-access",
    layout: "text-left",
    badge: { Icon: Globe, text: "Global Deal Room" },
    heading: "GLOBAL MARKET ACCESS",
    highlight: "WITHOUT INTERNATIONAL TRAVEL",
    description:
      "Connect with verified international trade partners, market advisors, distributors, and expansion experts through the AECCI Global Deal Room.",
    ctas: [
      { label: "Book Country Access Slot", href: "#pricing", primary: true, isYellow: true },
      { label: "Explore Global Markets", href: "#command-center", primary: false },
    ],
    bgImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1600",
  },
  {
    id: "e-platform",
    layout: "text-right",
    badge: { Icon: Buildings, text: "Digital E-Platform" },
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
  {
    id: "command-center-preview",
    layout: "centered",
    badge: { Icon: Database, text: "Command Center" },
    heading: "THE ULTIMATE TOOL FOR",
    highlight: "GLOBAL EXPORTERS",
    description:
      "Track cargo logs, verify Certificates of Origin, access live tariffs, and monitor market demand instantly through a Bloomberg-style Terminal.",
    ctas: [
      { label: "Enter Command Center", href: "#command-center", primary: true },
      { label: "View Pricing Tiers", href: "#pricing", primary: false },
    ],
    bgImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1600",
  },
] as const

type SlideType = (typeof slides)[number]

const contentVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
}



function InteractiveAttestationHub() {
  const [step, setStep] = React.useState<"idle" | "signing" | "sealing" | "completed">("idle")
  const [progress, setProgress] = React.useState(0)

  const handleAttest = () => {
    if (step !== "idle") return
    setStep("signing")
    setProgress(0)
  }

  React.useEffect(() => {
    if (step === "signing") {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval)
            setStep("sealing")
            return 100
          }
          return prev + 10
        })
      }, 100)
      return () => clearInterval(interval)
    } else if (step === "sealing") {
      const timer = setTimeout(() => {
        setStep("completed")
      }, 1200)
      return () => clearTimeout(timer)
    }
  }, [step])

  const handleReset = (e: React.MouseEvent) => {
    e.stopPropagation()
    setStep("idle")
    setProgress(0)
  }

  return (
    <div className="relative w-full max-w-md group/visual">
      {/* Outer Glows */}
      <div className={cn(
        "absolute -inset-2 rounded-3xl blur-2xl opacity-60 transition-all duration-500",
        step === "completed" 
          ? "bg-gradient-to-r from-emerald-500/30 to-primary/30" 
          : step === "sealing" || step === "signing"
          ? "bg-gradient-to-r from-amber-500/30 to-orange-500/30"
          : "bg-gradient-to-r from-slate-500/20 to-primary/10"
      )} />

      {/* Main Terminal Frame */}
      <div className="relative rounded-3xl border border-white/10 bg-slate-950/85 p-6 md:p-8 shadow-2xl overflow-hidden backdrop-blur-xl">
        
        {/* Mock Window Controls */}
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
          <div className="flex items-center gap-1.5">
            <span className="size-2.5 rounded-full bg-white/10" />
            <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest font-bold">
              e-CO Attestation Engine v4.2
            </span>
          </div>
          <span className={cn(
            "text-[9px] font-mono font-bold px-2 py-0.5 rounded border uppercase tracking-wider",
            step === "completed"
              ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-400"
              : step === "signing" || step === "sealing"
              ? "bg-amber-500/10 border-amber-500/20 text-amber-400 animate-pulse"
              : "bg-white/5 border-white/10 text-slate-400"
          )}>
            {step}
          </span>
        </div>

        {/* Certificate Display Area */}
        <div className="relative rounded-2xl bg-white/5 border border-white/10 p-5 space-y-4 mb-6 overflow-hidden">
          {/* Neon Scan line when signing/completed */}
          {step === "signing" && (
            <motion.div
              animate={{ y: ["0%", "100%", "0%"] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
              className="absolute inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent z-20"
            />
          )}
          {step === "sealing" && (
            <motion.div
              animate={{ y: ["0%", "100%", "0%"] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
              className="absolute inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent z-20"
            />
          )}

          {/* Certificate Header */}
          <div className="flex items-center justify-between pb-3 border-b border-white/5">
            <div>
              <p className="text-[9px] font-bold text-slate-500 tracking-wider">AECCI CHAMBER SERVICES</p>
              <h5 className="text-sm font-bold text-white font-sans">Certificate of Origin</h5>
            </div>
            <span className="text-[10px] font-mono text-slate-400">NO: #92-K8A1</span>
          </div>

          {/* Certificate Fields */}
          <div className="space-y-2.5 font-sans">
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div>
                <p className="text-[9px] font-bold text-slate-500">Exporter Registry Name</p>
                <p className="font-semibold text-slate-200 mt-0.5">Indus Agro Exports</p>
              </div>
              <div>
                <p className="text-[9px] font-bold text-slate-500">Consignment Destination</p>
                <p className="font-semibold text-slate-200 mt-0.5">Mombasa Port, Kenya</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div>
                <p className="text-[9px] font-bold text-slate-500">Invoice Valuation</p>
                <p className="font-semibold text-slate-200 mt-0.5">$45,200.00 USD</p>
              </div>
              <div>
                <p className="text-[9px] font-bold text-slate-500">Seal Status</p>
                <div className="mt-0.5">
                  {step === "completed" ? (
                    <Badge className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[9px] font-bold uppercase tracking-wider px-2 py-0">
                      VERIFIED & SEALED
                    </Badge>
                  ) : step === "signing" || step === "sealing" ? (
                    <Badge className="bg-amber-500/10 text-amber-400 border border-amber-500/20 text-[9px] font-bold uppercase tracking-wider px-2 py-0 animate-pulse">
                      PROCESSING...
                    </Badge>
                  ) : (
                    <Badge className="bg-white/5 text-slate-400 border border-white/10 text-[9px] font-bold uppercase tracking-wider px-2 py-0">
                      PENDING SEAL
                    </Badge>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Animated Chamber Seal Stamp Graphic */}
          <AnimatePresence>
            {(step === "sealing" || step === "completed") && (
              <motion.div
                initial={{ scale: 3, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className="absolute right-4 bottom-4 size-20 rounded-full border-2 border-dashed border-amber-400/60 bg-amber-400/5 flex items-center justify-center rotate-12 z-10"
              >
                <div className="size-16 rounded-full border border-dashed border-amber-400/40 flex flex-col items-center justify-center text-[7px] font-mono text-amber-400 font-bold tracking-tighter leading-none text-center">
                  <span>AECCI SEAL</span>
                  <Award className="size-5 my-0.5" />
                  <span>ATTESTED</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Action Button & Progress Panel */}
        <div className="space-y-4">
          {step === "idle" && (
            <Button
              onClick={handleAttest}
              className="w-full rounded-2xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold py-6 text-xs shadow-lg shadow-amber-400/20 flex items-center justify-center gap-2"
            >
              <Lock className="size-4" />
              SIMULATE DIGITAL ATTESTATION
            </Button>
          )}

          {step === "signing" && (
            <div className="space-y-2">
              <div className="flex items-center justify-between text-[10px] font-mono">
                <span className="text-amber-400 animate-pulse font-bold">1/3 Signing Document...</span>
                <span>{progress}%</span>
              </div>
              <div className="h-2 bg-white/5 border border-white/10 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-amber-400 rounded-full"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          )}

          {step === "sealing" && (
            <div className="space-y-2 text-center py-2">
              <div className="flex items-center justify-center gap-2 text-[11px] text-amber-400 font-bold animate-pulse font-sans">
                <RefreshCw className="size-3.5 animate-spin" />
                <span>2/3 Applying Cryptographic Chamber Seal...</span>
              </div>
            </div>
          )}

          {step === "completed" && (
            <div className="space-y-4 font-sans">
              <div className="p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-emerald-400 text-center flex items-center justify-center gap-2">
                <Check className="size-4 stroke-[3px]" />
                <span className="font-bold text-xs">Attestation cleared in 1.2s!</span>
              </div>
              <Button
                onClick={handleReset}
                variant="outline"
                className="w-full rounded-2xl border-white/10 text-slate-300 hover:text-white hover:bg-white/5 font-bold text-xs"
              >
                Reset Attestation Simulation
              </Button>
            </div>
          )}
        </div>

      </div>
    </div>
  )
}

function TerminalVisual() {
  return (
    <div className="relative w-full max-w-2xl group/terminal">
      <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-primary/10 to-emerald-500/10 blur-2xl opacity-50" />
      
      <div className="relative rounded-2xl border border-white/10 bg-slate-950/80 p-5 font-mono text-xs text-slate-300 shadow-2xl">
        {/* Terminal Header */}
        <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10">
          <div className="flex items-center gap-1.5">
            <span className="size-2.5 rounded-full bg-red-500/80" />
            <span className="size-2.5 rounded-full bg-amber-500/80" />
            <span className="size-2.5 rounded-full bg-green-500/80" />
            <span className="text-[10px] text-slate-500 ml-2 font-sans font-bold">AECCI-COMMAND-CENTER://LIVE-STREAM</span>
          </div>
          <span className="text-[10px] text-primary bg-primary/10 px-2 py-0.5 rounded border border-primary/20 animate-pulse font-sans font-bold">
            ONLINE
          </span>
        </div>

        {/* Terminal Body / Live Tickers */}
        <div className="space-y-2 max-h-48 overflow-y-auto pr-2">
          <p className="text-slate-500">// Fetching live cargo routing feeds...</p>
          <div className="flex items-center justify-between text-emerald-400">
            <span>[OK] EXPORT_DEAL_ROOM_01://KENYA</span>
            <span className="text-white">Session Active (FMCG Focus)</span>
          </div>
          <div className="flex items-center justify-between text-emerald-400">
            <span>[OK] PORT_CLEARANCE://MUMBAI_NS</span>
            <span className="text-white">Transit Rate: 98.7% Clear</span>
          </div>
          <div className="flex items-center justify-between text-sky-400">
            <span>[LOAD] EXPORT_DEAL_ROOM_04://SINGAPORE</span>
            <span className="text-slate-400">Registrations Open (15 July)</span>
          </div>
          <div className="flex items-center justify-between text-amber-400">
            <span>[PENDING] REGULATORY_VISAS://NETHERLANDS</span>
            <span className="text-white">Closing in 12h (Tariff-free path)</span>
          </div>
          <div className="flex items-center justify-between text-slate-500">
            <span>[SECURE] ENCRYPT_HANDSHAKE_COMPLETED</span>
            <span>0.003ms response</span>
          </div>
        </div>
      </div>
    </div>
  )
}

function SlideContent({ slide, isActive }: { slide: SlideType; isActive: boolean }) {
  const { Icon: BadgeIcon } = slide.badge

  if (slide.layout === "centered") {
    return (
      <div className="relative min-h-[660px] md:min-h-[740px] flex flex-col justify-center items-center overflow-hidden w-full text-center px-6 py-20 bg-slate-950">
        {/* Background Ken Burns */}
        <div className="absolute inset-0 z-0">
          <motion.div
            initial={{ scale: 1 }}
            animate={isActive ? { scale: 1.05 } : { scale: 1 }}
            transition={{ duration: 5.2, ease: "linear" }}
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ backgroundImage: `url(${slide.bgImage})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-950 z-1" />
        </div>

        <div className="relative z-10 max-w-4xl flex flex-col items-center">
          {/* Badge */}
          <motion.div
            initial="hidden"
            animate={isActive ? "visible" : "hidden"}
            variants={contentVariants}
            custom={0.0}
            className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-md text-white text-xs font-semibold px-4 py-1.5 rounded-full border border-white/10 mb-6 tracking-wide"
          >
            <BadgeIcon className="size-4 text-primary" />
            {slide.badge.text}
          </motion.div>

          {/* Title */}
          <motion.h1
            initial="hidden"
            animate={isActive ? "visible" : "hidden"}
            variants={contentVariants}
            custom={0.1}
            className="font-heading font-black text-3.5xl sm:text-5xl lg:text-6xl leading-[1.1] text-white tracking-tight mb-6"
          >
            {slide.heading}
            <br />
            <span className="bg-gradient-to-r from-primary via-emerald-400 to-teal-300 bg-clip-text text-transparent">
              {slide.highlight}
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial="hidden"
            animate={isActive ? "visible" : "hidden"}
            variants={contentVariants}
            custom={0.2}
            className="font-body text-base md:text-lg text-slate-300 mb-8 max-w-2xl leading-relaxed font-light"
          >
            {slide.description}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial="hidden"
            animate={isActive ? "visible" : "hidden"}
            variants={contentVariants}
            custom={0.3}
            className="flex flex-wrap gap-4 justify-center w-full sm:w-auto mb-12"
          >
            {slide.ctas.map((cta) => (
              <a
                key={cta.label}
                href={cta.href}
                className={cn(
                  "w-full sm:w-auto flex items-center justify-center text-sm font-bold px-8 h-12 rounded-full transition-all duration-300 hover:-translate-y-0.5",
                  cta.primary
                    ? "bg-primary text-primary-foreground hover:bg-primary/95 shadow-lg shadow-primary/25"
                    : "bg-white/10 border border-white/20 text-white hover:bg-white/20"
                )}
              >
                {cta.label}
              </a>
            ))}
          </motion.div>

          {/* Interactive terminal preview below */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-full max-w-2xl"
          >
            <TerminalVisual />
          </motion.div>
        </div>
      </div>
    )
  }

  return (
    <div
      className={cn(
        "relative min-h-[640px] md:min-h-[720px] flex items-center overflow-hidden w-full bg-slate-950"
      )}
    >
      {/* Background Ken Burns */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          initial={{ scale: 1 }}
          animate={isActive ? { scale: 1.05 } : { scale: 1 }}
          transition={{ duration: 5.2, ease: "linear" }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${slide.bgImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/75 to-transparent z-1" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1280px] w-full px-6 md:px-12 py-20 md:py-28 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        {/* Asymmetrical Layout Handling */}
        <div className={cn(
          "col-span-1 md:col-span-7 flex flex-col items-start text-left",
          slide.layout === "text-right" ? "md:col-start-6 md:col-span-7 md:order-2" : "md:order-1"
        )}>
          {/* Badge */}
          <motion.div
            initial="hidden"
            animate={isActive ? "visible" : "hidden"}
            variants={contentVariants}
            custom={0.0}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-white text-xs font-semibold px-4 py-1.5 rounded-full border border-white/15 mb-6 tracking-wide shadow-sm"
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
            className="font-heading font-black text-3.5xl sm:text-5.5xl lg:text-6.5xl leading-[1.08] text-white tracking-tight mb-6"
          >
            {slide.heading}
            <br />
            <span className={cn(
              "bg-gradient-to-r bg-clip-text text-transparent drop-shadow-sm",
              slide.id === "global-market-access" 
                ? "from-amber-400 via-amber-300 to-yellow-500" 
                : "from-primary via-emerald-400 to-teal-300"
            )}>
              {slide.highlight}
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial="hidden"
            animate={isActive ? "visible" : "hidden"}
            variants={contentVariants}
            custom={0.2}
            className="font-body text-base md:text-lg text-slate-200/90 mb-10 max-w-xl leading-relaxed whitespace-pre-line font-light"
          >
            {slide.description}
          </motion.p>

          {/* CTAs */}
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
                  "w-full sm:w-auto flex items-center justify-center text-sm font-bold px-8 h-12 rounded-full transition-all duration-300 hover:-translate-y-0.5",
                  cta.primary
                    ? "isYellow" in cta && cta.isYellow
                      ? "bg-amber-400 text-slate-950 hover:bg-amber-300 shadow-lg shadow-amber-400/25 border border-amber-300/20"
                      : "bg-primary text-primary-foreground hover:bg-primary/95 shadow-lg shadow-primary/25 border border-primary/20"
                    : "bg-white/10 border border-white/20 text-white hover:bg-white/20 backdrop-blur-sm shadow-sm"
                )}
              >
                {cta.label}
                {cta.primary && <ArrowRight className="size-4 ml-2" />}
              </a>
            ))}
          </motion.div>
        </div>

        {/* Right / Left Visual Column */}
        <div className={cn(
          "col-span-1 md:col-span-5 flex justify-center items-center",
          slide.layout === "text-right" ? "md:col-span-5 md:order-1" : "md:order-2"
        )}>
          <motion.div
            initial={{ opacity: 0, y: 45, scale: 0.95 }}
            animate={isActive ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 45, scale: 0.95 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-full flex justify-center"
          >
            {slide.id === "global-market-access" ? (
              <SpinningGlobe />
            ) : (
              <InteractiveAttestationHub />
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
  const [progress, setProgress] = React.useState(0)

  // Track active slide index
  const onSelect = React.useCallback((api: CarouselApi) => {
    if (!api) return
    setCurrent(api.selectedScrollSnap())
    setProgress(0) // Reset progress when select changes
  }, [])

  React.useEffect(() => {
    if (!api) return
    api.on("select", onSelect)
    return () => {
      api.off("select", onSelect)
    }
  }, [api, onSelect])

  // Custom Autoplay Logic with Hover Pausing & Instagram-like Progress Trackers
  React.useEffect(() => {
    if (!api || isHovered) return

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          api.scrollNext()
          return 0
        }
        return prev + 1 // 1% every 50ms = 100% in 5000ms
      })
    }, 50)

    return () => clearInterval(interval)
  }, [api, isHovered])

  return (
    <section
      id="hero-slider"
      className="relative w-full group overflow-hidden bg-slate-950"
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

        {/* Navigation Arrows */}
        <button
          onClick={() => {
            api?.scrollPrev()
            setProgress(0)
          }}
          className="absolute left-6 top-1/2 -translate-y-1/2 z-20 size-11 rounded-full flex items-center justify-center border border-white/10 bg-slate-900/40 text-white backdrop-blur-md shadow-md opacity-0 group-hover:opacity-100 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
          aria-label="Previous slide"
        >
          <CaretLeft className="size-5" />
        </button>
        
        <button
          onClick={() => {
            api?.scrollNext()
            setProgress(0)
          }}
          className="absolute right-6 top-1/2 -translate-y-1/2 z-20 size-11 rounded-full flex items-center justify-center border border-white/10 bg-slate-900/40 text-white backdrop-blur-md shadow-md opacity-0 group-hover:opacity-100 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
          aria-label="Next slide"
        >
          <CaretRight className="size-5" />
        </button>
      </Carousel>

      {/* Modern Story-Style Progress Bars */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3 w-4/5 max-w-md">
        {slides.map((_, index) => {
          let fillWidth = "0%"
          if (index < current) {
            fillWidth = "100%"
          } else if (index === current) {
            fillWidth = `${progress}%`
          }

          return (
            <button
              key={index}
              onClick={() => {
                api?.scrollTo(index)
                setProgress(0)
              }}
              className="h-1 flex-1 bg-white/20 hover:bg-white/30 rounded-full overflow-hidden transition-all duration-150 relative cursor-pointer"
              aria-label={`Go to slide ${index + 1}`}
            >
              <div
                className={cn(
                  "h-full rounded-full transition-all duration-75",
                  current === 0 ? "bg-amber-400" : "bg-primary"
                )}
                style={{ width: fillWidth }}
              />
            </button>
          )
        })}
      </div>
    </section>
  )
}
