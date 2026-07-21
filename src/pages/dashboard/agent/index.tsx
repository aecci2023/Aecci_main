import { Link } from "react-router-dom";
import { useMemo, useState } from "react";
import {
  ArrowRight,
  Briefcase,
  Calendar,
  ChevronDown,
  Clock,
  Cog,
  Globe2,
  Leaf,
  Shirt,
  TrendingUp,
  Users,
  Video,
} from "lucide-react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Line,
} from "react-simple-maps";
import { Main } from "@/components/layout/main";
import { Button } from "@/components/ui/button";
import { useGetUserByIdQuery } from "@/store/api/adminApi";

const FLAG = (code: string) => `https://flagcdn.com/w40/${code}.png`;
const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const STATS = [
  { label: "Active Connections", value: "128", sub: "+12 this month" },
  { label: "Opportunities", value: "35", sub: "+8 this week" },
  { label: "Meetings", value: "12", sub: "Upcoming" },
  { label: "Referrals", value: "24", sub: "+5 this month" },
];

const CATEGORIES = [
  {
    title: "Global Buyers / Importers",
    description: "Connect with verified Indian exporters and global buyers.",
    cta: "Explore Buyers",
    iconCircle: "bg-[#175CD3]",
    Icon: Briefcase,
    image: "/images/buyer.png",
  },
  {
    title: "Intending Agents / Representatives",
    description: "Represent your markets and connect businesses globally.",
    cta: "Explore Agents",
    iconCircle: "bg-[#12B76A]",
    Icon: Globe2,
    image: "/images/agent.png",
  },
  {
    title: "International Collaborators",
    description: "Partner with advisors, chambers and institutions.",
    cta: "Explore Collaborators",
    iconCircle: "bg-[#6938EF]",
    Icon: Users,
    image: "/images/collaborator.png",
  },
  {
    title: "Indian Exporters / Manufacturers",
    description: "Connect with global partners and grow your exports.",
    cta: "Explore Exporters",
    iconCircle: "bg-[#F79009]",
    Icon: TrendingUp,
    image: "/images/exporter.png",
  },
];

const OPPORTUNITIES = [
  {
    title: "Sourcing Agent for Textiles",
    meta: "USA • Textiles & Garments",
    iconBg: "bg-[#FFFAEB]",
    iconColor: "text-[#DC6803]",
    Icon: Shirt,
  },
  {
    title: "Industrial Machinery Partnership",
    meta: "Canada • Industrial Machinery",
    iconBg: "bg-[#F4F3FF]",
    iconColor: "text-[#6938EF]",
    Icon: Cog,
  },
  {
    title: "Agri Products Distribution",
    meta: "UAE • Agriculture",
    iconBg: "bg-[#ECFDF3]",
    iconColor: "text-[#039855]",
    Icon: Leaf,
  },
];

const CONNECTIONS = [
  { name: "Sunrise Exports", country: "India", flag: "in" },
  { name: "Atlantic Traders LLC", country: "USA", flag: "us" },
  { name: "EuroSupply Hub", country: "Germany", flag: "de" },
];

const HIGHLIGHT_COUNTRIES = new Set([
  "India",
  "United States of America",
  "United Kingdom",
  "United Arab Emirates",
  "Germany",
  "Brazil",
  "South Africa",
  "Australia",
]);

function isHighlightedCountry(geo: { properties: Record<string, unknown> }) {
  return HIGHLIGHT_COUNTRIES.has(String(geo.properties.name ?? ""));
}

function NetworkMapVisual() {
  return (
    <div className="relative h-[132px] w-full overflow-hidden rounded-xl bg-[#F5F7FA]">
      <ComposableMap
        projectionConfig={{ scale: 118, center: [10, 12] }}
        width={360}
        height={132}
        style={{ width: "100%", height: "100%" }}
      >
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const highlighted = isHighlightedCountry(geo);
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={highlighted ? "#0B2A4A" : "#D0D5DD"}
                  fillOpacity={highlighted ? 1 : 0.75}
                  stroke="#F5F7FA"
                  strokeWidth={0.4}
                  style={{
                    default: { outline: "none" },
                    hover: { outline: "none" },
                    pressed: { outline: "none" },
                  }}
                />
              );
            })
          }
        </Geographies>
      </ComposableMap>
    </div>
  );
}

const BANNER_HUBS: { name: string; coordinates: [number, number] }[] = [
  { name: "India", coordinates: [78.9629, 20.5937] },
  { name: "UAE", coordinates: [54.3773, 23.4241] },
  { name: "UK", coordinates: [-0.1278, 51.5074] },
  { name: "USA", coordinates: [-95.7129, 37.0902] },
  { name: "Singapore", coordinates: [103.8198, 1.3521] },
  { name: "South Africa", coordinates: [25.0339, -29.0] },
  { name: "Germany", coordinates: [10.4515, 51.1657] },
  { name: "Australia", coordinates: [133.7751, -25.2744] },
];

const BANNER_LINKS: [number, number][] = [
  [0, 1],
  [0, 2],
  [0, 3],
  [0, 4],
  [0, 5],
  [0, 6],
  [0, 7],
];

function GlobalNetworkBanner() {
  return (
    <div className="relative min-h-[196px] overflow-hidden rounded-2xl bg-[#061A33] p-5 sm:min-h-[210px] sm:p-6">
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "radial-gradient(circle at 78% 40%, rgba(53,177,253,0.35), transparent 55%), radial-gradient(circle at 55% 65%, rgba(23,92,211,0.25), transparent 50%)",
        }}
      />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-[58%] opacity-80 sm:opacity-100">
        <ComposableMap
          projectionConfig={{ scale: 130, center: [30, 5] }}
          width={600}
          height={220}
          style={{ width: "100%", height: "100%" }}
        >
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill="#175CD3"
                  fillOpacity={0.25}
                  stroke="#53B1FD"
                  strokeWidth={0.4}
                  strokeOpacity={0.45}
                  style={{
                    default: { outline: "none" },
                    hover: { outline: "none" },
                    pressed: { outline: "none" },
                  }}
                />
              ))
            }
          </Geographies>
          {BANNER_LINKS.map(([a, b], i) => (
            <Line
              key={i}
              from={BANNER_HUBS[a].coordinates}
              to={BANNER_HUBS[b].coordinates}
              stroke="#53B1FD"
              strokeWidth={0.75}
              strokeDasharray="2 3"
              strokeOpacity={0.6}
            />
          ))}
          {BANNER_HUBS.map((hub) => (
            <Marker key={hub.name} coordinates={hub.coordinates}>
              <circle r={7} fill="#2E90FA" opacity={0.2} />
              <circle r={2.75} fill="#84CAFF" />
            </Marker>
          ))}
        </ComposableMap>
      </div>
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(90deg, #061A33 0%, rgba(6,26,51,0.72) 34%, rgba(6,26,51,0.15) 58%, rgba(6,26,51,0) 72%)",
        }}
      />
      <div className="relative z-10 max-w-[52%] sm:max-w-md">
        <p className="text-[12px] font-medium text-[#B2DDFF]/90 sm:text-[13px]">
          You are connected to the
        </p>
        <h2 className="mt-0.5 text-[20px] font-bold leading-snug text-white sm:text-[24px]">
          Global Business Network
        </h2>
        <p className="mt-1 text-[18px] font-bold leading-snug text-[#F5D0A9] sm:text-[20px]">
          Represent. Connect. Grow.
        </p>
        <p className="mt-2.5 text-[11px] leading-relaxed text-[#B2DDFF]/90 sm:text-[12px]">
          AECCI empowers intending agents to build trusted international trade
          relationships.
        </p>
      </div>
    </div>
  );
}

function CategoryCard({
  title,
  description,
  cta,
  iconCircle,
  Icon,
  image,
}: (typeof CATEGORIES)[number]) {
  return (
    <div className="relative flex min-h-[268px] flex-col overflow-hidden rounded-2xl border border-[#E4E7EC] bg-white shadow-[0_1px_2px_rgba(16,24,40,0.05)]">
      <div className="relative z-10 flex flex-1 flex-col p-5 pr-[46%]">
        <span
          className={`flex size-14 shrink-0 items-center justify-center rounded-full ${iconCircle} text-white shadow-sm`}
        >
          <Icon className="size-6" />
        </span>
        <h3 className="mt-4 text-[14px] font-bold leading-snug text-[#101828]">
          {title}
        </h3>
        <p className="mt-2 text-[11px] leading-relaxed text-[#667085]">
          {description}
        </p>
        <Link
          to="/agent/dashboard"
          className="mt-4 inline-flex items-center gap-1 text-[12px] font-semibold text-[#175CD3] hover:underline"
        >
          {cta}
          <ArrowRight className="size-3.5" />
        </Link>
      </div>
      <img
        src={image}
        alt=""
        className="pointer-events-none absolute right-0 bottom-0 h-[94%] w-auto max-w-[54%] object-contain object-bottom"
      />
    </div>
  );
}

export default function AgentDashboard() {
  const [period, setPeriod] = useState("This Month");

  const currentUser = useMemo(() => {
    const userStr = localStorage.getItem("user");
    if (!userStr) return null;
    try {
      return JSON.parse(userStr);
    } catch {
      return null;
    }
  }, []);

  const userId = currentUser?.id || currentUser?._id;
  const { data: userData } = useGetUserByIdQuery(userId as string, {
    skip: !userId,
  });
  const dbUser = userData?.data || currentUser;
  const displayName = dbUser?.fullName || dbUser?.companyName || "John Anderson";

  return (
    <Main
      fluid
      className="min-h-full space-y-5 overflow-x-hidden bg-[#F8FAFC]! px-3 pb-8 sm:space-y-6 sm:px-5"
    >
      {/* Welcome + metrics */}
      <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
        <div className="min-w-0">
          <h1 className="text-[22px] font-bold tracking-tight text-[#101828] sm:text-[26px]">
            Welcome Back, {displayName}
          </h1>
          <p className="mt-1 text-[13px] font-medium text-[#667085]">
            Intending Agent Dashboard
          </p>
        </div>

        <div className="grid w-full grid-cols-2 overflow-hidden rounded-2xl bg-[#061A33] shadow-[0_4px_16px_rgba(6,26,51,0.18)] sm:grid-cols-4 xl:w-auto xl:min-w-[560px]">
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              className={`px-4 py-3.5 sm:px-5 ${i > 0 ? "border-l border-white/10" : ""}`}
            >
              <p className="text-[10px] font-medium tracking-wide text-[#98A2B3] uppercase sm:text-[11px]">
                {stat.label}
              </p>
              <p className="mt-1 text-[22px] font-bold leading-none text-white">
                {stat.value}
              </p>
              <p className="mt-1.5 text-[10px] text-[#84CAFF]">{stat.sub}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Banner + Upcoming Meeting */}
      <div className="grid grid-cols-1 items-stretch gap-4 lg:grid-cols-[minmax(0,1.72fr)_minmax(280px,1fr)]">
        <GlobalNetworkBanner />

        <div className="flex flex-col rounded-2xl border border-[#E4E7EC] bg-white p-4 shadow-[0_1px_2px_rgba(16,24,40,0.05)] sm:p-5">
          <div className="flex items-center justify-between gap-2">
            <h3 className="text-[14px] font-bold text-[#101828]">Upcoming Meeting</h3>
            <Link
              to="/agent/dashboard"
              className="text-[11px] font-semibold text-[#175CD3] hover:underline"
            >
              View All
            </Link>
          </div>

          <div className="mt-4 flex items-start gap-3">
            <div className="relative h-11 w-[52px] shrink-0">
              <span className="absolute left-0 top-0 flex size-10 overflow-hidden rounded-full border-2 border-white shadow-sm">
                <img src={FLAG("in")} alt="India" className="h-full w-full object-cover" />
              </span>
              <span className="absolute left-5 top-0 flex size-10 overflow-hidden rounded-full border-2 border-white shadow-sm">
                <img src={FLAG("us")} alt="USA" className="h-full w-full object-cover" />
              </span>
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-[14px] font-bold text-[#101828]">
                Precision Tools Pvt. Ltd.
              </p>
              <p className="mt-0.5 text-[11px] text-[#667085]">Mumbai, India</p>
              <p className="mt-1.5 text-[11px] text-[#344054]">
                Product Category:{" "}
                <span className="font-medium">Industrial Tools</span>
              </p>
            </div>
          </div>

          <div className="mt-auto flex flex-wrap items-center justify-between gap-3 border-t border-[#F2F4F7] pt-4">
            <div className="flex flex-wrap items-center gap-3 text-[11px] text-[#667085]">
              <span className="flex items-center gap-1.5">
                <Calendar className="size-3.5 shrink-0 text-[#98A2B3]" />
                22 May 2025
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="size-3.5 shrink-0 text-[#98A2B3]" />
                11:00 AM
              </span>
            </div>
            <Button className="h-9 shrink-0 rounded-lg bg-[#061A33] px-3.5 text-[12px] font-semibold text-white hover:bg-[#0A2744]">
              <Video className="mr-1.5 size-3.5" />
              Join Meeting
            </Button>
          </div>
        </div>
      </div>

      {/* Explore By Category */}
      <section>
        <div className="mb-3 flex items-center justify-between gap-2">
          <h2 className="text-[16px] font-bold text-[#101828]">Explore By Category</h2>
          <Link
            to="/agent/dashboard"
            className="shrink-0 text-[12px] font-semibold text-[#175CD3] hover:underline"
          >
            View All Categories
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {CATEGORIES.map((cat) => (
            <CategoryCard key={cat.title} {...cat} />
          ))}
        </div>
      </section>

      {/* Opportunities / Network / Connections */}
      <div className="grid grid-cols-1 items-stretch gap-4 xl:grid-cols-3">
        <div className="flex h-full flex-col rounded-2xl border border-[#E4E7EC] bg-white p-4 shadow-[0_1px_2px_rgba(16,24,40,0.05)] sm:p-5">
          <div className="flex items-center justify-between gap-2">
            <h3 className="text-[14px] font-bold text-[#101828]">
              Recommended Opportunities
            </h3>
            <Link
              to="/agent/dashboard"
              className="text-[11px] font-semibold text-[#175CD3] hover:underline"
            >
              View All
            </Link>
          </div>
          <ul className="mt-4 divide-y divide-[#F2F4F7]">
            {OPPORTUNITIES.map((item) => (
              <li
                key={item.title}
                className="flex items-center gap-3 py-3.5 first:pt-0 last:pb-0"
              >
                <span
                  className={`flex size-12 shrink-0 items-center justify-center rounded-full ${item.iconBg} ${item.iconColor}`}
                >
                  <item.Icon className="size-5" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-[13px] font-bold leading-snug text-[#101828]">
                    {item.title}
                  </p>
                  <p className="mt-0.5 text-[11px] text-[#667085]">{item.meta}</p>
                </div>
                <span className="shrink-0 rounded-full bg-[#ECFDF3] px-2.5 py-0.5 text-[10px] font-semibold text-[#039855]">
                  New
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex h-full flex-col rounded-2xl border border-[#E4E7EC] bg-white p-4 shadow-[0_1px_2px_rgba(16,24,40,0.05)] sm:p-5">
          <div className="flex items-center justify-between gap-2">
            <h3 className="text-[14px] font-bold text-[#101828]">
              Global Network Overview
            </h3>
            <button
              type="button"
              onClick={() =>
                setPeriod((p) => (p === "This Month" ? "This Week" : "This Month"))
              }
              className="flex items-center gap-1 rounded-lg border border-[#E4E7EC] bg-[#F9FAFB] px-2.5 py-1 text-[10px] font-semibold text-[#344054]"
            >
              {period}
              <ChevronDown className="size-3" />
            </button>
          </div>
          <div className="mt-4 w-full">
            <NetworkMapVisual />
          </div>
          <div className="mt-4 grid w-full grid-cols-2 gap-3">
            {[
              { label: "Countries", value: "42" },
              { label: "Partners", value: "236" },
              { label: "Deal Rooms", value: "18" },
              { label: "Growth", value: "+24%", green: true },
            ].map((s) => (
              <div
                key={s.label}
                className="flex min-h-[76px] flex-col items-center justify-center rounded-xl bg-[#F5F7FA] px-3 py-3 text-center"
              >
                <p className="text-[11px] font-medium text-[#667085]">{s.label}</p>
                <p
                  className={`mt-1 text-[20px] font-bold leading-none ${
                    s.green ? "text-[#039855]" : "text-[#101828]"
                  }`}
                >
                  {s.value}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex h-full flex-col rounded-2xl border border-[#E4E7EC] bg-white p-4 shadow-[0_1px_2px_rgba(16,24,40,0.05)] sm:p-5">
          <div className="flex items-center justify-between gap-2">
            <h3 className="text-[14px] font-bold text-[#101828]">Recent Connections</h3>
            <Link
              to="/agent/dashboard"
              className="text-[11px] font-semibold text-[#175CD3] hover:underline"
            >
              View All
            </Link>
          </div>
          <ul className="mt-4 divide-y divide-[#F2F4F7]">
            {CONNECTIONS.map((c) => (
              <li key={c.name} className="flex items-center gap-3 py-3 first:pt-0 last:pb-0">
                <span className="flex size-10 shrink-0 items-center justify-center overflow-hidden rounded-full border border-[#E4E7EC] bg-[#F9FAFB]">
                  <img
                    src={FLAG(c.flag)}
                    alt=""
                    className="h-5 w-7 rounded-sm object-cover"
                  />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-[12px] font-bold text-[#101828]">{c.name}</p>
                  <p className="text-[10px] text-[#667085]">{c.country}</p>
                </div>
                <span className="shrink-0 rounded-full bg-[#ECFDF3] px-2 py-0.5 text-[9px] font-bold text-[#039855]">
                  Connected
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom CTAs */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <div className="relative flex min-h-[148px] overflow-hidden rounded-2xl bg-[#061A33]">
          <div className="relative z-10 flex flex-1 flex-col justify-center p-5 sm:p-6">
            <h3 className="text-[16px] font-bold text-white">AECCI Global Support</h3>
            <p className="mt-1.5 max-w-xs text-[12px] leading-relaxed text-[#B2DDFF]/90">
              Our team is here to help you build stronger global partnerships.
            </p>
            <Button
              asChild
              className="mt-4 h-9 w-fit rounded-lg bg-[#D4A574] px-4 text-[12px] font-semibold text-[#061A33] hover:bg-[#C4935F]"
            >
              <Link to="/agent/messages">Get Support</Link>
            </Button>
          </div>
          <div className="relative hidden w-[42%] sm:block">
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=500&q=80"
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#061A33] via-[#061A33]/40 to-transparent" />
          </div>
        </div>

        <div className="relative flex min-h-[148px] overflow-hidden rounded-2xl bg-[#E8D5B7]">
          <div className="relative z-10 flex flex-1 flex-col justify-center p-5 sm:p-6">
            <h3 className="text-[16px] font-bold text-[#061A33]">Global Deal Room Events</h3>
            <p className="mt-1.5 max-w-xs text-[12px] leading-relaxed text-[#475467]">
              Participate in exclusive B2B events and expand your international reach.
            </p>
            <Button
              asChild
              className="mt-4 h-9 w-fit rounded-lg bg-[#061A33] px-4 text-[12px] font-semibold text-white hover:bg-[#0A2744]"
            >
              <Link to="/agent/dashboard">View Upcoming Events</Link>
            </Button>
          </div>
          <div className="relative hidden w-[42%] sm:block">
            <img
              src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=500&q=80"
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#E8D5B7] via-[#E8D5B7]/50 to-transparent" />
          </div>
        </div>
      </div>

      <footer className="flex flex-col items-center justify-between gap-2 border-t border-[#E4E7EC] pt-4 text-center sm:flex-row sm:text-left">
        <p className="text-[11px] text-[#98A2B3]">© 2025 AECCI. All Rights Reserved.</p>
        <div className="flex flex-wrap items-center justify-center gap-4 text-[11px] text-[#667085]">
          <Link to="#" className="hover:text-[#175CD3]">
            Privacy Policy
          </Link>
          <Link to="#" className="hover:text-[#175CD3]">
            Terms & Conditions
          </Link>
          <Link to="/agent/messages" className="hover:text-[#175CD3]">
            Contact Us
          </Link>
        </div>
      </footer>
    </Main>
  );
}
