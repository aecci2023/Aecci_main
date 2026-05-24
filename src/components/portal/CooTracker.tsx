import * as React from "react"
import { FileText, X, Clock } from "@phosphor-icons/react"
import { Card, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"
import { motion } from "framer-motion"

export default function CooTracker() {
  const [cooQuery, setCooQuery] = React.useState("")
  const [cooStatus, setCooStatus] = React.useState<any | null>(null)
  const [cooError, setCooError] = React.useState(false)

  const handleCooTrack = (e: React.FormEvent) => {
    e.preventDefault()
    setCooError(false)
    
    const query = cooQuery.trim().toUpperCase()
    if (!query) {
      toast.error("Please enter a Certificate reference number.")
      return
    }

    // Dynamic mock lookup
    if (query === "AECCI-IND-2026-9821") {
      setCooStatus({
        id: "AECCI-IND-2026-9821",
        exporter: "Indus Agro & Spices Ltd.",
        consignee: "EuroFoods GmbH (Germany)",
        goods: "Organic Black Pepper & Cardamom",
        issuedDate: "May 18, 2026",
        currentStep: 5,
        status: "Issued & Stamped",
        officer: "M. K. Joshi (Chief Registrar)"
      })
      toast.success("Certificate of Origin found! Status: Issued & Stamped.")
    } else if (query === "AECCI-THA-2026-4402") {
      setCooStatus({
        id: "AECCI-THA-2026-4402",
        exporter: "Siam Silk & Textiles Co.",
        consignee: "LuxeApparel SAS (France)",
        goods: "Raw Thai Silk Rolls",
        issuedDate: "Pending Verification",
        currentStep: 3,
        status: "Customs Verification",
        officer: "N. Chanchai (Senior Assessor)"
      })
      toast.info("Certificate of Origin is currently undergoing Customs Auditing.")
    } else if (query.startsWith("AECCI-")) {
      // General dynamic mock matching
      setCooStatus({
        id: query,
        exporter: "Registered Chamber Partner",
        consignee: "Global Wholesale Partner",
        goods: "Standard Commercial Shipment",
        issuedDate: "May 20, 2026",
        currentStep: 4,
        status: "Chamber Board Approval",
        officer: "A. S. Deshmukh (Registrar)"
      })
      toast.success(`Dynamic tracking generated for Reference ${query}`)
    } else {
      setCooStatus(null)
      setCooError(true)
      toast.error("No record found matching this Certificate reference.")
    }
  }

  return (
    <section id="coo-tracker" className="py-24 border-y border-border overflow-hidden">
      <div className="mx-auto max-w-[1280px] px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Text segment */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="lg:col-span-5 text-left"
        >
          <span className="text-xs font-bold text-primary uppercase tracking-widest mb-3 block">Digital Authentication</span>
          <h2 className="font-heading font-black text-3xl md:text-4xl text-foreground mb-6">Real-Time e-Platform COO Tracker</h2>
          <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed mb-6">
            Our secure online registry guarantees the validity of chamber documents. By entering the unique Certificate of Origin (COO) serial number printed on the certificate head, customs authorities and global buyers can verify live registry records and signature stamps.
          </p>
          <div className="bg-muted/30 border border-border/80 p-4.5 rounded-xl space-y-3">
            <p className="text-xs font-bold text-foreground">💡 Sample Reference Numbers for testing:</p>
            <div className="flex flex-col gap-2 font-mono text-xs">
              <button 
                onClick={() => {
                  setCooQuery("AECCI-IND-2026-9821")
                  toast.info("Reference set! Click 'Query Registry' to track.")
                }}
                className="flex items-center justify-between text-left px-3 py-1.5 rounded bg-muted/60 border border-border text-primary hover:bg-muted active:scale-98 transition-all cursor-pointer"
              >
                <span>Issued Certificate:</span>
                <span className="font-bold text-primary">AECCI-IND-2026-9821</span>
              </button>
              <button 
                onClick={() => {
                  setCooQuery("AECCI-THA-2026-4402")
                  toast.info("Reference set! Click 'Query Registry' to track.")
                }}
                className="flex items-center justify-between text-left px-3 py-1.5 rounded bg-muted/60 border border-border text-primary hover:bg-muted active:scale-98 transition-all cursor-pointer"
              >
                <span>Under Review:</span>
                <span className="font-bold text-primary">AECCI-THA-2026-4402</span>
              </button>
            </div>
          </div>
        </motion.div>

        {/* Right Verification Card */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="lg:col-span-7"
        >
          <Card className="border-border bg-card/65 backdrop-blur-xl shadow-2xl p-6 md:p-8">
            <CardTitle className="text-lg font-heading font-bold text-foreground mb-4 text-left flex items-center gap-2">
              <FileText className="size-5 text-primary" /> Certificate Registry Query
            </CardTitle>
            
            <form onSubmit={handleCooTrack} className="flex gap-3 mb-6">
              <Input 
                value={cooQuery}
                onChange={(e) => setCooQuery(e.target.value)}
                placeholder="E.g., AECCI-IND-2026-XXXX" 
                className="bg-muted/30 border-border text-foreground focus-visible:ring-primary focus-visible:ring-offset-0 placeholder:text-muted-foreground/40 text-sm h-11"
              />
              <Button type="submit" className="bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-6 font-bold cursor-pointer">
                Query Registry
              </Button>
            </form>

            {/* Status Display Area */}
            {cooStatus ? (
              <div className="space-y-6 animate-in fade-in duration-300">
                <div className="bg-muted/30 border border-border/50 p-4 rounded-xl grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
                  <div>
                    <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">Registered Exporter</p>
                    <p className="font-heading font-black text-foreground text-sm mt-1">{cooStatus.exporter}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">Consignee Buyer</p>
                    <p className="font-heading font-black text-foreground text-sm mt-1">{cooStatus.consignee}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">Certified Cargo Description</p>
                    <p className="font-body text-xs text-foreground mt-1 font-medium">{cooStatus.goods}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">Attesting Authority Officer</p>
                    <p className="font-heading font-bold text-primary text-xs mt-1">✒️ {cooStatus.officer}</p>
                  </div>
                </div>

                {/* 5-Step Pipeline visualization */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-bold text-muted-foreground">Workflow Stage</span>
                    <span className="font-bold text-primary bg-primary/10 px-2.5 py-0.5 rounded border border-primary/20">{cooStatus.status}</span>
                  </div>

                  <div className="grid grid-cols-5 gap-1.5 pt-2">
                    {[
                      { step: 1, label: "Draft" },
                      { step: 2, label: "Lodged" },
                      { step: 3, label: "Audit" },
                      { step: 4, label: "Board OK" },
                      { step: 5, label: "Issued" }
                    ].map((item) => (
                      <div key={item.step} className="flex flex-col items-center gap-1.5">
                        <div className={`w-full h-2 rounded-full transition-all duration-500 ${
                          cooStatus.currentStep >= item.step 
                            ? "bg-primary shadow-[0_0_10px_var(--primary)]" 
                            : "bg-muted border border-border"
                        }`} />
                        <span className={`text-[10px] font-bold tracking-tight ${
                          cooStatus.currentStep >= item.step ? "text-foreground font-black" : "text-muted-foreground"
                        }`}>
                          {item.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : cooError ? (
              <div className="bg-destructive/10 border border-destructive/20 text-destructive p-6 rounded-xl text-center flex flex-col items-center gap-2 animate-in slide-in-from-bottom duration-300">
                <X className="size-8" />
                <p className="font-heading font-black text-sm">Certificate Reference Not Found</p>
                <p className="text-xs text-muted-foreground max-w-sm">No recorded ledger matches this query. Please verify the spelling or contact the issuer to ensure document submission.</p>
              </div>
            ) : (
              <div className="border border-dashed border-border p-12 rounded-xl text-center flex flex-col items-center gap-3 text-muted-foreground">
                <Clock className="size-10 text-muted-foreground/40 animate-pulse" />
                <p className="text-sm font-medium">Awaiting Registry Reference Query...</p>
                <p className="text-xs max-w-xs">Enter a valid certificate number or click one of our test reference keys above to inspect digital ledger statuses.</p>
              </div>
            )}

          </Card>
        </motion.div>

      </div>
    </section>
  )
}
