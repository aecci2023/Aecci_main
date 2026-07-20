import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Camera,
  Check,
  ChevronRight,
  Shield,
  ExternalLink,
  Mail,
  LifeBuoy,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  ExporterPageShell,
  ExporterCard,
  ExporterBreadcrumb,
  ExporterTabs,
  FieldLabel,
  FieldInput,
  FieldSelect,
} from "@/components/exporter/exporter-page-layout";

const SETTINGS_TABS = [
  "Account Settings",
  "Notification Preferences",
  "Privacy & Security",
  "Language & Region",
  "Connected Apps",
];

const ACCOUNT_STATUS = [
  "Email Verified",
  "Phone Verified",
  "Company Verified",
  "Documents Verified",
];

const NOTIFICATION_TOGGLES = [
  { label: "New Meeting Requests", defaultOn: true },
  { label: "Session Invitations", defaultOn: true },
  { label: "Partner Messages", defaultOn: true },
  { label: "Market Reports", defaultOn: false },
  { label: "Country Intelligence Updates", defaultOn: true },
  { label: "Product Updates", defaultOn: false },
];

const QUICK_SETTINGS = [
  { label: "Profile Visibility", defaultOn: true },
  { label: "Receive Meeting Requests", defaultOn: true },
  { label: "Show Online Status", defaultOn: true },
  { label: "Data for Market Insights", defaultOn: false },
];

const CONNECTED_APPS = [
  { name: "Google", detail: "ananya@exportco.in" },
  { name: "LinkedIn", detail: "Ananya Sharma" },
];

const HELP_LINKS = [
  { label: "Visit Help Center", to: "/dashboard/help-center", icon: ExternalLink },
  { label: "Contact Support", to: "/dashboard/need-help", icon: LifeBuoy },
  { label: "Privacy Policy", to: "/dashboard/help-center", icon: Mail },
  { label: "Terms of Service", to: "/dashboard/help-center", icon: Mail },
];

function Toggle({ defaultOn = false, label }: { defaultOn?: boolean; label: string }) {
  const [on, setOn] = useState(defaultOn);
  return (
    <div className="flex items-center justify-between gap-3 py-2.5">
      <span className="text-[12px] text-[#344054]">{label}</span>
      <button
        type="button"
        role="switch"
        aria-checked={on}
        aria-label={label}
        onClick={() => setOn(!on)}
        className={`relative h-5 w-9 shrink-0 rounded-full transition ${on ? "bg-[#175CD3]" : "bg-[#D0D5DD]"}`}
      >
        <span
          className={`absolute top-0.5 size-4 rounded-full bg-white shadow transition ${on ? "left-4" : "left-0.5"}`}
        />
      </button>
    </div>
  );
}

function NotifyChannelCheckbox({
  label,
  defaultChecked = false,
}: {
  label: string;
  defaultChecked?: boolean;
}) {
  const [checked, setChecked] = useState(defaultChecked);
  return (
    <label className="flex cursor-pointer items-center gap-2 text-[12px] text-[#344054]">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
        className="size-4 rounded border-[#D0D5DD] text-[#175CD3] focus:ring-[#175CD3]"
      />
      {label}
    </label>
  );
}

function ProfileSettingsBlock() {
  const [about, setAbout] = useState(
    "Leading manufacturer of textile and industrial goods with export focus on North America and GCC markets.",
  );
  const aboutMax = 500;

  return (
    <div className="rounded-xl border border-[#E4E7EC] bg-[#FCFCFD] p-5">
      <h3 className="text-[14px] font-bold text-[#101828]">Profile Settings</h3>
      <div className="mt-5 flex flex-col gap-5 sm:flex-row sm:items-start">
        <div className="flex shrink-0 flex-col items-center gap-3">
          <div className="relative">
            <div className="flex size-20 items-center justify-center rounded-full bg-[#EFF8FF] text-[20px] font-bold text-[#175CD3]">
              AR
            </div>
            <span className="absolute bottom-0 right-0 flex size-7 items-center justify-center rounded-full border-2 border-white bg-[#175CD3] text-white shadow-sm">
              <Camera className="size-3.5" />
            </span>
          </div>
          <span className="inline-flex items-center gap-1 rounded-full bg-[#ECFDF3] px-2.5 py-1 text-[10px] font-semibold text-[#027A48]">
            <Check className="size-3" />
            Verified Member
          </span>
          <Button
            variant="outline"
            className="h-8 rounded-lg border-[#D0D5DD] text-[11px] font-semibold text-[#344054]"
          >
            Change Photo
          </Button>
        </div>
        <div className="min-w-0 flex-1 space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <FieldLabel>Full Name</FieldLabel>
              <FieldInput defaultValue="Ananya Sharma" />
            </div>
            <div>
              <FieldLabel>Email</FieldLabel>
              <input
                readOnly
                defaultValue="ananya@exportco.in"
                className="h-10 w-full cursor-not-allowed rounded-lg border border-[#D0D5DD] bg-[#F9FAFB] px-3 text-[13px] text-[#667085] outline-none"
              />
            </div>
            <div>
              <FieldLabel>Phone</FieldLabel>
              <div className="flex h-10 overflow-hidden rounded-lg border border-[#D0D5DD] bg-white">
                <span className="flex items-center border-r border-[#E4E7EC] bg-[#F9FAFB] px-2.5 text-[13px]">
                  🇮🇳 +91
                </span>
                <input
                  defaultValue="98765 43210"
                  className="min-w-0 flex-1 px-3 text-[13px] text-[#101828] outline-none focus:ring-1 focus:ring-[#175CD3]"
                />
              </div>
            </div>
            <div>
              <FieldLabel>Job Title</FieldLabel>
              <FieldInput defaultValue="Head of International Sales" />
            </div>
            <div>
              <FieldLabel>Company</FieldLabel>
              <FieldInput defaultValue="ExportCo Global Pvt Ltd" />
            </div>
            <div>
              <FieldLabel>Industry Interest</FieldLabel>
              <FieldSelect
                defaultValue="Textiles & Apparel"
                options={[
                  "Textiles & Apparel",
                  "Industrial Goods",
                  "Agri & Food",
                  "Technology",
                  "Healthcare",
                ]}
              />
            </div>
          </div>
          <div>
            <FieldLabel>About You</FieldLabel>
            <textarea
              value={about}
              onChange={(e) => setAbout(e.target.value.slice(0, aboutMax))}
              className="min-h-[100px] w-full resize-y rounded-lg border border-[#D0D5DD] px-3 py-2 text-[13px] text-[#101828] outline-none focus:border-[#175CD3] focus:ring-1 focus:ring-[#175CD3]"
            />
            <p className="mt-1 text-right text-[11px] text-[#667085]">
              {about.length}/{aboutMax}
            </p>
          </div>
          <div className="flex justify-end pt-1">
            <Button className="h-9 rounded-lg bg-[#175CD3] px-4 text-[12px] font-semibold hover:bg-[#1448B0]">
              Save Changes
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

function NotificationPreferencesBlock() {
  return (
    <div className="rounded-xl border border-[#E4E7EC] p-5">
      <h3 className="text-[14px] font-bold text-[#101828]">Notification Preferences</h3>
      <div className="mt-4 flex flex-wrap gap-4 border-b border-[#E4E7EC] pb-4">
        <NotifyChannelCheckbox label="Email" defaultChecked />
        <NotifyChannelCheckbox label="SMS" />
        <NotifyChannelCheckbox label="In-App" defaultChecked />
      </div>
      <div className="mt-1 divide-y divide-[#E4E7EC]">
        {NOTIFICATION_TOGGLES.map((item) => (
          <Toggle key={item.label} defaultOn={item.defaultOn} label={item.label} />
        ))}
      </div>
    </div>
  );
}

function LanguageRegionBlock() {
  return (
    <div className="rounded-xl border border-[#E4E7EC] p-5">
      <h3 className="text-[14px] font-bold text-[#101828]">Language & Region</h3>
      <div className="mt-4 space-y-4">
        <div>
          <FieldLabel>Language</FieldLabel>
          <FieldSelect defaultValue="English" options={["English", "Hindi", "Spanish", "French"]} />
        </div>
        <div>
          <FieldLabel>Time Zone</FieldLabel>
          <FieldSelect
            defaultValue="GMT +5:30 (India Standard Time)"
            options={[
              "GMT +5:30 (India Standard Time)",
              "GMT +0:00 (London)",
              "GMT -5:00 (Eastern US)",
              "GMT +8:00 (Singapore)",
            ]}
          />
        </div>
        <Button className="h-9 w-full rounded-lg bg-[#175CD3] text-[12px] font-semibold hover:bg-[#1448B0] sm:w-auto">
          Save Changes
        </Button>
      </div>
    </div>
  );
}

function PrivacySecurityBlock() {
  return (
    <div className="rounded-xl border border-[#E4E7EC] p-5">
      <h3 className="text-[14px] font-bold text-[#101828]">Privacy & Security</h3>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <div>
          <FieldLabel>Current Password</FieldLabel>
          <input
            type="password"
            placeholder="••••••••"
            className="h-10 w-full rounded-lg border border-[#D0D5DD] bg-white px-3 text-[13px] outline-none focus:border-[#175CD3] focus:ring-1 focus:ring-[#175CD3]"
          />
        </div>
        <div>
          <FieldLabel>New Password</FieldLabel>
          <input
            type="password"
            placeholder="••••••••"
            className="h-10 w-full rounded-lg border border-[#D0D5DD] bg-white px-3 text-[13px] outline-none focus:border-[#175CD3] focus:ring-1 focus:ring-[#175CD3]"
          />
        </div>
      </div>
      <div className="mt-4 divide-y divide-[#E4E7EC]">
        <Toggle defaultOn label="Two-factor authentication" />
        <Toggle defaultOn label="Login alerts for new devices" />
        <Toggle label="Share anonymized usage analytics" />
      </div>
      <div className="mt-4 flex justify-end">
        <Button className="h-9 rounded-lg bg-[#175CD3] text-[12px] font-semibold hover:bg-[#1448B0]">
          Update Security
        </Button>
      </div>
    </div>
  );
}

function ConnectedAppsBlock({ compact = false }: { compact?: boolean }) {
  return (
    <div className={compact ? "" : "rounded-xl border border-[#E4E7EC] p-5"}>
      {!compact && (
        <h3 className="text-[14px] font-bold text-[#101828]">Connected Apps</h3>
      )}
      <div className={`space-y-3 ${compact ? "" : "mt-4"}`}>
        {CONNECTED_APPS.map((app) => (
          <div
            key={app.name}
            className="flex flex-wrap items-center justify-between gap-2 rounded-xl border border-[#E4E7EC] p-3"
          >
            <div className="min-w-0">
              <p className="text-[12px] font-bold text-[#101828]">{app.name}</p>
              <p className="truncate text-[10px] text-[#667085]">{app.detail}</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="rounded-full bg-[#ECFDF3] px-2 py-0.5 text-[10px] font-semibold text-[#027A48]">
                Connected
              </span>
              <Button variant="outline" className="h-8 rounded-lg border-[#D0D5DD] text-[11px] font-semibold">
                Disconnect
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function DangerRow({ label }: { label: string }) {
  return (
    <button
      type="button"
      className="flex w-full items-center justify-between gap-2 py-2.5 text-left text-[12px] font-semibold text-[#B42318] transition hover:text-[#912018]"
    >
      {label}
      <ChevronRight className="size-4 shrink-0 text-[#F97066]" />
    </button>
  );
}

export default function SettingsPage() {
  const [tab, setTab] = useState("Account Settings");

  const showProfile = tab === "Account Settings";
  const showNotifications =
    tab === "Account Settings" || tab === "Notification Preferences";
  const showLanguage =
    tab === "Account Settings" || tab === "Language & Region";
  const showPrivacy = tab === "Privacy & Security";
  const showAppsMain = tab === "Connected Apps";

  return (
    <ExporterPageShell>
      <div>
        <ExporterBreadcrumb
          items={[
            { label: "Dashboard", to: "/dashboard" },
            { label: "Settings" },
          ]}
        />
        <h1 className="mt-2 text-[22px] font-bold text-[#101828] sm:text-[24px]">Settings</h1>
        <p className="mt-1 text-[13px] text-[#667085]">
          Manage your account preferences, notifications, and security settings.
        </p>
      </div>

      <div className="grid grid-cols-1 items-start gap-5 xl:grid-cols-[minmax(0,1fr)_280px]">
        <section className="min-w-0 space-y-5">
          <ExporterCard className="p-0 pt-1">
            <ExporterTabs tabs={SETTINGS_TABS} active={tab} onChange={setTab} />
            <div className="space-y-5 p-4 pt-4 sm:p-5">
              {showProfile && tab === "Account Settings" && <ProfileSettingsBlock />}

              {showPrivacy && <PrivacySecurityBlock />}

              {showAppsMain && <ConnectedAppsBlock />}

              {(showNotifications || showLanguage) && (
                <div
                  className={`grid gap-4 ${tab === "Account Settings" ? "sm:grid-cols-2" : "grid-cols-1"}`}
                >
                  {showNotifications && <NotificationPreferencesBlock />}
                  {showLanguage && <LanguageRegionBlock />}
                </div>
              )}
            </div>
          </ExporterCard>
        </section>

        <aside className="space-y-4">
          <ExporterCard>
            <h3 className="text-[14px] font-bold text-[#101828]">Account Status</h3>
            <ul className="mt-3 space-y-2.5">
              {ACCOUNT_STATUS.map((item) => (
                <li key={item} className="flex items-center gap-2 text-[12px] text-[#344054]">
                  <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-[#ECFDF3]">
                    <Check className="size-3 text-[#039855]" strokeWidth={3} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </ExporterCard>

          <ExporterCard>
            <h3 className="text-[14px] font-bold text-[#101828]">Quick Settings</h3>
            <div className="mt-1 divide-y divide-[#E4E7EC]">
              {QUICK_SETTINGS.map((item) => (
                <Toggle key={item.label} defaultOn={item.defaultOn} label={item.label} />
              ))}
            </div>
          </ExporterCard>

          <ExporterCard className="border-[#FECDCA] bg-[#FFFBFA]">
            <h3 className="flex items-center gap-2 text-[14px] font-bold text-[#B42318]">
              <Shield className="size-4" />
              Danger Zone
            </h3>
            <div className="mt-2 divide-y divide-[#FECDCA]">
              <DangerRow label="Deactivate Account" />
              <DangerRow label="Delete Account" />
            </div>
          </ExporterCard>

          <ExporterCard>
            <h3 className="text-[14px] font-bold text-[#101828]">Connected Apps</h3>
            <ConnectedAppsBlock compact />
          </ExporterCard>

          <ExporterCard>
            <h3 className="text-[14px] font-bold text-[#101828]">Help & Support</h3>
            <ul className="mt-3 space-y-2.5">
              {HELP_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="flex items-center gap-2 text-[11px] font-semibold text-[#175CD3] hover:underline"
                  >
                    <link.icon className="size-3.5 shrink-0" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </ExporterCard>
        </aside>
      </div>
    </ExporterPageShell>
  );
}
