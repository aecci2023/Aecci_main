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

        </Routes>
      </div>

      <Footer />
      <ChatAssistant />
    </div>
  )
}
