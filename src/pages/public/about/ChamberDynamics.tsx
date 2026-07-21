import { motion } from "framer-motion";

export default function ChamberDynamics() {
  return (
    <div className="py-24 max-w-4xl mx-auto px-6 md:px-12 text-left">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <span className="text-xs font-bold text-primary uppercase tracking-widest mb-3 block">
          Chamber Initiatives
        </span>
        <h1 className="font-heading font-black text-4xl md:text-5xl text-foreground mb-8">
          Chamber Dynamics
        </h1>

        <div className="space-y-8 font-body text-base text-muted-foreground leading-relaxed">
          <p className="text-xl font-medium text-foreground mb-12">
            Takes such initiatives that recognize your business efforts and
            contribution to the economic development at National and Global
            level. We adopt the dynamic strategies to award the best business
            practices.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="bg-card border border-border p-6 rounded-2xl shadow-sm">
              <h2 className="font-heading font-black text-2xl text-foreground mb-3">
                Business Excellence Award
              </h2>
              <p>
                We recognizes the businesses with extraordinary efforts and
                results. On our mega event of “Business Excellence Award”.
              </p>
            </div>

            <div className="bg-card border border-border p-6 rounded-2xl shadow-sm">
              <h2 className="font-heading font-black text-2xl text-foreground mb-3">
                Women Empowerment
              </h2>
              <p>
                Strongly believes in gender equality and supports in creating
                platform for women entrepreneur so that their voice can be heard
                on every channel and they can feel proud, self-sufficient and
                recognized.
              </p>
            </div>

            <div className="bg-card border border-border p-6 rounded-2xl shadow-sm">
              <h2 className="font-heading font-black text-2xl text-foreground mb-3">
                Annual Celebration
              </h2>
              <p>
                The Annual celebration offers an opportunity to celebrate the
                accomplishments of the past year and to kick off the New Year.
              </p>
            </div>

            <div className="bg-card border border-border p-6 rounded-2xl shadow-sm">
              <h2 className="font-heading font-black text-2xl text-foreground mb-3">
                Council for Chamber of Commerce
              </h2>
              <p>
                Initiated a major project with title “CHAMBER OF COMMERCE AND
                INDUSTRY; AN IMPOTANT WINDOW FOR ECONOMIC DEVELOPMENT OF INDIA”
                that was submitted to Ministry of Commerce and Industry,
                Government of India.
              </p>
            </div>
          </div>

          <div className="pt-8">
            <button className="bg-primary text-primary-foreground font-bold px-6 py-3 rounded-full text-sm shadow-md hover:bg-primary/90 transition-colors">
              VIEW THE FULL PRE-EVENT BROCHURE
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
