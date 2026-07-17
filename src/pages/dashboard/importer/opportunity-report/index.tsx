import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Main } from "@/components/layout/main";
import {
  Globe,
  TrendingUp,
  FileText,
  Bookmark,
  Download,
  Search,
  ChevronDown,
  RotateCcw,
  Bell,
  MapPin,
  Building2,
  ShieldCheck,
  Crown,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  BarChart3,
} from "lucide-react";

// ─── Data Definitions ───

const COUNTRIES = [
  "All Countries",
  "United States",
  "India",
  "European Union",
  "China",
  "Middle East",
  "Africa",
  "Latin America",
];

const INDUSTRIES = [
  "All Industries",
  "Machinery & Equipment",
  "Electronic Products",
  "Pharmaceuticals",
  "Textiles & Apparel",
  "Food & Beverages",
  "Furniture & Home Decor",
  "Renewable Energy",
];

const REPORT_TYPES = [
  "All Report Types",
  "Market Outlook",
  "Opportunity Report",
  "Industry Analysis",
  "Trade Report",
];

const TIMEFRAMES = [
  "Last 12 Months",
  "Last 6 Months",
  "Last 30 Days",
  "This Year",
];

const INITIAL_REPORTS = [
  {
    id: "rep-1",
    title: "U.S. Market Overview 2026",
    desc: "Comprehensive analysis of market trends, demand forecast, and opportunities in the United States.",
    country: "United States",
    flag: "https://flagcdn.com/w40/us.png",
    industry: "All Industries",
    type: "Market Outlook",
    date: "22 May 2026",
  },
  {
    id: "rep-2",
    title: "India Export Opportunities in EU",
    desc: "Key sectors and opportunities for Indian exporters in European Union markets.",
    country: "European Union",
    flag: "https://flagcdn.com/w40/eu.png",
    industry: "All Industries",
    type: "Opportunity Report",
    date: "19 May 2026",
  },
  {
    id: "rep-3",
    title: "Global Textile & Apparel Trade Analysis 2026",
    desc: "Insights on global trade flows, key exporters, importers, and pricing trends.",
    country: "Global",
    flag: "globe",
    industry: "Textiles & Apparel",
    type: "Industry Analysis",
    date: "15 May 2026",
  },
  {
    id: "rep-4",
    title: "Middle East Construction Market Outlook",
    desc: "Growth prospects, major projects, and import demand in GCC countries.",
    country: "Middle East",
    flag: "globe",
    industry: "Construction Materials",
    type: "Market Outlook",
    date: "12 May 2026",
  },
  {
    id: "rep-5",
    title: "Pharmaceuticals Market in Africa",
    desc: "Demand analysis, regulatory insights, and trade opportunities in African markets.",
    country: "Africa",
    flag: "globe",
    industry: "Pharmaceuticals",
    type: "Opportunity Report",
    date: "10 May 2026",
  },
  {
    id: "rep-6",
    title: "China Machinery Import Trends",
    desc: "Detailed insights into China's machinery imports, suppliers, and price trends.",
    country: "China",
    flag: "https://flagcdn.com/w40/cn.png",
    industry: "Machinery & Equipment",
    type: "Trade Outlook",
    date: "08 May 2026",
  },
  {
    id: "rep-7",
    title: "Latin America Food & Beverages Market",
    desc: "Market size, growth drivers, and opportunities across LATAM region.",
    country: "Latin America",
    flag: "globe",
    industry: "Food & Beverages",
    type: "Market Outlook",
    date: "05 May 2026",
  },
  {
    id: "rep-8",
    title: "Renewable Energy Market Report 2026",
    desc: "Global renewable energy market trends, investments, and forecasts.",
    country: "Global",
    flag: "globe",
    industry: "Renewable Energy",
    type: "Custom Report",
    date: "02 May 2026",
  },
];

const POPULAR_REPORTS = [
  { rank: 1, title: "Global Trade Outlook 2026", downloads: "10,842 downloads" },
  { rank: 2, title: "India Export Opportunities Report 2026", downloads: "9,876 downloads" },
  { rank: 3, title: "U.S. Market Overview 2026", downloads: "8,532 downloads" },
  { rank: 4, title: "Middle East Market Overview", downloads: "7,125 downloads" },
  { rank: 5, title: "Global Textile Trade Analysis", downloads: "6,342 downloads" },
];

const RECENT_DOWNLOADS = [
  { title: "U.S. Market Overview 2026", date: "20 May 2026" },
  { title: "India Export Opportunities in EU", date: "19 May 2026" },
  { title: "Global Trade Outlook 2026", date: "17 May 2026" },
  { title: "Middle East Construction Market Outlook", date: "15 May 2026" },
  { title: "Pharmaceuticals Market in Africa", date: "12 May 2026" },
];

export default function ImporterOpportunityReportPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("All Countries");
  const [selectedIndustry, setSelectedIndustry] = useState("All Industries");
  const [selectedType, setSelectedType] = useState("All Report Types");
  const [selectedTimeframe, setSelectedTimeframe] = useState("Last 12 Months");

  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>([]);
  const [reports, setReports] = useState(INITIAL_REPORTS);
  const [filteredReports, setFilteredReports] = useState(INITIAL_REPORTS);
  const [isDesktop, setIsDesktop] = useState(typeof window !== "undefined" ? window.innerWidth >= 1024 : true);

  // Responsive logic
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Filter Logic
  useEffect(() => {
    let list = reports;

    // Search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter(
        (r) =>
          r.title.toLowerCase().includes(q) ||
          r.desc.toLowerCase().includes(q) ||
          r.industry.toLowerCase().includes(q) ||
          r.country.toLowerCase().includes(q)
      );
    }

    // Country
    if (selectedCountry !== "All Countries") {
      list = list.filter((r) => r.country === selectedCountry);
    }

    // Industry
    if (selectedIndustry !== "All Industries") {
      list = list.filter((r) => r.industry === selectedIndustry || r.industry === "All Industries");
    }

    // Type
    if (selectedType !== "All Report Types") {
      list = list.filter((r) => r.type === selectedType);
    }

    setFilteredReports(list);
  }, [searchQuery, selectedCountry, selectedIndustry, selectedType, reports]);

  const handleResetFilters = () => {
    setSearchQuery("");
    setSelectedCountry("All Countries");
    setSelectedIndustry("All Industries");
    setSelectedType("All Report Types");
    setSelectedTimeframe("Last 12 Months");
  };

  const toggleBookmark = (id: string) => {
    if (bookmarkedIds.includes(id)) {
      setBookmarkedIds(bookmarkedIds.filter((bId) => bId !== id));
    } else {
      setBookmarkedIds([...bookmarkedIds, id]);
    }
  };

  const getReportTypeBadge = (type: string) => {
    switch (type) {
      case "Market Outlook":
        return "bg-blue-50 text-blue-700 border border-blue-200";
      case "Opportunity Report":
        return "bg-green-50 text-green-700 border border-green-200";
      case "Industry Analysis":
        return "bg-purple-50 text-purple-700 border border-purple-200";
      case "Trade Outlook":
        return "bg-orange-50 text-orange-700 border border-orange-200";
      case "Custom Report":
        return "bg-pink-50 text-pink-700 border border-pink-200";
      default:
        return "bg-slate-50 text-slate-700 border border-slate-200";
    }
  };

  return (
    <Main fluid className="bg-[#F5F7FA] min-h-screen p-6 space-y-6 text-left">
      {/* ── BREADCRUMB + PAGE HEADER ── */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          {/* Breadcrumb */}
          <div className="flex items-center gap-1.5 text-[13px] text-[#64748B] mb-2 font-medium">
            <Link to="/importer/dashboard" className="hover:text-[#2563EB] transition-colors">
              Dashboard
            </Link>
            <span>&gt;</span>
            <span className="text-[#0B1B3D] font-semibold">Market Reports</span>
          </div>

          {/* Page Title */}
          <h1 className="text-[28px] font-bold text-[#0B1B3D] tracking-tight leading-none">
            Market Reports
          </h1>
          <p className="text-[15px] text-[#64748B] mt-2 font-medium">
            Stay ahead with the latest market intelligence, industry analysis, and trade insights.
          </p>
        </div>

        {/* Subscribe to Reports Button */}
        <button
          id="subscribe-reports-btn"
          className="flex items-center gap-2 border border-[#2563EB] hover:bg-blue-50/50 bg-white text-[#2563EB] text-[13px] font-bold py-2.5 px-4 rounded-lg shadow-sm transition-all cursor-pointer w-fit self-start md:self-center"
        >
          <Bell className="size-4 text-[#2563EB]" />
          <span>Subscribe to Reports</span>
        </button>
      </div>

      {/* ── SEARCH & FILTERS BAR ── */}
      <div className="bg-white border border-[#E5E7EB] rounded-[12px] p-5 shadow-[0_1px_3px_rgba(0,0,0,0.03)] space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Search bar */}
          <div className="relative">
            <Search className="absolute left-3.5 top-3.5 size-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search reports by title, country, industry..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 border border-[#E5E7EB] rounded-lg text-sm font-semibold text-[#0B1B3D] placeholder-gray-400 focus:outline-none focus:border-[#2563EB] transition-colors"
            />
          </div>

          {/* Country filter */}
          <div className="relative">
            <select
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
              className="w-full px-3.5 py-2.5 border border-[#E5E7EB] rounded-lg text-sm font-bold text-[#0B1B3D] bg-white appearance-none cursor-pointer focus:outline-none focus:border-[#2563EB] transition-colors"
            >
              {COUNTRIES.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-3.5 top-3.5 size-4 text-gray-500 pointer-events-none stroke-[2.5px]" />
          </div>

          {/* Industry filter */}
          <div className="relative">
            <select
              value={selectedIndustry}
              onChange={(e) => setSelectedIndustry(e.target.value)}
              className="w-full px-3.5 py-2.5 border border-[#E5E7EB] rounded-lg text-sm font-bold text-[#0B1B3D] bg-white appearance-none cursor-pointer focus:outline-none focus:border-[#2563EB] transition-colors"
            >
              {INDUSTRIES.map((i) => (
                <option key={i} value={i}>
                  {i}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-3.5 top-3.5 size-4 text-gray-500 pointer-events-none stroke-[2.5px]" />
          </div>

          {/* Type filter */}
          <div className="relative">
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="w-full px-3.5 py-2.5 border border-[#E5E7EB] rounded-lg text-sm font-bold text-[#0B1B3D] bg-white appearance-none cursor-pointer focus:outline-none focus:border-[#2563EB] transition-colors"
            >
              {REPORT_TYPES.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-3.5 top-3.5 size-4 text-gray-500 pointer-events-none stroke-[2.5px]" />
          </div>
        </div>

        {/* Date Range & Reset Filters */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-gray-100 pt-4">
          <div className="flex flex-wrap items-center gap-3">
            {/* Date range picker button */}
            <button className="flex items-center gap-1.5 border border-[#E5E7EB] hover:bg-gray-50 bg-white text-[#0B1B3D] text-sm font-bold py-2 px-3.5 rounded-lg shadow-sm transition-colors cursor-pointer">
              <span>Date Range</span>
              <ChevronDown className="size-4 text-gray-500" />
            </button>

            {/* Timeframe dropdown */}
            <div className="relative">
              <select
                value={selectedTimeframe}
                onChange={(e) => setSelectedTimeframe(e.target.value)}
                className="px-3.5 pr-8 py-2 border border-[#E5E7EB] rounded-lg text-sm font-bold text-[#0B1B3D] bg-white appearance-none cursor-pointer focus:outline-none focus:border-[#2563EB] transition-colors"
              >
                {TIMEFRAMES.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-2.5 top-2.5 size-3.5 text-gray-500 pointer-events-none stroke-[2px]" />
            </div>
          </div>

          {/* Reset Filters button */}
          <button
            onClick={handleResetFilters}
            className="flex items-center gap-1 text-[#2563EB] hover:text-blue-700 text-xs font-bold transition-colors cursor-pointer"
          >
            <RotateCcw className="size-3.5" />
            <span>Reset Filters</span>
          </button>
        </div>
      </div>

      {/* ── KPI STATS ROW (5 Cards) ── */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: isDesktop ? "repeat(5, 1fr)" : "repeat(auto-fit, minmax(180px, 1fr))",
          gap: "16px",
          width: "100%",
        }}
      >
        {[
          { label: "Global Reports", count: 124, icon: <Globe className="size-6 text-blue-600" />, iconBg: "bg-blue-50" },
          { label: "Country Reports", count: 86, icon: <MapPin className="size-6 text-emerald-600" />, iconBg: "bg-emerald-50" },
          { label: "Industry Reports", count: 213, icon: <Building2 className="size-6 text-purple-600" />, iconBg: "bg-purple-50" },
          { label: "Trade Reports", count: 97, icon: <BarChart3 className="size-6 text-orange-500" />, iconBg: "bg-orange-50" },
          { label: "Custom Reports", count: 15, icon: <FileText className="size-6 text-pink-500" />, iconBg: "bg-pink-50" },
        ].map((item, idx) => (
          <div
            key={idx}
            className="bg-white border border-[#E5E7EB] rounded-[12px] p-5 shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:shadow-md transition-shadow flex flex-col items-center text-center w-full"
          >
            <div className={`w-12 h-12 rounded-full ${item.iconBg} flex items-center justify-center shrink-0`}>
              {item.icon}
            </div>
            <span className="block text-[28px] font-extrabold text-[#0B1B3D] mt-3.5 leading-none">
              {item.count}
            </span>
            <span className="block text-[13px] text-[#64748B] font-bold uppercase tracking-wider mt-2.5">
              {item.label}
            </span>
          </div>
        ))}
      </div>

      {/* ── TWO-COLUMN MAIN CONTENT GRID ── */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: isDesktop ? "7fr 3fr" : "1fr",
          gap: "20px",
          width: "100%",
        }}
      >
        {/* LEFT COLUMN: Reports List Table */}
        <div
          className="space-y-6"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "24px",
            width: "100%",
          }}
        >
          {/* Latest Reports List container */}
          <div className="bg-white border border-[#E5E7EB] rounded-[12px] shadow-[0_1px_3px_rgba(0,0,0,0.05)] overflow-hidden">
            {/* Header section */}
            <div className="p-5 border-b border-gray-100 flex items-center justify-between">
              <h3 className="text-[16px] font-bold text-[#0B1B3D]">
                Latest Market Reports
              </h3>
            </div>

            {/* Reports List Table */}
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-left min-w-[700px]">
                <thead>
                  <tr className="bg-slate-50/75 border-b border-gray-100 text-[11.5px] text-[#64748B] font-bold uppercase tracking-wider">
                    <th className="py-3 px-5 w-[40%]">Report Title</th>
                    <th className="py-3 px-4 w-[20%]">Country / Region</th>
                    <th className="py-3 px-4 w-[15%]">Industry</th>
                    <th className="py-3 px-4 w-[12%]">Report Type</th>
                    <th className="py-3 px-4 w-[13%] text-right">Date</th>
                    <th className="py-3 px-5 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-150">
                  {filteredReports.map((report) => (
                    <tr
                      key={report.id}
                      className="hover:bg-slate-50/50 transition-colors text-[13px] font-semibold text-[#0B1B3D]"
                    >
                      {/* Title & Desc */}
                      <td className="py-6 px-5">
                        <div className="flex gap-3.5">
                          {/* File Icon Circle */}
                          <div className="w-10 h-10 rounded-full bg-blue-50 border border-blue-150 flex items-center justify-center shrink-0 text-[#2563EB] mt-0.5">
                            <FileText className="size-5" />
                          </div>
                          <div className="space-y-1">
                            <span className="block font-bold text-[#0b1b3d] leading-snug hover:text-[#2563EB] transition-colors cursor-pointer">
                              {report.title}
                            </span>
                            <span className="block text-[11.5px] text-[#64748B] font-medium leading-relaxed max-w-[320px]">
                              {report.desc}
                            </span>
                          </div>
                        </div>
                      </td>

                      {/* Country & Flag */}
                      <td className="py-6 px-4 whitespace-nowrap">
                        <div className="flex items-center gap-2">
                          {report.flag === "globe" ? (
                            <Globe className="size-4.5 text-blue-500" />
                          ) : (
                            <img
                              src={report.flag}
                              alt={report.country}
                              className="w-4.5 h-3 object-cover rounded-[1px] border border-gray-100"
                            />
                          )}
                          <span className="font-semibold text-gray-700">{report.country}</span>
                        </div>
                      </td>

                      {/* Industry */}
                      <td className="py-6 px-4 font-semibold text-gray-500 whitespace-nowrap">
                        {report.industry}
                      </td>

                      {/* Report Type Pill */}
                      <td className="py-6 px-4 whitespace-nowrap">
                        <span className={`inline-flex px-2 py-0.5 rounded-full text-[10.5px] font-bold ${getReportTypeBadge(report.type)}`}>
                          {report.type}
                        </span>
                      </td>

                      {/* Date */}
                      <td className="py-6 px-4 text-right font-medium text-gray-500 whitespace-nowrap">
                        {report.date}
                      </td>

                      {/* Action buttons */}
                      <td className="py-6 px-5 text-center">
                        <div className="flex items-center justify-center gap-2">
                          {/* Bookmark Button */}
                          <button
                            title="Bookmark Report"
                            onClick={() => toggleBookmark(report.id)}
                            className="p-1.5 rounded-md hover:bg-blue-50/50 text-[#2563EB] border border-[#2563EB] transition-colors cursor-pointer"
                          >
                            <Bookmark
                              className={`size-4.5 ${
                                bookmarkedIds.includes(report.id)
                                  ? "fill-[#2563EB] text-[#2563EB]"
                                  : ""
                              }`}
                            />
                          </button>

                          {/* Download Button */}
                          <button
                            title="Download Report"
                            className="p-1.5 rounded-md hover:bg-blue-50/50 text-[#2563EB] border border-[#2563EB] transition-colors cursor-pointer"
                          >
                            <Download className="size-4.5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}

                  {filteredReports.length === 0 && (
                    <tr>
                      <td colSpan={6} className="py-8 text-center text-[#64748B] font-semibold">
                        No reports matched the specified filters.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            {/* Pagination controls */}
            <div className="p-4 bg-white border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-semibold text-[#64748B]">
              <span>
                Showing 1 to {filteredReports.length} of 124 reports
              </span>

              {/* Navigation buttons */}
              <div className="flex items-center gap-1.5">
                <button className="p-1.5 rounded border border-gray-200 hover:bg-slate-50 transition-colors disabled:opacity-40 cursor-pointer">
                  <ChevronLeft className="size-4" />
                </button>
                <button className="w-8 h-8 rounded bg-[#2563EB] text-white flex items-center justify-center">
                  1
                </button>
                <button className="w-8 h-8 rounded border border-gray-200 hover:bg-slate-50 transition-colors flex items-center justify-center cursor-pointer">
                  2
                </button>
                <button className="w-8 h-8 rounded border border-gray-200 hover:bg-slate-50 transition-colors flex items-center justify-center cursor-pointer">
                  3
                </button>
                <span>...</span>
                <button className="w-8 h-8 rounded border border-gray-200 hover:bg-slate-50 transition-colors flex items-center justify-center cursor-pointer">
                  16
                </button>
                <button className="p-1.5 rounded border border-gray-200 hover:bg-slate-50 transition-colors cursor-pointer">
                  <ChevronRight className="size-4" />
                </button>
              </div>

              {/* Size Select */}
              <div className="flex items-center gap-1">
                <div className="relative">
                  <select className="pl-3 pr-8 py-1.5 border border-gray-200 rounded-lg bg-white appearance-none cursor-pointer focus:outline-none">
                    <option>10 per page</option>
                    <option>20 per page</option>
                    <option>50 per page</option>
                  </select>
                  <ChevronDown className="absolute right-2.5 top-2 size-3.5 text-gray-500 pointer-events-none stroke-[2px]" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN (Popular, Recent Downloads, Premium insights) */}
        <div
          className="space-y-6"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "24px",
            width: "100%",
          }}
        >
          {/* 1. Popular Reports */}
          <div
            className="bg-white border border-[#E5E7EB] rounded-[12px] p-5 shadow-[0_1px_3px_rgba(0,0,0,0.05)]"
            style={{ width: "100%" }}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-[16px] font-bold text-[#0B1B3D]">
                Popular Reports
              </h3>
              <a href="#" className="text-[13px] font-bold text-[#2563EB] hover:underline cursor-pointer">
                View All
              </a>
            </div>

            <div className="space-y-4">
              {POPULAR_REPORTS.map((report) => (
                <div key={report.rank} className="flex items-start gap-3.5">
                  {/* Rank circle */}
                  <div className="w-7.5 h-7.5 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0 font-extrabold text-[12.5px] text-[#2563EB]">
                    {report.rank}
                  </div>
                  <div className="space-y-0.5">
                    <span className="block text-[13px] font-bold text-[#0B1B3D] leading-snug hover:text-[#2563EB] transition-colors cursor-pointer">
                      {report.title}
                    </span>
                    <span className="block text-[11.5px] text-[#64748B] font-medium leading-none">
                      {report.downloads}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 2. Recent Downloads */}
          <div
            className="bg-white border border-[#E5E7EB] rounded-[12px] p-5 shadow-[0_1px_3px_rgba(0,0,0,0.05)]"
            style={{ width: "100%" }}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-[16px] font-bold text-[#0B1B3D]">
                Recent Downloads
              </h3>
              <a href="#" className="text-[13px] font-bold text-[#2563EB] hover:underline cursor-pointer">
                View All
              </a>
            </div>

            <div className="space-y-3.5">
              {RECENT_DOWNLOADS.map((dl, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <FileText className="size-4.5 text-gray-400 shrink-0 mt-0.5" />
                  <div className="min-w-0 flex-1">
                    <span className="block text-[13px] font-bold text-gray-700 hover:text-[#2563EB] transition-colors truncate cursor-pointer">
                      {dl.title}
                    </span>
                    <span className="block text-[11px] text-[#64748B] font-semibold mt-0.5">
                      {dl.date}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 3. Premium Insights Gradient Box */}
          <div
            className="bg-gradient-to-br from-[#0b1b3d] to-[#16274e] rounded-[16px] p-6 text-white shadow-lg relative overflow-hidden group"
            style={{ width: "100%" }}
          >
            {/* sparkles icon bg outline */}
            <div className="absolute right-0 top-0 translate-x-4 -translate-y-4 text-white/5 pointer-events-none select-none">
              <Sparkles className="size-36" />
            </div>

            <div className="relative z-10 space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-amber-400/20 flex items-center justify-center text-amber-400 shrink-0">
                  <Crown className="size-4.5" />
                </div>
                <h4 className="text-[15.5px] font-bold text-white tracking-wide uppercase">
                  Premium Insights
                </h4>
              </div>

              <p className="text-[13px] text-gray-300 leading-relaxed font-semibold">
                Unlock deep market intelligence, custom reports, and expert analysis.
              </p>

              <div className="space-y-3">
                {[
                  "Custom Research Reports",
                  "Expert Consultations",
                  "Early Access to Insights",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5">
                    <CheckCircle2 className="size-4.5 text-amber-400 shrink-0" />
                    <span className="text-[12.5px] text-white font-semibold">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* Upgrade Button */}
              <button
                id="upgrade-to-premium-btn"
                className="w-full bg-[#EA580C] hover:bg-[#C2410C] text-white hover:scale-[1.01] text-[13px] font-extrabold py-3.5 rounded-xl shadow-md transition-all cursor-pointer mt-2 border-none"
              >
                Upgrade to Premium
              </button>
            </div>
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
