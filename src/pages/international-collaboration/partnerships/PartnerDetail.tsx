import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ExternalLink, Globe, Handshake, Mail } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { partners } from "./data";

export default function PartnerDetail() {
  const { country } = useParams<{ country: string }>();
  const partner = partners.find((p) => p.slug === country);

  if (!partner) {
    return (
      <div className="w-full bg-background text-foreground min-h-[60vh] flex flex-col items-center justify-center gap-4 px-6">
        <Globe className="w-12 h-12 text-muted-foreground" />
        <h1 className="text-2xl font-bold text-foreground">Partner Not Found</h1>
        <p className="text-muted-foreground text-sm">
          We couldn't find a collaboration partner for this country.
        </p>
        <Link
          to="/events/international-collaboration/partnerships"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-primary/90 transition-colors mt-2"
        >
          <ArrowLeft className="size-4" /> View All Partners
        </Link>
      </div>
    );
  }

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
            <Link
              to="/events/international-collaboration/partnerships"
              className="inline-flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-widest mb-4 hover:underline"
            >
              <ArrowLeft className="size-3" /> All Partners
            </Link>
            <span className="text-xs font-bold text-primary/70 uppercase tracking-widest mb-2 block">
              Collaboration Partner
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-background mb-4 leading-tight">
              {partner.country}
            </h1>
            {partner.firm && (
              <p className="text-background/80 text-lg md:text-xl font-medium mb-6">
                {partner.firm}
              </p>
            )}
            {partner.website && (
              <a
                href={partner.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-primary/90 transition-colors shadow-lg shadow-primary/25"
              >
                Visit Website <ExternalLink className="size-4" />
              </a>
            )}
          </motion.div>
        </div>
      </section>

      {/* Detail */}
      <section className="py-20 md:py-24 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

            {/* About */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs font-bold text-primary uppercase tracking-widest mb-3 block">About the Partnership</span>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                AECCI's Official Partner in {partner.country}
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed mb-4">
                {partner.firm
                  ? `${partner.firm} is AECCI's official collaboration partner in ${partner.country} for trade facilitation, legal advisory, and business matchmaking.`
                  : `AECCI is actively establishing a collaboration partner in ${partner.country}. Contact us to learn more or to express interest in becoming the official partner.`}
              </p>
              <p className="text-muted-foreground text-base leading-relaxed mb-6">
                Through this partnership, AECCI members gain access to on-the-ground expertise, market-entry support, legal compliance guidance, and business introduction services within {partner.country}.
              </p>

              <div className="flex flex-wrap gap-3">
                <Badge variant="outline" className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold border-border">
                  <Globe className="size-3 text-primary" /> Trade Facilitation
                </Badge>
                <Badge variant="outline" className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold border-border">
                  <Handshake className="size-3 text-primary" /> Business Matchmaking
                </Badge>
                <Badge variant="outline" className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold border-border">
                  <Globe className="size-3 text-primary" /> Legal Advisory
                </Badge>
              </div>
            </motion.div>

            {/* Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="border-border">
                <CardContent className="p-8 flex flex-col gap-5">
                  <h3 className="text-lg font-bold text-foreground">Partner Details</h3>

                  <div className="flex flex-col gap-1">
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Country</p>
                    <p className="text-foreground font-medium">{partner.country}</p>
                  </div>

                  {partner.firm && (
                    <div className="flex flex-col gap-1">
                      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Firm Name</p>
                      <p className="text-foreground font-medium">{partner.firm}</p>
                    </div>
                  )}

                  {partner.website && (
                    <div className="flex flex-col gap-1">
                      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Website</p>
                      <a
                        href={partner.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline text-sm inline-flex items-center gap-1.5 break-all"
                      >
                        {partner.website} <ExternalLink className="size-3 shrink-0" />
                      </a>
                    </div>
                  )}

                  <Separator className="bg-border" />

                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-sm mb-0.5">Enquire via AECCI</p>
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

      {/* How AECCI Can Help */}
      <section className="py-20 md:py-24 bg-muted/30 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <span className="text-xs font-bold text-primary uppercase tracking-widest mb-3 block">Services</span>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
              What This Partnership Enables
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-sm md:text-base leading-relaxed">
              AECCI members can leverage this collaboration to access the following services in {partner.country}.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Market Entry Support",
                desc: `Get expert guidance on entering the ${partner.country} market — from regulatory requirements to distributor identification.`,
              },
              {
                title: "Legal & Compliance Advisory",
                desc: `Navigate local laws, trade regulations, and compliance requirements with support from our verified partner in ${partner.country}.`,
              },
              {
                title: "Business Matchmaking",
                desc: `Connect with potential buyers, distributors, agents, and strategic partners through the AECCI Global Deal Room.`,
              },
              {
                title: "Trade Documentation",
                desc: "Receive assistance with certificates of origin, trade documents, attestation, and export formalities.",
              },
              {
                title: "Investment Advisory",
                desc: `Identify investment opportunities and understand the business climate in ${partner.country} with advisor support.`,
              },
              {
                title: "Dispute Resolution",
                desc: "Access arbitration and dispute resolution pathways backed by AECCI's international arbitration centre.",
              },
            ].map((item, idx) => (
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
                    <h3 className="text-base font-bold text-foreground">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
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
              Ready to Enter {partner.country}?
            </h2>
            <p className="text-background/60 text-base max-w-xl mb-8">
              Reach out to AECCI to connect with our {partner.country} partner and explore how we can support your international trade goals.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="mailto:info@aecci.org.in"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-full font-semibold text-sm hover:bg-primary/90 transition-colors"
              >
                Get in Touch <ExternalLink className="size-4" />
              </a>
              <Link
                to="/events/international-collaboration/partnerships"
                className="inline-flex items-center gap-2 bg-background/10 border border-background/20 text-background px-8 py-3 rounded-full font-semibold text-sm hover:bg-background/20 transition-colors"
              >
                <ArrowLeft className="size-4" /> All Partners
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
