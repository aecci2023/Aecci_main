import * as React from "react";
import { motion } from "framer-motion";
import { Play, Volume2, Film } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function VideoExplainer() {
  const [isPlaying, setIsPlaying] = React.useState(false);

  return (
    <section className="bg-background py-16 md:py-24 border-b border-border/60 relative overflow-hidden">
      <div className="mx-auto max-w-[1280px] px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <Badge className="bg-primary/10 text-primary border-primary/20 mb-4 px-3 py-1 font-mono uppercase tracking-widest text-xs">
            Platform Explainer
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground tracking-tight flex items-center justify-center gap-3">
            <Film className="size-8 text-primary shrink-0" /> WHY THE AECCI GLOBAL DEAL ROOM?
          </h2>
        </div>

        <div className="relative aspect-[16/9] w-full max-w-4xl mx-auto rounded-3xl border border-border overflow-hidden bg-muted shadow-2xl group">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-[1.02]"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=1600')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/30 to-transparent z-[1]" />
          <div className="absolute inset-0 bg-foreground/45 z-[1]" />

          <div className="absolute inset-x-0 bottom-0 p-6 md:p-10 z-10 flex flex-col justify-end items-start gap-4">
            <Badge className="bg-destructive text-destructive-foreground border-none text-[9px] font-bold tracking-widest uppercase py-0.5 px-2">
              AECCI ORIGINAL
            </Badge>

            <h3 className="text-xl md:text-3xl font-bold text-background leading-none tracking-tight">
              Global Deal Room: Redefining Export Matchmaking
            </h3>

            <p className="text-background/70 text-xs md:text-sm max-w-xl font-light leading-relaxed hidden sm:block">
              Watch our 90-second platform walk-through to see how Indian trade councils, verified distributors, and custom clearing networks orchestrate tariff-free corridors.
            </p>

            <div className="flex items-center gap-3 mt-2 w-full sm:w-auto">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="flex-1 sm:flex-none flex items-center justify-center gap-2 h-11 px-6 rounded-lg bg-background text-foreground hover:bg-background/90 transition-colors font-bold text-xs"
              >
                <Play className="size-4 fill-current" />
                {isPlaying ? "Pause Preview" : "Play Trailer"}
              </button>

              <button className="h-11 w-11 flex items-center justify-center rounded-lg bg-background/10 hover:bg-background/20 border border-background/15 text-background transition-colors">
                <Volume2 className="size-4" />
              </button>

              <span className="text-[10px] text-muted-foreground font-mono tracking-widest uppercase ml-auto sm:ml-4 font-bold">
                90 SECONDS COMMERCIAL • MUTED LOOP
              </span>
            </div>
          </div>

          <div className="absolute top-6 right-6 z-10 flex gap-2">
            <span className="inline-flex items-center gap-1.5 rounded bg-foreground/80 px-2 py-0.5 text-[10px] font-bold text-background/60 border border-background/5 font-mono">
              1080p Ultra-HD
            </span>
          </div>

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
  );
}
