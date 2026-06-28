import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { partners } from "./data";

export function PartnershipsIndex() {
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
              to="/events/international-collaboration"
              className="inline-flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-widest mb-4 hover:underline"
            >
              <ArrowLeft className="size-3" /> International Collaboration
            </Link>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-background mb-6 leading-tight">
              Our <span className="text-primary">Collaboration Partners</span>
            </h1>
            <p className="text-background/70 text-base md:text-lg leading-relaxed">
              AECCI's global network of trusted legal, trade, and business partners spans {partners.length}+ countries, powering the Global Deal Room with on-the-ground expertise in every region.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-20 md:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <span className="text-xs font-bold text-primary uppercase tracking-widest mb-3 block">Global Network</span>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
              Partner Firms by Country
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-sm md:text-base leading-relaxed">
              Click any country to view the partner firm details, website, and scope of collaboration.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {partners.map((partner, idx) => (
              <motion.div
                key={partner.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: Math.min(idx * 0.04, 0.8), duration: 0.4 }}
              >
                <Link to={`/events/international-collaboration/partnerships/${partner.slug}`}>
                  <Card className="h-full border-border hover:border-primary/40 transition-colors group cursor-pointer">
                    <CardContent className="p-5 flex flex-col gap-3">
                      <div className="flex items-center justify-between">
                        <img src={partner.flag} alt={partner.country} className="w-10 h-7 object-cover rounded shadow-sm" />
                        <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                      </div>
                      <h3 className="text-sm font-bold text-foreground leading-snug">{partner.country}</h3>
                      {partner.firm ? (
                        <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">{partner.firm}</p>
                      ) : (
                        <Badge variant="outline" className="text-[10px] border-border w-fit">
                          Partner TBA
                        </Badge>
                      )}
                    </CardContent>
                  </Card>
                </Link>
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
              Expand Your Global Reach
            </h2>
            <p className="text-background/60 text-base max-w-xl mb-8">
              Connect with AECCI's partner network to access legal advisory, trade facilitation, and business matchmaking services across 50+ countries.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="mailto:info@aecci.org.in"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-full font-semibold text-sm hover:bg-primary/90 transition-colors"
              >
                Become a Collaborator <ArrowRight className="size-4" />
              </a>
              <Link
                to="/events/international-collaboration"
                className="inline-flex items-center gap-2 bg-background/10 border border-background/20 text-background px-8 py-3 rounded-full font-semibold text-sm hover:bg-background/20 transition-colors"
              >
                <ArrowLeft className="size-4" /> Back to International Collaboration
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default PartnershipsIndex;
