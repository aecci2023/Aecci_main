import { motion } from "framer-motion";
import { ArrowRight } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const plans = [
  {
    title: "Patron Membership",
    desc: "Patron Membership at AECCI offers elite benefits like priority event access, strategic insights, and bespoke services for global business growth.",
    img: "https://www.aecci.org.in/wp-content/uploads/2024/07/services_claims-consulting-1400x788-1-768x432.jpg",
    href: "/patron-members",
    btnText: "Patron Membership",
  },
  {
    title: "Membership & Its Benefits",
    desc: "Join AECCI and unlock a world of opportunities for your business with our exclusive membership benefits.",
    img: "https://www.aecci.org.in/wp-content/uploads/2020/11/membes-benifit.jpg",
    href: "/membership-and-its-benefits",
    btnText: "Membership & Its Benefits",
  },
  {
    title: "Guidelines and Form",
    desc: "AECCI provides different types of memberships that provide access to chamber services and enable you to connect directly with the AECCI management.",
    img: "https://www.aecci.org.in/wp-content/uploads/2020/11/forms.jpg",
    href: "/services/membership/guidelines-and-form",
    btnText: "Guidelines and Form",
  },
  {
    title: "Enrollment Offers",
    desc: "View special offers for Clearing House Agents. Drop in your enrollment application online and begin working with AECCI.",
    img: "https://www.aecci.org.in/wp-content/uploads/2020/11/enroll.jpg",
    href: "/services/membership/enrollment-offers",
    btnText: "Enrollment Offers",
  },
  {
    title: "Visa Recommendation",
    desc: "AECCI members can avail Visa Recommendation letters to support international travel for trade, business meetings, and exhibitions abroad.",
    img: "https://www.aecci.org.in/wp-content/uploads/2020/11/visa-recommendation.jpg",
    href: "/services/membership/visa-recommendation",
    btnText: "Visa Recommendation",
  },
  {
    title: "Renew Membership",
    desc: "Keep your AECCI membership active and continue enjoying uninterrupted access to chamber services, trade networks, and exclusive member benefits.",
    img: "https://www.aecci.org.in/wp-content/uploads/2020/11/membes-benifit.jpg",
    href: "/services/membership/renew",
    btnText: "Renew Membership",
  },
];

export default function Membership() {
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
              Join The Chamber
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-background mb-6 leading-tight">
              Membership
            </h1>
            <p className="text-background/70 text-base md:text-lg leading-relaxed">
              Membership with AECCI allows you to enjoy an exclusive and wide range of support and
              benefits for getting ahead in business — raising awareness of your brand, creating new
              business opportunities, building your network, and successfully reaching international markets.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Cards */}
      <section className="py-20 md:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <span className="text-xs font-bold text-primary uppercase tracking-widest mb-3 block">Explore</span>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">Membership Options</h2>
            <Separator className="w-16 mx-auto bg-primary" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {plans.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.4 }}
              >
                <Card className="h-full overflow-hidden border-border hover:border-primary/40 transition-colors group flex flex-col">
                  <div className="h-48 overflow-hidden">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <CardContent className="p-6 flex flex-col flex-1 gap-3">
                    <h3 className="text-lg font-bold text-foreground">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed flex-1">{item.desc}</p>
                    <Link
                      to={item.href}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:text-primary/80 uppercase tracking-widest mt-2 group/btn"
                    >
                      {item.btnText}
                      <ArrowRight className="size-3.5 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
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
              Come Grow With Us!
            </h2>
            <p className="text-background/60 text-base md:text-lg max-w-xl mb-8">
              Join thousands of businesses growing with AECCI's exclusive chamber network and international market access.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors"
            >
              About Us <ArrowRight className="size-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
