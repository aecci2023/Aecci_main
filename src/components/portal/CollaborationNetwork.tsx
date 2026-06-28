import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Award, ShieldCheck, Mail, Globe } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type Partner = {
  name: string;
  location: string;
  role: string;
  certification: string;
  contact: string;
};

const REGIONS: Record<
  string,
  { partners: Partner[]; color: string; label: string }
> = {
  AFRICA: {
    label: "Africa",
    color: "text-chart-4",
    partners: [
      {
        name: "Nairobi Trade Hub & Advisory",
        location: "Nairobi, Kenya",
        role: "East Africa Access Facilitator",
        certification: "Customs Pre-Verification Hub",
        contact: "nairobi-desk@aecci.org",
      },
      {
        name: "West Africa Chamber Syndicate",
        location: "Accra, Ghana",
        role: "Sovereign Trade Advisor",
        certification: "ECOWAS Trade Clearance Board",
        contact: "accra-desk@aecci.org",
      },
      {
        name: "Southern Africa Merchant Union",
        location: "Johannesburg, South Africa",
        role: "Industrial Market Advisor",
        certification: "SADC Advisory Council",
        contact: "joburg-desk@aecci.org",
      },
    ],
  },
  EUROPE: {
    label: "Europe",
    color: "text-chart-2",
    partners: [
      {
        name: "Rotterdam Trade & Logistics Syndicate",
        location: "Rotterdam, Netherlands",
        role: "EU Customs Port Authority Liaison",
        certification: "Schengen Tariff Gateway",
        contact: "rotterdam-desk@aecci.org",
      },
      {
        name: "Frankfurt Trade Match Alliance",
        location: "Frankfurt, Germany",
        role: "Bilateral Industrial Broker",
        certification: "EU Industry Validation Board",
        contact: "frankfurt-desk@aecci.org",
      },
      {
        name: "Baltic Exporter Hub",
        location: "Riga, Latvia",
        role: "Northern Europe Distribution Agent",
        certification: "Baltic Chamber Registry",
        contact: "riga-desk@aecci.org",
      },
    ],
  },
  ASIA: {
    label: "Asia",
    color: "text-primary",
    partners: [
      {
        name: "Enterprise Singapore Advisory Board",
        location: "Singapore Hub",
        role: "ASEAN Compliance Gateway",
        certification: "Singapore Fintech Registry",
        contact: "singapore-desk@aecci.org",
      },
      {
        name: "Tokyo Business Integration Council",
        location: "Tokyo, Japan",
        role: "Precision Engineering Matchmaker",
        certification: "METI Import Advisory Group",
        contact: "tokyo-desk@aecci.org",
      },
      {
        name: "GCC Trade Facilitation Desk",
        location: "Dubai, UAE",
        role: "Middle East Logistics Router",
        certification: "Dubai Chamber Partner",
        contact: "dubai-desk@aecci.org",
      },
    ],
  },
  AMERICAS: {
    label: "Americas",
    color: "text-chart-5",
    partners: [
      {
        name: "Mexico-India Commerce Association (MICA)",
        location: "Monterrey, Mexico",
        role: "Manufacturing Supply Matchmaker",
        certification: "USMCA Cross-Border Board",
        contact: "mexico-desk@aecci.org",
      },
      {
        name: "North America Deal Room Syndicate",
        location: "Chicago, USA",
        role: "FMCG Wholesale Broker",
        certification: "USDA Import Compliance Desk",
        contact: "chicago-desk@aecci.org",
      },
      {
        name: "Brazil Agro-Commerce Group",
        location: "São Paulo, Brazil",
        role: "Mercosur Market Advisory",
        certification: "Brazil Import Registry Authority",
        contact: "saopaulo-desk@aecci.org",
      },
    ],
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.96 },
  show: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      delay: i * 0.06,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  }),
  exit: { opacity: 0, scale: 0.96, transition: { duration: 0.2 } },
};

export default function CollaborationNetwork() {
  const [activeRegion, setActiveRegion] = React.useState<string>("AFRICA");
  const { partners, color } = REGIONS[activeRegion];

  return (
    <section className="bg-background py-16 md:py-24 relative border-b border-border/60 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_80%_50%,hsl(var(--primary)/0.04),transparent)] pointer-events-none" />

      <div className="mx-auto max-w-[1280px] px-6 md:px-12 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/8 border border-primary/15 text-primary text-xs font-semibold uppercase tracking-wider mb-5">
            <Globe className="size-3.5" /> Global Infrastructure
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground tracking-tight leading-[1.1] mb-4">
            Global Collaboration <span className="text-primary">Network</span>
          </h2>
          <p className="text-muted-foreground text-base leading-relaxed">
            We partner with leading sovereign trade authorities, ports, and
            chambers to validate markets and connect you with verified local
            buyers.
          </p>
        </div>

        {/* Region Tabs */}
        <div className="flex justify-center gap-2 mb-10 flex-wrap">
          {Object.entries(REGIONS).map(([key, { label }]) => (
            <button
              key={key}
              onClick={() => setActiveRegion(key)}
              className={cn(
                "px-5 py-2 rounded-full border text-xs font-bold tracking-wider transition-all duration-200",
                activeRegion === key
                  ? "bg-primary text-primary-foreground border-primary shadow-md shadow-primary/20"
                  : "bg-muted/50 border-border text-muted-foreground hover:text-foreground hover:border-border/80 hover:bg-muted",
              )}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Partner Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <AnimatePresence mode="wait">
            {partners.map((p, i) => (
              <motion.div
                key={p.name}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                animate="show"
                exit="exit"
              >
                <Card className="h-full rounded-2xl border-border/60 bg-card/50 backdrop-blur-sm hover:border-primary/25 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group p-6 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin className="size-4 text-primary shrink-0" />
                        <span className="text-[11px] font-bold font-mono uppercase tracking-wide">
                          {p.location}
                        </span>
                      </div>
                      <Badge
                        variant="outline"
                        className="text-[9px] font-mono text-muted-foreground shrink-0 border-border bg-muted/50"
                      >
                        Verified
                      </Badge>
                    </div>

                    <h4
                      className={cn(
                        "text-sm font-bold text-foreground group-hover:transition-colors leading-snug",
                        `group-hover:${color}`,
                      )}
                    >
                      {p.name}
                    </h4>

                    <div className="space-y-1.5 pt-3 border-t border-border/50 text-xs text-muted-foreground">
                      <p className="flex items-start gap-2">
                        <Award className="size-3.5 shrink-0 mt-0.5 text-muted-foreground/70" />
                        <span>
                          Role:{" "}
                          <strong className="text-foreground/80">
                            {p.role}
                          </strong>
                        </span>
                      </p>
                      <p className="flex items-start gap-2">
                        <ShieldCheck className="size-3.5 shrink-0 mt-0.5 text-muted-foreground/70" />
                        <span>
                          Auth:{" "}
                          <strong className="text-foreground/80">
                            {p.certification}
                          </strong>
                        </span>
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 flex items-center gap-2 pt-4 border-t border-border/50 text-[10px] text-muted-foreground/70 font-mono">
                    <Mail className="size-3 shrink-0" />
                    <span className="truncate">{p.contact}</span>
                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
