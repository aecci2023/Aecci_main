import { useState } from "react";
import { Main } from "@/components/layout/main";
import { Button } from "@/components/ui/button";
import {
  Plus,
  Search,
  Calendar,
  ChevronDown,
  Info,
  CheckCircle2,
  Landmark,
  TrendingUp,
  FileText,
  Ship,
  Globe,
  Clock,
  User,
  MoreVertical,
  Headphones,
  ArrowRight,
  ShieldCheck,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function PartnerConsultationsPage() {
  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");
  const [dateRange, setDateRange] = useState("");

  const tabs = [
    { id: "all", label: "All Consultations" },
    { id: "requested", label: "Requested By Me" },
    { id: "assigned", label: "Assigned To Me" },
    { id: "completed", label: "Completed" },
    { id: "cancelled", label: "Cancelled" },
  ];

  const kpiData = [
    {
      id: 1,
      value: "14",
      title: "Total Consultations",
      icon: FileText,
      iconBg: "bg-[#2563EB] text-white",
      type: "dark",
    },
    {
      id: 2,
      value: "6",
      title: "Completed",
      percentage: "42.9%",
      icon: CheckCircle2,
      iconBg: "bg-[#16A34A] text-white",
      progressColor: "bg-[#16A34A]",
      progressWidth: "43%",
      type: "kpi",
    },
    {
      id: 3,
      value: "4",
      title: "Scheduled",
      percentage: "28.6%",
      icon: Clock,
      iconBg: "bg-[#D4A64A] text-white",
      progressColor: "bg-[#D4A64A]",
      progressWidth: "29%",
      type: "kpi",
    },
    {
      id: 4,
      value: "8",
      title: "Experts Available",
      linkText: "View Experts →",
      icon: User,
      iconBg: "bg-[#7C3AED] text-white",
      type: "experts",
    },
  ];

  const consultations = [
    {
      id: 1,
      title: "Trade Consultation – Industrial",
      subtitle: "Market entry strategy for industrial products in Germany",
      category: "International Trade",
      categoryColor: "text-[#7C3AED]",
      expertName: "Robert Miller",
      expertRole: "Trade Advisory Expert",
      expertAvatar:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=120&h=120&q=80",
      date: "22 May 2025",
      time: "11:00 AM (EST)",
      status: "Scheduled",
      statusBg: "bg-[#E0F2FE] text-[#0284C7]",
      actionLabel: "View Details",
      actionVariant: "blue-outline",
      icon: Landmark,
      iconBg: "bg-[#2563EB] text-white",
      tabType: "requested",
    },
    {
      id: 2,
      title: "Export Compliance Review",
      subtitle: "Review of export documentation and procedures",
      category: "Regulatory Compliance",
      categoryColor: "text-[#059669]",
      expertName: "Sophia Martinez",
      expertRole: "Compliance Expert",
      expertAvatar:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&h=120&q=80",
      date: "23 May 2025",
      time: "02:30 PM (EST)",
      status: "Confirmed",
      statusBg: "bg-[#D1FAE5] text-[#059669]",
      actionLabel: "Join Session",
      actionVariant: "green-solid",
      icon: TrendingUp,
      iconBg: "bg-[#10B981] text-white",
      tabType: "assigned",
    },
    {
      id: 3,
      title: "Legal Advisory – Contract Review",
      subtitle: "Review of international trade contract",
      category: "Legal Advisory",
      categoryColor: "text-[#EA580C]",
      expertName: "David Wilson",
      expertRole: "Legal Consultant",
      expertAvatar:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=120&h=120&q=80",
      date: "24 May 2025",
      time: "10:30 AM (EST)",
      status: "Pending",
      statusBg: "bg-[#FEF3C7] text-[#D97706]",
      actionLabel: "Reschedule",
      actionVariant: "amber-outline",
      icon: FileText,
      iconBg: "bg-[#F97316] text-white",
      tabType: "requested",
    },
    {
      id: 4,
      title: "Logistics & Supply Chain Consultation",
      subtitle: "Optimizing supply chain for global operations",
      category: "Trade Strategy",
      categoryColor: "text-[#2563EB]",
      expertName: "Emma Thompson",
      expertRole: "Logistics Expert",
      expertAvatar:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=120&h=120&q=80",
      date: "25 May 2025",
      time: "03:00 PM (EST)",
      status: "Completed",
      statusBg: "bg-[#D1FAE5] text-[#059669]",
      actionLabel: "View Summary",
      actionVariant: "emerald-outline",
      icon: Ship,
      iconBg: "bg-[#2563EB] text-white",
      tabType: "completed",
    },
    {
      id: 5,
      title: "Cross-Border Tariff Assessment",
      subtitle: "Evaluation of import tariffs for agricultural goods",
      category: "Trade Strategy",
      categoryColor: "text-[#2563EB]",
      expertName: "Robert Miller",
      expertRole: "Trade Advisory Expert",
      expertAvatar:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=120&h=120&q=80",
      date: "18 May 2025",
      time: "04:00 PM (EST)",
      status: "Cancelled",
      statusBg: "bg-[#FEE2E2] text-[#DC2626]",
      actionLabel: "Rebook",
      actionVariant: "slate-outline",
      icon: Landmark,
      iconBg: "bg-slate-600 text-white",
      tabType: "cancelled",
    },
    {
      id: 6,
      title: "Customs Valuation Consultation",
      subtitle: "Customs duty calculation & valuation audit",
      category: "Regulatory Compliance",
      categoryColor: "text-[#059669]",
      expertName: "Sophia Martinez",
      expertRole: "Compliance Expert",
      expertAvatar:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&h=120&q=80",
      date: "26 May 2025",
      time: "01:30 PM (EST)",
      status: "Confirmed",
      statusBg: "bg-[#D1FAE5] text-[#059669]",
      actionLabel: "Join Session",
      actionVariant: "green-solid",
      icon: TrendingUp,
      iconBg: "bg-[#10B981] text-white",
      tabType: "assigned",
    },
  ];

  const filteredConsultations = consultations.filter((item) => {
    const matchesTab =
      activeTab === "all" ||
      (activeTab === "requested" && item.tabType === "requested") ||
      (activeTab === "assigned" && item.tabType === "assigned") ||
      (activeTab === "completed" && (item.status === "Completed" || item.tabType === "completed")) ||
      (activeTab === "cancelled" && (item.status === "Cancelled" || item.tabType === "cancelled"));

    const matchesCategory =
      categoryFilter === "all" ||
      (categoryFilter === "trade" && item.category === "International Trade") ||
      (categoryFilter === "regulatory" && item.category === "Regulatory Compliance") ||
      (categoryFilter === "legal" && item.category === "Legal Advisory") ||
      (categoryFilter === "strategy" && item.category === "Trade Strategy");

    const matchesStatus =
      statusFilter === "all" ||
      item.status.toLowerCase().includes(statusFilter.toLowerCase());

    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.expertName.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesTab && matchesCategory && matchesStatus && matchesSearch;
  });

  return (
    <Main fluid className="bg-[#F8FAFC] min-h-screen pt-2 sm:pt-3 px-6 sm:px-8 pb-6 space-y-4 text-left flex flex-col justify-between">
      <div className="space-y-4 max-w-[1600px] mx-auto w-full">
        {/* ── PAGE HEADER & HERO BANNER ── */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Consultations
            </h1>
            <p className="text-xs sm:text-sm text-slate-400 font-medium mt-1">
              Manage and schedule consultations with industry experts
            </p>
          </div>

          {/* Right Hero Guidance Card */}
          <div className="bg-[#EFF4FF] border border-blue-100/80 rounded-2xl py-3 px-4 sm:px-5 flex items-center justify-between shadow-2xs max-w-xl lg:max-w-2xl w-full shrink-0 relative overflow-hidden h-[82px] sm:h-[90px]">
            {/* Right Side Image - Globe stuck flush to bottom-right edge */}
            <img
              src="/CollaboratorConsultationsBG.png"
              alt="Expert Guidance"
              className="absolute right-0 -bottom-3 sm:-bottom-4 h-[145%] sm:h-[155%] w-auto object-contain object-right-bottom pointer-events-none"
            />

            {/* Left Icon & Text Content */}
            <div className="flex items-center gap-3 relative z-10 max-w-[60%] sm:max-w-[65%]">
              <div className="w-9 h-9 rounded-full bg-[#07192F] text-white flex items-center justify-center shrink-0 shadow-sm">
                <Users className="w-4.5 h-4.5 text-white" />
              </div>
              <div className="space-y-0.5">
                <h4 className="font-extrabold text-[#1E3A8A] text-xs sm:text-sm leading-tight">
                  Expert Guidance. Global Impact.
                </h4>
                <p className="text-[11px] text-slate-500 font-medium leading-tight">
                  Connect with experts and grow your business globally.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ── KPI SECTION (4 EQUAL CARDS) ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {kpiData.map((kpi) => {
            const IconComp = kpi.icon;

            if (kpi.type === "dark") {
              return (
                <div
                  key={kpi.id}
                  className="text-white rounded-2xl p-4 sm:p-5 shadow-sm flex flex-col justify-between h-[105px] sm:h-[110px] relative overflow-hidden bg-cover bg-right bg-no-repeat bg-[#07192F]"
                  style={{ backgroundImage: "url('/EarthBGImage.png')" }}
                >
                  {/* Dark gradient overlay for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#07192F]/95 via-[#07192F]/70 to-transparent pointer-events-none"></div>

                  <div className="flex items-center gap-3 relative z-10">
                    <div className={`w-9 h-9 rounded-full ${kpi.iconBg} flex items-center justify-center shrink-0 shadow-2xs`}>
                      <IconComp className="w-5 h-5 stroke-[2.2px]" />
                    </div>
                    <span className="text-2xl sm:text-3xl font-extrabold text-white leading-none">
                      {kpi.value}
                    </span>
                  </div>

                  <div className="relative z-10 mt-auto">
                    <span className="text-xs font-medium text-slate-300 block">
                      {kpi.title}
                    </span>
                  </div>
                </div>
              );
            }

            if (kpi.type === "experts") {
              return (
                <div
                  key={kpi.id}
                  className="bg-white rounded-2xl border border-slate-100 p-4 sm:p-5 shadow-sm flex flex-col justify-between h-[105px] sm:h-[110px] transition-all hover:shadow-md"
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-9 h-9 rounded-full ${kpi.iconBg} flex items-center justify-center shrink-0 shadow-2xs`}>
                      <IconComp className="w-5 h-5 stroke-[2.2px]" />
                    </div>
                    <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-none">
                      {kpi.value}
                    </span>
                  </div>

                  <div className="flex items-center justify-between mt-auto pt-2">
                    <span className="text-xs font-semibold text-slate-500">
                      {kpi.title}
                    </span>
                    <Link to="#" className="text-[#7C3AED] text-xs font-bold hover:underline shrink-0">
                      {kpi.linkText}
                    </Link>
                  </div>
                </div>
              );
            }

            return (
              <div
                key={kpi.id}
                className="bg-white rounded-2xl border border-slate-100 p-4 sm:p-5 shadow-sm flex flex-col justify-between h-[105px] sm:h-[110px] transition-all hover:shadow-md"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-9 h-9 rounded-full ${kpi.iconBg} flex items-center justify-center shrink-0 shadow-2xs`}>
                      <IconComp className="w-5 h-5 stroke-[2.2px]" />
                    </div>
                    <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-none">
                      {kpi.value}
                    </span>
                  </div>
                  <span className="text-xs font-medium text-slate-400">
                    {kpi.percentage}
                  </span>
                </div>

                <div className="space-y-2 mt-auto">
                  <span className="text-xs font-semibold text-slate-500 block">
                    {kpi.title}
                  </span>
                  <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${kpi.progressColor} rounded-full`}
                      style={{ width: kpi.progressWidth }}
                    ></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── TABS & MAIN CONTENT CARD ── */}
        <div className="space-y-4">
          {/* Tabs Row */}
          <div className="flex items-center gap-8 border-b border-slate-100 overflow-x-auto text-xs sm:text-sm font-semibold">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`pb-3 transition-all relative whitespace-nowrap cursor-pointer ${isActive ? "text-[#2563EB] font-bold" : "text-slate-500 hover:text-slate-900"
                    }`}
                >
                  {tab.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#2563EB] rounded-full"></span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Filter Controls Row */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pt-1">
            {/* Left Filter Selects */}
            <div className="flex flex-wrap items-center gap-3">
              {/* Category Select */}
              <div className="relative">
                <select
                  value={categoryFilter}
                  onChange={(e) => setCategoryFilter(e.target.value)}
                  className="bg-white border border-slate-200 rounded-xl pl-3.5 pr-8 py-2 text-xs font-semibold text-slate-700 appearance-none outline-none focus:border-blue-500 transition-colors cursor-pointer"
                >
                  <option value="all">All Categories</option>
                  <option value="trade">International Trade</option>
                  <option value="regulatory">Regulatory Compliance</option>
                  <option value="legal">Legal Advisory</option>
                  <option value="strategy">Trade Strategy</option>
                </select>
                <ChevronDown className="w-3.5 h-3.5 absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
              </div>

              {/* Status Select */}
              <div className="relative">
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="bg-white border border-slate-200 rounded-xl pl-3.5 pr-8 py-2 text-xs font-semibold text-slate-700 appearance-none outline-none focus:border-blue-500 transition-colors cursor-pointer"
                >
                  <option value="all">All Status</option>
                  <option value="scheduled">Scheduled</option>
                  <option value="confirmed">Confirmed</option>
                  <option value="pending">Pending</option>
                  <option value="completed">Completed</option>
                </select>
                <ChevronDown className="w-3.5 h-3.5 absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
              </div>

              {/* Date Range Picker */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Select Date Range"
                  value={dateRange}
                  onChange={(e) => setDateRange(e.target.value)}
                  className="bg-white border border-slate-200 rounded-xl pl-3.5 pr-9 py-2 text-xs font-semibold text-slate-700 placeholder-slate-400 outline-none focus:border-blue-500 transition-colors w-40 sm:w-44"
                />
                <Calendar className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
              </div>
            </div>

            {/* Right Search Input & New Consultation Button */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="relative w-full sm:w-64">
                <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search consultations..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-white border border-slate-200 rounded-xl pl-9 pr-3 py-2 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>

              <Button className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold text-xs px-4 py-2 rounded-xl shadow-sm flex items-center gap-1.5 shrink-0">
                <Plus className="w-4 h-4 stroke-[2.5px]" />
                <span>New Consultation</span>
              </Button>
            </div>
          </div>
        </div>

        {/* ── MAIN CONSULTATIONS TABLE CARD ── */}
        <div className="bg-white rounded-2xl border border-slate-100 p-6 sm:p-8 shadow-sm space-y-6 overflow-hidden">
          <div className="overflow-x-auto -mx-2 sm:mx-0">
            <table className="w-full text-left border-collapse min-w-[1050px]">
              <thead>
                <tr className="text-xs sm:text-sm font-semibold text-slate-500 border-b border-slate-100 bg-[#FAFBFD]/60 h-11">
                  <th className="py-3 px-4 w-[30%] font-semibold text-slate-500">Consultation</th>
                  <th className="py-3 px-4 w-[18%] font-semibold text-slate-500">
                    <span className="inline-flex items-center gap-1.5">
                      <span>Category</span>
                      <Info className="w-3.5 h-3.5 text-slate-400" />
                    </span>
                  </th>
                  <th className="py-3 px-4 w-[20%] font-semibold text-slate-500">
                    <span className="inline-flex items-center gap-1.5">
                      <span>Expert</span>
                      <Info className="w-3.5 h-3.5 text-slate-400" />
                    </span>
                  </th>
                  <th className="py-3 px-4 w-[14%] font-semibold text-slate-500">
                    <span className="inline-flex items-center gap-1.5">
                      <span>Date & Time</span>
                      <Info className="w-3.5 h-3.5 text-slate-400" />
                    </span>
                  </th>
                  <th className="py-3 px-4 text-center w-[10%] font-semibold text-slate-500">
                    <span className="inline-flex items-center justify-center gap-1.5">
                      <span>Status</span>
                      <Info className="w-3.5 h-3.5 text-slate-400" />
                    </span>
                  </th>
                  <th className="py-3 px-4 text-right w-[8%] font-semibold text-slate-500">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100/80">
                {filteredConsultations.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="py-12 text-center text-slate-400 text-sm font-medium">
                      No consultations found for this filter selection.
                    </td>
                  </tr>
                ) : (
                  filteredConsultations.map((item) => {
                    const IconComp = item.icon;
                    return (
                      <tr key={item.id} className="hover:bg-[#F8FAFC] transition-colors h-[78px]">
                        {/* Consultation Title & Subtitle */}
                        <td className="py-4.5 px-4 align-middle">
                          <div className="flex items-center gap-3.5">
                            <div className={`w-11 h-11 rounded-full ${item.iconBg} flex items-center justify-center shrink-0 shadow-2xs`}>
                              <IconComp className="w-5 h-5" />
                            </div>
                            <div className="space-y-0.5 min-w-0">
                              <h4 className="font-bold text-slate-900 text-xs sm:text-sm flex items-center gap-1.5 truncate">
                                <span>{item.title}</span>
                                <CheckCircle2 className="w-3.5 h-3.5 fill-[#2563EB] text-white shrink-0" />
                              </h4>
                              <p className="text-xs text-slate-400 font-medium truncate">
                                {item.subtitle}
                              </p>
                            </div>
                          </div>
                        </td>

                        {/* Category */}
                        <td className="py-4.5 px-4 align-middle whitespace-nowrap">
                          <span className={`font-bold text-xs ${item.categoryColor}`}>
                            {item.category}
                          </span>
                        </td>

                        {/* Expert Avatar & Name */}
                        <td className="py-4.5 px-4 align-middle">
                          <div className="flex items-center gap-3">
                            <img
                              src={item.expertAvatar}
                              alt={item.expertName}
                              className="w-9 h-9 rounded-full object-cover border border-slate-100 shrink-0"
                            />
                            <div className="space-y-0.5 min-w-0">
                              <p className="font-bold text-slate-900 text-xs flex items-center gap-1 truncate">
                                <span>{item.expertName}</span>
                                <CheckCircle2 className="w-3 h-3 fill-[#2563EB] text-white shrink-0" />
                              </p>
                              <p className="text-[11px] text-slate-400 font-medium truncate">
                                {item.expertRole}
                              </p>
                            </div>
                          </div>
                        </td>

                        {/* Date & Time */}
                        <td className="py-4.5 px-4 align-middle whitespace-nowrap">
                          <div className="space-y-0.5 text-xs">
                            <p className="font-bold text-slate-900">{item.date}</p>
                            <p className="text-slate-400 font-medium text-[11px]">{item.time}</p>
                          </div>
                        </td>

                        {/* Status */}
                        <td className="py-4.5 px-4 align-middle text-center whitespace-nowrap">
                          <span
                            className={`inline-block px-3.5 py-1 rounded-full text-xs font-bold ${item.statusBg}`}
                          >
                            {item.status}
                          </span>
                        </td>

                        {/* Action Buttons */}
                        <td className="py-4.5 px-4 align-middle text-right whitespace-nowrap">
                          <div className="inline-flex items-center justify-end gap-1.5">
                            {item.actionVariant === "green-solid" ? (
                              <Button className="bg-[#10B981] hover:bg-[#059669] text-white font-bold text-xs px-3.5 py-1.5 rounded-lg shadow-2xs">
                                {item.actionLabel}
                              </Button>
                            ) : item.actionVariant === "blue-outline" ? (
                              <Button variant="outline" className="border-blue-500 text-blue-600 hover:bg-blue-50 font-semibold text-xs px-3.5 py-1.5 rounded-lg">
                                {item.actionLabel}
                              </Button>
                            ) : item.actionVariant === "amber-outline" ? (
                              <Button variant="outline" className="border-amber-500 text-amber-600 hover:bg-amber-50 font-semibold text-xs px-3.5 py-1.5 rounded-lg">
                                {item.actionLabel}
                              </Button>
                            ) : item.actionVariant === "emerald-outline" ? (
                              <Button variant="outline" className="border-emerald-500 text-emerald-600 hover:bg-emerald-50 font-semibold text-xs px-3.5 py-1.5 rounded-lg">
                                {item.actionLabel}
                              </Button>
                            ) : (
                              <Button variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-50 font-semibold text-xs px-3.5 py-1.5 rounded-lg">
                                {item.actionLabel}
                              </Button>
                            )}

                            <button className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors">
                              <MoreVertical className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>

          {/* TABLE FOOTER / PAGINATION */}
          <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-slate-100 text-xs">
            <span className="text-slate-500 font-semibold">
              Showing 1 to {filteredConsultations.length} of 14 consultations
            </span>

            <div className="flex items-center gap-1.5 self-center">
              <button className="w-7 h-7 rounded-lg border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50 font-semibold transition-colors">
                «
              </button>
              <button className="w-7 h-7 rounded-lg bg-[#2563EB] text-white flex items-center justify-center font-bold">
                1
              </button>
              <button className="w-7 h-7 rounded-lg border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50 font-semibold transition-colors">
                2
              </button>
              <button className="w-7 h-7 rounded-lg border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50 font-semibold transition-colors">
                3
              </button>
              <button className="w-7 h-7 rounded-lg border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50 font-semibold transition-colors">
                »
              </button>
            </div>
          </div>
        </div>

        {/* ── BOTTOM BANNER: NEED A CUSTOM SOLUTION? ── */}
        <div className="bg-gradient-to-r from-[#1E293B] via-[#473B1B] to-[#B38029] text-white rounded-2xl p-6 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-white/10 text-white flex items-center justify-center shrink-0 border border-white/10">
              <Headphones className="w-6 h-6" />
            </div>
            <div className="space-y-0.5">
              <h3 className="font-extrabold text-white text-base sm:text-lg">
                Need a Custom Solution?
              </h3>
              <p className="text-xs text-slate-200 font-medium">
                Our experts are here to help you grow globally.
              </p>
            </div>
          </div>

          <Button className="bg-[#D4A64A] hover:bg-[#C5973A] text-white font-bold text-xs px-6 py-3 rounded-xl shadow-md flex items-center gap-1.5 shrink-0 cursor-pointer">
            <span>Contact Our Team</span>
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* ── FOOTER BAR ── */}
      <footer className="w-full border-t border-slate-200/60 pt-6 mt-8 pb-2 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] sm:text-xs text-slate-400 font-medium max-w-[1600px] mx-auto">
        <div>© 2025 AECCI Global. All Rights Reserved.</div>
        <div className="flex items-center gap-4 text-slate-500 font-semibold">
          <span className="flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-blue-500" />
            <span>Secure Platform</span>
          </span>
          <span>|</span>
          <span className="flex items-center gap-1">
            <User className="w-3.5 h-3.5 text-amber-500" />
            <span>Expert Network</span>
          </span>
          <span>|</span>
          <span className="flex items-center gap-1">
            <Globe className="w-3.5 h-3.5 text-emerald-500" />
            <span>Global Reach</span>
          </span>
        </div>
        <div className="flex items-center gap-4">
          <Link to="#" className="hover:text-slate-600 transition-colors">
            Terms of Service
          </Link>
          <span>|</span>
          <Link to="#" className="hover:text-slate-600 transition-colors">
            Privacy Policy
          </Link>
          <span>|</span>
          <Link to="#" className="hover:text-slate-600 transition-colors">
            Help Center
          </Link>
        </div>
      </footer>
    </Main>
  );
}
