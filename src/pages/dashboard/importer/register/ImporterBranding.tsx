import { Shield, Globe, Handshake } from "lucide-react";
import { Link } from "react-router-dom";

export default function ImporterBranding() {
  return (
    <div className="flex flex-col h-full w-full relative p-12 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-600/20 rounded-full blur-[100px] pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform">
            <span className="text-zinc-950 font-bold text-xl">A</span>
          </div>
          <span className="text-xl font-bold tracking-tight text-white group-hover:text-blue-400 transition-colors">
            AECCI Global
          </span>
        </Link>
        <span className="text-sm font-medium text-zinc-400 border border-zinc-800 rounded-full px-4 py-1.5 bg-zinc-900/50">
          Global Deal Room
        </span>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center max-w-lg mt-12">
        <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-white mb-6">
          Connect with the <span className="text-blue-500">Right Partners</span>, Faster.
        </h1>
        <p className="text-lg text-zinc-400 leading-relaxed mb-10">
          Register as an importer to gain exclusive access to the AECCI Global Deal Room. Meet verified Indian exporters and explore global trade opportunities.
        </p>

        {/* Feature list */}
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center border border-blue-500/20 shrink-0">
              <Shield className="w-6 h-6 text-blue-400" />
            </div>
            <div>
              <h3 className="text-white font-semibold mb-1">Verified Partners</h3>
              <p className="text-sm text-zinc-400">Connect with pre-vetted, high-quality Indian exporters and manufacturers.</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 shrink-0">
              <Handshake className="w-6 h-6 text-emerald-400" />
            </div>
            <div>
              <h3 className="text-white font-semibold mb-1">3 Free Meetings</h3>
              <p className="text-sm text-zinc-400">Jumpstart your global trade journey with three complimentary Deal Room sessions.</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20 shrink-0">
              <Globe className="w-6 h-6 text-indigo-400" />
            </div>
            <div>
              <h3 className="text-white font-semibold mb-1">Global Trade Network</h3>
              <p className="text-sm text-zinc-400">Access market intelligence and expand your sourcing capabilities seamlessly.</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <div className="relative z-10 mt-auto pt-8 border-t border-zinc-800 flex items-center justify-between text-sm text-zinc-500">
        <span>© {new Date().getFullYear()} AECCI. All rights reserved.</span>
        <div className="flex gap-4">
          <Link to="/privacy" className="hover:text-white transition-colors">Privacy</Link>
          <Link to="/terms" className="hover:text-white transition-colors">Terms</Link>
        </div>
      </div>
    </div>
  );
}
