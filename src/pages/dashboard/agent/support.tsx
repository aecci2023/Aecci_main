import { Link } from "react-router-dom";
import {
  ArrowRight,
  BookOpen,
  ChevronRight,
  CircleHelp,
  CreditCard,
  FileText,
  Handshake,
  Headphones,
  Mail,
  MessageCircle,
  Phone,
  Search,
  Ticket,
  User,
  Wrench,
} from "lucide-react";
import { Main } from "@/components/layout/main";
import { Button } from "@/components/ui/button";

const HELP_CARDS = [
  {
    title: "FAQs",
    sub: "Common questions",
    cta: "View All",
    icon: CircleHelp,
    iconBg: "bg-[#EFF8FF]",
    iconColor: "text-[#175CD3]",
    ctaColor: "text-[#175CD3]",
  },
  {
    title: "Contact Support",
    sub: "Get expert help",
    cta: "Reach Out",
    icon: Headphones,
    iconBg: "bg-[#ECFDF3]",
    iconColor: "text-[#039855]",
    ctaColor: "text-[#039855]",
  },
  {
    title: "Live Chat",
    sub: "Chat with us",
    cta: "Chat Now",
    icon: MessageCircle,
    iconBg: "bg-[#F4F3FF]",
    iconColor: "text-[#6938EF]",
    ctaColor: "text-[#6938EF]",
  },
  {
    title: "Submit a Ticket",
    sub: "Create a support ticket",
    cta: "Submit Now",
    icon: Ticket,
    iconBg: "bg-[#FFFAEB]",
    iconColor: "text-[#DC6803]",
    ctaColor: "text-[#DC6803]",
  },
];

const CATEGORIES = [
  {
    title: "Account & Profile",
    desc: "Manage your profile and account settings details",
    count: 12,
    icon: User,
    cardBg: "bg-[#F5FAFF]",
    iconBg: "bg-[#EFF8FF]",
    iconColor: "text-[#175CD3]",
  },
  {
    title: "Deal Rooms",
    desc: "Join, manage, and collaborate in deal room sessions",
    count: 18,
    icon: Handshake,
    cardBg: "bg-[#FFFCF5]",
    iconBg: "bg-[#FFFAEB]",
    iconColor: "text-[#DC6803]",
  },
  {
    title: "Consultations",
    desc: "Schedule and manage your consultation meetings",
    count: 9,
    icon: Headphones,
    cardBg: "bg-[#F6FEF9]",
    iconBg: "bg-[#ECFDF3]",
    iconColor: "text-[#039855]",
  },
  {
    title: "Payments & Plans",
    desc: "Billing, subscriptions, invoices, and payment details",
    count: 7,
    icon: CreditCard,
    cardBg: "bg-[#FEF6F5]",
    iconBg: "bg-[#FEF3F2]",
    iconColor: "text-[#D92D20]",
  },
  {
    title: "Technical Support",
    desc: "Platform issues, troubleshooting, and technical help",
    count: 14,
    icon: Wrench,
    cardBg: "bg-[#F5FAFF]",
    iconBg: "bg-[#EFF8FF]",
    iconColor: "text-[#175CD3]",
  },
];

const ARTICLES_LEFT = [
  { title: "How to join a deal room", tag: "Deal Rooms", icon: BookOpen },
  { title: "How to schedule a consultation", tag: "Consultations", icon: Headphones },
  { title: "Managing your expertise profile", tag: "Account", icon: User },
];

const ARTICLES_RIGHT = [
  { title: "Understanding AECCI membership", tag: "Account", icon: User },
  { title: "Payment methods and invoices", tag: "Payments", icon: CreditCard },
  { title: "Troubleshooting common issues", tag: "Technical", icon: Wrench },
];

function ArticleRow({
  title,
  tag,
  icon: Icon,
}: {
  title: string;
  tag: string;
  icon: typeof FileText;
}) {
  return (
    <button
      type="button"
      className="flex w-full items-center gap-3 border-b border-[#F2F4F7] py-3.5 text-left last:border-b-0 transition hover:bg-[#FCFCFD]"
    >
      <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-[#F9FAFB] text-[#667085]">
        <Icon className="size-4 stroke-[1.5]" />
      </span>
      <span className="min-w-0 flex-1 text-[13px] font-medium text-[#101828]">{title}</span>
      <span className="flex shrink-0 items-center gap-0.5 text-[11px] font-semibold text-[#175CD3]">
        {tag}
        <ChevronRight className="size-3" />
      </span>
    </button>
  );
}

export default function AgentSupportPage() {
  return (
    <Main
      fluid
      className="min-h-full space-y-6 overflow-x-hidden bg-[#F8FAFC]! px-3 pb-8 sm:space-y-7 sm:px-5"
    >
      {/* ── Header row ── */}
      <div className="grid grid-cols-1 items-start gap-4 xl:grid-cols-[minmax(0,1fr)_280px]">
        <div className="flex items-center gap-4">
          <div>
            <h1 className="text-[24px] font-bold tracking-tight text-[#101828] sm:text-[26px]">
              Support Center
            </h1>
            <p className="mt-1 text-[13px] font-medium text-[#175CD3]">
              We&apos;re here to help you succeed
            </p>
          </div>
          {/* Illustration */}
          <div className="relative ml-auto hidden h-[120px] w-[140px] shrink-0 sm:block">
            {/* Main headphones circle */}
            <span className="absolute left-1/2 top-1/2 flex size-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#EFF8FF] text-[#175CD3] shadow-[0_4px_16px_rgba(23,92,211,0.12)]">
              <Headphones className="size-10 stroke-[1.5]" />
            </span>
            {/* 24/7 badge */}
            <span className="absolute right-1 top-3 rounded-full bg-[#FFFAEB] px-2 py-0.5 text-[9px] font-bold text-[#DC6803] shadow-sm">
              24/7
            </span>
            {/* Chat bubble */}
            <span className="absolute bottom-3 left-1 flex size-6 items-center justify-center rounded-full bg-[#ECFDF3] text-[#039855] shadow-sm">
              <MessageCircle className="size-3" />
            </span>
            {/* Music note */}
            <span className="absolute right-3 top-0 flex size-6 items-center justify-center rounded-full bg-[#F4F3FF] text-[#6938EF] shadow-sm">
              <svg className="size-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>
            </span>
            {/* Small decorative dots */}
            <span className="absolute left-5 top-1 size-2 rounded-full bg-[#175CD3]/20" />
            <span className="absolute bottom-1 right-8 size-1.5 rounded-full bg-[#6938EF]/20" />
          </div>
        </div>

        {/* ── Contact Information panel ── */}
        <div className="row-span-2 rounded-2xl border border-[#E4E7EC] bg-white p-5 shadow-[0_2px_8px_rgba(16,24,40,0.06)] xl:sticky xl:top-4">
          <div className="flex items-center gap-2">
            <span className="h-[3px] w-6 rounded-full bg-[#175CD3]" />
            <h3 className="text-[15px] font-bold text-[#101828]">Contact Information</h3>
          </div>
          <ul className="mt-5 space-y-5">
            <li className="flex items-start gap-3">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-[#EFF8FF] text-[#175CD3]">
                <Mail className="size-4.5 stroke-[1.5]" />
              </span>
              <div>
                <p className="text-[11px] font-semibold text-[#667085]">Email Support</p>
                <p className="mt-0.5 text-[13px] font-semibold text-[#101828]">support@aecci.org</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-[#F9FAFB] text-[#101828]">
                <Phone className="size-4.5 stroke-[1.5]" />
              </span>
              <div>
                <p className="text-[11px] font-semibold text-[#667085]">Phone Support</p>
                <p className="mt-0.5 text-[13px] font-semibold text-[#101828]">+1 (800) 123-4567</p>
                <p className="text-[10px] text-[#98A2B3]">Mon – Fri, 9AM – 6PM EST</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-[#F9FAFB] text-[#667085]">
                <MessageCircle className="size-4.5 stroke-[1.5]" />
              </span>
              <div>
                <p className="text-[11px] font-semibold text-[#667085]">Live Chat</p>
                <p className="mt-0.5 text-[13px] font-semibold text-[#101828]">Available 24/7</p>
              </div>
            </li>
          </ul>
          <Button className="mt-5 h-10 w-full rounded-xl bg-gradient-to-r from-[#175CD3] to-[#6938EF] text-[13px] font-semibold text-white shadow-[0_4px_12px_rgba(23,92,211,0.25)] hover:opacity-95">
            <MessageCircle className="mr-2 size-4" />
            Start Live Chat
          </Button>
        </div>

        {/* ── Search + 4 action cards ── */}
        <div className="space-y-4">
          <div className="rounded-2xl border border-[#E4E7EC] bg-white p-5 shadow-[0_1px_2px_rgba(16,24,40,0.05)]">
            <h2 className="text-[15px] font-bold text-[#101828]">How can we help you today?</h2>
            <div className="mt-3 flex h-11 overflow-hidden rounded-xl border border-[#E4E7EC] bg-white shadow-[0_1px_2px_rgba(16,24,40,0.04)]">
              <input
                placeholder="Search for help articles, guides, or topics..."
                className="min-w-0 flex-1 bg-transparent px-4 text-[13px] outline-none placeholder:text-[#98A2B3]"
              />
              <button
                type="button"
                className="flex w-12 shrink-0 items-center justify-center rounded-r-xl bg-[#175CD3] text-white transition hover:bg-[#1448B0]"
              >
                <Search className="size-4.5 stroke-[1.5]" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 xl:grid-cols-4">
            {HELP_CARDS.map((card) => (
              <button
                key={card.title}
                type="button"
                className="flex flex-col items-start rounded-2xl border border-[#E4E7EC] bg-white p-4 text-left shadow-[0_1px_2px_rgba(16,24,40,0.05)] transition hover:border-[#D0D5DD] hover:shadow-[0_4px_12px_rgba(16,24,40,0.06)]"
              >
                <span
                  className={`flex size-11 items-center justify-center rounded-xl ${card.iconBg} ${card.iconColor}`}
                >
                  <card.icon className="size-5 stroke-[1.5]" />
                </span>
                <p className="mt-3 text-[13px] font-bold text-[#101828]">{card.title}</p>
                <p className="mt-0.5 text-[11px] text-[#667085]">{card.sub}</p>
                <span
                  className={`mt-3 inline-flex items-center gap-1 text-[11px] font-semibold ${card.ctaColor}`}
                >
                  {card.cta}
                  <ArrowRight className="size-3" />
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Help Categories ── */}
      <section>
        <h2 className="text-[16px] font-bold text-[#101828]">Help Categories</h2>
        <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {CATEGORIES.map((cat) => (
            <div
              key={cat.title}
              className={`relative flex min-h-[190px] flex-col rounded-2xl border border-[#E4E7EC] p-5 shadow-[0_1px_2px_rgba(16,24,40,0.05)] ${cat.cardBg}`}
            >
              <span
                className={`flex size-10 items-center justify-center rounded-xl ${cat.iconBg} ${cat.iconColor}`}
              >
                <cat.icon className="size-5 stroke-[1.5]" />
              </span>
              <p className="mt-3 text-[13px] font-bold text-[#101828]">{cat.title}</p>
              <p className="mt-1 flex-1 text-[11px] leading-relaxed text-[#667085]">{cat.desc}</p>
              <div className="mt-3 flex items-center justify-between">
                <p className="text-[11px] font-medium text-[#98A2B3]">{cat.count} Articles</p>
                <button
                  type="button"
                  className="flex size-7 items-center justify-center rounded-full border border-[#E4E7EC] bg-white text-[#667085] shadow-sm transition hover:border-[#175CD3] hover:text-[#175CD3]"
                >
                  <ArrowRight className="size-3" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Popular Articles ── */}
      <section className="rounded-2xl border border-[#E4E7EC] bg-white p-5 shadow-[0_1px_2px_rgba(16,24,40,0.05)] sm:p-6">
        <div className="flex items-center justify-between gap-2">
          <h2 className="text-[16px] font-bold text-[#101828]">Popular Articles</h2>
          <Link
            to="/agent/support"
            className="flex items-center gap-1 text-[12px] font-semibold text-[#175CD3] hover:underline"
          >
            View All Articles
            <ArrowRight className="size-3.5" />
          </Link>
        </div>
        <div className="mt-2 grid grid-cols-1 gap-x-10 md:grid-cols-2">
          <div>
            {ARTICLES_LEFT.map((article) => (
              <ArticleRow key={article.title} {...article} />
            ))}
          </div>
          <div>
            {ARTICLES_RIGHT.map((article) => (
              <ArticleRow key={article.title} {...article} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Bottom CTA banner ── */}
      <section className="flex flex-col items-center justify-between gap-5 overflow-hidden rounded-2xl bg-gradient-to-r from-[#061A33] to-[#0D2D5C] px-6 py-6 sm:flex-row sm:px-8 sm:py-7">
        <span className="flex size-12 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white">
          <Headphones className="size-5 stroke-[1.5]" />
        </span>
        <div className="flex-1 text-center sm:text-left">
          <h3 className="text-[16px] font-bold text-white sm:text-[17px]">Still Need Help?</h3>
          <p className="mt-1 text-[13px] text-white/70">
            Our dedicated support team is ready to assist you anytime, anywhere.
          </p>
        </div>
        <Button
          asChild
          className="h-11 shrink-0 rounded-full bg-white px-6 text-[13px] font-semibold text-[#061A33] hover:bg-white/95"
        >
          <Link to="/agent/support" className="inline-flex items-center gap-1.5">
            Contact Our Support Team
            <ArrowRight className="size-4" />
          </Link>
        </Button>
      </section>
    </Main>
  );
}
