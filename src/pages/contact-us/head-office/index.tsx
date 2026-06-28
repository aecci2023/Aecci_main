import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Printer, Globe } from "lucide-react";

export default function HeadOfficePage() {
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
              AECCI Headquarters
            </h1>
            <p className="text-background/70 text-base md:text-lg leading-relaxed">
              There are so many ways to work with AECCI. Contact us to find out
              the volunteer opportunities, fundraising events, and ways to get
              our business communities thriving.
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
            {/* Address */}
            <div>
              <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <MapPin className="text-primary w-5 h-5" /> Main Office Address
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed ml-7">
                <strong className="text-foreground">
                  Asian Exporters’ Chamber Of Commerce & Industry
                </strong>
                <br />
                604 | 6th floor | Hilton Center | Plot no.66 | Sector No.11 |
                <br />
                CBD Belapur | Navi Mumbai-400614 | Maharashtra-India
              </p>
            </div>

            {/* Phone & Fax */}
            <div>
              <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <Phone className="text-primary w-5 h-5" /> Phone & Fax
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground ml-7">
                <li>
                  <strong className="text-foreground">
                    Board Telephone No.:
                  </strong>{" "}
                  +91-22-412 711 45 | 46
                </li>
                <li>
                  <strong className="text-foreground">Phone No:</strong> +91
                  8433720996
                </li>
                <li>
                  <strong className="text-foreground flex items-center gap-2 mt-2">
                    <Printer className="w-4 h-4 text-primary inline" /> Fax No.:
                  </strong>{" "}
                  +91-22-412 711 47
                </li>
              </ul>
            </div>

            {/* Emails */}
            <div>
              <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <Mail className="text-primary w-5 h-5" /> Email Directory
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-muted-foreground ml-7">
                <li>
                  <strong className="text-foreground block">
                    Administration:
                  </strong>{" "}
                  <a
                    href="mailto:info@aecci.org.in"
                    className="hover:text-primary transition-colors"
                  >
                    info@aecci.org.in
                  </a>
                </li>
                <li>
                  <strong className="text-foreground block">
                    Executive Director:
                  </strong>{" "}
                  <a
                    href="mailto:ed@aecci.org.in"
                    className="hover:text-primary transition-colors"
                  >
                    ed@aecci.org.in
                  </a>
                </li>
                <li>
                  <strong className="text-foreground block">
                    Chamber Secretary:
                  </strong>{" "}
                  <a
                    href="mailto:secretary@aecci.org.in"
                    className="hover:text-primary transition-colors"
                  >
                    secretary@aecci.org.in
                  </a>
                </li>
                <li>
                  <strong className="text-foreground block">
                    Membership Desk:
                  </strong>{" "}
                  <a
                    href="mailto:membership@aecci.org.in"
                    className="hover:text-primary transition-colors"
                  >
                    membership@aecci.org.in
                  </a>
                </li>
                <li>
                  <strong className="text-foreground block">
                    Customer Support:
                  </strong>{" "}
                  <a
                    href="mailto:customercare@aecci.org.in"
                    className="hover:text-primary transition-colors"
                  >
                    customercare@aecci.org.in
                  </a>
                </li>
                <li>
                  <strong className="text-foreground block">HR Support:</strong>{" "}
                  <a
                    href="mailto:hr@aecci.org.in"
                    className="hover:text-primary transition-colors"
                  >
                    hr@aecci.org.in
                  </a>
                </li>
                <li>
                  <strong className="text-foreground block">
                    Marketing Team:
                  </strong>{" "}
                  <a
                    href="mailto:marketing@aecci.org.in"
                    className="hover:text-primary transition-colors"
                  >
                    marketing@aecci.org.in
                  </a>
                </li>
                <li>
                  <strong className="text-foreground block">Enquiry:</strong>{" "}
                  <a
                    href="mailto:enquiries@aecci.org.in"
                    className="hover:text-primary transition-colors"
                  >
                    enquiries@aecci.org.in
                  </a>
                </li>
                <li className="sm:col-span-2 mt-2 pt-2 border-t border-border/50">
                  <strong className="text-foreground block text-primary">
                    For Event Enquiry:
                  </strong>{" "}
                  <a
                    href="mailto:register@aecci.org.in"
                    className="hover:text-primary transition-colors"
                  >
                    register@aecci.org.in
                  </a>
                </li>
              </ul>
            </div>

            {/* Web & Hours */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <div>
                <h3 className="text-sm font-bold text-foreground mb-2 flex items-center gap-2">
                  <Globe className="text-primary w-4 h-4" /> Website
                </h3>
                <a
                  href="https://www.aecci.org.in"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-muted-foreground ml-6 hover:text-primary transition-colors"
                >
                  www.aecci.org.in
                </a>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-2 flex items-center gap-2">
                  <Clock className="text-primary w-4 h-4" /> Operating Hours
                </h3>
                <p className="text-xs text-muted-foreground ml-6 space-y-1">
                  <span className="block">
                    Monday – Friday: 9.30 am – 6.30 pm*
                  </span>
                  <span className="block">Saturday – 9.30 am – 3.30 pm*</span>
                  <span className="block italic mt-1 text-primary/70">
                    * Hours or services may differ
                  </span>
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
