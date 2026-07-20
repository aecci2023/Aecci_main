import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Main } from "@/components/layout/main";
import { useGetMyPartnerProfileQuery } from "@/store/api/adminApi";
import { useGetMySessionsQuery } from "@/store/api/sessionApi";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  MessageSquare,
  Scale,
  Building2,
  Users,
  Calendar,
  FileText,
  BookOpen,
  ArrowRight,
  Globe,
  Briefcase,
  Handshake,
  Compass,
  ShieldCheck,
} from "lucide-react";

export default function PartnerDashboard() {
  const navigate = useNavigate();

  const { data: profileData, isLoading: isProfileLoading } =
    useGetMyPartnerProfileQuery();
  const { isLoading: isSessionsLoading } =
    useGetMySessionsQuery();

  const profile = profileData?.data;

  // Onboarding check
  const needsSetup =
    !isProfileLoading && profile && (!profile.bio || !profile.signedAgreement);

  useEffect(() => {
    if (!isProfileLoading && needsSetup) {
      navigate("/partner/onboarding", { replace: true });
    }
  }, [isProfileLoading, needsSetup, navigate]);

  if (isProfileLoading || isSessionsLoading) {
    return (
      <Main fluid className="p-0 bg-[#071426] min-h-screen flex items-center justify-center">
        <div className="flex flex-col items-center gap-2">
          <div className="w-8 h-8 border-4 border-[#F5B33A] border-t-transparent rounded-full animate-spin"></div>
          <p className="text-white text-xs font-semibold tracking-wider uppercase mt-2">Loading Dashboard...</p>
        </div>
      </Main>
    );
  }

  if (needsSetup) return null;

  return (
    <Main fluid className="p-0 sm:p-0 bg-[#F9FAFB] min-h-screen">
      {/* 1. TOP HERO CONTAINER */}
      <div className="max-w-[1600px] mx-auto pl-0 pr-4 pt-0 pb-0 sm:pl-0 sm:pr-6 sm:pt-0 sm:pb-0">

        {/* Master Grid: Left Area (75% width) and Right Area (25% width) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">

          {/* Left Area: Unified Map Banner containing Welcome Block and KPI Cards */}
          <div
            className="lg:col-span-9 bg-gradient-to-br from-[#07192F] to-[#0C2342] border border-white/10 rounded-r-2xl rounded-l-none p-6 sm:p-8 relative overflow-hidden bg-cover bg-center bg-no-repeat min-h-[380px] flex flex-col justify-between shadow-xl text-white"
            style={{ backgroundImage: "url('/PartnerDashboardBG.png')" }}
          >
            {/* Subtle background overlay for map contrast */}
            <div className="absolute inset-0 bg-[#071426]/35 pointer-events-none"></div>

            {/* Welcome block */}
            <div className="relative z-10 space-y-2 max-w-xl">
              <h1 className="text-2xl sm:text-[26px] font-semibold text-white/95 leading-tight">
                Welcome Back,
                <span className="block text-3xl sm:text-[34px] font-extrabold text-white mt-1">Michael Anderson</span>
              </h1>
              <div className="h-0.5 w-12 bg-[#D4A64A] mt-2.5 mb-3.5"></div>
              <p className="text-xs sm:text-sm text-slate-300 max-w-sm leading-relaxed">
                Empowering collaboration, enabling guidance and building responsible global trade.
              </p>
            </div>

            {/* KPI Cards inside the map */}
            <div className="relative z-10 grid grid-cols-2 xl:grid-cols-4 gap-4 w-full mt-8">

              {/* Active Deal Rooms */}
              <div className="bg-gradient-to-br from-[#07192F]/80 to-[#0C2342]/80 backdrop-blur-md border border-white/10 rounded-2xl p-3.5 flex items-center gap-3 shadow-lg transition-all duration-300 hover:border-[#D4A64A]/30">
                <div className="w-10 h-10 rounded-full border border-[#D4A64A]/30 bg-gradient-to-br from-[#D4A64A]/15 to-transparent flex items-center justify-center shrink-0">
                  <Handshake className="w-4 h-4 text-[#D4A64A]" />
                </div>
                <div className="flex flex-col text-left space-y-0.5 min-w-0">
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Active Deal Rooms</p>
                  <p className="text-xl sm:text-2xl font-extrabold text-white leading-none">18</p>
                  <p className="text-[9px] text-[#D4A64A] font-semibold">+4 this month</p>
                </div>
              </div>

              {/* Consultations */}
              <div className="bg-gradient-to-br from-[#07192F]/80 to-[#0C2342]/80 backdrop-blur-md border border-white/10 rounded-2xl p-3.5 flex items-center gap-3 shadow-lg transition-all duration-300 hover:border-[#D4A64A]/30">
                <div className="w-10 h-10 rounded-full border border-[#D4A64A]/30 bg-gradient-to-br from-[#D4A64A]/15 to-transparent flex items-center justify-center shrink-0">
                  <Users className="w-4 h-4 text-[#D4A64A]" />
                </div>
                <div className="flex flex-col text-left space-y-0.5 min-w-0">
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Consultations</p>
                  <p className="text-xl sm:text-2xl font-extrabold text-white leading-none">26</p>
                  <p className="text-[9px] text-[#D4A64A] font-semibold">+7 this week</p>
                </div>
              </div>

              {/* Trade Established */}
              <div className="bg-gradient-to-br from-[#07192F]/80 to-[#0C2342]/80 backdrop-blur-md border border-white/10 rounded-2xl p-3.5 flex items-center gap-3 shadow-lg transition-all duration-300 hover:border-[#D4A64A]/30">
                <div className="w-10 h-10 rounded-full border border-[#D4A64A]/30 bg-gradient-to-br from-[#D4A64A]/15 to-transparent flex items-center justify-center shrink-0">
                  <Globe className="w-4 h-4 text-[#D4A64A]" />
                </div>
                <div className="flex flex-col text-left space-y-0.5 min-w-0">
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Trade Established</p>
                  <p className="text-xl sm:text-2xl font-extrabold text-white leading-none">11</p>
                  <p className="text-[9px] text-[#D4A64A] font-semibold">+3 this month</p>
                </div>
              </div>

              {/* Compliance Cases */}
              <div className="bg-gradient-to-br from-[#07192F]/80 to-[#0C2342]/80 backdrop-blur-md border border-white/10 rounded-2xl p-3.5 flex items-center gap-3 shadow-lg transition-all duration-300 hover:border-[#D4A64A]/30">
                <div className="w-10 h-10 rounded-full border border-[#D4A64A]/30 bg-gradient-to-br from-[#D4A64A]/15 to-transparent flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4 text-[#D4A64A]" />
                </div>
                <div className="flex flex-col text-left space-y-0.5 min-w-0">
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Compliance Cases</p>
                  <p className="text-xl sm:text-2xl font-extrabold text-white leading-none">9</p>
                  <p className="text-[9px] text-[#D4A64A] font-semibold">+2 this month</p>
                </div>
              </div>

            </div>

          </div>

          {/* Right Area: Upcoming Sessions tall card (lg:col-span-3) */}
          <Card className="lg:col-span-3 bg-white border border-[#E4E7EC] shadow-md rounded-2xl flex flex-col justify-between overflow-hidden text-slate-800 lg:mt-6 lg:mr-6 lg:mb-6">

            {/* Header */}
            <div className="px-5 py-4 flex flex-col border-b border-slate-100 bg-slate-50/50">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-slate-900 text-sm sm:text-base">Upcoming Sessions</h4>
                  <div className="h-0.5 w-8 bg-[#D4A64A] mt-1"></div>
                </div>
                <Link to="/partner/meetings" className="text-xs font-semibold text-blue-600 hover:text-blue-800 transition-colors">
                  View All
                </Link>
              </div>
            </div>

            {/* Sessions Rows */}
            <div className="p-5 flex-1 divide-y divide-slate-100 flex flex-col justify-between">

              {/* Session 1 */}
              <div className="py-3 flex items-center justify-between gap-2">
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className="w-10 h-10 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
                    <Calendar className="w-4 h-4 text-blue-600" />
                  </div>
                  <div className="space-y-0.5 min-w-0 pl-1">
                    <p className="font-bold text-slate-800 text-[11px] sm:text-xs leading-tight truncate">
                      Trade Consultation - Industrial
                    </p>
                    <p className="text-[10px] text-slate-500 font-semibold truncate">
                      Importer – Germany
                    </p>
                    <p className="text-[9px] text-slate-400 font-medium truncate">
                      22 May 2026 • 11:00 AM (IST) / 05:30 AM (EST)
                    </p>
                  </div>
                </div>
                <Button size="sm" className="bg-[#D4A64A] hover:bg-[#C5973A] text-white font-bold text-[10px] px-3.5 py-1.5 rounded-lg shadow-sm shrink-0 transition-colors">
                  Join Session
                </Button>
              </div>

              {/* Session 2 */}
              <div className="py-3 flex items-center justify-between gap-2">
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className="w-10 h-10 rounded-full bg-purple-50 border border-purple-100 flex items-center justify-center shrink-0">
                    <Scale className="w-4 h-4 text-purple-600" />
                  </div>
                  <div className="space-y-0.5 min-w-0 pl-1">
                    <p className="font-bold text-slate-800 text-[11px] sm:text-xs leading-tight truncate">
                      Legal Compliance Review
                    </p>
                    <p className="text-[10px] text-slate-500 font-semibold truncate">
                      Exporter – India
                    </p>
                    <p className="text-[9px] text-slate-400 font-medium truncate">
                      23 May 2026 • 02:30 PM (IST) / 09:00 AM (EST)
                    </p>
                  </div>
                </div>
                <Button size="sm" className="bg-[#D4A64A] hover:bg-[#C5973A] text-white font-bold text-[10px] px-3.5 py-1.5 rounded-lg shadow-sm shrink-0 transition-colors">
                  Join Session
                </Button>
              </div>

              {/* Session 3 */}
              <div className="py-3 flex items-center justify-between gap-2">
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className="w-10 h-10 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0">
                    <Handshake className="w-4 h-4 text-emerald-600" />
                  </div>
                  <div className="space-y-0.5 min-w-0 pl-1">
                    <p className="font-bold text-slate-800 text-[11px] sm:text-xs leading-tight truncate">
                      New Trade Establishment Discussion
                    </p>
                    <p className="text-[10px] text-slate-500 font-semibold truncate">
                      Agent – UAE
                    </p>
                    <p className="text-[9px] text-slate-400 font-medium truncate">
                      24 May 2026 • 10:30 AM (IST) / 05:00 AM (EST)
                    </p>
                  </div>
                </div>
                <Button size="sm" className="bg-[#D4A64A] hover:bg-[#C5973A] text-white font-bold text-[10px] px-3.5 py-1.5 rounded-lg shadow-sm shrink-0 transition-colors">
                  Join Session
                </Button>
              </div>

            </div>

          </Card>

        </div>

      </div>

      {/* 2. BOTTOM MAIN CONTAINER (Light Grey/White Background) */}
      <div className="max-w-[1600px] mx-auto px-4 py-8 sm:px-8 space-y-10">

        {/* Section Title: Your Role in AECCI Global Deal Room */}
        <div className="space-y-1">
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
            Your Role in AECCI Global Deal Room
          </h3>
          <div className="h-1 w-16 bg-[#F5B33A] rounded"></div>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          {/* Card 1: Guidance */}
          <Card className="bg-white border border-[#E4E7EC] shadow-sm rounded-xl p-5 flex flex-col justify-between min-h-[250px] transition-all duration-300 hover:shadow-md hover:border-slate-300/60">
            <div className="space-y-4">
              {/* Header */}
              <div className="flex items-start gap-3.5">
                <svg viewBox="0 0 48 48" className="w-16 h-16 sm:w-20 sm:h-20 shrink-0">
                  <circle cx="24" cy="24" r="22" fill="#EFF6FF" />
                  <path d="M 12 32 C 12 28, 36 28, 36 32 Z" fill="#93C5FD" />
                  <circle cx="16" cy="22" r="3" fill="#2563EB" />
                  <path d="M 11 30 C 11 26, 21 26, 21 30 Z" fill="#2563EB" />
                  <circle cx="24" cy="19" r="3.5" fill="#1D4ED8" />
                  <path d="M 18 28 C 18 23, 30 23, 30 28 Z" fill="#1D4ED8" />
                  <circle cx="32" cy="22" r="3" fill="#2563EB" />
                  <path d="M 27 30 C 27 26, 37 26, 37 30 Z" fill="#2563EB" />
                </svg>
                <div className="space-y-1">
                  <h4 className="font-extrabold text-slate-900 text-base sm:text-lg leading-snug">Guidance</h4>
                  <p className="text-xs sm:text-sm text-slate-500 leading-normal font-medium">
                    Provide expert guidance and strategic advisory to businesses entering new markets.
                  </p>
                </div>
              </div>
              {/* Lists */}
              <ul className="space-y-2.5 pt-2">
                <li className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-700">
                  <Users className="w-4 h-4 text-blue-500 shrink-0" /> Market Entry Guidance
                </li>
                <li className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-700">
                  <Briefcase className="w-4 h-4 text-blue-500 shrink-0" /> Business Advisory
                </li>
                <li className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-700">
                  <Compass className="w-4 h-4 text-blue-500 shrink-0" /> Strategy Support
                </li>
              </ul>
            </div>
            {/* Link */}
            <div className="pt-4 border-t border-slate-50">
              <Link to="/partner/consultations" className="text-xs sm:text-sm font-bold text-blue-600 hover:text-blue-800 inline-flex items-center gap-1 hover:underline">
                View Guidance Requests <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </Card>

          {/* Card 2: New Trade Established */}
          <Card className="bg-white border border-[#E4E7EC] shadow-sm rounded-xl p-5 flex flex-col justify-between min-h-[250px] transition-all duration-300 hover:shadow-md hover:border-slate-300/60">
            <div className="space-y-4">
              {/* Header */}
              <div className="flex items-start gap-3.5">
                <svg viewBox="0 0 48 48" className="w-16 h-16 sm:w-20 sm:h-20 shrink-0">
                  <circle cx="24" cy="24" r="22" fill="#ECFDF5" />
                  <rect x="16" y="14" width="16" height="12" rx="2" fill="#6EE7B7" />
                  <polygon points="21,26 24,29 27,26" fill="#6EE7B7" />
                  <circle cx="21" cy="20" r="1.5" fill="#065F46" />
                  <circle cx="27" cy="20" r="1.5" fill="#065F46" />
                  <path d="M 23 20 L 25 20" stroke="#065F46" strokeWidth="1" />
                  <circle cx="14" cy="28" r="3" fill="#059669" />
                  <path d="M 9 36 C 9 32, 19 32, 19 36 Z" fill="#059669" />
                  <circle cx="34" cy="28" r="3" fill="#059669" />
                  <path d="M 29 36 C 29 32, 39 32, 39 36 Z" fill="#059669" />
                </svg>
                <div className="space-y-1">
                  <h4 className="font-extrabold text-slate-900 text-base sm:text-lg leading-snug">New Trade Established</h4>
                  <p className="text-xs sm:text-sm text-slate-500 leading-normal font-medium">
                    Facilitate new trade connections and support successful business establishment.
                  </p>
                </div>
              </div>
              {/* Lists */}
              <ul className="space-y-2.5 pt-2">
                <li className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-700">
                  <Handshake className="w-4 h-4 text-emerald-500 shrink-0" /> Trade Matchmaking
                </li>
                <li className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-700">
                  <Building2 className="w-4 h-4 text-emerald-500 shrink-0" /> Deal Facilitation
                </li>
                <li className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-700">
                  <Globe className="w-4 h-4 text-emerald-500 shrink-0" /> Network Expansion
                </li>
              </ul>
            </div>
            {/* Link */}
            <div className="pt-4 border-t border-slate-50">
              <Link to="/partner/opportunities" className="text-xs sm:text-sm font-bold text-emerald-600 hover:text-emerald-800 inline-flex items-center gap-1 hover:underline">
                View Trade Opportunities <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </Card>

          {/* Card 3: Consultation */}
          <Card className="bg-white border border-[#E4E7EC] shadow-sm rounded-xl p-5 flex flex-col justify-between min-h-[250px] transition-all duration-300 hover:shadow-md hover:border-slate-300/60">
            <div className="space-y-4">
              {/* Header */}
              <div className="flex items-start gap-3.5">
                <svg viewBox="0 0 48 48" className="w-16 h-16 sm:w-20 sm:h-20 shrink-0">
                  <circle cx="24" cy="24" r="22" fill="#F5F3FF" />
                  <circle cx="24" cy="18" r="3.5" fill="#7C3AED" />
                  <path d="M 18 26 C 18 22, 30 22, 30 26 Z" fill="#7C3AED" />
                  <circle cx="16" cy="28" r="3" fill="#8B5CF6" />
                  <path d="M 11 35 C 11 31, 21 31, 21 35 Z" fill="#8B5CF6" />
                  <circle cx="32" cy="28" r="3" fill="#8B5CF6" />
                  <path d="M 27 35 C 27 31, 37 31, 37 35 Z" fill="#8B5CF6" />
                </svg>
                <div className="space-y-1">
                  <h4 className="font-extrabold text-slate-900 text-base sm:text-lg leading-snug">Consultation</h4>
                  <p className="text-xs sm:text-sm text-slate-500 leading-normal font-medium">
                    Deliver professional consultations on trade, operations and international business.
                  </p>
                </div>
              </div>
              {/* Lists */}
              <ul className="space-y-2.5 pt-2">
                <li className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-700">
                  <Users className="w-4 h-4 text-purple-500 shrink-0" /> 1:1 Consultations
                </li>
                <li className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-700">
                  <FileText className="w-4 h-4 text-purple-500 shrink-0" /> Business Reviews
                </li>
                <li className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-700">
                  <MessageSquare className="w-4 h-4 text-purple-500 shrink-0" /> Expert Opinions
                </li>
              </ul>
            </div>
            {/* Link */}
            <div className="pt-4 border-t border-slate-50">
              <Link to="/partner/consultations" className="text-xs sm:text-sm font-bold text-purple-600 hover:text-purple-800 inline-flex items-center gap-1 hover:underline">
                View Consultation Requests <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </Card>

          {/* Card 4: Legal Compliance */}
          <Card className="bg-white border border-[#E4E7EC] shadow-sm rounded-xl p-5 flex flex-col justify-between min-h-[250px] transition-all duration-300 hover:shadow-md hover:border-slate-300/60">
            <div className="space-y-4">
              {/* Header */}
              <div className="flex items-start gap-3.5">
                <svg viewBox="0 0 48 48" className="w-16 h-16 sm:w-20 sm:h-20 shrink-0">
                  <circle cx="24" cy="24" r="22" fill="#FFFBEB" />
                  <path d="M 24 12 L 24 34 M 14 18 L 34 18" stroke="#D97706" strokeWidth="2" strokeLinecap="round" />
                  <path d="M 14 18 L 14 26 M 10 26 C 10 28, 18 28, 18 26 Z" fill="none" stroke="#D97706" strokeWidth="1.5" />
                  <path d="M 34 18 L 34 26 M 30 26 C 30 28, 38 28, 38 26 Z" fill="none" stroke="#D97706" strokeWidth="1.5" />
                  <path d="M 24 20 Q 28 20 28 25 T 24 31 Q 20 31 20 25 T 24 20 Z" fill="#F59E0B" opacity="0.8" />
                  <path d="M 22 25 L 23.5 26.5 L 26 24" stroke="#FFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                </svg>
                <div className="space-y-1">
                  <h4 className="font-extrabold text-slate-900 text-base sm:text-lg leading-snug">Legal Compliance</h4>
                  <p className="text-xs sm:text-sm text-slate-500 leading-normal font-medium">
                    Ensure legal compliance and documentation as per international trade regulations.
                  </p>
                </div>
              </div>
              {/* Lists */}
              <ul className="space-y-2.5 pt-2">
                <li className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-700">
                  <FileText className="w-4 h-4 text-amber-500 shrink-0" /> Document Review
                </li>
                <li className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-700">
                  <Scale className="w-4 h-4 text-amber-500 shrink-0" /> Regulatory Compliance
                </li>
                <li className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-700">
                  <ShieldCheck className="w-4 h-4 text-amber-500 shrink-0" /> Risk Assessment
                </li>
              </ul>
            </div>
            {/* Link */}
            <div className="pt-4 border-t border-slate-50">
              <Link to="/partner/legal-compliance" className="text-xs sm:text-sm font-bold text-amber-600 hover:text-amber-800 inline-flex items-center gap-1 hover:underline">
                View Compliance Cases <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </Card>

        </div>

        {/* 3 Column Grid: Activity, Network, Expertise */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Column 1: Recent Deal Room Activity */}
          <Card className="bg-white border border-[#E4E7EC] shadow-sm rounded-xl p-5 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-slate-50 pb-3">
                <h4 className="font-bold text-slate-900 text-base">Recent Deal Room Activity</h4>
                <Link to="/partner/deal-rooms" className="text-xs font-semibold text-slate-500 hover:text-[#F5B33A]">
                  View All
                </Link>
              </div>

              {/* Rows */}
              <div className="space-y-4">

                {/* Row 1 */}
                <div className="flex items-center justify-between gap-2 py-1">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-slate-50 flex items-center justify-center border border-slate-100">
                      <Handshake className="w-4 h-4 text-slate-600" />
                    </div>
                    <div>
                      <p className="font-bold text-slate-900 text-xs sm:text-sm">Precision Tools Pvt. Ltd.</p>
                      <p className="text-[10px] sm:text-xs text-slate-400 font-semibold">Deal Room Meeting Completed</p>
                    </div>
                  </div>
                  <span className="text-[10px] sm:text-xs text-emerald-600 font-bold">Today</span>
                </div>

                {/* Row 2 */}
                <div className="flex items-center justify-between gap-2 py-1">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-slate-50 flex items-center justify-center border border-slate-100">
                      <Globe className="w-4 h-4 text-slate-600" />
                    </div>
                    <div>
                      <p className="font-bold text-slate-900 text-xs sm:text-sm">Sunrise Exports</p>
                      <p className="text-[10px] sm:text-xs text-slate-400 font-semibold">New Trade Discussion Initiated</p>
                    </div>
                  </div>
                  <span className="text-[10px] sm:text-xs text-emerald-600 font-bold">Yesterday</span>
                </div>

                {/* Row 3 */}
                <div className="flex items-center justify-between gap-2 py-1">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-slate-50 flex items-center justify-center border border-slate-100">
                      <Users className="w-4 h-4 text-slate-600" />
                    </div>
                    <div>
                      <p className="font-bold text-slate-900 text-xs sm:text-sm">Global Textile Corp.</p>
                      <p className="text-[10px] sm:text-xs text-slate-400 font-semibold">Consultation Completed</p>
                    </div>
                  </div>
                  <span className="text-[10px] sm:text-xs text-emerald-600 font-bold">20 May 2025</span>
                </div>

              </div>

            </div>
          </Card>

          {/* Column 2: Network Overview */}
          <Card className="bg-white border border-[#E4E7EC] shadow-sm rounded-xl p-5 flex flex-col justify-between">
            <div className="space-y-4 h-full flex flex-col justify-between">

              <div className="border-b border-slate-50 pb-3">
                <h4 className="font-bold text-slate-900 text-base">Network Overview</h4>
              </div>

              {/* World Map Image */}
              <div className="flex-1 flex items-center justify-center py-2 max-h-[160px] overflow-hidden">
                <img
                  src="/PartnerBGWHiteMap.png"
                  alt="Network Map"
                  className="max-w-full max-h-full object-contain opacity-80"
                />
              </div>

              {/* Stats Row */}
              <div className="grid grid-cols-4 gap-1 text-center pt-3 border-t border-slate-100 bg-slate-50/50 rounded-lg p-2">
                <div>
                  <p className="text-[10px] text-slate-400 font-bold uppercase">Countries</p>
                  <p className="text-sm sm:text-base font-extrabold text-slate-800">42</p>
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 font-bold uppercase">Partners</p>
                  <p className="text-sm sm:text-base font-extrabold text-slate-800">356</p>
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 font-bold uppercase">Deal Rooms</p>
                  <p className="text-sm sm:text-base font-extrabold text-slate-800">78</p>
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 font-bold uppercase">Success</p>
                  <p className="text-sm sm:text-base font-extrabold text-emerald-600">+28%</p>
                </div>
              </div>

            </div>
          </Card>

          {/* Column 3: Top Expertise Areas */}
          <Card className="bg-white border border-[#E4E7EC] shadow-sm rounded-xl p-5 flex flex-col justify-between">
            <div className="space-y-4">

              <div className="flex items-center justify-between border-b border-slate-50 pb-3">
                <h4 className="font-bold text-slate-900 text-base">Top Expertise Areas</h4>
                <Link to="/partner/expertise" className="text-xs font-semibold text-blue-600 hover:text-blue-800">
                  View All
                </Link>
              </div>

              {/* Progress Bars with Left Icon Containers */}
              <div className="space-y-4 pt-1">

                {/* Row 1: International Trade Advisory */}
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#F5E6E1] flex items-center justify-center shrink-0">
                    <Globe className="w-5 h-5 text-[#B25E4B]" />
                  </div>
                  <div className="flex-1 space-y-1.5">
                    <div className="flex items-center justify-between text-xs sm:text-sm font-semibold text-slate-800">
                      <span>International Trade Advisory</span>
                      <span className="font-bold text-slate-500">82%</span>
                    </div>
                    <Progress value={82} className="h-1.5 [&>div]:bg-blue-600 bg-slate-100" />
                  </div>
                </div>

                {/* Row 2: Market Entry Strategy */}
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#D2EBD9] flex items-center justify-center shrink-0">
                    <Compass className="w-5 h-5 text-[#0F7640]" />
                  </div>
                  <div className="flex-1 space-y-1.5">
                    <div className="flex items-center justify-between text-xs sm:text-sm font-semibold text-slate-800">
                      <span>Market Entry Strategy</span>
                      <span className="font-bold text-slate-500">76%</span>
                    </div>
                    <Progress value={76} className="h-1.5 [&>div]:bg-emerald-600 bg-slate-100" />
                  </div>
                </div>

                {/* Row 3: Regulatory Compliance */}
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#D3E2F8] flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-5 h-5 text-[#1D4ED8]" />
                  </div>
                  <div className="flex-1 space-y-1.5">
                    <div className="flex items-center justify-between text-xs sm:text-sm font-semibold text-slate-800">
                      <span>Regulatory Compliance</span>
                      <span className="font-bold text-slate-500">71%</span>
                    </div>
                    <Progress value={71} className="h-1.5 [&>div]:bg-purple-600 bg-slate-100" />
                  </div>
                </div>

                {/* Row 4: Legal Documentation */}
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#DDDCE5] flex items-center justify-center shrink-0">
                    <FileText className="w-5 h-5 text-[#4F46E5]" />
                  </div>
                  <div className="flex-1 space-y-1.5">
                    <div className="flex items-center justify-between text-xs sm:text-sm font-semibold text-slate-800">
                      <span>Legal Documentation</span>
                      <span className="font-bold text-slate-500">68%</span>
                    </div>
                    <Progress value={68} className="h-1.5 [&>div]:bg-[#A18262] bg-slate-100" />
                  </div>
                </div>

              </div>

            </div>
          </Card>

        </div>

        {/* Bottom Banner Row: Grow impact & Quick Links */}
        <div
          className="border border-white/5 text-white rounded-2xl relative overflow-hidden bg-cover bg-center bg-no-repeat min-h-[160px] grid grid-cols-1 lg:grid-cols-12 items-center"
          style={{ backgroundImage: "url('/PartnerDashboardFooterBG.png')" }}
        >
          {/* Content side 1: Grow Your Global Impact */}
          <div className="lg:col-span-7 p-6 z-10 space-y-3">
            <h4 className="text-xl font-extrabold text-white tracking-tight">Grow Your Global Impact</h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
              Help businesses succeed globally through your expertise and trusted guidance.
            </p>
            <div className="pt-1">
              <Button className="bg-[#F5B33A] hover:bg-[#E0A22D] text-[#071426] font-bold text-xs px-5 py-2 rounded-lg transition-all duration-300">
                Update Expertise
              </Button>
            </div>
          </div>

          {/* Vertical divider line */}
          <div className="hidden lg:block w-px h-20 bg-white/10 col-span-1 justify-self-center z-10"></div>

          {/* Content side 2: Quick Links */}
          <div className="lg:col-span-4 p-6 z-10 flex flex-col justify-center space-y-4">
            <h4 className="font-extrabold text-white text-sm tracking-wide uppercase">Quick Links</h4>
            <div className="grid grid-cols-4 gap-2 py-1">

              {/* Item 1 */}
              <button className="flex flex-col items-center gap-2 group cursor-pointer">
                <div className="w-11 h-11 rounded-full bg-[#F5B33A]/5 border border-[#F5B33A]/30 group-hover:border-[#F5B33A] group-hover:bg-[#F5B33A]/10 flex items-center justify-center transition-all duration-300">
                  <PlusIcon className="w-5 h-5 text-[#F5B33A]" />
                </div>
                <span className="text-[10px] font-bold text-slate-300 text-center tracking-tight leading-tight group-hover:text-white transition-colors">
                  Create<br />Deal Room
                </span>
              </button>

              {/* Item 2 */}
              <button className="flex flex-col items-center gap-2 group cursor-pointer">
                <div className="w-11 h-11 rounded-full bg-[#F5B33A]/5 border border-[#F5B33A]/30 group-hover:border-[#F5B33A] group-hover:bg-[#F5B33A]/10 flex items-center justify-center transition-all duration-300">
                  <Calendar className="w-5 h-5 text-[#F5B33A]" />
                </div>
                <span className="text-[10px] font-bold text-slate-300 text-center tracking-tight leading-tight group-hover:text-white transition-colors">
                  Share<br />Availability
                </span>
              </button>

              {/* Item 3 */}
              <button className="flex flex-col items-center gap-2 group cursor-pointer">
                <div className="w-11 h-11 rounded-full bg-[#F5B33A]/5 border border-[#F5B33A]/30 group-hover:border-[#F5B33A] group-hover:bg-[#F5B33A]/10 flex items-center justify-center transition-all duration-300">
                  <UserPlusIcon className="w-5 h-5 text-[#F5B33A]" />
                </div>
                <span className="text-[10px] font-bold text-slate-300 text-center tracking-tight leading-tight group-hover:text-white transition-colors">
                  Invite<br />Partner
                </span>
              </button>

              {/* Item 4 */}
              <button className="flex flex-col items-center gap-2 group cursor-pointer">
                <div className="w-11 h-11 rounded-full bg-[#F5B33A]/5 border border-[#F5B33A]/30 group-hover:border-[#F5B33A] group-hover:bg-[#F5B33A]/10 flex items-center justify-center transition-all duration-300">
                  <BookOpen className="w-5 h-5 text-[#F5B33A]" />
                </div>
                <span className="text-[10px] font-bold text-slate-300 text-center tracking-tight leading-tight group-hover:text-white transition-colors">
                  Resource<br />Center
                </span>
              </button>

            </div>
          </div>
        </div>
      </div>
    </Main>
  );
}

// Inline mini icons
function PlusIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className={props.className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
    </svg>
  );
}

function UserPlusIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={props.className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM3 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 019.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
    </svg>
  );
}
