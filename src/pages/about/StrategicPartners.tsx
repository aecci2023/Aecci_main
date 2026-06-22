import { motion } from "framer-motion"

export default function StrategicPartners() {
  return (
    <div className="py-24 max-w-4xl mx-auto px-6 md:px-12 text-left">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <span className="text-xs font-bold text-primary uppercase tracking-widest mb-3 block">Global Network</span>
        <h1 className="font-heading font-black text-4xl md:text-5xl text-foreground mb-12">Strategic Partners</h1>

        <div className="space-y-16 font-body text-base text-muted-foreground leading-relaxed">

          <div className="bg-card border border-border p-8 rounded-2xl shadow-sm">
            <h2 className="font-heading font-black text-2xl text-foreground mb-4">EGC India</h2>
            <p className="mb-4">
              Exporting a full range of products including <b>Fresh Vegetable, Spices, Pulses, Grain, Oilseeds, Cattle Feed,</b> Textile & all kinds of Foods, EGC are exporting worldwide to the leading food multinationals & fast food chains in the USA, Europe, Middle East, Canada & Asia. With them, you have the option of having a product of your choice with tailor made specification or to pick from their standard product list. The dedicated team gives you the comfort of a wide product range and consistent quality at the best prices.
            </p>
            <p className="mb-6">
              What sets EGC apart is their reputation as a clean and trustworthy exporter, which has drawn many importers from all over the world. AECCI is proud of the long and trusting relationship that is established with our customers.
            </p>
            <div className="flex flex-col text-sm border-t border-border pt-4">
              <span className="font-bold text-foreground">Website: <a href="http://www.egcindia.in" className="text-primary hover:underline font-normal ml-1">www.egcindia.in</a></span>
              <span className="font-bold text-foreground mt-1">Phone: <span className="font-normal ml-1">+91 720 804 6058</span></span>
            </div>
          </div>

          <div className="bg-card border border-border p-8 rounded-2xl shadow-sm">
            <h2 className="font-heading font-black text-2xl text-foreground mb-4">Econs’</h2>
            <p className="mb-4">
              Econs’ is a franchise consultant and marketing facilitator Company of Excellency Legalization Services Private Limited (ELSPL), based in Navi Mumbai (Maharashtra). It was founded in 1998 by Mr. Zaheer Bukhari (CEO).
            </p>
            <p className="mb-4">
              <b>Econs’ is also specialized in Travel Agency, Export Consultancy, Holiday Packages and Commercial Service Activities.</b> The brand is known for providing the services to establish a smooth, Hassel free trustworthy relationship between business partners.
            </p>
            <p>
              Through their expert services, not only do they help franchisors expand their business but also avail the franchisees with best opportunity to widen their work areas.
            </p>
          </div>

          <div className="bg-card border border-border p-8 rounded-2xl shadow-sm">
            <h2 className="font-heading font-black text-2xl text-foreground mb-4">Excellency Legalisation Services Pvt. Ltd. (ELSPL)</h2>
            <p className="mb-4">
              <b>Excellency Legalisation Services Pvt. Ltd. (ELSPL) is India's leading Apostille and Legalisation </b>(consular) agent, operating from offices at Mumbai and New Delhi. Established in 1998, providing primarily a certification and legalisation service to exporters. We provide our clients with a complete export documentation service for both commercial and legal documents, including the completion of Arab certification, GSP and Certificates of Origin for manufacturers and freight forwarders.
            </p>
            <p className="mb-6">
              Excellency works closely with Chambers of Commerce, Consulates, Embassies and other Government departments, providing expertise in obtaining the necessary certification and legalisation for our clients on an urgent basis.
            </p>
            <div className="flex flex-col text-sm border-t border-border pt-4">
              <span className="font-bold text-foreground">Website: <a href="http://www.excellencyservices.com" className="text-primary hover:underline font-normal ml-1">www.excellencyservices.com</a></span>
               <span className="font-bold text-foreground mt-1">Phone: <span className="font-normal ml-1">+91 22 6635 9431 / +91 22 6635 9432</span></span>
            </div>
          </div>

        </div>
      </motion.div>
    </div>
  )
}
