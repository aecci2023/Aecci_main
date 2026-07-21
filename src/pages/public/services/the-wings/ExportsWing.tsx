import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FileText, Download } from "lucide-react";

export default function ExportsWing() {
  return (
    <div className="py-24 max-w-[1280px] mx-auto px-6 md:px-12 text-left">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <span className="text-xs font-bold text-primary uppercase tracking-widest mb-3 block">
          Chamber Wing
        </span>
        <h1 className="font-heading font-black text-4xl md:text-5xl text-foreground mb-8">
          Exports Wing
        </h1>

        <div className="space-y-6 font-body text-base text-muted-foreground leading-relaxed">
          <p>
            Exports wing helps understand the foreign trade procedures and
            policies to all the members and offers essential documents handy
            such as Certificates of Origin (non-Preferential) and makes good
            shipping abroad easy.
          </p>
          <p>
            The AECCI-Export Wing is dedicated to providing comprehensive and
            specialized services tailored to the complexities of international
            trade and export business. Our team of seasoned professionals offers
            expert assistance in navigating the intricate landscape of export
            regulations, with a particular emphasis on resolving international
            trade disputes.
          </p>

          <div className="flex flex-wrap gap-4 py-8">
            <Link
              to="/services/the-wings/exports-wing"
              className="bg-primary text-primary-foreground font-bold px-4 py-2 rounded-full text-xs shadow-md"
            >
              Why AECCI?
            </Link>
            <Link
              to="/services/the-wings/exports-wing-our-export-wing"
              className="bg-muted text-foreground hover:bg-muted/80 font-bold px-4 py-2 rounded-full text-xs shadow-sm"
            >
              Our Services
            </Link>
            <Link
              to="/services/the-wings/exports-wing-our-initiatives"
              className="bg-muted text-foreground hover:bg-muted/80 font-bold px-4 py-2 rounded-full text-xs shadow-sm"
            >
              Our Initiatives
            </Link>
            <Link
              to="/aecci-export-our-team"
              className="bg-muted text-foreground hover:bg-muted/80 font-bold px-4 py-2 rounded-full text-xs shadow-sm"
            >
              Our Team
            </Link>
          </div>

          <h2 className="font-heading font-black text-3xl text-foreground mb-4">
            Why AECCI
          </h2>
          <p>
            Asian Exporters' Chamber of Commerce and Industry is a non-profit
            organization that works to promote the trade and industry. Being
            authorised by Ministry of Commerce & Industry Government of India,
            we provide with the Certificate of Origin for the goods being
            produced in India and the attestation of necessary export documents.
            Additionally, we provide various services and resources to help
            businesses grow and succeed.
          </p>
          <p>
            Exporting can be a complex process, especially for the new and small
            businesses. Through our dedicated export wing, we assist the trade
            community in understanding and implementing the safe trade practices
            and help them in expanding their international reach. Being a
            sourcing agency, we do not just provide the documents assistance or
            export advise rather we create such opportunities for trade
            community to help in expansion of international business.
          </p>
          <p className="font-bold text-foreground">
            We ensure your business not only grows but flourishes in the global
            market.
          </p>

          <div className="bg-card border border-border p-6 rounded-2xl shadow-sm mt-8 space-y-4">
            <h3 className="font-heading font-bold text-lg text-foreground mb-2 flex items-center gap-2">
              <FileText className="size-5 text-primary" /> Download Forms
            </h3>
            <a
              href="https://www.aecci.org.in/wp-content/uploads/2023/03/Document-attested-by-AECCI.pdf"
              target="_blank"
              rel="noreferrer"
              className="flex items-center text-primary hover:underline text-sm font-bold"
            >
              <Download className="mr-2 size-4" /> List of documents attested by
              AECCI (PDF)
            </a>
            <a
              href="https://www.aecci.org.in/wp-content/uploads/2023/04/Wing-Application-Form.pdf"
              target="_blank"
              rel="noreferrer"
              className="flex items-center text-primary hover:underline text-sm font-bold"
            >
              <Download className="mr-2 size-4" /> Fill the Wing Application
              Form (PDF)
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
