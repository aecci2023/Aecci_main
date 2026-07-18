import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Main } from "@/components/layout/main";
import {
  FileText,
  Send,
  Users,
  CheckCircle2,
  AlertCircle,
  Search,
  ChevronDown,
  ChevronRight,
  ChevronLeft,
  MoreVertical,
  MapPin,
  Tag,
  Calendar,
  HelpCircle,
  BadgeCheck,
  Plus,
  Compass,
  Briefcase,
  Layers,
  ArrowRight,
  BookOpen,
  Headphones,
  Crown,
  ShieldCheck,
  Lock,
} from "lucide-react";

export default function ImporterSourcingRequirementsPage() {
  const [activeTab, setActiveTab] = useState("all");
  const [searchVal, setSearchVal] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All Categories");
  const [statusFilter, setStatusFilter] = useState("All Status");
  const [countryFilter, setCountryFilter] = useState("All Countries");
  const [isDesktop, setIsDesktop] = useState(
    typeof window !== "undefined" ? window.innerWidth >= 1024 : true
  );

  // Responsive logic
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const stats = [
    { label: "Total Requirements", value: "3", sub: "All Time", icon: FileText, color: "bg-[#EFF6FF] text-[#2563EB]" },
    { label: "Matching in Progress", value: "2", sub: "Requirements", icon: Send, color: "bg-[#EFF6FF] text-[#2563EB]" },
    { label: "Exporters Matched", value: "18", sub: "Total", icon: Users, color: "bg-[#F5F3FF] text-[#8B5CF6]" },
    { label: "Completed", value: "1", sub: "Requirement", icon: CheckCircle2, color: "bg-[#ECFDF5] text-[#10B981]" },
  ];

  const tabs = [
    { id: "all", label: "All Requirements" },
    { id: "matching", label: "Matching (2)" },
    { id: "responses", label: "Responses (18)" },
    { id: "negotiation", label: "Negotiation" },
    { id: "completed", label: "Completed (1)" },
    { id: "archived", label: "Archived" },
  ];

  const requirements = [
    {
      id: "REQ10245",
      title: "Cotton Bed Sheets",
      image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=150&h=150&q=80",
      status: "Matching in Progress",
      statusColor: "bg-[#ECFDF5] text-[#10B981]",
      category: "Home Textiles",
      qty: "5,000 Units",
      country: "India",
      date: "20 Aug 2026",
      desc: "We are looking for 100% cotton bed sheets in queen and king size with various color options.",
      metricCount: "18",
      metricLabel: "Exporters Matched",
      btnText: "View Matches",
    },
    {
      id: "REQ10232",
      title: "Handmade Leather Bags",
      image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=150&h=150&q=80",
      status: "Matching in Progress",
      statusColor: "bg-[#ECFDF5] text-[#10B981]",
      category: "Leather Products",
      qty: "2,000 Units",
      country: "India",
      date: "20 Aug 2026",
      desc: "Looking for genuine leather handbags and backpacks for retail distribution.",
      metricCount: "7",
      metricLabel: "Exporters Matched",
      btnText: "View Matches",
    },
    {
      id: "REQ10198",
      title: "Ceramic Dinnerware Set",
      image: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=150&h=150&q=80",
      status: "Completed",
      statusColor: "bg-[#EFF6FF] text-[#2563EB]",
      category: "Home & Kitchen",
      qty: "1,000 Sets",
      country: "India",
      date: "02 Aug 2026",
      desc: "Requirement for ceramic dinnerware sets with modern design.",
      metricCount: "5",
      metricLabel: "Exporters Responded",
      btnText: "View Summary",
    },
  ];

  return (
    <Main fluid className="bg-[#F5F7FA] min-h-screen p-6 space-y-6 text-left">
      {/* ── BREADCRUMB + PAGE HEADER ── */}
      <div>
        {/* Breadcrumb */}
        <div className="flex items-center gap-1.5 text-[13px] text-[#64748B] mb-2 font-medium">
          <Link to="/importer/dashboard" className="hover:text-[#2563EB] transition-colors">
            Dashboard
          </Link>
          <span>&gt;</span>
          <span className="text-[#0B1B3D] font-semibold">Sourcing Requirements</span>
        </div>

        {/* Page Title */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-[28px] font-bold text-[#0B1B3D] tracking-tight leading-none">
              Sourcing Requirements
            </h1>
            <p className="text-[15px] text-[#64748B] mt-2 font-medium">
              Create and manage your product requirements to connect with Indian exporters.
            </p>
          </div>
          
          <button className="flex items-center gap-2 bg-[#2563EB] hover:bg-blue-700 text-white text-[13.5px] font-bold py-2.5 px-4 rounded-lg shadow-md transition-all cursor-pointer border-none shrink-0 self-start sm:self-center">
            <Plus className="size-4.5 stroke-[2.5px]" />
            <span>Create New Requirement</span>
          </button>
        </div>
      </div>

      {/* ── STATS ROW ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {stats.map((stat, idx) => {
          const IconComp = stat.icon;
          return (
            <div
              key={idx}
              className="bg-white border border-[#E5E7EB] rounded-xl p-5 shadow-[0_1px_3px_rgba(0,0,0,0.03)] flex items-center gap-4 hover:shadow-md transition-all"
            >
              <div className={`w-12 h-12 rounded-full ${stat.color} flex items-center justify-center shrink-0`}>
                <IconComp className="size-5.5" />
              </div>
              <div className="space-y-0.5">
                <span className="block text-[13px] font-bold text-[#64748B] leading-none">
                  {stat.label}
                </span>
                <span className="block text-[22px] font-extrabold text-[#0B1B3D] pt-1 leading-none">
                  {stat.value}
                </span>
                <span className="block text-[11px] text-[#64748B] font-semibold pt-0.5 leading-none">
                  {stat.sub}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* ── TABS BAR ── */}
      <div className="bg-white border border-[#E5E7EB] rounded-[12px] shadow-[0_1px_3px_rgba(0,0,0,0.03)] overflow-x-auto">
        <div className="flex min-w-max border-b border-[#F1F5F9] px-4">
          {tabs.map((tab) => {
            const active = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-4 text-[13.5px] font-bold whitespace-nowrap border-b-2 transition-all cursor-pointer ${
                  active
                    ? "border-[#2563EB] text-[#2563EB]"
                    : "border-transparent text-[#64748B] hover:text-[#0B1B3D]"
                }`}
              >
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ── SEARCH & FILTER ROW ── */}
      <div className="bg-white border border-[#E5E7EB] rounded-xl p-4 shadow-[0_1px_3px_rgba(0,0,0,0.03)] flex flex-col md:flex-row gap-3 items-center justify-between w-full">
        {/* Search Input */}
        <div className="relative w-full md:max-w-xs">
          <input
            type="text"
            placeholder="Search by product, ID or keyword..."
            value={searchVal}
            onChange={(e) => setSearchVal(e.target.value)}
            className="w-full border border-[#D1D5DB] rounded-lg pl-9 pr-4 py-2 text-[13px] outline-none focus:border-[#2563EB] bg-[#FDFDFD] font-medium"
          />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-gray-400" />
        </div>

        {/* Dropdowns */}
        <div className="flex flex-wrap gap-2.5 w-full md:w-auto items-center md:justify-end">
          {/* Category Select */}
          <div className="relative min-w-[140px]">
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="w-full bg-white border border-[#D1D5DB] rounded-lg pl-3 pr-8 py-2 text-[12.5px] font-bold text-[#0B1B3D] outline-none appearance-none cursor-pointer focus:border-[#2563EB]"
            >
              <option>All Categories</option>
              <option>Home Textiles</option>
              <option>Leather Products</option>
              <option>Home & Kitchen</option>
            </select>
            <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 size-3.5 text-gray-500 pointer-events-none stroke-[2.5px]" />
          </div>

          {/* Status Select */}
          <div className="relative min-w-[130px]">
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="w-full bg-white border border-[#D1D5DB] rounded-lg pl-3 pr-8 py-2 text-[12.5px] font-bold text-[#0B1B3D] outline-none appearance-none cursor-pointer focus:border-[#2563EB]"
            >
              <option>All Status</option>
              <option>Matching in Progress</option>
              <option>Completed</option>
            </select>
            <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 size-3.5 text-gray-500 pointer-events-none stroke-[2.5px]" />
          </div>

          {/* Country Select */}
          <div className="relative min-w-[130px]">
            <select
              value={countryFilter}
              onChange={(e) => setCountryFilter(e.target.value)}
              className="w-full bg-white border border-[#D1D5DB] rounded-lg pl-3 pr-8 py-2 text-[12.5px] font-bold text-[#0B1B3D] outline-none appearance-none cursor-pointer focus:border-[#2563EB]"
            >
              <option>All Countries</option>
              <option>India</option>
              <option>United States</option>
            </select>
            <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 size-3.5 text-gray-500 pointer-events-none stroke-[2.5px]" />
          </div>
        </div>
      </div>

      {/* ── TWO-COLUMN MAIN CONTENT GRID ── */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: isDesktop ? "6.8fr 3.2fr" : "1fr",
          gap: "24px",
          width: "100%",
        }}
      >
        {/* LEFT COLUMN: Sourcing Requirements Cards List */}
        <div className="space-y-4">
          {requirements.map((req) => (
            <div
              key={req.id}
              className="bg-white border border-[#E5E7EB] rounded-xl p-5 shadow-[0_1px_3px_rgba(0,0,0,0.03)] hover:shadow-md transition-all grid grid-cols-1 md:grid-cols-[110px_1fr_160px] gap-5 items-stretch relative text-left"
            >
              {/* Image thumbnail */}
              <div className="relative rounded-lg overflow-hidden shrink-0 border border-[#E2E8F0] min-h-[90px] md:min-h-0 bg-slate-50">
                <img
                  src={req.image}
                  alt={req.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Requirement Details */}
              <div className="flex flex-col justify-between space-y-2.5">
                <div className="space-y-1.5">
                  {/* Top ID & Badge */}
                  <div className="flex items-center gap-2">
                    <span className="text-[12px] font-extrabold text-[#2563EB] uppercase tracking-wide">
                      #{req.id}
                    </span>
                    <span className={`inline-flex px-2 py-0.5 rounded-full text-[10px] font-extrabold ${req.statusColor}`}>
                      {req.status}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-[16px] font-bold text-[#0B1B3D] hover:text-[#2563EB] transition-colors cursor-pointer leading-tight">
                    {req.title}
                  </h3>
                </div>

                {/* Metadata Grid (4 columns/items) */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 text-[12.5px] text-[#64748B] font-semibold">
                  <div className="flex items-center gap-1.5">
                    <Tag className="size-4 text-gray-400 shrink-0" />
                    <span className="truncate">{req.category}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Layers className="size-4 text-gray-400 shrink-0" />
                    <span className="truncate">{req.qty}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="size-4 text-gray-400 shrink-0" />
                    <span className="truncate">{req.country}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Calendar className="size-4 text-gray-400 shrink-0" />
                    <span className="truncate">{req.date}</span>
                  </div>
                </div>

                {/* Description Paragraph */}
                <p className="text-[13px] text-gray-500 font-semibold leading-relaxed pt-1">
                  {req.desc}
                </p>
              </div>

              {/* Action Column on Right */}
              <div className="border-t md:border-t-0 md:border-l border-[#E5E7EB] pt-4 md:pt-0 md:pl-5 flex flex-col justify-center items-start md:items-end gap-3 min-w-[140px] text-left md:text-right">
                <div>
                  <span className="block text-[22px] font-extrabold text-[#0B1B3D] leading-none">
                    {req.metricCount}
                  </span>
                  <span className="block text-[11px] text-[#64748B] font-bold mt-1 leading-none">
                    {req.metricLabel}
                  </span>
                </div>

                <button className="w-full border border-[#2563EB] hover:bg-blue-50/50 bg-white text-[#2563EB] text-[12.5px] font-extrabold py-2 px-4 rounded-lg shadow-sm transition-all cursor-pointer whitespace-nowrap">
                  {req.btnText}
                </button>
              </div>

              {/* Action Dots */}
              <button className="absolute top-4 right-4 p-1 hover:bg-gray-150 rounded-lg text-gray-400 cursor-pointer">
                <MoreVertical className="size-4.5" />
              </button>
            </div>
          ))}

          {/* Pagination Controls */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 bg-white border border-[#E5E7EB] rounded-xl shadow-[0_1px_3px_rgba(0,0,0,0.03)]">
            <span className="text-[12.5px] font-semibold text-[#64748B]">
              Showing 1 to 3 of 3 requirements
            </span>
            
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5">
                <button className="w-8 h-8 rounded-lg border border-[#D1D5DB] flex items-center justify-center hover:bg-gray-50 text-gray-400 disabled:opacity-50 cursor-pointer">
                  <ChevronLeft className="size-4" />
                </button>
                <button className="w-8 h-8 rounded-lg bg-[#2563EB] text-white flex items-center justify-center text-[12.5px] font-bold shadow-sm">
                  1
                </button>
                <button className="w-8 h-8 rounded-lg border border-[#D1D5DB] flex items-center justify-center hover:bg-gray-50 text-gray-400 disabled:opacity-50 cursor-pointer">
                  <ChevronRight className="size-4" />
                </button>
              </div>

              <div className="relative">
                <select className="bg-white border border-[#D1D5DB] rounded-lg pl-3 pr-8 py-1.5 text-[12.5px] font-bold text-[#0B1B3D] outline-none appearance-none cursor-pointer focus:border-[#2563EB]">
                  <option>10 / page</option>
                  <option>20 / page</option>
                </select>
                <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 size-3.5 text-gray-500 pointer-events-none stroke-[2.5px]" />
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Sidebar widgets */}
        <div className="space-y-6">
          {/* Widget 1: Sourcing Tips */}
          <div className="bg-white border border-[#E5E7EB] rounded-[12px] p-5 shadow-[0_1px_3px_rgba(0,0,0,0.04)] space-y-4 text-left">
            <h3 className="text-[15px] font-bold text-[#0B1B3D]">
              Sourcing Tips
            </h3>

            <div className="space-y-4 pt-1">
              {[
                {
                  title: "Be Specific",
                  desc: "Add details like material, size, quality, quantity to get better matches.",
                  icon: FileText,
                },
                {
                  title: "Add Images",
                  desc: "Images help exporters understand your requirement clearly.",
                  icon: Layers,
                },
                {
                  title: "Update Regularly",
                  desc: "Keep your requirements updated for faster responses.",
                  icon: Send,
                },
              ].map((tip, idx) => {
                const TipIcon = tip.icon;
                return (
                  <div key={idx} className="flex gap-3.5">
                    <div className="w-9 h-9 rounded-lg bg-blue-50 border border-blue-100/50 flex items-center justify-center shrink-0 text-[#2563EB]">
                      <TipIcon className="size-4.5" />
                    </div>
                    <div className="space-y-0.5">
                      <h4 className="text-[13px] font-bold text-[#0B1B3D]">
                        {tip.title}
                      </h4>
                      <p className="text-[12px] text-gray-500 font-semibold leading-relaxed">
                        {tip.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <button className="w-full flex items-center justify-center gap-2 border border-[#2563EB] hover:bg-blue-50/50 bg-white text-[#2563EB] text-[13px] font-extrabold py-2.5 rounded-lg shadow-sm transition-all cursor-pointer mt-2">
              <BookOpen className="size-4 text-[#2563EB]" />
              <span>View Sourcing Guide</span>
            </button>
          </div>

          {/* Widget 2: Need Help? */}
          <div className="bg-white border border-[#E5E7EB] rounded-[12px] p-5 shadow-[0_1px_3px_rgba(0,0,0,0.04)] space-y-3.5 text-left relative">
            <div className="flex justify-between items-center">
              <h3 className="text-[15px] font-bold text-[#0B1B3D]">
                Need Help?
              </h3>
              <button className="text-gray-400 hover:text-gray-600 p-0.5 rounded cursor-pointer">
                <MoreVertical className="size-4" />
              </button>
            </div>
            
            <p className="text-[12.5px] text-gray-500 font-semibold leading-relaxed">
              Our AECCI team is here to help you find the right exporters.
            </p>

            <button className="w-full flex items-center justify-center gap-2 border border-[#2563EB] hover:bg-blue-50/50 bg-white text-[#2563EB] text-[13px] font-extrabold py-2.5 rounded-lg shadow-sm transition-all cursor-pointer pt-1">
              <Headphones className="size-4 text-[#2563EB]" />
              <span>Request Assistance</span>
            </button>
          </div>

          {/* Widget 3: Upgrade Your Plan */}
          <div className="bg-[#EFF6FF] border border-[#BFDBFE]/60 rounded-[12px] p-5 shadow-[0_1px_3px_rgba(0,0,0,0.04)] space-y-4 text-left flex flex-col justify-between">
            <div className="space-y-2">
              <h3 className="text-[15px] font-bold text-[#0B1B3D] flex items-center gap-1.5">
                <Crown className="size-4.5 text-amber-500 fill-amber-500" />
                <span>Upgrade Your Plan</span>
              </h3>
              <p className="text-[12.5px] text-gray-500 font-semibold leading-relaxed">
                Upgrade to Premium Buyer Plan to get more matches, priority support and advanced analytics.
              </p>
            </div>

            <button className="w-full bg-[#F59E0B] hover:bg-amber-600 text-white text-[13px] font-extrabold py-2.5 rounded-lg shadow transition-all cursor-pointer border-none flex items-center justify-center gap-1.5">
              <Lock className="size-4 text-white fill-white" />
              <span>Upgrade Now</span>
            </button>
          </div>
        </div>
      </div>

      {/* ── FOOTER DISCLAIMER BAR ── */}
      <footer className="w-full border-t border-gray-200 mt-10 pt-6 pb-4 flex flex-col md:flex-row justify-between items-center gap-4 text-[12px] text-[#64748B]">
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
  );
}
