import { useState } from "react";
import {
  Search,
  FileBarChart,
  Sparkles,
  Flame,
  Globe2,
  Download,
  TrendingUp,
  TrendingDown,
  Crown,
  SlidersHorizontal,
  ChevronDown,
  ArrowRight,
  FileText,
  Lightbulb,
  Target,
  ShieldAlert,
  Trophy,
  Building2,
  Truck,
  Factory,
  Map,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  ExporterPageShell,
  ExporterCard,
  ExporterBreadcrumb,
  ExporterTabs,
} from "@/components/exporter/exporter-page-layout";

import uaeImg from "@/assets/dashboard/exporter/uae.jpg";
import usaImg from "@/assets/dashboard/exporter/usa.jpg";
import saudiImg from "@/assets/dashboard/exporter/saudi.jpg";
import kenyaImg from "@/assets/dashboard/exporter/kenya.jpg";

const FLAG = (code: string) => `https://flagcdn.com/w40/${code}.png`;

const LIST_TABS = [
  "All Reports",
  "Featured",
  "Latest",
  "Popular",
  "By Country",
  "By Industry",
];

const STATS = [
  {
    label: "Total Reports",
    value: "126",
    icon: FileBarChart,
    bg: "bg-[#EFF8FF]",
    color: "text-[#175CD3]",
  },
  {
    label: "New This Month",
    value: "12",
    icon: Sparkles,
    bg: "bg-[#ECFDF3]",
    color: "text-[#039855]",
  },
  {
    label: "Popular Reports",
    value: "24",
    icon: Flame,
    bg: "bg-[#F4F3FF]",
    color: "text-[#7A5AF8]",
  },
  {
    label: "Countries Covered",
    value: "86",
    icon: Globe2,
    bg: "bg-[#ECFDF3]",
    color: "text-[#039855]",
  },
];

const FEATURED = [
  {
    title: "U.S. Market Outlook 2024",
    country: "us",
    category: "Economy",
    desc: "Comprehensive analysis of U.S. consumer trends, import demand and sector opportunities.",
    img: usaImg,
    size: "24.5 MB",
  },
  {
    title: "UAE Trade & Logistics Report",
    country: "ae",
    category: "Trade & Logistics",
    desc: "Gateway markets, free zones, and logistics corridors shaping UAE re-exports.",
    img: uaeImg,
    size: "18.2 MB",
  },
  {
    title: "India Pharma Export Guide",
    country: "in",
    category: "Healthcare",
    desc: "Regulatory pathways, top markets, and partner profiles for Indian pharma exporters.",
    img: kenyaImg,
    size: "21.0 MB",
  },
  {
    title: "China Manufacturing Trends",
    country: "cn",
    category: "Industry Reports",
    desc: "Supply chain shifts, nearshoring impact, and sourcing opportunities in China.",
    img: saudiImg,
    size: "27.8 MB",
  },
];

const CATEGORY_STYLE: Record<string, string> = {
  Economy: "bg-[#EFF8FF] text-[#175CD3]",
  "Trade & Logistics": "bg-[#ECFDF3] text-[#027A48]",
  Energy: "bg-[#FFFAEB] text-[#B54708]",
  "Regional Insights": "bg-[#F4F3FF] text-[#7A5AF8]",
  Healthcare: "bg-[#F0F9FF] text-[#026AA2]",
  "Industry Reports": "bg-[#F2F4F7] text-[#344054]",
};

const ALL_REPORTS = [
  {
    title: "Global Economy Outlook 2025",
    desc: "Macro trends, risk scenarios and trade implications for exporters.",
    category: "Economy",
    region: "Global",
    date: "12 Jul 2025",
    size: "12.4 MB",
    downloads: "3.2K",
    img: usaImg,
  },
  {
    title: "ASEAN Trade Corridor Analysis",
    desc: "Port capacity, FTAs and logistics costs across Southeast Asia.",
    category: "Trade & Logistics",
    region: "Asia",
    date: "10 Jul 2025",
    size: "9.8 MB",
    downloads: "2.1K",
    img: uaeImg,
  },
  {
    title: "Middle East Energy Transition",
    desc: "Renewables investment, petrochemicals and export opportunities.",
    category: "Energy",
    region: "Middle East",
    date: "8 Jul 2025",
    size: "15.1 MB",
    downloads: "1.8K",
    img: saudiImg,
  },
  {
    title: "Africa Regional Market Brief",
    desc: "Country-level demand signals across East and West Africa.",
    category: "Regional Insights",
    region: "Africa",
    date: "5 Jul 2025",
    size: "11.2 MB",
    downloads: "1.4K",
    img: kenyaImg,
  },
  {
    title: "Healthcare Devices Import Guide",
    desc: "Regulatory pathways and buyer profiles in key healthcare markets.",
    category: "Healthcare",
    region: "Global",
    date: "1 Jul 2025",
    size: "8.6 MB",
    downloads: "980",
    img: usaImg,
  },
];

const DONUT = [
  { label: "Economy", count: 32, pct: 25, color: "#175CD3" },
  { label: "Trade & Logistics", count: 24, pct: 19, color: "#039855" },
  { label: "Industry Reports", count: 28, pct: 22, color: "#7A5AF8" },
  { label: "Country Reports", count: 30, pct: 24, color: "#F79009" },
  { label: "Other", count: 12, pct: 9, color: "#98A2B3" },
];

const TRENDING = [
  { title: "U.S. Market Outlook 2024", category: "Economy", views: "1.4K", up: true },
  { title: "GCC Retail Expansion", category: "Trade", views: "1.2K", up: true },
  { title: "EU Green Compliance", category: "Industry", views: "980", up: false },
  { title: "India Pharma Export Guide", category: "Healthcare", views: "870", up: true },
  { title: "ASEAN Logistics Map", category: "Trade", views: "760", up: true },
];

const TOP_CATEGORIES = [
  { name: "Economy", count: 32, icon: Building2, bg: "bg-[#EFF8FF]", color: "text-[#175CD3]" },
  { name: "Trade & Logistics", count: 24, icon: Truck, bg: "bg-[#ECFDF3]", color: "text-[#039855]" },
  { name: "Industry Reports", count: 28, icon: Factory, bg: "bg-[#F4F3FF]", color: "text-[#7A5AF8]" },
  { name: "Country Reports", count: 30, icon: Map, bg: "bg-[#FFFAEB]", color: "text-[#F79009]" },
  { name: "Energy", count: 12, icon: Zap, bg: "bg-[#FEF3F2]", color: "text-[#D92D20]" },
];

const WHY_MATTER = [
  {
    title: "Make Informed Decisions",
    desc: "Base market entry and pricing on verified data, not guesswork.",
    icon: Lightbulb,
  },
  {
    title: "Identify Opportunities",
    desc: "Spot high-demand sectors and emerging buyer corridors early.",
    icon: Target,
  },
  {
    title: "Mitigate Risks",
    desc: "Understand regulatory, currency and geopolitical exposure upfront.",
    icon: ShieldAlert,
  },
  {
    title: "Stay Competitive",
    desc: "Track competitor moves and shifting trade patterns in real time.",
    icon: Trophy,
  },
];

function DonutChart() {
  let offset = 0;
  const radius = 36;
  const circumference = 2 * Math.PI * radius;
  const segments = DONUT.map((d) => {
    const len = (d.pct / 100) * circumference;
    const seg = { ...d, dash: len, offset };
    offset += len;
    return seg;
  });

  return (
    <div className="relative mx-auto size-[110px]">
      <svg viewBox="0 0 100 100" className="size-full -rotate-90">
        {segments.map((s) => (
          <circle
            key={s.label}
            cx="50"
            cy="50"
            r={radius}
            fill="none"
            stroke={s.color}
            strokeWidth="12"
            strokeDasharray={`${s.dash} ${circumference - s.dash}`}
            strokeDashoffset={-s.offset}
          />
        ))}
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <p className="text-[18px] font-bold leading-none text-[#101828]">126</p>
        <p className="text-[9px] text-[#667085]">Total</p>
      </div>
    </div>
  );
}

export default function MarketReportsPage() {
  const [activeTab, setActiveTab] = useState("All Reports");

  return (
    <ExporterPageShell>
      <div>
        <ExporterBreadcrumb
          items={[
            { label: "Dashboard", to: "/dashboard" },
            { label: "Intelligence", to: "/dashboard/country-intelligence" },
            { label: "Market Reports" },
          ]}
        />
        <h1 className="mt-2 text-[22px] font-bold text-[#101828] sm:text-[24px]">
          Market Reports
        </h1>
        <p className="mt-1 max-w-2xl text-[13px] leading-relaxed text-[#667085]">
          Access in-depth market insights, industry analysis and trend reports to make informed
          business decisions.
        </p>
      </div>

      <div className="grid grid-cols-1 items-start gap-5 xl:grid-cols-[minmax(0,1fr)_280px]">
        <section className="min-w-0 space-y-5">
          {/* Stats */}
          <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
            {STATS.map((s) => (
              <div
                key={s.label}
                className="rounded-xl border border-[#E4E7EC] bg-white p-4 shadow-[0_1px_2px_rgba(16,24,40,0.05)]"
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <p className="text-[10px] text-[#667085]">{s.label}</p>
                    <p className="mt-1.5 text-[22px] font-bold leading-none text-[#101828]">
                      {s.value}
                    </p>
                  </div>
                  <span
                    className={`flex size-8 shrink-0 items-center justify-center rounded-lg ${s.bg} ${s.color}`}
                  >
                    <s.icon className="size-4" />
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Filters */}
          <ExporterCard>
            <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
              <div className="relative min-w-0 flex-1">
                <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-[#98A2B3]" />
                <input
                  type="search"
                  placeholder="Search reports by title, industry, country or keyword..."
                  className="h-10 w-full rounded-lg border border-[#D0D5DD] bg-white pl-9 pr-3 text-[13px] text-[#101828] outline-none placeholder:text-[#98A2B3] focus:border-[#175CD3] focus:ring-1 focus:ring-[#175CD3]"
                />
              </div>
              <div className="flex flex-wrap gap-2">
                {["All Categories", "All Countries", "All Industries"].map((label) => (
                  <button
                    key={label}
                    type="button"
                    className="flex h-10 items-center gap-1.5 rounded-lg border border-[#D0D5DD] bg-white px-3 text-[12px] font-medium text-[#344054]"
                  >
                    {label}
                    <ChevronDown className="size-3.5 text-[#98A2B3]" />
                  </button>
                ))}
                <Button
                  variant="outline"
                  className="h-10 rounded-lg border-[#D0D5DD] text-[12px] font-semibold text-[#344054]"
                >
                  <SlidersHorizontal className="mr-1.5 size-3.5" />
                  Filters
                </Button>
              </div>
            </div>
          </ExporterCard>

          {/* Tabs + sort */}
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div className="min-w-0 flex-1 overflow-x-auto">
              <ExporterTabs tabs={LIST_TABS} active={activeTab} onChange={setActiveTab} />
            </div>
            <button
              type="button"
              className="flex h-9 shrink-0 items-center gap-1.5 self-end rounded-lg border border-[#D0D5DD] bg-white px-3 text-[12px] font-medium text-[#344054]"
            >
              Sort by: Latest
              <ChevronDown className="size-3.5 text-[#98A2B3]" />
            </button>
          </div>

          {/* Featured */}
          <div>
            <div className="mb-3 flex items-center justify-between gap-2">
              <h2 className="text-[15px] font-bold text-[#101828]">Featured Reports</h2>
              <button
                type="button"
                className="flex items-center gap-1 text-[12px] font-semibold text-[#175CD3] hover:underline"
              >
                View All Featured
                <ArrowRight className="size-3.5" />
              </button>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {FEATURED.map((r) => (
                <div
                  key={r.title}
                  className="overflow-hidden rounded-xl border border-[#E4E7EC] bg-white shadow-[0_1px_2px_rgba(16,24,40,0.05)]"
                >
                  <div className="relative h-[110px]">
                    <img src={r.img} alt="" className="size-full object-cover" />
                    <img
                      src={FLAG(r.country)}
                      alt=""
                      className="absolute left-2.5 top-2.5 size-6 rounded-full border-2 border-white object-cover shadow"
                    />
                    <span className="absolute right-2.5 top-2.5 rounded bg-[#175CD3] px-1.5 py-0.5 text-[8px] font-bold uppercase tracking-wide text-white">
                      Featured
                    </span>
                  </div>
                  <div className="p-3">
                    <p className="line-clamp-2 text-[12px] font-bold leading-snug text-[#101828]">
                      {r.title}
                    </p>
                    <span
                      className={`mt-1.5 inline-block rounded-full px-2 py-0.5 text-[9px] font-semibold ${
                        CATEGORY_STYLE[r.category] || "bg-[#F2F4F7] text-[#344054]"
                      }`}
                    >
                      {r.category}
                    </span>
                    <p className="mt-1.5 line-clamp-2 text-[10px] leading-relaxed text-[#667085]">
                      {r.desc}
                    </p>
                    <div className="mt-2.5 flex items-center justify-between border-t border-[#F2F4F7] pt-2">
                      <span className="flex items-center gap-1 text-[10px] text-[#667085]">
                        <FileText className="size-3 text-[#D92D20]" />
                        PDF · {r.size}
                      </span>
                      <button
                        type="button"
                        className="flex size-7 items-center justify-center rounded-lg bg-[#EFF8FF] text-[#175CD3] hover:bg-[#D1E9FF]"
                        aria-label="Download"
                      >
                        <Download className="size-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* All reports table */}
          <ExporterCard className="overflow-hidden p-0">
            <div className="border-b border-[#E4E7EC] px-4 py-3">
              <h2 className="text-[15px] font-bold text-[#101828]">All Market Reports</h2>
            </div>
            <div className="overflow-x-auto -mx-1">
              <table className="w-full min-w-[720px] text-left">
                <thead>
                  <tr className="border-b border-[#E4E7EC] bg-[#F9FAFB] text-[10px] font-semibold uppercase tracking-wide text-[#667085]">
                    <th className="px-4 py-2.5 font-semibold">Report Title</th>
                    <th className="px-3 py-2.5 font-semibold">Category</th>
                    <th className="px-3 py-2.5 font-semibold">Country/Region</th>
                    <th className="px-3 py-2.5 font-semibold">Date</th>
                    <th className="px-3 py-2.5 font-semibold">Size</th>
                    <th className="px-3 py-2.5 font-semibold">Downloads</th>
                    <th className="px-3 py-2.5 font-semibold">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {ALL_REPORTS.map((r) => (
                    <tr
                      key={r.title}
                      className="border-b border-[#F2F4F7] last:border-0 hover:bg-[#F9FAFB]"
                    >
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-2.5">
                          <img
                            src={r.img}
                            alt=""
                            className="size-9 shrink-0 rounded-lg object-cover"
                          />
                          <div className="min-w-0">
                            <p className="truncate text-[12px] font-semibold text-[#101828]">
                              {r.title}
                            </p>
                            <p className="truncate text-[10px] text-[#667085]">{r.desc}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-3 py-3">
                        <span
                          className={`inline-block rounded-full px-2 py-0.5 text-[10px] font-semibold ${
                            CATEGORY_STYLE[r.category] || "bg-[#F2F4F7] text-[#344054]"
                          }`}
                        >
                          {r.category}
                        </span>
                      </td>
                      <td className="px-3 py-3">
                        <span className="flex items-center gap-1 text-[11px] text-[#344054]">
                          <Globe2 className="size-3 text-[#98A2B3]" />
                          {r.region}
                        </span>
                      </td>
                      <td className="px-3 py-3 text-[11px] text-[#667085]">{r.date}</td>
                      <td className="px-3 py-3 text-[11px] text-[#667085]">{r.size}</td>
                      <td className="px-3 py-3 text-[11px] font-semibold text-[#101828]">
                        {r.downloads}
                      </td>
                      <td className="px-3 py-3">
                        <button
                          type="button"
                          className="flex size-8 items-center justify-center rounded-lg border border-[#E4E7EC] text-[#175CD3] hover:bg-[#EFF8FF]"
                          aria-label="Download report"
                        >
                          <Download className="size-3.5" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="flex justify-center border-t border-[#E4E7EC] py-3">
              <Button
                variant="outline"
                className="h-9 rounded-lg border-[#D0D5DD] text-[12px] font-semibold text-[#344054]"
              >
                Load More Reports
                <ChevronDown className="ml-1.5 size-3.5" />
              </Button>
            </div>
          </ExporterCard>

          {/* Why matter */}
          <ExporterCard>
            <h2 className="text-[15px] font-bold text-[#101828]">Why Market Reports Matter?</h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {WHY_MATTER.map((w) => (
                <div key={w.title}>
                  <span className="flex size-9 items-center justify-center rounded-lg bg-[#EFF8FF] text-[#175CD3]">
                    <w.icon className="size-4" />
                  </span>
                  <p className="mt-2.5 text-[12px] font-bold text-[#101828]">{w.title}</p>
                  <p className="mt-1 text-[11px] leading-relaxed text-[#667085]">{w.desc}</p>
                </div>
              ))}
            </div>
          </ExporterCard>
        </section>

        {/* Right sidebar */}
        <aside className="space-y-4">
          <ExporterCard>
            <h3 className="text-[14px] font-bold text-[#101828]">Reports Overview</h3>
            <div className="mt-3 flex flex-col items-center gap-3">
              <DonutChart />
              <ul className="w-full space-y-1.5">
                {DONUT.map((d) => (
                  <li
                    key={d.label}
                    className="flex items-center justify-between gap-2 text-[10px]"
                  >
                    <span className="flex min-w-0 items-center gap-1.5">
                      <span
                        className="size-2 shrink-0 rounded-full"
                        style={{ backgroundColor: d.color }}
                      />
                      <span className="truncate text-[#344054]">{d.label}</span>
                    </span>
                    <span className="shrink-0 font-semibold text-[#101828]">
                      {d.count} ({d.pct}%)
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </ExporterCard>

          <ExporterCard>
            <div className="flex items-center justify-between gap-2">
              <h3 className="text-[14px] font-bold text-[#101828]">Trending This Week</h3>
              <button
                type="button"
                className="text-[11px] font-semibold text-[#175CD3] hover:underline"
              >
                View All
              </button>
            </div>
            <ol className="mt-3 space-y-2.5">
              {TRENDING.map((t, i) => (
                <li key={t.title} className="flex items-start gap-2">
                  <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-[#EFF8FF] text-[10px] font-bold text-[#175CD3]">
                    {i + 1}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-[11px] font-semibold text-[#101828]">{t.title}</p>
                    <p className="text-[9px] text-[#98A2B3]">{t.category}</p>
                  </div>
                  <span
                    className={`flex shrink-0 items-center gap-0.5 text-[10px] font-semibold ${
                      t.up ? "text-[#039855]" : "text-[#D92D20]"
                    }`}
                  >
                    {t.up ? (
                      <TrendingUp className="size-3" />
                    ) : (
                      <TrendingDown className="size-3" />
                    )}
                    {t.views}
                  </span>
                </li>
              ))}
            </ol>
          </ExporterCard>

          <ExporterCard>
            <div className="flex items-center justify-between gap-2">
              <h3 className="text-[14px] font-bold text-[#101828]">Top Categories</h3>
              <button
                type="button"
                className="text-[11px] font-semibold text-[#175CD3] hover:underline"
              >
                View All
              </button>
            </div>
            <ul className="mt-3 space-y-2">
              {TOP_CATEGORIES.map((c) => (
                <li
                  key={c.name}
                  className="flex items-center justify-between gap-2 rounded-lg bg-[#F9FAFB] px-2.5 py-2"
                >
                  <span className="flex min-w-0 items-center gap-2">
                    <span
                      className={`flex size-7 shrink-0 items-center justify-center rounded-lg ${c.bg} ${c.color}`}
                    >
                      <c.icon className="size-3.5" />
                    </span>
                    <span className="truncate text-[11px] font-medium text-[#344054]">
                      {c.name}
                    </span>
                  </span>
                  <span className="text-[11px] font-bold text-[#101828]">{c.count}</span>
                </li>
              ))}
            </ul>
          </ExporterCard>

          <div className="rounded-2xl border border-[#B2DDFF] bg-gradient-to-br from-[#EFF8FF] to-[#F4F3FF] p-4">
            <span className="flex size-9 items-center justify-center rounded-xl bg-[#175CD3] text-white">
              <Crown className="size-4" />
            </span>
            <p className="mt-3 text-[13px] font-bold text-[#101828]">
              Stay Ahead with Premium Intelligence
            </p>
            <p className="mt-1 text-[11px] leading-relaxed text-[#667085]">
              Get access to exclusive reports, advanced analytics and expert insights.
            </p>
            <Button className="mt-3 h-9 w-full rounded-lg bg-[#175CD3] text-[12px] font-semibold hover:bg-[#1448B0]">
              <Crown className="mr-1.5 size-3.5 text-[#FEC84B]" />
              Upgrade Now
            </Button>
          </div>
        </aside>
      </div>
    </ExporterPageShell>
  );
}
