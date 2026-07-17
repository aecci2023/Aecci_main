import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Upload,
  ChevronDown,
  Check,
  User,
  Phone,
  Building2,
  Package,
  Settings,
  Share2,
  FileText,
  Target,
  TrendingUp,
  Shield,
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

const PROFILE_ITEMS = [
  { label: "Basic information", fraction: "5/5", status: "done" as const, icon: User },
  { label: "Contact Details", fraction: "3/5", status: "partial" as const, icon: Phone },
  { label: "Business Details", fraction: "2/5", status: "partial" as const, icon: Building2 },
  { label: "Products / Services", fraction: "2/5", status: "partial" as const, icon: Package },
  { label: "Preferences", fraction: "1/5", status: "empty" as const, icon: Settings },
  { label: "Social Links", fraction: "0/3", status: "empty" as const, icon: Share2 },
  { label: "Documents", fraction: "1/3", status: "empty" as const, icon: FileText },
];

const WHY_COMPLETE = [
  { icon: Target, text: "Get discovered by verified buyers" },
  { icon: Phone, text: "Receive relevant meeting invites" },
  { icon: TrendingUp, text: "Increase your profile visibility" },
  { icon: Shield, text: "Build trust and credibility" },
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
  "Basic Information",
  "Contact Details",
  "Business Details",
  "Products / Services",
  "Preferences",
  "Social Links",
  "Preview",
];

const ACCORDION = [
  { title: "Contact Details", progress: "1/5 Completed" },
  { title: "Business Details", progress: "0/5 Completed" },
  { title: "Products / Services", progress: "0/4 Completed" },
  { title: "Preferences", progress: "0/3 Completed" },
  { title: "Social Links", progress: "0/2 Completed" },
  { title: "Documents", progress: "2/4 Completed" },
];

export default function MyProfilePage() {
  const [activeTab, setActiveTab] = useState("Basic Information");

  return (
    <ExporterPageShell>
      <ExporterPageHeader
        title="My Profile"
        subtitle="Complete your profile to get better visibility and more relevant opportunities."
        completion={65}
        secondaryAction={{
          label: "Preview Public Profile",
          to: "/dashboard/my-profile",
        }}
      />

      <ExporterTabs tabs={TABS} active={activeTab} onChange={setActiveTab} />

      <div className="grid grid-cols-1 items-start gap-4 xl:grid-cols-[minmax(0,1fr)_300px]">
        <div className="min-w-0 space-y-4">
          <ExporterCard>
            <h2 className="text-[15px] font-bold text-[#101828]">
              Basic Information
            </h2>
            <div className="mt-4 grid grid-cols-1 gap-5 lg:grid-cols-[140px_1fr]">
              <div className="flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-[#D0D5DD] bg-[#F9FAFB] p-4 text-center">
                <Upload className="size-8 text-[#98A2B3]" />
                <p className="mt-2 text-[11px] font-semibold text-[#344054]">
                  Upload Photo
                </p>
                <p className="text-[10px] text-[#98A2B3]">JPG, PNG (Max 2MB)</p>
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <FieldLabel>Full Name</FieldLabel>
                  <FieldInput defaultValue="Amit Raj" />
                </div>
                <div>
                  <FieldLabel>Designation</FieldLabel>
                  <FieldInput defaultValue="Export Manager" />
                </div>
                <div>
                  <FieldLabel>Business Type</FieldLabel>
                  <FieldSelect
                    defaultValue="Exporter"
                    options={["Exporter", "Importer", "Both"]}
                  />
                </div>
                <div>
                  <FieldLabel>Industry</FieldLabel>
                  <FieldSelect
                    defaultValue="Textiles & Apparel"
                    options={[
                      "Textiles & Apparel",
                      "Food & Beverages",
                      "Construction",
                    ]}
                  />
                </div>
                <div>
                  <FieldLabel>Years in Business</FieldLabel>
                  <FieldSelect
                    defaultValue="5-10 Years"
                    options={["1-3 Years", "5-10 Years", "10+ Years"]}
                  />
                </div>
                <div>
                  <FieldLabel>Number of Employees</FieldLabel>
                  <FieldSelect
                    defaultValue="11 - 50"
                    options={["1-10", "11 - 50", "51 - 200"]}
                  />
                </div>
                <div className="sm:col-span-2">
                  <FieldLabel>About Yourself / Company</FieldLabel>
                  <textarea
                    defaultValue="We are a leading textile exporter specializing in home textiles and apparel. With over 8 years of experience, we serve clients across 15+ countries."
                    className="min-h-[90px] w-full rounded-lg border border-[#D0D5DD] bg-white px-3 py-2 text-[13px] text-[#101828] outline-none focus:border-[#175CD3]"
                  />
                </div>
              </div>
            </div>
            <div className="mt-5 flex justify-end">
              <Button className="h-10 rounded-lg bg-[#175CD3] px-5 text-[13px] font-semibold hover:bg-[#1448B0]">
                Save & Continue
              </Button>
            </div>
          </ExporterCard>

          <div className="space-y-2">
            {ACCORDION.map((item) => (
              <div
                key={item.title}
                className="flex items-center justify-between rounded-xl border border-[#E4E7EC] bg-white px-4 py-3"
              >
                <div className="flex items-center gap-3">
                  <span className="flex size-8 items-center justify-center rounded-lg bg-[#EFF8FF] text-[#175CD3]">
                    <Check className="size-4" />
                  </span>
                  <span className="text-[13px] font-semibold text-[#101828]">
                    {item.title}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-[11px] text-[#667085]">
                  {item.progress}
                  <ChevronDown className="size-4" />
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between rounded-2xl border border-[#ABEFC6] bg-[#ECFDF3] px-5 py-4">
            <div>
              <p className="text-[14px] font-bold text-[#027A48]">
                Complete Your Profile & Grow Globally
              </p>
              <p className="text-[12px] text-[#039855]">
                Finish remaining sections to unlock better matches
              </p>
            </div>
            <Button className="h-9 rounded-lg bg-[#039855] text-[12px] font-semibold hover:bg-[#027A48]">
              Continue Profiling
            </Button>
          </div>
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
                    stroke="#2DD4BF"
                    strokeWidth="3"
                    strokeDasharray="57 88"
                    strokeLinecap="round"
                  />
                </svg>
                <span className="absolute text-[15px] font-bold text-[#101828]">65%</span>
              </div>
              <div>
                <p className="text-[13px] font-bold text-[#101828]">Almost there!</p>
                <p className="mt-0.5 text-[11px] leading-relaxed text-[#667085]">
                  Complete your profile to unlock more features and opportunities.
                </p>
              </div>
            </div>
            <ul className="mt-4 space-y-2.5">
              {PROFILE_ITEMS.map((item) => (
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
              Why Complete Your Profile?
            </h3>
            <ul className="mt-3 space-y-2.5">
              {WHY_COMPLETE.map((item) => (
                <li key={item.text} className="flex items-start gap-2.5">
                  <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded border border-[#84CAFF] bg-white">
                    <item.icon className="size-3 text-[#175CD3]" />
                  </span>
                  <span className="text-[11px] leading-relaxed text-[#344054]">{item.text}</span>
                </li>
              ))}
            </ul>
          </ExporterCard>

          <ExporterCard className="border-[#E4E7EC] bg-[#F9FAFB]">
            <div className="flex items-start gap-3">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-[#EFF8FF]">
                <Headphones className="size-5 text-[#175CD3]" />
              </div>
              <div>
                <h3 className="text-[13px] font-bold text-[#101828]">Need Assistance?</h3>
                <p className="mt-1 text-[11px] leading-relaxed text-[#667085]">
                  Our global trade advisors are here to help you set up your profile.
                </p>
              </div>
            </div>
            <Button
              asChild
              variant="outline"
              className="mt-4 h-9 w-full rounded-lg border-[#D0D5DD] bg-white text-[12px] font-semibold text-[#175CD3] shadow-sm hover:bg-white"
            >
              <Link to="/dashboard/submit-questions">Contact Support</Link>
            </Button>
          </ExporterCard>
        </aside>
      </div>
    </ExporterPageShell>
  );
}
