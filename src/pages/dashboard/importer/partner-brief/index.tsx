import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Main } from "@/components/layout/main";
import {
  Users,
  Globe,
  Shield,
  BadgeCheck,
  Star,
  Search,
  ChevronDown,
  RotateCcw,
  Filter,
  Calendar,
  ArrowRight,
  Handshake,
  TrendingUp,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
} from "lucide-react";

// ─── Data Definitions ───

const COUNTRIES = [
  "All Countries",
  "India",
  "Germany",
  "United States",
  "United Kingdom",
  "Netherlands",
  "Canada",
];

const INDUSTRIES = [
  "All Industries",
  "Leather Goods",
  "Food & Agriculture",
  "Home & Lifestyle",
  "Textiles",
  "Machinery & Equipment",
];

const PARTNERSHIP_TYPES = [
  "All Partnership Types",
  "Strategic Partner",
  "Gold Partner",
  "Silver Partner",
];

const INITIAL_PARTNERS = [
  {
    id: "part-1",
    name: "Kraft India Exports Pvt. Ltd.",
    country: "India",
    flag: "https://flagcdn.com/w40/in.png",
    year: 2022,
    industry: "Leather Goods",
    type: "Strategic Partner",
    rating: 4.9,
    reviews: 128,
    initial: "K",
    color: "bg-[#0B1B3D] text-white",
  },
  {
    id: "part-2",
    name: "AgroVita Foods Pvt. Ltd.",
    country: "India",
    flag: "https://flagcdn.com/w40/in.png",
    year: 2021,
    industry: "Food & Agriculture",
    type: "Gold Partner",
    rating: 4.7,
    reviews: 96,
    initial: "A",
    color: "bg-emerald-600 text-white",
  },
  {
    id: "part-3",
    name: "Deccan Ceramics Pvt. Ltd.",
    country: "India",
    flag: "https://flagcdn.com/w40/in.png",
    year: 2020,
    industry: "Home & Lifestyle",
    type: "Gold Partner",
    rating: 4.6,
    reviews: 84,
    initial: "D",
    color: "bg-indigo-600 text-white",
  },
  {
    id: "part-4",
    name: "Suryatex Industries Pvt. Ltd.",
    country: "India",
    flag: "https://flagcdn.com/w40/in.png",
    year: 2019,
    industry: "Textiles",
    type: "Silver Partner",
    rating: 4.5,
    reviews: 72,
    initial: "S",
    color: "bg-purple-600 text-white",
  },
  {
    id: "part-5",
    name: "Global Machines & Equipments Ltd.",
    country: "Germany",
    flag: "https://flagcdn.com/w40/de.png",
    year: 2021,
    industry: "Machinery & Equipment",
    type: "Strategic Partner",
    rating: 4.8,
    reviews: 64,
    initial: "G",
    color: "bg-teal-600 text-white",
  },
];

const TOP_INDUSTRIES = [
  { rank: 1, name: "Textiles & Apparel", count: 28 },
  { rank: 2, name: "Leather Goods", count: 24 },
  { rank: 3, name: "Food & Agriculture", count: 22 },
  { rank: 4, name: "Machinery & Equipment", count: 18 },
  { rank: 5, name: "Home & Lifestyle", count: 16 },
];

const RECENT_ADDITIONS = [
  {
    name: "EcoPack Solutions Ltd.",
    country: "United Kingdom",
    date: "18 May 2026",
    initial: "E",
    color: "bg-emerald-500 text-white",
  },
  {
    name: "GreenField Organics",
    country: "Netherlands",
    date: "16 May 2026",
    initial: "G",
    color: "bg-green-600 text-white",
  },
  {
    name: "Meditech Global Inc.",
    country: "Canada",
    date: "14 May 2026",
    initial: "M",
    color: "bg-[#2563EB] text-white",
  },
];

export default function ImporterPartnerBriefPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("All Countries");
  const [selectedIndustry, setSelectedIndustry] = useState("All Industries");
  const [selectedType, setSelectedType] = useState("All Partnership Types");

  const [partners] = useState(INITIAL_PARTNERS);
  const [filteredPartners, setFilteredPartners] = useState(INITIAL_PARTNERS);
  const [isDesktop, setIsDesktop] = useState(typeof window !== "undefined" ? window.innerWidth >= 1024 : true);

  // Responsive logic
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Filter Logic
  useEffect(() => {
    let list = partners;

    // Search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.industry.toLowerCase().includes(q) ||
          p.country.toLowerCase().includes(q)
      );
    }

    // Country
    if (selectedCountry !== "All Countries") {
      list = list.filter((p) => p.country === selectedCountry);
    }

    // Industry
    if (selectedIndustry !== "All Industries") {
      list = list.filter((p) => p.industry === selectedIndustry);
    }

    // Partnership Type
    if (selectedType !== "All Partnership Types") {
      list = list.filter((p) => p.type === selectedType);
    }

    setFilteredPartners(list);
  }, [searchQuery, selectedCountry, selectedIndustry, selectedType, partners]);

  const handleResetFilters = () => {
    setSearchQuery("");
    setSelectedCountry("All Countries");
    setSelectedIndustry("All Industries");
    setSelectedType("All Partnership Types");
  };

  const getPartnerTypeBadge = (type: string) => {
    switch (type) {
      case "Strategic Partner":
        return "bg-purple-50 text-purple-700 border border-purple-200";
      case "Gold Partner":
        return "bg-amber-50 text-amber-700 border border-amber-200";
      case "Silver Partner":
        return "bg-slate-100 text-slate-700 border border-slate-300";
      default:
        return "bg-slate-50 text-slate-600 border border-slate-200";
    }
  };

  const renderStars = (rating: number) => {
    const stars = [];
    const floor = Math.floor(rating);
    for (let i = 0; i < 5; i++) {
      stars.push(
        <Star
          key={i}
          className={`size-3.5 ${
            i < floor ? "fill-amber-400 text-amber-400" : "text-gray-300"
          }`}
        />
      );
    }
    return <div className="flex items-center gap-0.5">{stars}</div>;
  };

  return (
    <Main fluid className="bg-[#F5F7FA] min-h-screen p-6 space-y-6 text-left">
      {/* ── BREADCRUMB + PAGE HEADER ── */}
      <div>
        {/* Breadcrumb */}
        <div className="flex items-center gap-1.5 text-[13px] text-[#64748B] mb-2 font-medium">
          <Link to="/importer/dashboard" className="hover:text-[#2563EB] transition-colors">
            Dashboard
          </Link>
          <span>&gt;</span>
          <span className="text-[#0B1B3D] font-semibold">Partner Brief</span>
        </div>

        {/* Page Title */}
        <h1 className="text-[28px] font-bold text-[#0B1B3D] tracking-tight leading-none">
          Partner Brief
        </h1>
        <p className="text-[15px] text-[#64748B] mt-2 font-medium">
          Detailed insights about AECCI partners and strategic collaborators worldwide.
        </p>
      </div>

      {/* ── STATS ROW (Inline spacing, visually separated by circles) ── */}
      <div className="bg-white border border-[#E5E7EB] rounded-[12px] p-5 shadow-[0_1px_3px_rgba(0,0,0,0.03)]">
        <div className="flex flex-wrap items-center justify-between gap-6 py-2.5">
          {[
            { label: "Total Partners", value: "162", icon: <Users className="size-5.5 text-blue-600" />, iconBg: "bg-blue-50" },
            { label: "Countries", value: "28", icon: <Globe className="size-5.5 text-emerald-600" />, iconBg: "bg-emerald-50" },
            { label: "Strategic Partners", value: "12", icon: <Shield className="size-5.5 text-purple-600" />, iconBg: "bg-purple-50" },
            { label: "Verified Partners", value: "98%", icon: <BadgeCheck className="size-5.5 text-orange-500" />, iconBg: "bg-orange-50" },
            { label: "Avg. Partner Rating", value: "4.8/5", icon: <Star className="size-5.5 text-amber-500 fill-amber-500" />, iconBg: "bg-amber-50" },
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-3.5 min-w-[170px] flex-1">
              <div className={`w-11 h-11 rounded-full ${item.iconBg} flex items-center justify-center shrink-0`}>
                {item.icon}
              </div>
              <div>
                <span className="block text-[22px] font-bold text-[#0B1B3D] leading-none">
                  {item.value}
                </span>
                <span className="block text-[13px] text-[#64748B] font-medium mt-1">
                  {item.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── SEARCH & FILTER BAR ── */}
      <div className="bg-white border border-[#E5E7EB] rounded-[12px] p-5 shadow-[0_1px_3px_rgba(0,0,0,0.03)] space-y-4">
        {/* Full-width Search Input */}
        <div className="relative w-full">
          <Search className="absolute left-3.5 top-3.5 size-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search partner by name, industry, country, or keyword..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 border border-[#E5E7EB] rounded-lg text-sm font-semibold text-[#0B1B3D] placeholder-gray-400 focus:outline-none focus:border-[#2563EB] transition-colors"
          />
        </div>

        {/* Filters and Reset Row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-1">
          <div className="flex flex-wrap items-center gap-3">
            {/* Country Selector */}
            <div className="relative min-w-[140px]">
              <select
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
                className="w-full pl-3.5 pr-8 py-2 border border-[#E5E7EB] rounded-lg text-sm font-bold text-[#0B1B3D] bg-white appearance-none cursor-pointer focus:outline-none focus:border-[#2563EB]"
              >
                {COUNTRIES.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-2.5 top-2.5 size-4 text-gray-500 pointer-events-none" />
            </div>

            {/* Industry Selector */}
            <div className="relative min-w-[150px]">
              <select
                value={selectedIndustry}
                onChange={(e) => setSelectedIndustry(e.target.value)}
                className="w-full pl-3.5 pr-8 py-2 border border-[#E5E7EB] rounded-lg text-sm font-bold text-[#0B1B3D] bg-white appearance-none cursor-pointer focus:outline-none focus:border-[#2563EB]"
              >
                {INDUSTRIES.map((i) => (
                  <option key={i} value={i}>
                    {i}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-2.5 top-2.5 size-4 text-gray-500 pointer-events-none" />
            </div>

            {/* Partnership Selector */}
            <div className="relative min-w-[180px]">
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full pl-3.5 pr-8 py-2 border border-[#E5E7EB] rounded-lg text-sm font-bold text-[#0B1B3D] bg-white appearance-none cursor-pointer focus:outline-none focus:border-[#2563EB]"
              >
                {PARTNERSHIP_TYPES.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-2.5 top-2.5 size-4 text-gray-500 pointer-events-none" />
            </div>

            {/* Filters Button */}
            <button className="flex items-center gap-1.5 border border-[#2563EB] hover:bg-blue-50/50 bg-white text-[#2563EB] text-sm font-bold py-2 px-4 rounded-lg shadow-sm transition-colors cursor-pointer">
              <Filter className="size-4" />
              <span>Filters</span>
            </button>
          </div>

          {/* Reset button */}
          <button
            onClick={handleResetFilters}
            className="flex items-center gap-1.5 text-gray-500 hover:text-[#2563EB] text-sm font-bold transition-colors cursor-pointer"
          >
            <RotateCcw className="size-4" />
            <span>Reset</span>
          </button>
        </div>
      </div>

      {/* ── TWO-COLUMN MAIN CONTENT GRID ── */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: isDesktop ? "7fr 3fr" : "1fr",
          gap: "20px",
          width: "100%",
        }}
      >
        {/* LEFT COLUMN: Trusted Partners */}
        <div className="space-y-6">
          <div className="bg-white border border-[#E5E7EB] rounded-[12px] shadow-[0_1px_3px_rgba(0,0,0,0.05)] p-5">
            <h3 className="text-[16px] font-bold text-[#0B1B3D] mb-5">
              Our Trusted Partners
            </h3>

            {/* Partners List Stack */}
            <div className="divide-y divide-gray-150 border-t border-gray-100">
              {filteredPartners.map((partner) => (
                <div
                  key={partner.id}
                  className="py-5 flex flex-col md:flex-row md:items-center justify-between gap-5 hover:bg-slate-50/50 px-2 rounded-lg transition-colors text-left"
                >
                  {/* Left: Avatar & Profile Metadata */}
                  <div className="flex items-start gap-4 min-w-[280px]">
                    <div className={`w-14 h-14 rounded-full ${partner.color} flex items-center justify-center shrink-0 text-xl font-extrabold shadow-inner`}>
                      {partner.initial}
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center gap-1.5">
                        <span className="font-bold text-[15px] text-[#0B1B3D] leading-snug">
                          {partner.name}
                        </span>
                        <BadgeCheck className="size-4 text-[#2563EB] shrink-0 fill-blue-50" />
                      </div>
                      <div className="flex items-center gap-1.5 text-[13px] text-gray-700 font-medium">
                        <img
                          src={partner.flag}
                          alt={partner.country}
                          className="w-4 h-2.5 object-cover rounded-[1px]"
                        />
                        <span>{partner.country}</span>
                      </div>
                      <div className="flex items-center gap-1 text-[11.5px] text-[#64748B] font-semibold">
                        <Calendar className="size-3.5" />
                        <span>AECCI Member since {partner.year}</span>
                      </div>
                    </div>
                  </div>

                  {/* Middle Column 1: Industry */}
                  <div className="space-y-1 min-w-[120px]">
                    <span className="block text-[11.5px] text-[#64748B] font-bold uppercase tracking-wider">
                      Industry
                    </span>
                    <span className="block text-[13.5px] font-bold text-[#0B1B3D]">
                      {partner.industry}
                    </span>
                  </div>

                  {/* Middle Column 2: Partnership Type */}
                  <div className="space-y-1 min-w-[140px]">
                    <span className="block text-[11.5px] text-[#64748B] font-bold uppercase tracking-wider">
                      Partnership Type
                    </span>
                    <div>
                      <span className={`inline-flex px-2.5 py-0.5 rounded-full text-[11px] font-bold ${getPartnerTypeBadge(partner.type)}`}>
                        {partner.type}
                      </span>
                    </div>
                  </div>

                  {/* Middle Column 3: Rating */}
                  <div className="space-y-1 min-w-[120px]">
                    <span className="block text-[11.5px] text-[#64748B] font-bold uppercase tracking-wider">
                      Rating
                    </span>
                    <div className="flex items-center gap-1.5">
                      {renderStars(partner.rating)}
                      <span className="text-[13px] font-bold text-[#0B1B3D]">{partner.rating}/5</span>
                    </div>
                    <span className="block text-[11px] text-[#64748B] font-semibold">
                      ({partner.reviews} reviews)
                    </span>
                  </div>

                  {/* Right Column: CTA */}
                  <div className="shrink-0 self-start md:self-center">
                    <button className="flex items-center justify-center border border-[#2563EB] hover:bg-blue-50/50 bg-white text-[#2563EB] text-[13px] font-bold py-2 px-4 rounded-lg shadow-sm transition-all cursor-pointer">
                      View Profile
                    </button>
                  </div>
                </div>
              ))}

              {filteredPartners.length === 0 && (
                <div className="py-12 text-center text-[#64748B] font-semibold">
                  No partners matched your filters.
                </div>
              )}
            </div>

            {/* Pagination Controls */}
            <div className="p-4 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-semibold text-[#64748B] mt-5">
              <span>
                Showing 1 to {filteredPartners.length} of 162 partners
              </span>

              {/* Navigation buttons */}
              <div className="flex items-center gap-1.5">
                <button className="p-1.5 rounded border border-gray-200 hover:bg-slate-50 transition-colors disabled:opacity-40 cursor-pointer">
                  <ChevronLeft className="size-4" />
                </button>
                <button className="w-8 h-8 rounded bg-[#2563EB] text-white flex items-center justify-center">
                  1
                </button>
                <button className="w-8 h-8 rounded border border-gray-200 hover:bg-slate-50 transition-colors flex items-center justify-center cursor-pointer">
                  2
                </button>
                <button className="w-8 h-8 rounded border border-gray-200 hover:bg-slate-50 transition-colors flex items-center justify-center cursor-pointer">
                  3
                </button>
                <span>...</span>
                <button className="w-8 h-8 rounded border border-gray-200 hover:bg-slate-50 transition-colors flex items-center justify-center cursor-pointer">
                  33
                </button>
                <button className="p-1.5 rounded border border-gray-200 hover:bg-slate-50 transition-colors cursor-pointer">
                  <ChevronRight className="size-4" />
                </button>
              </div>

              {/* Size Select */}
              <div className="flex items-center gap-1">
                <div className="relative">
                  <select className="pl-3 pr-8 py-1.5 border border-gray-200 rounded-lg bg-white appearance-none cursor-pointer focus:outline-none">
                    <option>5 per page</option>
                    <option>10 per page</option>
                    <option>20 per page</option>
                  </select>
                  <ChevronDown className="absolute right-2.5 top-2 size-3.5 text-gray-500 pointer-events-none stroke-[2px]" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Sidebar widgets */}
        <div className="space-y-6">
          {/* Widget 1: Partnership Overview (Donut Chart) */}
          <div className="bg-white border border-[#E5E7EB] rounded-[12px] p-5 shadow-[0_1px_3px_rgba(0,0,0,0.05)]">
            <h3 className="text-[16px] font-bold text-[#0B1B3D] mb-5">
              Partnership Overview
            </h3>

            <div className="flex items-center justify-between gap-4">
              {/* Donut Conic Gradient Chart */}
              <div className="relative w-24 h-24 rounded-full shrink-0 flex items-center justify-center"
                   style={{
                     background: "conic-gradient(#8B5CF6 0% 7%, #F59E0B 7% 29%, #94A3B8 29% 59%, #14B8A6 59% 100%)",
                   }}>
                {/* inner circle mask */}
                <div className="absolute w-14 h-14 bg-white rounded-full flex items-center justify-center font-bold text-xs text-[#0B1B3D]">
                  162
                </div>
              </div>

              {/* Donut Legend */}
              <div className="flex-1 space-y-2 text-left pl-2">
                {[
                  { label: "Strategic Partners", value: "12 (7%)", dotColor: "bg-[#8B5CF6]" },
                  { label: "Gold Partners", value: "35 (22%)", dotColor: "bg-[#F59E0B]" },
                  { label: "Silver Partners", value: "48 (30%)", dotColor: "bg-[#94A3B8]" },
                  { label: "Member Partners", value: "67 (41%)", dotColor: "bg-[#14B8A6]" },
                ].map((leg, idx) => (
                  <div key={idx} className="flex items-center justify-between gap-1 text-[11px] font-semibold text-gray-700">
                    <div className="flex items-center gap-1.5 truncate">
                      <div className={`w-2.5 h-2.5 rounded-full ${leg.dotColor} shrink-0`} />
                      <span className="truncate">{leg.label}</span>
                    </div>
                    <span className="shrink-0 text-[#0B1B3D] font-bold">{leg.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Widget 2: Top Partner Industries */}
          <div className="bg-white border border-[#E5E7EB] rounded-[12px] p-5 shadow-[0_1px_3px_rgba(0,0,0,0.05)] text-left">
            <h3 className="text-[16px] font-bold text-[#0B1B3D] mb-5">
              Top Partner Industries
            </h3>

            <div className="space-y-4">
              {TOP_INDUSTRIES.map((ind) => (
                <div key={ind.rank} className="space-y-1">
                  <div className="flex items-center justify-between text-[13px] font-semibold">
                    <div className="flex items-center gap-2">
                      <div className="w-5.5 h-5.5 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-[11px] font-bold text-[#2563EB] shrink-0">
                        {ind.rank}
                      </div>
                      <span className="text-gray-700 truncate max-w-[150px]">{ind.name}</span>
                    </div>
                    <span className="text-[#0B1B3D] font-bold">{ind.count}</span>
                  </div>
                  {/* Progress bar */}
                  <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                    <div
                      className="bg-[#2563EB] h-full rounded-full"
                      style={{ width: `${(ind.count / 28) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <a href="#" className="inline-flex items-center gap-1 text-[13px] font-bold text-[#2563EB] hover:underline cursor-pointer mt-5">
              <span>View All Industries</span>
              <ArrowRight className="size-3.5" />
            </a>
          </div>

          {/* Widget 3: Recent Partner Additions */}
          <div className="bg-white border border-[#E5E7EB] rounded-[12px] p-5 shadow-[0_1px_3px_rgba(0,0,0,0.05)] text-left">
            <h3 className="text-[16px] font-bold text-[#0B1B3D] mb-5">
              Recent Partner Additions
            </h3>

            <div className="space-y-4">
              {RECENT_ADDITIONS.map((recent, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className={`w-9 h-9 rounded-full ${recent.color} flex items-center justify-center shrink-0 text-sm font-bold shadow-inner`}>
                    {recent.initial}
                  </div>
                  <div className="space-y-0.5">
                    <span className="block text-[13px] font-bold text-[#0B1B3D] leading-snug truncate max-w-[180px]">
                      {recent.name}
                    </span>
                    <span className="block text-[11.5px] text-gray-500 font-semibold leading-none">
                      {recent.country}
                    </span>
                    <span className="block text-[11px] text-[#64748B] font-medium leading-none pt-0.5">
                      Added on {recent.date}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <a href="#" className="inline-flex items-center gap-1 text-[13px] font-bold text-[#2563EB] hover:underline cursor-pointer mt-5">
              <span>View All New Partners</span>
              <ArrowRight className="size-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* ── BOTTOM SECTION (Why Partner with AECCI Members?) ── */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-4 text-left">
        {/* Left 65% area (represented by cols span 2) */}
        <div className="lg:col-span-2 bg-white border border-[#E5E7EB] rounded-[12px] p-6 shadow-[0_1px_3px_rgba(0,0,0,0.03)] flex flex-col justify-between">
          <h3 className="text-[18px] font-bold text-[#0B1B3D] mb-6">
            Why Partner with AECCI Members?
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                title: "Verified & Trusted",
                desc: "All partners are verified and validated by AECCI for quality and reliability.",
                icon: <ShieldCheck className="size-6 text-[#2563EB]" />,
              },
              {
                title: "Global Network",
                desc: "Connect with a strong network of businesses across 100+ countries.",
                icon: <Globe className="size-6 text-[#2563EB]" />,
              },
              {
                title: "Business Growth",
                desc: "Leverage partnerships that drive sustainable growth and expansion.",
                icon: <Handshake className="size-6 text-[#2563EB]" />,
              },
              {
                title: "Data-Driven Insights",
                desc: "Get real market insights and analytics to make better business decisions.",
                icon: <TrendingUp className="size-6 text-emerald-600" />,
              },
            ].map((feature, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0">
                  {feature.icon}
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-[14px] text-[#0B1B3D]">
                    {feature.title}
                  </h4>
                  <p className="text-[12.5px] text-gray-500 leading-relaxed font-semibold">
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right 35% area: Become a Partner */}
        <div className="bg-[#0B1B3D] text-white rounded-[12px] p-6 flex flex-col justify-between shadow-lg relative overflow-hidden">
          {/* subtle decorative background */}
          <div className="absolute right-0 top-0 translate-x-4 -translate-y-4 text-white/5 pointer-events-none select-none">
            <Handshake className="size-48" />
          </div>

          <div className="relative z-10 space-y-3">
            <h3 className="text-[19px] font-bold text-white tracking-wide">
              Become a Partner
            </h3>
            <p className="text-[13px] text-gray-300 leading-relaxed font-semibold">
              Join AECCI's global network and unlock new opportunities for your business.
            </p>
          </div>

          <div className="relative z-10 space-y-4 pt-6">
            <button className="w-full bg-[#2563EB] hover:bg-blue-700 text-white font-extrabold text-[13px] py-3 rounded-lg shadow transition-all cursor-pointer border-none">
              Apply for Partnership
            </button>
            <a href="#" className="block text-center text-xs font-bold text-blue-400 hover:text-blue-300 transition-colors">
              Learn More →
            </a>
          </div>
        </div>
      </div>

      {/* ── FOOTER DISCLAIMER BAR ── */}
      <footer className="w-full border-t border-gray-200 mt-10 pt-6 pb-4 flex flex-col md:flex-row justify-between items-center gap-4 text-[12px] text-[#64748B]">
        {/* Left: AECCI Disclaimer with Shield Check Icon */}
        <div className="flex items-center gap-2 max-w-[600px] text-center md:text-left leading-relaxed">
          <ShieldCheck className="size-4.5 text-[#10B981] shrink-0" />
          <span>
            <strong className="text-[#0B1B3D]">AECCI Global Deal Room</strong> – A structured B2B business facilitation platform. AECCI does not guarantee transactions, contracts, payments or commercial outcomes.
          </span>
        </div>

        {/* Right: Copyright & Policy Links */}
        <div className="flex items-center flex-wrap justify-center gap-x-3 gap-y-1 font-semibold">
          <span>&copy; 2026 AECCI Global Deal Room. All rights reserved.</span>
          <span className="text-gray-300">|</span>
          <Link to="/terms-conditions" className="hover:text-[#2563EB] transition-colors">
            Terms & Conditions
          </Link>
          <span className="text-gray-300">|</span>
          <Link to="/privacy-policy" className="hover:text-[#2563EB] transition-colors">
            Privacy Policy
          </Link>
        </div>
      </footer>
    </Main>
  );
}
