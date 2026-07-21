import { useState } from "react";
import { Main } from "@/components/layout/main";
import {
  ChevronRight,
  CalendarDays,
  LayoutDashboard,
  ChevronDown,
  FileBarChart2,
  ClipboardList,
  ShieldCheck,
  BarChart3,
} from "lucide-react";

// ─────────────────────────────────────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────────────────────────────────────

const kpiCards = [
  {
    id: 1,
    label: "Total Reports",
    value: "26",
    growth: "+18% from last month",
    iconBg: "#DBEAFE",
    iconColor: "#2563EB",
    Icon: FileBarChart2,
  },
  {
    id: 2,
    label: "Deals Initiated",
    value: "18",
    growth: "+12% from last month",
    iconBg: "#D1FAE5",
    iconColor: "#059669",
    Icon: ClipboardList,
  },
  {
    id: 3,
    label: "Deals Completed",
    value: "11",
    growth: "+15% from last month",
    iconBg: "#EDE9FE",
    iconColor: "#7C3AED",
    Icon: ShieldCheck,
  },
  {
    id: 4,
    label: "Success Rate",
    value: "68%",
    growth: "+8% from last month",
    iconBg: "#FEF3C7",
    iconColor: "#D97706",
    Icon: BarChart3,
  },
];

// 9 data points — labels only at every-other index (0,2,4,6,8)
const chartXLabels: Record<number, string> = {
  0: "01 May",
  2: "08 May",
  4: "15 May",
  6: "22 May",
  8: "29 May",
};
const consultationsData  = [30, 22, 35, 32, 37, 47, 62, 55, 78];
const dealsInitiatedData = [12, 13, 20, 21, 23, 25, 33, 41, 51];
const dealsCompletedData = [5,   8, 13, 14, 20, 21, 24, 26, 30];

const performanceAreas = [
  { label: "International Trade Advisory", pct: 92, color: "#2563EB" },
  { label: "Market Entry Strategy", pct: 78, color: "#F59E0B" },
  { label: "Regulatory Compliance", pct: 71, color: "#10B981" },
  { label: "Legal Documentation", pct: 65, color: "#8B5CF6" },
  { label: "Trade Establishment", pct: 58, color: "#F59E0B" },
];

const reportsList = [
  {
    id: 1,
    title: "Consultation Report",
    desc: "Detailed consultation analytics",
    Icon: FileBarChart2,
    iconBg: "#DBEAFE",
    iconColor: "#2563EB",
    actionLabel: "View",
    actionColor: "#2563EB",
    isViewAll: false,
  },
  {
    id: 2,
    title: "Deal Room Activity Report",
    desc: "Deal room performance summary",
    Icon: ClipboardList,
    iconBg: "#D1FAE5",
    iconColor: "#059669",
    actionLabel: "View",
    actionColor: "#2563EB",
    isViewAll: false,
  },
  {
    id: 3,
    title: "Compliance Report",
    desc: "Legal compliance overview",
    Icon: ShieldCheck,
    iconBg: "#EDE9FE",
    iconColor: "#7C3AED",
    actionLabel: "View",
    actionColor: "#2563EB",
    isViewAll: false,
  },
  {
    id: 4,
    title: "Performance Report",
    desc: "Overall performance analysis",
    Icon: BarChart3,
    iconBg: "#FEF3C7",
    iconColor: "#D97706",
    actionLabel: "View All",
    actionColor: "#D97706",
    isViewAll: true,
  },
];

const activitySegments = [
  { label: "Consultations", count: 156, pct: "36%", color: "#2563EB", ratio: 0.36 },
  { label: "Meetings", count: 132, pct: "31%", color: "#10B981", ratio: 0.31 },
  { label: "Deals Initiated", count: 94, pct: "22%", color: "#8B5CF6", ratio: 0.22 },
  { label: "Documents", count: 66, pct: "11%", color: "#F59E0B", ratio: 0.11 },
];

// ─────────────────────────────────────────────────────────────────────────────
// LINE CHART  (pure SVG, no deps)
// ─────────────────────────────────────────────────────────────────────────────

function LineChart() {
  const N = consultationsData.length; // 9
  const W = 540;
  const H = 220;
  const padL = 28;
  const padR = 4;
  const padT = 12;
  const padB = 32;
  const innerW = W - padL - padR;
  const innerH = H - padT - padB;
  const yMax = 100;
  const yTicks = [0, 25, 50, 75, 100];

  const xOf = (i: number) => padL + (i / (N - 1)) * innerW;
  const yOf = (v: number) => padT + ((yMax - v) / yMax) * innerH;

  const pathOf = (vals: number[]) =>
    vals.map((v, i) => `${i === 0 ? "M" : "L"}${xOf(i).toFixed(2)},${yOf(v).toFixed(2)}`).join(" ");

  const dotsOf = (vals: number[], fill: string) =>
    vals.map((v, i) => (
      <circle
        key={i}
        cx={xOf(i)}
        cy={yOf(v)}
        r={3.5}
        fill={fill}
        stroke="#ffffff"
        strokeWidth={1.5}
      />
    ));

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-full" preserveAspectRatio="none">
      {/* horizontal grid lines + Y labels */}
      {yTicks.map((tick) => (
        <g key={tick}>
          <line
            x1={padL}
            y1={yOf(tick)}
            x2={W - padR}
            y2={yOf(tick)}
            stroke="#EAECF4"
            strokeWidth={1}
          />
          <text
            x={padL - 6}
            y={yOf(tick) + 4}
            textAnchor="end"
            fontSize={10}
            fontFamily="Inter, sans-serif"
            fill="#94A3B8"
          >
            {tick}
          </text>
        </g>
      ))}

      {/* X axis labels — only at labeled positions */}
      {Object.entries(chartXLabels).map(([idxStr, label]) => {
        const i = Number(idxStr);
        return (
          <text
            key={label}
            x={xOf(i)}
            y={H - 10}
            textAnchor="middle"
            fontSize={10}
            fontFamily="Inter, sans-serif"
            fill="#94A3B8"
          >
            {label}
          </text>
        );
      })}

      {/* Lines */}
      <path
        d={pathOf(consultationsData)}
        fill="none"
        stroke="#2563EB"
        strokeWidth={1.8}
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <path
        d={pathOf(dealsInitiatedData)}
        fill="none"
        stroke="#10B981"
        strokeWidth={1.8}
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <path
        d={pathOf(dealsCompletedData)}
        fill="none"
        stroke="#8B5CF6"
        strokeWidth={1.8}
        strokeLinejoin="round"
        strokeLinecap="round"
      />

      {/* Dots — only at labeled x-positions */}
      {Object.keys(chartXLabels).map((idxStr) => {
        const i = Number(idxStr);
        return (
          <g key={i}>
            <circle cx={xOf(i)} cy={yOf(consultationsData[i])}  r={3.5} fill="#2563EB" stroke="#fff" strokeWidth={1.5} />
            <circle cx={xOf(i)} cy={yOf(dealsInitiatedData[i])} r={3.5} fill="#10B981" stroke="#fff" strokeWidth={1.5} />
            <circle cx={xOf(i)} cy={yOf(dealsCompletedData[i])} r={3.5} fill="#8B5CF6" stroke="#fff" strokeWidth={1.5} />
          </g>
        );
      })}
    </svg>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// DONUT CHART  (pure SVG)
// ─────────────────────────────────────────────────────────────────────────────

function DonutChart() {
  const size = 200;
  const cx = size / 2;
  const cy = size / 2;
  const outerR = 80;
  const strokeW = 28;          // ring thickness
  const midR = outerR - strokeW / 2; // midline radius for dash calc
  const circumference = 2 * Math.PI * midR;
  const gap = 2;               // tiny gap between segments

  let cumulativeAngle = -90;   // start at top

  const segments = activitySegments.map((seg, i) => {
    const segAngle = seg.ratio * 360;
    const startAngle = cumulativeAngle + gap / 2;
    cumulativeAngle += segAngle;
    const endAngle = cumulativeAngle - gap / 2;

    const toRad = (deg: number) => (deg * Math.PI) / 180;
    const x1 = cx + outerR * Math.cos(toRad(startAngle));
    const y1 = cy + outerR * Math.sin(toRad(startAngle));
    const x2 = cx + outerR * Math.cos(toRad(endAngle));
    const y2 = cy + outerR * Math.sin(toRad(endAngle));
    const x3 = cx + (outerR - strokeW) * Math.cos(toRad(endAngle));
    const y3 = cy + (outerR - strokeW) * Math.sin(toRad(endAngle));
    const x4 = cx + (outerR - strokeW) * Math.cos(toRad(startAngle));
    const y4 = cy + (outerR - strokeW) * Math.sin(toRad(startAngle));
    const largeArc = segAngle > 180 ? 1 : 0;

    const d = [
      `M ${x1} ${y1}`,
      `A ${outerR} ${outerR} 0 ${largeArc} 1 ${x2} ${y2}`,
      `L ${x3} ${y3}`,
      `A ${outerR - strokeW} ${outerR - strokeW} 0 ${largeArc} 0 ${x4} ${y4}`,
      "Z",
    ].join(" ");

    return <path key={i} d={d} fill={seg.color} />;
  });

  return (
    <svg
      viewBox={`0 0 ${size} ${size}`}
      className="flex-shrink-0"
      style={{ width: 160, height: 160 }}
    >
      {/* track */}
      <circle
        cx={cx}
        cy={cy}
        r={outerR - strokeW / 2}
        fill="none"
        stroke="#F1F5F9"
        strokeWidth={strokeW}
      />
      {segments}
      {/* center total */}
      <text
        x={cx}
        y={cy - 10}
        textAnchor="middle"
        fontSize={26}
        fontWeight="800"
        fontFamily="Inter, sans-serif"
        fill="#0F172A"
      >
        428
      </text>
      <text
        x={cx}
        y={cy + 10}
        textAnchor="middle"
        fontSize={9.5}
        fontFamily="Inter, sans-serif"
        fill="#94A3B8"
        letterSpacing="0.3"
      >
        Total Activities
      </text>
    </svg>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// CARD WRAPPER
// ─────────────────────────────────────────────────────────────────────────────

function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`bg-white rounded-2xl border border-[#E8EDF5] shadow-[0_2px_12px_rgba(15,23,42,0.06)] ${className}`}
    >
      {children}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────────────────────────────────────

export default function PartnerReportsPage() {
  const [chartFilter, setChartFilter] = useState("Dashboard");
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <Main fluid className="px-6 pt-4 pb-8 bg-[#F8FAFC] min-h-screen">
      <div className="flex flex-col gap-6">

        {/* ── HEADER ──────────────────────────────────────────────── */}
        <div className="flex items-end justify-between gap-4 pl-1 sm:pl-2">
          <div>
            <h1
              className="font-bold text-[#0F172A] tracking-tight leading-none"
              style={{ fontSize: 28 }}
            >
              Reports &amp; Insights
            </h1>
            <p className="text-[13px] text-[#64748B] mt-[5px] leading-none">
              Analyze performance and track key metrics
            </p>
          </div>
          <div className="flex items-center gap-2 bg-white border border-[#E8EDF5] rounded-xl px-3.5 py-2 shadow-sm">
            <CalendarDays className="w-4 h-4 text-[#64748B] flex-shrink-0" />
            <span className="text-[13px] font-medium text-[#374151]">
              12 May 2025 – 31 May 2025
            </span>
          </div>
        </div>

        {/* ── KPI CARDS ───────────────────────────────────────────── */}
        <div className="grid grid-cols-4 gap-5">
          {kpiCards.map((card) => {
            const Icon = card.Icon;
            return (
              <Card key={card.id} className="px-5 py-4 flex items-center gap-4">
                {/* Icon block */}
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: card.iconBg }}
                >
                  <Icon className="w-5 h-5" style={{ color: card.iconColor }} />
                </div>
                {/* Text */}
                <div className="min-w-0">
                  <p className="text-[13px] font-medium text-[#64748B] leading-tight truncate">
                    {card.label}
                  </p>
                  <p
                    className="font-bold text-[#0F172A] leading-tight mt-0.5"
                    style={{ fontSize: 30 }}
                  >
                    {card.value}
                  </p>
                  <p className="text-[11.5px] font-medium text-[#22C55E] mt-0.5 leading-tight">
                    {card.growth}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>

        {/* ── MIDDLE ROW ──────────────────────────────────────────── */}
        <div className="flex gap-5 items-stretch">

          {/* Performance Overview */}
          <Card className="flex-1 min-w-0 p-6 flex flex-col">
            {/* header */}
            <div className="flex items-center justify-between mb-4">
              <h2
                className="font-semibold text-[#0F172A]"
                style={{ fontSize: 15 }}
              >
                Performance Overview
              </h2>
              <div className="relative">
                <button
                  onClick={() => setShowDropdown((v) => !v)}
                  className="flex items-center gap-1.5 text-[12px] font-medium text-[#374151] border border-[#E8EDF5] rounded-lg px-2.5 py-1.5 hover:bg-[#F8FAFC] transition-colors"
                >
                  <LayoutDashboard className="w-3.5 h-3.5 text-[#64748B]" />
                  {chartFilter}
                  <ChevronDown className="w-3 h-3 text-[#94A3B8]" />
                </button>
                {showDropdown && (
                  <div className="absolute right-0 top-full mt-1 bg-white border border-[#E8EDF5] rounded-xl shadow-lg z-20 py-1 min-w-[130px]">
                    {["Dashboard", "Weekly", "Monthly"].map((opt) => (
                      <button
                        key={opt}
                        onClick={() => {
                          setChartFilter(opt);
                          setShowDropdown(false);
                        }}
                        className="w-full text-left px-3 py-2 text-[12px] text-[#374151] hover:bg-[#F8FAFC]"
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* chart area */}
            <div className="w-full" style={{ height: 230 }}>
              <LineChart />
            </div>

            {/* legend */}
            <div className="flex items-center gap-7 mt-2">
              {[
                { label: "Consultations",   color: "#2563EB" },
                { label: "Deals Initiated", color: "#10B981" },
                { label: "Deals Completed", color: "#8B5CF6" },
              ].map((l) => (
                <div key={l.label} className="flex items-center gap-2">
                  {/* line — filled dot — line */}
                  <div className="flex items-center">
                    <div className="h-px w-6" style={{ backgroundColor: l.color }} />
                    <div
                      className="w-2 h-2 rounded-full mx-[2px]"
                      style={{ backgroundColor: l.color }}
                    />
                    <div className="h-px w-6" style={{ backgroundColor: l.color }} />
                  </div>
                  <span className="text-[12.5px] text-[#475569]">{l.label}</span>
                </div>
              ))}
            </div>
          </Card>

          {/* Top Performance Areas */}
          <Card className="w-[260px] flex-shrink-0 p-6">
            <div className="flex items-center justify-between mb-5">
              <h2 className="font-semibold text-[#0F172A]" style={{ fontSize: 15 }}>
                Top Performance Areas
              </h2>
              <ChevronRight className="w-4 h-4 text-[#CBD5E1]" />
            </div>
            <div className="flex flex-col gap-[18px]">
              {performanceAreas.map((area) => (
                <div key={area.label}>
                  <div className="flex items-center justify-between mb-[7px]">
                    <span className="text-[13px] text-[#374151] leading-tight truncate pr-2">
                      {area.label}
                    </span>
                    <span className="text-[13px] font-semibold text-[#0F172A] flex-shrink-0">
                      {area.pct}%
                    </span>
                  </div>
                  <div className="h-[5px] w-full bg-[#F1F5F9] rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: `${area.pct}%`,
                        backgroundColor: area.color,
                        transition: "width 0.6s ease",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* ── BOTTOM ROW ──────────────────────────────────────────── */}
        <div className="flex gap-5 items-stretch">

          {/* Reports List */}
          <Card className="flex-1 min-w-0 overflow-hidden">
            <div className="px-6 py-4 border-b border-[#F1F5F9]">
              <h2 className="font-semibold text-[#0F172A]" style={{ fontSize: 15 }}>
                Reports
              </h2>
            </div>
            <div className="divide-y divide-[#F8FAFC]">
              {reportsList.map((report) => {
                const Icon = report.Icon;
                return (
                  <div
                    key={report.id}
                    className="flex items-center gap-4 px-6 py-3.5 hover:bg-[#FAFBFD] transition-colors"
                  >
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: report.iconBg }}
                    >
                      <Icon className="w-[17px] h-[17px]" style={{ color: report.iconColor }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[13.5px] font-semibold text-[#0F172A] leading-tight truncate">
                        {report.title}
                      </p>
                      <p className="text-[12px] text-[#94A3B8] mt-0.5 leading-tight">
                        {report.desc}
                      </p>
                    </div>
                    <button
                      className="text-[13px] font-semibold flex-shrink-0 hover:opacity-75 transition-opacity"
                      style={{ color: report.actionColor }}
                    >
                      {report.actionLabel}
                    </button>
                  </div>
                );
              })}
            </div>
          </Card>

          {/* Recent Activity Overview */}
          <Card className="w-[310px] flex-shrink-0 p-6">
            <h2 className="font-semibold text-[#0F172A] mb-5" style={{ fontSize: 15 }}>
              Recent Activity Overview
            </h2>
            <div className="flex items-center gap-5">
              {/* Donut */}
              <DonutChart />
              {/* Legend */}
              <div className="flex flex-col gap-3.5 flex-1">
                {activitySegments.map((seg) => (
                  <div key={seg.label} className="flex items-start gap-2">
                    <span
                      className="mt-[3px] w-2.5 h-2.5 rounded-full flex-shrink-0"
                      style={{ backgroundColor: seg.color }}
                    />
                    <div className="min-w-0">
                      <p className="text-[12.5px] font-medium text-[#374151] leading-tight">
                        {seg.label}
                      </p>
                      <p className="text-[11.5px] text-[#94A3B8] leading-tight mt-0.5">
                        {seg.count} ({seg.pct})
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>

      </div>
    </Main>
  );
}
