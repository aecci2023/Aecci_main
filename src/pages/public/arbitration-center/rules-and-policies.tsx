import { motion } from "framer-motion";

export default function RulesAndPoliciesPage() {
  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string,
  ) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      // Add a small offset to account for fixed headers if any, or just scroll into view nicely
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

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
              Rules and Policies
            </h1>
            <p className="text-background/70 text-base md:text-lg leading-relaxed">
              Rules aim to ensure fairness, impartiality, and efficiency in the
              arbitration process, and provide a framework for resolving
              conflicts in a timely and cost-effective manner.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-sm md:text-base text-muted-foreground leading-relaxed space-y-8">
          <div className="space-y-4">
            <p className="font-bold text-foreground italic">Revised 11.23</p>
          </div>

          {/* Table of Contents / Outline given by User */}
          <div className="space-y-2 bg-muted/30 p-6 rounded-lg border border-border">
            <h2 className="text-xl font-bold text-primary mb-4">
              Contents Overview
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ul className="space-y-2">
                <li className="font-bold text-foreground">
                  <a
                    href="#part-1"
                    onClick={(e) => scrollToSection(e, "part-1")}
                    className="hover:text-primary transition-colors cursor-pointer"
                  >
                    PART I: INTRODUCTION
                  </a>
                </li>
                <li>
                  <a
                    href="#article-1"
                    onClick={(e) => scrollToSection(e, "article-1")}
                    className="hover:text-primary transition-colors cursor-pointer"
                  >
                    Article 1 Introduction
                  </a>
                </li>
                <li>
                  <a
                    href="#article-2"
                    onClick={(e) => scrollToSection(e, "article-2")}
                    className="hover:text-primary transition-colors cursor-pointer"
                  >
                    Article 2 Definition
                  </a>
                </li>
                <li>
                  <a
                    href="#article-3"
                    onClick={(e) => scrollToSection(e, "article-3")}
                    className="hover:text-primary transition-colors cursor-pointer"
                  >
                    Article 3 Applicable Law
                  </a>
                </li>

                <li className="font-bold text-foreground mt-4">
                  <a
                    href="#part-2"
                    onClick={(e) => scrollToSection(e, "part-2")}
                    className="hover:text-primary transition-colors cursor-pointer"
                  >
                    PART II : ARBITRATION INVOCATION: INITIATING THE PROCESS
                  </a>
                </li>
                <li>
                  <a
                    href="#article-4"
                    onClick={(e) => scrollToSection(e, "article-4")}
                    className="hover:text-primary transition-colors cursor-pointer"
                  >
                    Article 4 Commencement of Arbitration
                  </a>
                </li>
                <li>
                  <a
                    href="#article-5"
                    onClick={(e) => scrollToSection(e, "article-5")}
                    className="hover:text-primary transition-colors cursor-pointer"
                  >
                    Article 5 Interim measures, etc., by Council
                  </a>
                </li>

                <li className="font-bold text-foreground mt-4">
                  <a
                    href="#part-3"
                    onClick={(e) => scrollToSection(e, "part-3")}
                    className="hover:text-primary transition-colors cursor-pointer"
                  >
                    PART III : THE ARBITRAL TRIBUNAL
                  </a>
                </li>
                <li>
                  <a
                    href="#article-6"
                    onClick={(e) => scrollToSection(e, "article-6")}
                    className="hover:text-primary transition-colors cursor-pointer"
                  >
                    Article 6 Appointment of Arbitrator
                  </a>
                </li>
                <li>
                  <a
                    href="#article-7"
                    onClick={(e) => scrollToSection(e, "article-7")}
                    className="hover:text-primary transition-colors cursor-pointer"
                  >
                    Article 7 Ground for Challenge of Arbitrators
                  </a>
                </li>
                <li>
                  <a
                    href="#article-8"
                    onClick={(e) => scrollToSection(e, "article-8")}
                    className="hover:text-primary transition-colors cursor-pointer"
                  >
                    Article 8 Replacement of ArbitratorsThe Arbitral Tribunal
                  </a>
                </li>
                <li>
                  <a
                    href="#article-9"
                    onClick={(e) => scrollToSection(e, "article-9")}
                    className="hover:text-primary transition-colors cursor-pointer"
                  >
                    Article 9 Appointment of Emergency Arbitrator
                  </a>
                </li>
                <li>
                  <a
                    href="#article-10"
                    onClick={(e) => scrollToSection(e, "article-10")}
                    className="hover:text-primary transition-colors cursor-pointer"
                  >
                    Article 10 Conduct of the Arbitral Tribunal
                  </a>
                </li>

                <li className="font-bold text-foreground mt-4">
                  <a
                    href="#part-4"
                    onClick={(e) => scrollToSection(e, "part-4")}
                    className="hover:text-primary transition-colors cursor-pointer"
                  >
                    PART IV : ARBITRATION PROCESS: A COMPREHENSIVE OVERVIEW
                  </a>
                </li>
                <li>
                  <a
                    href="#article-11"
                    onClick={(e) => scrollToSection(e, "article-11")}
                    className="hover:text-primary transition-colors cursor-pointer"
                  >
                    Article 11 Seat and Venue of Arbitration
                  </a>
                </li>
                <li>
                  <a
                    href="#article-12"
                    onClick={(e) => scrollToSection(e, "article-12")}
                    className="hover:text-primary transition-colors cursor-pointer"
                  >
                    Article 12 Consolidation Mechanism
                  </a>
                </li>
                <li>
                  <a
                    href="#article-13"
                    onClick={(e) => scrollToSection(e, "article-13")}
                    className="hover:text-primary transition-colors cursor-pointer"
                  >
                    Article 13 Conduct of the Arbitration
                  </a>
                </li>
                <li>
                  <a
                    href="#article-14"
                    onClick={(e) => scrollToSection(e, "article-14")}
                    className="hover:text-primary transition-colors cursor-pointer"
                  >
                    Article 14 Language
                  </a>
                </li>
                <li>
                  <a
                    href="#article-15"
                    onClick={(e) => scrollToSection(e, "article-15")}
                    className="hover:text-primary transition-colors cursor-pointer"
                  >
                    Article 15 Statement of Claims & Defences
                  </a>
                </li>
                <li>
                  <a
                    href="#article-16"
                    onClick={(e) => scrollToSection(e, "article-16")}
                    className="hover:text-primary transition-colors cursor-pointer"
                  >
                    Article 16 Statement of Claim
                  </a>
                </li>
                <li>
                  <a
                    href="#article-17"
                    onClick={(e) => scrollToSection(e, "article-17")}
                    className="hover:text-primary transition-colors cursor-pointer"
                  >
                    Article 17 Further Pleadings{" "}
                  </a>
                </li>
                <li>
                  <a
                    href="#article-18"
                    onClick={(e) => scrollToSection(e, "article-18")}
                    className="hover:text-primary transition-colors cursor-pointer"
                  >
                    Article 18 Submission of Statement of Defence and Counter
                    Claims
                  </a>
                </li>
                <li>
                  <a
                    href="#article-19"
                    onClick={(e) => scrollToSection(e, "article-19")}
                    className="hover:text-primary transition-colors cursor-pointer"
                  >
                    Article 19 Evidence
                  </a>
                </li>
                <li>
                  <a
                    href="#article-20"
                    onClick={(e) => scrollToSection(e, "article-20")}
                    className="hover:text-primary transition-colors cursor-pointer"
                  >
                    Article 20 Witnesses
                  </a>
                </li>
                <li>
                  <a
                    href="#article-21"
                    onClick={(e) => scrollToSection(e, "article-21")}
                    className="hover:text-primary transition-colors cursor-pointer"
                  >
                    Article 21 Tribunal appointed Expert
                  </a>
                </li>
              </ul>
              <ul className="space-y-2">
                <li className="font-bold text-foreground">
                  <a
                    href="#part-5"
                    onClick={(e) => scrollToSection(e, "part-5")}
                    className="hover:text-primary transition-colors cursor-pointer"
                  >
                    PART V : ARBITRAL AWARD
                  </a>
                </li>
                <li>
                  <a
                    href="#article-22"
                    onClick={(e) => scrollToSection(e, "article-22")}
                    className="hover:text-primary transition-colors cursor-pointer"
                  >
                    Article 22 Time frame to determine Arbitral Award
                  </a>
                </li>
                <li>
                  <a
                    href="#article-23"
                    onClick={(e) => scrollToSection(e, "article-23")}
                    className="hover:text-primary transition-colors cursor-pointer"
                  >
                    Article 23 Form and Contents of Arbitral Award
                  </a>
                </li>
                <li>
                  <a
                    href="#article-24"
                    onClick={(e) => scrollToSection(e, "article-24")}
                    className="hover:text-primary transition-colors cursor-pointer"
                  >
                    Article 24 Relevant Factors in Determining Final Award
                  </a>
                </li>
                <li>
                  <a
                    href="#article-25"
                    onClick={(e) => scrollToSection(e, "article-25")}
                    className="hover:text-primary transition-colors cursor-pointer"
                  >
                    Article 25 Correction of Awards and Additional Awards
                  </a>
                </li>

                <li className="font-bold text-foreground mt-4">
                  <a
                    href="#part-6"
                    onClick={(e) => scrollToSection(e, "part-6")}
                    className="hover:text-primary transition-colors cursor-pointer"
                  >
                    PART VI : MISCELLANEOUS PROVISIONS
                  </a>
                </li>
                <li>
                  <a
                    href="#article-26"
                    onClick={(e) => scrollToSection(e, "article-26")}
                    className="hover:text-primary transition-colors cursor-pointer"
                  >
                    Article 26 Jurisdiction
                  </a>
                </li>
                <li>
                  <a
                    href="#article-27"
                    onClick={(e) => scrollToSection(e, "article-27")}
                    className="hover:text-primary transition-colors cursor-pointer"
                  >
                    Article 27 Secrecy and Confidentiality
                  </a>
                </li>
                <li>
                  <a
                    href="#article-28"
                    onClick={(e) => scrollToSection(e, "article-28")}
                    className="hover:text-primary transition-colors cursor-pointer"
                  >
                    Article 28 Waiver and Limited Liability
                  </a>
                </li>
                <li>
                  <a
                    href="#article-29"
                    onClick={(e) => scrollToSection(e, "article-29")}
                    className="hover:text-primary transition-colors cursor-pointer"
                  >
                    Article 29 Termination of Proceedings
                  </a>
                </li>
                <li>
                  <a
                    href="#article-30"
                    onClick={(e) => scrollToSection(e, "article-30")}
                    className="hover:text-primary transition-colors cursor-pointer"
                  >
                    Article 30 Default of a Party
                  </a>
                </li>
                <li>
                  <a
                    href="#article-31"
                    onClick={(e) => scrollToSection(e, "article-31")}
                    className="hover:text-primary transition-colors cursor-pointer"
                  >
                    Article 31 Settlement
                  </a>
                </li>
                <li>
                  <a
                    href="#article-32"
                    onClick={(e) => scrollToSection(e, "article-32")}
                    className="hover:text-primary transition-colors cursor-pointer"
                  >
                    Article 32 Arbitration Agreement not to be discharged by
                    death of Parties
                  </a>
                </li>

                <li className="font-bold text-foreground mt-4">
                  <a
                    href="#part-7"
                    onClick={(e) => scrollToSection(e, "part-7")}
                    className="hover:text-primary transition-colors cursor-pointer"
                  >
                    PART VII : ARBITRATION PROCESS: A COMPREHENSIVE OVERVIEW
                  </a>
                </li>
                <li>
                  <a
                    href="#article-33"
                    onClick={(e) => scrollToSection(e, "article-33")}
                    className="hover:text-primary transition-colors cursor-pointer"
                  >
                    Article 33 Payment of Arbitration Cost
                  </a>
                </li>
                <li>
                  <a
                    href="#article-34"
                    onClick={(e) => scrollToSection(e, "article-34")}
                    className="hover:text-primary transition-colors cursor-pointer"
                  >
                    Article 34 Schedule Fee
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-12 mt-12">
            {/* PART I */}
            <div className="space-y-6">
              <h2
                id="part-1"
                className="text-2xl font-bold text-primary underline underline-offset-4 scroll-m-8"
              >
                PART I: INTRODUCTION
              </h2>

              <div className="space-y-2">
                <h3
                  id="article-1"
                  className="text-lg font-bold text-foreground scroll-m-8"
                >
                  Article 1 Introduction
                </h3>
                <p>
                  1.1 To frame, amend such Arbitration Rules to hereby govern
                  the conduct of Arbitration Proceeding held at AECCI-
                  International Arbitration Centre, India relating to
                  International Commercial Arbitration and International
                  Maritime Arbitration and for matters connected therewith or
                  incidental thereto.
                </p>
                <p>
                  1.2 By consenting to use the above Arbitration Rules to hereby
                  govern the arbitration proceedings, to be conducted at the
                  AECCI- IAC, Navi Mumbai, India the parties hereby further
                  agree, acknowledge, and accept these rules or any revised
                  rules framed thereafter approved by Council AECCI- IAC Navi
                  Mumbai, India. And in the event of any dispute arising between
                  a relevant rule and an express provision of applicable law
                  hereby governing the Conduct of Arbitration Proceedings
                  between the Parties to Arbitration, then the express provision
                  of applicable/ governing law shall prevail over said relevant
                  rule.
                </p>
                <p>
                  1.3 The Arbitration Rules shall hereby deem to commence from
                  such date as unanimously agreed upon by the Council AECCI-
                  IAC.
                </p>
                <p>
                  1.4 These Arbitration Rules shall govern any and all
                  arbitration proceedings initiated on or after April, 2023,
                  unless otherwise agreed upon by the Council AECCI- IAC, India
                  to fix different of commencement of said Rules.
                </p>
              </div>

              <div className="space-y-2">
                <h3
                  id="article-2"
                  className="text-lg font-bold text-foreground scroll-m-8"
                >
                  Article 2 Definition
                </h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    <strong>a. “Arbitration”</strong> means any arbitration
                    whether or not administered by permanent arbitral
                    institution; any arbitration arising out of International
                    Disputes.
                  </li>
                  <li>
                    <strong>b. “Arbitration agreement”</strong> means an
                    arbitration agreement may be in the form of an arbitration
                    clause in a contract or in the form of a separate agreement.
                  </li>
                  <li>
                    <strong>c. “Award”</strong> includes any final decision made
                    by the arbitrator(s), including emergency arbitrators.
                  </li>
                  <li>
                    <strong>d. “Tribunal”</strong> means a single arbitrator or
                    all arbitrators when there is more than one and includes any
                    tribunal formed under these Rules.
                  </li>
                  <li>
                    <strong>e. “Council”</strong> is a group of members
                    appointed by the Chairman of the Centre and governing the
                    AECCI-International Arbitration Centre (IAC), India.
                  </li>
                  <li>
                    <strong>f. “Claimant”</strong> is an aggrieved person
                    seeking relief from the other party.
                  </li>
                  <li>
                    <strong>g. “Parties”</strong> means a party to an
                    Arbitration Agreement and parties to Proceedings.
                  </li>
                  <li>
                    <strong>h. “Secretary”</strong> means the Secretary for the
                    time being appointed by the Committee and includes such
                    other persons as the Council may nominate for carrying out
                    the duties of the, Secretariat under these rules.
                  </li>
                </ul>
              </div>

              <div className="space-y-2">
                <h3
                  id="article-3"
                  className="text-lg font-bold text-foreground scroll-m-8"
                >
                  Article 3 Applicable Law
                </h3>
                <p className="font-semibold text-foreground">Amendments:</p>
                <ol className="list-decimal pl-5 space-y-2">
                  <li>
                    The Tribunal shall apply the Law of Arbitration and
                    Conciliation Act, 1996 and/or if the parties determine and
                    agree that the arbitrator is relying on morally fair, just &
                    commercially accepted rules and principles shall apply for
                    the arbitration proceedings. Failing which the Tribunal
                    shall apply the law and/or rules of law which it determines
                    to be appropriate for an unprejudiced dictum.
                  </li>
                  <li>
                    The Tribunal shall decide as amiable compositeur or ex aequo
                    et bono only if the parties have expressly authorised the
                    Tribunal to do so. <br />
                    <span className="italic">
                      (“Amiable compositeur or ex aequo et bono” means dispute
                      settlement where parties expressly agree that the
                      Arbitrator is not bound by strict rules of law but based
                      on fair, just and moral dictum and commercially accepted
                      principles only if the parties have expressly authorised
                      the Tribunal to do so.)
                    </span>
                  </li>
                  <li>
                    In all cases, the Tribunal shall decide in accordance with
                    the terms of the contract, if any, and shall take into
                    account any usage of trade applicable to the transaction to
                    the extent that the Tribunal considers it relevant to the
                    arbitration proceedings.
                  </li>
                </ol>
              </div>
            </div>

            {/* PART II */}
            <div className="space-y-6">
              <h2
                id="part-2"
                className="text-2xl font-bold text-primary underline underline-offset-4 scroll-m-8"
              >
                PART II : ARBITRATION INVOCATION: INITIATING THE PROCESS
              </h2>

              <div className="space-y-2">
                <h3
                  id="article-4"
                  className="text-lg font-bold text-foreground scroll-m-8"
                >
                  Article 4 Commencement of Arbitration
                </h3>
                <div className="space-y-2">
                  <p className="font-bold text-foreground">
                    4.1. Arbitration Agreement-
                  </p>
                  <p>
                    In this Part, “arbitration agreement” means an agreement by
                    the parties to submit to arbitration all or certain disputes
                    which have arisen or which may arise between them in respect
                    of a defined legal relationship, whether contractual or not.
                  </p>
                  <p>
                    An arbitration agreement may be in the form of an
                    arbitration clause in a contract or in the form of a
                    separate agreement.
                  </p>
                  <ul className="list-[lower-alpha] pl-5 space-y-1">
                    <li>An arbitration agreement shall be in writing.</li>
                    <li>
                      An arbitration agreement is in writing if it is contained
                      in— <br />
                      (i) a document signed by the parties; <br />
                      (ii) an exchange of letters, telex, telegrams or other
                      means of telecommunication [including communication
                      through electronic means] which provide a record of the
                      agreement; or
                    </li>
                    <li>
                      The reference in a contract to a document containing an
                      arbitration clause constitutes an arbitration agreement if
                      the contract is in writing and the reference is such as to
                      make that arbitration clause part of the contract.
                    </li>
                  </ul>
                </div>
                <div className="space-y-2 mt-4">
                  <p className="font-bold text-foreground">
                    4.2. Invocation of Arbitration Proceedings –
                  </p>
                  <ul className="list-[lower-alpha] pl-5 space-y-1">
                    <li>
                      Any participant seeking to initiate arbitration
                      (“Claimant”) must first send a written request for
                      Arbitration to the registrar/council.
                    </li>
                    <li>
                      The date on which the Request is received by the Council
                      shall, for all purposes, be deemed to be the date of the
                      commencement of the arbitration.
                    </li>
                    <li>
                      The council will notify all involved parties of the
                      arbitration’s scheduled commencement date.
                    </li>
                    <li>
                      The Request for arbitration shall contain a) the name in
                      full, description, address and other contact details of
                      each of the parties; b) the name in full, address and
                      other contact details of any person(s) representing the
                      claimant in the arbitration; c) a description of the
                      nature and circumstances of the dispute giving rise to the
                      claims.
                    </li>
                    <li>
                      The Request for Arbitration should also include the
                      Statement of Claim of the Claimant.
                    </li>
                    <li>
                      Within 14 days of getting the claimant’s request for
                      arbitration, Defendant must submit his reply to the
                      Claimant. Confirmation or denial of the claims, contact
                      information, a description of the conflict and defense,
                      nomination of a judge, service of copies of the answer and
                      documents on all parties, and evidence of payment, of the
                      filing fee for any complaint are all required in the
                      response. Include a statement of defense, and a statement
                      of counterclaim in your answer, and feel free to revise it
                      as needed within the parameters of the adjudication
                      agreement.
                    </li>
                  </ul>
                </div>
                <div className="space-y-2 mt-4">
                  <p className="font-bold text-foreground">
                    4.3 Receipt of written communications
                  </p>
                  <ul className="list-[lower-alpha] pl-5 space-y-1">
                    <li>
                      Unless otherwise agreed by the parties,—
                      <ul className="list-disc pl-5 mt-1 space-y-1">
                        <li>
                          Any written communication is deemed to have been
                          received if it is delivered to the addressee
                          personally or at his place of business, habitual
                          residence or mailing address, and
                        </li>
                        <li>
                          If none of the places referred to in clause (a) can be
                          found after making a reasonable inquiry, a written
                          communication is deemed to have been received if it is
                          sent to the addressee’s last known place of business,
                          habitual residence or mailing address by registered
                          letter or by any other means which provides a record
                          of the attempt to deliver it
                        </li>
                        <li>
                          The communication is deemed to have been received on
                          the day it is so delivered.
                        </li>
                        <li>
                          This Article does not apply to written communications
                          in respect of proceedings of any judicial authority.
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="space-y-2">
                <h3
                  id="article-5"
                  className="text-lg font-bold text-foreground scroll-m-8"
                >
                  Article 5 Interim measures, etc., by Council
                </h3>
                <p>
                  5.1 A party may apply before the arbitral tribunal for interim
                  relief:-
                </p>
                <ul className="list-[lower-alpha] pl-5 space-y-1">
                  <li>
                    By submitting an application to the arbitral tribunal, with
                    reasons stating therein.
                  </li>
                  <li>
                    The Tribunal may, at the request of a party, issue an order
                    granting an interim edict, injunction or any other interim
                    relief it deems appropriate. The tribunal may order the
                    party requesting interim relief to provide appropriate
                    security in connection with the relief sought.
                  </li>
                  <li>
                    Any such measure shall take the form of an order, giving
                    reasons, or of an award, as the arbitral tribunal considers
                    appropriate.
                  </li>
                  <li>
                    Before the file is transmitted to the arbitral tribunal, and
                    in appropriate circumstances even thereafter, the parties
                    may apply to any competent judicial authority for interim or
                    conservatory measures. The application of a party to a
                    judicial authority for such measures or for the
                    implementation of any such measures ordered by an arbitral
                    tribunal shall not be deemed to be an infringement or a
                    waiver of the arbitration agreement and shall not affect the
                    relevant powers reserved to the arbitral tribunal. Any such
                    application and any measures taken by the judicial authority
                    must be notified without delay to the Registrar and the
                    Registrar shall inform the Arbitral Tribunal thereof.
                  </li>
                </ul>
              </div>
            </div>

            {/* PART III */}
            <div className="space-y-6">
              <h2
                id="part-3"
                className="text-2xl font-bold text-primary underline underline-offset-4 scroll-m-8"
              >
                PART III : THE ARBITRAL TRIBUNAL
              </h2>

              <div className="space-y-2">
                <h3
                  id="article-6"
                  className="text-lg font-bold text-foreground scroll-m-8"
                >
                  Article 6 Appointment of Arbitrator
                </h3>
                <div className="space-y-2">
                  <p className="font-bold text-foreground">
                    6.1 Appointment of Arbitrators-
                  </p>
                  <ul className="list-[lower-alpha] pl-5 space-y-1">
                    <li>
                      A person of any nationality, location and language may be
                      an arbitrator, unless otherwise agreed by the parties.
                    </li>
                    <li>
                      The parties are free to agree on a procedure for
                      appointing the arbitrator or arbitrators.
                    </li>
                    <li>
                      Failing any agreement referred to in sub-clause b, or
                      unless it appears to the Council of AECCI-IAC, giving due
                      regard to any proposals by the parties, the complications,
                      the proportion connected with or the relevant
                      circumstances of the dispute that the dispute warrants the
                      appointment of three arbitrators, a sole-arbitrator shall
                      be appointed.
                      <br />
                      <br />
                      In appointing an arbitrator under these Rules, the Council
                      at AECCI-IAC shall have due consideration and appraisal to
                      the nature of the transaction, the nature, substance and
                      circumstances of the dispute, the nationality, location
                      and languages of the parties and (if more than two) the
                      number of parties. Due consideration will further be given
                      to any qualifications required by the arbitrator for the
                      subject matter pertaining to the dispute at hand. The
                      Council at AECCI-IAC shall also consider whether the
                      arbitrator has sufficient time, availability and ability
                      to conduct the case in an instantaneous and coherent
                      manner appropriate for arbitration.
                    </li>
                  </ul>
                </div>
                <div className="space-y-2 mt-4">
                  <p className="font-bold text-foreground">
                    6.2 Sole Arbitrator-
                  </p>
                  <p>
                    In the event that a sole arbitrator needs to be appointed,
                    either party holds the right to propose one or more
                    individuals to the other party. From these proposed names,
                    one will be selected to act as the sole arbitrator. Should
                    the parties be unable to reach an agreement on this matter,
                    the Council of AECCI-IAC, India, will step in to constitute
                    the Arbitral Tribunal, appointing a sole arbitrator.
                  </p>
                  <p>
                    In situations where the parties are unable to mutually elect
                    an arbitrator, the Council will assume responsibility for
                    selecting a sole arbitrator within a maximum period of 7
                    days. The entire process of arbitrator selection will be
                    completed within a total timeframe not exceeding 15 days.
                  </p>
                </div>
                <div className="space-y-2 mt-4">
                  <p className="font-bold text-foreground">
                    6.3 Appointment of Three Arbitrators-
                  </p>
                  <p>
                    If there are three arbitrators to be appointed in
                    arbitration, each party shall nominate one arbitrator, and
                    the two appointed arbitrators shall appoint the third
                    arbitrator who shall act as the presiding arbitrator.
                  </p>
                  <ul className="list-[lower-alpha] pl-5 space-y-1 mt-2">
                    <li>
                      If the appointment procedure in sub-clause 6.3 applies
                      and—
                      <ul className="list-[lower-roman] pl-5 mt-1 space-y-1">
                        <li>
                          A party fails to appoint an arbitrator within thirty
                          days from the receipt of a request to do so from the
                          other party; or
                        </li>
                        <li>
                          If the two appointed arbitrators fail to agree on the
                          third arbitrator within Thirty days from the date of
                          their appointment; then the appointment shall be
                          hereby made subject to the Council of AECCI- IAC
                          exercising its discretionary powers.
                        </li>
                      </ul>
                    </li>
                    <li className="mt-2">
                      Where, under an appointment procedure agreed upon by the
                      parties,—
                      <ul className="list-[lower-roman] pl-5 mt-1 space-y-1">
                        <li>
                          A party fails to act as required under that procedure;
                          or
                        </li>
                        <li>
                          The parties, or the two appointed arbitrators, fail to
                          reach an agreement expected of them under that
                          procedure; or
                        </li>
                        <li>
                          A person, including an institution, fails to perform
                          any function entrusted to him or it under that
                          procedure,
                        </li>
                      </ul>
                      The council AECCI- IAC subject to exercising its
                      discretionary powers shall take the necessary steps in
                      this regard. Centre
                    </li>
                  </ul>
                </div>
              </div>

              <div className="space-y-2">
                <h3
                  id="article-7"
                  className="text-lg font-bold text-foreground scroll-m-8"
                >
                  Article 7 Ground for Challenge of Arbitrators
                </h3>
                <p className="font-semibold text-foreground">
                  Arbitrator Challenge Rules
                </p>
                <div className="space-y-1 mt-2">
                  <p>
                    <strong>7.1 Basis for Challenge:</strong> An arbitrator may
                    be challenged if there are doubts about their impartiality,
                    independence, and qualifications agreed upon by the parties,
                    or if they cannot fulfill their duties as required by the
                    rules or within specified timeframes.
                  </p>
                  <p>
                    <strong>7.2 Challenger Limited:</strong> Only the party who
                    nominated an arbitrator can challenge them based on new
                    information arising after the appointment.
                  </p>
                  <p>
                    <strong>7.3 Notification Period:</strong> Challengers must
                    notify the Secretariat within 14 days of learning about the
                    grounds for the challenge or of the arbitrator’s
                    appointment.
                  </p>
                  <p>
                    <strong>7.4 Notice of Challenge:</strong> The challenge
                    notice must be in writing, submitted to the Registrar, and
                    shared with the other party, the challenged arbitrator, and
                    other Tribunal members.
                  </p>
                  <p>
                    <strong>7.5 Consensual Challenge Resolution:</strong> If one
                    party challenges an arbitrator and the other agrees, or if
                    the challenged arbitrator voluntarily withdraws, it does not
                    imply agreement on the validity of the challenge grounds.
                  </p>
                  <p>
                    <strong>7.6 Substitute Arbitrator:</strong> In cases covered
                    by Rule 7.5, a substitute arbitrator follows the procedure
                    in Rule 8, even if one party failed to nominate an
                    arbitrator during the challenged arbitrator’s appointment.
                    Time limits in Rule 8 start from the date of agreement or
                    withdrawal.
                  </p>
                  <p>
                    <strong>7.7 Council Decision:</strong> If the other party
                    does not agree with the challenge within seven days, and the
                    challenged arbitrator doesn’t voluntarily withdraw, the
                    Council decides. The Registrar/Council may request
                    comments/submissions, setting a schedule.
                  </p>
                  <p>
                    <strong>7.8 Successful Challenge:</strong> When the Council
                    upholds a challenge, a substitute arbitrator is appointed,
                    even if one party failed to nominate an arbitrator during
                    the initial appointment. Time limits in Rule 8 start from
                    the Registrar’s notification of the Council’s decision.
                  </p>
                  <p>
                    <strong>7.9 Rejected Challenge:</strong> If the Council
                    rejects the challenge, the challenged arbitrator continues
                    with arbitration. The challenged arbitrator can proceed.
                  </p>
                  <p>
                    <strong>7.10 Cost Determination:</strong> The Council
                    decides the challenge costs, part of AECCI IAC’s fees. The
                    Registrar may request cost deposits under Rule 35 setting a
                    deadline; failure results in withdrawal of the challenge.
                  </p>
                  <p>
                    <strong>7.11 Final Council Decision:</strong> The Council’s
                    decision under this rule is final and binding on the
                    parties.
                  </p>
                </div>
              </div>

              <div className="space-y-2">
                <h3
                  id="article-8"
                  className="text-lg font-bold text-foreground scroll-m-8"
                >
                  Article 8 – Replacement of Arbitrators
                </h3>
                <p>
                  This article outlines the circumstances for replacing an
                  arbitrator:
                </p>
                <div className="space-y-1 mt-2">
                  <p>
                    <strong>8.1</strong> An arbitrator can be replaced due to
                    death, resignation, a valid challenge accepted by the
                    Council, or a joint written request by all parties.
                  </p>
                  <p>
                    <strong>8.2</strong> The Council can also replace an
                    arbitrator if they are legally or practically unable to
                    fulfill their role or if they are not meeting their
                    obligations under the Rules or within set timeframes.
                  </p>
                  <p>
                    <strong>8.3</strong> If the Council considers replacing an
                    arbitrator based on certain information, all relevant
                    parties have a chance to provide written comments before a
                    decision is made.
                  </p>
                  <p>
                    <strong>8.4</strong> When an arbitrator is replaced, a new
                    one is appointed following the same rules as the original
                    appointment.
                  </p>
                  <p>
                    <strong>8.5</strong> The Council may waive a party’s right
                    to nominate a replacement arbitrator if they don’t do so
                    within a specified time. The reconstituted Tribunal will
                    decide if previous proceedings need to be repeated.
                  </p>
                  <p>
                    <strong>8.6</strong> If the sole or presiding arbitrator is
                    replaced, previous hearings are usually held again unless
                    the parties agree otherwise. In a three-member tribunal, the
                    decision to redo prior hearings depends on the Tribunal’s
                    discretion and consultation with the parties. However, if an
                    interim or partial award has been issued, hearings related
                    solely to that award are not repeated, and the award remains
                    in effect.
                  </p>
                </div>
              </div>

              <div className="space-y-2">
                <h3
                  id="article-9"
                  className="text-lg font-bold text-foreground scroll-m-8"
                >
                  Article 9 Appointment of Emergency Arbitrator
                </h3>
                <div className="space-y-2">
                  <p>
                    <strong>9.1</strong> A party that needs urgent interim or
                    conservatory measures that cannot await the constitution of
                    an arbitral tribunal (“Emergency Measures”) may make an
                    application for such measures pursuant to the Application
                    made by the either party pursuant to Article 4. Any such
                    application shall be accepted only if it is received by the
                    Registrar prior to the transmission of the file to the
                    arbitral tribunal irrespective of whether the party making
                    the application has already submitted its Request for
                    Arbitration.
                  </p>
                  <p>
                    <strong>9.2</strong> The Application for Emergency Measures
                    shall contain the following information with all relevant
                    documentation:
                  </p>
                  <ul className="list-[lower-alpha] pl-5 space-y-1">
                    <li>
                      The name in full, description, address and other contact
                      details of each of the parties;
                    </li>
                    <li>
                      The name in full, address and other contact details of any
                      person(s) representing the applicant;
                    </li>
                    <li>
                      A description of the circumstances giving rise to the
                      Application and of the underlying dispute referred or to
                      be referred to arbitration;
                    </li>
                    <li>A statement of the Emergency Measures sought;</li>
                    <li>
                      The reasons why the applicant needs urgent interim or
                      conservatory measures that cannot await the constitution
                      of an arbitral tribunal;
                    </li>
                    <li>
                      Any relevant agreements and, in particular, the
                      arbitration agreement containing provisions for
                      appointment of Emergency Arbitrator to seek interim or
                      conservatory measures;
                    </li>
                    <li>
                      Proof of payment of the Emergency Arbitrator Fees referred
                      to in Schedule of Fees annexed to said Rules and any
                      Request for Arbitration and any other submissions in
                      connection with the underlying dispute, which have been
                      filed with the Registrar by any of the parties to the
                      emergency arbitrator proceedings prior to the making of
                      the said Application.
                    </li>
                    <li>
                      The Council at AECCI-IAC shall determine the application
                      as soon as possible in the circumstances and if granted
                      shall seek to appoint an Emergency Arbitrator within one
                      business day of receipt by the Registrar.
                      <br />
                      The emergency arbitrator’s decision shall take the form of
                      an order. The parties undertake to comply with any order
                      made by the emergency arbitrator.
                    </li>
                  </ul>
                  <p>
                    <strong>9.3</strong> The emergency arbitrator’s order shall
                    not bind the arbitral tribunal with respect to any question,
                    issue or dispute determined in the order. The arbitral
                    tribunal may modify, terminate or annul the order or any
                    modification thereto made by the emergency arbitrator.
                  </p>
                  <p>
                    <strong>9.4</strong> The arbitral tribunal shall decide upon
                    any party’s requests or claims related to the emergency
                    arbitrator proceedings, including the reallocation of the
                    costs of such proceedings and any claims arising out of or
                    in connection with the compliance or noncompliance with the
                    order.
                  </p>
                  <p>
                    <strong>9.5</strong> The Emergency Arbitrator Provisions
                    shall not apply if:
                  </p>
                  <ul className="list-[lower-alpha] pl-5 space-y-1">
                    <li>
                      The arbitration agreement under the Rules was concluded
                      prior to date of commencement of said Arbitration Rules of
                      AECCI- IAC Navi Mumbai, India
                    </li>
                    <li>
                      The parties have agreed to opt out of the Emergency
                      Arbitrator Provisions; or
                    </li>
                    <li>
                      The arbitration agreement upon which the application is
                      based arises from an International treaty to which India
                      is not a signatory.
                    </li>
                  </ul>
                  <p>
                    <strong>9.6</strong> The Emergency Arbitrator Provisions are
                    not intended to prevent any party from obtaining urgent
                    interim or conservatory measures from a competent judicial
                    authority at any time prior to making an application for
                    such measures, under the said Rules and in appropriate
                    circumstances even thereafter, pursuant to the Rules
                    <br />
                    Any application to obtain any interim or conservatory
                    measures from a competent judicial authority shall not be
                    deemed to be an infringement or a waiver of the arbitration
                    agreement. Any such application and any measures taken by
                    the judicial authority must be notified without delay to the
                    Council AECCI- IAC.
                  </p>
                </div>
              </div>

              <div className="space-y-2">
                <h3
                  id="article-10"
                  className="text-lg font-bold text-foreground scroll-m-8"
                >
                  Article 10 Conduct of the Arbitral Tribunal
                </h3>
                <div className="space-y-2">
                  <p className="font-bold text-foreground">
                    10.1 Independence, Impartiality, and Availability –
                  </p>
                  <ul className="list-[lower-alpha] pl-5 space-y-1">
                    <li>
                      Any arbitrator chosen by either the parties or the council
                      must maintain an impartial and independent stance in
                      relation to the parties engaged in the arbitration and
                      provide his disclosure in writing to the parties.
                    </li>
                    <li>
                      Prior to their appointment or confirmation, a prospective
                      arbitrator is required to sign a statement confirming
                      their acceptance, availability, impartiality, and
                      independence. The prospective arbitrator must also
                      disclose in writing to the Secretariat any facts or
                      circumstances that could potentially raise doubts about
                      their independence in the eyes of the involved parties or
                      give rise to reasonable concerns about their impartiality.
                    </li>
                    <li>
                      If, at any point during the arbitration proceedings, the
                      arbitrator becomes aware of information that could
                      reasonably cast doubt on their neutrality or independence,
                      they must promptly inform the parties, fellow arbitrators,
                      and the registry about such information.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* PART IV */}
            <div className="space-y-6">
              <h2
                id="part-4"
                className="text-2xl font-bold text-primary underline underline-offset-4 scroll-m-8"
              >
                PART IV : ARBITRATION PROCESS: A COMPREHENSIVE OVERVIEW
              </h2>

              <div className="space-y-2">
                <h3
                  id="article-11"
                  className="text-lg font-bold text-foreground scroll-m-8"
                >
                  Article 11 Seat and Venue of Arbitration
                </h3>
                <div className="space-y-2">
                  <p className="font-bold text-foreground">
                    11.1 Seat of Arbitration
                  </p>
                  <p>
                    The designated arbitration venue shall be India.
                    <br />
                    In the absence of any pre-established agreement, the choice
                    of arbitration location shall be determined by the AECCI-IAC
                    council, taking into consideration the circumstances of the
                    case and the convenience of the involved parties.
                    <br />
                    Irrespective of the conditions outlined in sub-Article (a),
                    the AECCI-IAC council located in Navi Mumbai, India, unless
                    otherwise agreed upon by the parties, reserves the right to
                    convene at any location it deems appropriate for member
                    consultations, witness testimonies, expert examinations,
                    parties’ interactions, or the examination of documents,
                    merchandise, or other assets.
                  </p>
                </div>
                <div className="space-y-2 mt-4">
                  <p className="font-bold text-foreground">
                    11.2 Venue Arbitration-
                  </p>
                  <p>
                    The Venue of Arbitration shall be in Navi Mumbai, India.
                    Since one of the party is of India origin.
                  </p>
                </div>
              </div>

              <div className="space-y-2">
                <h3
                  id="article-12"
                  className="text-lg font-bold text-foreground scroll-m-8"
                >
                  Article 12 Consolidation Mechanism
                </h3>
                <div className="space-y-2">
                  <p>
                    <strong>12.1</strong> The AECCI-IAC Council in India has the
                    authority, upon request from either party involved in
                    arbitration proceedings, submitted in writing through one of
                    the specified methods in Article 2, to combine two or more
                    ongoing arbitration cases into a single arbitration
                    proceeding when:
                  </p>
                  <ul className="list-[lower-alpha] pl-5 space-y-1">
                    <li>
                      All parties have provided written consent for
                      consolidation.
                    </li>
                    <li>
                      All claims in the arbitrations stem from the same contract
                      or contracts.
                    </li>
                    <li>
                      The claims in the arbitrations do not originate from the
                      same contract or contracts, but the arbitrations involve
                      the same parties, the disputes are related to the same
                      legal relationship, and the AECCI-IAC Council in Navi
                      Mumbai, India, upon reviewing the arbitration agreements,
                      deems them compatible.
                    </li>
                  </ul>
                  <p>
                    <strong>12.2</strong> Following the receipt of a written
                    consolidation request from either party, the AECCI-IAC
                    Council in Navi Mumbai, India, during a duly convened
                    meeting, shall either approve or reject the consolidation
                    request while documenting detailed reasons in writing. This
                    decision takes into account:
                  </p>
                  <ul className="list-[lower-alpha] pl-5 space-y-1">
                    <li>
                      The specific facts and circumstances necessitating
                      consolidation, which may vary from case to case.
                    </li>
                    <li>
                      Whether the interests of all parties involved are
                      adequately protected through consolidation.
                    </li>
                    <li>
                      Whether consolidation is essential to ensure justice for
                      all parties in the proceedings.
                    </li>
                    <li>
                      Whether the subject matter of the arbitration proceedings
                      allows for consolidation.
                    </li>
                    <li>
                      Whether the initiation of consolidation proceedings will
                      not adversely affect the rights of any parties, whether
                      contractual or otherwise.
                    </li>
                  </ul>
                  <p>
                    <strong>12.3</strong> The AECCI-IAC Council, exercising its
                    discretionary powers, will also determine whether the same
                    arbitrator will continue or if a new arbitrator should be
                    appointed for the consolidated hearing.
                  </p>
                  <p>
                    <strong>12.4</strong> Additionally, the AECCI-IAC Council,
                    using its discretionary authority, will decide whether all
                    arbitration proceedings should be consolidated into the
                    arbitration proceeding that commenced first.
                  </p>
                  <p>
                    <strong>12.5</strong> The decision made by the AECCI-IAC
                    Council is final, conclusive, and binding upon all parties
                    involved in the arbitration regarding the conduct of
                    consolidation proceedings, subject to the parties’ payment
                    of the specified fees as outlined in the Schedule of Fees (
                    Article 34 ).
                  </p>
                </div>
              </div>

              <div className="space-y-2">
                <h3
                  id="article-13"
                  className="text-lg font-bold text-foreground scroll-m-8"
                >
                  Article 13 Conduct of the Arbitration
                </h3>
                <p>
                  13.1 Considering the intricacy and significance of the
                  dispute, the arbitration process should prioritize efficiency
                  and cost-effectiveness...
                </p>
                <p>
                  13.2 The arbitral tribunal must, in consultation with the
                  parties, implement any necessary procedural measures...
                </p>
                <p>
                  13.3 Upon request from any party, the arbitral tribunal may
                  issue orders regarding the confidentiality of the arbitration
                  proceedings...
                </p>
                <p>
                  13.4 In all instances, the arbitral tribunal must operate in
                  accordance with the law and maintain impartiality...
                </p>
                <p>
                  13.5 Parties are obligated to adhere to any orders issued by
                  the arbitral tribunal.
                </p>
                <p>
                  13.6 If the original Agreement is in a language other than
                  English, it must be translated into English...
                </p>
                <p>
                  13.7 The presiding arbitrator may issue procedural rulings
                  independently...
                </p>
                <p>
                  13.8 The Tribunal may proceed with the arbitration process
                  even in cases where any party fails or refuses to comply...
                </p>
                <p>
                  13.9 If any applicable law requires it, the Tribunal shall
                  strive to deliver its final Award within 12 months...
                </p>
                <p>
                  13.10 For matters not explicitly addressed in these Rules, the
                  Council and the Tribunal will operate in accordance with the
                  underlying principles...
                </p>
              </div>

              <div className="space-y-2">
                <h3
                  id="article-14"
                  className="text-lg font-bold text-foreground scroll-m-8"
                >
                  Article 14 Language
                </h3>
                <p>
                  14.1 The parties have the liberty to mutually decide on the
                  language or languages to be employed in the Arbitral
                  Proceedings...
                </p>
                <p>
                  14.2 If any document is composed in a language different from
                  the arbitration’s designated language, the Tribunal reserves
                  the right to instruct that party to provide a translation...
                </p>
                <p>
                  14.3 In cases where the parties have not reached an agreement
                  regarding the language(s) of the arbitration, English will
                  serve as the default language...
                </p>
              </div>

              <div className="space-y-2">
                <h3
                  id="article-15"
                  className="text-lg font-bold text-foreground scroll-m-8"
                >
                  Article 15 Statement of Claims & Defences
                </h3>
                <p>
                  15.1 The Claimant must, within the timeline agreed upon by the
                  parties or determined by the arbitral tribunal, provide a
                  detailed account of the facts...
                </p>
                <p>
                  15.2 Both parties are permitted to include any documents they
                  deem relevant with their statements...
                </p>
                <p>
                  15.3 Additionally, the Respondent has the option to introduce
                  a counterclaim or assert a set-off in support of their
                  position...
                </p>
                <p>
                  15.4 Unless otherwise stipulated by the parties, either party
                  has the right to modify or augment their claim or Defence as
                  the arbitral proceedings progress...
                </p>
                <p>
                  15.5 The submission of the statement of claim and defence, as
                  outlined in this Article, must be completed within a six-month
                  period...
                </p>
              </div>

              <div className="space-y-2">
                <h3
                  id="article-16"
                  className="text-lg font-bold text-foreground scroll-m-8"
                >
                  Article 16 Statement of Claim
                </h3>
                <p>
                  16.1 The Claimant must file its claim in compliance with the
                  rules of AECCI- IAC.
                </p>
                <p>
                  16.2 If the Claimant does not submit its Statement of Claim
                  within the specified timeframe, the Tribunal may issue an
                  order to conclude the arbitration proceedings...
                </p>
              </div>

              <div className="space-y-2">
                <h3
                  id="article-17"
                  className="text-lg font-bold text-foreground scroll-m-8"
                >
                  Article 17 Further Pleadings
                </h3>
                <p>
                  17.1 All statements, documents or other information supplied
                  to the Tribunal and the Registrar by both the parties and the
                  final decision shall lies with the tribunal.
                </p>
              </div>

              <div className="space-y-2">
                <h3
                  id="article-18"
                  className="text-lg font-bold text-foreground scroll-m-8"
                >
                  Article 18 Submission of Statement of Defence and Counter
                  Claims
                </h3>
                <p>
                  18.1 Unless previously presented as per the relevant Rule, the
                  Respondent must, within a timeline established by the
                  Tribunal...
                </p>
                <p>
                  18.2 If, as determined during the initial procedural meeting,
                  the Tribunal deems it necessary; the Respondent should also
                  append witness statements...
                </p>
                <p>
                  18.3 In the event of a counterclaim, the Claimant must, within
                  a timeline set by the Tribunal...
                </p>
                <p>
                  18.4 Should the Respondent fail to submit a Statement of
                  Defence, or if, at any point, any party neglects the
                  opportunity to present its case...
                </p>
              </div>

              <div className="space-y-2">
                <h3
                  id="article-19"
                  className="text-lg font-bold text-foreground scroll-m-8"
                >
                  Article 19 Evidence
                </h3>
                <p>
                  19.1 The arbitral Tribunal may possess the authority to
                  mandate that any documentary evidence must be accompanied by
                  translations...
                </p>
                <p>
                  19.2 Furthermore, the Tribunal’s authority extends beyond what
                  is explicitly articulated within these Rules...
                </p>
                <ul className="list-[lower-alpha] pl-5 space-y-1">
                  <li>
                    Undertake inquiries deemed necessary for prudent by the
                    Tribunal.
                  </li>
                  <li>
                    Issue directives to the parties, compelling them to make any
                    property or item accessible for inspection.
                  </li>
                  <li>
                    Instruct any party to submit to the Tribunal and share with
                    the other parties, documents within their possession,
                    custody, or control...
                  </li>
                  <li>
                    Adjudicate on matters pertaining to legal privilege or any
                    other privileges asserted.
                  </li>
                </ul>
              </div>

              <div className="space-y-2">
                <h3
                  id="article-20"
                  className="text-lg font-bold text-foreground scroll-m-8"
                >
                  Article 20 Witnesses
                </h3>
                <p>
                  20.1 Prior to the commencement of the hearing, the arbitral
                  tribunal holds the authority to request that the parties
                  furnish a notice identifying the witnesses...
                </p>
                <p>
                  20.2 The Tribunal retains the discretion to determine whether
                  witnesses should be allowed to provide oral testimonies...
                </p>
                <p>
                  20.3 The Tribunal possesses the authority to decide the manner
                  in which witnesses will be examined...
                </p>
                <p>
                  20.4 Parties, or their duly authorised representatives may,
                  with the Tribunal’s prior approval, conduct questioning of
                  their own potential witnesses...
                </p>
                <p>
                  20.5 In the event that the parties involved formally request,
                  in writing to solely base the arbitration proceedings on
                  documentary evidence...
                </p>
                <p>
                  20.6 it is important to note that the arbitral tribunal is
                  bound the procedures outlined in the Indian Evidence Act of
                  1872...
                </p>
              </div>

              <div className="space-y-2">
                <h3
                  id="article-21"
                  className="text-lg font-bold text-foreground scroll-m-8"
                >
                  Article 21 Tribunal appointed Expert
                </h3>
                <p>
                  21.1 The arbitral tribunal, considering the unique
                  circumstances of a particular case and unless otherwise
                  stipulated by the parties, has the authority to:
                </p>
                <ul className="list-[lower-alpha] pl-5 space-y-1">
                  <li>
                    Nominate one or more experts to provide insights on specific
                    matters under the tribunal’s consideration,
                  </li>
                  <li>
                    Call upon a party to furnish the expert with pertinent
                    information or grant access to relevant documents...
                  </li>
                </ul>
                <p>
                  21.2 The arbitral tribunal must instruct the appointed expert
                  to submit a written report within a specified timeframe...
                </p>
                <p>
                  21.3 With prior approval from the Arbitral Tribunal, the
                  parties can direct expert to allow the arbitration parties to
                  examine documents...
                </p>
              </div>
            </div>

            {/* PART V */}
            <div className="space-y-6">
              <h2
                id="part-5"
                className="text-2xl font-bold text-primary underline underline-offset-4 scroll-m-8"
              >
                PART V : ARBITRAL AWARD
              </h2>

              <div className="space-y-2">
                <h3
                  id="article-22"
                  className="text-lg font-bold text-foreground scroll-m-8"
                >
                  Article 22 Time frame to determine Arbitral Award
                </h3>
                <p>
                  The timeframe and procedures related to the issuance of the
                  final award in an arbitration proceeding.
                </p>
                <p>
                  22.1 The Arbitral tribunal is expected to deliver the final
                  award within a span of six months from the date of the last
                  signature...
                </p>
                <p>
                  22.2 In the event that the parties reach a settlement
                  subsequent to the transmission of the case file to the
                  arbitral tribunal...
                </p>
              </div>

              <div className="space-y-2">
                <h3
                  id="article-23"
                  className="text-lg font-bold text-foreground scroll-m-8"
                >
                  Article 23 Form and Contents of Arbitral Award
                </h3>
                <p>
                  23.1 An Arbitral Award must be composed in a written format
                  and bear the signatures of all the members of the arbitral
                  tribunal.
                </p>
                <p>
                  23.2 In cases involving multiple arbitrators, it is acceptable
                  for the signatures of the majority of the arbitral tribunal’s
                  members to suffice...
                </p>
                <p>
                  23.3 The Arbitral Award is required to elucidate the grounds
                  on which it is based...
                </p>
                <p>
                  23.4 The Arbitral Award should specify the date and the place
                  of arbitration...
                </p>
                <p>
                  23.5 Subsequent to the completion of the Arbitral Award, a
                  signed copy must be delivered to each of the involved parties.
                </p>
                <p>
                  23.6 The Arbitral Award has the authority, at any point during
                  the arbitral proceedings, to issue an interim arbitral
                  award...
                </p>
                <ul className="list-[lower-alpha] pl-5 space-y-1">
                  <li>
                    Unless otherwise agreed upon by the parties, if the Arbitral
                    Award entails a monetary payment, the arbitral tribunal is
                    entitled to include interest...
                  </li>
                  <li>
                    Any monetary sum directed to be paid by an Arbitral Award
                    shall, unless explicitly directed otherwise by the award,
                    accrue interest...
                  </li>
                </ul>
              </div>

              <div className="space-y-2">
                <h3
                  id="article-24"
                  className="text-lg font-bold text-foreground scroll-m-8"
                >
                  Article 24 Relevant Factors in Determining Final Award
                </h3>
                <p>
                  24.1 In cases involving multiple arbitrators, the award is
                  contingent upon a majority decision...
                </p>
                <p>
                  24.2 The award issued by the arbitral tribunal must be
                  comprehensive, providing detailed reasons for arriving at the
                  decision...
                </p>
                <p>
                  24.3 If both parties unanimously agree that no further
                  relevant evidence or pleadings are to be presented...
                </p>
                <p>
                  24.4 Within 30 days of concluding the proceedings, the
                  tribunal must submit all draft awards to the Registrar...
                </p>
                <p>
                  24.5 The final award is expected to be delivered within 30
                  days of the tribunal submitting the draft award to the
                  Registrar...
                </p>
                <p>
                  24.6 The tribunal has the discretion to issue separate awards
                  on different issues and at different times.
                </p>
                <p>
                  24.7 In cases where an arbitrator fails to cooperate, the
                  remaining arbitrators can proceed to make the award without
                  their participation.
                </p>
                <p>
                  24.8 An award can exist in multiple counterparts, with each
                  considered as an original...
                </p>
                <p>
                  24.9 The Registrar is responsible for delivering certified
                  copies of the award upon the full payment of arbitration
                  costs.
                </p>
                <p>
                  24.10 The tribunal holds the authority to grant simple or
                  compound interest at rates agreed upon or determined.
                </p>
                <p>
                  24.11 In the event of a settlement, the tribunal may issue a
                  consent award either with or without reasons upon request...
                </p>
                <p>
                  24.12 By opting for arbitration under these Rules, the parties
                  commit to promptly executing the award and relinquish their
                  rights to appeal...
                </p>
                <p>
                  24.13 The AECCI – IAC has the option to publish an award with
                  redacted names and identifying information and maintains it in
                  its registry
                </p>
              </div>

              <div className="space-y-2">
                <h3
                  id="article-25"
                  className="text-lg font-bold text-foreground scroll-m-8"
                >
                  Article 25 Correction of Awards and Additional Awards
                </h3>
                <p>
                  25.1 Within a period of 30 days following the receipt of an
                  Award, any party may submit a written notice to the
                  Registrar...
                </p>
                <p>
                  25.2 The Tribunal retains the authority to rectify any errors
                  of the type mentioned in Rule 23.1, independently and without
                  external request...
                </p>
                <p>
                  25.3 Within 30 days of receiving an Award, a party may, via
                  written notice to the Registrar and all other parties
                  involved, request the Tribunal to render an additional
                  Award...
                </p>
                <p>
                  25.4 Within 30 days of receiving an Award, a party may submit
                  a written notice to the Registrar and all other parties,
                  seeking an interpretation of the Award...
                </p>
                <p>
                  25.5 The Registrar holds the authority to extend the time
                  limits established by this Rule.
                </p>
                <p>
                  25.6 The provisions outlined in Article 23 shall be applied,
                  with necessary or appropriate adjustments, in the context of
                  corrections to an Award...
                </p>
              </div>
            </div>

            {/* PART VI */}
            <div className="space-y-6">
              <h2
                id="part-6"
                className="text-2xl font-bold text-primary underline underline-offset-4 scroll-m-8"
              >
                PART VI : MISCELLANEOUS PROVISIONS
              </h2>

              <div className="space-y-2">
                <h3
                  id="article-26"
                  className="text-lg font-bold text-foreground scroll-m-8"
                >
                  Article 26 Jurisdiction
                </h3>
                <p>
                  26.1 Unless otherwise specified in the agreement the
                  Tribunal’s primary jurisdiction should be in Navi Mumbai,
                  India.
                </p>
                <p>
                  26.2 In the event of a dispute regarding jurisdiction, the
                  determination of Seat of Arbitration, the location of
                  Arbitration proceedings and the conclusion of such proceedings
                  shall be communicated through written correspondence by the
                  parties who have entered into the agreement.
                </p>
              </div>

              <div className="space-y-2">
                <h3
                  id="article-27"
                  className="text-lg font-bold text-foreground scroll-m-8"
                >
                  Article 27 Secrecy and Confidentiality
                </h3>
                <p>
                  In addition to any provisions explicitly outlined in any other
                  currently applicable laws governing arbitration proceedings
                  between the parties involved, it is required that the
                  arbitrator, the AECCI – IAC, and the parties who are
                  signatories to the arbitration agreement maintain rigorous
                  confidentiality throughout all phases of the arbitration
                  process until its conclusion. The only exception to this rule
                  is in the case of the final arbitral award issued by the
                  Arbitral Tribunal, where disclosure becomes necessary for the
                  purpose of implementing and enforcing the said final arbitral
                  award.
                </p>
              </div>

              <div className="space-y-2">
                <h3
                  id="article-28"
                  className="text-lg font-bold text-foreground scroll-m-8"
                >
                  Article 28 Waiver and Limited Liability
                </h3>
                <p>
                  28.1 If either party involved in the arbitration proceedings
                  proceeds with the arbitration without raising objections to
                  non-compliance with any mandatory provisions within the AECCI
                  – IAC Rules...
                </p>
                <p>
                  28.2 The arbitrators, individuals appointed by the Arbitral
                  Tribunal, the emergency arbitrator, the AECCI- IAC, and any of
                  its members, employees, as well as members of the AECCI IAC
                  Council...
                </p>
              </div>

              <div className="space-y-2">
                <h3
                  id="article-29"
                  className="text-lg font-bold text-foreground scroll-m-8"
                >
                  Article 29 Termination of Proceedings
                </h3>
                <p>
                  29.1 The arbitral proceedings may conclude either through the
                  issuance of a final arbitral award or by an order from the
                  arbitral tribunal as specified in sub-Article (ii).
                </p>
                <p>
                  29.2 The arbitral tribunal is responsible for issuing an order
                  to terminate the arbitral proceedings in the following
                  circumstances:
                </p>
                <ul className="list-[lower-alpha] pl-5 space-y-1">
                  <li>
                    If the claimant withdraws their claim, unless the respondent
                    raises an objection...
                  </li>
                  <li>
                    When the parties mutually agree to terminate the
                    proceedings.
                  </li>
                  <li>
                    If the arbitral tribunal determines that the continuation of
                    the proceedings has become unnecessary or impossible for any
                    other valid reason.
                  </li>
                </ul>
                <p>
                  29.3 The authority of the arbitral tribunal ends concurrently
                  with the termination of the arbitral proceedings.
                </p>
              </div>

              <div className="space-y-2">
                <h3
                  id="article-30"
                  className="text-lg font-bold text-foreground scroll-m-8"
                >
                  Article 30 Default of a party
                </h3>
                <p>
                  Unless otherwise stipulated by the parties, in cases where,
                  without presenting sufficient justification:
                </p>
                <ul className="list-[lower-alpha] pl-5 space-y-1">
                  <li>
                    The claimant fails to submit their statement of claim as
                    prescribed; the arbitral tribunal shall bring the
                    proceedings to a close.
                  </li>
                  <li>
                    The respondent neglects to furnish their statement of
                    defense as required...
                  </li>
                  <li>
                    Either party fails to attend an oral hearing or provide
                    documentary evidence; the arbitral tribunal may continue
                    with the proceedings and render an arbitral award based on
                    the available evidence.
                  </li>
                </ul>
              </div>

              <div className="space-y-2">
                <h3
                  id="article-31"
                  className="text-lg font-bold text-foreground scroll-m-8"
                >
                  Article 31 Settlement
                </h3>
                <p>
                  31.1 An arbitral tribunal is not precluded from actively
                  promoting the settlement of the dispute under an arbitration
                  agreement...
                </p>
                <p>
                  31.2 Should the parties reach a settlement during the course
                  of the arbitral proceedings...
                </p>
                <p>
                  31.3 An arbitral award reflecting agreed terms shall adhere to
                  the principles outlined in and explicitly state its nature as
                  an arbitral award.
                </p>
                <p>
                  31.4 An arbitral award on agreed terms shall carry the same
                  legal status and impact as any other arbitral award addressing
                  the merits of the dispute.
                </p>
              </div>

              <div className="space-y-2">
                <h3
                  id="article-32"
                  className="text-lg font-bold text-foreground scroll-m-8"
                >
                  Article 32 Arbitration Agreement not to be discharged by death
                  of Parties
                </h3>
                <p>
                  The death of a party to an arbitration agreement does not
                  result in the agreement being terminated. Instead, it remains
                  valid and can be enforced by or against the deceased party’s
                  legal representative.
                </p>
                <p>
                  If an arbitrator has been appointed by a party who
                  subsequently passes away, the arbitrator’s role and authority
                  are not terminated as a result of the party’s death.
                </p>
                <p>
                  It’s important to note that this section does not affect any
                  laws that may exist, which could alter the circumstances
                  regarding the termination of the arbitration agreement upon
                  death.
                </p>
              </div>
            </div>

            {/* PART VII */}
            <div className="space-y-6">
              <h2
                id="part-7"
                className="text-2xl font-bold text-primary underline underline-offset-4 scroll-m-8"
              >
                PART VII : ARBITRATION PROCESS: A COMPREHENSIVE OVERVIEW
              </h2>

              <div className="space-y-2">
                <h3
                  id="article-33"
                  className="text-lg font-bold text-foreground scroll-m-8"
                >
                  Article 33 Payment of Arbitration Cost
                </h3>
                <p>Details regarding the payment of arbitration costs...</p>
              </div>

              <div className="space-y-2">
                <h3
                  id="article-34"
                  className="text-lg font-bold text-foreground scroll-m-8"
                >
                  Article 34 Schedule Fee
                </h3>
                <p>Details regarding the schedule fee...</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
