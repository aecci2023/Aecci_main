"use client";
import React from "react";
import { motion } from "framer-motion";

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
    text: "Highly professional chamber admin staff. Attestation fee structures are transparent, and guidelines are extremely straightforward.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100",
    name: "Rajesh Kumar",
    role: "Managing Director, Indus Agro & Spices",
  },
];

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6 bg-transparent"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, image, name, role }, i) => (
                <div className="p-8 rounded-3xl border border-border bg-card/60 backdrop-blur-md shadow-lg shadow-primary/5 max-w-xs w-full text-left" key={i}>
                  <div className="text-sm text-muted-foreground leading-relaxed">"{text}"</div>
                  <div className="flex items-center gap-3 mt-5">
                    <img
                      width={40}
                      height={40}
                      src={image}
                      alt={name}
                      className="h-10 w-10 rounded-full object-cover border border-border"
                    />
                    <div className="flex flex-col">
                      <div className="font-heading font-bold text-xs text-foreground tracking-tight leading-4">{name}</div>
                      <div className="text-[10px] text-muted-foreground leading-4">{role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};

export default function MemberTestimonials() {
  return (
    <section className="py-24 bg-zinc-50 dark:bg-transparent relative overflow-hidden border-t border-border">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-heading font-black text-foreground md:text-5xl">
            Trusted by Leading Exporters
          </h2>
          <p className="mt-4 text-muted-foreground text-sm md:text-base">
            Hear from our registered members about how AECCI's trade facilitation, digital attestations, and compliance desks support their global business.
          </p>
        </div>
        
        <div className="flex justify-center gap-6 h-[480px] overflow-hidden relative">
          <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-zinc-50 via-zinc-50/50 to-transparent dark:from-background dark:via-background/50 dark:to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-zinc-50 via-zinc-50/50 to-transparent dark:from-background dark:via-background/50 dark:to-transparent z-10 pointer-events-none" />
          
          <TestimonialsColumn testimonials={testimonials.slice(0, 2)} duration={15} />
          <TestimonialsColumn testimonials={testimonials.slice(2, 4)} duration={18} className="hidden sm:block" />
          <TestimonialsColumn testimonials={testimonials} duration={22} className="hidden md:block" />
        </div>
      </div>
    </section>
  );
}