import { useNavigate, Link } from "react-router-dom";
import { Main } from "@/components/layout/main";
import { useGetMyPartnerProfileQuery } from "@/store/api/adminApi";
import { useGetMySessionsQuery } from "@/store/api/sessionApi";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Skeleton } from "@/components/ui/skeleton";
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
  UserCircle,
} from "lucide-react";

function getProfileCompletion(profile: any) {
  if (!profile) return 0;
  const user = profile.user || {};
  let total = 0;
  let filled = 0;

  // Professional Profile fields
  const profFields = ['fullName', 'mobileNumber', 'country', 'professionalTitle', 'yearsOfExperience'];
  total += profFields.length + 2; // +2 for expertiseCountries & expertiseSectors
  profFields.forEach(f => { if (user[f]) filled++; });
  if (profile.expertiseCountries?.length) filled++;
  if (profile.expertiseSectors?.length) filled++;

  // Partner Brief
  total += 3; // photo, languages, bio
  if (user.profilePicture) filled++;
  if (user.languagesSpoken?.length) filled++;
  if (profile.bio && profile.bio.length >= 50) filled++;

  // Availability (configured in the Deal Room, gated on availabilityConfiguredAt)
  total += 1;
  if (profile.availabilityConfiguredAt) filled++;

  return Math.round((filled / total) * 100);
}

export default function PartnerDashboard() {
  const navigate = useNavigate();

  const { data: profileData, isLoading: isProfileLoading } =
    useGetMyPartnerProfileQuery();
  const { data: sessionsData } = useGetMySessionsQuery();

  if (isProfileLoading) {
    return (
      <Main fluid className="p-0 sm:p-0 bg-[#F9FAFB] min-h-screen">
        {/* Hero row skeleton */}
        <div className="w-full pl-0 pr-4 pt-0 pb-0 sm:pl-0 sm:pr-6 sm:pt-0 sm:pb-0">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Left hero */}
            <div className="lg:col-span-9 rounded-r-2xl rounded-l-none p-6 sm:p-8 min-h-[380px] flex flex-col justify-between">
              <div className="space-y-3 max-w-xl">
                <Skeleton className="h-7 w-40" />
                <Skeleton className="h-9 w-64" />
                <Skeleton className="h-0.5 w-12" />
                <Skeleton className="h-4 w-80 max-w-full" />
              </div>
              <div className="grid grid-cols-2 xl:grid-cols-4 gap-4 w-full mt-8">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div key={i} className="rounded-2xl p-3.5 flex items-center gap-3 border border-slate-100 bg-white">
                    <Skeleton className="w-10 h-10 rounded-full shrink-0" />
                    <div className="flex flex-col gap-1.5 min-w-0 flex-1">
                      <Skeleton className="h-2.5 w-16" />
                      <Skeleton className="h-5 w-10" />
                      <Skeleton className="h-2 w-14" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right sessions card */}
            <Card className="lg:col-span-3 bg-white border border-[#E4E7EC] shadow-md rounded-2xl flex flex-col overflow-hidden lg:mt-6 lg:mr-6 lg:mb-6">
              <div className="px-5 py-4 border-b border-slate-100 bg-slate-50/50 space-y-2">
                <Skeleton className="h-4 w-32" />
                <Skeleton className="h-0.5 w-8" />
              </div>
              <div className="p-5 flex-1 space-y-4">
                {Array.from({ length: 3 }).map((_, i) => (
                  <div key={i} className="flex items-center gap-2.5">
                    <Skeleton className="w-10 h-10 rounded-full shrink-0" />
                    <div className="flex flex-col gap-1.5 flex-1">
                      <Skeleton className="h-3 w-24" />
                      <Skeleton className="h-2.5 w-20" />
                    </div>
                    <Skeleton className="h-7 w-12 rounded-lg" />
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>

        {/* Bottom section skeleton */}
        <div className="w-full px-4 py-8 sm:px-8 space-y-10">
          <div className="space-y-1">
            <Skeleton className="h-7 w-72 max-w-full" />
            <Skeleton className="h-1 w-16 rounded" />
          </div>

          {/* 4 role cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Array.from({ length: 4 }).map((_, i) => (
              <Card key={i} className="bg-white border border-[#E4E7EC] shadow-sm rounded-xl p-5 flex flex-col justify-between min-h-[250px]">
                <div className="space-y-4">
                  <div className="flex items-start gap-3.5">
                    <Skeleton className="w-16 h-16 sm:w-20 sm:h-20 rounded-full shrink-0" />
                    <div className="space-y-2 flex-1">
                      <Skeleton className="h-5 w-28" />
                      <Skeleton className="h-3 w-full" />
                      <Skeleton className="h-3 w-4/5" />
                    </div>
                  </div>
                  <div className="space-y-2.5 pt-2">
                    <Skeleton className="h-3.5 w-40" />
                    <Skeleton className="h-3.5 w-36" />
                    <Skeleton className="h-3.5 w-32" />
                  </div>
                </div>
                <div className="pt-4 border-t border-slate-50">
                  <Skeleton className="h-3.5 w-40" />
                </div>
              </Card>
            ))}
          </div>

          {/* 3 column cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {Array.from({ length: 3 }).map((_, i) => (
              <Card key={i} className="bg-white border border-[#E4E7EC] shadow-sm rounded-xl p-5 space-y-4">
                <div className="flex items-center justify-between border-b border-slate-50 pb-3">
                  <Skeleton className="h-4 w-40" />
                  <Skeleton className="h-3 w-12" />
                </div>
                <div className="space-y-4">
                  {Array.from({ length: 3 }).map((_, j) => (
                    <div key={j} className="flex items-center gap-3.5">
                      <Skeleton className="w-10 h-10 rounded-xl shrink-0" />
                      <div className="flex-1 space-y-1.5">
                        <Skeleton className="h-3.5 w-full" />
                        <Skeleton className="h-1.5 w-full rounded-full" />
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          {/* Bottom banner */}
          <Skeleton className="rounded-2xl min-h-[160px] w-full" />
        </div>
      </Main>
    );
  }

  const profile = profileData?.data;
  const user = profile?.user || {};
  const profileCompletion = getProfileCompletion(profile);
  const needsSetup = profileCompletion < 100;
  const partnerName = user.fullName || "Partner";
  const expertiseSectors: string[] = profile?.expertiseSectors || [];
  const expertiseCountries: string[] = profile?.expertiseCountries || [];

  // Sessions
  const allSessions = sessionsData?.data || [];
  const upcomingSessions = allSessions.filter((s: any) => s.status === "upcoming");
  const completedSessions = allSessions.filter((s: any) => s.status === "completed");

  return (
    <Main fluid className="p-0 sm:p-0 bg-[#F9FAFB] min-h-screen">
      {/* Profile Completion Banner */}
      {needsSetup && (
        <div className="mx-4 sm:mx-6 mt-4 mb-2">
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-xl p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4 flex-1">
              <div className="w-12 h-12 rounded-full bg-amber-100 border border-amber-200 flex items-center justify-center shrink-0">
                <UserCircle className="w-6 h-6 text-amber-600" />
              </div>
              <div className="space-y-1 flex-1">
                <p className="text-sm font-bold text-slate-900">Complete Your Profile</p>
                <p className="text-xs text-slate-500">Your profile is {profileCompletion}% complete. Complete it to start receiving session invitations and appear in the marketplace.</p>
                <Progress value={profileCompletion} className="h-2 mt-2 max-w-xs" />
              </div>
            </div>
            <Button
              onClick={() => navigate("/partner/profile")}
              className="bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs px-5 py-2.5 rounded-xl shadow-sm gap-2 shrink-0"
            >
              Complete Profile <ArrowRight className="w-3.5 h-3.5" />
            </Button>
          </div>
        </div>
      )}

      {/* 1. TOP HERO CONTAINER */}
      <div className="w-full pl-0 pr-4 pt-0 pb-0 sm:pl-0 sm:pr-6 sm:pt-0 sm:pb-0">

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
                <span className="block text-3xl sm:text-[34px] font-extrabold text-white mt-1">{partnerName}</span>
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
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Expertise Areas</p>
                  <p className="text-xl sm:text-2xl font-extrabold text-white leading-none">{expertiseSectors.length}</p>
                  <p className="text-[9px] text-[#D4A64A] font-semibold">Sectors covered</p>
                </div>
              </div>

              {/* Markets */}
              <div className="bg-gradient-to-br from-[#07192F]/80 to-[#0C2342]/80 backdrop-blur-md border border-white/10 rounded-2xl p-3.5 flex items-center gap-3 shadow-lg transition-all duration-300 hover:border-[#D4A64A]/30">
                <div className="w-10 h-10 rounded-full border border-[#D4A64A]/30 bg-gradient-to-br from-[#D4A64A]/15 to-transparent flex items-center justify-center shrink-0">
                  <Globe className="w-4 h-4 text-[#D4A64A]" />
                </div>
                <div className="flex flex-col text-left space-y-0.5 min-w-0">
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Markets Covered</p>
                  <p className="text-xl sm:text-2xl font-extrabold text-white leading-none">{expertiseCountries.length}</p>
                  <p className="text-[9px] text-[#D4A64A] font-semibold">Countries</p>
                </div>
              </div>

              {/* Profile Completion */}
              <div className="bg-gradient-to-br from-[#07192F]/80 to-[#0C2342]/80 backdrop-blur-md border border-white/10 rounded-2xl p-3.5 flex items-center gap-3 shadow-lg transition-all duration-300 hover:border-[#D4A64A]/30">
                <div className="w-10 h-10 rounded-full border border-[#D4A64A]/30 bg-gradient-to-br from-[#D4A64A]/15 to-transparent flex items-center justify-center shrink-0">
                  <Users className="w-4 h-4 text-[#D4A64A]" />
                </div>
                <div className="flex flex-col text-left space-y-0.5 min-w-0">
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Profile</p>
                  <p className="text-xl sm:text-2xl font-extrabold text-white leading-none">{profileCompletion}%</p>
                  <p className="text-[9px] text-[#D4A64A] font-semibold">{profileCompletion === 100 ? "Complete" : "In progress"}</p>
                </div>
              </div>

              {/* Status */}
              <div className="bg-gradient-to-br from-[#07192F]/80 to-[#0C2342]/80 backdrop-blur-md border border-white/10 rounded-2xl p-3.5 flex items-center gap-3 shadow-lg transition-all duration-300 hover:border-[#D4A64A]/30">
                <div className="w-10 h-10 rounded-full border border-[#D4A64A]/30 bg-gradient-to-br from-[#D4A64A]/15 to-transparent flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4 text-[#D4A64A]" />
                </div>
                <div className="flex flex-col text-left space-y-0.5 min-w-0">
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Status</p>
                  <p className="text-xl sm:text-2xl font-extrabold text-white leading-none">{profile?.status === "approved" || profile?.status === "active" ? "Active" : "Pending"}</p>
                  <p className="text-[9px] text-[#D4A64A] font-semibold">Verified Partner</p>
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
                <span className="text-xs font-semibold text-slate-400 cursor-not-allowed">
                  View All
                </span>
              </div>
            </div>

            {/* Sessions Rows */}
            <div className="p-5 flex-1 divide-y divide-slate-100 flex flex-col justify-start gap-0">
              {upcomingSessions.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full py-8 text-center">
                  <Calendar className="w-8 h-8 text-slate-300 mb-2" />
                  <p className="text-xs text-slate-400 font-medium">No upcoming sessions</p>
                </div>
              ) : (
                upcomingSessions.slice(0, 3).map((session: any) => {
                  const sessionDate = new Date(session.date);
                  const dateStr = sessionDate.toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });
                  const timeStr = sessionDate.toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" }) + " IST";
                  const clientName = session.client?.fullName || "Client";
                  const clientCountry = session.client?.country || "";
                  return (
                    <div key={session.id} className="py-3 flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2.5 min-w-0">
                        <div className="w-10 h-10 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
                          <Calendar className="w-4 h-4 text-blue-600" />
                        </div>
                        <div className="space-y-0.5 min-w-0 pl-1">
                          <p className="font-bold text-slate-800 text-[11px] sm:text-xs leading-tight truncate">{session.title}</p>
                          <p className="text-[10px] text-slate-500 font-semibold truncate">{clientName} – {clientCountry}</p>
                          <p className="text-[9px] text-slate-400 font-medium truncate">{dateStr} • {timeStr}</p>
                        </div>
                      </div>
                      <Button size="sm" onClick={() => navigate(`/partner/waiting-room?sessionId=${session.id}`)} className="bg-[#D4A64A] hover:bg-[#C5973A] text-white font-bold text-[10px] px-3.5 py-1.5 rounded-lg shadow-sm shrink-0 transition-colors">
                        Join
                      </Button>
                    </div>
                  );
                })
              )}
            </div>

          </Card>

        </div>

      </div>

      {/* 2. BOTTOM MAIN CONTAINER (Light Grey/White Background) */}
      <div className="w-full px-4 py-8 sm:px-8 space-y-10">

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
              <span className="text-xs sm:text-sm font-bold text-blue-300 inline-flex items-center gap-1 cursor-not-allowed opacity-50">
                View Guidance Requests <ArrowRight className="w-3.5 h-3.5" />
              </span>
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
              <span className="text-xs sm:text-sm font-bold text-emerald-300 inline-flex items-center gap-1 cursor-not-allowed opacity-50">
                View Trade Opportunities <ArrowRight className="w-3.5 h-3.5" />
              </span>
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
              <span className="text-xs sm:text-sm font-bold text-purple-300 inline-flex items-center gap-1 cursor-not-allowed opacity-50">
                View Consultation Requests <ArrowRight className="w-3.5 h-3.5" />
              </span>
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
              <span className="text-xs sm:text-sm font-bold text-amber-300 inline-flex items-center gap-1 cursor-not-allowed opacity-50">
                View Compliance Cases <ArrowRight className="w-3.5 h-3.5" />
              </span>
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
                <span className="text-xs font-semibold text-slate-400 cursor-not-allowed">
                  View All
                </span>
              </div>

              <div className="space-y-4">
                {completedSessions.length === 0 && upcomingSessions.length === 0 ? (
                  <div className="text-center py-6 text-sm text-slate-400">
                    <Handshake className="w-8 h-8 text-slate-200 mx-auto mb-2" />
                    <p>No deal room activity yet</p>
                  </div>
                ) : (
                  [...completedSessions, ...upcomingSessions].slice(0, 3).map((session: any) => {
                    const sessionDate = new Date(session.date);
                    const dateStr = sessionDate.toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });
                    const clientName = session.client?.fullName || session.client?.companyName || "Client";
                    const statusText = session.status === "completed" ? "Session Completed" : session.status === "upcoming" ? "Upcoming Session" : "Pending";
                    return (
                      <div key={session.id} className="flex items-center justify-between gap-2 py-1">
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-full bg-slate-50 flex items-center justify-center border border-slate-100">
                            <Handshake className="w-4 h-4 text-slate-600" />
                          </div>
                          <div>
                            <p className="font-bold text-slate-900 text-xs sm:text-sm">{clientName}</p>
                            <p className="text-[10px] sm:text-xs text-slate-400 font-semibold">{statusText}</p>
                          </div>
                        </div>
                        <span className="text-[10px] sm:text-xs text-emerald-600 font-bold">{dateStr}</span>
                      </div>
                    );
                  })
                )}
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
                  <p className="text-sm sm:text-base font-extrabold text-slate-800">{expertiseCountries.length}</p>
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 font-bold uppercase">Sectors</p>
                  <p className="text-sm sm:text-base font-extrabold text-slate-800">{expertiseSectors.length}</p>
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 font-bold uppercase">Profile</p>
                  <p className="text-sm sm:text-base font-extrabold text-slate-800">{profileCompletion}%</p>
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 font-bold uppercase">Status</p>
                  <p className="text-sm sm:text-base font-extrabold text-emerald-600">Active</p>
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

              {/* Progress Bars from real data */}
              <div className="space-y-4 pt-1">
                {expertiseSectors.length > 0 ? (
                  expertiseSectors.slice(0, 4).map((sector, idx) => {
                    const colors = ["bg-[#F5E6E1] text-[#B25E4B]", "bg-[#D2EBD9] text-[#0F7640]", "bg-[#D3E2F8] text-[#1D4ED8]", "bg-[#DDDCE5] text-[#4F46E5]"];
                    const barColors = ["[&>div]:bg-blue-600", "[&>div]:bg-emerald-600", "[&>div]:bg-purple-600", "[&>div]:bg-[#A18262]"];
                    const pct = Math.max(50, 95 - idx * 8);
                    return (
                      <div key={sector} className="flex items-center gap-3.5">
                        <div className={`w-10 h-10 rounded-xl ${colors[idx % colors.length].split(" ")[0]} flex items-center justify-center shrink-0`}>
                          <Globe className={`w-5 h-5 ${colors[idx % colors.length].split(" ")[1]}`} />
                        </div>
                        <div className="flex-1 space-y-1.5">
                          <div className="flex items-center justify-between text-xs sm:text-sm font-semibold text-slate-800">
                            <span>{sector}</span>
                            <span className="font-bold text-slate-500">{pct}%</span>
                          </div>
                          <Progress value={pct} className={`h-1.5 ${barColors[idx % barColors.length]} bg-slate-100`} />
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <div className="text-center py-4 text-sm text-slate-400">
                    <p>No expertise added yet.</p>
                    <Link to="/partner/profile" className="text-blue-600 font-semibold text-xs hover:underline">Complete your profile</Link>
                  </div>
                )}
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
              <Button onClick={() => navigate("/partner/expertise")} className="bg-[#F5B33A] hover:bg-[#E0A22D] text-[#071426] font-bold text-xs px-5 py-2 rounded-lg transition-all duration-300">
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
