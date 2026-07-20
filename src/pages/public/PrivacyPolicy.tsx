import { motion } from "framer-motion";
import {
  Activity,
  AlertCircle,
  Building2,
  Calendar,
  Eye,
  FileText,
  Link as LinkIcon,
  Lock,
  Mail,
  MapPin,
  Phone,
  Server,
  Shield,
  Info,
} from "lucide-react";

const autoCollectedList = [
  {
    title: "IP Address Logged",
    desc: "Your Internet Protocol (IP) address is temporarily logged to help analyze visitor demographics and routing.",
    icon: Activity,
  },
  {
    title: "Visit Date & Time",
    desc: "The exact date and time of your visit are recorded to log portal traffic and service load distributions.",
    icon: Calendar,
  },
  {
    title: "Pages Visited",
    desc: "The specific pages, graphics files, and resources you access are monitored to evaluate utility rates.",
    icon: Eye,
  },
  {
    title: "System Performance Monitoring",
    desc: "All compiled analytics are used strictly to maintain network performance, load balancers, and error logs.",
    icon: Server,
  },
  {
    title: "Strict Confidentiality",
    desc: "AECCI preserves all logs in strict confidentiality, unless disclosure is mandated by law enforcement or property rights.",
    icon: Lock,
  },
];

const externalLinksList = [
  {
    title: "Content Accuracy Disclaimer",
    desc: "We hold no liability for the accuracy, truthfulness, or validation of content on external destination links.",
    icon: AlertCircle,
  },
  {
    title: "Third-Party Privacy Rules",
    desc: "External websites follow distinct privacy guidelines; we do not control their cookie usage or logging policies.",
    icon: Shield,
  },
  {
    title: "Security Check Recommended",
    desc: "When migrating away from the AECCI portal, please review the security policy of the destination server.",
    icon: LinkIcon,
  },
];

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* ========== HERO SECTION ========== */}
      <section className="relative w-full py-8 md:py-12 bg-[#0a1628] overflow-hidden flex items-center border-b border-gray-800">
        {/* Glowing backdrop elements */}
        <div className="absolute right-0 top-0 w-1/2 h-full bg-primary/20 blur-[100px] pointer-events-none rounded-full translate-x-1/3 -translate-y-1/4 z-0" />
        <div className="absolute left-0 bottom-0 w-1/3 h-1/2 bg-primary/10 blur-[120px] pointer-events-none rounded-full -translate-x-1/4 translate-y-1/4 z-0" />

        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10 w-full">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
            {/* Left Column - Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="md:col-span-7 relative z-20 pointer-events-auto max-w-xl lg:max-w-2xl text-left"
            >
              <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-1.5 rounded-full mb-4 border border-white/10">
                <Shield className="w-3.5 h-3.5 text-primary" />
                <span className="text-[10px] font-bold text-primary uppercase tracking-widest">
                  Legal Information
                </span>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight text-white uppercase tracking-wide">
                Privacy <span className="text-primary">Policy</span>
              </h1>

              <p className="text-white/70 text-sm md:text-base leading-relaxed">
                AECCI is committed to visitor confidentiality. We do not collect personal information of
                website or mobile application visitors, unless explicitly requested or volunteered.
              </p>
            </motion.div>

            {/* Right Column - Premium Eye Art */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="md:col-span-5 relative z-10 justify-center hidden md:flex"
            >
              <div className="relative w-64 h-64 rounded-full bg-slate-900/50 flex items-center justify-center p-8 border border-white/10 backdrop-blur-sm shadow-2xl">
                <div className="absolute inset-0 bg-primary/5 rounded-full blur-2xl animate-pulse" />
                <Eye className="w-28 h-28 text-primary animate-pulse" strokeWidth={1} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========== MAIN CONTENT ========== */}
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-6 md:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Policy Blocks */}
          <div className="lg:col-span-8 space-y-8 text-left">
            {/* Information Collection */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl p-6 md:p-8 border border-slate-100 shadow-sm"
            >
              <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <Info className="w-5 h-5 text-primary" /> Information Collection Policy
              </h2>
              <p className="text-slate-600 text-xs leading-relaxed">
                AECCI does not gather or track any personal information (e.g. name, mail address) of individuals
                accessing the portal, unless you intentionally submit this information during registration or query forms.
              </p>
            </motion.div>

            {/* Automatically Collected Section */}
            <div className="space-y-4">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest pl-1">
                Data Tracked Automatically
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {autoCollectedList.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      whileHover={{ y: -6, scale: 1.015 }}
                      className="bg-white rounded-2xl p-5 border border-slate-150 hover:border-primary/30 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col gap-3 group cursor-pointer"
                    >
                      <div className="p-2.5 bg-primary/10 rounded-xl text-primary w-fit group-hover:bg-primary group-hover:text-white transition-all duration-300 group-hover:scale-105 group-hover:rotate-3">
                        <Icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                      </div>
                      <h4 className="text-sm font-bold text-gray-950 group-hover:text-primary transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-[11px] text-slate-500 leading-relaxed">
                        {item.desc}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* External Links Section */}
            <div className="space-y-4">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest pl-1">
                External Hyperlinks Policy
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {externalLinksList.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      whileHover={{ y: -6, scale: 1.015 }}
                      className="bg-white rounded-2xl p-5 border border-slate-150 hover:border-primary/30 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col gap-3 group cursor-pointer"
                    >
                      <div className="p-2.5 bg-primary/10 rounded-xl text-primary w-fit group-hover:bg-primary group-hover:text-white transition-all duration-300 group-hover:scale-105 group-hover:rotate-3">
                        <Icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                      </div>
                      <h4 className="text-sm font-bold text-gray-950 group-hover:text-primary transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-[11px] text-slate-500 leading-relaxed">
                        {item.desc}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Disclaimer block */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl p-6 md:p-8 border border-slate-100 shadow-sm"
            >
              <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <FileText className="w-5 h-5 text-primary" /> Disclaimer of Liability
              </h2>
              <p className="text-slate-600 text-xs leading-relaxed">
                AECCI is not responsible for any technical, hardware, or software failures of any kind; incomplete or delayed
                transmissions. It assumes no liability for direct, indirect, incidental, punitive, or consequential damages
                resulting from visiting or using its website / mobile app, including loss of services or data due to computer viruses.
              </p>
            </motion.div>
          </div>

          {/* Right Column - Disclaimers & Support Contacts */}
          <div className="lg:col-span-4 space-y-6 text-left lg:sticky lg:top-[96px]">
            {/* Legal Notice */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 border border-amber-200/60"
            >
              <div className="flex items-start gap-2.5">
                <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-amber-800 uppercase tracking-wide mb-1">Important Note</h4>
                  <p className="text-[11px] text-amber-800 leading-relaxed">
                    By using this portal, you accept this Privacy Policy. We reserve the right to revise or modify these
                    clauses at any time, and changes will be published here instantly.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Contact Support */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-2xl p-6 border border-slate-150 shadow-sm space-y-4"
            >
              <h3 className="text-xs font-bold text-gray-900 uppercase tracking-wider flex items-center gap-2">
                <Building2 className="w-4 h-4 text-primary" /> Legal Department
              </h3>

              <div className="flex gap-2.5 items-start">
                <MapPin className="w-4 h-4 text-slate-400 mt-0.5 shrink-0" />
                <div className="text-[11px] text-slate-500 leading-normal">
                  <span className="font-semibold text-slate-700 block">AECCI Head Office</span>
                  604, 6th Floor, Hilton Center, Plot No. 66,
                  Sector 11, CBD Belapur, Navi Mumbai - 400614,                  Maharashtra, India
                </div>
              </div>

              <div className="grid grid-cols-1 gap-2 pt-2">
                <a
                  href="mailto:info@aecci.org.in"
                  className="flex items-center gap-2.5 p-2.5 rounded-xl bg-slate-50 border border-slate-100 hover:bg-slate-100 transition-colors text-[11px]"
                >
                  <Mail className="w-4 h-4 text-primary shrink-0" />
                  <div>
                    <span className="text-[9px] font-bold text-slate-400 block uppercase">Email Support</span>
                    <span className="text-primary font-semibold">info@aecci.org.in</span>
                  </div>
                </a>

                <a
                  href="tel:+918433720996"
                  className="flex items-center gap-2.5 p-2.5 rounded-xl bg-slate-50 border border-slate-100 hover:bg-slate-100 transition-colors text-[11px]"
                >
                  <Phone className="w-4 h-4 text-emerald-600 shrink-0" />
                  <div>
                    <span className="text-[9px] font-bold text-slate-400 block uppercase">Call Helpline</span>
                    <span className="text-emerald-600 font-semibold">+91 8433720996</span>
                  </div>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;