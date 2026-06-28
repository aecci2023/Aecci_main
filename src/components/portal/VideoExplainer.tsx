import * as React from "react";
import { motion } from "framer-motion";
import { Play, Volume2, Film } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function VideoExplainer() {
  const [isPlaying, setIsPlaying] = React.useState(false);

  return (
    <section className="bg-background py-16 md:py-24 border-b border-border/60 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_50%,hsl(var(--primary)/0.04),transparent)] pointer-events-none" />

      <div className="mx-auto max-w-[1280px] px-6 md:px-12 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/8 border border-primary/15 text-primary text-xs font-semibold uppercase tracking-wider mb-5">
            <Film className="size-3.5" /> Platform Explainer
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground tracking-tight leading-[1.1] mb-4">
            Why the AECCI{" "}
            <span className="text-primary">Global Deal Room?</span>
          </h2>
          <p className="text-muted-foreground text-base leading-relaxed">
            Watch how Indian trade councils, verified distributors, and custom clearing networks orchestrate tariff-free corridors.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 32, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="relative aspect-[16/9] w-full max-w-5xl mx-auto rounded-3xl border border-border/60 overflow-hidden bg-muted shadow-2xl shadow-black/10 group"
        >
          {/* Background image */}
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-[1.02]"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=1600')" }}
          />

          {/* Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/30 to-transparent z-[1]" />
          <div className="absolute inset-0 bg-foreground/35 z-[1]" />

          {/* Top bar */}
          <div className="absolute top-5 left-5 right-5 flex items-center justify-between z-10">
            <Badge className="bg-destructive text-destructive-foreground border-none text-[9px] font-black tracking-widest uppercase py-1 px-2.5">
              AECCI ORIGINAL
            </Badge>
            <span className="inline-flex items-center gap-1.5 rounded-lg bg-foreground/70 backdrop-blur-sm px-2.5 py-1 text-[10px] font-bold text-background/60 border border-background/8 font-mono">
              1080p Ultra-HD
            </span>
          </div>

          {/* Center play button */}
          {!isPlaying && (
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <button
                onClick={() => setIsPlaying(true)}
                className="size-20 md:size-24 rounded-full bg-primary/20 border border-primary/40 backdrop-blur-md flex items-center justify-center text-primary shadow-2xl hover:scale-110 hover:bg-primary/30 hover:border-primary/60 transition-all duration-300 group/btn"
              >
                <Play className="size-8 md:size-10 fill-current text-primary ml-1 group-hover/btn:scale-105 transition-transform" />
              </button>
            </div>
          )}

          {/* Bottom content */}
          <div className="absolute inset-x-0 bottom-0 p-6 md:p-10 z-10 flex flex-col gap-4">
            <h3 className="text-xl md:text-3xl font-black text-background leading-tight tracking-tight max-w-lg">
              Global Deal Room: Redefining Export Matchmaking
            </h3>

            <p className="text-background/65 text-xs md:text-sm max-w-xl font-light leading-relaxed hidden sm:block">
              See how exporters, distributors, and trade councils connect through verified corridors.
            </p>

            <div className="flex items-center gap-3 flex-wrap">
              <Button
                onClick={() => setIsPlaying(!isPlaying)}
                size="sm"
                className="bg-background text-foreground hover:bg-background/90 font-bold text-xs rounded-lg gap-2 shadow-lg"
              >
                <Play className="size-3.5 fill-current" />
                {isPlaying ? "Pause Preview" : "Play Trailer"}
              </Button>

              <button className="size-9 flex items-center justify-center rounded-lg bg-background/10 hover:bg-background/20 border border-background/15 text-background transition-colors backdrop-blur-sm">
                <Volume2 className="size-4" />
              </button>

              <span className="text-[10px] text-background/40 font-mono tracking-widest uppercase ml-auto hidden md:block">
                90 SEC · MUTED LOOP
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
