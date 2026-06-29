import { motion, type Variants } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

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

const BulletList = ({ items }: { items: string[] }) => (
  <ul className="space-y-3 mb-4">
    {items.map((item, i) => (
      <li
        key={i}
        className="flex items-start gap-3 text-base text-foreground/80"
      >
        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

export default function CooFormatPage() {
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
              COO <span className="text-primary">Format</span>
            </h1>
            <p className="text-background/70 text-base md:text-lg leading-relaxed mb-4">
              Asian Exporters' Chamber of Commerce And Industry
            </p>
          </motion.div>
        </div>
      </section>

      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <Section title="Certificate of Origin" delay={1}>
            <Card className="border-border shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-8">
                <p className="text-foreground/80 text-lg leading-relaxed mb-8">
                  A Certificate of origin is an essential document in
                  international trade and is the proof certifying the origin of
                  the products being traded, which is, in turn, the basis to
                  determine the tariffs and other trade measures that will be
                  applied.
                </p>

                <h3 className="text-xl font-semibold mb-4 text-foreground/90">
                  Two types of Certificate of Origin are accepted World Wide:
                </h3>

                <div className="mb-8 pl-2 border-l-2 border-primary/30">
                  <BulletList
                    items={[
                      "Certificate of Origin- Preferential",
                      "Certificate of Origin- Non-Preferential",
                    ]}
                  />
                </div>

                <div className="bg-primary/5 rounded-xl p-6 border border-primary/20">
                  <p className="text-foreground/90 text-base leading-relaxed mb-4">
                    <strong>AECCI</strong> issues the{" "}
                    <strong>Non-Preferential Certificate of Origin</strong> to
                    its exporter members that is accepted worldwide.
                  </p>
                  <p className="text-foreground/90 text-base leading-relaxed mb-4">
                    The Chamber on its discretion may attest or certify certain
                    commercial documents for Indian Companies.
                  </p>
                  <p className="text-foreground/90 text-base leading-relaxed">
                    For issuing the Certificate of Origin (Non-Preferential) and
                    to attest other shipping documents chamber charges a very
                    nominal fees that are decided by the chamber board members
                    and passed through a resolution.
                  </p>
                </div>
              </CardContent>
            </Card>
          </Section>
        </div>
      </main>
    </div>
  );
}
