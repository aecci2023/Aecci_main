import { useState } from "react";
import {
  Send,
  Clock,
  CheckCircle2,
  XCircle,
  Search,
  ChevronDown,
  ChevronRight,
  ChevronLeft,
  MoreVertical,
  MapPin,
  Tag,
  HelpCircle,
  FileText,
  BadgeCheck,
} from "lucide-react";

// ─── Constants & Mock Data ───
const STATS = [
  { label: "Total Requests", value: "4", icon: FileText, color: "bg-[#EFF6FF] text-[#2563EB]" },
  { label: "Sent Requests", value: "2", icon: Send, color: "bg-[#F5F3FF] text-[#8B5CF6]" },
  { label: "Pending", value: "2", icon: Clock, color: "bg-[#FFFBEB] text-[#D97706]" },
  { label: "Accepted", value: "1", icon: CheckCircle2, color: "bg-[#ECFDF5] text-[#10B981]" },
  { label: "Declined", value: "1", icon: XCircle, color: "bg-[#FEF2F2] text-[#EF4444]" },
];

const TABS = [
  { id: "all", label: "All Requests" },
  { id: "received", label: "Received (3)" },
  { id: "sent", label: "Sent (2)" },
  { id: "accepted", label: "Accepted (1)" },
  { id: "declined", label: "Declined (1)" },
];

const REQUESTS_DATA = [
  {
    logo: "K",
    logoText: "KRAFT INDIA",
    companyName: "Kraft India Exports Pvt. Ltd.",
    location: "Delhi, India",
    category: "Leather Goods, Wallets, Accessories",
    sessionTitle: "India Leather & Accessories Connect",
    sessionTime: "26 May 2026 • 02:00 PM (EST)",
    sessionDuration: "30 Min • One-to-One",
    status: "Pending",
    statusText: "Request received",
    dateText: "20 May 2026",
    statusColor: "bg-[#FFFBEB] text-[#D97706] border-[#FDE68A]",
    direction: "received",
  },
  {
    logo: "A",
    logoText: "AGROVITA",
    companyName: "AgroVita Foods Pvt. Ltd.",
    location: "Mumbai, India",
    category: "Spices, Pulses, Rice, Oil Seeds",
    sessionTitle: "India Food Export Connect",
    sessionTime: "26 May 2026 • 11:30 AM (EST)",
    sessionDuration: "30 Min • One-to-One",
    status: "Pending",
    statusText: "Request received",
    dateText: "19 May 2026",
    statusColor: "bg-[#FFFBEB] text-[#D97706] border-[#FDE68A]",
    direction: "received",
  },
  {
    logo: "D",
    logoText: "DECCAN",
    companyName: "Deccan Ceramics Pvt. Ltd.",
    location: "Morbi, Gujarat, India",
    category: "Ceramic Tableware, Dinner Sets",
    sessionTitle: "India Home & Lifestyle Expo",
    sessionTime: "26 May 2026 • 09:00 AM (EST)",
    sessionDuration: "30 Min • One-to-One",
    status: "Accepted",
    statusText: "Accepted on",
    dateText: "18 May 2026",
    statusColor: "bg-[#EBFDF5] text-[#10B981] border-[#A7F3D0]",
    direction: "received",
  },
  {
    logo: "S",
    logoText: "SURYATEX",
    companyName: "Suryatex Industries Pvt. Ltd.",
    location: "Surat, Gujarat, India",
    category: "Home Textiles, Bed Linen, Towels",
    sessionTitle: "India Textile Sourcing Forum",
    sessionTime: "25 May 2026 • 10:00 AM (EST)",
    sessionDuration: "30 Min • One-to-One",
    status: "Declined",
    statusText: "Declined on",
    dateText: "17 May 2026",
    statusColor: "bg-[#FEF2F2] text-[#EF4444] border-[#FEE2E2]",
    direction: "received",
  },
  {
    logo: "W",
    logoText: "FASHION",
    companyName: "Fashion Weaves Pvt. Ltd.",
    location: "Tirupur, Tamil Nadu, India",
    category: "Apparel, Knitted Wear, Activewear",
    sessionTitle: "India Textile Sourcing Forum",
    sessionTime: "25 May 2026 • 10:00 AM (EST)",
    sessionDuration: "30 Min • One-to-One",
    status: "Sent",
    statusText: "Request sent",
    dateText: "16 May 2026",
    statusColor: "bg-[#EFF6FF] text-[#2563EB] border-[#BFDBFE]",
    direction: "sent",
  },
];

export default function ImporterMeetingRequestsPage() {
  const [activeTab, setActiveTab] = useState("all");
  const [searchVal, setSearchVal] = useState("");
  const [statusFilter, setStatusFilter] = useState("All Status");
  const [sessionFilter, setSessionFilter] = useState("All Sessions");
  const [sortBy, setSortBy] = useState("Latest");

  const filteredRequests = REQUESTS_DATA.filter((req) => {
    // Tab filter
    if (activeTab === "received" && req.direction !== "received") return false;
    if (activeTab === "sent" && req.direction !== "sent") return false;
    if (activeTab === "accepted" && req.status.toLowerCase() !== "accepted") return false;
    if (activeTab === "declined" && req.status.toLowerCase() !== "declined") return false;

    // Search query
    if (searchVal && !req.companyName.toLowerCase().includes(searchVal.toLowerCase())) return false;

    // Dropdown filters
    if (statusFilter !== "All Status" && req.status !== statusFilter) return false;
    if (sessionFilter !== "All Sessions" && req.sessionTitle !== sessionFilter) return false;

    return true;
  });

  const handleClearFilters = () => {
    setSearchVal("");
    setStatusFilter("All Status");
    setSessionFilter("All Sessions");
    setSortBy("Latest");
  };

  return (
    <div className="min-h-full bg-[#F4F6FA] px-6 py-6 text-left">
      {/* ── Breadcrumb ── */}
      <div className="flex items-center gap-2 text-[12px] text-[#64748B] mb-2 font-medium">
        <span>Dashboard</span>
        <span>&gt;</span>
        <span className="text-[#0F172A]">Meeting Requests</span>
      </div>

      {/* ── Page Header ── */}
      <div className="mb-6">
        <h1 className="text-[26px] font-bold text-[#0F172A]">Meeting Requests</h1>
        <p className="text-[14px] text-[#64748B] mt-1">
          Manage all your received and sent meeting requests.
        </p>
      </div>

      {/* ── Stats Bar ── */}
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
        {STATS.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.label} className="bg-white border border-[#E5E7EB] rounded-xl p-4 shadow-sm flex items-center gap-4">
              <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${stat.color}`}>
                <Icon className="size-5" />
              </div>
              <div>
                <p className="text-[20px] font-extrabold text-[#0F172A] leading-none">{stat.value}</p>
                <p className="text-[12px] text-[#64748B] font-semibold mt-1.5 leading-none">{stat.label}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* ── Tabs ── */}
      <div className="bg-white border border-[#E5E7EB] rounded-xl mb-6 overflow-x-auto shadow-sm">
        <div className="flex min-w-max">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-4 text-[13px] font-semibold whitespace-nowrap border-b-2 transition-colors ${
                activeTab === tab.id
                  ? "border-[#2563EB] text-[#2563EB] bg-[#EFF6FF]"
                  : "border-transparent text-[#64748B] hover:text-[#0F172A] hover:bg-[#F8FAFC]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* ── Main Layout Grid ── */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6">

        {/* LEFT COLUMN: Filters & Request Cards */}
        <div className="space-y-4">
          
          {/* Advanced Filter Bar */}
          <div className="bg-white border border-[#E5E7EB] rounded-xl p-4 shadow-sm flex flex-col md:flex-row gap-3 items-center justify-between">
            {/* Search Exporter/Company */}
            <div className="relative w-full md:max-w-xs">
              <input
                type="text"
                placeholder="Search by exporter or company..."
                value={searchVal}
                onChange={(e) => setSearchVal(e.target.value)}
                className="w-full border border-[#D1D5DB] rounded-lg pl-9 pr-4 py-2 text-[13px] outline-none focus:border-[#2563EB] bg-[#FDFDFD]"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-gray-400" />
            </div>

            {/* Selector Options */}
            <div className="flex flex-wrap gap-2.5 w-full md:w-auto items-center md:justify-end">
              {/* Status Select */}
              <div className="relative">
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="bg-white border border-[#D1D5DB] rounded-lg pl-3 pr-8 py-2 text-[12px] font-semibold text-[#374151] outline-none appearance-none cursor-pointer focus:border-[#2563EB]"
                >
                  <option>All Status</option>
                  <option>Pending</option>
                  <option>Accepted</option>
                  <option>Declined</option>
                  <option>Sent</option>
                </select>
                <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 size-3.5 text-gray-400 pointer-events-none" />
              </div>

              {/* Sessions Select */}
              <div className="relative">
                <select
                  value={sessionFilter}
                  onChange={(e) => setSessionFilter(e.target.value)}
                  className="bg-white border border-[#D1D5DB] rounded-lg pl-3 pr-8 py-2 text-[12px] font-semibold text-[#374151] outline-none appearance-none cursor-pointer focus:border-[#2563EB]"
                >
                  <option>All Sessions</option>
                  <option>India Leather &amp; Accessories Connect</option>
                  <option>India Food Export Connect</option>
                  <option>India Textile Sourcing Forum</option>
                </select>
                <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 size-3.5 text-gray-400 pointer-events-none" />
              </div>

              {/* Sort Select */}
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-white border border-[#D1D5DB] rounded-lg pl-3 pr-8 py-2 text-[12px] font-semibold text-[#374151] outline-none appearance-none cursor-pointer focus:border-[#2563EB]"
                >
                  <option>Sort by: Latest</option>
                  <option>Sort by: Oldest</option>
                </select>
                <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 size-3.5 text-gray-400 pointer-events-none" />
              </div>

              {/* Clear Filters */}
              <button
                onClick={handleClearFilters}
                className="text-[12px] font-semibold text-[#64748B] hover:text-[#0F172A] ml-1"
              >
                Clear Filters
              </button>
            </div>
          </div>

          {/* Cards List */}
          <div className="space-y-4">
            {filteredRequests.map((req, idx) => (
              <div key={idx} className="bg-white border border-[#E5E7EB] rounded-xl p-5 shadow-sm hover:shadow-md transition-all grid grid-cols-1 md:grid-cols-[110px_1.5fr_1.5fr_1fr] gap-5 items-stretch relative">
                
                {/* Top Right Action Menu */}
                <button className="absolute top-4 right-4 p-1 hover:bg-gray-100 rounded-lg text-gray-400">
                  <MoreVertical className="size-4.5" />
                </button>

                {/* Left: Brand Logo & Verified */}
                <div className="flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-[#F1F5F9] pb-4 md:pb-0 md:pr-4">
                  <div className="w-14 h-14 rounded-xl border border-[#E2E8F0] flex flex-col items-center justify-center p-2 mb-2 bg-[#F8FAFC]">
                    <span className="text-[8px] text-[#94A3B8] font-bold tracking-wider leading-none">BRAND</span>
                    <span className="text-[#0F172A] font-extrabold text-[10px] uppercase mt-1 leading-none truncate max-w-full">{req.logoText}</span>
                  </div>
                </div>

                {/* Column 2: Exporter Company Details */}
                <div className="flex flex-col justify-center space-y-1.5 text-left">
                  <h4 className="text-[14px] font-bold text-[#0F172A] flex items-center gap-1">
                    {req.companyName}
                    <BadgeCheck className="size-4 fill-[#2563EB] text-white shrink-0" />
                  </h4>
                  <p className="text-[12px] text-[#64748B] flex items-center gap-1">
                    <MapPin className="size-3.5" />
                    {req.location}
                  </p>
                  <p className="text-[12px] text-[#64748B] flex items-center gap-1.5">
                    <Tag className="size-3.5 text-gray-400" />
                    {req.category}
                  </p>
                </div>

                {/* Column 3: Session Parameters */}
                <div className="flex flex-col justify-center space-y-1.5 border-t md:border-t-0 border-[#F1F5F9] pt-3 md:pt-0">
                  <span className="inline-flex items-center gap-1 bg-[#EFF6FF] text-[#2563EB] rounded px-2 py-0.5 text-[9px] font-extrabold w-fit">
                    Session
                  </span>
                  <h4 className="text-[13px] font-extrabold text-[#0F172A] leading-tight">
                    {req.sessionTitle}
                  </h4>
                  <p className="text-[11px] text-[#64748B] font-semibold leading-none">{req.sessionTime}</p>
                  <p className="text-[11px] text-[#64748B] font-semibold leading-none">{req.sessionDuration}</p>
                </div>

                {/* Column 4: Request Status & Actions */}
                <div className="border-t md:border-t-0 md:border-l border-[#E5E7EB] pt-4 md:pt-0 md:pl-5 flex flex-col justify-center items-start md:items-end gap-3 min-w-[150px]">
                  <div className="space-y-1 w-full text-left md:text-right">
                    <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-extrabold border ${req.statusColor}`}>
                      {req.status}
                    </span>
                    <p className="text-[11px] text-[#64748B] font-semibold mt-1.5">{req.statusText}</p>
                    <p className="text-[11px] text-[#0F172A] font-extrabold">{req.dateText}</p>
                  </div>

                  <div className="flex flex-col sm:flex-row md:flex-col gap-2 w-full mt-2">
                    {req.status === "Pending" && (
                      <>
                        <button className="w-full border border-[#2563EB] text-[#2563EB] hover:bg-[#EFF6FF] text-[12px] font-semibold py-2 rounded-lg transition-colors">
                          View Details
                        </button>
                        <div className="relative w-full flex">
                          <button className="flex-1 bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-[12px] font-semibold py-2 rounded-l-lg transition-colors">
                            Respond
                          </button>
                          <button className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-[12px] font-semibold px-2.5 rounded-r-lg border-l border-white/20 transition-colors">
                            <ChevronDown className="size-3.5" />
                          </button>
                        </div>
                      </>
                    )}

                    {req.status === "Accepted" && (
                      <button className="w-full border border-[#D1D5DB] text-[#374151] hover:bg-gray-50 text-[12px] font-semibold py-2 rounded-lg transition-colors">
                        View Details
                      </button>
                    )}

                    {req.status === "Declined" && (
                      <button className="w-full border border-[#D1D5DB] text-[#374151] hover:bg-gray-50 text-[12px] font-semibold py-2 rounded-lg transition-colors">
                        View Details
                      </button>
                    )}

                    {req.status === "Sent" && (
                      <button className="w-full border border-red-200 text-red-500 hover:bg-red-50 text-[12px] font-semibold py-2 rounded-lg transition-colors">
                        Cancel Request
                      </button>
                    )}
                  </div>
                </div>

              </div>
            ))}
          </div>

          {/* Footer Pagination */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 bg-white border border-[#E5E7EB] rounded-xl shadow-sm">
            <span className="text-[12px] text-[#64748B]">Showing 1 to {filteredRequests.length} of 5 requests</span>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <button className="w-8 h-8 rounded-lg border border-[#D1D5DB] flex items-center justify-center text-gray-400 disabled:opacity-50" disabled>
                  <ChevronLeft className="size-4" />
                </button>
                <button className="w-8 h-8 rounded-lg bg-[#2563EB] text-white flex items-center justify-center text-[12px] font-bold">
                  1
                </button>
                <button className="w-8 h-8 rounded-lg border border-[#D1D5DB] flex items-center justify-center text-gray-400 disabled:opacity-50" disabled>
                  <ChevronRight className="size-4" />
                </button>
              </div>

              <div className="relative">
                <select className="bg-white border border-[#D1D5DB] rounded-lg pl-3 pr-8 py-1.5 text-[12px] font-semibold text-[#374151] outline-none appearance-none cursor-pointer focus:border-[#2563EB]">
                  <option>10 / page</option>
                  <option>20 / page</option>
                </select>
                <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 size-3.5 text-gray-400 pointer-events-none" />
              </div>
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN: Guide & Overview charts */}
        <div className="space-y-6">

          {/* Request Guide */}
          <div className="bg-white border border-[#E5E7EB] rounded-xl p-5 shadow-sm">
            <h3 className="text-[14px] font-bold text-[#0F172A] mb-3 flex items-center gap-1.5">
              <HelpCircle className="size-4 text-[#2563EB]" />
              Request Guide
            </h3>
            
            <div className="space-y-3.5 text-[12px] text-[#374151] leading-relaxed">
              <div className="flex gap-2">
                <span className="font-extrabold text-[#2563EB] text-[13px] shrink-0 mt-0.5">1.</span>
                <p>Send or receive meeting requests with exporters</p>
              </div>
              <div className="flex gap-2">
                <span className="font-extrabold text-[#2563EB] text-[13px] shrink-0 mt-0.5">2.</span>
                <p>Respond to requests within 3 days for better connection</p>
              </div>
              <div className="flex gap-2">
                <span className="font-extrabold text-[#2563EB] text-[13px] shrink-0 mt-0.5">3.</span>
                <p>Accepted meetings will appear in My Meetings</p>
              </div>
            </div>

            <button className="w-full border border-[#2563EB] text-[#2563EB] hover:bg-[#EFF6FF] text-[13px] font-semibold py-2 rounded-lg mt-4 transition-colors flex items-center justify-center">
              View Full Guide
            </button>
          </div>

          {/* Request Overview Donut */}
          <div className="bg-white border border-[#E5E7EB] rounded-xl p-5 shadow-sm">
            <h3 className="text-[14px] font-bold text-[#0F172A] mb-4">Request Overview</h3>
            
            {/* Donut graphic */}
            <div className="flex justify-center mb-5">
              <div className="relative w-24 h-24">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 64 64">
                  <circle cx="32" cy="32" r="26" stroke="#E5E7EB" strokeWidth="6" fill="none" />
                  {/* Accepted (1/6 = 16.6%) */}
                  <circle
                    cx="32" cy="32" r="26"
                    stroke="#10B981"
                    strokeWidth="6"
                    fill="none"
                    strokeDasharray={`${2 * Math.PI * 26 * 0.166} ${2 * Math.PI * 26}`}
                    strokeDashoffset="0"
                    strokeLinecap="round"
                  />
                  {/* Sent (2/6 = 33.3%) */}
                  <circle
                    cx="32" cy="32" r="26"
                    stroke="#8B5CF6"
                    strokeWidth="6"
                    fill="none"
                    strokeDasharray={`${2 * Math.PI * 26 * 0.333} ${2 * Math.PI * 26}`}
                    strokeDashoffset={`-${2 * Math.PI * 26 * 0.166}`}
                    strokeLinecap="round"
                  />
                  {/* Pending (2/6 = 33.3%) */}
                  <circle
                    cx="32" cy="32" r="26"
                    stroke="#D97706"
                    strokeWidth="6"
                    fill="none"
                    strokeDasharray={`${2 * Math.PI * 26 * 0.333} ${2 * Math.PI * 26}`}
                    strokeDashoffset={`-${2 * Math.PI * 26 * 0.5}`}
                    strokeLinecap="round"
                  />
                  {/* Declined (1/6 = 16.6%) */}
                  <circle
                    cx="32" cy="32" r="26"
                    stroke="#EF4444"
                    strokeWidth="6"
                    fill="none"
                    strokeDasharray={`${2 * Math.PI * 26 * 0.166} ${2 * Math.PI * 26}`}
                    strokeDashoffset={`-${2 * Math.PI * 26 * 0.833}`}
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-[16px] font-extrabold text-[#0F172A]">4</span>
                  <span className="text-[9px] text-[#64748B] font-semibold -mt-0.5">Pending</span>
                </div>
              </div>
            </div>

            {/* Legend checklist */}
            <div className="space-y-2.5 text-[12.5px] text-[#374151]">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="size-2 rounded-full bg-[#10B981]" />
                  <span>1 Accepted</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="size-2 rounded-full bg-[#EF4444]" />
                  <span>1 Declined</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="size-2 rounded-full bg-[#D97706]" />
                  <span>2 Pending</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="size-2 rounded-full bg-[#2563EB]" />
                  <span>2 Sent</span>
                </div>
              </div>
            </div>
          </div>

          {/* Need Assistance? */}
          <div className="bg-white border border-[#E5E7EB] rounded-xl p-5 shadow-sm">
            <h3 className="text-[14px] font-bold text-[#0F172A] mb-1">Need Assistance?</h3>
            <p className="text-[12px] text-[#64748B] mb-4">
              Our team is here to help you connect with the right exporters.
            </p>
            <button className="w-full border border-[#2563EB] text-[#2563EB] hover:bg-[#EFF6FF] text-[13px] font-semibold py-2 rounded-lg transition-colors flex items-center justify-center gap-1.5">
              Contact AECCI Team
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
