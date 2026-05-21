import * as React from "react"
import { Toaster } from "@/components/ui/sonner"
import Navbar from "@/components/navbar/Navbar"
import Hero from "@/components/portal/Hero"
import StatsStrip from "@/components/portal/StatsStrip"
import WingsSection from "@/components/portal/WingsSection"
import CooTracker from "@/components/portal/CooTracker"
import ExporterDirectory from "@/components/portal/ExporterDirectory"
import Initiatives from "@/components/portal/Initiatives"
import ArbitrationCenter from "@/components/portal/ArbitrationCenter"
import TradeNotices from "@/components/portal/TradeNotices"
import ChatAssistant from "@/components/portal/ChatAssistant"
import Footer from "@/components/portal/Footer"

export default function App() {
  const [theme, setTheme] = React.useState<"dark" | "light">("light")

  // Apply theme class on load / toggle
  React.useEffect(() => {
    const root = window.document.documentElement
    if (theme === "dark") {
      root.classList.add("dark")
      root.classList.remove("light")
    } else {
      root.classList.add("light")
      root.classList.remove("dark")
    }
  }, [theme])

  return (
    <div className="min-h-screen bg-background text-foreground font-body select-none transition-colors duration-300 relative">
      <Toaster position="top-right" richColors />

      {/* Atmospheric Theme Gradient Layer (Dark mode only) */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-primary/5 opacity-0 dark:opacity-100 -z-10 pointer-events-none transition-opacity duration-500" />
      
      {/* Subtle Grid Dot Accent */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff08_1px,transparent_1px)] bg-[size:32px_32px] -z-10 pointer-events-none" />

      {/* Orchestrated Components */}
      <Navbar theme={theme} setTheme={setTheme} />
      
      <main>
        <Hero />
        <StatsStrip />
        <WingsSection />
        <CooTracker />
        <ExporterDirectory />
        <Initiatives />
        <ArbitrationCenter />
        <TradeNotices />
      </main>

      <Footer />
      
      <ChatAssistant />
    </div>
  )
}
