import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { MagazinesSection } from "@/components/MagazinesSection";

const videos = [
  {
    id: "eWaCEV28LWc",
    title:
      "Webinar-International Arbitration under the Arbitration and Conciliation Act, 1996",
  },
  { id: "x9UE-69XeN8", title: "#We are AECCI" },
  {
    id: "OSlQ3SNOU3s",
    title: "AMA- “EU Trade Legal Structures, Compliance & Risk ”",
  },
  {
    id: "2NJD8S6RZ2o",
    title:
      "Webinar-Arbitration as an Effective Mechanism in the Era of Global Business Disputes",
  },
  { id: "BG2h9xIxe_A", title: "AMA Session with Austria" },
  {
    id: "gqX93V19cGY",
    title:
      "“From India to Spain - Strategy, Finance & Collaboration in European Markets”",
  },
  {
    id: "Aolp43XJscM",
    title: "India-Namibia: Ask Me Anything session- Trade Connect.",
  },
  { id: "yL6ZlenfH2k", title: "AMA Armenia 31 10 2025" },
  {
    id: "1sIpSZVQmgo",
    title:
      '\'"Doing Business with Mexico: AMA with Trade & Market Entry Experts"',
  },
  {
    id: "fHRBesv3nU4",
    title:
      'AMA - "Singapore as a Gateway to ASEAN for Trade & Business Growth "',
  },
  {
    id: "Ph3eLKnnIg0",
    title:
      'AMA-"Doing Business in Indonesia - Legal Compliance, IPR & Market Entry"',
  },
  { id: "8XnvUVj5NyA", title: "AMA with Jordan-14th June 2025" },
  { id: "x8YsYqvO7eQ", title: "AMA Session with Advocate Khushnuma Khan" },
  {
    id: "S2eutQZWsys",
    title:
      "\"Ask Me Anything\" 'Arbitration: Pathway to Resolving Trade Disputes and Driving Business Growth.'",
  },
  {
    id: "y2BOtUi3yWI",
    title:
      "Webinar on Investment & Trade Opportunities for Indian Companies in Egypt: Purpose & Benefits!",
  },
  { id: "BC0HaU9qe8A", title: "'Ask Me Anything' Arbitration" },
  {
    id: "nSIYbAvIyfc",
    title:
      "Commercial Law: The Cross Border Commercial Trade Litigation! WS-07",
  },
  {
    id: "DKPvIMxVtRQ",
    title: "Consumer Rights under Insolvency in the realm of Overseas Trade!",
  },
  {
    id: "STC28ew9TPE",
    title: "Corporate Crimes and Emerging Threats in International Trade",
  },
  {
    id: "GOJwmRjuDBA",
    title:
      "Mastering Credit Risk and Trade Insurance Strategies for Global Business Success: Series- 14",
  },
  {
    id: "WpDh08CAs7Q",
    title: "Intellectual Property Rights (IPR) & International Trade!",
  },
  {
    id: "9UnZRGlh1ls",
    title: "Role of Free Trade Agreement in International Trade!",
  },
  {
    id: "O33-bWNvWEI",
    title:
      "How to handle Financial Risk associated in International Exports/ Imports?",
  },
  {
    id: "dNjMDw6g3ss",
    title: "Highlights on Foreign Trade Policy (2023-28): Series- 13",
  },
  { id: "LzfY28nA2xY", title: "How to Start International Exports? Series 12" },
  {
    id: "5VDafUVWQkQ",
    title:
      "Exclusive Webinar on Trade and Incorporation of Companies in Egypt with Sadany & Khalifa",
  },
  {
    id: "dQsF1Tk-8xM",
    title:
      "Know more about International Commercial Terms (INCOTERMS) 2020: Series- 11",
  },
  {
    id: "gvb7IrgWn7E",
    title: "Method of International Payments & LC's: Series- 10",
  },
  {
    id: "MzR2sxNY59A",
    title: "Latest Update and Impact of GST on Import/ Export: Series - 09",
  },
  { id: "d0WBIV9hFqs", title: "Country Focus Market Research- Series 08" },
  {
    id: "annnNx5CntQ",
    title: "Prevent Disputes & Scams in Global Trade- Series 07",
  },
  {
    id: "hE2i_L0GE_A",
    title:
      "Interested in expanding your business on a global scale?- Series 05",
  },
  {
    id: "rHgfJ0-ujTI",
    title: "AECCI Professional Wing Benefits #live Session- Series 05",
  },
  {
    id: "kIaMatSw6EM",
    title: "AECCI Export Wing Benefits #live Session -Series 04",
  },
  { id: "AX-YCq7tKYo", title: "AECCI- Legal Wing Benefits #Live Session" },
  { id: "p4hzX3S5bx0", title: "MEMBERSHIP WITH AECCI..!! #LIVE Session" },
  {
    id: "dqDqgcetm3g",
    title:
      'AECCI #AMA Series-01 "Importance of Enforcing Contracts in International Trade"..!!',
  },
];

export default function MediaCenterPage() {
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
              Media
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-background mb-6 leading-tight">
              Media <span className="text-primary">Center</span>
            </h1>
            <p className="text-background/70 text-base md:text-lg leading-relaxed">
              Explore the latest updates from AECCI — trade news, policy
              developments, industry insights, expert webinars, and
              announcements from our global network. Stay informed. Stay ahead.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Magazines Section */}
      <MagazinesSection />

      {/* Video Grid */}
      <section className="py-20 md:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <span className="text-xs font-bold text-primary uppercase tracking-widest mb-3 block">
              Webinars & Sessions
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
              Watch Our Latest Videos
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-sm md:text-base leading-relaxed">
              Explore our library of webinars, AMA sessions, and trade insights
              from AECCI's global network of experts.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video, idx) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (idx % 6) * 0.07, duration: 0.4 }}
              >
                <Card className="h-full border-border hover:border-primary/40 transition-colors group overflow-hidden">
                  <div
                    className="relative w-full"
                    style={{ paddingBottom: "56.25%" }}
                  >
                    <iframe
                      src={`https://www.youtube.com/embed/${video.id}`}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full border-0"
                      loading="lazy"
                    />
                  </div>
                  <CardContent className="p-4">
                    <p className="text-sm font-semibold leading-snug line-clamp-2 text-foreground group-hover:text-primary transition-colors">
                      {video.title}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
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
              Stay Connected With AECCI
            </h2>
            <p className="text-background/60 text-base max-w-xl mb-8">
              Subscribe to our channel for the latest webinars, trade insights,
              and expert sessions from AECCI's global network.
            </p>
            <a
              href="https://www.youtube.com/channel/UCkTKN8LiakB8SsYpIEiB7sw"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-full font-semibold text-sm hover:bg-primary/90 transition-colors"
            >
              Visit Our YouTube Channel
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
