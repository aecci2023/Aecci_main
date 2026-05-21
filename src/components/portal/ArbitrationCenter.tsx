import { CheckCircle } from "@phosphor-icons/react"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"

export default function ArbitrationCenter() {
  return (
    <section className="py-24 border-t border-border">
      <div className="mx-auto max-w-[1280px] px-6 md:px-12 bg-card/5 border border-border p-8 md:p-12 rounded-3xl backdrop-blur-md">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="text-left space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 bg-gradient-to-tr from-primary to-primary/70 rounded-2xl flex items-center justify-center text-white font-heading font-black shadow-lg">
                ICCA
              </div>
              <span className="bg-primary/10 text-primary text-[10px] font-bold px-3 py-1 rounded border border-primary/20 uppercase tracking-widest">Certified Panels</span>
            </div>
            
            <h2 className="font-heading font-black text-3xl md:text-4xl text-foreground">Institutional Arbitration & Conciliation Center</h2>
            
            <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed">
              International trade requires absolute legal security. The AECCI Arbitration Center delivers fast-tracked commercial dispute resolutions through highly qualified panels of arbitrators. Enjoy globally enforceable awards bypasses traditional court delays.
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-2.5 text-xs text-foreground font-semibold">
                <CheckCircle className="size-4 text-primary" /> Swift Enforcement under ICCA Accords
              </div>
              <div className="flex items-center gap-2.5 text-xs text-foreground font-semibold">
                <CheckCircle className="size-4 text-primary" /> Panels of Renowned Ex-Judges & Trade Experts
              </div>
              <div className="flex items-center gap-2.5 text-xs text-foreground font-semibold">
                <CheckCircle className="size-4 text-primary" /> Substantially Lower Expenses than Litigation
              </div>
            </div>

            <div className="pt-2">
              <Button 
                onClick={() => toast.success("Arbitration Panel Bylaws & Guidelines dispatched to your email.")}
                className="bg-primary text-primary-foreground hover:bg-primary/95 text-xs font-bold px-6 h-11 rounded-full shadow-lg cursor-pointer"
              >
                Download Arbitration Rules
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-2xl overflow-hidden border border-border shadow-2xl relative group">
              <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-colors duration-500" />
              <img 
                alt="ICCA Arbitration & Conciliation Panel" 
                className="w-full aspect-[4/3] object-cover rounded-xl transition-transform duration-700 group-hover:scale-105" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCw3ZKHB7wKWVWJDIJLucprwiJrN894AhxvqKYoNa00-ayhi18DOfkQLy5RKl5hGyCn6m8C_RV9NQLn4fPyCzA2xWYrut3L7PuDNPXTn_7rrwWw7ceptOpY-R11B7pOGX9Dh4SH1wsDHdBpSE8VyIozUdZmEoV1ryu52oC0sL9xPyKV_K-sfNXZHCw-o8qQemcQuSoV7n3nIwOEXJIPAcbRUnGnehUBjjHaTCn2whyad6VtRaGLdlWKGcYVI6v2ht_Qvei_--XvH8ld"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
