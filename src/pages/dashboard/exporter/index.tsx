import { Main } from "@/components/layout/main";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
// Dashboard uses shared ExporterHeader from ExporterLayout (no local Header/Search)
import {
  BarChart3,
  Building2,
  Calendar,
  Check,
  ChevronRight,
  Crown,
  Eye,
  Globe,
  Headphones,
  PenLine,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { useGetUserByIdQuery } from "@/store/api/adminApi";
import { useGetMySessionsQuery } from "@/store/api/sessionApi";

import uaeImg from "@/assets/dashboard/exporter/uae.jpg";
import usaImg from "@/assets/dashboard/exporter/usa.jpg";
import saudiImg from "@/assets/dashboard/exporter/saudi.jpg";
import kenyaImg from "@/assets/dashboard/exporter/kenya.jpg";
import upgradeBanner from "@/assets/dashboard/exporter/upgrade-banner.png";
import { ExporterCard } from "@/components/exporter/exporter-page-layout";

const FLAG = (code: string) => `https://flagcdn.com/w80/${code}.png`;

const DASHBOARD_QUICK_ACTIONS = [
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

const DASHBOARD_DEAL_STEPS = [
  { title: "Choose Country", desc: "Select a country you want to explore." },
  { title: "Join Deal Room", desc: "Enter the deal room and submit your request." },
  { title: "Connect", desc: "Get matched with verified buyers and partners." },
  { title: "Grow Business", desc: "Close deals and expand globally." },
];

const FEATURED_COUNTRIES = [
  {
    name: "UAE",
    code: "ae",
    image: uaeImg,
    nextSession: "12 May, 11:00 AM",
  },
  {
    name: "USA",
    code: "us",
    image: usaImg,
    nextSession: "18 May, 03:00 PM",
  },
  {
    name: "Saudi Arabia",
    code: "sa",
    image: saudiImg,
    nextSession: "22 May, 10:00 AM",
  },
  {
    name: "Kenya",
    code: "ke",
    image: kenyaImg,
    nextSession: "28 May, 02:00 PM",
  },
];

const FALLBACK_SESSIONS = [
  {
    title: "UAE Market Access Forum",
    flag: "ae",
    when: "12 May 2025 · 11:00 AM",
  },
  {
    title: "USA Buyer Matchmaking Session",
    flag: "us",
    when: "18 May 2025 · 03:00 PM",
  },
  {
    title: "Saudi Import Compliance Session",
    flag: "sa",
    when: "22 May 2025 · 10:00 AM",
  },
  {
    title: "Kenya Trade Opportunity Call",
    flag: "ke",
    when: "28 May 2025 · 02:00 PM",
  },
];

const OPPORTUNITIES = [
  {
    title: "Distributor Required in UAE",
    category: "Construction Materials",
    country: "UAE",
    flag: "ae",
    posted: "Posted on 10 May 2025",
    isNew: true,
  },
  {
    title: "Importer Looking for Spices – USA",
    category: "Food & Beverages",
    country: "USA",
    flag: "us",
    posted: "Posted on 08 May 2025",
    isNew: false,
  },
  {
    title: "Retail Chain Seeking Apparel – Kenya",
    category: "Textiles & Apparel",
    country: "Kenya",
    flag: "ke",
    posted: "Posted on 05 May 2025",
    isNew: false,
  },
];

const FALLBACK_MEETINGS = [
  {
    day: "24",
    month: "MAY",
    company: "ABC Importers LLC",
    meta: "Dubai, UAE · Construction",
    mode: "Online Meeting · 11:00 AM",
    status: "Confirmed" as const,
  },
  {
    day: "28",
    month: "MAY",
    company: "Global Foods Inc.",
    meta: "New York, USA · Food & Beverage",
    mode: "Online Meeting · 03:30 PM",
    status: "Requested" as const,
  },
  {
    day: "02",
    month: "JUN",
    company: "East Africa Traders",
    meta: "Nairobi, Kenya · Apparel",
    mode: "Online Meeting · 02:00 PM",
    status: "Confirmed" as const,
  },
];

function countryFlagCode(country?: string) {
  if (!country) return "in";
  const map: Record<string, string> = {
    uae: "ae",
    "united arab emirates": "ae",
    usa: "us",
    "united states": "us",
    "saudi arabia": "sa",
    saudi: "sa",
    kenya: "ke",
    india: "in",
  };
  return map[country.toLowerCase()] || "un";
}

function SectionLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link
      to={to}
      className="shrink-0 whitespace-nowrap text-[12px] font-semibold text-[#2563EB] hover:underline"
    >
      {children}
    </Link>
  );
}

function KpiCard({
  label,
  icon,
  iconBg,
  children,
  sub,
}: {
  label: string;
  icon: React.ReactNode;
  iconBg: string;
  children: React.ReactNode;
  sub: string;
}) {
  return (
    <div className="rounded-xl border border-[#E4E7EC] bg-white p-4 shadow-[0_1px_2px_rgba(16,24,40,0.05)]">
      <div className="flex items-start justify-between gap-2">
        <p className="text-[10px] font-medium text-[#98A2B3]">{label}</p>
        <span
          className={`flex size-8 shrink-0 items-center justify-center rounded-lg ${iconBg}`}
        >
          {icon}
        </span>
      </div>
      <div className="mt-2">{children}</div>
      <p className="mt-1 text-[10px] text-[#98A2B3]">{sub}</p>
    </div>
  );
}

export default function DashboardPage() {
  const [currentUser] = useState<any>(() => {
    const userStr = localStorage.getItem("user");
    return userStr ? JSON.parse(userStr) : null;
  });

  const userId = currentUser?.id || currentUser?._id;
  const { data: userData } = useGetUserByIdQuery(userId as string, {
    skip: !userId,
  });
  const dbUser = userData?.data || currentUser;

  const { data: sessionsData } = useGetMySessionsQuery();
  const sessions = sessionsData?.data || [];

  const upcomingSessions = sessions
    .filter((s: any) => s.status === "upcoming")
    .sort(
      (a: any, b: any) =>
        new Date(a.date).getTime() - new Date(b.date).getTime()
    );
  const pendingSessions = sessions.filter(
    (s: any) => s.status === "pending_approval"
  );

  const nextSession = upcomingSessions[0] || null;

  const [, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const countriesScrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!nextSession?.date) return;

    const calculateTimeLeft = () => {
      const difference =
        new Date(nextSession.date).getTime() - new Date().getTime();
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, [nextSession?.date]);

  const slotsRemaining = dbUser?.slotsRemaining ?? 4;
  const exploredCountries = new Set(
    sessions.map((s: any) => s.country).filter(Boolean)
  ).size;

  const sessionList =
    upcomingSessions.length > 0
      ? upcomingSessions.slice(0, 4).map((s: any) => ({
          title:
            s.title ||
            `B2B Consultative Session - ${s.country || "Market"}`,
          flag: countryFlagCode(s.country),
          when: new Date(s.date).toLocaleString("en-US", {
            day: "numeric",
            month: "short",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            hour12: true,
          }),
          id: s.id,
        }))
      : FALLBACK_SESSIONS;

  const meetingList =
    upcomingSessions.length > 0
      ? upcomingSessions.slice(0, 3).map((s: any) => {
          const d = new Date(s.date);
          return {
            day: d.getDate().toString().padStart(2, "0"),
            month: d
              .toLocaleString("en-US", { month: "short" })
              .toUpperCase(),
            company:
              s.partner?.fullName || s.client?.fullName || "Partner Meeting",
            meta: `${s.country || "Global"} · Deal Room Session`,
            mode: `Online Meeting · ${d.toLocaleTimeString("en-US", {
              hour: "2-digit",
              minute: "2-digit",
              hour12: true,
            })}`,
            status: "Confirmed" as const,
            id: s.id,
          };
        })
      : pendingSessions.length > 0
        ? [
            ...upcomingSessions.slice(0, 2).map((s: any) => {
              const d = new Date(s.date);
              return {
                day: d.getDate().toString().padStart(2, "0"),
                month: d
                  .toLocaleString("en-US", { month: "short" })
                  .toUpperCase(),
                company:
                  s.partner?.fullName ||
                  s.client?.fullName ||
                  "Partner Meeting",
                meta: `${s.country || "Global"} · Deal Room Session`,
                mode: `Online Meeting · ${d.toLocaleTimeString("en-US", {
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: true,
                })}`,
                status: "Confirmed" as const,
                id: s.id,
              };
            }),
            ...pendingSessions.slice(0, 1).map((s: any) => {
              const d = new Date(s.date);
              return {
                day: d.getDate().toString().padStart(2, "0"),
                month: d
                  .toLocaleString("en-US", { month: "short" })
                  .toUpperCase(),
                company:
                  s.partner?.fullName ||
                  s.client?.fullName ||
                  "Partner Meeting",
                meta: `${s.country || "Global"} · Deal Room Session`,
                mode: `Online Meeting · ${d.toLocaleTimeString("en-US", {
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: true,
                })}`,
                status: "Requested" as const,
                id: s.id,
              };
            }),
          ]
        : FALLBACK_MEETINGS;

  const scrollCountries = () => {
    countriesScrollRef.current?.scrollBy({ left: 180, behavior: "smooth" });
  };

  return (
    <>
      <Main fluid className="space-y-4 overflow-x-hidden bg-[#F8FAFC]! px-3 pb-6 sm:px-5">
        {/* Welcome */}
        <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <h1 className="text-[22px] font-bold leading-tight text-[#101828] sm:text-[24px]">
              Welcome Back, {dbUser?.fullName || "Member"}! 👋
            </h1>
            <p className="mt-1 text-[13px] leading-relaxed text-[#667085]">
              Your global export journey starts here. Explore markets, connect
              with buyers & grow your business.
            </p>
          </div>
          <div className="inline-flex h-fit shrink-0 items-center gap-1.5 rounded-full border border-[#B2DDFF] bg-[#EFF8FF] px-3 py-1.5 text-[12px] font-semibold text-[#175CD3]">
            <BarChart3 className="size-3.5" />
            Exporter Dashboard
          </div>
        </div>

        {/* Main body: left content + right sidebar from stats row */}
        <div className="grid grid-cols-1 items-start gap-4 xl:grid-cols-[minmax(0,1fr)_260px]">
          {/* Left — stats, banner, content */}
          <div className="min-w-0 space-y-3">
            {/* KPI Cards */}
            <div className="grid grid-cols-2 gap-2.5 md:grid-cols-3 xl:grid-cols-5">
              <KpiCard
                label="Active Plan"
                icon={<Crown className="size-4 text-[#175CD3]" />}
                iconBg="bg-[#EFF8FF]"
                sub="Valid till 20 Sep 2025"
              >
                <p className="text-[14px] font-bold leading-snug text-[#175CD3]">
                  Global Growth Plan
                </p>
              </KpiCard>

              <KpiCard
                label="Meetings Remaining"
                icon={<Users className="size-4 text-[#039855]" />}
                iconBg="bg-[#ECFDF3]"
                sub="This Plan"
              >
                <p className="text-[22px] font-bold leading-none text-[#101828]">
                  {slotsRemaining} / 4
                </p>
              </KpiCard>

              <KpiCard
                label="Countries Explored"
                icon={<Globe className="size-4 text-[#7A5AF8]" />}
                iconBg="bg-[#F4F3FF]"
                sub="Out of 4"
              >
                <p className="text-[22px] font-bold leading-none text-[#101828]">
                  {exploredCountries || 3}
                </p>
              </KpiCard>

              <KpiCard
                label="Profile Views"
                icon={<Eye className="size-4 text-[#F79009]" />}
                iconBg="bg-[#FFFAEB]"
                sub="Last 30 days"
              >
                <p className="text-[22px] font-bold leading-none text-[#101828]">
                  156
                </p>
              </KpiCard>

              <KpiCard
                label="Opportunities"
                icon={<Target className="size-4 text-[#039855]" />}
                iconBg="bg-[#ECFDF3]"
                sub="New opportunities"
              >
                <p className="text-[22px] font-bold leading-none text-[#101828]">
                  12
                </p>
              </KpiCard>
            </div>

            {/* Upgrade Banner */}
            <div className="relative overflow-hidden rounded-2xl bg-[#0B1F5C]">
              <img
                src={upgradeBanner}
                alt=""
                className="pointer-events-none absolute inset-0 size-full object-cover object-right"
              />
              <div className="pointer-events-none absolute inset-0 bg-linear-to-r from-[#0B1F5C] via-[#0B1F5C]/75 to-[#0B1F5C]/10" />
              <div className="relative z-10 flex min-h-[148px] flex-col justify-center px-6 py-6 sm:px-8">
                <h2 className="max-w-md text-[18px] font-bold leading-snug text-white sm:text-[20px]">
                  Unlock More Opportunities – Upgrade Your Plan
                </h2>
                <p className="mt-1.5 max-w-sm text-[13px] text-white/80">
                  Get more meetings, in-depth reports & priority matching.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <Button
                    asChild
                    className="h-9 rounded-lg border-0 bg-white px-4 text-[13px] font-semibold text-[#175CD3] shadow-none hover:bg-white/95"
                  >
                    <Link to="/dashboard/follow-up-services">View All Plans</Link>
                  </Button>
                  <Button
                    asChild
                    className="h-9 rounded-lg border-0 bg-[#F79009] px-4 text-[13px] font-semibold text-[#101828] shadow-none hover:bg-[#E07B00]"
                  >
                    <Link to="/dashboard/payment">Upgrade Now</Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* 2-column content: left stack | middle stack */}
            <div className="grid grid-cols-1 items-start gap-4 lg:grid-cols-[minmax(0,1.55fr)_minmax(0,1fr)]">
              {/* Left stack */}
              <div className="min-w-0 space-y-4">
              <div className="rounded-2xl border border-[#E4E7EC] bg-white p-4 shadow-[0_1px_2px_rgba(16,24,40,0.05)]">
                <div className="mb-3 flex items-start justify-between gap-2">
                  <div>
                    <h3 className="text-[15px] font-bold text-[#101828]">
                      Featured Countries
                    </h3>
                    <p className="mt-0.5 text-[12px] text-[#667085]">
                      Explore top export markets
                    </p>
                  </div>
                  <SectionLink to="/dashboard/intelligence">
                    View All Countries →
                  </SectionLink>
                </div>

                <div className="relative">
                  <div
                    ref={countriesScrollRef}
                    className="flex gap-2.5 overflow-x-auto pb-0.5 [-ms-overflow-style:none] scrollbar-none [&::-webkit-scrollbar]:hidden"
                  >
                    {FEATURED_COUNTRIES.map((c) => (
                      <Link
                        key={c.name}
                        to="/dashboard/marketplace"
                        className="group w-[158px] shrink-0 overflow-hidden rounded-xl border border-[#E4E7EC] bg-white"
                      >
                        <div className="relative h-[88px] overflow-hidden">
                          <img
                            src={c.image}
                            alt={c.name}
                            className="size-full object-cover transition duration-300 group-hover:scale-105"
                          />
                          <img
                            src={FLAG(c.code)}
                            alt=""
                            className="absolute left-2 top-2 size-[22px] rounded-[3px] border border-white/90 object-cover shadow-sm"
                          />
                        </div>
                        <div className="p-2.5">
                          <p className="text-[13px] font-bold text-[#101828]">
                            {c.name}
                          </p>
                          <p className="mt-0.5 text-[10px] leading-tight text-[#98A2B3]">
                            Next Session: {c.nextSession}
                          </p>
                          <div className="mt-1.5 inline-flex items-center gap-0.5 rounded-full bg-[#ECFDF3] px-1.5 py-0.5 text-[9px] font-semibold text-[#039855]">
                            <TrendingUp className="size-2.5" />
                            High Demand
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                  <button
                    type="button"
                    onClick={scrollCountries}
                    className="absolute -right-1 top-[38px] z-10 flex size-7 items-center justify-center rounded-full border border-[#E4E7EC] bg-white text-[#475467] shadow-[0_2px_6px_rgba(16,24,40,0.08)] hover:bg-[#F9FAFB]"
                    aria-label="Scroll countries"
                  >
                    <ChevronRight className="size-3.5" />
                  </button>
                </div>
              </div>

              {/* Recommended Opportunities */}
              <div className="rounded-2xl border border-[#E4E7EC] bg-white p-4 shadow-[0_1px_2px_rgba(16,24,40,0.05)]">
                <div className="mb-3 flex items-start justify-between gap-2">
                  <div>
                    <h3 className="text-[15px] font-bold text-[#101828]">
                      Recommended Opportunities
                    </h3>
                    <p className="mt-0.5 text-[12px] text-[#667085]">
                      Based on your requirements & profile
                    </p>
                  </div>
                  <SectionLink to="/dashboard/opportunity-report">
                    View All →
                  </SectionLink>
                </div>

                <div>
                  {OPPORTUNITIES.map((op, i) => (
                    <div
                      key={op.title}
                      className={`flex items-start gap-2.5 py-3 ${i > 0 ? "border-t border-[#F2F4F7]" : "pt-0"}`}
                    >
                      <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-[#EEF4FF] text-[#444CE7]">
                        <Building2 className="size-3.5" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-1">
                          {op.isNew && (
                            <span className="rounded bg-[#039855] px-1 py-px text-[8px] font-bold uppercase tracking-wide text-white">
                              New
                            </span>
                          )}
                          <p className="text-[12px] font-semibold leading-tight text-[#101828]">
                            {op.title}
                          </p>
                        </div>
                        <p className="mt-0.5 text-[10px] text-[#667085]">
                          {op.category}
                        </p>
                        <div className="mt-1 flex flex-wrap items-center gap-1 text-[10px] text-[#98A2B3]">
                          <img
                            src={FLAG(op.flag)}
                            alt=""
                            className="size-3 rounded-[2px] object-cover"
                          />
                          <span>{op.country}</span>
                          <span>·</span>
                          <span>{op.posted}</span>
                        </div>
                      </div>
                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="h-7 shrink-0 rounded-full border-[#B2DDFF] bg-white px-2.5 text-[10px] font-semibold text-[#175CD3] shadow-none hover:bg-[#EFF8FF]"
                      >
                        <Link to="/dashboard/opportunity-report">
                          View Details
                        </Link>
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
              </div>

              {/* Middle stack — Sessions + Meetings */}
              <div className="min-w-0 space-y-4">
              <div className="rounded-2xl border border-[#E4E7EC] bg-white p-4 shadow-[0_1px_2px_rgba(16,24,40,0.05)]">
                <div className="mb-3 flex items-start justify-between gap-2">
                  <div>
                    <h3 className="text-[15px] font-bold text-[#101828]">
                      Upcoming Sessions
                    </h3>
                    <p className="mt-0.5 text-[12px] text-[#667085]">
                      Your scheduled & available sessions
                    </p>
                  </div>
                  <SectionLink to="/dashboard/my-sessions">
                    View All Sessions →
                  </SectionLink>
                </div>

                <div>
                  {sessionList.map((s: any, i: number) => (
                    <div
                      key={s.id || i}
                      className={`flex items-center gap-2.5 py-2.5 ${i > 0 ? "border-t border-[#F2F4F7]" : ""}`}
                    >
                      <img
                        src={FLAG(s.flag)}
                        alt=""
                        className="size-7 shrink-0 rounded-md border border-[#E4E7EC] object-cover"
                      />
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-[12px] font-semibold leading-tight text-[#101828]">
                          {s.title}
                        </p>
                        <p className="mt-0.5 text-[10px] text-[#98A2B3]">
                          {s.when}
                        </p>
                      </div>
                      <Link
                        to={
                          s.id
                            ? `/dashboard/waiting-room?sessionId=${s.id}`
                            : "/dashboard/marketplace"
                        }
                        className="shrink-0 text-[11px] font-semibold text-[#039855] hover:underline"
                      >
                        Register Now
                      </Link>
                    </div>
                  ))}
                </div>
              </div>

              {/* My Upcoming Meetings */}
              <div className="rounded-2xl border border-[#E4E7EC] bg-white p-4 shadow-[0_1px_2px_rgba(16,24,40,0.05)]">
                <div className="mb-3 flex items-start justify-between gap-2">
                  <div>
                    <h3 className="text-[15px] font-bold text-[#101828]">
                      My Upcoming Meetings
                    </h3>
                    <p className="mt-0.5 text-[12px] text-[#667085]">
                      Confirmed & requested meetings
                    </p>
                  </div>
                  <SectionLink to="/dashboard/my-sessions">
                    View All Meetings →
                  </SectionLink>
                </div>

                <div>
                  {meetingList.map((m: any, i: number) => (
                    <div
                      key={m.id || i}
                      className={`flex items-center gap-2.5 py-2.5 ${i > 0 ? "border-t border-[#F2F4F7]" : ""}`}
                    >
                      <div className="flex size-11 shrink-0 flex-col items-center justify-center rounded-lg border border-[#ABEFC6] bg-white">
                        <span className="text-[13px] font-bold leading-none text-[#039855]">
                          {m.day}
                        </span>
                        <span className="mt-0.5 text-[8px] font-bold tracking-wide text-[#039855]">
                          {m.month}
                        </span>
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-[12px] font-semibold text-[#101828]">
                          {m.company}
                        </p>
                        <p className="mt-0.5 truncate text-[10px] text-[#667085]">
                          {m.meta}
                        </p>
                        <p className="mt-0.5 text-[10px] text-[#98A2B3]">
                          {m.mode}
                        </p>
                      </div>
                      <Badge
                        className={
                          m.status === "Confirmed"
                            ? "shrink-0 rounded-full border-0 bg-[#ECFDF3] px-2 py-0.5 text-[9px] font-semibold text-[#027A48] hover:bg-[#ECFDF3]"
                            : "shrink-0 rounded-full border-0 bg-[#EFF8FF] px-2 py-0.5 text-[9px] font-semibold text-[#175CD3] hover:bg-[#EFF8FF]"
                        }
                      >
                        {m.status}
                      </Badge>
                    </div>
                  ))}
                </div>
              </div>
              </div>
            </div>

            {/* Explore Marketplace footer */}
            <Link
              to="/dashboard/marketplace"
              className="flex items-center justify-center rounded-2xl border border-[#B2DDFF] bg-[#EFF8FF] px-4 py-3 text-center transition hover:bg-[#D1E9FF]"
            >
              <span className="text-[13px] font-semibold text-[#175CD3]">
                Explore Marketplace → Browse more opportunities, countries &
                sessions →
              </span>
            </Link>
          </div>

          <aside className="space-y-4 xl:sticky xl:top-4">
            <ExporterCard>
              <p className="text-[11px] font-medium text-[#667085]">Your Plan</p>
              <div className="mt-1 flex flex-wrap items-center gap-2">
                <h3 className="text-[15px] font-bold text-[#039855]">Global Growth Plan</h3>
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
              <h3 className="text-[14px] font-bold text-[#101828]">Quick Actions</h3>
              <div className="mt-2 space-y-1">
                {DASHBOARD_QUICK_ACTIONS.map((action) => (
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
                      <p className="text-[12px] font-semibold text-[#101828]">{action.label}</p>
                      <p className="text-[10px] text-[#98A2B3]">{action.sub}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </ExporterCard>

            <ExporterCard>
              <h3 className="text-[14px] font-bold text-[#101828]">How Deal Rooms Work?</h3>
              <div className="relative mt-4 space-y-4 pl-1">
                <div className="absolute bottom-2 left-[11px] top-2 w-px bg-[#D1E9FF]" />
                {DASHBOARD_DEAL_STEPS.map((step, index) => (
                  <div key={step.title} className="relative flex gap-3">
                    <span className="relative z-10 flex size-6 shrink-0 items-center justify-center rounded-full bg-[#175CD3] text-[10px] font-bold text-white">
                      {index + 1}
                    </span>
                    <div>
                      <p className="text-[11px] font-semibold text-[#101828]">{step.title}</p>
                      <p className="text-[10px] leading-relaxed text-[#667085]">{step.desc}</p>
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
                  <h3 className="text-[13px] font-bold text-[#101828]">Need Assistance?</h3>
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
      </Main>
    </>
  );
}

