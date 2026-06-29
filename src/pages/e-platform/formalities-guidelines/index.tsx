import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const items = [
  {
    title: "Information for E-Services",
    description:
      "The Asian Exporters' Chamber of Commerce and Industry (AECCI), recognized by Ministry of Commerce and Industry , Govt of India.",
    buttonText: "Information for E-Services",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    href: "/e-platform/formalities-guidelines/information-for-e-services",
  },
  {
    title: "Indemnity Bond Format",
    description:
      "An indemnity bond assures the holder that they will be duly compensated in case of a possible loss.",
    buttonText: "Indemnity Bond Format",
    image:
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=800",
    href: "/e-platform/formalities-guidelines/indemnity-bond-format",
  },
  {
    title: "COO Format",
    description: "View the COO format.",
    buttonText: "COO Format",
    image:
      "https://images.unsplash.com/photo-1618044733300-9472054094ee?auto=format&fit=crop&q=80&w=800",
    href: "/e-platform/formalities-guidelines/coo-format",
  },
  {
    title: "Attestation fee information",
    description:
      "For issuing the Certificate of origin (non-preferential) and to attest other shipping documents chamber charges very nominal fees.",
    buttonText: "Attestation fee information",
    image:
      "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=800",
    href: "/e-platform/formalities-guidelines/attestation-fees-information",
  },
];

export default function FormalitiesGuidelinesPage() {
  const navigate = useNavigate();

  return (
    <div className="w-full bg-background text-foreground flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full py-16 md:py-24 bg-foreground overflow-hidden flex items-center pt-32">
        <div className="absolute right-0 top-0 w-1/2 h-full bg-primary/20 blur-[100px] pointer-events-none rounded-full translate-x-1/3 -translate-y-1/4 z-0" />
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="text-xs font-bold text-primary uppercase tracking-widest mb-3 block">
              e-Platform
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-background mb-6 leading-tight">
              Formalities & Guidelines
            </h1>
            <p className="text-background/70 text-base md:text-lg leading-relaxed">
              The Asian Exporters' Chamber of Commerce and Industry (AECCI),
              recognized by Ministry of Commerce and Industry , Govt of India.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-grow">
        <section className="py-20 md:py-24 bg-muted/30">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-center mb-12">
              <span className="text-xs font-bold text-primary uppercase tracking-widest mb-3 block">
                Explore
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                Our Guidelines
              </h2>
              <Separator className="w-16 mx-auto bg-primary" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {items.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08, duration: 0.4 }}
                >
                  <Card
                    onClick={() => navigate(item.href)}
                    className="h-full overflow-hidden border-border hover:border-primary/40 transition-colors group flex flex-col cursor-pointer"
                  >
                    <div className="h-48 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                    <CardContent className="p-6 flex flex-col flex-1 gap-3">
                      <h3 className="text-lg font-bold text-foreground">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                        {item.description}
                      </p>
                      <div className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:text-primary/80 uppercase tracking-widest mt-2 group/btn">
                        {item.buttonText}
                        <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
