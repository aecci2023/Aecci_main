import HeroSlider from "@/components/portal/HeroSlider"
import { NotificationsTicker } from "@/components/notifications-ticker"
import StatsStrip from "@/components/portal/StatsStrip"
import LiveAccessWall from "@/components/portal/LiveAccessWall"
import CommandCenter from "@/components/portal/CommandCenter"
import DealRooms from "@/components/portal/DealRooms"
import ExpansionPathway from "@/components/portal/ExpansionPathway"
import CollaborationNetwork from "@/components/portal/CollaborationNetwork"
import BusinessIntelligence from "@/components/portal/BusinessIntelligence"
import VideoExplainer from "@/components/portal/VideoExplainer"
import AccessPlans from "@/components/portal/AccessPlans"
import TradeRadar from "@/components/portal/TradeRadar"
import ExporterTransactionsCard from "@/components/features"
import MemberTestimonials from "@/components/testimonials-columns-1"
import ArbitrationHero from "@/components/portal/ArbitrationHero"
import PromoRow from "@/components/portal/PromoRow"

export default function Home() {
  return (
    <main className="bg-background text-foreground min-h-screen relative overflow-hidden">
      {/* 1. Cinematic Global Hero */}
      <HeroSlider />
      
      {/* Notifications and Statistics Strip */}
      <NotificationsTicker />
      <StatsStrip />

      {/* 2. Live Market Access Departure Board */}
      <LiveAccessWall />

      {/* 3. Interactive World Map / Bloomberg-style Command Center */}
      <CommandCenter />

      {/* 4. Upcoming Deal Rooms */}
      <DealRooms />

      {/* 5. Global Expansion Pathway Funnel */}
      <ExpansionPathway />

      {/* 6. Regional Collaboration Network */}
      <CollaborationNetwork />

      {/* 7. Live Business Intelligence Dashboard & Transactions */}
      <BusinessIntelligence />
      
      <div className="mx-auto max-w-5xl px-6 py-12 md:pb-24">
        <ExporterTransactionsCard />
      </div>

      {/* 8. Video Explainer Trailer */}
      <VideoExplainer />

      {/* 9. Global Trade Radar™ Risk Metrics */}
      <TradeRadar />

      {/* 10. Access Plans Pricing */}
      <AccessPlans />

      {/* Exporter Testimonials marquee */}
      <MemberTestimonials />

      {/* Legal & Dispute Resolution Hero */}
      <ArbitrationHero />

      {/* Join the Chamber / Book Country Slot Callout */}
      <PromoRow />
    </main>
  )
}

