// src/pages/PrivacyPolicy.tsx

import { motion } from 'framer-motion';
import {
    Activity,
    AlertCircle,
    Building2,
    Calendar,
    Eye,
    FileText,
    Link,
    Lock,
    Mail,
    MapPin,
    Phone,
    Server,
    Shield
} from 'lucide-react';

const PrivacyPolicy = () => {
  const autoCollected = [
    "The IP address of the visitor",
    "The date and time of your visit to AECCI website / mobile app",
    "The pages you visited (recorded by the text and graphics files that compose the page)",
    "This information is solely used for monitoring the website performance and to identify the most or least interesting services to our visitors.",
    "AECCI keeps all collected information confidential except where disclosure is enforced or required by law, or as part of requirement to protect the rights or properties of our Chamber."
  ];

  const thirdPartyLinks = [
    "Accuracy of the content of these sites",
    "Their practice of information collection and usage",
    "If you connect to any other site through AECCI's website, you should read its Security and Privacy Policy.",
    "We reserve the right to change this Security and Privacy Policy at any time. The amended version of the Security and Privacy Policy will be always published on website / mobile app."
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50/30">
      {/* ========== HERO SECTION ========== */}
      <section className="relative w-full py-20 md:py-28 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        
        <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/10">
              <Shield className="w-4 h-4 text-blue-400" />
              <span className="text-xs font-medium text-blue-300 uppercase tracking-wider">
                AECCI Privacy Policy
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Privacy <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Policy</span>
            </h1>
            
            <p className="text-slate-300 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              AECCI does not collect any personal information of the website or mobile app visitors, 
              unless otherwise specified or you choose to provide this information to us.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ========== MAIN CONTENT ========== */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Information Collection */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-lg p-6 md:p-8 mb-6 border border-slate-100"
        >
          <div className="flex items-start gap-4">
            <div className="p-3 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
              <Server className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-slate-800 mb-2">
                Information Collection
              </h2>
              <p className="text-slate-600 leading-relaxed">
                AECCI does not collect any personal information of the website or mobile app visitors, 
                unless otherwise specified or you choose to provide this information to us. However, the 
                following information of visitor is automatically collected and stored:
              </p>
            </div>
          </div>
        </motion.div>

        {/* Auto Collected Points */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white rounded-2xl shadow-lg p-6 md:p-8 mb-6 border border-slate-100"
        >
          <div className="space-y-3">
            {autoCollected.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className={`flex items-start gap-3 p-3 rounded-xl transition-colors duration-200 ${
                  index === autoCollected.length - 1 
                    ? 'bg-blue-50/50 border border-blue-100' 
                    : 'hover:bg-blue-50/50'
                }`}
              >
                {index === 0 && <Activity className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />}
                {index === 1 && <Calendar className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />}
                {index === 2 && <Eye className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />}
                {index === 3 && <Server className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />}
                {index === 4 && <Lock className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />}
                <p className="text-slate-700 leading-relaxed">
                  {point}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Third Party Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-lg p-6 md:p-8 mb-6 border border-slate-100"
        >
          <div className="flex items-start gap-4 mb-4">
            <div className="p-3 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl">
              <Link className="w-6 h-6 text-purple-600" />
            </div>
            <h2 className="text-xl font-semibold text-slate-800">
                AECCI's website may provide links to other web sites. However we are not responsible for the:
            </h2>
          </div>
          
          <div className="space-y-3">
            {thirdPartyLinks.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.08 }}
                className="flex items-start gap-3 p-3 rounded-xl hover:bg-purple-50/50 transition-colors duration-200"
              >
                <AlertCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                <p className="text-slate-700 leading-relaxed">
                  {point}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Disclaimer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white rounded-2xl shadow-lg p-6 md:p-8 mb-6 border border-slate-100"
        >
          <div className="flex items-start gap-4">
            <div className="p-3 bg-gradient-to-br from-red-50 to-red-100 rounded-xl">
              <FileText className="w-6 h-6 text-red-600" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-slate-800 mb-3">
                Disclaimer
              </h2>
              <p className="text-slate-600 leading-relaxed">
                AECCI is not responsible for any technical, hardware or software failures of any kind; 
                incomplete or delayed transmissions. It assumes no liability for any direct, indirect, 
                incidental, punitive, consequential damages as a result of visiting or using its website / 
                mobile app or loss of services, income or welfare resulting from any virus that may infect 
                computer equipment used to access its sites. Under no circumstances will AECCI be liable 
                for any damages or injury that results from the use of the materials on this site.
              </p>
            </div>
          </div>
        </motion.div>


        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8 bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-slate-100"
        >
          <h3 className="text-lg font-semibold text-slate-800 mb-6 flex items-center gap-2">
            <Building2 className="w-5 h-5 text-blue-600" />
            Contact Us
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-slate-700">AECCI Head Office</p>
                  <p className="text-sm text-slate-500">
                    604 | 6th floor | Hilton Center | Plot no.66<br />
                    Sector No.11 | CBD Belapur | Navi Mumbai - 400614<br />
                    Maharashtra - India
                  </p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <a 
                href="mailto:info@aecci.org.in" 
                className="flex items-center gap-3 p-3 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors"
              >
                <Mail className="w-5 h-5 text-blue-600" />
                <div>
                  <p className="text-sm font-medium text-slate-700">Email Us</p>
                  <p className="text-sm text-blue-600">info@aecci.org.in</p>
                </div>
              </a>
              
              <a 
                href="tel:+918433720996" 
                className="flex items-center gap-3 p-3 bg-emerald-50 rounded-xl hover:bg-emerald-100 transition-colors"
              >
                <Phone className="w-5 h-5 text-emerald-600" />
                <div>
                  <p className="text-sm font-medium text-slate-700">Call Us</p>
                  <p className="text-sm text-emerald-600">+91 8433720996</p>
                </div>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;