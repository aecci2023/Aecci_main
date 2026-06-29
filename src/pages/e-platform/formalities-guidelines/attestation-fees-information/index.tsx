import { motion, type Variants } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { IndianRupee, FileText } from "lucide-react";

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

export default function AttestationFeesInformationPage() {
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
              Attestation <span className="text-primary">Fees Information</span>
            </h1>
            <p className="text-background/70 text-base md:text-lg leading-relaxed mb-4">
              Asian Exporters' Chamber of Commerce And Industry
            </p>
          </motion.div>
        </div>
      </section>

      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <Section title="Attestation Fees Information" delay={1}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="border-border shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-8 h-full flex flex-col justify-center">
                  <p className="text-foreground/80 text-lg leading-relaxed mb-6">
                    Below is the list of documents attested by AECCI and their
                    subsequent charges.
                  </p>
                  <p className="text-foreground/80 text-lg leading-relaxed mb-6">
                    For issuing the Certificate of Origin (non-preferential) and
                    to attest other shipping documents chamber charges a very
                    nominal fees that are decided by the chamber board members
                    and passed through a resolution.
                  </p>
                  <p className="text-foreground/80 text-lg leading-relaxed">
                    Apart from Certificate of Origin, the Chamber at its
                    discretion may attest or certify certain commercial
                    documents for Indian Companies. For this service, chamber
                    charges a nominal fees. Any change in the fees applicable is
                    intimated to the registered members very well in advance.
                  </p>
                </CardContent>
              </Card>

              <div className="space-y-6">
                <Card className="border-border shadow-sm bg-primary/5">
                  <CardContent className="p-8">
                    <p className="text-foreground/90 text-base leading-relaxed mb-0">
                      <strong>
                        Asian Exporters' Chamber Of Commerce & Industry
                      </strong>{" "}
                      is officially authorized by the Ministry Of Commerce,
                      Government of India to issue the Certificate of Origin
                      (Non-Preferential) with respect to goods exported from
                      India vide the DGFT Public Notice no. 55/2015-20 Dated
                      18.01.2018.
                    </p>
                  </CardContent>
                </Card>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Card className="border-primary/20 bg-primary/5 hover:bg-primary/10 transition-colors cursor-pointer group">
                    <CardContent className="p-6 flex flex-col items-center justify-center text-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <FileText className="w-6 h-6 text-primary" />
                      </div>
                      <span className="font-semibold text-foreground">
                        e-Platform Documents Attested
                      </span>
                    </CardContent>
                  </Card>

                  <Card className="border-primary/20 bg-primary/5 hover:bg-primary/10 transition-colors cursor-pointer group">
                    <CardContent className="p-6 flex flex-col items-center justify-center text-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <IndianRupee className="w-6 h-6 text-primary" />
                      </div>
                      <span className="font-semibold text-foreground">
                        e-Platform Attestation Fees
                      </span>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </Section>
        </div>
      </main>
    </div>
  );
}
