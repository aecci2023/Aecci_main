import { useState } from "react";
import { Main } from "@/components/layout/main";
import { Button } from "@/components/ui/button";
import {
  Search,
  Plus,
  Star,
  Download,
  Mail,
  Phone,
  MapPin,
  Calendar,
  ChevronRight,
  ChevronDown,
} from "lucide-react";

// ── Types ─────────────────────────────────────────────────────────────────────

interface MessageItem {
  id: number;
  senderName: string;
  senderAvatar: string;
  avatarUrl: string;
  avatarBg?: string;
  snippet: string;
  time: string;
  isStarred?: boolean;
  isUnread?: boolean;
  selected?: boolean;
}

// ── Static Data ───────────────────────────────────────────────────────────────

const messageList: MessageItem[] = [
  {
    id: 1,
    senderName: "Precision Tools Pvt. Ltd.",
    senderAvatar: "PT",
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80",
    avatarBg: "bg-[#1E3A5F]",
    snippet: "Deal collaboration opportunity",
    time: "10:30 AM",
    isStarred: true,
    selected: true,
  },
  {
    id: 2,
    senderName: "Sunrise Exports",
    senderAvatar: "SE",
    avatarUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&h=150&q=80",
    avatarBg: "bg-[#065F46]",
    snippet: "Product inquiry and discussion",
    time: "Yesterday",
  },
  {
    id: 3,
    senderName: "Global Trade Solutions",
    senderAvatar: "GT",
    avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=150&h=150&q=80",
    avatarBg: "bg-[#1D4ED8]",
    snippet: "Meeting follow-up",
    time: "20 May 2025",
    isUnread: true,
  },
  {
    id: 4,
    senderName: "Apex Solutions Ltd.",
    senderAvatar: "AS",
    avatarUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&h=150&q=80",
    avatarBg: "bg-[#7C2D12]",
    snippet: "Partnership proposal",
    time: "19 May 2025",
  },
  {
    id: 5,
    senderName: "Trade Connect Hub",
    senderAvatar: "TC",
    avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80",
    avatarBg: "bg-[#4C1D95]",
    snippet: "Event invitation",
    time: "18 May 2025",
  },
  {
    id: 6,
    senderName: "International Chamber",
    senderAvatar: "IC",
    avatarUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&h=150&q=80",
    avatarBg: "bg-[#0F766E]",
    snippet: "Important announcement",
    time: "17 May 2025",
  },
];

const tabs = [
  { id: "messages", label: "Messages" },
  { id: "announcements", label: "Announcements" },
  { id: "notifications", label: "Notifications" },
];

// ── Main Component ─────────────────────────────────────────────────────────────

export default function PartnerCommunicationsPage() {
  const [activeTab, setActiveTab] = useState("messages");
  const [selectedMessageId, setSelectedMessageId] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [replyText, setReplyText] = useState("");

  const selectedMessage = messageList.find((m) => m.id === selectedMessageId) || messageList[0];

  return (
    <Main fluid className="px-6 pt-4 pb-8 bg-[#F8FAFC] min-h-screen">
      <div className="flex flex-col gap-6">
        {/* ── Page Header ───────────────────────────────────── */}
        <div className="flex items-end justify-between gap-4 pl-1 sm:pl-2">
          <div>
            <h1
              className="font-bold text-[#0F172A] tracking-tight leading-none"
              style={{ fontSize: 28 }}
            >
              Communications
            </h1>
            <p className="text-[13px] text-[#64748B] mt-[5px] leading-none">
              Manage messages, announcements and notifications
            </p>
          </div>
          <Button className="flex items-center gap-2 bg-[#0F172A] hover:bg-[#1E293B] text-white rounded-xl px-4 py-2.5 text-sm font-semibold shadow-sm flex-shrink-0">
            <Plus className="w-4 h-4" />
            New Message
          </Button>
        </div>

        {/* ── Tabs ─────────────────────────────────────────── */}
        <div className="border-b border-[#E8EDF5]">
          <div className="flex gap-1">
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

        {/* ── Main Layout: Message List | Conversation Details | Info Sidebar ── */}
        <div className="flex gap-6 items-start">
          {/* ── 1. Left Message List Panel ─────────────────────── */}
          <div className="w-[320px] flex-shrink-0 bg-white rounded-2xl border border-[#E8EDF5] shadow-[0_2px_12px_rgba(15,23,42,0.06)] overflow-hidden flex flex-col">
            {/* Search + Filter */}
            <div className="p-3.5 border-b border-[#F1F5F9] flex items-center gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-[#94A3B8]" />
                <input
                  type="text"
                  placeholder="Search messages..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 text-xs border border-[#E8EDF5] rounded-xl bg-[#F8FAFC] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#2563EB] placeholder:text-[#94A3B8]"
                />
              </div>
              <div className="relative">
                <button className="flex items-center gap-1.5 text-xs font-medium text-[#64748B] border border-[#E8EDF5] rounded-xl px-3 py-2 bg-white hover:bg-[#F8FAFC] transition-colors">
                  All
                  <ChevronDown className="w-3 h-3 text-[#94A3B8]" />
                </button>
              </div>
            </div>

            {/* List */}
            <div className="divide-y divide-[#F1F5F9] flex-1">
              {messageList.map((msg) => {
                const isSelected = msg.id === selectedMessageId;
                return (
                  <div
                    key={msg.id}
                    onClick={() => setSelectedMessageId(msg.id)}
                    className={`px-4 py-3.5 flex items-start gap-3.5 cursor-pointer transition-colors ${
                      isSelected
                        ? "bg-[#F0F7FF] border-l-4 border-l-[#2563EB]"
                        : "hover:bg-[#FAFBFD]"
                    }`}
                  >
                    <img
                      src={msg.avatarUrl}
                      alt={msg.senderName}
                      className="w-10 h-10 rounded-full object-cover flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-1">
                        <p className="text-[13.5px] font-semibold text-[#0F172A] truncate">
                          {msg.senderName}
                        </p>
                        <div className="flex items-center gap-1 flex-shrink-0">
                          <span className="text-[11.5px] text-[#94A3B8]">
                            {msg.time}
                          </span>
                          {msg.isStarred && (
                            <Star className="w-3.5 h-3.5 fill-[#F59E0B] text-[#F59E0B]" />
                          )}
                          {msg.isUnread && (
                            <span className="w-2 h-2 rounded-full bg-[#2563EB]" />
                          )}
                        </div>
                      </div>
                      <p className="text-[12.5px] text-[#64748B] truncate mt-0.5">
                        {msg.snippet}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom Link */}
            <div className="p-3.5 text-center border-t border-[#F1F5F9]">
              <button className="text-xs text-[#2563EB] font-semibold hover:underline">
                View All Messages
              </button>
            </div>
          </div>

          {/* ── 2. Middle Conversation View Panel ─────────────── */}
          <div className="flex-1 min-w-0 bg-white rounded-2xl border border-[#E8EDF5] shadow-[0_2px_12px_rgba(15,23,42,0.06)] p-6 flex flex-col justify-between min-h-[600px]">
            <div>
              {/* Message Header */}
              <div className="flex items-center justify-between pb-4 border-b border-[#F1F5F9]">
                <div className="flex items-center gap-3.5">
                  <img
                    src={selectedMessage.avatarUrl}
                    alt={selectedMessage.senderName}
                    className="w-11 h-11 rounded-full object-cover flex-shrink-0"
                  />
                  <div>
                    <h3 className="text-[16px] font-semibold text-[#0F172A]">
                      {selectedMessage.senderName}
                    </h3>
                    <p className="text-[12.5px] text-[#94A3B8]">to me</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[12.5px] text-[#94A3B8]">
                    {selectedMessage.time}
                  </span>
                  <Star className="w-4 h-4 fill-[#F59E0B] text-[#F59E0B] cursor-pointer" />
                </div>
              </div>

              {/* Subject */}
              <div className="py-4">
                <h2 className="text-[18px] font-bold text-[#0F172A]">
                  Deal collaboration opportunity
                </h2>
              </div>

              {/* Body */}
              <div className="text-[14px] text-[#374151] space-y-3.5 leading-relaxed">
                <p>Hello Michael,</p>
                <p>
                  We are interested in exploring a collaboration opportunity for industrial machinery exports to the European market.
                </p>
                <p>
                  Let's schedule a meeting to discuss potential synergies.
                </p>
                <div className="pt-2 text-[#64748B]">
                  <p>Best regards,</p>
                  <p className="font-semibold text-[#0F172A]">James Carter</p>
                  <p>Business Development Manager</p>
                  <p>Precision Tools Pvt. Ltd.</p>
                </div>
              </div>

              {/* Attachments Section */}
              <div className="mt-6 pt-4 border-t border-[#F1F5F9]">
                <h4 className="text-[13px] font-semibold text-[#0F172A] mb-3">
                  Attachments (2)
                </h4>
                <div className="flex flex-wrap gap-3">
                  {/* Card 1 */}
                  <div className="flex items-center gap-3 bg-[#F8FAFC] border border-[#E8EDF5] rounded-xl p-3.5 min-w-[220px] hover:border-[#CBD5E1] transition-colors">
                    <div className="w-9 h-9 rounded-lg bg-[#FEE2E2] flex items-center justify-center text-[#EF4444] text-[11px] font-bold flex-shrink-0">
                      PDF
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[13px] font-medium text-[#0F172A] truncate">
                        Company_Profile.pdf
                      </p>
                      <p className="text-[11px] text-[#94A3B8]">2.4 MB</p>
                    </div>
                    <button className="text-[#64748B] hover:text-[#0F172A] p-1.5 rounded-lg hover:bg-white transition-colors">
                      <Download className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Card 2 */}
                  <div className="flex items-center gap-3 bg-[#F8FAFC] border border-[#E8EDF5] rounded-xl p-3.5 min-w-[220px] hover:border-[#CBD5E1] transition-colors">
                    <div className="w-9 h-9 rounded-lg bg-[#FEE2E2] flex items-center justify-center text-[#EF4444] text-[11px] font-bold flex-shrink-0">
                      PDF
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[13px] font-medium text-[#0F172A] truncate">
                        Product_Catalog.pdf
                      </p>
                      <p className="text-[11px] text-[#94A3B8]">4.1 MB</p>
                    </div>
                    <button className="text-[#64748B] hover:text-[#0F172A] p-1.5 rounded-lg hover:bg-white transition-colors">
                      <Download className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Reply Input Box */}
            <div className="mt-6 pt-4 border-t border-[#F1F5F9] flex items-center gap-3">
              <input
                type="text"
                placeholder="Type your reply..."
                value={replyText}
                onChange={(e) => setReplyText(e.target.value)}
                className="flex-1 px-4 py-3 text-xs border border-[#E8EDF5] rounded-xl bg-[#F8FAFC] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#2563EB] placeholder:text-[#94A3B8]"
              />
              <Button className="bg-[#0F172A] hover:bg-[#1E293B] text-white rounded-xl px-6 py-3 text-xs font-semibold shadow-sm">
                Reply
              </Button>
            </div>
          </div>

          {/* ── 3. Right Sidebar: Info & Details ───────────────── */}
          <div className="w-[270px] flex-shrink-0 flex flex-col gap-5">
            {/* Contact Information */}
            <div className="bg-white rounded-2xl border border-[#E8EDF5] shadow-[0_2px_12px_rgba(15,23,42,0.06)] p-5">
              <h3 className="text-[15px] font-semibold text-[#0F172A] mb-3.5">
                Contact Information
              </h3>
              <div className="flex items-center gap-3 mb-3.5">
                <img
                  src={selectedMessage.avatarUrl}
                  alt={selectedMessage.senderName}
                  className="w-10 h-10 rounded-full object-cover flex-shrink-0"
                />
                <div>
                  <p className="text-[14px] font-bold text-[#0F172A]">James Carter</p>
                  <p className="text-[11.5px] text-[#64748B]">
                    Business Development Manager
                  </p>
                  <p className="text-[11.5px] text-[#94A3B8]">
                    Precision Tools Pvt. Ltd.
                  </p>
                </div>
              </div>
              <div className="space-y-2.5 text-xs text-[#64748B] pt-3 border-t border-[#F1F5F9]">
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-[#94A3B8] flex-shrink-0" />
                  <span className="truncate text-[11.5px]">
                    james.carter@precisiontools.com
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#94A3B8] flex-shrink-0" />
                  <span className="text-[11.5px]">+49 30 1234567</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#94A3B8] flex-shrink-0" />
                  <span className="text-[11.5px]">Germany</span>
                </div>
              </div>
            </div>

            {/* Conversation Details */}
            <div className="bg-white rounded-2xl border border-[#E8EDF5] shadow-[0_2px_12px_rgba(15,23,42,0.06)] p-5">
              <h3 className="text-[15px] font-semibold text-[#0F172A] mb-3.5">
                Conversation Details
              </h3>
              <div className="space-y-3 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-[11.5px] text-[#64748B]">First Message</span>
                  <span className="text-[11.5px] font-semibold text-[#0F172A]">
                    20 May 2025
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[11.5px] text-[#64748B]">Last Message</span>
                  <span className="text-[11.5px] font-semibold text-[#0F172A]">
                    20 May 2025
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[11.5px] text-[#64748B]">Total Messages</span>
                  <span className="text-[11.5px] font-semibold text-[#0F172A]">
                    4
                  </span>
                </div>
                <div className="flex items-center justify-between pt-1">
                  <span className="text-[11.5px] text-[#64748B]">Status</span>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-[#DCFCE7] text-[#15803D]">
                    Active
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[11.5px] text-[#64748B]">Priority</span>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-[#FEF3C7] text-[#92400E]">
                    Important
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-2xl border border-[#E8EDF5] shadow-[0_2px_12px_rgba(15,23,42,0.06)] p-5">
              <h3 className="text-[15px] font-semibold text-[#0F172A] mb-3">
                Quick Actions
              </h3>
              <div className="flex flex-col gap-1.5">
                <button className="flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-[#F8FAFC] transition-colors group">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-[#EFF6FF] flex items-center justify-center text-[#2563EB]">
                      <Mail className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-[12.5px] font-medium text-[#374151] group-hover:text-[#0F172A]">
                      Send Email
                    </span>
                  </div>
                  <ChevronRight className="w-3.5 h-3.5 text-[#94A3B8]" />
                </button>
                <button className="flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-[#F8FAFC] transition-colors group">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-[#EFF6FF] flex items-center justify-center text-[#2563EB]">
                      <Calendar className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-[12.5px] font-medium text-[#374151] group-hover:text-[#0F172A]">
                      Schedule Meeting
                    </span>
                  </div>
                  <ChevronRight className="w-3.5 h-3.5 text-[#94A3B8]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Main>
  );
}
