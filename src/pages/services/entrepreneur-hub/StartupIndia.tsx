import { motion } from "framer-motion"

export default function StartupIndia() {
  return (
    <div className="py-24 max-w-[1280px] mx-auto px-6 md:px-12 text-left">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <span className="text-xs font-bold text-primary uppercase tracking-widest mb-3 block">Entrepreneur Hub</span>
        <h1 className="font-heading font-black text-4xl md:text-5xl text-foreground mb-8">Startup India</h1>

        <div className="space-y-6 font-body text-base text-muted-foreground leading-relaxed">
          <p className="text-xl font-medium text-foreground mb-8">
            Startup India is a flagship initiative of the Government of India, intended to build a strong eco-system for nurturing innovation and Startups in the country that will drive sustainable economic growth and generate large-scale employment opportunities. The Government through this initiative aims to empower Startups to grow through innovation and design.
          </p>

          <p>
            Launched on 16th January 2016, the Start-up India Initiative has rolled out several programs to support entrepreneurs, build a robust start-up ecosystem and transforming India into a country of job creators instead of job seekers.
          </p>
          <p>
            In line with the Government of India's objectives, we at AECCI encouraging the youngsters to go for entrepreneurship and take advantage of the government's schemes. We conduct various sessions for the students to educate them to opt for start-ups so that more employment can be generated in the country, natural resources and available skills can be utilized to the best and people can become more self-reliant.
          </p>

          <div className="pt-8">
             <button className="bg-primary text-primary-foreground font-bold px-8 py-3 rounded-full text-sm shadow-md hover:bg-primary/90 transition-colors">
               Apply Now
             </button>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
