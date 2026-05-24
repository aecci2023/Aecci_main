import Hero from "@/components/portal/Hero"
import StatsStrip from "@/components/portal/StatsStrip"
import WingsSection from "@/components/portal/WingsSection"
import CooTracker from "@/components/portal/CooTracker"
import Initiatives from "@/components/portal/Initiatives"
import VirtualB2BForum from "@/components/portal/VirtualB2BForum"
import QuickLinks from "@/components/portal/QuickLinks"
import NetworkingTestimonials from "@/components/portal/NetworkingTestimonials"
import ArbitrationCenter from "@/components/portal/ArbitrationCenter"
import TradeNotices from "@/components/portal/TradeNotices"

export default function Home() {
  return (
    <main>
      <Hero />
      <StatsStrip />
      <VirtualB2BForum />
      <WingsSection />
      <CooTracker />
      <QuickLinks />
      <Initiatives />
      <NetworkingTestimonials />
      <ArbitrationCenter />
      <TradeNotices />
    </main>
  )
}
