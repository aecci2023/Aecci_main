import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Calendar,
  UserCheck,
  Clock,
  Timer,
  Search,
  BarChart3,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  ExporterPageShell,
  ExporterCard,
  ExporterBreadcrumb,
  ExporterStatCard,
  ExporterTabs,
  FieldLabel,
  FieldInput,
  FieldSelect,
} from "@/components/exporter/exporter-page-layout";

const FLAG = (code: string) => `https://flagcdn.com/w40/${code}.png`;

const STATS = [
  { label: "Total Sessions", value: "32", icon: Calendar, color: "text-[#175CD3]", bg: "bg-[#EFF8FF]" },
  { label: "Attended", value: "18", icon: UserCheck, color: "text-[#039855]", bg: "bg-[#ECFDF3]" },
  { label: "Upcoming", value: "8", icon: Clock, color: "text-[#F79009]", bg: "bg-[#FFFAEB]" },
  { label: "Total Hours", value: "27h 45m", icon: Timer, color: "text-[#7A5AF8]", bg: "bg-[#F4F3FF]" },
];

const TABS = ["All", "Attended", "Upcoming", "Missed"];

const SESSION_ROWS = [
  {
    date: "20 May 2025",
    code: "us",
    title: "USA Textile & Apparel Deal Room",
    tags: ["Textiles", "Deal Room"],
    participants: 24,
    status: "Attended",
    statusClass: "bg-[#ECFDF3] text-[#027A48]",
  },
  {
    date: "15 May 2025",
    code: "ke",
    title: "Kenya Agriculture Matchmaking",
    tags: ["Agriculture", "Open Session"],
    participants: 18,
    status: "Attended",
    statusClass: "bg-[#ECFDF3] text-[#027A48]",
  },
  {
    date: "22 May 2025",
    code: "ae",
    title: "UAE Construction Materials Forum",
    tags: ["Construction", "Upcoming"],
    participants: 0,
    status: "Upcoming",
    statusClass: "bg-[#EFF8FF] text-[#175CD3]",
  },
  {
    date: "08 May 2025",
    code: "gb",
    title: "UK Premium Markets Briefing",
    tags: ["General Trade", "Invitation"],
    participants: 12,
    status: "Missed",
    statusClass: "bg-[#FEF3F2] text-[#D92D20]",
  },
];

const INTEREST_BARS = [
  { label: "Home Textiles", pct: 92 },
  { label: "Bath Linen", pct: 78 },
  { label: "Engineering Goods", pct: 65 },
  { label: "Agro Products", pct: 48 },
];

export default function SessionSummaryPage() {
  const [activeTab, setActiveTab] = useState("All");

  return (
    <ExporterPageShell>
      <div>
        <ExporterBreadcrumb
          items={[
            { label: "Marketplace", to: "/dashboard/marketplace" },
            { label: "Session Summary" },
          ]}
        />
        <h1 className="mt-2 text-[22px] font-bold text-[#101828] sm:text-[24px]">
          Session Summary
        </h1>
        <p className="mt-1 text-[13px] text-[#667085]">
          Review attendance, engagement, and highlights across all your deal
          room sessions.
        </p>
      </div>

      <div className="grid grid-cols-1 items-start gap-5 xl:grid-cols-[minmax(0,1fr)_280px]">
        <section className="min-w-0 space-y-5">
          <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
            {STATS.map((s) => (
              <ExporterStatCard key={s.label} {...s} />
            ))}
          </div>

          <ExporterCard>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              <div>
                <FieldLabel>Date Range</FieldLabel>
                <FieldSelect defaultValue="Last 90 days" options={["Last 90 days", "This Month", "This Year"]} />
              </div>
              <div>
                <FieldLabel>Country</FieldLabel>
                <FieldSelect defaultValue="All Countries" options={["All Countries", "USA", "Kenya", "UAE"]} />
              </div>
              <div>
                <FieldLabel>Industry</FieldLabel>
                <FieldSelect defaultValue="All Industries" options={["All Industries", "Textiles", "Agriculture"]} />
              </div>
              <div>
                <FieldLabel>Type</FieldLabel>
                <FieldSelect defaultValue="All Types" options={["All Types", "Deal Room", "Open Session"]} />
              </div>
            </div>
            <div className="mt-3">
              <FieldLabel>Search</FieldLabel>
              <div className="relative max-w-md">
                <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-[#98A2B3]" />
                <FieldInput placeholder="Search sessions..." className="pl-9" />
              </div>
            </div>
          </ExporterCard>

          <ExporterCard className="p-0">
            <div className="px-4 pt-4 sm:px-5">
              <ExporterTabs tabs={TABS} active={activeTab} onChange={setActiveTab} />
            </div>
            <div className="space-y-2 p-4 pt-3 sm:p-5">
              {SESSION_ROWS.map((row) => (
                <div
                  key={row.title}
                  className="flex flex-wrap items-center gap-3 rounded-xl border border-[#E4E7EC] bg-[#F9FAFB] p-3"
                >
                  <div className="min-w-[72px] text-[10px] font-semibold text-[#667085]">
                    {row.date}
                  </div>
                  <img src={FLAG(row.code)} alt="" className="size-8 rounded-md object-cover" />
                  <div className="min-w-0 flex-1">
                    <p className="text-[12px] font-semibold text-[#101828]">{row.title}</p>
                    <div className="mt-1 flex flex-wrap gap-1">
                      {row.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded-md bg-white px-1.5 py-0.5 text-[9px] text-[#667085] ring-1 ring-[#E4E7EC]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <p className="mt-1 text-[10px] text-[#667085]">
                      {row.participants > 0
                        ? `${row.participants} participants`
                        : "Registration open"}
                    </p>
                  </div>
                  <span className={`rounded-full px-2.5 py-0.5 text-[9px] font-bold ${row.statusClass}`}>
                    {row.status}
                  </span>
                  <Button
                    variant="outline"
                    asChild
                    className="h-7 rounded-lg border-[#B2DDFF] px-3 text-[10px] font-semibold text-[#175CD3]"
                  >
                    <Link to="/dashboard/opportunity-report">View Summary</Link>
                  </Button>
                </div>
              ))}
            </div>
          </ExporterCard>

          <div className="rounded-2xl border border-[#ABEFC6] bg-[#ECFDF3] px-5 py-5">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <Sparkles className="size-4 text-[#039855]" />
                  <p className="text-[14px] font-bold text-[#101828]">
                    Make the Most of Your Sessions
                  </p>
                </div>
                <p className="mt-1 text-[11px] text-[#667085]">
                  Book follow-up meetings and post requirements while buyer interest
                  is highest.
                </p>
              </div>
              <Button
                asChild
                className="h-9 shrink-0 rounded-lg bg-[#039855] text-[12px] font-semibold hover:bg-[#027A48]"
              >
                <Link to="/dashboard/my-meetings">
                  Schedule Follow-ups
                  <ArrowRight className="ml-1 size-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <aside className="space-y-4">
          <ExporterCard>
            <h3 className="text-[14px] font-bold text-[#101828]">Participation Overview</h3>
            <div className="mt-4 flex justify-center">
              <div className="relative size-28">
                <svg className="size-28 -rotate-90" viewBox="0 0 36 36">
                  <circle cx="18" cy="18" r="14" fill="none" stroke="#E4E7EC" strokeWidth="3" />
                  <circle cx="18" cy="18" r="14" fill="none" stroke="#039855" strokeWidth="3" strokeDasharray="50 88" />
                  <circle cx="18" cy="18" r="14" fill="none" stroke="#175CD3" strokeWidth="3" strokeDasharray="22 88" strokeDashoffset="-50" />
                  <circle cx="18" cy="18" r="14" fill="none" stroke="#D92D20" strokeWidth="3" strokeDasharray="16 88" strokeDashoffset="-72" />
                </svg>
                <span className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-[14px] font-bold text-[#101828]">56%</span>
                  <span className="text-[8px] text-[#667085]">attended</span>
                </span>
              </div>
            </div>
            <div className="mt-2 flex justify-center gap-3 text-[9px] text-[#667085]">
              <span>Attended</span>
              <span>Upcoming</span>
              <span>Missed</span>
            </div>
          </ExporterCard>

          <ExporterCard>
            <h3 className="text-[14px] font-bold text-[#101828]">Engagement Insights</h3>
            <ul className="mt-3 space-y-2 text-[11px] text-[#344054]">
              <li className="flex items-start gap-2">
                <BarChart3 className="mt-0.5 size-3.5 shrink-0 text-[#175CD3]" />
                Average session duration: 52 minutes
              </li>
              <li className="flex items-start gap-2">
                <BarChart3 className="mt-0.5 size-3.5 shrink-0 text-[#175CD3]" />
                14 meeting requests generated from last 5 sessions
              </li>
              <li className="flex items-start gap-2">
                <BarChart3 className="mt-0.5 size-3.5 shrink-0 text-[#175CD3]" />
                Best attendance: Tuesday 10–12 AM IST
              </li>
            </ul>
          </ExporterCard>

          <ExporterCard>
            <h3 className="text-[14px] font-bold text-[#101828]">Top Interest Areas</h3>
            <div className="mt-3 space-y-3">
              {INTEREST_BARS.map((bar) => (
                <div key={bar.label}>
                  <div className="flex justify-between text-[10px]">
                    <span className="font-medium text-[#344054]">{bar.label}</span>
                    <span className="text-[#667085]">{bar.pct}%</span>
                  </div>
                  <div className="mt-1 h-2 overflow-hidden rounded-full bg-[#F2F4F7]">
                    <div
                      className="h-full rounded-full bg-[#175CD3]"
                      style={{ width: `${bar.pct}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </ExporterCard>

          <ExporterCard>
            <h3 className="text-[14px] font-bold text-[#101828]">Quick Actions</h3>
            <div className="mt-2 space-y-2">
              <Button asChild variant="outline" className="h-9 w-full justify-start rounded-lg text-[12px]">
                <Link to="/dashboard/sessions">Browse Upcoming Sessions</Link>
              </Button>
              <Button asChild variant="outline" className="h-9 w-full justify-start rounded-lg text-[12px]">
                <Link to="/dashboard/my-requirements">Update Requirements</Link>
              </Button>
              <Button asChild className="h-9 w-full rounded-lg bg-[#175CD3] text-[12px] font-semibold">
                <Link to="/dashboard/opportunity-report">Download Report</Link>
              </Button>
            </div>
          </ExporterCard>
        </aside>
      </div>
    </ExporterPageShell>
  );
}
