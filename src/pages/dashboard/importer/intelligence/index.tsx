import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Main } from "@/components/layout/main";
import {
  Globe,
  Users,
  TrendingUp,
  CheckCircle2,
  ExternalLink,
  ShieldCheck,
  ArrowRight,
  Handshake,
  DollarSign,
  Scale,
  Compass,
} from "lucide-react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// ─── Constants & Data ───

const TABS = ["Overview", "Import Demand", "Top Products", "Trade Data", "Regulations", "Business Guide"];

const KPI_DATA = [
  {
    label: "GDP (2025)",
    value: "$27.4 Trillion",
    change: "2.3% YoY",
    icon: <Globe className="size-5 text-emerald-600" />,
    iconBg: "bg-emerald-50",
  },
  {
    label: "Population",
    value: "335 Million",
    change: "0.6% YoY",
    icon: <Users className="size-5 text-blue-600" />,
    iconBg: "bg-blue-50",
  },
  {
    label: "Imports (2024)",
    value: "$3.3 Trillion",
    change: "4.8% YoY",
    icon: <DollarSign className="size-5 text-indigo-600" />,
    iconBg: "bg-indigo-50",
  },
  {
    label: "Ease of Doing Business",
    value: "Rank 6",
    change: "(World Bank)",
    icon: <TrendingUp className="size-5 text-purple-600" />,
    iconBg: "bg-purple-50",
    isNotPercent: true,
  },
];

const OVERVIEW_CHECKLIST = [
  "World's largest import market",
  "High demand for quality, innovation & sustainability",
  "Advanced logistics & distribution network",
  "Business-friendly environment for international trade",
];

const IMPORT_CATEGORIES = [
  { name: "Machinery & Equipment", value: "$567", percent: 100 },
  { name: "Electronic Products", value: "$486", percent: 85 },
  { name: "Pharmaceuticals", value: "$320", percent: 56 },
  { name: "Textiles & Apparel", value: "$126", percent: 22 },
  { name: "Food & Beverages", value: "$98", percent: 17 },
  { name: "Furniture & Home Decor", value: "$76", percent: 13 },
];

const TREND_DATA = [
  { year: "2020", value: 1.5 },
  { year: "2021", value: 2.0 },
  { year: "2022", value: 2.4 },
  { year: "2023", value: 2.7 },
  { year: "2024", value: 3.1 },
];

const MARKET_OPPORTUNITIES = [
  {
    title: "Consumer Market",
    desc: "High spending power",
    icon: <Users className="size-4.5 text-blue-600" />,
    iconBg: "bg-blue-50",
  },
  {
    title: "E-commerce Growth",
    desc: "12% annual growth",
    icon: <TrendingUp className="size-4.5 text-purple-600" />,
    iconBg: "bg-purple-50",
  },
  {
    title: "Green & Sustainable Products",
    desc: "Rising demand",
    icon: <Compass className="size-4.5 text-emerald-600" />,
    iconBg: "bg-emerald-50",
  },
  {
    title: "Indian Products Accepted",
    desc: "Strong India-USA trade ties",
    icon: <Handshake className="size-4.5 text-orange-500" />,
    iconBg: "bg-orange-50",
  },
];

const QUICK_FACTS = [
  { label: "Capital", value: "Washington, D.C." },
  { label: "Currency", value: "US Dollar (USD)" },
  { label: "Language", value: "English" },
  { label: "Major Ports", value: "12+ International" },
  { label: "Business Culture", value: "Transparent & Contract Driven" },
];

const USEFUL_LINKS = [
  { label: "U.S. Customs & Border Protection", url: "https://www.cbp.gov" },
  { label: "U.S. International Trade Administration", url: "https://www.trade.gov" },
  { label: "U.S. Department of Commerce", url: "https://www.commerce.gov" },
  { label: "FDA - Product Regulations", url: "https://www.fda.gov" },
  { label: "USDA - Agriculture Imports", url: "https://www.usda.gov" },
];

const RELATED_OPPORTUNITIES = [
  {
    id: "opp-1",
    title: "Renewable Energy Equipment",
    badge: "High Demand",
    badgeBg: "bg-green-50 text-green-700 border border-green-200",
    desc: "Clean energy transition driving import growth",
    image: "/images/opp_solar.jpg",
    svgIcon: (
      <svg viewBox="0 0 24 24" fill="none" className="size-10 text-emerald-600" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="5" />
        <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
      </svg>
    ),
  },
  {
    id: "opp-2",
    title: "Pharma & Healthcare",
    badge: "Steady Growth",
    badgeBg: "bg-purple-50 text-purple-700 border border-purple-200",
    desc: "Strong demand for quality generic & specialty products",
    image: "/images/opp_pharma.jpg",
    svgIcon: (
      <svg viewBox="0 0 24 24" fill="none" className="size-10 text-purple-600" stroke="currentColor" strokeWidth="2">
        <path d="M4.5 16.5c-1.5 1.26-2.5 3.19-2.5 5.5h20c0-2.31-1-4.24-2.5-5.5" />
        <rect x="8" y="2" width="8" height="12" rx="2" />
        <path d="M12 5v6M9 8h6" />
      </svg>
    ),
  },
  {
    id: "opp-3",
    title: "Home Decor & Furniture",
    badge: "Expanding",
    badgeBg: "bg-blue-50 text-blue-700 border border-blue-200",
    desc: "Preference for sustainable and handcrafted products",
    image: "/images/opp_furniture.jpg",
    svgIcon: (
      <svg viewBox="0 0 24 24" fill="none" className="size-10 text-indigo-600" stroke="currentColor" strokeWidth="2">
        <path d="M3 9h18v10a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
        <path d="M3 9V5a2 2 0 012-2h14a2 2 0 012 2v4" />
        <line x1="12" y1="9" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    id: "opp-4",
    title: "Organic Food Products",
    badge: "Emerging",
    badgeBg: "bg-orange-50 text-orange-700 border border-orange-200",
    desc: "Growing market for natural and healthy products",
    image: "/images/opp_food.jpg",
    svgIcon: (
      <svg viewBox="0 0 24 24" fill="none" className="size-10 text-orange-500" stroke="currentColor" strokeWidth="2">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
        <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" />
      </svg>
    ),
  },
];

export default function ImporterCountryIntelligencePage() {
  const [activeTab, setActiveTab] = useState("Overview");
  const [isDesktop, setIsDesktop] = useState(typeof window !== "undefined" ? window.innerWidth >= 1024 : true);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
            <span className="text-[#0B1B3D] font-semibold">Country Intelligence</span>
          </div>

          {/* Page Title */}
          <h1 className="text-[28px] font-bold text-[#0B1B3D] tracking-tight leading-none">
            Country Intelligence
          </h1>
          <p className="text-[15px] text-[#64748B] mt-2 font-medium">
            In-depth trade insights to help you make smarter global business decisions.
          </p>
        </div>

        {/* Compare Countries Button */}
        <button
          id="compare-countries-btn"
          className="flex items-center gap-2 border border-[#2563EB] hover:bg-blue-50/50 bg-white text-[#2563EB] text-[13px] font-bold py-2.5 px-4 rounded-lg shadow-sm transition-all cursor-pointer w-fit self-start md:self-center"
        >
          <Scale className="size-4 text-[#2563EB]" />
          <span>Compare Countries</span>
        </button>
      </div>

      {/* ── USA SKYLINE HEADER BANNER CARD ── */}
      <div
        className="w-full rounded-[16px] overflow-hidden text-white shadow-md relative group min-h-[190px] flex flex-col justify-end p-6 md:p-8"
        style={{
          background: "linear-gradient(to right, rgba(11, 27, 61, 0.96), rgba(15, 23, 42, 0.82))",
        }}
      >
        {/* Background Skyline Image Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-30 transition-transform duration-700 group-hover:scale-102 pointer-events-none"
          style={{ backgroundImage: "url('/CountryIntelligenceBg.png')" }}
        />

        <div className="relative z-10 flex flex-col gap-5 w-full">
          {/* Top Row: Flag & Title */}
          <div className="flex items-center gap-4">
            {/* Flag representing USA */}
            <div className="w-16 h-11 overflow-hidden rounded-[8px] border border-white/20 shrink-0 shadow-sm">
              <img
                src="https://flagcdn.com/w80/us.png"
                alt="United States"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-[28px] font-bold leading-none text-white tracking-tight">
                United States
              </h2>
              <span className="text-gray-300 text-[13.5px] font-semibold block mt-1.5">
                World's Largest Consumer Market
              </span>
            </div>
          </div>

          {/* Bottom Row: Description */}
          <p className="text-white text-[15px] font-semibold leading-relaxed max-w-2xl">
            Explore trade opportunities, market trends and import demand.
          </p>
        </div>
      </div>

      {/* ── 4-CARD KPI ROW ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {KPI_DATA.map((card, idx) => (
          <div
            key={idx}
            className="bg-white border border-[#E5E7EB] rounded-[12px] p-5 shadow-[0_1px_3px_rgba(0,0,0,0.05)] hover:shadow-md transition-shadow flex flex-col justify-between"
          >
            <div className="flex items-center justify-between">
              <div>
                <span className="text-[13px] text-[#64748B] font-semibold block">
                  {card.label}
                </span>
                <span className="text-[22px] font-extrabold text-[#0B1B3D] block mt-1.5 leading-none">
                  {card.value}
                </span>
              </div>
              {/* Icon container */}
              <div className={`w-11 h-11 rounded-full ${card.iconBg} flex items-center justify-center shrink-0`}>
                {card.icon}
              </div>
            </div>

            <div className="mt-4 text-[12px] text-[#64748B] font-semibold flex items-center gap-1">
              {card.isNotPercent ? (
                <span className="text-purple-600 font-bold">{card.change}</span>
              ) : (
                <>
                  <span className="text-[#16A34A] font-bold flex items-center">
                    ↑ {card.change}
                  </span>
                  <span>YoY</span>
                </>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* ── SUBTABS SELECTOR ── */}
      <div className="border-b border-gray-200">
        <div className="flex gap-8 overflow-x-auto pb-px scrollbar-none">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-3.5 text-[14px] font-bold transition-all relative cursor-pointer whitespace-nowrap ${
                activeTab === tab ? "text-[#2563EB]" : "text-[#64748B] hover:text-[#0B1B3D]"
              }`}
            >
              {tab}
              {activeTab === tab && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#2563EB] rounded-full" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* ── TWO-COLUMN MAIN CONTENT GRID ── */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: isDesktop ? "2fr 1fr" : "1fr",
          gap: "20px",
          width: "100%",
        }}
      >
        {/* LEFT COLUMN: Overview visual widgets */}
        <div
          className="space-y-6"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "24px",
            width: "100%",
          }}
        >
          {/* Row 1: Checklist Overview & Stylized US Map Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: isDesktop ? "1fr 1fr" : "1fr",
              gap: "20px",
              width: "100%",
            }}
          >
            {/* Market Overview Checklist */}
            <div
              className="bg-white border border-[#E5E7EB] rounded-[12px] p-6 shadow-[0_1px_3px_rgba(0,0,0,0.05)] flex flex-col justify-between"
              style={{ width: "100%" }}
            >
              <div>
                <h3 className="text-[16px] font-bold text-[#0B1B3D] mb-4">
                  Market Overview
                </h3>
                <p className="text-[13.5px] leading-relaxed text-[#64748B] font-medium mb-5">
                  The United States offers vast opportunities for global exporters with high consumption, strong purchasing power and demand for quality products.
                </p>

                <div className="space-y-3.5">
                  {OVERVIEW_CHECKLIST.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="size-4.5 text-[#16A34A] shrink-0 mt-0.5" />
                      <span className="text-[13px] text-[#0B1B3D] font-semibold leading-snug">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Stylized US Vector Map Card */}
            <div
              className="border border-[#E5E7EB] rounded-[12px] shadow-[0_1px_3px_rgba(0,0,0,0.05)] flex flex-col justify-center items-center relative overflow-hidden min-h-[220px]"
              style={{ width: "100%", background: "#051329" }}
            >
              {/* Map representation using AECCIMapBG image */}
              <div className="absolute inset-0 w-full h-full">
                <img
                  src="/AECCIMapBG.png"
                  alt="AECCI Country Map"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Tag marker at bottom left of map */}
              <div className="absolute bottom-4 left-4 bg-[#0B1B3D]/95 text-white py-1.5 px-3 rounded-lg border border-white/10 text-[11px] font-bold shadow flex items-center gap-1.5 z-10">
                <img
                  src="https://flagcdn.com/w40/us.png"
                  alt="US"
                  className="w-3.5 h-2 object-cover rounded-[1px]"
                />
                <span>United States (HQ Focus)</span>
              </div>
            </div>
          </div>

          {/* Row 2: Top Import Categories & Import Trend Line Chart */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: isDesktop ? "1fr 1fr" : "1fr",
              gap: "20px",
              width: "100%",
            }}
          >
            {/* Top Import Categories progress bar card */}
            <div
              className="bg-white border border-[#E5E7EB] rounded-[12px] p-6 shadow-[0_1px_3px_rgba(0,0,0,0.05)] flex flex-col justify-between"
              style={{ width: "100%" }}
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <h3 className="text-[16px] font-bold text-[#0B1B3D]">
                    Top Import Categories
                  </h3>
                  <span className="text-[11px] font-bold text-[#64748B] uppercase tracking-wider">
                    Value (USD Bn)
                  </span>
                </div>

                <div className="space-y-4">
                  {IMPORT_CATEGORIES.map((item, idx) => (
                    <div key={idx} className="space-y-1.5">
                      <div className="flex items-center justify-between text-xs font-semibold">
                        <span className="text-[#0B1B3D]">{item.name}</span>
                        <span className="text-[#0B1B3D] font-bold">{item.value}</span>
                      </div>
                      <div className="w-full bg-gray-100 rounded-full h-1.5 overflow-hidden">
                        <div
                          className="bg-[#2563EB] h-1.5 rounded-full transition-all duration-500"
                          style={{ width: `${item.percent}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Outlined Button */}
              <button
                id="view-detailed-import-data-btn"
                className="w-full border border-gray-200 hover:border-[#2563EB] hover:bg-blue-50/20 text-[#0B1B3D] hover:text-[#2563EB] text-[13px] font-bold py-2.5 rounded-lg shadow-sm transition-all cursor-pointer bg-white mt-6"
              >
                View Detailed Import Data
              </button>
            </div>

            {/* Import Trend Area Line Chart Card */}
            <div
              className="bg-white border border-[#E5E7EB] rounded-[12px] p-6 shadow-[0_1px_3px_rgba(0,0,0,0.05)] flex flex-col justify-between"
              style={{ width: "100%" }}
            >
              <div>
                <h3 className="text-[16px] font-bold text-[#0B1B3D] mb-5">
                  Import Trend (2020 - 2024)
                </h3>

                {/* Area Chart Wrapper */}
                <div
                  style={{
                    position: "relative",
                    height: "220px",
                    width: "100%",
                  }}
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={TREND_DATA} margin={{ top: 10, right: 10, left: -15, bottom: 0 }}>
                      <defs>
                        <linearGradient id="trendGrad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#2563EB" stopOpacity={0.15} />
                          <stop offset="95%" stopColor="#2563EB" stopOpacity={0.01} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F1F5F9" />
                      <XAxis
                        dataKey="year"
                        tickLine={false}
                        axisLine={false}
                        tick={{ fill: "#64748B", fontSize: 11, fontWeight: 500 }}
                      />
                      <YAxis
                        domain={[0, 4.0]}
                        ticks={[0, 1.0, 2.0, 3.0, 4.0]}
                        tickLine={false}
                        axisLine={false}
                        tickFormatter={(v) => (v === 0 ? "0" : `${v.toFixed(1)}T`)}
                        tick={{ fill: "#64748B", fontSize: 11, fontWeight: 500 }}
                      />
                      <Tooltip
                        content={({ active, payload }: any) => {
                          if (active && payload && payload.length) {
                            return (
                              <div className="bg-[#0B1B3D] text-white p-2.5 rounded-lg shadow-lg border border-white/10 text-xs">
                                <p className="font-bold text-white mb-0.5">{payload[0].payload.year}</p>
                                <p className="text-gray-300">
                                  Imports: <span className="font-bold text-white">${payload[0].value} Trillion</span>
                                </p>
                              </div>
                            );
                          }
                          return null;
                        }}
                      />
                      <Area
                        type="monotone"
                        dataKey="value"
                        stroke="#2563EB"
                        strokeWidth={2.5}
                        fillOpacity={1}
                        fill="url(#trendGrad)"
                        dot={{ r: 4, strokeWidth: 2, fill: "#fff", stroke: "#2563EB" }}
                        activeDot={{ r: 6, strokeWidth: 0, fill: "#2563EB" }}
                      />
                    </AreaChart>
                  </ResponsiveContainer>

                  {/* Absolute Badge indicating $3.3T on chart end point */}
                  <div className="absolute right-6 top-10 bg-[#2563EB] text-white py-1 px-2.5 rounded-md text-[10.5px] font-bold shadow-md border border-white/20">
                    $3.3T (2024)
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN (Market Opportunity, Quick Facts, Useful Links) */}
        <div
          className="space-y-6"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "24px",
            width: "100%",
          }}
        >
          {/* 1. Market Opportunity */}
          <div
            className="bg-white border border-[#E5E7EB] rounded-[12px] p-5 shadow-[0_1px_3px_rgba(0,0,0,0.05)]"
            style={{ width: "100%" }}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-[16px] font-bold text-[#0B1B3D]">
                Market Opportunity
              </h3>
              <span className="inline-flex items-center gap-1.5 bg-green-50 border border-green-200 text-green-700 text-[10.5px] font-bold px-2 py-0.5 rounded-md">
                <span className="size-1.5 rounded-full bg-[#16A34A] shrink-0" />
                High
              </span>
            </div>

            <div className="space-y-4">
              {MARKET_OPPORTUNITIES.map((opp, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className={`w-8.5 h-8.5 rounded-full ${opp.iconBg} flex items-center justify-center shrink-0 mt-0.5`}>
                    {opp.icon}
                  </div>
                  <div>
                    <span className="block text-[13px] font-bold text-[#0B1B3D]">
                      {opp.title}
                    </span>
                    <span className="block text-[11.5px] text-[#64748B] font-medium mt-0.5">
                      {opp.desc}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 2. Quick Facts */}
          <div
            className="bg-white border border-[#E5E7EB] rounded-[12px] p-5 shadow-[0_1px_3px_rgba(0,0,0,0.05)]"
            style={{ width: "100%" }}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-[16px] font-bold text-[#0B1B3D]">
                Quick Facts
              </h3>
              {/* Three dots option representation */}
              <button className="text-gray-400 hover:text-gray-600 transition-colors">
                <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <circle cx="12" cy="5" r="1.5" />
                  <circle cx="12" cy="12" r="1.5" />
                  <circle cx="12" cy="19" r="1.5" />
                </svg>
              </button>
            </div>

            <div className="divide-y divide-gray-100">
              {QUICK_FACTS.map((item, idx) => (
                <div key={idx} className="flex items-center justify-between py-3 text-xs font-semibold">
                  <span className="text-[#64748B]">{item.label}</span>
                  <span className="text-[#0B1B3D] text-right max-w-[150px] truncate">{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 3. Useful Links */}
          <div
            className="bg-white border border-[#E5E7EB] rounded-[12px] p-5 shadow-[0_1px_3px_rgba(0,0,0,0.05)] flex flex-col justify-between min-h-[280px]"
            style={{ width: "100%" }}
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-[16px] font-bold text-[#0B1B3D]">
                  Useful Links
                </h3>
                <button className="text-gray-400 hover:text-gray-600 transition-colors">
                  <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <circle cx="12" cy="5" r="1.5" />
                    <circle cx="12" cy="12" r="1.5" />
                    <circle cx="12" cy="19" r="1.5" />
                  </svg>
                </button>
              </div>

              <div className="space-y-3.5">
                {USEFUL_LINKS.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between text-xs font-semibold text-gray-700 hover:text-[#2563EB] transition-colors group cursor-pointer"
                  >
                    <span className="truncate max-w-[200px]">{link.label}</span>
                    <ExternalLink className="size-3.5 text-gray-400 group-hover:text-[#2563EB] transition-colors shrink-0" />
                  </a>
                ))}
              </div>
            </div>

            {/* Bottom Button */}
            <button
              id="view-all-resources-btn"
              className="w-full border border-gray-200 hover:border-[#2563EB] hover:bg-blue-50/20 text-[#0B1B3D] hover:text-[#2563EB] text-[13px] font-bold py-2.5 rounded-lg shadow-sm transition-all cursor-pointer bg-white mt-6"
            >
              View All Resources
            </button>
          </div>
        </div>
      </div>

      {/* ── RELATED TRADE OPPORTUNITIES ── */}
      <div className="space-y-4 pt-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold text-[#0B1B3D]">
            Related Trade Opportunities
          </h3>
          <Link
            to="/importer/marketplace"
            className="text-[13px] font-semibold text-[#2563EB] hover:text-blue-700 transition-colors flex items-center gap-1 cursor-pointer"
          >
            <span>View All</span>
            <ArrowRight className="size-4" />
          </Link>
        </div>

        {/* 4 Opportunities cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {RELATED_OPPORTUNITIES.map((opp) => (
            <div
              key={opp.id}
              className="bg-white border border-[#E5E7EB] rounded-[12px] shadow-[0_1px_3px_rgba(0,0,0,0.04)] overflow-hidden flex flex-col hover:shadow-md transition-all group"
            >
              {/* visual graphic container */}
              <div className="h-28 bg-[#FAFBFD] border-b border-gray-100 flex items-center justify-center shrink-0 relative overflow-hidden">
                {/* Visual image thumbnail overlay fallback */}
                <div
                  className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-20 pointer-events-none"
                  style={{ backgroundImage: `url('${opp.image}')` }}
                />
                <div className="relative z-10 flex size-14 items-center justify-center rounded-full bg-white border border-gray-100 shadow-sm">
                  {opp.svgIcon}
                </div>
              </div>

              {/* Details card content */}
              <div className="p-4 flex-1 flex flex-col justify-between text-left space-y-3.5">
                <div>
                  <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider block w-fit mb-2 ${opp.badgeBg}`}>
                    {opp.badge}
                  </span>
                  <h4 className="text-[14px] font-bold text-[#0B1B3D] leading-snug group-hover:text-[#2563EB] transition-colors">
                    {opp.title}
                  </h4>
                  <p className="text-[12px] leading-relaxed text-[#64748B] font-medium mt-1">
                    {opp.desc}
                  </p>
                </div>

                <Link
                  to="/importer/marketplace"
                  className="text-[12px] font-bold text-[#2563EB] hover:text-blue-700 transition-colors flex items-center gap-1 mt-2.5 w-fit"
                >
                  <span>Explore Suppliers</span>
                  <ArrowRight className="size-3.5" />
                </Link>
              </div>
            </div>
          ))}
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
