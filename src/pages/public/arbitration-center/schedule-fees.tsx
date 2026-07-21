import { motion } from "framer-motion";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function ScheduleFeesPage() {
  return (
    <div className="w-full bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative w-full py-16 md:py-24 bg-foreground overflow-hidden flex items-center">
        <div className="absolute right-0 top-0 w-1/2 h-full bg-primary/20 blur-[100px] pointer-events-none rounded-full translate-x-1/3 -translate-y-1/4 z-0" />
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-background mb-6 leading-tight uppercase">
              Schedule Fees
            </h1>
            <p className="text-background/70 text-base md:text-lg leading-relaxed">
              Discover AECCI International Arbitration Center's schedule fees
              for expert dispute resolution services. Get transparent and
              competitive pricing for arbitration proceedings with a trusted
              global institution.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-sm md:text-base text-muted-foreground leading-relaxed space-y-6">
          <p>
            As an institution that offers impartial and efficient dispute
            resolution services, the AECCI International Arbitration Center
            provides a transparent fee schedule to ensure that parties involved
            in the arbitration process have a clear understanding of the costs
            involved.
          </p>
          <p>
            The fee schedule covers the costs associated with the administration
            of arbitration proceedings, including filing case fees,
            administration fees, arbitrator fees and emergency interim relief
            fees.
          </p>
          <p>
            It is important to note that the fees outlined in the schedule are
            subject to change and may vary depending on the specific
            circumstances of the dispute. Parties involved in the arbitration
            process are encouraged to consult with the AECCI International
            Arbitration Center directly to obtain the most up-to-date fee
            information.
          </p>
          <p>
            The AECCI International Arbitration Center provides a transparent
            fee schedule to ensure that parties involved in the arbitration
            process have a clear understanding of the costs involved.
          </p>
          <p>
            This Schedule of Fees is effective as of 13.04.2023 and is
            applicable to all arbitrations commenced on or after 13.04.2023.
            This Schedule of Fees may be amended from time to time and any
            revised Schedule of Fees shall take effect as of the date determined
            by the AECCI Management.
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 mt-16 space-y-16">
          {/* Filing Case Fee */}
          <div className="text-center space-y-2">
            <h3 className="text-xl md:text-2xl font-bold text-primary underline underline-offset-4 decoration-2">
              Filing Case Fee
            </h3>
            <p className="text-foreground font-medium">
              USD 300 (FOR AECCI-MEMBERS)*
            </p>
            <p className="text-foreground font-medium">
              USD 400 (FOR AECCI- NON-MEMBERS)
            </p>
            <p className="text-muted-foreground italic text-sm">
              *Client/Applicant must be registered as Member of AECCI, if
              Non-Member then Fees shall be applicable as above.
            </p>
          </div>

          {/* Administration Fees */}
          <div className="space-y-6">
            <div className="text-center space-y-4">
              <h3 className="text-xl md:text-2xl font-bold text-primary underline underline-offset-4 decoration-2">
                Administration Fees
              </h3>
              <p className="text-muted-foreground">
                The administration fees calculated in accordance with the
                Schedule below apply to all arbitrations administered by
                AECCI-IAC and is the maximum amount payable to AECCI-IAC.
              </p>
            </div>
            <div className="border border-border rounded-lg overflow-hidden">
              <Table>
                <TableHeader className="bg-muted/50">
                  <TableRow>
                    <TableHead className="text-center font-bold text-foreground">
                      Quantum of Claim (USD)
                    </TableHead>
                    <TableHead className="text-center font-bold text-foreground border-l border-border">
                      Fee(USD)
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="text-center border-r border-border">
                      UP TO 75,000
                    </TableCell>
                    <TableCell className="text-center">1,375</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="text-center border-r border-border">
                      75,001 to 2,00,000
                    </TableCell>
                    <TableCell className="text-center">
                      2,000 + 1.5% over 75,000
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="text-center border-r border-border">
                      2,00,001 to 7,00,000
                    </TableCell>
                    <TableCell className="text-center">
                      2,800 + 1.4% over 2,00,001
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="text-center border-r border-border">
                      7,00,001 to 12,00,000
                    </TableCell>
                    <TableCell className="text-center">
                      7,000 + 1.3% over 7,00,001
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="text-center border-r border-border">
                      12,00,001 to 22,00,000
                    </TableCell>
                    <TableCell className="text-center">
                      10,000 + 1% over 12,00,001
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="text-center border-r border-border">
                      22,00,001 to 62,00,000
                    </TableCell>
                    <TableCell className="text-center">
                      12,000 + 0.80% over 22,00,001
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="text-center border-r border-border">
                      62,00,001 to 1,25,00,000
                    </TableCell>
                    <TableCell className="text-center">
                      20,000 + 0.75% over 62,00,001
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="text-center border-r border-border">
                      Above 1,25,00,001
                    </TableCell>
                    <TableCell className="text-center">
                      50,000 + 0.50% over 1,25,00,001
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
            <div className="space-y-2 text-muted-foreground text-sm pl-4">
              <p className="font-medium text-foreground mb-3">
                The administration fees do not include the following:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  Interpretation, correction or additional Award: US$ 100.00
                </li>
                <li>Scrutiny of Award: US$ 250.00</li>
                <li>
                  Administrative and Filling charges to be paid along with the
                  Application to appointment Arbitrator.
                </li>
                <li>
                  Usage cost of facilities and support services for and in
                  connection with any hearing (i.e. hearing rooms and equipment,
                  transcription and interpretation services etc.)
                </li>
                <li>
                  The Administrative and Filling charges are payable one time
                  and are non-refundable.
                </li>
                <li>Taxes as applicable</li>
              </ul>
            </div>
          </div>

          {/* Arbitrator's Fees */}
          <div className="space-y-6 mt-16">
            <div className="text-center space-y-4">
              <h3 className="text-xl md:text-2xl font-bold text-primary underline underline-offset-4 decoration-2">
                Arbitrator's Fees
              </h3>
              <p className="text-muted-foreground">
                The fee calculated in accordance with the Schedule below is the
                maximum amount payable to arbitrator and Additional Fees for the
                Arbitral Tribunal (Per Arbitrator).
              </p>
            </div>
            <div className="border border-border rounded-lg overflow-hidden">
              <Table>
                <TableHeader className="bg-muted/50">
                  <TableRow>
                    <TableHead className="text-center font-bold text-foreground">
                      Quantum of Claim (USD)
                    </TableHead>
                    <TableHead className="text-center font-bold text-foreground border-l border-border">
                      Fee (USD)
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="text-center border-r border-border">
                      UP TO 75,000
                    </TableCell>
                    <TableCell className="text-center">1,218</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="text-center border-r border-border">
                      75,001 to 2,00,000
                    </TableCell>
                    <TableCell className="text-center">
                      2343 + 3% over 75,001
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="text-center border-r border-border">
                      2,00,001 to 7,00,000
                    </TableCell>
                    <TableCell className="text-center">
                      4218 + 1% over 2,00,001
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="text-center border-r border-border">
                      7,00,001 to 12,00,000
                    </TableCell>
                    <TableCell className="text-center">
                      9218 + 1% over 7,00,001
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="text-center border-r border-border">
                      12,00,001 to 22,00,000
                    </TableCell>
                    <TableCell className="text-center">
                      15468 + 0.75% over 12,00,001
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="text-center border-r border-border">
                      22,00,001 to 62,00,000
                    </TableCell>
                    <TableCell className="text-center">
                      24,843 + 0.5% over 22,00,001
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="text-center border-r border-border">
                      62,00,001 and above
                    </TableCell>
                    <TableCell className="text-center">
                      (Contact Chamber Desk)
                    </TableCell>
                  </TableRow>
                  <TableRow className="bg-muted/30">
                    <TableCell
                      colSpan={2}
                      className="text-center font-bold text-foreground"
                    >
                      ADDITIONAL FEES FOR THE ARBITRAL TRIBUNAL:
                      (Interpretation, correction, Scrutiny or additional Award)
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="text-center border-r border-border">
                      Upto 75000
                    </TableCell>
                    <TableCell className="text-center">500</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="text-center border-r border-border">
                      Upto 75001 to 1200000
                    </TableCell>
                    <TableCell className="text-center">1000</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="text-center border-r border-border">
                      1200001 and above
                    </TableCell>
                    <TableCell className="text-center">2000</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>

          {/* EMERGENCY INTERIM RELIEF FEES */}
          <div className="text-center space-y-4 mt-16">
            <h3 className="text-xl md:text-2xl font-bold text-primary underline underline-offset-4 decoration-2 uppercase">
              EMERGENCY INTERIM RELIEF FEES
            </h3>
            <p className="text-muted-foreground font-bold">
              The following fees shall be payable in an Emergency Interim Relief
              application under <br />
              Article 07 of the Arbitration Rules of the AECCI-IAC:
            </p>
            <div className="mt-6 text-left max-w-3xl mx-auto space-y-4 text-muted-foreground">
              <p>
                <strong className="text-foreground">
                  Administration Fee for Emergency Arbitrator Applications:
                </strong>{" "}
                USD 800*
              </p>
              <p>
                <strong className="text-foreground">
                  Emergency Arbitrator's Fees:
                </strong>{" "}
                The Emergency Arbitrator's fees shall be capped at 15% of a sole
                arbitrator's maximum fee calculated in accordance with the
                Schedule of Fees in force at the time of commencement of the
                arbitration.
              </p>
              <p>Taxes as applicable*</p>
            </div>
          </div>

          {/* PAYMENT SCHEDULE */}
          <div className="text-center space-y-4 mt-16">
            <h3 className="text-xl md:text-2xl font-bold text-primary underline underline-offset-4 decoration-2 uppercase">
              PAYMENT SCHEDULE:
            </h3>
            <div className="mt-6 text-left max-w-3xl mx-auto space-y-2 text-muted-foreground">
              <ol className="list-decimal pl-5 space-y-2 font-medium text-foreground">
                <li>Filing Case Fee</li>
                <li>
                  Administrative fee to be paid by the Claimant on the filing of
                  Notice of Arbitration.
                </li>
                <li>Arbitral Tribunal Fee Schedule</li>
              </ol>
              <ul className="list-disc pl-5 space-y-2 mt-4">
                <li>
                  At the time of filing the Claim statement by the Claimant, 20%
                  shall be deposited.
                </li>
                <li>
                  Respondent at the time of filing the Response or Statement of
                  Defense should deposit 20%.
                </li>
                <li>
                  Parties [Claimant and Respondent (s)] should deposit 25%
                  equally within 10 days of the completion of pleadings.
                </li>
                <li>
                  Parties [Claimant and Respondent(s)] should deposit 20%
                  equally before the hearing date.
                </li>
                <li>
                  Parties [Claimant and Respondent(s)] should deposit 15%
                  Balance within 10 days after the matter is reserved for award.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
