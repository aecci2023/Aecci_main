import { motion } from "framer-motion";
import { Phone, Mail, Building, Globe2 } from "lucide-react";

export default function InternationalHubPage() {
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
            <span className="text-xs font-bold text-primary uppercase tracking-widest mb-3 block">
              Contact Us
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-background mb-6 leading-tight uppercase">
              AECCI International Hub
            </h1>
            <p className="text-background/70 text-base md:text-lg leading-relaxed">
              AECCI plans to reach new goals on an international scope. Our
              motto is to expand International Representations hubs in strategic
              locations across Asian countries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-background rounded-2xl p-8 border border-border/50 shadow-sm"
          >
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Send Us a Message
            </h2>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full rounded-md border border-border bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">
                  Your Email
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-md border border-border bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="Subject of your message"
                  className="w-full rounded-md border border-border bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">
                  Your Message (optional)
                </label>
                <textarea
                  rows={4}
                  placeholder="How can we help you?"
                  className="w-full rounded-md border border-border bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground font-semibold py-3 rounded-md hover:bg-primary/90 transition-colors mt-2"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Right Column - Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-10"
          >
            {/* Address / Description */}
            <div>
              <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <Globe2 className="text-primary w-5 h-5" /> International Office
              </h3>
              <div className="text-muted-foreground text-sm leading-relaxed ml-7 space-y-4">
                <p>
                  AECCI plans to reach new goals on an international scope. Our
                  motto is to expand the International Representations hub in
                  strategic locations in Asian countries to position INDIA as a
                  leading foreign investment destination. This move aims to
                  shore up investment opportunities in India for regional and
                  international players.
                </p>
                <p className="font-medium text-foreground">
                  AECCI’S International Representations Hub facilitation can be
                  availed for your country. Interested organizations can drop an
                  email.
                </p>
              </div>
            </div>

            {/* Division Info */}
            <div>
              <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <Building className="text-primary w-5 h-5" /> Contact Division
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed ml-7">
                <strong className="text-foreground">
                  International Representation Hub Division
                </strong>
              </p>
            </div>

            {/* Emails & Phones */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 ml-7 pt-2">
              <div>
                <h3 className="text-sm font-bold text-foreground mb-2 flex items-center gap-2">
                  <Mail className="text-primary w-4 h-4" /> Email
                </h3>
                <a
                  href="mailto:info@aecci.org.in"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors block"
                >
                  info@aecci.org.in
                </a>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-2 flex items-center gap-2">
                  <Phone className="text-primary w-4 h-4" /> Telephone Number
                </h3>
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground block text-xs uppercase tracking-wider mb-0.5">
                    Board Lines:
                  </strong>
                  +91-22-412 711 45 | 46
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-background">
        <div className="w-full h-[400px] md:h-[500px] bg-muted relative">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.5312384992984!2d73.03831821535492!3d19.018318187121757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c393bc65b263%3A0xc3f92d477e6822c5!2sHilton%20Centre!5e0!3m2!1sen!2sin!4v1683262646394!5m2!1sen!2sin"
            className="w-full h-full border-0"
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="AECCI Location Map"
          ></iframe>
        </div>
      </section>
    </div>
  );
}
