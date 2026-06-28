import { motion } from "framer-motion";
import { 
  CheckCircle2, 
  Download, 
  UserPlus, 
} from "lucide-react";

import corporateImg from "@/assets/images/membership/corporate.png";
import corporatePlusImg from "@/assets/images/membership/corportateplus.png";
import nonprofitImg from "@/assets/images/membership/nonprofit.png";
import overseasImg from "@/assets/images/membership/overseas.png";
import smallbusinessImg from "@/assets/images/membership/smallbusiness.png";
import startupImg from "@/assets/images/membership/startup.png";

import membershipBrochurePdf from "@/assets/images/membership/AECCI-Membership-Brochure.pdf";
import membershipFormPdf from "@/assets/images/membership/MEMBERSHIP-FORM-.pdf";

const membershipTiers = [
  {
    title: "Small Business (Associate)",
    image: smallbusinessImg,
    perfectFor: "Any individual or organization including proprietorship, partnership, Professional, LLP, LLC or other SME's with 15 or fewer employees, and no other offices worldwide engaged in trade, commerce or economic welfare of the community can be our Small Business (Associate) Member.",
    benefits: [
      "Certificate of Membership",
      "Certificate of Origin (Non-Preferential)",
      "Digital Platform access for e-CO service",
      "VISA Recommendation",
      "Company Listing on Chamber's digital Membership Directory",
      "Members' discounted rates for all Chamber events",
      "Regular updates for the important circular/notifications from GOI",
      "Assistance in Handling International Payment Disputes (Arbitration)*"
    ],
    note: "*Advocacy charges applicable"
  },
  {
    title: "Start-Up",
    image: startupImg,
    perfectFor: "For start-up companies such as IT sector, real estate sector, Healthcare tech, delivery services, Artificial Intelligence, e-commerce, B2B Software, Supply chain management & logistics etc. which is less than a year old and have no other offices worldwide. (Certificate of Incorporation required). Enjoy Start-up rates for 2 years, then upgrade to remain a member.",
    benefits: [
      "Certificate of Membership",
      "VISA Recommendation",
      "Company Listing on Chamber's digital Membership Directory",
      "Members' discounted rates for all Chamber events",
      "Regular updates for the important circular/notifications from GOI",
      "Focus on HR Solutions to manage Human Resource and labor law needs",
      "Assistance to deal with day to day issues in business expansion",
      "Use of Chamber Logo",
      "Networking opportunities with other Members",
      "Legal assistance in matters pertaining to Legal advocacy"
    ]
  },
  {
    title: "Corporate",
    image: corporateImg,
    perfectFor: "AECCI creates an environment for the members to build mutually beneficial and lasting business relationships through various events and thus AECCI's Corporate Membership can be acquired by Private Limited Companies.",
    benefits: [
      "Certificate of Membership",
      "Certificate of Origin (Non-Preferential)",
      "Digital Platform access for e-CO service",
      "VISA Recommendation",
      "Company Listing on Chamber's digital Membership Directory",
      "Members' discounted rates for all Chamber events",
      "Regular updates for the important circular/notifications from GOI",
      "Assistance in Handling International Payment Disputes (Arbitration)*",
      "Focus on HR Solutions for members",
      "Use of Chamber Logo",
      "Legal assistance in matters pertaining to legal advocacy*"
    ],
    note: "*Advocacy charges applicable"
  },
  {
    title: "Corporate +",
    image: corporatePlusImg,
    perfectFor: "AECCI provides an environment for the members, benefits both the parties and increase business relationships through various events and thus AECCI's Corporate+ Membership can be acquired by Banks or Limited companies or any Public listed Companies.",
    benefits: [
      "All benefits of Corporate Membership",
      "Preferential advertising rates on the website, Daily Viewpoint, Newsletter, Annual Magazines",
      "Complimentary advertisement of joining company - viewpoint (full page) & Quarterly Newsletter (Half)*",
      "Exposure to 10,000+ unique visitors a month on AECCI website",
      "Opportunity to submit an article to the Chamber magazine",
      "Volunteer/Sponsorship Opportunities",
      "New joining members announced in the Chamber magazine"
    ],
    note: "*This advertisement will be placed once in financial year"
  },
  {
    title: "Overseas",
    image: overseasImg,
    perfectFor: "Companies who are based outside India of corporate and commercial field are eligible for Overseas Membership in AECCI. It provides direct contact with AECCI and its services such as assistance for Commercial Arbitration matters or to establish new venture in India.",
    benefits: [
      "Certificate of Membership",
      "Company Listing on Chamber's digital Membership Directory",
      "Members' rates for all Chamber events",
      "Regular updates for important circular/notifications from GOI",
      "Exposure to 10,000+ unique visitors a month on AECCI website",
      "Assistance in Handling International Payment Disputes (Arbitration)",
      "Networking opportunities with other Members",
      "Volunteer/Sponsorship Opportunities"
    ]
  },
  {
    title: "Non-Profit Organization",
    image: nonprofitImg,
    perfectFor: "For Non-Profit organization such as Trust, Institutions, Foundations, centre's etc. can be registered in AECCI as a Non profit Organization Member. Proof of non-profit status is required upon application.",
    benefits: [
      "Certificate of Membership",
      "Company Listing on Chamber's digital Membership Directory",
      "Members' discounted rates for all Chamber events",
      "Regular updates for important circular/notifications from GOI",
      "Preferential advertising rates on the website, Daily Viewpoints, Newsletter",
      "Networking opportunities with other Members"
    ]
  }
];

export default function MembershipBenefits() {
  return (
    <div className="w-full bg-background font-body text-foreground">
      {/* Hero Section */}
      <section className="relative w-full py-16 md:py-20 bg-slate-900 text-white overflow-hidden flex items-center">
        {/* Glow effect */}
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
              Membership & <span className="text-primary">its Benefits</span>
            </h1>
            <p className="text-slate-300 text-lg md:text-xl leading-relaxed mb-4 font-light italic">
              "Discover a world of possibilities and maximize your potential with our flexible range of membership options, tailored to meet your unique needs and goals."
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              <a 
                href={membershipBrochurePdf}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors"
              >
                <Download className="w-4 h-4" />
                Membership Brochure
              </a>
              <a 
                href={membershipFormPdf}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-slate-900 px-6 py-3 rounded-full font-semibold hover:bg-slate-100 transition-colors"
              >
                <UserPlus className="w-4 h-4" />
                Join to be a Member
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Membership Tiers Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-black text-slate-900 mb-6">Choose Your Membership</h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
              We offer various membership tiers designed to support businesses of all sizes, from local startups to global enterprises.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {membershipTiers.map((tier, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
                
                <div className="-mx-6 -mt-6 mb-6">
                  <img src={tier.image} alt={tier.title} className="w-full h-auto object-cover rounded-t-2xl" />
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-3 relative z-10">{tier.title}</h3>
                
                <div className="mb-4 relative z-10">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Perfect For</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">{tier.perfectFor}</p>
                </div>
                
                <div className="flex-grow relative z-10">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Key Benefits</h4>
                  <ul className="space-y-2">
                    {tier.benefits.map((benefit, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-slate-700 text-sm leading-snug">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {tier.note && (
                  <div className="mt-6 pt-4 border-t border-slate-100 relative z-10">
                    <p className="text-xs text-slate-400 italic">{tier.note}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Note Section */}
      <section className="py-16 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full aspect-video rounded-2xl overflow-hidden shadow-lg"
            >
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/p4hzX3S5bx0?si=3_N910lRaxfG6k5g" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-left"
            >
              <h3 className="text-3xl font-black text-red-600 mb-6 uppercase tracking-wider">Note</h3>
              <p className="text-slate-600 mb-4 text-lg">Dear Members,</p>
              <p className="text-slate-600 mb-4 leading-relaxed">
                We would like to inform you that the application form for membership can now be filled digitally by clicking on the blue box in the application form. You can simply type in the required information in the digital form. However, for signatures and other necessary documents, we request you to kindly print the digitally typed form and provide your signature on the printed copy.
              </p>
              <p className="text-slate-600 mb-4 leading-relaxed">
                Once you have signed the printed form, you can mail it to us at <a href="mailto:membership@aecci.org.in" className="text-primary hover:underline font-medium">membership@aecci.org.in</a> or deliver it – Hilton Towers, 604, 6TH FLOOR, PLOT NO.66, Sector 11, CBD Belapur, Navi Mumbai, Maharashtra 400614
              </p>
              <p className="text-slate-600 leading-relaxed">
                Thank you for your cooperation.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
