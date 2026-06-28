import GlobalLanding from "@/components/portal/GlobalLanding";
import LiveAccessWall from "@/components/portal/LiveAccessWall";
import CommandCenter from "@/components/portal/CommandCenter";
import ExpansionPathway from "@/components/portal/ExpansionPathway";
import BusinessIntelligence from "@/components/portal/BusinessIntelligence";
import VideoExplainer from "@/components/portal/VideoExplainer";
import AccessPlans from "@/components/portal/AccessPlans";
import TradeRadar from "@/components/portal/TradeRadar";
import MemberTestimonials from "@/components/testimonials-columns-1";
import ArbitrationHero from "@/components/portal/ArbitrationHero";
import PromoRow from "@/components/portal/PromoRow";

export default function Home() {
  return (
    <main className="bg-background text-foreground min-h-screen relative overflow-hidden">
      {/* 1. New Global Landing Experience (Hero, Collaboration, Stats, CTA) */}
      <GlobalLanding />

      {/* 2. Live Market Access Departure Board */}
      <LiveAccessWall />

      {/* 3. Interactive World Map / Bloomberg-style Command Center */}
      <CommandCenter />

      {/* 5. Global Expansion Pathway Funnel */}
      <ExpansionPathway />

      {/* 6. Live Business Intelligence Dashboard & Transactions */}
      <BusinessIntelligence />

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
  );
}
