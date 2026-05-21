import { ShieldCheck, SealCheck } from "@phosphor-icons/react"

export default function Hero() {
  return (
    <section id="hero" className="relative pt-12 pb-24 md:py-32 overflow-hidden">
      <div className="mx-auto max-w-[1280px] px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Hero Content */}
        <div className="z-10 flex flex-col items-start text-left">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-xs font-bold px-4 py-1.5 rounded-full border border-primary/20 mb-6 tracking-wide">
            <ShieldCheck className="size-4 animate-pulse" /> ISO 9001:2015 CERTIFIED CHAMBER
          </div>
          
          <h1 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl leading-[1.1] text-foreground tracking-tight mb-6">
            Empowering Asian Exporters.<br />
            <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">Connecting Global Trade.</span>
          </h1>
          
          <p className="font-body text-base md:text-lg text-muted-foreground mb-10 max-w-xl leading-relaxed">
            The Asian Exporters' Chamber of Commerce and Industry (AECCI) serves as the definitive gateway for modern enterprises. We facilitate Certificate of Origin issuances, legal arbitration panels, and dynamic B2B international matchmakings to accelerate your market scaling.
          </p>

          <div className="flex flex-wrap gap-4 w-full sm:w-auto">
            <a href="#b2b-forum" className="w-full sm:w-auto flex items-center justify-center bg-primary text-primary-foreground hover:bg-primary/95 text-sm font-bold px-8 h-12 rounded-full shadow-lg shadow-primary/20 hover:-translate-y-px transition-all">
              Explore B2B Exporters Directory
            </a>
            <a href="#coo-tracker" className="w-full sm:w-auto flex items-center justify-center bg-muted/50 border border-border text-foreground hover:bg-muted text-sm font-bold px-8 h-12 rounded-full hover:-translate-y-px transition-all">
              Track CO Certificate
            </a>
          </div>
        </div>

        {/* Hero Graphic Container */}
        <div className="relative flex justify-center items-center">
          {/* Visual Glass Block Frame */}
          <div className="rounded-3xl border border-border/80 bg-card/45 backdrop-blur-xl p-4 shadow-2xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/15 via-transparent to-primary/5 opacity-60 pointer-events-none" />
            <img 
              alt="Corporate Global Trade Network" 
              className="w-full aspect-[4/3] sm:aspect-square object-cover rounded-2xl shadow-inner transition-transform duration-700 group-hover:scale-105" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBhvDo0RYoNFzMbetVCsvPC0xsxFAlFi0QGexdINMRc1Fcnx3nCacND0aUXuGbuAzji_1PocGQsaONFK5Dj64Pq5YTnCHZfiSL5IwnqNJZVDKK0CY4p2CM08N78A95qHCbE_TgEE9-u_fO6EBbUfj3nTqtG-P1kMczBrf2Ds6Q8jXm1KZvXY0I4W9RGUh_UwJ4RuQi5AsdAQFNF9VaE_Fg9cxlTo7R6aZB2w0P5Ou0ChHe7sokY3tADS1lrvIkKszB2vKc6tv0fQ17-"
            />
          </div>

          {/* Glowing Accent Badge */}
          <div className="absolute -bottom-6 -left-6 bg-card/90 border border-border shadow-2xl p-5 rounded-2xl hidden lg:block backdrop-blur-md">
            <div className="flex items-center gap-3">
              <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 border border-primary/20 text-primary">
                <SealCheck className="size-7" />
              </div>
              <div className="text-left">
                <p className="font-heading font-black text-foreground text-sm">International ICCA</p>
                <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mt-0.5">Legally Approved Rules</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
