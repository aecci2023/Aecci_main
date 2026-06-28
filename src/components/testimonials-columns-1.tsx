"use client";
import React from "react";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { Card } from "@/components/ui/card";

export interface Testimonial {
  text: string;
  image: string;
  name: string;
  role: string;
}

export const testimonials: Testimonial[] = [
  {
    text: "The e-Platform reduced our Certificate of Origin processing time from 3 days to 15 minutes. Truly game-changing for our logistics team.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100",
    name: "Aisha Patel",
    role: "VP of Logistics, Indus Agro & Spices",
  },
  {
    text: "AECCI's legal wing and expert arbitration panels saved our international shipment dispute with swift mediation.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100",
    name: "Vikram Mehta",
    role: "Director, Siam Silk & Textiles",
  },
  {
    text: "Access to the comprehensive trade directory and bilateral research reports gave us a major edge in expanding to ASEAN markets.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=100",
    name: "Dr. Elena Rostova",
    role: "Chief Operating Officer, Lotus Biotech",
  },
  {
    text: "Highly professional chamber admin staff. Attestation fee structures are transparent and guidelines are extremely straightforward.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100",
    name: "Rajesh Kumar",
    role: "Managing Director, Indus Agro & Spices",
  },
];

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}) => (
  <div className={props.className}>
    <motion.div
      animate={{ translateY: "-50%" }}
      transition={{ duration: props.duration || 10, repeat: Infinity, ease: "linear", repeatType: "loop" }}
      className="flex flex-col gap-4 pb-4"
    >
      {[...new Array(2).fill(0).map((_, idx) => (
        <React.Fragment key={idx}>
          {props.testimonials.map(({ text, image, name, role }, i) => (
            <Card
              key={i}
              className="p-5 rounded-2xl border-border/60 bg-card/60 backdrop-blur-md shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300 max-w-xs w-full"
            >
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, si) => (
                  <Star key={si} className="size-3 fill-chart-4 text-chart-4" />
                ))}
              </div>
              <Quote className="size-5 text-primary/20 mb-2" />
              <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                "{text}"
              </p>
              <div className="flex items-center gap-3 pt-3 border-t border-border/50">
                <img
                  width={36}
                  height={36}
                  src={image}
                  alt={name}
                  className="size-9 rounded-full object-cover border border-border ring-2 ring-background"
                />
                <div>
                  <p className="font-bold text-xs text-foreground leading-none">{name}</p>
                  <p className="text-[10px] text-muted-foreground mt-0.5 leading-none">{role}</p>
                </div>
              </div>
            </Card>
          ))}
        </React.Fragment>
      ))]}
    </motion.div>
  </div>
);

export default function MemberTestimonials() {
  return (
    <section className="py-16 md:py-24 bg-background relative overflow-hidden border-t border-border/60">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,hsl(var(--primary)/0.04),transparent)] pointer-events-none" />

      <div className="mx-auto max-w-[1280px] px-6 md:px-12 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/8 border border-primary/15 text-primary text-xs font-semibold uppercase tracking-wider mb-5">
            <Star className="size-3.5 fill-current" /> Member Stories
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground tracking-tight leading-[1.1] mb-4">
            Trusted by Leading{" "}
            <span className="text-primary">Exporters</span>
          </h2>
          <p className="text-muted-foreground text-base leading-relaxed">
            Hear from registered members about how AECCI's trade facilitation, digital attestations, and compliance desks support their global business.
          </p>
        </div>

        <div className="flex justify-center gap-4 h-[520px] overflow-hidden relative">
          {/* Fade masks */}
          <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none" />

          <TestimonialsColumn testimonials={testimonials.slice(0, 2)} duration={16} />
          <TestimonialsColumn testimonials={testimonials.slice(2, 4)} duration={20} className="hidden sm:block" />
          <TestimonialsColumn testimonials={testimonials} duration={24} className="hidden md:block" />
        </div>
      </div>
    </section>
  );
}
