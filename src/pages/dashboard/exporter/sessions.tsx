import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Calendar,
  Clock,
  Radio,
  BarChart3,
  Search,
  Video,
  Presentation,
  Users,
  Network,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  ExporterPageShell,
  ExporterCard,
  ExporterBreadcrumb,
  ExporterStatCard,
} from "@/components/exporter/exporter-page-layout";

const FLAG = (code: string) => `https://flagcdn.com/w40/${code}.png`;

const TABS = ["All Sessions", "Upcoming", "Live Now", "By Invitation", "Completed"];

const SESSIONS = [
  {
    title: "USA Textile & Apparel Deal Room",
    code: "us",
    tags: ["Textiles", "Apparel"],
    desc: "Connect with verified US buyers looking for home textiles and apparel suppliers.",
    when: "24 May 2025 • 04:00 PM GST",
    status: "Live Now",
    action: "Join Now",
    statusClass: "bg-[#ECFDF3] text-[#027A48]",
  },
  {
    title: "UAE Construction Materials Connect",
    code: "ae",
    tags: ["Construction"],
    desc: "Explore opportunities with UAE importers in construction and building materials.",
    when: "26 May 2025 • 07:00 PM GST",
    status: "Upcoming",
    action: "Register",
    statusClass: "bg-[#EFF8FF] text-[#175CD3]",
  },
  {
    title: "Saudi Arabia Food & Beverages Forum",
    code: "sa",
    tags: ["Food", "Beverages"],
    desc: "Meet partners for food exports and beverage distribution in the GCC.",
    when: "28 May 2025 • 05:00 PM GST",
    status: "Upcoming",
    action: "Register",
    statusClass: "bg-[#EFF8FF] text-[#175CD3]",
  },
  {
    title: "UK Premium Markets Access",
    code: "gb",
    tags: ["General Trade"],
    desc: "Private briefing on UK import regulations and premium retail channels.",
    when: "30 May 2025 • 05:30 PM GST",
    status: "Upcoming",
    action: "Register",
    statusClass: "bg-[#EFF8FF] text-[#175CD3]",
  },
  {
    title: "India Pharma & Healthcare Connect",
    code: "in",
    tags: ["Pharma"],
    desc: "Invitation-only session with distributors and hospital procurement teams.",
    when: "02 Jun 2025 • 10:00 AM GST",
    status: "By Invitation",
    action: "View Invite",
    statusClass: "bg-[#F4F3FF] text-[#7A5AF8]",
  },
  {
    title: "Kenya Agro Products Deal Room",
    code: "ke",
    tags: ["Agriculture"],
    desc: "Match with East African buyers for spices, grains and processed foods.",
    when: "04 Jun 2025 • 03:00 PM GST",
    status: "By Invitation",
    action: "View Invite",
    statusClass: "bg-[#F4F3FF] text-[#7A5AF8]",
  },
];

const UPCOMING_NEXT = [
  {
    title: "USA Textile & Apparel Deal Room",
    code: "us",
    when: "24 May 2025 • 04:00 PM GST",
    status: "Live Now",
    statusClass: "bg-[#ECFDF3] text-[#027A48]",
    action: "Join Now",
  },
  {
    title: "UAE Construction Materials Connect",
    code: "ae",
    when: "26 May 2025 • 07:00 PM GST",
    status: "Upcoming",
    statusClass: "bg-[#EFF8FF] text-[#175CD3]",
    action: "Register",
  },
  {
    title: "Saudi Arabia Food & Beverages Forum",
    code: "sa",
    when: "28 May 2025 • 05:00 PM GST",
    status: "Upcoming",
    statusClass: "bg-[#EFF8FF] text-[#175CD3]",
    action: "Register",
  },
];

export default function SessionsPage() {
  const [tab, setTab] = useState("All Sessions");

  const list =
    tab === "All Sessions"
      ? SESSIONS
      : SESSIONS.filter((s) =>
          tab === "Live Now"
            ? s.status === "Live Now"
            : tab === "By Invitation"
              ? s.status === "By Invitation"
              : tab === "Upcoming"
                ? s.status === "Upcoming"
                : false,
        );

  return (
    <ExporterPageShell>
      <div>
        <ExporterBreadcrumb
          items={[
            { label: "Marketplace", to: "/dashboard/marketplace" },
            { label: "Sessions" },
          ]}
        />
        <h1 className="mt-2 text-[22px] font-bold text-[#101828] sm:text-[24px]">
          Sessions
        </h1>
        <p className="mt-1 text-[13px] text-[#667085]">
          Discover, register and join deal room sessions across global markets.
        </p>
      </div>

      <div className="grid grid-cols-1 items-start gap-5 xl:grid-cols-[minmax(0,1fr)_280px]">
        <section className="min-w-0 space-y-5">
          <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
            <ExporterStatCard label="Upcoming Sessions" value="18" sub="In next 7 days" icon={Calendar} color="text-[#175CD3]" bg="bg-[#EFF8FF]" />
            <ExporterStatCard label="Live Now" value="12" sub="Join ongoing sessions" icon={Radio} color="text-[#039855]" bg="bg-[#ECFDF3]" />
            <ExporterStatCard label="Sessions This Month" value="32" sub="Across all countries" icon={BarChart3} color="text-[#F79009]" bg="bg-[#FFFAEB]" />
            <ExporterStatCard label="Attendance Rate" value="98%" sub="Your average" icon={Users} color="text-[#7A5AF8]" bg="bg-[#F4F3FF]" />
          </div>

          <ExporterCard>
            <div className="relative mb-3">
              <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-[#98A2B3]" />
              <input
                placeholder="Search sessions by country, industry or keyword..."
                className="h-10 w-full rounded-lg border border-[#D0D5DD] pl-9 pr-3 text-[13px] outline-none focus:border-[#175CD3]"
              />
            </div>
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-5">
              {["Country", "Industry", "Session Type", "Start Date", "End Date"].map((f) => (
                <select key={f} className="h-9 rounded-lg border border-[#D0D5DD] px-2 text-[11px] text-[#344054]">
                  <option>{f}</option>
                </select>
              ))}
            </div>
            <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <button type="button" className="text-left text-[12px] font-semibold text-[#175CD3]">
                Reset Filters
              </button>
              <Button className="h-9 w-full rounded-lg bg-[#175CD3] px-4 text-[12px] font-semibold hover:bg-[#1448B0] sm:w-auto">
                Search
              </Button>
            </div>
          </ExporterCard>

          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex flex-wrap gap-1.5">
              {TABS.map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setTab(t)}
                  className={`rounded-full px-3 py-1.5 text-[11px] font-semibold ${
                    tab === t ? "bg-[#175CD3] text-white" : "bg-[#F2F4F7] text-[#667085]"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
            <select className="h-8 rounded-lg border border-[#D0D5DD] px-2 text-[11px]">
              <option>Sort by: Date (Earliest)</option>
            </select>
          </div>

          <div className="space-y-3">
            {list.map((s) => (
              <ExporterCard key={s.title} className="p-4">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start">
                  <img src={FLAG(s.code)} alt="" className="size-10 rounded-lg border border-[#E4E7EC] object-cover" />
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <div>
                        <p className="text-[13px] font-bold text-[#101828]">{s.title}</p>
                        <div className="mt-1 flex flex-wrap gap-1">
                          {s.tags.map((t) => (
                            <span key={t} className="rounded-full bg-[#F2F4F7] px-2 py-0.5 text-[9px] font-semibold text-[#667085]">
                              {t}
                            </span>
                          ))}
                        </div>
                        <p className="mt-2 text-[11px] leading-relaxed text-[#667085]">{s.desc}</p>
                        <p className="mt-2 flex items-center gap-1.5 text-[11px] text-[#344054]">
                          <Calendar className="size-3.5 text-[#98A2B3]" />
                          {s.when}
                        </p>
                      </div>
                      <div className="flex shrink-0 flex-col items-end gap-2">
                        <span className={`rounded-full px-2.5 py-0.5 text-[9px] font-bold ${s.statusClass}`}>
                          {s.status}
                        </span>
                        <Button
                          variant="outline"
                          className="h-8 rounded-lg border-[#175CD3] px-3 text-[11px] font-semibold text-[#175CD3]"
                        >
                          {s.action}
                        </Button>
                        <button type="button" className="text-[11px] font-semibold text-[#175CD3]">
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </ExporterCard>
            ))}
          </div>

          <button
            type="button"
            className="flex w-full items-center justify-center gap-1 rounded-xl border border-[#E4E7EC] bg-white py-3 text-[12px] font-semibold text-[#175CD3]"
          >
            View More Sessions <ChevronDown className="size-4" />
          </button>

          <ExporterCard>
            <h3 className="mb-4 text-[14px] font-bold text-[#101828]">How Sessions Work?</h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { t: "Explore", d: "Find sessions by country, industry or interest.", i: Search },
                { t: "Register", d: "Register for sessions you want to join.", i: Calendar },
                { t: "Join & Connect", d: "Join on time and connect with buyers & partners.", i: Video },
                { t: "Grow Business", d: "Build relationships and close global deals.", i: Network },
              ].map((x) => (
                <div key={x.t} className="rounded-xl bg-[#F9FAFB] p-3">
                  <x.i className="size-5 text-[#175CD3]" />
                  <p className="mt-2 text-[12px] font-bold text-[#101828]">{x.t}</p>
                  <p className="mt-1 text-[11px] text-[#667085]">{x.d}</p>
                </div>
              ))}
            </div>
          </ExporterCard>
        </section>

        <aside className="space-y-4">
          <ExporterCard>
            <h3 className="text-[14px] font-bold text-[#101828]">My Session Summary</h3>
            <div className="mt-4 flex items-start justify-between gap-3">
              <div>
                <div className="flex items-center gap-1.5">
                  <p className="text-[28px] font-bold leading-none text-[#101828]">4 / 4</p>
                  <span className="flex size-5 items-center justify-center rounded-full bg-[#ECFDF3]">
                    <Radio className="size-3 text-[#039855]" />
                  </span>
                </div>
                <p className="mt-1 text-[11px] text-[#667085]">Sessions Registered</p>
              </div>
              <div className="relative flex size-[72px] shrink-0 items-center justify-center">
                <svg className="size-[72px] -rotate-90" viewBox="0 0 36 36">
                  <circle cx="18" cy="18" r="14" fill="none" stroke="#E4E7EC" strokeWidth="3" />
                  <circle
                    cx="18"
                    cy="18"
                    r="14"
                    fill="none"
                    stroke="#039855"
                    strokeWidth="3"
                    strokeDasharray="88 88"
                    strokeLinecap="round"
                  />
                </svg>
                <span className="absolute text-[13px] font-bold text-[#039855]">100%</span>
              </div>
            </div>
            <div className="mt-4 space-y-3">
              <div className="flex items-center gap-3 rounded-xl bg-[#F9FAFB] p-3">
                <span className="flex size-8 items-center justify-center rounded-lg bg-[#ECFDF3]">
                  <Radio className="size-4 text-[#039855]" />
                </span>
                <p className="text-[22px] font-bold text-[#101828]">1</p>
                <div>
                  <p className="text-[11px] font-semibold text-[#101828]">Live Session Joined</p>
                  <p className="text-[10px] text-[#98A2B3]">This Week</p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-xl bg-[#F9FAFB] p-3">
                <span className="flex size-8 items-center justify-center rounded-lg bg-[#FFFAEB]">
                  <Clock className="size-4 text-[#F79009]" />
                </span>
                <p className="text-[22px] font-bold text-[#101828]">3</p>
                <div>
                  <p className="text-[11px] font-semibold text-[#101828]">Upcoming Sessions</p>
                  <p className="text-[10px] text-[#98A2B3]">Next 7 Days</p>
                </div>
              </div>
            </div>
            <Link
              to="/dashboard/my-meetings"
              className="mt-4 block text-center text-[12px] font-semibold text-[#175CD3]"
            >
              View My Sessions →
            </Link>
          </ExporterCard>

          <ExporterCard>
            <div className="mb-3 flex items-center justify-between">
              <h3 className="text-[14px] font-bold text-[#101828]">Upcoming Next</h3>
              <Link to="/dashboard/sessions" className="text-[11px] font-semibold text-[#175CD3]">
                View Calendar
              </Link>
            </div>
            <div className="space-y-3">
              {UPCOMING_NEXT.map((s) => (
                <div
                  key={s.title}
                  className="rounded-xl border border-[#E4E7EC] p-3"
                >
                  <div className="flex items-start gap-2">
                    <img src={FLAG(s.code)} alt="" className="mt-0.5 size-6 rounded object-cover" />
                    <div className="min-w-0 flex-1">
                      <p className="text-[11px] font-semibold leading-snug text-[#101828]">
                        {s.title}
                      </p>
                      <p className="mt-1 text-[10px] text-[#98A2B3]">{s.when}</p>
                      <div className="mt-2 flex flex-wrap items-center gap-2">
                        <span className={`rounded-full px-2 py-0.5 text-[9px] font-bold ${s.statusClass}`}>
                          {s.status}
                        </span>
                        <Button
                          variant="outline"
                          className="h-7 rounded-lg border-[#175CD3] px-2.5 text-[10px] font-semibold text-[#175CD3]"
                        >
                          {s.action}
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <Link
              to="/dashboard/sessions"
              className="mt-3 block text-center text-[12px] font-semibold text-[#175CD3]"
            >
              View All →
            </Link>
          </ExporterCard>

          <ExporterCard>
            <h3 className="text-[14px] font-bold text-[#101828]">Session Types</h3>
            <ul className="mt-3 space-y-3">
              {[
                { i: Video, t: "Deal Room Session", d: "One-on-one or group meetings" },
                { i: Presentation, t: "Country Briefing", d: "Insights and market overview" },
                { i: Users, t: "Product Showcase", d: "Present your products & services" },
                { i: Network, t: "B2B Networking", d: "Connect and build relationships" },
              ].map((x) => (
                <li key={x.t} className="flex items-start gap-2.5">
                  <x.i className="mt-0.5 size-4 shrink-0 text-[#175CD3]" />
                  <div>
                    <p className="text-[12px] font-semibold text-[#101828]">{x.t}</p>
                    <p className="text-[11px] text-[#667085]">{x.d}</p>
                  </div>
                </li>
              ))}
            </ul>
            <button
              type="button"
              className="mt-4 w-full text-center text-[12px] font-semibold text-[#175CD3]"
            >
              Learn More About Sessions →
            </button>
          </ExporterCard>
        </aside>
      </div>
    </ExporterPageShell>
  );
}
