import HeroSlider from "@/components/portal/HeroSlider"
import StatsStrip from "@/components/portal/StatsStrip"
import { NotificationsTicker } from "@/components/notifications-ticker"
import { Features8 } from "@/components/features-8"
import { Features9 } from "@/components/features-9"
import { Features10 } from "@/components/features-10"
import ExporterTransactionsCard from "@/components/features"
import SectionWithMockup from "@/components/section-with-mockup"
import { Gallery4 } from "@/components/gallery4"
import { NewsCards } from "@/components/news-cards"
import MemberTestimonials from "@/components/testimonials-columns-1"
import PublicationsSection from "@/components/portal/PublicationsSection"
import ArbitrationHero from "@/components/portal/ArbitrationHero"
import PromoRow from "@/components/portal/PromoRow"
import ScrollOverHero from "@/components/common/scroll-over-hero"
import dashboardImg from "@/assets/dashboard/dashboard.png"
import appMockup from "@/assets/mobile-app/aecci-mobile-mockup.png"

export default function Home() {
  return (
    <main>
      <HeroSlider />
      <NotificationsTicker />
      <StatsStrip />
      
      {/* Main Digital E-Platform Intro */}
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
          <img
            src={dashboardImg}
            alt="AECCI e-Platform Dashboard"
            className="aspect-[1826/1007] w-full object-cover"
          />
        }
      />

      {/* Attestation Quality & Clearance speed metrics */}
      <Features8 />

      {/* Bilateral Trade Map & Support Helpdesk chat */}
      <Features9 />

      {/* Verification status and scheduling calendars */}
      <Features10 />

      {/* Live Transaction Ledger Card */}
      <div className="mx-auto max-w-5xl px-6 py-12 md:py-24">
        <ExporterTransactionsCard />
      </div>

      {/* Mobile App Promotion with App mockup overlay */}
      <SectionWithMockup
        title={
          <>
            Connect, Trade, Succeed –<br />
            <span className="bg-gradient-to-r from-primary to-emerald-400 bg-clip-text text-transparent">
              Anytime, Anywhere.
            </span>
          </>
        }
        description={
          <>
            An opportunity to meet and collaborate with collaborator partners across over 35 countries. 
            Download the official AECCI app to access member utilities, manage Certificates of Origin, 
            schedule attestation appointments, and receive real-time customs guidance on-the-go.
          </>
        }
        primaryImageSrc={appMockup}
        secondaryImageSrc="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80"
      />

      {/* Publications: Chronicle & Chamber Journals */}
      <PublicationsSection />

      {/* Member Case Studies Carousel */}
      <Gallery4 />

      {/* Trade and Chamber News Policy updates */}
      <NewsCards />

      {/* Exporter Testimonials marquee */}
      <MemberTestimonials />

      {/* Legal & Dispute Resolution Hero */}
      <ArbitrationHero />

      {/* Join the Chamber callout grid */}
      <PromoRow />
    </main>
  )
}
