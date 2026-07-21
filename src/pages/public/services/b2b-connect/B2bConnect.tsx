import { motion } from "framer-motion";
import { ArrowRight } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

export default function B2bConnect() {
  const cards = [
    {
      title: "Virtual B2B Forum",
      desc: "Empowering businesses with expert consultations, market studies, and trusted resources to prosper their international trade. Meet our expert collaborators from 35+ countries through one-to-one video conferences and get the advice through valuable expertise to simplify your business expansion plans.",
      href: "/b2b-about",
      btnText: "Virtual B2B Forum",
    },
    {
      title: "Consultations",
      desc: "We provides Consultancy Services and engagement plans for Asian companies operating in India and Indian companies operating in other Asian countries.",
      img: "https://www.aecci.org.in/wp-content/uploads/2020/11/consulting.jpg",
      href: "/services/b2b-connect/consultations",
      btnText: "CONSULTATIONS",
    },
    {
      title: "Business Matches",
      desc: "Supports in finding the right and potential business partners within Asian community and make them meet one-to-one for expansion of business.",
      img: "https://www.aecci.org.in/wp-content/uploads/2020/12/matchmaking.jpg",
      href: "/services/b2b-connect/business-matches",
      btnText: "BUSINESS MATCHES",
    },
    {
      title: "Market Studies",
      desc: "Our experts expedite your market entry with deep and detailed market research within target country by providing the analysis, reports and recommendations according to your business needs.",
      img: "https://www.aecci.org.in/wp-content/uploads/2020/11/market-studies.jpg",
      href: "/services/b2b-connect/market-studies",
      btnText: "MARKET STUDIES",
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
          WHY USE AECCI CONSULTANCY SERVICE?
        </span>
        <h1 className="font-heading font-black text-4xl md:text-5xl text-foreground mb-6">
          B2B Connect
        </h1>

        <p className="font-body text-base text-muted-foreground leading-relaxed max-w-3xl mb-12">
          Keep identifying the extensive networks of business opportunities and
          spreading a deep understanding of the challenges and rewards of
          entrepreneurship.
        </p>

        <div className="rounded-2xl overflow-hidden shadow-2xl mb-16 h-64 md:h-80 relative">
          <img
            src="https://www.aecci.org.in/wp-content/uploads/2024/07/network-graphic-overlay-banner-background.jpg"
            alt="B2B Banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center p-8 md:p-12">
            <h2 className="text-white font-heading font-black text-3xl md:text-4xl">
              Connect. Collaborate. Conquer.
            </h2>
          </div>
        </div>

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
              {item.img && (
                <div className="h-48 overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              )}
              <div
                className={`p-6 flex flex-col flex-1 text-left ${!item.img ? "justify-center py-12" : ""}`}
              >
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
