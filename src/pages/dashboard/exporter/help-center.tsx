import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  BookOpen,
  CreditCard,
  Sparkles,
  UserCircle,
  Wrench,
  Shield,
  Headphones,
  MessageCircle,
  Mail,
  Phone,
  Video,
  Download,
  ChevronRight,
  FileText,
  Lock,
  Settings2,
  Receipt,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  ExporterPageShell,
  ExporterCard,
  ExporterBreadcrumb,
  ExporterTabs,
} from "@/components/exporter/exporter-page-layout";

const POPULAR_TOPICS = [
  {
    title: "Getting Started",
    desc: "Set up your profile, verify your business, and launch your first deal room.",
    icon: BookOpen,
    color: "text-[#175CD3] bg-[#EFF8FF]",
  },
  {
    title: "Billing & Subscription",
    desc: "Plans, invoices, meeting credits, and payment methods.",
    icon: CreditCard,
    color: "text-[#039855] bg-[#ECFDF3]",
  },
  {
    title: "Features & Tools",
    desc: "Deal rooms, partner matching, documents, and market intelligence.",
    icon: Sparkles,
    color: "text-[#7A5AF8] bg-[#F4F3FF]",
  },
  {
    title: "Account & Profile",
    desc: "Login, security settings, team access, and notifications.",
    icon: UserCircle,
    color: "text-[#F79009] bg-[#FFFAEB]",
  },
  {
    title: "Technical Support",
    desc: "Browser issues, integrations, uploads, and troubleshooting.",
    icon: Wrench,
    color: "text-[#175CD3] bg-[#EFF8FF]",
  },
  {
    title: "Security & Privacy",
    desc: "Data protection, compliance, and secure document sharing.",
    icon: Shield,
    color: "text-[#344054] bg-[#F2F4F7]",
  },
];

const ARTICLE_TABS = [
  "All Topics",
  "Getting Started",
  "Features",
  "Billing",
  "Account",
  "Technical",
];

type Article = {
  title: string;
  description: string;
  category: string;
  tab: string;
  icon: LucideIcon;
};

const ARTICLES: Article[] = [
  {
    title: "Complete your exporter profile in 10 minutes",
    description: "Step-by-step guide to verification, company details, and product catalog.",
    category: "Getting Started",
    tab: "Getting Started",
    icon: BookOpen,
  },
  {
    title: "How to book and join a live deal room",
    description: "Scheduling sessions, inviting partners, and using the waiting room.",
    category: "Features",
    tab: "Features",
    icon: Sparkles,
  },
  {
    title: "Understanding Global Growth billing and credits",
    description: "Plan tiers, monthly credits, overages, and invoice downloads.",
    category: "Billing",
    tab: "Billing",
    icon: Receipt,
  },
  {
    title: "Managing team members and account permissions",
    description: "Invite colleagues, assign roles, and control notification preferences.",
    category: "Account",
    tab: "Account",
    icon: Settings2,
  },
  {
    title: "Fixing document upload and preview errors",
    description: "Supported formats, size limits, and clearing browser cache.",
    category: "Technical",
    tab: "Technical",
    icon: Wrench,
  },
  {
    title: "Sharing files securely with international partners",
    description: "Encryption, access controls, and retention policies on AECCI.",
    category: "Security",
    tab: "Technical",
    icon: Lock,
  },
  {
    title: "Using partner briefs to improve match quality",
    description: "Write effective briefs and respond to introduction requests.",
    category: "Features",
    tab: "Features",
    icon: FileText,
  },
  {
    title: "Resetting your password and enabling 2FA",
    description: "Account recovery, authenticator apps, and session management.",
    category: "Account",
    tab: "Account",
    icon: UserCircle,
  },
];

const VIDEO_GUIDES = [
  { title: "AECCI platform overview", duration: "8:42" },
  { title: "Booking your first deal room", duration: "5:16" },
  { title: "Partner messaging best practices", duration: "6:03" },
];

const DOWNLOADS = [
  "AECCI Exporter Handbook (PDF)",
  "Compliance & KYC Checklist (PDF)",
  "Deal Room User Guide (PDF)",
  "Billing & Credits FAQ (PDF)",
];

function categoryPillClass(category: string) {
  const map: Record<string, string> = {
    "Getting Started": "bg-[#EFF8FF] text-[#175CD3]",
    Features: "bg-[#F4F3FF] text-[#5925DC]",
    Billing: "bg-[#ECFDF3] text-[#027A48]",
    Account: "bg-[#FFFAEB] text-[#B54708]",
    Technical: "bg-[#F2F4F7] text-[#344054]",
    Security: "bg-[#F2F4F7] text-[#344054]",
  };
  return map[category] ?? "bg-[#F2F4F7] text-[#344054]";
}

function ExporterHelpFooter() {
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
        <Link to="/dashboard/need-help" className="hover:text-[#175CD3]">
          Support
        </Link>
      </nav>
    </footer>
  );
}

export default function HelpCenterPage() {
  const [tab, setTab] = useState("All Topics");
  const [query, setQuery] = useState("");

  const filteredArticles = useMemo(() => {
    const q = query.trim().toLowerCase();
    return ARTICLES.filter((a) => {
      const matchesTab =
        tab === "All Topics" ||
        a.tab === tab ||
        (tab === "Technical" && a.category === "Security");
      const matchesQuery =
        !q ||
        a.title.toLowerCase().includes(q) ||
        a.description.toLowerCase().includes(q) ||
        a.category.toLowerCase().includes(q);
      return matchesTab && matchesQuery;
    });
  }, [tab, query]);

  return (
    <ExporterPageShell>
      <div className="w-full">
        <ExporterBreadcrumb
          items={[
            { label: "Dashboard", to: "/dashboard" },
            { label: "Help Center" },
          ]}
        />
        <h1 className="mt-2 text-[22px] font-bold text-[#101828] sm:text-[24px]">Help Center</h1>
        <p className="mt-1 max-w-3xl text-[13px] leading-relaxed text-[#667085]">
          Find answers, learn best practices and get the support you need.
        </p>
      </div>

      <div className="grid grid-cols-1 items-start gap-5 xl:grid-cols-[minmax(0,1fr)_280px]">
        <section className="min-w-0 space-y-5">
          <ExporterCard className="overflow-hidden border-[#B2DDFF] bg-[#EFF8FF] p-0">
            <div className="relative flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
              <div className="relative z-10 min-w-0 flex-1">
                <p className="text-[16px] font-bold text-[#101828] sm:text-[18px]">
                  How can we help you today?
                </p>
                <p className="mt-1 text-[12px] text-[#667085]">
                  Search articles, guides, and troubleshooting tips.
                </p>
                <div className="relative mt-4 max-w-xl">
                  <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-[#98A2B3]" />
                  <input
                    type="search"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search help articles..."
                    className="h-10 w-full rounded-lg border border-[#B2DDFF] bg-white pl-9 pr-3 text-[13px] text-[#101828] shadow-sm outline-none focus:border-[#175CD3] focus:ring-1 focus:ring-[#175CD3]"
                  />
                </div>
              </div>
              <div
                className="pointer-events-none relative flex shrink-0 items-center justify-center sm:w-[140px]"
                aria-hidden
              >
                <span className="absolute size-24 rounded-full bg-[#175CD3]/10 blur-sm" />
                <span className="relative flex size-20 items-center justify-center rounded-2xl bg-white/80 shadow-[0_4px_16px_rgba(23,92,211,0.12)]">
                  <Headphones className="size-10 text-[#175CD3]" strokeWidth={1.5} />
                </span>
              </div>
            </div>
          </ExporterCard>

          <div>
            <h2 className="text-[14px] font-bold text-[#101828]">Popular Topics</h2>
            <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {POPULAR_TOPICS.map((t) => (
                <ExporterCard
                  key={t.title}
                  className="cursor-pointer p-4 transition hover:border-[#B2DDFF] hover:shadow-md"
                >
                  <span
                    className={`inline-flex size-9 items-center justify-center rounded-lg ${t.color}`}
                  >
                    <t.icon className="size-4" />
                  </span>
                  <h3 className="mt-2 text-[12px] font-bold text-[#101828]">{t.title}</h3>
                  <p className="mt-1 text-[10px] leading-relaxed text-[#667085]">{t.desc}</p>
                </ExporterCard>
              ))}
            </div>
          </div>

          <ExporterCard className="p-0 pt-1">
            <ExporterTabs tabs={ARTICLE_TABS} active={tab} onChange={setTab} />
            <ul className="divide-y divide-[#E4E7EC] p-5 pt-2">
              {filteredArticles.length === 0 ? (
                <li className="py-6 text-center text-[12px] text-[#667085]">
                  No articles match your search. Try another keyword or browse all topics.
                </li>
              ) : (
                filteredArticles.map((a) => (
                  <li key={a.title}>
                    <button
                      type="button"
                      className="flex w-full items-start gap-3 py-3 text-left first:pt-0 hover:opacity-90"
                    >
                      <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-lg bg-[#F9FAFB] text-[#175CD3]">
                        <a.icon className="size-4" />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="flex flex-wrap items-center gap-2">
                          <span className="text-[13px] font-semibold text-[#101828]">{a.title}</span>
                          <span
                            className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${categoryPillClass(a.category)}`}
                          >
                            {a.category}
                          </span>
                        </span>
                        <span className="mt-1 block text-[11px] leading-relaxed text-[#667085]">
                          {a.description}
                        </span>
                      </span>
                      <ChevronRight className="mt-2 size-4 shrink-0 text-[#98A2B3]" />
                    </button>
                  </li>
                ))
              )}
            </ul>
            <div className="border-t border-[#E4E7EC] px-5 py-4">
              <Button
                variant="outline"
                className="h-9 w-full rounded-lg border-[#D0D5DD] text-[12px] font-semibold text-[#344054] hover:bg-[#F9FAFB]"
              >
                Browse All Help Articles
              </Button>
            </div>
          </ExporterCard>

          <ExporterCard className="border-[#E4E7EC] bg-[#F9FAFB]">
            <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-[13px] font-bold text-[#101828]">
                  Can&apos;t find what you&apos;re looking for?
                </p>
                <p className="mt-1 text-[11px] text-[#667085]">
                  Our support team typically responds within one business day.
                </p>
              </div>
              <Button
                asChild
                className="h-9 shrink-0 rounded-lg bg-[#175CD3] px-4 text-[12px] font-semibold hover:bg-[#1448B0]"
              >
                <Link to="/dashboard/need-help">Submit a Request</Link>
              </Button>
            </div>
          </ExporterCard>

          <ExporterHelpFooter />
        </section>

        <aside className="space-y-4">
          <ExporterCard className="border-[#175CD3] bg-[#175CD3] text-white">
            <div className="flex size-9 items-center justify-center rounded-lg bg-white/15">
              <Headphones className="size-4" />
            </div>
            <h3 className="mt-3 text-[14px] font-bold">Still Need Help?</h3>
            <p className="mt-1 text-[11px] leading-relaxed text-[#B2DDFF]">
              Connect with our trade support specialists for personalized assistance.
            </p>
            <Button
              asChild
              className="mt-4 h-9 w-full rounded-lg bg-white text-[12px] font-semibold text-[#175CD3] hover:bg-[#EFF8FF]"
            >
              <Link to="/dashboard/need-help">Contact Support</Link>
            </Button>
          </ExporterCard>

          <ExporterCard>
            <h3 className="text-[14px] font-bold text-[#101828]">Support Channels</h3>
            <ul className="mt-3 space-y-3">
              <li className="flex items-start gap-3">
                <span className="mt-0.5 flex size-8 items-center justify-center rounded-lg bg-[#ECFDF3] text-[#039855]">
                  <MessageCircle className="size-4" />
                </span>
                <span>
                  <span className="flex items-center gap-2">
                    <span className="text-[12px] font-semibold text-[#101828]">Live Chat</span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-[#ECFDF3] px-2 py-0.5 text-[10px] font-semibold text-[#027A48]">
                      <span className="size-1.5 rounded-full bg-[#039855]" />
                      Online
                    </span>
                  </span>
                  <span className="mt-0.5 block text-[10px] text-[#667085]">Mon–Fri, 9:00 AM – 6:00 PM IST</span>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 flex size-8 items-center justify-center rounded-lg bg-[#EFF8FF] text-[#175CD3]">
                  <Mail className="size-4" />
                </span>
                <span>
                  <span className="text-[12px] font-semibold text-[#101828]">Email</span>
                  <a
                    href="mailto:support@aecci.com"
                    className="mt-0.5 block text-[11px] font-medium text-[#175CD3] hover:underline"
                  >
                    support@aecci.com
                  </a>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 flex size-8 items-center justify-center rounded-lg bg-[#EFF8FF] text-[#175CD3]">
                  <Phone className="size-4" />
                </span>
                <span>
                  <span className="text-[12px] font-semibold text-[#101828]">Call</span>
                  <span className="mt-0.5 block text-[11px] text-[#344054]">+91 98765 43210</span>
                  <span className="text-[10px] text-[#667085]">Mon–Sat, 10:00 AM – 7:00 PM IST</span>
                </span>
              </li>
            </ul>
          </ExporterCard>

          <ExporterCard>
            <h3 className="text-[14px] font-bold text-[#101828]">Video Guides</h3>
            <ul className="mt-3 space-y-2">
              {VIDEO_GUIDES.map((v) => (
                <li key={v.title}>
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-2 rounded-lg border border-[#E4E7EC] p-2.5 text-left hover:bg-[#F9FAFB]"
                  >
                    <span className="flex min-w-0 items-center gap-2">
                      <Video className="size-4 shrink-0 text-[#7A5AF8]" />
                      <span className="truncate text-[11px] font-medium text-[#344054]">{v.title}</span>
                    </span>
                    <span className="shrink-0 text-[10px] font-semibold text-[#667085]">{v.duration}</span>
                  </button>
                </li>
              ))}
            </ul>
          </ExporterCard>

          <ExporterCard>
            <h3 className="text-[14px] font-bold text-[#101828]">Downloads</h3>
            <p className="mt-1 text-[10px] text-[#667085]">PDF guides and reference documents</p>
            <ul className="mt-3 space-y-2">
              {DOWNLOADS.map((d) => (
                <li key={d}>
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-2 rounded-lg py-1.5 text-left text-[11px] font-semibold text-[#175CD3] hover:underline"
                  >
                    <span className="flex min-w-0 items-center gap-2">
                      <FileText className="size-3.5 shrink-0 text-[#667085]" />
                      <span className="truncate">{d}</span>
                    </span>
                    <Download className="size-3.5 shrink-0" />
                  </button>
                </li>
              ))}
            </ul>
          </ExporterCard>
        </aside>
      </div>
    </ExporterPageShell>
  );
}
