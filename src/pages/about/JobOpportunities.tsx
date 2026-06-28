import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function JobOpportunities() {
  return (
    <div className="py-24 max-w-7xl mx-auto px-6 md:px-12 text-left">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <span className="text-xs font-bold text-primary uppercase tracking-widest mb-3 block">
          Careers
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
          Job Opportunities
        </h1>
        <Separator className="mb-12 bg-border" />

        <div className="space-y-8 text-base text-muted-foreground leading-relaxed">
          <p className="text-lg md:text-xl text-foreground font-medium max-w-3xl">
            AECCI offers a world of opportunities to educated, talented and confident youngsters. Our work culture
            allows you to enhance your skills, explore your talent and get correctly rewarded for your caliber.
          </p>

          <p className="max-w-3xl">
            Interested candidates can see the current job openings or can drop in their resumes for future openings.
          </p>

          <Card className="border-border shadow-sm max-w-3xl">
            <CardContent className="p-8 md:p-10 flex flex-col gap-6">
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4">Submit Your CV</h2>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  At AECCI we invest heavily into our employee's training and development. Be a part of a dynamic team
                  of professionals and see your career soar with one of the biggest Chambers in the world.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  If you don't find any position available of your interest, you can mail your resume at{" "}
                  <a
                    href="mailto:hr@aecci.org.in"
                    className="text-primary underline underline-offset-2 hover:text-primary/80 transition-colors"
                  >
                    hr@aecci.org.in
                  </a>{" "}
                  or{" "}
                  <a
                    href="mailto:info@aecci.org.in"
                    className="text-primary underline underline-offset-2 hover:text-primary/80 transition-colors"
                  >
                    info@aecci.org.in
                  </a>
                </p>
              </div>

              <Separator className="bg-border" />

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="mailto:hr@aecci.org.in"
                  className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-semibold px-6 py-2.5 rounded-full text-sm shadow-sm hover:bg-primary/90 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  Mail HR
                </a>
                <a
                  href="mailto:info@aecci.org.in"
                  className="inline-flex items-center justify-center gap-2 border border-border text-foreground font-semibold px-6 py-2.5 rounded-full text-sm hover:bg-muted transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  General Enquiry
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </motion.div>
    </div>
  );
}
