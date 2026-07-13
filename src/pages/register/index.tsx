import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/portal/Footer";
import { motion, type Variants } from 'framer-motion';
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  CalendarDays,
  ChevronRight,
  Compass,
  Eye,
  Gem,
  Globe,
  Handshake,
  Infinity as InfinityIcon,
  MessageSquare,
  Play,
  Rocket,
  Shield,
  Sparkles,
  Star,
  TrendingUp,
  UserRound,
  Users,
  Users as UsersIcon2
} from 'lucide-react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// ============================================
// ANIMATION VARIANTS
// ============================================
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      type: "spring",
      damping: 20,
      stiffness: 100
    }
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.3
    }
  }
};

// ============================================
// HERO SECTION
// ============================================
const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#071B38] via-[#0A2540] to-[#0F2C5F] min-h-[90vh] flex items-center">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }} />
      
      <div className="relative max-w-7xl mx-auto px-6 w-full py-3 md:py-7 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              variants = {fadeUp}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-4 py-1.5 mb-6"
              whileHover={{ 
                scale: 1.05, 
                borderColor: 'rgba(245, 185, 66, 0.3)',
              }}
            >
              <motion.div
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                <Sparkles className="w-4 h-4 text-[#F5B942]" />
              </motion.div>
              <span className="text-white/80 text-sm font-medium tracking-wider">GLOBAL TRADE NETWORK</span>
            </motion.div>

            <motion.h1 
              variants={fadeUp}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white"
            >
              Choose Your Role &<br />
              <motion.span 
                className="inline-block"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{
                  backgroundImage: 'linear-gradient(90deg, #F5B942, #FBBF24, #F59E0B, #F5B942)',
                  backgroundSize: '300% 100%',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                Unlock Global Opportunities
              </motion.span>
            </motion.h1>

            <motion.p 
              variants={fadeUp}
              className="mt-6 text-lg text-white/70 max-w-xl leading-relaxed"
            >
              Select your role to discover how AECCI Global Deal Room can help you connect, collaborate & grow globally.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-10 flex flex-wrap gap-4"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
            </motion.div>
  
            </motion.div>
          </motion.div>

          {/* Right Side - Visual */}
          <motion.div
            className="relative flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-full max-w-[500px] aspect-square">
              {/* Rotating Rings */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              >
                <div className="w-[90%] h-[90%] rounded-full border border-[#2563EB]/20" />
              </motion.div>
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              >
                <div className="w-[70%] h-[70%] rounded-full border border-[#22C55E]/20" />
              </motion.div>
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <div className="w-[50%] h-[50%] rounded-full border border-[#F59E0B]/20" />
              </motion.div>

              {/* Glowing Nodes */}
              {[
                { x: 80, y: 80, color: '#2563EB', delay: 0 },
                { x: 320, y: 80, color: '#22C55E', delay: 0.5 },
                { x: 80, y: 320, color: '#F59E0B', delay: 1 },
                { x: 320, y: 320, color: '#8B5CF6', delay: 1.5 },
              ].map((node, index) => (
                <motion.div
                  key={index}
                  className="absolute"
                  style={{
                    left: `${(node.x / 400) * 100}%`,
                    top: `${(node.y / 400) * 100}%`,
                  }}
                >
                  <motion.div
                    className="relative"
                    animate={{
                      scale: [1, 1.5, 1],
                    }}
                    transition={{
                      duration: 2,
                      delay: node.delay,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                  >
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{
                        backgroundColor: node.color,
                        boxShadow: `0 0 30px ${node.color}80`
                      }}
                    />
                  </motion.div>
                </motion.div>
              ))}

              {/* Center Core */}
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                animate={{
                  scale: [1, 1.3, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                <div className="w-24 h-24 rounded-full bg-gradient-to-r from-[#2563EB] via-[#22C55E] to-[#F59E0B] opacity-20 blur-2xl" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/20 blur-xl" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// ============================================
// ROLE CARDS SECTION - BLACK BOX STYLE
// ============================================
const roles = [
  {
    icon: Handshake,
    color: 'text-emerald-400',
    iconBg: 'bg-emerald-500/20',
    title: 'Collaboration Partner',
    desc: 'For organizations, chambers, institutions & businesses who want to collaborate with AECCI globally.',
    button: 'Register as Partner',
    link: '/partner/register',
    gradient: 'from-emerald-500 to-emerald-600'
  },
  {
    icon: Users,
    color: 'text-purple-400',
    iconBg: 'bg-purple-500/20',
    title: 'Participant',
    desc: 'For businesses, exporters & professionals who want to participate in deal rooms and grow globally.',
    button: 'Register as Participant',
    link: '/signup',
    gradient: 'from-purple-500 to-purple-600'
  },
  {
    icon: Globe,
    color: 'text-blue-400',
    iconBg: 'bg-blue-500/20',
    title: 'Importer',
    desc: 'For global importers looking to connect with verified Indian exporters through deal rooms.',
    button: 'Register as Importer',
    link: '/importer/register',
    gradient: 'from-blue-500 to-blue-600'
  },
  {
    icon: UserRound,
    color: 'text-amber-400',
    iconBg: 'bg-amber-500/20',
    title: 'Intending Agent',
    desc: 'For trade agents, brokers & representatives who want to explore business opportunities in India.',
    button: 'Register as Agent',
    link: '/signup',
    gradient: 'from-amber-500 to-amber-600'
  }
];

const RoleCards: React.FC = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-gray-100 text-gray-600 px-4 py-2 rounded-full text-sm font-medium mb-4"
            whileHover={{ scale: 1.05 }}
          >
            <Star className="w-4 h-4 text-[#F5B942]" />
            How It Works
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Choose Your Role</h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {roles.map((role, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              whileHover={{
                y: -8,
                scale: 1.02,
                transition: { type: "spring", stiffness: 300, damping: 20 }
              }}
              className="bg-black rounded-2xl p-6 shadow-2xl transition-all duration-500 border border-white/10 hover:border-white/20 group relative overflow-hidden"
            >
              {/* Subtle Glow on Hover */}
              <motion.div
                className={`absolute inset-0 ${role.iconBg} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />
              
              <motion.div
                className={`w-14 h-14 rounded-full ${role.iconBg} flex items-center justify-center mb-4 relative`}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <role.icon className={`w-7 h-7 ${role.color}`} />
              </motion.div>
              
              <h3 className="text-xl font-bold text-white mb-2">{role.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-5 flex-grow">{role.desc}</p>
              
              <Link 
                to={role.link} 
                className={`inline-flex items-center gap-2 text-sm font-semibold ${role.color} hover:opacity-80 transition group`}
              >
                {role.button}
                <motion.span
                  className="inline-block"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ChevronRight className="w-4 h-4" />
                </motion.span>
              </Link>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

// ============================================
// VIDEO & BENEFITS SECTION
// ============================================
const benefits = [
  { 
    icon: Eye, 
    title: 'Global Visibility', 
    desc: 'Get featured on AECCI platform as a verified global exporter partner.'
  },
  { 
    icon: UsersIcon2, 
    title: 'Business Networking', 
    desc: 'Connect with Indian exporters, manufacturers & businesses.'
  },
  { 
    icon: MessageSquare, 
    title: 'Knowledge Exchange', 
    desc: 'Participate in monthly sessions, forums & networking events.'
  },
  { 
    icon: CalendarDays, 
    title: 'Event Participation', 
    desc: 'Invite to AECCI global events, seminars & networking forums.'
  }
];

const VideoAndBenefits: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="py-20 bg-gray-50/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 text-xs font-semibold px-3 py-1 rounded-full mb-3 border border-emerald-200"
              whileHover={{ scale: 1.05 }}
            >
              <Star className="w-3 h-3" />
              YOU SELECTED
            </motion.div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Collaboration Partner</h2>

            <motion.div
              className="relative rounded-2xl overflow-hidden shadow-xl bg-gray-900 aspect-video group cursor-pointer"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <img
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&h=450&fit=crop"
                alt="Video thumbnail"
                className="w-full h-full object-cover opacity-70"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-center justify-center">
                <motion.div
                  className="w-20 h-20 rounded-full bg-[#F5B942] flex items-center justify-center shadow-2xl shadow-[#F5B942]/30"
                  whileHover={{ scale: 1.1 }}
                  animate={{
                    scale: isHovered ? 1.1 : 1,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <Play className="w-8 h-8 text-[#071B38] ml-1" />
                </motion.div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-white font-semibold text-lg">AECCI Global Deal Room Collaboration Partner Program Overview</p>
                <span className="text-white/60 text-sm">03:20</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Gem className="w-6 h-6 text-emerald-500" />
              Key Benefits Collaboration Partner
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl p-4 hover:shadow-lg transition-all duration-300 border border-gray-100"
                  whileHover={{ 
                    y: -6, 
                    scale: 1.02,
                    transition: { type: "spring", stiffness: 300 }
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center mb-2">
                    <benefit.icon className="w-5 h-5 text-emerald-600" />
                  </div>
                  <h4 className="font-semibold text-gray-800 text-sm">{benefit.title}</h4>
                  <p className="text-gray-500 text-xs mt-1 leading-relaxed">{benefit.desc}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="mt-6 bg-emerald-50 rounded-xl p-5 border border-emerald-200"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              whileHover={{ scale: 1.02 }}
            >
              <p className="text-emerald-800 text-sm font-medium flex items-start gap-3">
                <InfinityIcon className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                Be a bridge between Indian businesses and your global market. Together, we create new business opportunities.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

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
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-block mb-4"
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          >
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 flex items-center justify-center shadow-lg shadow-emerald-500/20">
              <Compass className="w-8 h-8 text-white" />
            </div>
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Your Journey with AECCI</h2>
          <p className="text-gray-600 mt-2">5 simple steps to global success</p>
        </motion.div>

        <div className="relative">
          <div className="hidden md:block">
            <div className="flex justify-between items-start relative">
              <div className="absolute top-6 left-0 right-0 h-0.5 bg-gray-200" />

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
                    className="w-14 h-14 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 text-white flex items-center justify-center text-lg font-bold shadow-lg shadow-emerald-500/20 z-10"
                    whileHover={{ 
                      scale: 1.3, 
                      rotate: 360,
                      transition: { duration: 0.6 }
                    }}
                  >
                    {step.number}
                  </motion.div>
                  <motion.div
                    className="mt-4 text-center"
                    whileHover={{ y: -4 }}
                  >
                    <div className="flex items-center justify-center gap-2 mb-1">
                      <step.icon className="w-4 h-4 text-emerald-500" />
                      <h4 className="font-bold text-gray-800 text-sm">{step.title}</h4>
                    </div>
                    <p className="text-gray-500 text-xs max-w-[80px] mt-1 leading-relaxed">{step.desc}</p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="md:hidden space-y-8">
            {journeySteps.map((step, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-4"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex flex-col items-center">
                  <motion.div
                    className="w-12 h-12 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 text-white flex items-center justify-center text-sm font-bold shadow-lg shadow-emerald-500/20"
                    whileHover={{ scale: 1.2 }}
                  >
                    {step.number}
                  </motion.div>
                  {index < journeySteps.length - 1 && (
                    <div className="w-0.5 h-10 bg-gray-200 my-1" />
                  )}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <step.icon className="w-4 h-4 text-emerald-500" />
                    <h4 className="font-bold text-gray-800">{step.title}</h4>
                  </div>
                  <p className="text-gray-500 text-sm">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          className="text-center mt-16"
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
              className="inline-flex items-center gap-3 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-semibold px-10 py-4 rounded-full transition-all shadow-xl shadow-emerald-500/30 hover:shadow-emerald-500/50 text-lg relative overflow-hidden group"
            >
              <Sparkles className="w-5 h-5" />
              Register Now & Get Started
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// ============================================
// JOURNEY BANNER
// ============================================
const steps: [React.ComponentType<{ size?: number | string }>, string, string][] = [
  [BadgeCheck, "Register", "Create your profile"],
  [Rocket, "Connect", "Join Deal Rooms"],
  [Users, "Collaborate", "Build strong relationships"],
  [TrendingUp, "Grow", "Expand globally together"]
];

function Journey() {
  return (
    <section className="bg-gradient-to-r from-[#e8a929] to-[#ffc857] text-[#192130] py-[15px]">
      <div className="mx-auto w-full max-w-7xl px-6">
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
// MAIN LANDING PAGE
// ============================================
export default function LandingPage() {
  return (
    <div className="font-sans text-[#0c1a2c] bg-white selection:bg-emerald-500/20">
      <Navbar />
      <main>
        <Hero />
        <RoleCards />
        <VideoAndBenefits />
        <JourneyTimeline />
        <Journey /> 
      </main>
      <Footer />
    </div>
  );
}