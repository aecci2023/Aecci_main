import { motion } from "framer-motion";

export default function EnrollmentOffers() {
  return (
    <div className="w-full bg-white font-body text-foreground">
      {/* Hero Section */}
      <section className="relative w-full py-16 md:py-24 bg-slate-900 text-white overflow-hidden flex items-center">
        {/* Placeholder for background image to match the reference */}
        <div 
          className="absolute inset-0 z-0 opacity-40 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=2000')" }}
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
              Enrollment Offers
            </h1>
            <p className="text-white/90 text-sm md:text-base leading-relaxed max-w-2xl font-medium">
              Considering the service needs of the custom house agents and creating a network for our exporter
              members we created the opportunity for them to drop in enrolment application online and get enrolled
              with AECCI
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="space-y-6 text-slate-500 font-light text-base leading-relaxed">
            <p>
              Considering the service needs of the Custom's clearing agents and to creating a network for our exporter members while assisting them in fulfilling their logistics and custom clearance needs, AECCI has launched a special drive called "Non-Enrolled Members" where the custom clearing agents having their license can enrol with us.
            </p>
            <p>
              Under this NME drive, we keep the CHAs updated with day-to-day news and notification released by the Indian customs and the O/o Director General of Foreign Trade.
            </p>
            <p>
              We facilitate our far distant exporter members for their Coo (NP) and documents attestation needs by providing the services through their authorised Clearing agents.
            </p>
            <p>
              AECCI has decided to charge only admin fees for the registration of Non Member Enrolled. By paying a very nominal fee Custom House Agents can be enrolled with us for a lifetime.
            </p>
            <p className="font-bold text-slate-700">
              You can send you NME enquiries at Membership Desk Email: membership@aecci.org.in
            </p>
          </div>

          <div className="mt-16 mb-10 text-center">
            <h2 className="text-2xl md:text-3xl font-heading text-slate-600 font-light">
              AECCI revolving facility information
            </h2>
          </div>

          <div className="space-y-6 text-slate-500 font-light text-base leading-relaxed">
            <p>
              "AECCI creates an environment for the members to build mutually beneficial and lasting business relationships through various Support.
            </p>
            <p className="font-bold text-slate-700">
              AECCI introduced Revolving Credit Facility for Exporters and CHA's
            </p>
            <p className="font-bold text-slate-700">
              In this facility, AECCI shall open a revolving ledger account of the Exporter / CHA. The Exporter / CHA may give an initial amount of Rs. 5,000/- as deposit to the Chamber. Thereafter, whenever documents are brought for attestation, the charges will be automatically debited from the Exporter/CHA's ledger. A receipt to this effect would be generated to give the balance credit available.
            </p>
            <p>
              With reference to that I ask my Dear Member to keep a credit revolving Account facility in our Organisation. By this, it will be easy for you as well as for us to keep the records of accounts Efficiently rather than paying separately for each document, we can deduct the amount from your ledger account itself and send you excel sheet of ledger regularly.
            </p>
            <p>
              You may even call the chamber the desk and ask for your ledger balances time to time.
            </p>
            <p>
              Maximum deposit amount should be Rs.5000/-
            </p>
            <p>
              And If your Volume of document are less in a month you can deposit minimum amount of Rs.3000/-"
            </p>
          </div>

          {/* Buttons Section */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-4">
            <a 
              href="#" 
              className="flex items-center justify-center py-3 px-6 bg-primary text-white font-bold text-sm hover:bg-primary/90 rounded-md transition-colors shadow-sm"
            >
              Non-Member Enrollment
            </a>
            <a 
              href="#" 
              className="flex items-center justify-center py-3 px-6 bg-primary text-white font-bold text-sm hover:bg-primary/90 rounded-md transition-colors shadow-sm"
            >
              Indemnity Bond
            </a>
            <a 
              href="#" 
              className="flex items-center justify-center py-3 px-6 bg-primary text-white font-bold text-sm hover:bg-primary/90 rounded-md transition-colors shadow-sm"
            >
              Become a Member
            </a>
          </div>

        </div>
      </section>
    </div>
  );
}
