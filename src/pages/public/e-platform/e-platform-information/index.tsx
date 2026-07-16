import { motion, type Variants } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  FileText,
  RefreshCw,
  Mail,
  BookOpen,
  Wallet,
  Briefcase,
  Scale,
  Globe,
  CheckCircle2,
  ArrowRight,
  Play,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

const membershipTypes = [
  "Small Business Membership",
  "Start-Up Membership",
  "Corporate Membership",
  "Corporate+ Membership",
  "Overseas Membership",
];

const attestationModes = [
  {
    label: "A",
    title: "Manual Attestation (at the chamber desk)",
    desc: "Certificate of origin (NP), issued from trade connect, by AECCI as your agency, can be manually attested at the chamber desk. Relevant shipping documents can be manual attested from the chamber desk. For this applicant may also need to bring the originals of supporting documents for sighting by AECCI. The originals should be returned together with the endorsement. Copies will be retained by the chamber for record purpose.",
  },
  {
    label: "B",
    title: "Electronic Attestation",
    desc: 'Another option is to obtain an electronic certificate of origin through AECCI\'s E-Platform. Users can digitally register their company, submit the COO-relevant documents online and within 20 minutes of submission, the documents are attested, and users can view it in their "Track Your Document" section.',
  },
  {
    label: "C",
    title: "Semi-Electronic COO",
    desc: "For users who require urgent manual attestation on shipping documents but cannot visit the chamber, there is the option of semi-electronic COO. Users can fill out the required fields and upload documents online. Exporters, especially those in remote areas, can conveniently utilize our semi-electronic service (printing at the chamber with courier facility).",
  },
];

const services = [
  {
    icon: FileText,
    title: "Certificate of Origin (Non-Preferential) Services",
    desc: "The Certificate of Origin serves as document facilitating the export of goods to different countries. Economic agreements dictate the use of specific forms, which when submitted, enable customs exemptions or discounted customs duties as per trade agreements ratified by India. Vide DGFT Trade Notice No. 24/20.12.2024, 1st January 2025 onwards, the Certificate of Origin (CoO) Non-Preferential will mandatory be issued through the DGFT eCOO 2.0 Portal Trade.gov.in. To process the eCOO, you can choose Asian Exporters Chamber of Commerce & Industry as your agency.",
  },
  {
    icon: RefreshCw,
    title: "Membership Service and Renewals",
    desc: "AECCI members can now conveniently renew their membership hassle-free via the e-platform at their discretion. Membership renewal options include 1 year, 3 years, or 5 years, allowing members flexibility according to their preferences. Within this section, members can easily access and view their membership certificates. Registered Members have the flexibility to log in to their accounts at any time to verify their membership status. Membership is initially granted for a year and is renewed annually there after. It is strongly recommended that all members renew their memberships before the 31st of March each calendar year to avoid any interruption and continue benefiting from the various services and advantages provided by the chamber. Renewing your membership has never been easier; simply pay your renewal fees online and enjoy immediate renewal.",
  },
  {
    icon: Mail,
    title: "Recommendation Letters",
    desc: "Obtaining a visa recommendation letter has now been simplified. Applicants/members no longer need to visit the chamber or endure lengthy queues to obtain their recommendation letters. Instead, they can conveniently log in to their profile dashboard, complete the necessary form, and submit the required documents online. Upon successful submission of all details, users can track their application status through the progress bar. The issuance of digital recommendation letters will be promptly displayed on their dashboard within an hour. During the form submission process, users can select their preferred mode of delivery, and the recommendation letter will be issued accordingly.",
  },

  {
    icon: Wallet,
    title: "Wallet",
    desc: "The Wallet serves as the core of the ePlatform, acting as a central hub for transactions. Prior to utilizing any transactional service, users must ensure that their wallet contains a sufficient balance. Users are encouraged to maintain a revolving balance by regularly recharging or adding funds to their wallet. All transactions processed through the ePlatform, such as membership renewals, eCo attestations, or issuance of recommendation letters, are debited from the wallet. Users can conveniently track each debit or credit entry in their wallet, and access their transaction history for download.",
  },
  {
    icon: Briefcase,
    title: "Wings",
    desc: "AECCI's Wings provide comprehensive support to your business through various divisions, including the Legal Wing, Export Wing, Professional Wing, HR Support Wing, and more. With our digital array of services, users can now seek consultation from AECCI professionals online. They can digitally submit their queries and receive appointments or solutions online, streamlining the process for their convenience.",
  },
  {
    icon: Scale,
    title: "International Arbitration Centre (AECCI-IAC)",
    desc: "In the event of any dispute arising from a contract or agreement between parties, AECCI members have the option to address such disputes under this section. Disputes may be binding, governed by a legal contract, or non-binding, lacking a contractual basis. In either scenario, clients with ongoing disputes may submit their queries to AECCI-IAC. Empanelled Expert Arbitrator will then initiate the resolution process, aiding parties in reaching a resolution through arbitration or litigation.",
  },
  {
    icon: Globe,
    title: "Virtual B2B Forum",
    desc: "With a strong global network of 37 trade and legal experts coming from Asia, Africa, Europe, Virtual B2B meets are arranged on one-to-one basis. During such meetings you can discuss your trade requirements and can connect with these global experts for future trade services. All the listed countries and the experts collaborators can be viewed under International Collaboration section.",
  },
  {
    icon: BookOpen,
    title: "Publications",
    desc: "All chamber publications are accessible in our digital library. Users can explore daily viewpoints, newsletters, and our annual magazine to stay updated on the latest trends.",
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" },
  }),
};

export default function EPlatformInformationPage() {
  const navigate = useNavigate();

  return (
    <div className="w-full bg-background text-foreground">
      {/* Hero */}
      <section className="relative bg-foreground overflow-hidden py-24 md:py-36">
        <div className="absolute inset-0 bg-primary/10 blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 flex flex-col lg:flex-row gap-12 items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="flex-1"
          >
            <span className="text-xs font-bold text-primary uppercase tracking-widest mb-4 block">
              Digital Service Portal
            </span>
            <h1 className="text-3xl md:text-5xl font-bold text-background leading-tight mb-6">
              e-Platform <span className="text-primary">Information</span>
            </h1>
            <p className="text-background/70 text-base md:text-lg leading-relaxed mb-4 max-w-xl">
              Online service for all the transactions while replacing the
              customer's need to visit Chamber physically. The online
              attestation service for all the shipping documents can be availed
              through the chamber's website or its smart application.
            </p>
            <p className="text-background/60 text-sm leading-relaxed mb-8 max-w-xl">
              AECCI e-Platform services are exclusively available to our
              registered members. Upon membership approval, members gain access
              to a comprehensive array of support and benefits designed to
              propel their businesses forward.
            </p>
            <Button asChild size="lg" className="rounded-xl">
              <a
                href="https://e-platform.aecci.org.in/login"
                target="_blank"
                rel="noopener noreferrer"
              >
                Members Login <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            custom={1}
            variants={fadeUp}
            className="grid grid-cols-2 gap-4 flex-shrink-0"
          >
            {[
              { value: "2020", label: "Platform Launched" },
              { value: "v2.0", label: "Current Version (Apr 2024)" },
              { value: "5+", label: "Membership Types" },
              { value: "9+", label: "Digital Services" },
            ].map((stat, i) => (
              <div
                key={i}
                className="bg-background/5 border border-background/10 rounded-2xl p-6 text-center min-w-[140px]"
              >
                <p className="text-2xl font-bold text-primary mb-1">
                  {stat.value}
                </p>
                <p className="text-background/60 text-xs leading-snug">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About the Platform */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <span className="text-xs font-bold text-primary uppercase tracking-widest mb-3 block">
                About e-Platform
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Learn How to Register on AECCI ePlatform
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                The Asian Exporters' Chamber of Commerce (AECCI) initiated its
                e-platform in 2020 and introduced its upgraded Version 2.0 on
                April 1, 2024. This endeavor aims to provide online services
                catering to all exporter needs, with the vision of offering
                accessible digital services anytime, anywhere. These e-platform
                services can be accessed via the chamber's website, optimized
                for desktop viewing and through mobile app also.
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                At AECCI, we are committed to assisting you in various aspects
                including brand awareness, generating new business
                opportunities, expanding your network, training your personnel,
                arranging B2B meets, resolving your trade disputes and accessing
                international markets. Additionally, members can benefit from
                AECCI's diverse range of services and programs aimed at
                fostering business growth.
              </p>
              <div className="space-y-2">
                {membershipTypes.map((type, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-sm text-foreground">{type}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Video */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-border bg-black aspect-video">
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                <div className="w-16 h-16 bg-primary/80 rounded-full flex items-center justify-center opacity-80">
                  <Play className="w-7 h-7 text-primary-foreground ml-1" />
                </div>
              </div>
              <video
                src="https://aecci-bucket-new.s3.amazonaws.com/aecci+assets/signUpDraft.mp4"
                controls
                className="w-full h-full object-cover"
                preload="metadata"
                onPlay={(e) => {
                  const overlay = e.currentTarget.parentElement?.querySelector(
                    ".pointer-events-none",
                  ) as HTMLElement;
                  if (overlay) overlay.style.display = "none";
                }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      <Separator />

      {/* Shipping Document Attestation */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mb-12"
          >
            <span className="text-xs font-bold text-primary uppercase tracking-widest mb-3 block">
              Shipping Documents
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Shipping Documents Attestation
            </h2>
            <p className="text-muted-foreground text-sm max-w-3xl leading-relaxed">
              Our e-Platform is available for the attestation of COO(NP) –
              supporting shipping documents. Following are the ways in which the
              shipping documents can be attested:
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {attestationModes.map((mode, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
              >
                <Card
                  className="h-full border-border hover:border-primary/40 transition-colors group cursor-pointer"
                  onClick={() =>
                    navigate(
                      "/e-platform/formalities-guidelines/information-for-e-services",
                    )
                  }
                >
                  <CardContent className="p-6 flex flex-col gap-4 h-full">
                    <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm flex-shrink-0">
                      {mode.label}
                    </div>
                    <p className="font-semibold text-foreground text-sm">
                      {mode.title}
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                      {mode.desc}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Non-Standard Documents */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <Card
              className="border-primary/20 bg-primary/5 cursor-pointer hover:bg-primary/10 transition-colors"
              onClick={() =>
                navigate(
                  "/e-platform/formalities-guidelines/information-for-e-services",
                )
              }
            >
              <CardContent className="p-8">
                <Badge
                  variant="outline"
                  className="mb-4 border-primary/30 text-primary"
                >
                  Non-Standard Documents
                </Badge>
                <p className="text-foreground text-sm leading-relaxed mb-3">
                  Exporters in the pharmaceutical, chemical, and agrochemical
                  industries can easily obtain attestation through our
                  non-standard document services on the E-Platform. Documents
                  such as agreements, pharmaceutical registration documents, and
                  dossiers can be attested hassle-free.
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                  AECCI has extended its digital attestation services to include
                  non-standard documents such as commercial documents,
                  distribution or sales agreements, pharmaceutical registration
                  documents, agrochemical documents, export permission-related
                  documents, MCA documents, and more. These documents can now be
                  electronically attested via AECCI's E-Platform. Users are
                  required to review the applicable terms and conditions for
                  these documents to facilitate a smoother process.
                </p>
                <p className="text-muted-foreground text-sm">
                  <span className="font-medium text-foreground">Note:</span>{" "}
                  Users can print their documents through "e-Platform" online.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* All Services */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mb-12"
          >
            <span className="text-xs font-bold text-primary uppercase tracking-widest mb-3 block">
              e-Platform Services
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Services Available to Members
            </h2>
            <p className="text-muted-foreground text-sm max-w-2xl leading-relaxed">
              Members can enjoy the below-listed services through AECCI's
              E-Platform.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
              >
                <Card className="h-full border-border hover:border-primary/40 transition-colors group">
                  <CardContent className="p-6 flex flex-col gap-4 h-full">
                    <div className="w-12 h-12 bg-muted group-hover:bg-primary/10 rounded-xl flex items-center justify-center text-muted-foreground group-hover:text-primary transition-colors">
                      <svc.icon className="w-6 h-6" />
                    </div>
                    <p className="font-semibold text-foreground text-sm">
                      {svc.title}
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                      {svc.desc}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-foreground">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <span className="text-xs font-bold text-primary uppercase tracking-widest mb-4 block">
              Get Started
            </span>
            <h2 className="text-2xl md:text-4xl font-bold text-background mb-6 leading-tight">
              Supporting the digitalization efforts of India
            </h2>
            <p className="text-background/70 text-base leading-relaxed mb-10 max-w-2xl mx-auto">
              It is our primary goal to support the digitalization efforts of
              India, saving both time and money for our users.
            </p>
            <Button asChild size="lg" className="rounded-xl">
              <a
                href="https://e-platform.aecci.org.in/login"
                target="_blank"
                rel="noopener noreferrer"
              >
                Go to Members Login <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
