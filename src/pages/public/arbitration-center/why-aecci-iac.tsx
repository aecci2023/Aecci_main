import { motion } from "framer-motion";
import {
  ArrowRight,
  ShieldCheck,
  Scale,
  Globe,
  BookOpen,
  Users,
  Lightbulb,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const officeImages = [
  "/src/assets/images/officeadministration/1.png",
  "/src/assets/images/officeadministration/2.png",
  "/src/assets/images/officeadministration/3.png",
  "/src/assets/images/officeadministration/4.png",
  "/src/assets/images/officeadministration/5.png",
  "/src/assets/images/officeadministration/6.png",
];

const features = [
  {
    icon: ShieldCheck,
    title: "Integrity & Impartiality",
    desc: "Our panel of experienced arbitrators ensures a thorough and impartial process, guided by internationally recognized arbitration rules and principles.",
  },
  {
    icon: Scale,
    title: "Fair & Efficient Resolution",
    desc: "AECCI-IAC has assisted clients in quickly, equitably, and affordably resolving conflicts — maintaining good business relationships throughout.",
  },
  {
    icon: Globe,
    title: "Cross-Border Expertise",
    desc: "Specialized expertise covering manufacturing, exports, imports, services, and more — addressing the unique challenges of today's globalized economy.",
  },
  {
    icon: Users,
    title: "Alternative Dispute Resolution",
    desc: "Our specialists provide members with ADR services — facilitating discussions and drafting agreements that preserve business relationships.",
  },
  {
    icon: BookOpen,
    title: "Knowledge Hub",
    desc: "We offer training programs, seminars, and workshops to enhance understanding of international arbitration and trade-related matters.",
  },
  {
    icon: Lightbulb,
    title: "Flexible Framework",
    desc: "An adaptable arbitration framework tailored to the specific needs of multinationals, SMEs, and individual entrepreneurs alike.",
  },
];

export default function WhyAecciIac() {
  return (
    <div className="w-full bg-background text-foreground">
      {/* Hero */}
      <section className="relative w-full py-16 md:py-24 bg-foreground overflow-hidden flex items-center">
        <div className="absolute right-0 top-0 w-1/2 h-full bg-primary/20 blur-[100px] pointer-events-none rounded-full translate-x-1/3 -translate-y-1/4 z-0" />
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="text-xs font-bold text-primary uppercase tracking-widest mb-3 block">
              Arbitration Center
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-background mb-6 leading-tight">
              Why <span className="text-primary">AECCI-IAC?</span>
            </h1>
            <p className="text-background/70 text-base md:text-lg leading-relaxed">
              Your trusted partner in International Trade and Dispute Resolution
              — providing efficient, fair, and affordable arbitration services
              for businesses in the global marketplace.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 md:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs font-bold text-primary uppercase tracking-widest mb-3 block">
                Welcome
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-5">
                A Premier Institution for Fair Trade Practices
              </h2>
              <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
                <p>
                  AECCI is reputable and skilled, having assisted clients in
                  quickly, equitably, and affordably resolving conflicts. As a
                  premier institution dedicated to promoting fair trade
                  practices and resolving commercial disputes,{" "}
                  <strong className="text-foreground">
                    Asian Exporters Chamber of Commerce and Industry —
                    International Arbitration Center
                  </strong>{" "}
                  is at the forefront of providing efficient and effective
                  arbitration services for businesses operating in the global
                  marketplace.
                </p>
                <p>
                  With a strong commitment to upholding integrity, transparency,
                  and impartiality, AECCI-IAC offers a trusted platform for
                  parties to resolve their disputes through arbitration. Our
                  panel of experienced arbitrators, legal experts, and industry
                  professionals ensure a thorough and impartial process, guided
                  by internationally recognized arbitration rules and
                  principles.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="border-border shadow-sm">
                <CardContent className="p-8 space-y-4 text-sm text-muted-foreground leading-relaxed">
                  <p>
                    At AECCI-IAC, we recognize the diverse needs of businesses
                    engaged in cross-border trade and investment. Our
                    specialized expertise covers a wide range of industries,
                    including manufacturing, exports, imports, services, and
                    more. By providing a flexible and adaptable arbitration
                    framework, we are able to address the unique challenges
                    faced by businesses in today's globalized economy.
                  </p>
                  <p>
                    Our commitment to excellence extends beyond dispute
                    resolution. AECCI-IAC also serves as a{" "}
                    <strong className="text-foreground">knowledge hub</strong>,
                    offering training programs, seminars, and workshops to
                    enhance participants' understanding of international
                    arbitration and trade-related matters. Through collaboration
                    with renowned experts and institutions, we aim to promote
                    best practices, legal compliance, and professional
                    development within the business community.
                  </p>
                  <p>
                    Whether you are a multinational corporation, small and
                    medium-sized enterprise, or an individual entrepreneur,
                    AECCI-IAC stands ready to assist you in navigating the
                    complexities of international trade and resolving disputes
                    in a fair and efficient manner.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Features Grid */}
          <div className="text-center mb-12">
            <span className="text-xs font-bold text-primary uppercase tracking-widest mb-3 block">
              Our Strengths
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
              What Sets Us Apart
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-sm md:text-base leading-relaxed">
              Join us and experience the benefits of our esteemed arbitration
              services, tailored to meet your specific needs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.4 }}
              >
                <Card className="h-full border-border hover:border-primary/40 transition-colors group">
                  <CardContent className="p-6 flex flex-col gap-3">
                    <div className="p-2.5 bg-primary/10 rounded-lg text-primary w-fit group-hover:bg-primary/20 transition-colors">
                      <feature.icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.desc}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Office Administration Carousel */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 md:px-12">
          <div className="flex items-center justify-center gap-4 mb-10">
            <div className="h-px bg-primary flex-1 max-w-[250px]" />
            <h2 className="text-xl md:text-2xl font-bold text-primary uppercase tracking-wide whitespace-nowrap">
              Meet Our Office Administration
            </h2>
            <div className="h-px bg-primary flex-1 max-w-[250px]" />
          </div>
          <Carousel opts={{ align: "start", loop: true }} className="w-full">
            <CarouselContent className="-ml-2 md:-ml-4">
              {officeImages.map((src, idx) => (
                <CarouselItem
                  key={idx}
                  className="pl-2 md:pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
                >
                  <div className="w-full aspect-[4/3] overflow-hidden">
                    <img
                      src={src}
                      alt={`Office Administration ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-4 hidden md:flex" />
            <CarouselNext className="-right-4 hidden md:flex" />
          </Carousel>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 bg-foreground overflow-hidden">
        <div className="absolute inset-0 bg-primary/10 blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center text-center"
          >
            <img
              src="/arccilogoWithText.png"
              alt="AECCI Logo"
              className="w-32 h-auto object-contain mb-6"
            />
            <h2 className="text-3xl md:text-4xl font-bold text-background mb-4 uppercase tracking-wide">
              Resolve Disputes. Grow Confidently.
            </h2>
            <p className="text-background/60 text-base max-w-xl mb-8">
              Partner with AECCI-IAC for transparent, impartial, and efficient
              arbitration services designed for global trade.
            </p>
            <Link
              to="/arbitration-center"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-full font-semibold text-sm hover:bg-primary/90 transition-colors"
            >
              Explore Arbitration Center <ArrowRight className="size-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
