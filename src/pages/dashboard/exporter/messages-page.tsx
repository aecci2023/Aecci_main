import { useState } from "react";
import {
  BadgeCheck,
  Building2,
  Calendar,
  CheckCheck,
  ChevronDown,
  ChevronRight,
  Download,
  FileSpreadsheet,
  FileText,
  Info,
  MoreVertical,
  Paperclip,
  Phone,
  Plus,
  Search,
  Send,
  Smile,
  Star,
  StickyNote,
  Type,
  Video,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  ExporterPageShell,
  ExporterCard,
  ExporterBreadcrumb,
} from "@/components/exporter/exporter-page-layout";

const FLAG_UAE = "https://flagcdn.com/w40/ae.png";

const LIST_TABS = [
  { id: "All", label: "All" },
  { id: "Unread", label: "Unread", count: 5 },
  { id: "Favorites", label: "Favorites" },
  { id: "Groups", label: "Groups" },
] as const;

type TabId = (typeof LIST_TABS)[number]["id"];

const CONVERSATIONS = [
  {
    id: "1",
    initials: "GT",
    avatarBg: "bg-[#175CD3]/10 text-[#175CD3]",
    company: "GlobalTex Exports LLC",
    preview: "We can share updated FOB pricing for the spring catalog by EOD.",
    time: "10:30 AM",
    unread: 2,
  },
  {
    id: "2",
    initials: "BC",
    avatarBg: "bg-[#F79009]/10 text-[#B54708]",
    company: "BuildCore Trading FZE",
    preview: "Please confirm lead time for the ceramic tile shipment.",
    time: "Yesterday",
    unread: 0,
  },
  {
    id: "3",
    initials: "MD",
    avatarBg: "bg-[#039855]/10 text-[#027A48]",
    company: "Mediplus Distributors Ltd",
    preview: "Our regulatory team approved the product specs document.",
    time: "Yesterday",
    unread: 0,
  },
  {
    id: "4",
    initials: "ST",
    avatarBg: "bg-[#7A5AF8]/10 text-[#5925DC]",
    company: "SinoTrade Solutions",
    preview: "Can we schedule a video call for next Tuesday?",
    time: "Mon",
    unread: 1,
  },
  {
    id: "5",
    initials: "AS",
    avatarBg: "bg-[#101828]/10 text-[#344054]",
    company: "AECCI Support",
    preview: "Your verification documents have been received.",
    time: "Mon",
    unread: 0,
  },
];

type MessageItem =
  | { kind: "date"; label: string }
  | {
      kind: "message";
      from: "them" | "me";
      senderName?: string;
      text?: string;
      time: string;
      attachment?: { name: string; size: string };
    };

const CHAT_MESSAGES: MessageItem[] = [
  { kind: "date", label: "Today, 24 May 2025" },
  {
    kind: "message",
    from: "them",
    senderName: "Sarah Al Mansoori",
    text: "Good morning! Thanks for connecting through the UAE Textile Deal Room.",
    time: "09:15 AM",
  },
  {
    kind: "message",
    from: "me",
    text: "Happy to connect, Sarah. I've attached our company profile with current export capabilities.",
    time: "09:22 AM",
  },
  {
    kind: "message",
    from: "me",
    time: "09:23 AM",
    attachment: { name: "GlobalTex_Profile.pdf", size: "1.2 MB" },
  },
  {
    kind: "message",
    from: "them",
    senderName: "Sarah Al Mansoori",
    text: "Received — our sourcing team will review and revert with MOQ questions by tomorrow.",
    time: "10:30 AM",
  },
];

const SHARED_FILES = [
  {
    name: "GlobalTex_Profile.pdf",
    size: "1.2 MB",
    time: "24 May 2025, 09:23 AM",
    type: "pdf" as const,
  },
  {
    name: "FOB_Pricing_Spring2025.xlsx",
    size: "842 KB",
    time: "22 May 2025, 04:10 PM",
    type: "xlsx" as const,
  },
  {
    name: "Sample_Catalog_Q2.pdf",
    size: "3.4 MB",
    time: "18 May 2025, 11:45 AM",
    type: "pdf" as const,
  },
];

function ThreadAvatar({
  initials,
  avatarBg,
}: {
  initials: string;
  avatarBg: string;
}) {
  return (
    <div
      className={`flex size-10 shrink-0 items-center justify-center rounded-lg text-[11px] font-bold ${avatarBg}`}
    >
      {initials}
    </div>
  );
}

export default function MessagesPage() {
  const [listTab, setListTab] = useState<TabId>("All");
  const [selectedId, setSelectedId] = useState("1");

  return (
    <ExporterPageShell className="space-y-5">
      <header className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div className="min-w-0">
          <ExporterBreadcrumb
            items={[
              { label: "Dashboard", to: "/dashboard" },
              { label: "Messages" },
            ]}
          />
          <h1 className="mt-2 text-[22px] font-bold text-[#101828] sm:text-[24px]">
            Messages
          </h1>
          <p className="mt-1 max-w-xl text-[13px] leading-relaxed text-[#667085]">
            Communicate, collaborate and close deals globally.
          </p>
        </div>
        <div className="flex w-full flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center lg:w-auto lg:justify-end">
          <Button
            variant="outline"
            className="h-10 w-full rounded-lg border-[#B2DDFF] bg-white text-[12px] font-semibold text-[#175CD3] hover:bg-[#EFF8FF] sm:w-auto"
          >
            <Plus className="mr-1.5 size-4" />
            New Message
          </Button>
          <button
            type="button"
            className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-[#E4E7EC] text-[#667085] hover:bg-[#F9FAFB]"
            aria-label="More options"
          >
            <MoreVertical className="size-4" />
          </button>
          <div className="relative min-w-0 flex-1 sm:min-w-[220px] lg:w-[260px] lg:flex-none">
            <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-[#98A2B3]" />
            <input
              placeholder="Search in conversation..."
              className="h-10 w-full rounded-lg border border-[#D0D5DD] bg-white pl-9 pr-3 text-[13px] text-[#101828] outline-none focus:border-[#175CD3] focus:ring-1 focus:ring-[#175CD3]"
            />
          </div>
        </div>
      </header>

      <div className="flex min-h-0 min-w-0 flex-col gap-4 overflow-x-hidden xl:grid xl:grid-cols-[280px_minmax(0,1fr)_280px] xl:items-stretch">
        {/* Column 1 — Conversation list */}
        <div className="flex min-w-0 flex-col gap-3">
          <ExporterCard className="flex flex-col overflow-hidden p-0">
            <div className="border-b border-[#E4E7EC] px-3">
              <div className="flex gap-0 overflow-x-auto">
                {LIST_TABS.map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setListTab(tab.id)}
                    className={`shrink-0 border-b-2 px-2.5 py-3 text-[11px] font-semibold transition sm:px-3 sm:text-[12px] ${
                      listTab === tab.id
                        ? "border-[#175CD3] text-[#175CD3]"
                        : "border-transparent text-[#667085] hover:text-[#344054]"
                    }`}
                  >
                    {tab.label}
                    {"count" in tab && tab.count !== undefined ? (
                      <span className="ml-1 text-[#667085]">({tab.count})</span>
                    ) : null}
                  </button>
                ))}
              </div>
            </div>
            <ul className="max-h-[420px] flex-1 divide-y divide-[#E4E7EC] overflow-y-auto xl:max-h-none">
              {CONVERSATIONS.map((c) => {
                const isActive = selectedId === c.id;
                return (
                  <li key={c.id}>
                    <button
                      type="button"
                      onClick={() => setSelectedId(c.id)}
                      className={`flex w-full items-start gap-2.5 p-3 text-left transition ${
                        isActive ? "bg-[#EFF8FF]" : "hover:bg-[#F9FAFB]"
                      }`}
                    >
                      <ThreadAvatar
                        initials={c.initials}
                        avatarBg={c.avatarBg}
                      />
                      <div className="min-w-0 flex-1">
                        <div className="flex items-start justify-between gap-1">
                          <p className="flex min-w-0 items-center gap-1 truncate text-[12px] font-semibold text-[#101828]">
                            <span className="truncate">{c.company}</span>
                            <BadgeCheck
                              className="size-3.5 shrink-0 text-[#039855]"
                              aria-hidden
                            />
                          </p>
                          <span className="shrink-0 text-[10px] text-[#98A2B3]">
                            {c.time}
                          </span>
                        </div>
                        <p className="mt-0.5 line-clamp-2 text-[11px] leading-snug text-[#667085]">
                          {c.preview}
                        </p>
                      </div>
                      {c.unread > 0 ? (
                        <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-[#175CD3] text-[10px] font-bold text-white">
                          {c.unread}
                        </span>
                      ) : null}
                    </button>
                  </li>
                );
              })}
            </ul>
            <div className="border-t border-[#E4E7EC] p-3">
              <Button
                variant="outline"
                className="h-9 w-full rounded-lg border-[#E4E7EC] text-[12px] font-semibold text-[#344054] hover:bg-[#F9FAFB]"
              >
                Load More Conversations
              </Button>
            </div>
          </ExporterCard>

          <ExporterCard className="border-[#B2DDFF] bg-[#EFF8FF] p-4">
            <h3 className="text-[13px] font-bold text-[#101828]">
              Stay Connected, Everywhere
            </h3>
            <p className="mt-1 text-[11px] leading-relaxed text-[#667085]">
              Get instant alerts when partners reply or share deal documents.
            </p>
            <Button className="mt-3 h-9 w-full rounded-lg bg-[#175CD3] text-[12px] font-semibold hover:bg-[#1448B0]">
              Enable Notifications
            </Button>
          </ExporterCard>
        </div>

        {/* Column 2 — Active chat */}
        <ExporterCard className="flex min-h-[420px] min-w-0 flex-col overflow-hidden p-0 sm:min-h-[560px] xl:min-h-0">
          <div className="flex flex-wrap items-start justify-between gap-3 border-b border-[#E4E7EC] px-3 py-3 sm:px-4">
            <div className="flex min-w-0 flex-1 gap-3">
              <ThreadAvatar initials="GT" avatarBg="bg-[#175CD3]/10 text-[#175CD3]" />
              <div className="min-w-0">
                <p className="truncate text-[14px] font-bold text-[#101828]">
                  GlobalTex Exports LLC
                </p>
                <p className="mt-0.5 flex items-center gap-1.5 text-[11px] text-[#039855]">
                  <span className="size-1.5 rounded-full bg-[#039855]" />
                  Online
                </p>
                <p className="mt-1 text-[10px] leading-snug text-[#667085]">
                  Textiles, Apparel Manufacturing & Export • Dubai, UAE
                </p>
              </div>
            </div>
            <div className="flex shrink-0 items-center gap-1">
              {[Phone, Video, Info, Star].map((Icon, i) => (
                <button
                  key={i}
                  type="button"
                  className="flex size-8 items-center justify-center rounded-lg text-[#667085] hover:bg-[#F2F4F7]"
                  aria-label={
                    Icon === Phone
                      ? "Call"
                      : Icon === Video
                        ? "Video call"
                        : Icon === Info
                          ? "Conversation info"
                          : "Favorite"
                  }
                >
                  <Icon className="size-4" />
                </button>
              ))}
            </div>
          </div>

          <div className="flex-1 space-y-4 overflow-y-auto bg-[#F9FAFB] p-4">
            {CHAT_MESSAGES.map((item, i) => {
              if (item.kind === "date") {
                return (
                  <div key={`date-${i}`} className="flex justify-center">
                    <span className="rounded-full bg-white px-3 py-1 text-[10px] font-medium text-[#667085] shadow-sm ring-1 ring-[#E4E7EC]">
                      {item.label}
                    </span>
                  </div>
                );
              }

              const isMe = item.from === "me";
              return (
                <div
                  key={`msg-${i}`}
                  className={`flex ${isMe ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[88%] sm:max-w-[75%] ${
                      isMe ? "items-end" : "items-start"
                    }`}
                  >
                    {!isMe && item.senderName ? (
                      <p className="mb-1 text-[10px] font-semibold text-[#344054]">
                        {item.senderName}
                      </p>
                    ) : null}
                    <div
                      className={`rounded-2xl px-3.5 py-2.5 shadow-sm ${
                        isMe
                          ? "rounded-br-md bg-[#EFF8FF] text-[#101828]"
                          : "rounded-bl-md border border-[#E4E7EC] bg-white text-[#101828]"
                      }`}
                    >
                      {item.attachment ? (
                        <div className="flex items-center gap-3 rounded-xl border border-[#E4E7EC] bg-white p-2.5">
                          <span className="flex size-9 items-center justify-center rounded-lg bg-[#FEF3F2]">
                            <FileText className="size-4 text-[#D92D20]" />
                          </span>
                          <div className="min-w-0 flex-1">
                            <p className="truncate text-[12px] font-semibold text-[#101828]">
                              {item.attachment.name}
                            </p>
                            <p className="text-[10px] text-[#667085]">
                              {item.attachment.size}
                            </p>
                          </div>
                          <button
                            type="button"
                            className="flex size-8 shrink-0 items-center justify-center rounded-lg text-[#175CD3] hover:bg-[#EFF8FF]"
                            aria-label="Download attachment"
                          >
                            <Download className="size-4" />
                          </button>
                        </div>
                      ) : (
                        <p className="text-[12px] leading-relaxed">{item.text}</p>
                      )}
                      <div
                        className={`mt-1.5 flex items-center gap-1 ${
                          isMe ? "justify-end" : "justify-start"
                        }`}
                      >
                        <span className="text-[10px] text-[#98A2B3]">
                          {item.time}
                        </span>
                        {isMe ? (
                          <CheckCheck className="size-3.5 text-[#175CD3]" />
                        ) : null}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="border-t border-[#E4E7EC] bg-white p-3">
            <div className="mb-2 flex flex-wrap items-center gap-1 border-b border-[#F2F4F7] pb-2">
              <button
                type="button"
                className="flex size-8 items-center justify-center rounded-lg text-[#667085] hover:bg-[#F2F4F7]"
                aria-label="Attach file"
              >
                <Paperclip className="size-4" />
              </button>
              <button
                type="button"
                className="flex size-8 items-center justify-center rounded-lg text-[#667085] hover:bg-[#F2F4F7]"
                aria-label="Formatting"
              >
                <Type className="size-4" />
              </button>
              <button
                type="button"
                className="flex size-8 items-center justify-center rounded-lg text-[#667085] hover:bg-[#F2F4F7]"
                aria-label="Emoji"
              >
                <Smile className="size-4" />
              </button>
              <button
                type="button"
                className="ml-1 flex h-8 items-center gap-1 rounded-lg border border-[#E4E7EC] px-2.5 text-[11px] font-semibold text-[#344054] hover:bg-[#F9FAFB]"
              >
                Use Template
                <ChevronDown className="size-3.5 text-[#667085]" />
              </button>
            </div>
            <div className="flex gap-2">
              <textarea
                rows={2}
                placeholder="Type your message..."
                className="min-h-[44px] flex-1 resize-none rounded-lg border border-[#D0D5DD] px-3 py-2.5 text-[12px] text-[#101828] outline-none focus:border-[#175CD3] focus:ring-1 focus:ring-[#175CD3]"
              />
              <Button className="h-auto shrink-0 self-end rounded-lg bg-[#175CD3] px-4 py-2.5 text-[12px] font-semibold hover:bg-[#1448B0]">
                <Send className="mr-1.5 size-4" />
                Send
              </Button>
            </div>
          </div>
        </ExporterCard>

        {/* Column 3 — Info sidebar */}
        <aside className="flex min-w-0 flex-col gap-4">
          <ExporterCard>
            <h3 className="text-[13px] font-bold text-[#101828]">About</h3>
            <div className="mt-4 flex flex-col items-center text-center">
              <div className="flex size-16 items-center justify-center rounded-xl bg-[#175CD3]/10 text-[18px] font-bold text-[#175CD3]">
                GT
              </div>
              <p className="mt-3 text-[14px] font-bold text-[#101828]">
                GlobalTex Exports LLC
              </p>
              <span className="mt-2 inline-flex items-center gap-1 rounded-full bg-[#ECFDF3] px-2.5 py-1 text-[10px] font-semibold text-[#027A48]">
                <BadgeCheck className="size-3.5" />
                Verified Partner
              </span>
              <p className="mt-2 flex items-center justify-center gap-1.5 text-[11px] text-[#667085]">
                <img
                  src={FLAG_UAE}
                  alt=""
                  className="size-4 rounded-sm object-cover"
                />
                Dubai, UAE
              </p>
              <p className="mt-3 text-[11px] leading-relaxed text-[#667085]">
                Leading textile exporter specializing in woven apparel, home
                textiles, and private-label manufacturing for GCC and EU retail
                partners.
              </p>
              <button
                type="button"
                className="mt-3 inline-flex items-center gap-0.5 text-[12px] font-semibold text-[#175CD3] hover:underline"
              >
                View Full Profile
                <ChevronRight className="size-4" />
              </button>
            </div>
          </ExporterCard>

          <ExporterCard>
            <h3 className="text-[13px] font-bold text-[#101828]">
              Conversation Details
            </h3>
            <dl className="mt-3 space-y-2.5">
              {[
                { label: "Local Time", value: "10:30 AM (GST)" },
                { label: "Member Since", value: "Jan 2024" },
                { label: "Last Seen", value: "Online" },
                { label: "Language", value: "English" },
              ].map((row) => (
                <div
                  key={row.label}
                  className="flex items-center justify-between gap-2 text-[11px]"
                >
                  <dt className="text-[#667085]">{row.label}</dt>
                  <dd
                    className={`font-semibold ${
                      row.label === "Last Seen"
                        ? "text-[#039855]"
                        : "text-[#101828]"
                    }`}
                  >
                    {row.value}
                  </dd>
                </div>
              ))}
            </dl>
          </ExporterCard>

          <ExporterCard>
            <div className="flex items-center justify-between gap-2">
              <h3 className="text-[13px] font-bold text-[#101828]">
                Shared Files
              </h3>
              <button
                type="button"
                className="text-[11px] font-semibold text-[#175CD3] hover:underline"
              >
                View All
              </button>
            </div>
            <ul className="mt-3 space-y-2">
              {SHARED_FILES.map((file) => (
                <li
                  key={file.name}
                  className="flex items-center gap-2.5 rounded-lg border border-[#E4E7EC] p-2.5"
                >
                  <span
                    className={`flex size-9 shrink-0 items-center justify-center rounded-lg ${
                      file.type === "pdf" ? "bg-[#FEF3F2]" : "bg-[#ECFDF3]"
                    }`}
                  >
                    {file.type === "pdf" ? (
                      <FileText
                        className={`size-4 ${file.type === "pdf" ? "text-[#D92D20]" : "text-[#027A48]"}`}
                      />
                    ) : (
                      <FileSpreadsheet className="size-4 text-[#027A48]" />
                    )}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-[11px] font-semibold text-[#101828]">
                      {file.name}
                    </p>
                    <p className="text-[10px] text-[#98A2B3]">
                      {file.size} · {file.time}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </ExporterCard>

          <ExporterCard>
            <h3 className="text-[13px] font-bold text-[#101828]">
              Quick Actions
            </h3>
            <div className="mt-3 space-y-2">
              {[
                { label: "View Company Profile", icon: Building2 },
                { label: "Schedule a Meeting", icon: Calendar },
                { label: "Create Deal Room", icon: FileText },
                { label: "Add Note", icon: StickyNote },
              ].map(({ label, icon: Icon }) => (
                <Button
                  key={label}
                  variant="outline"
                  className="h-9 w-full justify-start rounded-lg border-[#E4E7EC] text-[11px] font-semibold text-[#344054] hover:bg-[#F9FAFB]"
                >
                  <Icon className="mr-2 size-3.5 text-[#667085]" />
                  {label}
                </Button>
              ))}
              <Button
                variant="outline"
                className="mt-1 h-9 w-full justify-start rounded-lg border-[#FECDCA] bg-[#FEF3F2] text-[11px] font-semibold text-[#D92D20] hover:bg-[#FEE4E2]"
              >
                <X className="mr-2 size-3.5" />
                Block User
              </Button>
            </div>
          </ExporterCard>
        </aside>
      </div>
    </ExporterPageShell>
  );
}
