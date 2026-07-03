import { Film } from "lucide-react";
import { HeroVideoDialog } from "@/components/ui/hero-video-dialog";

import videoThumb from "@/assets/videos/thumbnail.png";
import videoSrc from "@/assets/videos/globalconnect_new.mp4";

export default function VideoExplainer() {
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
          <p className="text-muted-foreground text-base leading-relaxed mb-8">
            Watch how Indian trade councils, verified distributors, and custom
            clearing networks orchestrate tariff-free corridors.
          </p>
        </div>

        <div className="relative mx-auto max-w-5xl">
          <HeroVideoDialog
            className="block"
            animationStyle="from-center"
            videoSrc={videoSrc}
            thumbnailSrc={videoThumb}
            thumbnailAlt="AECCI Global Deal Room Explainer"
            defaultOpen={false}
          />
        </div>
      </div>
    </section>
  );
}
