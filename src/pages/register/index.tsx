import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/portal/Footer";
import { AnimatePresence, motion, type Variants } from 'framer-motion';
import {
  ArrowRight,
  Award,
  BadgeCheck,
  BarChart3,
  Briefcase,
  Building2,
  CalendarDays,
  ChevronDown,
  ChevronRight,
  Clock,
  Compass,
  Eye,
  FileText,
  Globe,
  Handshake,
  Infinity as InfinityIcon,
  Lightbulb,
  MessageSquare,
  Network,
  PhoneCall,
  Play,
  Rocket,
  Search,
  Shield,
  Sparkles,
  Star,
  TrendingUp,
  Truck,
  UserRound,
  Users,
  Users as UsersIcon2
} from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';
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
// FAQ COMPONENT - Without Category Filtering
// ============================================
interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'What is AECCI Global Deal Room?',
    answer: 'AECCI Global Deal Room is a premier B2B platform that connects Indian exporters with global buyers, importers, and business partners. It provides a trusted environment for meaningful business connections, trade facilitation, and international business growth.'
  },
  {
    id: 'faq-2',
    question: 'Who can join AECCI Global Deal Room?',
    answer: 'AECCI Global Deal Room is open to various stakeholders including: Global Buyers/Importers, Intending Agents/Representatives, International Collaborators, and Indian Exporters/Manufacturers. Each role has specific benefits and access levels tailored to their business needs.'
  },
  {
    id: 'faq-3',
    question: 'What are the membership plans available?',
    answer: 'We offer four membership plans: Discovery Pass (₹2,999/Meeting), Buyer Growth Access (₹14,999/Month), Buyer Enterprise Access (₹49,999/Quarter), and Custom Enterprise plans. Each plan comes with different features including deal room meetings, priority scheduling, and dedicated support.'
  },
  {
    id: 'faq-4',
    question: 'How do I register as a Collaboration Partner?',
    answer: 'To register as a Collaboration Partner, click on the "Register as Partner" button on our landing page. Fill in your organization details, business profile, and select the collaboration type. Our team will verify your application and activate your partnership within 48 hours.'
  },
  {
    id: 'faq-5',
    question: 'How do Deal Rooms work?',
    answer: 'Deal Rooms are structured B2B meeting sessions designed for practical outcomes. Each session includes: Pre-meeting preparation, 30-60 minute focused discussions, Post-meeting follow-up and support. Participants receive meeting summaries and connection details after each session.'
  },
  {
    id: 'faq-6',
    question: 'What is the process for joining a Deal Room?',
    answer: 'The process involves: 1. Register and choose your membership plan, 2. Complete your business profile, 3. Browse available Deal Rooms, 4. Schedule your preferred sessions, 5. Attend the virtual/offline meetings, 6. Receive post-meeting support and follow-ups.'
  },
  {
    id: 'faq-7',
    question: 'How does the verification process work?',
    answer: 'Our verification process includes: Business document verification, Profile validation, Background checks, and Quality assessment. This ensures that all participants are legitimate businesses and maintains the integrity of our platform.'
  },
  {
    id: 'faq-8',
    question: 'Why is verification important?',
    answer: 'Verification is crucial for: Building trust among participants, Ensuring business authenticity, Preventing fraud and scams, Maintaining platform quality, and Creating a secure environment for international trade.'
  },
  {
    id: 'faq-9',
    question: 'What kind of post-meeting support is available?',
    answer: 'We provide comprehensive post-meeting support including: Meeting summaries and notes, Connection introductions, Follow-up assistance, Relationship coordination, Trade documentation guidance, and Ongoing business support.'
  },
  {
    id: 'faq-10',
    question: 'How can I contact AECCI support?',
    answer: 'You can contact our support team through: Email: support@aecci.com, Phone: +91-XXX-XXX-XXXX, Live Chat on our platform, or through our contact form on the website. Our support team is available Monday to Friday, 9 AM to 6 PM IST.'
  }
];

const FAQSection: React.FC = () => {
  const [activeId, setActiveId] = useState<string | null>(null);

  const toggleFAQ = (id: string) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section className="py-16 bg-gray-50/50 relative overflow-hidden" id="faq-section">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-blue-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium mb-3"
            whileHover={{ scale: 1.05 }}
          >
            <MessageSquare className="w-3 h-3" />
            FAQ
          </motion.div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 text-sm mt-2">
            Find answers to common questions about AECCI Global Deal Room
          </p>
        </motion.div>

        {/* FAQ List */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-3"
        >
          {faqData.map((item) => (
            <motion.div
              key={item.id}
              variants={fadeUp}
              className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-md"
            >
              <button
                onClick={() => toggleFAQ(item.id)}
                className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
              >
                <span className="text-sm font-medium text-gray-800">
                  {item.question}
                </span>
                <motion.div
                  animate={{ 
                    rotate: activeId === item.id ? 180 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown className={`w-5 h-5 text-gray-400 transition-colors ${
                    activeId === item.id ? 'text-blue-600' : ''
                  }`} />
                </motion.div>
              </button>

              <AnimatePresence>
                {activeId === item.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ 
                      duration: 0.3,
                      ease: "easeInOut"
                    }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-4 pt-2 border-t border-gray-100">
                      <motion.p
                        initial={{ y: -10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.2, delay: 0.1 }}
                        className="text-sm text-gray-600 leading-relaxed"
                      >
                        {item.answer}
                      </motion.p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <p className="text-sm text-gray-600 mb-4">
            Still have questions? We're here to help!
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Link
              to="/contact-us/head-office"
              className="inline-flex items-center gap-2 bg-linear-to-r from-green-600 to-green-700 text-white font-semibold px-6 py-2.5 rounded-full shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 transition-all text-sm"
            >
              <MessageSquare className="w-4 h-4" />
              Contact Support
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// ============================================
// 3D GLOBAL NETWORK COMPONENT
// ============================================
const GlobalNetwork: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      setRotation({
        x: y * 10,
        y: x * 10,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Countries data with coordinates (percentage based)
  const countries = [
    { name: 'India', x: 45, y: 55, color: '#F59E0B', size: 8 },
    { name: 'USA', x: 15, y: 35, color: '#3B82F6', size: 8 },
    { name: 'UK', x: 32, y: 25, color: '#EF4444', size: 7 },
    { name: 'UAE', x: 52, y: 42, color: '#22C55E', size: 7 },
    { name: 'Singapore', x: 72, y: 48, color: '#EC4899', size: 6 },
    { name: 'Japan', x: 82, y: 35, color: '#8B5CF6', size: 6 },
    { name: 'Germany', x: 35, y: 28, color: '#06B6D4', size: 6 },
    { name: 'Brazil', x: 25, y: 70, color: '#F472B6', size: 6 },
    { name: 'Australia', x: 85, y: 72, color: '#F97316', size: 6 },
    { name: 'South Africa', x: 45, y: 75, color: '#14B8A6', size: 6 },
    { name: 'Canada', x: 12, y: 28, color: '#FF6B6B', size: 5 },
    { name: 'China', x: 78, y: 30, color: '#FCD34D', size: 7 },
  ];

  // Connection pairs
  const connections = [
    [0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [0, 6], [0, 7], [0, 8], [0, 9],
    [1, 2], [1, 6], [1, 10], [2, 6], [2, 10], [3, 4], [3, 6], [4, 5],
    [4, 8], [5, 11], [6, 11], [7, 8], [8, 9]
  ];

  return (
    <div 
      ref={containerRef}
      className="relative w-full max-w-[500px] aspect-square"
      style={{
        perspective: '1000px',
      }}
    >
      <motion.div
        className="absolute inset-0"
        animate={{
          rotateX: rotation.x,
          rotateY: rotation.y,
        }}
        transition={{
          type: "spring",
          damping: 20,
          stiffness: 100,
        }}
        style={{
          transformStyle: 'preserve-3d',
        }}
      >
        {/* 3D Rotating Globe Rings */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          animate={{ 
            rotateX: [0, 360],
            rotateY: [0, 360],
          }}
          transition={{ 
            duration: 60, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          <div className="w-[90%] h-[90%] rounded-full border border-[#3B82F6]/20" />
        </motion.div>
        
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          animate={{ 
            rotateX: [0, -360],
            rotateY: [0, -360],
          }}
          transition={{ 
            duration: 50, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          <div className="w-[70%] h-[70%] rounded-full border border-[#22C55E]/20" />
        </motion.div>
        
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          animate={{ 
            rotateX: [0, 360],
            rotateY: [0, -360],
          }}
          transition={{ 
            duration: 40, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          <div className="w-[50%] h-[50%] rounded-full border border-[#F59E0B]/20" />
        </motion.div>

        {/* Connection Lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          {connections.map(([i, j], idx) => {
            const start = countries[i];
            const end = countries[j];
            const x1 = (start.x / 100) * 100;
            const y1 = (start.y / 100) * 100;
            const x2 = (end.x / 100) * 100;
            const y2 = (end.y / 100) * 100;
            
            // Calculate midpoint for curve
            const midX = (x1 + x2) / 2;
            const midY = (y1 + y2) / 2 - 5;
            
            return (
              <motion.path
                key={`${i}-${j}`}
                d={`M ${x1}% ${y1}% Q ${midX}% ${midY}% ${x2}% ${y2}%`}
                stroke={`rgba(255, 215, 0, ${0.1 + Math.random() * 0.15})`}
                strokeWidth="0.8"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ 
                  pathLength: 1,
                  opacity: 0.6,
                }}
                transition={{
                  pathLength: {
                    duration: 2,
                    delay: idx * 0.05,
                    ease: "easeInOut",
                  },
                  opacity: {
                    duration: 1,
                    delay: idx * 0.05,
                  }
                }}
              />
            );
          })}
        </svg>

        {/* Animated Data Flow Particles */}
        {connections.slice(0, 8).map(([i, j], idx) => {
          const start = countries[i];
          const end = countries[j];
          return (
            <motion.div
              key={`flow-${idx}`}
              className="absolute w-1 h-1 rounded-full"
              style={{
                background: `radial-gradient(circle, #F5B942, transparent)`,
                boxShadow: '0 0 6px #F5B942',
              }}
              animate={{
                left: [
                  `${start.x}%`,
                  `${(start.x + end.x) / 2}%`,
                  `${end.x}%`
                ],
                top: [
                  `${start.y}%`,
                  `${(start.y + end.y) / 2 - 5}%`,
                  `${end.y}%`
                ],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                delay: idx * 0.5 + Math.random() * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          );
        })}

        {/* Country Nodes */}
        {countries.map((country, index) => (
          <motion.div
            key={index}
            className="absolute"
            style={{
              left: `${country.x}%`,
              top: `${country.y}%`,
              transform: 'translate(-50%, -50%)',
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.5 + index * 0.05,
              type: "spring",
              stiffness: 200,
              damping: 20,
            }}
          >
            {/* Node Pulse Ring */}
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{
                width: `${country.size * 6}px`,
                height: `${country.size * 6}px`,
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
                border: `1px solid ${country.color}44`,
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 0, 0.5],
              }}
              transition={{
                duration: 2 + Math.random() * 1,
                delay: index * 0.1,
                repeat: Infinity,
              }}
            />

            {/* Node Dot */}
            <motion.div
              className="rounded-full relative"
              style={{
                width: `${country.size * 2}px`,
                height: `${country.size * 2}px`,
                backgroundColor: country.color,
                boxShadow: `0 0 20px ${country.color}80, 0 0 40px ${country.color}40`,
              }}
              whileHover={{
                scale: 2,
                transition: { type: "spring", stiffness: 300 },
              }}
            >
              {/* Inner glow */}
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  backgroundColor: 'white',
                  opacity: 0.3,
                  transform: 'scale(0.5)',
                }}
              />
            </motion.div>

            {/* Country Label */}
            <motion.div
              className="absolute top-full left-1/2 -translate-x-1/2 mt-1.5 whitespace-nowrap"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + index * 0.05 }}
            >
              <span className="text-[8px] font-medium text-white/80 bg-black/40 backdrop-blur-sm px-2 py-0.5 rounded-full border border-white/10">
                {country.name}
              </span>
            </motion.div>
          </motion.div>
        ))}

        {/* Center Core - India */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <div className="w-20 h-20 rounded-full bg-gradient-to-r from-[#F59E0B] via-[#F5B942] to-[#F59E0B] opacity-20 blur-2xl" />
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#F5B942]/30 blur-xl"
            animate={{
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#F5B942]"
            style={{
              boxShadow: '0 0 30px #F5B942, 0 0 60px #F59E0B',
            }}
          />
        </motion.div>

        {/* Orbiting Satellites */}
        {[...Array(6)].map((_, i) => {
          const angle = (i / 6) * Math.PI * 2;
          const radius = 170;
          return (
            <motion.div
              key={`satellite-${i}`}
              className="absolute top-1/2 left-1/2"
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 20 + Math.random() * 5,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              <motion.div
                className="absolute w-1.5 h-1.5 rounded-full"
                style={{
                  background: `radial-gradient(circle, ${['#F5B942', '#3B82F6', '#22C55E', '#EC4899', '#8B5CF6', '#06B6D4'][i]}, transparent)`,
                  marginLeft: '-3px',
                  marginTop: '-3px',
                  transform: `translate(${radius * Math.cos(angle)}px, ${radius * Math.sin(angle)}px)`,
                  boxShadow: `0 0 10px ${['#F5B942', '#3B82F6', '#22C55E', '#EC4899', '#8B5CF6', '#06B6D4'][i]}`,
                }}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 1, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.3,
                }}
              />
            </motion.div>
          );
        })}

        {/* Connecting ring around center */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#F5B942]/20"
          style={{ width: '280px', height: '280px' }}
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            rotate: {
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            },
            scale: {
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse",
            }
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#F5B942]/10"
          style={{ width: '320px', height: '320px' }}
          animate={{
            rotate: [0, -360],
            scale: [1, 1.05, 1],
          }}
          transition={{
            rotate: {
              duration: 40,
              repeat: Infinity,
              ease: "linear",
            },
            scale: {
              duration: 5,
              repeat: Infinity,
              repeatType: "reverse",
            }
          }}
        />
      </motion.div>
    </div>
  );
};

// ============================================
// HERO SECTION
// ============================================
const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#071B38] via-[#0A2540] to-[#0F2C5F] min-h-[85vh] flex items-center">
      {/* Animated Background Grid */}
      <div className="absolute inset-0" style={{
        backgroundImage: `
          radial-gradient(circle at 20% 50%, #2563EB 0.5px, transparent 0.5px),
          radial-gradient(circle at 80% 50%, #22C55E 0.5px, transparent 0.5px)
        `,
        backgroundSize: '60px 60px, 60px 60px',
        backgroundPosition: '0 0, 30px 30px',
      }}>
        <motion.div
          className="absolute inset-0"
          animate={{
            backgroundPosition: ['0px 0px', '60px 60px'],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 40 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 3 + 1,
              height: Math.random() * 3 + 1,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `hsla(${Math.random() * 60 + 200}, 80%, 60%, 0.2)`,
            }}
            animate={{
              y: [0, -100 - Math.random() * 200],
              x: [0, Math.random() * 50 - 25],
              opacity: [0, 0.6, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 15 + 10,
              repeat: Infinity,
              delay: Math.random() * 15,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 w-full py-4 md:py-6 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-4 py-1.5 mb-4"
              whileHover={{ 
                scale: 1.05, 
                borderColor: 'rgba(245, 185, 66, 0.3)',
                boxShadow: '0 0 30px rgba(245, 185, 66, 0.1)',
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
                <Sparkles className="w-3 h-3 text-[#F5B942]" />
              </motion.div>
              <span className="text-white/80 text-xs font-medium tracking-wider">GLOBAL TRADE NETWORK</span>
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
                Connect to the World
              </motion.span>
            </motion.h1>

            <motion.p 
              variants={fadeUp}
              className="mt-4 text-base text-white/70 max-w-xl leading-relaxed"
            >
              Select your role to discover how AECCI Global Deal Room can help you connect, collaborate & grow globally.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-wrap gap-4"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Link
                  to="/register"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-[#F5B942] to-[#F59E0B] text-[#071B38] font-semibold px-6 py-3 rounded-full shadow-lg shadow-[#F5B942]/30 hover:shadow-[#F5B942]/50 transition-all"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={fadeUp}
              className="mt-8 flex gap-8"
            >
              {[
                { value: '2500+', label: 'Deal Rooms' },
                { value: '1500+', label: 'Global Partners' },
                { value: '50+', label: 'Countries' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="text-2xl font-bold text-[#F5B942]">{stat.value}</div>
                  <div className="text-xs text-white/60">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="relative flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <GlobalNetwork />
          </motion.div>
        </div>
      </div>

      {/* Curved bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          className="w-full h-[60px] md:h-[80px]"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          style={{ display: 'block' }}
        >
          <path
            d="M0,120 C360,120 360,0 720,0 C1080,0 1080,120 1440,120 L1440,120 L0,120 Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
};

// ============================================
// ROLE CARDS SECTION
// ============================================
const roles = [
  {
    icon: Handshake,
    color: 'text-emerald-400',
    iconBg: 'bg-emerald-500/20',
    title: 'Collaboration Partner',
    desc: 'For organizations, chambers, institutions & businesses who want to collaborate with AECCI globally.',
    button: 'Register as Partner',
    roleId: 'partner',
    gradient: 'from-emerald-500 to-emerald-600'
  },
  {
    icon: Users,
    color: 'text-purple-400',
    iconBg: 'bg-purple-500/20',
    title: 'Participant',
    desc: 'For businesses, exporters & professionals who want to participate in deal rooms and grow globally.',
    button: 'Register as Participant',
    roleId: 'participant',
    gradient: 'from-purple-500 to-purple-600'
  },
  {
    icon: Globe,
    color: 'text-blue-400',
    iconBg: 'bg-blue-500/20',
    title: 'Importer',
    desc: 'For global importers looking to connect with verified Indian exporters through deal rooms.',
    button: 'Register as Importer',
    roleId: 'importer',
    gradient: 'from-blue-500 to-blue-600'
  },
  {
    icon: UserRound,
    color: 'text-amber-400',
    iconBg: 'bg-amber-500/20',
    title: 'Intending Agent',
    desc: 'For trade agents, brokers & representatives who want to explore business opportunities in India.',
    button: 'Register as Agent',
    roleId: 'agent',
    gradient: 'from-amber-500 to-amber-600'
  }
];

interface RoleCardsProps {
  onRoleSelect: (roleId: string) => void;
}

const RoleCards: React.FC<RoleCardsProps> = ({ onRoleSelect }) => {
  return (
    <section className="py-12 bg-white relative overflow-hidden" id="roles-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-medium mb-3"
            whileHover={{ scale: 1.05 }}
          >
            <Star className="w-3 h-3 text-[#F5B942]" />
            How It Works
          </motion.div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Choose Your Role</h2>
        </motion.div>

        <motion.div          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {roles.map((role, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              className="bg-black rounded-xl p-5 shadow-xl border border-white/10 group relative overflow-hidden hover:border-white/30 transition-all duration-300 cursor-pointer"
              onClick={() => onRoleSelect(role.roleId)}
            >
              <motion.div
                className={`absolute inset-0 ${role.iconBg} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />
              
              <motion.div
                className={`w-12 h-12 rounded-full ${role.iconBg} flex items-center justify-center mb-3 relative`}
              >
                <role.icon className={`w-6 h-6 ${role.color}`} />
              </motion.div>
              
              <h3 className="text-lg font-bold text-white mb-1">{role.title}</h3>
              <p className="text-gray-400 text-xs leading-relaxed mb-3 flex-grow">{role.desc}</p>
              
              <div className={`inline-flex items-center gap-2 text-xs font-semibold ${role.color} group-hover:opacity-80 transition`}>
                {role.button}
                <motion.span
                  className="inline-block"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ChevronRight className="w-3 h-3" />
                </motion.span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// ============================================
// ROLE DETAILS SECTIONS
// ============================================

const partnerBenefits = [
  { 
    icon: Eye, 
    title: 'Global Visibility', 
    desc: 'Showcase your business to verified buyers, investors and partners across international markets.'
  },
  { 
    icon: UsersIcon2, 
    title: 'Business Matchmaking ', 
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
}

const RoleDetails: React.FC<RoleDetailsProps> = ({ isVisible, role }) => {
  const [isHovered, setIsHovered] = useState(false);
  const detailsRef = useRef<HTMLDivElement>(null);

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

  const getRoleData = () => {
    switch(role) {
      case 'partner':
        return {
          title: 'Collaboration Partner',
          icon: Handshake,
          benefits: partnerBenefits,
          gradient: 'from-emerald-500 to-emerald-600',
          bgColor: 'bg-emerald-50',
          borderColor: 'border-emerald-200',
          textColor: 'text-emerald-700',
          iconColor: 'text-emerald-600',
          registerText: 'Register as Partner',
          tagline: 'Be a bridge between Indian businesses and your global market. Together, we create new business opportunities.'
        };
      case 'participant':
        return {
          title: 'Participant',
          icon: Users,
          benefits: participantBenefits,
          gradient: 'from-purple-500 to-purple-600',
          bgColor: 'bg-purple-50',
          borderColor: 'border-purple-200',
          textColor: 'text-purple-700',
          iconColor: 'text-purple-600',
          registerText: 'Register as Participant',
          tagline: 'Join the global trade ecosystem and unlock new opportunities for your business.'
        };
      case 'importer':
        return {
          title: 'Importer',
          icon: Globe,
          benefits: importerBenefits,
          gradient: 'from-blue-500 to-blue-600',
          bgColor: 'bg-blue-50',
          borderColor: 'border-blue-200',
          textColor: 'text-blue-700',
          iconColor: 'text-blue-600',
          registerText: 'Register as Importer',
          tagline: 'Connect with verified Indian exporters and access quality products from India.'
        };
      case 'agent':
        return {
          title: 'Intending Agent',
          icon: UserRound,
          benefits: agentBenefits,
          gradient: 'from-amber-500 to-amber-600',
          bgColor: 'bg-amber-50',
          borderColor: 'border-amber-200',
          textColor: 'text-amber-700',
          iconColor: 'text-amber-600',
          registerText: 'Register as Agent',
          tagline: 'Explore business opportunities in India and connect with manufacturers & exporters.'
        };
      default:
        return {
          title: '',
          icon: Users,
          benefits: [],
          gradient: '',
          bgColor: '',
          borderColor: '',
          textColor: '',
          iconColor: '',
          registerText: '',
          tagline: ''
        };
    }
  };

  const data = getRoleData();

  return (
    <motion.section
      ref={detailsRef}
      className="py-10 bg-gray-50/50 relative overflow-hidden"
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      animate={isVisible ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.95 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      style={{ display: isVisible ? 'block' : 'none' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <motion.div
              className={`inline-flex items-center gap-2 ${data.bgColor} ${data.textColor} text-xs font-semibold px-3 py-1 rounded-full mb-2 border ${data.borderColor}`}
              whileHover={{ scale: 1.05 }}
            >
              <Star className="w-3 h-3" />
              YOU SELECTED
            </motion.div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">{data.title}</h2>

            <motion.div
              className="relative rounded-xl overflow-hidden shadow-lg bg-gray-900 aspect-video group cursor-pointer"
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
                  className="w-16 h-16 rounded-full bg-[#F5B942] flex items-center justify-center shadow-2xl shadow-[#F5B942]/30"
                  whileHover={{ scale: 1.1 }}
                  animate={{
                    scale: isHovered ? 1.1 : 1,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <Play className="w-6 h-6 text-[#071B38] ml-1" />
                </motion.div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-white font-semibold text-sm">AECCI Global Deal Room {data.title} Program Overview</p>
                <span className="text-white/60 text-xs">03:20</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className={`text-xl font-bold text-gray-900 mb-4 flex items-center gap-2`}>
              <data.icon className={`w-5 h-5 ${data.iconColor}`} />
              Key Benefits {data.title}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {data.benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className={`bg-white rounded-lg p-3 hover:shadow-md transition-all duration-300 border border-gray-100`}
                  whileHover={{ 
                    y: -4, 
                    scale: 1.02,
                    transition: { type: "spring", stiffness: 300 }
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <div className={`w-8 h-8 rounded-full ${data.bgColor} flex items-center justify-center mb-1`}>
                    <benefit.icon className={`w-4 h-4 ${data.iconColor}`} />
                  </div>
                  <h4 className="font-semibold text-gray-800 text-xs">{benefit.title}</h4>
                  <p className="text-gray-500 text-[10px] mt-0.5 leading-relaxed">{benefit.desc}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              className={`mt-4 ${data.bgColor} rounded-lg p-4 border ${data.borderColor}`}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.7 }}
              whileHover={{ scale: 1.02 }}
            >
              <p className={`${data.textColor} text-xs font-medium flex items-start gap-2`}>
                <InfinityIcon className={`w-4 h-4 ${data.iconColor} flex-shrink-0 mt-0.5`} />
                {data.tagline}
              </p>
            </motion.div>

            <motion.div
              className="mt-4"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
              transition={{ delay: 0.8 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Link
                  to="/signup"
                  className={`inline-flex items-center gap-2 bg-gradient-to-r ${data.gradient} hover:opacity-90 text-white font-semibold px-6 py-2.5 rounded-full transition-all shadow-lg text-sm relative overflow-hidden group w-full justify-center`}
                >
                  <Sparkles className="w-4 h-4" />
                  {data.registerText}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
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
// MAIN LANDING PAGE
// ============================================
export default function LandingPage() {
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const [showDetails, setShowDetails] = useState(false);

  const handleRoleSelect = (roleId: string) => {
    setSelectedRole(roleId);
    setShowDetails(true);
  };

  return (
    <div className="font-sans text-[#0c1a2c] bg-white selection:bg-emerald-500/20">
      <Navbar />
      <main>
        <Hero />
        <RoleCards onRoleSelect={handleRoleSelect} />
        <RoleDetails 
          isVisible={showDetails && selectedRole === 'partner'} 
          role="partner" 
        />
        <RoleDetails 
          isVisible={showDetails && selectedRole === 'participant'} 
          role="participant" 
        />
        <RoleDetails 
          isVisible={showDetails && selectedRole === 'importer'} 
          role="importer" 
        />
        <RoleDetails 
          isVisible={showDetails && selectedRole === 'agent'} 
          role="agent" 
        />
        <JourneyTimeline />
        <FAQSection />
        <Journey />
        
      </main>
      <Footer />
    </div>
  );
}