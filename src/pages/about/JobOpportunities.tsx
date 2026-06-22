import { motion } from "framer-motion";

export default function JobOpportunities() {
  return (
    <div className="py-24 max-w-4xl mx-auto px-6 md:px-12 text-left">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <span className="text-xs font-bold text-primary uppercase tracking-widest mb-3 block">
          Careers
        </span>
        <h1 className="font-heading font-black text-4xl md:text-5xl text-foreground mb-8">
          Job Opportunities
        </h1>

        <div className="space-y-12 font-body text-base text-muted-foreground leading-relaxed">
          <p className="text-xl font-medium text-foreground">
            AECCI offers a world of opportunities to educated, talented and
            confident youngsters. Our Work culture allows you to enhance your
            skills, explore your talent and get correctly rewarded for your
            caliber. Interested candidates can see the current job openings or
            can drop in their resumes for future openings.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-card border border-border p-6 rounded-2xl shadow-sm flex flex-col justify-between items-start">
              <div>
                <h2 className="font-heading font-black text-xl text-foreground mb-3">
                  Openings
                </h2>
                <p className="text-sm mb-6">
                  Eligible candidates can see the currently available positions
                  and apply with detailed profile.
                </p>
              </div>
              <button className="bg-primary text-primary-foreground font-bold px-4 py-2 rounded-full text-xs shadow-md hover:bg-primary/90 transition-colors">
                Current Opening
              </button>
            </div>

            <div className="bg-card border border-border p-6 rounded-2xl shadow-sm flex flex-col justify-between items-start">
              <div>
                <h2 className="font-heading font-black text-xl text-foreground mb-3">
                  Submit Your CV
                </h2>
                <p className="text-sm mb-6">
                  If you don’t find any position available to your interest, you
                  may drop in your curriculum vitae for future openings.
                </p>
              </div>
              <button className="bg-primary text-primary-foreground font-bold px-4 py-2 rounded-full text-xs shadow-md hover:bg-primary/90 transition-colors">
                Submit Your CV
              </button>
            </div>

            <div className="bg-card border border-border p-6 rounded-2xl shadow-sm flex flex-col justify-between items-start">
              <div>
                <h2 className="font-heading font-black text-xl text-foreground mb-3">
                  Submit Professional profile
                </h2>
                <p className="text-sm mb-6">
                  Professional like Chartered Accountants, Company Secretaries
                  or Advocates who wish to be associated with AECCI wings, may
                  drop in detailed profile.
                </p>
              </div>
              <button className="bg-primary text-primary-foreground font-bold px-4 py-2 rounded-full text-xs shadow-md hover:bg-primary/90 transition-colors">
                Submit Professionals profile
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
