import * as React from "react"
import { Play, Volume2, Film } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function VideoExplainer() {
  const [isPlaying, setIsPlaying] = React.useState(false)

  return (
    <section className="bg-background py-16 md:py-24 border-b border-border/60 relative overflow-hidden">
      <div className="mx-auto max-w-[1280px] px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <Badge className="bg-primary/10 text-primary border-primary/20 mb-4 px-3 py-1 font-mono uppercase tracking-widest text-xs">
            Platform Explainer
          </Badge>
          <h2 className="text-3xl md:text-5xl font-heading font-black text-foreground tracking-tight flex items-center justify-center gap-3">
            <Film className="size-8 text-primary shrink-0" /> WHY THE AECCI GLOBAL DEAL ROOM?
          </h2>
        </div>

        {/* Netflix Cinematic Trailer Box */}
        <div className="relative aspect-[16/9] w-full max-w-4xl mx-auto rounded-3xl border border-border overflow-hidden bg-muted shadow-2xl group">
          {/* Simulated Video Thumbnail Backdrop */}
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-102"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=1600')",
            }}
          />
          {/* Heavy gradient shadows resembling Netflix preview UI */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent z-1" />
          <div className="absolute inset-0 bg-black/45 z-1" />

          {/* Interface elements */}
          <div className="absolute inset-x-0 bottom-0 p-6 md:p-10 z-10 flex flex-col justify-end items-start gap-4">
            <Badge className="bg-red-600 text-white border-none text-[9px] font-bold tracking-widest uppercase py-0.5 px-2">
              AECCI ORIGINAL
            </Badge>

            <h3 className="text-xl md:text-3.5xl font-heading font-black text-white leading-none tracking-tight">
              Global Deal Room: Redefining Export Matchmaking
            </h3>

            <p className="text-slate-200 text-xs md:text-sm max-w-xl font-light font-sans leading-relaxed hidden sm:block">
              Watch our 90-second platform walk-through to see how Indian trade councils, verified distributors, and custom clearing networks orchestrate tariff-free corridors.
            </p>

            {/* Simulated controls */}
            <div className="flex items-center gap-3 mt-2 w-full sm:w-auto">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="flex-1 sm:flex-none flex items-center justify-center gap-2 h-11 px-6 rounded-lg bg-white text-slate-950 hover:bg-slate-200 transition-colors font-bold text-xs font-sans"
              >
                <Play className="size-4 fill-current text-slate-950" />
                {isPlaying ? "Pause Preview" : "Play Trailer"}
              </button>

              <button className="h-11 w-11 flex items-center justify-center rounded-lg bg-white/10 hover:bg-white/20 border border-white/15 text-white transition-colors">
                <Volume2 className="size-4" />
              </button>
              
              <span className="text-[10px] text-slate-400 font-mono tracking-widest uppercase ml-auto sm:ml-4 font-bold">
                90 SECONDS COMMERCIAL • MUTED LOOP
              </span>
            </div>
          </div>

          {/* Top Info Bar */}
          <div className="absolute top-6 right-6 z-10 flex gap-2">
            <span className="inline-flex items-center gap-1.5 rounded bg-black/80 px-2 py-0.5 text-[10px] font-bold text-slate-300 border border-white/5 font-mono">
              1080p Ultra-HD
            </span>
          </div>

          {/* Glowing Play Overlay when paused */}
          {!isPlaying && (
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <button
                onClick={() => setIsPlaying(true)}
                className="size-20 rounded-full bg-primary/20 border border-primary/45 flex items-center justify-center text-primary shadow-2xl backdrop-blur-sm hover:scale-105 hover:bg-primary/30 transition-all duration-300"
              >
                <Play className="size-8 fill-current text-primary ml-1" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
