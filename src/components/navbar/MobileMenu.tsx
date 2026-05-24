import * as React from "react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import { List } from "@phosphor-icons/react";
import { AuthDialog } from "@/components/auth-dialogs";
import { menuConfig } from "./menu-config";



export default function MobileMenu() {
  const [open, setOpen] = React.useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button
          aria-label="Open Navigation Menu"
          className={[
            "flex size-9 items-center justify-center",
            "rounded-full bg-black/[0.04] dark:bg-white/[0.06]",
            "border border-black/[0.08] dark:border-white/[0.08]",
            "text-foreground hover:text-primary",
            "transition-all duration-200 cursor-pointer md:hidden",
            open ? "opacity-0 pointer-events-none" : "opacity-100",
          ].join(" ")}
        >
          <List className="size-[18px]" />
        </button>
      </SheetTrigger>

      <SheetContent
        side="left"
        className={[
          "w-full sm:max-w-[380px]",
          "bg-background dark:bg-background",
          "border-r border-black/[0.06] dark:border-white/[0.06]",
          "p-0 flex flex-col justify-between",
        ].join(" ")}
      >
        {/* ── Scrollable body ── */}
        <div className="flex-1 overflow-y-auto px-5 py-5 space-y-4">

          {/* Header with logo */}
          <SheetHeader className="p-0 text-center pb-3 mb-0">
            <SheetTitle className="text-xl font-bold flex items-center justify-center">
              <a href="#hero" onClick={() => setOpen(false)} className="block">
                <img
                  src="/arccilogoWithText.png"
                  alt="AECCI"
                  className="h-[90px] w-auto object-contain"
                />
              </a>
            </SheetTitle>
          </SheetHeader>

          <Separator className="bg-black/[0.08] dark:bg-white/[0.08]" />

          {/* Accordion nav — no border, no bg, no underline */}
          <Accordion
            type="single"
            collapsible
            className="w-full !border-none !shadow-none !rounded-none gap-0 p-0"
          >
            {menuConfig.map((item, idx) => (
              <AccordionItem
                key={idx}
                value={`item-${idx}`}
                className="!border-none !bg-transparent data-[state=open]:!bg-transparent py-0 px-0"
              >
                <AccordionTrigger
                  className={[
                    "text-[14px] font-medium text-foreground",
                    "!no-underline hover:!no-underline py-2.5 px-0",
                    "hover:text-primary transition-colors duration-150",
                    "!border-none",
                  ].join(" ")}
                >
                  {item.title}
                </AccordionTrigger>

                <AccordionContent className="!px-0 pb-2 pt-0 !bg-transparent">
                  <div className="flex flex-col gap-0 pl-4">
                    {[
                      ...(item.featured || []),
                      ...(item.quickLinks || []),
                      ...(item.resources || []),
                    ].map((link, lidx) => (
                      <a
                        key={`link-${lidx}`}
                        href={link.href}
                        target={link.href.startsWith("http") ? "_blank" : undefined}
                        rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        onClick={() => setOpen(false)}
                        className="block text-[13px] font-normal text-foreground/70 hover:text-primary transition-colors !no-underline py-[7px]"
                      >
                        {link.title}
                      </a>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* ── Footer ── */}
        <div className="px-5 py-4 border-t border-black/[0.06] dark:border-white/[0.06] space-y-3">

          {/* Auth buttons */}
          <div className="flex flex-col gap-2.5">
            <AuthDialog
              triggerText="Member Login"
              defaultTab="login"
              variant="outline"
              className="w-full h-10 text-[13px] font-medium border-black/[0.1] dark:border-white/[0.1]"
            />
            <AuthDialog
              triggerText="Become a Member"
              defaultTab="register"
              variant="default"
              className="w-full h-10 text-[13px] font-semibold bg-primary text-primary-foreground hover:bg-primary/90 rounded-full"
            />
          </div>

          <p className="text-center text-[8px] uppercase tracking-[2px] font-medium text-foreground/25">
            Facilitating Trade Since 2005
          </p>
        </div>
      </SheetContent>
    </Sheet>
  );
}