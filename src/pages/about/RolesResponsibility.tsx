import { motion } from "framer-motion"

export default function RolesResponsibility() {
  return (
    <div className="py-24 max-w-4xl mx-auto px-6 md:px-12 text-left">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <span className="text-xs font-bold text-primary uppercase tracking-widest mb-3 block">About AECCI</span>
        <h1 className="font-heading font-black text-4xl md:text-5xl text-foreground mb-8">Roles & Responsibility</h1>

        <div className="space-y-6 font-body text-base text-muted-foreground leading-relaxed">
          <p className="text-xl font-medium text-foreground mb-12">
            AECCI as a Chamber takes the responsibility to create an environment in which businesses can prosper. The main function of the Asian Exporters’ Chamber of Commerce is to promote interest in the Asian community to explore all the business possibilities.
          </p>

          <div className="space-y-8">
            <div>
              <h2 className="font-heading font-black text-2xl text-foreground mb-3">Workplace: Right Practices and Best Outcomes</h2>
              <p>
                Chamber follows and insists to all its members to follow the right workplace practices. Great leaders create examples and motivate their team by following best management and work practices and ensure to make their employees producing the best results with the optimum utilization of resources available to them. AECCI utilizes all the physical & human resources in such a productive manner that leads to providing the best services to the business community.
              </p>
            </div>

            <div>
              <h2 className="font-heading font-black text-2xl text-foreground mb-3">Ethics Required in Business Environment:</h2>
              <p>
                AECCI believes that ethics in the business environment is one of the most important aspects. We ensure to give the right consideration to the environment in which the business is operated. Chamber also urges all its members to follow all the regulations given by the government for safeguarding the nature and environment.
              </p>
            </div>

            <div>
              <h2 className="font-heading font-black text-2xl text-foreground mb-3">Choosing the right Marketplace for various products:</h2>
              <p>
                AECCI emphasizes on creating the right marketplace for its members with great potential to establish and prosper a business. The secret to the success of the business lies in finding the most suitable marketplace for your brand thus accelerating growth. In our endeavor to support the business community, we guide our members to choose wisely and select a platform that’s designed for performance, scalability and a high degree of customization.
              </p>
            </div>

            <div>
              <h2 className="font-heading font-black text-2xl text-foreground mb-3">Community Standards in Business:</h2>
              <p>
                We assume that while in business, it becomes the bigger responsibility to take care and respect the community standards. Any advertisement, slogan or tagline that may hurt the sentiments of community may be harmful to the business. Chamber policy has been designed keeping in mind the culture and social life of the Asian community and that never promotes any discrimination. We guide our members that being in international trade their business policy should be in accordance with target country’s culture.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
