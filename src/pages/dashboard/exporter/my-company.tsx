import { useState } from "react";
import {
  Upload,
  Check,
  Building2,
  BadgeCheck,
  Package,
  Award,
  Globe,
  Landmark,
  Users,
  UserPlus,
  Lightbulb,
  FileText,
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

      <ExporterTabs tabs={TABS} active={activeTab} onChange={setActiveTab} />

      <div className="grid grid-cols-1 items-start gap-4 xl:grid-cols-[minmax(0,1fr)_300px]">
        <div className="space-y-4">
          <ExporterCard>
            <h2 className="text-[15px] font-bold text-[#101828]">
              Company Information
            </h2>
            <div className="mt-4 grid grid-cols-1 gap-5 lg:grid-cols-[120px_1fr]">
              <div className="flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-[#D0D5DD] bg-[#F9FAFB] p-4">
                <Upload className="size-7 text-[#98A2B3]" />
                <p className="mt-2 text-[10px] text-[#98A2B3]">Upload Logo</p>
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <FieldLabel>Company Name</FieldLabel>
                  <FieldInput defaultValue="Raj Textiles Pvt. Ltd." />
                </div>
                <div>
                  <FieldLabel>Legal Structure</FieldLabel>
                  <FieldSelect
                    defaultValue="Private Limited"
                    options={["Private Limited", "LLP", "Partnership"]}
                  />
                </div>
                <div>
                  <FieldLabel>Year Established</FieldLabel>
                  <FieldInput defaultValue="2016" />
                </div>
                <div>
                  <FieldLabel>Company Type</FieldLabel>
                  <FieldSelect
                    defaultValue="Manufacturer & Exporter"
                    options={["Manufacturer & Exporter", "Trader", "Both"]}
                  />
                </div>
                <div>
                  <FieldLabel>Website</FieldLabel>
                  <FieldInput defaultValue="www.rajtextiles.com" />
                </div>
                <div>
                  <FieldLabel>Email</FieldLabel>
                  <FieldInput defaultValue="info@rajtextiles.com" />
                </div>
                <div>
                  <FieldLabel>Phone</FieldLabel>
                  <FieldInput defaultValue="+91 98765 43210" />
                </div>
                <div>
                  <FieldLabel>Country</FieldLabel>
                  <FieldSelect defaultValue="India" options={["India", "UAE"]} />
                </div>
                <div className="sm:col-span-2">
                  <FieldLabel>Head Office Address</FieldLabel>
                  <FieldInput defaultValue="Plot 45, Industrial Area, Surat, Gujarat" />
                </div>
                <div>
                  <FieldLabel>State</FieldLabel>
                  <FieldInput defaultValue="Gujarat" />
                </div>
                <div>
                  <FieldLabel>City</FieldLabel>
                  <FieldInput defaultValue="Surat" />
                </div>
                <div>
                  <FieldLabel>PIN Code</FieldLabel>
                  <FieldInput defaultValue="395002" />
                </div>
                <div className="sm:col-span-2">
                  <FieldLabel>Brief About Company</FieldLabel>
                  <textarea
                    defaultValue="Raj Textiles is a leading manufacturer and exporter of home textiles and apparel products."
                    className="min-h-[80px] w-full rounded-lg border border-[#D0D5DD] px-3 py-2 text-[13px] outline-none"
                  />
                </div>
              </div>
            </div>
            <div className="mt-5 flex justify-end">
              <Button className="h-10 rounded-lg bg-[#175CD3] px-5 text-[13px] font-semibold hover:bg-[#1448B0]">
                Save Company Information
              </Button>
            </div>
          </ExporterCard>

          <ExporterCard>
            <div className="flex items-center justify-between">
              <h3 className="text-[14px] font-bold text-[#101828]">
                Business Verification (Optional)
              </h3>
              <span className="text-[11px] text-[#667085]">0/2 Completed</span>
            </div>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {["GST / Tax Registration", "Import Export Code (IEC)"].map(
                (doc) => (
                  <div
                    key={doc}
                    className="flex items-center justify-between rounded-xl border border-[#E4E7EC] bg-[#F9FAFB] px-4 py-3"
                  >
                    <span className="text-[12px] font-medium text-[#344054]">
                      {doc}
                    </span>
                    <button
                      type="button"
                      className="text-[11px] font-semibold text-[#175CD3]"
                    >
                      Add Details
                    </button>
                  </div>
                )
              )}
            </div>
          </ExporterCard>
        </div>

        <aside className="space-y-4 xl:sticky xl:top-4">
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
                    stroke="#2DD4BF"
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
                    className={`size-3.5 shrink-0 ${item.status === "empty" ? "text-[#98A2B3]" : "text-[#2DD4BF]"}`}
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
            <h3 className="text-[13px] font-bold text-[#101828]">
              Why Add Your Company Details?
            </h3>
            <ul className="mt-3 space-y-2.5">
              {WHY_COMPANY.map((item) => (
                <li key={item.text} className="flex items-start gap-2.5">
                  <item.icon className="mt-0.5 size-3.5 shrink-0 text-[#175CD3]" />
                  <span className="text-[11px] leading-relaxed text-[#344054]">{item.text}</span>
                </li>
              ))}
            </ul>
          </ExporterCard>

          <ExporterCard className="border-[#FEE4B8] bg-[#FFFAEB]">
            <div className="flex items-center gap-2">
              <Lightbulb className="size-4 text-[#F79009]" />
              <h3 className="text-[13px] font-bold text-[#101828]">Tips for Better Matches</h3>
            </div>
            <ul className="mt-3 space-y-2">
              {COMPANY_TIPS.map((tip) => (
                <li key={tip} className="flex items-start gap-2">
                  <FileText className="mt-0.5 size-3.5 shrink-0 text-[#F79009]" />
                  <span className="text-[11px] text-[#344054]">{tip}</span>
                </li>
              ))}
            </ul>
          </ExporterCard>
        </aside>
      </div>
    </ExporterPageShell>
  );
}
