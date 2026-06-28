import { motion } from "framer-motion";
import { Download, CheckCircle2, Building2, Rocket, Building, Crown, Globe2, HeartHandshake } from "lucide-react";
import { Link } from "react-router-dom";

import membershipFormPdf from "@/assets/images/membership/MEMBERSHIP-FORM-.pdf";

const guidelinesData = [
  {
    id: "small-business",
    title: "SMALL BUSINESS",
    icon: Building2,
    color: "bg-blue-50 text-blue-600",
    investment: { joining: "INR 2000", annual: "INR 6000" },
    forms: [
      { name: "Membership Form", link: membershipFormPdf },
      { name: "Cover Letter", link: "#" },
      { name: "Indemnity Bond", link: "#" }
    ],
    guidelines: {
      category: "Proprietorship, Partnership, Professional, LLP, LLC, or other SME's.",
      details: [
        "Membership Form fill in/ sign/ stamp.",
        "2 Passport size photo",
        "Request letter on Letter Head",
        "Indemnity bond",
        "Self-attested copies of GST Certificate/ PAN Copy.",
        "IEC License Copy",
        "Certificate of Registration"
      ]
    }
  },
  {
    id: "start-up",
    title: "START-UP",
    icon: Rocket,
    color: "bg-orange-50 text-orange-600",
    investment: { joining: "INR 2000", annual: "INR 8000" },
    forms: [
      { name: "Membership Form", link: membershipFormPdf },
      { name: "Cover Letter", link: "#" },
      { name: "Indemnity Bond", link: "#" }
    ],
    guidelines: {
      category: "IT sector, Real estate sector, Healthcare tech, Delivery services, Artificial Intelligence, E-commerce, B2B Software, Supply chain management & Logistics etc. WHICH IS LESS THAN A YEAR OLD.",
      details: [
        "Membership Form fill in/ sign/ stamp.",
        "2 Passport size photo",
        "Request letter on Letter Head",
        "Indemnity bond",
        "Self-attested copies of GST Certificate/ PAN Copy.",
        "Certificate of Incorporation."
      ]
    }
  },
  {
    id: "corporate",
    title: "CORPORATE",
    icon: Building,
    color: "bg-indigo-50 text-indigo-600",
    investment: { joining: "INR 2000", annual: "INR 10000" },
    forms: [
      { name: "Membership Form", link: membershipFormPdf },
      { name: "Cover Letter", link: "#" },
      { name: "Indemnity Bond", link: "#" }
    ],
    guidelines: {
      category: "Private Limited companies",
      details: [
        "Membership Form fill in/ sign/ stamp.",
        "2 Passport size photo",
        "Request letter on Letter Head",
        "Indemnity bond",
        "Self-attested copies of GST Certificate/ PAN Copy.",
        "IEC License Copy",
        "Certificate of Registration.",
        "Copy of AOA, MOA",
        "Certificate of incorporation"
      ]
    }
  },
  {
    id: "corporate-plus",
    title: "CORPORATE +",
    icon: Crown,
    color: "bg-purple-50 text-purple-600",
    investment: { joining: "INR 2000", annual: "INR 20000" },
    forms: [
      { name: "Membership Form", link: membershipFormPdf },
      { name: "Cover Letter", link: "#" },
      { name: "Indemnity Bond", link: "#" }
    ],
    guidelines: {
      category: "Banks, Limited companies, or any Public Listed Companies.",
      details: [
        "Membership Form fill in/ sign/ stamp.",
        "2 Passport size photo",
        "Request letter on Letter Head",
        "Indemnity bond",
        "Self-attested copies of GST Certificate/ PAN Copy.",
        "IEC License Copy",
        "Certificate of Registration",
        "Copy of AOA, MOA",
        "Certificate of incorporation"
      ]
    }
  },
  {
    id: "overseas",
    title: "OVERSEAS",
    icon: Globe2,
    color: "bg-emerald-50 text-emerald-600",
    investment: { joining: "$ 50", annual: "$ 200" },
    note: "*Fee will be calculated equivalent to exchange rate INR",
    forms: [
      { name: "Membership Form", link: membershipFormPdf },
      { name: "Cover Letter", link: "#" },
      { name: "Indemnity Bond", link: "#" }
    ],
    guidelines: {
      category: "Companies who are based outside India.",
      details: [
        "Membership Form fill in/ sign/ stamp.",
        "2 Passport size photo",
        "Request letter on Letter Head",
        "Indemnity bond",
        "Self-attested copies of GST Certificate/ PAN Copy.",
        "IEC License Copy",
        "Certificate of Registration",
        "Passport copies of Authorized Signatories Must"
      ]
    }
  },
  {
    id: "non-profit",
    title: "NON-PROFIT ORGANIZATION",
    icon: HeartHandshake,
    color: "bg-rose-50 text-rose-600",
    investment: { joining: "INR 2000/-", annual: "INR 5500/-" },
    forms: [
      { name: "Membership Form", link: membershipFormPdf },
      { name: "Cover letter", link: "#" },
      { name: "Indemnity Bond", link: "#" }
    ],
    guidelines: {
      category: "Trust, Institutions, Foundations, Or Centre's",
      details: [
        "Membership Form fill in/ sign/ stamp.",
        "2 Passport size photo",
        "Request letter on Letter Head",
        "Indemnity bond",
        "Certificate of Registration/Non-profit making Proof copies",
        "Certificate of Incorporation."
      ]
    }
  }
];

export default function FeeFormsGuidelines() {
  return (
    <div className="w-full bg-background font-body text-foreground">
      {/* Hero Section */}
      <section className="relative w-full py-16 md:py-20 bg-slate-900 text-white overflow-hidden flex items-center">
        <div className="absolute right-0 top-0 w-1/2 h-full bg-primary/20 blur-[100px] pointer-events-none rounded-full transform translate-x-1/3 -translate-y-1/4 z-0"></div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative z-20 pointer-events-auto max-w-3xl mx-auto text-center"
          >
            <span className="text-xs font-bold text-primary uppercase tracking-widest mb-3 block">Membership</span>
            <h1 className="font-heading font-black text-3xl md:text-4xl lg:text-5xl mb-4 leading-[1.1]">
              Fees, Forms & <span className="text-primary">Guidelines</span>
            </h1>
            <p className="text-slate-300 text-lg md:text-xl leading-relaxed mb-4 font-light italic">
              "Follow the below-given guidelines & fulfill the requirements to enjoy day-to-day chamber services & take the pride of being a member and enables you to connect directly with the AECCI management."
            </p>
          </motion.div>
        </div>
      </section>

      {/* Cards Grid Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {guidelinesData.map((item, idx) => {
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col"
                >
                  {/* Card Header */}
                  <div className="p-6 border-b border-slate-100 flex items-center gap-4 bg-slate-50/50">
                    <div className={`p-3 rounded-xl ${item.color}`}>
                      <item.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 flex flex-col flex-grow gap-6">

                    {/* Investment Schedule */}
                    <div>
                      <h4 className="text-xs font-bold text-slate-400 tracking-wider uppercase mb-3">Investment Schedule</h4>
                      <div className="bg-slate-50 rounded-xl p-4 border border-slate-100 space-y-2">
                        <div className="flex justify-between items-center text-sm">
                          <span className="text-slate-600 font-medium">Joining Fee</span>
                          <span className="font-bold text-slate-900">{item.investment.joining}</span>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                          <span className="text-slate-600 font-medium">Annual Fee</span>
                          <span className="font-bold text-slate-900">{item.investment.annual}</span>
                        </div>
                        {item.note && (
                          <div className="text-xs text-slate-500 italic mt-2 pt-2 border-t border-slate-200">
                            {item.note}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Forms */}
                    <div>
                      <h4 className="text-xs font-bold text-slate-400 tracking-wider uppercase mb-3">Forms</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {item.forms.map((form, fIdx) => (
                          <a
                            key={fIdx}
                            href={form.link}
                            target={form.link !== "#" ? "_blank" : "_self"}
                            rel={form.link !== "#" ? "noopener noreferrer" : ""}
                            className="flex items-center gap-2 p-2 rounded-lg border border-slate-200 hover:border-primary hover:bg-primary/5 transition-colors group"
                          >
                            <div className="bg-slate-100 p-1.5 rounded-md group-hover:bg-primary/10 transition-colors">
                              <Download className="w-3.5 h-3.5 text-slate-600 group-hover:text-primary" />
                            </div>
                            <span className="text-xs font-medium text-slate-700 group-hover:text-primary transition-colors truncate">{form.name}</span>
                          </a>
                        ))}
                      </div>
                    </div>

                    {/* Guidelines */}
                    <div className="flex-grow">
                      <h4 className="text-xs font-bold text-slate-400 tracking-wider uppercase mb-3">Guidelines</h4>

                      <div className="space-y-4">
                        <div className="bg-slate-50/50 rounded-xl p-4 border border-slate-100">
                          <span className="block text-[10px] font-bold text-primary tracking-wider uppercase mb-1">Business Category</span>
                          <p className="text-slate-700 text-sm font-medium leading-relaxed">{item.guidelines.category}</p>
                        </div>

                        <div>
                          <span className="block text-[10px] font-bold text-slate-400 tracking-wider uppercase mb-2">Details Required</span>
                          <ul className="space-y-2">
                            {item.guidelines.details.map((detail, dIdx) => (
                              <li key={dIdx} className="flex items-start gap-2">
                                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                                <span className="text-slate-600 text-xs leading-relaxed">{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Additional Links Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mt-16">
            <Link 
              to="/services/membership/enrollment-offers"
              className="flex items-center justify-center p-4 bg-primary text-white rounded-xl shadow-md hover:bg-primary/90 transition-colors"
            >
              <span className="font-bold">ENROLLMENT OFFERS</span>
            </Link>

            <Link 
              to="/services/membership/visa-recommendation"
              className="flex items-center justify-center p-4 bg-primary text-white rounded-xl shadow-md hover:bg-primary/90 transition-colors"
            >
              <span className="font-bold">VISA RECOMMENDATION LETTER</span>
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
}
