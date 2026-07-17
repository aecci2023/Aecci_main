import { useState } from "react";
import {
  Lightbulb,
  Check,
  ClipboardList,
  Package,
  Globe,
  Users,
  FileText,
  TrendingUp,
  Eye,
  Plus,
  Zap,
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

const REQUIREMENT_ITEMS = [
  { label: "Requirements Overview", fraction: "4/4", status: "done" as const, icon: ClipboardList },
  { label: "Products / Services", fraction: "3/3", status: "done" as const, icon: Package },
  { label: "Target Markets", fraction: "3/3", status: "done" as const, icon: Globe },
  { label: "Buyer Preferences", fraction: "4/5", status: "partial" as const, icon: Users },
  { label: "Additional Details", fraction: "3/4", status: "partial" as const, icon: FileText },
  { label: "Documents (Optional)", fraction: "1/2", status: "partial" as const, icon: FileText },
];

const QUICK_TIPS = [
  "Be specific about your products and quality",
  "Mention your expected quantities",
  "Add preferred countries for better matches",
  "Share your delivery timeline",
  "Add any certifications you have",
];

const ACTIVE_REQUIREMENTS = [
  {
    title: "Looking for Buyers – Home Textiles",
    date: "Created on 20 May 2025",
    status: "Active",
    statusClass: "bg-[#ECFDF3] text-[#027A48]",
    iconBg: "bg-[#ECFDF3] text-[#039855]",
    views: 25,
  },
  {
    title: "Looking for Distributors – Bath Linen",
    date: "Updated on 18 May 2025",
    status: "Draft",
    statusClass: "bg-[#FFFAEB] text-[#B54708]",
    iconBg: "bg-[#FEF3F2] text-[#D92D20]",
    views: 10,
  },
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

const TABS = [
  "Requirements Profile",
  "Products / Services",
  "Target Markets",
  "Buyer Preferences",
  "Additional Details",
];

const QUICK_INFO = [
  { label: "Product Category", value: "Home Textiles" },
  { label: "Quality Preference", value: "Premium Quality" },
  { label: "Payment Terms", value: "LC at Sight" },
  { label: "Delivery Terms", value: "FOB" },
  { label: "Certification", value: "OEKO-TEX" },
];

export default function MyRequirementsPage() {
  const [activeTab, setActiveTab] = useState("Requirements Profile");

  return (
    <ExporterPageShell>
      <ExporterPageHeader
        title="My Requirements"
        subtitle="Tell us what you are looking for so we can match you with the right buyers and opportunities."
        completion={80}
        completionLabel="Requirements Completion"
      />

      <ExporterTabs tabs={TABS} active={activeTab} onChange={setActiveTab} />

      <div className="grid grid-cols-1 items-start gap-4 xl:grid-cols-[minmax(0,1fr)_300px]">
        <div className="space-y-4">
          <div className="rounded-xl border border-[#B2DDFF] bg-[#EFF8FF] px-4 py-3">
            <div className="flex items-start gap-2">
              <Lightbulb className="mt-0.5 size-4 text-[#175CD3]" />
              <div className="flex-1">
                <p className="text-[12px] font-semibold text-[#175CD3]">
                  Better Requirements = Better Matches
                </p>
                <p className="text-[11px] text-[#667085]">
                  Provide detailed requirements to get matched with relevant
                  buyers and opportunities.
                </p>
              </div>
              <button
                type="button"
                className="text-[11px] font-semibold text-[#175CD3]"
              >
                View Tips
              </button>
            </div>
          </div>

          <ExporterCard>
            <h2 className="text-[15px] font-bold text-[#101828]">
              Requirements Overview
            </h2>
            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <FieldLabel>I am looking for</FieldLabel>
                <FieldSelect defaultValue="Buyers" options={["Buyers", "Distributors"]} />
              </div>
              <div>
                <FieldLabel>Requirement Type</FieldLabel>
                <FieldSelect
                  defaultValue="Regular Supply"
                  options={["Regular Supply", "One-time Order"]}
                />
              </div>
              <div className="sm:col-span-2">
                <FieldLabel>Title</FieldLabel>
                <FieldInput defaultValue="Looking for Buyers – Home Textiles (Bed Linen, Bath Linen)" />
              </div>
              <div className="sm:col-span-2">
                <FieldLabel>Description</FieldLabel>
                <textarea
                  defaultValue="We are looking for reliable buyers for our home textile products including bed linen and bath linen. We offer premium quality products with competitive pricing."
                  className="min-h-[100px] w-full rounded-lg border border-[#D0D5DD] px-3 py-2 text-[13px] outline-none"
                />
                <p className="mt-1 text-right text-[10px] text-[#98A2B3]">
                  178/500
                </p>
              </div>
              <div>
                <FieldLabel>Expected Annual Quantity</FieldLabel>
                <FieldSelect
                  defaultValue="50 - 100 Metric Tons"
                  options={["50 - 100 Metric Tons", "100+ Metric Tons"]}
                />
              </div>
              <div>
                <FieldLabel>Expected Order Value (USD)</FieldLabel>
                <FieldSelect
                  defaultValue="1 - 5 Million USD"
                  options={["1 - 5 Million USD", "5+ Million USD"]}
                />
              </div>
              <div>
                <FieldLabel>Preferred Start Timeline</FieldLabel>
                <FieldSelect
                  defaultValue="Within 1 Month"
                  options={["Within 1 Month", "Within 3 Months"]}
                />
              </div>
              <div>
                <FieldLabel>Duration of Engagement</FieldLabel>
                <FieldSelect
                  defaultValue="Long Term (1+ Year)"
                  options={["Long Term (1+ Year)", "Short Term"]}
                />
              </div>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-5">
              {QUICK_INFO.map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl border border-[#E4E7EC] bg-[#F9FAFB] p-3 text-center"
                >
                  <p className="text-[9px] font-medium text-[#98A2B3]">
                    {item.label}
                  </p>
                  <p className="mt-1 text-[11px] font-semibold text-[#101828]">
                    {item.value}
                  </p>
                  <button
                    type="button"
                    className="mt-1 text-[10px] font-semibold text-[#175CD3]"
                  >
                    Edit
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-5 flex justify-end gap-2">
              <Button
                variant="outline"
                className="h-10 rounded-lg border-[#175CD3] text-[13px] font-semibold text-[#175CD3]"
              >
                Save as Draft
              </Button>
              <Button className="h-10 rounded-lg bg-[#175CD3] px-5 text-[13px] font-semibold hover:bg-[#1448B0]">
                Save & Continue
              </Button>
            </div>
          </ExporterCard>
        </div>

        <aside className="space-y-4 xl:sticky xl:top-4">
          <ExporterCard>
            <h3 className="text-[14px] font-bold text-[#101828]">
              Requirement Profile Strength
            </h3>
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
                    strokeDasharray="70 88"
                    strokeLinecap="round"
                  />
                </svg>
                <span className="absolute text-[15px] font-bold text-[#101828]">80%</span>
              </div>
              <div>
                <p className="text-[13px] font-bold text-[#101828]">Great!</p>
                <p className="mt-0.5 text-[11px] leading-relaxed text-[#667085]">
                  Your requirements profile looks good.
                </p>
              </div>
            </div>
            <ul className="mt-4 space-y-2.5">
              {REQUIREMENT_ITEMS.map((item) => (
                <li key={item.label} className="flex items-center gap-2">
                  <item.icon className="size-3.5 shrink-0 text-[#039855]" />
                  <span className="min-w-0 flex-1 truncate text-[11px] text-[#344054]">
                    {item.label}
                  </span>
                  <span
                    className={`shrink-0 text-[10px] ${item.status === "done" ? "text-[#027A48]" : "text-[#344054]"}`}
                  >
                    {item.fraction}
                  </span>
                  <StatusDot status={item.status} />
                </li>
              ))}
            </ul>
            <Button
              variant="outline"
              className="mt-4 h-9 w-full rounded-lg border-[#D0D5DD] bg-white text-[12px] font-semibold text-[#175CD3]"
            >
              <TrendingUp className="mr-1.5 size-3.5" />
              Improve Profile
            </Button>
          </ExporterCard>

          <ExporterCard className="border-[#ABEFC6] bg-[#ECFDF3]">
            <div className="flex items-center gap-2">
              <Lightbulb className="size-4 text-[#039855]" />
              <h3 className="text-[13px] font-bold text-[#101828]">Quick Tips</h3>
            </div>
            <ul className="mt-3 space-y-2">
              {QUICK_TIPS.map((tip) => (
                <li key={tip} className="flex items-start gap-2">
                  <Zap className="mt-0.5 size-3.5 shrink-0 text-[#F79009]" />
                  <span className="text-[11px] leading-relaxed text-[#344054]">{tip}</span>
                </li>
              ))}
            </ul>
          </ExporterCard>

          <ExporterCard>
            <div className="flex items-center justify-between gap-2">
              <h3 className="text-[13px] font-bold text-[#101828]">
                Your Active Requirements
              </h3>
              <button
                type="button"
                className="flex items-center gap-1 text-[10px] font-semibold text-[#175CD3]"
              >
                <Plus className="size-3" />
                Add New Requirement
              </button>
            </div>
            <div className="mt-3 space-y-3">
              {ACTIVE_REQUIREMENTS.map((req) => (
                <div
                  key={req.title}
                  className="flex items-start gap-2.5 rounded-lg border border-[#E4E7EC] p-3"
                >
                  <span
                    className={`flex size-8 shrink-0 items-center justify-center rounded-lg ${req.iconBg}`}
                  >
                    <ClipboardList className="size-4" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-[11px] font-semibold leading-tight text-[#101828]">
                      {req.title}
                    </p>
                    <p className="mt-0.5 text-[10px] text-[#98A2B3]">{req.date}</p>
                    <div className="mt-1.5 flex items-center gap-2">
                      <span
                        className={`rounded-full px-2 py-0.5 text-[9px] font-bold ${req.statusClass}`}
                      >
                        {req.status}
                      </span>
                      <span className="flex items-center gap-0.5 text-[10px] text-[#98A2B3]">
                        <Eye className="size-3" />
                        {req.views}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button
              type="button"
              className="mt-3 w-full text-center text-[11px] font-semibold text-[#175CD3]"
            >
              View All Requirements →
            </button>
          </ExporterCard>
        </aside>
      </div>
    </ExporterPageShell>
  );
}
