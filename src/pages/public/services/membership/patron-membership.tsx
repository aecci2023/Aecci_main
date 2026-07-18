import { motion } from "framer-motion";
import { Award, Check, ArrowRight, Star, Shield, Globe, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const patronBenefits = [
  { icon: Star, title: "Premium Visibility", desc: "Get featured prominently across AECCI platforms and events." },
  { icon: Globe, title: "Global Networking", desc: "Exclusive access to international business delegations and forums." },
  { icon: Shield, title: "Brand Endorsement", desc: "Use AECCI Patron Membership branding on your communication." },
  { icon: Users, title: "Priority Access", desc: "First priority for deal rooms, sessions, and strategic meetings." },
  { icon: Award, title: "Recognition Programs", desc: "Annual awards and recognition at AECCI national events." },
  { icon: Check, title: "Dedicated Support", desc: "A dedicated relationship manager for your business needs." },
];

export default function PatronMembership() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#040D1A] to-[#0d253c] text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(245,179,58,0.15),transparent_60%)]" />
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block text-[11px] font-extrabold tracking-widest text-[#f5b33a] uppercase mb-4">
              AECCI Patron Membership
            </span>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-5">
              The Pinnacle of <span className="text-[#f5b33a]">Business Prestige</span>
            </h1>
            <p className="text-[#c8d5e2] text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-8">
              Patron Membership is AECCI's highest honour — exclusively for organisations and industry leaders who wish
              to contribute to India's global trade ecosystem while gaining unmatched visibility and influence.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button asChild className="bg-gradient-to-r from-[#f5b33a] to-[#e8a929] text-[#0d1a2c] font-bold px-8 py-3 rounded-full text-sm shadow-lg shadow-amber-500/30 hover:opacity-90">
                <Link to="/interest-form">
                  Apply for Patron Membership <ArrowRight className="inline ml-2 w-4 h-4" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-[#0d1a2c]">Patron Member Benefits</h2>
            <p className="text-gray-500 text-sm mt-2">Exclusive privileges for India's leading trade champions</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {patronBenefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  className="p-6 rounded-2xl border border-amber-100 bg-gradient-to-br from-amber-50/40 to-white hover:shadow-lg transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -4 }}
                >
                  <div className="w-11 h-11 rounded-full bg-amber-100 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-amber-600" />
                  </div>
                  <h3 className="font-bold text-[#0d1a2c] text-base mb-2">{benefit.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{benefit.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-[#e8a929] to-[#ffc857] py-14">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-[#0d1a2c] mb-4">
              Ready to Become a Patron Member?
            </h2>
            <p className="text-[#3d2d0a] text-sm mb-7 max-w-xl mx-auto">
              Join a distinguished group of organisations shaping India's global trade future. Contact us to learn more about eligibility and the application process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button asChild className="bg-[#0d1a2c] text-white font-bold px-8 py-3 rounded-full hover:bg-[#040D1A] shadow-lg">
                  <Link to="/interest-form">Apply Now</Link>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button asChild variant="outline" className="border-[#0d1a2c] text-[#0d1a2c] font-bold px-8 py-3 rounded-full hover:bg-[#0d1a2c]/10">
                  <Link to="/services/membership">View All Memberships</Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
