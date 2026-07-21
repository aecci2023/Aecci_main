import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Award, BookOpen, FileText, Gift, CreditCard } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";

// Import local assets for membership options
import corporatePlus from "@/assets/images/membership/corportateplus.png";
import corporate from "@/assets/images/membership/corporate.png";
import nonprofit from "@/assets/images/membership/nonprofit.png";
import startup from "@/assets/images/membership/startup.png";
import overseas from "@/assets/images/membership/overseas.png";
import smallBusiness from "@/assets/images/membership/smallbusiness.png";

const plans = [
  {
    title: "Patron Membership",
    desc: "Elite tier membership offering exclusive advisory services, priority access to high-level delegations, and bespoke networking for global trade expansion.",
    img: corporatePlus,
    href: "/services/membership/patron-membership",
    btnText: "Patron Membership",
    icon: Award,
  },
  {
    title: "Membership & Its Benefits",
    desc: "Join our active trade chamber ecosystem to unlock market access resources, business matchmaking, and compliance consultation services.",
    img: corporate,
    href: "/services/membership/benefits",
    btnText: "Explore Benefits",
    icon: ShieldCheck,
  },
  {
    title: "Guidelines and Forms",
    desc: "Access essential documentation templates, registration guidelines, and fee forms needed to submit your official membership applications.",
    img: nonprofit,
    href: "/services/membership/fee-forms-guidelines",
    btnText: "Download Forms",
    icon: FileText,
  },
  {
    title: "Enrollment Offers",
    desc: "Special enrollment programs and customized registration schemes designed specifically for Clearing House Agents and logistics partners.",
    img: startup,
    href: "/services/membership/enrollment-offers",
    btnText: "View Offers",
    icon: Gift,
  },
  {
    title: "Visa Recommendation",
    desc: "Official visa recommendation letters issued by AECCI to support member company officials traveling abroad for international trade exhibitions.",
    img: overseas,
    href: "/services/membership/visa-recommendation",
    btnText: "Request Letter",
    icon: BookOpen,
  },
  {
    title: "Renew Membership",
    desc: "Process your membership renewal online to ensure uninterrupted access to chamber certifications, advisory wings, and global directories.",
    img: smallBusiness,
    href: "/services/membership/renew",
    btnText: "Renew Online",
    icon: CreditCard,
  },
];

export default function Membership() {
  return (
    <div className="w-full bg-slate-50 text-slate-800">
      {/* ========== HERO SECTION ========== */}
      <section className="relative w-full py-6 md:py-8 bg-[#0a1628] overflow-hidden flex items-center border-b border-gray-800">
        {/* Glowing backdrop elements */}
        <div className="absolute right-0 top-0 w-1/2 h-full bg-primary/20 blur-[100px] pointer-events-none rounded-full translate-x-1/3 -translate-y-1/4 z-0" />
        <div className="absolute left-0 bottom-0 w-1/3 h-1/2 bg-primary/10 blur-[120px] pointer-events-none rounded-full -translate-x-1/4 translate-y-1/4 z-0" />

        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10 w-full">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
            {/* Left Column - Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="md:col-span-7 relative z-20 pointer-events-auto max-w-xl lg:max-w-2xl text-left"
            >
              <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-1.5 rounded-full mb-4 border border-white/10">
                <ShieldCheck className="w-3.5 h-3.5 text-primary" />
                <span className="text-[10px] font-bold text-primary uppercase tracking-widest">
                  Join the Chamber
                </span>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight text-white uppercase tracking-wide">
                Membership
              </h1>

              <p className="text-white/70 text-sm md:text-base leading-relaxed">
                Unlock exclusive trade networks, export documentation support, and regulatory advocacy to position your enterprise for international growth.Membership with AECCI allows you to enjoy an exclusive and wide range of support and benefits for getting ahead in business — raising awareness of your brand, creating new business opportunities, building your network, and successfully reaching international markets.
              </p>
            </motion.div>

            {/* Right Column - Premium Shield Art */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="md:col-span-5 relative z-10 justify-center hidden md:flex"
            >
              <div className="relative w-64 h-64 rounded-full bg-slate-900/50 flex items-center justify-center p-8 border border-white/10 backdrop-blur-sm shadow-2xl">
                <div className="absolute inset-0 bg-primary/5 rounded-full blur-2xl animate-pulse" />
                <ShieldCheck className="w-28 h-28 text-primary animate-pulse" strokeWidth={1} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========== MEMBERSHIP OPTIONS GRID ========== */}
      <section className="py-6 md:py-10 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-10">
            <span className="text-xs font-bold text-primary uppercase tracking-widest mb-2 block">
              Explore
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              Membership Options
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto text-xs md:text-sm leading-relaxed">
              Find the right membership program or service guideline tailored to your business scale.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {plans.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05, duration: 0.4 }}
                  whileHover={{ y: -6, scale: 1.015 }}
                  className="h-full"
                >
                  <Card className="h-full overflow-hidden border border-slate-150 hover:border-primary/30 hover:shadow-lg transition-all duration-300 bg-white group flex flex-col cursor-pointer">
                    <div className="h-44 overflow-hidden relative">
                      <img
                        src={item.img}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/40 to-transparent opacity-60" />
                      <div className="absolute top-4 left-4 p-2 bg-white rounded-xl shadow-md text-primary shrink-0 transition-transform duration-300 group-hover:scale-105">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>
                    <CardContent className="p-5 flex flex-col flex-grow gap-2.5 text-left">
                      <h3 className="text-base font-bold text-gray-950 group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs text-slate-500 leading-relaxed flex-grow">
                        {item.desc}
                      </p>
                      <Link
                        to={item.href}
                        className="inline-flex items-center gap-1.5 text-[10px] font-bold text-primary hover:text-primary/80 uppercase tracking-widest mt-2 group/btn"
                      >
                        <span>{item.btnText}</span>
                        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                      </Link>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========== BOTTOM CTA ========== */}
      <section className="relative py-6 md:py-10 bg-slate-100 overflow-hidden border-t border-slate-200/60">
        <div className="absolute inset-0 bg-primary/5 blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
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
              className="w-28 h-auto object-contain mb-5"
            />
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 uppercase tracking-wide">
              Come Grow With Us!
            </h2>
            <p className="text-gray-500 text-xs max-w-xl mb-6">
              Join thousands of businesses growing with AECCI's exclusive chamber network and international market access.
            </p>
            <Link
              to="/about/about-chamber"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-2.5 rounded-full font-semibold text-xs hover:bg-primary/90 transition-all duration-300 shadow-lg shadow-primary/20 hover:scale-105"
            >
              About Us <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
