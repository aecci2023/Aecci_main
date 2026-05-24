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
        </Routes>
      </div>

      <Footer />
      <ChatAssistant />
    </div>
  )
}
