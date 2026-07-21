import { useState } from "react";
import { Main } from "@/components/layout/main";
import { Button } from "@/components/ui/button";
import {
  Plus,
  Clock,
  Video,
  MoreVertical,
  ChevronLeft,
  ChevronRight,
  CalendarDays,
  FileText,
  Layers,
  RefreshCw,
} from "lucide-react";

// ── Types ─────────────────────────────────────────────────────────────────────

interface Meeting {
  id: number;
  day: number;
  month: string;
  weekday: string;
  title: string;
  company: string;
  companyIcon: string;
  time: string;
  countryFlag: string;
  country: string;
  type: string;
}

// ── Static Data ───────────────────────────────────────────────────────────────

const upcomingMeetings: Meeting[] = [
  {
    id: 1,
    day: 22,
    month: "MAY",
    weekday: "Thu",
    title: "Trade Consultation – Industrial Machinery",
    company: "Global Trade Solutions",
    companyIcon: "🏢",
    time: "10:00 AM – 12:00 PM (EST)",
    countryFlag: "🇩🇪",
    country: "Germany",
    type: "Video Meeting",
  },
  {
    id: 2,
    day: 23,
    month: "MAY",
    weekday: "Fri",
    title: "Legal Compliance Discussion",
    company: "Euro Business Advisors",
    companyIcon: "🏢",
    time: "02:30 PM – 03:30 PM (EST)",
    countryFlag: "🇳🇱",
    country: "Netherlands",
    type: "Video Meeting",
  },
  {
    id: 3,
    day: 24,
    month: "MAY",
    weekday: "Sat",
    title: "Market Entry Strategy Review",
    company: "Middle East Trade Hub",
    companyIcon: "🏢",
    time: "10:30 AM – 11:30 AM (EST)",
    countryFlag: "🇦🇪",
    country: "UAE",
    type: "Video Meeting",
  },
  {
    id: 4,
    day: 26,
    month: "MAY",
    weekday: "Mon",
    title: "Partnership Agreement Discussion",
    company: "PharmaCare Global",
    companyIcon: "🏢",
    time: "01:00 PM – 02:00 PM (EST)",
    countryFlag: "🇸🇬",
    country: "Singapore",
    type: "Video Meeting",
  },
  {
    id: 5,
    day: 27,
    month: "MAY",
    weekday: "Tue",
    title: "Supply Chain Collaboration",
    company: "Agri Nation Connect",
    companyIcon: "🏢",
    time: "09:00 AM – 10:00 AM (EST)",
    countryFlag: "🇺🇸",
    country: "USA",
    type: "Video Meeting",
  },
];

const pastMeetings: Meeting[] = [
  {
    id: 6,
    day: 10,
    month: "MAY",
    weekday: "Sat",
    title: "Export Market Briefing",
    company: "Global Trade Solutions",
    companyIcon: "🏢",
    time: "11:00 AM – 12:00 PM (EST)",
    countryFlag: "🇩🇪",
    country: "Germany",
    type: "Video Meeting",
  },
  {
    id: 7,
    day: 14,
    month: "MAY",
    weekday: "Wed",
    title: "Q2 Partner Review",
    company: "Euro Business Advisors",
    companyIcon: "🏢",
    time: "03:00 PM – 04:00 PM (EST)",
    countryFlag: "🇳🇱",
    country: "Netherlands",
    type: "Video Meeting",
  },
];

const cancelledMeetings: Meeting[] = [
  {
    id: 8,
    day: 18,
    month: "MAY",
    weekday: "Sun",
    title: "Logistics Partnership Call",
    company: "Middle East Trade Hub",
    companyIcon: "🏢",
    time: "02:00 PM – 03:00 PM (EST)",
    countryFlag: "🇦🇪",
    country: "UAE",
    type: "Video Meeting",
  },
];

const summaryStats = [
  { label: "This Week", count: 5, color: "#F59E0B" },
  { label: "Next Week", count: 8, color: "#10B981" },
  { label: "This Month", count: 18, color: "#6366F1" },
  { label: "Total Scheduled", count: 32, color: "#3B82F6" },
];

const quickActions = [
  { label: "Schedule Meeting", icon: CalendarDays, color: "#DBEAFE", iconColor: "#2563EB" },
  { label: "Meeting Templates", icon: FileText, color: "#D1FAE5", iconColor: "#059669" },
  { label: "Availability Calendar", icon: Layers, color: "#EDE9FE", iconColor: "#7C3AED" },
  { label: "Sync Calendar", icon: RefreshCw, color: "#FEF3C7", iconColor: "#D97706" },
];

// ── Mini Calendar ─────────────────────────────────────────────────────────────

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function MiniCalendar() {
  const [month, setMonth] = useState(4); // 0-indexed → May = 4
  const [year, setYear] = useState(2025);

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
  ];

  // Highlighted dates (upcoming meetings)
  const highlightedDates = [22, 23, 24, 26, 27];
  const todayDate = 22;

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const cells: (number | null)[] = [];
  for (let i = 0; i < firstDay; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);

  const prevMonth = () => {
    if (month === 0) { setMonth(11); setYear((y) => y - 1); }
    else setMonth((m) => m - 1);
  };
  const nextMonth = () => {
    if (month === 11) { setMonth(0); setYear((y) => y + 1); }
    else setMonth((m) => m + 1);
  };

  return (
    <div className="bg-white rounded-xl border border-[#E2E8F0] shadow-sm p-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <button
          onClick={prevMonth}
          className="w-6 h-6 flex items-center justify-center rounded hover:bg-[#F1F5F9] text-[#64748B] transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <span className="text-sm font-semibold text-[#0F172A]">
          {monthNames[month]} {year}
        </span>
        <button
          onClick={nextMonth}
          className="w-6 h-6 flex items-center justify-center rounded hover:bg-[#F1F5F9] text-[#64748B] transition-colors"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
      {/* Day headers */}
      <div className="grid grid-cols-7 mb-1">
        {daysOfWeek.map((d) => (
          <div key={d} className="text-center text-[10px] font-semibold text-[#94A3B8] py-1">
            {d}
          </div>
        ))}
      </div>
      {/* Days grid */}
      <div className="grid grid-cols-7 gap-y-0.5">
        {cells.map((day, idx) => {
          if (!day) return <div key={`empty-${idx}`} />;
          const isHighlighted = highlightedDates.includes(day);
          const isToday = day === todayDate;
          return (
            <button
              key={day}
              className={`
                w-7 h-7 mx-auto flex items-center justify-center rounded-full text-[11px] font-medium transition-colors
                ${isHighlighted && !isToday
                  ? "bg-[#1E3A5F] text-white"
                  : isToday
                  ? "bg-[#2563EB] text-white"
                  : "text-[#374151] hover:bg-[#F1F5F9]"
                }
              `}
            >
              {day}
            </button>
          );
        })}
      </div>
    </div>
  );
}

// ── Meeting Card ──────────────────────────────────────────────────────────────

function MeetingRow({ meeting }: { meeting: Meeting }) {
  return (
    <div className="flex items-start gap-4 py-4 px-5 border-b border-[#F1F5F9] last:border-b-0 hover:bg-[#F8FAFC] transition-colors">
      {/* Date Badge */}
      <div className="flex flex-col items-center justify-center w-12 flex-shrink-0 pt-0.5">
        <span className="text-xl font-extrabold text-[#0F172A] leading-none">{meeting.day}</span>
        <span className="text-[10px] font-bold text-[#64748B] uppercase tracking-wide mt-0.5">{meeting.month}</span>
        <span className="text-[10px] text-[#94A3B8] mt-0.5">{meeting.weekday}</span>
      </div>

      {/* Divider */}
      <div className="w-px self-stretch bg-[#E2E8F0] flex-shrink-0" />

      {/* Meeting Details */}
      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold text-[#0F172A] truncate">{meeting.title}</p>
        <div className="flex items-center gap-1.5 mt-0.5">
          <span className="text-xs text-[#64748B]">🏢</span>
          <span className="text-xs text-[#64748B]">{meeting.company}</span>
        </div>
        <div className="flex items-center gap-1.5 mt-1.5">
          <Clock className="w-3 h-3 text-[#94A3B8] flex-shrink-0" />
          <span className="text-xs text-[#64748B]">{meeting.time}</span>
        </div>
      </div>

      {/* Country */}
      <div className="flex items-center gap-1.5 min-w-[90px] flex-shrink-0">
        <span className="text-base leading-none">{meeting.countryFlag}</span>
        <span className="text-xs text-[#374151]">{meeting.country}</span>
      </div>

      {/* Meeting Type */}
      <div className="flex items-center gap-1.5 min-w-[110px] flex-shrink-0 text-[#64748B]">
        <Video className="w-3.5 h-3.5 flex-shrink-0" />
        <span className="text-xs">{meeting.type}</span>
      </div>

      {/* Three-dot menu */}
      <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-[#F1F5F9] transition-colors text-[#94A3B8] hover:text-[#374151] flex-shrink-0">
        <MoreVertical className="w-4 h-4" />
      </button>
    </div>
  );
}

// ── Main Component ─────────────────────────────────────────────────────────────

const tabs = [
  { id: "upcoming", label: "Upcoming Meetings" },
  { id: "past", label: "Past Meetings" },
  { id: "cancelled", label: "Cancelled Meetings" },
];

export default function PartnerMeetingsPage() {
  const [activeTab, setActiveTab] = useState("upcoming");

  const meetingsByTab: Record<string, Meeting[]> = {
    upcoming: upcomingMeetings,
    past: pastMeetings,
    cancelled: cancelledMeetings,
  };

  const visibleMeetings = meetingsByTab[activeTab] ?? [];

  return (
    <Main fluid className="px-4 sm:px-6 pt-3 pb-6 bg-[#F8FAFC] min-h-screen">
      <div className="flex flex-col gap-5">
        {/* ── Page Header ───────────────────────────────────── */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-[#0F172A] tracking-tight">Meetings</h1>
            <p className="text-sm text-[#64748B] mt-0.5">Manage your meetings and schedules</p>
          </div>
          <Button className="flex items-center gap-2 bg-[#B8922C] hover:bg-[#A07825] text-white rounded-lg px-4 py-2 text-sm font-semibold shadow-sm flex-shrink-0">
            <Plus className="w-4 h-4" />
            + Schedule Meeting
          </Button>
        </div>

        {/* ── Content: Left (Meetings) | Right (Sidebar) ──── */}
        <div className="flex gap-5 items-start">
          {/* ── Left Column ─────────────────────────────────── */}
          <div className="flex-1 min-w-0 flex flex-col gap-0">
            {/* Tabs */}
            <div className="border-b border-[#E2E8F0] mb-0">
              <div className="flex gap-0">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-4 py-2.5 text-sm font-medium transition-colors relative ${
                      activeTab === tab.id
                        ? "text-[#2563EB]"
                        : "text-[#64748B] hover:text-[#374151]"
                    }`}
                  >
                    {tab.label}
                    {activeTab === tab.id && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#2563EB] rounded-t-full" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Meetings List */}
            <div className="bg-white rounded-b-xl rounded-tr-xl border border-[#E2E8F0] shadow-sm overflow-hidden">
              {visibleMeetings.length > 0 ? (
                <>
                  {visibleMeetings.map((meeting) => (
                    <MeetingRow key={meeting.id} meeting={meeting} />
                  ))}
                  {/* View All */}
                  <div className="py-4 text-center border-t border-[#F1F5F9]">
                    <button className="text-sm text-[#2563EB] font-medium hover:underline">
                      View All Meetings
                    </button>
                  </div>
                </>
              ) : (
                <div className="py-16 text-center text-[#94A3B8] text-sm">
                  No {activeTab} meetings found.
                </div>
              )}
            </div>
          </div>

          {/* ── Right Sidebar ─────────────────────────────────── */}
          <div className="w-64 flex-shrink-0 flex flex-col gap-4">
            {/* Mini Calendar */}
            <MiniCalendar />

            {/* Meeting Summary */}
            <div className="bg-white rounded-xl border border-[#E2E8F0] shadow-sm p-4">
              <h3 className="text-sm font-semibold text-[#0F172A] mb-3">Meeting Summary</h3>
              <div className="flex flex-col gap-2.5">
                {summaryStats.map((stat) => (
                  <div key={stat.label} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span
                        className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                        style={{ backgroundColor: stat.color }}
                      />
                      <span className="text-xs text-[#374151]">{stat.label}</span>
                    </div>
                    <span className="text-xs font-bold text-[#0F172A]">{stat.count}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-xl border border-[#E2E8F0] shadow-sm p-4">
              <h3 className="text-sm font-semibold text-[#0F172A] mb-3">Quick Actions</h3>
              <div className="flex flex-col gap-1">
                {quickActions.map((action) => {
                  const Icon = action.icon;
                  return (
                    <button
                      key={action.label}
                      className="flex items-center justify-between gap-3 px-2 py-2 rounded-lg hover:bg-[#F8FAFC] transition-colors group"
                    >
                      <div className="flex items-center gap-2.5">
                        <div
                          className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                          style={{ backgroundColor: action.color }}
                        >
                          <Icon className="w-3.5 h-3.5" style={{ color: action.iconColor }} />
                        </div>
                        <span className="text-xs font-medium text-[#374151] group-hover:text-[#0F172A]">
                          {action.label}
                        </span>
                      </div>
                      <ChevronRight className="w-3.5 h-3.5 text-[#94A3B8] flex-shrink-0" />
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Main>
  );
}
