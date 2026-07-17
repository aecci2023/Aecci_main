import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Check,
  X,
  Crown,
  Calendar,
  Globe2,
  Eye,
  Headphones,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  ExporterPageShell,
  ExporterCard,
} from "@/components/exporter/exporter-page-layout";

const STATS = [
  { label: "Current Plan", value: "Global Growth", sub: "Active", icon: Crown, highlight: true },
  { label: "Meetings", value: "4/4", sub: "Used this cycle", icon: Calendar },
  { label: "Countries", value: "20+", sub: "Market access", icon: Globe2 },
  { label: "Profile Views", value: "156", sub: "Last 30 days", icon: Eye },
  { label: "Support", value: "Priority", sub: "Response under 4h", icon: Headphones },
];

const PLANS = [
  {
    name: "Discovery Pass",
    price: "$49",
    period: "/month",
    desc: "Explore markets and intelligence basics.",
    features: ["5 country briefs", "2 report downloads", "Community access"],
    popular: false,
  },
  {
    name: "Buyer Growth",
    price: "$199",
    period: "/month",
    desc: "Meet buyers and join deal rooms.",
    features: ["4 meetings / month", "20+ countries", "Partner brief access"],
    popular: true,
  },
  {
    name: "Buyer Enterprise",
    price: "$499",
    period: "/month",
    desc: "Scale outreach with dedicated support.",
    features: ["12 meetings / month", "Full report library", "Analyst office hours"],
    popular: false,
  },
  {
    name: "Custom Enterprise",
    price: "Contact",
    period: "",
    desc: "Tailored programs for large export houses.",
    features: ["Unlimited corridors", "Custom research", "Dedicated manager"],
    popular: false,
  },
];

const INCLUDED = [
  "Deal room session booking",
  "Verified partner directory",
  "Country intelligence snapshots",
  "Document vault storage",
  "Priority email support",
];

const RESTRICTIONS = [
  "No white-label reporting",
  "Limited API integrations",
  "Standard SLA on custom research",
];

const STEPS = [
  { n: 1, title: "Complete your company profile", desc: "Unlock matching and visibility." },
  { n: 2, title: "Browse target countries", desc: "Use intelligence and reports to prioritize." },
  { n: 3, title: "Book deal room meetings", desc: "Use your monthly meeting allowance." },
  { n: 4, title: "Share documents securely", desc: "Upload catalogs and compliance files." },
  { n: 5, title: "Track outcomes", desc: "Review sessions and follow-up tasks." },
];

export default function UserInvoicesPage() {
  return (
    <ExporterPageShell>
      <Link
        to="/dashboard"
        className="inline-flex items-center gap-1 text-[12px] font-semibold text-[#175CD3]"
      >
        <ArrowLeft className="size-3.5" />
        Back to Dashboard
      </Link>

      <div className="space-y-5">
        <div>
          <h1 className="text-[22px] font-bold text-[#101828] sm:text-[24px]">My Plans & Access</h1>
          <p className="mt-1 text-[13px] text-[#667085]">
            Manage your subscription, meeting credits, and platform entitlements.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 lg:grid-cols-5">
          {STATS.map((s) => (
            <div
              key={s.label}
              className={`rounded-xl border p-3 shadow-[0_1px_2px_rgba(16,24,40,0.05)] ${
                s.highlight
                  ? "border-[#ABEFC6] bg-[#ECFDF3]"
                  : "border-[#E4E7EC] bg-white"
              }`}
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-[10px] text-[#667085]">{s.label}</p>
                  <p className="mt-0.5 text-[16px] font-bold text-[#101828]">{s.value}</p>
                  <p className="text-[10px] text-[#98A2B3]">{s.sub}</p>
                </div>
                <s.icon className={`size-4 ${s.highlight ? "text-[#039855]" : "text-[#175CD3]"}`} />
              </div>
            </div>
          ))}
        </div>

        <div>
          <h2 className="text-[14px] font-bold text-[#101828]">Choose Plan</h2>
          <div className="mt-3 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {PLANS.map((plan) => (
              <ExporterCard
                key={plan.name}
                className={`relative ${plan.popular ? "border-[#175CD3] ring-1 ring-[#175CD3]/20" : ""}`}
              >
                {plan.popular && (
                  <span className="absolute -top-2.5 left-4 rounded-full bg-[#175CD3] px-2 py-0.5 text-[9px] font-bold uppercase text-white">
                    Most Popular
                  </span>
                )}
                <h3 className="text-[13px] font-bold text-[#101828]">{plan.name}</h3>
                <p className="mt-1 text-[20px] font-bold text-[#101828]">
                  {plan.price}
                  <span className="text-[11px] font-normal text-[#667085]">{plan.period}</span>
                </p>
                <p className="mt-1 text-[11px] text-[#667085]">{plan.desc}</p>
                <ul className="mt-3 space-y-1.5 text-[10px] text-[#344054]">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-1.5">
                      <Check className="size-3 text-[#039855]" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button
                  variant={plan.popular ? "default" : "outline"}
                  className={`mt-4 h-9 w-full rounded-lg text-[12px] font-semibold ${
                    plan.popular
                      ? "bg-[#175CD3] hover:bg-[#1448B0]"
                      : "border-[#B2DDFF] text-[#175CD3]"
                  }`}
                >
                  {plan.price === "Contact" ? "Talk to Sales" : "Select Plan"}
                </Button>
              </ExporterCard>
            ))}
          </div>
        </div>

        <ExporterCard className="border-[#ABEFC6] bg-[#ECFDF3]">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-[10px] font-semibold uppercase text-[#027A48]">Current plan</p>
              <h3 className="text-[16px] font-bold text-[#101828]">Global Growth — Active</h3>
              <p className="mt-1 text-[11px] text-[#667085]">
                Renews on 15 Aug 2025 · Billed monthly · 4 meetings remaining this cycle
              </p>
            </div>
            <Button
              variant="outline"
              className="h-9 rounded-lg border-[#039855] bg-white text-[12px] font-semibold text-[#027A48]"
            >
              Manage Billing
            </Button>
          </div>
        </ExporterCard>

        <div className="grid gap-4 lg:grid-cols-2">
          <ExporterCard>
            <h3 className="text-[14px] font-bold text-[#101828]">What&apos;s Included</h3>
            <ul className="mt-3 space-y-2">
              {INCLUDED.map((item) => (
                <li key={item} className="flex items-center gap-2 text-[11px] text-[#344054]">
                  <Check className="size-3.5 shrink-0 text-[#039855]" />
                  {item}
                </li>
              ))}
            </ul>
          </ExporterCard>
          <ExporterCard>
            <h3 className="text-[14px] font-bold text-[#101828]">Restrictions</h3>
            <ul className="mt-3 space-y-2">
              {RESTRICTIONS.map((item) => (
                <li key={item} className="flex items-center gap-2 text-[11px] text-[#344054]">
                  <X className="size-3.5 shrink-0 text-[#F79009]" />
                  {item}
                </li>
              ))}
            </ul>
          </ExporterCard>
        </div>

        <ExporterCard>
          <h3 className="text-[14px] font-bold text-[#101828]">How to Use Your Plan</h3>
          <ol className="mt-4 space-y-3">
            {STEPS.map((step) => (
              <li key={step.n} className="flex gap-3">
                <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-[#EFF8FF] text-[11px] font-bold text-[#175CD3]">
                  {step.n}
                </span>
                <div>
                  <p className="text-[12px] font-semibold text-[#101828]">{step.title}</p>
                  <p className="text-[11px] text-[#667085]">{step.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </ExporterCard>

        <div className="flex flex-col items-start justify-between gap-4 rounded-2xl border border-[#ABEFC6] bg-[#ECFDF3] p-5 sm:flex-row sm:items-center">
          <div className="flex items-start gap-3">
            <Sparkles className="size-5 shrink-0 text-[#039855]" />
            <div>
              <h3 className="text-[14px] font-bold text-[#101828]">Ready to scale globally?</h3>
              <p className="mt-1 text-[12px] text-[#667085]">
                Upgrade to Buyer Enterprise for more meetings and premium market reports.
              </p>
            </div>
          </div>
          <Button className="h-10 shrink-0 rounded-lg bg-[#039855] px-6 text-[12px] font-semibold hover:bg-[#027A48]">
            Upgrade Now
          </Button>
        </div>
      </div>
    </ExporterPageShell>
  );
}
