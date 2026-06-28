import { motion } from "framer-motion";
import egcLogo from "../../assets/images/partnerimg/egc.png";
import econsLogo from "../../assets/images/partnerimg/econs.png";
import elsplLogo from "../../assets/images/partnerimg/elspl.png";

export default function StrategicPartners() {
  return (
    <div className="py-24 max-w-4xl mx-auto px-6 md:px-12 text-left">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <span className="text-xs font-bold text-primary uppercase tracking-widest mb-3 block">
          Global Network
        </span>
        <h1 className="font-heading font-black text-4xl md:text-5xl text-foreground mb-8">
          Strategic Partners
        </h1>

        <div className="mt-16 w-full max-w-6xl mx-auto">
          <div className="flex flex-col gap-16 lg:gap-24">
            
            {/* EGC India Block */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-16">
              {/* Logo (Left) */}
              <div className="md:col-span-4 border-t border-[#b8955f] pt-8 flex items-start justify-center">
                <img src={egcLogo} alt="EGC India Logo" className="w-full max-w-[250px] h-auto object-contain" />
              </div>
              {/* Text (Right) */}
              <div className="md:col-span-8 border-t border-[#b8955f] pt-8 flex flex-col justify-start space-y-6 font-body text-sm text-muted-foreground leading-relaxed">
                <p>
                  Exporting a full range of products including <span className="font-bold text-slate-700">Fresh Vegetable,
                  Spices, Pulses, Grain, Oilseeds, Cattle Feed, Textile &amp; all kinds
                  of Foods</span>, EGC are exporting worldwide to the leading food
                  multinationals &amp; fast food chains in the USA, Europe, Middle East,
                  Canada &amp; Asia. With them, you have the option of having a product
                  of your choice with tailor made specification or to pick from
                  their standard product list. The dedicated team gives you the
                  comfort of a wide product range and consistent quality at the best
                  prices.
                </p>
                <p>
                  What sets EGC apart is their reputation as a clean and trustworthy
                  exporter, which has drawn many importers from all over the world.
                  AECCI is proud of the long and trusting relationship that is
                  established with our customers.
                </p>
                <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-16 mt-4">
                  <p>
                    <span className="font-bold text-slate-700">Website: </span>
                    <a
                      href="http://www.egcindia.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-red-500 hover:underline"
                    >
                      www.egcindia.in
                    </a>
                  </p>
                  <p className="mt-2 sm:mt-0">
                    <span className="font-bold text-slate-700">Phone: </span>
                    +91 720 804 6058
                  </p>
                </div>
              </div>
            </div>

            {/* Econs' Block */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-16">
              {/* Text (Left) */}
              <div className="md:col-span-8 order-2 md:order-1 border-t border-[#b8955f] pt-8 flex flex-col justify-start space-y-6 font-body text-sm text-muted-foreground leading-relaxed">
                <p>
                  Econs&apos; is a franchise consultant and marketing facilitator Company
                  of Excellency Legalization Services Private Limited (ELSPL), based
                  in Navi Mumbai (Maharashtra). It was founded in 1998 by Mr. Zaheer
                  Bukhari (CEO).
                </p>
                <p>
                  <span className="font-bold text-slate-700">Econs&apos; is also specialized in Travel Agency, Export Consultancy,
                  Holiday Packages and Commercial Service Activities.</span> The brand is
                  known for providing the services to establish a smooth, Hassel
                  free trustworthy relationship between business partners.
                </p>
                <p>
                  Through their expert services, not only do they help franchisors
                  expand their business but also avail the franchisees with best
                  opportunity to widen their work areas.
                </p>
              </div>
              {/* Logo (Right) */}
              <div className="md:col-span-4 order-1 md:order-2 border-t border-[#b8955f] pt-8 flex items-start justify-center">
                <img src={econsLogo} alt="Econs' Logo" className="w-full max-w-[250px] h-auto object-contain" />
              </div>
            </div>

            {/* ELSPL Block */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-16">
              {/* Logo (Left) */}
              <div className="md:col-span-4 border-t border-[#b8955f] pt-8 flex items-start justify-center">
                <img src={elsplLogo} alt="ELSPL Logo" className="w-full max-w-[250px] h-auto object-contain" />
              </div>
              {/* Text (Right) */}
              <div className="md:col-span-8 border-t border-[#b8955f] pt-8 flex flex-col justify-start space-y-6 font-body text-sm text-muted-foreground leading-relaxed">
                <p>
                  <span className="font-bold text-slate-700">Excellency Legalisation Services Pvt. Ltd. (ELSPL)</span> is India&apos;s
                  leading <span className="font-bold text-slate-700">Apostille and Legalisation</span> (consular) agent, operating
                  from offices at Mumbai and New Delhi. Established in 1998,
                  providing primarily a certification and legalisation service to
                  exporters. We provide our clients with a complete export
                  documentation service for both commercial and legal documents,
                  including the completion of Arab certification, GSP and
                  Certificates of Origin for manufacturers and freight forwarders.
                </p>
                <p>
                  Excellency works closely with Chambers of Commerce, Consulates,
                  Embassies and other Government departments, providing expertise in
                  obtaining the necessary certification and legalisation for our
                  clients on an urgent basis.
                </p>
              </div>
            </div>

          </div>
        </div>
      </motion.div>
    </div>
  );
}
