import { motion } from "framer-motion";
import {
  Download,
  CheckCircle2,
  Building2,
  Rocket,
  Building,
  Crown,
  Globe2,
  HeartHandshake,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import membershipFormPdf from "@/assets/images/membership/MEMBERSHIP-FORM-.pdf";

const guidelinesData = [
  {
    id: "small-business",
    title: "Small Business",
    icon: Building2,
    investment: { joining: "INR 2,000", annual: "INR 6,000" },
    forms: [
      { name: "Membership Form", link: membershipFormPdf },
      { name: "Cover Letter", link: "#" },
      { name: "Indemnity Bond", link: "#" },
    ],
    guidelines: {
      category:
        "Proprietorship, Partnership, Professional, LLP, LLC, or other SME's.",
      details: [
        "Membership Form filled, signed & stamped",
        "2 Passport size photos",
        "Request letter on Letter Head",
        "Indemnity bond",
        "Self-attested copies of GST Certificate / PAN Copy",
        "IEC License Copy",
        "Certificate of Registration",
      ],
    },
  },
  {
    id: "start-up",
    title: "Start-Up",
    icon: Rocket,
    investment: { joining: "INR 2,000", annual: "INR 8,000" },
    forms: [
      { name: "Membership Form", link: membershipFormPdf },
      { name: "Cover Letter", link: "#" },
      { name: "Indemnity Bond", link: "#" },
    ],
    guidelines: {
      category:
        "IT, Real estate, Healthcare tech, Delivery services, AI, E-commerce, B2B Software, Supply chain & Logistics — LESS THAN A YEAR OLD.",
      details: [
        "Membership Form filled, signed & stamped",
        "2 Passport size photos",
        "Request letter on Letter Head",
        "Indemnity bond",
        "Self-attested copies of GST Certificate / PAN Copy",
        "Certificate of Incorporation",
      ],
    },
  },
  {
    id: "corporate",
    title: "Corporate",
    icon: Building,
    investment: { joining: "INR 2,000", annual: "INR 10,000" },
    forms: [
      { name: "Membership Form", link: membershipFormPdf },
      { name: "Cover Letter", link: "#" },
      { name: "Indemnity Bond", link: "#" },
    ],
    guidelines: {
      category: "Private Limited companies.",
      details: [
        "Membership Form filled, signed & stamped",
        "2 Passport size photos",
        "Request letter on Letter Head",
        "Indemnity bond",
        "Self-attested copies of GST Certificate / PAN Copy",
        "IEC License Copy",
        "Certificate of Registration",
        "Copy of AOA, MOA",
        "Certificate of Incorporation",
      ],
    },
  },
  {
    id: "corporate-plus",
    title: "Corporate +",
    icon: Crown,
    investment: { joining: "INR 2,000", annual: "INR 20,000" },
    forms: [
      { name: "Membership Form", link: membershipFormPdf },
      { name: "Cover Letter", link: "#" },
      { name: "Indemnity Bond", link: "#" },
    ],
    guidelines: {
      category: "Banks, Limited companies, or any Public Listed Companies.",
      details: [
        "Membership Form filled, signed & stamped",
        "2 Passport size photos",
        "Request letter on Letter Head",
        "Indemnity bond",
        "Self-attested copies of GST Certificate / PAN Copy",
        "IEC License Copy",
        "Certificate of Registration",
        "Copy of AOA, MOA",
        "Certificate of Incorporation",
      ],
    },
  },
  {
    id: "overseas",
    title: "Overseas",
    icon: Globe2,
    investment: { joining: "$ 50", annual: "$ 200" },
    note: "*Fee calculated at equivalent INR exchange rate",
    forms: [
      { name: "Membership Form", link: membershipFormPdf },
      { name: "Cover Letter", link: "#" },
      { name: "Indemnity Bond", link: "#" },
    ],
    guidelines: {
      category: "Companies based outside India.",
      details: [
        "Membership Form filled, signed & stamped",
        "2 Passport size photos",
        "Request letter on Letter Head",
        "Indemnity bond",
        "Self-attested copies of GST Certificate / PAN Copy",
        "IEC License Copy",
        "Certificate of Registration",
        "Passport copies of Authorized Signatories",
      ],
    },
  },
  {
    id: "non-profit",
    title: "Non-Profit Organization",
    icon: HeartHandshake,
    investment: { joining: "INR 2,000", annual: "INR 5,500" },
    forms: [
      { name: "Membership Form", link: membershipFormPdf },
      { name: "Cover Letter", link: "#" },
      { name: "Indemnity Bond", link: "#" },
    ],
    guidelines: {
      category: "Trust, Institutions, Foundations, or Centres.",
      details: [
        "Membership Form filled, signed & stamped",
        "2 Passport size photos",
        "Request letter on Letter Head",
        "Indemnity bond",
        "Certificate of Registration / Non-profit proof copies",
        "Certificate of Incorporation",
      ],
    },
  },
];

export default function FeeFormsGuidelines() {
  return (
    <div className="w-full bg-background text-foreground">
      {/* Hero */}
      <section className="relative w-full py-16 md:py-20 bg-foreground overflow-hidden flex items-center">
        <div className="absolute right-0 top-0 w-1/2 h-full bg-primary/20 blur-[100px] pointer-events-none rounded-full translate-x-1/3 -translate-y-1/4 z-0" />
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="text-xs font-bold text-primary uppercase tracking-widest mb-3 block">
              Membership
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-background mb-4 leading-tight">
              Fees, Forms &amp; <span className="text-primary">Guidelines</span>
            </h1>
            <p className="text-background/70 text-base md:text-lg leading-relaxed italic">
              "Follow the guidelines &amp; fulfill the requirements to enjoy
              day-to-day chamber services and connect directly with the AECCI
              management."
            </p>
          </motion.div>
        </div>
      </section>

      {/* Cards */}
      <section className="py-20 md:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {guidelinesData.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.4 }}
              >
                <Card className="h-full flex flex-col border-border hover:border-primary/40 transition-colors">
                  {/* Header */}
                  <div className="p-5 border-b border-border flex items-center gap-4 bg-muted/30">
                    <div className="p-3 rounded-xl bg-primary/10 text-primary">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground">
                      {item.title}
                    </h3>
                  </div>

                  <CardContent className="p-6 flex flex-col gap-6 flex-1">
                    {/* Investment */}
                    <div>
                      <p className="text-xs font-bold text-muted-foreground tracking-wider uppercase mb-3">
                        Investment Schedule
                      </p>
                      <div className="bg-muted/50 rounded-xl p-4 border border-border space-y-2">
                        <div className="flex justify-between items-center text-sm">
                          <span className="text-muted-foreground">
                            Joining Fee
                          </span>
                          <span className="font-bold text-foreground">
                            {item.investment.joining}
                          </span>
                        </div>
                        <Separator className="bg-border" />
                        <div className="flex justify-between items-center text-sm">
                          <span className="text-muted-foreground">
                            Annual Fee
                          </span>
                          <span className="font-bold text-foreground">
                            {item.investment.annual}
                          </span>
                        </div>
                        {item.note && (
                          <p className="text-xs text-muted-foreground italic pt-1">
                            {item.note}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Forms */}
                    <div>
                      <p className="text-xs font-bold text-muted-foreground tracking-wider uppercase mb-3">
                        Forms
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                        {item.forms.map((form, fIdx) => (
                          <a
                            key={fIdx}
                            href={form.link}
                            target={form.link !== "#" ? "_blank" : "_self"}
                            rel={form.link !== "#" ? "noopener noreferrer" : ""}
                            className="flex items-center gap-2 p-2.5 rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-colors group"
                          >
                            <div className="bg-muted p-1.5 rounded-md group-hover:bg-primary/10 transition-colors shrink-0">
                              <Download className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary" />
                            </div>
                            <span className="text-xs font-medium text-muted-foreground group-hover:text-primary transition-colors truncate">
                              {form.name}
                            </span>
                          </a>
                        ))}
                      </div>
                    </div>

                    {/* Guidelines */}
                    <div className="flex-1">
                      <p className="text-xs font-bold text-muted-foreground tracking-wider uppercase mb-3">
                        Guidelines
                      </p>
                      <div className="space-y-4">
                        <div className="bg-primary/5 rounded-xl p-4 border border-primary/20">
                          <span className="block text-[10px] font-bold text-primary tracking-wider uppercase mb-1">
                            Business Category
                          </span>
                          <p className="text-foreground text-sm font-medium leading-relaxed">
                            {item.guidelines.category}
                          </p>
                        </div>
                        <div>
                          <span className="block text-[10px] font-bold text-muted-foreground tracking-wider uppercase mb-2">
                            Details Required
                          </span>
                          <ul className="space-y-2">
                            {item.guidelines.details.map((detail, dIdx) => (
                              <li key={dIdx} className="flex items-start gap-2">
                                <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                                <span className="text-muted-foreground text-xs leading-relaxed">
                                  {detail}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Quick links */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto mt-14">
            <Link
              to="/services/membership/enrollment-offers"
              className="flex items-center justify-center py-3 px-6 bg-primary text-primary-foreground rounded-xl font-semibold text-sm hover:bg-primary/90 transition-colors"
            >
              Enrollment Offers
            </Link>
            <Link
              to="/services/membership/visa-recommendation"
              className="flex items-center justify-center py-3 px-6 bg-primary text-primary-foreground rounded-xl font-semibold text-sm hover:bg-primary/90 transition-colors"
            >
              Visa Recommendation Letter
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
