import { motion } from "framer-motion";
import { ArrowRight, RefreshCw, FileText, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const steps = [
  {
    step: "01",
    title: "Check Your Expiry Date",
    desc: "Log in to the AECCI e-Platform or contact us to verify your current membership expiry date before initiating renewal.",
  },
  {
    step: "02",
    title: "Download Renewal Form",
    desc: "Download the membership renewal form, fill it digitally, print, sign, and attach the required documents.",
  },
  {
    step: "03",
    title: "Submit & Pay",
    desc: "Submit the signed form along with the renewal fee via our e-Platform or deliver it to the AECCI head office.",
  },
  {
    step: "04",
    title: "Receive Renewed Certificate",
    desc: "Upon verification and payment confirmation, your renewed Certificate of Membership will be issued promptly.",
  },
];

export default function RenewMembership() {
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
              Membership
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-background mb-6 leading-tight">
              Renew Your <span className="text-primary">Membership</span>
            </h1>
            <p className="text-background/70 text-base md:text-lg leading-relaxed">
              Keep your AECCI membership active and continue enjoying
              uninterrupted access to chamber services, trade networks, and
              exclusive member benefits.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20 md:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <span className="text-xs font-bold text-primary uppercase tracking-widest mb-3 block">
              Process
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
              How to Renew
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-sm md:text-base leading-relaxed">
              Follow these simple steps to renew your AECCI membership without
              any hassle.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.4 }}
              >
                <Card className="h-full border-border hover:border-primary/40 transition-colors group">
                  <CardContent className="p-6 flex flex-col gap-3">
                    <span className="text-4xl font-black text-primary/20 group-hover:text-primary/40 transition-colors">
                      {item.step}
                    </span>
                    <h3 className="text-base font-bold text-foreground">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.desc}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Actions */}
      <section className="py-20 md:py-24 bg-background border-t border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs font-bold text-primary uppercase tracking-widest mb-3 block">
                Quick Actions
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Ready to Renew?
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed mb-8">
                Renew online through the AECCI e-Platform or download the
                renewal form and submit it to our office. Our membership team is
                available to assist you.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://e-platform.aecci.org.in/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold text-sm hover:bg-primary/90 transition-colors"
                >
                  <RefreshCw className="w-4 h-4" />
                  Renew Online
                </a>
                <Link
                  to="/services/membership/guidelines-and-form"
                  className="inline-flex items-center gap-2 border border-border text-foreground px-6 py-3 rounded-full font-semibold text-sm hover:bg-muted transition-colors"
                >
                  <FileText className="w-4 h-4" />
                  Download Form
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="border-border">
                <CardContent className="p-8 flex flex-col gap-5">
                  <h3 className="text-lg font-bold text-foreground">
                    Need Help?
                  </h3>
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-sm mb-0.5">
                        Email Us
                      </p>
                      <a
                        href="mailto:membership@aecci.org.in"
                        className="text-primary hover:underline text-sm"
                      >
                        membership@aecci.org.in
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-sm mb-0.5">
                        Call Us
                      </p>
                      <p className="text-muted-foreground text-sm">
                        Available Mon–Sat, 10am–6pm
                      </p>
                    </div>
                  </div>
                  <Separator className="bg-border" />
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Hilton Towers, 604, 6th Floor, Plot No.66, Sector 11, CBD
                    Belapur, Navi Mumbai, Maharashtra 400614
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
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
              Stay connected with AECCI's exclusive chamber network and keep
              your international market access active.
            </p>
            <Link
              to="/services/membership"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-full font-semibold text-sm hover:bg-primary/90 transition-colors"
            >
              Back to Membership <ArrowRight className="size-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
