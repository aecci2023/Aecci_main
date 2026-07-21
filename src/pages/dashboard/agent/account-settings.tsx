import { useState } from "react";
import {
  Bell,
  ChevronRight,
  CreditCard,
  Key,
  Laptop,
  Lock,
  Monitor,
  Moon,
  Pencil,
  Shield,
  ShieldCheck,
  Smartphone,
  Sun,
  User,
} from "lucide-react";
import { Main } from "@/components/layout/main";
import { Button } from "@/components/ui/button";

const SETTINGS_TABS = [
  { id: "general", label: "General", icon: User },
  { id: "security", label: "Security", icon: Shield },
  { id: "notifications", label: "Notifications", icon: Bell },
  { id: "privacy", label: "Privacy", icon: Lock },
  { id: "billing", label: "Billing", icon: CreditCard },
  { id: "api", label: "API Access", icon: Key },
  { id: "activity", label: "Activity Log", icon: Laptop },
];

const PROFILE_FIELDS = [
  { label: "Full Name", value: "Michael Anderson" },
  { label: "Email", value: "michael.anderson@globaltrade.com" },
  { label: "Phone", value: "+1 (555) 123-4567" },
  { label: "Designation", value: "Senior Trade Advisor" },
  { label: "Company", value: "Global Trade Solutions LLC" },
  { label: "Country", value: "United States" },
  { label: "Member Since", value: "15 January 2024" },
];

const SECURITY_ITEMS = [
  { label: "Change Password", value: null, icon: Lock },
  { label: "Two-Factor Authentication", value: "Enabled", valueColor: "text-[#039855]", icon: Shield },
  { label: "Login Alerts", value: "Enabled", valueColor: "text-[#039855]", icon: Bell },
  { label: "Active Sessions", value: "3 Active", valueColor: "text-[#175CD3]", icon: Monitor },
  { label: "Devices", value: "Manage", valueColor: "text-[#175CD3]", icon: Smartphone },
];

export default function AgentAccountSettingsPage() {
  const [activeTab, setActiveTab] = useState("general");
  const [theme, setTheme] = useState<"light" | "dark" | "system">("system");

  return (
    <Main
      fluid
      className="min-h-full space-y-6 overflow-x-hidden bg-[#F8FAFC]! px-3 pb-8 sm:px-5"
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h1 className="text-[22px] font-bold tracking-tight text-[#101828] sm:text-[24px]">
            Account Settings
          </h1>
          <p className="mt-1 text-[13px] text-[#667085]">
            Manage your account preferences and security
          </p>
        </div>
        <Button className="h-10 shrink-0 rounded-xl bg-[#061A33] px-4 text-[13px] font-semibold hover:bg-[#0A2744]">
          <Pencil className="size-4" />
          Edit Profile
        </Button>
      </div>

      <div className="grid grid-cols-1 items-start gap-4 lg:grid-cols-[220px_minmax(0,1fr)]">
        {/* Settings nav */}
        <nav className="flex flex-row gap-1 overflow-x-auto rounded-2xl border border-[#E4E7EC] bg-white p-2 shadow-[0_1px_2px_rgba(16,24,40,0.05)] lg:flex-col lg:overflow-visible">
          {SETTINGS_TABS.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`flex shrink-0 items-center gap-2.5 rounded-xl px-3 py-2.5 text-left text-[13px] font-medium transition ${
                  isActive
                    ? "bg-[#D4A574] text-[#061A33]"
                    : "text-[#667085] hover:bg-[#F9FAFB]"
                }`}
              >
                <tab.icon className={`size-6 shrink-0 ${isActive ? "text-[#061A33]" : "text-[#98A2B3]"}`} />
                {tab.label}
              </button>
            );
          })}
        </nav>

        {/* Profile card */}
        <div className="rounded-2xl border border-[#E4E7EC] bg-white p-5 shadow-[0_1px_2px_rgba(16,24,40,0.05)] sm:p-6">
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-start">
            <img
              src="https://i.pravatar.cc/120?img=12"
              alt="Michael Anderson"
              className="size-24 shrink-0 rounded-full border-4 border-[#F2F4F7] object-cover"
            />
            <div className="grid w-full flex-1 grid-cols-1 gap-3 sm:grid-cols-2">
              {PROFILE_FIELDS.map((field) => (
                <div key={field.label} className="rounded-xl bg-[#F9FAFB] px-4 py-3">
                  <p className="text-[11px] font-medium text-[#667085]">{field.label}</p>
                  <p className="mt-0.5 text-[13px] font-semibold text-[#101828]">{field.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom row */}
      <div className="grid grid-cols-1 items-start gap-4 lg:grid-cols-2">
        {/* General settings */}
        <div className="rounded-2xl border border-[#E4E7EC] bg-white p-5 shadow-[0_1px_2px_rgba(16,24,40,0.05)] sm:p-6">
          <h2 className="text-[15px] font-bold text-[#101828]">General Settings</h2>
          <div className="mt-4 space-y-4">
            <div>
              <label className="text-[12px] font-medium text-[#344054]">Language</label>
              <select className="mt-1.5 flex h-10 w-full rounded-xl border border-[#E4E7EC] bg-[#F9FAFB] px-3 text-[13px] text-[#101828] outline-none">
                <option>English</option>
              </select>
            </div>
            <div>
              <label className="text-[12px] font-medium text-[#344054]">Time Zone</label>
              <select className="mt-1.5 flex h-10 w-full rounded-xl border border-[#E4E7EC] bg-[#F9FAFB] px-3 text-[13px] text-[#101828] outline-none">
                <option>GMT-05:00 Eastern Time</option>
              </select>
            </div>
            <div>
              <label className="text-[12px] font-medium text-[#344054]">Date Format</label>
              <select className="mt-1.5 flex h-10 w-full rounded-xl border border-[#E4E7EC] bg-[#F9FAFB] px-3 text-[13px] text-[#101828] outline-none">
                <option>MM/DD/YYYY</option>
              </select>
            </div>
            <div>
              <label className="text-[12px] font-medium text-[#344054]">Theme</label>
              <div className="mt-2 grid grid-cols-3 gap-2">
                {(
                  [
                    { id: "light" as const, label: "Light", icon: Sun },
                    { id: "dark" as const, label: "Dark", icon: Moon },
                    { id: "system" as const, label: "System", icon: Monitor },
                  ] as const
                ).map((t) => (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => setTheme(t.id)}
                    className={`flex flex-col items-center gap-1.5 rounded-xl border px-3 py-3 text-[11px] font-medium transition ${
                      theme === t.id
                        ? "border-[#175CD3] bg-[#EFF8FF] text-[#175CD3]"
                        : "border-[#E4E7EC] bg-white text-[#667085] hover:bg-[#F9FAFB]"
                    }`}
                  >
                    <t.icon className="size-5" />
                    {t.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <Button className="mt-5 h-10 w-full rounded-xl bg-[#061A33] text-[13px] font-semibold hover:bg-[#0A2744] sm:w-auto sm:px-8">
            Save Changes
          </Button>
        </div>

        <div className="space-y-4">
          {/* Security settings */}
          <div className="rounded-2xl border border-[#E4E7EC] bg-white p-5 shadow-[0_1px_2px_rgba(16,24,40,0.05)] sm:p-6">
            <h2 className="text-[15px] font-bold text-[#101828]">Security Settings</h2>
            <ul className="mt-4 divide-y divide-[#F2F4F7]">
              {SECURITY_ITEMS.map((item) => (
                <li key={item.label}>
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-3 py-3.5 text-left"
                  >
                    <div className="flex items-center gap-3">
                      <span className="flex size-12 items-center justify-center rounded-lg bg-[#F9FAFB] text-[#667085]">
                        <item.icon className="size-6" />
                      </span>
                      <span className="text-[13px] font-medium text-[#344054]">{item.label}</span>
                    </div>
                    {item.value ? (
                      <span className={`text-[12px] font-semibold ${item.valueColor}`}>
                        {item.value}
                      </span>
                    ) : (
                      <ChevronRight className="size-4 text-[#98A2B3]" />
                    )}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Account status */}
          <div className="rounded-2xl border border-[#E4E7EC] bg-white p-5 shadow-[0_1px_2px_rgba(16,24,40,0.05)] sm:p-6">
            <div className="flex items-start gap-4">
              <span className="flex size-14 shrink-0 items-center justify-center rounded-xl bg-[#ECFDF3] text-[#039855]">
                <ShieldCheck className="size-7" />
              </span>
              <div>
                <p className="text-[14px] font-bold text-[#101828]">Verified Account</p>
                <p className="mt-1 text-[12px] leading-relaxed text-[#667085]">
                  Your account is verified and active.
                </p>
                <button
                  type="button"
                  className="mt-2 text-[12px] font-semibold text-[#175CD3] hover:underline"
                >
                  View Verification Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Main>
  );
}
