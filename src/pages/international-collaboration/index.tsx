import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Globe, Handshake, Mail, Phone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { partners } from "./partnerships/data";

const countries = [
  "Afghanistan",
  "Australia",
  "Bahrain",
  "Bangladesh",
  "Belgium",
  "Brazil",
  "Cambodia",
  "Canada",
  "China",
  "Denmark",
  "Egypt",
  "Ethiopia",
  "Finland",
  "France",
  "Germany",
  "Ghana",
  "Greece",
  "Hong Kong",
  "Hungary",
  "Indonesia",
  "Iran",
  "Israel",
  "Italy",
  "Japan",
  "Jordan",
  "Kenya",
  "Kuwait",
  "Malaysia",
  "Mexico",
  "Morocco",
  "Myanmar",
  "Nepal",
  "Netherlands",
  "New Zealand",
  "Nigeria",
  "Oman",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Russia",
  "Saudi Arabia",
  "Singapore",
  "South Africa",
  "South Korea",
  "Spain",
  "Sri Lanka",
  "Tanzania",
  "Thailand",
  "Turkey",
  "UAE",
  "Uganda",
  "Ukraine",
  "United Kingdom",
  "United States",
  "Vietnam",
  "Zambia",
  "Zimbabwe",
].slice(0, 50);

const howWeHelp = [
  {
    title: "Business Matchmaking",
    desc: "Connect Indian exporters with verified overseas buyers, distributors, and trade partners through the AECCI Global Deal Room.",
  },
  {
    title: "Legal & Compliance Support",
    desc: "Our network of international law firms and trade experts guide you through cross-border compliance, regulatory requirements, and market entry.",
  },
  {
    title: "Trade Facilitation",
    desc: "Facilitating Certificates of Origin, trade documentation, and customs advisory through our expert network spanning 55+ global collaborations.",
  },
  {
    title: "Investment Advisory",
    desc: "Access investment advisors and market-entry specialists who help Indian businesses identify and secure opportunities in global markets.",
  },
  {
    title: "B2B Forums & Events",
    desc: "Participate in international exhibitions, trade missions, and B2B forums that strengthen partnerships and open new market avenues.",
  },
  {
    title: "Become a Collaborator",
    desc: "Join AECCI's growing global network as an international partner and help Indian businesses succeed in your region.",
  },
];

export default function InternationalCollaboration() {
  return (
    <div className="w-full bg-background text-foreground">
      {/* Hero */}
      <section className="relative w-full py-16 md:py-24 bg-foreground overflow-hidden flex items-center">
        <div className="absolute right-0 top-0 w-1/2 h-full bg-primary/20 blur-[100px] pointer-events-none rounded-full translate-x-1/3 -translate-y-1/4 z-0" />
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="text-xs font-bold text-primary uppercase tracking-widest mb-3 block">
              International Collaboration
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-background mb-6 leading-tight">
              Connecting India to the World Through{" "}
              <span className="text-primary">55+ Global Partnerships</span>
            </h1>
            <p className="text-background/70 text-base md:text-lg leading-relaxed mb-8">
              Our strategic partnerships with over 55 international trade and
              law experts power the AECCI Global Deal Room, creating trusted
              pathways for cross-border partnerships, business matchmaking and
              international trade opportunities.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/global-deal-room"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-full font-semibold text-sm hover:bg-primary/90 transition-colors shadow-lg shadow-primary/25"
              >
                Enter Global Deal Room <ArrowRight className="size-4" />
              </Link>
              <a
                href="mailto:info@aecci.org.in"
                className="inline-flex items-center gap-2 bg-background/10 border border-background/20 text-background px-8 py-3 rounded-full font-semibold text-sm hover:bg-background/20 transition-colors"
              >
                Become a Collaborator
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About */}
      <section className="py-20 md:py-24 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs font-bold text-primary uppercase tracking-widest mb-3 block">
                About
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                A Trusted Global Ecosystem for Indian Businesses
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed mb-4">
                The Asian Exporters' Chamber of Commerce & Industry (AECCI) is
                committed to building a trusted global ecosystem that empowers
                Indian businesses to expand beyond borders.
              </p>
              <p className="text-muted-foreground text-base leading-relaxed mb-4">
                As a recognized trade body under the Ministry of Commerce &
                Industry, Government of India, AECCI has established a strong
                international network spanning 50+ countries, supported by 55+
                collaborations with leading trade experts, international law
                firms, and business associations.
              </p>
              <p className="text-muted-foreground text-base leading-relaxed">
                These strategic collaborations are the driving force behind the
                AECCI Global Deal Room — an innovative platform that facilitates
                cross-border business by connecting Indian exporters with
                international buyers, distributors, trade advisors, legal
                experts, investors, and market-entry specialists.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "55+", label: "Global Collaborations" },
                  { value: "50+", label: "Countries Covered" },
                  { value: "10,000+", label: "Active Exporters" },
                  { value: "2,000+", label: "Chamber Members" },
                ].map((stat) => (
                  <Card key={stat.label} className="border-border">
                    <CardContent className="p-6 text-center">
                      <p className="text-3xl font-black text-primary mb-1">
                        {stat.value}
                      </p>
                      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                        {stat.label}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How We Help */}
      <section className="py-20 md:py-24 bg-muted/30 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <span className="text-xs font-bold text-primary uppercase tracking-widest mb-3 block">
              Our Role
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
              How We Can Help?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-sm md:text-base leading-relaxed">
              A Trusted and Recognized Trade Organization Supporting Businesses
              Across Every Industry and Sector, All Consolidated within a
              Unified Platform.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {howWeHelp.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.4 }}
              >
                <Card className="h-full border-border hover:border-primary/40 transition-colors group">
                  <CardContent className="p-6 flex flex-col gap-3">
                    <div className="p-2.5 bg-primary/10 rounded-lg text-primary w-fit group-hover:bg-primary/20 transition-colors">
                      <Handshake className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-foreground">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.desc}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 50 Countries */}
      <section className="py-20 md:py-24 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <span className="text-xs font-bold text-primary uppercase tracking-widest mb-3 block">
              Global Reach
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
              Our Network Spans 50+ Countries
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-sm md:text-base leading-relaxed">
              AECCI's active participation in international exhibitions, trade
              missions, B2B forums, and global business events strengthens
              relationships across these regions.
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap gap-3 justify-center"
          >
            {countries.map((country, idx) => {
              const partner = partners.find((p) => p.country === country);
              const slug =
                partner?.slug ??
                country
                  .toLowerCase()
                  .replace(/\s+/g, "-")
                  .replace(/[^a-z0-9-]/g, "");
              return (
                <motion.div
                  key={country}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.02, duration: 0.3 }}
                >
                  <Link
                    to={`/events/international-collaboration/partnerships/${slug}`}
                  >
                    <Badge
                      variant="outline"
                      className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold border-border hover:border-primary/40 hover:bg-primary/5 hover:text-primary transition-colors cursor-pointer"
                    >
                      <Globe className="size-3 text-primary" />
                      {country}
                    </Badge>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
          <div className="text-center mt-10">
            <Link
              to="/events/international-collaboration/partnerships"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-full font-semibold text-sm hover:bg-primary/90 transition-colors shadow-lg shadow-primary/25"
            >
              View All Partnership Details <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Global Deal Room CTA + Contact */}
      <section className="py-20 md:py-24 bg-muted/30 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs font-bold text-primary uppercase tracking-widest mb-3 block">
                Global Deal Room
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Access the Global Deal Room
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed mb-6">
                AECCI works closely with international experts, law firms, trade
                organizations, industry associations and leading businesses to
                create meaningful opportunities for Indian enterprises. Through
                our Global Deal Room, we facilitate international trade by
                connecting exporters with overseas buyers, distributors, legal
                experts, investment advisors, and strategic business partners.
              </p>
              <Link
                to="/global-deal-room"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-full font-semibold text-sm hover:bg-primary/90 transition-colors shadow-lg shadow-primary/25"
              >
                Enter Global Deal Room <ArrowRight className="size-4" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="border-border">
                <CardContent className="p-8 flex flex-col gap-5">
                  <h3 className="text-lg font-bold text-foreground">
                    Contact Us
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Interested in partnering with AECCI or exploring
                    collaboration opportunities? Reach out to us.
                  </p>
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-sm mb-0.5">
                        Call Us
                      </p>
                      <a
                        href="tel:00918433720996"
                        className="text-primary hover:underline text-sm"
                      >
                        0091-8433720996
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-sm mb-0.5">
                        Email Us
                      </p>
                      <a
                        href="mailto:info@aecci.org.in"
                        className="text-primary hover:underline text-sm"
                      >
                        info@aecci.org.in
                      </a>
                    </div>
                  </div>
                  <Separator className="bg-border" />
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Hilton Towers, 604, 6th Floor, Plot No.66, Sector 11, CBD
                    Belapur, Navi Mumbai, Maharashtra 400614
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 bg-foreground overflow-hidden">
        <div className="absolute inset-0 bg-primary/10 blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center text-center"
          >
            <img
              src="/arccilogoWithText.png"
              alt="AECCI Logo"
              className="w-32 h-auto object-contain mb-6"
            />
            <h2 className="text-3xl md:text-4xl font-bold text-background mb-4 uppercase tracking-wide">
              Come Grow With Us!
            </h2>
            <p className="text-background/60 text-base max-w-xl mb-8">
              Our active participation in international exhibitions, trade
              missions, B2B forums, and global business events enables Indian
              businesses to access new markets, build trusted partnerships, and
              expand their global footprint.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="mailto:info@aecci.org.in"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-full font-semibold text-sm hover:bg-primary/90 transition-colors"
              >
                Become a Collaborator <ArrowRight className="size-4" />
              </a>
              <Link
                to="/services/membership"
                className="inline-flex items-center gap-2 bg-background/10 border border-background/20 text-background px-8 py-3 rounded-full font-semibold text-sm hover:bg-background/20 transition-colors"
              >
                Find Out More About Our Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
