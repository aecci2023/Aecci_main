import * as React from "react"
import { MagnifyingGlass, Download } from "@phosphor-icons/react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Input } from "@/components/ui/input"
import { toast } from "sonner"

export default function TradeNotices() {
  const [noticesSearch, setNoticesSearch] = React.useState("")

  return (
    <section id="notices" className="py-24 border-t border-border bg-card/5">
      <div className="mx-auto max-w-[1280px] px-6 md:px-12">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6 text-left">
          <div>
            <span className="text-xs font-bold text-primary uppercase tracking-widest mb-3 block">Official Communications</span>
            <h2 className="font-heading font-black text-3xl md:text-4xl text-foreground">Latest Regulatory Trade Notices</h2>
            <p className="font-body text-sm text-muted-foreground mt-2 max-w-xl">
              Stay aligned with critical custom duties, export prohibitions, and port handling adjustments from government boards.
            </p>
          </div>
          
          <div className="relative w-full sm:w-72">
            <MagnifyingGlass className="absolute left-3 top-3 size-4 text-muted-foreground/60" />
            <Input 
              value={noticesSearch}
              onChange={(e) => setNoticesSearch(e.target.value)}
              placeholder="Search policy updates..." 
              className="bg-card border-border text-foreground focus-visible:ring-primary focus-visible:ring-offset-0 placeholder:text-muted-foreground/45 pl-9 text-xs h-9 rounded-lg"
            />
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-4 max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-3">
            {[
              {
                id: "note-1",
                badge: "DGFT",
                title: "Amendment in Export Policy of Onion and critical vegetables for 2026-27.",
                date: "May 15, 2026",
                content: "The Directorate General of Foreign Trade (DGFT) has modified the export quota framework. Fresh registrations are requested on the e-Portal immediately. Floor pricing standards have been updated to ensure domestic crop equilibrium."
              },
              {
                id: "note-2",
                badge: "JNPT",
                title: "New Port Handling Charges and Berthing Schedules for Q3 Logistics.",
                date: "May 12, 2026",
                content: "Jawaharlal Nehru Port Trust (JNPT) announced a consolidated schedule of port handling levies. Priority clearance lanes are designated for verified Gold Tier chamber exporters starting next fiscal week."
              },
              {
                id: "note-3",
                badge: "CBIC",
                title: "Clarification on GST Refund Claims for Cross-Border Service Exporters.",
                date: "May 10, 2026",
                content: "The Central Board of Indirect Taxes and Customs (CBIC) issued Circular 204/2026 simplifying the claim records requirement. Physical auditing is bypassed for chamber certified exporters."
              }
            ].filter(n => n.title.toLowerCase().includes(noticesSearch.toLowerCase()) || n.content.toLowerCase().includes(noticesSearch.toLowerCase())).map((item) => (
              <AccordionItem key={item.id} value={item.id} className="border border-border bg-card/65 rounded-xl px-5 overflow-hidden text-left">
                <AccordionTrigger className="hover:no-underline py-4 text-sm font-semibold text-foreground flex justify-between gap-4">
                  <div className="flex items-center gap-3.5 flex-1 min-w-0">
                     <span className="bg-primary/10 text-primary text-[10px] font-bold px-2 py-0.5 rounded border border-primary/20 shrink-0">
                      {item.badge}
                    </span>
                    <span className="truncate text-left">{item.title}</span>
                  </div>
                  <span className="text-[10px] font-bold text-muted-foreground whitespace-nowrap shrink-0">{item.date}</span>
                </AccordionTrigger>
                <AccordionContent className="pb-5 pt-1 text-xs text-muted-foreground leading-relaxed border-t border-border/40 mt-1">
                  <p className="mb-4 text-left">{item.content}</p>
                  <div className="flex justify-between items-center bg-muted/30 p-2.5 rounded border border-border/50">
                    <span className="text-[10px] font-bold text-primary uppercase tracking-widest">📜 Attested & Verified Document</span>
                    <button 
                      onClick={() => toast.success("Official Notification PDF download initialized.")} 
                      className="flex items-center gap-1.5 text-primary hover:underline text-[10px] font-bold uppercase tracking-wider cursor-pointer"
                    >
                      <Download className="size-3.5" /> Save Circular PDF
                    </button>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

      </div>
    </section>
  )
}
