import { motion } from "framer-motion";
import { ExternalLink, Phone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
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
          Fresh Vegetable, Spices, Pulses, Grain, Oilseeds, Cattle Feed, Textile &amp; all kinds of Foods
        </strong>
        , EGC are exporting worldwide to the leading food multinationals &amp; fast food chains in the USA, Europe,
        Middle East, Canada &amp; Asia. With them, you have the option of having a product of your choice with tailor
        made specification or to pick from their standard product list. The dedicated team gives you the comfort of a
        wide product range and consistent quality at the best prices.
      </>,
      <>
        What sets EGC apart is their reputation as a clean and trustworthy exporter, which has drawn many importers
        from all over the world. AECCI is proud of the long and trusting relationship that is established with our
        customers.
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
        Econs&apos; is a franchise consultant and marketing facilitator Company of Excellency Legalization Services
        Private Limited (ELSPL), based in Navi Mumbai (Maharashtra). It was founded in 1998 by Mr. Zaheer Bukhari
        (CEO).
      </>,
      <>
        <strong className="text-foreground">
          Econs&apos; is also specialized in Travel Agency, Export Consultancy, Holiday Packages and Commercial Service
          Activities.
        </strong>{" "}
        The brand is known for providing the services to establish a smooth, hassle free trustworthy relationship
        between business partners.
      </>,
      <>
        Through their expert services, not only do they help franchisors expand their business but also avail the
        franchisees with best opportunity to widen their work areas.
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
        <strong className="text-foreground">Excellency Legalisation Services Pvt. Ltd. (ELSPL)</strong> is India&apos;s
        leading <strong className="text-foreground">Apostille and Legalisation</strong> (consular) agent, operating
        from offices at Mumbai and New Delhi. Established in 1998, providing primarily a certification and legalisation
        service to exporters. We provide our clients with a complete export documentation service for both commercial
        and legal documents, including the completion of Arab certification, GSP and Certificates of Origin for
        manufacturers and freight forwarders.
      </>,
      <>
        Excellency works closely with Chambers of Commerce, Consulates, Embassies and other Government departments,
        providing expertise in obtaining the necessary certification and legalisation for our clients on an urgent basis.
      </>,
    ],
  },
];

export default function StrategicPartners() {
  return (
    <div className="py-24 max-w-7xl mx-auto px-6 md:px-12 text-left">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <span className="text-xs font-bold text-primary uppercase tracking-widest mb-3 block">
          Global Network
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
          Strategic Partners
        </h1>
        <Separator className="mb-16 bg-border" />

        <div className="flex flex-col gap-16">
          {partners.map((partner) => {
            const logoBlock = (
              <div className="md:col-span-4 flex items-start justify-center pt-2">
                <img
                  src={partner.logo}
                  alt={partner.logoAlt}
                  className="w-full max-w-[220px] h-auto object-contain"
                />
              </div>
            );
            const textBlock = (
              <div className="md:col-span-8 flex flex-col justify-start gap-5 text-sm text-muted-foreground leading-relaxed">
                {partner.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
                {(partner.website || partner.phone) && (
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-10 pt-2">
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
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Card className="border-border shadow-sm overflow-hidden">
                  <CardContent className="p-8 md:p-10">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
                      {partner.logoLeft ? (
                        <>
                          {logoBlock}
                          {textBlock}
                        </>
                      ) : (
                        <>
                          <div className="md:col-span-8 order-2 md:order-1">{textBlock}</div>
                          <div className="md:col-span-4 order-1 md:order-2 flex items-start justify-center pt-2">
                            <img
                              src={partner.logo}
                              alt={partner.logoAlt}
                              className="w-full max-w-[220px] h-auto object-contain"
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
      </motion.div>
    </div>
  );
}
