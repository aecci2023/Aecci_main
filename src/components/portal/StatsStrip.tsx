export default function StatsStrip() {
  return (
    <section className="border-y border-border bg-card/25 backdrop-blur-md py-12">
      <div className="mx-auto max-w-[1280px] px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-center justify-center text-center group cursor-default">
            <span className="font-heading font-black text-3xl md:text-4xl text-primary group-hover:text-primary/70 transition-colors duration-300">10,218+</span>
            <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mt-2">Active Exporters</span>
          </div>
          <div className="flex flex-col items-center justify-center text-center group cursor-default">
            <span className="font-heading font-black text-3xl md:text-4xl text-primary group-hover:text-primary/70 transition-colors duration-300">35+</span>
            <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mt-2">Asian Territories</span>
          </div>
          <div className="flex flex-col items-center justify-center text-center group cursor-default">
            <span className="font-heading font-black text-3xl md:text-4xl text-primary group-hover:text-primary/70 transition-colors duration-300">39</span>
            <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mt-2">State Collaborations</span>
          </div>
          <div className="flex flex-col items-center justify-center text-center group cursor-default">
            <span className="font-heading font-black text-3xl md:text-4xl text-primary group-hover:text-primary/70 transition-colors duration-300">7</span>
            <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mt-2">Specialized Wings</span>
          </div>
        </div>
      </div>
    </section>
  )
}
