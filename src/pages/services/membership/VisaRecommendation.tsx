import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const requiredDocs = [
  "Invitation from the foreign Buyer / Customer (if in a foreign language, it must be translated by a recognized translator)",
  "Copy of Aadhaar Card with the original",
  "Copy of Passport with the original (in case of re-issued/duplicate Passports, photocopy of the new passport is required with endorsement of previous passport)",
  "Export performance of current/last financial / calendar year duly attested by the Bank",
  "Company profile",
  "For the VISA recommendation letter for the Manager of the company, the following additional criteria must be fulfilled:",
  "Bank Guarantee showing that the Manager is authorized to operate a bank account for or on behalf of the firm/company for at least the last one year",
  "ITR copy for previous two years",
  "Salary certificate issued by the firm on its letterhead",
  "Undertaking by the company's authorised signatory",
  "Signature of the firm's authorized representative on the request letter",
  "All above documents must be verified with Chamber's records",
];

const fees = [
  { region: "Asian Countries", fee: "Rs. 1,000/-" },
  { region: "Schengen Countries", fee: "Rs. 2,000/-" },
  { region: "All Other Countries", fee: "Rs. 2,000/-" },
];

export default function VisaRecommendation() {
  return (
    <div className="w-full bg-background text-foreground">

      {/* Hero */}
      <section className="relative w-full py-16 md:py-24 bg-foreground overflow-hidden flex items-center">
        <div
          className="absolute inset-0 z-0 opacity-30 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=2000')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground via-foreground/80 to-transparent z-0" />
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="text-xs font-bold text-primary uppercase tracking-widest mb-3 block">Membership</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-background mb-4 leading-tight">
              Visa Recommendation Letter
            </h1>
            <p className="text-background/70 text-base md:text-lg leading-relaxed max-w-2xl">
              To help our exporter members in business promotion through overseas tours and personal meets, we provide VISA recommendation letters issued to embassies or consulates.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* Main content */}
            <div className="lg:col-span-2 space-y-10">
              <div className="space-y-4 text-muted-foreground text-base leading-relaxed">
                <h2 className="text-xl md:text-2xl font-bold text-foreground">About Visa Recommendation</h2>
                <p>
                  Asian Exporters' Chamber of Commerce &amp; Industry issues Visa Recommendation Letters addressing foreign Consulates / Embassies / High Commissions in India, to support the Visa Applications of members. Normally, it takes <strong className="text-foreground">two working days</strong> to process the Visa Recommendations Letter application.
                </p>
              </div>

              <Separator className="bg-border" />

              <div className="space-y-4">
                <h2 className="text-xl md:text-2xl font-bold text-foreground">How to Apply</h2>
                <p className="text-muted-foreground text-base leading-relaxed">
                  Members of AECCI (Proprietors / Partners / Directors) are required to submit the following documents along with a <strong className="text-foreground">Requesting Letter on applicant's letterhead</strong> stating the visiting country's name, applicant name, designation, passport number, and passport details (date of issue / expiry date etc.).
                </p>
                <p className="text-sm text-muted-foreground italic">* Request Letter must be signed by the Authorized Signatory.</p>
              </div>

              <div>
                <h3 className="text-base font-bold text-foreground uppercase tracking-wider mb-4">Documents Required</h3>
                <ul className="space-y-3">
                  {requiredDocs.map((doc, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-1" />
                      <span className="text-muted-foreground text-sm leading-relaxed">{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Separator className="bg-border" />

              <div className="space-y-3 text-muted-foreground text-sm leading-relaxed">
                <h3 className="text-base font-bold text-foreground uppercase tracking-wider">Note</h3>
                <p>
                  The office bearers of the Chamber may interview any applicant if they so desire while considering the application and may call for supporting documents.
                </p>
                <p>
                  The Executive Director and office bearers are authorized to consider the genuine needs of member firms. However, they shall exercise discretion and take necessary measures so that this important facility is not misused in any way.
                </p>
              </div>
            </div>

            {/* Sidebar: fees + apply */}
            <div className="lg:col-span-1">
              <div className="sticky top-8 space-y-6">
                <Card className="border-border">
                  <CardContent className="p-6">
                    <h3 className="text-base font-bold text-foreground mb-4">Fee Schedule</h3>
                    <div className="space-y-3">
                      {fees.map((item, idx) => (
                        <div key={idx}>
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-muted-foreground">{item.region}</span>
                            <span className="font-bold text-foreground">{item.fee}</span>
                          </div>
                          {idx < fees.length - 1 && <Separator className="mt-3 bg-border" />}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <a
                  href="#"
                  className="flex items-center justify-center w-full py-3 px-8 bg-primary text-primary-foreground font-semibold text-sm rounded-xl hover:bg-primary/90 transition-colors"
                >
                  Apply Now
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
