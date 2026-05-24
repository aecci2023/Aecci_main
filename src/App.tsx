import { Routes, Route } from "react-router-dom"
import { Toaster } from "@/components/ui/sonner"
import Navbar from "@/components/navbar/Navbar"
import ChatAssistant from "@/components/portal/ChatAssistant"
import Footer from "@/components/portal/Footer"
import Home from "@/pages/Home"

import AboutChamber from "@/pages/about/AboutChamber"
import OurHistory from "@/pages/about/OurHistory"
import ChairmanMessage from "@/pages/about/ChairmanMessage"
import ChamberPolicy from "@/pages/about/ChamberPolicy"
import OfficeBearers from "@/pages/about/OfficeBearers"
import RolesResponsibility from "@/pages/about/RolesResponsibility"
import StrategicPartners from "@/pages/about/StrategicPartners"
import ChamberDynamics from "@/pages/about/ChamberDynamics"
import JobOpportunities from "@/pages/about/JobOpportunities"
import ArbitrationCenter from "@/pages/arbitration-center/index"
import WhyAecci from "@/pages/why-aecci/index"
import ScheduleFees from "@/pages/schedule-fees/index"
import RulesAndPolicies from "@/pages/rules-and-policies/index"
import AecciIacModelClause from "@/pages/aecci-iac-model-clause/index"
import AecciIacFaq from "@/pages/aecci-iac-faq/index"
import AecciIacPanel from "@/pages/aecci-iac-panel/index"
import WaysMeans from "@/pages/ways-means/index"
import ResearchAndInformation from "@/pages/ways-means/research-and-information/index"
import EconomicAnalysis from "@/pages/ways-means/research-and-information/economic-analysis/index"
import BusinessOpportunitiesBrief from "@/pages/ways-means/research-and-information/business-opportunities-brief/index"
import IndianEconomicReport from "@/pages/ways-means/research-and-information/indian-economic-report/index"
import OperationalGuides from "@/pages/ways-means/research-and-information/operational-guides/index"
import IndiaInnovationIndex from "@/pages/ways-means/india-innovation-index/index"
import AnnualReport from "@/pages/ways-means/annual-report/index"
import CommercialDirectory from "@/pages/ways-means/commercial-directory/index"
import ExportPromotionCouncil from "@/pages/ways-means/export-promotion-council/index"
import Media from "@/pages/media/index"
import ENewsletters from "@/pages/media/e-newsletters/index"
import MediaCenter from "@/pages/media/media-center/index"
import AecciViewpoints from "@/pages/aecci-viewpoints/index"
import Gallery from "@/pages/media/gallery/index"
import Publications from "@/pages/media/publications/index"
import Events from "@/pages/events/index"
import UpcomingEvents from "@/pages/upcoming-events/index"
import PastEvents from "@/pages/events/past-events/index"
import VirtualB2bForum from "@/pages/aecci-iac-virtual-b2b-forum/index"
import Sponsorship from "@/pages/events/sponsorship/index"
import AdvertiseWithUs from "@/pages/advertise-with-us/index"
import InternationalCollaboration from "@/pages/international-collaboration/index"
import WorldConference from "@/pages/world-conference/index"
import EPlatform from "@/pages/e-platform/index"
import EPlatformInformation from "@/pages/e-platform/e-platform-information/index"
import FormalitiesGuidelines from "@/pages/e-platform/formalities-guidelines/index"
import InformationForEServices from "@/pages/e-platform/formalities-guidelines/information-for-e-services/index"
import IndemnityBondFormat from "@/pages/e-platform/formalities-guidelines/indemnity-bond-format/index"
import CooFormat from "@/pages/e-platform/formalities-guidelines/coo-format/index"
import AttestationFeesInformation from "@/pages/e-platform/formalities-guidelines/attestation-fees-information/index"
import AuthorizedChamberCard from "@/pages/e-platform/formalities-guidelines/authorized-chamber-card/index"
import TradeAssistantCentre from "@/pages/trade-assistant-centre/index"
import AboutTac from "@/pages/about-tac/index"
import TacProcess from "@/pages/tac-process/index"
import TacLocations from "@/pages/tac-locations/index"
import ContactUs from "@/pages/contact-us/index"
import AecciHeadOffice from "@/pages/contact-us/aecci-head-office/index"
import AecciInternationalHub from "@/pages/contact-us/aecci-international-hub/index"

import PlaceholderPage from "@/pages/PlaceholderPage"
import OurServices from "@/pages/services/OurServices"
import TheWings from "@/pages/services/the-wings/TheWings"
import ExportsWing from "@/pages/services/the-wings/ExportsWing"
import LegalWing from "@/pages/services/the-wings/LegalWing"
import HrSupportWing from "@/pages/services/the-wings/HrSupportWing"
import ProfessionalWing from "@/pages/services/the-wings/ProfessionalWing"
import BusinessAdviceWing from "@/pages/services/the-wings/BusinessAdviceWing"
import WomenWing from "@/pages/services/the-wings/WomenWing"
import EventSeminarWing from "@/pages/services/the-wings/EventSeminarWing"

import EntrepreneurHub from "@/pages/services/entrepreneur-hub/EntrepreneurHub"
import StartupIndia from "@/pages/services/entrepreneur-hub/StartupIndia"
import InvestmentIndia from "@/pages/services/entrepreneur-hub/InvestmentIndia"
import MakeInIndia from "@/pages/services/entrepreneur-hub/MakeInIndia"

import B2bConnect from "@/pages/services/b2b-connect/B2bConnect"

import Membership from "@/pages/services/membership/Membership"

import AffiliateProgram from "@/pages/services/affiliate-program/AffiliateProgram"

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground font-body select-none transition-colors duration-300 relative">
      <Toaster position="top-right" richColors />

      {/* Atmospheric Theme Gradient Layer (Dark mode only) */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-primary/5 opacity-0 dark:opacity-100 -z-10 pointer-events-none transition-opacity duration-500 fixed" />
      
      {/* Subtle Grid Dot Accent */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff08_1px,transparent_1px)] bg-[size:32px_32px] -z-10 pointer-events-none fixed" />

      <Navbar />
      
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about/about-chamber" element={<AboutChamber />} />
          <Route path="/about/our-history" element={<OurHistory />} />
          <Route path="/about/chairman-message" element={<ChairmanMessage />} />
          <Route path="/about/chamber-policy" element={<ChamberPolicy />} />
          <Route path="/about/office-bearers" element={<OfficeBearers />} />
          <Route path="/about/roles-responsibility" element={<RolesResponsibility />} />
          <Route path="/about/strategic-partners" element={<StrategicPartners />} />
          <Route path="/about/chamber-dynamics" element={<ChamberDynamics />} />
          <Route path="/about/jobs-opportunities" element={<JobOpportunities />} />

          {/* Services Main & The Wings */}
          <Route path="/services" element={<OurServices />} />
          <Route path="/services/the-wings" element={<TheWings />} />
          <Route path="/services/the-wings/exports-wing" element={<ExportsWing />} />
          <Route path="/services/legal-wing" element={<LegalWing />} />
          <Route path="/services/the-wings/hr-support-wing" element={<HrSupportWing />} />
          <Route path="/services/the-wings/professional-wing" element={<ProfessionalWing />} />
          <Route path="/services/the-wings/business-advice-wing" element={<BusinessAdviceWing />} />
          <Route path="/services/the-wings/women-wing" element={<WomenWing />} />
          <Route path="/services/the-wings/event-and-seminar-wing" element={<EventSeminarWing />} />

          <Route path="/services/the-wings/exports-wing-our-export-wing" element={<PlaceholderPage title="Our Export Wing" />} />
          <Route path="/services/the-wings/exports-wing-our-initiatives" element={<PlaceholderPage title="Export Wing Initiatives" />} />
          <Route path="/aecci-export-our-team" element={<PlaceholderPage title="Export Team" />} />

          <Route path="/aecci-legal-expertise" element={<PlaceholderPage title="Legal Expertise" />} />
          <Route path="/aecci-legal-what-we-do" element={<PlaceholderPage title="What We Do" />} />
          <Route path="/aecci-legal-initiatives" element={<PlaceholderPage title="Legal Initiatives" />} />
          <Route path="/aecci-legal-our-team" element={<PlaceholderPage title="Legal Team" />} />

          <Route path="/services/the-wings/event-and-seminar-wing-our-expertise" element={<PlaceholderPage title="Event Wing Expertise" />} />
          <Route path="/services/the-wings/event-and-seminar-wing-what-we-do" element={<PlaceholderPage title="Event Wing What We Do" />} />
          <Route path="/services/the-wings/event-and-seminar-wing-our-initiatives" element={<PlaceholderPage title="Event Wing Initiatives" />} />
          <Route path="/services/the-wings/event-and-seminar-wing-our-team" element={<PlaceholderPage title="Event Wing Team" />} />

          <Route path="/submit-professionals-profile" element={<PlaceholderPage title="Submit Professionals Profile" />} />

          {/* Entrepreneur Hub */}
          <Route path="/services/entrepreneur-hub" element={<EntrepreneurHub />} />
          <Route path="/services/entrepreneur-hub/startup-india" element={<StartupIndia />} />
          <Route path="/services/entrepreneur-hub/investment-india" element={<InvestmentIndia />} />
          <Route path="/services/entrepreneur-hub/make-in-india" element={<MakeInIndia />} />

          {/* B2B Connect */}
          <Route path="/services/b2b-connect" element={<B2bConnect />} />
          <Route path="/services/b2b-connect/consultations" element={<PlaceholderPage title="B2B Consultations" />} />
          <Route path="/services/b2b-connect/business-matches" element={<PlaceholderPage title="B2B Business Matches" />} />
          <Route path="/services/b2b-connect/market-studies" element={<PlaceholderPage title="B2B Market Studies" />} />
          <Route path="/b2b-about" element={<PlaceholderPage title="Virtual B2B Forum" />} />

          {/* Membership */}
          <Route path="/services/membership" element={<Membership />} />
          <Route path="/patron-members" element={<PlaceholderPage title="Patron Membership" />} />
          <Route path="/membership-and-its-benefits" element={<PlaceholderPage title="Membership & Its Benefits" />} />
          <Route path="/services/membership/guidelines-and-form" element={<PlaceholderPage title="Guidelines and Form" />} />
          <Route path="/services/membership/enrollment-offers" element={<PlaceholderPage title="Enrollment Offers" />} />
          <Route path="/services/membership/visa-recommendations-letter" element={<PlaceholderPage title="Visa Recommendations Letter" />} />

          {/* Affiliate Program */}
          <Route path="/aecci-affiliate-program" element={<AffiliateProgram />} />
          <Route path="/meet-our-wings-experts" element={<PlaceholderPage title="Meet Our Wing Experts" />} />
          <Route path="/join-our-affiliate-network" element={<PlaceholderPage title="Join Our Affiliate Network" />} />

          <Route path="/arbitration-center" element={<ArbitrationCenter />} />
          <Route path="/why-aecci" element={<WhyAecci />} />
          <Route path="/schedule-fees" element={<ScheduleFees />} />
          <Route path="/rules-and-policies" element={<RulesAndPolicies />} />
          <Route path="/aecci-iac-model-clause" element={<AecciIacModelClause />} />
          <Route path="/aecci-iac-faq" element={<AecciIacFaq />} />
          <Route path="/aecci-iac-panel" element={<AecciIacPanel />} />
          <Route path="/ways-means" element={<WaysMeans />} />
          <Route path="/ways-means/research-and-information" element={<ResearchAndInformation />} />
          <Route path="/ways-means/research-and-information/economic-analysis" element={<EconomicAnalysis />} />
          <Route path="/ways-means/research-and-information/business-opportunities-brief" element={<BusinessOpportunitiesBrief />} />
          <Route path="/ways-means/research-and-information/indian-economic-report" element={<IndianEconomicReport />} />
          <Route path="/ways-means/research-and-information/operational-guides" element={<OperationalGuides />} />
          <Route path="/ways-means/india-innovation-index" element={<IndiaInnovationIndex />} />
          <Route path="/ways-means/annual-report" element={<AnnualReport />} />
          <Route path="/ways-means/commercial-directory" element={<CommercialDirectory />} />
          <Route path="/ways-means/export-promotion-council" element={<ExportPromotionCouncil />} />
          <Route path="/media" element={<Media />} />
          <Route path="/media/e-newsletters" element={<ENewsletters />} />
          <Route path="/media/media-center" element={<MediaCenter />} />
          <Route path="/aecci-viewpoints" element={<AecciViewpoints />} />
          <Route path="/media/gallery" element={<Gallery />} />
          <Route path="/media/publications" element={<Publications />} />
          <Route path="/events" element={<Events />} />
          <Route path="/upcoming-events" element={<UpcomingEvents />} />
          <Route path="/events/past-events" element={<PastEvents />} />
          <Route path="/aecci-iac-virtual-b2b-forum" element={<VirtualB2bForum />} />
          <Route path="/events/sponsorship" element={<Sponsorship />} />
          <Route path="/advertise-with-us" element={<AdvertiseWithUs />} />
          <Route path="/international-collaboration" element={<InternationalCollaboration />} />
          <Route path="/world-conference" element={<WorldConference />} />
          <Route path="/e-platform" element={<EPlatform />} />
          <Route path="/e-platform/e-platform-information" element={<EPlatformInformation />} />
          <Route path="/e-platform/formalities-guidelines" element={<FormalitiesGuidelines />} />
          <Route path="/e-platform/formalities-guidelines/information-for-e-services" element={<InformationForEServices />} />
          <Route path="/e-platform/formalities-guidelines/indemnity-bond-format" element={<IndemnityBondFormat />} />
          <Route path="/e-platform/formalities-guidelines/coo-format" element={<CooFormat />} />
          <Route path="/e-platform/formalities-guidelines/attestation-fees-information" element={<AttestationFeesInformation />} />
          <Route path="/e-platform/formalities-guidelines/authorized-chamber-card" element={<AuthorizedChamberCard />} />
          <Route path="/trade-assistant-centre" element={<TradeAssistantCentre />} />
          <Route path="/about-tac" element={<AboutTac />} />
          <Route path="/tac-process" element={<TacProcess />} />
          <Route path="/tac-locations" element={<TacLocations />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/contact-us/aecci-head-office" element={<AecciHeadOffice />} />
          <Route path="/contact-us/aecci-international-hub" element={<AecciInternationalHub />} />
        </Routes>
      </div>

      <Footer />
      <ChatAssistant />
    </div>
  )
}
