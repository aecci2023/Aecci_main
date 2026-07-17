import { Link } from "react-router-dom";
import { Main } from "@/components/layout/main";
import { Button } from "@/components/ui/button";
import { Check, AlertCircle, Headphones } from "lucide-react";
import type { ReactNode } from "react";

export function ExporterPageShell({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <Main fluid className={`space-y-5 bg-[#F8FAFC]! pb-8 ${className}`}>
      {children}
    </Main>
  );
}

export function ExporterPageHeader({
  title,
  subtitle,
  completion,
  completionLabel = "Profile Completion",
  primaryAction,
  secondaryAction,
}: {
  title: string;
  subtitle: string;
  completion?: number;
  completionLabel?: string;
  primaryAction?: { label: string; to?: string };
  secondaryAction?: { label: string; to?: string };
}) {
  return (
    <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
      <div>
        <h1 className="text-[22px] font-bold text-[#101828] sm:text-[24px]">
          {title}
        </h1>
        <p className="mt-1 max-w-2xl text-[13px] leading-relaxed text-[#667085]">
          {subtitle}
        </p>
      </div>
      <div className="flex flex-wrap items-center gap-2">
        {secondaryAction && (
          <Button
            asChild
            variant="outline"
            className="h-9 rounded-lg border-[#B2DDFF] bg-white text-[12px] font-semibold text-[#175CD3] hover:bg-[#EFF8FF]"
          >
            <Link to={secondaryAction.to || "#"}>{secondaryAction.label}</Link>
          </Button>
        )}
        {completion !== undefined && (
          <div className="flex items-center gap-2 rounded-full border border-[#ABEFC6] bg-[#ECFDF3] px-3 py-1.5">
            <span className="text-[11px] font-medium text-[#027A48]">
              {completionLabel}
            </span>
            <span className="text-[12px] font-bold text-[#027A48]">
              {completion}%
            </span>
            <span className="relative flex size-7 items-center justify-center">
              <svg className="size-7 -rotate-90" viewBox="0 0 36 36">
                <circle
                  cx="18"
                  cy="18"
                  r="14"
                  fill="none"
                  stroke="#D1FAE5"
                  strokeWidth="3"
                />
                <circle
                  cx="18"
                  cy="18"
                  r="14"
                  fill="none"
                  stroke="#039855"
                  strokeWidth="3"
                  strokeDasharray={`${completion * 0.88} 88`}
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </div>
        )}
        {primaryAction && (
          <Button
            asChild
            className="h-9 rounded-lg bg-[#175CD3] text-[12px] font-semibold text-white hover:bg-[#1448B0]"
          >
            <Link to={primaryAction.to || "#"}>{primaryAction.label}</Link>
          </Button>
        )}
      </div>
    </div>
  );
}

export function ExporterTabs({
  tabs,
  active,
  onChange,
}: {
  tabs: string[];
  active: string;
  onChange?: (tab: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-1 border-b border-[#E4E7EC]">
      {tabs.map((tab) => (
        <button
          key={tab}
          type="button"
          onClick={() => onChange?.(tab)}
          className={`border-b-2 px-3 py-2.5 text-[12px] font-semibold transition ${
            active === tab
              ? "border-[#175CD3] text-[#175CD3]"
              : "border-transparent text-[#667085] hover:text-[#344054]"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}

export function ExporterCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-2xl border border-[#E4E7EC] bg-white p-5 shadow-[0_1px_2px_rgba(16,24,40,0.05)] ${className}`}
    >
      {children}
    </div>
  );
}

export function CompletionSidebar({
  title,
  percent,
  status,
  items,
}: {
  title: string;
  percent: number;
  status: string;
  items: { label: string; done: boolean }[];
}) {
  return (
    <ExporterCard>
      <h3 className="text-[14px] font-bold text-[#101828]">{title}</h3>
      <div className="mt-4 flex items-center gap-4">
        <div className="relative flex size-16 items-center justify-center">
          <svg className="size-16 -rotate-90" viewBox="0 0 36 36">
            <circle
              cx="18"
              cy="18"
              r="14"
              fill="none"
              stroke="#E4E7EC"
              strokeWidth="3"
            />
            <circle
              cx="18"
              cy="18"
              r="14"
              fill="none"
              stroke="#175CD3"
              strokeWidth="3"
              strokeDasharray={`${percent * 0.88} 88`}
              strokeLinecap="round"
            />
          </svg>
          <span className="absolute text-[14px] font-bold text-[#175CD3]">
            {percent}%
          </span>
        </div>
        <div>
          <p className="text-[13px] font-bold text-[#101828]">{status}</p>
          <p className="text-[11px] text-[#667085]">Keep going!</p>
        </div>
      </div>
      <ul className="mt-4 space-y-2">
        {items.map((item) => (
          <li
            key={item.label}
            className="flex items-center gap-2 text-[12px] text-[#344054]"
          >
            {item.done ? (
              <Check className="size-3.5 text-[#039855]" />
            ) : (
              <AlertCircle className="size-3.5 text-[#F79009]" />
            )}
            {item.label}
          </li>
        ))}
      </ul>
      <Button className="mt-4 h-9 w-full rounded-lg bg-[#175CD3] text-[12px] font-semibold hover:bg-[#1448B0]">
        Improve Profile
      </Button>
    </ExporterCard>
  );
}

export function AssistanceCard() {
  return (
    <ExporterCard className="border-[#B2DDFF] bg-[#EFF8FF]">
      <div className="flex size-9 items-center justify-center rounded-full bg-[#175CD3]/10">
        <Headphones className="size-4 text-[#175CD3]" />
      </div>
      <h3 className="mt-3 text-[14px] font-bold text-[#101828]">
        Need Assistance?
      </h3>
      <p className="mt-1 text-[11px] leading-relaxed text-[#667085]">
        Our global trade advisors are here to help you set up your profile.
      </p>
      <Button
        asChild
        variant="outline"
        className="mt-4 h-9 w-full rounded-lg border-[#175CD3] bg-white text-[12px] font-semibold text-[#175CD3]"
      >
        <Link to="/dashboard/submit-questions">Contact Support</Link>
      </Button>
    </ExporterCard>
  );
}

export function FieldLabel({ children }: { children: ReactNode }) {
  return (
    <label className="mb-1.5 block text-[11px] font-semibold text-[#344054]">
      {children}
    </label>
  );
}

export function FieldInput({
  defaultValue,
  placeholder,
  className = "",
}: {
  defaultValue?: string;
  placeholder?: string;
  className?: string;
}) {
  return (
    <input
      defaultValue={defaultValue}
      placeholder={placeholder}
      className={`h-10 w-full rounded-lg border border-[#D0D5DD] bg-white px-3 text-[13px] text-[#101828] outline-none focus:border-[#175CD3] focus:ring-1 focus:ring-[#175CD3] ${className}`}
    />
  );
}

export function FieldSelect({
  defaultValue,
  options,
}: {
  defaultValue?: string;
  options: string[];
}) {
  return (
    <select
      defaultValue={defaultValue}
      className="h-10 w-full rounded-lg border border-[#D0D5DD] bg-white px-3 text-[13px] text-[#101828] outline-none focus:border-[#175CD3]"
    >
      {options.map((o) => (
        <option key={o}>{o}</option>
      ))}
    </select>
  );
}
