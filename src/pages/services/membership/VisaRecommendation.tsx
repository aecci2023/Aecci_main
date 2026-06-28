import { motion } from "framer-motion";

export default function VisaRecommendation() {
  return (
    <div className="w-full bg-white font-body text-foreground">
      {/* Hero Section */}
      <section className="relative w-full py-16 md:py-24 bg-slate-900 text-white overflow-hidden flex items-center">
        {/* Placeholder for background image to match the reference */}
        <div 
          className="absolute inset-0 z-0 opacity-40 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=2000')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent z-0"></div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full flex flex-col items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl mb-4">
              How to Get the Visa Recommendations Letter?
            </h1>
            <p className="text-white/90 text-sm md:text-base leading-relaxed max-w-2xl font-medium">
              To help our exporters members in business promotion through overseas tours and personal meets, we provide them with VISA recommendation letters issued to embassies or consulates.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="space-y-6 text-slate-500 font-light text-sm md:text-base leading-relaxed">
            <h3 className="text-primary font-medium text-lg">Visa Recommendation Letter</h3>
            <p>
              Asian Exporters' Chamber of Commerce & Industry issues Visa Recommendations Letter addressing to foreign Consulates / Embassies / High Commissions in India, to support the Visa Applications of the members. Normally, it takes two days for processing the Visa Recommendations Letter application of members.
            </p>

            <h3 className="text-primary font-medium text-lg">How to Get the Visa Recommendations Letter?</h3>
            <p>
              Members of AECCI may file apply for the issuance of the Visa Recommendations Letter. The members (Proprietors/ Partners/ Directors) are required to submit the following documents for the issuance of the Visa Recommendations Letter.
            </p>

            <h3 className="text-primary font-medium text-lg">Documents required for the Visa Recommendations Letter's</h3>
            
            <p>
              <strong className="text-slate-700">Requesting letter *</strong> (On applicant's letterhead)
            </p>

            <p>
              Application for issuance of VISA recommendation letter should be stating: the Visiting Country's name / Applicant name / Designation / Passport Number / Passport detail i.e. Date of issue / expiry date etc.
            </p>

            <p className="font-bold text-slate-700">
              * Request Letter should be signed by the Authorized Signatory.
            </p>

            <p>Documents to be enclosed with the application:</p>

            <ul className="space-y-4">
              <li className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 bg-slate-500 rounded-sm shrink-0"></span>
                <span>
                  Invitation from the foreign Buyer / Customer<br/>
                  ( if foreign language then will be translated from the recognized translator )
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 bg-slate-500 rounded-sm shrink-0"></span>
                <span>Copy of Adhar Card with the original.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 bg-slate-500 rounded-sm shrink-0"></span>
                <span>
                  Copy of Passport with the original.<br/>
                  ( In case of re-issued/duplicate Passports, photocopy of the new passport will be required with endorsement of previous passport )
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 bg-slate-500 rounded-sm shrink-0"></span>
                <span>Export performance of current/last financial / calendar year duly attested by the Bank,</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 bg-slate-500 rounded-sm shrink-0"></span>
                <span>company profile</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 bg-slate-500 rounded-sm shrink-0"></span>
                <span>For the VISA recommendation letter application for the Manager of the company, the following additional criteria should be fulfilled,</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 bg-slate-500 rounded-sm shrink-0"></span>
                <span>Bank Guarantee showing that Manager is also authorised to operate a bank account for or on behalf of firm/company for at least last one year.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 bg-slate-500 rounded-sm shrink-0"></span>
                <span>ITR copy for previous two years</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 bg-slate-500 rounded-sm shrink-0"></span>
                <span>Salary certificate issued by the firm on its letterhead.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 bg-slate-500 rounded-sm shrink-0"></span>
                <span>Undertaking by the company's authorised signatory.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 bg-slate-500 rounded-sm shrink-0"></span>
                <span>Signature of firm's authorized representative on the request letter</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 bg-slate-500 rounded-sm shrink-0"></span>
                <span>All above documents must be verified with Chamber's records.</span>
              </li>
            </ul>

            <p className="font-bold text-slate-700 pt-4">Note in Term of:</p>
            <p>
              The office Bearers of Chamber may interview any applicant, if they so desire while considering the application and call for the supporting documents.
            </p>
            <p>
              The Executive Director and the office bearers of the Chamber are authorized to consider the genuine needs of the member firms. However, they shall exercise discretion and take necessary measures so that this important facility is not misused in any way and the image of the Chamber is not thereby spoiled.
            </p>

            <h3 className="font-bold text-slate-700 pt-4">Fee for Visa Recommendations Letter's</h3>
            <p>
              Once, the application for the issuance of the Visa Recommendations Letter is approved, the members are required to deposit the fee for
            </p>
            <p>Visa Recommendations Letter, as given below</p>

            <div className="font-bold text-slate-700 space-y-1 pt-2">
              <p>Asian Countries Rs.1000/-</p>
              <p>Schengen countries Rs. 2,000/-</p>
              <p>All other countries Rs. 2,000/-</p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <a 
              href="#" 
              className="inline-flex items-center justify-center py-3 px-8 bg-primary text-white font-bold text-sm hover:bg-primary/90 rounded-md transition-colors shadow-sm"
            >
              Apply Now
            </a>
          </div>

        </div>
      </section>
    </div>
  );
}
