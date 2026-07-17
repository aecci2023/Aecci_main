import {
  Calendar,
  Clock,
  Video,
  MessageSquare,
} from "lucide-react";

const BOOKED_MEETINGS = [
  {
    title: "India Textile Sourcing Forum",
    status: "Confirmed",
    statusColor: "bg-[#EBFDF5] text-[#10B981] border-[#A7F3D0]",
    date: "25 May 2026",
    time: "10:00 AM - 10:30 AM (EST)",
    exporter: "ABC Textiles Pvt Ltd",
    representative: "Rajesh Kumar (Sales Director)",
    meetingLink: "https://zoom.us/j/123456789",
    type: "One-to-One Virtual",
  },
  {
    title: "India Food Export Connect",
    status: "Pending Exporter Approval",
    statusColor: "bg-[#FFFBEB] text-[#D97706] border-[#FDE68A]",
    date: "26 May 2026",
    time: "02:00 PM - 02:30 PM (EST)",
    exporter: "Shree Fabrics Exports",
    representative: "Sanjay Singh (Export Head)",
    meetingLink: "",
    type: "One-to-One Virtual",
  },
];

export default function ImporterMyMeetingsPage() {
  return (
    <div className="min-h-full bg-[#F4F6FA] px-6 py-6 text-left">
      {/* ── Breadcrumb ── */}
      <div className="flex items-center gap-2 text-[12px] text-[#64748B] mb-2 font-medium">
        <span>Dashboard</span>
        <span>&gt;</span>
        <span className="text-[#0F172A]">My Meetings</span>
      </div>

      {/* ── Page Header ── */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <div>
          <h1 className="text-[26px] font-bold text-[#0F172A]">My Meetings</h1>
          <p className="text-[14px] text-[#64748B] mt-1">
            View and manage your scheduled B2B deal room meetings.
          </p>
        </div>
      </div>

      {/* ── Tabs ── */}
      <div className="bg-white border border-[#E5E7EB] rounded-xl mb-6 overflow-x-auto shadow-sm">
        <div className="flex min-w-max">
          {["All Meetings", "Confirmed", "Pending", "Past"].map((tab, idx) => {
            const active = idx === 0;
            return (
              <button
                key={tab}
                className={`px-6 py-4 text-[13px] font-semibold whitespace-nowrap border-b-2 transition-colors ${
                  active
                    ? "border-[#2563EB] text-[#2563EB] bg-[#EFF6FF]"
                    : "border-transparent text-[#64748B] hover:text-[#0F172A] hover:bg-[#F8FAFC]"
                }`}
              >
                {tab}
              </button>
            );
          })}
        </div>
      </div>

      {/* ── Content Grid ── */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6">
        
        {/* Left Column: Meetings List */}
        <div className="space-y-4">
          {BOOKED_MEETINGS.map((meeting, idx) => (
            <div key={idx} className="bg-white border border-[#E5E7EB] rounded-xl p-5 shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row gap-5 items-stretch justify-between">
              <div className="space-y-3 flex-1">
                <div className="flex flex-wrap gap-2 items-center">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold border ${meeting.statusColor}`}>
                    {meeting.status}
                  </span>
                  <span className="bg-[#EFF6FF] text-[#2563EB] border border-[#BFDBFE] rounded-full px-2.5 py-0.5 text-[10px] font-bold">
                    {meeting.type}
                  </span>
                </div>

                <h3 className="text-[16px] font-bold text-[#0F172A]">
                  {meeting.title}
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[13px] text-[#475569]">
                  <div className="flex items-center gap-2">
                    <Calendar className="size-4 text-[#2563EB]" />
                    <span className="font-semibold text-[#0F172A]">{meeting.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="size-4 text-[#2563EB]" />
                    <span className="font-semibold text-[#0F172A]">{meeting.time}</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-[#F1F5F9] text-[13px] space-y-1">
                  <p className="text-[#64748B]">
                    Exporter: <strong className="text-[#374151]">{meeting.exporter}</strong>
                  </p>
                  <p className="text-[#64748B]">
                    Representative: <span className="text-[#374151]">{meeting.representative}</span>
                  </p>
                </div>
              </div>

              {/* Action buttons on the right */}
              <div className="border-t md:border-t-0 md:border-l border-[#E5E7EB] pt-4 md:pt-0 md:pl-5 flex flex-col justify-center gap-2.5 min-w-[180px]">
                {meeting.meetingLink ? (
                  <a
                    href={meeting.meetingLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-[#10B981] hover:bg-[#0D9488] text-white text-[13px] font-semibold py-2.5 rounded-lg flex items-center justify-center gap-1.5 shadow-sm transition-colors"
                  >
                    <Video className="size-4" />
                    Join Video Call
                  </a>
                ) : (
                  <button
                    disabled
                    className="w-full bg-gray-100 text-gray-400 text-[13px] font-semibold py-2.5 rounded-lg flex items-center justify-center gap-1.5 cursor-not-allowed"
                  >
                    <Clock className="size-4" />
                    Awaiting Link
                  </button>
                )}
                
                <button className="w-full border border-[#D1D5DB] text-[#374151] hover:bg-gray-50 text-[12px] font-semibold py-2 rounded-lg transition-colors">
                  Reschedule / Cancel
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Right Column: Guide & Quick Help */}
        <div className="space-y-6">
          <div className="bg-white border border-[#E5E7EB] rounded-xl p-5 shadow-sm">
            <h3 className="text-[14px] font-bold text-[#0F172A] mb-3 flex items-center gap-1.5">
              <MessageSquare className="size-4 text-[#2563EB]" />
              Meeting Instructions
            </h3>
            <ul className="space-y-3.5 text-[12.5px] text-[#374151] leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] shrink-0 mt-2" />
                Click "Join Video Call" to launch the virtual meeting room.
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] shrink-0 mt-2" />
                Please join at least 2 minutes before the scheduled time.
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] shrink-0 mt-2" />
                Ensure your micro and camera are working properly.
              </li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
}
