import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function EnrollmentOffers() {
  return (
    <div className="w-full bg-background text-foreground">
      {/* Hero */}
      <section className="relative w-full py-16 md:py-24 bg-foreground overflow-hidden flex items-center">
        <div
          className="absolute inset-0 z-0 opacity-30 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=2000')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground via-foreground/80 to-transparent z-0" />
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="text-xs font-bold text-primary uppercase tracking-widest mb-3 block">
              Membership
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-background mb-4 leading-tight">
              Enrollment Offers
            </h1>
            <p className="text-background/70 text-base md:text-lg leading-relaxed max-w-2xl">
              Considering the service needs of custom house agents and creating
              a network for our exporter members, we created the opportunity to
              drop in an enrolment application online and get enrolled with
              AECCI.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-4xl space-y-5 text-muted-foreground text-base leading-relaxed">
            <p>
              Considering the service needs of the Custom's clearing agents and
              to create a network for our exporter members while assisting them
              in fulfilling their logistics and custom clearance needs, AECCI
              has launched a special drive called{" "}
              <strong className="text-foreground">
                "Non-Enrolled Members"
              </strong>{" "}
              where custom clearing agents holding their license can enrol with
              us.
            </p>
            <p>
              Under this NME drive, we keep the CHAs updated with day-to-day
              news and notifications released by the Indian Customs and the O/o
              Director General of Foreign Trade.
            </p>
            <p>
              We facilitate our far distant exporter members for their CoO (NP)
              and documents attestation needs by providing services through
              their authorised Clearing agents.
            </p>
            <p>
              AECCI has decided to charge only admin fees for the registration
              of Non Member Enrolled. By paying a very nominal fee, Custom House
              Agents can be enrolled with us for a lifetime.
            </p>
            <div className="flex items-center gap-3 p-4 bg-primary/5 border border-primary/20 rounded-xl">
              <Mail className="w-5 h-5 text-primary shrink-0" />
              <p className="text-foreground font-medium text-sm">
                Send your NME enquiries to Membership Desk:{" "}
                <a
                  href="mailto:membership@aecci.org.in"
                  className="text-primary hover:underline"
                >
                  membership@aecci.org.in
                </a>
              </p>
            </div>
          </div>

          <Separator className="my-16 bg-border" />

          <div className="max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
              AECCI Revolving Facility Information
            </h2>
            <div className="space-y-5 text-muted-foreground text-base leading-relaxed">
              <p>
                AECCI creates an environment for members to build mutually
                beneficial and lasting business relationships through various
                support services.
              </p>
              <Card className="border-border">
                <CardContent className="p-6 space-y-4">
                  <h3 className="font-bold text-foreground text-lg">
                    Revolving Credit Facility for Exporters and CHA's
                  </h3>
                  <p className="text-sm leading-relaxed">
                    In this facility, AECCI shall open a revolving ledger
                    account for the Exporter / CHA. The Exporter / CHA may give
                    an initial amount of{" "}
                    <strong className="text-foreground">Rs. 5,000/-</strong> as
                    deposit to the Chamber. Thereafter, whenever documents are
                    brought for attestation, the charges will be automatically
                    debited from the ledger. A receipt to this effect would be
                    generated to show the balance credit available.
                  </p>
                  <p className="text-sm leading-relaxed">
                    By maintaining a credit revolving account facility, it will
                    be easy to keep records of accounts efficiently — rather
                    than paying separately for each document, the amount is
                    deducted from your ledger account itself and an Excel sheet
                    of the ledger is sent regularly.
                  </p>
                  <p className="text-sm leading-relaxed">
                    You may call the chamber desk to ask for your ledger balance
                    at any time.
                  </p>
                  <Separator className="bg-border" />
                  <div className="flex flex-col sm:flex-row gap-4 text-sm font-medium text-foreground">
                    <span>
                      Maximum deposit: <strong>Rs. 5,000/-</strong>
                    </span>
                    <span>
                      Minimum deposit: <strong>Rs. 3,000/-</strong>
                    </span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl">
            <a
              href="#"
              className="flex items-center justify-center py-3 px-6 bg-primary text-primary-foreground font-semibold text-sm rounded-xl hover:bg-primary/90 transition-colors"
            >
              Non-Member Enrollment
            </a>
            <a
              href="#"
              className="flex items-center justify-center py-3 px-6 bg-primary text-primary-foreground font-semibold text-sm rounded-xl hover:bg-primary/90 transition-colors"
            >
              Indemnity Bond
            </a>
            <a
              href="#"
              className="flex items-center justify-center py-3 px-6 bg-primary text-primary-foreground font-semibold text-sm rounded-xl hover:bg-primary/90 transition-colors"
            >
              Become a Member
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
