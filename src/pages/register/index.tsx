import { Link } from "react-router-dom";
import { Globe, Users, Briefcase, ArrowRight, PlayCircle, Handshake } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { motion,  type Variants } from "framer-motion";
import Navbar from "@/components/navbar/Navbar";
import Footer  from "@/components/portal/Footer";

import globalConnectVideo from "../../assets/videos/globalroomwork_v2.mp4";

const roles = [
  {
    id: "partner",
    title: "Collaboration Partner",
    desc: "For organizations, chambers, institutions & businesses who want to collaborate with AECCI globally.",
    icon: <Briefcase className="w-7 h-7 text-emerald-400" />,
    iconBg: "bg-emerald-500/10 border-emerald-500/20",
    glow: "bg-emerald-500/10",
    buttonText: "Register as Partner",
    linkUrl: "/partner/register",
  },
  {
    id: "participant",
    title: "Participant",
    desc: "For businesses, exporters & professionals who want to participate in deal rooms and grow globally.",
    icon: <Users className="w-7 h-7 text-purple-400" />,
    iconBg: "bg-purple-500/10 border-purple-500/20",
    glow: "bg-purple-500/10",
    buttonText: "Register as Participant",
    linkUrl: "/signup",
  },
  {
    id: "importer",
    title: "Importer",
    desc: "For global importers looking to connect with verified Indian exporters through deal rooms.",
    icon: <Globe className="w-7 h-7 text-blue-400" />,
    iconBg: "bg-blue-500/10 border-blue-500/20",
    glow: "bg-blue-500/10",
    buttonText: "Register as Importer",
    linkUrl: "/importer/register",
  },
  {
    id: "agent",
    title: "Intending Agent",
    desc: "For trade agents, brokers & representatives who want to explore business opportunities in India.",
    icon: <Handshake className="w-7 h-7 text-amber-400" />,
    iconBg: "bg-amber-500/10 border-amber-500/20",
    glow: "bg-amber-500/10",
    buttonText: "Register as Agent",
    linkUrl: "/signup",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
};

export default function RegisterRoleSelection() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      
      <main className="flex-1 flex flex-col justify-center items-center p-6 relative overflow-hidden py-24">
        {/* Header text from user prompt */}
        <div className="absolute top-8 text-center w-full z-10">
          <p className="text-sm font-bold tracking-widest text-zinc-500 uppercase">
            Connect Yourself To AECCI Global Deal Room
          </p>
        </div>

      <div className="relative z-10 w-full max-w-6xl mt-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 mb-6">
            Your Next Global Opportunity is One Registration Away
          </h1>
          <p className="text-lg text-zinc-600 max-w-2xl mx-auto mb-8">
            Join AECCI Global Deal Room and connect with the right partners, faster.
          </p>

          <Dialog>
            <DialogTrigger asChild>
              <button className="inline-flex items-center gap-2 bg-zinc-100 hover:bg-zinc-200 text-zinc-900 px-6 py-3 rounded-full font-semibold transition-colors">
                <PlayCircle className="w-5 h-5 text-blue-600" />
                How It Works
              </button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl p-0 overflow-hidden bg-black border-none rounded-2xl">
              <video
                src={globalConnectVideo}
                className="w-full aspect-video outline-none"
                controls
                autoPlay
              />
            </DialogContent>
          </Dialog>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {roles.map((role) => (
            <motion.div 
              key={role.id}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.02, 
                y: -8,
                transition: { duration: 0.2, ease: "easeOut" }
              }}
              className="bg-zinc-950 hover:bg-zinc-900 text-white rounded-2xl p-6 flex flex-col shadow-2xl transition-all duration-300 border border-zinc-800 hover:border-zinc-700 relative overflow-hidden group cursor-pointer"
            >
              <div className={`absolute -top-10 -right-10 w-40 h-40 ${role.glow} rounded-full blur-[60px] pointer-events-none group-hover:scale-150 transition-transform duration-700`} />
              
              <motion.div 
                className={`w-14 h-14 ${role.iconBg} rounded-xl flex items-center justify-center mb-6 border transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]`}
                whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                transition={{ duration: 0.5 }}
              >
                {role.icon}
              </motion.div>
              
              <h2 className="text-xl font-bold mb-3">{role.title}</h2>
              <p className="text-zinc-400 text-sm mb-8 flex-1 leading-relaxed group-hover:text-zinc-300 transition-colors duration-300">
                {role.desc}
              </p>
              
              <Link to={role.linkUrl} className="w-full mt-auto relative z-10">
                <button className="w-full bg-zinc-100 group-hover:bg-white text-zinc-950 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 text-sm shadow-sm group-hover:shadow-md">
                  {role.buttonText} 
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-2" />
                </button>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-16 text-center text-sm font-medium text-zinc-500">
          Already have an account? <Link to="/login" className="text-blue-600 hover:underline">Log in</Link>
        </div>
      </div>
      </main>

      <Footer />
    </div>
  );
}
