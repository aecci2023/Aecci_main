import { MapPin, User, FileBarChart } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

// You can move this data to a separate file (e.g., data/events.js) later
const pastEvents = [
  {
    id: 55,
    date: "29-04-2026",
    type: "Ask Me Anything",
    topic: "EU Trade: Legal Structures, Compliance & Risk",
    venue: "AECCI e-Platform (Online)",
    guest: "Mr. Daniel Dos Reis (Partner, Reis & Pellicano International Lawyers, Portugal)",
    reportUrl: "#",
  },
  {
    id: 54,
    date: "06-03-2026",
    type: "Ask Me Anything",
    topic: "Beyond Borders: Strengthening EU–India Trade Through Austria",
    venue: "AECCI e-Platform",
    guest: "Mr. Lukas Makovsky (CEO EVL&T Group, Austria)",
    reportUrl: "#",
  },
  {
    id: 53,
    date: "21-01-2026",
    type: "Ask Me Anything",
    topic: "From India to Spain – Strategy, Finance & Collaboration",
    venue: "AECCI B2B Platform (Online)",
    guest: "Mr. Pablo Gómez (Founder, Oftex Internacionalización, S.L., Spain)",
    reportUrl: "#",
  }
];

export default function PastEventsPage() {
  return (
    <div className="w-full bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative w-full py-16 md:py-24 bg-foreground overflow-hidden flex items-center">
        <div className="absolute right-0 top-0 w-1/2 h-full bg-primary/20 blur-[100px] pointer-events-none rounded-full translate-x-1/3 -translate-y-1/4 z-0" />
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="text-xs font-bold text-primary uppercase tracking-widest mb-3 block">
              Events
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-background mb-6 leading-tight">
              Past <span className="text-primary">Events</span>
            </h1>
            <p className="text-background/70 text-base md:text-lg leading-relaxed">
              A glimpse of our successful business events, featuring industry
              experts and renowned guests aimed at professional development.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="w-full max-w-[95%] xl:max-w-[1400px] mx-auto px-4 md:px-8">
          
          {/* Table Layout for Desktop */}
          <div className="hidden md:block">
            <Card className="border-border shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead className="bg-muted/50 border-b border-border">
                    <tr>
                      <th className="p-5 font-semibold text-muted-foreground text-sm tracking-wider uppercase">Sr. No</th>
                      <th className="p-5 font-semibold text-muted-foreground text-sm tracking-wider uppercase">Dated</th>
                      <th className="p-5 font-semibold text-muted-foreground text-sm tracking-wider uppercase">Topic</th>
                      <th className="p-5 font-semibold text-muted-foreground text-sm tracking-wider uppercase">Guest</th>
                      <th className="p-5 font-semibold text-muted-foreground text-sm tracking-wider uppercase">Brief Report</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border bg-card">
                    {pastEvents.map((event, idx) => (
                      <motion.tr 
                        key={event.id}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.05 }}
                        className="hover:bg-muted/30 transition-colors"
                      >
                        <td className="p-5 text-sm font-medium text-muted-foreground">{event.id}</td>
                        <td className="p-5">
                          <Badge variant="outline" className="bg-background text-foreground/80 font-semibold shadow-xs">
                            {event.date}
                          </Badge>
                        </td>
                        <td className="p-5 font-medium text-foreground">{event.topic}</td>
                        <td className="p-5">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <User className="w-4 h-4 shrink-0 text-primary/70" />
                            <span>{event.guest}</span>
                          </div>
                        </td>
                        <td className="p-5">
                          <a
                            href={event.reportUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 text-xs font-semibold text-primary hover:text-primary/80 transition-colors bg-primary/10 hover:bg-primary/20 px-3 py-1.5 rounded-full"
                          >
                            <FileBarChart className="w-3.5 h-3.5" />
                            View PDF
                          </a>
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </div>

          {/* Card Layout for Mobile */}
          <div className="md:hidden grid gap-4">
            {pastEvents.map((event, idx) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Card className="border-border shadow-sm">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <Badge variant="outline" className="bg-primary/5 text-primary border-primary/20 font-semibold shadow-xs">
                        {event.date}
                      </Badge>
                      <span className="text-xs font-bold text-muted-foreground">#{event.id}</span>
                    </div>
                    
                    <h3 className="font-bold text-lg text-foreground mb-4 leading-snug">
                      {event.topic}
                    </h3>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex items-start gap-3">
                        <User className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">
                          {event.guest}
                        </span>
                      </div>
                      <div className="flex items-start gap-3">
                        <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">
                          {event.venue}
                        </span>
                      </div>
                    </div>
                    
                    <Separator className="bg-border mb-4" />
                    
                    <a
                      href={event.reportUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-center gap-2 w-full text-sm font-semibold text-primary-foreground bg-primary hover:bg-primary/90 px-4 py-2.5 rounded-xl transition-colors"
                    >
                      <FileBarChart className="w-4 h-4" />
                      View PDF Report
                    </a>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}