import { useState } from "react";
import { Main } from "@/components/layout/main";
import { Button } from "@/components/ui/button";
import {
  Search,
  Plus,
  Globe,
  Users,
  Handshake,
  UserPlus,
  MoreVertical,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

// ── Types ────────────────────────────────────────────────────────────────────

interface Partner {
  id: number;
  name: string;
  subtitle: string;
  avatar: string;
  country: string;
  countryFlag: string;
  industry: string;
  partnershipType: string;
  partnershipColor: string;
  status: "Active" | "In Discussion" | "Pending" | "Inactive";
}

// ── Static Data ───────────────────────────────────────────────────────────────

const kpiCards = [
  {
    id: 1,
    value: "356",
    label: "Total Partners",
    sub: "+18 this month",
    icon: Users,
    iconBg: "bg-[#DBEAFE]",
    iconColor: "text-[#2563EB]",
    borderColor: "border-[#BFDBFE]",
  },
  {
    id: 2,
    value: "42",
    label: "Countries",
    sub: "+3 this month",
    icon: Globe,
    iconBg: "bg-[#D1FAE5]",
    iconColor: "text-[#059669]",
    borderColor: "border-[#A7F3D0]",
  },
  {
    id: 3,
    value: "28",
    label: "Active Collaborations",
    sub: "+4 this month",
    icon: Handshake,
    iconBg: "bg-[#E0E7FF]",
    iconColor: "text-[#4F46E5]",
    borderColor: "border-[#C7D2FE]",
  },
  {
    id: 4,
    value: "12",
    label: "New Partners",
    sub: "+3 this month",
    icon: UserPlus,
    iconBg: "bg-[#EDE9FE]",
    iconColor: "text-[#7C3AED]",
    borderColor: "border-[#DDD6FE]",
  },
];

const regionData = [
  { region: "Europe", count: 110, color: "#3B82F6" },
  { region: "Asia", count: 98, color: "#F97316" },
  { region: "Middle East", count: 78, color: "#10B981" },
  { region: "North America", count: 45, color: "#8B5CF6" },
  { region: "Africa", count: 25, color: "#F59E0B" },
];

const recentConnections = [
  {
    id: 1,
    name: "Trade Experts GmbH",
    country: "Germany",
    flag: "🇩🇪",
    avatar: "TE",
    avatarBg: "bg-[#1E3A5F]",
  },
  {
    id: 2,
    name: "Asian Trade Link",
    country: "Singapore",
    flag: "🇸🇬",
    avatar: "AT",
    avatarBg: "bg-[#DC2626]",
  },
  {
    id: 3,
    name: "US Import Solutions",
    country: "USA",
    flag: "🇺🇸",
    avatar: "UI",
    avatarBg: "bg-[#1D4ED8]",
  },
];

const partnersData: Partner[] = [
  {
    id: 1,
    name: "Global Trade Solutions",
    subtitle: "Verified Partner",
    avatar: "GT",
    country: "Germany",
    countryFlag: "🇩🇪",
    industry: "Machinery",
    partnershipType: "Distributor",
    partnershipColor: "text-[#D97706] bg-[#FEF3C7]",
    status: "Active",
  },
  {
    id: 2,
    name: "Euro Business Advisors",
    subtitle: "Verified Partner",
    avatar: "EB",
    country: "Netherlands",
    countryFlag: "🇳🇱",
    industry: "Consulting",
    partnershipType: "Advisory",
    partnershipColor: "text-[#7C3AED] bg-[#EDE9FE]",
    status: "Active",
  },
  {
    id: 3,
    name: "Middle East Trade Hub",
    subtitle: "Verified Partner",
    avatar: "ME",
    country: "UAE",
    countryFlag: "🇦🇪",
    industry: "Trading",
    partnershipType: "Agent",
    partnershipColor: "text-[#374151] bg-[#F3F4F6]",
    status: "Active",
  },
  {
    id: 4,
    name: "Agri Nation Connect",
    subtitle: "Verified Partner",
    avatar: "AN",
    country: "USA",
    countryFlag: "🇺🇸",
    industry: "Agriculture",
    partnershipType: "Supplier",
    partnershipColor: "text-[#D97706] bg-[#FEF3C7]",
    status: "In Discussion",
  },
  {
    id: 5,
    name: "PharmaCare Global",
    subtitle: "Verified Partner",
    avatar: "PG",
    country: "Singapore",
    countryFlag: "🇸🇬",
    industry: "Pharmaceuticals",
    partnershipType: "Distributor",
    partnershipColor: "text-[#D97706] bg-[#FEF3C7]",
    status: "Active",
  },
];

const tabs = [
  { id: "all", label: "All Partners" },
  { id: "active", label: "Active Partners" },
  { id: "collaborations", label: "Collaborations" },
  { id: "invitations", label: "Invitations Sent" },
];

const partnerTypeOptions = [
  "All Partners",
  "Distributor",
  "Advisory",
  "Agent",
  "Supplier",
];

// ── Helpers ────────────────────────────────────────────────────────────────────

function StatusBadge({ status }: { status: Partner["status"] }) {
  const styles: Record<Partner["status"], string> = {
    Active: "bg-[#DCFCE7] text-[#15803D] border border-[#BBF7D0]",
    "In Discussion": "bg-[#FEF9C3] text-[#854D0E] border border-[#FEF08A]",
    Pending: "bg-[#FEF3C7] text-[#92400E] border border-[#FDE68A]",
    Inactive: "bg-[#F1F5F9] text-[#64748B] border border-[#CBD5E1]",
  };
  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold ${styles[status]}`}
    >
      {status}
    </span>
  );
}

function PartnerAvatar({
  initials,
  bg = "bg-[#1E3A5F]",
}: {
  initials: string;
  bg?: string;
}) {
  return (
    <div
      className={`w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0 ${bg}`}
    >
      {initials}
    </div>
  );
}

// ── Avatar background map ──────────────────────────────────────────────────────

const avatarBgMap: Record<string, string> = {
  GT: "bg-[#1E3A5F]",
  EB: "bg-[#065F46]",
  ME: "bg-[#92400E]",
  AN: "bg-[#1D4ED8]",
  PG: "bg-[#7C2D12]",
};

// ── Main Component ─────────────────────────────────────────────────────────────

export default function PartnerNetworkPage() {
  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [partnerTypeFilter, setPartnerTypeFilter] = useState("All Partners");
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = 5;

  const filteredPartners = partnersData.filter((p) => {
    const matchesTab =
      activeTab === "all" ||
      (activeTab === "active" && p.status === "Active") ||
      (activeTab === "collaborations" && p.partnershipType !== "Agent") ||
      activeTab === "invitations";

    const matchesSearch =
      searchQuery === "" ||
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.industry.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesType =
      partnerTypeFilter === "All Partners" ||
      p.partnershipType === partnerTypeFilter;

    return matchesTab && matchesSearch && matchesType;
  });

  return (
    <Main fluid className="px-4 sm:px-6 pt-3 pb-6 bg-[#F8FAFC] min-h-screen">
      <div className="flex flex-col gap-5">
        {/* ── Page Header ─────────────────────────────────────── */}
        <div>
          <h1 className="text-2xl font-bold text-[#0F172A] tracking-tight">
            Partner Network
          </h1>
          <p className="text-sm text-[#64748B] mt-0.5">
            Connect and collaborate with global partners
          </p>
        </div>

        {/* ── Content: Left (KPI + Table) | Right (Sidebar) ─── */}
        <div className="flex gap-5 items-start">
          {/* ── Left Column ─────────────────────────────────── */}
          <div className="flex-1 min-w-0 flex flex-col gap-5">
            {/* KPI Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {kpiCards.map((card) => {
                const Icon = card.icon;
                return (
                  <div
                    key={card.id}
                    className={`bg-white rounded-xl border ${card.borderColor} px-4 py-4 flex items-start gap-3 shadow-sm`}
                  >
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${card.iconBg}`}
                    >
                      <Icon className={`w-5 h-5 ${card.iconColor}`} />
                    </div>
                    <div>
                      <p className="text-2xl font-extrabold text-[#0F172A] leading-tight">
                        {card.value}
                      </p>
                      <p className="text-xs font-medium text-[#374151] mt-0.5">
                        {card.label}
                      </p>
                      <p className="text-[11px] text-[#22C55E] font-medium mt-0.5">
                        {card.sub}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* ── Search + Filter + Add Partner ───────────── */}
            <div className="flex items-center gap-3">
              <div className="relative flex-1 max-w-xs">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#94A3B8]" />
                <input
                  type="text"
                  placeholder="Search partners..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 text-sm border border-[#E2E8F0] rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#2563EB]/30 focus:border-[#2563EB] placeholder:text-[#94A3B8]"
                />
              </div>

              <div className="relative">
                <select
                  value={partnerTypeFilter}
                  onChange={(e) => setPartnerTypeFilter(e.target.value)}
                  className="appearance-none pl-3 pr-8 py-2 text-sm border border-[#E2E8F0] rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#2563EB]/30 focus:border-[#2563EB] text-[#374151] cursor-pointer"
                >
                  {partnerTypeOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
                <svg
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#94A3B8] pointer-events-none"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>

              <div className="ml-auto">
                <Button
                  className="flex items-center gap-2 bg-[#B8922C] hover:bg-[#A07825] text-white rounded-lg px-4 py-2 text-sm font-semibold shadow-sm"
                >
                  <Plus className="w-4 h-4" />
                  + Add Partner
                </Button>
              </div>
            </div>

            {/* ── Tabs ────────────────────────────────────── */}
            <div className="border-b border-[#E2E8F0]">
              <div className="flex gap-1">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-4 py-2.5 text-sm font-medium transition-colors relative ${
                      activeTab === tab.id
                        ? "text-[#2563EB]"
                        : "text-[#64748B] hover:text-[#374151]"
                    }`}
                  >
                    {tab.label}
                    {activeTab === tab.id && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#2563EB] rounded-t-full" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* ── Partners Table ───────────────────────────── */}
            <div className="bg-white rounded-xl border border-[#E2E8F0] shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[700px]">
                  <thead>
                    <tr className="bg-[#F8FAFC] border-b border-[#E2E8F0]">
                      <th className="text-left text-xs font-semibold text-[#64748B] uppercase tracking-wider px-5 py-3">
                        Partner
                      </th>
                      <th className="text-left text-xs font-semibold text-[#64748B] uppercase tracking-wider px-4 py-3">
                        Country
                      </th>
                      <th className="text-left text-xs font-semibold text-[#64748B] uppercase tracking-wider px-4 py-3">
                        Industry
                      </th>
                      <th className="text-left text-xs font-semibold text-[#64748B] uppercase tracking-wider px-4 py-3">
                        Partnership Type
                      </th>
                      <th className="text-left text-xs font-semibold text-[#64748B] uppercase tracking-wider px-4 py-3">
                        Status
                      </th>
                      <th className="text-left text-xs font-semibold text-[#64748B] uppercase tracking-wider px-4 py-3">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#F1F5F9]">
                    {filteredPartners.map((partner) => (
                      <tr
                        key={partner.id}
                        className="hover:bg-[#F8FAFC] transition-colors"
                      >
                        {/* Partner */}
                        <td className="px-5 py-4">
                          <div className="flex items-center gap-3">
                            <PartnerAvatar
                              initials={partner.avatar}
                              bg={avatarBgMap[partner.avatar]}
                            />
                            <div>
                              <p className="text-sm font-semibold text-[#0F172A]">
                                {partner.name}
                              </p>
                              <p className="text-xs text-[#94A3B8]">
                                {partner.subtitle}
                              </p>
                            </div>
                          </div>
                        </td>
                        {/* Country */}
                        <td className="px-4 py-4">
                          <div className="flex items-center gap-1.5">
                            <span className="text-base leading-none">
                              {partner.countryFlag}
                            </span>
                            <span className="text-sm text-[#374151]">
                              {partner.country}
                            </span>
                          </div>
                        </td>
                        {/* Industry */}
                        <td className="px-4 py-4">
                          <span className="text-sm text-[#374151]">
                            {partner.industry}
                          </span>
                        </td>
                        {/* Partnership Type */}
                        <td className="px-4 py-4">
                          <span
                            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold ${partner.partnershipColor}`}
                          >
                            {partner.partnershipType}
                          </span>
                        </td>
                        {/* Status */}
                        <td className="px-4 py-4">
                          <StatusBadge status={partner.status} />
                        </td>
                        {/* Action */}
                        <td className="px-4 py-4">
                          <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-[#F1F5F9] transition-colors text-[#94A3B8] hover:text-[#374151]">
                            <MoreVertical className="w-4 h-4" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* ── Pagination ──────────────────────────── */}
              <div className="flex items-center justify-between px-5 py-3 border-t border-[#E2E8F0] bg-[#F8FAFC]">
                <p className="text-sm text-[#64748B]">
                  Showing 1 to {filteredPartners.length} of 356 partners
                </p>
                <div className="flex items-center gap-1">
                  <button
                    onClick={() =>
                      setCurrentPage((p) => Math.max(1, p - 1))
                    }
                    disabled={currentPage === 1}
                    className="w-7 h-7 flex items-center justify-center rounded border border-[#E2E8F0] text-[#64748B] hover:bg-white disabled:opacity-40 text-xs"
                  >
                    <ChevronLeft className="w-3.5 h-3.5" />
                  </button>
                  {[1, 2, 3, 4, 5].map((page) => (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`w-7 h-7 flex items-center justify-center rounded border text-xs font-medium transition-colors ${
                        currentPage === page
                          ? "bg-[#1E3A5F] text-white border-[#1E3A5F]"
                          : "border-[#E2E8F0] text-[#374151] hover:bg-white"
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                  <button
                    onClick={() =>
                      setCurrentPage((p) => Math.min(totalPages, p + 1))
                    }
                    disabled={currentPage === totalPages}
                    className="w-7 h-7 flex items-center justify-center rounded border border-[#E2E8F0] text-[#64748B] hover:bg-white disabled:opacity-40 text-xs"
                  >
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* ── Right Sidebar ──────────────────────────────────── */}
          <div className="w-64 flex-shrink-0 flex flex-col gap-4">
            {/* Network Overview Card */}
            <div className="bg-white rounded-xl border border-[#E2E8F0] shadow-sm overflow-hidden">
              <div className="px-4 pt-4 pb-2">
                <h3 className="text-sm font-semibold text-[#0F172A]">
                  Network Overview
                </h3>
              </div>
              {/* World Map Background */}
              <div
                className="w-full h-32 bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: "url('/PartnerBGWHiteMap.png')",
                  backgroundColor: "#F8FAFC",
                }}
              />
              {/* Region Legend */}
              <div className="px-4 py-3 flex flex-col gap-2">
                {regionData.map((region) => (
                  <div
                    key={region.region}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center gap-2">
                      <span
                        className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                        style={{ backgroundColor: region.color }}
                      />
                      <span className="text-xs text-[#374151]">
                        {region.region}
                      </span>
                    </div>
                    <span className="text-xs font-semibold text-[#0F172A]">
                      {region.count} Partners
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Connections Card */}
            <div className="bg-white rounded-xl border border-[#E2E8F0] shadow-sm">
              <div className="px-4 pt-4 pb-2">
                <h3 className="text-sm font-semibold text-[#0F172A]">
                  Recent Connections
                </h3>
              </div>
              <div className="px-4 pb-3 flex flex-col gap-3">
                {recentConnections.map((conn) => (
                  <div key={conn.id} className="flex items-center gap-3">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0 ${conn.avatarBg}`}
                    >
                      {conn.avatar}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-semibold text-[#0F172A] truncate">
                        {conn.name}
                      </p>
                      <p className="text-[11px] text-[#94A3B8]">
                        {conn.flag} {conn.country}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              {/* View All Partners Button */}
              <div className="px-4 pb-4">
                <button className="w-full py-2 text-xs font-semibold text-white bg-[#4A5568] hover:bg-[#374151] rounded-lg transition-colors">
                  View All Partners
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Main>
  );
}
