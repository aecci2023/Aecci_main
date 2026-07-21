import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Share2,
  Star,
  TrendingUp,
  Globe2,
  DollarSign,
  BarChart3,
  Shield,
  MapPin,
  Languages,
  Banknote,
  Building2,
  FileText,
  Check,
  AlertTriangle,
  Users,
  ArrowRight,
  Briefcase,
  Cpu,
  Pill,
  Shirt,
  Car,
  Wheat,
  Zap,
  HeartPulse,
  Leaf,
  Factory,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  ExporterPageShell,
  ExporterCard,
  ExporterBreadcrumb,
  ExporterTabs,
} from "@/components/exporter/exporter-page-layout";
import CountryHighlightMap from "@/components/exporter/country-highlight-map";

const FLAG = (code: string) => `https://flagcdn.com/w40/${code}.png`;

const MAIN_TABS = [
  "Overview",
  "Economy",
  "Trade",
  "Investment",
  "Business Environment",
  "Top Industries",
  "Market Opportunities",
  "Risk Profile",
  "Resources",
];

const STATS = [
  {
    label: "GDP (Nominal)",
    value: "$3.94 Trillion",
    sub: "2024 • World Rank: 5",
    icon: DollarSign,
    bg: "bg-[#EFF8FF]",
    color: "text-[#175CD3]",
  },
  {
    label: "GDP Growth",
    value: "6.8%",
    sub: "2024 • Est.",
    icon: TrendingUp,
    bg: "bg-[#ECFDF3]",
    color: "text-[#039855]",
  },
  {
    label: "Total Trade",
    value: "$778.6 Billion",
    sub: "2024",
    icon: Globe2,
    bg: "bg-[#F4F3FF]",
    color: "text-[#7A5AF8]",
  },
  {
    label: "FDI Inflow",
    value: "$71.3 Billion",
    sub: "2024",
    icon: BarChart3,
    bg: "bg-[#FFFAEB]",
    color: "text-[#F79009]",
  },
  {
    label: "Ease of Doing Business",
    value: "63/100",
    sub: "2024 • Rank: 63",
    icon: Shield,
    bg: "bg-[#ECFDF3]",
    color: "text-[#039855]",
  },
];

const META = [
  { label: "Capital", value: "New Delhi", icon: MapPin },
  { label: "Population", value: "1.44 Billion", icon: Users },
  { label: "Language", value: "Hindi, English", icon: Languages },
  { label: "Currency", value: "Indian Rupee (₹)", icon: Banknote },
  { label: "Region", value: "Asia", icon: Globe2 },
  { label: "Income Level", value: "Lower Middle Income", icon: Building2 },
];

const ECONOMIC_METRICS = [
  { label: "GDP (Nominal)", value: "$3.94 Trillion", icon: DollarSign, color: "text-[#175CD3]", bg: "bg-[#EFF8FF]" },
  { label: "GDP per Capita", value: "$2,731", icon: Users, color: "text-[#7A5AF8]", bg: "bg-[#F4F3FF]" },
  { label: "Inflation Rate", value: "4.6%", icon: TrendingUp, color: "text-[#F79009]", bg: "bg-[#FFFAEB]" },
  { label: "Unemployment", value: "3.2%", icon: Briefcase, color: "text-[#039855]", bg: "bg-[#ECFDF3]" },
  { label: "Public Debt", value: "82% of GDP", icon: Building2, color: "text-[#667085]", bg: "bg-[#F2F4F7]" },
];

const TRADE_BOXES = [
  { label: "Total Exports", value: "$437.1B", change: "+5.2%", up: true },
  { label: "Total Imports", value: "$341.5B", change: "+3.1%", up: true },
  { label: "Trade Balance", value: "Surplus", change: "+$95.6B", up: true },
];

const EXPORT_PARTNERS = [
  { code: "us", name: "United States", share: "18.2%" },
  { code: "ae", name: "UAE", share: "12.4%" },
  { code: "cn", name: "China", share: "8.9%" },
  { code: "gb", name: "United Kingdom", share: "6.7%" },
  { code: "sg", name: "Singapore", share: "5.1%" },
];

const IMPORT_PARTNERS = [
  { code: "cn", name: "China", share: "15.3%" },
  { code: "us", name: "United States", share: "7.8%" },
  { code: "ae", name: "UAE", share: "6.9%" },
  { code: "sa", name: "Saudi Arabia", share: "5.8%" },
  { code: "ru", name: "Russia", share: "4.6%" },
];

const INDUSTRIES = [
  { name: "IT & Software Services", score: 92, tag: "High", icon: Cpu },
  { name: "Pharmaceuticals", score: 88, tag: "High", icon: Pill },
  { name: "Textiles & Apparel", score: 81, tag: "High", icon: Shirt },
  { name: "Automotive Components", score: 74, tag: "Medium", icon: Car },
  { name: "Agri & Food Processing", score: 68, tag: "Medium", icon: Wheat },
];

const OPPORTUNITIES = [
  {
    title: "Digital Transformation",
    desc: "Strong demand for SaaS, cloud, and enterprise software across manufacturing and BFSI.",
    tag: "High",
    icon: Cpu,
  },
  {
    title: "Green Energy Supply Chain",
    desc: "Solar modules, battery storage, and EV infrastructure attracting FDI and PLI support.",
    tag: "High",
    icon: Zap,
  },
  {
    title: "Medical Devices & Pharma",
    desc: "Export pathways expanding into EU, GCC, and Africa with regulatory harmonization.",
    tag: "High",
    icon: HeartPulse,
  },
  {
    title: "Sustainable Manufacturing",
    desc: "ESG-compliant textiles and engineering goods preferred by Western buyers.",
    tag: "Medium",
    icon: Leaf,
  },
];

const UPDATES = [
  {
    category: "Economy",
    color: "bg-[#EFF8FF] text-[#175CD3]",
    title: "Q2 GDP Growth Beats Forecast",
    snippet: "India's economy expanded 6.8% YoY, led by services and manufacturing output.",
    time: "2 days ago",
  },
  {
    category: "Trade",
    color: "bg-[#ECFDF3] text-[#027A48]",
    title: "India–EU FTA Talks Advance",
    snippet: "Negotiators close chapters on goods and services; deal expected by early 2026.",
    time: "4 days ago",
  },
  {
    category: "Investment",
    color: "bg-[#F4F3FF] text-[#7A5AF8]",
    title: "FDI Inflows Hit Record High",
    snippet: "Electronics and renewable energy lead inbound investment in FY2024–25.",
    time: "1 week ago",
  },
  {
    category: "Business",
    color: "bg-[#FFFAEB] text-[#B54708]",
    title: "New PLI Scheme for Electronics",
    snippet: "Cabinet approves expanded production-linked incentives for component makers.",
    time: "2 weeks ago",
  },
];

const SNAPSHOT = [
  { label: "Political Stability", value: "Stable", valueClass: "text-[#039855]" },
  { label: "Government Type", value: "Federal Republic" },
  { label: "Time Zone", value: "UTC+5:30 (IST)" },
  { label: "Calling Code", value: "+91" },
  { label: "Main Religion", value: "Hinduism" },
  { label: "Literacy Rate", value: "77.7%" },
];

const STRENGTHS = [
  "Large and growing consumer market",
  "Skilled English-speaking workforce",
  "Competitive IT & pharma ecosystems",
  "Digital public infrastructure (DPI)",
  "Strong demographic dividend",
];

const RISKS = [
  "Regulatory complexity across states",
  "Infrastructure gaps in tier-2 cities",
  "Currency volatility exposure",
  "Bureaucracy and compliance burden",
  "Geopolitical trade tensions",
];

const RESOURCES = [
  { title: "India Market Entry Guide", type: "PDF", meta: "2.4 MB · 18 pages" },
  { title: "Tariff & Duty Reference", type: "XLSX", meta: "1.1 MB · 2024 data" },
  { title: "Verified Partner Directory", type: "PDF", meta: "3.2 MB · 24 pages" },
];

function TagPill({ tag }: { tag: string }) {
  const high = tag === "High";
  return (
    <span
      className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${
        high ? "bg-[#ECFDF3] text-[#027A48]" : "bg-[#FFFAEB] text-[#B54708]"
      }`}
    >
      {tag}
    </span>
  );
}

export default function CountryIntelligenceIndiaPage() {
  const [activeTab, setActiveTab] = useState("Overview");

  return (
    <ExporterPageShell>
      <div>
        <ExporterBreadcrumb
          items={[
            { label: "Dashboard", to: "/dashboard" },
            { label: "Country Intelligence", to: "/dashboard/country-intelligence" },
            { label: "India" },
          ]}
        />
        <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h1 className="text-[22px] font-bold text-[#101828] sm:text-[24px]">
              Country Intelligence
            </h1>
            <p className="mt-1 max-w-2xl text-[13px] leading-relaxed text-[#667085]">
              Deep insights and real-time data to help you understand markets and uncover
              opportunities.
            </p>
          </div>
          <div className="flex w-full flex-wrap items-center gap-2 sm:w-auto">
            <Button
              variant="outline"
              className="h-9 w-full rounded-lg border-[#D0D5DD] bg-white text-[12px] font-semibold text-[#344054] hover:bg-[#F9FAFB] sm:w-auto"
            >
              <Star className="mr-1.5 size-3.5" />
              Add to Watchlist
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="size-9 rounded-lg border-[#D0D5DD] bg-white text-[#344054] hover:bg-[#F9FAFB]"
              aria-label="Share"
            >
              <Share2 className="size-4" />
            </Button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 items-start gap-5 xl:grid-cols-[minmax(0,1fr)_280px]">
        <section className="min-w-0 space-y-5">
          {/* Metric ribbon */}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {STATS.map((s) => (
              <div
                key={s.label}
                className="rounded-xl border border-[#E4E7EC] bg-white p-3.5 shadow-[0_1px_2px_rgba(16,24,40,0.05)]"
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="min-w-0">
                    <p className="text-[10px] leading-tight text-[#667085]">{s.label}</p>
                    <p className="mt-1.5 text-[15px] font-bold leading-tight text-[#101828] sm:text-[16px]">
                      {s.value}
                    </p>
                    <p className="mt-1 text-[9px] text-[#98A2B3]">{s.sub}</p>
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

          {/* Country hero */}
          <ExporterCard className="overflow-hidden p-0">
            <div className="grid min-w-0 lg:grid-cols-[1fr_240px]">
              <div className="min-w-0 p-4 sm:p-5">
                <div className="flex flex-wrap items-start gap-3">
                  <img
                    src="https://flagcdn.com/w160/in.png"
                    alt="India"
                    className="h-14 w-20 rounded-lg border border-[#E4E7EC] object-cover shadow-sm"
                  />
                  <div>
                    <h2 className="text-[20px] font-bold leading-none text-[#101828]">India</h2>
                    <p className="mt-1 text-[13px] text-[#667085]">Republic of India</p>
                    <span className="mt-2 inline-flex items-center rounded-full bg-[#ECFDF3] px-2.5 py-0.5 text-[10px] font-bold text-[#027A48]">
                      High Opportunity
                    </span>
                  </div>
                </div>

                <div className="mt-5 grid grid-cols-2 gap-x-4 gap-y-3 border-t border-[#E4E7EC] pt-4 sm:grid-cols-3 lg:grid-cols-6">
                  {META.map((m) => (
                    <div key={m.label}>
                      <p className="flex items-center gap-1 text-[10px] text-[#98A2B3]">
                        <m.icon className="size-3 shrink-0" />
                        {m.label}
                      </p>
                      <p className="mt-0.5 text-[12px] font-semibold text-[#101828]">{m.value}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative flex min-h-[180px] flex-col border-t border-[#E4E7EC] bg-[#F8FAFC] p-3 lg:min-h-[200px] lg:border-t-0 lg:border-l">
                <div className="flex flex-1 items-center justify-center overflow-hidden rounded-lg bg-[#EEF2F6]">
                  <CountryHighlightMap />
                </div>
                <button
                  type="button"
                  className="mt-2 flex items-center justify-end gap-1 text-[11px] font-semibold text-[#175CD3] hover:underline"
                >
                  <MapPin className="size-3.5" />
                  View on Map
                </button>
              </div>
            </div>
          </ExporterCard>

          {/* Tabs + overview content */}
          <ExporterCard className="overflow-hidden p-0">
            <div className="overflow-x-auto px-2 pt-1">
              <ExporterTabs tabs={MAIN_TABS} active={activeTab} onChange={setActiveTab} />
            </div>

            <div className="space-y-5 p-5">
              {activeTab === "Overview" && (
                <>
                  <div className="grid gap-4 lg:grid-cols-2">
                    {/* Economic Overview */}
                    <div className="rounded-xl border border-[#E4E7EC] bg-white p-4">
                      <div className="flex items-center justify-between gap-2">
                        <h3 className="text-[14px] font-bold text-[#101828]">Economic Overview</h3>
                        <button
                          type="button"
                          className="flex items-center gap-0.5 text-[11px] font-semibold text-[#175CD3] hover:underline"
                        >
                          View Full Report
                          <ArrowRight className="size-3" />
                        </button>
                      </div>
                      <ul className="mt-3 space-y-2.5">
                        {ECONOMIC_METRICS.map((m) => (
                          <li
                            key={m.label}
                            className="flex items-center justify-between gap-3 rounded-lg bg-[#F9FAFB] px-3 py-2.5"
                          >
                            <span className="flex min-w-0 items-center gap-2.5">
                              <span
                                className={`flex size-8 shrink-0 items-center justify-center rounded-lg ${m.bg} ${m.color}`}
                              >
                                <m.icon className="size-3.5" />
                              </span>
                              <span className="text-[12px] font-medium text-[#344054]">
                                {m.label}
                              </span>
                            </span>
                            <span className="shrink-0 text-[13px] font-bold text-[#101828]">
                              {m.value}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Trade Overview */}
                    <div className="rounded-xl border border-[#E4E7EC] bg-white p-4">
                      <h3 className="text-[14px] font-bold text-[#101828]">
                        Trade Overview{" "}
                        <span className="font-medium text-[#98A2B3]">(2024)</span>
                      </h3>
                      <div className="mt-3 grid grid-cols-3 gap-2">
                        {TRADE_BOXES.map((b) => (
                          <div
                            key={b.label}
                            className="rounded-lg border border-[#E4E7EC] bg-[#F9FAFB] p-2.5 text-center"
                          >
                            <p className="text-[9px] text-[#667085]">{b.label}</p>
                            <p className="mt-1 text-[13px] font-bold text-[#101828]">{b.value}</p>
                            <p
                              className={`mt-0.5 text-[10px] font-semibold ${
                                b.up ? "text-[#039855]" : "text-[#D92D20]"
                              }`}
                            >
                              {b.change}
                            </p>
                          </div>
                        ))}
                      </div>
                      <div className="mt-4 grid gap-3 sm:grid-cols-2">
                        <div>
                          <p className="text-[11px] font-bold text-[#101828]">Top Export Partners</p>
                          <ul className="mt-2 space-y-2">
                            {EXPORT_PARTNERS.map((p) => (
                              <li
                                key={p.code}
                                className="flex items-center justify-between gap-2 text-[11px]"
                              >
                                <span className="flex min-w-0 items-center gap-1.5">
                                  <img
                                    src={FLAG(p.code)}
                                    alt=""
                                    className="size-4 shrink-0 rounded-sm object-cover"
                                  />
                                  <span className="truncate font-medium text-[#344054]">
                                    {p.name}
                                  </span>
                                </span>
                                <span className="shrink-0 font-semibold text-[#101828]">
                                  {p.share}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <p className="text-[11px] font-bold text-[#101828]">Top Import Partners</p>
                          <ul className="mt-2 space-y-2">
                            {IMPORT_PARTNERS.map((p) => (
                              <li
                                key={p.code}
                                className="flex items-center justify-between gap-2 text-[11px]"
                              >
                                <span className="flex min-w-0 items-center gap-1.5">
                                  <img
                                    src={FLAG(p.code)}
                                    alt=""
                                    className="size-4 shrink-0 rounded-sm object-cover"
                                  />
                                  <span className="truncate font-medium text-[#344054]">
                                    {p.name}
                                  </span>
                                </span>
                                <span className="shrink-0 font-semibold text-[#101828]">
                                  {p.share}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-4 lg:grid-cols-2">
                    {/* Top Industries */}
                    <div className="rounded-xl border border-[#E4E7EC] bg-white p-4">
                      <h3 className="text-[14px] font-bold text-[#101828]">
                        Top Industries by Opportunity
                      </h3>
                      <ul className="mt-3 space-y-3">
                        {INDUSTRIES.map((ind) => (
                          <li key={ind.name}>
                            <div className="flex items-center justify-between gap-2">
                              <span className="flex min-w-0 items-center gap-2">
                                <span className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-[#EFF8FF] text-[#175CD3]">
                                  <ind.icon className="size-3.5" />
                                </span>
                                <span className="truncate text-[12px] font-semibold text-[#101828]">
                                  {ind.name}
                                </span>
                              </span>
                              <div className="flex shrink-0 items-center gap-2">
                                <TagPill tag={ind.tag} />
                                <span className="text-[11px] font-bold text-[#175CD3]">
                                  {ind.score}/100
                                </span>
                              </div>
                            </div>
                            <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-[#E4E7EC]">
                              <div
                                className="h-full rounded-full bg-[#175CD3]"
                                style={{ width: `${ind.score}%` }}
                              />
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Market Opportunities */}
                    <div className="rounded-xl border border-[#E4E7EC] bg-white p-4">
                      <h3 className="text-[14px] font-bold text-[#101828]">Market Opportunities</h3>
                      <ul className="mt-3 space-y-3">
                        {OPPORTUNITIES.map((o) => (
                          <li
                            key={o.title}
                            className="flex items-start gap-3 rounded-lg bg-[#F9FAFB] p-3"
                          >
                            <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-[#EFF8FF] text-[#175CD3]">
                              <o.icon className="size-4" />
                            </span>
                            <div className="min-w-0 flex-1">
                              <div className="flex items-start justify-between gap-2">
                                <p className="text-[12px] font-bold text-[#101828]">{o.title}</p>
                                <TagPill tag={o.tag} />
                              </div>
                              <p className="mt-0.5 text-[11px] leading-relaxed text-[#667085]">
                                {o.desc}
                              </p>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Recent updates */}
                  <div>
                    <h3 className="text-[14px] font-bold text-[#101828]">
                      Recent Intelligence Updates
                    </h3>
                    <div className="mt-3 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                      {UPDATES.map((u) => (
                        <div
                          key={u.title}
                          className="rounded-xl border border-[#E4E7EC] bg-white p-3.5 shadow-[0_1px_2px_rgba(16,24,40,0.04)]"
                        >
                          <span
                            className={`inline-block rounded-full px-2 py-0.5 text-[10px] font-bold ${u.color}`}
                          >
                            {u.category}
                          </span>
                          <p className="mt-2 text-[12px] font-bold leading-snug text-[#101828]">
                            {u.title}
                          </p>
                          <p className="mt-1 line-clamp-2 text-[11px] leading-relaxed text-[#667085]">
                            {u.snippet}
                          </p>
                          <p className="mt-2 text-[10px] text-[#98A2B3]">{u.time}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              )}

              {activeTab !== "Overview" && (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <Factory className="size-10 text-[#D0D5DD]" />
                  <p className="mt-3 text-[14px] font-semibold text-[#101828]">{activeTab}</p>
                  <p className="mt-1 max-w-sm text-[12px] text-[#667085]">
                    Detailed {activeTab.toLowerCase()} intelligence for India is available in the
                    full report. Switch to Overview for the summary, or download resources from the
                    sidebar.
                  </p>
                  <Button
                    className="mt-4 h-9 rounded-lg bg-[#175CD3] text-[12px] font-semibold hover:bg-[#1448B0]"
                    onClick={() => setActiveTab("Overview")}
                  >
                    Back to Overview
                  </Button>
                </div>
              )}
            </div>
          </ExporterCard>
        </section>

        {/* Right sidebar — matches Figma */}
        <aside className="space-y-4">
          <ExporterCard>
            <h3 className="text-[14px] font-bold text-[#101828]">Country Snapshot</h3>
            <dl className="mt-3 space-y-2.5">
              {SNAPSHOT.map((row) => (
                <div key={row.label} className="flex items-center justify-between gap-2 text-[11px]">
                  <dt className="text-[#667085]">{row.label}</dt>
                  <dd className={`font-semibold ${row.valueClass || "text-[#101828]"}`}>
                    {row.value}
                  </dd>
                </div>
              ))}
            </dl>
            <Link
              to="/dashboard/browse-countries"
              className="mt-4 flex w-full items-center justify-center gap-1 rounded-lg border border-[#B2DDFF] bg-[#EFF8FF] py-2 text-[12px] font-semibold text-[#175CD3] hover:bg-[#D1E9FF]"
            >
              View Detailed Profile
              <ArrowRight className="size-3.5" />
            </Link>
          </ExporterCard>

          <ExporterCard>
            <h3 className="text-[14px] font-bold text-[#101828]">Key Strengths</h3>
            <ul className="mt-3 space-y-2.5">
              {STRENGTHS.map((item) => (
                <li key={item} className="flex items-start gap-2 text-[11px] text-[#344054]">
                  <span className="mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full bg-[#ECFDF3]">
                    <Check className="size-2.5 stroke-3 text-[#039855]" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </ExporterCard>

          <ExporterCard>
            <h3 className="text-[14px] font-bold text-[#101828]">Potential Risks</h3>
            <ul className="mt-3 space-y-2.5">
              {RISKS.map((item) => (
                <li key={item} className="flex items-start gap-2 text-[11px] text-[#344054]">
                  <AlertTriangle className="mt-0.5 size-3.5 shrink-0 text-[#F79009]" />
                  {item}
                </li>
              ))}
            </ul>
          </ExporterCard>

          <ExporterCard>
            <h3 className="text-[14px] font-bold text-[#101828]">Related Resources</h3>
            <ul className="mt-3 space-y-2">
              {RESOURCES.map((r) => (
                <li key={r.title}>
                  <button
                    type="button"
                    className="flex w-full items-center gap-2.5 rounded-lg border border-[#E4E7EC] bg-[#F9FAFB] px-2.5 py-2 text-left hover:border-[#B2DDFF] hover:bg-white"
                  >
                    <span
                      className={`flex size-8 shrink-0 items-center justify-center rounded-lg text-[9px] font-bold ${
                        r.type === "PDF"
                          ? "bg-[#FEF3F2] text-[#D92D20]"
                          : "bg-[#ECFDF3] text-[#027A48]"
                      }`}
                    >
                      {r.type === "PDF" ? (
                        <FileText className="size-3.5" />
                      ) : (
                        <BarChart3 className="size-3.5" />
                      )}
                    </span>
                    <span className="min-w-0 flex-1">
                      <p className="truncate text-[11px] font-semibold text-[#101828]">{r.title}</p>
                      <p className="text-[9px] text-[#98A2B3]">
                        {r.type} · {r.meta}
                      </p>
                    </span>
                  </button>
                </li>
              ))}
            </ul>
            <button
              type="button"
              className="mt-3 flex w-full items-center justify-center gap-1 text-[11px] font-semibold text-[#175CD3] hover:underline"
            >
              View All Resources
              <ArrowRight className="size-3" />
            </button>
          </ExporterCard>
        </aside>
      </div>
    </ExporterPageShell>
  );
}
