import { useState } from "react";
import {
  Calendar,
  Clock,
  Users,
  Search,
  ChevronDown,
  Filter,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  Video,
  Ticket,
  ChevronLeft,
  ChevronRight,
  MapPin,
  TrendingUp,
  Award,
  Crown,
  BookOpen,
} from "lucide-react";

// ─── Constants & Mock Data ───
const CATS = [
  { id: "all", label: "All Sessions" },
  { id: "upcoming", label: "Upcoming", badge: true },
  { id: "today", label: "Today" },
  { id: "week", label: "This Week" },
  { id: "past", label: "Past Sessions" },
];

const SESSIONS_DATA = [
  {
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=150&q=80",
    badges: [
      { text: "UPCOMING", color: "bg-[#ECFDF5] text-[#10B981] border-[#A7F3D0]" },
      { text: "INDUSTRY FOCUS", color: "bg-[#F5F3FF] text-[#8B5CF6] border-[#DDD6FE]" },
    ],
    title: "India Textile Sourcing Forum",
    desc: "Connect with top textile manufacturers and explore latest trends, capacities and export opportunities.",
    country: "India",
    countryCode: "in",
    industry: "Textiles & Garments",
    duration: "30 Min",
    type: "One-to-One",
    date: "25 May 2026",
    time: "10:00 AM (EST)",
    seatsFilled: 12,
    seatsTotal: 20,
  },
  {
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=150&q=80",
    badges: [
      { text: "UPCOMING", color: "bg-[#ECFDF5] text-[#10B981] border-[#A7F3D0]" },
      { text: "COUNTRY FOCUS", color: "bg-[#FFFBEB] text-[#D97706] border-[#FDE68A]" },
    ],
    title: "India Food Export Connect",
    desc: "Meet verified Indian food & agri exporters and discover new product opportunities.",
    country: "India",
    countryCode: "in",
    industry: "Food & Agriculture",
    duration: "30 Min",
    type: "One-to-One",
    date: "26 May 2026",
    time: "02:00 PM (EST)",
    seatsFilled: 15,
    seatsTotal: 20,
  },
  {
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=150&q=80",
    badges: [
      { text: "UPCOMING", color: "bg-[#ECFDF5] text-[#10B981] border-[#A7F3D0]" },
      { text: "SECTOR FOCUS", color: "bg-[#EFF6FF] text-[#2563EB] border-[#BFDBFE]" },
    ],
    title: "India Engineering Connect",
    desc: "Source quality engineering products and industrial equipment from trusted Indian exporters.",
    country: "India",
    countryCode: "in",
    industry: "Machinery & Equipment",
    duration: "30 Min",
    type: "One-to-One",
    date: "27 May 2026",
    time: "11:30 AM (EST)",
    seatsFilled: 10,
    seatsTotal: 20,
  },
  {
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=150&q=80",
    badges: [
      { text: "UPCOMING", color: "bg-[#ECFDF5] text-[#10B981] border-[#A7F3D0]" },
      { text: "INDUSTRY FOCUS", color: "bg-[#F5F3FF] text-[#8B5CF6] border-[#DDD6FE]" },
    ],
    title: "India Home & Lifestyle Expo",
    desc: "Explore premium Indian manufacturers in home decor, furniture, and lifestyle products.",
    country: "India",
    countryCode: "in",
    industry: "Home & Living",
    duration: "30 Min",
    type: "One-to-One",
    date: "28 May 2026",
    time: "09:00 AM (EST)",
    seatsFilled: 18,
    seatsTotal: 20,
  },
  {
    image: "https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?auto=format&fit=crop&w=150&q=80",
    badges: [
      { text: "UPCOMING", color: "bg-[#ECFDF5] text-[#10B981] border-[#A7F3D0]" },
      { text: "COUNTRY FOCUS", color: "bg-[#FFFBEB] text-[#D97706] border-[#FDE68A]" },
    ],
    title: "India Chemicals & Materials Meet",
    desc: "Discover reliable Indian suppliers for chemicals, raw materials and specialty products.",
    country: "India",
    countryCode: "in",
    industry: "Chemicals & Materials",
    duration: "30 Min",
    type: "One-to-One",
    date: "29 May 2026",
    time: "03:00 PM (EST)",
    seatsFilled: 14,
    seatsTotal: 20,
  },
];

const CALENDAR_DAYS = [
  { day: 26, isPrevMonth: true },
  { day: 27, isPrevMonth: true },
  { day: 28, isPrevMonth: true },
  { day: 29, isPrevMonth: true },
  { day: 30, isPrevMonth: true },
  { day: 1, isPrevMonth: false },
  { day: 2, isPrevMonth: false },
  { day: 3, isPrevMonth: false },
  { day: 4, isPrevMonth: false },
  { day: 5, isPrevMonth: false },
  { day: 6, isPrevMonth: false },
  { day: 7, isPrevMonth: false },
  { day: 8, isPrevMonth: false, active: true },
  { day: 9, isPrevMonth: false },
  { day: 10, isPrevMonth: false },
  { day: 11, isPrevMonth: false },
  { day: 12, isPrevMonth: false },
  { day: 13, isPrevMonth: false },
  { day: 14, isPrevMonth: false, active: true },
  { day: 15, isPrevMonth: false, active: true },
  { day: 16, isPrevMonth: false },
  { day: 17, isPrevMonth: false },
  { day: 18, isPrevMonth: false },
  { day: 19, isPrevMonth: false },
  { day: 20, isPrevMonth: false },
  { day: 21, isPrevMonth: false, dot: true },
  { day: 22, isPrevMonth: false },
  { day: 23, isPrevMonth: false },
  { day: 24, isPrevMonth: false },
  { day: 25, isPrevMonth: false, active: true, select: true },
  { day: 26, isPrevMonth: false, active: true },
  { day: 27, isPrevMonth: false, active: true },
  { day: 28, isPrevMonth: false, active: true },
  { day: 29, isPrevMonth: false, active: true },
  { day: 30, isPrevMonth: false },
  { day: 31, isPrevMonth: false },
  { day: 1, isNextMonth: true },
  { day: 2, isNextMonth: true },
  { day: 3, isNextMonth: true },
  { day: 4, isNextMonth: true },
  { day: 5, isNextMonth: true },
  { day: 6, isNextMonth: true },
];

export default function ImporterAvailableSessionsPage() {
  const [activeTab, setActiveTab] = useState("all");
  const [countryFilter, setCountryFilter] = useState("All Countries");
  const [industryFilter, setIndustryFilter] = useState("All Industries");
  const [sessionType, setSessionType] = useState("All Session Types");
  const [selectedDate, setSelectedDate] = useState("");

  const handleResetFilters = () => {
    setCountryFilter("All Countries");
    setIndustryFilter("All Industries");
    setSessionType("All Session Types");
    setSelectedDate("");
  };

  return (
    <div className="min-h-full bg-[#F4F6FA] px-6 py-6 text-left">
      {/* ── Breadcrumb ── */}
      <div className="flex items-center gap-2 text-[12px] text-[#64748B] mb-2 font-medium">
        <span>Dashboard</span>
        <span>&gt;</span>
        <span className="text-[#0F172A]">Available Sessions</span>
      </div>

      {/* ── Page Header ── */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <div>
          <h1 className="text-[26px] font-bold text-[#0F172A]">Available Sessions</h1>
          <p className="text-[14px] text-[#64748B] mt-1">
            Join structured Deal Room sessions and connect with verified Indian exporters.
          </p>
        </div>
        <button className="bg-white hover:bg-gray-50 border border-[#D1D5DB] text-[#374151] text-[13px] font-semibold px-4 py-2.5 rounded-lg flex items-center gap-2 shadow-sm shrink-0 self-start sm:self-center transition-colors">
          <Ticket className="size-4.5 text-[#2563EB]" />
          My Booked Sessions
        </button>
      </div>

      {/* ── Tabs ── */}
      <div className="bg-white border border-[#E5E7EB] rounded-xl mb-6 overflow-x-auto shadow-sm">
        <div className="flex min-w-max">
          {CATS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-4 text-[13px] font-semibold whitespace-nowrap border-b-2 flex items-center gap-1.5 transition-colors ${
                activeTab === tab.id
                  ? "border-[#2563EB] text-[#2563EB] bg-[#EFF6FF]"
                  : "border-transparent text-[#64748B] hover:text-[#0F172A] hover:bg-[#F8FAFC]"
              }`}
            >
              {tab.label}
              {tab.badge && (
                <ChevronRight className="size-3.5 text-[#64748B] rotate-90" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* ── Main Layout Grid ── */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6">

        {/* LEFT COLUMN: Filters + Session Cards */}
        <div className="space-y-6">

          {/* Advanced Filter Box */}
          <div className="bg-white border border-[#E5E7EB] rounded-xl p-5 shadow-sm">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 items-end">
              <div>
                <label className="block text-[12px] font-bold text-[#475569] mb-1.5">Country</label>
                <div className="relative">
                  <select
                    value={countryFilter}
                    onChange={(e) => setCountryFilter(e.target.value)}
                    className="w-full border border-[#D1D5DB] rounded-lg pl-3 pr-8 py-2.5 text-[13px] outline-none appearance-none cursor-pointer focus:border-[#2563EB]"
                  >
                    <option>All Countries</option>
                    <option>India</option>
                    <option>United States</option>
                  </select>
                  <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 size-4 text-gray-400 pointer-events-none" />
                </div>
              </div>

              <div>
                <label className="block text-[12px] font-bold text-[#475569] mb-1.5">Industry</label>
                <div className="relative">
                  <select
                    value={industryFilter}
                    onChange={(e) => setIndustryFilter(e.target.value)}
                    className="w-full border border-[#D1D5DB] rounded-lg pl-3 pr-8 py-2.5 text-[13px] outline-none appearance-none cursor-pointer focus:border-[#2563EB]"
                  >
                    <option>All Industries</option>
                    <option>Textiles &amp; Garments</option>
                    <option>Food &amp; Agriculture</option>
                    <option>Machinery &amp; Equipment</option>
                  </select>
                  <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 size-4 text-gray-400 pointer-events-none" />
                </div>
              </div>

              <div>
                <label className="block text-[12px] font-bold text-[#475569] mb-1.5">Session Type</label>
                <div className="relative">
                  <select
                    value={sessionType}
                    onChange={(e) => setSessionType(e.target.value)}
                    className="w-full border border-[#D1D5DB] rounded-lg pl-3 pr-8 py-2.5 text-[13px] outline-none appearance-none cursor-pointer focus:border-[#2563EB]"
                  >
                    <option>All Session Types</option>
                    <option>One-to-One</option>
                    <option>Group Meeting</option>
                  </select>
                  <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 size-4 text-gray-400 pointer-events-none" />
                </div>
              </div>

              <div>
                <label className="block text-[12px] font-bold text-[#475569] mb-1.5">Date</label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Select Date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full border border-[#D1D5DB] rounded-lg pl-3 pr-9 py-2 text-[13px] outline-none focus:border-[#2563EB]"
                  />
                  <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 size-4 text-gray-400" />
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-3 items-center mt-5 pt-4 border-t border-[#F1F5F9]">
              <button
                onClick={handleResetFilters}
                className="text-[13px] font-semibold text-[#64748B] hover:text-[#0F172A] hover:underline"
              >
                Reset
              </button>
              <button className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-[13px] font-semibold px-5 py-2.5 rounded-lg flex items-center gap-1.5 shadow-sm transition-colors">
                <Filter className="size-4" />
                Apply Filters
              </button>
            </div>
          </div>

          {/* Session Cards List */}
          <div className="space-y-4">
            {SESSIONS_DATA.map((sess, idx) => (
              <div key={idx} className="bg-white border border-[#E5E7EB] rounded-xl p-5 shadow-sm hover:shadow-md transition-all grid grid-cols-1 md:grid-cols-[130px_1fr_200px] gap-5 items-stretch relative">
                
                {/* Session Image */}
                <div className="relative rounded-lg overflow-hidden shrink-0 border border-[#E2E8F0] min-h-[100px] md:min-h-0 bg-gray-50">
                  <img src={sess.image} alt={sess.title} className="w-full h-full object-cover" />
                </div>

                {/* Session Details */}
                <div className="flex flex-col justify-between space-y-2">
                  <div className="space-y-1.5">
                    <div className="flex flex-wrap gap-1.5">
                      {sess.badges.map((b, bIdx) => (
                        <span key={bIdx} className={`inline-block text-[9px] font-extrabold px-2 py-0.5 rounded-sm border ${b.color}`}>
                          {b.text}
                        </span>
                      ))}
                    </div>

                    <h3 className="text-[15px] font-bold text-[#0F172A] hover:text-[#2563EB] cursor-pointer transition-colors leading-tight">
                      {sess.title}
                    </h3>
                    
                    <p className="text-[12.5px] text-[#64748B] leading-relaxed">
                      {sess.desc}
                    </p>
                  </div>

                  {/* Horizontal Meta Row */}
                  <div className="flex flex-wrap gap-x-4 gap-y-1.5 text-[11px] text-[#64748B] font-semibold pt-1">
                    <span className="flex items-center gap-1">
                      <img src={`https://flagcdn.com/w40/${sess.countryCode}.png`} alt={sess.country} className="w-3.5 h-2 object-cover border border-gray-100" />
                      {sess.country}
                    </span>
                    <span>• {sess.industry}</span>
                    <span>• {sess.duration}</span>
                    <span>• {sess.type}</span>
                  </div>
                </div>

                {/* Scheduling Area (Right Card Section) */}
                <div className="border-t md:border-t-0 md:border-l border-[#E5E7EB] pt-4 md:pt-0 md:pl-5 flex flex-col justify-between items-start md:items-end text-left md:text-right gap-3">
                  <div className="space-y-2 w-full">
                    {/* Date Details */}
                    <div className="flex items-center md:justify-end gap-2 text-[#0F172A] font-bold text-[13px]">
                      <Calendar className="size-4 text-[#2563EB] shrink-0" />
                      <span>{sess.date}</span>
                    </div>

                    {/* Time Details */}
                    <div className="flex items-center md:justify-end gap-2 text-[#0F172A] font-bold text-[13px]">
                      <Clock className="size-4 text-[#2563EB] shrink-0" />
                      <span>{sess.time}</span>
                    </div>

                    {/* Seats tracking */}
                    <div className="flex items-center justify-between md:justify-end gap-2 text-[12px] font-bold pt-1">
                      <span className="text-[#64748B]">Seats:</span>
                      <span className="text-[#10B981]">{sess.seatsFilled} / {sess.seatsTotal}</span>
                    </div>
                  </div>

                  <button className="w-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-[13px] font-semibold py-2 rounded-lg transition-colors whitespace-nowrap">
                    Reserve Seat
                  </button>
                </div>

              </div>
            ))}
          </div>

          {/* Footer Pagination */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 bg-white border border-[#E5E7EB] rounded-xl shadow-sm">
            <span className="text-[12px] text-[#64748B]">Showing 1 to 5 of 12 sessions</span>
            
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <button className="w-8 h-8 rounded-lg border border-[#D1D5DB] flex items-center justify-center hover:bg-gray-50 text-gray-500">
                  <ChevronLeft className="size-4" />
                </button>
                <button className="w-8 h-8 rounded-lg bg-[#2563EB] text-white flex items-center justify-center text-[12px] font-bold">
                  1
                </button>
                <button className="w-8 h-8 rounded-lg border border-[#D1D5DB] flex items-center justify-center hover:bg-gray-50 text-gray-600 text-[12px] font-semibold">
                  2
                </button>
                <button className="w-8 h-8 rounded-lg border border-[#D1D5DB] flex items-center justify-center hover:bg-gray-50 text-gray-600 text-[12px] font-semibold">
                  3
                </button>
                <button className="w-8 h-8 rounded-lg border border-[#D1D5DB] flex items-center justify-center hover:bg-gray-50 text-gray-500">
                  <ChevronRight className="size-4" />
                </button>
              </div>

              <div className="relative">
                <select className="bg-white border border-[#D1D5DB] rounded-lg pl-3 pr-8 py-1.5 text-[12px] font-semibold text-[#374151] outline-none appearance-none cursor-pointer focus:border-[#2563EB]">
                  <option>10 / page</option>
                  <option>20 / page</option>
                  <option>50 / page</option>
                </select>
                <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 size-3.5 text-gray-400 pointer-events-none" />
              </div>
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN: Guide & Calendar & Allowance */}
        <div className="space-y-6">

          {/* Session Guide */}
          <div className="bg-white border border-[#E5E7EB] rounded-xl p-5 shadow-sm">
            <h3 className="text-[14px] font-bold text-[#0F172A] mb-3 flex items-center gap-1.5">
              <BookOpen className="size-4 text-[#2563EB]" />
              Session Guide
            </h3>
            <ul className="space-y-3.5 text-[12.5px] text-[#374151] leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] shrink-0 mt-2" />
                All sessions are one-to-one virtual meetings with verified exporters.
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] shrink-0 mt-2" />
                Each session is 30 minutes long.
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] shrink-0 mt-2" />
                You can book up to 5 sessions per plan.
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] shrink-0 mt-2" />
                Join on time to make the most of your meeting.
              </li>
            </ul>

            <a href="#" className="mt-4 text-[13px] font-bold text-[#2563EB] hover:underline inline-block text-center w-full">
              View Full Guide
            </a>
          </div>

          {/* Calendar View Box */}
          <div className="bg-white border border-[#E5E7EB] rounded-xl p-4 shadow-sm">
            <h3 className="text-[14px] font-bold text-[#0F172A] mb-3 flex items-center gap-1.5">
              <Calendar className="size-4 text-[#2563EB]" />
              Calendar View
            </h3>

            {/* Calendar Widget */}
            <div className="border border-[#E2E8F0] rounded-xl p-3">
              <div className="flex justify-between items-center mb-3">
                <button className="p-1 hover:bg-gray-100 rounded-md text-gray-500">
                  <ChevronLeft className="size-4" />
                </button>
                <span className="text-[12px] font-extrabold text-[#0F172A]">May 2026</span>
                <button className="p-1 hover:bg-gray-100 rounded-md text-gray-500">
                  <ChevronRight className="size-4" />
                </button>
              </div>

              {/* Days header */}
              <div className="grid grid-cols-7 gap-1 text-center text-[10px] font-extrabold text-[#64748B] mb-2 uppercase">
                <span>Sun</span>
                <span>Mon</span>
                <span>Tue</span>
                <span>Wed</span>
                <span>Thu</span>
                <span>Fri</span>
                <span>Sat</span>
              </div>

              {/* Days grid */}
              <div className="grid grid-cols-7 gap-1">
                {CALENDAR_DAYS.map((dayObj, idx) => (
                  <div
                    key={idx}
                    className={`h-7 rounded-lg flex flex-col items-center justify-center relative text-[11px] font-bold cursor-pointer transition-colors ${
                      dayObj.isPrevMonth || dayObj.isNextMonth
                        ? "text-[#CBD5E1]"
                        : dayObj.select
                        ? "bg-[#2563EB] text-white"
                        : dayObj.active
                        ? "bg-[#EFF6FF] text-[#2563EB] hover:bg-[#DBEAFE]"
                        : "text-[#0F172A] hover:bg-[#F8FAFC]"
                    }`}
                  >
                    <span>{dayObj.day}</span>
                    {dayObj.dot && (
                      <span className="absolute bottom-1 w-1 h-1 rounded-full bg-[#10B981]" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            <a href="#" className="mt-4 text-[13px] font-bold text-[#2563EB] hover:underline inline-block text-center w-full">
              View Full Calendar
            </a>
          </div>

          {/* Your Session Allowance Box */}
          <div className="bg-white border border-[#E5E7EB] rounded-xl p-5 shadow-sm text-center">
            <h3 className="text-[14px] font-bold text-[#0F172A] text-left mb-4">Your Session Allowance</h3>
            
            {/* Allowance ring indicator */}
            <div className="flex justify-center mb-4">
              <div className="relative w-24 h-24">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 64 64">
                  <circle cx="32" cy="32" r="26" stroke="#E5E7EB" strokeWidth="5.5" fill="none" />
                  <circle
                    cx="32" cy="32" r="26"
                    stroke="#10B981"
                    strokeWidth="5.5"
                    fill="none"
                    strokeDasharray={`${2 * Math.PI * 26 * 1.0} ${2 * Math.PI * 26}`}
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-[18px] font-extrabold text-[#0F172A]">5 / 5</span>
                  <span className="text-[10px] text-[#64748B] font-semibold mt-0.5">Sessions Left</span>
                </div>
              </div>
            </div>

            <div className="space-y-1 mb-4">
              <p className="text-[12px] text-[#64748B] font-medium leading-none">
                Plan: <strong className="text-[#374151]">Buyer Growth Access Plan</strong>
              </p>
              <p className="text-[11px] text-[#64748B] leading-none">
                Resets on: 01 Jun 2026
              </p>
            </div>

            <button className="w-full border border-[#2563EB] text-[#2563EB] hover:bg-[#EFF6FF] text-[13px] font-semibold py-2 rounded-lg flex items-center justify-center gap-1.5 transition-colors">
              <Crown className="size-4 text-[#D97706] fill-[#D97706]" />
              Upgrade Plan
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
