import { motion } from "framer-motion";

const arbitrators = [
  { id: 1, image: "/src/assets/images/panelofarbitrator/1.png" },
  { id: 2, image: "/src/assets/images/panelofarbitrator/2.png" },
  { id: 3, image: "/src/assets/images/panelofarbitrator/3.png" },
  { id: 4, image: "/src/assets/images/panelofarbitrator/4.png" },
  { id: 5, image: "/src/assets/images/panelofarbitrator/5.png" },
  { id: 6, image: "/src/assets/images/panelofarbitrator/6.png" },
  { id: 7, image: "/src/assets/images/panelofarbitrator/7.png" },
  { id: 8, image: "/src/assets/images/panelofarbitrator/8.png" },
  { id: 9, image: "/src/assets/images/panelofarbitrator/9.png" },
  { id: 10, image: "/src/assets/images/panelofarbitrator/10.png" },
  { id: 11, image: "/src/assets/images/panelofarbitrator/11.png" },
  { id: 12, image: "/src/assets/images/panelofarbitrator/12.png" },
  { id: 13, image: "/src/assets/images/panelofarbitrator/13.png" },
  { id: 14, image: "/src/assets/images/panelofarbitrator/14.png" },
  { id: 15, image: "/src/assets/images/panelofarbitrator/15.png" },
  { id: 16, image: "/src/assets/images/panelofarbitrator/16.png" },
  { id: 17, image: "/src/assets/images/panelofarbitrator/17.png" },
  { id: 18, image: "/src/assets/images/panelofarbitrator/18.png" },
  { id: 19, image: "/src/assets/images/panelofarbitrator/19.png" },
  { id: 20, image: "/src/assets/images/panelofarbitrator/20.png" },
];

export default function AecciIacPanelPage() {
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
              AECCI - IAC LIST OF REGISTERED ARBITRATORS
            </h1>
            <p className="text-background/70 text-base md:text-lg leading-relaxed">
              Meet our AECCI-IAC empaneled arbitrators. With years of experience
              and expertise, our arbitrators are committed to providing
              efficient and effective dispute-resolution services for clients
              worldwide.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-sm md:text-base text-muted-foreground leading-relaxed space-y-6 text-center">
          <p>
            At AECCI – International Arbitration Center, we are committed to
            providing our community with a fair and impartial resolutions of
            their disputes. Our empaneled arbitrators has extensive experience
            in wide range of legal areas.
          </p>
          <p>
            AECCI has joined hands with highly experienced empaneled Arbitrator
            according to their specialization in specific field providing
            systematic and effective resolving of disputes and services for
            clients throughout the world.
          </p>
          <p>
            Our center is dedicated to ensuring that the arbitration process is
            efficient, cost-effective and result oriented. AECCI-IAC division
            works tirelessly to deliver quickest and efficient resolution. Our
            arbitrators are highly skilled at managing the arbitration process,
            from the initial filing of the case to the final award.
          </p>
          <p className="text-primary italic font-bold md:text-lg mt-8 text-center max-w-4xl mx-auto">
            Meet our highly experienced empaneled arbitrators at AECCI-IAC who
            are dedicated to providing efficient and effective resolution of
            disputes.
          </p>
        </div>

        {/* Arbitrators Grid */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 mt-16">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
            {arbitrators.map((arbitrator) => (
              <motion.div
                key={arbitrator.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex flex-col group border border-border"
              >
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-muted">
                  <img
                    src={arbitrator.image}
                    alt={`Arbitrator ${arbitrator.id}`}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Footer Note */}
        <div className="max-w-5xl mx-auto px-6 md:px-12 mt-24 text-center space-y-8">
          <p className="text-foreground md:text-lg font-medium leading-relaxed">
            Our highly experienced empaneled arbitrators are dedicated to
            achieving the best possible outcome for our clients. If you're
            interested in joining our team, please send your CV to{" "}
            <a
              href="mailto:info@aecci.org.in"
              className="text-primary hover:underline font-bold"
            >
              info@aecci.org.in
            </a>
          </p>

          <div className="bg-muted/30 border border-border p-6 rounded-lg text-left">
            <h4 className="font-bold text-foreground mb-2">NOTE:</h4>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Due to a high volume of daily mails, it may take 4-5 days for a
              reply. Our legal division is working tirelessly to empanel best of
              arbitrators to the panel. We appreciate your patience and
              understanding as we review each and every CV that comes our way.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
