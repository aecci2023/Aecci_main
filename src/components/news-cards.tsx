"use client";

import { motion, AnimatePresence, useReducedMotion, LayoutGroup } from "framer-motion";
import { useState, useEffect } from "react";
import { BookmarkIcon, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface NewsCard {
  id: string;
  title: string;
  category: string;
  subcategory: string;
  timeAgo: string;
  location: string;
  image: string;
  gradientColors?: string[];
  content?: string[];
}

interface StatusBar {
  id: string;
  category: string;
  subcategory: string;
  length: number; // 1-3 for different lengths
  opacity: number; // 0.3-1 for different opacities
}

interface NewsCardsProps {
  title?: string;
  subtitle?: string;
  statusBars?: StatusBar[];
  newsCards?: NewsCard[];
  enableAnimations?: boolean;
}

const defaultStatusBars: StatusBar[] = [
  {
    id: "1",
    category: "Policy Alert",
    subcategory: "CBIC Tariff Adjustments",
    length: 3,
    opacity: 1,
  },
  {
    id: "2", 
    category: "Trade Advisory",
    subcategory: "India-UAE CEPA",
    length: 2,
    opacity: 0.7,
  },
  {
    id: "3",
    category: "Chamber Update",
    subcategory: "e-Platform Upgrades",
    length: 1,
    opacity: 0.4,
  }
];

const defaultNewsCards: NewsCard[] = [
  {
    id: "1",
    title: "CBIC Updates Import Duty Structures and HS Codes for Agricultural Shipments",
    category: "Policy Alert",
    subcategory: "CBIC Tariff Adjustments",
    timeAgo: "15 min ago",
    location: "India / Global",
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1600&h=900&fit=crop&q=80",
    gradientColors: ["from-red-500/20", "to-orange-500/20"],
    content: [
      "The Central Board of Indirect Taxes and Customs (CBIC) has announced a major update to the customs duty structures and Harmonized System (HS) classifications for agricultural and spice commodities. These adjustments are designed to streamline domestic distribution while maintaining trade balance.",
      "Chamber members are advised to verify their current HS codes on their active Certificates of Origin to prevent transit bottlenecks at the ports of Nhava Sheva and Chennai. The administrative board is hosting a webinar this Friday to guide members through these modifications.",
      "The new directives introduce a simplified tariff schedule for wheat and organic spice exports, offering preferential rates under regional trade agreements. These adjustments align with the governmental initiative to boost agricultural shipments by 15% in the current fiscal year.",
      "Our digital registry portal has already been updated with the latest HS code databases. Exporters can utilize the auto-classification tool to automatically map their goods to the new tariff lines.",
      "Bilateral desks at AECCI are actively coordinating with customs officials to ensure that transition phase attestations are verified without cargo retention. For immediate assistance, contact the Exporters Desk Support.",
      "Registered gold-tier members will receive individual compliance audits to review their shipping portfolios against these new tariffs."
    ]
  },
  {
    id: "2",
    title: "India-UAE CEPA: Preferential Tariff Claims Grow by 40% in Q2 2026",
    category: "Trade Advisory", 
    subcategory: "India-UAE CEPA",
    timeAgo: "41 min ago",
    location: "Mumbai / Dubai",
    image: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=1600&h=900&fit=crop&q=80",
    gradientColors: ["from-blue-500/20", "to-purple-500/20"],
    content: [
      "Bilateral trade between India and the UAE continues to surge, with preferential tariff claims under the Comprehensive Economic Partnership Agreement (CEPA) growing by 40% in the second quarter of 2026. AECCI has issued over 12,000 digital Certificates of Origin under the CEPA framework in the last three months alone.",
      "The growth is primarily driven by textiles, machinery components, and organic food shipments. AECCI's digital verification system has reduced the average verification cycle time, allowing exporters to claim CEPA benefits within minutes of vessel departure.",
      "Customs officials at the Jebel Ali port in Dubai have implemented automated verification lines that cross-reference AECCI's cryptographic signatures in real-time, eliminating physical document presentation and accelerating transit clearance.",
      "Members are reminded that to qualify for the duty exemptions, all shipments must be accompanied by an AECCI-certified Certificate of Origin with valid digital stamps. The chamber has launched a dedicated CEPA advisory cell to resolve disputes related to rules of origin.",
      "AECCI President noted that the trade corridor represents a critical pillar of regional economic integration, with trade volumes projected to cross $100 billion by the end of the decade.",
      "Exporters interested in expanding their operations in the GCC region are encouraged to consult the market intelligence reports available in our Publications & Insights section."
    ]
  },
  {
    id: "3",
    title: "AECCI Launches E-Registry Version 4.0 with Cryptographic Attestation Verification",
    category: "Chamber Update",
    subcategory: "e-Platform Upgrades",
    timeAgo: "1 hour ago",
    location: "Head Office",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1600&h=900&fit=crop&q=80",
    gradientColors: ["from-green-500/20", "to-emerald-500/20"],
    content: [
      "The Asian Exporters Chamber of Commerce and Industry (AECCI) has officially deployed Version 4.0 of its digital e-Registry portal. This major upgrade introduces state-of-the-art cryptographic signature verification for all digital Certificates of Origin (e-CO) and export document attestations.",
      "The new platform integrates directly with international custom databases, permitting ports worldwide to verify the authenticity of AECCI-issued credentials instantly via secure QR scans or digital handshakes.",
      "In addition to advanced security, Version 4.0 features a completely redesigned user interface with intuitive scheduling blocks, real-time transaction tracking, and direct chat channels with chamber experts.",
      "All active members will be migrated to the new system automatically. Legacy verification credentials will remain supported until July 31, 2026, to ensure zero disruption to ongoing trade operations.",
      "The upgrade is part of AECCI's commitment to facilitating seamless, paperless trade compliance, reducing the administrative burden on exporters, and protecting against documentation fraud.",
      "For training videos and user manuals, please visit the Exporter Resource page or download the new official AECCI mobile app."
    ]
  }
];

export function NewsCards({
  title = "Chamber News & Policy Updates",
  subtitle = "Stay informed on international trade directives, customs compliance, and chamber announcements.",
  statusBars = defaultStatusBars,
  newsCards = defaultNewsCards,
  enableAnimations = true,
}: NewsCardsProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedCard, setSelectedCard] = useState<NewsCard | null>(null);
  const [bookmarkedCards, setBookmarkedCards] = useState<Set<string>>(new Set());
  const shouldReduceMotion = useReducedMotion();
  const shouldAnimate = enableAnimations && !shouldReduceMotion;

  const toggleBookmark = (cardId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setBookmarkedCards(prev => {
      const newSet = new Set(prev);
      if (newSet.has(cardId)) {
        newSet.delete(cardId);
      } else {
        newSet.add(cardId);
      }
      return newSet;
    });
  };

  const openCard = (card: NewsCard) => {
    setSelectedCard(card);
  };

  const closeCard = () => {
    setSelectedCard(null);
  };

  useEffect(() => {
    if (shouldAnimate) {
      const timer = setTimeout(() => setIsLoaded(true), 100);
      return () => clearTimeout(timer);
    } else {
      setIsLoaded(true);
    }
  }, [shouldAnimate]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      }
    }
  } as const;

  const headerVariants = {
    hidden: { 
      opacity: 0, 
      y: -20,
      scale: 0.95,
      filter: "blur(4px)",
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: { 
        type: "spring", 
        stiffness: 400, 
        damping: 28,
        mass: 0.6,
      }
    }
  } as const;

  const statusBarContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      }
    }
  } as const;

  const statusBarVariants = {
    hidden: { 
      opacity: 0, 
      scaleX: 0,
      x: -20,
    },
    visible: { 
      opacity: 1, 
      scaleX: 1,
      x: 0,
      transition: { 
        type: "spring", 
        stiffness: 300, 
        damping: 25,
        scaleX: { type: "spring", stiffness: 400, damping: 30 }
      }
    }
  } as const;

  const cardContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.8,
      }
    }
  } as const;

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.9,
      filter: "blur(6px)",
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: { 
        type: "spring", 
        stiffness: 300, 
        damping: 28,
        mass: 0.8,
      }
    }
  } as const;





  return (
    <motion.div
      className="w-full max-w-6xl mx-auto p-6 bg-background text-foreground"
      initial={shouldAnimate ? "hidden" : "visible"}
      animate={isLoaded ? "visible" : "hidden"}
      variants={shouldAnimate ? containerVariants : undefined}
    >
             {/* Header */}
       <motion.div
         className="mb-8"
         variants={shouldAnimate ? headerVariants : undefined}
       >
         <h1 className="text-4xl font-bold mb-2">{title}</h1>
         <p className="text-muted-foreground text-lg">{subtitle}</p>
         
         {/* Simple Border Lines */}
         <motion.div 
           className="mt-6 space-y-1"
           variants={shouldAnimate ? statusBarContainerVariants : undefined}
         >
           {statusBars.map((bar, index) => (
             <motion.div
               key={bar.id}
               className={cn("h-0.5 bg-foreground rounded-full", bar.id === "1" ? "bg-foreground/80" : bar.id === "2" ? "bg-foreground/60" : "bg-foreground/40")}
               style={{ 
                 opacity: bar.opacity,
                 width: `${(bar.length / 3) * 100}%`
               }}
               variants={shouldAnimate ? statusBarVariants : undefined}
               initial={{ scaleX: 0 }}
               animate={{ scaleX: 1 }}
               transition={{ 
                 delay: 0.3 + (index * 0.1),
                 type: "spring", 
                 stiffness: 400, 
                 damping: 30 
               }}
             />
           ))}
         </motion.div>
       </motion.div>

                    {/* News Cards with Shared Layout */}
       <LayoutGroup>
         <motion.div
           className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8"
           variants={shouldAnimate ? cardContainerVariants : undefined}
         >
           {newsCards.map((card) => {
             if (selectedCard?.id === card.id) {
               return null; // Don't render the compact card when expanded
             }
             
             return (
               <motion.article
                 key={card.id}
                 layoutId={`card-${card.id}`}
                 className="bg-card border border-border/50 rounded-lg overflow-hidden transition-all duration-300 cursor-pointer group"
                 variants={shouldAnimate ? cardVariants : undefined}
                 whileHover={shouldAnimate ? { 
                   y: -4,
                   scale: 1.01,
                   transition: { type: "spring", stiffness: 400, damping: 25 }
                 } : {}}
                 onClick={() => openCard(card)}
               >
                 {/* Image with gradient overlay */}
                 <motion.div 
                   layoutId={`card-image-${card.id}`}
                   className="relative h-56 overflow-hidden bg-muted"
                 >
                   <img
                     src={card.image}
                     alt={card.title}
                     className="w-full h-full object-cover transform-gpu group-hover:scale-105 transition-transform duration-700 ease-out"
                   />
                   <div className="absolute inset-x-0 bottom-0 h-1/5 bg-gradient-to-t from-background/80 to-transparent"></div>
                   {card.gradientColors && (
                     <div className={`absolute inset-x-0 bottom-0 h-1/5 bg-gradient-to-t ${card.gradientColors[0]} ${card.gradientColors[1]} to-transparent`}></div>
                   )}
                   
                   {/* Bookmark icon */}
                   <motion.div 
                     className="absolute top-3 right-3"
                     initial={{ opacity: 0, scale: 0.8 }}
                     animate={{ opacity: 1, scale: 1 }}
                     transition={{ delay: 0.6, type: "spring", stiffness: 400, damping: 25 }}
                     whileHover={{ scale: 1.1 }}
                     whileTap={{ scale: 0.9 }}
                     onClick={(e) => toggleBookmark(card.id, e)}
                   >
                     <BookmarkIcon 
                       className={`w-5 h-5 transition-colors cursor-pointer ${
                         bookmarkedCards.has(card.id) 
                           ? 'text-yellow-400 fill-yellow-400' 
                           : 'text-white/80 hover:text-white'
                       }`} 
                     />
                   </motion.div>

                   {/* Category and time info */}
                   <motion.div 
                     className="absolute bottom-3 left-3 text-white"
                     initial={{ opacity: 0, y: 10 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ delay: 0.5, type: "spring", stiffness: 400, damping: 25 }}
                   >
                     <div className="text-xs mb-1 opacity-90">
                       {card.category}, {card.subcategory}
                     </div>
                     <div className="text-xs opacity-75">
                       {card.timeAgo}, {card.location}
                     </div>
                   </motion.div>
                 </motion.div>

                 {/* Content */}
                 <motion.div 
                   layoutId={`card-content-${card.id}`}
                   className="p-6"
                 >
                   <motion.h3 
                     layoutId={`card-title-${card.id}`}
                     className="font-semibold text-lg leading-tight line-clamp-3 group-hover:text-primary transition-colors"
                   >
                     {card.title}
                   </motion.h3>
                 </motion.div>
               </motion.article>
             );
           })}
         </motion.div>

         {/* Expanded Card Modal */}
         <AnimatePresence>
           {selectedCard && (
             <>
               {/* Backdrop */}
               <motion.div
                 className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40"
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 exit={{ opacity: 0 }}
                 onClick={closeCard}
               />
               
               {/* Expanded Card */}
               <motion.div
                 layoutId={`card-${selectedCard.id}`}
                 className="fixed inset-4 md:inset-8 lg:inset-16 bg-card border border-border rounded-xl overflow-hidden z-50"
               >
                 {/* Close Button */}
                 <motion.button
                   className="absolute top-4 right-4 w-8 h-8 bg-background/80 hover:bg-background rounded-full flex items-center justify-center z-10"
                   initial={{ opacity: 0, scale: 0 }}
                   animate={{ opacity: 1, scale: 1 }}
                   transition={{ delay: 0.2 }}
                   whileHover={{ scale: 1.1 }}
                   whileTap={{ scale: 0.9 }}
                   onClick={closeCard}
                 >
                   <X className="w-4 h-4" />
                 </motion.button>

                 <div className="h-full overflow-y-auto">
                   {/* Header Image */}
                   <motion.div 
                     layoutId={`card-image-${selectedCard.id}`}
                     className="relative h-64 md:h-80"
                   >
                     <img
                       src={selectedCard.image}
                       alt={selectedCard.title}
                       className="w-full h-full object-cover"
                     />
                     <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background/90 to-transparent"></div>
                     {selectedCard.gradientColors && (
                       <div className={`absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t ${selectedCard.gradientColors[0]} ${selectedCard.gradientColors[1]} to-transparent`}></div>
                     )}
                     
                     {/* Image overlay info */}
                     <div className="absolute bottom-4 left-4 text-white">
                       <div className="text-sm mb-1 opacity-90">{selectedCard.category}, {selectedCard.subcategory}</div>
                       <div className="text-sm opacity-75">{selectedCard.timeAgo}, {selectedCard.location}</div>
                     </div>
                   </motion.div>

                   {/* Content */}
                   <motion.div 
                     layoutId={`card-content-${selectedCard.id}`}
                     className="p-6 md:p-8"
                   >
                     <motion.h1 
                       layoutId={`card-title-${selectedCard.id}`}
                       className="text-2xl md:text-3xl font-bold mb-6"
                     >
                       {selectedCard.title}
                     </motion.h1>
                     
                     <motion.div 
                       className="prose prose-lg max-w-none text-muted-foreground"
                       initial={{ opacity: 0, y: 20 }}
                       animate={{ opacity: 1, y: 0 }}
                       transition={{ delay: 0.3, duration: 0.4 }}
                     >
                       {selectedCard.content ? (
                         selectedCard.content.map((paragraph, index) => (
                           <p key={index} className="mb-4">
                             {paragraph}
                           </p>
                         ))
                       ) : (
                         <>
                           <p className="mb-4">
                             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                           </p>
                           <p className="mb-4">
                             Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                           </p>
                           <p className="mb-4">
                             Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                           </p>
                           <p className="mb-4">
                             Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.
                           </p>
                           <p>
                             At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.
                           </p>
                         </>
                       )}
                     </motion.div>
                   </motion.div>
                 </div>
               </motion.div>
             </>
           )}
         </AnimatePresence>
       </LayoutGroup>
     </motion.div>
   );
} 