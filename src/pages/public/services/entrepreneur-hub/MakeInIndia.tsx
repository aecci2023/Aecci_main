import { motion } from "framer-motion";

export default function MakeInIndia() {
  return (
    <div className="py-24 max-w-[1280px] mx-auto px-6 md:px-12 text-left">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <span className="text-xs font-bold text-primary uppercase tracking-widest mb-3 block">
          Entrepreneur Hub
        </span>
        <h1 className="font-heading font-black text-4xl md:text-5xl text-foreground mb-8">
          Make in India
        </h1>

        <div className="space-y-6 font-body text-base text-muted-foreground leading-relaxed">
          <p className="text-xl font-medium text-foreground mb-8">
            Make in India is an initiative by the Government of India to
            encourage companies to manufacture in India and incentivize
            dedicated investments into manufacturing.
          </p>

          <p>
            Make in India is a major national program of the Government of India
            designed to facilitate investment, foster innovation, enhance skill
            development, protect intellectual property and build best in class
            manufacturing infrastructure in the country. The primary objective
            of this initiative is to attract investments from across the globe
            and strengthen India's manufacturing sector. It is being led by the
            Department for Promotion of Industry and Internal Trade (DPIIT),
            Ministry of Commerce and Industry, Government of India. The Make in
            India program is very important for the economic growth of India as
            it aims at utilizing the existing Indian talent base, creating
            additional employment opportunities and empowering the secondary and
            tertiary sector. The program also aims at improving India's rank on
            the Ease of Doing Business index by eliminating unnecessary laws and
            regulations, making bureaucratic processes easier, making the
            government more transparent, responsive and accountable.
          </p>

          <blockquote className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-xl italic font-heading text-lg text-foreground/80 my-8 shadow-sm">
            "I want to tell the people of the whole world: Come, make in India.
            Come and manufacture in India. Go and sell in any country of the
            world, but manufacture here. We have the skill, talent, discipline
            and the desire to do something. We want to give the world an
            opportunity to come make in India," — Prime Minister Narendra Modi,
            Independence Day Speech, August 15, 2014. The initiative was
            formally introduced on September 25, 2014 at Vigyan Bhawan, New
            Delhi.
          </blockquote>

          <p>
            The focus of the Make in India program is on 25 sectors:
            automobiles, automobile components, aviation, biotechnology,
            chemicals, construction, defence manufacturing, electrical
            machinery, electronic systems, food processing, IT & BPM, leather,
            media and entertainment, mining, oil and gas, pharmaceuticals, ports
            and shipping, railways, renewable energy, roads and highways, space,
            textile and garments, thermal power, tourism and hospitality and
            wellness.
          </p>

          <div className="pt-8">
            <a
              href="https://www.makeinindia.com/"
              target="_blank"
              rel="noreferrer"
              className="bg-primary text-primary-foreground font-bold px-8 py-3 rounded-full text-sm shadow-md hover:bg-primary/90 transition-colors inline-block"
            >
              Register Here →
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
