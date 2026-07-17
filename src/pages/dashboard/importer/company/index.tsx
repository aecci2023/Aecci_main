import { useState } from "react";
import {
  Building2,
  Briefcase,
  Users,
  FileText,
  Award,
  Calendar,
  Globe,
  ExternalLink,
  MapPin,
  Plus,
  X,
  ChevronDown,
  CheckCircle2,
  AlertCircle,
  CircleDollarSign,
  ShoppingBag,
  Clock,
  ShieldCheck,
} from "lucide-react";

// ─── Constants ───
const TABS = [
  { id: "company", label: "Company Information", icon: Building2 },
  { id: "business", label: "Business Details", icon: Briefcase },
  { id: "team", label: "Team Members", icon: Users },
  { id: "documents", label: "Documents", icon: FileText },
  { id: "compliance", label: "Compliance", icon: ShieldCheck },
] as const;

type TabId = (typeof TABS)[number]["id"];

const COMPLETION_ITEMS = [
  { label: "Company Information", status: "Completed", isDone: true },
  { label: "Business Details", status: "Completed", isDone: true },
  { label: "Team Members", status: "Completed", isDone: true },
  { label: "Documents", status: "Completed", isDone: true },
  { label: "Compliance & Certifications", status: "Pending", isDone: false },
];

const HIGHLIGHTS = [
  { icon: Clock, label: "Years in Business", value: "5+ Years" },
  { icon: CircleDollarSign, label: "Annual Import Volume", value: "USD 5M - 10M" },
  { icon: ShoppingBag, label: "Top Sourcing Category", value: "Textiles & Garments" },
  { icon: Globe, label: "Main Market", value: "USA, Canada, UK" },
];

export default function ImporterMyCompanyPage() {
  const [activeTab, setActiveTab] = useState<TabId>("company");
  const [industryTags, setIndustryTags] = useState([
    "Textiles & Garments",
    "Home Textiles",
    "Handicrafts",
    "Accessories",
    "Leather Products",
  ]);
  const [newTagInput, setNewTagInput] = useState("");
  const [showAddTag, setShowAddTag] = useState(false);
  const [overviewText, setOverviewText] = useState(
    "ABC Trading LLC is a global import company based in the USA. We specialize in sourcing quality products from verified manufacturers and exporters across India for our retail and wholesale business."
  );

  const handleRemoveTag = (tagToRemove: string) => {
    setIndustryTags(industryTags.filter((tag) => tag !== tagToRemove));
  };

  const handleAddTag = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTagInput.trim() && !industryTags.includes(newTagInput.trim())) {
      setIndustryTags([...industryTags, newTagInput.trim()]);
      setNewTagInput("");
      setShowAddTag(false);
    }
  };

  return (
    <div className="min-h-full bg-[#F4F6FA] px-6 py-6 text-left">
      {/* ── Breadcrumb ── */}
      <div className="flex items-center gap-2 text-[12px] text-[#64748B] mb-2 font-medium">
        <span>Dashboard</span>
        <span>&gt;</span>
        <span className="text-[#0F172A]">My Company</span>
      </div>

      {/* ── Page Header ── */}
      <div className="mb-6">
        <h1 className="text-[26px] font-bold text-[#0F172A]">My Company</h1>
        <p className="text-[14px] text-[#64748B] mt-1">
          Manage your company profile, business details and team members.
        </p>
      </div>

      {/* ── Tabs ── */}
      <div className="bg-white border border-[#E5E7EB] rounded-xl mb-6 overflow-x-auto shadow-sm">
        <div className="flex min-w-max">
          {TABS.map((tab) => {
            const Icon = tab.icon;
            const active = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-4 text-[13px] font-semibold whitespace-nowrap border-b-2 transition-colors ${active
                    ? "border-[#2563EB] text-[#2563EB] bg-[#EFF6FF]"
                    : "border-transparent text-[#64748B] hover:text-[#0F172A] hover:bg-[#F8FAFC]"
                  }`}
              >
                <Icon className="size-4" />
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* ── Main Layout Grid ── */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6">

        {/* LEFT COLUMN: Tab Panel */}
        <div className="space-y-6">
          {activeTab === "company" && (
            <div className="bg-white border border-[#E5E7EB] rounded-xl p-6 shadow-sm">
              <h2 className="text-[16px] font-bold text-[#0F172A] mb-6">Company Information</h2>

              <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-6 items-start">
                {/* Logo Section */}
                <div className="flex flex-col items-center">
                  <div className="relative w-32 h-32 border border-[#E5E7EB] rounded-xl bg-[#0A192F] flex items-center justify-center p-4">
                    {/* Placeholder brand logo */}
                    <div className="text-center">
                      <div className="w-12 h-12 mx-auto mb-1 border border-amber-500/30 rounded-full flex items-center justify-center">
                        <span className="text-amber-500 font-serif text-lg font-bold">AK</span>
                      </div>
                      <span className="text-amber-500 font-serif text-[11px] block font-bold tracking-widest">ABC</span>
                      <span className="text-white text-[9px] block uppercase tracking-wider font-semibold">Trading</span>
                    </div>
                    {/* Edit badge */}
                    <button className="absolute bottom-2 right-2 w-7 h-7 bg-white hover:bg-gray-50 border border-[#E5E7EB] rounded-full flex items-center justify-center shadow-sm text-gray-500">
                      <svg className="size-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                      </svg>
                    </button>
                  </div>
                  <p className="text-[12px] font-semibold text-[#374151] mt-3 text-center">Upload Logo</p>
                  <p className="text-[11px] text-[#9CA3AF] mt-0.5 text-center leading-relaxed">
                    JPG, PNG or SVG.<br />Max size 2MB.
                  </p>
                </div>

                {/* Form Fields Grid */}
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[13px] font-medium text-[#374151] mb-1.5">
                        Company Name
                      </label>
                      <input
                        type="text"
                        defaultValue="ABC Trading LLC"
                        className="w-full border border-[#D1D5DB] rounded-lg px-3.5 py-2.5 text-[14px] text-[#0F172A] outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/10 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-[13px] font-medium text-[#374151] mb-1.5">
                        Business Type
                      </label>
                      <input
                        type="text"
                        defaultValue="Limited Liability Company (LLC)"
                        className="w-full border border-[#D1D5DB] rounded-lg px-3.5 py-2.5 text-[14px] text-[#0F172A] outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/10 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[13px] font-medium text-[#374151] mb-1.5">
                        Registration Number <span className="text-gray-400 text-[11px]">(Optional)</span>
                      </label>
                      <input
                        type="text"
                        defaultValue="202245678910"
                        className="w-full border border-[#D1D5DB] rounded-lg px-3.5 py-2.5 text-[14px] text-[#0F172A] outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/10 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-[13px] font-medium text-[#374151] mb-1.5">
                        Incorporation Date
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          defaultValue="12 Jan 2019"
                          className="w-full border border-[#D1D5DB] rounded-lg pl-3.5 pr-10 py-2.5 text-[14px] text-[#0F172A] outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/10 transition-all"
                        />
                        <Calendar className="absolute right-3.5 top-1/2 -translate-y-1/2 size-4 text-gray-400" />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[13px] font-medium text-[#374151] mb-1.5">
                        Website
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          defaultValue="www.abctrading.com"
                          className="w-full border border-[#D1D5DB] rounded-lg pl-3.5 pr-10 py-2.5 text-[14px] text-[#0F172A] outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/10 transition-all"
                        />
                        <ExternalLink className="absolute right-3.5 top-1/2 -translate-y-1/2 size-4 text-gray-400 cursor-pointer hover:text-[#2563EB]" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-[13px] font-medium text-[#374151] mb-1.5">
                        Employee Size
                      </label>
                      <div className="relative">
                        <select className="w-full border border-[#D1D5DB] rounded-lg px-3.5 py-2.5 text-[14px] text-[#0F172A] outline-none focus:border-[#2563EB] bg-white appearance-none focus:ring-2 focus:ring-[#2563EB]/10 transition-all">
                          <option>11 - 50 Employees</option>
                          <option>1 - 10 Employees</option>
                          <option>51 - 200 Employees</option>
                          <option>200+ Employees</option>
                        </select>
                        <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 size-4 text-gray-400 pointer-events-none" />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[13px] font-medium text-[#374151] mb-1.5">
                        Primary Country
                      </label>
                      <div className="relative">
                        <select className="w-full border border-[#D1D5DB] rounded-lg pl-10 pr-10 py-2.5 text-[14px] text-[#0F172A] outline-none focus:border-[#2563EB] bg-white appearance-none focus:ring-2 focus:ring-[#2563EB]/10 transition-all">
                          <option>United States</option>
                          <option>United Kingdom</option>
                          <option>Canada</option>
                          <option>India</option>
                        </select>
                        {/* US Flag Icon Representation */}
                        <div className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-3 overflow-hidden rounded-[1px] border border-gray-100">
                          <img src="https://flagcdn.com/w40/us.png" alt="US" className="w-full h-full object-cover" />
                        </div>
                        <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 size-4 text-gray-400 pointer-events-none" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-[13px] font-medium text-[#374151] mb-1.5">
                        Other Countries of Operation
                      </label>
                      <div className="relative">
                        <select className="w-full border border-[#D1D5DB] rounded-lg px-3.5 py-2.5 text-[14px] text-[#0F172A] outline-none focus:border-[#2563EB] bg-white appearance-none focus:ring-2 focus:ring-[#2563EB]/10 transition-all">
                          <option>Canada, Mexico, UK</option>
                          <option>Germany, France, Japan</option>
                          <option>Global</option>
                        </select>
                        <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 size-4 text-gray-400 pointer-events-none" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Company Address */}
              <div className="mt-5">
                <label className="block text-[13px] font-medium text-[#374151] mb-1.5">
                  Company Address
                </label>
                <div className="relative">
                  <textarea
                    rows={2}
                    defaultValue="1221 Avenue of the Americas, 18th Floor, New York, NY 10020, United States"
                    className="w-full border border-[#D1D5DB] rounded-lg pl-3.5 pr-10 py-2.5 text-[14px] text-[#0F172A] outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/10 transition-all resize-none"
                  />
                  <MapPin className="absolute right-3.5 top-3.5 size-4 text-gray-400" />
                </div>
              </div>

              {/* Company Overview */}
              <div className="mt-5">
                <div className="flex justify-between items-center mb-1.5">
                  <label className="block text-[13px] font-medium text-[#374151]">
                    Company Overview
                  </label>
                  <span className="text-[12px] text-[#64748B]">Briefly describe your business and operations.</span>
                </div>
                <textarea
                  rows={4}
                  maxLength={500}
                  value={overviewText}
                  onChange={(e) => setOverviewText(e.target.value)}
                  className="w-full border border-[#D1D5DB] rounded-lg px-3.5 py-2.5 text-[14px] text-[#0F172A] outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/10 transition-all resize-none leading-relaxed"
                />
                <div className="flex justify-end mt-1">
                  <span className="text-[12px] text-[#9CA3AF]">{overviewText.length} / 500</span>
                </div>
              </div>

              {/* Industries of Interest */}
              <div className="mt-5">
                <label className="block text-[13px] font-medium text-[#374151] mb-1.5">
                  Industries of Interest
                </label>
                <p className="text-[12px] text-[#64748B] mb-3">Select industries relevant to your sourcing needs.</p>
                <div className="flex flex-wrap gap-2 items-center">
                  {industryTags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1.5 bg-[#EFF6FF] border border-[#BFDBFE] text-[#1E40AF] px-3 py-1.5 rounded-full text-[12px] font-semibold"
                    >
                      {tag}
                      <button
                        onClick={() => handleRemoveTag(tag)}
                        className="text-[#1E40AF] hover:text-[#1D4ED8] focus:outline-none"
                      >
                        <X className="size-3.5" />
                      </button>
                    </span>
                  ))}

                  {showAddTag ? (
                    <form onSubmit={handleAddTag} className="inline-flex items-center gap-1">
                      <input
                        type="text"
                        value={newTagInput}
                        onChange={(e) => setNewTagInput(e.target.value)}
                        placeholder="Tag name"
                        className="border border-[#BFDBFE] rounded-full px-3 py-1 text-[12px] text-[#0F172A] outline-none focus:border-[#2563EB] h-[34px]"
                        autoFocus
                      />
                      <button
                        type="submit"
                        className="bg-[#2563EB] text-white px-2.5 py-1 rounded-full text-[12px] font-semibold h-[34px] hover:bg-[#1D4ED8]"
                      >
                        Add
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          setShowAddTag(false);
                          setNewTagInput("");
                        }}
                        className="text-gray-400 hover:text-gray-600"
                      >
                        <X className="size-4" />
                      </button>
                    </form>
                  ) : (
                    <button
                      onClick={() => setShowAddTag(true)}
                      className="inline-flex items-center gap-1 bg-white border border-[#D1D5DB] text-[#374151] px-3 py-1.5 rounded-full text-[12px] font-semibold hover:bg-gray-50 transition-colors"
                    >
                      <Plus className="size-3.5" /> Add More
                    </button>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-between items-center mt-8 border-t border-[#F1F5F9] pt-6">
                <button className="border border-[#D1D5DB] text-[#374151] hover:bg-gray-50 text-[14px] font-semibold px-6 py-2.5 rounded-lg transition-colors">
                  Cancel
                </button>
                <button className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-[14px] font-semibold px-6 py-2.5 rounded-lg transition-colors">
                  Save Changes
                </button>
              </div>
            </div>
          )}

          {/* Placeholder panels for other tabs */}
          {activeTab !== "company" && (
            <div className="bg-white border border-[#E5E7EB] rounded-xl p-10 flex flex-col items-center justify-center text-center shadow-sm">
              {(() => {
                const tab = TABS.find((t) => t.id === activeTab)!;
                const Icon = tab.icon;
                return (
                  <>
                    <div className="w-14 h-14 rounded-full bg-[#F1F5F9] flex items-center justify-center mb-4">
                      <Icon className="size-6 text-[#64748B]" />
                    </div>
                    <h3 className="text-[16px] font-semibold text-[#0F172A] mb-1">{tab.label}</h3>
                    <p className="text-[13px] text-[#64748B]">This section is coming soon.</p>
                  </>
                );
              })()}
            </div>
          )}
        </div>

        {/* RIGHT COLUMN: Info Sidebars */}
        <div className="space-y-6">
          {/* Verification Status Box */}
          <div className="bg-white border border-[#E5E7EB] rounded-xl p-5 shadow-sm text-center">
            <div className="flex justify-between items-center mb-4">
              <span className="text-[14px] font-bold text-[#0F172A]">Verification Status</span>
              <span className="bg-[#D1FAE5] text-[#069669] text-[11px] font-semibold px-2 py-0.5 rounded-full">
                Verified Importer
              </span>
            </div>

            <div className="flex justify-center mb-4">
              <div className="relative">
                <div className="w-16 h-16 rounded-full bg-[#ECFDF5] flex items-center justify-center">
                  <Award className="size-9 text-[#10B981]" />
                </div>
                <div className="absolute -bottom-1 -right-1 bg-[#10B981] text-white rounded-full p-1 border-2 border-white">
                  <CheckCircle2 className="size-3.5 fill-[#10B981] text-white" />
                </div>
              </div>
            </div>

            <p className="text-[13px] text-[#64748B] leading-relaxed mb-4 px-2">
              Your company is verified. You can access all features and connect with verified exporters.
            </p>

            <button className="w-full border border-[#2563EB] text-[#2563EB] hover:bg-[#EFF6FF] text-[13px] font-semibold py-2 rounded-lg transition-colors">
              View Verification Details
            </button>
          </div>

          {/* Company Completion Tracker */}
          <div className="bg-white border border-[#E5E7EB] rounded-xl p-5 shadow-sm">
            <h3 className="text-[14px] font-bold text-[#0F172A] mb-4">Company Completion</h3>

            <div className="flex items-center gap-4 mb-4">
              {/* Completion Ring (90%) */}
              <div className="relative w-16 h-16 shrink-0">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 64 64">
                  <circle cx="32" cy="32" r="26" stroke="#E5E7EB" strokeWidth="5.5" fill="none" />
                  <circle
                    cx="32" cy="32" r="26"
                    stroke="#10B981"
                    strokeWidth="5.5"
                    fill="none"
                    strokeDasharray={`${2 * Math.PI * 26 * 0.9} ${2 * Math.PI * 26}`}
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-[14px] font-bold text-[#0F172A]">90%</span>
                  {/* <span className="text-[9px] text-[#64748B] -mt-0.5">Completed</span> */}
                </div>
              </div>

              <div>
                <p className="text-[12px] text-[#64748B] leading-snug">
                  Great! Complete your profile to get better matches and more business opportunities.
                </p>
              </div>
            </div>

            {/* Checklist */}
            <div className="space-y-3">
              {COMPLETION_ITEMS.map((item) => (
                <div key={item.label} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {item.isDone ? (
                      <CheckCircle2 className="size-4 text-[#10B981] shrink-0" />
                    ) : (
                      <AlertCircle className="size-4 text-[#F59E0B] shrink-0" />
                    )}
                    <span className="text-[13px] text-[#374151] truncate max-w-[170px]">{item.label}</span>
                  </div>
                  <span
                    className={`text-[11px] font-semibold px-2 py-0.5 rounded-full ${item.isDone ? "bg-[#EFF6FF] text-[#2563EB]" : "bg-[#FEF3C7] text-[#D97706]"
                      }`}
                  >
                    {item.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Business Highlights */}
          <div className="bg-white border border-[#E5E7EB] rounded-xl p-5 shadow-sm">
            <h3 className="text-[14px] font-bold text-[#0F172A] mb-4">Business Highlights</h3>

            <div className="space-y-4">
              {HIGHLIGHTS.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-[#EFF6FF] flex items-center justify-center shrink-0">
                        <Icon className="size-4.5 text-[#2563EB]" />
                      </div>
                      <span className="text-[13px] text-[#64748B]">{item.label}</span>
                    </div>
                    <span className="text-[13px] font-bold text-[#0F172A]">{item.value}</span>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
