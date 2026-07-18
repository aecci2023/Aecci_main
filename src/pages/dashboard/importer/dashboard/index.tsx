import { Main } from "@/components/layout/main";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  Globe,
  FileText,
  Clock,
  Check,
  Plus,
  Users,
  MessageSquare,
  ArrowRight,
  ClipboardCheck,
  Tag,
  ChevronRight,
  ArrowUp,
  Monitor,
  BarChart2,
  ShieldCheck,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useGetUserByIdQuery } from "@/store/api/adminApi";
import { useGetMySessionsQuery } from "@/store/api/sessionApi";

export default function ImporterDashboard() {
  const [currentUser] = useState<any>(() => {
    const userStr = localStorage.getItem("user");
    return userStr ? JSON.parse(userStr) : null;
  });

  const userId = currentUser?.id || currentUser?._id;
  const { data: userData } = useGetUserByIdQuery(userId as string, {
    skip: !userId,
  });
  const dbUser = userData?.data || currentUser;

  const { data: sessionsData } = useGetMySessionsQuery();
  const sessions = sessionsData?.data || [];

  const upcomingSessions = sessions.filter((s: any) => s.status === 'upcoming').sort((a: any, b: any) => new Date(a.date).getTime() - new Date(b.date).getTime());

  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScroll && window.pageYOffset > 300) {
        setShowScroll(true);
      } else if (showScroll && window.pageYOffset <= 300) {
        setShowScroll(false);
      }
    };
    window.addEventListener("scroll", checkScrollTop);
    return () => window.removeEventListener("scroll", checkScrollTop);
  }, [showScroll]);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const formatSessionDate = (dateStr: string) => {
    if (!dateStr) return { day: "24", month: "OCT" };
    try {
      const d = new Date(dateStr);
      const day = d.getDate().toString();
      const month = d.toLocaleString("en-US", { month: "short" }).toUpperCase();
      return { day, month };
    } catch (e) {
      console.log(e)
      return { day: "24", month: "OCT" };
    }
  };

  // Sessions mapping
  const displaySessions = upcomingSessions.length > 0 ? upcomingSessions.map((session: any, index: number) => {
    const { day, month } = formatSessionDate(session.date);
    const timeStr = session.date ? new Date(session.date).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false }) + " GMT" : "14:30 GMT";
    return {
      id: session.id,
      title: session.title || `B2B Consultative Session - ${session.country || "Partner"}`,
      description: session.questionnaire || "Consultative matchmaking session with verified region partners.",
      day,
      month,
      timeStr,
      exporterCount: 3 + index,
      category: dbUser?.industry || "Garments & Textiles",
      image: index % 2 === 0 ? "/images/session_thumbnail_1.png" : "/images/session_thumbnail_2.png",
      isLive: index === 0,
      link: `/importer/waiting-room?sessionId=${session.id}`
    };
  }) : [
    {
      id: "mock-1",
      title: "India Textile Sourcing Forum",
      description: "Connect with top Indian textile manufacturers and exporters.",
      day: "25",
      month: "AUG",
      timeStr: "10:00 AM EST • 30 Min Session",
      exporterCount: 5,
      category: "Textiles",
      image: "/images/session_thumbnail_1.png",
      isLive: false,
      link: "/importer/marketplace"
    },
    {
      id: "mock-2",
      title: "India Food Export Connect",
      description: "Meet verified food & agri exporters from across India.",
      day: "10",
      month: "SEP",
      timeStr: "02:00 PM EST • 30 Min Session",
      exporterCount: 6,
      category: "Food & Agriculture",
      image: "/images/session_thumbnail_2.png",
      isLive: false,
      link: "/importer/marketplace"
    }
  ];

  // Recommended Exporters
  const recommendedExporters = [
    {
      id: "rec-1",
      name: "ABC Textiles Pvt Ltd",
      location: "Surat, Gujarat, India",
      experience: "12+",
      countries: "USA, UK,\nUAE, Europe",
      categories: "Textiles, Garments,\nHome Textiles",
      logo: "/images/exporter_logo_1.png",
    },
    {
      id: "rec-2",
      name: "Shree Fabrics Exports",
      location: "Ludhiana, Punjab, India",
      experience: "8+",
      countries: "USA, Canada,\nAustralia",
      categories: "Fabrics, Yarn,\nMade-ups",
      logo: "/images/exporter_logo_2.png",
    },
    {
      id: "rec-3",
      name: "Knitwear India Pvt Ltd",
      location: "Tirupur, Tamil Nadu, India",
      experience: "10+",
      countries: "USA, Europe,\nJapan",
      categories: "Knitwear, Apparel,\nActivewear",
      logo: "/images/exporter_logo_1.png",
    },
  ];

  return (
    <>
      {/* ===== Main Content ===== */}
      <Main fluid className="bg-[#F5F7FA] min-h-screen p-6 space-y-6">



        {/* 2. WELCOME SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left: Welcome text */}
          <div className="lg:col-span-5 flex flex-col justify-center py-4 text-left">
            <h1 className="text-[26px] xl:text-[30px] font-bold text-[#0B1B3D] leading-tight whitespace-nowrap">
              Welcome Back, {dbUser?.fullName || "Member"}! 👋
            </h1>
            <p className="text-[15px] font-semibold text-[#0B1B3D] mt-3">
              Your global sourcing journey starts here.
            </p>
            <p className="text-[15px] text-[#475569] mt-2 leading-relaxed">
              Find verified Indian exporters, connect with suppliers and schedule business meetings.
            </p>
          </div>

          {/* Right: Upcoming Flagship Event card */}
          <div className="lg:col-span-7 relative overflow-hidden bg-[#050B14] rounded-2xl p-6 min-h-[180px] flex flex-col justify-between shadow-md group">
            {/* Background Image with Dark Overlay */}
            <div
              className="absolute inset-0 bg-cover bg-right transition-transform duration-500 group-hover:scale-102"
              style={{ backgroundImage: `url('/AECCIImporterDashboardBackground.png')` }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#050B14] via-[#050B14]/90 to-transparent md:w-[60%] w-full z-0" />

            {/* Content */}
            <div className="relative z-10 flex flex-col h-full justify-between gap-4 max-w-[85%] md:max-w-[55%] text-left">
              <div>
                <span className="text-[11px] font-semibold text-gray-300 tracking-wider">
                  Upcoming Flagship Event
                </span>
                <h3 className="text-xl md:text-[22px] font-bold text-white mt-1 leading-snug">
                  India Textile Sourcing Forum
                </h3>
                <p className="text-xs text-gray-300 mt-1">
                  25 Aug 2026 • 10:00 AM EST
                </p>
              </div>

              <div>
                <Button asChild className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs font-semibold px-5 py-2.5 rounded-lg transition-colors border-none cursor-pointer flex items-center gap-1.5 w-fit">
                  <Link to="/importer/opportunity-report">
                    <span>Reserve Your Seat</span>
                    <ArrowRight className="size-3.5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* 3. STATS ROW */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
          {/* Card 1: Active Plan */}
          <div className="bg-white p-5 rounded-xl border border-gray-200/85 shadow-[0_1px_3px_rgba(0,0,0,0.05)] hover:shadow-md transition-shadow flex flex-col justify-between min-h-[135px] text-left">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-[#EFF6FF] flex items-center justify-center shrink-0">
                <ClipboardCheck className="size-5.5 text-[#2563EB]" />
              </div>
              <div>
                <h4 className="font-bold text-[#0B1B3D] text-[15px] leading-tight">Active Plan</h4>
                <span className="text-[12px] text-[#64748B] block mt-0.5">Global Buyer Access</span>
              </div>
            </div>
            <div className="mt-3">
              <span className="inline-flex items-center gap-1 bg-[#16A34A] text-white px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider">
                <span>ACTIVE</span>
                <Check className="size-3 stroke-[3px]" />
              </span>
            </div>
          </div>

          {/* Card 2: Available Meetings */}
          <div className="bg-white p-5 rounded-xl border border-gray-200/85 shadow-[0_1px_3px_rgba(0,0,0,0.05)] hover:shadow-md transition-shadow flex flex-col justify-between min-h-[135px] text-left">
            <div className="flex items-start gap-3">
              <div className="w-11 h-11 rounded-full bg-[#EFF6FF] flex items-center justify-center shrink-0">
                <Calendar className="size-5.5 text-[#2563EB]" />
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-[#0B1B3D] text-[15px] leading-tight">Available Meetings</h4>
                <div className="text-[26px] font-bold text-[#0B1B3D] leading-none mt-1">
                  5 <span className="text-sm font-normal text-[#64748B]">/ 5</span>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between mt-3">
              <div className="flex items-center text-[#64748B]">
                <svg className="w-5 h-5 text-[#64748B]/60" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <span className="text-[12px] text-[#64748B]">This Month</span>
            </div>
          </div>

          {/* Card 3: Exporters Connected */}
          <div className="bg-white p-5 rounded-xl border border-gray-200/85 shadow-[0_1px_3px_rgba(0,0,0,0.05)] hover:shadow-md transition-shadow flex flex-col justify-between min-h-[135px] text-left">
            <div className="flex items-start gap-3">
              <div className="w-11 h-11 rounded-full bg-[#EFF6FF] flex items-center justify-center shrink-0">
                <Users className="size-5.5 text-[#2563EB]" />
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-[#0B1B3D] text-[15px] leading-tight">Exporters Connected</h4>
                <div className="text-[26px] font-bold text-[#0B1B3D] leading-none mt-1">12</div>
              </div>
            </div>
            <div className="mt-3 text-right">
              <span className="text-[12px] text-[#64748B]">Total Connected</span>
            </div>
          </div>

          {/* Card 4: Countries Covered */}
          <div className="bg-white p-5 rounded-xl border border-gray-200/85 shadow-[0_1px_3px_rgba(0,0,0,0.05)] hover:shadow-md transition-shadow flex flex-col justify-between min-h-[135px] text-left">
            <div className="flex items-start gap-3">
              <div className="w-11 h-11 rounded-full bg-[#EFF6FF] flex items-center justify-center shrink-0">
                <Globe className="size-5.5 text-[#2563EB]" />
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-[#0B1B3D] text-[15px] leading-tight">Countries Covered</h4>
                <div className="text-[26px] font-bold text-[#0B1B3D] leading-none mt-1">3</div>
              </div>
            </div>
            <div className="mt-3 text-right">
              <span className="text-[12px] text-[#64748B]">Active Regions</span>
            </div>
          </div>

          {/* Card 5: Pending Requests */}
          <div className="bg-white p-5 rounded-xl border border-gray-200/85 shadow-[0_1px_3px_rgba(0,0,0,0.05)] hover:shadow-md transition-shadow flex flex-col justify-between min-h-[135px] text-left">
            <div className="flex items-start gap-3">
              <div className="w-11 h-11 rounded-full bg-[#FFF7ED] flex items-center justify-center shrink-0">
                <Clock className="size-5.5 text-[#EA580C]" />
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-[#0B1B3D] text-[15px] leading-tight">Pending Requests</h4>
                <div className="text-[26px] font-bold text-[#0B1B3D] leading-none mt-1">4</div>
              </div>
            </div>
            <div className="mt-3 text-right">
              <span className="text-[12px] text-[#64748B]">Awaiting Response</span>
            </div>
          </div>
        </div>

        {/* 4. TWO-COLUMN FEATURE ROW */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left: Find Trusted Exporters */}
          <div className="lg:col-span-7 relative overflow-hidden bg-[#020617] rounded-2xl p-6 md:p-8 flex flex-col justify-between shadow-md group min-h-[220px]">
            {/* Background Image with Dark Overlay */}
            <div
              className="absolute inset-0 bg-cover bg-right transition-transform duration-500 group-hover:scale-102"
              style={{ backgroundImage: "url('/EarthBGImage.png')" }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#020617] via-[#020617]/90 to-transparent md:w-[60%] w-full z-0" />

            {/* Content */}
            <div className="relative z-10 flex flex-col justify-between h-full gap-6 max-w-[85%] md:max-w-[55%] text-left">
              <div>
                <h2 className="text-xl md:text-[24px] font-bold text-white leading-tight">
                  Find Trusted Indian Exporters
                </h2>
                <p className="text-sm text-gray-300 mt-2 leading-relaxed">
                  Connect with verified manufacturers, suppliers and trade partners from across India.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs font-semibold px-5 py-2.5 rounded-lg border-none cursor-pointer flex items-center gap-1.5 w-fit">
                  <Link to="/importer/marketplace">
                    <span>Browse Exporters</span>
                    <ArrowRight className="size-3.5" />
                  </Link>
                </Button>
                <Button asChild className="border border-white/20 hover:bg-white/10 bg-transparent text-white text-xs font-semibold px-5 py-2.5 rounded-lg cursor-pointer w-fit">
                  <Link to="/importer/marketplace">Submit Sourcing Requirement</Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Right: My Sourcing Requirements */}
          <div className="lg:col-span-5 bg-white rounded-xl border border-gray-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.05)] p-6 flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-[#0B1B3D] text-[16px]">My Sourcing Requirements</h3>
                <Link to="/importer/opportunity-report" className="text-sm font-semibold text-[#2563EB] hover:text-[#1D4ED8] transition-colors">
                  View All
                </Link>
              </div>

              {/* Body: Left Icon & Right Details */}
              <div className="flex gap-4 items-start">
                {/* Left Circle Icon */}
                <div className="w-12 h-12 rounded-full bg-[#EFF6FF] flex items-center justify-center shrink-0 mt-1">
                  <ClipboardCheck className="size-6 text-[#2563EB]" />
                </div>

                {/* Right Details Grid */}
                <div className="flex-1 grid grid-cols-2 gap-x-4 gap-y-4 text-left">
                  <div>
                    <div className="text-[12px] text-[#64748B]">REQ ID</div>
                    <div className="font-bold text-[#0B1B3D] text-[14px] mt-0.5">#REQ10245</div>
                  </div>
                  <div>
                    <div className="text-[12px] text-[#64748B]">Product Category</div>
                    <div className="font-bold text-[#0B1B3D] text-[14px] mt-0.5">{dbUser?.industry || "Textiles & Garments"}</div>
                  </div>
                  <div>
                    <div className="text-[12px] text-[#64748B]">Target Quantity</div>
                    <div className="font-bold text-[#0B1B3D] text-[14px] mt-0.5">5,000 Units</div>
                  </div>
                  <div>
                    <div className="text-[12px] text-[#64748B]">Preferred Country</div>
                    <div className="font-bold text-[#0B1B3D] text-[14px] mt-0.5">India</div>
                  </div>
                  <div>
                    <div className="text-[12px] text-[#64748B] mb-1">Status</div>
                    <span className="inline-flex items-center bg-[#FEF3C7] text-[#D97706] px-2.5 py-0.5 rounded-full text-[10px] font-bold">
                      Matching in Progress
                    </span>
                  </div>
                  <div>
                    <div className="text-[12px] text-[#64748B]">Last Updated</div>
                    <div className="flex items-center gap-1.5 font-bold text-[#0B1B3D] text-[14px] mt-1">
                      <Clock className="size-3.5 text-[#64748B] stroke-[2.5px]" />
                      <span>20 Aug 2026</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <Button asChild variant="outline" className="w-full border-gray-200 hover:bg-gray-50 text-sm font-semibold rounded-lg py-2.5 text-[#2563EB] hover:text-[#1D4ED8]">
                <Link to="/importer/opportunity-report">Edit Requirement</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* 5. DEAL ROOM SESSIONS ROW */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-[#0B1B3D] text-lg">Upcoming Deal Room Sessions</h3>
            <Link to="/importer/marketplace" className="text-sm font-semibold text-[#2563EB] hover:text-[#1D4ED8] transition-colors flex items-center gap-1">
              <span>View All Sessions</span>
              <ArrowRight className="size-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
            {/* Left: Sessions list */}
            <div className="lg:col-span-2 relative flex items-stretch">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
                {displaySessions.map((session: any) => {
                  const isReserved = session.id === "mock-1" || session.isLive;
                  const badgeBg = isReserved ? "bg-[#0B1B3D] text-white" : "bg-[#EFF3F8] text-[#0B1B3D]";
                  const monthColor = isReserved ? "text-gray-300" : "text-[#475569]";
                  return (
                    <div
                      key={session.id}
                      className="bg-white rounded-2xl border border-gray-200/60 p-[18px] flex flex-col justify-between hover:shadow-md transition-shadow relative text-left shadow-[0_1px_2px_rgba(0,0,0,0.02)]"
                    >
                      <div>
                        {/* Top: Left info column, Right large thumbnail */}
                        <div className="flex justify-between items-start gap-4">
                          <div className="flex-1 min-w-0">
                            {/* Date badge & Title */}
                            <div className="flex items-center gap-3">
                              {/* Date Badge */}
                              <div className={`w-12 h-12 ${badgeBg} rounded-xl flex flex-col items-center justify-center shrink-0 shadow-sm`}>
                                <span className="text-[16px] font-bold leading-none">{session.day}</span>
                                <span className={`text-[9px] font-bold tracking-wider mt-0.5 uppercase ${monthColor}`}>{session.month}</span>
                              </div>
                              {/* Title */}
                              <h4 className="font-bold text-[#0B1B3D] text-[15px] leading-snug line-clamp-2">
                                {session.title}
                              </h4>
                            </div>

                            {/* Time details */}
                            <div className="text-[11px] font-semibold text-[#64748B] mt-3">
                              {session.timeStr}
                            </div>

                            {/* Metadata row */}
                            <div className="flex items-center gap-4 text-[#64748B] text-[11px] font-medium mt-3">
                              <div className="flex items-center gap-1">
                                <Users className="size-3.5 text-[#8A99AD]" />
                                <span>{session.exporterCount} Exporters</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Tag className="size-3.5 text-[#8A99AD]" />
                                <span>{session.category}</span>
                              </div>
                            </div>
                          </div>

                          {/* Image Thumbnail */}
                          <div className="w-[130px] h-[100px] rounded-xl overflow-hidden shrink-0 shadow-sm mt-0.5">
                            <img src={session.image} alt={session.title} className="w-full h-full object-cover" />
                          </div>
                        </div>

                        {/* Middle description */}
                        <p className="text-[13px] text-[#64748B] leading-relaxed line-clamp-2 mt-4">
                          {session.description}
                        </p>
                      </div>

                      {/* Bottom Button */}
                      <div className="mt-5">
                        {isReserved ? (
                          <Button asChild className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs font-semibold px-5 py-2.5 rounded-lg border-none cursor-pointer flex items-center gap-1.5 w-fit shadow-[0_1px_2px_rgba(37,99,235,0.2)]">
                            <Link to={session.link}>
                              <span>Reserve Seat</span>
                              <ArrowRight className="size-3.5" />
                            </Link>
                          </Button>
                        ) : (
                          <Button asChild variant="outline" className="border-gray-200 hover:bg-gray-50 text-[#2563EB] text-xs font-semibold px-5 py-2.5 rounded-lg w-fit shadow-[0_1px_2px_rgba(0,0,0,0.02)] bg-white cursor-pointer">
                            <Link to={session.link}>Join Session</Link>
                          </Button>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Slider Chevron Right Button */}
              <div className="hidden lg:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-white border border-gray-200/80 shadow-[0_2px_4px_rgba(0,0,0,0.08)] items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors">
                <ChevronRight className="size-4.5 text-[#0B1B3D] stroke-[2.5px]" />
              </div>
            </div>

            {/* Right: Current Plan Sidebar */}
            <div className="lg:col-span-1 flex">
              <div className="w-full bg-[#050B14] rounded-2xl p-6 flex flex-col justify-between text-white relative overflow-hidden shadow-md">
                {/* Background Map Overlay */}
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-30 pointer-events-none"
                  style={{ backgroundImage: "url('/AECCIMapBG.png')" }}
                />

                <div className="relative z-10">
                  <div className="flex items-center justify-between pb-4 mb-4">
                    <div>
                      <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider block">CURRENT PLAN</span>
                      <h3 className="font-bold text-lg text-white mt-0.5">Buyer Growth Access</h3>
                    </div>
                    <span className="inline-flex items-center px-3 py-1 rounded-lg text-[11px] font-semibold bg-[#2563EB]/25 border border-[#2563EB]/40 text-blue-300 uppercase tracking-wider">
                      Upgrade
                    </span>
                  </div>

                  {/* Checklist with blue checkmark badges */}
                  <ul className="space-y-3.5 mb-6">
                    {[
                      "5 Deal Room Meetings / Month",
                      "Exporter Matching",
                      "Market Reports Access",
                      "Sourcing Requirement Posting",
                      "Email Support",
                    ].map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-[#2563EB] flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="size-3 text-white" strokeWidth={3} />
                        </div>
                        <span className="text-sm font-medium text-gray-200">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="relative z-10 mt-6">
                  <Button asChild className="w-full bg-[#2563EB] hover:bg-[#1D4ED8] border-none text-white font-semibold py-2.5 rounded-lg text-sm transition-all shadow-md">
                    <Link to="/importer/messages">Manage Plan</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 6. RECOMMENDED CARDS ROW */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-[#0B1B3D] text-lg">Recommended Exporters</h3>
            <Link to="/importer/marketplace" className="text-sm font-semibold text-[#2563EB] hover:text-[#1D4ED8] transition-colors flex items-center gap-1">
              <span>View Marketplace</span>
              <ArrowRight className="size-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
            {/* Left: 3 exporter cards side-by-side */}
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 h-full">
                {recommendedExporters.map((exporter) => (
                  <div
                    key={exporter.id}
                    className="bg-white border border-[#E5E7EB] rounded-xl p-[18px] flex flex-col justify-between hover:shadow-md transition-shadow h-full text-left"
                  >
                    <div>
                      {/* Card Header (Logo left, Name/Location right) */}
                      <div className="flex items-start gap-3">
                        {/* Circular company logo (44px diameter) */}
                        <div className="w-11 h-11 rounded-full overflow-hidden border border-gray-100 bg-[#F3F4F6] flex items-center justify-center shrink-0">
                          <img src={exporter.logo} alt={exporter.name} className="w-full h-full object-cover" />
                        </div>
                        {/* Name/Location & Verified Badge */}
                        <div className="min-w-0 flex-1 flex flex-col text-left">
                          <span className="font-bold text-[#0F172A] text-[15px] leading-tight hover:text-[#2563EB] transition-colors cursor-pointer whitespace-normal">
                            {exporter.name}
                          </span>
                          <span className="text-[13px] font-normal text-[#64748B] block mt-1 whitespace-normal">
                            {exporter.location}
                          </span>

                          {/* AECCI Verified Badge (left-aligned below name/location block) */}
                          <div className="bg-[#DCFCE7] text-[#16A34A] text-[11px] font-semibold px-2.5 py-1 rounded-full w-fit mt-2.5 flex items-center gap-1">
                            <Check className="size-3.5 stroke-[3px]" />
                            <span>AECCI Verified</span>
                          </div>
                        </div>
                      </div>

                      {/* Stats row: 2-column layout */}
                      <div className="grid grid-cols-12 gap-2 mt-4.5">
                        {/* Left Column: Experience */}
                        <div className="col-span-4 flex flex-col text-left">
                          <span className="text-[20px] font-bold text-[#0B1B3D] leading-none">
                            {exporter.experience}
                          </span>
                          <span className="text-[12px] font-normal text-[#64748B] mt-1 leading-tight">
                            Years Exp.
                          </span>
                        </div>

                        {/* Right Column: Countries & Categories */}
                        <div className="col-span-8 flex flex-col gap-2.5 text-left pl-3">
                          <div className="text-[14px] font-semibold text-[#0B1B3D] leading-[1.4] whitespace-pre-line">
                            {exporter.countries}
                          </div>
                          <div className="text-[14px] font-semibold text-[#0B1B3D] leading-[1.4] whitespace-pre-line">
                            {exporter.categories}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Two buttons side-by-side (equal width 50/50 split, padding 10px vertical, 14px horizontal) */}
                    <div className="grid grid-cols-2 gap-2.5 mt-5">
                      <Button asChild variant="outline" className="w-full border-[#2563EB] text-[#2563EB] hover:bg-blue-50/40 bg-white text-[13px] font-semibold py-2.5 px-3.5 rounded-lg flex items-center justify-center cursor-pointer whitespace-nowrap h-fit leading-none">
                        <Link to="/importer/marketplace">View Profile</Link>
                      </Button>
                      <Button asChild className="w-full bg-[#2563EB] hover:bg-[#1D4ED8] border-none text-white text-[12px] font-semibold py-2.5 px-3.5 rounded-lg flex items-center justify-center cursor-pointer whitespace-nowrap h-fit leading-none">
                        <Link to="/importer/messages">Request Meeting</Link>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Journey Progress stepper */}
            <div className="lg:col-span-1 flex">
              <div className="w-full bg-white rounded-2xl border border-[#E5E7EB] shadow-[0_1px_3px_rgba(0,0,0,0.05)] p-6 flex flex-col justify-between hover:shadow-md transition-shadow">
                <div>
                  <h3 className="font-bold text-[#0B1B3D] text-base mb-4">
                    Journey Progress
                  </h3>

                  <div className="relative pl-6 space-y-6">
                    {/* Connector Line */}
                    <div className="absolute left-[8px] top-2 bottom-2 w-[2px] bg-gray-200" />

                    {[
                      { title: "Account Registration", desc: "Profile setup completed", status: "Completed" },
                      { title: "Compliance Audit", desc: "Documents verified by Chamber", status: "Completed" },
                      { title: "Sourcing Requirement", desc: "Requirement details submitted", status: "Completed" },
                      { title: "Deal Room Matchmaking", desc: "Connecting with global partners", status: "In Progress" },
                      { title: "Trade Settlement", desc: "Contracting & logistics setup", status: "Pending" },
                    ].map((step, idx) => {
                      let dotColor = "bg-gray-300";
                      let statusBadge = (
                        <span className="text-[10px] font-bold bg-[#F1F5F9] text-[#64748B] px-2 py-0.5 rounded-full">
                          Pending
                        </span>
                      );

                      if (step.status === "Completed") {
                        dotColor = "bg-[#16A34A]";
                        statusBadge = (
                          <span className="text-[10px] font-bold bg-[#DCFCE7] text-[#16A34A] px-2 py-0.5 rounded-full">
                            Completed
                          </span>
                        );
                      } else if (step.status === "In Progress") {
                        dotColor = "bg-[#2563EB] animate-pulse";
                        statusBadge = (
                          <span className="text-[10px] font-bold bg-[#EFF6FF] text-[#2563EB] px-2 py-0.5 rounded-full">
                            In Progress
                          </span>
                        );
                      }

                      return (
                        <div key={idx} className="relative flex flex-col gap-1">
                          {/* Dot indicator */}
                          <div className={`absolute -left-[22px] top-1.5 w-[12px] h-[12px] rounded-full border-2 border-white shadow-sm ${dotColor}`} />

                          <div className="flex items-center justify-between gap-2">
                            <h4 className="font-semibold text-sm text-[#0F172A]">{step.title}</h4>
                            {statusBadge}
                          </div>
                          <p className="text-xs text-[#64748B] leading-none">{step.desc}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 7. QUICK ACTIONS SECTION */}
        <div className="w-full border-t border-gray-100 mt-8 pt-8 pb-0 text-left">
          <h3 className="text-[17px] font-bold text-[#0B1B3D] mb-5">Quick Actions</h3>
          <div className="flex flex-wrap items-center justify-between gap-y-5 gap-x-6 w-full">
            {[
              { label: "Browse Exporters", icon: Users, link: "/importer/marketplace" },
              { label: "Submit Requirement", icon: ClipboardCheck, link: "/importer/marketplace" },
              { label: "Book a Meeting", icon: Calendar, link: "/importer/waiting-room" },
              { label: "Available Sessions", icon: Monitor, link: "/importer/my-sessions" },
              { label: "Market Reports", icon: BarChart2, link: "/importer/opportunity-report" },
              { label: "Messages", icon: MessageSquare, link: "/importer/messages" },
            ].map((action, idx) => {
              const IconComp = action.icon;
              return (
                <Link
                  key={idx}
                  to={action.link}
                  className="flex items-center gap-3 group cursor-pointer"
                >
                  <div className="w-11 h-11 rounded-full bg-[#EFF6FF] border border-[#DBEAFE]/40 text-[#2563EB] flex items-center justify-center transition-all duration-300 group-hover:scale-105 shadow-sm shrink-0">
                    <IconComp className="size-5.5 stroke-[1.8px]" />
                  </div>
                  <span className="text-[13.5px] font-bold text-[#0B1B3D] group-hover:text-[#2563EB] transition-colors whitespace-nowrap">
                    {action.label}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>

        {/* ── FOOTER DISCLAIMER BAR ── */}
        <footer className="w-full border-t border-gray-100 mt-4 pt-4 pb-2 flex flex-col md:flex-row justify-between items-center gap-4 text-[12px] text-[#64748B]">
          {/* Left: AECCI Disclaimer with Shield Check Icon */}
          <div className="flex items-center gap-2 max-w-[600px] text-center md:text-left leading-relaxed">
            <ShieldCheck className="size-4.5 text-[#10B981] shrink-0" />
            <span>
              <strong className="text-[#0B1B3D]">AECCI Global Deal Room</strong> – A structured B2B business facilitation platform. AECCI does not guarantee transactions, contracts, payments or commercial outcomes.
            </span>
          </div>

          {/* Right: Copyright & Policy Links */}
          <div className="flex items-center flex-wrap justify-center gap-x-3 gap-y-1 font-semibold">
            <span>&copy; 2026 AECCI Global Deal Room. All rights reserved.</span>
            <span className="text-gray-300">|</span>
            <Link to="/terms-conditions" className="hover:text-[#2563EB] transition-colors">
              Terms & Conditions
            </Link>
            <span className="text-gray-300">|</span>
            <Link to="/privacy-policy" className="hover:text-[#2563EB] transition-colors">
              Privacy Policy
            </Link>
          </div>
        </footer>

      </Main>

      {/* Floating Scroll-to-Top Button */}
      {showScroll && (
        <button
          onClick={scrollTop}
          className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-[#16A34A] hover:bg-[#15803D] text-white flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 cursor-pointer border-none"
          title="Scroll to Top"
        >
          <ArrowUp className="size-5 stroke-[2.5px]" />
        </button>
      )}
    </>
  );
}
