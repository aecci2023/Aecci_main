// src/pages/TermsConditions.tsx

import { motion } from 'framer-motion';
import {
  AlertCircle,
  Building2,
  CheckCircle,
  Mail,
  MapPin,
  Phone,
  Shield
} from 'lucide-react';

const TermsConditions = () => {
  const points = [
    "Use of Website only for lawful purposes",
    "Use of the logos and images of this site / mobile app are prohibited, unless permitted by AECCI.",
    "Not to attempt to uncover or to decrypt secure data",
    "Not to Access. Modify and Delete any of the information posted on AECCI's website or mobile app",
    "All the material on website is copyright protected. No content may be copied, distributed, transmitted or used without written permission from AECCI. Any unauthorized use of content will be the violation of copyright, trademark, publicity or privacy laws.",
    "User agree that all information, provided by them on the website or mobile app is complete and accurate. You are also responsible for the update of your personal information whenever it is changed.",
    "By registering with AECCI you automatically agree with the applicable Terms and Conditions, and AECCI's Security and Privacy Policy.",
    "Registered user is responsible for keeping your identification and personal information confidential to avoid misuse on online services. You agree to accept responsibility for all activities that takes place under your member registered ID."
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
                Legal Information
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Terms & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Conditions</span>
            </h1>
            
            <p className="text-slate-300 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              Terms & Conditions for the website in accordance with the rules regulations 
              and governing law of AECCI. AECCI may take legal remedies against any breach 
              of the terms and conditions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ========== MAIN CONTENT ========== */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Use of AECCI's website and mobile apps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-lg p-6 md:p-8 mb-8 border border-slate-100"
        >
          <div className="flex items-start gap-4">
            <div className="p-3 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
              <Shield className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-slate-800 mb-2">
                Use of AECCI's website and mobile apps
              </h2>
              <p className="text-slate-600 leading-relaxed">
                By accessing AECCI's website / mobile app you agree to the following terms and conditions:
              </p>
            </div>
          </div>
        </motion.div>

        {/* Points List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-slate-100"
        >
          <div className="space-y-4">
            {points.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="flex items-start gap-3 p-3 rounded-xl hover:bg-blue-50/50 transition-colors duration-200"
              >
                <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <p className="text-slate-700 leading-relaxed">
                  {point}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8 bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-6 border border-amber-200"
        >
          <div className="flex items-start md:items-center gap-3">
            <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-amber-800">
              <span className="font-semibold">Important:</span> By using this website, you accept these terms and conditions. 
              For any queries, please contact our legal department.
            </p>
          </div>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
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

export default TermsConditions;