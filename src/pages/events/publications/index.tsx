import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, FileText, Phone } from "lucide-react";
import { Link } from "react-router-dom";

import agroMagazineCover from "@/assets/magzines/AECCI_AM20-21_web-version-2.png";
import aiMagazineCover from "@/assets/magzines/AI-IN-INTERNATIONAL-TRADE-VOL-V.png";
import tradeMagazineCover from "@/assets/magzines/AM-II-Trade-Assistance-Guidelines.png";
import pharmaMagazineCover from "@/assets/magzines/ASIAN-PHARMA-CHEMICAL-OUTLOOK-2022-23.png";
import globalMagazineCover from "@/assets/magzines/Global-Perspective-2017-18.png";

import agroMagazinePdf from "@/assets/magzines/AECCI_AM20-21_web-version-2.pdf";
import aiMagazinePdf from "@/assets/magzines/AI-IN-INTERNATIONAL-TRADE-VOL-V.pdf";
import tradeMagazinePdf from "@/assets/magzines/AM-II-Trade-Assistance-Guidelines.pdf";
import pharmaMagazinePdf from "@/assets/magzines/ASIAN-PHARMA-CHEMICAL-OUTLOOK-2022-23.pdf";
import globalMagazinePdf from "@/assets/magzines/Global-Perspective-2017-18.pdf";

const magazines = [
  {
    title: "AECCI Global Connect",
    year: "2025",
    description:
      "Our flagship publication covering global trade insights, export trends, and chamber activities for the year 2025.",
    image: null,
    pdf: null,
  },
  {
    title: "AI In International Trade",
    year: "2023–2024",
    description:
      "An in-depth exploration of how artificial intelligence is transforming international trade, logistics, and commerce.",
    image: aiMagazineCover,
    pdf: aiMagazinePdf,
  },
  {
    title: "Asian Pharma & Chemical Outlook",
    year: "2022–23",
    description:
      "A comprehensive outlook on the pharmaceutical and chemical industry across Asian markets.",
    image: pharmaMagazineCover,
    pdf: pharmaMagazinePdf,
  },
  {
    title: 'Annual Magazine "Agroindustry Exclusive"',
    year: "2019–20",
    description:
      "Exclusive insights into the agroindustry sector, highlighting opportunities for exporters and manufacturers.",
    image: agroMagazineCover,
    pdf: agroMagazinePdf,
  },
  {
    title: "Agroindustry",
    year: "2019–20",
    description:
      "Focused coverage of agro-based industries, export potential, and market developments.",
    image: null,
    pdf: null,
  },
  {
    title: "Trade Assistance Guidelines",
    year: "2018–19",
    description:
      "Practical guidelines and resources to assist businesses in navigating international trade procedures.",
    image: tradeMagazineCover,
    pdf: tradeMagazinePdf,
  },
  {
    title: "Global Perspective",
    year: "2017–18",
    description:
      "A broad view of global trade dynamics, international market trends, and AECCI's role in promoting exports.",
    image: globalMagazineCover,
    pdf: globalMagazinePdf,
  },
];

const newsletters = [
  {
    year: "FY 2025-26",
    volumes: [
      { id: "35", title: "AECCI Newsletter Vol- 35", pdf: "#" },
      { id: "34", title: "AECCI Newsletter Vol- 34", pdf: "#" },
      { id: "33", title: "AECCI Newsletter Vol- 33", pdf: "#" },
      { id: "32", title: "AECCI Newsletter Vol- 32", pdf: "#" },
    ],
  },
];

export default function PublicationsPage() {
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
            className="max-w-7xl mx-auto text-center"
          >
            <span className="text-xs font-bold text-primary uppercase tracking-widest mb-3 block">
              Media & Resources
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-background mb-6 leading-tight uppercase">
              Publications & E-Newsletters
            </h1>
            <p className="text-background/70 text-base md:text-lg leading-relaxed">
              Insights That Inform. Knowledge That Drives Global Growth.
            </p>
            <p className="text-background/60 text-sm md:text-base leading-relaxed mt-4">
              AECCI Publications serve as a trusted source of authentic, timely,
              and relevant information for international business stakeholders.
              Featuring expert opinions, industry reports, trade insights, and
              market intelligence, our publications are designed to support
              informed decision-making and sustainable business growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-7xl mx-auto text-center space-y-4"
          >
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              At the Asian Exporters' Chamber of Commerce & Industry (AECCI), we
              take pride in publishing insightful magazines and knowledge
              resources dedicated to promoting industry development across Asia
              and strengthening global trade awareness.
            </p>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              Our publications reach a wide and influential audience, including
              government ministries, embassies, trade bodies, industry leaders,
              and business professionals across the world.
            </p>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              With the integration of the AECCI Global Deal Room, our knowledge
              ecosystem now goes beyond print and digital publications —
              offering real-time access to global trade insights, expert
              perspectives, and international business opportunities.
            </p>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              Our mission is to empower businesses with the right knowledge,
              connections, and resources to thrive in an increasingly
              competitive global marketplace. We remain committed to fostering
              collaboration, encouraging dialogue, and strengthening
              understanding across industries and borders.
            </p>
            <p className="text-sm md:text-base font-semibold text-foreground leading-relaxed pt-2">
              Through knowledge, we build connections. Through connections, we
              create global opportunities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Magazines Published */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <span className="text-xs font-bold text-primary uppercase tracking-widest mb-3 block">
              Our Library
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Magazines Published Till Date
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {magazines.map((mag, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.07, duration: 0.4 }}
              >
                <Card className="h-full border-border hover:border-primary/40 transition-colors group overflow-hidden flex flex-col">
                  {mag.image && (
                    <a
                      href={mag.pdf || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block relative w-full aspect-[3/4] overflow-hidden bg-muted/20 border-b border-border"
                    >
                      <img
                        src={mag.image}
                        alt={mag.title}
                        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300 flex items-center justify-center">
                        <span className="opacity-0 group-hover:opacity-100 bg-background/90 text-foreground px-4 py-2 rounded-full text-sm font-medium transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                          Read Magazine
                        </span>
                      </div>
                    </a>
                  )}
                  <CardContent className="p-6 flex flex-col gap-4 flex-1">
                    {!mag.image && (
                      <div className="p-2.5 bg-primary/10 rounded-lg text-primary w-fit group-hover:bg-primary/20 transition-colors">
                        <BookOpen className="w-5 h-5" />
                      </div>
                    )}
                    <div>
                      <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                        {mag.year}
                      </span>
                      <h3 className="text-base font-bold text-foreground mt-1 leading-snug">
                        {mag.title}
                      </h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                      {mag.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* E-Newsletters */}
      <section id="e-newsletters" className="py-16 md:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <span className="text-xs font-bold text-primary uppercase tracking-widest mb-3 block">
              Stay Informed
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              E-Newsletters
            </h2>
            <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              Our monthly Newsletter brings insight into all developments,
              facilitation, business procedural amendments from customs and the
              Directorate General of Foreign Trade. Specialized and relevant
              information with comments from industry experts is made available
              to all our readers.
            </p>
          </motion.div>

          <div className="space-y-10">
            {newsletters.map((group, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05, duration: 0.4 }}
              >
                <h3 className="text-lg font-bold text-primary mb-3 pb-2 border-b border-border">
                  {group.year}
                </h3>
                <Accordion type="single" collapsible className="space-y-2">
                  {group.volumes.map((vol) => (
                    <AccordionItem
                      key={vol.id}
                      value={vol.id}
                      className="border border-border rounded-lg px-5 bg-background hover:border-primary/40 transition-colors data-[state=open]:border-primary/60"
                    >
                      <AccordionTrigger className="text-sm font-semibold text-foreground text-left py-4 hover:no-underline">
                        Volume {vol.id}
                      </AccordionTrigger>
                      <AccordionContent className="pb-4 pt-1">
                        <a
                          href={vol.pdf}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm text-primary hover:underline font-medium"
                        >
                          <FileText className="w-4 h-4 flex-shrink-0" />
                          {vol.title}
                        </a>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </motion.div>
            ))}
          </div>

          {/* Terms */}
          <div className="mt-12 text-xs text-muted-foreground leading-relaxed text-justify border-t border-border/50 pt-8">
            <strong className="text-foreground">Terms & Conditions:</strong>{" "}
            This publication is provided for general information purposes only
            and is not intended to cover every aspect of the topics with which
            it deals. It is not intended to amount to advice on which you should
            rely. You must obtain professional or specialist advice before
            taking, or refraining from, any action on the basis of the content
            in this publication. The information in this publication does not
            constitute legal, tax or other professional advice from Wise
            Payments Limited or its affiliates. Prior results do not guarantee a
            similar outcome. We make no representations, warranties or
            guarantees, whether express or implied, that the content in the
            publication is accurate, complete or up to date.
          </div>
        </div>
      </section>

      {/* Advertise CTA */}
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
              Advertise With AECCI!
            </h2>
            <p className="text-background/60 text-base max-w-2xl mb-3">
              Are you looking for an exceptional opportunity to expand your
              brand's reach and connect with potential customers in a diverse
              range of industries? Our magazine offers you the chance to feature
              your brand and reach importers, exporters, trade bodies,
              ministries, and embassies.
            </p>
            <p className="text-background/60 text-base max-w-2xl mb-10">
              By featuring your brand in our publication, you can be assured of
              maximum exposure and attention. Don't miss out on this opportunity
              to connect with potential customers and grow your business.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 mb-8">
              <Link
                to="/events/advertise-with-us"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-full font-semibold text-sm hover:bg-primary/90 transition-colors"
              >
                Visit Advertising Page <ArrowRight className="size-4" />
              </Link>
            </div>

            <div className="inline-flex items-center gap-3 bg-background/5 border border-background/10 rounded-xl px-8 py-5">
              <div className="p-2 bg-primary/10 rounded-lg text-primary">
                <Phone className="w-5 h-5" />
              </div>
              <div className="text-left">
                <p className="text-xs font-semibold uppercase tracking-wider text-background/50 mb-0.5">
                  To book an advert, call us on
                </p>
                <a
                  href="tel:+912241271145"
                  className="font-bold text-base text-background hover:text-primary transition-colors"
                >
                  +91-22-412 711 45 | 46 | 47
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
