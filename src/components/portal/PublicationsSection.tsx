import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BookOpen,
  Newspaper,
  FilePdf,
  DownloadSimple,
  ArrowRight,
  EnvelopeSimple,
  CheckCircle,
  Clock,
} from "@phosphor-icons/react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

interface Publication {
  id: string;
  title: string;
  desc: string;
  type: "newsletter" | "magazine" | "report";
  categoryLabel: string;
  date: string;
  coverImage: string;
  readHref: string;
  downloadHref: string;
}

const PUBLICATIONS_DATA: Publication[] = [
  {
    id: "pub-1",
    title: "AECCI Global Trade Magazine - Q2 2026",
    desc: "Insights into Asian trade corridor dynamics, tariff restructurings, and emerging opportunities in the UAE-India CEPA framework.",
    type: "magazine",
    categoryLabel: "Quarterly Magazine",
    date: "June 2026",
    coverImage:
      "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80&w=600",
    readHref: "#",
    downloadHref: "#",
  },
  {
    id: "pub-2",
    title: "Exporters Chronicle - May 2026",
    desc: "A monthly digest of customs regulations, digital attestation guidelines, and policy briefs from India's Ministry of Commerce.",
    type: "newsletter",
    categoryLabel: "Monthly Newsletter",
    date: "May 2026",
    coverImage:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80&w=600",
    readHref: "#",
    downloadHref: "#",
  },
  {
    id: "pub-3",
    title: "Bilateral Trade Analysis: India-ASEAN",
    desc: "Comprehensive data-driven report exploring trade growth sectors, shipping logistics bottlenecks, and tariff exemption opportunities.",
    type: "report",
    categoryLabel: "Research Report",
    date: "April 2026",
    coverImage:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=600",
    readHref: "#",
    downloadHref: "#",
  },
  {
    id: "pub-4",
    title: "Chamber Business Review - Q1 2026",
    desc: "A deep dive into industrial automation trends, corporate compliance shifts, and post-budget economic strategies for Indian SMEs.",
    type: "magazine",
    categoryLabel: "Quarterly Magazine",
    date: "March 2026",
    coverImage:
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=600",
    readHref: "#",
    downloadHref: "#",
  },
  {
    id: "pub-5",
    title: "Exporters Chronicle - April 2026",
    desc: "Updates on shipping container logistics, digital certification protocols, and cross-border currency settlement policies.",
    type: "newsletter",
    categoryLabel: "Monthly Newsletter",
    date: "April 2026",
    coverImage:
      "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&q=80&w=600",
    readHref: "#",
    downloadHref: "#",
  },
  {
    id: "pub-6",
    title: "Global Supply Chain Resilience Study",
    desc: "Strategic research on diversifying supply networks, mitigating transit risks, and adopting green logistics solutions.",
    type: "report",
    categoryLabel: "Research Report",
    date: "February 2026",
    coverImage:
      "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=600",
    readHref: "#",
    downloadHref: "#",
  },
];

export default function PublicationsSection() {
  const [activeTab, setActiveTab] = React.useState<
    "all" | "newsletter" | "magazine" | "report"
  >("all");
  const [email, setEmail] = React.useState("");
  const [isSubscribed, setIsSubscribed] = React.useState(false);

  const filteredPublications = PUBLICATIONS_DATA.filter((pub) => {
    if (activeTab === "all") return true;
    return pub.type === activeTab;
  });

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }
    toast.success(
      "Successfully subscribed to AECCI Publications & Chronicle digests!",
    );
    setIsSubscribed(true);
    setEmail("");
  };

  return (
    <section
      id="publications"
      className="py-20 md:py-28 bg-background relative overflow-hidden border-b border-border"
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--primary-foreground)/3,transparent_70%)] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/3 blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-[1280px] px-6 md:px-12 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16">
          <div className="text-left">
            <span className="text-xs font-bold text-primary uppercase tracking-widest mb-3 block">
              Publications & Insights
            </span>
            <h2 className="font-heading font-black text-3xl md:text-5xl text-foreground tracking-tight">
              Knowledge Centre
            </h2>
            <p className="font-body text-sm md:text-base text-muted-foreground mt-4 max-w-xl leading-relaxed">
              Explore our latest journals, monthly newsletters, and data-driven
              trade research reports covering Asian commerce and policies.
            </p>
          </div>

          {/* Premium Tab Bar */}
          <div className="flex flex-wrap gap-2 p-1.5 bg-muted/40 border border-border/80 rounded-2xl backdrop-blur-md self-start md:self-auto">
            {(
              [
                { id: "all", label: "All Insights", Icon: BookOpen },
                { id: "magazine", label: "Magazines", Icon: BookOpen },
                { id: "newsletter", label: "Newsletters", Icon: Newspaper },
                { id: "report", label: "Trade Reports", Icon: FilePdf },
              ] as const
            ).map((tab) => {
              const TabIcon = tab.Icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={cn(
                    "flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all duration-300 relative cursor-pointer active:scale-[0.98]",
                    isActive
                      ? "text-primary-foreground bg-primary shadow-lg shadow-primary/15"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted",
                  )}
                >
                  <TabIcon className="size-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Publications Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 md:mb-20"
        >
          <AnimatePresence mode="popLayout">
            {filteredPublications.map((pub) => {
              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  key={pub.id}
                  className="group flex flex-col h-full bg-card/40 hover:bg-card/75 border border-border/70 hover:border-primary/30 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                >
                  {/* Card Cover Wrap */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-muted border-b border-border/50">
                    <img
                      src={pub.coverImage}
                      alt={pub.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />

                    {/* Visual Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Glassmorphic Category Badge */}
                    <div className="absolute top-4 left-4 px-3 py-1 bg-foreground/40 backdrop-blur-md border border-background/10 rounded-full text-[10px] font-bold text-background uppercase tracking-wider">
                      {pub.categoryLabel}
                    </div>

                    {/* Floating Download Button on Hover */}
                    <a
                      href={pub.downloadHref}
                      className="absolute bottom-4 right-4 flex size-9 items-center justify-center rounded-xl bg-primary text-primary-foreground opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 shadow-lg shadow-primary/20 hover:scale-110 active:scale-95 transition-all duration-300"
                      title="Download PDF"
                    >
                      <DownloadSimple className="size-4" weight="bold" />
                    </a>
                  </div>

                  {/* Card Text Body */}
                  <div className="p-6 flex flex-col flex-1 text-left">
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-3 font-medium">
                      <Clock className="size-3.5" />
                      <span>{pub.date}</span>
                    </div>

                    <h3 className="font-heading font-black text-lg text-foreground line-clamp-2 mb-3 group-hover:text-primary transition-colors">
                      {pub.title}
                    </h3>

                    <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3 mb-6 flex-1">
                      {pub.desc}
                    </p>

                    <div className="h-px bg-border/50 mb-4" />

                    {/* Action buttons */}
                    <div className="flex items-center justify-between mt-auto">
                      <a
                        href={pub.readHref}
                        className="inline-flex items-center text-xs font-bold text-primary hover:text-primary/80 uppercase tracking-widest group/link"
                      >
                        <span>Read Online</span>
                        <ArrowRight className="size-3.5 ml-1.5 group-hover/link:translate-x-1 transition-transform" />
                      </a>
                      <a
                        href={pub.downloadHref}
                        className="inline-flex items-center gap-1 text-[11px] font-bold text-muted-foreground hover:text-foreground uppercase tracking-wider transition-colors"
                      >
                        <FilePdf className="size-4 text-destructive" />
                        <span>PDF (3.2MB)</span>
                      </a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Subscription Banner Panel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl border border-border/80 overflow-hidden bg-card/45 backdrop-blur-xl shadow-2xl p-8 md:p-12 text-left"
        >
          {/* subtle mesh overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-primary/5 opacity-60 pointer-events-none" />

          <div className="relative z-10 max-w-4xl mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-xs font-bold text-primary mb-4 uppercase tracking-wider">
                <EnvelopeSimple className="size-4" />
                <span>Stay Informed</span>
              </div>
              <h3 className="font-heading font-black text-2xl md:text-3xl text-foreground mb-3">
                Subscribe to Chronicle Updates
              </h3>
              <p className="font-body text-xs md:text-sm text-muted-foreground leading-relaxed max-w-xl">
                Get our monthly digests, compliance newsletters, and upcoming
                event invitations delivered directly to your inbox. No spam,
                unsubscribe anytime.
              </p>
            </div>

            <div className="w-full lg:w-auto min-w-[320px] md:min-w-[400px]">
              {isSubscribed ? (
                <div className="flex items-center gap-3 bg-primary/10 border border-primary/20 p-4 rounded-2xl text-primary">
                  <CheckCircle className="size-6 shrink-0" weight="fill" />
                  <div className="text-sm text-left">
                    <p className="font-bold">Subscription confirmed!</p>
                    <p className="text-xs text-primary/70 mt-0.5">
                      Thank you for joining AECCI trade insights newsletter.
                    </p>
                  </div>
                </div>
              ) : (
                <form
                  onSubmit={handleSubscribe}
                  className="flex flex-col sm:flex-row gap-3"
                >
                  <Input
                    type="email"
                    placeholder="Enter your corporate email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-background/80 border-border text-foreground focus-visible:ring-primary focus-visible:ring-offset-0 placeholder:text-muted-foreground/50 h-12 rounded-xl text-xs"
                    required
                  />
                  <Button
                    type="submit"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-6 h-12 rounded-xl text-xs active:scale-[0.98] transition-all cursor-pointer whitespace-nowrap"
                  >
                    Subscribe Now
                  </Button>
                </form>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
