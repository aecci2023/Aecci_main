import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  Building2,
  Calendar,
  Filter,
  Globe,
  Search,
  Users,
  Star,
  Bookmark,
  FileText,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  ExporterPageShell,
  ExporterCard,
  ExporterBreadcrumb,
  ExporterStatCard,
} from "@/components/exporter/exporter-page-layout";

const FLAG = (code: string) => `https://flagcdn.com/w40/${code}.png`;

const REGIONS = [
  "All Regions",
  "Asia",
  "Europe",
  "North America",
  "South America",
  "Middle East",
  "Africa",
  "Oceania",
];

const COUNTRIES = [
  { name: "India", code: "in", region: "Asia", rooms: 12, level: "High" as const },
  { name: "United Arab Emirates", code: "ae", region: "Middle East", rooms: 10, level: "High" as const },
  { name: "United States", code: "us", region: "North America", rooms: 14, level: "High" as const },
  { name: "United Kingdom", code: "gb", region: "Europe", rooms: 8, level: "Medium" as const },
  { name: "Saudi Arabia", code: "sa", region: "Middle East", rooms: 7, level: "High" as const },
  { name: "Kenya", code: "ke", region: "Africa", rooms: 5, level: "Medium" as const },
  { name: "Germany", code: "de", region: "Europe", rooms: 6, level: "Medium" as const },
  { name: "Singapore", code: "sg", region: "Asia", rooms: 9, level: "High" as const },
  { name: "Australia", code: "au", region: "Oceania", rooms: 4, level: "Medium" as const },
  { name: "Brazil", code: "br", region: "South America", rooms: 5, level: "Medium" as const },
  { name: "Japan", code: "jp", region: "Asia", rooms: 6, level: "High" as const },
  { name: "Canada", code: "ca", region: "North America", rooms: 5, level: "Medium" as const },
];

const TOP_COUNTRIES = COUNTRIES.filter((c) => c.level === "High").slice(0, 5);

function LevelBadge({ level }: { level: "High" | "Medium" }) {
  return (
    <span
      className={`rounded-full px-2 py-0.5 text-[9px] font-bold ${
        level === "High"
          ? "bg-[#ECFDF3] text-[#027A48]"
          : "bg-[#FFFAEB] text-[#B54708]"
      }`}
    >
      {level}
    </span>
  );
}

export default function BrowseCountriesPage() {
  const [region, setRegion] = useState("All Regions");
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState("India");

  const filtered = useMemo(() => {
    return COUNTRIES.filter((c) => {
      const matchRegion = region === "All Regions" || c.region === region;
      const matchQuery =
        !query ||
        c.name.toLowerCase().includes(query.toLowerCase()) ||
        c.region.toLowerCase().includes(query.toLowerCase());
      return matchRegion && matchQuery;
    });
  }, [region, query]);

  return (
    <ExporterPageShell>
      <div>
        <ExporterBreadcrumb
          items={[
            { label: "Marketplace", to: "/dashboard/marketplace" },
            { label: "Browse Countries" },
          ]}
        />
        <h1 className="mt-2 text-[22px] font-bold text-[#101828] sm:text-[24px]">
          Browse Countries
        </h1>
        <p className="mt-1 max-w-3xl text-[13px] text-[#667085]">
          Explore global markets, view trade insights and join deal rooms in
          your target countries.
        </p>
      </div>

      <div className="grid grid-cols-1 items-start gap-5 xl:grid-cols-[minmax(0,1fr)_280px]">
        <section className="min-w-0 space-y-5">
          <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
            <ExporterStatCard
              label="Countries Available"
              value="50+"
              sub="Global markets"
              icon={Globe}
              color="text-[#175CD3]"
              bg="bg-[#EFF8FF]"
            />
            <ExporterStatCard
              label="Active Deal Rooms"
              value="120+"
              sub="Live opportunities"
              icon={Building2}
              color="text-[#039855]"
              bg="bg-[#ECFDF3]"
            />
            <ExporterStatCard
              label="Upcoming Sessions"
              value="18"
              sub="Next 7 days"
              icon={Calendar}
              color="text-[#F79009]"
              bg="bg-[#FFFAEB]"
            />
            <ExporterStatCard
              label="Businesses"
              value="10K+"
              sub="Verified members"
              icon={Users}
              color="text-[#7A5AF8]"
              bg="bg-[#F4F3FF]"
            />
          </div>
          <ExporterCard>
            <div className="grid grid-cols-1 gap-3 md:grid-cols-[minmax(0,1fr)_160px_160px_auto]">
              <div className="relative">
                <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-[#98A2B3]" />
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search countries by name..."
                  className="h-10 w-full rounded-lg border border-[#D0D5DD] bg-white pl-9 pr-3 text-[13px] outline-none focus:border-[#175CD3]"
                />
              </div>
              <select className="h-10 rounded-lg border border-[#D0D5DD] px-3 text-[12px] text-[#344054]">
                <option>All Regions</option>
                {REGIONS.slice(1).map((r) => (
                  <option key={r}>{r}</option>
                ))}
              </select>
              <select className="h-10 rounded-lg border border-[#D0D5DD] px-3 text-[12px] text-[#344054]">
                <option>All Income Levels</option>
                <option>High Income</option>
                <option>Upper Middle</option>
                <option>Lower Middle</option>
              </select>
              <Button
                variant="outline"
                className="h-10 rounded-lg border-[#D0D5DD] text-[12px] font-semibold text-[#344054]"
              >
                <Filter className="mr-1.5 size-3.5" />
                More Filters
              </Button>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {REGIONS.map((r) => (
                <button
                  key={r}
                  type="button"
                  onClick={() => setRegion(r)}
                  className={`rounded-full px-3 py-1.5 text-[11px] font-semibold transition ${
                    region === r
                      ? "bg-[#175CD3] text-white"
                      : "bg-[#F2F4F7] text-[#667085] hover:bg-[#E4E7EC]"
                  }`}
                >
                  {r}
                </button>
              ))}
            </div>
          </ExporterCard>

          <ExporterCard>
            <h3 className="text-[14px] font-bold text-[#101828]">
              Explore Countries Worldwide
            </h3>
            <div className="relative mt-4 overflow-hidden rounded-xl border border-[#E4E7EC] bg-[#EFF8FF]">
              <div className="flex min-h-[220px] items-center justify-center bg-[radial-gradient(circle_at_30%_40%,#B2DDFF_0%,#EFF8FF_45%,#F8FAFC_100%)] p-4 sm:min-h-[260px]">
                <div className="absolute inset-0 opacity-40">
                  <svg viewBox="0 0 800 400" className="size-full">
                    <ellipse cx="180" cy="160" rx="90" ry="70" fill="#84CAFF" />
                    <ellipse cx="380" cy="140" rx="110" ry="80" fill="#84CAFF" />
                    <ellipse cx="560" cy="180" rx="100" ry="75" fill="#84CAFF" />
                    <ellipse cx="680" cy="260" rx="70" ry="55" fill="#84CAFF" />
                    <ellipse cx="420" cy="210" rx="28" ry="34" fill="#175CD3" />
                  </svg>
                </div>
                <div className="relative z-10 w-full max-w-[280px] rounded-xl border border-[#E4E7EC] bg-white p-4 shadow-[0_8px_24px_rgba(16,24,40,0.12)]">
                  <div className="flex items-center gap-2">
                    <img src={FLAG("in")} alt="" className="size-6 rounded-sm object-cover" />
                    <div>
                      <p className="text-[13px] font-bold text-[#101828]">India</p>
                      <LevelBadge level="High" />
                    </div>
                  </div>
                  <div className="mt-3 grid grid-cols-3 gap-2 text-center">
                    <div className="rounded-lg bg-[#F9FAFB] p-2">
                      <p className="text-[12px] font-bold text-[#101828]">12</p>
                      <p className="text-[9px] text-[#667085]">Deal Rooms</p>
                    </div>
                    <div className="rounded-lg bg-[#F9FAFB] p-2">
                      <p className="text-[12px] font-bold text-[#101828]">3</p>
                      <p className="text-[9px] text-[#667085]">Sessions</p>
                    </div>
                    <div className="rounded-lg bg-[#F9FAFB] p-2">
                      <p className="text-[12px] font-bold text-[#101828]">1.2K+</p>
                      <p className="text-[9px] text-[#667085]">Businesses</p>
                    </div>
                  </div>
                  <p className="mt-3 text-[10px] font-semibold text-[#667085]">
                    Top Industries
                  </p>
                  <p className="mt-1 text-[11px] text-[#344054]">
                    Textiles, Pharma, IT, Renewable Energy
                  </p>
                  <Button
                    asChild
                    className="mt-3 h-9 w-full rounded-lg bg-[#175CD3] text-[12px] font-semibold hover:bg-[#1448B0]"
                  >
                    <Link to="/dashboard/marketplace">View Deal Rooms</Link>
                  </Button>
                </div>
              </div>
            </div>
          </ExporterCard>

          <ExporterCard>
            <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
              <h3 className="text-[14px] font-bold text-[#101828]">
                All Countries ({filtered.length}+)
              </h3>
              <select className="h-8 rounded-lg border border-[#D0D5DD] px-2 text-[11px]">
                <option>Sort by: A to Z</option>
                <option>Sort by: Opportunity</option>
                <option>Sort by: Deal Rooms</option>
              </select>
            </div>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((c) => (
                <button
                  key={c.name}
                  type="button"
                  onClick={() => setSelected(c.name)}
                  className={`rounded-xl border p-3 text-left transition ${
                    selected === c.name
                      ? "border-[#175CD3] bg-[#EFF8FF] shadow-[0_0_0_1px_#175CD3]"
                      : "border-[#E4E7EC] bg-white hover:border-[#B2DDFF]"
                  }`}
                >
                  <div className="flex items-start gap-2.5">
                    <img
                      src={FLAG(c.code)}
                      alt=""
                      className="size-8 rounded-md border border-[#E4E7EC] object-cover"
                    />
                    <div className="min-w-0 flex-1">
                      <div className="flex items-start justify-between gap-2">
                        <p className="truncate text-[12px] font-bold text-[#101828]">
                          {c.name}
                        </p>
                        <LevelBadge level={c.level} />
                      </div>
                      <p className="mt-0.5 text-[10px] text-[#667085]">{c.region}</p>
                      <p className="mt-1 text-[10px] font-medium text-[#344054]">
                        {c.rooms} Deal Rooms
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </ExporterCard>

          <div className="flex flex-col gap-3 rounded-2xl border border-[#B2DDFF] bg-[#EFF8FF] px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-[14px] font-bold text-[#175CD3]">
                Can&apos;t find the country you&apos;re looking for?
              </p>
              <p className="text-[12px] text-[#667085]">
                Submit a request and our team will help expand market coverage.
              </p>
            </div>
            <Button
              asChild
              className="h-9 shrink-0 rounded-lg bg-[#175CD3] text-[12px] font-semibold hover:bg-[#1448B0]"
            >
              <Link to="/dashboard/need-help">Submit Request</Link>
            </Button>
          </div>
        </section>

        <aside className="space-y-4">
          <ExporterCard>
            <div className="flex items-center justify-between">
              <h3 className="text-[13px] font-bold text-[#101828]">
                Top Countries by Opportunity
              </h3>
              <Link
                to="/dashboard/country-intelligence"
                className="text-[11px] font-semibold text-[#175CD3]"
              >
                View All
              </Link>
            </div>
            <ul className="mt-3 space-y-2.5">
              {TOP_COUNTRIES.map((c, i) => (
                <li key={c.name} className="flex items-center gap-2.5">
                  <span className="flex size-5 items-center justify-center rounded-full bg-[#EFF8FF] text-[10px] font-bold text-[#175CD3]">
                    {i + 1}
                  </span>
                  <img src={FLAG(c.code)} alt="" className="size-5 rounded-sm object-cover" />
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-[11px] font-semibold text-[#101828]">
                      {c.name}
                    </p>
                    <p className="text-[10px] text-[#98A2B3]">{c.rooms} rooms</p>
                  </div>
                  <LevelBadge level={c.level} />
                </li>
              ))}
            </ul>
          </ExporterCard>

          <ExporterCard>
            <div className="flex items-center gap-2">
              <img src={FLAG("in")} alt="" className="size-6 rounded-sm object-cover" />
              <h3 className="text-[13px] font-bold text-[#101828]">
                Country Insights · India
              </h3>
            </div>
            <ul className="mt-3 space-y-2 text-[11px]">
              <li className="flex justify-between gap-2">
                <span className="text-[#667085]">Market Potential</span>
                <span className="font-semibold text-[#027A48]">Very High</span>
              </li>
              <li className="flex justify-between gap-2">
                <span className="text-[#667085]">Ease of Doing Business</span>
                <span className="font-semibold text-[#101828]">77/190</span>
              </li>
              <li className="flex justify-between gap-2">
                <span className="text-[#667085]">Import Growth</span>
                <span className="font-semibold text-[#027A48]">6.5%</span>
              </li>
            </ul>
            <p className="mt-3 text-[10px] font-semibold text-[#667085]">
              Top Export Opportunities
            </p>
            <p className="mt-1 text-[11px] leading-relaxed text-[#344054]">
              Textiles & Apparel, Pharmaceuticals, IT Services, Auto Components
            </p>
            <Button
              asChild
              variant="outline"
              className="mt-4 h-9 w-full rounded-lg border-[#175CD3] text-[12px] font-semibold text-[#175CD3]"
            >
              <Link to="/dashboard/country-intelligence">
                View Country Intelligence
              </Link>
            </Button>
          </ExporterCard>

          <ExporterCard>
            <h3 className="text-[13px] font-bold text-[#101828]">Quick Actions</h3>
            <div className="mt-2 space-y-1">
              {[
                { label: "Compare Countries", icon: Star, to: "/dashboard/browse-countries" },
                { label: "Save Favorite Countries", icon: Bookmark, to: "/dashboard/browse-countries" },
                { label: "Request Country Report", icon: FileText, to: "/dashboard/market-reports" },
                { label: "Ask Trade Advisor", icon: MessageCircle, to: "/dashboard/need-help" },
              ].map((a) => (
                <Link
                  key={a.label}
                  to={a.to}
                  className="flex items-center gap-2.5 rounded-lg px-2 py-2 text-[12px] font-medium text-[#344054] hover:bg-[#F9FAFB]"
                >
                  <a.icon className="size-3.5 text-[#175CD3]" />
                  {a.label}
                </Link>
              ))}
            </div>
          </ExporterCard>
        </aside>
      </div>
    </ExporterPageShell>
  );
}
