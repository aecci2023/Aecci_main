import { useState } from "react";
import {
  Search,
  Users,
  Briefcase,
  Globe,
  Settings,
  Tv,
  Scissors,
  Home,
  Sprout,
  FlaskConical,
  Wrench,
  Gift,
  Footprints,
  LayoutGrid,
  MapPin,
  ChevronLeft,
  ChevronRight,
  FileText,
  Video,
  Download,
  PlusSquare,
  BadgeCheck,
} from "lucide-react";

// ─── Constants & Mock Data ───
const STATS = [
  { value: "1,248+", label: "Verified Exporters", color: "bg-[#EFF6FF] text-[#2563EB]" },
  { value: "12,500+", label: "Trade Offers", color: "bg-[#ECFDF5] text-[#10B981]" },
  { value: "98+", label: "Countries Connected", color: "bg-[#F5F3FF] text-[#8B5CF6]" },
  { value: "50+", label: "Industries", color: "bg-[#FFFBEB] text-[#D97706]" },
  { value: "320+", label: "Active Deal Rooms", color: "bg-[#FDF2F8] text-[#EC4899]" },
];

const INDUSTRIES = [
  { name: "Textiles & Garments", icon: Scissors },
  { name: "Home & Living", icon: Home },
  { name: "Agriculture & Food", icon: Sprout },
  { name: "Chemicals & Materials", icon: FlaskConical },
  { name: "Machinery & Equipment", icon: Wrench },
  { name: "Handicrafts & Gifts", icon: Gift },
  { name: "Leather & Footwear", icon: Footprints },
  { name: "More Industries", icon: LayoutGrid },
];

const EXPORTERS = [
  {
    name: "Kraft India Exports",
    logo: "K",
    logoColor: "text-amber-600 bg-amber-50 border-amber-500",
    logoText: "KRAFT INDIA",
    location: "Delhi, India",
    membership: "Platinum Member",
    membershipColor: "bg-[#F5F3FF] text-[#7C3AED] border-[#DDD6FE]",
    categories: "Leather Bags, Wallets, Accessories",
  },
  {
    name: "Suryatex Industries Pvt. Ltd.",
    logo: "S",
    logoColor: "text-red-600 bg-red-50 border-red-500",
    logoText: "SURYATEX",
    location: "Surat, Gujarat, India",
    membership: "Gold Member",
    membershipColor: "bg-[#FFFBEB] text-[#D97706] border-[#FDE68A]",
    categories: "Home Textiles, Bed Linen, Towels",
  },
  {
    name: "AgroVita Foods Pvt. Ltd.",
    logo: "A",
    logoColor: "text-green-600 bg-green-50 border-green-500",
    logoText: "AGROVITA",
    location: "Mumbai, Maharashtra, India",
    membership: "Gold Member",
    membershipColor: "bg-[#FFFBEB] text-[#D97706] border-[#FDE68A]",
    categories: "Spices, Pulses, Rice, Oil Seeds",
  },
  {
    name: "Deccan Ceramics Pvt. Ltd.",
    logo: "D",
    logoColor: "text-gray-600 bg-gray-50 border-gray-500",
    logoText: "DECCAN",
    location: "Morbi, Gujarat, India",
    membership: "Silver Member",
    membershipColor: "bg-[#F1F5F9] text-[#475569] border-[#E2E8F0]",
    categories: "Ceramic Tableware, Dinner Sets",
  },
];

const TRADE_OFFERS = [
  {
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=80&q=80",
    title: "Premium Cotton Fabric",
    spec: "100% Cotton, 60x50 90x88",
    category: "Textiles & Garments",
    qty: "20,000 Meters",
    hsCode: "5208.32",
    origin: "India",
    originCode: "in",
    validTill: "15 Jun 2026",
  },
  {
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=80&q=80",
    title: "Organic Turmeric Powder",
    spec: "Curcumin 5% Min",
    category: "Agriculture & Food",
    qty: "10,000 Kgs",
    hsCode: "0910.30",
    origin: "India",
    originCode: "in",
    validTill: "18 Jun 2026",
  },
  {
    image: "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=80&q=80",
    title: "Brass Decorative Items",
    spec: "Handcrafted",
    category: "Handicrafts & Gifts",
    qty: "5,000 Pieces",
    hsCode: "8306.29",
    origin: "India",
    originCode: "in",
    validTill: "20 Jun 2026",
  },
];

const DEAL_ROOMS = [
  {
    title: "India Textile Sourcing Forum",
    time: "25 May 2026 • 10:00 AM (EST)",
    stats: "30 Min • 8 Exporters",
    live: true,
  },
  {
    title: "India Engineering Connect",
    time: "26 May 2026 • 02:00 PM (EST)",
    stats: "30 Min • 6 Exporters",
    live: false,
  },
  {
    title: "India Food Export Connect",
    time: "26 May 2026 • 11:30 AM (EST)",
    stats: "30 Min • 7 Exporters",
    live: false,
  },
];

const INTEL = [
  "India Export Outlook 2026",
  "Top Export Products from India",
  "Global Demand Insights",
];

export default function ImporterMarketplacePage() {
  const [searchVal, setSearchVal] = useState("");

  return (
    <div className="min-h-full bg-[#F4F6FA] px-6 py-6 text-left">
      {/* ── Breadcrumbs ── */}
      <div className="flex items-center gap-2 text-[12px] text-[#64748B] mb-2 font-medium">
        <span>Dashboard</span>
        <span>&gt;</span>
        <span className="text-[#0F172A]">Marketplace</span>
      </div>

      {/* ── Page Header ── */}
      <div className="mb-6">
        <h1 className="text-[26px] font-bold text-[#0F172A]">Marketplace</h1>
        <p className="text-[14px] text-[#64748B] mt-1">
          A global business marketplace to discover verified Indian exporters and trade opportunities.
        </p>
      </div>

      {/* ── Main Layout Grid ── */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6">

        {/* LEFT COLUMN: Main Panels */}
        <div className="space-y-6">

          {/* Hero Connect Banner */}
          <div className="relative rounded-2xl overflow-hidden bg-[#05162E] text-white p-8 md:p-10 shadow-lg min-h-[220px] flex flex-col justify-center">
            {/* Background image instead of svg */}
            <img
              src="/MarketPlaceBG.png"
              alt="Marketplace Background"
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            />
            {/* Dark overlay gradient to ensure text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#05162E] via-[#05162E]/70 to-transparent pointer-events-none" />

            <div className="relative z-10 max-w-lg space-y-4">
              <h2 className="text-[26px] md:text-[30px] font-bold leading-tight">
                One World. Many Opportunities.
              </h2>
              <p className="text-[#94A3B8] text-[14px] leading-relaxed">
                Connect, collaborate and grow with verified Indian exporters across industries.
              </p>

              <div className="relative mt-2">
                <input
                  type="text"
                  placeholder="Search product, HS code, industry, exporter..."
                  value={searchVal}
                  onChange={(e) => setSearchVal(e.target.value)}
                  className="w-full bg-white text-[#0F172A] rounded-lg pl-4 pr-12 py-3.5 text-[14px] placeholder-[#94A3B8] outline-none shadow-sm"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-[#2563EB] hover:bg-[#1D4ED8] rounded-md flex items-center justify-center text-white transition-colors">
                  <Search className="size-4.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
            {STATS.map((stat) => (
              <div key={stat.label} className="bg-white border border-[#E5E7EB] rounded-xl p-4 shadow-sm flex flex-col justify-center">
                <span className={`text-[20px] font-extrabold ${stat.color.split(" ")[1]}`}>{stat.value}</span>
                <span className="text-[12px] text-[#64748B] font-semibold mt-1">{stat.label}</span>
              </div>
            ))}
          </div>

          {/* Explore By Industry */}
          <div className="bg-white border border-[#E5E7EB] rounded-xl p-6 shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-[16px] font-bold text-[#0F172A]">Explore by Industry</h3>
              <a href="#" className="text-[13px] font-semibold text-[#2563EB] hover:underline">View All Industries</a>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
              {INDUSTRIES.map((ind) => {
                const Icon = ind.icon;
                return (
                  <div key={ind.name} className="flex flex-col items-center text-center cursor-pointer group">
                    <div className="w-12 h-12 rounded-full bg-[#F8FAFC] border border-[#E2E8F0] group-hover:border-[#2563EB] group-hover:bg-[#EFF6FF] flex items-center justify-center transition-all mb-2.5">
                      <Icon className="size-5 text-[#64748B] group-hover:text-[#2563EB] transition-colors" />
                    </div>
                    <span className="text-[12px] font-bold text-[#374151] group-hover:text-[#0F172A] leading-tight max-w-[85px] transition-colors">
                      {ind.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Featured Exporters */}
          <div className="bg-white border border-[#E5E7EB] rounded-xl p-6 shadow-sm">
            <div className="flex justify-between items-center mb-1">
              <h3 className="text-[16px] font-bold text-[#0F172A]">Featured Exporters</h3>
              <div className="flex items-center gap-3">
                <a href="#" className="text-[13px] font-semibold text-[#2563EB] hover:underline">View All Exporters</a>
                <div className="flex items-center gap-1.5 ml-2">
                  <button className="w-7 h-7 bg-white hover:bg-gray-50 border border-[#E5E7EB] rounded-full flex items-center justify-center text-gray-500 shadow-sm disabled:opacity-50">
                    <ChevronLeft className="size-4" />
                  </button>
                  <button className="w-7 h-7 bg-white hover:bg-gray-50 border border-[#E5E7EB] rounded-full flex items-center justify-center text-gray-500 shadow-sm">
                    <ChevronRight className="size-4" />
                  </button>
                </div>
              </div>
            </div>
            <p className="text-[13px] text-[#64748B] mb-6">Top verified exporters ready to do business</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
              {EXPORTERS.map((exp) => (
                <div key={exp.name} className="border border-[#E5E7EB] rounded-xl p-4 flex flex-col justify-between hover:shadow-md transition-shadow relative bg-white">
                  
                  {/* Verified Ribbon */}
                  <div className="absolute top-3 left-3 bg-[#EBFDF5] text-[#10B981] border border-[#A7F3D0] rounded-full px-2 py-0.5 text-[10px] font-bold flex items-center gap-1">
                    <BadgeCheck className="size-3 fill-[#10B981] text-[#EBFDF5]" />
                    Verified
                  </div>

                  <div className="pt-6 flex flex-col items-center text-center">
                    {/* Exporter Logo */}
                    <div className="w-16 h-16 rounded-xl border border-[#E2E8F0] flex flex-col items-center justify-center p-2 mb-3 bg-white">
                      <span className="text-[10px] text-[#94A3B8] font-bold tracking-wider leading-none">BRAND</span>
                      <span className="text-[#0F172A] font-extrabold text-[12px] uppercase mt-1 leading-none">{exp.logoText}</span>
                    </div>

                    <h4 className="text-[13px] font-bold text-[#0F172A] flex items-center gap-1 leading-tight justify-center">
                      {exp.name}
                      <BadgeCheck className="size-3.5 fill-[#2563EB] text-white shrink-0" />
                    </h4>
                    
                    <span className="text-[11px] text-[#64748B] flex items-center gap-1 mt-1 justify-center">
                      <MapPin className="size-3" />
                      {exp.location}
                    </span>

                    <span className={`inline-block text-[10px] font-bold px-2 py-0.5 rounded-full border mt-3 ${exp.membershipColor}`}>
                      {exp.membership}
                    </span>

                    <p className="text-[11px] text-[#64748B] mt-3 line-clamp-2 leading-relaxed min-h-[32px]">
                      {exp.categories}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-2 mt-4 pt-3 border-t border-[#F1F5F9]">
                    <button className="border border-[#2563EB] text-[#2563EB] hover:bg-[#EFF6FF] text-[12px] font-semibold py-2 rounded-lg transition-colors whitespace-nowrap">
                      View Profile
                    </button>
                    <button className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-[12px] font-semibold py-2 rounded-lg transition-colors whitespace-nowrap">
                      Connect
                    </button>
                  </div>

                </div>
              ))}
            </div>
          </div>

          {/* Latest Trade Offers */}
          <div className="bg-white border border-[#E5E7EB] rounded-xl p-6 shadow-sm">
            <div className="flex justify-between items-center mb-1">
              <h3 className="text-[16px] font-bold text-[#0F172A]">Latest Trade Offers</h3>
              <a href="#" className="text-[13px] font-semibold text-[#2563EB] hover:underline">View All Offers</a>
            </div>
            <p className="text-[13px] text-[#64748B] mb-4">Fresh trade offers from exporters</p>

            <div className="overflow-x-auto border border-[#E5E7EB] rounded-xl">
              <table className="w-full text-[13px]">
                <thead>
                  <tr className="bg-[#F8FAFC] border-b border-[#E5E7EB] text-[#475569] font-semibold">
                    <th className="py-3 px-4 text-left font-semibold">Product / Offer</th>
                    <th className="py-3 px-4 text-left font-semibold">Category</th>
                    <th className="py-3 px-4 text-left font-semibold">Quantity</th>
                    <th className="py-3 px-4 text-left font-semibold">HS Code</th>
                    <th className="py-3 px-4 text-left font-semibold">Origin</th>
                    <th className="py-3 px-4 text-left font-semibold">Valid Till</th>
                    <th className="py-3 px-4 text-center font-semibold">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E5E7EB] text-[#374151]">
                  {TRADE_OFFERS.map((offer, idx) => (
                    <tr key={idx} className="hover:bg-gray-50 transition-colors">
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-3">
                          <img
                            src={offer.image}
                            alt={offer.title}
                            className="w-10 h-10 object-cover rounded-lg border border-[#E2E8F0]"
                          />
                          <div className="text-left">
                            <p className="font-bold text-[#0F172A]">{offer.title}</p>
                            <p className="text-[11px] text-[#64748B]">{offer.spec}</p>
                          </div>
                        </div>
                      </td>
                      <td className="py-3 px-4">{offer.category}</td>
                      <td className="py-3 px-4 font-semibold text-[#0F172A]">{offer.qty}</td>
                      <td className="py-3 px-4 text-[#475569]">{offer.hsCode}</td>
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-1.5">
                          <img
                            src={`https://flagcdn.com/w40/${offer.originCode}.png`}
                            alt={offer.origin}
                            className="w-4 h-2.5 object-cover rounded-[1px] border border-gray-100"
                          />
                          <span>{offer.origin}</span>
                        </div>
                      </td>
                      <td className="py-3 px-4 text-[#64748B]">{offer.validTill}</td>
                      <td className="py-3 px-4 text-center">
                        <button className="border border-[#2563EB] text-[#2563EB] hover:bg-[#EFF6FF] text-[12px] font-semibold px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap">
                          View Offer
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-5 text-center">
              <a href="#" className="inline-flex items-center gap-1 text-[13px] font-semibold text-[#2563EB] hover:underline">
                View All Trade Offers &rarr;
              </a>
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN: Action Blocks */}
        <div className="space-y-6">

          {/* Post Sourcing Requirement */}
          <div className="bg-white border border-[#E5E7EB] rounded-xl p-5 shadow-sm">
            <h3 className="text-[14px] font-bold text-[#0F172A] mb-1">Post a Sourcing Requirement</h3>
            <p className="text-[12px] text-[#64748B] mb-4">
              Tell us what you need. Get matched with the right exporters.
            </p>
            <button className="w-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-[13px] font-semibold py-2.5 rounded-lg flex items-center justify-center gap-2 transition-colors">
              <PlusSquare className="size-4" />
              Create Requirement
            </button>
          </div>

          {/* Upcoming Deal Rooms */}
          <div className="bg-white border border-[#E5E7EB] rounded-xl p-5 shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-[14px] font-bold text-[#0F172A]">Upcoming Deal Rooms</h3>
              <a href="#" className="text-[12px] font-semibold text-[#2563EB] hover:underline">View All</a>
            </div>

            <div className="space-y-3.5">
              {DEAL_ROOMS.map((room, idx) => (
                <div key={idx} className="flex flex-col gap-1.5 p-3 rounded-lg border border-[#E5E7EB] relative">
                  {room.live && (
                    <span className="absolute top-3 right-3 bg-[#EF4444] text-white text-[9px] font-bold px-1.5 py-0.5 rounded-sm uppercase tracking-wider animate-pulse">
                      Live
                    </span>
                  )}
                  <h4 className="text-[13px] font-bold text-[#0F172A] flex items-center gap-1 max-w-[80%]">
                    {room.title}
                    <BadgeCheck className="size-3.5 fill-[#10B981] text-white shrink-0" />
                  </h4>
                  <p className="text-[11px] text-[#64748B] font-medium leading-none">{room.time}</p>
                  <p className="text-[11px] text-[#64748B] font-medium leading-none mt-0.5">{room.stats}</p>
                  <button className="mt-2 w-full border border-[#2563EB] text-[#2563EB] hover:bg-[#EFF6FF] text-[12px] font-semibold py-1.5 rounded-md transition-colors">
                    Join
                  </button>
                </div>
              ))}
            </div>

            <button className="w-full border border-[#E5E7EB] text-[#374151] hover:bg-gray-50 text-[13px] font-semibold py-2 rounded-lg mt-4 transition-colors">
              View All Sessions
            </button>
          </div>

          {/* Market Intelligence */}
          <div className="bg-white border border-[#E5E7EB] rounded-xl p-5 shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-[14px] font-bold text-[#0F172A]">Market Intelligence</h3>
              <a href="#" className="text-[12px] font-semibold text-[#2563EB] hover:underline">View Reports</a>
            </div>

            <div className="space-y-4">
              {INTEL.map((title) => (
                <div key={title} className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#EFF6FF] flex items-center justify-center shrink-0">
                    <FileText className="size-4 text-[#2563EB]" />
                  </div>
                  <div className="text-left">
                    <p className="text-[13px] font-bold text-[#0F172A] leading-tight">{title}</p>
                    <a href="#" className="text-[11px] font-semibold text-[#2563EB] hover:underline inline-flex items-center gap-1 mt-1">
                      <Download className="size-3" />
                      Download Report
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <button className="w-full border border-[#E5E7EB] text-[#374151] hover:bg-gray-50 text-[13px] font-semibold py-2 rounded-lg mt-4 transition-colors">
              Explore All Reports
            </button>
          </div>

          {/* Global Presence */}
          <div className="bg-white border border-[#E5E7EB] rounded-xl p-5 shadow-sm text-center">
            <h3 className="text-[14px] font-bold text-[#0F172A] text-left mb-3">Global Presence</h3>
            
            {/* World Map Mock Graphics */}
            <div className="w-full h-24 bg-gradient-to-br from-[#EFF6FF] to-[#EFF6FF]/20 rounded-lg flex items-center justify-center mb-3 relative overflow-hidden">
              <svg className="absolute inset-0 w-full h-full text-blue-100 opacity-80" fill="currentColor" viewBox="0 0 1000 500">
                <path d="M150 150h50v50h-50zM250 100h80v40h-80zM350 200h100v80h-100zM600 120h120v60h-120zM800 250h80v100h-80zM400 350h50v50h-50z" />
              </svg>
              <div className="relative z-10 flex flex-col items-center">
                <span className="text-[20px] font-extrabold text-[#2563EB] leading-none">98+</span>
                <span className="text-[11px] text-[#64748B] font-semibold mt-1">Countries Connected</span>
              </div>
            </div>

            <button className="w-full border border-[#E5E7EB] text-[#374151] hover:bg-gray-50 text-[13px] font-semibold py-2 rounded-lg transition-colors">
              Explore Countries
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
