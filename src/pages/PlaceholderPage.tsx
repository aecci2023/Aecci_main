import { motion } from "framer-motion"

export default function PlaceholderPage({ title }: { title: string }) {
  return (
    <div className="py-32 flex flex-col items-center justify-center min-h-[60vh] text-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="bg-primary/10 size-20 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
           <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 256 256"><path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,16V76.69L133.56,159.13a8,8,0,0,1-11.12,0L40,76.69V56ZM40,200V99.31l76.44,76.44a24,24,0,0,0,33.12,0L216,99.31V200Z"></path></svg>
        </div>
        <h1 className="font-heading font-black text-3xl md:text-4xl mb-4 text-foreground">{title}</h1>
        <p className="text-muted-foreground max-w-md mx-auto">
          We are currently gathering the latest information and resources for this section. Please check back soon!
        </p>
      </motion.div>
    </div>
  )
}
