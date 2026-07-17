import { useState } from "react";
import { Link } from "react-router-dom";
import {
  BadgeCheck,
  Clock,
  Download,
  Headphones,
  MoreVertical,
  Search,
  Calendar,
  Settings,
  Ban,
  CheckCircle2,
  XCircle,
  Inbox,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  ExporterPageShell,
  ExporterCard,
  ExporterBreadcrumb,
  ExporterStatCard,
} from "@/components/exporter/exporter-page-layout";

const FLAG = (code: string) => `https://flagcdn.com/w40/${code}.png`;

const REQUESTS = [
  {
    initials: "PT",
    company: "Premium Tex Trading",
    code: "ae",
    industry: "Textiles, Apparel",
    purpose: "Looking to source premium bed linen and bath towels for Dubai retail chain expansion in Q3 2025.",
    session: "UAE Textile Deal Room",
    when: "26 May 2025, 11:00 AM GST",
    status: "Pending",
    statusClass: "bg-[#FFFAEB] text-[#B54708]",
  },
  {
    initials: "GF",
    company: "Global Foods Inc.",
    code: "us",
    industry: "Food & Beverage",
    purpose: "Interested in spices and processed foods for US distribution network.",
    session: "USA Buyer Matchmaking",
    when: "28 May 2025, 03:00 PM GST",
    status: "Accepted",
    statusClass: "bg-[#ECFDF3] text-[#027A48]",
  },
  {
    initials: "EB",
    company: "EuroBuild GmbH",
    code: "de",
    industry: "Construction",
    purpose: "Seeking ceramic tiles and construction fittings suppliers for EU projects.",
    session: "Germany Trade Connect",
    when: "30 May 2025, 10:00 AM GST",
    status: "Pending",
    statusClass: "bg-[#FFFAEB] text-[#B54708]",
  },
  {
    initials: "SA",
    company: "Saudi Infra Co.",
    code: "sa",
    industry: "Infrastructure",
    purpose: "Need steel and industrial materials partners for Vision 2030 projects.",
    session: "Saudi Energy Session",
    when: "02 Jun 2025, 02:00 PM GST",
    status: "Accepted",
    statusClass: "bg-[#ECFDF3] text-[#027A48]",
  },
  {
    initials: "KT",
    company: "Kenya Traders Ltd",
    code: "ke",
    industry: "Agriculture",
    purpose: "Exploring partnership for coffee and tea export packaging solutions.",
    session: "Kenya Agro Deal Room",
    when: "04 Jun 2025, 04:00 PM GST",
    status: "Declined",
    statusClass: "bg-[#FEF3F2] text-[#D92D20]",
  },
];

const TABS = [
  { id: "All Requests", count: 8 },
  { id: "Pending", count: 3 },
  { id: "Accepted", count: 4 },
  { id: "Declined", count: 1 },
];

export default function MeetingRequestsPage() {
  const [tab, setTab] = useState("All Requests");

  const list =
    tab === "All Requests"
      ? REQUESTS
      : REQUESTS.filter((r) => r.status === tab);

  return (
    <ExporterPageShell>
      <div>
        <ExporterBreadcrumb
          items={[
            { label: "Dashboard", to: "/dashboard" },
            { label: "Meeting Requests" },
          ]}
        />
        <h1 className="mt-2 text-[22px] font-bold text-[#101828] sm:text-[24px]">
          Meeting Requests
        </h1>
        <p className="mt-1 text-[13px] text-[#667085]">
          Review, accept or decline meeting requests from verified buyers and partners.
        </p>
      </div>

      <div className="grid grid-cols-1 items-start gap-5 xl:grid-cols-[minmax(0,1fr)_280px]">
        <section className="min-w-0 space-y-5">
          <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
            <ExporterStatCard label="Total Requests" value="8" sub="All time" icon={Inbox} color="text-[#175CD3]" bg="bg-[#EFF8FF]" />
            <ExporterStatCard label="Pending" value="3" sub="Awaiting action" icon={Clock} color="text-[#F79009]" bg="bg-[#FFFAEB]" />
            <ExporterStatCard label="Accepted" value="4" sub="Confirmed" icon={CheckCircle2} color="text-[#039855]" bg="bg-[#ECFDF3]" />
            <ExporterStatCard label="Declined" value="1" sub="Not proceeding" icon={XCircle} color="text-[#D92D20]" bg="bg-[#FEF3F2]" />
          </div>
          <ExporterCard>
            <div className="flex flex-col gap-3 lg:flex-row">
              <div className="relative min-w-0 flex-1">
                <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-[#98A2B3]" />
                <input
                  placeholder="Search by company..."
                  className="h-10 w-full rounded-lg border border-[#D0D5DD] pl-9 pr-3 text-[13px] outline-none focus:border-[#175CD3]"
                />
              </div>
              <div className="flex flex-wrap gap-2">
                {["All Status", "All Types", "Select Date Range"].map((f) => (
                  <select key={f} className="h-10 rounded-lg border border-[#D0D5DD] px-2 text-[11px]">
                    <option>{f}</option>
                  </select>
                ))}
                <Button variant="outline" className="h-10 rounded-lg border-[#D0D5DD] text-[12px] font-semibold">
                  <Download className="mr-1.5 size-3.5" /> Export
                </Button>
              </div>
            </div>
          </ExporterCard>

          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div className="min-w-0 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              <div className="flex flex-nowrap gap-1">
              {TABS.map((t) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setTab(t.id)}
                  className={`shrink-0 whitespace-nowrap border-b-2 px-3 py-2.5 text-[12px] font-semibold ${
                    tab === t.id ? "border-[#175CD3] text-[#175CD3]" : "border-transparent text-[#667085]"
                  }`}
                >
                  {t.id} ({t.count})
                </button>
              ))}
              </div>
            </div>
            <select className="h-8 w-full shrink-0 rounded-lg border border-[#D0D5DD] px-2 text-[11px] sm:mb-1 sm:w-auto">
              <option>Sort by: Newest First</option>
            </select>
          </div>

          <div className="space-y-3">
            {list.map((r) => (
              <ExporterCard key={r.company} className="p-4">
                <div className="flex flex-col gap-4 lg:flex-row lg:items-start">
                  <div className="flex min-w-0 flex-1 gap-3">
                    <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-[#EFF8FF] text-[13px] font-bold text-[#175CD3]">
                      {r.initials}
                    </div>
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-1.5">
                        <p className="text-[13px] font-bold text-[#101828]">{r.company}</p>
                        <BadgeCheck className="size-3.5 text-[#175CD3]" />
                      </div>
                      <div className="mt-1 flex flex-wrap items-center gap-2 text-[11px] text-[#667085]">
                        <img src={FLAG(r.code)} alt="" className="size-4 rounded object-cover" />
                        <span>{r.industry}</span>
                      </div>
                      <p className="mt-2 text-[10px] font-semibold uppercase tracking-wide text-[#98A2B3]">
                        Meeting Purpose
                      </p>
                      <p className="mt-0.5 text-[12px] leading-relaxed text-[#344054]">{r.purpose}</p>
                      <p className="mt-2 text-[11px] text-[#667085]">
                        <span className="font-semibold text-[#101828]">{r.session}</span> · {r.when}
                      </p>
                    </div>
                  </div>
                  <div className="flex shrink-0 flex-col items-stretch gap-2 sm:items-end">
                    <span className={`self-start rounded-full px-2.5 py-0.5 text-[9px] font-bold sm:self-end ${r.statusClass}`}>
                      {r.status}
                    </span>
                    {r.status === "Pending" ? (
                      <div className="flex gap-2">
                        <Button className="h-8 rounded-lg bg-[#175CD3] px-3 text-[11px] font-semibold hover:bg-[#1448B0]">
                          Accept
                        </Button>
                        <Button variant="outline" className="h-8 rounded-lg border-[#FDA29B] px-3 text-[11px] font-semibold text-[#D92D20]">
                          Decline
                        </Button>
                      </div>
                    ) : (
                      <Button variant="outline" className="h-8 rounded-lg border-[#175CD3] px-3 text-[11px] font-semibold text-[#175CD3]">
                        View Details
                      </Button>
                    )}
                    <button type="button" className="self-end rounded-lg p-1.5 text-[#98A2B3] hover:bg-[#F2F4F7]">
                      <MoreVertical className="size-4" />
                    </button>
                  </div>
                </div>
              </ExporterCard>
            ))}
          </div>

          <button type="button" className="w-full rounded-xl border border-[#E4E7EC] bg-white py-3 text-[12px] font-semibold text-[#175CD3]">
            Load More Requests
          </button>

          <div className="flex flex-col gap-3 rounded-2xl border border-[#B2DDFF] bg-[#EFF8FF] px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-[14px] font-bold text-[#175CD3]">Respond Promptly</p>
              <p className="text-[12px] text-[#667085]">
                Faster responses improve your match rate and partner trust score.
              </p>
            </div>
            <Button variant="outline" className="h-9 shrink-0 rounded-lg border-[#175CD3] bg-white text-[12px] font-semibold text-[#175CD3]">
              Learn Best Practices
            </Button>
          </div>
        </section>

        <aside className="space-y-4">
          <ExporterCard>
            <div className="flex items-center justify-between">
              <h3 className="text-[13px] font-bold text-[#101828]">My Meeting Overview</h3>
              <Link to="/dashboard/my-meetings" className="text-[11px] font-semibold text-[#175CD3]">View All</Link>
            </div>
            <div className="mt-4 flex items-center gap-3">
              <div className="relative flex size-[84px] shrink-0 items-center justify-center">
                <svg className="size-[84px] -rotate-90" viewBox="0 0 36 36">
                  <circle cx="18" cy="18" r="14" fill="none" stroke="#E4E7EC" strokeWidth="3.5" />
                  <circle cx="18" cy="18" r="14" fill="none" stroke="#F79009" strokeWidth="3.5" strokeDasharray="22 88" strokeLinecap="round" />
                  <circle cx="18" cy="18" r="14" fill="none" stroke="#039855" strokeWidth="3.5" strokeDasharray="28 88" strokeDashoffset="-22" strokeLinecap="round" />
                  <circle cx="18" cy="18" r="14" fill="none" stroke="#D92D20" strokeWidth="3.5" strokeDasharray="8 88" strokeDashoffset="-50" strokeLinecap="round" />
                  <circle cx="18" cy="18" r="14" fill="none" stroke="#7A5AF8" strokeWidth="3.5" strokeDasharray="30 88" strokeDashoffset="-58" strokeLinecap="round" />
                </svg>
                <div className="absolute text-center">
                  <p className="text-[14px] font-bold text-[#101828]">12</p>
                  <p className="text-[8px] text-[#98A2B3]">Total</p>
                </div>
              </div>
              <ul className="space-y-1 text-[10px] text-[#344054]">
                <li>3 Pending</li>
                <li>4 Accepted</li>
                <li>1 Declined</li>
                <li>4 Completed</li>
              </ul>
            </div>
          </ExporterCard>

          <ExporterCard>
            <h3 className="text-[13px] font-bold text-[#101828]">Request Response Time</h3>
            <p className="mt-2 text-[22px] font-bold text-[#101828]">12h 45m</p>
            <p className="mt-1 text-[11px] font-semibold text-[#027A48]">Faster than 78% of users</p>
          </ExporterCard>

          <ExporterCard>
            <h3 className="text-[13px] font-bold text-[#101828]">Quick Actions</h3>
            <div className="mt-2 space-y-1">
              {[
                { l: "Schedule a Meeting", i: Calendar, to: "/dashboard/sessions" },
                { l: "Availability Settings", i: Settings, to: "/dashboard/settings" },
                { l: "Meeting Preferences", i: CheckCircle2, to: "/dashboard/settings" },
                { l: "Blocked Users", i: Ban, to: "/dashboard/settings" },
              ].map((a) => (
                <Link key={a.l} to={a.to} className="flex items-center gap-2 rounded-lg px-2 py-2 text-[12px] font-medium text-[#344054] hover:bg-[#F9FAFB]">
                  <a.i className="size-3.5 text-[#175CD3]" /> {a.l}
                </Link>
              ))}
            </div>
          </ExporterCard>

          <ExporterCard className="border-[#D1E9FF] bg-[#EFF8FF]">
            <div className="flex items-start gap-3">
              <div className="flex size-10 items-center justify-center rounded-full bg-[#D1E9FF]">
                <Headphones className="size-5 text-[#175CD3]" />
              </div>
              <div>
                <h3 className="text-[13px] font-bold text-[#101828]">Need Assistance?</h3>
                <p className="mt-1 text-[11px] text-[#667085]">Our advisors can help you manage meeting requests.</p>
              </div>
            </div>
            <Button asChild variant="outline" className="mt-4 h-9 w-full rounded-lg border-[#D0D5DD] bg-white text-[12px] font-semibold text-[#175CD3]">
              <Link to="/dashboard/need-help">Contact Support</Link>
            </Button>
          </ExporterCard>
        </aside>
      </div>
    </ExporterPageShell>
  );
}
