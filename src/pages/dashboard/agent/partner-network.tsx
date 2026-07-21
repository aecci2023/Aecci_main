import { useState } from "react";
import {
  BadgeCheck,
  Briefcase,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Globe2,
  MoreHorizontal,
  Plus,
  Search,
  UserPlus,
  Users,
} from "lucide-react";
import { Main } from "@/components/layout/main";
import { Button } from "@/components/ui/button";

const FLAG = (code: string) => `https://flagcdn.com/w40/${code}.png`;

const STATS = [
  {
    label: "Total Partners",
    value: "355",
    sub: null,
    icon: Users,
    cardBg: "bg-[#EFF8FF]",
    iconBg: "bg-[#D1E9FF]",
    iconColor: "text-[#175CD3]",
  },
  {
    label: "Countries connected",
    value: "42",
    sub: null,
    icon: Globe2,
    cardBg: "bg-[#ECFDF3]",
    iconBg: "bg-[#D1FADF]",
    iconColor: "text-[#039855]",
  },
  {
    label: "Active Collaborations",
    value: "28",
    sub: "+3 this week",
    icon: Briefcase,
    cardBg: "bg-[#EEF4FF]",
    iconBg: "bg-[#D1E0FF]",
    iconColor: "text-[#3538CD]",
  },
  {
    label: "New Partners",
    value: "12",
    sub: "+2 this week",
    icon: UserPlus,
    cardBg: "bg-[#F4F3FF]",
    iconBg: "bg-[#E0D9FF]",
    iconColor: "text-[#6938EF]",
  },
];

const TABS = [
  "All Partners",
  "Active Partners",
  "Collaborations",
  "Invitations Sent",
] as const;

const PARTNERS = [
  {
    name: "Global Trade Solutions",
    initials: "GT",
    color: "bg-[#175CD3]",
    country: "Germany",
    flag: "de",
    industry: "Machinery",
    type: "Distributor",
    status: "Active" as const,
    verified: true,
  },
  {
    name: "Euro Business Advisors",
    initials: "EB",
    color: "bg-[#039855]",
    country: "Netherlands",
    flag: "nl",
    industry: "Consulting",
    type: "Advisory",
    status: "Active" as const,
    verified: true,
  },
  {
    name: "Middle East Trade Hub",
    initials: "ME",
    color: "bg-[#DC6803]",
    country: "UAE",
    flag: "ae",
    industry: "Trading",
    type: "Agent",
    status: "Active" as const,
    verified: true,
  },
  {
    name: "Agri Nation Connect",
    initials: "AN",
    color: "bg-[#12B76A]",
    country: "USA",
    flag: "us",
    industry: "Agriculture",
    type: "Supplier",
    status: "In Review" as const,
    verified: false,
  },
  {
    name: "PharmaCare Global",
    initials: "PG",
    color: "bg-[#6938EF]",
    country: "Singapore",
    flag: "sg",
    industry: "Pharmaceuticals",
    type: "Distributor",
    status: "Active" as const,
    verified: true,
  },
];

const REGIONS = [
  { name: "Europe", count: 142, color: "bg-[#D4A574]" },
  { name: "Asia", count: 74, color: "bg-[#2B3674]" },
  { name: "Middle East", count: 12, color: "bg-[#A3B18A]" },
  { name: "North America", count: 42, color: "bg-[#175CD3]" },
  { name: "Africa", count: 8, color: "bg-[#12B76A]" },
];

const RECENT = [
  { name: "Trade Experts GmbH", flag: "de", country: "Germany", date: "Yesterday" },
  { name: "Asian Trade Ltd.", flag: "cn", country: "China", date: "2 days ago" },
  { name: "US Import Solutions", flag: "us", country: "USA", date: "3 days ago" },
];

function StatusPill({ status }: { status: "Active" | "In Review" }) {
  if (status === "Active") {
    return (
      <span className="inline-flex items-center rounded-full bg-[#ECFDF3] px-2.5 py-1 text-[11px] font-semibold text-[#039855]">
        Active
      </span>
    );
  }
  return (
    <span className="inline-flex items-center rounded-full bg-[#FFFAEB] px-2.5 py-1 text-[11px] font-semibold text-[#DC6803]">
      In Review
    </span>
  );
}

function RightSidebar() {
  return (
    <aside className="space-y-4 xl:sticky xl:top-4">
      {/* Network Overview */}
      <div className="overflow-hidden rounded-2xl border border-[#E4E7EC] bg-white shadow-[0_1px_2px_rgba(16,24,40,0.05)]">
        <div className="border-b border-[#F2F4F7] px-4 py-3.5 sm:px-5">
          <h3 className="text-[14px] font-bold text-[#101828]">Network Overview</h3>
        </div>

        {/* Dotted world map — same as Figma */}
        <div className="relative mx-4 mt-4 overflow-hidden rounded-2xl bg-[#051025] sm:mx-5">
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 80% 70% at 55% 30%, rgba(37,99,235,0.28) 0%, transparent 65%)",
            }}
          />
          <img
            src="/AECCIMapBG.png"
            alt="Global network map"
            className="relative z-[1] h-[148px] w-full object-cover object-center"
          />
        </div>

        <ul className="mt-1 px-4 pb-1 sm:px-5">
          {REGIONS.map((region) => (
            <li
              key={region.name}
              className="flex items-center justify-between border-b border-[#F2F4F7] py-2.5 last:border-b-0"
            >
              <span className="flex items-center gap-2.5 text-[12px] font-medium text-[#344054]">
                <span className={`size-2 shrink-0 rounded-full ${region.color}`} />
                {region.name}
              </span>
              <span className="text-[12px] font-bold text-[#101828]">
                {region.count} Partners
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Recent Connections */}
      <div className="rounded-2xl border border-[#E4E7EC] bg-white p-4 shadow-[0_1px_2px_rgba(16,24,40,0.05)] sm:p-5">
        <h3 className="text-[14px] font-bold text-[#101828]">Recent Connections</h3>
        <ul className="mt-3.5 divide-y divide-[#F2F4F7]">
          {RECENT.map((item) => (
            <li key={item.name} className="flex items-center gap-3 py-3 first:pt-0 last:pb-0">
              <span className="flex size-9 shrink-0 items-center justify-center overflow-hidden rounded-full border border-[#E4E7EC] bg-[#F9FAFB]">
                <img
                  src={FLAG(item.flag)}
                  alt=""
                  className="h-5 w-7 rounded-sm object-cover"
                />
              </span>
              <div className="min-w-0 flex-1">
                <p className="truncate text-[12px] font-bold text-[#101828]">{item.name}</p>
                <p className="text-[10px] text-[#667085]">
                  {item.country} · {item.date}
                </p>
              </div>
            </li>
          ))}
        </ul>
        <Button
          variant="outline"
          className="mt-4 h-9 w-full rounded-xl border-[#D4A574] bg-transparent text-[12px] font-semibold text-[#D4A574] hover:bg-[#FFF8F0] hover:text-[#C4935F]"
        >
          See All Partners
        </Button>
      </div>
    </aside>
  );
}

export default function AgentPartnerNetworkPage() {
  const [activeTab, setActiveTab] = useState<(typeof TABS)[number]>("All Partners");

  return (
    <Main
      fluid
      className="min-h-full space-y-5 overflow-x-hidden bg-[#F8FAFC]! px-3 pb-8 sm:space-y-6 sm:px-5"
    >
      {/* Page header */}
      <div>
        <h1 className="text-[22px] font-bold tracking-tight text-[#101828] sm:text-[24px]">
          Partner Network
        </h1>
        <p className="mt-1 text-[13px] text-[#667085]">
          Connect and collaborate with global partners
        </p>
      </div>

      {/* Stat cards — pastel like Figma */}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {STATS.map((stat) => (
          <div
            key={stat.label}
            className={`flex items-center gap-4 rounded-2xl border border-[#E4E7EC]/60 p-4 shadow-[0_1px_2px_rgba(16,24,40,0.04)] sm:p-5 ${stat.cardBg}`}
          >
            <span
              className={`flex size-12 shrink-0 items-center justify-center rounded-xl ${stat.iconBg} ${stat.iconColor}`}
            >
              <stat.icon className="size-6 stroke-[1.5]" />
            </span>
            <div className="min-w-0">
              <p className="text-[24px] font-bold leading-none text-[#101828] sm:text-[26px]">
                {stat.value}
              </p>
              <p className="mt-1.5 text-[12px] font-semibold text-[#344054]">{stat.label}</p>
              {stat.sub && (
                <p className="mt-0.5 text-[11px] font-medium text-[#039855]">{stat.sub}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Table + right sidebar */}
      <div className="grid grid-cols-1 items-start gap-4 xl:grid-cols-[minmax(0,1fr)_280px]">
        <div className="min-w-0 overflow-hidden rounded-2xl border border-[#E4E7EC] bg-white shadow-[0_1px_2px_rgba(16,24,40,0.05)]">
          {/* Search / filter / add */}
          <div className="flex flex-col gap-3 border-b border-[#F2F4F7] p-4 sm:flex-row sm:items-center sm:p-5">
            <div className="flex h-10 flex-1 items-center gap-2 rounded-xl border border-[#E4E7EC] bg-[#F9FAFB] px-3">
              <Search className="size-4 shrink-0 text-[#98A2B3]" />
              <input
                placeholder="Search partners..."
                className="w-full bg-transparent text-[13px] outline-none placeholder:text-[#98A2B3]"
              />
            </div>
            <button
              type="button"
              className="flex h-10 shrink-0 items-center gap-2 rounded-xl border border-[#E4E7EC] bg-white px-4 text-[13px] font-medium text-[#344054]"
            >
              All Partners
              <ChevronDown className="size-4 text-[#98A2B3]" />
            </button>
            <Button className="h-10 shrink-0 rounded-xl bg-[#D4A574] px-4 text-[13px] font-semibold text-[#061A33] hover:bg-[#C4935F]">
              <Plus className="mr-1 size-4" />
              Add Partner
            </Button>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap gap-0 border-b border-[#F2F4F7] px-4 sm:px-5">
            {TABS.map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`border-b-2 px-3 py-3 text-[13px] font-semibold transition ${
                  activeTab === tab
                    ? "border-[#175CD3] text-[#175CD3]"
                    : "border-transparent text-[#667085] hover:text-[#344054]"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Partners table */}
          <div className="overflow-x-auto">
            <table className="w-full min-w-[720px] text-left">
              <thead>
                <tr className="border-b border-[#F2F4F7] bg-[#FCFCFD]">
                  {[
                    "Partner",
                    "Country",
                    "Industry",
                    "Partnership Type",
                    "Status",
                    "Action",
                  ].map((col) => (
                    <th
                      key={col}
                      className="px-4 py-3 text-[11px] font-semibold uppercase tracking-wide text-[#667085]"
                    >
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F2F4F7]">
                {PARTNERS.map((partner) => (
                  <tr key={partner.name} className="hover:bg-[#FCFCFD]">
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-3">
                        <span
                          className={`flex size-10 shrink-0 items-center justify-center rounded-full text-[11px] font-bold text-white ${partner.color}`}
                        >
                          {partner.initials}
                        </span>
                        <div className="min-w-0">
                          <p className="text-[13px] font-semibold text-[#101828]">
                            {partner.name}
                          </p>
                          {partner.verified && (
                            <span className="mt-0.5 inline-flex items-center gap-1 text-[10px] font-semibold text-[#039855]">
                              <BadgeCheck className="size-3" />
                              Verified Partner
                            </span>
                          )}
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-2">
                        <img
                          src={FLAG(partner.flag)}
                          alt={partner.country}
                          className="h-4 w-5 rounded-sm object-cover"
                        />
                        <span className="text-[13px] text-[#344054]">{partner.country}</span>
                      </div>
                    </td>
                    <td className="px-4 py-4 text-[13px] text-[#344054]">
                      {partner.industry}
                    </td>
                    <td className="px-4 py-4 text-[13px] text-[#344054]">{partner.type}</td>
                    <td className="px-4 py-4">
                      <StatusPill status={partner.status} />
                    </td>
                    <td className="px-4 py-4">
                      <button
                        type="button"
                        className="flex size-8 items-center justify-center rounded-lg text-[#98A2B3] hover:bg-[#F9FAFB] hover:text-[#344054]"
                      >
                        <MoreHorizontal className="size-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex flex-col items-center justify-between gap-3 border-t border-[#F2F4F7] px-4 py-3 sm:flex-row sm:px-5">
            <p className="text-[12px] text-[#667085]">Showing 1 to 5 of 355 partners</p>
            <div className="flex items-center gap-1">
              <button
                type="button"
                className="flex size-8 items-center justify-center rounded-lg border border-[#E4E7EC] text-[#667085] hover:bg-[#F9FAFB]"
              >
                <ChevronLeft className="size-4" />
              </button>
              {[1, 2, 3, 4, 5].map((page) => (
                <button
                  key={page}
                  type="button"
                  className={`flex size-8 items-center justify-center rounded-lg text-[12px] font-semibold ${
                    page === 1
                      ? "bg-[#175CD3] text-white"
                      : "border border-[#E4E7EC] text-[#344054] hover:bg-[#F9FAFB]"
                  }`}
                >
                  {page}
                </button>
              ))}
              <button
                type="button"
                className="flex size-8 items-center justify-center rounded-lg border border-[#E4E7EC] text-[#667085] hover:bg-[#F9FAFB]"
              >
                <ChevronRight className="size-4" />
              </button>
            </div>
          </div>
        </div>

        <RightSidebar />
      </div>
    </Main>
  );
}
