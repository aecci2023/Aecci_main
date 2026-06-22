import { motion } from "framer-motion";
import { ArrowRight } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

export default function Membership() {
  const plans = [
    {
      title: "Patron Membership",
      desc: "Patron Membership at AECCI offers elite benefits like priority event access, strategic insights, and bespoke services for global business growth.",
      img: "https://www.aecci.org.in/wp-content/uploads/2024/07/services_claims-consulting-1400x788-1-768x432.jpg",
      href: "/patron-members",
      btnText: "PATRON MEMBERSHIP",
    },
    {
      title: "Membership & Its Benefits",
      desc: "Join AECCI and unlock a world of opportunities for your business with our exclusive membership benefits.",
      img: "https://www.aecci.org.in/wp-content/uploads/2020/11/membes-benifit.jpg",
      href: "/membership-and-its-benefits",
      btnText: "MEMBERSHIP & ITS BENEFIT",
    },
    {
      title: "Guidelines and Form",
      desc: "AECCI provides different type of memberships that provides access to chamber services, and enables you to connect directly with the AECCI management.",
      img: "https://www.aecci.org.in/wp-content/uploads/2020/11/forms.jpg",
      href: "/services/membership/guidelines-and-form",
      btnText: "GUIDELINE AND FORM",
    },
    {
      title: "Enrollment Offers",
      desc: "View Special Offers for Clearing House Agents. drop in enrollment application online and begin working with AECCI.",
      img: "https://www.aecci.org.in/wp-content/uploads/2020/11/enroll.jpg",
      href: "/services/membership/enrollment-offers",
      btnText: "ENROLLMENT OFFERS",
    },
  ];

  return (
    <div className="py-24 max-w-[1280px] mx-auto px-6 md:px-12 text-left">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <span className="text-xs font-bold text-primary uppercase tracking-widest mb-3 block">
          Join The Chamber
        </span>
        <h1 className="font-heading font-black text-4xl md:text-5xl text-foreground mb-6">
          Membership
        </h1>

        <p className="font-body text-base text-muted-foreground leading-relaxed max-w-3xl mb-16">
          Membership with AECCI allows you to enjoy an exclusive and wide range
          of support and benefits for getting ahead in business like raising
          awareness of your brand, creating new business opportunities and
          building your network and making you successfully reach international
          markets.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {plans.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.4 }}
              className="bg-card border border-border rounded-2xl overflow-hidden shadow-lg flex flex-col group hover:border-primary/40 transition-colors"
            >
              <div className="h-56 overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-6 flex flex-col flex-1 text-left">
                <h3 className="font-heading font-black text-xl text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-6 flex-1">
                  {item.desc}
                </p>
                <Link
                  to={item.href}
                  className="inline-flex items-center text-xs font-bold text-primary hover:text-primary/80 uppercase tracking-widest group/btn mt-auto"
                >
                  {item.btnText}{" "}
                  <ArrowRight className="ml-2 size-4 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
