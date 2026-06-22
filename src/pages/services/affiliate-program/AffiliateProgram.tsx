import { motion } from "framer-motion";
import { ArrowRight } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

export default function AffiliateProgram() {
  const cards = [
    {
      title: "Join Our Affiliate Network",
      desc: "Explore a realm of opportunities and unleash your potential with our adaptable selection of Affiliate professional options designed to align with your distinct needs and objectives.",
      img: "https://www.aecci.org.in/wp-content/uploads/2023/12/Website-Slider-15-1-768x356.jpg",
      href: "/join-our-affiliate-network",
      btnText: "Click Here",
    },
    {
      title: "Meet Our Wing Experts",
      desc: "AECCI Wings: Your Trusted Team of Certified Experts, Catering to Your Diverse Needs Worldwide and Locally",
      img: "https://www.aecci.org.in/wp-content/uploads/2023/12/Website-Slider-14-1.jpg",
      href: "/meet-our-wings-experts",
      btnText: "Click Here",
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
          Grow Together
        </span>
        <h1 className="font-heading font-black text-4xl md:text-5xl text-foreground mb-6">
          AECCI Affiliate Program
        </h1>

        <p className="font-body text-base text-muted-foreground leading-relaxed max-w-3xl mb-16">
          Chamber's services are designed to help the business community were
          through our various initiatives and by the associated expert
          professional counseling, entrepreneurial and documentation services
          are given to members.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cards.map((item, idx) => (
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
