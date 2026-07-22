import { useState } from "react";
import { Main } from "@/components/layout/main";
import { Button } from "@/components/ui/button";
import {
  Plus,
  Building2,
  Rocket,
  FlaskConical,
  ChevronDown,
  Search,
} from "lucide-react";
import { Link } from "react-router-dom";

// Crisp SVG Country Flag Components for cross-platform/browser rendering
function UAEFlag() {
  return (
    <svg className="w-5 h-3.5 rounded-[2px] shadow-2xs border border-slate-200/60 shrink-0 inline-block" viewBox="0 0 12 6">
      <rect width="12" height="2" fill="#00732F" />
      <rect y="2" width="12" height="2" fill="#FFFFFF" />
      <rect y="4" width="12" height="2" fill="#000000" />
      <rect width="3" height="6" fill="#C8102E" />
    </svg>
  );
}

function GermanyFlag() {
  return (
    <svg className="w-5 h-3.5 rounded-[2px] shadow-2xs border border-slate-200/60 shrink-0 inline-block" viewBox="0 0 5 3">
      <rect width="5" height="1" fill="#000000" />
      <rect y="1" width="5" height="1" fill="#DD0000" />
      <rect y="2" width="5" height="1" fill="#FFCE00" />
    </svg>
  );
}

function SingaporeFlag() {
  return (
    <svg className="w-5 h-3.5 rounded-[2px] shadow-2xs border border-slate-200/60 shrink-0 inline-block" viewBox="0 0 18 12">
      <rect width="18" height="6" fill="#ED2939" />
      <rect y="6" width="18" height="6" fill="#FFFFFF" />
      <circle cx="3.8" cy="3" r="1.8" fill="#FFFFFF" />
      <circle cx="4.2" cy="3" r="1.8" fill="#ED2939" />
    </svg>
  );
}

function USAFlag() {
  return (
    <svg className="w-5 h-3.5 rounded-[2px] shadow-2xs border border-slate-200/60 shrink-0 inline-block" viewBox="0 0 190 100">
      <rect width="190" height="100" fill="#BB133E" />
      <path d="M0,15.38H190M0,30.77H190M0,46.15H190M0,61.54H190M0,76.92H190M0,92.31H190" stroke="#FFFFFF" strokeWidth="7.69" />
      <rect width="76" height="53.85" fill="#002147" />
    </svg>
  );
}

function UKFlag() {
  return (
    <svg className="w-5 h-3.5 rounded-[2px] shadow-2xs border border-slate-200/60 shrink-0 inline-block" viewBox="0 0 60 30">
      <clipPath id="uk_s_opp"><path d="M0,0 v30 h60 v-30 z"/></clipPath>
      <clipPath id="uk_t_opp"><path d="M30,15 m-30,0 h60 v30 h-60 z M30,15 m0,-15 v30 h60 v-30 z"/></clipPath>
      <g clipPath="url(#uk_s_opp)">
        <path d="M0,0 L60,30 M60,0 L0,30" stroke="#ffffff" strokeWidth="6"/>
        <path d="M0,0 L60,30 M60,0 L0,30" stroke="#012169" strokeWidth="4"/>
        <path d="M0,0 L60,30 M60,0 L0,30" stroke="#C8102E" strokeWidth="2" clipPath="url(#uk_t_opp)"/>
        <path d="M30,0 v30 M0,15 h60" stroke="#ffffff" strokeWidth="10"/>
        <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6"/>
      </g>
    </svg>
  );
}

export default function AgentOpportunitiesPage() {
  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [industryFilter, setIndustryFilter] = useState("all");
  const [countryFilter, setCountryFilter] = useState("all");
  const [stageFilter, setStageFilter] = useState("all");

  const tabs = [
    { id: "all", label: "All Opportunities" },
    { id: "my", label: "My Opportunities" },
    { id: "bookmarked", label: "Bookmarked" },
    { id: "archived", label: "Archived" },
  ];

  const kpiData = [
    {
      id: 1,
      value: "24",
      title: "Total Opportunities",
      change: "+12 this month",
      icon: Building2,
      iconBg: "bg-[#E0F2FE] text-[#2563EB]",
      changeColor: "text-emerald-600",
    },
    {
      id: 2,
      value: "9",
      title: "In The Works",
      change: "+3 this week",
      icon: Rocket,
      iconBg: "bg-[#DCFCE7] text-[#16A34A]",
      changeColor: "text-emerald-600",
    },
    {
      id: 3,
      value: "12",
      title: "In Discussion",
      change: "+2 this week",
      icon: FlaskConical,
      iconBg: "bg-[#FFEDD5] text-[#EA580C]",
      changeColor: "text-amber-600",
    },
    {
      id: 4,
      value: "7",
      title: "Converted",
      change: "+1 this week",
      icon: FlaskConical,
      iconBg: "bg-[#CCFBF1] text-[#0D9488]",
      changeColor: "text-emerald-600",
    },
  ];

  const opportunitiesData = [
    {
      id: 1,
      dotColor: "bg-[#2563EB]",
      title: "Industrial Equipment Supply",
      subtitle: "Sourcing industrial machinery & related fast markets..",
      industry: "Machinery",
      industryBg: "bg-[#E0F2FE] text-[#0284C7]",
      country: "UAE",
      renderFlag: UAEFlag,
      status: "In Discussion",
      statusBg: "bg-[#E0F2FE] text-[#0284C7]",
      dueDate: "22 May 2025",
      tabType: "all",
    },
    {
      id: 2,
      dotColor: "bg-[#10B981]",
      title: "Organic Food Import Partnership",
      subtitle: "Importing organic food products to European market",
      industry: "Food & Beverages",
      industryBg: "bg-[#CCFBF1] text-[#0D9488]",
      country: "Germany",
      renderFlag: GermanyFlag,
      status: null,
      statusBg: "",
      dueDate: "28 May 2025",
      tabType: "my",
    },
    {
      id: 3,
      dotColor: "bg-[#F59E0B]",
      title: "Pharma Distributors Alliance",
      subtitle: "Distribution partnership for pharmaceutical products",
      industry: "Pharmaceuticals",
      industryBg: "bg-[#E0F2FE] text-[#0284C7]",
      country: "Singapore",
      renderFlag: SingaporeFlag,
      status: null,
      statusBg: "",
      dueDate: "27 May 2025",
      tabType: "bookmarked",
    },
    {
      id: 4,
      dotColor: "bg-[#8B5CF6]",
      title: "Textile Export Opportunity",
      subtitle: "Bulk textile exports to USA market",
      industry: "Textiles",
      industryBg: "bg-[#E0F2FE] text-[#0284C7]",
      country: "USA",
      renderFlag: USAFlag,
      status: null,
      statusBg: "",
      dueDate: "25 May 2025",
      tabType: "all",
    },
    {
      id: 5,
      dotColor: "bg-[#2563EB]",
      title: "Technology Collaboration",
      subtitle: "Tech partnership for digital transformation",
      industry: "Technology",
      industryBg: "bg-[#E0F2FE] text-[#0284C7]",
      country: "UK",
      renderFlag: UKFlag,
      status: null,
      statusBg: "",
      dueDate: "24 May 2025",
      tabType: "my",
    },
  ];

  const filteredOpportunities = opportunitiesData.filter((item) => {
    const matchesTab =
      activeTab === "all" ||
      (activeTab === "my" && item.tabType === "my") ||
      (activeTab === "bookmarked" && item.tabType === "bookmarked") ||
      (activeTab === "archived" && item.tabType === "archived");

    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.industry.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesTab && matchesSearch;
  });

  const topCountries = [
    { name: "UAE", count: 6, renderFlag: UAEFlag },
    { name: "Germany", count: 5, renderFlag: GermanyFlag },
    { name: "USA", count: 4, renderFlag: USAFlag },
    { name: "Singapore", count: 3, renderFlag: SingaporeFlag },
    { name: "UK", count: 2, renderFlag: UKFlag },
  ];

  return (
    <Main fluid className="bg-[#F8FAFC] min-h-screen p-6 sm:p-8 space-y-6 text-left flex flex-col justify-between">
      <div className="space-y-6 max-w-[1600px] mx-auto w-full">
        {/* ── PAGE HEADER ── */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Opportunities
            </h1>
            <p className="text-xs sm:text-sm text-slate-400 font-medium mt-1">
              Discover and manage global business opportunities
            </p>
          </div>

          <Button className="bg-[#D4A64A] hover:bg-[#C5973A] text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-xl shadow-sm flex items-center gap-1.5 self-start sm:self-center">
            <Plus className="w-4 h-4 stroke-[2.5px]" />
            <span>New Opportunity</span>
          </Button>
        </div>

        {/* ── FILTER CONTROLS ROW ── */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-3">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {/* Category Select */}
            <div className="relative">
              <select
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                className="w-full bg-white border border-slate-200 rounded-xl pl-3.5 pr-8 py-2 text-xs font-semibold text-slate-700 appearance-none outline-none focus:border-blue-500 transition-colors cursor-pointer"
              >
                <option value="all">All Categories</option>
                <option value="trade">Trade Sourcing</option>
                <option value="import">Import / Export</option>
                <option value="partnership">Strategic Partnership</option>
              </select>
              <ChevronDown className="w-3.5 h-3.5 absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
            </div>

            {/* Industry Select */}
            <div className="relative">
              <select
                value={industryFilter}
                onChange={(e) => setIndustryFilter(e.target.value)}
                className="w-full bg-white border border-slate-200 rounded-xl pl-3.5 pr-8 py-2 text-xs font-semibold text-slate-700 appearance-none outline-none focus:border-blue-500 transition-colors cursor-pointer"
              >
                <option value="all">All Industries</option>
                <option value="machinery">Machinery</option>
                <option value="fmcg">Food & Beverages</option>
                <option value="pharma">Pharmaceuticals</option>
                <option value="textiles">Textiles</option>
                <option value="tech">Technology</option>
              </select>
              <ChevronDown className="w-3.5 h-3.5 absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
            </div>

            {/* Country Select */}
            <div className="relative">
              <select
                value={countryFilter}
                onChange={(e) => setCountryFilter(e.target.value)}
                className="w-full bg-white border border-slate-200 rounded-xl pl-3.5 pr-8 py-2 text-xs font-semibold text-slate-700 appearance-none outline-none focus:border-blue-500 transition-colors cursor-pointer"
              >
                <option value="all">All Countries</option>
                <option value="uae">UAE</option>
                <option value="germany">Germany</option>
                <option value="singapore">Singapore</option>
                <option value="usa">USA</option>
                <option value="uk">UK</option>
              </select>
              <ChevronDown className="w-3.5 h-3.5 absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
            </div>

            {/* Stage Select */}
            <div className="relative">
              <select
                value={stageFilter}
                onChange={(e) => setStageFilter(e.target.value)}
                className="w-full bg-white border border-slate-200 rounded-xl pl-3.5 pr-8 py-2 text-xs font-semibold text-slate-700 appearance-none outline-none focus:border-blue-500 transition-colors cursor-pointer"
              >
                <option value="all">All Stages</option>
                <option value="new">New</option>
                <option value="indiscussion">In Discussion</option>
                <option value="negotiation">Negotiation</option>
                <option value="converted">Converted</option>
              </select>
              <ChevronDown className="w-3.5 h-3.5 absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
            </div>
          </div>

          {/* Search Input */}
          <div className="relative w-full lg:w-64">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search opportunities..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-slate-200 rounded-xl pl-9 pr-3 py-2 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>
        </div>

        {/* ── KPI SECTION (4 EQUAL CARDS) ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {kpiData.map((kpi) => {
            const IconComp = kpi.icon;
            return (
              <div
                key={kpi.id}
                className="bg-white rounded-2xl border border-slate-100 p-5 sm:p-6 shadow-sm flex items-center gap-4 transition-all hover:shadow-md"
              >
                <div
                  className={`w-12 h-12 rounded-2xl ${kpi.iconBg} flex items-center justify-center shrink-0 shadow-xs`}
                >
                  <IconComp className="w-6 h-6 stroke-[2.2px]" />
                </div>
                <div className="space-y-0.5">
                  <span className="text-2xl font-extrabold text-slate-900 leading-none block">
                    {kpi.value}
                  </span>
                  <span className="text-xs font-bold text-slate-500 block">
                    {kpi.title}
                  </span>
                  <span className={`text-xs font-semibold ${kpi.changeColor} block mt-0.5`}>
                    {kpi.change}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── MAIN CONTENT GRID: LEFT TABLE CARD (~73%) & RIGHT SIDEBAR (~27%) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* ── LEFT COLUMN: OPPORTUNITIES TABLE CARD ── */}
          <div className="lg:col-span-8 xl:col-span-9 bg-white rounded-2xl border border-slate-100 p-6 sm:p-8 shadow-sm space-y-6 overflow-hidden">
            {/* Status Tabs */}
            <div className="flex items-center gap-8 border-b border-slate-100 overflow-x-auto text-xs sm:text-sm font-semibold">
              {tabs.map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`pb-3 transition-all relative whitespace-nowrap cursor-pointer ${
                      isActive ? "text-[#2563EB] font-bold" : "text-slate-500 hover:text-slate-900"
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

            {/* Table Container */}
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[850px]">
                <tbody className="divide-y divide-slate-100">
                  {filteredOpportunities.length === 0 ? (
                    <tr>
                      <td colSpan={6} className="py-12 text-center text-slate-400 text-sm font-medium">
                        No opportunities found for this status tab.
                      </td>
                    </tr>
                  ) : (
                    filteredOpportunities.map((item) => {
                      const FlagComp = item.renderFlag;
                      return (
                        <tr key={item.id} className="hover:bg-slate-50/50 transition-colors">
                          {/* Left Dot + Opportunity Title & Subtitle */}
                          <td className="py-4 pl-2 pr-4 min-w-[280px]">
                            <div className="flex items-start gap-3">
                              <span className={`w-2.5 h-2.5 rounded-full ${item.dotColor} shrink-0 mt-1.5`}></span>
                              <div className="space-y-0.5 min-w-0">
                                <h4 className="font-bold text-slate-900 text-xs sm:text-sm truncate">
                                  {item.title}
                                </h4>
                                <p className="text-xs text-slate-400 font-medium truncate">
                                  {item.subtitle}
                                </p>
                              </div>
                            </div>
                          </td>

                          {/* Industry Badge */}
                          <td className="py-4 px-3 whitespace-nowrap">
                            <span
                              className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${item.industryBg}`}
                            >
                              {item.industry}
                            </span>
                          </td>

                          {/* Country */}
                          <td className="py-4 px-3 text-xs font-bold text-slate-900 whitespace-nowrap">
                            <span className="inline-flex items-center gap-2">
                              <FlagComp />
                              <span>{item.country}</span>
                            </span>
                          </td>

                          {/* Status Pill (if present) */}
                          <td className="py-4 px-3 text-center whitespace-nowrap">
                            {item.status ? (
                              <span
                                className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${item.statusBg}`}
                              >
                                {item.status}
                              </span>
                            ) : null}
                          </td>

                          {/* Due Date */}
                          <td className="py-4 px-3 text-xs font-semibold text-slate-800 whitespace-nowrap">
                            {item.dueDate}
                          </td>

                          {/* Action Button */}
                          <td className="py-4 pr-2 text-right whitespace-nowrap">
                            <Link
                              to="#"
                              className="inline-block bg-white hover:bg-slate-50 border border-slate-200 text-slate-800 font-semibold text-xs px-4 py-1.5 rounded-lg transition-colors shadow-2xs"
                            >
                              View Details
                            </Link>
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
                Showing 1 to {filteredOpportunities.length} of 24 opportunities
              </span>

              <div className="flex items-center gap-1.5 self-center">
                <button className="w-7 h-7 rounded-lg border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50 font-semibold transition-colors">
                  «
                </button>
                <button className="w-7 h-7 rounded-lg bg-[#0B1727] text-white flex items-center justify-center font-bold">
                  1
                </button>
                <button className="w-7 h-7 rounded-lg border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50 font-semibold transition-colors">
                  2
                </button>
                <button className="w-7 h-7 rounded-lg border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50 font-semibold transition-colors">
                  3
                </button>
                <button className="w-7 h-7 rounded-lg border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50 font-semibold transition-colors">
                  4
                </button>
                <button className="w-7 h-7 rounded-lg border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50 font-semibold transition-colors">
                  5
                </button>
                <button className="w-7 h-7 rounded-lg border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50 font-semibold transition-colors">
                  »
                </button>
              </div>
            </div>
          </div>

          {/* ── RIGHT COLUMN: SIDEBAR CARDS (~27%) ── */}
          <div className="lg:col-span-4 xl:col-span-3 space-y-6">
            
            {/* Card 1: Opportunity Insights (Donut Chart) */}
            <div className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm space-y-6">
              <h3 className="font-bold text-slate-900 text-base">
                Opportunity Insights
              </h3>

              {/* Donut Chart Container */}
              <div className="flex flex-col items-center justify-center py-2 relative">
                <div className="relative w-44 h-44 flex items-center justify-center">
                  <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                    {/* Segment 1: New (38%) - Blue */}
                    <circle
                      cx="50"
                      cy="50"
                      r="38"
                      stroke="#2563EB"
                      strokeWidth="12"
                      strokeDasharray="90.7 148"
                      strokeDashoffset="0"
                      fill="none"
                    />
                    {/* Segment 2: In Discussion (38%) - Green */}
                    <circle
                      cx="50"
                      cy="50"
                      r="38"
                      stroke="#10B981"
                      strokeWidth="12"
                      strokeDasharray="90.7 148"
                      strokeDashoffset="-90.7"
                      fill="none"
                    />
                    {/* Segment 3: Negotiation (12%) - Amber */}
                    <circle
                      cx="50"
                      cy="50"
                      r="38"
                      stroke="#F59E0B"
                      strokeWidth="12"
                      strokeDasharray="28.6 210.1"
                      strokeDashoffset="-181.4"
                      fill="none"
                    />
                    {/* Segment 4: Converted (12%) - Purple */}
                    <circle
                      cx="50"
                      cy="50"
                      r="38"
                      stroke="#8B5CF6"
                      strokeWidth="12"
                      strokeDasharray="28.6 210.1"
                      strokeDashoffset="-210"
                      fill="none"
                    />
                  </svg>

                  {/* Donut Center Label */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                    <span className="text-3xl font-extrabold text-slate-900 leading-none">
                      24
                    </span>
                    <span className="text-xs font-semibold text-slate-400 mt-1">
                      Total
                    </span>
                  </div>
                </div>

                {/* Legend Below Chart */}
                <div className="w-full space-y-2.5 pt-4 border-t border-slate-100 text-xs mt-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-xs bg-[#2563EB]"></span>
                      <span className="font-semibold text-slate-700">New</span>
                    </div>
                    <span className="font-bold text-slate-900">9 (38%)</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-xs bg-[#10B981]"></span>
                      <span className="font-semibold text-slate-700">In Discussion</span>
                    </div>
                    <span className="font-bold text-slate-900">9 (38%)</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-xs bg-[#F59E0B]"></span>
                      <span className="font-semibold text-slate-700">Negotiation</span>
                    </div>
                    <span className="font-bold text-slate-900">3 (12%)</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-xs bg-[#8B5CF6]"></span>
                      <span className="font-semibold text-slate-700">Converted</span>
                    </div>
                    <span className="font-bold text-slate-900">3 (12%)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2: Top Countries */}
            <div className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm space-y-4">
              <h3 className="font-bold text-slate-900 text-base">
                Top Countries
              </h3>

              <div className="space-y-3">
                {topCountries.map((c) => {
                  const FlagComp = c.renderFlag;
                  return (
                    <div
                      key={c.name}
                      className="flex items-center justify-between py-1 border-b border-slate-50 last:border-none text-xs font-semibold"
                    >
                      <div className="flex items-center gap-2.5">
                        <FlagComp />
                        <span className="text-slate-800">{c.name}</span>
                      </div>
                      <span className="text-slate-500 font-bold">{c.count}</span>
                    </div>
                  );
                })}
              </div>

              <button className="w-full bg-[#8C6E44] hover:bg-[#785E38] text-white font-bold text-xs py-2.5 rounded-xl shadow-xs transition-colors cursor-pointer mt-2">
                View All Opportunities
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* ── FOOTER BAR ── */}
      <footer className="w-full border-t border-slate-200/60 pt-6 mt-8 pb-2 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] sm:text-xs text-slate-400 font-medium max-w-[1600px] mx-auto">
        <div>© 2025 AECCI Global. All Rights Reserved.</div>
        <div className="flex items-center gap-4">
          <Link to="#" className="hover:text-slate-600 transition-colors">
            Terms of Service
          </Link>
          <Link to="#" className="hover:text-slate-600 transition-colors">
            Privacy Policy
          </Link>
          <Link to="#" className="hover:text-slate-600 transition-colors">
            Cookie Policy
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <Link to="#" className="hover:text-slate-600 transition-colors">
            Support
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
