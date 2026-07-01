import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
import { ArrowRight, Award, Mail, TrendingUp, Users } from "lucide-react";
import { Link } from "react-router-dom";

const perks = [
  {
    icon: Users,
    title: "Dynamic Team",
    desc: "Work alongside passionate professionals in a collaborative, growth-focused environment.",
  },
  {
    icon: TrendingUp,
    title: "Career Growth",
    desc: "We invest heavily in training and development to help you reach your full potential.",
  },
  {
    icon: Award,
    title: "Rewarding Culture",
    desc: "Your caliber is recognized and correctly rewarded in our merit-driven work culture.",
  },
];

export default function JobOpportunities() {
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
              Careers
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-background mb-6 leading-tight">
              Job <span className="text-primary">Opportunities</span>
            </h1>
            <p className="text-background/70 text-base md:text-lg leading-relaxed">
              AECCI offers a world of opportunities to educated, talented and
              confident youngsters. Our work culture allows you to enhance your
              skills, explore your talent and get correctly rewarded for your
              caliber.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Perks */}
      <section className="py-20 md:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <span className="text-xs font-bold text-primary uppercase tracking-widest mb-3 block">
              Why Join Us
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
              Life at AECCI
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-sm md:text-base leading-relaxed">
              Be a part of a dynamic team of professionals and see your career
              soar with one of the biggest Chambers in the world.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
            {perks.map((perk, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.4 }}
              >
                <Card className="h-full border-border hover:border-primary/40 transition-colors group">
                  <CardContent className="p-6 flex flex-col gap-3">
                    <div className="p-2.5 bg-primary/10 rounded-lg text-primary w-fit group-hover:bg-primary/20 transition-colors">
                      <perk.icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-foreground">
                      {perk.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {perk.desc}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Apply Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="border-border shadow-sm max-w-3xl mx-auto">
              <CardContent className="p-8 md:p-10 flex flex-col gap-6">
                <div>
                  <h2 className="text-xl md:text-2xl font-bold text-foreground mb-3">
                    Submit Your CV
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-3 text-sm">
                    At AECCI we invest heavily into our employee's training and
                    development. Be a part of a dynamic team of professionals
                    and see your career soar with one of the biggest Chambers in
                    the world.
                  </p>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    If you don't find any position available of your interest,
                    you can mail your resume at{" "}
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
                    className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-semibold px-6 py-2.5 rounded-full text-sm hover:bg-primary/90 transition-colors"
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
          </motion.div>
        </div>
      </section>

      {/* Perks */}
<section className="py-20 md:py-24 bg-muted/30">
  <div className="max-w-7xl mx-auto px-6 md:px-12">



    {/* Current Opening */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mb-16"
    >
      <Card className="border-primary/20 shadow-sm overflow-hidden">
        <CardContent className="p-0">

          <div className="bg-primary px-8 py-6">
            <span className="text-primary-foreground/80 text-xs uppercase tracking-widest font-semibold">
              Current Opening
            </span>

            <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mt-2">
              Event Sales & Marketing Executive
            </h2>
          </div>

          <div className="p-8 md:p-10">

            <p className="text-muted-foreground leading-7 mb-8">
              Are you passionate about sales and skilled at convincing people?
              We're looking for a dynamic professional to maximize participation
              in business events and connect Indian businesses with global
              opportunities.
            </p>

            <div className="grid lg:grid-cols-2 gap-10">

              <div>
                <h3 className="font-bold text-lg mb-5">
                  Key Responsibilities
                </h3>

                <ul className="space-y-4">
                  <li>• Identify and connect with Indian exporters, manufacturers and MSMEs.</li>
                  <li>• Generate leads through calls, emails and outreach channels.</li>
                  <li>• Build strong relationships and convert leads into registrations.</li>
                  <li>• Follow up consistently and achieve sales targets.</li>
                  <li>• Coordinate with marketing and event teams to maximize participation.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-5">
                  Preferred Experience
                </h3>

                <ul className="space-y-4">
                  <li>• 2+ years in Event Sales, B2B Sales or Corporate Marketing.</li>
                  <li>• Familiarity with India's export ecosystem is an added advantage.</li>
                  <li>• Strong communication and relationship-building skills.</li>
                  <li>• Ability to influence decisions and drive event participation.</li>
                </ul>
              </div>

            </div>

            <div className="mt-10 rounded-xl bg-muted p-6 border">
              <p className="font-medium mb-5">
                If you have the ability to build relationships, influence decisions
                and drive event participation, we'd be glad to hear from you.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="mailto:hr@aecci.org.in"
                  className="bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold"
                >
                  Apply Now
                </a>

                <a
                  href="tel:8433720996"
                  className="border px-6 py-3 rounded-full font-semibold"
                >
                  📞 8433720996
                </a>
              </div>
            </div>

          </div>
        </CardContent>
      </Card>
    </motion.div>

    {/* Submit CV Card */}
    <motion.div>
      ...
    </motion.div>

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
              Come Grow With Us!
            </h2>
            <p className="text-background/60 text-base max-w-xl mb-8">
              Join AECCI's team and be part of a global chamber shaping
              international trade and business growth.
            </p>
            <Link
              to="/about/about-chamber"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-full font-semibold text-sm hover:bg-primary/90 transition-colors"
            >
              About AECCI <ArrowRight className="size-4" />
            </Link>
          </motion.div>
        </div>
      </section>
      
    </div>
  );
}
