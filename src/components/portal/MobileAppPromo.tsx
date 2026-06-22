import * as React from "react";
import { motion } from "framer-motion";
import { DownloadSimple, QrCode } from "@phosphor-icons/react";
import appMockup from "@/assets/mobile-app/aecci-mobile-mockup.png";

export default function MobileAppPromo() {
  const [userCount, setUserCount] = React.useState(10218);

  // Simulation of a live registering counter
  React.useEffect(() => {
    const interval = setInterval(() => {
      setUserCount((prev) => prev + Math.floor(Math.random() * 2));
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="mobile-app"
      className="py-12 md:py-24 bg-card/25 border-b border-border relative overflow-hidden"
    >
      {/* Decorative background gradients */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-primary/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full bg-emerald-500/5 blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-[1280px] px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-20 items-center">
          {/* Left Column: Interactive Mobile Mockup Image */}
          <div className="lg:col-span-6 flex justify-center order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative max-w-sm sm:max-w-md w-full flex justify-center"
            >
              {/* Glowing backdrop circle */}
              <div className="absolute inset-4 rounded-[60px] bg-gradient-to-tr from-primary/20 via-emerald-500/10 to-transparent blur-3xl -z-10 animate-pulse duration-[6000ms]" />

              <img
                src={appMockup}
                alt="AECCI Mobile Application Mockup"
                className="w-full h-auto max-h-[520px] object-contain drop-shadow-[0_25px_50px_rgba(0,0,0,0.12)] hover:scale-[1.01] transition-transform duration-500"
              />
            </motion.div>
          </div>

          {/* Right Column: Dynamic Text & Action Controls */}
          <div className="lg:col-span-6 flex flex-col items-start text-left order-1 lg:order-2">
            {/* Live Counter Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-3 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-2 mb-4 md:mb-6 shadow-sm"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-heading font-black text-emerald-500 tracking-wide uppercase">
                {userCount.toLocaleString()} Users Live Counter Registered With
                Us
              </span>
            </motion.div>

            {/* Typography Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-heading font-black text-4xl sm:text-5xl text-foreground leading-[1.1] tracking-tight mb-6"
            >
              Connect, Trade, Succeed – <br />
              <span className="bg-gradient-to-r from-primary to-emerald-400 bg-clip-text text-transparent">
                Anytime, Anywhere.
              </span>
            </motion.h2>

            {/* Support/Info Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="font-body text-base text-muted-foreground leading-relaxed mb-8 max-w-xl"
            >
              An Opportunity to meet with our collaborator partners from over 35
              countries. Download the official AECCI app to access member
              utilities, manage Certificates of Origin, and get legal advice
              instantly.
            </motion.p>

            {/* Actions Grid (QR and APK Download) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-12 gap-6 w-full items-center bg-card border border-border/80 p-6 rounded-3xl shadow-xl backdrop-blur-md"
            >
              {/* QR Section */}
              <div className="sm:col-span-7 flex items-center gap-4 border-b sm:border-b-0 sm:border-r border-border/80 pb-4 sm:pb-0 sm:pr-4">
                <div className="bg-white p-2.5 rounded-2xl border border-border flex items-center justify-center shadow-inner shrink-0">
                  {/* Generated QR Code Vector SVG */}
                  <svg className="size-16" viewBox="0 0 100 100">
                    <rect width="100" height="100" fill="white" />
                    {/* Outer markers */}
                    <rect x="5" y="5" width="25" height="25" fill="#0f172a" />
                    <rect x="10" y="10" width="15" height="15" fill="white" />
                    <rect x="12" y="12" width="11" height="11" fill="#0f172a" />

                    <rect x="70" y="5" width="25" height="25" fill="#0f172a" />
                    <rect x="75" y="10" width="15" height="15" fill="white" />
                    <rect x="77" y="12" width="11" height="11" fill="#0f172a" />

                    <rect x="5" y="70" width="25" height="25" fill="#0f172a" />
                    <rect x="10" y="75" width="15" height="15" fill="white" />
                    <rect x="12" y="77" width="11" height="11" fill="#0f172a" />

                    {/* Random generated QR patterns */}
                    <rect x="35" y="5" width="5" height="10" fill="#0f172a" />
                    <rect x="45" y="5" width="10" height="5" fill="#0f172a" />
                    <rect x="60" y="10" width="5" height="15" fill="#0f172a" />
                    <rect x="35" y="20" width="15" height="5" fill="#0f172a" />
                    <rect x="55" y="20" width="10" height="10" fill="#0f172a" />

                    <rect x="5" y="35" width="10" height="5" fill="#0f172a" />
                    <rect x="20" y="35" width="5" height="15" fill="#0f172a" />
                    <rect x="30" y="45" width="10" height="5" fill="#0f172a" />
                    <rect x="45" y="35" width="5" height="20" fill="#0f172a" />
                    <rect x="55" y="40" width="20" height="5" fill="#0f172a" />
                    <rect x="80" y="35" width="15" height="5" fill="#0f172a" />
                    <rect x="85" y="45" width="10" height="15" fill="#0f172a" />

                    <rect x="5" y="55" width="5" height="10" fill="#0f172a" />
                    <rect x="15" y="55" width="15" height="5" fill="#0f172a" />
                    <rect x="35" y="55" width="5" height="10" fill="#0f172a" />
                    <rect x="55" y="55" width="15" height="5" fill="#0f172a" />
                    <rect x="75" y="60" width="5" height="15" fill="#0f172a" />

                    <rect x="35" y="70" width="10" height="5" fill="#0f172a" />
                    <rect x="35" y="80" width="5" height="15" fill="#0f172a" />
                    <rect x="45" y="75" width="20" height="5" fill="#0f172a" />
                    <rect x="50" y="85" width="10" height="10" fill="#0f172a" />
                    <rect x="65" y="80" width="5" height="15" fill="#0f172a" />
                    <rect x="75" y="85" width="20" height="5" fill="#0f172a" />
                  </svg>
                </div>
                <div className="text-left">
                  <h4 className="font-heading font-bold text-foreground text-sm flex items-center gap-1.5">
                    <QrCode className="size-4 text-primary animate-pulse" />
                    Scan to Download App
                  </h4>
                  <p className="text-[11px] text-muted-foreground mt-0.5">
                    Point your camera at this QR code to load the app package
                    directly.
                  </p>
                </div>
              </div>

              {/* APK Download Button Section */}
              <div className="sm:col-span-5 flex flex-col gap-2 w-full">
                <a
                  href="#"
                  className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary/95 text-primary-foreground text-xs font-extrabold px-6 h-12 rounded-xl transition-all shadow-md shadow-primary/10 active:scale-98 cursor-pointer"
                >
                  <DownloadSimple className="size-4 animate-bounce" />
                  <span>Download APK</span>
                </a>
                <div className="flex justify-center gap-3 text-[10px] text-muted-foreground font-semibold uppercase tracking-wider">
                  <span>Android APK</span>
                  <span>•</span>
                  <span>v2.4.1</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
