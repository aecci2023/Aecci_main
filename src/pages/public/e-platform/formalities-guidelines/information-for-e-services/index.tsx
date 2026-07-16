import { motion, type Variants } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { CheckCircle2, ChevronRight, FileText, Info } from "lucide-react";

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

const SubSection = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <div className="mb-10">
    <h3 className="text-xl font-semibold mb-4 text-foreground/90">{title}</h3>
    {children}
  </div>
);

const StepCard = ({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) => (
  <Card className="mb-4 border-l-4 border-l-primary hover:shadow-md transition-shadow">
    <CardContent className="p-5">
      <h4 className="font-semibold text-primary mb-3 flex items-center gap-2">
        <Badge variant="secondary" className="bg-primary/10 text-primary">
          {number}
        </Badge>
        {title}
      </h4>
      {children}
    </CardContent>
  </Card>
);

const Tips = ({ items }: { items: string[] }) => (
  <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-5 mb-6">
    <p className="text-sm font-bold text-amber-600 uppercase tracking-wide mb-3 flex items-center gap-2">
      <Info className="w-4 h-4" /> Key Tips
    </p>
    <ul className="space-y-2">
      {items.map((item, i) => (
        <li
          key={i}
          className="flex items-start gap-2 text-sm text-foreground/80"
        >
          <ChevronRight className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

const BulletList = ({ items }: { items: string[] }) => (
  <ul className="space-y-2 mb-2">
    {items.map((item, i) => (
      <li key={i} className="flex items-start gap-2 text-sm text-foreground/80">
        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

const InfoTable = ({
  headers,
  rows,
}: {
  headers: string[];
  rows: string[][];
}) => (
  <div className="overflow-x-auto mb-4 rounded-xl border border-border">
    <table className="w-full text-sm">
      <thead className="bg-muted/50">
        <tr>
          {headers.map((h, i) => (
            <th
              key={i}
              className="text-left px-5 py-3 font-semibold text-foreground/90 border-b border-border"
            >
              {h}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr
            key={i}
            className="hover:bg-muted/30 transition-colors border-b border-border/50 last:border-0"
          >
            {row.map((cell, j) => (
              <td key={j} className="px-5 py-3 text-foreground/80">
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default function InformationForEServicesPage() {
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
              Digital Service Portal
            </span>
            <h1 className="text-3xl md:text-5xl font-bold text-background leading-tight mb-6">
              Information For <span className="text-primary">E-Services</span>
            </h1>
            <p className="text-background/70 text-base md:text-lg leading-relaxed mb-4">
              Asian Exporters' Chamber of Commerce And Industry
            </p>
          </motion.div>
        </div>
      </section>

      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-6 py-16">
          {/* ── TRADE DOCUMENTATION ── */}
          <Section title="Trade Documentation" delay={1}>
            {/* eCO */}
            <SubSection title="Electronic Certificate of Origin (eCO)">
              <Tips
                items={[
                  "No page limits for digital print",
                  "Approved eCO copies are digitally stamped, signed, and dated at user's premises",
                  "Each copy downloadable up to 3 times; disabled after that",
                ]}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <StepCard number="#1" title="eCO Preparation">
                  <p className="text-sm text-foreground/80 mb-3">
                    All columns are mandatory. PDF format, max 5 MB each.
                  </p>
                  <BulletList
                    items={[
                      "Road transport: upload LR copies",
                      'Gulf shipments: Israeli Declaration must be marked "YES"',
                      "Default origin is India; re-exports must select explicitly",
                      "Re-export shipments: upload origin country COO",
                      "All entries in capital letters",
                      "Authorized signature must match registered list",
                    ]}
                  />
                </StepCard>

                <StepCard number="#2" title="Commercial Invoice">
                  <BulletList
                    items={[
                      "PDF only, max 5 MB",
                      "Signature must match eCO signature",
                      'If attestation not needed, tick "NO" but upload for reference',
                      "Include space at bottom for chamber attestation",
                    ]}
                  />
                </StepCard>

                <StepCard number="#3" title="Packing List">
                  <BulletList
                    items={[
                      "PDF only, max 5 MB",
                      "Signature must match eCO",
                      'If attestation not needed, tick "NO" but upload for reference',
                      "Include space at bottom for attestation",
                    ]}
                  />
                </StepCard>

                <StepCard number="#4" title="Additional Docs">
                  <BulletList
                    items={[
                      "PDF only, max 5 MB",
                      "Health, Phyto, Fumigation Certificates",
                      "Health & Phyto: colour scans only (no black & white)",
                    ]}
                  />
                </StepCard>

                <StepCard number="#5" title="Reference Docs">
                  <BulletList
                    items={[
                      "Uploaded for records only — no attestation",
                      "PDF only, max 5 MB",
                      "Road shipments: upload LR copies",
                    ]}
                  />
                </StepCard>

                <StepCard number="#6" title="Payment Process">
                  <div className="bg-muted rounded-lg p-3 text-sm mb-3 grid grid-cols-2 gap-2 border border-border">
                    <span className="font-semibold">A/c Name</span>
                    <span className="text-xs break-words">
                      ASIAN EXPORTERS CHAMBER OF COMM AND IND
                    </span>
                    <span className="font-semibold">A/c No</span>
                    <span className="text-xs">021688700000780</span>
                    <span className="font-semibold">IFSC</span>
                    <span className="text-xs">YESB0000216</span>
                  </div>
                  <BulletList
                    items={[
                      "Charges deducted from wallet; min balance ₹3,000",
                      "Use authorized bank account only",
                    ]}
                  />
                </StepCard>

                <StepCard number="#7" title="Document Tracking">
                  <BulletList
                    items={[
                      "Track via dashboard",
                      '"Rejected": reason provided',
                      '"Approved": view/download documents',
                    ]}
                  />
                </StepCard>

                <StepCard number="#8" title="Processing Time">
                  <BulletList
                    items={[
                      "Office hours: 30–180 mins",
                      "Available Mon–Sat, round the clock",
                      "Unavailable Sundays & holidays",
                    ]}
                  />
                </StepCard>
              </div>
            </SubSection>

            <Separator className="my-10" />

            {/* SeCO */}
            <SubSection title="Semi-Electronic Certificate of Origin (SeCO)">
              <Tips
                items={[
                  "1 original, max 2 pages",
                  "Chamber handles printing, stamping, and manual signing",
                  "Recommended for bank/LC transactions",
                ]}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <StepCard number="#6" title="Processing Fees">
                  <InfoTable
                    headers={["Particular", "Rate (₹)"]}
                    rows={[
                      ["COO (Manual)", "150"],
                      ["Commercial Invoice", "50"],
                      ["Packing List", "50"],
                      ["Additional Doc", "100"],
                    ]}
                  />
                </StepCard>

                <StepCard number="#7" title="Delivery Mode">
                  <InfoTable
                    headers={["Option", "Cost"]}
                    rows={[
                      ["Collect in person", "Free"],
                      ["Intercity & Gujarat", "₹100"],
                      ["Outside Maharashtra", "₹300"],
                    ]}
                  />
                </StepCard>
              </div>
            </SubSection>

            <Separator className="my-10" />

            {/* NSD */}
            <SubSection title="Non-Standard Documents (NSD)">
              <div className="mb-6 flex flex-col md:flex-row gap-4">
                <Card className="flex-1 bg-primary/5 border-primary/20">
                  <CardContent className="p-4 flex gap-3 items-center">
                    <FileText className="w-5 h-5 text-primary" />
                    <p className="text-sm font-medium">
                      Pharma/Agrochemical Product Registration
                    </p>
                  </CardContent>
                </Card>
                <Card className="flex-1 bg-primary/5 border-primary/20">
                  <CardContent className="p-4 flex gap-3 items-center">
                    <FileText className="w-5 h-5 text-primary" />
                    <p className="text-sm font-medium">
                      Commercial Trade Agreements, POA, LOA, FSC
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <StepCard number="#1" title="Selection & Pages">
                  <BulletList
                    items={[
                      "Choose document type",
                      "Specify pages for attestation",
                      'Use "+" to add more',
                    ]}
                  />
                </StepCard>
                <StepCard number="#2" title="Fees & Uploads">
                  <BulletList
                    items={[
                      "Calculated per-page",
                      "PDF only, max 5 MB",
                      "Document details must match",
                    ]}
                  />
                </StepCard>
              </div>
            </SubSection>
          </Section>

          <Separator className="my-12" />

          {/* ── MEMBERSHIP ── */}
          <Section title="Membership" delay={2}>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
              {[
                "Small Business",
                "Start-Up",
                "Corporate",
                "Corporate+",
                "Overseas",
                "Non-Profit",
              ].map((type) => (
                <div
                  key={type}
                  className="bg-primary/5 border border-primary/20 rounded-lg px-4 py-3 text-sm font-medium text-center hover:bg-primary/10 transition-colors cursor-default"
                >
                  {type}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Member Benefits</CardTitle>
                </CardHeader>
                <CardContent>
                  <BulletList
                    items={[
                      "Networking and collaboration",
                      "Access to extensive network",
                      "Business consulting & research",
                      "Legal advice",
                    ]}
                  />
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">
                    Registration Process
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal list-inside space-y-2 text-sm text-foreground/80 marker:text-primary marker:font-bold">
                    <li>Sign up on e-platform</li>
                    <li>Receive approval email</li>
                    <li>Submit documents & payment</li>
                    <li>Receive digital certificate</li>
                  </ol>
                </CardContent>
              </Card>
            </div>
          </Section>

          <Separator className="my-12" />

          {/* ── WING CONSULTATION ── */}
          <Section title="Wing Consultation" delay={3}>
            <InfoTable
              headers={["Wing", "Focus Area"]}
              rows={[
                [
                  "Export Wing",
                  "Foreign trade procedures, policies, and Certificates of Origin",
                ],
                [
                  "Legal Wing",
                  "Commercial/business legal issues and international trade disputes",
                ],
                ["HR Support Wing", "Employee guidance and workplace support"],
                [
                  "Professional Wing",
                  "New ventures and day-to-day business/expansion issues",
                ],
                [
                  "Business Advice Wing",
                  "Strategic advice tailored to individual business needs",
                ],
                ["Women Wing", "Economic empowerment for women members"],
                [
                  "Event & Seminar Wing",
                  "Business networking through events and seminars",
                ],
              ]}
            />
          </Section>
        </div>
      </main>
    </div>
  );
}
