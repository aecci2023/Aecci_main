import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Main } from "@/components/layout/main";
import {
  Calendar,
  Users,
  CheckCircle2,
  Clock,
  Target,
  ChevronDown,
  ArrowRight,
  Star,
  ShieldCheck,
  User,
} from "lucide-react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

// ─── Types and Constants ───

interface StatCardProps {
  label: string;
  value: string;
  icon: React.ReactNode;
  iconBg: string;
  iconColor: string;
  trend: string;
}

const STATS_DATA: StatCardProps[] = [
  {
    label: "Total Sessions",
    value: "24",
    icon: <Calendar className="size-5" />,
    iconBg: "bg-blue-50",
    iconColor: "text-[#2563EB]",
    trend: "14%",
  },
  {
    label: "Total Meetings",
    value: "18",
    icon: <Users className="size-5" />,
    iconBg: "bg-purple-50",
    iconColor: "text-purple-600",
    trend: "12%",
  },
  {
    label: "Completed Meetings",
    value: "12",
    icon: <CheckCircle2 className="size-5" />,
    iconBg: "bg-green-50",
    iconColor: "text-green-600",
    trend: "20%",
  },
  {
    label: "Total Meeting Time",
    value: "9h 45m",
    icon: <Clock className="size-5" />,
    iconBg: "bg-orange-50",
    iconColor: "text-orange-500",
    trend: "18%",
  },
  {
    label: "Connection Rate",
    value: "72%",
    icon: <Target className="size-5" />,
    iconBg: "bg-teal-50",
    iconColor: "text-teal-600",
    trend: "8%",
  },
];

const CHART_DATA = [
  { name: "20 May", Sessions: 11, Meetings: 5 },
  { name: "21 May", Sessions: 19, Meetings: 13 },
  { name: "22 May", Sessions: 14, Meetings: 9 },
  { name: "23 May", Sessions: 7, Meetings: 3 },
  { name: "24 May", Sessions: 22, Meetings: 15 },
  { name: "25 May", Sessions: 14, Meetings: 8 },
  { name: "26 May", Sessions: 15, Meetings: 9 },
];

const RECENT_SESSIONS = [
  {
    id: "session-1",
    sessionName: "India Leather & Accessories Connect",
    exporterName: "Kraft India Exports",
    dateTime: "26 May 2026 / 02:00 PM (EST)",
    duration: "30 Min",
    outcome: "Upcoming",
    actionLabel: "View Details",
    logoColor: "bg-emerald-800 text-white",
    logoText: "K",
    svgLogo: (
      <svg viewBox="0 0 24 24" fill="none" className="size-6 text-emerald-800" stroke="currentColor" strokeWidth="2.5">
        <path d="M4 4v16M20 4v16M4 12h8l8-8M12 12l8 8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: "session-2",
    sessionName: "India Food Export Connect",
    exporterName: "AgroVita Foods Pvt. Ltd.",
    dateTime: "26 May 2026 / 11:30 AM (EST)",
    duration: "30 Min",
    outcome: "Completed",
    actionLabel: "View Summary",
    logoColor: "bg-green-600 text-white",
    logoText: "A",
    svgLogo: (
      <svg viewBox="0 0 24 24" fill="none" className="size-6 text-green-600" stroke="currentColor" strokeWidth="2">
        <path d="M12 2L2 22h20L12 2z" />
        <path d="M12 6l-6 10h12L12 6z" fill="currentColor" opacity="0.2" />
        <circle cx="12" cy="13" r="2" fill="currentColor" />
      </svg>
    ),
  },
  {
    id: "session-3",
    sessionName: "India Home & Lifestyle Expo",
    exporterName: "Deccan Ceramics Pvt. Ltd.",
    dateTime: "28 May 2026 / 09:00 AM (EST)",
    duration: "30 Min",
    outcome: "Completed",
    actionLabel: "View Summary",
    logoColor: "bg-blue-900 text-white",
    logoText: "D",
    svgLogo: (
      <svg viewBox="0 0 24 24" fill="none" className="size-6 text-blue-900" stroke="currentColor" strokeWidth="2">
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <path d="M9 9h6v6H9z" fill="currentColor" opacity="0.2" />
      </svg>
    ),
  },
  {
    id: "session-4",
    sessionName: "India Textile Sourcing Forum",
    exporterName: "Suryatex Industries Pvt. Ltd.",
    dateTime: "28 May 2026 / 10:00 AM (EST)",
    duration: "30 Min",
    outcome: "Rescheduled",
    actionLabel: "View Details",
    logoColor: "bg-red-600 text-white",
    logoText: "S",
    svgLogo: (
      <svg viewBox="0 0 24 24" fill="none" className="size-6 text-red-600" stroke="currentColor" strokeWidth="2.5">
        <path d="M12 2a10 10 0 100 20 10 10 0 000-20z" />
        <path d="M8 12h8" strokeLinecap="round" />
        <path d="M12 8v8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "session-5",
    sessionName: "India Textile Sourcing Forum",
    exporterName: "Fashion Weaves Pvt. Ltd.",
    dateTime: "16 May 2026 / 10:00 AM (EST)",
    duration: "30 Min",
    outcome: "Cancelled",
    actionLabel: "View Details",
    logoColor: "bg-purple-700 text-white",
    logoText: "F",
    svgLogo: (
      <svg viewBox="0 0 24 24" fill="none" className="size-6 text-purple-700" stroke="currentColor" strokeWidth="2">
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
        <path d="M8 15l4-6 4 6H8z" fill="currentColor" opacity="0.2" />
      </svg>
    ),
  },
];

const MEETING_OUTCOMES_DATA = [
  { name: "Successful", value: 12, percentage: "67%", color: "#16A34A" },
  { name: "Rescheduled", value: 2, percentage: "11%", color: "#EA580C" },
  { name: "No Show", value: 2, percentage: "11%", color: "#EF4444" },
  { name: "Cancelled", value: 2, percentage: "11%", color: "#94A3B8" },
];

const TOP_INDUSTRIES = [
  { name: "Textiles & Garments", count: 6, percent: 100 },
  { name: "Food & Agriculture", count: 4, percent: 67 },
  { name: "Leather Goods", count: 3, percent: 50 },
  { name: "Chemicals", count: 2, percent: 33 },
  { name: "Machinery & Equipment", count: 2, percent: 33 },
];

export default function ImporterSessionSummaryPage() {
  const [timeframe, setTimeframe] = useState("Last 7 Days");
  const [showTimeframeDropdown, setShowTimeframeDropdown] = useState(false);
  const [isDesktop, setIsDesktop] = useState(typeof window !== "undefined" ? window.innerWidth >= 1024 : true);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getOutcomeBadgeClass = (status: string) => {
    switch (status) {
      case "Upcoming":
        return "bg-blue-50 text-[#2563EB] border border-blue-200";
      case "Completed":
        return "bg-green-50 text-[#16A34A] border border-green-200";
      case "Rescheduled":
        return "bg-orange-50 text-[#EA580C] border border-orange-200";
      case "Cancelled":
        return "bg-red-50 text-red-600 border border-red-200";
      default:
        return "bg-gray-50 text-gray-600 border border-gray-200";
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
            <span className="text-[#0B1B3D] font-semibold">Session Summary</span>
          </div>

          {/* Page Title */}
          <h1 className="text-[28px] font-bold text-[#0B1B3D] tracking-tight leading-none">
            Session Summary
          </h1>
          <p className="text-[15px] text-[#64748B] mt-2 font-medium">
            Track and analyze your Deal Room sessions and meeting performance.
          </p>
        </div>

        {/* Date Picker styled Button */}
        <button
          id="session-summary-date-picker"
          className="flex items-center gap-2 border border-[#2563EB] hover:bg-blue-50/50 bg-white text-[#2563EB] text-[13px] font-bold py-2.5 px-4 rounded-lg shadow-sm transition-all cursor-pointer w-fit self-start md:self-center"
        >
          <Calendar className="size-4 text-[#2563EB]" />
          <span>20 May 2026 - 26 May 2026</span>
        </button>
      </div>

      {/* ── STATS ROW (5 Cards) ── */}
      <div 
        style={{
          display: "grid",
          gridTemplateColumns: isDesktop ? "repeat(5, 1fr)" : "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "16px",
          width: "100%",
        }}
      >
        {STATS_DATA.map((card, idx) => (
          <div
            key={idx}
            className="bg-white border border-[#E5E7EB] rounded-[12px] p-5 shadow-[0_1px_3px_rgba(0,0,0,0.05)] hover:shadow-md transition-shadow flex flex-col justify-between"
          >
            <div>
              {/* Icon Circle */}
              <div className={`w-10 h-10 rounded-full ${card.iconBg} ${card.iconColor} flex items-center justify-center shrink-0 mb-3`}>
                {card.icon}
              </div>
              <span className="text-[13px] text-[#64748B] font-semibold block">
                {card.label}
              </span>
              <span className="text-2xl font-bold text-[#0B1B3D] block mt-1 leading-none">
                {card.value}
              </span>
            </div>
            {/* Trend percentage line */}
            <div className="mt-3.5 flex items-center gap-1 text-[12px] text-[#64748B] font-semibold">
              <span className="text-[#16A34A] flex items-center font-bold">
                ↑{card.trend}
              </span>
              <span>vs last 7 days</span>
            </div>
          </div>
        ))}
      </div>

      {/* ── TWO-COLUMN CONTENT GRID ── */}
      <div 
        style={{
          display: "grid",
          gridTemplateColumns: isDesktop ? "2fr 1fr" : "1fr",
          gap: "20px",
          width: "100%",
        }}
      >
        {/* LEFT COLUMN (Overview & Recent Sessions Table) */}
        <div 
          className="space-y-6"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "24px",
            width: "100%",
          }}
        >
          
          {/* Main Chart Card: Session Activity Overview */}
          <div className="bg-white border border-[#E5E7EB] rounded-[12px] shadow-[0_1px_3px_rgba(0,0,0,0.05)] overflow-hidden">
            <div className="p-5 border-b border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h2 className="text-[16px] font-bold text-[#0B1B3D]">
                  Session Activity Overview
                </h2>
              </div>

              {/* Chart Legend & Last 7 Days Timeframe Dropdown */}
              <div className="flex items-center gap-5 self-start sm:self-center">
                {/* Legend items */}
                <div className="flex items-center gap-4 text-xs font-semibold text-[#64748B]">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#2563EB]" />
                    <span>Sessions</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#16A34A]" />
                    <span>Meetings</span>
                  </div>
                </div>

                {/* Dropdown container */}
                <div className="relative">
                  <button
                    id="session-summary-timeframe-select"
                    onClick={() => setShowTimeframeDropdown(!showTimeframeDropdown)}
                    className="flex items-center gap-1.5 border border-gray-200 hover:bg-gray-50 bg-white text-[#0B1B3D] text-xs font-semibold py-1.5 px-3 rounded-lg shadow-sm transition-colors cursor-pointer"
                  >
                    <span>{timeframe}</span>
                    <ChevronDown className="size-3.5 text-gray-500 stroke-[2.5px]" />
                  </button>
                  {showTimeframeDropdown && (
                    <div className="absolute right-0 mt-1 w-36 bg-white border border-gray-150 rounded-lg shadow-lg z-20 py-1 text-xs">
                      {["Last 7 Days", "Last 30 Days", "This Month", "Last Year"].map((item) => (
                        <button
                          key={item}
                          onClick={() => {
                            setTimeframe(item);
                            setShowTimeframeDropdown(false);
                          }}
                          className="w-full text-left px-3 py-2 hover:bg-slate-50 text-[#0B1B3D] font-medium"
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Recharts Area Chart wrapper */}
            <div 
              style={{
                position: "relative",
                height: "320px",
                width: "100%",
                padding: "20px 20px 0 20px"
              }}
            >
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={CHART_DATA} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <defs>
                    <linearGradient id="sessionsGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#2563EB" stopOpacity={0.15} />
                      <stop offset="95%" stopColor="#2563EB" stopOpacity={0.01} />
                    </linearGradient>
                    <linearGradient id="meetingsGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#16A34A" stopOpacity={0.15} />
                      <stop offset="95%" stopColor="#16A34A" stopOpacity={0.01} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F1F5F9" />
                  <XAxis
                    dataKey="name"
                    tickLine={false}
                    axisLine={false}
                    tick={{ fill: "#64748B", fontSize: 11, fontWeight: 500 }}
                  />
                  <YAxis
                    domain={[0, 25]}
                    ticks={[0, 5, 10, 15, 20, 25]}
                    tickLine={false}
                    axisLine={false}
                    tick={{ fill: "#64748B", fontSize: 11, fontWeight: 500 }}
                  />
                  <Tooltip
                    content={
                      <div className="bg-[#0B1B3D] text-white p-3 rounded-lg shadow-lg border border-white/10 text-xs">
                        <p className="font-semibold mb-1 text-gray-300">{""}</p>
                        <div className="flex items-center gap-2 mt-0.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-[#2563EB]" />
                          <span className="text-gray-300">Sessions:</span>
                          <span className="font-bold"></span>
                        </div>
                      </div>
                    }
                    cursor={{ stroke: "#E2E8F0", strokeWidth: 1 }}
                    contentStyle={{ display: "none" }} // use custom content rendering below:
                  />
                  {/* We implement clean Tooltip using HTML or recharts standard inside helper */}
                  <Tooltip
                    content={({ active, payload }: any) => {
                      if (active && payload && payload.length) {
                        return (
                          <div className="bg-[#0B1B3D] text-white p-3.5 rounded-lg shadow-xl border border-white/10 text-xs text-left">
                            <p className="font-bold mb-1 text-white">{payload[0].payload.name}</p>
                            <div className="space-y-1 mt-1.5">
                              <div className="flex items-center gap-2">
                                <span className="w-2.5 h-2.5 rounded-full bg-[#2563EB]" />
                                <span className="text-gray-300">Sessions:</span>
                                <span className="font-bold text-white">{payload[0].value}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <span className="w-2.5 h-2.5 rounded-full bg-[#16A34A]" />
                                <span className="text-gray-300">Meetings:</span>
                                <span className="font-bold text-white">{payload[1].value}</span>
                              </div>
                            </div>
                          </div>
                        );
                      }
                      return null;
                    }}
                  />
                  <Area
                    type="monotone"
                    dataKey="Sessions"
                    stroke="#2563EB"
                    strokeWidth={2.5}
                    fillOpacity={1}
                    fill="url(#sessionsGrad)"
                    dot={{ r: 4, strokeWidth: 2, fill: "#fff", stroke: "#2563EB" }}
                    activeDot={{ r: 6, strokeWidth: 0, fill: "#2563EB" }}
                  />
                  <Area
                    type="monotone"
                    dataKey="Meetings"
                    stroke="#16A34A"
                    strokeWidth={2.5}
                    fillOpacity={1}
                    fill="url(#meetingsGrad)"
                    dot={{ r: 4, strokeWidth: 2, fill: "#fff", stroke: "#16A34A" }}
                    activeDot={{ r: 6, strokeWidth: 0, fill: "#16A34A" }}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            {/* Below chart: 4-column metric summary strip */}
            <div className="grid grid-cols-2 md:grid-cols-4 border-t border-gray-150 bg-[#FAFBFD] divide-x divide-gray-150">
              <div className="p-4 text-center">
                <span className="text-[12px] text-[#64748B] font-semibold block mb-0.5">Average per Day</span>
                <span className="text-[16px] font-bold text-[#0B1B3D]">3.4 Sessions</span>
              </div>
              <div className="p-4 text-center">
                <span className="text-[12px] text-[#64748B] font-semibold block mb-0.5">Best Day</span>
                <span className="text-[15px] font-bold text-[#0B1B3D] block">24 May 2026</span>
                <span className="text-[12px] text-[#64748B] font-semibold">6 Sessions</span>
              </div>
              <div className="p-4 text-center">
                <span className="text-[12px] text-[#64748B] font-semibold block mb-0.5">Total Connects</span>
                <span className="text-[16px] font-bold text-[#0B1B3D]">37</span>
              </div>
              <div className="p-4 text-center">
                <span className="text-[12px] text-[#64748B] font-semibold block mb-0.5">No-Show Rate</span>
                <span className="text-[16px] font-bold text-red-600">11%</span>
              </div>
            </div>
          </div>

          {/* Recent Sessions Table */}
          <div className="bg-white border border-[#E5E7EB] rounded-[12px] shadow-[0_1px_3px_rgba(0,0,0,0.05)] overflow-hidden">
            <div className="p-5 border-b border-gray-100 flex items-center justify-between">
              <h2 className="text-[16px] font-bold text-[#0B1B3D]">
                Recent Sessions
              </h2>
              <Link
                id="session-summary-view-all-top"
                to="/importer/my-meetings"
                className="text-[13px] font-semibold text-[#2563EB] hover:text-blue-700 transition-colors"
              >
                View All Sessions &rarr;
              </Link>
            </div>

            {/* Table wrapper */}
            <div className="overflow-x-auto">
              <table className="w-full min-w-[700px] border-collapse">
                <thead>
                  <tr className="bg-[#FAFBFD] border-b border-gray-150">
                    <th className="px-5 py-3.5 text-left text-[11px] font-bold text-[#64748B] uppercase tracking-wider">
                      Session / Exporter
                    </th>
                    <th className="px-5 py-3.5 text-left text-[11px] font-bold text-[#64748B] uppercase tracking-wider">
                      Date & Time
                    </th>
                    <th className="px-5 py-3.5 text-left text-[11px] font-bold text-[#64748B] uppercase tracking-wider">
                      Duration
                    </th>
                    <th className="px-5 py-3.5 text-left text-[11px] font-bold text-[#64748B] uppercase tracking-wider">
                      Outcome
                    </th>
                    <th className="px-5 py-3.5 text-left text-[11px] font-bold text-[#64748B] uppercase tracking-wider">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {RECENT_SESSIONS.map((row) => (
                    <tr
                      key={row.id}
                      className="hover:bg-[#F8FAFC] transition-colors group"
                    >
                      {/* Session / Exporter details */}
                      <td className="px-5 py-4 flex items-center gap-3">
                        {/* High fidelity stylized Corporate logo representation */}
                        <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 bg-gray-50 border border-gray-200">
                          {row.svgLogo}
                        </div>
                        <div className="min-w-0">
                          <span className="block font-bold text-[14px] text-[#0B1B3D] truncate group-hover:text-[#2563EB] transition-colors">
                            {row.sessionName}
                          </span>
                          <span className="block text-[12px] text-[#64748B] font-medium mt-0.5">
                            {row.exporterName}
                          </span>
                        </div>
                      </td>

                      {/* Date & Time */}
                      <td className="px-5 py-4 text-[13px] text-[#0B1B3D] font-semibold">
                        {row.dateTime}
                      </td>

                      {/* Duration */}
                      <td className="px-5 py-4 text-[13px] text-[#64748B] font-medium">
                        {row.duration}
                      </td>

                      {/* Outcome pill */}
                      <td className="px-5 py-4">
                        <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold inline-block ${getOutcomeBadgeClass(row.outcome)}`}>
                          {row.outcome}
                        </span>
                      </td>

                      {/* Action Button */}
                      <td className="px-5 py-4">
                        <button
                          id={`session-btn-${row.id}`}
                          className="border border-gray-200 hover:border-[#2563EB] hover:bg-blue-50/20 text-[#0B1B3D] hover:text-[#2563EB] text-[12px] font-bold py-1.5 px-3 rounded-lg shadow-sm transition-all cursor-pointer whitespace-nowrap bg-white"
                        >
                          {row.actionLabel}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Bottom centered link */}
            <div className="p-4 bg-white border-t border-gray-100 flex justify-center">
              <Link
                id="session-summary-view-all-bottom"
                to="/importer/my-meetings"
                className="text-[13px] font-semibold text-[#2563EB] hover:text-blue-700 transition-colors flex items-center gap-1"
              >
                <span>View All Sessions</span>
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN (Meeting Outcomes, Top Industries, Session Insights) */}
        <div 
          className="space-y-6"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "24px",
            width: "100%",
          }}
        >
          
          {/* 1. Meeting Outcomes */}
          <div className="bg-white border border-[#E5E7EB] rounded-[12px] p-5 shadow-[0_1px_3px_rgba(0,0,0,0.05)]">
            <h3 className="text-[16px] font-bold text-[#0B1B3D] mb-4">
              Meeting Outcomes
            </h3>

            {/* Donut Layout */}
            <div className="grid grid-cols-[110px_1fr] gap-4 items-center min-h-[120px]">
              {/* Pie/Donut Chart */}
              <div className="w-[110px] h-[110px] shrink-0">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={MEETING_OUTCOMES_DATA}
                      cx="50%"
                      cy="50%"
                      innerRadius={30}
                      outerRadius={45}
                      paddingAngle={3}
                      dataKey="value"
                    >
                      {MEETING_OUTCOMES_DATA.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </div>

              {/* Legend List */}
              <div className="space-y-1.5">
                {MEETING_OUTCOMES_DATA.map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-1.5 text-[#64748B] font-medium">
                      <span
                        className="w-2.5 h-2.5 rounded-full shrink-0"
                        style={{ backgroundColor: item.color }}
                      />
                      <span>{item.name}</span>
                    </div>
                    <span className="font-bold text-[#0B1B3D]">
                      {item.value} ({item.percentage})
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 2. Top Industries Discussed */}
          <div className="bg-white border border-[#E5E7EB] rounded-[12px] p-5 shadow-[0_1px_3px_rgba(0,0,0,0.05)] flex flex-col justify-between min-h-[300px]">
            <div>
              <h3 className="text-[16px] font-bold text-[#0B1B3D] mb-4">
                Top Industries Discussed
              </h3>

              <div className="space-y-4">
                {TOP_INDUSTRIES.map((item, idx) => (
                  <div key={idx} className="space-y-1.5">
                    {/* Badge, Name, Count */}
                    <div className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2">
                        <span className="w-5 h-5 rounded-full border border-[#2563EB] text-[#2563EB] font-bold flex items-center justify-center text-[10px] shrink-0">
                          {idx + 1}
                        </span>
                        <span className="font-bold text-[#0B1B3D]">{item.name}</span>
                      </div>
                      <span className="text-[#64748B] font-semibold">{item.count} Meetings</span>
                    </div>

                    {/* Progress Bar */}
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

            {/* Bottom blue link */}
            <div className="border-t border-gray-100 pt-4 mt-5 text-center">
              <Link
                id="industries-view-all"
                to="/importer/marketplace"
                className="text-[13px] font-bold text-[#2563EB] hover:text-blue-700 transition-colors"
              >
                View All
              </Link>
            </div>
          </div>

          {/* 3. Session Insights */}
          <div className="bg-white border border-[#E5E7EB] rounded-[12px] p-5 shadow-[0_1px_3px_rgba(0,0,0,0.05)] flex flex-col justify-between min-h-[320px]">
            <div>
              <h3 className="text-[16px] font-bold text-[#0B1B3D] mb-4">
                Session Insights
              </h3>

              <div className="space-y-5">
                {/* 1. Peak Meeting Time */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-full bg-blue-50 text-[#2563EB] flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="size-4.5" />
                  </div>
                  <div>
                    <span className="block text-[12px] text-[#64748B] font-semibold">
                      Peak Meeting Time
                    </span>
                    <span className="block text-[13px] font-bold text-[#0B1B3D] mt-0.5">
                      11:00 AM - 01:00 PM (EST)
                    </span>
                  </div>
                </div>

                {/* 2. Most Active Day */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-full bg-green-50 text-green-600 flex items-center justify-center shrink-0 mt-0.5">
                    <Calendar className="size-4.5" />
                  </div>
                  <div>
                    <span className="block text-[12px] text-[#64748B] font-semibold">
                      Most Active Day
                    </span>
                    <span className="block text-[13px] font-bold text-[#0B1B3D] mt-0.5">
                      24 May 2026 (Saturday)
                    </span>
                  </div>
                </div>

                {/* 3. Most Connects With */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center shrink-0 mt-0.5">
                    <User className="size-4.5" />
                  </div>
                  <div>
                    <span className="block text-[12px] text-[#64748B] font-semibold">
                      Most Connects With
                    </span>
                    <span className="block text-[13px] font-bold text-[#0B1B3D] mt-0.5">
                      AgroVita Foods Pvt. Ltd.
                    </span>
                    <span className="block text-[11px] text-[#64748B] font-semibold mt-0.5">
                      4 Meetings
                    </span>
                  </div>
                </div>

                {/* 4. Avg. Meeting Rating */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-full bg-orange-50 text-orange-500 flex items-center justify-center shrink-0 mt-0.5">
                    <Star className="size-4.5" />
                  </div>
                  <div>
                    <span className="block text-[12px] text-[#64748B] font-semibold">
                      Avg. Meeting Rating
                    </span>
                    {/* Stars and Rating text */}
                    <div className="flex items-center gap-1.5 mt-0.5">
                      <span className="text-[13px] font-bold text-[#0B1B3D]">4.6/5</span>
                      <div className="flex items-center text-amber-500">
                        <Star className="size-3.5 fill-amber-500 text-amber-500" />
                        <Star className="size-3.5 fill-amber-500 text-amber-500" />
                        <Star className="size-3.5 fill-amber-500 text-amber-500" />
                        <Star className="size-3.5 fill-amber-500 text-amber-500" />
                        <span className="relative inline-block w-3.5 h-3.5 text-amber-500">
                          <Star className="absolute inset-0 size-3.5 text-amber-500" />
                          <span className="absolute inset-0 overflow-hidden w-[60%] text-amber-500">
                            <Star className="size-3.5 fill-amber-500 text-amber-500" />
                          </span>
                        </span>
                      </div>
                    </div>
                    <span className="block text-[11px] text-[#64748B] font-semibold mt-0.5">
                      Based on 12 feedbacks
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom blue link */}
            <div className="border-t border-gray-100 pt-4 mt-5 text-center">
              <Link
                id="insights-view-all"
                to="/importer/marketplace"
                className="text-[13px] font-bold text-[#2563EB] hover:text-blue-700 transition-colors"
              >
                View Full Insights &rarr;
              </Link>
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
