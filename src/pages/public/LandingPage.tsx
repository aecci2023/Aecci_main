import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import {
  BadgeCheck,
  BriefcaseBusiness,
  Building2,
  Check,
  CircleCheckBig,
  Factory,
  Globe2,
  Handshake,
  Rocket,
  TrendingUp,
  UsersRound
} from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

export const audienceCards = [
  {
    title: "Global Buyers / Importers",
    text: "Supply chain risk reduction and compliance.",
    cta: "Join as Buyer →",
    link: "/importer/register",
    tone: "text-blue-600",
    icon: "briefcase",
    image: "/images/buyer.png",
    color: "blue"
  },
  {
    title: "Intending Agents / Representatives",
    text: "Representing your customers and suppliers.",
    cta: "Join as Agent →",
    link: "/signup",
    tone: "text-emerald-600",
    icon: "globe",
    image: "/images/agent.png",
    color: "emerald"
  },
  {
    title: "International Collaborators",
    text: "Bring expertise, process, market insight and know-how.",
    cta: "Join as Collaborator →",
    link: "/partner/register",
    tone: "text-purple-600",
    icon: "users",
    image: "/images/collaborator.png",
    color: "purple"
  },
  {
    title: "Indian Exporters / Manufacturers",
    text: "Expand your business and reach new global markets.",
    cta: "Join as Exporter →",
    link: "/signup",
    tone: "text-amber-500",
    icon: "factory",
    image: "/images/exporter.png",
    color: "amber"
  }
];

export const benefits = [
  ["ShieldCheck", "Trusted & Verified", "Screened businesses and verified partner profiles."],
  ["Target", "Structured Deal Rooms", "Focused sessions designed for practical outcomes."],
  ["ChartNoAxesCombined", "Business Intelligence", "Market insights and opportunity guidance."],
  ["Network", "Global Network", "Cross-border connections across multiple countries."],
  ["Headset", "Post-Meeting Support", "Follow-up assistance and relationship coordination."]
];

export const plans = [
  {
    name: "Discovery Pass",
    price: "₹2,999",
    cadence: "/ Meeting",
    features: ["1 Deal Room Meeting", "30-Minute Meeting", "Basic Profile Access", "Post-Meeting Summary"],
    cta: "Choose Plan",
    link: "/register",
    border: "border-blue-500",
    shadow: ""
  },
  {
    name: "Buyer Growth Access",
    price: "₹14,999",
    cadence: "/ Month",
    features: ["5 Deal Room Meetings", "Priority Scheduling", "Requirement Broadcasting", "Market Updates"],
    cta: "Choose Plan",
    link: "/register",
    border: "border-emerald-500",
    recommended: true,
    shadow: "shadow-[0_0_0_2px_rgba(25,208,130,0.12),0_12px_30px_rgba(0,0,0,0.2)]"
  },
  {
    name: "Buyer Enterprise Access",
    price: "₹49,999",
    cadence: "/ Quarter",
    features: ["20 Deal Room Meetings", "Dedicated Support", "Private Roundtables", "Priority Introductions"],
    cta: "Choose Plan",
    link: "/register",
    border: "border-purple-500",
    shadow: ""
  },
  {
    name: "Custom Enterprise",
    price: "Custom",
    cadence: "Pricing",
    features: ["Tailored Solutions", "Dedicated Account Manager", "Private Events", "Premium Branding"],
    cta: "Contact AECCI",
    link: "/contact-us/head-office",
    border: "border-amber-500",
    shadow: ""
  }
];

const metrics = [
  ["50+", "Countries"],
  ["5000+", "Businesses"],
  ["2500+", "Deal Rooms"],
  ["1500+", "Global Partners"]
];

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#05111f] via-[#071b32] to-[#071526] text-white" id="global-deal-room">
      <div className="mx-auto w-full max-w-[95%] 2xl:max-w-[1600px] px-4 lg:px-6">
        <div className="grid min-h-[460px] grid-cols-1 lg:grid-cols-[47%_53%] py-[40px] lg:pt-[54px] lg:pb-[34px]">
          <motion.div 
            className="z-10 self-center max-w-[560px] lg:max-w-[650px]"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="mb-[18px] inline-block text-[12px] font-extrabold tracking-[0.05em] text-[#f2b43b]">
              AECCI GLOBAL DEAL ROOM
            </span>
            <h1 className="mb-[18px] text-[38px] lg:text-[48px] leading-[1.08] tracking-[-0.035em]">
              Connecting Global Opportunities.<br />
              Building <span className="text-[#efb33b]">Global Success.</span>
            </h1>
            <p className="max-w-[640px] text-[14px] leading-[1.7] text-[#d0d9e4]">
              AECCI brings together Indian exporters, global buyers, international collaborators
              and trade partners in a trusted platform for meaningful business connections and long-term growth.
            </p>

            <div className="my-[24px] flex flex-col lg:flex-row gap-[12px] lg:gap-[28px]">
              <motion.div 
                className="flex items-center gap-[9px] text-[#e8ab32]"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Building2 size={19} />
                <span>
                  <b className="block text-[12px] text-white">Trusted Chamber</b>
                  <small className="block text-[10px] text-[#aab9ca]">of Commerce</small>
                </span>
              </motion.div>
              <motion.div 
                className="flex items-center gap-[9px] text-[#e8ab32]"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Globe2 size={19} />
                <span>
                  <b className="block text-[12px] text-white">Global Reach</b>
                  <small className="block text-[10px] text-[#aab9ca]">50+ Countries</small>
                </span>
              </motion.div>
              <motion.div 
                className="flex items-center gap-[9px] text-[#e8ab32]"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Handshake size={19} />
                <span>
                  <b className="block text-[12px] text-white">Meaningful</b>
                  <small className="block text-[10px] text-[#aab9ca]">Business Connections</small>
                </span>
              </motion.div>
            </div>

            <div className="mt-[26px] flex gap-[14px]">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button asChild className="bg-gradient-to-br from-[#ffc75b] to-[#e9aa2d] font-bold text-[#101722] hover:opacity-90 shadow-[0_8px_24px_rgba(230,166,40,0.25)] border-transparent h-[42px] px-[20px] rounded-[6px]">
                  <Link to="/register">Join AECCI Today →</Link>
                </Button>
              </motion.div>
              <Button asChild variant="outline" className="hidden lg:flex border-[#66809e] bg-[#061426]/64 text-white hover:bg-[#061426]/80 hover:text-white h-[42px] px-[20px] rounded-[6px]">
                <a href="#plans">Explore Deal Room</a>
              </Button>
            </div>
          </motion.div>

          <motion.div 
            className="relative min-h-[340px] lg:min-h-[360px]" 
            aria-hidden="true"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="absolute top-[42px] right-[-110px] h-[285px] w-[740px] -rotate-[18deg] rounded-full border border-[#ffba3b]/50" />
            <div className="absolute top-[120px] right-[-110px] h-[285px] w-[740px] rotate-[14deg] rounded-full border border-[#ffba3b]/50" />
            <div className="absolute top-[205px] right-[-110px] h-[285px] w-[740px] -rotate-[5deg] rounded-full border border-[#ffba3b]/50" />
            
            <div className="absolute right-[-60px] top-[-120px] h-[610px] w-[610px] overflow-hidden rounded-full border border-[#4c9dff]/55 bg-[radial-gradient(circle_at_42%_38%,rgba(44,120,255,0.55),transparent_20%),radial-gradient(circle_at_60%_50%,#0b3d79_0%,#081a34_48%,#020a15_72%)] shadow-[0_0_60px_rgba(34,118,235,0.26),inset_0_0_45px_rgba(27,123,252,0.28)] before:absolute before:inset-[10%] before:rounded-full before:border before:border-[#ffbe45]/25 after:absolute after:inset-[22%_4%] after:rotate-[62deg] after:rounded-full after:border after:border-[#ffbe45]/25">
              <div className="absolute left-[135px] top-[160px] h-[120px] w-[190px] -rotate-[9deg] rounded-[60%_42%_55%_38%] bg-gradient-to-br from-[#5684b5] to-[#1d4c82] opacity-80 drop-shadow-[0_0_8px_rgba(255,190,69,0.24)]" />
              <div className="absolute left-[245px] top-[240px] h-[205px] w-[145px] rotate-[12deg] rounded-[45%_55%_65%_35%] bg-gradient-to-br from-[#5684b5] to-[#1d4c82] opacity-80 drop-shadow-[0_0_8px_rgba(255,190,69,0.24)]" />
              <div className="absolute right-[65px] top-[190px] h-[110px] w-[170px] rotate-[5deg] rounded-[65%_35%_52%_48%] bg-gradient-to-br from-[#5684b5] to-[#1d4c82] opacity-80 drop-shadow-[0_0_8px_rgba(255,190,69,0.24)]" />
              <div className="absolute bottom-[90px] right-[140px] h-[120px] w-[85px] rounded-[45%_55%_60%_40%] bg-gradient-to-br from-[#5684b5] to-[#1d4c82] opacity-80 drop-shadow-[0_0_8px_rgba(255,190,69,0.24)]" />
              
              <motion.span 
                className="absolute left-[205px] top-[210px] h-[9px] w-[9px] rounded-full bg-[#ffd36c] shadow-[0_0_20px_#ffc149]"
                animate={{ 
                  scale: [1, 1.5, 1],
                  opacity: [1, 0.5, 1]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
              <motion.span 
                className="absolute left-[360px] top-[285px] h-[9px] w-[9px] rounded-full bg-[#ffd36c] shadow-[0_0_20px_#ffc149]"
                animate={{ 
                  scale: [1, 1.5, 1],
                  opacity: [1, 0.5, 1]
                }}
                transition={{ 
                  duration: 2,
                  delay: 0.5,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
              <motion.span 
                className="absolute right-[140px] top-[220px] h-[9px] w-[9px] rounded-full bg-[#ffd36c] shadow-[0_0_20px_#ffc149]"
                animate={{ 
                  scale: [1, 1.5, 1],
                  opacity: [1, 0.5, 1]
                }}
                transition={{ 
                  duration: 2,
                  delay: 1,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
              <motion.span 
                className="absolute bottom-[125px] left-[280px] h-[9px] w-[9px] rounded-full bg-[#ffd36c] shadow-[0_0_20px_#ffc149]"
                animate={{ 
                  scale: [1, 1.5, 1],
                  opacity: [1, 0.5, 1]
                }}
                transition={{ 
                  duration: 2,
                  delay: 1.5,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
              <motion.span 
                className="absolute bottom-[160px] right-[80px] h-[9px] w-[9px] rounded-full bg-[#ffd36c] shadow-[0_0_20px_#ffc149]"
                animate={{ 
                  scale: [1, 1.5, 1],
                  opacity: [1, 0.5, 1]
                }}
                transition={{ 
                  duration: 2,
                  delay: 0.8,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
            </div>
            
            <motion.div 
              className="absolute right-[10px] lg:right-0 top-[70px] z-20 w-[210px] rounded-[12px] border border-[#ffbe49]/35 bg-[#020d1a]/80 p-[22px_24px] backdrop-blur-[12px] shadow-[0_20px_40px_rgba(0,0,0,0.3)]"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-[16px] m-0 font-bold">Global Connectivity</h3>
              <p className="mt-[4px] mb-[15px] text-[12px] text-[#d1dae5]">Endless Opportunities</p>
              {metrics.map(([value, label]) => (
                <motion.div 
                  className="my-[10px] flex items-baseline gap-[9px]" 
                  key={label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 + metrics.indexOf([value, label]) * 0.1 }}
                >
                  <strong className="text-[25px] text-[#f4b33a]">{value}</strong>
                  <span className="text-[12px]">{label}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
      <div className="h-[35px] translate-y-[1px] rounded-t-[55%_55%] lg:rounded-t-[55%_55%_0_0_/_100%_100%_0_0] bg-white" />
    </section>
  );
}

function Audience() {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  const imageVariants = {
    hover: { 
      scale: 1.2,
      rotate: 10,
      transition: { 
        type: "spring" as const,
        stiffness: 300
      }
    }
  };

  const iconColors = {
    blue: "bg-blue-100 text-blue-600",
    emerald: "bg-emerald-100 text-emerald-600",
    purple: "bg-purple-100 text-purple-600",
    amber: "bg-amber-100 text-amber-600"
  };

  return (
    <section className="bg-white py-[24px] pb-[30px]">
      <div className="mx-auto w-full max-w-[95%] 2xl:max-w-[1600px] px-4 lg:px-6">
        <motion.div 
          className="mb-[22px] text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-[24px] text-[#14253b] font-bold">Who Can Join AECCI Global Deal Room?</h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {audienceCards.map((item, index) => (
            <motion.div
              key={index}
              initial="hidden"
              animate="visible"
              variants={cardVariants}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                y: -10,
                transition: { type: "spring", stiffness: 300 }
              }}
            >
              <Card className="group rounded-2xl border border-gray-200 hover:shadow-2xl transition-all duration-300 overflow-hidden h-full">
                <CardContent className="p-6">
                  {/* Top Icon with Animation */}
                  <motion.div
                    className={`w-14 h-14 rounded-full flex items-center justify-center mb-4 ${iconColors[item.color as keyof typeof iconColors]}`}
                    whileHover={{ 
                      rotate: 360,
                      transition: { duration: 0.6 }
                    }}
                  >
                    {item.icon === "briefcase" && <BriefcaseBusiness size={24} />}
                    {item.icon === "globe" && <Globe2 size={24} />}
                    {item.icon === "users" && <UsersRound size={24} />}
                    {item.icon === "factory" && <Factory size={24} />}
                  </motion.div>

                  {/* Content + Large Image */}
                  <div className="flex items-start gap-4">
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-lg leading-6">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                        {item.text}
                      </p>
                      <motion.div
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <Link
                          to={item.link}
                          className="inline-flex items-center gap-1 mt-4 text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors"
                        >
                          {item.cta}
                        </Link>
                      </motion.div>
                    </div>
                    <motion.div 
                      className="flex-shrink-0 w-40 h-48 relative"
                      variants={imageVariants}
                      whileHover="hover"
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-contain"
                      />
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Benefits() {
  const benefitVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  };

  return (
    <section className="bg-white pt-[16px] pb-[34px]">
      <div className="mx-auto w-full max-w-[95%] 2xl:max-w-[1600px] px-4 lg:px-6">
        <motion.div 
          className="mb-[22px] text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-[24px] text-[#14253b] font-bold">Why AECCI Global Deal Room?</h2>
        </motion.div>
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-[25px]">
          {benefits.map(([iconName, title, text], index) => {
            const Icon = (Icons as any)[iconName] || CircleCheckBig;
            return (
              <motion.div 
                key={title} 
                className="text-center"
                initial="hidden"
                animate="visible"
                variants={benefitVariants}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ 
                  y: -5,
                  transition: { type: "spring", stiffness: 300 }
                }}
              >
                <motion.div 
                  className="mx-auto mb-[10px] flex h-[54px] w-[54px] items-center justify-center rounded-full bg-[#eef5f8] text-[#117f9a]"
                  whileHover={{ 
                    rotate: 360,
                    backgroundColor: "#117f9a",
                    color: "white",
                    transition: { duration: 0.6 }
                  }}
                >
                  <Icon size={28} />
                </motion.div>
                <h3 className="mb-[6px] text-[13px] font-bold">{title}</h3>
                <p className="m-0 text-[10px] leading-[1.5] text-[#6f7c8b]">{text}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Plans() {
  const planVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="bg-gradient-to-br from-[#051322] to-[#061a2d] text-white py-[24px] pb-[28px]" id="plans">
      <div className="mx-auto w-full max-w-[95%] 2xl:max-w-[1600px] px-4 lg:px-6">
        <motion.div 
          className="mb-[22px] text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-[24px] text-white font-bold">Access Plans & Memberships</h2>
          <p className="mt-[7px] text-[12px] text-[#8ea0b5]">Choose the right plan to grow your global business.</p>
        </motion.div>
        <div className="mx-auto grid max-w-[1260px] grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[18px]">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial="hidden"
              animate="visible"
              variants={planVariants}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.03,
                transition: { type: "spring", stiffness: 300 }
              }}
            >
              <Card 
                className={`relative min-h-[205px] overflow-visible border ${plan.border} bg-gradient-to-b from-[#112a43]/80 to-[#041221]/90 p-[16px_18px] text-white ${plan.shadow} rounded-[10px]`}
              >
                {plan.recommended && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <Badge className="absolute left-1/2 top-[-11px] -translate-x-1/2 whitespace-nowrap bg-[#14ad6e] px-[10px] py-[4px] text-[8px] font-extrabold hover:bg-[#14ad6e] text-white">
                      MOST POPULAR
                    </Badge>
                  </motion.div>
                )}
                <CardContent className="p-0">
                  <h3 className="mb-[8px] text-center text-[11px] font-bold tracking-[0.06em] text-[#ced8e4] uppercase">
                    {plan.name}
                  </h3>
                  <div className="mb-[12px] text-center text-[20px] font-extrabold">
                    {plan.price} <small className="text-[9px] font-medium text-[#9aa8b7]">{plan.cadence}</small>
                  </div>
                  <ul className="m-0 mb-[16px] p-0 list-none">
                    {plan.features.map((f) => (
                      <motion.li 
                        key={f} 
                        className="my-[7px] flex items-center gap-[7px] text-[10px] text-[#d8e1eb]"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
                      >
                        <Check size={15} className="text-[#22d98b]" />
                        {f}
                      </motion.li>
                    ))}
                  </ul>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button asChild variant="outline" className="w-full h-auto p-[9px] border-current bg-transparent text-[10px] font-extrabold text-[#e1e9f2] hover:bg-white/10 hover:text-white rounded-[5px]">
                      <Link to={plan.link}>{plan.cta} →</Link>
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const steps: [React.ComponentType<{ size?: number | string }>, string, string][] = [
  [BadgeCheck, "Register", "Create your profile"],
  [Rocket, "Connect", "Join Deal Rooms"],
  [UsersRound, "Collaborate", "Build strong relationships"],
  [TrendingUp, "Grow", "Expand globally together"]
];

function Journey() {
  return (
    <section className="bg-gradient-to-r from-[#e8a929] to-[#ffc857] text-[#192130] py-[15px]">
      <div className="mx-auto w-full max-w-[95%] 2xl:max-w-[1600px] px-4 lg:px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-[18px] lg:gap-0 w-full overflow-auto lg:overflow-visible">
          <motion.div 
            className="rounded-[8px] bg-[#0d253c] p-[11px_18px] text-[13px] text-white"
            whileHover={{ scale: 1.05 }}
          >
            <strong>Your Global Business<br />Journey Starts Here!</strong>
          </motion.div>
          {steps.map(([Icon, title, text], index) => (
            <React.Fragment key={title as string}>
              <motion.div 
                className="flex items-center gap-[8px]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
              >
                <Icon size={23} />
                <span>
                  <b className="block text-[11px]">{title}</b>
                  <small className="block text-[8px]">{text}</small>
                </span>
              </motion.div>
              {index < steps.length - 1 && (
                <motion.span 
                  className="hidden lg:block text-[20px]"
                  animate={{ 
                    x: [0, 10, 0],
                  }}
                  transition={{ 
                    duration: 1,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                >
                  →
                </motion.span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function LandingPage() {
  return (
    <div className="font-sans text-[#0c1a2c] bg-white">
      <main>
        <Hero />
        <Audience />
        <Benefits />
        <Plans />
        <Journey />
      </main>
    </div>
  );
}