import { motion } from "framer-motion";

import aiMagazineCover from "@/assets/magzines/AI-IN-INTERNATIONAL-TRADE-VOL-V.png";
import pharmaMagazineCover from "@/assets/magzines/ASIAN-PHARMA-CHEMICAL-OUTLOOK-2022-23.png";
import tradeMagazineCover from "@/assets/magzines/AM-II-Trade-Assistance-Guidelines.png";
import globalMagazineCover from "@/assets/magzines/Global-Perspective-2017-18.png";
import agroMagazineCover from "@/assets/magzines/AECCI_AM20-21_web-version-2.png";

import aiMagazinePdf from "@/assets/magzines/AI-IN-INTERNATIONAL-TRADE-VOL-V.pdf";
import pharmaMagazinePdf from "@/assets/magzines/ASIAN-PHARMA-CHEMICAL-OUTLOOK-2022-23.pdf";
import tradeMagazinePdf from "@/assets/magzines/AM-II-Trade-Assistance-Guidelines.pdf";
import globalMagazinePdf from "@/assets/magzines/Global-Perspective-2017-18.pdf";
import agroMagazinePdf from "@/assets/magzines/AECCI_AM20-21_web-version-2.pdf";

const magazines = [
  {
    title: "AI In International Trade 2023-2024",
    image: aiMagazineCover,
    pdf: aiMagazinePdf,
  },
  {
    title: "Asian Pharma & Chemical Outlook 2022-23",
    image: pharmaMagazineCover,
    pdf: pharmaMagazinePdf,
  },
  {
    title: "Agroindustry 2019-20",
    image: agroMagazineCover,
    pdf: agroMagazinePdf,
  },
  {
    title: "Trade Assistance Guidelines 2018-19",
    image: tradeMagazineCover,
    pdf: tradeMagazinePdf,
  },
  {
    title: "Global Perspective 2017-18",
    image: globalMagazineCover,
    pdf: globalMagazinePdf,
  },
];

export function MagazinesSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-center mb-16 relative">
          <div className="absolute inset-x-0 h-px bg-primary/30 z-0"></div>
          <h2 className="text-2xl md:text-3xl font-bold text-primary bg-background px-6 z-10 text-center">
            Magazines Published Till Date
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
          {magazines.map((mag, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center group"
            >
              <a
                href={mag.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full relative rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-border bg-muted/20"
              >
                <div className="aspect-[3/4] w-full overflow-hidden">
                  <img
                    src={mag.image}
                    alt={mag.title}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300 flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 bg-background/90 text-foreground px-4 py-2 rounded-full text-sm font-medium transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                    Read Magazine
                  </span>
                </div>
              </a>
              <h3 className="mt-6 text-center text-foreground font-semibold text-lg max-w-[250px]">
                {mag.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
