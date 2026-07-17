import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  X,
  Crown,
  Eye,
  Globe2,
  Headphones,
  Users,
  Gem,
  Target,
  ClipboardList,
  ShoppingBag,
  Building2,
  Calendar,
  FileText,
  Briefcase,
  ShieldAlert,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  ExporterPageShell,
  ExporterCard,
  ExporterBreadcrumb,
} from "@/components/exporter/exporter-page-layout";

const PLAN_CARDS = [
  {
    name: "Discovery Pass",
    price: "₹2,999",
    period: "/Meeting",
    desc: "Perfect for first-time exporters exploring global opportunities.",
    tint: "border-[#B2DDFF] bg-[#EFF8FF]",
    iconBg: "bg-[#D1E9FF] text-[#175CD3]",
    btn: "border-[#175CD3] text-[#175CD3] hover:bg-[#EFF8FF]",
    icon: ClipboardList,
    popular: false,
    cta: "View Details",
  },
  {
    name: "Buyer Growth Access",
    price: "₹14,999",
    period: "/Month",
    desc: "Designed for growing exporters to connect with serious buyers.",
    tint: "border-[#ABEFC6] bg-[#ECFDF3]",
    iconBg: "bg-[#D1FADF] text-[#039855]",
    btn: "border-[#039855] text-[#039855] hover:bg-[#ECFDF3]",
    icon: ShoppingBag,
    popular: true,
    cta: "View Details",
  },
  {
    name: "Buyer Enterprise Access",
    price: "₹49,999",
    period: "/Quarter",
    desc: "Advanced access with priority meetings & market intelligence.",
    tint: "border-[#D9D6FE] bg-[#F4F3FF]",
    iconBg: "bg-[#EBE9FE] text-[#7A5AF8]",
    btn: "border-[#7A5AF8] text-[#7A5AF8] hover:bg-[#F4F3FF]",
    icon: Crown,
    popular: false,
    cta: "View Details",
  },
  {
    name: "Custom Enterprise",
    price: "Custom",
    period: " Pricing",
    desc: "Tailored solutions for large organizations & trade bodies.",
    tint: "border-[#FEDF89] bg-[#FFFAEB]",
    iconBg: "bg-[#FEF0C7] text-[#F79009]",
    btn: "bg-[#F79009] text-white border-[#F79009] hover:bg-[#DC6803]",
    icon: Building2,
    popular: false,
    cta: "Contact AECCI",
    solidBtn: true,
  },
];

const INCLUDED = [
  "4 Private Deal Room Sessions",
  "Advanced Country Intelligence",
  "Premium Business Profile",
  "Partner Introductions (3 Exporters)",
  "Post-Meeting Opportunity Reports",
  "Email & Phone Support",
  "Session Scheduling Assistance",
  "Profile Visibility Boost",
  "Market Update Alerts",
  "Validity: 90 Days",
];

const RESTRICTIONS = [
  "No Access to Custom Reports",
  "No Dedicated Account Manager",
  "No Private Events Access",
  "Limited to 4 Sessions Only",
  "No API or Data Export",
];

const HOW_TO = [
  { step: "1", title: "Explore", desc: "Browse countries & sessions", icon: Globe2 },
  { step: "2", title: "Book Session", desc: "Choose time & confirm", icon: Calendar },
  { step: "3", title: "Join Meeting", desc: "Connect with verified buyers", icon: Users },
  { step: "4", title: "Get Report", desc: "Receive meeting summary", icon: FileText },
  { step: "5", title: "Follow Up", desc: "Convert opportunities", icon: Briefcase },
];

const CURRENT_METRICS = [
  { value: "4", label: "Private Deal Room Sessions" },
  { value: "20+", label: "Countries Access" },
  { value: "Priority", label: "Support" },
  { value: "90 Days", label: "Validity" },
];

export default function BillingPlansPage() {
  return (
    <ExporterPageShell>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <ExporterBreadcrumb
            items={[
              { label: "Dashboard", to: "/dashboard" },
              { label: "Billing & Plans" },
            ]}
          />
          <h1 className="mt-2 text-[22px] font-bold text-[#101828] sm:text-[24px]">
            My Plans & Access
          </h1>
          <p className="mt-1 max-w-2xl text-[13px] leading-relaxed text-[#667085]">
            View your current plan, upgrade, or explore other plans to grow your business
            globally.
          </p>
        </div>
        <Button
          asChild
          variant="outline"
          className="h-9 w-full shrink-0 rounded-lg border-[#B2DDFF] bg-white text-[12px] font-semibold text-[#175CD3] hover:bg-[#EFF8FF] sm:w-auto"
        >
          <Link to="/dashboard">
            <ArrowLeft className="mr-1.5 size-3.5" />
            Back to Dashboard
          </Link>
        </Button>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-2 gap-3 lg:grid-cols-5">
        <div className="rounded-xl border border-[#E4E7EC] bg-white p-4 shadow-[0_1px_2px_rgba(16,24,40,0.05)]">
          <p className="text-[10px] text-[#667085]">Current Plan</p>
          <div className="mt-1.5 flex flex-wrap items-center gap-1.5">
            <p className="text-[14px] font-bold leading-tight text-[#101828]">
              Global Growth Plan
            </p>
            <span className="rounded-full bg-[#ECFDF3] px-2 py-0.5 text-[9px] font-bold text-[#027A48]">
              Active
            </span>
          </div>
          <p className="mt-1.5 text-[10px] text-[#98A2B3]">Valid till 20 Sep 2025</p>
        </div>

        <div className="rounded-xl border border-[#E4E7EC] bg-white p-4 shadow-[0_1px_2px_rgba(16,24,40,0.05)]">
          <div className="flex items-start justify-between gap-2">
            <div>
              <p className="text-[10px] text-[#667085]">Meetings Remaining</p>
              <p className="mt-1.5 text-[20px] font-bold leading-none text-[#101828]">4 / 4</p>
              <p className="mt-1.5 text-[10px] text-[#98A2B3]">This Plan</p>
            </div>
            <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-[#ECFDF3] text-[#039855]">
              <Users className="size-4" />
            </span>
          </div>
        </div>

        <div className="rounded-xl border border-[#E4E7EC] bg-white p-4 shadow-[0_1px_2px_rgba(16,24,40,0.05)]">
          <div className="flex items-start justify-between gap-2">
            <div>
              <p className="text-[10px] text-[#667085]">Countries Access</p>
              <p className="mt-1.5 text-[20px] font-bold leading-none text-[#101828]">20+</p>
              <p className="mt-1.5 text-[10px] text-[#98A2B3]">Available</p>
            </div>
            <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-[#F4F3FF] text-[#7A5AF8]">
              <Globe2 className="size-4" />
            </span>
          </div>
        </div>

        <div className="rounded-xl border border-[#E4E7EC] bg-white p-4 shadow-[0_1px_2px_rgba(16,24,40,0.05)]">
          <div className="flex items-start justify-between gap-2">
            <div>
              <p className="text-[10px] text-[#667085]">Profile Views</p>
              <p className="mt-1.5 text-[20px] font-bold leading-none text-[#101828]">156</p>
              <p className="mt-1.5 text-[10px] text-[#98A2B3]">Last 30 days</p>
            </div>
            <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-[#FFFAEB] text-[#F79009]">
              <Eye className="size-4" />
            </span>
          </div>
        </div>

        <div className="rounded-xl border border-[#E4E7EC] bg-white p-4 shadow-[0_1px_2px_rgba(16,24,40,0.05)]">
          <div className="flex items-start justify-between gap-2">
            <div>
              <p className="text-[10px] text-[#667085]">Support</p>
              <p className="mt-1.5 text-[18px] font-bold leading-none text-[#101828]">Priority</p>
              <p className="mt-1.5 text-[10px] text-[#98A2B3]">Email & Phone</p>
            </div>
            <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-[#ECFDF3] text-[#039855]">
              <Headphones className="size-4" />
            </span>
          </div>
        </div>
      </div>

      {/* Choose plan */}
      <div>
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h2 className="flex items-center gap-2 text-[15px] font-bold text-[#101828]">
            <Target className="size-4 text-[#175CD3]" />
            Choose the Plan That Fits Your Goals
          </h2>
          <button
            type="button"
            className="flex items-center gap-1 text-[12px] font-semibold text-[#175CD3] hover:underline"
          >
            Compare All Plans
            <ArrowRight className="size-3.5" />
          </button>
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {PLAN_CARDS.map((p) => (
            <div
              key={p.name}
              className={`relative flex flex-col rounded-2xl border p-5 ${p.tint}`}
            >
              {p.popular && (
                <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 rounded-full bg-[#039855] px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-wide text-white shadow-sm">
                  Most Popular
                </span>
              )}
              <span
                className={`flex size-10 items-center justify-center rounded-xl ${p.iconBg}`}
              >
                <p.icon className="size-5" />
              </span>
              <p className="mt-3 text-[11px] font-bold uppercase tracking-wide text-[#344054]">
                {p.name}
              </p>
              <p className="mt-1.5 text-[22px] font-bold leading-none text-[#101828]">
                {p.price}
                <span className="text-[13px] font-semibold text-[#667085]">{p.period}</span>
              </p>
              <p className="mt-3 flex-1 text-[12px] leading-relaxed text-[#667085]">{p.desc}</p>
              <Button
                variant="outline"
                className={`mt-4 h-9 w-full rounded-lg border text-[12px] font-semibold ${p.btn}`}
              >
                {p.cta}
                <ArrowRight className="ml-1 size-3.5" />
              </Button>
            </div>
          ))}
        </div>
      </div>

      {/* Your Current Plan */}
      <div>
        <h2 className="text-[15px] font-bold text-[#101828]">Your Current Plan</h2>
        <ExporterCard className="mt-3 overflow-hidden border-[#ABEFC6] bg-white p-0 shadow-[0_1px_2px_rgba(16,24,40,0.05)]">
          <div className="border-b border-[#ABEFC6]/50 bg-[#ECFDF3] px-5 py-4">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex items-start gap-3">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-[#039855] text-white shadow-sm">
                  <Crown className="size-5" />
                </span>
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-[17px] font-bold text-[#101828]">Global Growth Plan</h3>
                    <span className="rounded-full bg-[#039855] px-2.5 py-0.5 text-[10px] font-bold text-white">
                      Active
                    </span>
                  </div>
                  <p className="mt-0.5 text-[12px] text-[#667085]">Valid till 20 Sep 2025</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 lg:max-w-[520px] lg:flex-1">
                {CURRENT_METRICS.map((m) => (
                  <div
                    key={m.label}
                    className="rounded-lg border border-[#ABEFC6] bg-white px-3 py-2 text-center lg:text-left"
                  >
                    <p className="text-[14px] font-bold leading-tight text-[#101828]">{m.value}</p>
                    <p className="mt-0.5 text-[9px] leading-snug text-[#667085]">{m.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-5 p-5 lg:grid-cols-[1fr_280px]">
            <div>
              <h4 className="text-[13px] font-bold text-[#101828]">
                What&apos;s Included in Your Plan
              </h4>
              <ul className="mt-3 grid gap-2.5 sm:grid-cols-2">
                {INCLUDED.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-[11px] text-[#344054]">
                    <span className="mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full bg-[#ECFDF3]">
                      <Check className="size-2.5 stroke-3 text-[#039855]" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-[#FECDCA] bg-[#FEF3F2] p-4">
              <h4 className="flex items-center gap-2 text-[13px] font-bold text-[#B42318]">
                <ShieldAlert className="size-4" />
                Restrictions
              </h4>
              <ul className="mt-3 space-y-2.5">
                {RESTRICTIONS.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-[11px] text-[#344054]">
                    <span className="mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full bg-white">
                      <X className="size-2.5 stroke-3 text-[#D92D20]" />
                    </span>
                    {item}
                  </li>
                  ))}
              </ul>
            </div>
          </div>
        </ExporterCard>
      </div>

      {/* How to use */}
      <ExporterCard>
        <h3 className="text-[15px] font-bold text-[#101828]">How to Use Your Plan</h3>
        <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          {HOW_TO.map((s, i) => (
            <div key={s.title} className="relative flex flex-1 flex-col items-center text-center">
              {i < HOW_TO.length - 1 && (
                <div className="pointer-events-none absolute top-5 left-[calc(50%+28px)] hidden h-px w-[calc(100%-20px)] border-t-2 border-dashed border-[#D0D5DD] sm:block" />
              )}
              <span className="relative z-10 flex size-10 items-center justify-center rounded-full border-2 border-[#B2DDFF] bg-[#EFF8FF] text-[#175CD3]">
                <s.icon className="size-4" />
              </span>
              <p className="mt-2.5 text-[12px] font-bold text-[#101828]">
                {s.step}. {s.title}
              </p>
              <p className="mt-0.5 text-[10px] text-[#667085]">{s.desc}</p>
            </div>
          ))}
        </div>
      </ExporterCard>

      {/* Upgrade CTA */}
      <div className="flex flex-col items-start justify-between gap-4 rounded-2xl bg-[#027A48] px-5 py-5 sm:flex-row sm:items-center sm:px-6">
        <div className="flex items-start gap-3">
          <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-white/15 text-white">
            <Gem className="size-5" />
          </span>
          <div>
            <p className="text-[14px] font-bold text-white">
              Want More Meetings & Advanced Features?
            </p>
            <p className="mt-0.5 text-[12px] text-white/80">
              Upgrade your plan to connect with more buyers and unlock premium benefits.
            </p>
          </div>
        </div>
        <Button
          variant="outline"
          className="h-9 shrink-0 rounded-lg border-white bg-transparent text-[12px] font-semibold text-white hover:bg-white/10 hover:text-white"
        >
          Explore Other Plans
          <ArrowRight className="ml-1 size-3.5" />
        </Button>
      </div>
    </ExporterPageShell>
  );
}
