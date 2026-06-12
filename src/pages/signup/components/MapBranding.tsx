
import { motion } from "framer-motion";
import { SpinningGlobe } from "@/components/portal/SpinningGlobe";

export default function MapBranding() {
  return (
    <div className="w-full h-full flex flex-col justify-between p-12 relative overflow-hidden bg-black text-white">
      {/* Background Map Graphic or subtle dot grid */}
      <div className="absolute inset-0 z-0 opacity-[0.15]">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col items-start gap-4">
        <img src="/arccilogoWithText.png" alt="AECCI" className="h-16 w-auto brightness-0 invert" />
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mt-12 text-white">
          AECCI Global Deal Room
        </h1>
        <p className="text-lg text-white/70 max-w-sm">
          Connect, trade, and expand your business footprint across borders.
        </p>
      </div>

      <div className="relative z-10 flex flex-col items-center mt-8">
        <div className="scale-75 md:scale-90 origin-top">
          <SpinningGlobe />
        </div>
      </div>

      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="bg-white/10 backdrop-blur-md border border-white/10 rounded-lg p-6"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="flex -space-x-3">
              <div className="w-10 h-10 rounded-full border-2 border-black bg-blue-500/20 flex items-center justify-center text-xs">🇮🇳</div>
              <div className="w-10 h-10 rounded-full border-2 border-black bg-green-500/20 flex items-center justify-center text-xs">🇰🇪</div>
              <div className="w-10 h-10 rounded-full border-2 border-black bg-purple-500/20 flex items-center justify-center text-xs">🇬🇭</div>
            </div>
            <p className="text-sm font-medium text-white/90">Join 10,000+ verified global traders</p>
          </div>
          
          <ul className="space-y-3 text-sm text-white/70">
            <li className="flex items-center gap-2">
              <div className="size-1.5 rounded-full bg-primary" /> Simplified KYC & Onboarding
            </li>
            <li className="flex items-center gap-2">
              <div className="size-1.5 rounded-full bg-primary" /> Personalized Trade Matches
            </li>
            <li className="flex items-center gap-2">
              <div className="size-1.5 rounded-full bg-primary" /> Expert Consultation & Support
            </li>
          </ul>
        </motion.div>
      </div>

      {/* Decorative gradient orb */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[100px] -mr-20 -mb-20 pointer-events-none" />
    </div>
  );
}
