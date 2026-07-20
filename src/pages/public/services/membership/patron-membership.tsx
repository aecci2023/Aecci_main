import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Star,
  Globe,
  Users,
  Award,
  Check,
  ArrowRight,
  Building2,
  Mail,
  CheckCircle2,
  Layers,
  HelpCircle,
  UserCheck
} from "lucide-react";

// Benefits data
const patronMembersList = [
  {
    name: "Excellency Legalisation Services Pvt. Ltd.",
    type: "Legalization & Trade Support Services",
    badge: "Gold Patron Member",
    color: "from-emerald-500/20 to-teal-600/20 border-emerald-400/50"
  },
  {
    name: "ECONS Franchise Private Limited",
    type: "Business Consulting & Franchise Networks",
    badge: "Gold Patron Member",
    color: "from-emerald-500/20 to-teal-600/20 border-emerald-400/50"
  },
  {
    name: "EGC India",
    type: "Global Trade & Engineering Solutions",
    badge: "Gold Patron Member",
    color: "from-emerald-500/20 to-teal-600/20 border-emerald-400/50"
  }
];

export default function PatronMembership() {
  const [activeTab, setActiveTab] = useState<"about" | "eligibility" | "tiers" | "list" | "reach">("about");
  const [selectedTier, setSelectedTier] = useState<"silver" | "bronze" | "gold">("silver");

  const tabs = [
    { id: "about", label: "What is Patron Membership", icon: HelpCircle },
    { id: "eligibility", label: "Eligibility for Patron Membership", icon: UserCheck },
    { id: "tiers", label: "Patron Membership Tier", icon: Layers },
    { id: "list", label: "List of Patron Members", icon: Users },
    { id: "reach", label: "Reach Us", icon: undefined }
  ] as const;

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      <section className="relative w-full py-8 md:py-12 bg-[#0a1628] overflow-hidden flex items-center border-b border-[#10223b]">
        {/* Ambient Lights */}
        <div className="absolute right-0 top-0 w-1/2 h-full bg-emerald-500/10 blur-[120px] pointer-events-none rounded-full translate-x-1/3 -translate-y-1/4 z-0" />
        <div className="absolute left-0 bottom-0 w-1/3 h-1/2 bg-blue-500/5 blur-[100px] pointer-events-none rounded-full -translate-x-1/4 translate-y-1/4 z-0" />

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
                <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400/20" />
                <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest">
                  Membership Services
                </span>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight text-white uppercase tracking-wide">
                Patron <span className="text-amber-400">Membership</span>
              </h1>

              <p className="text-white/70 text-sm md:text-base leading-relaxed">
                At AECCI, our mission is to empower businesses and foster global trade with integrity and excellence.
              </p>
            </motion.div>

            {/* Right Column - Premium Creative Interactive Globe/Award Illustration */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="md:col-span-5 relative z-10 justify-center hidden md:flex"
            >
              <div className="relative w-72 h-72 rounded-full flex items-center justify-center">
                {/* Rotating Outer Ring */}
                <div className="absolute inset-0 border border-dashed border-white/10 rounded-full animate-[spin_60s_linear_infinite]" />
                {/* Rotating Inner Ring */}
                <div className="absolute inset-4 border border-white/5 rounded-full animate-[spin_30s_linear_infinite_reverse]" />
                {/* Diagonal orbit line */}
                <div className="absolute inset-0 border-y border-white/5 rounded-full rotate-45 animate-pulse" />
                <div className="absolute w-48 h-48 bg-amber-500/5 rounded-full blur-3xl animate-pulse" />

                {/* Glassmorphic center card */}
                <div className="relative z-10 w-48 h-48 rounded-full bg-white/5 flex flex-col items-center justify-center border border-white/10 backdrop-blur-md shadow-2xl hover:border-white/20 transition-colors duration-500">
                  <Award className="w-20 h-20 text-amber-400 animate-bounce-slow" strokeWidth={1} />
                  <span className="text-[10px] font-bold text-white/90 uppercase tracking-widest mt-2">Patron Elite</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Introduction text block (always visible) */}
      <section className="py-8 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.02)] border border-slate-100/80 space-y-6">
            <p className="text-slate-600 leading-relaxed text-sm md:text-base">
              For over a decade, the Asian Exporters’ Chamber of Commerce and Industry (AECCI) has been a steadfast partner for exporters, consistently striving to create opportunities for ventures to flourish globally. Our initiatives have been instrumental in supporting members, with collaboration agreements signed with over 25 Asian countries to bolster regional trade.
            </p>
            <p className="text-slate-600 leading-relaxed text-sm md:text-base">
              Building on the foundation of essential services such as shipping document attestation, AECCI is now poised to provide comprehensive support for Indian businesses on a global scale. Our offerings include investment facilitation, trade opportunities, networking events, connections with international buyers, technological support including AI, and consultations with global partners.
            </p>
            <p className="text-slate-600 leading-relaxed text-sm md:text-base">
              We are proud to introduce our exclusive <span className="italic font-semibold text-emerald-700">Patron Membership</span>, available in three tiers: Silver, Bronze, and Gold. This elite membership is designed to offer unparalleled benefits and strategic insights, ensuring our members are equipped to achieve exceptional growth and success on the world stage.
            </p>
          </div>
        </div>
      </section>

      {/* Styled Interactive Tab Bar Navigation with Green Theme */}
      <section className="sticky top-[73px] z-40 bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 overflow-x-auto scrollbar-none">
          <div className="flex space-x-1 py-3 justify-start md:justify-center min-w-max">
            {tabs.map((tab) => {
              const TabIcon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 relative cursor-pointer ${isActive
                    ? "text-emerald-700 bg-emerald-500/5 border border-emerald-500/30 shadow-sm"
                    : "text-slate-500 hover:text-emerald-700 hover:bg-slate-100/70 border border-transparent"
                    }`}
                >
                  {TabIcon && <TabIcon className={`w-4 h-4 ${isActive ? "text-emerald-600" : "text-slate-400"}`} />}
                  {tab.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeTabGlow"
                      className="absolute inset-0 rounded-full border border-emerald-500/40 pointer-events-none"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tab Contents Main Body Container */}
      <section className="pt-8 pb-4">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="bg-white rounded-3xl p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100"
            >

              {/* TAB 1: ABOUT / WHAT IS PATRON MEMBERSHIP */}
              {activeTab === "about" && (
                <div className="space-y-10">
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                    <div className="md:col-span-8 space-y-5">
                      <h2 className="text-2xl md:text-3xl font-extrabold text-[#0c1a2c]">
                        What is Patron Membership?
                      </h2>
                      <p className="text-slate-600 leading-relaxed text-base">
                        Patron Membership is an elite tier within AECCI designed for companies seeking extensive support, enhanced visibility, and exclusive opportunities in global trade. This membership provides unparalleled benefits such as priority access to AECCI events, strategic insights, and bespoke services aimed at fostering significant business growth and international expansion
                      </p>
                    </div>
                    <div className="md:col-span-4 flex justify-center">
                      <div className="p-1 rounded-3xl bg-amber-500/10 border border-amber-500/20">
                        <div className="bg-[#0a1628] rounded-[22px] p-6 text-center space-y-4 text-white max-w-[240px] shadow-lg">
                          <Award className="w-14 h-14 mx-auto text-amber-400 fill-amber-400/10 animate-bounce-slow" />
                          <h4 className="font-extrabold text-sm tracking-wider uppercase text-amber-300">AECCI Honor</h4>
                          <p className="text-xs leading-relaxed text-slate-300">
                            Our highest status, reserving exclusive boardroom rights and global delegation priorities.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 2: ELIGIBILITY */}
              {activeTab === "eligibility" && (
                <div className="space-y-8 max-w-3xl mx-auto">
                  <div className="space-y-4">
                    <h2 className="text-2xl md:text-3xl font-extrabold text-[#0c1a2c]">
                      Eligibility for Patron Membership
                    </h2>
                    <h3 className="text-lg font-bold text-slate-800">
                      Patron Membership is ideal for:
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      "Large corporations with extensive export activities.",
                      "SMEs looking to expand their global footprint.",
                      "Companies seeking strategic networking and policy advocacy.",
                      "Businesses interested in leveraging advanced technologies and global partnerships."
                    ].map((text, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        whileHover={{ scale: 1.02, y: -2 }}
                        className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-emerald-500/30 hover:bg-emerald-50/5 transition-all duration-300"
                      >
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-600">
                          <Check className="w-4 h-4" />
                        </div>
                        <span className="text-slate-600 text-xs md:text-sm leading-relaxed">{text}</span>
                      </motion.div>
                    ))}
                  </div>

                  <p className="text-slate-600 text-sm md:text-base leading-relaxed pt-4 border-t border-slate-100">
                    By becoming a Patron Member, companies gain a competitive edge through AECCI’s vast resources and network, ensuring sustained growth and success in the international market.
                  </p>

                </div>
              )}

              {/* TAB 3: MEMBERSHIP TIERS */}
              {activeTab === "tiers" && (
                <div className="space-y-12">
                  <div className="text-center max-w-2xl mx-auto space-y-3 mb-6">
                    <h2 className="text-2xl md:text-3xl font-extrabold text-[#0c1a2c]">
                      Patron Membership Tiers
                    </h2>
                    <p className="text-slate-500 text-sm">
                      Select a tier below to view its specific turnover eligibility and exclusive benefits packages.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* SILVER CARD */}
                    <div
                      onClick={() => setSelectedTier("silver")}
                      className={`rounded-2xl border flex flex-col justify-between overflow-hidden cursor-pointer transition-all duration-300 ${selectedTier === "silver"
                        ? "border-2 border-emerald-500 bg-emerald-50/10 shadow-md scale-[1.01]"
                        : "border-slate-200 bg-slate-50 hover:shadow-md hover:border-slate-300"
                        }`}
                    >
                      <div className="p-6 border-b border-slate-200 bg-white">
                        <div className="flex justify-between items-start mb-4">
                          <span className="px-3 py-1 rounded-full text-xs font-bold bg-slate-100 text-slate-700 uppercase">Silver</span>
                        </div>
                        <h3 className="text-2xl font-black text-slate-800">INR 3,50,000/-</h3>
                        <p className="text-xs text-slate-400 mt-1">Annual subscription</p>
                      </div>
                      <div className="p-6 bg-white/50 flex-1 flex flex-col justify-between">
                        <p className="text-xs text-slate-500 leading-relaxed mb-4">
                          Tailored for mid-sized businesses looking to expand their global reach with essential support.
                        </p>
                        <span className="text-xs font-bold text-emerald-600 flex items-center gap-1">
                          View details <ArrowRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>

                    {/* BRONZE CARD */}
                    <div
                      onClick={() => setSelectedTier("bronze")}
                      className={`rounded-2xl border flex flex-col justify-between overflow-hidden cursor-pointer transition-all duration-300 relative ${selectedTier === "bronze"
                        ? "border-2 border-emerald-500 bg-emerald-50/10 shadow-md scale-[1.01]"
                        : "border-slate-200 bg-slate-50 hover:shadow-md hover:border-slate-300"
                        }`}
                    >
                      <div className="p-6 border-b border-slate-200 bg-white">
                        <div className="flex justify-between items-start mb-4">
                          <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-700 uppercase">Bronze</span>
                        </div>
                        <h3 className="text-2xl font-black text-[#0c1a2c]">INR 7,00,000/-</h3>
                        <p className="text-xs text-slate-400 mt-1">Annual subscription</p>
                      </div>
                      <div className="p-6 bg-white/50 flex-1 flex flex-col justify-between">
                        <p className="text-xs text-slate-500 leading-relaxed mb-4">
                          Designed for larger organizations aiming for deeper integration and policy support.
                        </p>
                        <span className="text-xs font-bold text-emerald-600 flex items-center gap-1">
                          View details <ArrowRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>

                    {/* GOLD CARD */}
                    <div
                      onClick={() => setSelectedTier("gold")}
                      className={`rounded-2xl border flex flex-col justify-between overflow-hidden cursor-pointer transition-all duration-300 ${selectedTier === "gold"
                        ? "border-2 border-emerald-500 bg-emerald-50/10 shadow-md scale-[1.01]"
                        : "border-slate-200 bg-slate-50 hover:shadow-md hover:border-slate-300"
                        }`}
                    >
                      <div className="p-6 border-b border-slate-200 bg-white">
                        <div className="flex justify-between items-start mb-4">
                          <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-500/10 text-amber-700 uppercase">Gold</span>
                        </div>
                        <h3 className="text-2xl font-black text-[#0c1a2c]">INR 10,00,000/-</h3>
                        <p className="text-xs text-slate-400 mt-1">Annual subscription</p>
                      </div>
                      <div className="p-6 bg-white/50 flex-1 flex flex-col justify-between">
                        <p className="text-xs text-slate-500 leading-relaxed mb-4">
                          Experience the pinnacle of AECCI support with elite representation and unlimited COO waivers.
                        </p>
                        <span className="text-xs font-bold text-emerald-600 flex items-center gap-1">
                          View details <ArrowRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Detailed features view matching selected card */}
                  <div className="bg-white rounded-3xl p-6 md:p-10 border border-slate-100 shadow-[inset_0_2px_4px_rgba(0,0,0,0.01)] mt-8 space-y-8">
                    {selectedTier === "silver" && (
                      <div className="space-y-6">
                        <div className="space-y-3">
                          <h3 className="text-xl font-bold text-[#0c1a2c] flex items-center gap-2">
                            <Award className="w-5 h-5 text-emerald-600" /> Silver Tier Patron Membership
                          </h3>
                          <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                            Companies with an annual turnover upto 200 crores are eligible for the Silver Tier Patron Membership. This membership level offers essential support and benefits tailored for mid-sized businesses aiming to expand their global reach. In addition to the benefits listed under Corporate+ Membership, Silver Patron Members will enjoy the following exclusive advantages
                          </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                          <div className="space-y-4">
                            <div className="space-y-2">
                              <h4 className="font-bold text-slate-800 text-xs uppercase tracking-wider">Certification & Digital Access:</h4>
                              <ul className="list-disc pl-5 text-xs text-slate-500 space-y-1">
                                <li>Certificate of Annual Patron Membership & Silver Laminated Card</li>
                                <li>Fast-tracked visa recommendations & concessional shipping document attestation</li>
                                <li>24/7 digital service access on e-platform (digital library, latest research studies)</li>
                              </ul>
                            </div>
                            <div className="space-y-2">
                              <h4 className="font-bold text-slate-800 text-xs uppercase tracking-wider">Information:</h4>
                              <ul className="list-disc pl-5 text-xs text-slate-500 space-y-1">
                                <li>Regular policy updates on latest national/international rules, govt legislations, and technical developments</li>
                              </ul>
                            </div>
                            <div className="space-y-2">
                              <h4 className="font-bold text-slate-800 text-xs uppercase tracking-wider">Legal and Dispute Resolution:</h4>
                              <ul className="list-disc pl-5 text-xs text-slate-500 space-y-1">
                                <li>Expert legal assistance for advocacy matters & professional handling of payment disputes</li>
                                <li>Concessional fees at AECCI-International Arbitration Centers (AECCI-IAC)</li>
                              </ul>
                            </div>
                          </div>

                          <div className="space-y-4">
                            <div className="space-y-2">
                              <h4 className="font-bold text-slate-800 text-xs uppercase tracking-wider">Premium Event Access:</h4>
                              <ul className="list-disc pl-5 text-xs text-slate-500 space-y-1">
                                <li>2 Table reserved seating at AECCI events & exclusive networking with senior officials</li>
                                <li>Speaking slots at sectoral events to showcase company expertise</li>
                              </ul>
                            </div>
                            <div className="space-y-2">
                              <h4 className="font-bold text-slate-800 text-xs uppercase tracking-wider">Marketing and Visibility:</h4>
                              <ul className="list-disc pl-5 text-xs text-slate-500 space-y-1">
                                <li>Prominent feature in Chamber Publications (articles and advertisements)</li>
                                <li>Branding at 2 major events annually (logo on venue backdrop and newspapers)</li>
                                <li>Logo listing on the AECCI website and digital membership directory</li>
                              </ul>
                            </div>
                            <div className="space-y-2">
                              <h4 className="font-bold text-slate-800 text-xs uppercase tracking-wider">Business Support and Expansion:</h4>
                              <ul className="list-disc pl-5 text-xs text-slate-500 space-y-1">
                                <li>Business assistance for daily operations, expansion, and diversification plans</li>
                                <li>Complimentary/discounted training workshops, seminars, and certification programs</li>
                              </ul>
                            </div>
                          </div>

                          <div className="md:col-span-2 space-y-3 p-5 rounded-2xl bg-emerald-50/20 border border-emerald-100">
                            <h4 className="font-bold text-slate-800 text-xs uppercase tracking-wider flex items-center gap-1.5">
                              <Globe className="w-4 h-4 text-emerald-600" /> Global Exposure:
                            </h4>
                            <ul className="space-y-2 text-xs text-slate-600">
                              <li className="flex items-start gap-2">
                                <span className="font-bold text-emerald-800 min-w-[160px] block">International Exhibitions:</span>
                                <span>Invitations to showcase your products and services globally.</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="font-bold text-emerald-800 min-w-[160px] block">Foreign Delegations:</span>
                                <span>Priority invitations and discounted rates for international trade delegations. Early information on trade delegations and international events. 20 % Discount in Delegation fee in AECCI Events.</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="font-bold text-emerald-800 min-w-[160px] block">Exclusive Interactions:</span>
                                <span>Engage with up to 4 countries overseas legal partners for potential Investment Plans or consultations.</span>
                              </li>
                              <li className="flex items-start gap-2 pt-2 border-t border-emerald-100/60 font-medium text-slate-700">
                                <span>Additionally, access AECCI-TAC services in the region to further support your Domestic Queries.</span>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <p className="text-xs font-semibold text-emerald-800 bg-emerald-50/50 p-4 rounded-xl border border-emerald-100/80 leading-relaxed text-center">
                          Join as a Silver Patron Member and unlock these premium benefits, designed to provide unparalleled support, visibility, and growth opportunities for your business on the global stage
                        </p>
                      </div>
                    )}

                    {selectedTier === "bronze" && (
                      <div className="space-y-6">
                        <div className="space-y-3">
                          <h3 className="text-xl font-bold text-[#0c1a2c] flex items-center gap-2">
                            <Award className="w-5 h-5 text-emerald-600" /> Bronze Tier Patron Membership
                          </h3>
                          <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                            The Bronze Tier is designed for companies with an annual turnover between INR 200 crores and INR 800 crores. This tier provides enhanced benefits and opportunities, supporting larger companies in their efforts to grow and succeed in international markets. Building on the robust benefits of the Silver tier, the Bronze Patron Membership offers additional, highly attractive advantages. Designed for businesses seeking deeper engagement and enhanced support, the Bronze tier provides:
                          </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                          <div className="space-y-4">
                            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1">
                              <h4 className="font-bold text-slate-800 text-xs uppercase tracking-wider">Close Interaction:</h4>
                              <p className="text-xs text-slate-500">Close interaction with renowned members, central/state govt officials, academia, and international partners (up to 10 countries).</p>
                            </div>
                            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1">
                              <h4 className="font-bold text-slate-800 text-xs uppercase tracking-wider">Competitiveness Support:</h4>
                              <p className="text-xs text-slate-500">Targeted competitiveness support for national and international markets.</p>
                            </div>
                            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1">
                              <h4 className="font-bold text-slate-800 text-xs uppercase tracking-wider">International Trade Promotion:</h4>
                              <p className="text-xs text-slate-500">Participation in meetings with visiting foreign delegations, trade fairs, and overseas exhibitions.</p>
                            </div>
                            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1">
                              <h4 className="font-bold text-slate-800 text-xs uppercase tracking-wider">Expert Advice:</h4>
                              <p className="text-xs text-slate-500">Specialized monetary policy, corporate law, fiscal policy, taxation, and exchange rate advice.</p>
                            </div>
                            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1">
                              <h4 className="font-bold text-slate-800 text-xs uppercase tracking-wider">Legislation Analysis:</h4>
                              <p className="text-xs text-slate-500">In-depth analysis of legislations to help policymakers, foreign investors, and trade and industry.</p>
                            </div>
                          </div>

                          <div className="space-y-4">
                            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1">
                              <h4 className="font-bold text-slate-800 text-xs uppercase tracking-wider">E-mail Service:</h4>
                              <p className="text-xs text-slate-500">Direct updates on government notifications, circulars, and reports via email.</p>
                            </div>
                            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1">
                              <h4 className="font-bold text-slate-800 text-xs uppercase tracking-wider">Publications Access:</h4>
                              <p className="text-xs text-slate-500">Full access to AECCI Bulletin, News & Views Weekly, and topical studies.</p>
                            </div>
                            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1">
                              <h4 className="font-bold text-slate-800 text-xs uppercase tracking-wider">Business Directory Listing:</h4>
                              <p className="text-xs text-slate-500">Free organization profile in the AECCI Business Directory, circulated to global embassies and high commissions.</p>
                            </div>
                            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1">
                              <h4 className="font-bold text-slate-800 text-xs uppercase tracking-wider">Export Document Certification:</h4>
                              <p className="text-xs text-slate-500">Concessional registration rates for all paid AECCI programs and seminars.</p>
                            </div>
                            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1">
                              <h4 className="font-bold text-slate-800 text-xs uppercase tracking-wider">Concessional Fees:</h4>
                              <p className="text-xs text-slate-500">Discounts on arbitration, document certifications, and legal advisory services.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {selectedTier === "gold" && (
                      <div className="space-y-6">
                        <div className="space-y-3">
                          <h3 className="text-xl font-bold text-[#0c1a2c] flex items-center gap-2">
                            <Award className="w-5 h-5 text-emerald-600" /> Gold Tier Patron Membership
                          </h3>
                          <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                            For companies with an annual turnover exceeding INR 800 crores, the Gold Tier offers the most comprehensive benefits. As a Gold Patron Member, you’ll enjoy all the benefits of the silver and bronze tiers, along with exclusive, high-value perks that ensure your business stands out on the global stage.
                          </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                          <div className="space-y-4">
                            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1">
                              <h4 className="font-bold text-slate-800 text-xs uppercase tracking-wider">Global Networking:</h4>
                              <p className="text-xs text-slate-500">Direct engagement with Indian Missions and counterpart chambers worldwide.</p>
                            </div>
                            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1">
                              <h4 className="font-bold text-slate-800 text-xs uppercase tracking-wider">Joint Venture Opportunities:</h4>
                              <p className="text-xs text-slate-500">Targeted joint venture opportunity matching at national & international events.</p>
                            </div>
                            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1">
                              <h4 className="font-bold text-slate-800 text-xs uppercase tracking-wider">Event Sponsorship:</h4>
                              <p className="text-xs text-slate-500">High-exposure event sponsorship and co-sponsorship at discounted rates.</p>
                            </div>
                            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1">
                              <h4 className="font-bold text-slate-800 text-xs uppercase tracking-wider">Prominent Event Presence:</h4>
                              <p className="text-xs text-slate-500">Dedicated registration desk/table/standee and centerpieces at major events.</p>
                            </div>
                            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1">
                              <h4 className="font-bold text-slate-800 text-xs uppercase tracking-wider">Exclusive Facility Access:</h4>
                              <p className="text-xs text-slate-500">Concessional use of AECCI’s centrally located, air-conditioned conference and meeting rooms.</p>
                            </div>
                            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1">
                              <h4 className="font-bold text-slate-800 text-xs uppercase tracking-wider">Entrepreneurial Assistance:</h4>
                              <p className="text-xs text-slate-500">Entrepreneurial assistance in setting up new projects and upgrading technology.</p>
                            </div>
                          </div>

                          <div className="space-y-4">
                            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1">
                              <h4 className="font-bold text-slate-800 text-xs uppercase tracking-wider">Development Programs:</h4>
                              <p className="text-xs text-slate-500">Priority human resources and industrial relations development programs.</p>
                            </div>
                            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1">
                              <h4 className="font-bold text-slate-800 text-xs uppercase tracking-wider">Sector Representation:</h4>
                              <p className="text-xs text-slate-500">Sector representation in national and international forums to influence policy.</p>
                            </div>
                            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1">
                              <h4 className="font-bold text-slate-800 text-xs uppercase tracking-wider">Policy and Technical Consultancy:</h4>
                              <p className="text-xs text-slate-500">Expert policy and technical consultancy from subject-specific committees.</p>
                            </div>
                            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1">
                              <h4 className="font-bold text-slate-800 text-xs uppercase tracking-wider">Trade Fair and Delegation Support:</h4>
                              <p className="text-xs text-slate-500">Coordinated logistics, meetings, and arrangements during international trade fairs.</p>
                            </div>
                            <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 space-y-1">
                              <h4 className="font-bold text-emerald-850 text-xs uppercase tracking-wider flex items-center gap-1">
                                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Complimentary COO Certification:
                              </h4>
                              <p className="text-xs text-emerald-950 font-medium">Complimentary Certificate of Origin (COO) certification for the entire financial year!</p>
                            </div>
                          </div>
                        </div>

                        <p className="text-xs font-semibold text-emerald-800 bg-emerald-50/50 p-4 rounded-xl border border-emerald-100/80 leading-relaxed text-center mt-6">
                          Elevate your business to new heights with the Gold Patron Membership, designed to provide unparalleled support, visibility, and growth opportunities in the global marketplace.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* TAB 4: LIST OF PATRON MEMBERS */}
              {activeTab === "list" && (
                <div className="space-y-8">
                  <div className="text-center max-w-2xl mx-auto space-y-3 mb-4">
                    <h2 className="text-2xl md:text-3xl font-extrabold text-[#0c1a2c]">
                      Patron Members
                    </h2>
                    <p className="text-slate-500 text-sm">
                      We are proud to stand alongside India's distinguished trade leaders and industry champions.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {patronMembersList.map((member, index) => (
                      <motion.div
                        key={index}
                        className="rounded-2xl border p-6 bg-gradient-to-br from-white to-slate-50 hover:shadow-lg transition-all duration-300 text-center flex flex-col justify-between min-h-[220px]"
                        whileHover={{ y: -4 }}
                      >
                        <div className="mx-auto w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-700 font-bold mb-4 border border-slate-200">
                          {member.name.slice(0, 2).toUpperCase()}
                        </div>
                        <div className="space-y-1.5 flex-1 flex flex-col justify-center">
                          <h4 className="font-extrabold text-[#0c1a2c] text-sm leading-snug">
                            {member.name}
                          </h4>
                          <p className="text-xs text-slate-500 leading-normal">
                            {member.type}
                          </p>
                        </div>
                        <div className="mt-4 pt-3 border-t border-slate-200/60">
                          <span className="inline-block text-[10px] font-bold text-emerald-700 uppercase tracking-widest">
                            {member.badge}
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <div className="bg-emerald-50 rounded-2xl p-6 border border-emerald-200/60 text-center max-w-xl mx-auto mt-10">
                    <p className="text-xs text-emerald-900 leading-relaxed">
                      "Patron membership status signifies your corporate commitment to fostering transparent global trade relations, raising standards, and developing tech innovations in export operations."
                    </p>
                  </div>
                </div>
              )}

              {/* TAB 5: REACH US / CONTACT */}
              {activeTab === "reach" && (
                <div className="space-y-8">
                  <div className="text-center max-w-2xl mx-auto space-y-3 mb-4">
                    <h2 className="text-2xl md:text-3xl font-extrabold text-[#0c1a2c]">
                      Reach Us
                    </h2>
                    <p className="text-slate-500 text-sm">
                      Interested in collaborating with AECCI? Get in touch with our dedicated membership team.
                    </p>
                  </div>

                  <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                      {/* Left Column: Address */}
                      <div className="md:col-span-5 space-y-4">
                        <h3 className="text-lg font-bold text-[#0c1a2c] flex items-center gap-2">
                          <Building2 className="w-5 h-5 text-emerald-600" /> Head Office Address
                        </h3>
                        <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                          <strong>Asian Exporters' Chamber of Commerce and Industry (AECCI)</strong><br />
                          604, 6th Floor, Hilton Centre, Sector 11, CBD Belapur,<br />
                          Navi Mumbai - 400614, Maharashtra, India.
                        </p>
                      </div>

                      {/* Divider for desktop */}
                      <div className="hidden md:block md:col-span-1 h-32 w-px bg-slate-200 mx-auto" />

                      {/* Right Column: Contact Directory */}
                      <div className="md:col-span-6 space-y-4">
                        <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider">Contact Directory</h3>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                          <div className="space-y-1 p-3 rounded-xl bg-white border border-slate-100 shadow-sm">
                            <span className="text-slate-400 font-medium">Contact Person</span>
                            <p className="font-extrabold text-slate-700">Mr. Harish Shetty</p>
                            <p className="text-[10px] text-slate-400">Director, Membership Relations</p>
                          </div>
                          <div className="space-y-1 p-3 rounded-xl bg-white border border-slate-100 shadow-sm">
                            <span className="text-slate-400 font-medium">Board Lines</span>
                            <p className="font-extrabold text-slate-700">+91-22-41271145 / 46</p>
                            <p className="text-[10px] text-slate-400 font-semibold text-slate-500">Mobile/WA: +91-8433720996</p>
                          </div>
                          <div className="space-y-1 p-3 rounded-xl bg-white border border-slate-100 shadow-sm sm:col-span-2">
                            <span className="text-slate-400 font-medium">Email ID</span>
                            <p className="font-extrabold text-slate-700 flex items-center gap-1">
                              <Mail className="w-3.5 h-3.5 text-emerald-500" />
                              <a href="mailto:membership@aecci.org.in" className="hover:underline">membership@aecci.org.in</a>
                            </p>
                            <p className="text-[10px] text-slate-400">General Queries: info@aecci.org.in</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

                </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Dynamic CTA Section: How we can help? */}
      <section className="bg-white pt-8 pb-16 border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0c1a2c]">
            How we can help?
          </h2>
          <p className="text-slate-500 text-sm md:text-base max-w-3xl mx-auto leading-relaxed">
            A Trusted and Recognized Trade Organization Supporting Businesses Across Every Industry and Sector, All Consolidated within a Unified Platform.
          </p>
          <div className="pt-4 flex justify-center">
            <Button asChild className="bg-[#1b4332] text-white hover:bg-[#143225] px-8 py-3.5 rounded-sm font-bold text-xs uppercase tracking-wider transition-colors duration-300 border-none">
              <Link to="/services/membership">Find out more about our services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
