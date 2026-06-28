import { motion } from "framer-motion";
import { ExternalLink, Phone, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import egcLogo from "../../assets/images/partnerimg/egc.png";
import econsLogo from "../../assets/images/partnerimg/econs.png";
import elsplLogo from "../../assets/images/partnerimg/elspl.png";

const partners = [
  {
    name: "EGC India",
    logo: egcLogo,
    logoAlt: "EGC India Logo",
    logoLeft: true,
    website: "http://www.egcindia.in",
    websiteLabel: "www.egcindia.in",
    phone: "+91 720 804 6058",
    paragraphs: [
      <>
        Exporting a full range of products including{" "}
        <strong className="text-foreground">
          Fresh Vegetable, Spices, Pulses, Grain, Oilseeds, Cattle Feed, Textile
          &amp; all kinds of Foods
        </strong>
        , EGC are exporting worldwide to the leading food multinationals &amp;
        fast food chains in the USA, Europe, Middle East, Canada &amp; Asia.
        With them, you have the option of having a product of your choice with
        tailor made specification or to pick from their standard product list.
        The dedicated team gives you the comfort of a wide product range and
        consistent quality at the best prices.
      </>,
      <>
        What sets EGC apart is their reputation as a clean and trustworthy
        exporter, which has drawn many importers from all over the world. AECCI
        is proud of the long and trusting relationship that is established with
        our customers.
      </>,
    ],
  },
  {
    name: "Econs'",
    logo: econsLogo,
    logoAlt: "Econs' Logo",
    logoLeft: false,
    website: null,
    websiteLabel: null,
    phone: null,
    paragraphs: [
      <>
        Econs&apos; is a franchise consultant and marketing facilitator Company
        of Excellency Legalization Services Private Limited (ELSPL), based in
        Navi Mumbai (Maharashtra). It was founded in 1998 by Mr. Zaheer Bukhari
        (CEO).
      </>,
      <>
        <strong className="text-foreground">
          Econs&apos; is also specialized in Travel Agency, Export Consultancy,
          Holiday Packages and Commercial Service Activities.
        </strong>{" "}
        The brand is known for providing the services to establish a smooth,
        hassle free trustworthy relationship between business partners.
      </>,
      <>
        Through their expert services, not only do they help franchisors expand
        their business but also avail the franchisees with best opportunity to
        widen their work areas.
      </>,
    ],
  },
  {
    name: "ELSPL",
    logo: elsplLogo,
    logoAlt: "ELSPL Logo",
    logoLeft: true,
    website: null,
    websiteLabel: null,
    phone: null,
    paragraphs: [
      <>
        <strong className="text-foreground">
          Excellency Legalisation Services Pvt. Ltd. (ELSPL)
        </strong>{" "}
        is India&apos;s leading{" "}
        <strong className="text-foreground">Apostille and Legalisation</strong>{" "}
        (consular) agent, operating from offices at Mumbai and New Delhi.
        Established in 1998, providing primarily a certification and
        legalisation service to exporters. We provide our clients with a
        complete export documentation service for both commercial and legal
        documents, including the completion of Arab certification, GSP and
        Certificates of Origin for manufacturers and freight forwarders.
      </>,
      <>
        Excellency works closely with Chambers of Commerce, Consulates,
        Embassies and other Government departments, providing expertise in
        obtaining the necessary certification and legalisation for our clients
        on an urgent basis.
      </>,
    ],
  },
];

export default function StrategicPartners() {
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
              Global Network
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-background mb-6 leading-tight">
              Strategic <span className="text-primary">Partners</span>
            </h1>
            <p className="text-background/70 text-base md:text-lg leading-relaxed">
              AECCI's strategic partnerships bring together industry leaders
              across trade, legal, and export services — creating a robust
              global network that empowers businesses to grow beyond borders.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-20 md:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <span className="text-xs font-bold text-primary uppercase tracking-widest mb-3 block">
              Our Partners
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
              Trusted Collaborations
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-sm md:text-base leading-relaxed">
              These organizations share AECCI's commitment to excellence,
              transparency, and fostering international trade.
            </p>
          </div>

          <div className="flex flex-col gap-8">
            {partners.map((partner, idx) => {
              const logoBlock = (
                <div className="md:col-span-4 flex items-center justify-center py-4">
                  <img
                    src={partner.logo}
                    alt={partner.logoAlt}
                    className="w-full max-w-[200px] h-auto object-contain"
                  />
                </div>
              );
              const textBlock = (
                <div className="md:col-span-8 flex flex-col justify-center gap-4 text-sm text-muted-foreground leading-relaxed">
                  {partner.paragraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                  {(partner.website || partner.phone) && (
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-2">
                      {partner.website && (
                        <a
                          href={partner.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-primary hover:underline text-sm font-medium"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          {partner.websiteLabel}
                        </a>
                      )}
                      {partner.phone && (
                        <span className="inline-flex items-center gap-1.5 text-muted-foreground text-sm">
                          <Phone className="w-3.5 h-3.5" />
                          {partner.phone}
                        </span>
                      )}
                    </div>
                  )}
                </div>
              );

              return (
                <motion.div
                  key={partner.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                >
                  <Card className="border-border hover:border-primary/40 transition-colors shadow-sm overflow-hidden">
                    <CardContent className="p-8 md:p-10">
                      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
                        {partner.logoLeft ? (
                          <>
                            {logoBlock}
                            {textBlock}
                          </>
                        ) : (
                          <>
                            <div className="md:col-span-8 order-2 md:order-1">
                              {textBlock}
                            </div>
                            <div className="md:col-span-4 order-1 md:order-2 flex items-center justify-center py-4">
                              <img
                                src={partner.logo}
                                alt={partner.logoAlt}
                                className="w-full max-w-[200px] h-auto object-contain"
                              />
                            </div>
                          </>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
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
              Grow With Our Network
            </h2>
            <p className="text-background/60 text-base max-w-xl mb-8">
              Join AECCI and gain access to a trusted global ecosystem of
              strategic partners, trade experts, and business opportunities.
            </p>
            <Link
              to="/about/about-chamber"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-full font-semibold text-sm hover:bg-primary/90 transition-colors"
            >
              About AECCI <ArrowRight className="size-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
