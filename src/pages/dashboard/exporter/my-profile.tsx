import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Upload,
  ChevronDown,
  ArrowRight,
  Check,
  Info,
  User,
  Building2,
  Package,
  Award,
  Landmark,
  Users,
  Settings,
  Lightbulb,
  Headphones,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  ExporterPageShell,
  ExporterPageHeader,
  ExporterTabs,
  ExporterCard,
  FieldLabel,
  FieldInput,
  FieldSelect,
} from "@/components/exporter/exporter-page-layout";

const FLAG_IN = "https://flagcdn.com/w40/in.png";

const PROFILE_ITEMS = [
  { label: "Basic Information", fraction: "5/6", status: "done" as const, icon: User },
  { label: "Business Details", fraction: "3/5", status: "partial" as const, icon: Building2 },
  { label: "Products & Services", fraction: "2/4", status: "partial" as const, icon: Package },
  { label: "Certifications", fraction: "0/3", status: "empty" as const, icon: Award },
  { label: "Banking Details", fraction: "0/3", status: "empty" as const, icon: Landmark },
  { label: "Team Members", fraction: "1/3", status: "partial" as const, icon: Users },
  { label: "Preferences", fraction: "1/2", status: "partial" as const, icon: Settings },
];

const PROFILE_TIPS = [
  "Add 5 or more products",
  "Upload company logo",
  "Add valid certifications",
  "Add team members",
];

function StatusDot({ status }: { status: "done" | "partial" | "empty" }) {
  if (status === "done") {
    return (
      <span className="flex size-4 shrink-0 items-center justify-center rounded-full bg-[#039855]">
        <Check className="size-2.5 text-white stroke-3" />
      </span>
    );
  }
  if (status === "partial") {
    return (
      <span className="size-4 shrink-0 rounded-full border-2 border-[#F79009]" />
    );
  }
  return <span className="size-4 shrink-0 rounded-full border-2 border-[#D0D5DD]" />;
}

function PhoneInput({ defaultValue }: { defaultValue: string }) {
  return (
    <div className="flex h-10 w-full items-center overflow-hidden rounded-lg border border-[#D0D5DD] bg-white focus-within:border-[#175CD3] focus-within:ring-1 focus-within:ring-[#175CD3]">
      <span className="flex h-full shrink-0 items-center gap-1 border-r border-[#E4E7EC] bg-[#F9FAFB] px-2.5">
        <img src={FLAG_IN} alt="IN" className="h-3.5 w-5 rounded-sm object-cover" />
        <ChevronDown className="size-3 text-[#98A2B3]" />
      </span>
      <input
        defaultValue={defaultValue}
        className="h-full w-full min-w-0 px-3 text-[13px] text-[#101828] outline-none"
      />
    </div>
  );
}

const TABS = [
  "Basic Information",
  "Business Details",
  "Products & Services",
  "Certifications",
  "Banking Details",
  "Team Members",
  "Preferences",
  "Preview Profile",
];

export default function MyProfilePage() {
  const [activeTab, setActiveTab] = useState("Basic Information");

  return (
    <ExporterPageShell>
      <ExporterPageHeader
        title="My Profile"
        subtitle="Complete your profile to increase visibility and get better matched opportunities."
        secondaryAction={{
          label: "View My Public Profile",
          to: "/dashboard/my-profile",
        }}
      />

      <ExporterTabs tabs={TABS} active={activeTab} onChange={setActiveTab} />

      <div className="grid grid-cols-1 items-start gap-4 xl:grid-cols-[minmax(0,1fr)_300px]">
        <div className="min-w-0 space-y-4">
          <ExporterCard>
            <h2 className="text-[15px] font-bold text-[#101828]">Basic Information</h2>
            <div className="mt-4 grid grid-cols-1 gap-5 lg:grid-cols-[180px_1fr]">
              {/* Logo column */}
              <div className="space-y-3">
                <div>
                  <FieldLabel>Profile Photo / Logo</FieldLabel>
                  <div className="flex min-h-[150px] w-full flex-col items-center justify-center rounded-xl border border-[#D0D5DD] bg-white p-4 text-center">
                    <span className="text-[36px] font-black leading-none tracking-tight text-[#0B2545]">
                      A<span className="text-[#175CD3]">BC</span>
                    </span>
                    <span className="mt-1 h-0.5 w-10 rounded-full bg-[#D92D20]" />
                    <span className="mt-2 text-[10px] font-bold tracking-wide text-[#0B2545]">
                      ABC EXPORTS PVT. LTD.
                    </span>
                  </div>
                </div>
                <button
                  type="button"
                  className="flex w-full flex-col items-center justify-center rounded-xl border border-[#D0D5DD] bg-white px-3 py-2.5 text-center transition hover:border-[#175CD3] hover:bg-[#F9FAFB]"
                >
                  <span className="flex items-center gap-1.5 text-[12px] font-semibold text-[#344054]">
                    <Upload className="size-3.5 text-[#475467]" />
                    Upload New Logo
                  </span>
                  <span className="mt-0.5 text-[10px] text-[#98A2B3]">
                    JPG, PNG or SVG (Max 2MB)
                  </span>
                </button>
              </div>

              {/* Fields */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <FieldLabel required>Company / Business Name</FieldLabel>
                  <FieldInput defaultValue="ABC Exports Pvt. Ltd." />
                </div>
                <div>
                  <FieldLabel required>Business Type</FieldLabel>
                  <FieldSelect
                    defaultValue="Manufacturer"
                    options={["Manufacturer", "Exporter", "Trader"]}
                  />
                </div>
                <div>
                  <FieldLabel required>Year Established</FieldLabel>
                  <FieldInput defaultValue="2015" />
                </div>
                <div>
                  <FieldLabel required>Legal Structure</FieldLabel>
                  <FieldSelect
                    defaultValue="Private Limited"
                    options={["Private Limited", "LLP", "Partnership", "Proprietorship"]}
                  />
                </div>
                <div>
                  <FieldLabel>Website</FieldLabel>
                  <FieldInput defaultValue="www.abcexports.com" />
                </div>
                <div>
                  <FieldLabel required>Email</FieldLabel>
                  <FieldInput defaultValue="info@abcexports.com" />
                </div>
                <div>
                  <FieldLabel required>Phone</FieldLabel>
                  <PhoneInput defaultValue="+91 98765 43210" />
                </div>
              </div>
            </div>

            <div className="mt-5 flex flex-col-reverse justify-end gap-2 sm:flex-row">
              <Button
                variant="outline"
                className="h-10 w-full rounded-lg border-[#D0D5DD] bg-white text-[13px] font-semibold text-[#344054] sm:w-auto"
              >
                Cancel
              </Button>
              <Button className="h-10 w-full rounded-lg bg-[#175CD3] px-5 text-[13px] font-semibold hover:bg-[#1448B0] sm:w-auto">
                Save & Continue
              </Button>
            </div>
          </ExporterCard>

          <ExporterCard>
            <h2 className="text-[15px] font-bold text-[#101828]">Registered Address</h2>
            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <FieldLabel required>Address Line 1</FieldLabel>
                <FieldInput defaultValue="Plot No. 123, Industrial Area, Phase 2" />
              </div>
              <div>
                <FieldLabel>Address Line 2</FieldLabel>
                <FieldInput defaultValue="Near Export Hub" />
              </div>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-4 lg:grid-cols-4">
              <div>
                <FieldLabel required>Country</FieldLabel>
                <FieldSelect defaultValue="India" options={["India", "UAE", "USA"]} />
              </div>
              <div>
                <FieldLabel required>State</FieldLabel>
                <FieldSelect
                  defaultValue="Maharashtra"
                  options={["Maharashtra", "Gujarat", "Delhi"]}
                />
              </div>
              <div>
                <FieldLabel required>City</FieldLabel>
                <FieldSelect defaultValue="Mumbai" options={["Mumbai", "Pune", "Nagpur"]} />
              </div>
              <div>
                <FieldLabel required>PIN Code</FieldLabel>
                <FieldInput defaultValue="400701" />
              </div>
            </div>

            <div className="mt-5 flex flex-wrap items-center gap-3">
              <span className="flex items-center gap-1.5 text-[14px] font-bold text-[#101828]">
                Communication Address
                <Info className="size-3.5 text-[#98A2B3]" />
              </span>
              <button
                type="button"
                role="switch"
                aria-checked="true"
                className="relative h-5 w-9 shrink-0 rounded-full bg-[#039855]"
              >
                <span className="absolute top-0.5 left-[18px] size-4 rounded-full bg-white shadow" />
              </button>
              <span className="text-[12px] text-[#667085]">Same as Registered Address</span>
            </div>

            <div className="mt-6 flex flex-col justify-center gap-2 sm:flex-row">
              <Button className="h-10 w-full rounded-lg bg-[#175CD3] px-6 text-[13px] font-semibold hover:bg-[#1448B0] sm:w-auto">
                Save & Continue
              </Button>
              <Button
                variant="outline"
                className="h-10 w-full rounded-lg border-[#D0D5DD] bg-white px-6 text-[13px] font-semibold text-[#344054] sm:w-auto"
              >
                Save as Draft
              </Button>
            </div>
          </ExporterCard>
        </div>

        <aside className="space-y-4">
          <ExporterCard>
            <h3 className="text-[14px] font-bold text-[#101828]">Profile Completion</h3>
            <div className="mt-4 flex items-start gap-3">
              <div className="relative flex size-[72px] shrink-0 items-center justify-center">
                <svg className="size-[72px] -rotate-90" viewBox="0 0 36 36">
                  <circle cx="18" cy="18" r="14" fill="none" stroke="#E4E7EC" strokeWidth="3" />
                  <circle
                    cx="18"
                    cy="18"
                    r="14"
                    fill="none"
                    stroke="#039855"
                    strokeWidth="3"
                    strokeDasharray="57 88"
                    strokeLinecap="round"
                  />
                </svg>
                <span className="absolute text-[15px] font-bold text-[#039855]">65%</span>
              </div>
              <div>
                <p className="text-[13px] font-bold text-[#101828]">Almost there!</p>
                <p className="mt-0.5 text-[11px] leading-relaxed text-[#667085]">
                  Complete your profile to get better matched opportunities.
                </p>
              </div>
            </div>
            <ul className="mt-4 space-y-2.5">
              {PROFILE_ITEMS.map((item) => (
                <li key={item.label} className="flex items-center gap-2">
                  <item.icon
                    className={`size-3.5 shrink-0 ${item.status === "empty" ? "text-[#98A2B3]" : "text-[#475467]"}`}
                  />
                  <span className="min-w-0 flex-1 truncate text-[11px] text-[#344054]">
                    {item.label}
                  </span>
                  <span className="shrink-0 text-[10px] text-[#98A2B3]">{item.fraction}</span>
                  <StatusDot status={item.status} />
                </li>
              ))}
            </ul>
          </ExporterCard>

          <ExporterCard className="border-[#D1E9FF] bg-[#EFF8FF]">
            <div className="flex items-center gap-2">
              <Lightbulb className="size-4 text-[#175CD3]" />
              <h3 className="text-[13px] font-bold text-[#101828]">Profile Tips</h3>
            </div>
            <p className="mt-1.5 text-[11px] leading-relaxed text-[#667085]">
              A complete profile increases your visibility and boosts meeting requests.
            </p>
            <ul className="mt-3 space-y-2">
              {PROFILE_TIPS.map((tip) => (
                <li key={tip} className="flex items-center gap-2">
                  <span className="flex size-4 shrink-0 items-center justify-center rounded-full bg-[#039855]">
                    <Check className="size-2.5 text-white stroke-3" />
                  </span>
                  <span className="text-[11px] text-[#344054]">{tip}</span>
                </li>
              ))}
            </ul>
            <button
              type="button"
              className="mt-3 flex items-center gap-1 text-[11px] font-semibold text-[#175CD3] hover:underline"
            >
              View All Tips
              <ArrowRight className="size-3" />
            </button>
          </ExporterCard>

          <ExporterCard className="border-[#E4E7EC] bg-[#F9FAFB]">
            <div className="flex items-start gap-3">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-white">
                <Headphones className="size-5 text-[#175CD3]" />
              </div>
              <div>
                <h3 className="text-[13px] font-bold text-[#101828]">Need Assistance?</h3>
                <p className="mt-1 text-[11px] leading-relaxed text-[#667085]">
                  Our team is here to help you complete your profile.
                </p>
              </div>
            </div>
            <Button
              asChild
              variant="outline"
              className="mt-4 h-9 w-full rounded-lg border-[#D0D5DD] bg-white text-[12px] font-semibold text-[#175CD3] shadow-sm hover:bg-white"
            >
              <Link to="/dashboard/need-help">Contact Support</Link>
            </Button>
          </ExporterCard>
        </aside>
      </div>
    </ExporterPageShell>
  );
}
