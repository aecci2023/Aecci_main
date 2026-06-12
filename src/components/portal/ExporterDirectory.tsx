import * as React from "react"
import { MagnifyingGlass, CheckCircle, ChatCircle, Users, X, Crown, Check } from "@phosphor-icons/react"
import { Card, CardHeader, CardContent, CardFooter, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"
import { motion } from "framer-motion"

interface Exporter {
  id: string
  name: string
  category: string
  products: string[]
  tier: "Gold" | "Premium" | "Standard"
  verified: boolean
  country: string
  desc: string
  logoText: string
}

const EXPORTERS_DATA: Exporter[] = [
  {
    id: "exp-1",
    name: "Indus Agro & Spices Ltd.",
    category: "agriculture",
    products: ["Organic Turmeric", "Basmati Rice", "Cardamom"],
    tier: "Gold",
    verified: true,
    country: "India",
    desc: "Leading producer of premium certified organic spices and grains catering to North America and Europe since 1998.",
    logoText: "IA"
  },
  {
    id: "exp-2",
    name: "Siam Silk & Textiles Co.",
    category: "textiles",
    products: ["Raw Silk Threads", "Premium Brocade", "Apparel Fabrics"],
    tier: "Premium",
    verified: true,
    country: "Thailand",
    desc: "Award-winning heritage silk weavers offering high-fashion fabrics to major European couture houses.",
    logoText: "SS"
  },
  {
    id: "exp-3",
    name: "Nippon Precision Robotics",
    category: "engineering",
    products: ["Micro-actuators", "Hydraulic Valves", "CNC Controller Panels"],
    tier: "Gold",
    verified: true,
    country: "Japan",
    desc: "State-of-the-art sub-assembly automation components designed for precision manufacturing and smart factories.",
    logoText: "NP"
  },
  {
    id: "exp-4",
    name: "Vanguard Tech & Cloud Systems",
    category: "software",
    products: ["TradeLog SaaS", "AI Supply Chain Optimizers", "Chamber Integration APIs"],
    tier: "Premium",
    verified: false,
    country: "Singapore",
    desc: "Innovative logistics software suites streamlining port clearances, container positioning, and documentation.",
    logoText: "VT"
  },
  {
    id: "exp-5",
    name: "Lotus Biotech & Chemical Corp",
    category: "chemical",
    products: ["Active Bio-enzymes", "Specialty Pigments", "Reagent Formulations"],
    tier: "Standard",
    verified: true,
    country: "South Korea",
    desc: "Eco-friendly industrial solvents and biocides serving environmental engineering and cosmetic production sectors.",
    logoText: "LB"
  },
  {
    id: "exp-6",
    name: "Golden Highlands Tea Exporters",
    category: "agriculture",
    products: ["Assam Black Tea", "First Flush Darjeeling", "Green Herbal Blends"],
    tier: "Gold",
    verified: true,
    country: "India",
    desc: "Exporters of premium single-origin tea estates supplying wholesalers across Middle East and Australia.",
    logoText: "GH"
  }
]

export default function ExporterDirectory() {
  const [forumCategory, setForumCategory] = React.useState("all")
  const [forumSearch, setForumSearch] = React.useState("")
  const [selectedExporter, setSelectedExporter] = React.useState<Exporter | null>(null)
  const [rfqMessage, setRfqMessage] = React.useState("")

  // Filtered Exporters
  const filteredExporters = EXPORTERS_DATA.filter((exp) => {
    const matchesCat = forumCategory === "all" || exp.category === forumCategory
    const matchesSearch = exp.name.toLowerCase().includes(forumSearch.toLowerCase()) || 
                          exp.products.some(p => p.toLowerCase().includes(forumSearch.toLowerCase())) ||
                          exp.country.toLowerCase().includes(forumSearch.toLowerCase())
    return matchesCat && matchesSearch
  })

  // Exporter RFQ submission
  const handleRfqSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!rfqMessage.trim()) return
    
    toast.success(`Request for Quote successfully routed to ${selectedExporter?.name}! You will receive their proposal shortly via registered email.`)
    setRfqMessage("")
    setSelectedExporter(null)
  }

  return (
    <section id="b2b-forum" className="py-24 bg-card/5 overflow-hidden">
      <div className="mx-auto max-w-[1280px] px-6 md:px-12">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <span className="text-xs font-bold text-primary uppercase tracking-widest mb-3 block">Trade Connections</span>
          <h2 className="font-heading font-black text-3xl md:text-4xl text-foreground">Verified Exporter Directory</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-primary/60 mx-auto mt-4 rounded-full" />
          <p className="font-body text-sm md:text-base text-muted-foreground mt-4 max-w-2xl mx-auto">
            Securely match, contact, and negotiate trade deals with verified corporate members certified by the AECCI regulatory board.
          </p>
        </motion.div>

        <div className="space-y-6">
          {/* Category Selectors & Search bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            className="flex flex-col sm:flex-row justify-between items-center gap-4 bg-card/65 border border-border p-4 rounded-xl backdrop-blur-md"
          >
            <div className="flex flex-wrap gap-2 justify-center">
              {[
                { value: "all", label: "All Categories" },
                { value: "agriculture", label: "Agro & Spices" },
                { value: "textiles", label: "Textiles & Silks" },
                { value: "engineering", label: "Precision Engineering" },
                { value: "software", label: "TradeTech Software" },
                { value: "chemical", label: "Specialty Chemicals" }
              ].map((item) => (
                <button
                  key={item.value}
                  onClick={() => {
                    setForumCategory(item.value)
                    toast.info(`Filtered directory by ${item.label}`)
                  }}
                  className={`px-4 py-1.5 rounded-full text-xs font-bold active:scale-95 transition-all cursor-pointer ${
                    forumCategory === item.value
                      ? "bg-primary text-primary-foreground shadow-md shadow-primary/10"
                      : "bg-muted/40 border border-border text-foreground hover:bg-muted"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="relative w-full sm:w-80">
              <MagnifyingGlass className="absolute left-3 top-3.5 size-4 text-muted-foreground/60" />
              <Input 
                value={forumSearch}
                onChange={(e) => setForumSearch(e.target.value)}
                placeholder="Search products or countries..." 
                className="bg-muted/20 border-border text-foreground focus-visible:ring-primary focus-visible:ring-offset-0 placeholder:text-muted-foreground/45 pl-9 text-xs h-10 rounded-lg"
              />
            </div>
          </motion.div>

          {/* Exporter Cards Grid */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: { staggerChildren: 0.1 }
              }
            }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredExporters.map((exp) => (
              <motion.div key={exp.id} variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
              }} className="h-full">
                <Card className="h-full border-border bg-card/75 backdrop-blur-xl shadow-xl flex flex-col justify-between hover:border-primary/30 hover:shadow-2xl transition-all duration-300">
                  <CardHeader className="p-6 pb-2 text-left">
                  <div className="flex justify-between items-start gap-4">
                    {/* Logo Initials */}
                    <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-tr from-muted/50 to-muted/80 text-foreground font-heading font-black text-sm border border-border">
                      {exp.logoText}
                    </div>

                    {/* Badges */}
                    <div className="flex flex-col gap-1.5 items-end">
                      <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${
                        exp.tier === "Gold" 
                          ? "bg-primary/10 text-primary border border-primary/20" 
                          : exp.tier === "Premium" 
                            ? "bg-primary/15 text-primary border border-primary/20"
                            : "bg-muted text-muted-foreground border border-border"
                      }`}>
                        <Crown className="size-3 text-amber-500" /> {exp.tier} Tier
                      </span>
                      {exp.verified && (
                        <span className="flex items-center gap-1 bg-primary/10 text-primary text-[10px] font-bold px-2 py-0.5 rounded border border-primary/20 uppercase tracking-widest">
                          <CheckCircle className="size-3" /> Verified
                        </span>
                      )}
                    </div>
                  </div>

                  <h3 className="font-heading font-black text-base text-foreground mt-4">{exp.name}</h3>
                  <p className="text-[10px] font-bold text-primary uppercase tracking-widest mt-0.5">Origin: {exp.country}</p>
                  <p className="text-xs text-muted-foreground mt-3 leading-relaxed line-clamp-3 text-left">
                    {exp.desc}
                  </p>
                </CardHeader>

                <CardContent className="p-6 pt-2 pb-4 text-left">
                  <div className="h-px bg-border/50 my-3" />
                  <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-2">Primary Export Portfolio</p>
                  <div className="flex flex-wrap gap-1.5">
                    {exp.products.map((prod, idx) => (
                      <span key={idx} className="bg-muted/40 border border-border/80 px-2 py-0.5 rounded text-[10px] text-foreground font-semibold">
                        {prod}
                      </span>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="p-6 pt-0 flex gap-2">
                  <Button 
                    onClick={() => setSelectedExporter(exp)}
                    className="flex-1 text-xs font-bold bg-primary text-primary-foreground hover:bg-primary/90 h-9 cursor-pointer"
                  >
                    Send RFQ
                  </Button>
                  <Button 
                    variant="outline"
                    onClick={() => toast.info(`Direct chat pipeline established with ${exp.name}`)}
                    className="text-xs font-bold border-border hover:bg-muted/20 h-9 cursor-pointer"
                  >
                    <ChatCircle className="size-4" /> Message
                  </Button>
                </CardFooter>
                </Card>
              </motion.div>
            ))}

            {filteredExporters.length === 0 && (
              <div className="col-span-full border border-dashed border-border p-16 rounded-xl text-center text-muted-foreground">
                <Users className="size-12 mx-auto text-muted-foreground/35 mb-4" />
                <p className="font-heading font-bold text-base">No Exporters Match Your Criteria</p>
                <p className="text-xs max-w-sm mx-auto mt-2">Adjust your category filter or clean your search text queries to find associated exporters.</p>
              </div>
            )}
          </motion.div>
        </div>

        {/* RFQ Sheet/Dialog Simulation overlay */}
        {selectedExporter && (
          <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-6 animate-in fade-in duration-300">
            <Card className="w-full max-w-[480px] border-border bg-card shadow-2xl p-6 text-left relative animate-in zoom-in-95 duration-300">
              <button 
                onClick={() => setSelectedExporter(null)}
                className="absolute top-4 right-4 text-muted-foreground hover:text-foreground cursor-pointer"
              >
                <X className="size-5" />
              </button>
              <CardHeader className="p-0 mb-6">
                <div className="flex items-center gap-3">
                  <span className="text-xl font-heading font-black text-foreground">Initiate Trade Request</span>
                  <span className="px-2 py-0.5 bg-primary/10 text-primary text-[10px] font-bold rounded border border-primary/20 uppercase tracking-widest">RFQ</span>
                </div>
                <CardDescription className="text-xs text-muted-foreground mt-1">
                  You are requesting commercial quotations directly from <span className="font-bold text-foreground">{selectedExporter.name}</span>.
                </CardDescription>
              </CardHeader>

              <form onSubmit={handleRfqSubmit} className="space-y-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-muted-foreground">Target Export Products</label>
                  <div className="flex flex-wrap gap-2 p-2.5 rounded bg-muted/30 border border-border">
                    {selectedExporter.products.map((p, idx) => (
                      <span key={idx} className="inline-flex items-center gap-1 bg-muted px-2 py-0.5 rounded text-xs font-semibold border border-border">
                        <Check className="size-3 text-emerald-500" /> {p}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="rfq-msg" className="text-xs font-semibold text-muted-foreground">Detailed Shipping & Volume Specifications</label>
                  <textarea
                    id="rfq-msg"
                    rows={4}
                    value={rfqMessage}
                    onChange={(e) => setRfqMessage(e.target.value)}
                    placeholder="Specify target volume, shipping port details, preferred incoterm (FOB/CIF), and expected delivery timelines."
                    className="w-full p-3 rounded-lg border border-border bg-muted/20 text-foreground text-xs focus:outline-none focus:ring-1 focus:ring-primary placeholder:text-muted-foreground/45"
                    required
                  />
                </div>

                <div className="flex justify-end gap-3 pt-2">
                  <Button 
                    type="button" 
                    variant="ghost" 
                    onClick={() => setSelectedExporter(null)}
                    className="text-xs font-bold border-border cursor-pointer"
                  >
                    Cancel
                  </Button>
                  <Button 
                    type="submit" 
                    className="bg-primary text-primary-foreground hover:bg-primary/95 text-xs font-bold cursor-pointer"
                  >
                    Submit Quote Request
                  </Button>
                </div>
              </form>
            </Card>
          </div>
        )}

      </div>
    </section>
  )
}
