import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Store,
  Globe,
  Calendar,
  Target,
  Check,
  Headphones,
  PenLine,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  ExporterPageShell,
  ExporterCard,
} from "@/components/exporter/exporter-page-layout";

import uaeImg from "@/assets/dashboard/exporter/uae.jpg";
import usaImg from "@/assets/dashboard/exporter/usa.jpg";
import saudiImg from "@/assets/dashboard/exporter/saudi.jpg";
import kenyaImg from "@/assets/dashboard/exporter/kenya.jpg";

const FLAG = (code: string) => `https://flagcdn.com/w80/${code}.png`;

const STATS = [
  {
    label: "Active Deal Rooms",
    value: "24",
    sub: "Join live sessions",
    icon: Store,
    color: "text-[#175CD3]",
    bg: "bg-[#EFF8FF]",
  },
  {
    label: "Countries Available",
    value: "50+",
    sub: "Global reach",
    icon: Globe,
    color: "text-[#039855]",
    bg: "bg-[#ECFDF3]",
  },
  {
    label: "Upcoming Sessions",
    value: "18",
    sub: "In next 7 days",
    icon: Calendar,
    color: "text-[#F79009]",
    bg: "bg-[#FFFAEB]",
  },
  {
    label: "New Opportunities",
    value: "32",
    sub: "This week",
    icon: Target,
    color: "text-[#7A5AF8]",
    bg: "bg-[#F4F3FF]",
  },
];

const FEATURED = [
  {
    name: "USA",
    code: "us",
    img: usaImg,
    sessions: 8,
    desc: "Textile & Apparel hub",
  },
  {
    name: "UAE",
    code: "ae",
    img: uaeImg,
    sessions: 6,
    desc: "Construction & Trade",
  },
  {
    name: "Saudi Arabia",
    code: "sa",
    img: saudiImg,
    sessions: 5,
    desc: "Energy & Infrastructure",
  },
  {
    name: "United Kingdom",
    code: "gb",
    img: kenyaImg,
    sessions: 4,
    desc: "Premium Markets",
  },
];

const DEAL_ROOMS = [
  {
    name: "USA Textile & Apparel Deal Room",
    country: "us",
    industry: "Textiles",
    date: "20 May 2025, 11:00 AM",
    status: "Live Now",
    statusColor: "bg-[#ECFDF3] text-[#027A48]",
  },
  {
    name: "UAE Construction Materials Forum",
    country: "ae",
    industry: "Construction",
    date: "22 May 2025, 03:00 PM",
    status: "Upcoming",
    statusColor: "bg-[#EFF8FF] text-[#175CD3]",
  },
  {
    name: "Saudi Energy & Infrastructure Session",
    country: "sa",
    industry: "Energy",
    date: "25 May 2025, 10:00 AM",
    status: "Upcoming",
    statusColor: "bg-[#EFF8FF] text-[#175CD3]",
  },
  {
    name: "UK Premium Markets Access",
    country: "gb",
    industry: "General Trade",
    date: "28 May 2025, 02:00 PM",
    status: "By Invitation",
    statusColor: "bg-[#F4F3FF] text-[#7A5AF8]",
  },
  {
    name: "Kenya Agriculture & Agro Products Deal Room",
    country: "ke",
    industry: "Agriculture",
    date: "02 Jun 2025, 04:00 PM",
    status: "By Invitation",
    statusColor: "bg-[#F4F3FF] text-[#7A5AF8]",
  },
];

const DEAL_ROOM_STEPS = [
  {
    title: "Choose Country",
    desc: "Select a country you want to explore.",
  },
  {
    title: "Join Deal Room",
    desc: "Enter the deal room and submit your request.",
  },
  {
    title: "Connect",
    desc: "Get matched with verified buyers and partners.",
  },
  {
    title: "Grow Business",
    desc: "Close deals and expand globally.",
  },
];

const QUICK_ACTIONS = [
  {
    label: "Book New Session",
    sub: "Schedule a meeting",
    to: "/dashboard/my-sessions",
    icon: Calendar,
    color: "text-[#175CD3] bg-[#EFF8FF]",
  },
  {
    label: "Browse Countries",
    sub: "Explore global markets",
    to: "/dashboard/intelligence",
    icon: Globe,
    color: "text-[#175CD3] bg-[#EFF8FF]",
  },
  {
    label: "My Meetings",
    sub: "View your all meetings",
    to: "/dashboard/my-sessions",
    icon: Calendar,
    color: "text-[#039855] bg-[#ECFDF3]",
  },
  {
    label: "Post Requirement",
    sub: "Get matched with buyers",
    to: "/dashboard/my-requirements",
    icon: PenLine,
    color: "text-[#F79009] bg-[#FFFAEB]",
  },
];

const FILTER_TABS = ["All", "Upcoming", "Live Now", "By Invitation"];

export default function MarketplacePage() {
  const [filterTab, setFilterTab] = useState("All");

  return (
    <ExporterPageShell>
      <div className="grid grid-cols-1 items-start gap-5 xl:grid-cols-[minmax(0,1fr)_280px]">
        <section className="min-w-0 space-y-5">
          <div>
            <h1 className="text-[22px] font-bold text-[#101828] sm:text-[24px]">
              Marketplace
            </h1>
            <p className="mt-1 text-[13px] text-[#667085]">
              Connect with global buyers, explore deal rooms, and grow your
              export business.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
            {STATS.map((s) => (
              <div
                key={s.label}
                className="rounded-xl border border-[#E4E7EC] bg-white p-4 shadow-[0_1px_2px_rgba(16,24,40,0.05)]"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-[10px] text-[#667085]">{s.label}</p>
                    <p className="mt-1 text-[22px] font-bold text-[#101828]">
                      {s.value}
                    </p>
                    <p className="text-[10px] text-[#98A2B3]">{s.sub}</p>
                  </div>
                  <span
                    className={`flex size-8 items-center justify-center rounded-lg ${s.bg} ${s.color}`}
                  >
                    <s.icon className="size-4" />
                  </span>
                </div>
              </div>
            ))}
          </div>

          <ExporterCard>
            <h3 className="text-[14px] font-bold text-[#101828]">
              Find the Right Deal Room
            </h3>
            <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {[
                "Select Country",
                "All Industries",
                "All Types",
                "Select Date",
              ].map((label) => (
                <select
                  key={label}
                  className="h-9 rounded-lg border border-[#D0D5DD] bg-white px-2 text-[12px] text-[#344054]"
                >
                  <option>{label}</option>
                </select>
              ))}
            </div>
            <div className="mt-3 flex items-center justify-between">
              <button
                type="button"
                className="text-[12px] font-semibold text-[#175CD3]"
              >
                Reset Filters
              </button>
              <Button className="h-9 rounded-lg bg-[#175CD3] px-4 text-[12px] font-semibold hover:bg-[#1448B0]">
                Search
              </Button>
            </div>
          </ExporterCard>

          <ExporterCard>
            <div className="mb-3 flex items-center justify-between">
              <h3 className="text-[14px] font-bold text-[#101828]">
                Featured Countries
              </h3>
              <Link
                to="/dashboard/intelligence"
                className="text-[12px] font-semibold text-[#175CD3]"
              >
                View All Countries →
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
              {FEATURED.map((c) => (
                <div
                  key={c.name}
                  className="overflow-hidden rounded-xl border border-[#E4E7EC]"
                >
                  <div className="relative h-20">
                    <img
                      src={c.img}
                      alt={c.name}
                      className="size-full object-cover"
                    />
                    <img
                      src={FLAG(c.code)}
                      alt=""
                      className="absolute left-2 top-2 size-5 rounded-sm border border-white object-cover"
                    />
                  </div>
                  <div className="p-2.5">
                    <p className="text-[12px] font-bold text-[#101828]">
                      {c.name}
                    </p>
                    <p className="text-[10px] text-[#667085]">{c.desc}</p>
                    <p className="mt-1 text-[10px] text-[#98A2B3]">
                      {c.sessions} upcoming sessions
                    </p>
                    <Button
                      variant="outline"
                      className="mt-2 h-7 w-full rounded-lg border-[#B2DDFF] text-[10px] font-semibold text-[#175CD3]"
                    >
                      Explore Deal Rooms
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </ExporterCard>

          <ExporterCard>
            <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
              <div className="flex gap-1">
                {FILTER_TABS.map((tab) => (
                  <button
                    key={tab}
                    type="button"
                    onClick={() => setFilterTab(tab)}
                    className={`rounded-lg px-3 py-1.5 text-[11px] font-semibold ${
                      filterTab === tab
                        ? "bg-[#175CD3] text-white"
                        : "text-[#667085] hover:bg-[#F2F4F7]"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
              <select className="h-8 rounded-lg border border-[#D0D5DD] px-2 text-[11px]">
                <option>Sort by</option>
              </select>
            </div>
            <div className="space-y-2">
              {DEAL_ROOMS.map((room) => (
                <div
                  key={room.name}
                  className="flex flex-wrap items-center gap-3 rounded-xl border border-[#E4E7EC] bg-[#F9FAFB] p-3"
                >
                  <img
                    src={FLAG(room.country)}
                    alt=""
                    className="size-8 rounded-md border border-[#E4E7EC] object-cover"
                  />
                  <div className="min-w-0 flex-1">
                    <p className="text-[12px] font-semibold text-[#101828]">
                      {room.name}
                    </p>
                    <p className="text-[10px] text-[#667085]">
                      {room.industry} · {room.date}
                    </p>
                  </div>
                  <span
                    className={`rounded-full px-2.5 py-0.5 text-[9px] font-bold ${room.statusColor}`}
                  >
                    {room.status}
                  </span>
                  <Button
                    variant="outline"
                    className="h-7 rounded-lg border-[#B2DDFF] px-3 text-[10px] font-semibold text-[#175CD3]"
                  >
                    View Details
                  </Button>
                </div>
              ))}
            </div>
            <Link
              to="/dashboard/my-sessions"
              className="mt-3 flex h-9 items-center justify-center rounded-lg bg-[#EFF8FF] text-[11px] font-semibold text-[#175CD3] transition hover:bg-[#D1E9FF]"
            >
              View More Deal Rooms →
            </Link>
          </ExporterCard>
        </section>

        <aside className="space-y-4">
          <ExporterCard>
            <p className="text-[11px] font-medium text-[#667085]">Your Plan</p>
            <div className="mt-1 flex flex-wrap items-center gap-2">
              <h3 className="text-[15px] font-bold text-[#039855]">
                Global Growth Plan
              </h3>
              <span className="rounded-full bg-[#ECFDF3] px-2 py-0.5 text-[9px] font-bold text-[#027A48]">
                Active
              </span>
            </div>
            <ul className="mt-3 space-y-2">
              {[
                "4 / 4 Deal Room Sessions",
                "20+ Countries Access",
                "Priority Support",
                "90 Days Validity",
              ].map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-2 text-[11px] leading-snug text-[#344054]"
                >
                  <span className="mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full bg-[#ECFDF3] text-[#039855]">
                    <Check className="size-2.5 stroke-3" />
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
            <Button
              asChild
              variant="outline"
              className="mt-4 h-10 w-full rounded-xl border-[#175CD3] bg-white text-[12px] font-semibold text-[#175CD3] hover:bg-[#EFF8FF]"
            >
              <Link to="/dashboard/invoices">View Plan Details</Link>
            </Button>
          </ExporterCard>

          <ExporterCard>
            <h3 className="text-[14px] font-bold text-[#101828]">
              Quick Actions
            </h3>
            <div className="mt-2 space-y-1">
              {QUICK_ACTIONS.map((action) => (
                <Link
                  key={action.label}
                  to={action.to}
                  className="flex items-center gap-2.5 rounded-lg px-1 py-2 transition hover:bg-[#F9FAFB]"
                >
                  <span
                    className={`flex size-8 shrink-0 items-center justify-center rounded-lg ${action.color}`}
                  >
                    <action.icon className="size-4" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-[12px] font-semibold text-[#101828]">
                      {action.label}
                    </p>
                    <p className="text-[10px] text-[#98A2B3]">{action.sub}</p>
                  </div>
                </Link>
              ))}
            </div>
          </ExporterCard>

          <ExporterCard>
            <h3 className="text-[14px] font-bold text-[#101828]">
              How Deal Rooms Work?
            </h3>
            <div className="relative mt-4 space-y-4 pl-1">
              <div className="absolute bottom-2 left-[11px] top-2 w-px bg-[#D1E9FF]" />
              {DEAL_ROOM_STEPS.map((step, index) => (
                <div key={step.title} className="relative flex gap-3">
                  <span className="relative z-10 flex size-6 shrink-0 items-center justify-center rounded-full bg-[#175CD3] text-[10px] font-bold text-white">
                    {index + 1}
                  </span>
                  <div>
                    <p className="text-[11px] font-semibold text-[#101828]">
                      {step.title}
                    </p>
                    <p className="text-[10px] leading-relaxed text-[#667085]">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <button
              type="button"
              className="mt-3 text-[11px] font-semibold text-[#175CD3] hover:underline"
            >
              Learn More →
            </button>
          </ExporterCard>

          <ExporterCard className="border-[#D1E9FF] bg-[#EFF8FF]">
            <div className="flex items-start gap-3">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[#D1E9FF]">
                <Headphones className="size-5 text-[#175CD3]" />
              </div>
              <div>
                <h3 className="text-[13px] font-bold text-[#101828]">
                  Need Assistance?
                </h3>
                <p className="mt-1 text-[11px] leading-relaxed text-[#667085]">
                  Our global trade advisors are here to help you.
                </p>
              </div>
            </div>
            <Button
              asChild
              variant="outline"
              className="mt-4 h-9 w-full rounded-lg border-[#D0D5DD] bg-white text-[12px] font-semibold text-[#175CD3] shadow-sm"
            >
              <Link to="/dashboard/submit-questions">Contact Support</Link>
            </Button>
          </ExporterCard>
        </aside>
      </div>
    </ExporterPageShell>
  );
}
