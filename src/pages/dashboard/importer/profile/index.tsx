import { useState } from "react";
import {
  User,
  MapPin,
  Building2,
  Package,
  Settings2,
  Share2,
  FileText,
  Eye,
  Upload,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  AlertCircle,
  Circle,
  Phone,
  Globe,
  Headphones,
  RefreshCw,
} from "lucide-react";

// ─── Types ─────────────────────────────────────────────────────────────────
const TABS = [
  { id: "basic", label: "Basic Information", icon: User },
  { id: "contact", label: "Contact Details", icon: MapPin },
  { id: "business", label: "Business Details", icon: Building2 },
  { id: "products", label: "Products / Services", icon: Package },
  { id: "preferences", label: "Preferences", icon: Settings2 },
  { id: "social", label: "Social Links", icon: Share2 },
  { id: "preview", label: "Preview", icon: Eye },
] as const;

type TabId = (typeof TABS)[number]["id"];

interface SectionAccordion {
  id: string;
  label: string;
  icon: any;
  description: string;
  completed: number;
  total: number;
  status: "complete" | "warning" | "empty";
}

const SECTIONS: SectionAccordion[] = [
  { id: "contact", label: "Contact Details", icon: MapPin, description: "Add your email, phone and location details.", completed: 3, total: 5, status: "warning" },
  { id: "business", label: "Business Details", icon: Building2, description: "Add your company registration and business information.", completed: 2, total: 5, status: "warning" },
  { id: "products", label: "Products / Services", icon: Package, description: "Add details about your products and services.", completed: 2, total: 5, status: "warning" },
  { id: "preferences", label: "Preferences", icon: Settings2, description: "Set your business preferences and target markets.", completed: 1, total: 5, status: "warning" },
  { id: "social", label: "Social Links", icon: Share2, description: "Add your website and social media profiles.", completed: 0, total: 3, status: "empty" },
  { id: "documents", label: "Documents", icon: FileText, description: "Upload your business documents and certificates.", completed: 1, total: 3, status: "warning" },
];

const COMPLETION_ITEMS = [
  { label: "Basic Information", completed: 5, total: 5, done: true },
  { label: "Contact Details", completed: 3, total: 5, done: false },
  { label: "Business Details", completed: 2, total: 5, done: false },
  { label: "Products / Services", completed: 2, total: 5, done: false },
  { label: "Preferences", completed: 1, total: 5, done: false },
  { label: "Social Links", completed: 0, total: 3, done: false },
  { label: "Documents", completed: 1, total: 3, done: false },
];

// ─── Completion Ring ────────────────────────────────────────────────────────
function CompletionRing({ percent }: { percent: number }) {
  const r = 36;
  const circ = 2 * Math.PI * r;
  const dash = (percent / 100) * circ;

  return (
    <div className="relative w-[88px] h-[88px] shrink-0">
      <svg className="w-full h-full -rotate-90" viewBox="0 0 88 88">
        <circle cx="44" cy="44" r={r} stroke="#E5E7EB" strokeWidth="8" fill="none" />
        <circle
          cx="44" cy="44" r={r}
          stroke="#10B981"
          strokeWidth="8"
          fill="none"
          strokeDasharray={`${dash} ${circ}`}
          strokeLinecap="round"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-[17px] font-bold text-[#0F172A]">{percent}%</span>
      </div>
    </div>
  );
}

// ─── Status icon for completion list ────────────────────────────────────────
function StatusIcon({ done, count }: { done: boolean; count: number }) {
  if (done) return <CheckCircle2 className="size-4 text-[#10B981] shrink-0" />;
  if (count > 0) return <AlertCircle className="size-4 text-[#F59E0B] shrink-0" />;
  return <Circle className="size-4 text-[#CBD5E1] shrink-0" />;
}

// ─── Section Accordion Row ───────────────────────────────────────────────────
function SectionRow({ section }: { section: SectionAccordion }) {
  const [open, setOpen] = useState(false);
  const Icon = section.icon;
  const pct = Math.round((section.completed / section.total) * 100);

  const badgeColor =
    section.status === "complete"
      ? "bg-[#D1FAE5] text-[#059669]"
      : section.status === "warning"
      ? "bg-[#FEF3C7] text-[#D97706]"
      : "bg-[#F1F5F9] text-[#64748B]";

  return (
    <div className="border border-[#E5E7EB] rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen((p) => !p)}
        className="w-full flex items-center justify-between px-5 py-4 hover:bg-[#F8FAFC] transition-colors"
      >
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-[#F1F5F9] flex items-center justify-center shrink-0">
            <Icon className="size-4 text-[#64748B]" />
          </div>
          <div className="text-left">
            <p className="text-[14px] font-semibold text-[#0F172A]">{section.label}</p>
            <p className="text-[12px] text-[#64748B]">{section.description}</p>
          </div>
        </div>
        <div className="flex items-center gap-3 shrink-0 ml-4">
          <span className={`text-[12px] font-semibold px-3 py-1 rounded-full ${badgeColor}`}>
            {section.completed}/{section.total} Completed
          </span>
          {open ? <ChevronUp className="size-4 text-[#64748B]" /> : <ChevronDown className="size-4 text-[#64748B]" />}
        </div>
      </button>
      {open && (
        <div className="px-5 pb-5 pt-2 border-t border-[#F1F5F9] bg-[#FAFBFF]">
          <div className="h-1.5 w-full bg-[#E5E7EB] rounded-full overflow-hidden mb-3">
            <div
              className="h-full bg-gradient-to-r from-[#3B82F6] to-[#6366F1] rounded-full transition-all"
              style={{ width: `${pct}%` }}
            />
          </div>
          <p className="text-[13px] text-[#64748B]">
            {section.completed} of {section.total} fields completed. Fill in the remaining fields to improve your profile visibility.
          </p>
          <button className="mt-3 text-[13px] font-semibold text-[#2563EB] hover:underline">
            Edit Section →
          </button>
        </div>
      )}
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function ImporterMyProfilePage() {
  const [activeTab, setActiveTab] = useState<TabId>("basic");
  const [aboutText, setAboutText] = useState(
    "We are a global importer with a strong presence in international procurement. Our sourcing network includes textiles, electronics, and industrial goods from across India."
  );

  return (
    <div className="min-h-full bg-[#F4F6FA] px-6 py-6">
      {/* ── Page Header ─────────────────────────────────────────────── */}
      <div className="flex items-start justify-between mb-5">
        <div>
          <h1 className="text-[24px] font-bold text-[#0F172A]">My Profile</h1>
          <p className="text-[14px] text-[#64748B] mt-0.5">
            Complete your profile to get better visibility and more relevant opportunities.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 border border-[#2563EB] text-[#2563EB] text-[13px] font-semibold px-4 py-2 rounded-lg hover:bg-[#EFF6FF] transition-colors">
            <Eye className="size-4" />
            Preview Public Profile
          </button>
          <div className="flex items-center gap-2 bg-white border border-[#E5E7EB] px-4 py-2 rounded-lg">
            <RefreshCw className="size-4 text-[#10B981]" />
            <span className="text-[13px] font-semibold text-[#10B981]">Profile Completion%</span>
          </div>
        </div>
      </div>

      {/* ── Tabs ────────────────────────────────────────────────────── */}
      <div className="bg-white border border-[#E5E7EB] rounded-xl mb-6 overflow-x-auto">
        <div className="flex min-w-max">
          {TABS.map((tab) => {
            const Icon = tab.icon;
            const active = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-5 py-3.5 text-[13px] font-semibold whitespace-nowrap border-b-2 transition-colors ${
                  active
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

      {/* ── Content Grid ────────────────────────────────────────────── */}
      <div className="grid grid-cols-1 xl:grid-cols-[1fr_320px] gap-6">
        {/* LEFT COLUMN */}
        <div className="space-y-6">
          {/* Basic Information Card */}
          {activeTab === "basic" && (
            <div className="bg-white border border-[#E5E7EB] rounded-xl p-6">
              <h2 className="text-[16px] font-bold text-[#0F172A] mb-5">Basic Information</h2>

              <div className="grid grid-cols-1 lg:grid-cols-[180px_1fr] gap-6">
                {/* Profile Photo Upload */}
                <div>
                  <p className="text-[13px] font-medium text-[#374151] mb-2">Profile Photo</p>
                  <div className="border-2 border-dashed border-[#D1D5DB] rounded-xl flex flex-col items-center justify-center py-8 px-4 bg-[#F9FAFB] cursor-pointer hover:bg-[#F3F4F6] transition-colors group">
                    <div className="w-12 h-12 rounded-full bg-[#EFF6FF] flex items-center justify-center mb-3 group-hover:bg-[#DBEAFE] transition-colors">
                      <Upload className="size-5 text-[#2563EB]" />
                    </div>
                    <p className="text-[13px] font-semibold text-[#374151]">Upload Photo</p>
                    <p className="text-[11px] text-[#9CA3AF] mt-0.5">JPG, PNG (Max 2MB)</p>
                  </div>
                </div>

                {/* Form Fields */}
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[13px] font-medium text-[#374151] mb-1.5">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        defaultValue="Amit Raj"
                        className="w-full border border-[#D1D5DB] rounded-lg px-3.5 py-2.5 text-[14px] text-[#0F172A] outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/10 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-[13px] font-medium text-[#374151] mb-1.5">
                        Designation <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        defaultValue="Import Manager"
                        className="w-full border border-[#D1D5DB] rounded-lg px-3.5 py-2.5 text-[14px] text-[#0F172A] outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/10 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[13px] font-medium text-[#374151] mb-1.5">
                        Business Type <span className="text-red-500">*</span>
                      </label>
                      <select className="w-full border border-[#D1D5DB] rounded-lg px-3.5 py-2.5 text-[14px] text-[#0F172A] outline-none focus:border-[#2563EB] bg-white appearance-none focus:ring-2 focus:ring-[#2563EB]/10 transition-all">
                        <option>Importer</option>
                        <option>Trader</option>
                        <option>Distributor</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[13px] font-medium text-[#374151] mb-1.5">
                        Industry <span className="text-red-500">*</span>
                      </label>
                      <select className="w-full border border-[#D1D5DB] rounded-lg px-3.5 py-2.5 text-[14px] text-[#0F172A] outline-none focus:border-[#2563EB] bg-white appearance-none focus:ring-2 focus:ring-[#2563EB]/10 transition-all">
                        <option>Textiles &amp; Apparel</option>
                        <option>Electronics</option>
                        <option>Food &amp; Agriculture</option>
                        <option>Chemicals</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[13px] font-medium text-[#374151] mb-1.5">
                        Years in Business <span className="text-red-500">*</span>
                      </label>
                      <select className="w-full border border-[#D1D5DB] rounded-lg px-3.5 py-2.5 text-[14px] text-[#0F172A] outline-none focus:border-[#2563EB] bg-white appearance-none focus:ring-2 focus:ring-[#2563EB]/10 transition-all">
                        <option>5-10 Years</option>
                        <option>1-5 Years</option>
                        <option>10-20 Years</option>
                        <option>20+ Years</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[13px] font-medium text-[#374151] mb-1.5">
                        Number of Employees <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        defaultValue="11 - 50"
                        className="w-full border border-[#D1D5DB] rounded-lg px-3.5 py-2.5 text-[14px] text-[#0F172A] outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/10 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[13px] font-medium text-[#374151] mb-1.5">
                      About Yourself / Company <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      value={aboutText}
                      onChange={(e) => setAboutText(e.target.value)}
                      rows={4}
                      maxLength={300}
                      className="w-full border border-[#D1D5DB] rounded-lg px-3.5 py-2.5 text-[14px] text-[#0F172A] outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/10 transition-all resize-none"
                    />
                    <div className="flex justify-end mt-1">
                      <span className="text-[12px] text-[#9CA3AF]">{aboutText.length} / 300</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-end mt-6">
                <button className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-[14px] font-semibold px-8 py-2.5 rounded-lg transition-colors">
                  Save &amp; Continue
                </button>
              </div>
            </div>
          )}

          {/* Other tabs placeholder */}
          {activeTab !== "basic" && (
            <div className="bg-white border border-[#E5E7EB] rounded-xl p-10 flex flex-col items-center justify-center text-center">
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

          {/* ── Section Accordions ──────────────────────────────────── */}
          <div className="space-y-3">
            {SECTIONS.map((s) => (
              <SectionRow key={s.id} section={s} />
            ))}
          </div>

          {/* ── CTA Banner ──────────────────────────────────────────── */}
          <div className="bg-gradient-to-r from-[#EFF6FF] to-[#F0FDF4] border border-[#BFDBFE] rounded-xl px-6 py-5 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#10B981] flex items-center justify-center shrink-0">
                <CheckCircle2 className="size-5 text-white" />
              </div>
              <div>
                <p className="text-[15px] font-bold text-[#0F172A]">Complete Your Profile &amp; Grow Globally</p>
                <p className="text-[13px] text-[#64748B]">
                  A complete profile helps you get discovered by more exporters and receive quality business opportunities.
                </p>
              </div>
            </div>
            <button className="shrink-0 border border-[#2563EB] text-[#2563EB] text-[13px] font-semibold px-5 py-2.5 rounded-lg hover:bg-[#EFF6FF] transition-colors whitespace-nowrap">
              Continue Profiling →
            </button>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="space-y-5">
          {/* Profile Completion Card */}
          <div className="bg-white border border-[#E5E7EB] rounded-xl p-5">
            <h3 className="text-[15px] font-bold text-[#0F172A] mb-4">Profile Completion</h3>
            <div className="flex items-center gap-4 mb-5">
              <CompletionRing percent={65} />
              <div>
                <p className="text-[15px] font-bold text-[#0F172A]">Almost there!</p>
                <p className="text-[12px] text-[#64748B] leading-snug mt-0.5">
                  Complete your profile to unlock more features and opportunities.
                </p>
              </div>
            </div>
            <div className="space-y-2.5">
              {COMPLETION_ITEMS.map((item) => (
                <div key={item.label} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <StatusIcon done={item.done} count={item.completed} />
                    <span className="text-[13px] text-[#374151]">{item.label}</span>
                  </div>
                  <span className="text-[12px] font-semibold text-[#64748B]">
                    {item.completed}/{item.total}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Why Complete Your Profile? */}
          <div className="bg-white border border-[#E5E7EB] rounded-xl p-5">
            <h3 className="text-[15px] font-bold text-[#0F172A] mb-4">Why Complete Your Profile?</h3>
            <ul className="space-y-3">
              {[
                { icon: User, text: "Get discovered by verified exporters" },
                { icon: Phone, text: "Receive relevant meeting invites" },
                { icon: Globe, text: "Increase your profile visibility" },
                { icon: Building2, text: "Build trust and credibility" },
              ].map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-lg bg-[#EFF6FF] flex items-center justify-center shrink-0">
                    <Icon className="size-3.5 text-[#2563EB]" />
                  </div>
                  <span className="text-[13px] text-[#374151]">{text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Need Assistance? */}
          <div className="bg-white border border-[#E5E7EB] rounded-xl p-5">
            <div className="flex items-start gap-3 mb-3">
              <div className="w-9 h-9 rounded-full bg-[#EFF6FF] flex items-center justify-center shrink-0">
                <Headphones className="size-4 text-[#2563EB]" />
              </div>
              <div>
                <p className="text-[14px] font-bold text-[#0F172A]">Need Assistance?</p>
                <p className="text-[12px] text-[#64748B] mt-0.5 leading-snug">
                  Our global trade advisors are here to help you set up your profile.
                </p>
              </div>
            </div>
            <button className="w-full border border-[#2563EB] text-[#2563EB] text-[13px] font-semibold py-2 rounded-lg hover:bg-[#EFF6FF] transition-colors">
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
