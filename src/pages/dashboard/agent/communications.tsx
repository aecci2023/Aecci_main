import { useState } from "react";
import {
  Archive,
  ChevronDown,
  Download,
  FileText,
  Inbox,
  Mail,
  Plus,
  Search,
  Send,
  Star,
} from "lucide-react";
import { Main } from "@/components/layout/main";
import { Button } from "@/components/ui/button";

const TABS = ["Messages", "Announcements", "Notifications"] as const;

const STATS = [
  {
    label: "Inbox",
    value: "24",
    sub: "Unread messages",
    icon: Mail,
    iconBg: "bg-[#EFF8FF]",
    iconColor: "text-[#175CD3]",
  },
  {
    label: "Sent",
    value: "36",
    sub: "Messages sent",
    icon: Send,
    iconBg: "bg-[#ECFDF3]",
    iconColor: "text-[#039855]",
  },
  {
    label: "Important",
    value: "8",
    sub: "Starred messages",
    icon: Star,
    iconBg: "bg-[#FFFAEB]",
    iconColor: "text-[#DC6803]",
  },
  {
    label: "Archived",
    value: "15",
    sub: "Archived messages",
    icon: Archive,
    iconBg: "bg-[#F4F3FF]",
    iconColor: "text-[#6938EF]",
  },
];

const THREADS = [
  {
    id: "1",
    company: "Precision Tools Pvt. Ltd.",
    preview: "Deal collaboration opportunity",
    time: "10:20 AM",
    unread: true,
    subject: "Deal collaboration opportunity",
    byline: "By me",
    body: "Hello Michael,\n\nWe are interested in exploring a collaboration opportunity for industrial machinery exports to the European market. Let's schedule a meeting to discuss potential synergies.\n\nBest regards,\nJames Carter",
    attachments: [
      { name: "Company_Profile.pdf", size: "2.4 MB" },
      { name: "Product_Catalog.pdf", size: "4.1 MB" },
    ],
  },
  {
    id: "2",
    company: "Sunrise Exports",
    preview: "Following up on textile sourcing",
    time: "Yesterday",
    unread: false,
    subject: "Textile sourcing follow-up",
    byline: "Sunrise Exports",
    body: "Thank you for connecting us with the USA buyer. We would like to schedule a follow-up meeting to discuss next steps for the garment shipment.",
    attachments: [],
  },
  {
    id: "3",
    company: "Global Trade Solutions",
    preview: "Partnership proposal for GCC",
    time: "Mon",
    unread: true,
    subject: "Partnership proposal for GCC",
    byline: "Global Trade Solutions",
    body: "We would like to propose a partnership for representing our GCC trade corridor interests through AECCI Deal Rooms.",
    attachments: [{ name: "Proposal.pdf", size: "1.2 MB" }],
  },
  {
    id: "4",
    company: "Apex Solutions Ltd.",
    preview: "Meeting confirmation for next week",
    time: "Sun",
    unread: false,
    subject: "Meeting confirmation",
    byline: "Apex Solutions Ltd.",
    body: "This is to confirm our meeting next week regarding the industrial tools collaboration.",
    attachments: [],
  },
  {
    id: "5",
    company: "Trade Connect Hub",
    preview: "Documents shared for review",
    time: "Sat",
    unread: false,
    subject: "Documents for review",
    byline: "Trade Connect Hub",
    body: "Please find attached the compliance documents for your review.",
    attachments: [{ name: "Checklist.pdf", size: "890 KB" }],
  },
  {
    id: "6",
    company: "International Chamber",
    preview: "Invitation to trade forum",
    time: "Fri",
    unread: false,
    subject: "Invitation to trade forum",
    byline: "International Chamber",
    body: "You are invited to join our upcoming international trade forum next month.",
    attachments: [],
  },
];

function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

export default function AgentCommunicationsPage() {
  const [tab, setTab] = useState<(typeof TABS)[number]>("Messages");
  const [activeId, setActiveId] = useState(THREADS[0].id);
  const active = THREADS.find((t) => t.id === activeId) || THREADS[0];

  return (
    <Main
      fluid
      className="min-h-full space-y-5 overflow-x-hidden bg-[#F8FAFC]! px-3 pb-8 sm:space-y-6 sm:px-5"
    >
      <div>
        <h1 className="text-[22px] font-bold tracking-tight text-[#101828] sm:text-[24px]">
          Communications
        </h1>
        <p className="mt-1 text-[13px] text-[#667085]">
          Manage messages, announcements and notifications.
        </p>
      </div>

      {/* Tabs + New Message */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-nowrap gap-1 overflow-x-auto border-b border-[#E4E7EC]">
          {TABS.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setTab(t)}
              className={`shrink-0 border-b-2 px-3 py-2.5 text-[12px] font-semibold transition ${
                tab === t
                  ? "border-[#175CD3] text-[#175CD3]"
                  : "border-transparent text-[#667085] hover:text-[#344054]"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
        <Button className="h-10 shrink-0 rounded-lg bg-[#061A33] px-4 text-[13px] font-semibold text-white hover:bg-[#0A2744]">
          <Plus className="mr-1.5 size-4" />
          New Message
        </Button>
      </div>

      {/* Stats cards */}
      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        {STATS.map((stat) => (
          <div
            key={stat.label}
            className="rounded-2xl border border-[#E4E7EC] bg-white p-4 shadow-[0_1px_2px_rgba(16,24,40,0.05)]"
          >
            <div className="flex items-start justify-between gap-2">
              <div>
                <p className="text-[11px] font-medium text-[#667085]">{stat.label}</p>
                <p className="mt-1.5 text-[24px] font-bold leading-none text-[#101828]">
                  {stat.value}
                </p>
                <p className="mt-1.5 text-[11px] text-[#98A2B3]">{stat.sub}</p>
              </div>
              <span
                className={`flex size-12 shrink-0 items-center justify-center rounded-xl ${stat.iconBg} ${stat.iconColor}`}
              >
                <stat.icon className="size-6" />
              </span>
            </div>
          </div>
        ))}
      </div>

      {tab === "Messages" ? (
        <div className="grid grid-cols-1 overflow-hidden rounded-2xl border border-[#E4E7EC] bg-white shadow-[0_1px_2px_rgba(16,24,40,0.05)] lg:grid-cols-[340px_minmax(0,1fr)]">
          {/* Thread list */}
          <div className="flex flex-col border-b border-[#E4E7EC] lg:border-r lg:border-b-0">
            <div className="flex gap-2 border-b border-[#E4E7EC] p-3">
              <div className="flex h-10 flex-1 items-center gap-2 rounded-lg border border-[#D0D5DD] bg-[#F9FAFB] px-3">
                <Search className="size-4 shrink-0 text-[#98A2B3]" />
                <input
                  placeholder="Search messages..."
                  className="w-full bg-transparent text-[13px] outline-none placeholder:text-[#98A2B3]"
                />
              </div>
              <button
                type="button"
                className="flex h-10 shrink-0 items-center gap-1 rounded-lg border border-[#D0D5DD] bg-white px-2.5 text-[12px] font-medium text-[#344054]"
              >
                All
                <ChevronDown className="size-3.5 text-[#98A2B3]" />
              </button>
            </div>

            <ul className="max-h-[460px] flex-1 overflow-y-auto">
              {THREADS.map((thread) => (
                <li key={thread.id}>
                  <button
                    type="button"
                    onClick={() => setActiveId(thread.id)}
                    className={`flex w-full items-start gap-3 border-b border-[#F2F4F7] px-4 py-3.5 text-left transition hover:bg-[#F9FAFB] ${
                      activeId === thread.id ? "bg-[#EFF8FF]" : ""
                    }`}
                  >
                    <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-full bg-[#061A33] text-[11px] font-bold text-white">
                      {initials(thread.company)}
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <p
                          className={`truncate text-[12px] ${
                            thread.unread
                              ? "font-bold text-[#101828]"
                              : "font-semibold text-[#344054]"
                          }`}
                        >
                          {thread.company}
                        </p>
                        <span className="shrink-0 text-[10px] text-[#98A2B3]">
                          {thread.time}
                        </span>
                      </div>
                      <p className="mt-0.5 truncate text-[11px] text-[#667085]">
                        {thread.preview}
                      </p>
                    </div>
                  </button>
                </li>
              ))}
            </ul>

            <div className="border-t border-[#E4E7EC] px-4 py-3 text-center">
              <button
                type="button"
                className="text-[12px] font-semibold text-[#175CD3] hover:underline"
              >
                View All Messages
              </button>
            </div>
          </div>

          {/* Message detail */}
          <div className="flex min-h-[480px] flex-col">
            <div className="flex items-start justify-between gap-3 border-b border-[#E4E7EC] px-4 py-4 sm:px-5">
              <div className="flex min-w-0 items-start gap-3">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[#061A33] text-[12px] font-bold text-white">
                  {initials(active.company)}
                </span>
                <div className="min-w-0">
                  <p className="truncate text-[14px] font-bold text-[#101828]">
                    {active.company}
                  </p>
                  <p className="mt-0.5 text-[11px] text-[#667085]">{active.byline}</p>
                </div>
              </div>
              <div className="flex shrink-0 items-center gap-2">
                <span className="text-[11px] text-[#98A2B3]">{active.time}</span>
                <button
                  type="button"
                  className="rounded-lg p-1.5 text-[#F79009] hover:bg-[#FFFAEB]"
                  aria-label="Star"
                >
                  <Star className="size-4 fill-[#F79009]" />
                </button>
              </div>
            </div>

            <div className="flex-1 space-y-5 overflow-y-auto px-4 py-5 sm:px-5">
              <h2 className="text-[18px] font-bold text-[#101828]">{active.subject}</h2>
              <p className="whitespace-pre-line text-[13px] leading-relaxed text-[#344054]">
                {active.body}
              </p>

              {active.attachments.length > 0 && (
                <div>
                  <p className="text-[13px] font-bold text-[#101828]">
                    Attachments ({active.attachments.length})
                  </p>
                  <div className="mt-3 grid gap-2 sm:grid-cols-2">
                    {active.attachments.map((file) => (
                      <div
                        key={file.name}
                        className="flex items-center gap-3 rounded-xl border border-[#E4E7EC] bg-[#F9FAFB] px-3 py-3"
                      >
                        <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-[#FEF3F2] text-[#D92D20]">
                          <FileText className="size-4" />
                        </span>
                        <div className="min-w-0 flex-1">
                          <p className="truncate text-[12px] font-semibold text-[#101828]">
                            {file.name}
                          </p>
                          <p className="text-[10px] text-[#667085]">{file.size}</p>
                        </div>
                        <button
                          type="button"
                          className="rounded-lg p-1.5 text-[#667085] hover:bg-white"
                          aria-label={`Download ${file.name}`}
                        >
                          <Download className="size-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="border-t border-[#E4E7EC] p-4 sm:p-5">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
                <input
                  placeholder="Type your reply..."
                  className="h-11 w-full flex-1 rounded-xl border border-[#D0D5DD] px-3.5 text-[13px] outline-none focus:border-[#175CD3] focus:ring-1 focus:ring-[#175CD3]"
                />
                <Button className="h-11 shrink-0 rounded-lg bg-[#061A33] px-5 text-[13px] font-semibold hover:bg-[#0A2744]">
                  Reply
                </Button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="rounded-2xl border border-[#E4E7EC] bg-white p-10 text-center shadow-[0_1px_2px_rgba(16,24,40,0.05)]">
          <Inbox className="mx-auto size-10 text-[#98A2B3]" />
          <p className="mt-3 text-[14px] font-semibold text-[#101828]">
            No {tab.toLowerCase()} yet
          </p>
          <p className="mt-1 text-[12px] text-[#667085]">
            New {tab.toLowerCase()} will appear here when available.
          </p>
        </div>
      )}
    </Main>
  );
}
