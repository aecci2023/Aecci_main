import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatePresence, motion } from "framer-motion";
import type { Variants } from "framer-motion";
import * as Icons from "lucide-react";
import {
  ArrowRight,
  Award,
  BadgeCheck,
  BarChart3,
  Briefcase,
  BriefcaseBusiness,
  Building2,
  CalendarDays,
  Check,
  CircleCheckBig,
  Clock,
  Compass,
  Eye,
  Factory,
  FileText,
  Globe,
  Globe2,
  Handshake,
  Lightbulb,
  MessageSquare,
  Network,
  PhoneCall,
  Play,
  Rocket,
  Search,
  Shield,
  Sparkles,
  TrendingUp,
  Truck,
  UserRound,
  Users,
  Users as UsersIcon2,
  UsersRound,
  X
} from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

// ============================================
// AUDIENCE CARDS DATA - REORDERED
// 1. Indian Exporters / Manufacturers
// 2. International Collaborators
// 3. Intending Agents / Representatives
// 4. Global Buyers / Importers
// ============================================
export const audienceCards = [
  {
    title: "Indian Exporters / Manufacturers",
    text: "Expand your business internationally and reach global markets.",
    cta: "Join as Exporter →",
    link: "#",
    tone: "text-amber-500",
    icon: "factory",
    image: "/images/exporter.png",
    color: "amber",
    role: "participant" as const,
    bgGradient: "from-amber-50/40 via-amber-50/10 to-white hover:from-amber-50/70 hover:to-white",
    borderColor: "border-amber-100/60 hover:border-amber-300/40",
    iconBg: "bg-amber-600 text-white",
    shadowGlow: "hover:shadow-[0_15px_30px_rgba(245,158,11,0.1)]",
    ctaColor: "text-amber-600 hover:text-amber-800"
  },
  {
    title: "Intending Agents / Representatives",
    text: "Represent your country and connect business opportunities with India.",
    cta: "Join as Agent →",
    link: "#",
    tone: "text-emerald-600",
    icon: "globe",
    image: "/images/agent.png",
    color: "emerald",
    role: "agent" as const,
    bgGradient: "from-emerald-50/40 via-emerald-50/10 to-white hover:from-emerald-50/70 hover:to-white",
    borderColor: "border-emerald-100/60 hover:border-emerald-300/40",
    iconBg: "bg-emerald-700 text-white",
    shadowGlow: "hover:shadow-[0_15px_30px_rgba(16,185,129,0.1)]",
    ctaColor: "text-emerald-600 hover:text-emerald-800"
  },
  {
    title: "International Collaborators",
    text: "Share expertise, provide market insights and expand your global network.",
    cta: "Join as Collaborator →",
    link: "#",
    tone: "text-purple-600",
    icon: "users",
    image: "/images/collaborator.png",
    color: "purple",
    role: "partner" as const,
    bgGradient: "from-purple-50/40 via-purple-50/10 to-white hover:from-purple-50/70 hover:to-white",
    borderColor: "border-purple-100/60 hover:border-purple-300/40",
    iconBg: "bg-purple-800 text-white",
    shadowGlow: "hover:shadow-[0_15px_30px_rgba(139,92,246,0.1)]",
    ctaColor: "text-purple-600 hover:text-purple-800"
  },
  {
    title: "Global Buyers / Importers",
    text: "Source quality Indian products and connect with verified exporters.",
    cta: "Join as Buyer →",
    link: "#",
    tone: "text-blue-600",
    icon: "briefcase",
    image: "/images/buyer.png",
    color: "blue",
    role: "importer" as const,
    bgGradient: "from-blue-50/40 via-blue-50/10 to-white hover:from-blue-50/70 hover:to-white",
    borderColor: "border-blue-100/60 hover:border-blue-300/40",
    iconBg: "bg-blue-900 text-white",
    shadowGlow: "hover:shadow-[0_15px_30px_rgba(37,99,235,0.1)]",
    ctaColor: "text-blue-600 hover:text-blue-800"
  }
];

// ============================================
// COLLABORATION PARTNER DATA
// ============================================
const collaborationPartnerBenefits = [
  {
    icon: Eye,
    title: 'Global Visibility',
    desc: 'Showcase your business to verified buyers, investors and partners across international markets.'
  },
  {
    icon: UsersIcon2,
    title: 'Business Matchmaking',
    desc: 'Connect with the right businesses through curated B2B introductions and meaningful business opportunities.'
  },
  {
    icon: MessageSquare,
    title: 'Knowledge Sharing',
    desc: 'Gain market insights, trade intelligence and expert guidance to support informed business decisions.'
  },
  {
    icon: CalendarDays,
    title: 'Strategic Partnerships',
    desc: 'Build long-term collaborations with global businesses, distributors, investors and industry partners.'
  }
];

const participantBenefits = [
  {
    icon: Award,
    title: 'Market Intelligence',
    desc: 'Access industry insights, emerging market trends and international business opportunities.'
  },
  {
    icon: Network,
    title: 'Business Introductions',
    desc: 'Get connected with verified buyers, sellers, investors and strategic business partners.'
  },
  {
    icon: Lightbulb,
    title: 'Growth Guidance',
    desc: 'Receive expert guidance to identify opportunities and support your business expansion goals.'
  },
  {
    icon: BarChart3,
    title: 'Trade Support',
    desc: 'Benefit from assistance with cross-border trade, documentation, compliance and market entry.'
  }
];

const importerBenefits = [
  {
    icon: Search,
    title: 'Exporter Access',
    desc: 'Connect with verified Indian exporters across diverse industries.'
  },
  {
    icon: Truck,
    title: 'Sourcing Opportunities',
    desc: 'Discover reliable suppliers and sourcing opportunities tailored to your business needs.'
  },
  {
    icon: Shield,
    title: 'Trade Guidance',
    desc: 'Receive expert guidance on international trade, procurement and market practices.'
  },
  {
    icon: TrendingUp,
    title: 'B2B Meetings',
    desc: 'Participate in curated country-focused meetings to build valuable business relationships.'
  }
];

const agentBenefits = [
  {
    icon: Briefcase,
    title: 'Business Network Access',
    desc: 'Connect with a diverse network of businesses seeking trusted representatives and partners.'
  },
  {
    icon: PhoneCall,
    title: 'Trade Opportunities',
    desc: 'Discover new opportunities to represent products, services and international businesses.'
  },
  {
    icon: FileText,
    title: 'International Connections',
    desc: 'Build meaningful relationships with exporters, importers, buyers and global stakeholders.'
  },
  {
    icon: Clock,
    title: 'Professional Growth',
    desc: 'Expand your professional reach and establish your presence in international markets.'
  }
];

interface RoleDetailsProps {
  isVisible: boolean;
  role: 'partner' | 'participant' | 'importer' | 'agent';
  onClose: () => void;
}

// ============================================
// PLANS DATA - UPDATED FROM IMAGE
// ============================================
export const plans = [
  {
    name: "Discovery Pass",
    subtitle: "For fast line options",
    features: ["1 Dead Bonus Working", "30+ Minutes Meeting", "Basic Profile Access", "Post-Meeting Summary"],
    cta: "View Details",
    link: "/interest-form",
    border: "border-blue-500",
    shadow: "",
    description: "Explore global opportunities with basic access and access."
  },
  {
    name: "Buyer Growth Access",
    subtitle: "For growing locations",
    features: ["1 Dead Bonus Meetings", "Priority Scheduling", "Requirement Bookdating", "Internet Exchanges"],
    cta: "View Details",
    link: "/interest-form",
    border: "border-emerald-500",
    recommended: true,
    shadow: "shadow-[0_0_0_2px_rgba(25,208,130,0.12),0_12px_30px_rgba(0,0,0,0.2)]",
    description: "Expand your network and content with more opportunities."
  },
  {
    name: "Buyer Enterprise Access",
    subtitle: "For trusted global options",
    features: ["20 Dead Bonus Meetings", "Dedicated Support", "Private Routedlines", "Priority Introductions"],
    cta: "View Details",
    link: "/interest-form",
    border: "border-purple-500",
    shadow: "",
    description: "Abundant access with dedicated support and priority introductions."
  },
  {
    name: "Custom Enterprise",
    subtitle: "For large organizations",
    features: ["Tailored Solutions", "Dedicated Account Manager", "Private Events", "Premium Branding"],
    cta: "Contact AADC",
    link: "/interest-form",
    border: "border-amber-500",
    shadow: "",
    description: "Tailored solutions for your unique business and team needs."
  }
];

// ============================================
// ROLE DETAILS COMPONENT - WITH 4 DIFFERENT VIDEOS
// ============================================
const RoleDetails: React.FC<RoleDetailsProps> = ({ isVisible, role, onClose }) => {
  const detailsRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (isVisible && detailsRef.current) {
      setTimeout(() => {
        detailsRef.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }, 300);
    }
  }, [isVisible]);

  const handlePlayVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const getRoleData = () => {
    switch (role) {
      case 'partner':
        return {
          title: 'International Collaborators',
          subtitle: 'AECCI Global Deal Room Collaboration Partner Program Overview',
          duration: '03:20',
          icon: Handshake,
          benefits: collaborationPartnerBenefits,
          gradient: 'from-emerald-500 to-emerald-600',
          bgColor: 'bg-emerald-50',
          borderColor: 'border-emerald-200',
          textColor: 'text-emerald-700',
          iconColor: 'text-emerald-600',
          registerText: 'Register as Collaborators',
          tagline: 'Be a bridge between Indian businesses and your global market. Together, we create new business opportunities.',
          badgeBg: 'bg-emerald-100',
          badgeText: 'text-emerald-700',
          videoSrc: '/src/assets/videos/partner-overview.mp4',
          posterSrc: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&h=450&fit=crop'
        };
      case 'participant':
        return {
          title: 'Indian Exporters / Manufacturers',
          subtitle: 'AECCI Global Deal Room Participant Program Overview',
          duration: '02:45',
          icon: Users,
          benefits: participantBenefits,
          gradient: 'from-purple-500 to-purple-600',
          bgColor: 'bg-purple-50',
          borderColor: 'border-purple-200',
          textColor: 'text-purple-700',
          iconColor: 'text-purple-600',
          registerText: 'Register as Exporters ',
          tagline: 'Join the global trade ecosystem and unlock new opportunities for your business.',
          badgeBg: 'bg-purple-100',
          badgeText: 'text-purple-700',
          videoSrc: '/src/assets/videos/participant-overview.mp4',
          posterSrc: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=450&fit=crop'
        };
      case 'importer':
        return {
          title: 'Global Buyers / Importers',
          subtitle: 'AECCI Global Deal Room Importer Program Overview',
          duration: '02:30',
          icon: Globe,
          benefits: importerBenefits,
          gradient: 'from-blue-500 to-blue-600',
          bgColor: 'bg-blue-50',
          borderColor: 'border-blue-200',
          textColor: 'text-blue-700',
          iconColor: 'text-blue-600',
          registerText: 'Register as Importer',
          tagline: 'Connect with verified Indian exporters and access quality products from India.',
          badgeBg: 'bg-blue-100',
          badgeText: 'text-blue-700',
          videoSrc: '/src/assets/videos/importer-overview.mp4',
          posterSrc: 'https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=800&h=450&fit=crop'
        };
      case 'agent':
        return {
          title: 'Intending Agents / Representatives',
          subtitle: 'AECCI Global Deal Room Agent Program Overview',
          duration: '02:15',
          icon: UserRound,
          benefits: agentBenefits,
          gradient: 'from-amber-500 to-amber-600',
          bgColor: 'bg-amber-50',
          borderColor: 'border-amber-200',
          textColor: 'text-amber-700',
          iconColor: 'text-amber-600',
          registerText: 'Register as Agent',
          tagline: 'Explore business opportunities in India and connect with manufacturers & exporters.',
          badgeBg: 'bg-amber-100',
          badgeText: 'text-amber-700',
          videoSrc: '/src/assets/videos/globalroomwork_v2.mp4',
          posterSrc: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=450&fit=crop'
        };
      default:
        return {
          title: '',
          subtitle: '',
          duration: '',
          icon: Users,
          benefits: [],
          gradient: '',
          bgColor: '',
          borderColor: '',
          textColor: '',
          iconColor: '',
          registerText: '',
          tagline: '',
          badgeBg: '',
          badgeText: '',
          videoSrc: '',
          posterSrc: ''
        };
    }
  };

  const roleData = getRoleData();

  const planVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          ref={detailsRef}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="bg-white py-8 border-t border-gray-100 relative"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors z-10"
          >
            <X size={20} className="text-gray-500 hover:text-gray-700" />
          </button>
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="mb-6"
            >
              <div className="inline-flex items-center gap-3">
                <span className={`text-xs font-semibold ${roleData.badgeBg} ${roleData.badgeText} px-3 py-1 rounded-full border ${roleData.borderColor}`}>
                  YOU SELECTED
                </span>
                <h2 className={`text-xl font-bold ${roleData.textColor}`}>
                  {roleData.title}
                </h2>
              </div>
            </motion.div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="space-y-4"
              >
                {roleData.benefits.map((benefit, index) => {
                  const BenefitIcon = benefit.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <div className={`w-8 h-8 rounded-full ${roleData.bgColor} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                        <BenefitIcon className={`w-4 h-4 ${roleData.iconColor}`} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 text-sm">
                          {benefit.title}
                        </h3>
                        <p className="text-gray-600 text-xs leading-relaxed">
                          {benefit.desc}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="space-y-4"
              >
                <div className="relative rounded-xl overflow-hidden shadow-lg bg-gradient-to-br from-gray-900 to-gray-800 aspect-video group">
                  <video
                    ref={videoRef}
                    src={roleData.videoSrc}
                    className="w-full h-full object-cover"
                    poster={roleData.posterSrc}
                    playsInline
                    preload="metadata"
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                    onEnded={() => setIsPlaying(false)}
                  />
                  {!isPlaying && (
                    <>
                      <div className="absolute inset-0 bg-black/40" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <motion.div
                          className="w-14 h-14 rounded-full bg-[#F5B942] flex items-center justify-center shadow-2xl shadow-[#F5B942]/30 cursor-pointer"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={handlePlayVideo}
                          animate={{
                            scale: [1, 1.05, 1],
                          }}
                          transition={{
                            scale: {
                              duration: 2,
                              repeat: Infinity,
                              repeatType: "reverse"
                            }
                          }}
                        >
                          <Play className="w-6 h-6 text-gray-900 ml-1" />
                        </motion.div>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
                        <p className="text-white font-medium text-sm">
                          {roleData.subtitle}
                        </p>
                        <span className="text-white/60 text-xs">
                          {roleData.duration}
                        </span>
                      </div>
                    </>
                  )}
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className={`${roleData.bgColor} rounded-lg p-3 border ${roleData.borderColor}`}
                >
                  <p className={`${roleData.textColor} text-sm font-medium flex items-start gap-2`}>
                    <span className={`${roleData.iconColor} text-lg`}>✦</span>
                    {roleData.tagline}
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Link
                      to="/interest-form"
                      className={`inline-flex items-center justify-center gap-2 w-full bg-gradient-to-r ${roleData.gradient} hover:opacity-90 text-white font-semibold px-6 py-3 rounded-xl transition-all shadow-lg shadow-emerald-500/20 text-sm relative overflow-hidden group`}
                    >
                      <span>{roleData.registerText}</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
            <motion.div
              id="access-plans-section"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="mt-12 pt-8 border-t border-gray-200 scroll-mt-16"
            >
              <motion.div
                className="mb-6 text-center"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
              >
                <h2 className="text-[24px] text-[#14253b] font-bold">Access Plans & Memberships</h2>
                <p className="mt-[7px] text-[12px] text-[#6f7c8b]">Choose the right plan to grow your global business.</p>
              </motion.div>
              <div className="mx-auto grid max-w-[1260px] grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[18px]">
                {plans.map((plan, index) => (
                  <motion.div
                    key={plan.name}
                    initial="hidden"
                    animate="visible"
                    variants={planVariants}
                    transition={{ duration: 0.5, delay: 1.0 + index * 0.1 }}
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
                          transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                        >
                          <Badge className="absolute left-1/2 top-[-11px] -translate-x-1/2 whitespace-nowrap bg-[#14ad6e] px-[10px] py-[4px] text-[8px] font-extrabold hover:bg-[#14ad6e] text-white">
                            MOST POPULAR
                          </Badge>
                        </motion.div>
                      )}
                      <CardContent className="p-0">
                        <h3 className="mb-[4px] text-center text-[11px] font-bold tracking-[0.06em] text-[#ced8e4] uppercase">
                          {plan.name}
                        </h3>
                        {plan.subtitle && (
                          <p className="text-center text-[8px] text-[#9aa8b7] mb-[6px]">
                            {plan.subtitle}
                          </p>
                        )}
                        {plan.description && (
                          <p className="text-center text-[7px] text-[#8a9aaa] mb-[8px] leading-relaxed px-1">
                            {plan.description}
                          </p>
                        )}
                        <ul className="m-0 mb-[16px] p-0 list-none">
                          {plan.features.map((f) => (
                            <motion.li
                              key={f}
                              className="my-[7px] flex items-center gap-[7px] text-[10px] text-[#d8e1eb]"
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: 1.4 + index * 0.1 + 0.2 }}
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
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// ============================================
// AUDIENCE COMPONENT
// ============================================
interface AudienceProps {
  onRoleClick: (role: 'partner' | 'participant' | 'importer' | 'agent') => void;
}

function Audience({ onRoleClick }: AudienceProps) {
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
    hover: {
      y: -10,
      transition: { type: "spring", stiffness: 300, damping: 20 }
    }
  };

  const imageVariants = {
    hover: {
      scale: 1.06,
      y: -5,
      transition: {
        type: "spring" as const,
        stiffness: 300,
        damping: 20
      }
    }
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
              whileHover="hover"
            >
              <Card
                className={`group rounded-2xl border bg-gradient-to-br ${item.bgGradient} ${item.borderColor} ${item.shadowGlow} transition-all duration-300 overflow-hidden h-full cursor-pointer relative`}
                onClick={() => {
                  if (item.role) {
                    onRoleClick(item.role);
                  }
                }}
              >
                <CardContent className="p-5 pr-[115px] pb-6 flex flex-col justify-between h-full min-h-[190px]">
                  <div>
                    {/* Themed Circular Icon */}
                    <motion.div
                      className={`w-11 h-11 rounded-full flex items-center justify-center mb-4 shadow-sm ${item.iconBg}`}
                      whileHover={{
                        rotate: 360,
                        transition: { duration: 0.6 }
                      }}
                    >
                      {item.icon === "briefcase" && <BriefcaseBusiness size={20} />}
                      {item.icon === "globe" && <Globe2 size={20} />}
                      {item.icon === "users" && <UsersRound size={20} />}
                      {item.icon === "factory" && <Factory size={20} />}
                    </motion.div>

                    <h3 className="font-bold text-[#0A1A3A] text-base leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs text-gray-500 mt-2.5 leading-relaxed">
                      {item.text}
                    </p>
                  </div>

                  <motion.div
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                    className="mt-6 text-left relative z-20"
                  >
                    <span className={`inline-flex items-center gap-1.5 text-xs font-bold transition-colors ${item.ctaColor}`}>
                      {item.cta}
                    </span>
                  </motion.div>
                </CardContent>

                {/* Absolute Bottom-Right Image */}
                <motion.div
                  className="absolute bottom-0 right-0 w-[115px] h-[135px] pointer-events-none z-10"
                  variants={imageVariants}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-contain object-bottom"
                  />
                </motion.div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================
// BENEFITS COMPONENT
// ============================================
export const benefits = [
  ["ShieldCheck", "Trusted & Verified", "Screened businesses and verified partner profiles."],
  ["Target", "Structured Deal Rooms", "Focused sessions designed for practical outcomes."],
  ["ChartNoAxesCombined", "Business Intelligence", "Market insights and opportunity guidance."],
  ["Network", "Global Network", "Cross-border connections across multiple countries."],
  ["Headset", "Post-Meeting Support", "Follow-up assistance and relationship coordination."]
];

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

// ============================================
// JOURNEY TIMELINE
// ============================================
const journeySteps = [
  { number: '01', title: 'Register', desc: 'Choose your role and create your profile.', icon: Building2 },
  { number: '02', title: 'Verify', desc: 'Complete verification and onboarding.', icon: Shield },
  { number: '03', title: 'Access', desc: 'Access deal rooms, resources & networks.', icon: Rocket },
  { number: '04', title: 'Connect', desc: 'Connect with investors & explore opportunities.', icon: Users },
  { number: '05', title: 'Grow Globally', desc: 'Build partnerships and grow your business.', icon: TrendingUp }
];

const JourneyTimeline: React.FC = () => {
  return (
    <section className="py-12 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-block mb-3"
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          >
            <div className="w-14 h-14 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 flex items-center justify-center shadow-lg shadow-emerald-500/20">
              <Compass className="w-7 h-7 text-white" />
            </div>
          </motion.div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Your Journey with AECCI</h2>
          <p className="text-gray-600 text-sm mt-1">5 simple steps to global success</p>
        </motion.div>
        <div className="relative">
          <div className="hidden md:block">
            <div className="flex justify-between items-start relative">
              <div className="absolute top-5 left-0 right-0 h-0.5 bg-gray-200" />
              {journeySteps.map((step, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center flex-1 relative"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <motion.div
                    className="w-12 h-12 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 text-white flex items-center justify-center text-base font-bold shadow-lg shadow-emerald-500/20 z-10"
                    whileHover={{
                      scale: 1.3,
                      rotate: 360,
                      transition: { duration: 0.6 }
                    }}
                  >
                    {step.number}
                  </motion.div>
                  <motion.div
                    className="mt-3 text-center"
                    whileHover={{ y: -4 }}
                  >
                    <div className="flex items-center justify-center gap-1.5 mb-0.5">
                      <step.icon className="w-3 h-3 text-emerald-500" />
                      <h4 className="font-bold text-gray-800 text-xs">{step.title}</h4>
                    </div>
                    <p className="text-gray-500 text-[10px] max-w-[70px] leading-relaxed">{step.desc}</p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="md:hidden space-y-6">
            {journeySteps.map((step, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-3"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex flex-col items-center">
                  <motion.div
                    className="w-10 h-10 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 text-white flex items-center justify-center text-xs font-bold shadow-lg shadow-emerald-500/20"
                    whileHover={{ scale: 1.2 }}
                  >
                    {step.number}
                  </motion.div>
                  {index < journeySteps.length - 1 && (
                    <div className="w-0.5 h-8 bg-gray-200 my-1" />
                  )}
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <step.icon className="w-3 h-3 text-emerald-500" />
                    <h4 className="font-bold text-gray-800 text-sm">{step.title}</h4>
                  </div>
                  <p className="text-gray-500 text-xs">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Link
              to="/signup"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-semibold px-8 py-3 rounded-full transition-all shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 text-base relative overflow-hidden group"
            >
              <Sparkles className="w-4 h-4" />
              Register Now & Get Started
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// ============================================
// JOURNEY COMPONENT
// ============================================
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

// ============================================
// HERO COMPONENT
// ============================================
const metrics = [
  ["50+", "Countries"],
  ["5000+", "Businesses"],
  ["2500+", "Deal Rooms"],
  ["1500+", "Global Partners"]
];

function Hero({ onExploreClick }: { onExploreClick: () => void }) {
  return (
    <section
      className="relative overflow-hidden text-white bg-[#040D1A]"
      id="global-deal-room"
      style={{
        backgroundImage: "url('/login_earth_background.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'top right',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Dark overlay to ensure contrast */}
      <div className="absolute inset-0 bg-[#040d1a]/80 z-0" />

      <motion.div
        className="relative w-full h-[8px] mb-3 z-10"
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        {/* Animated Liquid Gold / Metallic Shine Line */}
        <motion.div
          className="absolute inset-0 w-full h-full rounded-full"
          style={{
            background: "linear-gradient(90deg, #d97706 0%, #fef3c7 25%, #fbbf24 50%, #fef3c7 75%, #d97706 100%)",
            backgroundSize: '200% 100%',
          }}
          animate={{ backgroundPosition: ['200% 0%', '0% 0%'] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        />
        {/* Glow Overlay with same animation */}
        <motion.div
          className="absolute inset-0 w-full h-full blur-[5px] opacity-70 rounded-full"
          style={{
            background: "linear-gradient(90deg, #d97706 0%, #fef3c7 25%, #fbbf24 50%, #fef3c7 75%, #d97706 100%)",
            backgroundSize: '200% 100%',
          }}
          animate={{ backgroundPosition: ['200% 0%', '0% 0%'] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        />
      </motion.div>

      <div className="mx-auto w-full max-w-[95%] 2xl:max-w-[1600px] px-4 lg:px-6 relative z-10">
        <div className="grid min-h-[420px] grid-cols-1 lg:grid-cols-[47%_53%] py-[20px] lg:pt-[36px] lg:pb-[16px]">
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
              and indenting agents in a trusted platform for meaningful business connections and long-term growth.
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
                  <Link to="/interest-form">Join AECCI Today →</Link>
                </Button>
              </motion.div>
              <Button onClick={onExploreClick} variant="outline" className="hidden lg:flex border-[#66809e] bg-[#061426]/64 text-white hover:bg-[#061426]/80 hover:text-white h-[42px] px-[20px] rounded-[6px] cursor-pointer">
                Explore Deal Room
              </Button>
            </div>
          </motion.div>
          <motion.div
            className="relative min-h-[340px] lg:min-h-[360px]"
            aria-hidden="true"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ perspective: 1200 }}
          >
            {/* 3D Animated Earth Sphere */}
            <motion.div
              className="absolute right-[30px] top-[-30px] w-[500px] h-[500px] rounded-full overflow-hidden z-10 hidden md:block"
              style={{
                backgroundImage: "url('/login_earth_background.png')",
                backgroundSize: '250% 250%',
                backgroundPosition: '12% 88%',
                boxShadow: "inset -40px -40px 80px rgba(0,0,0,0.85), inset 10px 10px 20px rgba(255,255,255,0.15), 0 0 50px rgba(34,118,235,0.2)",
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 160, repeat: Infinity, ease: "linear" }}
            />

            {/* Orbital gold network outline lines */}
            <div className="absolute top-[42px] right-[0px] h-[285px] w-[740px] -rotate-[18deg] rounded-full border border-amber-400/20 z-20" />
            <div className="absolute top-[120px] right-[0px] h-[285px] w-[740px] rotate-[14deg] rounded-full border border-amber-400/20 z-20" />
            <div className="absolute top-[205px] right-[0px] h-[285px] w-[740px] -rotate-[5deg] rounded-full border border-amber-400/20 z-20" />

            {/* 3D Tilt Metrics Card */}
            <motion.div
              className="absolute right-[80px] lg:right-[70px] top-[70px] z-30 w-[210px] rounded-[12px] border border-[#ffbe49]/35 bg-[#020d1a]/80 p-[22px_24px] backdrop-blur-[12px] shadow-[0_20px_40px_rgba(0,0,0,0.3)] cursor-default"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              whileHover={{
                rotateY: 15,
                rotateX: -10,
                scale: 1.05,
                z: 20,
                boxShadow: "0 25px 50px rgba(244, 179, 58, 0.25)"
              }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              style={{ transformStyle: "preserve-3d" }}
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
      <div className="h-[20px] translate-y-[1px] rounded-t-[55%_55%] lg:rounded-t-[55%_55%_0_0_/_100%_100%_0_0] bg-white relative z-20" />
    </section>
  );
}

// ============================================
// MAIN LANDING PAGE
// ============================================
export default function LandingPage() {
  const [selectedRole, setSelectedRole] = useState<'partner' | 'participant' | 'importer' | 'agent' | null>(null);

  const handleRoleClick = (role: 'partner' | 'participant' | 'importer' | 'agent') => {
    setSelectedRole(role);
  };

  const handleCloseRoleDetails = () => {
    setSelectedRole(null);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (selectedRole && !target.closest('.role-details-container')) {
        setSelectedRole(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [selectedRole]);

  const handleExploreClick = () => {
    setSelectedRole('participant');
    setTimeout(() => {
      const plansSection = document.getElementById('access-plans-section');
      if (plansSection) {
        plansSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 400);
  };

  return (
    <div className="font-sans text-[#0c1a2c] bg-white">
      <main>
        <Hero onExploreClick={handleExploreClick} />
        <Audience onRoleClick={handleRoleClick} />
        <div className="role-details-container">
          {selectedRole && (
            <RoleDetails
              isVisible={true}
              role={selectedRole}
              onClose={handleCloseRoleDetails}
            />
          )}
        </div>
        <Benefits />
        <JourneyTimeline />
        <Journey />
      </main>
    </div>
  );
}