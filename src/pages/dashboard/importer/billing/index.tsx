import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Main } from "@/components/layout/main";
import {
  Calendar,
  Clock,
  Users,
  Info,
  Lock,
  Check,
  CreditCard,
  Plus,
  MoreVertical,
  ShieldCheck,
  HelpCircle,
} from "lucide-react";

export default function ImporterBillingPlansPage() {
  const [isYearly, setIsYearly] = useState(false);
  const [isDesktop, setIsDesktop] = useState(typeof window !== "undefined" ? window.innerWidth >= 1024 : true);

  // Responsive logic
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Main fluid className="bg-[#F5F7FA] min-h-screen p-6 space-y-6 text-left">
      {/* ── BREADCRUMB + PAGE HEADER ── */}
      <div>
        {/* Breadcrumb */}
        <div className="flex items-center gap-1.5 text-[13px] text-[#64748B] mb-2 font-medium">
          <Link to="/importer/dashboard" className="hover:text-[#2563EB] transition-colors">
            Dashboard
          </Link>
          <span>&gt;</span>
          <span className="text-[#0B1B3D] font-semibold">Billing & Plans</span>
        </div>

        {/* Page Title */}
        <h1 className="text-[28px] font-bold text-[#0B1B3D] tracking-tight leading-none">
          Billing & Plans
        </h1>
        <p className="text-[15px] text-[#64748B] mt-2 font-medium">
          Manage your subscription, view usage and upgrade your plan.
        </p>
      </div>

      {/* ── TOP TWO-CARD ROW (left ~65%, right ~35%) ── */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: isDesktop ? "6.5fr 3.5fr" : "1fr",
          gap: "20px",
          width: "100%",
        }}
      >
        {/* LEFT CARD — "Current Plan" */}
        <div className="bg-white border border-[#E5E7EB] rounded-[12px] p-6 shadow-[0_1px_3px_rgba(0,0,0,0.04)] flex flex-col justify-between space-y-6">
          <div>
            {/* Header */}
            <div className="flex items-center gap-2">
              <h3 className="text-[16px] font-bold text-[#0B1B3D]">
                Current Plan
              </h3>
              <span className="bg-purple-100 text-purple-700 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                Importer
              </span>
            </div>
            {/* Plan Name */}
            <h4 className="text-[20px] font-extrabold text-[#0B1B3D] mt-2">
              Free Importer Plan
            </h4>
          </div>

          {/* 3-Column Usage Stats Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Stat 1: Meeting Request Slots */}
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-orange-50 border border-orange-100 flex items-center justify-center shrink-0 text-orange-500">
                <Calendar className="size-5" />
              </div>
              <div className="space-y-0.5">
                <span className="block text-[12.5px] font-bold text-gray-500 leading-none">
                  Meeting Request Slots
                </span>
                <span className="block text-[15.5px] font-extrabold text-red-500 pt-1">
                  3 / 3 Used
                </span>
                <span className="block text-[11px] text-gray-400 font-semibold pt-0.5">
                  Resets on 01 Jun 2026
                </span>
              </div>
            </div>

            {/* Stat 2: Deal Room Sessions */}
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-red-50 border border-red-100 flex items-center justify-center shrink-0 text-red-500">
                <Clock className="size-5" />
              </div>
              <div className="space-y-0.5">
                <span className="block text-[12.5px] font-bold text-gray-500 leading-none">
                  Deal Room Sessions
                </span>
                <span className="block text-[15.5px] font-extrabold text-red-500 pt-1">
                  3 / 3 Used
                </span>
                <span className="block text-[11px] text-gray-400 font-semibold pt-0.5">
                  Resets on 01 Jun 2026
                </span>
              </div>
            </div>

            {/* Stat 3: Team Members */}
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0 text-blue-600">
                <Users className="size-5" />
              </div>
              <div className="space-y-0.5">
                <span className="block text-[12.5px] font-bold text-gray-500 leading-none">
                  Team Members
                </span>
                <span className="block text-[15.5px] font-extrabold text-[#0B1B3D] pt-1">
                  1 / 1
                </span>
                <span className="block text-[11px] text-gray-400 font-semibold pt-0.5">
                  Included
                </span>
              </div>
            </div>
          </div>

          {/* Info Banner Below */}
          <div className="bg-blue-50/50 border border-blue-100 rounded-lg p-3.5 flex items-center gap-2.5 text-left text-blue-700 text-sm font-semibold">
            <Info className="size-4.5 shrink-0 text-blue-600" />
            <span>You are using all your free slots.</span>
          </div>
        </div>

        {/* RIGHT CARD — "Billing Summary" */}
        <div className="bg-white border border-[#E5E7EB] rounded-[12px] p-6 shadow-[0_1px_3px_rgba(0,0,0,0.04)] flex flex-col justify-between">
          <div>
            <h3 className="text-[16px] font-bold text-[#0B1B3D] mb-4">
              Billing Summary
            </h3>
            {/* Key-Value Details */}
            <div className="divide-y divide-gray-150 border-t border-b border-gray-100 py-1">
              {[
                { label: "Plan", value: "Free Importer Plan" },
                { label: "Billing Cycle", value: "Free Forever" },
                { label: "Next Reset Date", value: "01 Jun 2026" },
              ].map((row, idx) => (
                <div key={idx} className="flex justify-between items-center py-3 text-sm">
                  <span className="font-semibold text-gray-500">{row.label}</span>
                  <span className="font-bold text-[#0B1B3D]">{row.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Outlined Button */}
          <button className="w-full flex items-center justify-center gap-2 border border-[#2563EB] hover:bg-blue-50/50 bg-white text-[#2563EB] text-[13.5px] font-extrabold py-3 rounded-lg shadow-sm transition-all cursor-pointer mt-6">
            <Lock className="size-4 text-[#2563EB]" />
            <span>Upgrade to Unlock More</span>
          </button>
        </div>
      </div>

      {/* ── PLANS SECTION (Header & Toggle) ── */}
      <div className="pt-4 flex flex-col md:flex-row md:items-end justify-between gap-4 text-left">
        <div className="space-y-1">
          <h3 className="text-[20px] font-bold text-[#0B1B3D]">
            Choose the Perfect Plan for Your Business
          </h3>
          <p className="text-sm text-gray-500 font-semibold">
            Upgrade anytime. Cancel anytime.
          </p>
        </div>

        {/* Toggle container */}
        <div className="flex items-center gap-3 self-start md:self-end">
          <div className="bg-slate-100 rounded-lg p-1 flex items-center shadow-inner border border-gray-200">
            <button
              onClick={() => setIsYearly(false)}
              className={`px-3 py-1.5 rounded-md text-xs font-bold transition-all cursor-pointer ${
                !isYearly ? "bg-[#2563EB] text-white shadow-sm" : "text-gray-500 hover:text-gray-900"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-3 py-1.5 rounded-md text-xs font-bold transition-all cursor-pointer ${
                isYearly ? "bg-[#2563EB] text-white shadow-sm" : "text-gray-500 hover:text-gray-900"
              }`}
            >
              Yearly
            </button>
          </div>
          <span className="bg-green-100 text-green-700 text-[10px] font-bold px-2 py-1 rounded-md flex items-center gap-1 shadow-sm uppercase tracking-wide">
            Save 20%
          </span>
        </div>
      </div>

      {/* ── 4 PRICING CARDS ROW ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Card 1: BASIC */}
        <div className="bg-white border border-[#E5E7EB] rounded-[12px] p-6 shadow-[0_1px_3px_rgba(0,0,0,0.04)] flex flex-col justify-between space-y-6 text-left">
          <div className="space-y-4">
            <div>
              <span className="block text-xs font-extrabold text-[#64748B] uppercase tracking-widest">
                BASIC
              </span>
              <span className="block text-[13px] text-gray-500 font-semibold mt-1">
                Start connecting globally
              </span>
            </div>
            <div>
              <span className="text-[32px] font-extrabold text-[#0B1B3D]">$0</span>
              <span className="text-gray-400 text-xs font-semibold ml-1">/month</span>
              <span className="block text-xs text-gray-500 font-semibold mt-0.5">
                Free Forever
              </span>
            </div>

            {/* Checklist */}
            <div className="border-t border-gray-100 pt-4 space-y-3">
              {[
                { text: "3 Meeting Request Slots/month", hasInfo: true },
                { text: "3 Deal Room Sessions/month", hasInfo: true },
                { text: "1 Team Member" },
                { text: "Basic Search & Filters" },
                { text: "View Limited Market Reports" },
                { text: "Community Support" },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-2 text-sm text-gray-700 font-semibold">
                  <Check className="size-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="flex items-center gap-1 leading-snug">
                    {item.text}
                    {item.hasInfo && <HelpCircle className="size-3.5 text-gray-400 cursor-pointer" />}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <button className="w-full border border-[#0B1B3D] hover:bg-slate-50 text-[#0B1B3D] text-[13px] font-extrabold py-3.5 rounded-xl shadow-sm transition-all cursor-pointer">
            Current Plan
          </button>
        </div>

        {/* Card 2: GROWTH (Highlighted 2px border) */}
        <div className="bg-[#F8FAFC] border-2 border-[#2563EB] rounded-[12px] p-6 shadow-md flex flex-col justify-between space-y-6 text-left relative">
          <span className="absolute top-3 right-3 bg-emerald-100 text-emerald-800 text-[9px] font-extrabold px-2 py-0.5 rounded-full uppercase tracking-wider">
            Popular
          </span>

          <div className="space-y-4">
            <div>
              <span className="block text-xs font-extrabold text-[#2563EB] uppercase tracking-widest">
                GROWTH
              </span>
              <span className="block text-[13px] text-gray-500 font-semibold mt-1">
                Grow your sourcing network
              </span>
            </div>
            <div>
              <span className="text-[32px] font-extrabold text-[#0B1B3D]">
                ${isYearly ? "23" : "29"}
              </span>
              <span className="text-gray-400 text-xs font-semibold ml-1">/month</span>
              <span className="block text-xs text-gray-500 font-semibold mt-0.5">
                {isYearly ? "Billed annually ($276)" : "Billed monthly"}
              </span>
            </div>

            {/* Checklist */}
            <div className="border-t border-gray-200 pt-4 space-y-3">
              {[
                { text: "30 Meeting Request Slots/month" },
                { text: "30 Deal Room Sessions/month" },
                { text: "5 Team Members" },
                { text: "Advanced Search & Filters" },
                { text: "View Full Market Reports" },
                { text: "Priority Support" },
                { text: "Export Data & Insights" },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-2 text-sm text-gray-700 font-semibold">
                  <Check className="size-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="leading-snug">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          <button className="w-full bg-[#2563EB] hover:bg-blue-700 text-white text-[13px] font-extrabold py-3.5 rounded-xl shadow-md transition-all cursor-pointer border-none">
            Upgrade Now
          </button>
        </div>

        {/* Card 3: PROFESSIONAL (Warm/Gold Tint bg & Highlighted border) */}
        <div className="bg-[#FFFDF9] border-2 border-amber-500 rounded-[12px] p-6 shadow-md flex flex-col justify-between space-y-6 text-left">
          <div className="space-y-4">
            <div>
              <span className="block text-xs font-extrabold text-amber-600 uppercase tracking-widest">
                PROFESSIONAL
              </span>
              <span className="block text-[13px] text-gray-500 font-semibold mt-1">
                Scale your global trade
              </span>
            </div>
            <div>
              <span className="text-[32px] font-extrabold text-[#0B1B3D]">
                ${isYearly ? "63" : "79"}
              </span>
              <span className="text-gray-400 text-xs font-semibold ml-1">/month</span>
              <span className="block text-xs text-gray-500 font-semibold mt-0.5">
                {isYearly ? "Billed annually ($756)" : "Billed monthly"}
              </span>
            </div>

            {/* Checklist */}
            <div className="border-t border-amber-100 pt-4 space-y-3">
              {[
                { text: "100 Meeting Request Slots/month" },
                { text: "100 Deal Room Sessions/month" },
                { text: "15 Team Members" },
                { text: "AI Matchmaking & Recommendations" },
                { text: "Full Market Intelligence Access" },
                { text: "Dedicated Account Manager" },
                { text: "Export Data & Insights" },
                { text: "Custom Reports" },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-2 text-sm text-gray-700 font-semibold">
                  <Check className="size-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="leading-snug">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          <button className="w-full bg-[#2563EB] hover:bg-blue-700 text-white text-[13px] font-extrabold py-3.5 rounded-xl shadow-md transition-all cursor-pointer border-none">
            Upgrade Now
          </button>
        </div>

        {/* Card 4: ENTERPRISE */}
        <div className="bg-white border border-[#E5E7EB] rounded-[12px] p-6 shadow-[0_1px_3px_rgba(0,0,0,0.04)] flex flex-col justify-between space-y-6 text-left">
          <div className="space-y-4">
            <div>
              <span className="block text-xs font-extrabold text-[#64748B] uppercase tracking-widest">
                ENTERPRISE
              </span>
              <span className="block text-[13px] text-gray-500 font-semibold mt-1">
                For large teams & enterprises
              </span>
            </div>
            <div>
              <span className="text-[32px] font-extrabold text-[#0B1B3D]">Custom</span>
              <span className="block text-xs text-gray-500 font-semibold mt-1">
                Tailored for your business
              </span>
            </div>

            {/* Checklist */}
            <div className="border-t border-gray-100 pt-4 space-y-3">
              {[
                { text: "Unlimited Meeting Requests" },
                { text: "Unlimited Deal Room Sessions" },
                { text: "Unlimited Team Members" },
                { text: "Custom Integrations" },
                { text: "Dedicated Account Manager" },
                { text: "Priority Support (24/7)" },
                { text: "SLA & Custom Solutions" },
                { text: "Advanced Analytics" },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-2 text-sm text-gray-700 font-semibold">
                  <Check className="size-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="leading-snug">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          <button className="w-full border border-[#0B1B3D] hover:bg-slate-50 text-[#0B1B3D] text-[13px] font-extrabold py-3.5 rounded-xl shadow-sm transition-all cursor-pointer">
            Contact Sales
          </button>
        </div>
      </div>

      {/* ── BOTTOM ROW (3 columns: Payment Methods, Secure card, Custom plans) ── */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: isDesktop ? "4.5fr 3fr 2.5fr" : "1fr",
          gap: "20px",
          width: "100%",
        }}
      >
        {/* LEFT COLUMN: Payment Methods */}
        <div className="bg-white border border-[#E5E7EB] rounded-[12px] p-6 shadow-[0_1px_3px_rgba(0,0,0,0.04)] space-y-4">
          <div>
            <h3 className="text-[16px] font-bold text-[#0B1B3D]">
              Payment Methods
            </h3>
            <p className="text-[12.5px] text-gray-400 font-semibold mt-0.5">
              Secure payments powered by Stripe
            </p>
          </div>

          {/* Cards network logos */}
          <div className="flex flex-wrap items-center gap-3 pt-1">
            {[
              { name: "Visa", icon: "/visa-logo.png", initial: "Visa", color: "text-blue-800" },
              { name: "Mastercard", icon: "/mastercard-logo.png", initial: "MC", color: "text-red-500" },
              { name: "Amex", icon: "/amex-logo.png", initial: "Amex", color: "text-sky-500" },
              { name: "Discover", icon: "/discover-logo.png", initial: "Disc", color: "text-orange-500" },
              { name: "Apple Pay", icon: "/applepay-logo.png", initial: " Pay", color: "text-black" },
              { name: "Google Pay", icon: "/googlepay-logo.png", initial: "G Pay", color: "text-gray-700" },
            ].map((network, idx) => (
              <div
                key={idx}
                className="px-2.5 py-1.5 border border-gray-200 rounded-[6px] text-[10px] font-black uppercase tracking-wider bg-slate-50 shrink-0 select-none shadow-sm cursor-default"
              >
                <span className={network.color}>{network.initial}</span>
              </div>
            ))}
          </div>

          {/* Saved Card Row */}
          <div className="bg-slate-50 border border-gray-100 rounded-lg p-3.5 flex items-center justify-between gap-4 mt-2">
            <div className="flex items-center gap-3">
              <div className="w-10 h-8 rounded bg-[#0b1b3d] flex items-center justify-center text-white shrink-0 shadow-sm border border-gray-700">
                <CreditCard className="size-4.5 text-white" />
              </div>
              <div className="space-y-0.5">
                <span className="block text-[13.5px] font-bold text-[#0B1B3D] leading-none">
                  •••• •••• •••• 4242
                </span>
                <span className="block text-[11px] text-gray-500 font-semibold leading-none pt-1">
                  Visa
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="bg-emerald-100 text-emerald-800 text-[10px] font-extrabold px-2 py-0.5 rounded-full uppercase tracking-wider">
                Default
              </span>
              <button className="p-1 rounded hover:bg-gray-200 text-gray-400 hover:text-gray-600 transition-colors cursor-pointer">
                <MoreVertical className="size-4.5" />
              </button>
            </div>
          </div>

          {/* Add New Card trigger */}
          <button className="inline-flex items-center gap-1 text-[13px] font-bold text-[#2563EB] hover:underline cursor-pointer pt-2">
            <Plus className="size-4" />
            <span>Add New Card</span>
          </button>
        </div>

        {/* MIDDLE COLUMN: Secure & Trusted */}
        <div className="bg-[#F0FDF4] border border-[#DCFCE7] rounded-[12px] p-6 shadow-[0_1px_3px_rgba(0,0,0,0.04)] flex flex-col justify-between items-center text-center space-y-4">
          <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
            <ShieldCheck className="size-6 text-emerald-600" />
          </div>

          <div className="space-y-1">
            <h4 className="font-bold text-[15px] text-[#0B1B3D]">
              Secure & Trusted
            </h4>
          </div>

          <div className="space-y-2.5 w-full text-left max-w-[200px] mx-auto">
            {[
              "256-bit SSL encrypted payments",
              "PCI DSS compliant",
              "Cancel anytime no hidden charges",
              "Instant plan activation",
            ].map((chk, idx) => (
              <div key={idx} className="flex items-start gap-2 text-[12px] font-semibold text-gray-700 leading-snug">
                <Check className="size-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span>{chk}</span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN: Need a Custom Plan? */}
        <div className="bg-white border border-[#E5E7EB] rounded-[12px] p-6 shadow-[0_1px_3px_rgba(0,0,0,0.04)] flex flex-col justify-between text-left space-y-4">
          <div className="space-y-2">
            <h3 className="text-[16px] font-bold text-[#0B1B3D] leading-none">
              Need a Custom Plan?
            </h3>
            <p className="text-[13px] text-gray-500 font-semibold leading-relaxed">
              Contact our sales team for enterprise solutions tailored to your business needs.
            </p>
          </div>

          <div className="space-y-3 pt-2">
            <button className="w-full border border-[#0B1B3D] hover:bg-slate-50 text-[#0B1B3D] text-[13px] font-extrabold py-3 rounded-lg shadow-sm transition-all cursor-pointer">
              Contact Sales Team
            </button>
            <div className="text-center text-[11px] font-semibold text-gray-500">
              or write to us at{" "}
              <a href="mailto:support@aecci.com" className="text-[#2563EB] hover:underline">
                support@aecci.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── FOOTER DISCLAIMER BAR ── */}
      <footer className="w-full border-t border-gray-200 mt-10 pt-6 pb-4 flex flex-col md:flex-row justify-between items-center gap-4 text-[12px] text-[#64748B]">
        {/* Left: AECCI Disclaimer with Shield Check Icon */}
        <div className="flex items-center gap-2 max-w-[600px] text-center md:text-left leading-relaxed">
          <ShieldCheck className="size-4.5 text-[#10B981] shrink-0" />
          <span>
            <strong className="text-[#0B1B3D]">AECCI Global Deal Room</strong> – A structured B2B business facilitation platform. AECCI does not guarantee transactions, contracts, payments or commercial outcomes.
          </span>
        </div>

        {/* Right: Copyright & Policy Links */}
        <div className="flex items-center flex-wrap justify-center gap-x-3 gap-y-1 font-semibold">
          <span>&copy; 2026 AECCI Global Deal Room. All rights reserved.</span>
          <span className="text-gray-300">|</span>
          <Link to="/terms-conditions" className="hover:text-[#2563EB] transition-colors">
            Terms & Conditions
          </Link>
          <span className="text-gray-300">|</span>
          <Link to="/privacy-policy" className="hover:text-[#2563EB] transition-colors">
            Privacy Policy
          </Link>
        </div>
      </footer>
    </Main>
  );
}
