import { motion } from "framer-motion";

export default function OfficeBearers() {
  const bearers = [
    { name: "Mrs. Swarn Dhiman", role: "Executive Director" },
    { name: "MR. HARISH SHETTY", role: "Human Resource Manager" },
    { name: "ADV. ROHINI P.K", role: "Legal Wing" },
    { name: "ADV. AKSHATA MULIK", role: "Legal Wing" },
    { name: "MR. P. M. DEEPAK", role: "Marketing Executive" },
    { name: "MS. SUVARNA", role: "Marketing Executive" },
    { name: "MS. SWETA GAWDE", role: "Assistant Secretary" },
    { name: "MR. SWAPNIL MAHADIK", role: "Software Developer" },
  ];

  return (
    <div className="py-24 max-w-4xl mx-auto px-6 md:px-12 text-left">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <span className="text-xs font-bold text-primary uppercase tracking-widest mb-3 block">
          Office Bearers
        </span>
        <h1 className="font-heading font-black text-4xl md:text-5xl text-foreground mb-8">
          Executive Board & Office Bearers
        </h1>

        <div className="space-y-6 font-body text-base text-muted-foreground leading-relaxed mb-12">
          <p className="text-xl font-medium text-foreground">
            Meet the talented and diverse individual with wealth of experience
            and passion for excellence
          </p>

          <p>
            Welcome to the Asian Exporters' Chamber of Commerce! We are a team
            of experienced professionals dedicated to supporting businesses in
            Asia to achieve their global potential.
          </p>
          <p>
            At the Asian Exporters' Chamber of Commerce, we are committed to
            building strong and lasting relationships with our members. We
            understand that each business is unique and requires a personalized
            approach. Our team works closely with our members to understand
            their specific needs and objectives and develop customized solutions
            to help them achieve their goals.
          </p>
          <p>
            We are proud of the work we do and the impact we have on the
            businesses we serve. Our team is passionate about promoting and
            working for the Asian community, and we strive to provide our
            members with the tools and resources they need to compete and
            succeed on a global level.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {bearers.map((bearer, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.4 }}
              className="bg-card border border-border p-6 rounded-2xl shadow-lg flex flex-col items-center text-center"
            >
              <div className="size-16 rounded-full bg-muted flex items-center justify-center font-heading font-black text-xl text-muted-foreground mb-4">
                {bearer.name.charAt(0)}
              </div>
              <h3 className="font-heading font-black text-foreground text-sm uppercase tracking-wide">
                {bearer.name}
              </h3>
              <p className="text-xs text-primary font-bold uppercase tracking-wider mt-2">
                {bearer.role}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
