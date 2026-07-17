import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Calendar,
  CheckCircle2,
  Clock,
  Download,
  MoreVertical,
  Search,
  Video,
  FileText,
  Send,
  Headphones,
  Plus,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  ExporterPageShell,
  ExporterCard,
  ExporterBreadcrumb,
  ExporterStatCard,
} from "@/components/exporter/exporter-page-layout";

const FLAG = (code: string) => `https://flagcdn.com/w40/${code}.png`;
const TABS = ["All Meetings", "Upcoming", "Pending", "Completed", "Cancelled"];

const MEETINGS = [
  {
    day: "24",
    month: "MAY",
    year: "2025",
    time: "04:00 PM GST",
    title: "USA Textile & Apparel Deal Room",
    code: "us",
    company: "GlobalTex Exports LLC",
    status: "Upcoming",
    statusClass: "bg-[#ECFDF3] text-[#027A48]",
    action: "Join Meeting",
  },
  {
    day: "26",
    month: "MAY",
    year: "2025",
    time: "11:00 AM GST",
    title: "UAE Construction Materials Forum",
    code: "ae",
    company: "Gulf Build Partners",
    status: "Pending",
    statusClass: "bg-[#FFFAEB] text-[#B54708]",
    action: "View Details",
  },
  {
    day: "18",
    month: "MAY",
    year: "2025",
    time: "02:30 PM GST",
    title: "UK Premium Markets Access",
    code: "gb",
    company: "EuroTrade Partners",
    status: "Completed",
    statusClass: "bg-[#F2F4F7] text-[#667085]",
    action: "View Summary",
  },
  {
    day: "28",
    month: "MAY",
    year: "2025",
    time: "10:00 AM GST",
    title: "Saudi Energy Session",
    code: "sa",
    company: "Desert Energy Co.",
    status: "Upcoming",
    statusClass: "bg-[#ECFDF3] text-[#027A48]",
    action: "Join Meeting",
  },
  {
    day: "30",
    month: "MAY",
    year: "2025",
    time: "03:00 PM GST",
    title: "Kenya Agro Products Connect",
    code: "ke",
    company: "East Africa Traders",
    status: "Pending",
    statusClass: "bg-[#FFFAEB] text-[#B54708]",
    action: "View Details",
  },
];

export default function MyMeetingsPage() {
  const [tab, setTab] = useState("All Meetings");

  const list =
    tab === "All Meetings"
      ? MEETINGS
      : MEETINGS.filter((m) => tab.replace(" Meetings", "") === m.status || tab === m.status);

  return (
    <ExporterPageShell>
      <div>
        <ExporterBreadcrumb
          items={[
            { label: "Dashboard", to: "/dashboard" },
            { label: "My Meetings" },
          ]}
        />
        <h1 className="mt-2 text-[22px] font-bold text-[#101828] sm:text-[24px]">My Meetings</h1>
        <p className="mt-1 text-[13px] text-[#667085]">
          Manage your scheduled, requested and past meetings all in one place.
        </p>
      </div>

      <div className="grid grid-cols-1 items-start gap-5 xl:grid-cols-[minmax(0,1fr)_280px]">
        <section className="min-w-0 space-y-5">
          <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
            <ExporterStatCard label="Total Meetings" value="12" sub="All time" icon={Calendar} color="text-[#175CD3]" bg="bg-[#EFF8FF]" />
            <ExporterStatCard label="Upcoming Meetings" value="5" sub="Next 7 days" icon={CheckCircle2} color="text-[#039855]" bg="bg-[#ECFDF3]" />
            <ExporterStatCard label="Pending Requests" value="3" sub="Awaiting response" icon={Clock} color="text-[#F79009]" bg="bg-[#FFFAEB]" />
            <ExporterStatCard label="Completed Meetings" value="9" sub="All time" icon={CheckCircle2} color="text-[#7A5AF8]" bg="bg-[#F4F3FF]" />
          </div>
          <ExporterCard>
            <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
              <div className="relative min-w-0 flex-1">
                <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-[#98A2B3]" />
                <input
                  placeholder="Search meetings by name, company, country..."
                  className="h-10 w-full rounded-lg border border-[#D0D5DD] pl-9 pr-3 text-[13px] outline-none focus:border-[#175CD3]"
                />
              </div>
              <div className="flex flex-wrap gap-2">
                {["All Status", "All Types", "All Dates"].map((f) => (
                  <select key={f} className="h-10 rounded-lg border border-[#D0D5DD] px-2 text-[11px]">
                    <option>{f}</option>
                  </select>
                ))}
                <Button variant="outline" className="h-10 rounded-lg border-[#D0D5DD] text-[12px] font-semibold text-[#344054]">
                  <Download className="mr-1.5 size-3.5" /> Export
                </Button>
              </div>
            </div>
          </ExporterCard>

          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div className="min-w-0 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              <div className="flex flex-nowrap gap-1 border-b border-[#E4E7EC] sm:border-b-0">
              {TABS.map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setTab(t)}
                  className={`shrink-0 whitespace-nowrap border-b-2 px-3 py-2.5 text-[12px] font-semibold ${
                    tab === t ? "border-[#175CD3] text-[#175CD3]" : "border-transparent text-[#667085]"
                  }`}
                >
                  {t}
                </button>
              ))}
              </div>
            </div>
            <select className="h-8 w-full shrink-0 rounded-lg border border-[#D0D5DD] px-2 text-[11px] sm:mb-1 sm:w-auto">
              <option>Sort by: Upcoming First</option>
            </select>
          </div>

          <div className="space-y-3">
            {list.map((m) => (
              <ExporterCard key={`${m.title}-${m.day}`} className="p-4">
                <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
                  <div className="flex size-14 shrink-0 flex-col items-center justify-center rounded-xl border border-[#ABEFC6] bg-[#ECFDF3]">
                    <span className="text-[14px] font-bold leading-none text-[#039855]">{m.day}</span>
                    <span className="mt-0.5 text-[9px] font-bold text-[#039855]">{m.month}</span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-[10px] text-[#98A2B3]">{m.time}</p>
                    <div className="mt-1 flex flex-wrap items-center gap-2">
                      <img src={FLAG(m.code)} alt="" className="size-5 rounded object-cover" />
                      <p className="text-[13px] font-bold text-[#101828]">{m.title}</p>
                      <span className="rounded-full bg-[#ECFDF3] px-2 py-0.5 text-[9px] font-semibold text-[#027A48]">
                        Deal Room Session
                      </span>
                    </div>
                    <p className="mt-1 text-[11px] text-[#667085]">{m.company}</p>
                    <div className="mt-2 flex -space-x-2">
                      {["AR", "SD", "PT"].map((a) => (
                        <span key={a} className="flex size-6 items-center justify-center rounded-full border-2 border-white bg-[#D1E9FF] text-[8px] font-bold text-[#175CD3]">
                          {a}
                        </span>
                      ))}
                      <span className="flex size-6 items-center justify-center rounded-full border-2 border-white bg-[#F2F4F7] text-[8px] font-bold text-[#667085]">
                        +2
                      </span>
                    </div>
                  </div>
                  <div className="flex shrink-0 items-center gap-2">
                    <span className={`rounded-full px-2.5 py-0.5 text-[9px] font-bold ${m.statusClass}`}>
                      {m.status}
                    </span>
                    <Button
                      variant={m.action === "Join Meeting" ? "outline" : "outline"}
                      className="h-8 rounded-lg border-[#175CD3] px-3 text-[11px] font-semibold text-[#175CD3]"
                    >
                      {m.action}
                    </Button>
                    <button type="button" className="rounded-lg p-1.5 text-[#98A2B3] hover:bg-[#F2F4F7]">
                      <MoreVertical className="size-4" />
                    </button>
                  </div>
                </div>
              </ExporterCard>
            ))}
          </div>

          <button type="button" className="w-full rounded-xl border border-[#E4E7EC] bg-white py-3 text-[12px] font-semibold text-[#175CD3]">
            Load More Meetings
          </button>

          <ExporterCard>
            <h3 className="mb-4 text-[14px] font-bold text-[#101828]">How Meetings Work?</h3>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { t: "Request or Schedule", d: "Send or accept meeting invites.", i: Calendar },
                { t: "Get Confirmed", d: "Wait for confirmation from partners.", i: Send },
                { t: "Join & Connect", d: "Join on time via video call.", i: Video },
                { t: "Follow Up", d: "Share notes and next steps.", i: FileText },
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
            <h3 className="text-[13px] font-bold text-[#101828]">My Meeting Summary</h3>
            <div className="mt-4 flex items-center gap-3">
              <div className="relative flex size-[84px] shrink-0 items-center justify-center">
                <svg className="size-[84px] -rotate-90" viewBox="0 0 36 36">
                  <circle cx="18" cy="18" r="14" fill="none" stroke="#E4E7EC" strokeWidth="3.5" />
                  <circle cx="18" cy="18" r="14" fill="none" stroke="#039855" strokeWidth="3.5" strokeDasharray="28 88" strokeLinecap="round" />
                  <circle cx="18" cy="18" r="14" fill="none" stroke="#F79009" strokeWidth="3.5" strokeDasharray="18 88" strokeDashoffset="-28" strokeLinecap="round" />
                  <circle cx="18" cy="18" r="14" fill="none" stroke="#7A5AF8" strokeWidth="3.5" strokeDasharray="32 88" strokeDashoffset="-46" strokeLinecap="round" />
                </svg>
                <div className="absolute text-center">
                  <p className="text-[14px] font-bold text-[#101828]">12</p>
                  <p className="text-[8px] text-[#98A2B3]">Total</p>
                </div>
              </div>
              <ul className="space-y-1.5 text-[10px]">
                <li className="flex items-center gap-1.5"><span className="size-2 rounded-full bg-[#039855]" />Upcoming</li>
                <li className="flex items-center gap-1.5"><span className="size-2 rounded-full bg-[#F79009]" />Pending</li>
                <li className="flex items-center gap-1.5"><span className="size-2 rounded-full bg-[#7A5AF8]" />Completed</li>
                <li className="flex items-center gap-1.5"><span className="size-2 rounded-full bg-[#98A2B3]" />Cancelled</li>
              </ul>
            </div>
          </ExporterCard>

          <ExporterCard>
            <div className="mb-3 flex items-center justify-between">
              <h3 className="text-[13px] font-bold text-[#101828]">Upcoming Next</h3>
              <Link to="/dashboard/sessions" className="text-[11px] font-semibold text-[#175CD3]">View Calendar</Link>
            </div>
            {MEETINGS.filter((m) => m.status === "Upcoming").map((m) => (
              <div key={m.title} className="mb-3 flex gap-2 border-b border-[#F2F4F7] pb-3 last:mb-0 last:border-0 last:pb-0">
                <img src={FLAG(m.code)} alt="" className="size-6 rounded object-cover" />
                <div>
                  <p className="text-[11px] font-semibold text-[#101828]">{m.title}</p>
                  <p className="text-[10px] text-[#98A2B3]">{m.day} {m.month} · {m.time}</p>
                </div>
              </div>
            ))}
          </ExporterCard>

          <ExporterCard>
            <h3 className="text-[13px] font-bold text-[#101828]">Quick Actions</h3>
            <div className="mt-2 space-y-1">
              {[
                { l: "Schedule a Meeting", i: Plus, to: "/dashboard/sessions" },
                { l: "Meeting Requests", i: Send, to: "/dashboard/meeting-requests" },
                { l: "Availability Settings", i: Calendar, to: "/dashboard/settings" },
                { l: "Invite Participants", i: Video, to: "/dashboard/my-meetings" },
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
                <p className="mt-1 text-[11px] text-[#667085]">Our team is here to help you with your meetings.</p>
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
