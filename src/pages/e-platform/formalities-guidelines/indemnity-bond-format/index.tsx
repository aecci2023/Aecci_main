import { motion, type Variants } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" },
  }),
};

const Section = ({
  title,
  children,
  delay = 0,
}: {
  title: string;
  children: React.ReactNode;
  delay?: number;
}) => (
  <motion.section
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    custom={delay}
    variants={fadeUp}
    className="mb-16"
  >
    <div className="flex items-center gap-3 mb-8">
      <div className="h-8 w-1.5 bg-primary rounded-full"></div>
      <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground">
        {title}
      </h2>
    </div>
    {children}
  </motion.section>
);

const NumberedStep = ({ index, title }: { index: number; title: string }) => (
  <div className="flex items-center gap-4 bg-muted/30 p-4 rounded-xl border border-border">
    <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold flex-shrink-0">
      {index}
    </div>
    <span className="text-foreground/80 font-medium">{title}</span>
  </div>
);

export default function IndemnityBondFormatPage() {
  const steps = [
    "Download the format",
    "Take it on 100/- Rs. Stamp paper",
    "Check it out for accuracy",
    "Signed by the authorized person",
    "Stamp it with the company seal",
    "Get it Notarised",
    "Submit it to the chamber desk",
  ];

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-foreground overflow-hidden py-24 md:py-32">
        <div className="absolute inset-0 bg-primary/10 blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="max-w-3xl mx-auto"
          >
            <span className="text-xs font-bold text-primary uppercase tracking-widest mb-4 block">
              Formalities & Guidelines
            </span>
            <h1 className="text-3xl md:text-5xl font-bold text-background leading-tight mb-6">
              Indemnity Bond <span className="text-primary">Format</span>
            </h1>
            <p className="text-background/70 text-base md:text-lg leading-relaxed mb-4">
              Asian Exporters' Chamber of Commerce And Industry
            </p>
          </motion.div>
        </div>
      </section>

      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <Section title="Indemnity Bond Information" delay={1}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="border-border shadow-sm">
                <CardContent className="p-8 h-full flex flex-col justify-center">
                  <p className="text-foreground/80 text-lg leading-relaxed mb-6">
                    The authentication and attestation of documents are carried
                    out based on Indemnity Bond submitted by the exporter. The
                    bond is submitted at the time of applying for membership
                    only. It is a continuing Indemnity Bond and need not be
                    submitted with every set of documents.
                  </p>
                  <p className="text-foreground/80 text-lg leading-relaxed mb-8">
                    Exporter members are supposed to submit the indemnity bond
                    on Rs. 100 stamp paper, duly signed and notarized as per the
                    format attached and addressed to The Asian Exporters Chamber
                    Of Commerce And Industry.
                  </p>

                  <div className="mt-auto pt-4 border-t border-border/50">
                    <Button className="w-full sm:w-auto" size="lg">
                      <Download className="mr-2 h-5 w-5" />
                      Download Indemnity Bond Format
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border shadow-sm bg-primary/5">
                <CardContent className="p-8 h-full">
                  <h3 className="text-xl font-semibold mb-6 text-foreground/90 flex items-center gap-2">
                    <CheckCircle2 className="text-primary" />
                    Please follow the steps:
                  </h3>
                  <div className="flex flex-col space-y-3">
                    {steps.map((step, i) => (
                      <NumberedStep key={i} index={i + 1} title={step} />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </Section>
        </div>
      </main>
    </div>
  );
}
