import * as React from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Quotes } from "@phosphor-icons/react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import type { CarouselApi } from "@/components/ui/carousel";

import karimImg from "@/assets/testimonials/karim-adyel.png";
import jamilImg from "@/assets/testimonials/jamil-abdo.png";
import mikeImg from "@/assets/testimonials/mike-wilson.png";
import mobeenImg from "@/assets/testimonials/mobeen-rana.png";

interface Testimonial {
  readonly name: string;
  readonly role: string;
  readonly country: string;
  readonly text: string;
  readonly image: string | null;
  readonly initials?: string;
}

const TESTIMONIALS: readonly Testimonial[] = [
  {
    name: "Pr Karim Adyel",
    role: "Senior Attorney Adyel Law Firm",
    country: "Morocco",
    text: "It is a great honor for ADYEL LAW FIRM Morocco to become an official legal partner of AECCI Mumbai and the beginning of a fruitful collaboration in all areas and branches of international trade for the legal support of AECCI members.",
    image: karimImg,
  },
  {
    name: "Mr. Jafar Al-Sabbagh",
    role: "Partner Al-Khair Legal Attorneys",
    country: "Jordan",
    text: "AECCI has proven to be a highly professional and responsive organization, consistently facilitating valuable connections and opportunities across borders. Their dedication to supporting legal and commercial collaboration is commendable, and we are proud to be part of this dynamic network.",
    image: null,
    initials: "JS",
  },
  {
    name: "Dr. Jamil Abdo",
    role: "Partner Abdo Advogados",
    country: "Brazil",
    text: "Dear Members, Greetings from Brazil!! We are very happy with AECCI services and hope all of you are. To us it is very important to keep partnered as entities like this because we have answers when we need support.",
    image: jamilImg,
  },
  {
    name: "Mr. Mike Wilson",
    role: "CEO Go Exporting",
    country: "United Kingdom",
    text: "Go Exporting is proud and excited to be associated with AECCI supporting the activities of Indian exporters to the UK. Mike Wilson, CEO of the specialist export consultancy says “Our aims and those of AECCI are perfectly matched to help Asian exporters maximize their potential in the UK market with services including export readiness, market analysis, export strategy, route to market, plus practical support to identify new partners and distributors. We look forward to working together for many years to come.”",
    image: mikeImg,
  },
  {
    name: "Barrister Mobeen Rana",
    role: "Chairman/CEO M R Legal INN",
    country: "Pakistan",
    text: "AECCI has outperformed many other chambers of commerce in the region by introducing e-meetings, e-conferences, e-live webinars that has bridged the long commercial distances for promotion of trade and commerce amongst the international business community. I wish AECCI's distinguished leadership very best in carrying the vision forward.",
    image: mobeenImg,
  },
];

export default function NetworkingTestimonials() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;

    const updateState = () => {
      setCount(api.scrollSnapList().length);
      setCurrent(api.selectedScrollSnap());
    };

    const timer = setTimeout(updateState, 0);

    api.on("select", updateState);
    api.on("reInit", updateState);

    return () => {
      clearTimeout(timer);
    };
  }, [api]);

  return (
    <section
      id="testimonials-section"
      className="py-12 md:py-24 bg-card/25 border-b border-border overflow-hidden"
    >
      <div className="mx-auto max-w-[1280px] px-6 md:px-12">
        {/* Redesigned Heading Block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-10 md:mb-16"
        >
          <span className="text-xs font-bold text-primary uppercase tracking-widest mb-3 block">
            GLOBAL ENDORSEMENTS
          </span>
          <h2 className="font-heading font-black text-3xl md:text-4xl text-foreground">
            What Our Partners Say
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-emerald-400 mx-auto mt-4 rounded-full" />
          <p className="font-body text-sm md:text-base text-muted-foreground mt-4 max-w-2xl mx-auto">
            Hear from our esteemed international trade consultants, legal
            advisors, and corporate partner representatives.
          </p>
        </motion.div>

        {/* Carousel implementation */}
        <div className="relative w-full">
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-6 py-4 flex items-stretch">
              {TESTIMONIALS.map((testimonial, idx) => (
                <CarouselItem
                  key={idx}
                  className="pl-6 md:basis-1/2 lg:basis-1/3 flex flex-col"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                    className="h-full w-full flex flex-col flex-1"
                  >
                    <Card className="h-full border-border bg-card shadow-lg hover:shadow-2xl hover:border-primary/40 transition-all duration-300 p-8 relative overflow-hidden flex flex-col justify-between group">
                      {/* Quotes Icon */}
                      <Quotes className="absolute top-6 right-6 size-12 text-primary/10 rotate-180 pointer-events-none transition-transform duration-500 group-hover:scale-110 group-hover:text-primary/15" />

                      {/* Quote Text */}
                      <div className="flex-grow flex items-start text-left">
                        <p className="text-xs md:text-sm text-muted-foreground leading-relaxed italic relative z-10">
                          "{testimonial.text}"
                        </p>
                      </div>

                      {/* Author Block */}
                      <div className="pt-6 mt-6 border-t border-border/60 flex items-center gap-4 text-left shrink-0">
                        {/* Profile Image / Fallback Initials */}
                        {testimonial.image ? (
                          <div className="size-20 rounded-2xl overflow-hidden border border-primary/20 shrink-0 bg-muted shadow-sm">
                            <img
                              src={testimonial.image}
                              alt={testimonial.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        ) : (
                          <div className="size-20 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center font-heading font-black text-primary text-xl shrink-0 shadow-sm">
                            {testimonial.initials}
                          </div>
                        )}

                        {/* Details */}
                        <div className="flex flex-col min-w-0">
                          <span className="font-heading font-black text-sm text-foreground truncate">
                            {testimonial.name}
                          </span>
                          <span className="text-[10px] font-bold text-primary uppercase tracking-widest truncate mt-0.5">
                            {testimonial.role}
                          </span>
                          <span className="text-[9px] font-medium text-muted-foreground uppercase tracking-wider mt-0.5">
                            {testimonial.country}
                          </span>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Custom Carousel Arrows centered below the carousel */}
            <div className="flex items-center justify-center gap-3 mt-6 md:mt-10 z-20">
              <CarouselPrevious className="static translate-y-0 size-10 bg-background hover:bg-primary hover:text-primary-foreground border-border/80 shadow-md transition-colors" />

              {/* Dot Indicators */}
              <div className="flex items-center gap-1.5 px-4">
                {Array.from({ length: count }).map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => api?.scrollTo(idx)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      current === idx
                        ? "w-6 bg-primary"
                        : "w-1.5 bg-muted-foreground/35 hover:bg-muted-foreground/50"
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              <CarouselNext className="static translate-y-0 size-10 bg-background hover:bg-primary hover:text-primary-foreground border-border/80 shadow-md transition-colors" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
