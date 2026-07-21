import { Link } from "react-router-dom";
import {
  ArrowDownRight,
  ArrowUpRight,
  Briefcase,
  CheckCircle2,
  FileText,
  TrendingUp,
  XCircle,
} from "lucide-react";
import { Main } from "@/components/layout/main";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const KPIS = [
  {
    label: "Deals Initiated",
    value: "26",
    trend: "+16%",
    up: true,
    icon: Briefcase,
    iconBg: "bg-[#EFF8FF]",
    iconColor: "text-[#175CD3]",
  },
  {
    label: "Deals Completed",
    value: "18",
    trend: "+22%",
    up: true,
    icon: CheckCircle2,
    iconBg: "bg-[#ECFDF3]",
    iconColor: "text-[#039855]",
  },
  {
    label: "Deals Cancelled",
    value: "11",
    trend: "-10%",
    up: false,
    icon: XCircle,
    iconBg: "bg-[#F4F3FF]",
    iconColor: "text-[#6938EF]",
  },
  {
    label: "Performance Rate",
    value: "68%",
    trend: "+5%",
    up: true,
    icon: TrendingUp,
    iconBg: "bg-[#FFFAEB]",
    iconColor: "text-[#DC6803]",
  },
];

const PERFORMANCE_DATA = [
  { month: "Jan", consultations: 18, initiated: 12, completed: 8 },
  { month: "Feb", consultations: 22, initiated: 15, completed: 10 },
  { month: "Mar", consultations: 20, initiated: 18, completed: 12 },
  { month: "Apr", consultations: 28, initiated: 20, completed: 15 },
  { month: "May", consultations: 26, initiated: 22, completed: 16 },
  { month: "Jun", consultations: 32, initiated: 26, completed: 18 },
];

const TOP_AREAS = [
  { name: "Trade Advisory", value: 86 },
  { name: "Market Strategy", value: 74 },
  { name: "Deal Facilitation", value: 68 },
  { name: "Compliance Support", value: 55 },
  { name: "Partner Matching", value: 48 },
];

const REPORTS = [
  { title: "Consultation Summary Report", date: "Updated 12 May 2025", type: "PDF" },
  { title: "Deal Room Activity Report", date: "Updated 10 May 2025", type: "PDF" },
  { title: "Compliance Status Report", date: "Updated 08 May 2025", type: "DOCX" },
  { title: "Performance Analytics Report", date: "Updated 05 May 2025", type: "PDF" },
];

const ACTIVITY = [
  { name: "Consultations", value: 38, color: "#175CD3" },
  { name: "Meetings", value: 24, color: "#12B76A" },
  { name: "Deal Rooms", value: 20, color: "#F79009" },
  { name: "Referrals", value: 18, color: "#6938EF" },
];

export default function AgentReportsPage() {
  return (
    <Main
      fluid
      className="min-h-full space-y-5 overflow-x-hidden bg-[#F8FAFC]! px-3 pb-8 sm:space-y-6 sm:px-5"
    >
      <div>
        <h1 className="text-[22px] font-bold text-[#101828] sm:text-[24px]">
          Reports & Insights
        </h1>
        <p className="mt-1 text-[13px] text-[#667085]">
          Analyse performance and track key metrics.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {KPIS.map((kpi) => (
          <div
            key={kpi.label}
            className="rounded-2xl border border-[#E4E7EC] bg-white p-4 shadow-[0_1px_2px_rgba(16,24,40,0.05)]"
          >
            <div className="flex items-start justify-between gap-2">
              <div>
                <p className="text-[11px] font-medium text-[#667085]">{kpi.label}</p>
                <p className="mt-1.5 text-[24px] font-bold leading-none text-[#101828]">
                  {kpi.value}
                </p>
                <p
                  className={`mt-2 inline-flex items-center gap-0.5 text-[11px] font-semibold ${
                    kpi.up ? "text-[#039855]" : "text-[#D92D20]"
                  }`}
                >
                  {kpi.up ? (
                    <ArrowUpRight className="size-3.5" />
                  ) : (
                    <ArrowDownRight className="size-3.5" />
                  )}
                  {kpi.trend}
                </p>
              </div>
              <span
                className={`flex size-12 shrink-0 items-center justify-center rounded-xl ${kpi.iconBg} ${kpi.iconColor}`}
              >
                <kpi.icon className="size-6" />
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-4 xl:grid-cols-[minmax(0,1.4fr)_minmax(280px,1fr)]">
        <div className="rounded-2xl border border-[#E4E7EC] bg-white p-4 shadow-[0_1px_2px_rgba(16,24,40,0.05)] sm:p-5">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h2 className="text-[14px] font-bold text-[#101828]">Performance Overview</h2>
            <div className="flex flex-wrap items-center gap-3 text-[10px] text-[#667085]">
              <span className="flex items-center gap-1.5">
                <span className="size-2 rounded-full bg-[#175CD3]" /> Consultations
              </span>
              <span className="flex items-center gap-1.5">
                <span className="size-2 rounded-full bg-[#F79009]" /> Deals Initiated
              </span>
              <span className="flex items-center gap-1.5">
                <span className="size-2 rounded-full bg-[#12B76A]" /> Deals Completed
              </span>
            </div>
          </div>
          <div className="mt-4 h-[240px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={PERFORMANCE_DATA}>
                <defs>
                  <linearGradient id="consultFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#175CD3" stopOpacity={0.25} />
                    <stop offset="100%" stopColor="#175CD3" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid stroke="#F2F4F7" vertical={false} />
                <XAxis
                  dataKey="month"
                  tick={{ fill: "#98A2B3", fontSize: 11 }}
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis
                  tick={{ fill: "#98A2B3", fontSize: 11 }}
                  axisLine={false}
                  tickLine={false}
                />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="consultations"
                  stroke="#175CD3"
                  fill="url(#consultFill)"
                  strokeWidth={2}
                />
                <Area
                  type="monotone"
                  dataKey="initiated"
                  stroke="#F79009"
                  fill="transparent"
                  strokeWidth={2}
                />
                <Area
                  type="monotone"
                  dataKey="completed"
                  stroke="#12B76A"
                  fill="transparent"
                  strokeWidth={2}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="rounded-2xl border border-[#E4E7EC] bg-white p-4 shadow-[0_1px_2px_rgba(16,24,40,0.05)] sm:p-5">
          <h2 className="text-[14px] font-bold text-[#101828]">Top Performance Areas</h2>
          <div className="mt-4 h-[240px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={TOP_AREAS} layout="vertical" margin={{ left: 8, right: 8 }}>
                <CartesianGrid stroke="#F2F4F7" horizontal={false} />
                <XAxis type="number" hide />
                <YAxis
                  type="category"
                  dataKey="name"
                  width={110}
                  tick={{ fill: "#475467", fontSize: 11 }}
                  axisLine={false}
                  tickLine={false}
                />
                <Tooltip />
                <Bar dataKey="value" fill="#175CD3" radius={[0, 6, 6, 0]} barSize={14} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 xl:grid-cols-[minmax(0,1.2fr)_minmax(280px,1fr)]">
        <div className="rounded-2xl border border-[#E4E7EC] bg-white p-4 shadow-[0_1px_2px_rgba(16,24,40,0.05)] sm:p-5">
          <div className="flex items-center justify-between gap-2">
            <h2 className="text-[14px] font-bold text-[#101828]">Reports</h2>
            <Link
              to="/agent/resources"
              className="text-[11px] font-semibold text-[#175CD3] hover:underline"
            >
              View All
            </Link>
          </div>
          <ul className="mt-4 divide-y divide-[#F2F4F7]">
            {REPORTS.map((report) => (
              <li key={report.title} className="flex items-center gap-3 py-3 first:pt-0 last:pb-0">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-[#EFF8FF] text-[#175CD3]">
                  <FileText className="size-5" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-[13px] font-semibold text-[#101828]">
                    {report.title}
                  </p>
                  <p className="mt-0.5 text-[11px] text-[#667085]">{report.date}</p>
                </div>
                <span className="shrink-0 rounded-full bg-[#F2F4F7] px-2 py-0.5 text-[10px] font-semibold text-[#475467]">
                  {report.type}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-[#E4E7EC] bg-white p-4 shadow-[0_1px_2px_rgba(16,24,40,0.05)] sm:p-5">
          <h2 className="text-[14px] font-bold text-[#101828]">Recent Activity Overview</h2>
          <div className="mt-2 flex flex-col items-center gap-4 sm:flex-row">
            <div className="h-[160px] w-[160px] shrink-0">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={ACTIVITY}
                    dataKey="value"
                    innerRadius={48}
                    outerRadius={70}
                    paddingAngle={3}
                  >
                    {ACTIVITY.map((entry) => (
                      <Cell key={entry.name} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <ul className="w-full space-y-2.5">
              {ACTIVITY.map((item) => (
                <li key={item.name} className="flex items-center justify-between gap-2">
                  <span className="flex items-center gap-2 text-[12px] text-[#344054]">
                    <span
                      className="size-2.5 rounded-full"
                      style={{ backgroundColor: item.color }}
                    />
                    {item.name}
                  </span>
                  <span className="text-[12px] font-bold text-[#101828]">{item.value}%</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Main>
  );
}
