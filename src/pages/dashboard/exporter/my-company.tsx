import { useState } from "react";
import {
  CloudUpload,
  Check,
  CheckCircle2,
  Building2,
  BadgeCheck,
  Package,
  Award,
  Globe,
  Landmark,
  Users,
  UserPlus,
  Lightbulb,
  FileCheck2,
  FileText,
  ChevronDown,
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

const COMPANY_ITEMS = [
  { label: "Company Information", fraction: "5/5", status: "done" as const, icon: Building2 },
  { label: "Business Verification", fraction: "0/2", status: "partial" as const, icon: BadgeCheck },
  { label: "Products / Services", fraction: "1/2", status: "partial" as const, icon: Package },
  { label: "Certifications", fraction: "0/2", status: "empty" as const, icon: Award },
  { label: "Export Details", fraction: "1/2", status: "partial" as const, icon: Globe },
  { label: "Bank Details", fraction: "0/2", status: "empty" as const, icon: Landmark },
  { label: "Team Members", fraction: "1/2", status: "partial" as const, icon: Users },
];

const WHY_COMPANY = [
  { icon: UserPlus, text: "Get discovered by verified buyers" },
  { icon: Check, text: "Receive relevant meeting invites" },
  { icon: BadgeCheck, text: "Build trust and credibility" },
  { icon: Globe, text: "Increase your global visibility" },
];

const COMPANY_TIPS = [
  "Add company logo",
  "Complete business verification",
  "Add product details",
  "Add certifications",
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
      <span className="flex size-4 shrink-0 items-center justify-center rounded-full bg-[#F79009] text-[9px] font-bold text-white">
        !
      </span>
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

const TABS = ["Company Information", "Business Verification"];

export default function MyCompanyPage() {
  const [activeTab, setActiveTab] = useState("Company Information");

  return (
    <ExporterPageShell>
      <ExporterPageHeader
        title="My Company"
        subtitle="Provide your company details to increase trust and get better matching opportunities."
        completion={65}
        completionLabel="Profile Completion"
        secondaryAction={{
          label: "View Public Company Profile",
          to: "/dashboard/my-company",
        }}
      />

      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div className="min-w-0 flex-1 overflow-x-auto">
          <ExporterTabs tabs={TABS} active={activeTab} onChange={setActiveTab} />
        </div>
        <span className="flex shrink-0 items-center gap-1.5 pb-2 text-[12px] font-semibold text-[#039855] sm:pb-0">
          <CheckCircle2 className="size-4" />
          No Documents Required
        </span>
      </div>

      <div className="grid grid-cols-1 items-start gap-4 xl:grid-cols-[minmax(0,1fr)_300px]">
        <div className="min-w-0 space-y-4">
          <ExporterCard>
            <h2 className="text-[15px] font-bold text-[#101828]">Company Information</h2>
            <div className="mt-4 grid grid-cols-1 gap-5 lg:grid-cols-[170px_1fr]">
              {/* Logo upload column */}
              <div className="space-y-3">
                <div>
                  <FieldLabel>Company Logo</FieldLabel>
                  <button
                    type="button"
                    className="flex min-h-[170px] w-full flex-col items-center justify-center rounded-xl border-2 border-dashed border-[#D0D5DD] bg-white p-4 text-center transition hover:border-[#175CD3] hover:bg-[#F9FAFB]"
                  >
                    <span className="flex size-11 items-center justify-center rounded-full bg-[#EFF8FF]">
                      <CloudUpload className="size-5 text-[#175CD3]" />
                    </span>
                    <span className="mt-2.5 text-[12px] font-semibold text-[#344054]">
                      Upload Logo
                    </span>
                    <span className="mt-0.5 text-[10px] text-[#98A2B3]">
                      JPG, PNG or SVG
                      <br />
                      (Max 2MB)
                    </span>
                  </button>
                </div>
                <div className="rounded-lg bg-[#EFF8FF] px-3 py-2.5 text-[10px] leading-relaxed text-[#175CD3]">
                  A good logo helps build trust with buyers.
                </div>
              </div>

              {/* Fields */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <FieldLabel required>Company Name</FieldLabel>
                  <FieldInput defaultValue="Raj Textiles Pvt. Ltd." />
                </div>
                <div>
                  <FieldLabel required>Legal Structure</FieldLabel>
                  <FieldSelect
                    defaultValue="Private Limited"
                    options={["Private Limited", "LLP", "Partnership", "Proprietorship"]}
                  />
                </div>
                <div>
                  <FieldLabel required>Year Established</FieldLabel>
                  <FieldInput defaultValue="2015" />
                </div>
                <div>
                  <FieldLabel required>Company Type</FieldLabel>
                  <FieldSelect
                    defaultValue="Manufacturer"
                    options={["Manufacturer", "Manufacturer & Exporter", "Trader"]}
                  />
                </div>
                <div>
                  <FieldLabel>Website</FieldLabel>
                  <FieldInput defaultValue="www.rajtextiles.com" />
                </div>
                <div>
                  <FieldLabel required>Email</FieldLabel>
                  <FieldInput defaultValue="info@rajtextiles.com" />
                </div>
                <div>
                  <FieldLabel required>Phone</FieldLabel>
                  <PhoneInput defaultValue="+91 98765 43210" />
                </div>
                <div>
                  <FieldLabel>Alternate Phone</FieldLabel>
                  <PhoneInput defaultValue="+91 91234 56789" />
                </div>
                <div className="sm:col-span-2">
                  <FieldLabel required>Head Office Address</FieldLabel>
                  <textarea
                    defaultValue={"Plot No. 123, Textile Park, Ring Road,\nSurat, Gujarat, India - 395002"}
                    className="min-h-[64px] w-full rounded-lg border border-[#D0D5DD] px-3 py-2 text-[13px] text-[#101828] outline-none focus:border-[#175CD3] focus:ring-1 focus:ring-[#175CD3]"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4 sm:col-span-2 lg:grid-cols-4">
                  <div>
                    <FieldLabel required>Country</FieldLabel>
                    <FieldSelect defaultValue="India" options={["India", "UAE", "USA"]} />
                  </div>
                  <div>
                    <FieldLabel required>State</FieldLabel>
                    <FieldSelect
                      defaultValue="Gujarat"
                      options={["Gujarat", "Maharashtra", "Delhi"]}
                    />
                  </div>
                  <div>
                    <FieldLabel required>City</FieldLabel>
                    <FieldInput defaultValue="Surat" />
                  </div>
                  <div>
                    <FieldLabel required>PIN Code</FieldLabel>
                    <FieldInput defaultValue="395002" />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <FieldLabel required>Brief About Company</FieldLabel>
                  <textarea
                    defaultValue="We are a leading manufacturer and exporter of high-quality home textiles, bed linens, bath linens and made-ups. Our products are trusted by buyers across 20+ countries."
                    className="min-h-[90px] w-full rounded-lg border border-[#D0D5DD] px-3 py-2 text-[13px] text-[#101828] outline-none focus:border-[#175CD3] focus:ring-1 focus:ring-[#175CD3]"
                  />
                  <p className="mt-1 text-right text-[10px] text-[#98A2B3]">156 / 300</p>
                </div>
              </div>
            </div>

            <div className="mt-5 flex justify-end">
              <Button className="h-10 rounded-lg bg-[#175CD3] px-5 text-[13px] font-semibold hover:bg-[#1448B0]">
                Save Company Information
              </Button>
            </div>
          </ExporterCard>

          {/* Business Verification */}
          <ExporterCard>
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex min-w-0 items-center gap-2.5">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-[#EFF8FF] text-[#175CD3]">
                  <BadgeCheck className="size-4" />
                </span>
                <div className="min-w-0">
                  <h3 className="text-[14px] font-bold text-[#101828]">
                    Business Verification{" "}
                    <span className="font-medium text-[#98A2B3]">(Optional)</span>
                  </h3>
                  <p className="truncate text-[11px] text-[#667085]">
                    Verify your business to build more trust with global buyers.
                  </p>
                </div>
              </div>
              <span className="flex shrink-0 items-center gap-1.5 text-[11px] font-semibold text-[#667085]">
                0/2 Completed
                <ChevronDown className="size-4 text-[#98A2B3]" />
              </span>
            </div>

            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl border border-[#E4E7EC] bg-white p-4">
                <div className="flex items-start gap-3">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-[#ECFDF3] text-[#039855]">
                    <FileCheck2 className="size-5" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-[13px] font-bold text-[#101828]">GST / Tax Registration</p>
                    <p className="mt-0.5 text-[11px] text-[#667085]">
                      Add your GST or Tax registration number.
                    </p>
                  </div>
                </div>
                <Button
                  variant="outline"
                  className="mt-3 h-8 rounded-lg border-[#B2DDFF] bg-white px-4 text-[11px] font-semibold text-[#175CD3] hover:bg-[#EFF8FF]"
                >
                  Add Details
                </Button>
              </div>

              <div className="rounded-xl border border-[#E4E7EC] bg-white p-4">
                <div className="flex items-start gap-3">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-[#EFF8FF] text-[#175CD3]">
                    <FileText className="size-5" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-[13px] font-bold text-[#101828]">
                      Import Export Code (IEC)
                    </p>
                    <p className="mt-0.5 text-[11px] text-[#667085]">
                      Add your IEC code issued by DGFT.
                    </p>
                  </div>
                </div>
                <Button
                  variant="outline"
                  className="mt-3 h-8 rounded-lg border-[#B2DDFF] bg-white px-4 text-[11px] font-semibold text-[#175CD3] hover:bg-[#EFF8FF]"
                >
                  Add Details
                </Button>
              </div>
            </div>
          </ExporterCard>

          {/* No documents banner */}
          <div className="flex items-start gap-3 rounded-2xl border border-[#ABEFC6] bg-[#ECFDF3] px-4 py-4 sm:px-5">
            <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[#039855] text-white">
              <CheckCircle2 className="size-4" />
            </span>
            <div>
              <p className="text-[13px] font-bold text-[#027A48]">No Documents Required!</p>
              <p className="mt-0.5 text-[12px] text-[#027A48]/85">
                You can explore and connect without uploading documents at this stage.
              </p>
            </div>
          </div>
        </div>

        <aside className="space-y-4">
          <ExporterCard>
            <h3 className="text-[14px] font-bold text-[#101828]">Company Profile Strength</h3>
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
                <span className="absolute text-[15px] font-bold text-[#101828]">65%</span>
              </div>
              <div>
                <p className="text-[13px] font-bold text-[#101828]">Good Progress!</p>
                <p className="mt-0.5 text-[11px] leading-relaxed text-[#667085]">
                  Complete remaining sections to increase your visibility.
                </p>
              </div>
            </div>
            <ul className="mt-4 space-y-2.5">
              {COMPANY_ITEMS.map((item) => (
                <li key={item.label} className="flex items-center gap-2">
                  <item.icon
                    className={`size-3.5 shrink-0 ${item.status === "empty" ? "text-[#98A2B3]" : "text-[#039855]"}`}
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
              <UserPlus className="size-4 text-[#175CD3]" />
              <h3 className="text-[13px] font-bold text-[#101828]">
                Why Add Your Company Details?
              </h3>
            </div>
            <ul className="mt-3 space-y-2.5">
              {WHY_COMPANY.map((item) => (
                <li key={item.text} className="flex items-start gap-2.5">
                  <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded border border-[#84CAFF] bg-white">
                    <item.icon className="size-3 text-[#175CD3]" />
                  </span>
                  <span className="text-[11px] leading-relaxed text-[#344054]">{item.text}</span>
                </li>
              ))}
            </ul>
          </ExporterCard>

          <ExporterCard className="border-[#FEDF89] bg-[#FFFAEB]">
            <div className="flex items-center gap-2">
              <Lightbulb className="size-4 text-[#F79009]" />
              <h3 className="text-[13px] font-bold text-[#101828]">Tips for Better Matches</h3>
            </div>
            <ul className="mt-3 space-y-2.5">
              {COMPANY_TIPS.map((tip) => (
                <li key={tip} className="flex items-start gap-2.5">
                  <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded border border-[#FEDF89] bg-white">
                    <Lightbulb className="size-3 text-[#F79009]" />
                  </span>
                  <span className="text-[11px] leading-relaxed text-[#344054]">{tip}</span>
                </li>
              ))}
            </ul>
          </ExporterCard>
        </aside>
      </div>
    </ExporterPageShell>
  );
}
