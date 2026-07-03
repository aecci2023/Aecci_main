import { Link } from "react-router-dom";
import { Globe, Users, Briefcase, ArrowRight, PlayCircle } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

import globalConnectVideo from "../../assets/videos/globalroomwork_v2.mp4";

export default function RegisterRoleSelection() {
  return (
    <div className="min-h-screen bg-white flex flex-col justify-center items-center p-6 relative overflow-hidden">
      
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
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Importer */}
          <div className="bg-zinc-950 text-white rounded-2xl p-8 flex flex-col shadow-2xl hover:-translate-y-2 transition-transform duration-300 border border-zinc-800">
            <div className="w-14 h-14 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6 border border-blue-500/20">
              <Globe className="w-7 h-7 text-blue-400" />
            </div>
            <h2 className="text-2xl font-bold mb-3">Importer</h2>
            <p className="text-zinc-400 mb-8 flex-1 leading-relaxed">
              Register as a Global Buyer. Get exclusive access to the Deal Room and connect with verified Indian exporters. Includes 3 free meetings.
            </p>
            <Link to="/importer/register" className="w-full">
              <button className="w-full bg-zinc-100 hover:bg-white text-zinc-950 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2">
                Register as Importer <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </div>
          
          {/* Partner */}
          <div className="bg-zinc-950 text-white rounded-2xl p-8 flex flex-col shadow-2xl hover:-translate-y-2 transition-transform duration-300 border border-zinc-800 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-[50px] pointer-events-none" />
            <div className="w-14 h-14 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-6 border border-emerald-500/20">
              <Briefcase className="w-7 h-7 text-emerald-400" />
            </div>
            <h2 className="text-2xl font-bold mb-3">Collaboration Partner</h2>
            <p className="text-zinc-400 mb-8 flex-1 leading-relaxed">
              For Chambers, Institutions, and Trade Bodies. Manage regions and facilitate trade as an official AECCI partner.
            </p>
            <Link to="/partner/register" className="w-full">
              <button className="w-full bg-zinc-100 hover:bg-white text-zinc-950 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2">
                Register as Partner <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </div>
          
          {/* Participant */}
          <div className="bg-zinc-950 text-white rounded-2xl p-8 flex flex-col shadow-2xl hover:-translate-y-2 transition-transform duration-300 border border-zinc-800">
            <div className="w-14 h-14 bg-purple-500/10 rounded-xl flex items-center justify-center mb-6 border border-purple-500/20">
              <Users className="w-7 h-7 text-purple-400" />
            </div>
            <h2 className="text-2xl font-bold mb-3">Participation User</h2>
            <p className="text-zinc-400 mb-8 flex-1 leading-relaxed">
              General business participants. Attend Deal Rooms, explore the marketplace, and discover global opportunities.
            </p>
            <Link to="/signup" className="w-full">
              <button className="w-full bg-zinc-100 hover:bg-white text-zinc-950 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2">
                Register as Participant <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </div>
        </div>

        <div className="mt-16 text-center text-sm font-medium text-zinc-500">
          Already have an account? <Link to="/login" className="text-blue-600 hover:underline">Log in</Link>
        </div>
      </div>
    </div>
  );
}
