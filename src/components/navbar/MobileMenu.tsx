import * as React from "react";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { List, Sun, Moon } from "@phosphor-icons/react";
import { AuthDialog } from "@/components/auth-dialogs";
import { menuConfig } from "./menu-config";

interface MobileMenuProps {
  theme: "dark" | "light";
  setTheme: (t: "dark" | "light") => void;
}

export default function MobileMenu({ theme, setTheme }: MobileMenuProps) {
  const [open, setOpen] = React.useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button
          className="flex size-9 items-center justify-center rounded-full bg-muted/40 border border-border text-foreground md:hidden hover:text-primary transition-all duration-200 cursor-pointer"
          aria-label="Open Navigation Menu"
        >
          <List className="size-5" />
        </button>
      </SheetTrigger>

      <SheetContent
        side="right"
        className="w-full sm:max-w-md bg-background/95 dark:bg-background/98 backdrop-blur-2xl border-l border-border/40 p-0 flex flex-col justify-between"
      >
        <div className="flex-1 overflow-y-auto px-6 py-8 space-y-6">
          <SheetHeader className="p-0 text-left mb-6 border-b border-border/20 pb-4">
            <SheetTitle className="text-xl font-bold flex items-center gap-2">
              <div className="flex size-8 items-center justify-center rounded-lg bg-gradient-to-tr from-primary to-primary/80 shadow-md">
                <span className="font-heading font-black text-sm text-white">A</span>
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-extrabold text-md leading-none tracking-tight">AECCI</span>
                <span className="text-[8px] font-semibold text-primary uppercase tracking-widest leading-none mt-0.5">Asian Exporters</span>
              </div>
            </SheetTitle>
          </SheetHeader>

          {/* Collapsible Mobile Sitemap */}
          <div className="space-y-4">
            <span className="uppercase text-[9px] font-bold tracking-widest text-muted-foreground/60 block">
              Navigation Sitemap
            </span>
            <Accordion type="single" collapsible className="border-none shadow-none rounded-none w-full gap-2 p-0 [&_a]:no-underline">
              {menuConfig.map((item, idx) => (
                <AccordionItem
                  key={idx}
                  value={`item-${idx}`}
                  className="border-b border-border/20 py-1.5 px-0 data-open:bg-transparent"
                >
                  <AccordionTrigger className="text-md font-semibold text-foreground hover:no-underline py-2.5 px-0 hover:text-primary transition-colors">
                    {item.title}
                  </AccordionTrigger>
                  <AccordionContent className="px-0 pt-2 pb-3 flex flex-col gap-3.5">
                    {/* Featured items in Accordion */}
                    {item.featured && item.featured.map((feat, fidx) => (
                      <a
                        key={`feat-${fidx}`}
                        href={feat.href}
                        onClick={() => setOpen(false)}
                        className="block bg-muted/30 dark:bg-muted/10 p-3.5 rounded-xl border border-border/30 group"
                      >
                        <span className="inline-block text-[8px] font-extrabold uppercase bg-primary/15 text-primary px-2 py-0.5 rounded-md tracking-wider mb-1.5">
                          Featured
                        </span>
                        <h4 className="text-xs font-bold text-foreground group-hover:text-primary transition-colors mb-1">
                          {feat.title}
                        </h4>
                        <p className="text-[11px] text-muted-foreground leading-normal font-light">
                          {feat.description}
                        </p>
                      </a>
                    ))}

                    {/* Quick action links in Accordion */}
                    <div className="flex flex-col gap-2.5">
                      <span className="text-[9px] font-extrabold uppercase text-muted-foreground/45 tracking-widest block pt-1.5">
                        Core Pathways
                      </span>
                      {item.quickLinks && item.quickLinks.map((link, lidx) => (
                        <a
                          key={`link-${lidx}`}
                          href={link.href}
                          onClick={() => setOpen(false)}
                          className="text-xs font-medium text-muted-foreground hover:text-primary transition-colors py-1 block pl-1 border-l-2 border-border/10 hover:border-primary/40"
                        >
                          {link.title}
                        </a>
                      ))}
                    </div>

                    {/* Support resources links in Accordion */}
                    {item.resources && (
                      <div className="flex flex-col gap-2.5 pt-2">
                        <span className="text-[9px] font-extrabold uppercase text-muted-foreground/45 tracking-widest block">
                          Resources
                        </span>
                        {item.resources.map((res, ridx) => (
                          <a
                            key={`res-${ridx}`}
                            href={res.href}
                            onClick={() => setOpen(false)}
                            className="text-xs text-muted-foreground hover:text-primary transition-colors block pl-1"
                          >
                            <span className="block font-semibold text-foreground/90">{res.title}</span>
                            {res.description && (
                              <span className="block text-[10px] text-muted-foreground font-light leading-normal">{res.description}</span>
                            )}
                          </a>
                        ))}
                      </div>
                    )}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>

        {/* Footer actions inside the drawer */}
        <div className="p-6 bg-muted/20 border-t border-border/20 space-y-4">
          <div className="flex items-center justify-between border-b border-border/20 pb-3">
            <span className="text-xs font-semibold text-muted-foreground">Select App Theme</span>
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="flex size-9 items-center justify-center rounded-full bg-muted/40 border border-border text-foreground hover:text-primary active:scale-95 transition-all duration-200 cursor-pointer"
              title="Toggle Theme Mode"
            >
              {theme === "dark" ? <Sun className="size-4.5" /> : <Moon className="size-4.5" />}
            </button>
          </div>

          <div className="flex flex-col gap-2.5">
            <AuthDialog
              triggerText="Member Login"
              defaultTab="login"
              variant="outline"
              className="w-full h-10 font-bold border-border"
              // triggerCallback={() => setOpen(false)}
            />
            <AuthDialog
              triggerText="Become Member"
              defaultTab="register"
              variant="default"
              className="w-full h-10 font-bold bg-primary text-primary-foreground hover:bg-primary/95"
              // triggerCallback={() => setOpen(false)}
            />
          </div>
          <p className="text-[9px] text-muted-foreground/60 text-center font-medium uppercase tracking-widest">
            AECCI facilitaing trade since 2005
          </p>
        </div>
      </SheetContent>
    </Sheet>
  );
}
