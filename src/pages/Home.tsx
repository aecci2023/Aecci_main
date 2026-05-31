// import Hero from "@/components/portal/Hero"
import HeroSlider from "@/components/portal/HeroSlider"
import StatsStrip from "@/components/portal/StatsStrip"
import WingsSection from "@/components/portal/WingsSection"
import CooTracker from "@/components/portal/CooTracker"
import Initiatives from "@/components/portal/Initiatives"
import VirtualB2BForum from "@/components/portal/VirtualB2BForum"
import QuickLinks from "@/components/portal/QuickLinks"
import NetworkingTestimonials from "@/components/portal/NetworkingTestimonials"
import ArbitrationCenter from "@/components/portal/ArbitrationCenter"
import TradeNotices from "@/components/portal/TradeNotices"
import { NotificationsTicker } from "@/components/notifications-ticker"
import ScrollOverHero from "@/components/common/scroll-over-hero"
import dashboardImg from "@/assets/dashboard.png"

export default function Home() {
  return (
    <main>
      <HeroSlider />
      {/* <Hero /> */}
      <NotificationsTicker />
      <StatsStrip />
      <ScrollOverHero
        eyebrow={
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-semibold text-primary">
            <span className="size-1.5 rounded-full bg-primary" />
            AECCI Digital E-Platform
          </span>
        }
        title="Chamber Services, Digitized & Accelerated."
        description="Verify Certificates of Origin instantly, submit customs documents electronically, request trade visas, and manage your chamber membership benefits through a secure, unified digital portal."
        actions={
          <>
            <a
              href="https://e-platform.aecci.org.in/login"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-primary text-primary-foreground px-6 py-2.5 text-sm font-bold shadow-lg shadow-primary/20 hover:bg-primary/95 transition-all hover:-translate-y-px"
            >
              Members Login
            </a>
            <a
              href="https://e-platform.aecci.org.in/request-trial-version"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full px-6 py-2.5 text-sm font-bold text-foreground bg-muted/50 border border-border hover:bg-muted transition-all hover:-translate-y-px"
            >
              Request Trial Version
            </a>
          </>
        }
        media={
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={dashboardImg}
            alt="AECCI e-Platform Dashboard"
            className="aspect-[1826/1007] w-full object-cover"
          />
        }
      />
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
