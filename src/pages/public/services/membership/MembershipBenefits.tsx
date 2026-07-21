import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
import { CheckCircle2, Download, UserPlus } from "lucide-react";

import membershipBrochurePdf from "@/assets/images/membership/AECCI-Membership-Brochure.pdf";
import corporateImg from "@/assets/images/membership/corporate.png";
import corporatePlusImg from "@/assets/images/membership/corportateplus.png";
import membershipFormPdf from "@/assets/images/membership/MEMBERSHIP-FORM-.pdf";
import nonprofitImg from "@/assets/images/membership/nonprofit.png";
import overseasImg from "@/assets/images/membership/overseas.png";
import smallbusinessImg from "@/assets/images/membership/smallbusiness.png";
import startupImg from "@/assets/images/membership/startup.png";

const membershipTiers = [
  {
    title: "Small Business (Associate)",
    image: smallbusinessImg,
    perfectFor:
      "Any individual or organization including proprietorship, partnership, Professional, LLP, LLC or other SME's with 15 or fewer employees, and no other offices worldwide engaged in trade, commerce or economic welfare of the community.",
    benefits: [
      "Certificate of Membership",
      "Certificate of Origin (Non-Preferential)",
      "Digital Platform access for e-CO service",
      "VISA Recommendation",
      "Company Listing on Chamber's digital Membership Directory",
      "Members' discounted rates for all Chamber events",
      "Regular updates for important circular/notifications from GOI",
      "Assistance in Handling International Payment Disputes (Arbitration)*",
    ],
    note: "*Advocacy charges applicable",
  },
  {
    title: "Start-Up",
    image: startupImg,
    perfectFor:
      "For start-up companies such as IT sector, real estate, Healthcare tech, delivery services, AI, e-commerce, B2B Software, Supply chain & logistics etc. which is less than a year old and have no other offices worldwide. (Certificate of Incorporation required).",
    benefits: [
      "Certificate of Membership",
      "VISA Recommendation",
      "Company Listing on Chamber's digital Membership Directory",
      "Members' discounted rates for all Chamber events",
      "Regular updates for important circular/notifications from GOI",
      "Focus on HR Solutions to manage Human Resource and labor law needs",
      "Assistance to deal with day to day issues in business expansion",
      "Use of Chamber Logo",
      "Networking opportunities with other Members",
      "Legal assistance in matters pertaining to Legal advocacy",
    ],
  },
  {
    title: "Corporate",
    image: corporateImg,
    perfectFor:
      "AECCI creates an environment for members to build mutually beneficial and lasting business relationships. Corporate Membership can be acquired by Private Limited Companies.",
    benefits: [
      "Certificate of Membership",
      "Certificate of Origin (Non-Preferential)",
      "Digital Platform access for e-CO service",
      "VISA Recommendation",
      "Company Listing on Chamber's digital Membership Directory",
      "Members' discounted rates for all Chamber events",
      "Regular updates for important circular/notifications from GOI",
      "Assistance in Handling International Payment Disputes (Arbitration)*",
      "Focus on HR Solutions for members",
      "Use of Chamber Logo",
      "Legal assistance in matters pertaining to legal advocacy*",
    ],
    note: "*Advocacy charges applicable",
  },
  {
    title: "Corporate +",
    image: corporatePlusImg,
    perfectFor:
      "AECCI's Corporate+ Membership can be acquired by Banks, Limited companies, or any Public Listed Companies.",
    benefits: [
      "All benefits of Corporate Membership",
      "Preferential advertising rates on the website, Daily Viewpoint, Newsletter, Annual Magazines",
      "Complimentary advertisement of joining company - viewpoint (full page) & Quarterly Newsletter (Half)*",
      "Exposure to 10,000+ unique visitors a month on AECCI website",
      "Opportunity to submit an article to the Chamber magazine",
      "Volunteer/Sponsorship Opportunities",
      "New joining members announced in the Chamber magazine",
    ],
    note: "*This advertisement will be placed once in financial year",
  },
  {
    title: "Overseas",
    image: overseasImg,
    perfectFor:
      "Companies based outside India in corporate and commercial fields are eligible for Overseas Membership. Provides direct contact with AECCI and its services including assistance for Commercial Arbitration or establishing new ventures in India.",
    benefits: [
      "Certificate of Membership",
      "Company Listing on Chamber's digital Membership Directory",
      "Members' rates for all Chamber events",
      "Regular updates for important circular/notifications from GOI",
      "Exposure to 10,000+ unique visitors a month on AECCI website",
      "Assistance in Handling International Payment Disputes (Arbitration)",
      "Networking opportunities with other Members",
      "Volunteer/Sponsorship Opportunities",
    ],
  },
  {
    title: "Non-Profit Organization",
    image: nonprofitImg,
    perfectFor:
      "For Non-Profit organizations such as Trusts, Institutions, Foundations, Centres etc. Proof of non-profit status is required upon application.",
    benefits: [
      "Certificate of Membership",
      "Company Listing on Chamber's digital Membership Directory",
      "Members' discounted rates for all Chamber events",
      "Regular updates for important circular/notifications from GOI",
      "Preferential advertising rates on the website, Daily Viewpoints, Newsletter",
      "Networking opportunities with other Members",
    ],
  },
];

export default function MembershipBenefits() {
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
              Membership &amp;{" "}
              <span className="text-primary">its Benefits</span>
            </h1>
            <p className="text-background/70 text-base md:text-lg leading-relaxed mb-8 italic">
              "Discover a world of possibilities and maximize your potential
              with our flexible range of membership options, tailored to meet
              your unique needs and goals."
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={membershipBrochurePdf}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors text-sm"
              >
                <Download className="w-4 h-4" />
                Membership Brochure
              </a>
              <a
                href={membershipFormPdf}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-background text-foreground px-6 py-3 rounded-full font-semibold hover:bg-background/90 transition-colors text-sm"
              >
                <UserPlus className="w-4 h-4" />
                Join to be a Member
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tiers */}
      <section className="py-20 md:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <span className="text-xs font-bold text-primary uppercase tracking-widest mb-3 block">
              Choose
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
              Your Membership Tier
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
              We offer various membership tiers designed to support businesses
              of all sizes, from local startups to global enterprises.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {membershipTiers.map((tier, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.4 }}
              >
                <Card className="h-full flex flex-col border-border hover:border-primary/40 transition-colors overflow-hidden">
                  <div className="-mx-0 overflow-hidden">
                    <img
                      src={tier.image}
                      alt={tier.title}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <CardContent className="p-6 flex flex-col gap-5 flex-1">
                    <h3 className="text-lg font-bold text-foreground">
                      {tier.title}
                    </h3>

                    <div>
                      <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">
                        Perfect For
                      </p>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {tier.perfectFor}
                      </p>
                    </div>

                    <div className="flex-1">
                      <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-3">
                        Key Benefits
                      </p>
                      <ul className="space-y-2">
                        {tier.benefits.map((benefit, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-2.5">
                            <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                            <span className="text-muted-foreground text-sm leading-snug">
                              {benefit}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {tier.note && (
                      <>
                        <Separator className="bg-border" />
                        <p className="text-xs text-muted-foreground italic">
                          {tier.note}
                        </p>
                      </>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Note */}
      <section className="py-16 md:py-20 bg-background border-t border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full aspect-video rounded-2xl overflow-hidden shadow-md border border-border"
            >
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/p4hzX3S5bx0?si=3_N910lRaxfG6k5g"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="w-full h-full"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-destructive mb-6 uppercase tracking-wider">
                Note
              </h3>
              <p className="text-muted-foreground mb-3 text-base">
                Dear Members,
              </p>
              <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                We would like to inform you that the application form for
                membership can now be filled digitally by clicking on the blue
                box in the application form. You can simply type in the required
                information in the digital form. However, for signatures and
                other necessary documents, we request you to kindly print the
                digitally typed form and provide your signature on the printed
                copy.
              </p>
              <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                Once you have signed the printed form, you can mail it to us at{" "}
                <a
                  href="mailto:membership@aecci.org.in"
                  className="text-primary hover:underline font-medium"
                >
                  membership@aecci.org.in
                </a>{" "}
                or deliver it — Hilton Towers, 604, 6th Floor, Plot No.66,
                Sector 11, CBD Belapur, Navi Mumbai, Maharashtra 400614.
              </p>
              <p className="text-muted-foreground text-sm">
                Thank you for your cooperation.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
