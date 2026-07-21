import { useState } from "react";
import {
  Calendar,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  Clock,
  FileText,
  Plus,
  RefreshCw,
  Video,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Main } from "@/components/layout/main";
import { Button } from "@/components/ui/button";

const FLAG = (code: string) => `https://flagcdn.com/w40/${code}.png`;

const TABS = ["Upcoming Meetings", "Past Meetings", "Cancelled Meetings"] as const;

const MEETINGS = [
  {
    day: "22",
    month: "MAY",
    title: "Trade Consultation - Industrial Machinery",
    company: "Global Trade Solutions",
    time: "11:00 AM - 12:00 PM (EST)",
    country: "Germany",
    flag: "de",
    type: "Video Meeting",
    participants: 2,
  },
  {
    day: "23",
    month: "MAY",
    title: "Legal Compliance Discussion",
    company: "Euro Business Advisors",
    time: "2:00 PM - 3:00 PM (EST)",
    country: "Netherlands",
    flag: "nl",
    type: "Video Meeting",
    participants: 3,
  },
  {
    day: "24",
    month: "MAY",
    title: "Market Entry Strategy Review",
    company: "Middle East Trade Hub",
    time: "10:00 AM - 11:30 AM (GST)",
    country: "UAE",
    flag: "ae",
    type: "Video Meeting",
    participants: 2,
  },
  {
    day: "26",
    month: "MAY",
    title: "Partnership Agreement Discussion",
    company: "PharmaCare Global",
    time: "9:00 AM - 10:00 AM (SGT)",
    country: "Singapore",
    flag: "sg",
    type: "Video Meeting",
    participants: 5,
  },
  {
    day: "27",
    month: "MAY",
    title: "Supply Chain Collaboration",
    company: "Agri Nation Connect",
    time: "3:00 PM - 4:00 PM (EST)",
    country: "USA",
    flag: "us",
    type: "Video Meeting",
    participants: 4,
  },
];

const SUMMARY = [
  { label: "This Week", value: 5 },
  { label: "Next Week", value: 8 },
  { label: "This Month", value: 18 },
  { label: "Total Scheduled", value: 32 },
];

const QUICK_ACTIONS = [
  { label: "Schedule Meeting", icon: Calendar },
  { label: "Meeting Templates", icon: FileText },
  { label: "Availability Calendar", icon: CalendarDays },
  { label: "Sync Calendar", icon: RefreshCw },
];

const MEETING_DAYS = [22, 23, 24, 26, 27];
const HIGHLIGHT_RANGE = [20, 21, 22, 23, 24];

const CALENDAR_DAYS = Array.from({ length: 31 }, (_, i) => i + 1);
const WEEKDAYS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

function CalendarWidget() {
  const startOffset = 4;

  return (
    <div className="rounded-2xl border border-[#E4E7EC] bg-white p-4 shadow-[0_1px_2px_rgba(16,24,40,0.05)] sm:p-5">
      <div className="flex items-center justify-between">
        <h3 className="text-[14px] font-bold text-[#101828]">May 2025</h3>
        <div className="flex gap-1">
          <button
            type="button"
            className="flex size-7 items-center justify-center rounded-lg text-[#667085] hover:bg-[#F9FAFB]"
          >
            <ChevronLeft className="size-4" />
          </button>
          <button
            type="button"
            className="flex size-7 items-center justify-center rounded-lg text-[#667085] hover:bg-[#F9FAFB]"
          >
            <ChevronRight className="size-4" />
          </button>
        </div>
      </div>
      <div className="mt-4 grid grid-cols-7 gap-0.5 text-center">
        {WEEKDAYS.map((d) => (
          <span key={d} className="py-1 text-[10px] font-semibold text-[#98A2B3]">
            {d}
          </span>
        ))}
        {Array.from({ length: startOffset }).map((_, i) => (
          <span key={`empty-${i}`} />
        ))}
        {CALENDAR_DAYS.map((day) => {
          const inRange = HIGHLIGHT_RANGE.includes(day);
          const hasMeeting = MEETING_DAYS.includes(day);
          const isSelected = day === 22;
          return (
            <button
              key={day}
              type="button"
              className={`relative flex size-8 items-center justify-center text-[12px] font-medium transition ${
                isSelected
                  ? "z-10 rounded-full bg-[#175CD3] text-white"
                  : inRange
                    ? "rounded-md bg-[#EFF8FF] text-[#175CD3]"
                    : "rounded-md text-[#344054] hover:bg-[#F9FAFB]"
              }`}
            >
              {day}
              {hasMeeting && !isSelected && (
                <span className="absolute bottom-0.5 left-1/2 size-1 -translate-x-1/2 rounded-full bg-[#175CD3]" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function RightSidebar() {
  return (
    <aside className="space-y-4 xl:sticky xl:top-4">
      <CalendarWidget />

      <div className="rounded-2xl border border-[#E4E7EC] bg-white p-4 shadow-[0_1px_2px_rgba(16,24,40,0.05)] sm:p-5">
        <h3 className="text-[14px] font-bold text-[#101828]">Meeting Summary</h3>
        <ul className="mt-3.5 divide-y divide-[#F2F4F7]">
          {SUMMARY.map((item) => (
            <li
              key={item.label}
              className="flex items-center justify-between py-2.5 text-[13px]"
            >
              <span className="text-[#667085]">{item.label}</span>
              <span className="font-bold text-[#101828]">{item.value}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-2xl border border-[#E4E7EC] bg-white p-4 shadow-[0_1px_2px_rgba(16,24,40,0.05)] sm:p-5">
        <h3 className="text-[14px] font-bold text-[#101828]">Quick Actions</h3>
        <ul className="mt-3 space-y-0.5">
          {QUICK_ACTIONS.map((action) => (
            <li key={action.label}>
              <button
                type="button"
                className="flex w-full items-center gap-3 rounded-xl px-2 py-2.5 text-left text-[13px] font-medium text-[#344054] transition hover:bg-[#F9FAFB]"
              >
                <span className="flex size-9 items-center justify-center rounded-lg bg-[#F9FAFB] text-[#667085]">
                  <action.icon className="size-4" />
                </span>
                {action.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}

export default function AgentMeetingsPage() {
  const [activeTab, setActiveTab] =
    useState<(typeof TABS)[number]>("Upcoming Meetings");

  return (
    <Main
      fluid
      className="min-h-full space-y-5 overflow-x-hidden bg-[#F8FAFC]! px-3 pb-8 sm:space-y-6 sm:px-5"
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h1 className="text-[22px] font-bold tracking-tight text-[#101828] sm:text-[24px]">
            Meetings
          </h1>
          <p className="mt-1 text-[13px] text-[#667085]">
            Manage your meetings and schedules
          </p>
        </div>
        <Button className="h-10 shrink-0 rounded-xl bg-[#D4A574] px-4 text-[13px] font-semibold text-[#061A33] hover:bg-[#C4935F]">
          <Plus className="size-4" />
          Schedule Meeting
        </Button>
      </div>

      <div className="grid grid-cols-1 items-start gap-4 xl:grid-cols-[minmax(0,1fr)_280px]">
        <div className="min-w-0 space-y-4">
          <div className="overflow-hidden rounded-2xl border border-[#E4E7EC] bg-white shadow-[0_1px_2px_rgba(16,24,40,0.05)]">
            <div className="flex flex-wrap gap-0 border-b border-[#F2F4F7] px-4 sm:px-5">
              {TABS.map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveTab(tab)}
                  className={`border-b-2 px-3 py-3.5 text-[13px] font-semibold transition ${
                    activeTab === tab
                      ? "border-[#175CD3] text-[#175CD3]"
                      : "border-transparent text-[#667085] hover:text-[#344054]"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <ul className="divide-y divide-[#F2F4F7]">
              {MEETINGS.map((meeting) => (
                <li key={meeting.title} className="flex items-center gap-4 px-4 py-4 sm:px-5 sm:py-5">
                  <div className="flex w-[52px] shrink-0 flex-col items-center justify-center rounded-xl border border-[#E4E7EC] bg-[#F9FAFB] py-2.5 text-center">
                    <span className="text-[20px] font-bold leading-none text-[#101828]">
                      {meeting.day}
                    </span>
                    <span className="mt-1 text-[9px] font-bold tracking-wider text-[#667085]">
                      {meeting.month}
                    </span>
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3 className="text-[14px] font-bold text-[#101828]">
                      {meeting.title}
                    </h3>
                    <p className="mt-0.5 text-[12px] text-[#667085]">{meeting.company}</p>
                    <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] text-[#667085]">
                      <span className="flex items-center gap-1.5">
                        <Clock className="size-3.5 shrink-0 text-[#98A2B3]" />
                        {meeting.time}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <img
                          src={FLAG(meeting.flag)}
                          alt={meeting.country}
                          className="size-4 rounded-sm object-cover"
                        />
                        {meeting.country}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Video className="size-3.5 shrink-0 text-[#98A2B3]" />
                        {meeting.type}
                      </span>
                    </div>
                  </div>

                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[#EFF8FF] text-[12px] font-bold text-[#175CD3]">
                    {meeting.participants}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center">
            <Link
              to="/agent/meetings"
              className="text-[13px] font-semibold text-[#175CD3] hover:underline"
            >
              View All Meetings
            </Link>
          </div>
        </div>

        <RightSidebar />
      </div>
    </Main>
  );
}
