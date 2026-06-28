import { motion } from "framer-motion";
import { ArrowRight, Globe, Newspaper, Mail, Phone, Users, Target, Package, Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

const channels = [
  { icon: Globe, label: "AECCI Website" },
  { icon: Globe, label: "Global Deal Room Platform" },
  { icon: Newspaper, label: "AECCI Quarterly Newsletter" },
  { icon: Newspaper, label: "Annual Business Magazine" },
  { icon: Target, label: "Digital Campaigns & Business Promotions" },
  { icon: Users, label: "Trade Events, Conferences & Networking Programs" },
];

const audience = [
  "Indian Exporters & Manufacturers",
  "International Buyers & Importers",
  "Distributors & Channel Partners",
  "Trade Consultants & Legal Experts",
  "Investors & Business Delegations",
  "Expert Foreign Partners",
  "Government and Industry Stakeholders",
];

const packages = [
  {
    name: "Silver",
    badge: null,
    features: [
      "Mailing campaign reach: 30,000",
      "Email round 1: 30 days before event",
      "Email round 2: 15 days before event",
      "Website slide: 1 day at 30-day mark",
      "Website slide: 1 day at 15-day mark",
      "Website slide: 1 day before event",
      "Total website slide displays: 3",
    ],
  },
  {
    name: "Golden",
    badge: "Popular",
    features: [
      "Mailing campaign reach: 55,000",
      "Email round 1: 30 days before event",
      "Email round 2: 15 days before event",
      "Website slide: 2 days at 30-day mark",
      "Website slide: 2 days at 15-day mark",
      "Website slide: 1 day before event",
      "Total website slide displays: 5",
    ],
  },
  {
    name: "Platinum",
    badge: "Best Value",
    features: [
      "Mailing campaign reach: 100,000+",
      "Email round 1: 30 days before event",
      "Email round 2: 15 days before event",
      "Website slide: 3 days at 30-day mark",
      "Website slide: 3 days at 15-day mark",
      "Website slide: 1 day before event",
      "Total website slide displays: 7",
    ],
  },
];

export default function AdvertiseWithUs() {
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
            <span className="text-xs font-bold text-primary uppercase tracking-widest mb-3 block">Advertise With Us</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-background mb-6 leading-tight">
              Put Your Brand in Front of the{" "}
              <span className="text-primary">Global Business Community</span>
            </h1>
            <p className="text-background/70 text-base md:text-lg leading-relaxed">
              Promote your business where international trade begins.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Video */}
      <section className="py-20 md:py-24 bg-background border-b border-border">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <div className="text-center mb-10">
            <span className="text-xs font-bold text-primary uppercase tracking-widest mb-3 block">Watch</span>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">Advertising with AECCI</h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative w-full rounded-2xl overflow-hidden border border-border shadow-lg"
            style={{ paddingTop: "56.25%" }}
          >
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/q1C2AGyQ9Mo"
              title="Advertising with AECCI"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 md:py-24 bg-muted/30 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs font-bold text-primary uppercase tracking-widest mb-3 block">About</span>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Why Advertise with AECCI?</h2>
              <p className="text-muted-foreground text-base leading-relaxed mb-4">
                Advertising with the Asian Exporters' Chamber of Commerce & Industry (AECCI) gives your brand direct exposure to a highly engaged audience of exporters, importers, manufacturers, business leaders, trade professionals, investors, and international partners.
              </p>
              <p className="text-muted-foreground text-base leading-relaxed">
                With the launch of the Global Deal Room, your business can reach not only Indian enterprises but also overseas buyers, distributors, trade experts, legal professionals, and business organizations actively seeking new partnerships and opportunities.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="border-border">
                <CardContent className="p-8">
                  <h3 className="text-lg font-bold text-foreground mb-2">Our advertising solutions are designed to</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    maximize your visibility while delivering measurable business value. Whether your objective is to generate quality leads, increase brand awareness, promote your products and services, or expand into international markets, AECCI provides the right platform.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {["Lead Generation", "Brand Awareness", "Market Expansion", "Product Promotion"].map((tag) => (
                      <span key={tag} className="text-xs font-semibold bg-primary/10 text-primary border border-primary/20 px-3 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Advertise Through */}
      <section className="py-20 md:py-24 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <span className="text-xs font-bold text-primary uppercase tracking-widest mb-3 block">Channels</span>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">Advertise Through</h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-sm md:text-base leading-relaxed">
              By leveraging AECCI's growing global business network, your brand gains visibility among decision-makers actively involved in international trade and investment.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {channels.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.4 }}
              >
                <Card className="h-full border-border hover:border-primary/40 transition-colors group">
                  <CardContent className="p-6 flex items-center gap-4">
                    <div className="p-2.5 bg-primary/10 rounded-lg text-primary shrink-0 group-hover:bg-primary/20 transition-colors">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <p className="font-semibold text-foreground text-sm">{item.label}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-20 md:py-24 bg-muted/30 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <span className="text-xs font-bold text-primary uppercase tracking-widest mb-3 block">Packages</span>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">Choose Your Advertising Package</h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-sm md:text-base leading-relaxed">
              From startups and MSMEs to established enterprises, we offer flexible advertising opportunities to suit every business size and marketing budget.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, idx) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
              >
                <Card className={`h-full border-border hover:border-primary/40 transition-colors flex flex-col ${pkg.badge === "Popular" ? "border-primary/50 shadow-lg" : ""}`}>
                  <CardContent className="p-8 flex flex-col gap-5 h-full">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-black text-foreground tracking-wide">{pkg.name}</h3>
                      {pkg.badge && (
                        <Badge className="bg-primary/10 text-primary border border-primary/20 text-[10px] font-bold uppercase tracking-wider">
                          {pkg.badge}
                        </Badge>
                      )}
                    </div>
                    <Separator className="bg-border" />
                    <ul className="space-y-3 flex-1">
                      {pkg.features.map((f, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                          <Check className="size-4 text-primary shrink-0 mt-0.5" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <a
                      href="mailto:info@aecci.org.in"
                      className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold text-sm hover:bg-primary/90 transition-colors mt-2"
                    >
                      Enquire Now <ArrowRight className="size-4" />
                    </a>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tailored Solutions + Audience */}
      <section className="py-20 md:py-24 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs font-bold text-primary uppercase tracking-widest mb-3 block">Custom Campaigns</span>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Tailored Advertising Solutions</h2>
              <p className="text-muted-foreground text-base leading-relaxed mb-4">
                Every business has unique marketing objectives. That's why we work closely with you to create customized advertising campaigns that align with your industry, target audience and budget.
              </p>
              <p className="text-muted-foreground text-base leading-relaxed">
                Whether you're launching a new product, promoting your services, expanding into new markets or strengthening your brand presence, our team will help you design an effective campaign that delivers maximum impact.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs font-bold text-primary uppercase tracking-widest mb-3 block">Target Audience</span>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Reach the Right Audience</h2>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Advertising through AECCI allows you to connect with:
              </p>
              <ul className="space-y-3">
                {audience.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm text-foreground">
                    <span className="size-1.5 rounded-full bg-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 md:py-24 bg-muted/30 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary/10 rounded-lg text-primary">
                  <Package className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold text-primary uppercase tracking-widest">Get Started</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Flexible Packages for Every Business</h2>
              <p className="text-muted-foreground text-base leading-relaxed mb-4">
                From startups and MSMEs to established enterprises, we offer flexible advertising opportunities to suit every business size and marketing budget.
              </p>
              <p className="text-muted-foreground text-base leading-relaxed">
                Our goal is simple — to help your business gain greater visibility, generate meaningful business connections and create lasting growth opportunities. Partner with AECCI and showcase your brand to a global audience through our trusted trade ecosystem and the Global Deal Room.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="border-border">
                <CardContent className="p-8 flex flex-col gap-5">
                  <h3 className="text-lg font-bold text-foreground">Contact Us Today</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Explore advertising opportunities and find the package that's right for your business.
                  </p>
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-sm mb-0.5">Call Us</p>
                      <a href="tel:00918433720996" className="text-primary hover:underline text-sm">
                        0091-8433720996
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-sm mb-0.5">Email Us</p>
                      <a href="mailto:info@aecci.org.in" className="text-primary hover:underline text-sm">
                        info@aecci.org.in
                      </a>
                    </div>
                  </div>
                  <Separator className="bg-border" />
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Hilton Towers, 604, 6th Floor, Plot No.66, Sector 11, CBD Belapur, Navi Mumbai, Maharashtra 400614
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
            <img src="/arccilogoWithText.png" alt="AECCI Logo" className="w-32 h-auto object-contain mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-background mb-4 uppercase tracking-wide">
              Partner With AECCI
            </h2>
            <p className="text-background/60 text-base max-w-xl mb-8">
              Showcase your brand to a global audience through our trusted trade ecosystem and the Global Deal Room.
            </p>
            <a
              href="mailto:info@aecci.org.in"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-full font-semibold text-sm hover:bg-primary/90 transition-colors"
            >
              Get In Touch <ArrowRight className="size-4" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
