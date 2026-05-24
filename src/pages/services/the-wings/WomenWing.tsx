import { motion } from "framer-motion"
import { Phone } from "lucide-react"

export default function WomenWing() {
  return (
    <div className="py-24 max-w-[1280px] mx-auto px-6 md:px-12 text-left">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <span className="text-xs font-bold text-primary uppercase tracking-widest mb-3 block">Chamber Wing</span>
        <h1 className="font-heading font-black text-4xl md:text-5xl text-foreground mb-8">Women Wing</h1>

        <div className="space-y-6 font-body text-base text-muted-foreground leading-relaxed">
          <p className="text-xl font-medium text-foreground mb-8">
            Women Wing is geared up to empower women to succeed. Successful women in our wing encourage other women members to become economically empowered and contribute to the development of nation.
          </p>

          <p>
            Women Wing is dedicated to facilitating the advancement of women by fostering meaningful business relationships among members, delivering unique educational programs, and hosting creative member events.
          </p>
          <p>
            Nowadays women are leading in business, private and government sectors and we are trying to celebrate their accomplishments, expand and strengthen their networks so to help them grow further and faster. AECCI's Women Wing is geared up to empower women to succeed. We purposely invite the successful and inspirational women from our society so to encourage other women to increase their economic self-sufficiency by using education and skills.
          </p>
          <p>
            The overall goal is to break the chain of poverty and provide the necessary support and education the women to become economically empowered, seek leadership positions in the workforce and contribute in the development of our nation.
          </p>
          <p>
            AECCI's Women Wing is headed by the Executive Director Mrs. Swarn Dhiman.
          </p>
          <p className="font-bold text-foreground">
            Confident, self motivated and willing women are welcome to join us.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="bg-card border border-border p-6 rounded-2xl shadow-sm space-y-4">
                 <h3 className="font-heading font-bold text-lg text-foreground mb-2 flex items-center gap-2"><Phone className="size-5 text-primary" /> Contact Women Wing</h3>
                 <p className="text-sm"><span className="font-bold text-foreground">Email:</span> womenwing@aecci.org.in</p>
                 <p className="text-sm"><span className="font-bold text-foreground">Board lines:</span> +91-22-412 711 45 | 46</p>
              </div>

              <div className="bg-card border border-border p-6 rounded-2xl shadow-sm space-y-4 flex flex-col justify-center items-center text-center">
                 <h3 className="font-heading font-black text-2xl text-foreground">Join Women's Wing Today!</h3>
                 <button className="bg-primary text-primary-foreground font-bold px-6 py-2 rounded-full text-xs shadow-md mt-4 hover:bg-primary/90 transition-colors">
                     Submit Application
                 </button>
              </div>
          </div>

        </div>
      </motion.div>
    </div>
  )
}
