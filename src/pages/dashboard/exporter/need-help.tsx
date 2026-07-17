import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Send,
  Paperclip,
  MessageCircle,
  Mail,
  Phone,
  Calendar,
  Shield,
  HelpCircle,
  ChevronRight,
  Clock,
  Headphones,
  CheckCircle2,
  Lock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  ExporterPageShell,
  ExporterCard,
  ExporterBreadcrumb,
  FieldLabel,
  FieldInput,
  FieldSelect,
} from "@/components/exporter/exporter-page-layout";

const MESSAGE_MAX = 2000;

const PRIORITIES = [
  {
    id: "low",
    label: "Low",
    dot: "bg-[#98A2B3]",
    description: "General questions, no urgency",
  },
  {
    id: "medium",
    label: "Medium",
    dot: "bg-[#F79009]",
    description: "Needs attention within 1–2 days",
  },
  {
    id: "high",
    label: "High",
    dot: "bg-[#F04438]",
    description: "Blocking issue or active deal room",
  },
] as const;

const SUPPORT_PROMISE = [
  "Response within one business day for all tickets",
  "Priority routing for Global Growth members",
  "Dedicated trade advisors during live sessions",
];

function NeedHelpFooter() {
  return (
    <footer className="flex flex-col items-center justify-between gap-3 border-t border-[#E4E7EC] pt-5 sm:flex-row">
      <p className="text-[11px] text-[#98A2B3]">© 2025 AECCI. All rights reserved.</p>
      <nav className="flex flex-wrap items-center justify-center gap-4 text-[11px] font-semibold text-[#667085]">
        <Link to="#" className="hover:text-[#175CD3]">
          Terms
        </Link>
        <Link to="#" className="hover:text-[#175CD3]">
          Privacy
        </Link>
        <Link to="/dashboard/help-center" className="hover:text-[#175CD3]">
          Help Center
        </Link>
      </nav>
    </footer>
  );
}

export default function NeedHelpPage() {
  const [priority, setPriority] = useState<(typeof PRIORITIES)[number]["id"]>("medium");
  const [message, setMessage] = useState("");

  return (
    <ExporterPageShell>
      <div className="w-full">
        <ExporterBreadcrumb
          items={[
            { label: "Dashboard", to: "/dashboard" },
            { label: "Need Help" },
          ]}
        />
        <h1 className="mt-2 text-[22px] font-bold text-[#101828] sm:text-[24px]">Need Help?</h1>
        <p className="mt-1 max-w-2xl text-[13px] leading-relaxed text-[#667085]">
          Our support team is available 24/7 to assist you with platform questions, billing, and
          live deal room issues.
        </p>
      </div>

      <div className="grid grid-cols-1 items-start gap-5 xl:grid-cols-[minmax(0,1fr)_320px]">
        <section className="min-w-0 space-y-5">
          <ExporterCard>
            <h2 className="text-[14px] font-bold text-[#101828]">Send us a message</h2>
            <p className="mt-1 text-[11px] text-[#667085]">
              Fill out the form below and we&apos;ll get back to you as soon as possible.
            </p>
            <form className="mt-4 space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid gap-3 sm:grid-cols-2">
                <div>
                  <FieldLabel>Full Name</FieldLabel>
                  <FieldInput defaultValue="Amit Raj" />
                </div>
                <div>
                  <FieldLabel>Email</FieldLabel>
                  <FieldInput defaultValue="amit.raj@aecci.com" />
                </div>
              </div>
              <div>
                <FieldLabel>Subject</FieldLabel>
                <FieldSelect
                  defaultValue="General inquiry"
                  options={[
                    "General inquiry",
                    "Deal room & meetings",
                    "Billing & subscription",
                    "Technical issue",
                    "Account & security",
                  ]}
                />
              </div>
              <div>
                <FieldLabel>Category</FieldLabel>
                <FieldSelect
                  defaultValue="Platform support"
                  options={[
                    "Platform support",
                    "Partner matching",
                    "Documents & compliance",
                    "Market intelligence",
                    "Other",
                  ]}
                />
              </div>
              <div>
                <FieldLabel>Priority</FieldLabel>
                <div className="grid gap-2 sm:grid-cols-3">
                  {PRIORITIES.map((p) => (
                    <label
                      key={p.id}
                      className={`flex cursor-pointer flex-col rounded-xl border p-3 transition ${
                        priority === p.id
                          ? "border-[#175CD3] bg-[#EFF8FF] ring-1 ring-[#175CD3]"
                          : "border-[#D0D5DD] bg-white hover:border-[#98A2B3]"
                      }`}
                    >
                      <input
                        type="radio"
                        name="priority"
                        value={p.id}
                        checked={priority === p.id}
                        onChange={() => setPriority(p.id)}
                        className="sr-only"
                      />
                      <span className="flex items-center gap-2">
                        <span className={`size-2 rounded-full ${p.dot}`} />
                        <span className="text-[12px] font-bold text-[#101828]">{p.label}</span>
                      </span>
                      <span className="mt-1.5 text-[10px] leading-relaxed text-[#667085]">
                        {p.description}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <div className="mb-1.5 flex items-center justify-between">
                  <FieldLabel>Message</FieldLabel>
                  <span className="text-[10px] text-[#98A2B3]">
                    {message.length}/{MESSAGE_MAX}
                  </span>
                </div>
                <textarea
                  value={message}
                  maxLength={MESSAGE_MAX}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Describe your issue or question in detail..."
                  className="min-h-[140px] w-full rounded-lg border border-[#D0D5DD] px-3 py-2.5 text-[13px] text-[#101828] outline-none focus:border-[#175CD3] focus:ring-1 focus:ring-[#175CD3]"
                />
              </div>
              <div>
                <FieldLabel>Attachments</FieldLabel>
                <button
                  type="button"
                  className="flex min-h-[88px] w-full flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-[#D0D5DD] bg-[#F9FAFB] px-4 py-5 text-[12px] text-[#667085] transition hover:border-[#175CD3] hover:bg-[#EFF8FF]/50"
                >
                  <Paperclip className="size-5 text-[#98A2B3]" />
                  <span className="font-semibold text-[#344054]">Click to attach files</span>
                  <span className="text-[10px]">PDF, PNG, JPG — max 10MB each</span>
                </button>
              </div>
              <Button
                type="submit"
                className="h-10 w-full rounded-lg bg-[#175CD3] text-[12px] font-semibold hover:bg-[#1448B0] sm:w-auto sm:px-6"
              >
                <Send className="mr-1.5 size-3.5" />
                Send Message
              </Button>
              <p className="flex items-center gap-2 text-[11px] font-medium text-[#027A48]">
                <Lock className="size-3.5 shrink-0" />
                Your submission is encrypted and handled securely per our privacy policy.
              </p>
            </form>
          </ExporterCard>

          <ExporterCard className="border-[#B2DDFF] bg-[#EFF8FF]">
            <div className="flex items-start gap-3">
              <Shield className="size-5 shrink-0 text-[#175CD3]" />
              <div>
                <p className="text-[12px] font-bold text-[#101828]">Your privacy matters</p>
                <p className="mt-1 text-[11px] leading-relaxed text-[#667085]">
                  Do not include payment card numbers, passwords, or sensitive credentials in your
                  message. Attachments are scanned and stored according to AECCI data retention
                  policies.
                </p>
              </div>
            </div>
          </ExporterCard>

          <NeedHelpFooter />
        </section>

        <aside className="space-y-4">
          <ExporterCard>
            <h3 className="text-[14px] font-bold text-[#101828]">Talk to support team</h3>
            <ul className="mt-3 space-y-2">
              <li>
                <button
                  type="button"
                  className="flex w-full items-center gap-3 rounded-xl border border-[#E4E7EC] p-3 text-left hover:bg-[#F9FAFB]"
                >
                  <span className="flex size-9 items-center justify-center rounded-lg bg-[#ECFDF3] text-[#039855]">
                    <MessageCircle className="size-4" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="flex flex-wrap items-center gap-2">
                      <span className="text-[12px] font-semibold text-[#101828]">Live Chat</span>
                      <span className="inline-flex items-center gap-1 rounded-full bg-[#ECFDF3] px-2 py-0.5 text-[10px] font-semibold text-[#027A48]">
                        <span className="size-1.5 rounded-full bg-[#039855]" />
                        Online
                      </span>
                    </span>
                    <span className="text-[10px] text-[#667085]">Typical wait under 2 minutes</span>
                  </span>
                  <ChevronRight className="size-4 shrink-0 text-[#98A2B3]" />
                </button>
              </li>
              <li>
                <a
                  href="mailto:support@aecci.com"
                  className="flex w-full items-center gap-3 rounded-xl border border-[#E4E7EC] p-3 hover:bg-[#F9FAFB]"
                >
                  <span className="flex size-9 items-center justify-center rounded-lg bg-[#EFF8FF] text-[#175CD3]">
                    <Mail className="size-4" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <p className="text-[12px] font-semibold text-[#101828]">Email</p>
                    <p className="text-[10px] text-[#175CD3]">support@aecci.com</p>
                  </span>
                  <ChevronRight className="size-4 shrink-0 text-[#98A2B3]" />
                </a>
              </li>
              <li>
                <a
                  href="tel:+919876543210"
                  className="flex w-full items-center gap-3 rounded-xl border border-[#E4E7EC] p-3 hover:bg-[#F9FAFB]"
                >
                  <span className="flex size-9 items-center justify-center rounded-lg bg-[#EFF8FF] text-[#175CD3]">
                    <Phone className="size-4" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <p className="text-[12px] font-semibold text-[#101828]">Call</p>
                    <p className="text-[10px] text-[#344054]">+91 98765 43210</p>
                  </span>
                  <ChevronRight className="size-4 shrink-0 text-[#98A2B3]" />
                </a>
              </li>
              <li>
                <button
                  type="button"
                  className="flex w-full items-center gap-3 rounded-xl border border-[#E4E7EC] p-3 text-left hover:bg-[#F9FAFB]"
                >
                  <span className="flex size-9 items-center justify-center rounded-lg bg-[#F4F3FF] text-[#7A5AF8]">
                    <Calendar className="size-4" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <p className="text-[12px] font-semibold text-[#101828]">Schedule a Call</p>
                    <p className="text-[10px] text-[#667085]">Book a 30-min advisory session</p>
                  </span>
                  <ChevronRight className="size-4 shrink-0 text-[#98A2B3]" />
                </button>
              </li>
            </ul>
          </ExporterCard>

          <ExporterCard className="border-[#B2DDFF] bg-[#EFF8FF]">
            <div className="flex size-9 items-center justify-center rounded-lg bg-white/80 text-[#175CD3]">
              <HelpCircle className="size-4" />
            </div>
            <h3 className="mt-3 text-[14px] font-bold text-[#101828]">Before you go</h3>
            <p className="mt-1 text-[11px] leading-relaxed text-[#667085]">
              Browse articles, video guides, and PDF downloads in the Help Center — many questions are
              answered instantly.
            </p>
            <Button
              asChild
              variant="outline"
              className="mt-4 h-9 w-full rounded-lg border-[#175CD3] bg-white text-[12px] font-semibold text-[#175CD3] hover:bg-white"
            >
              <Link to="/dashboard/help-center">Go to Help Center</Link>
            </Button>
          </ExporterCard>

          <ExporterCard className="border-[#ABEFC6] bg-[#ECFDF3]">
            <div className="flex items-center gap-2">
              <Headphones className="size-4 text-[#027A48]" />
              <h3 className="text-[14px] font-bold text-[#101828]">Our Support Promise</h3>
            </div>
            <ul className="mt-3 space-y-2.5">
              {SUPPORT_PROMISE.map((item) => (
                <li key={item} className="flex items-start gap-2 text-[11px] text-[#344054]">
                  <CheckCircle2 className="mt-0.5 size-3.5 shrink-0 text-[#039855]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-3 flex items-center gap-1.5 text-[10px] text-[#667085]">
              <Clock className="size-3" />
              Business hours: Mon–Sat, 10:00 AM – 7:00 PM IST
            </p>
          </ExporterCard>
        </aside>
      </div>
    </ExporterPageShell>
  );
}
