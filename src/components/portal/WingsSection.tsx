import * as React from "react"
import { 
  Factory, 
  GenderFemale, 
  Gavel, 
  Globe, 
  Handshake, 
  GraduationCap, 
  RocketLaunch,
  ArrowRight
} from "@phosphor-icons/react"
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { toast } from "sonner"
import { motion, AnimatePresence } from "framer-motion"

interface WingDetail {
  id: string
  title: string
  icon: React.ReactNode
  desc: string
  chairman: string
  contact: string
  initiatives: string[]
}

const WINGS_DATA: WingDetail[] = [
  {
    id: "industrial",
    title: "Industrial Wing",
    icon: <Factory className="size-6 text-primary" />,
    desc: "Empowering manufacturing, trade compliance, and industrial production excellence across all Asian territories.",
    chairman: "Mr. Rajan K. Mehta",
    contact: "industrial.wing@aecci.org.in",
    initiatives: ["Make in Asia Alliance", "Green Energy Transition Grants", "MSME Supply Chain Upgrades"]
  },
  {
    id: "women",
    title: "Women Wing",
    icon: <GenderFemale className="size-6 text-primary" />,
    desc: "Nurturing female entrepreneurship and promoting leadership in global commerce and corporate trade governance.",
    chairman: "Dr. Ananya Goel",
    contact: "women.wing@aecci.org.in",
    initiatives: ["SheExports Accelerator", "Global Female Trade Summits", "Venture Mentoring Program"]
  },
  {
    id: "arbitration",
    title: "Arbitration Board",
    icon: <Gavel className="size-6 text-primary" />,
    desc: "Providing swift, neutral, and legally binding international dispute resolution services under ICCA guidelines.",
    chairman: "Justice (Retd) H. S. Chawla",
    contact: "arbitration@aecci.org.in",
    initiatives: ["Fast-Track Commercial Panels", "Mediation Advisory Service", "Bilateral Dispute Accords"]
  },
  {
    id: "foreign",
    title: "Foreign Trade Wing",
    icon: <Globe className="size-6 text-primary" />,
    desc: "Facilitating cross-border government alliances and simplifying complex customs regulations for exporters.",
    chairman: "Amb. Vikram V. Sen",
    contact: "foreigntrade@aecci.org.in",
    initiatives: ["ASEAN FTA Advisory Board", "Global Compliance Audits", "B2B International Trade Bridges"]
  },
  {
    id: "social",
    title: "Social & CSR Wing",
    icon: <Handshake className="size-6 text-primary" />,
    desc: "Directing corporate social responsibility initiatives and promoting ethical fair-trade certification for exporters.",
    chairman: "Smt. Kavita Deshpande",
    contact: "csr.social@aecci.org.in",
    initiatives: ["FairTrade Certification", "Chamber Solar Microgrid Project", "Export Worker Welfare Trust"]
  },
  {
    id: "skill",
    title: "Skill Development Wing",
    icon: <GraduationCap className="size-6 text-primary" />,
    desc: "Executing certification courses, customs training, and vocational programs for international trade professionals.",
    chairman: "Prof. Manish Singhal",
    contact: "training@aecci.org.in",
    initiatives: ["Certified Export Specialist", "Digital Customs Masterclass", "Global Freight Management Diploma"]
  },
  {
    id: "youth",
    title: "Youth Entrepreneur Wing",
    icon: <RocketLaunch className="size-6 text-primary" />,
    desc: "Mentoring high-potential trade startups and fostering global business networking for young trade innovators.",
    chairman: "Mr. Kabir Thapar",
    contact: "youth.wing@aecci.org.in",
    initiatives: ["TradeX Gen-Z Incubation", "Cross-Border Venture Pitch", "Chamber Trade Fellowships"]
  }
]

export default function WingsSection() {
  const [activeWing, setActiveWing] = React.useState<string>("industrial")

  const currentActiveWing = WINGS_DATA.find(w => w.id === activeWing) || WINGS_DATA[0]

  return (
    <section id="wings" className="py-24 bg-card/10 overflow-hidden">
      <div className="mx-auto max-w-[1280px] px-6 md:px-12">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <span className="text-xs font-bold text-primary uppercase tracking-widest mb-3 block">Chamber Architecture</span>
          <h2 className="font-heading font-black text-3xl md:text-4xl text-foreground">Specialized Chamber Wings</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-primary/60 mx-auto mt-4 rounded-full" />
          <p className="font-body text-sm md:text-base text-muted-foreground mt-4 max-w-2xl mx-auto">
            Focused institutional guidance supporting every legal, demographic, and educational dimension of cross-border commerce.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Wings Selector Grid */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3.5">
            {WINGS_DATA.map((wing) => (
              <button
                key={wing.id}
                onClick={() => {
                  setActiveWing(wing.id)
                  toast.info(`Switched details to ${wing.title}`)
                }}
                className={`flex items-center gap-4 p-4 rounded-xl border text-left active:scale-98 transition-all duration-300 cursor-pointer ${
                  activeWing === wing.id
                    ? "bg-card border-primary/50 shadow-lg shadow-primary/5"
                    : "bg-muted/20 border-border hover:bg-muted/40"
                }`}
              >
                <div className={`p-2.5 rounded-lg transition-colors ${
                  activeWing === wing.id ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground"
                }`}>
                  {wing.icon}
                </div>
                <div className="flex flex-col">
                  <span className="font-heading font-bold text-sm text-foreground">{wing.title}</span>
                  <span className="text-[10px] text-muted-foreground mt-0.5 uppercase tracking-wider font-semibold">Active Initiative</span>
                </div>
              </button>
            ))}
          </div>

          {/* Right Detailed Glass Card */}
          <div className="lg:col-span-7 h-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentActiveWing.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="h-full"
              >
                <Card className="border-border bg-card/75 backdrop-blur-xl shadow-2xl h-full flex flex-col justify-between overflow-hidden relative">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-primary/5 to-transparent rounded-bl-full pointer-events-none" />

                  <CardHeader className="p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 bg-primary/10 text-primary rounded-xl border border-primary/20">
                        {currentActiveWing.icon}
                      </div>
                      <div className="flex flex-col text-left">
                        <CardTitle className="text-xl font-heading font-black text-foreground">{currentActiveWing.title}</CardTitle>
                        <CardDescription className="text-xs text-muted-foreground mt-0.5">Specialized Chamber Unit</CardDescription>
                      </div>
                    </div>

                    <div className="h-px bg-border/50 my-4" />

                    <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed text-left py-2">
                      {currentActiveWing.desc}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                      <div className="bg-muted/30 border border-border/50 p-4 rounded-xl text-left">
                        <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">Chamber Chairman</p>
                        <p className="font-heading font-black text-foreground text-sm mt-1">{currentActiveWing.chairman}</p>
                      </div>
                      <div className="bg-muted/30 border border-border/50 p-4 rounded-xl text-left">
                        <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">Official Correspondence</p>
                        <p className="font-mono text-[11px] text-primary mt-1 hover:underline select-all cursor-pointer">{currentActiveWing.contact}</p>
                      </div>
                    </div>

                    <div className="mt-8 text-left">
                      <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider mb-3">Key Wing Strategic Initiatives</p>
                      <div className="flex flex-wrap gap-2.5">
                        {currentActiveWing.initiatives.map((init, idx) => (
                          <span key={idx} className="bg-muted/40 border border-border px-3 py-1 rounded-full text-xs text-foreground font-medium">
                            ✨ {init}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardHeader>

                  <CardFooter className="bg-muted/20 border-t border-border/50 p-6 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <span className="text-[11px] text-muted-foreground text-center sm:text-left">
                      📧 Reach this specialized board for advisory assistance, guidelines, or partnerships.
                    </span>
                    <a href={`mailto:${currentActiveWing.contact}`} className="flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary/95 text-xs font-bold px-6 py-2.5 rounded-full transition-all">
                      Consult Wing Desk <ArrowRight className="size-3.5" />
                    </a>
                  </CardFooter>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  )
}
