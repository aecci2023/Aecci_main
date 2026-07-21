import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  Share2,
  Star,
  Users,
  UserCheck,
  UserPlus,
  Globe2,
  Factory,
  Building2,
  Clock,
  Calendar,
  Briefcase,
  MessageSquare,
  Shield,
  TrendingUp,
  SlidersHorizontal,
  ChevronDown,
  BadgeCheck,
  MoreVertical,
  Handshake,
} from "lucide-react";
import type { ComponentType } from "react";
import { Button } from "@/components/ui/button";
import {
  ExporterPageShell,
  ExporterCard,
  ExporterStatCard,
  ExporterTabs,
  ExporterBreadcrumb,
  FieldInput,
  FieldSelect,
} from "@/components/exporter/exporter-page-layout";

const FLAG = (code: string) => `https://flagcdn.com/w40/${code}.png`;

const TABS = [
  "All Partners",
  "Verified Partners",
  "Recommended",
  "New Partners",
  "By Country",
  "By Industry",
];

const PARTNER_SEGMENTS = [
  { label: "Active", count: 98, pct: 69, color: "#175CD3" },
  { label: "New", count: 15, pct: 11, color: "#039855" },
  { label: "Inactive", count: 18, pct: 13, color: "#98A2B3" },
  { label: "Pending", count: 11, pct: 7, color: "#F79009" },
];

const TABLE_PARTNERS = [
  {
    name: "BuildCore Trading FZE",
    initials: "BC",
    tags: ["Verified", "Distributor"],
    industry: "Construction & Engineering",
    expertise: "Infrastructure, MEP",
    country: "ae",
    city: "Dubai",
    score: 89,
  },
  {
    name: "Mediplus Distributors Ltd",
    initials: "MD",
    tags: ["Verified"],
    industry: "Healthcare & Pharma",
    expertise: "Medical devices, OTC",
    country: "in",
    city: "Mumbai",
    score: 86,
  },
  {
    name: "SinoTrade Solutions Co.",
    initials: "ST",
    tags: ["Recommended"],
    industry: "Trade & Logistics",
    expertise: "Freight, customs",
    country: "cn",
    city: "Shanghai",
    score: 84,
  },
  {
    name: "EuroFab Components GmbH",
    initials: "EF",
    tags: ["Verified"],
    industry: "Manufacturing",
    expertise: "Precision parts",
    country: "de",
    city: "Berlin",
    score: 81,
  },
  {
    name: "Atlantic Trade Partners",
    initials: "AT",
    tags: ["New"],
    industry: "Trade & Logistics",
    expertise: "Import/export advisory",
    country: "us",
    city: "New York",
    score: 78,
  },
];

const TOP_COUNTRIES = [
  { code: "ae", name: "UAE", count: 28 },
  { code: "in", name: "India", count: 24 },
  { code: "cn", name: "China", count: 19 },
  { code: "de", name: "Germany", count: 12 },
  { code: "us", name: "United States", count: 11 },
];

const TOP_INDUSTRIES = [
  { name: "Trade & Logistics", pct: 26 },
  { name: "Construction", pct: 22 },
  { name: "Healthcare", pct: 18 },
  { name: "Textiles & Apparel", pct: 14 },
  { name: "Energy", pct: 10 },
];

const WHY_CONNECT = [
  {
    title: "Global Opportunities",
    desc: "Access verified partners across 32+ countries and expand into new export markets.",
    icon: Globe2,
    color: "text-[#175CD3] bg-[#EFF8FF]",
  },
  {
    title: "Trusted Network",
    desc: "Every partner is vetted by AECCI for credentials, compliance, and trade history.",
    icon: Shield,
    color: "text-[#039855] bg-[#ECFDF3]",
  },
  {
    title: "Business Growth",
    desc: "Track match scores and engagement metrics to focus on high-value relationships.",
    icon: TrendingUp,
    color: "text-[#7A5AF8] bg-[#F4F3FF]",
  },
  {
    title: "Smart Matching",
    desc: "Recommendations align with your industry, region, and partnership goals.",
    icon: Users,
    color: "text-[#F79009] bg-[#FFFAEB]",
  },
];

function StatCardColoredSub({
  label,
  value,
  sub,
  subClass,
  icon: Icon,
  bg,
  color,
}: {
  label: string;
  value: string;
  sub: string;
  subClass: string;
  icon: ComponentType<{ className?: string }>;
  bg: string;
  color: string;
}) {
  return (
    <div className="rounded-xl border border-[#E4E7EC] bg-white p-4 shadow-[0_1px_2px_rgba(16,24,40,0.05)]">
      <div className="flex items-start justify-between gap-2">
        <div className="min-w-0">
          <p className="text-[10px] text-[#667085]">{label}</p>
          <p className="mt-1 text-[20px] font-bold leading-none text-[#101828] sm:text-[22px]">
            {value}
          </p>
          <p className={`mt-1 text-[10px] font-medium ${subClass}`}>{sub}</p>
        </div>
        <span
          className={`flex size-8 shrink-0 items-center justify-center rounded-lg ${bg} ${color}`}
        >
          <Icon className="size-4" />
        </span>
      </div>
    </div>
  );
}

function ScoreGauge({ score, size = "md" }: { score: number; size?: "sm" | "md" }) {
  const label = score >= 90 ? "Excellent" : score >= 80 ? "Strong" : "Good";
  const dim = size === "sm" ? "size-12" : "size-20";
  const font = size === "sm" ? "text-[13px]" : "text-[18px]";
  const labelSize = size === "sm" ? "text-[9px]" : "text-[11px]";
  const strokeColor = score >= 90 ? "#039855" : score >= 80 ? "#175CD3" : "#7A5AF8";

  return (
    <div className="flex flex-col items-center">
      <div className={`relative flex ${dim} items-center justify-center`}>
        <svg className={`${dim} -rotate-90`} viewBox="0 0 36 36">
          <circle cx="18" cy="18" r="14" fill="none" stroke="#E4E7EC" strokeWidth="3" />
          <circle
            cx="18"
            cy="18"
            r="14"
            fill="none"
            stroke={strokeColor}
            strokeWidth="3"
            strokeDasharray={`${score * 0.88} 88`}
            strokeLinecap="round"
          />
        </svg>
        <span className={`absolute font-bold text-[#101828] ${font}`}>{score}</span>
      </div>
      {size === "md" && (
        <p className={`mt-1 font-bold text-[#027A48] ${labelSize}`}>{label}</p>
      )}
      {size === "sm" && (
        <p className={`mt-0.5 font-semibold text-[#667085] ${labelSize}`}>{label}</p>
      )}
    </div>
  );
}

function PartnerOverviewDonut() {
  let offset = 0;
  const r = 14;
  const c = 2 * Math.PI * r;

  return (
    <div className="relative mx-auto flex size-[120px] items-center justify-center">
      <svg className="size-[120px] -rotate-90" viewBox="0 0 36 36">
        <circle cx="18" cy="18" r={r} fill="none" stroke="#E4E7EC" strokeWidth="4" />
        {PARTNER_SEGMENTS.map((seg) => {
          const dash = (seg.pct / 100) * c;
          const circle = (
            <circle
              key={seg.label}
              cx="18"
              cy="18"
              r={r}
              fill="none"
              stroke={seg.color}
              strokeWidth="4"
              strokeDasharray={`${dash} ${c}`}
              strokeDashoffset={-offset}
            />
          );
          offset += dash;
          return circle;
        })}
      </svg>
      <div className="absolute text-center">
        <p className="text-[18px] font-bold leading-none text-[#101828]">142</p>
        <p className="text-[10px] font-medium text-[#667085]">Total</p>
      </div>
    </div>
  );
}

function TagPill({ children, variant = "default" }: { children: string; variant?: string }) {
  const styles =
    variant === "verified"
      ? "bg-[#ECFDF3] text-[#027A48]"
      : variant === "recommended"
        ? "bg-[#EFF8FF] text-[#175CD3]"
        : variant === "new"
          ? "bg-[#FFFAEB] text-[#B54708]"
          : "bg-[#F2F4F7] text-[#344054]";
  return (
    <span className={`rounded-full px-2 py-0.5 text-[9px] font-semibold ${styles}`}>{children}</span>
  );
}

export default function PartnerBriefPage() {
  const [tab, setTab] = useState("All Partners");

  return (
    <ExporterPageShell>
      <div>
        <ExporterBreadcrumb
          items={[
            { label: "Dashboard", to: "/dashboard" },
            { label: "Intelligence", to: "/dashboard/intelligence" },
            { label: "Partner Brief" },
          ]}
        />
        <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h1 className="text-[22px] font-bold text-[#101828] sm:text-[24px]">Partner Brief</h1>
            <p className="mt-1 max-w-2xl text-[13px] leading-relaxed text-[#667085]">
              Discover verified partners, view company insights and connect with the right businesses.
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
              className="size-9 shrink-0 rounded-lg border-[#D0D5DD] bg-white text-[#344054] hover:bg-[#F9FAFB]"
              aria-label="Share"
            >
              <Share2 className="size-4" />
            </Button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 items-start gap-5 xl:grid-cols-[minmax(0,1fr)_280px]">
        <section className="min-w-0 space-y-5">
          <div className="grid grid-cols-2 gap-3 lg:grid-cols-5">
            <ExporterStatCard
              label="Total Partners"
              value="142"
              icon={Users}
              bg="bg-[#EFF8FF]"
              color="text-[#175CD3]"
            />
            <StatCardColoredSub
              label="Active Partners"
              value="98"
              sub="69% of total"
              subClass="text-[#039855]"
              icon={UserCheck}
              bg="bg-[#ECFDF3]"
              color="text-[#039855]"
            />
            <StatCardColoredSub
              label="New This Month"
              value="15"
              sub="Latest additions"
              subClass="text-[#F79009]"
              icon={UserPlus}
              bg="bg-[#FFFAEB]"
              color="text-[#F79009]"
            />
            <StatCardColoredSub
              label="Countries Represented"
              value="32"
              sub="Global coverage"
              subClass="text-[#175CD3]"
              icon={Globe2}
              bg="bg-[#EFF8FF]"
              color="text-[#175CD3]"
            />
            <StatCardColoredSub
              label="Industries Covered"
              value="18"
              sub="Diverse sectors"
              subClass="text-[#7A5AF8]"
              icon={Factory}
              bg="bg-[#F4F3FF]"
              color="text-[#7A5AF8]"
            />
          </div>

          <ExporterCard>
            <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
              <div className="relative min-w-0 flex-1">
                <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-[#98A2B3]" />
                <FieldInput placeholder="Search partner name or industry..." className="pl-9" />
              </div>
              <div className="flex flex-wrap gap-2">
                <div className="min-w-[140px] flex-1 sm:flex-none">
                  <FieldSelect
                    defaultValue="All Countries"
                    options={["All Countries", "UAE", "India", "China", "Germany", "United States"]}
                  />
                </div>
                <div className="min-w-[140px] flex-1 sm:flex-none">
                  <FieldSelect
                    defaultValue="All Industries"
                    options={[
                      "All Industries",
                      "Trade & Logistics",
                      "Construction",
                      "Healthcare",
                      "Textiles & Apparel",
                    ]}
                  />
                </div>
                <div className="min-w-[140px] flex-1 sm:flex-none">
                  <FieldSelect
                    defaultValue="Partner Type"
                    options={["Partner Type", "Buyer", "Distributor", "Agent", "Manufacturer"]}
                  />
                </div>
                <Button
                  variant="outline"
                  className="h-10 rounded-lg border-[#D0D5DD] bg-white text-[12px] font-semibold text-[#344054]"
                >
                  <SlidersHorizontal className="mr-1.5 size-3.5" />
                  Filters
                </Button>
              </div>
            </div>
          </ExporterCard>

          <ExporterCard className="border-[#ABEFC6] bg-gradient-to-br from-white via-white to-[#ECFDF3]/40">
            <p className="text-[10px] font-bold uppercase tracking-wide text-[#027A48]">
              Featured Partner
            </p>
            <div className="mt-4 flex flex-col gap-6 xl:flex-row xl:items-center">
              <div className="flex min-w-0 flex-1 flex-col gap-4 sm:flex-row sm:items-start">
                <div className="flex size-16 shrink-0 items-center justify-center rounded-xl border border-[#E4E7EC] bg-[#F9FAFB]">
                  <Building2 className="size-8 text-[#175CD3]" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-[17px] font-bold text-[#101828]">GlobalTex Exports LLC</h3>
                    <span className="inline-flex items-center gap-1 rounded-full bg-[#ECFDF3] px-2 py-0.5 text-[10px] font-semibold text-[#027A48]">
                      <BadgeCheck className="size-3" />
                      Verified Partner
                    </span>
                  </div>
                  <div className="mt-1.5 flex items-center gap-2 text-[12px] text-[#667085]">
                    <img src={FLAG("ae")} alt="UAE" className="size-5 rounded object-cover" />
                    <span>Dubai, UAE</span>
                  </div>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    <TagPill>Textiles</TagPill>
                    <TagPill>Apparel</TagPill>
                  </div>
                </div>
              </div>

              <ScoreGauge score={92} />

              <div className="grid flex-1 grid-cols-2 gap-2 sm:grid-cols-4">
                {[
                  { label: "Response Time", value: "2h 15m", icon: Clock },
                  { label: "Successful Meetings", value: "18", icon: Calendar },
                  { label: "Projects Completed", value: "24", icon: Briefcase },
                  { label: "Member Since", value: "Jan 2024", icon: UserCheck },
                ].map((m) => (
                  <div
                    key={m.label}
                    className="rounded-lg border border-[#E4E7EC] bg-white px-2 py-2.5 text-center shadow-[0_1px_2px_rgba(16,24,40,0.04)]"
                  >
                    <m.icon className="mx-auto size-3.5 text-[#667085]" />
                    <p className="mt-1 text-[9px] leading-tight text-[#98A2B3]">{m.label}</p>
                    <p className="mt-0.5 text-[11px] font-bold text-[#101828]">{m.value}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 xl:flex-col xl:justify-center">
                <Button className="h-9 rounded-lg bg-[#175CD3] px-4 text-[12px] font-semibold hover:bg-[#1448B0]">
                  View Profile
                </Button>
                <Button
                  variant="outline"
                  className="h-9 rounded-lg border-[#D0D5DD] bg-white text-[12px] font-semibold text-[#344054] hover:bg-[#F9FAFB]"
                >
                  <Handshake className="mr-1.5 size-3.5" />
                  Connect
                </Button>
                <Button
                  variant="outline"
                  className="h-9 rounded-lg border-[#D0D5DD] bg-white text-[12px] font-semibold text-[#344054] hover:bg-[#F9FAFB]"
                >
                  <MessageSquare className="mr-1.5 size-3.5" />
                  Send Message
                </Button>
              </div>
            </div>
          </ExporterCard>

          <ExporterCard className="p-0">
            <div className="flex flex-col gap-2 border-b border-[#E4E7EC] px-5 pt-1 sm:flex-row sm:items-center sm:justify-between">
              <div className="min-w-0 flex-1 overflow-x-auto">
                <ExporterTabs tabs={TABS} active={tab} onChange={setTab} />
              </div>
              <button
                type="button"
                className="mb-2 flex h-9 shrink-0 items-center gap-1.5 self-end rounded-lg border border-[#D0D5DD] bg-white px-3 text-[12px] font-medium text-[#344054] sm:mb-0"
              >
                Sort by: Partner Score
                <ChevronDown className="size-3.5 text-[#98A2B3]" />
              </button>
            </div>
            <div className="overflow-x-auto -mx-1 p-5 pt-3">
              <table className="w-full min-w-[640px] text-left text-[11px]">
                <thead>
                  <tr className="border-b border-[#E4E7EC] text-[#667085]">
                    <th className="pb-3 pr-3 font-semibold">Partner</th>
                    <th className="pb-3 pr-3 font-semibold">Industry &amp; Expertise</th>
                    <th className="pb-3 pr-3 font-semibold">Location</th>
                    <th className="pb-3 pr-3 font-semibold">Partner Score</th>
                    <th className="pb-3 font-semibold">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {TABLE_PARTNERS.map((p) => (
                    <tr key={p.name} className="border-b border-[#F2F4F7] last:border-0">
                      <td className="py-3 pr-3">
                        <div className="flex items-start gap-2.5">
                          <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-[#EFF8FF] text-[11px] font-bold text-[#175CD3]">
                            {p.initials}
                          </div>
                          <div className="min-w-0">
                            <p className="font-semibold text-[#101828]">{p.name}</p>
                            <div className="mt-1 flex flex-wrap gap-1">
                              {p.tags.map((t) => (
                                <TagPill
                                  key={t}
                                  variant={
                                    t === "Verified"
                                      ? "verified"
                                      : t === "Recommended"
                                        ? "recommended"
                                        : t === "New"
                                          ? "new"
                                          : "default"
                                  }
                                >
                                  {t}
                                </TagPill>
                              ))}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="py-3 pr-3">
                        <p className="font-medium text-[#101828]">{p.industry}</p>
                        <p className="mt-0.5 text-[#667085]">{p.expertise}</p>
                      </td>
                      <td className="py-3 pr-3">
                        <div className="flex items-center gap-2 text-[#344054]">
                          <img src={FLAG(p.country)} alt="" className="size-5 rounded object-cover" />
                          <span>{p.city}</span>
                        </div>
                      </td>
                      <td className="py-3 pr-3">
                        <ScoreGauge score={p.score} size="sm" />
                      </td>
                      <td className="py-3">
                        <div className="flex items-center gap-1">
                          <Button
                            variant="outline"
                            className="h-8 rounded-lg border-[#175CD3] px-3 text-[11px] font-semibold text-[#175CD3] hover:bg-[#EFF8FF]"
                          >
                            View Profile
                          </Button>
                          <button
                            type="button"
                            className="rounded-lg p-1.5 text-[#98A2B3] hover:bg-[#F2F4F7]"
                            aria-label="More options"
                          >
                            <MoreVertical className="size-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ExporterCard>

          <ExporterCard>
            <h3 className="text-[15px] font-bold text-[#101828]">Why Connect with Partners?</h3>
            <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {WHY_CONNECT.map((item) => (
                <div key={item.title} className="rounded-xl border border-[#E4E7EC] p-4">
                  <span
                    className={`inline-flex size-9 items-center justify-center rounded-lg ${item.color}`}
                  >
                    <item.icon className="size-4" />
                  </span>
                  <p className="mt-3 text-[12px] font-bold text-[#101828]">{item.title}</p>
                  <p className="mt-1 text-[11px] leading-relaxed text-[#667085]">{item.desc}</p>
                </div>
              ))}
            </div>
            <p className="mt-4 border-t border-[#E4E7EC] pt-4 text-[11px] text-[#98A2B3]">
              All partners are verified by AECCI. Data is updated regularly for accuracy.
            </p>
          </ExporterCard>
        </section>

        <aside className="space-y-4">
          <ExporterCard>
            <h3 className="text-[14px] font-bold text-[#101828]">Partner Overview</h3>
            <div className="mt-4">
              <PartnerOverviewDonut />
            </div>
            <ul className="mt-4 space-y-2.5">
              {PARTNER_SEGMENTS.map((seg) => (
                <li key={seg.label} className="flex items-center justify-between text-[11px]">
                  <span className="flex items-center gap-2 text-[#344054]">
                    <span className="size-2.5 rounded-full" style={{ backgroundColor: seg.color }} />
                    {seg.label}
                  </span>
                  <span className="font-semibold text-[#101828]">
                    {seg.count}{" "}
                    <span className="font-normal text-[#667085]">({seg.pct}%)</span>
                  </span>
                </li>
              ))}
            </ul>
          </ExporterCard>

          <ExporterCard>
            <div className="flex items-center justify-between gap-2">
              <h3 className="text-[14px] font-bold text-[#101828]">Top Partner Countries</h3>
              <Link to="#" className="text-[11px] font-semibold text-[#175CD3] hover:underline">
                View All
              </Link>
            </div>
            <ul className="mt-3 space-y-2.5">
              {TOP_COUNTRIES.map((c) => (
                <li key={c.code} className="flex items-center justify-between text-[11px]">
                  <span className="flex items-center gap-2 text-[#344054]">
                    <img src={FLAG(c.code)} alt="" className="size-5 rounded object-cover" />
                    {c.name}
                  </span>
                  <span className="font-bold text-[#101828]">{c.count}</span>
                </li>
              ))}
            </ul>
          </ExporterCard>

          <ExporterCard>
            <h3 className="text-[14px] font-bold text-[#101828]">Top Industries</h3>
            <ul className="mt-3 space-y-3">
              {TOP_INDUSTRIES.map((i) => (
                <li key={i.name}>
                  <div className="flex justify-between text-[11px]">
                    <span className="text-[#344054]">{i.name}</span>
                    <span className="font-semibold text-[#101828]">{i.pct}%</span>
                  </div>
                  <div className="mt-1.5 h-1.5 rounded-full bg-[#E4E7EC]">
                    <div
                      className="h-full rounded-full bg-[#175CD3]"
                      style={{ width: `${i.pct}%` }}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </ExporterCard>

          <ExporterCard className="border-[#B2DDFF] bg-[#EFF8FF]">
            <h3 className="text-[14px] font-bold text-[#101828]">Expand Your Network</h3>
            <p className="mt-2 text-[11px] leading-relaxed text-[#667085]">
              Browse verified partners by country and industry to grow your export connections.
            </p>
            <Button className="mt-4 h-9 w-full rounded-lg bg-[#175CD3] text-[12px] font-semibold hover:bg-[#1448B0]">
              Explore Partners
            </Button>
          </ExporterCard>
        </aside>
      </div>
    </ExporterPageShell>
  );
}
