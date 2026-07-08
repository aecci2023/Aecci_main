import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { CaretDown, List } from "@phosphor-icons/react";
import * as React from "react";
import { Link, useLocation } from "react-router-dom";

import { AnimatePresence, motion } from "framer-motion";
import {
  menuConfig,
  type MegaMenuSection,
  type MenuCategory,
  type SubMenuItem,
} from "./menu-config";

function NestedCategory({
  category,
  currentPath,
  setOpen,
}: {
  category: MenuCategory;
  currentPath: string;
  setOpen: (v: boolean) => void;
}) {
  const [isOpen, setIsOpen] = React.useState(false);
  const isCategoryActive =
    currentPath === category.href ||
    currentPath.startsWith(category.href + "/");

  return (
    <div className="flex flex-col">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={[
          "flex items-center justify-between w-full text-left text-[13px] font-[500] py-2.5 px-0 !no-underline hover:!no-underline !border-none",
          isCategoryActive
            ? "text-primary"
            : "text-foreground/80 hover:text-primary",
        ].join(" ")}
      >
        <span>{category.title}</span>
        <CaretDown
          className={`size-3.5 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <div className="flex flex-col gap-1.5 pl-3 border-l border-black/[0.1] dark:border-white/[0.1] ml-1 pb-3 pt-1">
              {category.items?.map((subLink: SubMenuItem, slidx: number) => {
                const isSubLinkActive = currentPath === subLink.href;
                return subLink.href.startsWith("http") ? (
                  <a
                    key={`sub-${slidx}`}
                    href={subLink.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setOpen(false)}
                    className={`block text-[13px] font-normal !no-underline py-1.5 pl-2 transition-colors ${isSubLinkActive ? "text-primary border-l-[1.5px] border-primary -ml-[1.5px]" : "text-foreground/60 hover:text-primary"}`}
                  >
                    {subLink.title}
                  </a>
                ) : (
                  <Link
                    key={`sub-${slidx}`}
                    to={subLink.href}
                    onClick={() => setOpen(false)}
                    className={`block text-[13px] font-normal !no-underline py-1.5 pl-2 transition-colors ${isSubLinkActive ? "text-primary border-l-[1.5px] border-primary -ml-[1.5px]" : "text-foreground/60 hover:text-primary"}`}
                  >
                    {subLink.title}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function MobileTopLevelItem({
  item,
  currentPath,
  setOpen,
  isOpen,
  onToggle,
}: {
  item: MegaMenuSection;
  currentPath: string;
  setOpen: (v: boolean) => void;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const isItemActive =
    currentPath === item.href || currentPath.startsWith(item.href + "/");

  return (
    <div className="flex flex-col border-b border-black/[0.04] dark:border-white/[0.04] last:border-0">
      <button
        onClick={onToggle}
        className={[
          "flex items-center justify-between w-full text-left text-[14px] font-medium py-3.5 px-0 !no-underline hover:!no-underline !border-none transition-colors duration-150",
          isItemActive ? "text-primary" : "text-foreground hover:text-primary",
        ].join(" ")}
      >
        <span>{item.title}</span>
        <CaretDown
          className={`size-4 transition-transform duration-300 ${isOpen ? "rotate-180 text-primary" : "text-foreground/40"}`}
        />
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="flex flex-col gap-1 pl-4 pb-4 pt-1">
              {item.mobileMenu?.map((category: MenuCategory, cidx: number) => {
                const hasItems = category.items && category.items.length > 0;

                if (hasItems) {
                  return (
                    <NestedCategory
                      key={`cat-${cidx}`}
                      category={category}
                      currentPath={currentPath}
                      setOpen={setOpen}
                    />
                  );
                }

                // Just a link
                const isCategoryActive =
                  currentPath === category.href ||
                  currentPath.startsWith(category.href + "/");
                return category.href?.startsWith("http") ? (
                  <a
                    key={`cat-${cidx}`}
                    href={category.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setOpen(false)}
                    className={`block text-[13px] font-[500] !no-underline py-2.5 transition-colors ${isCategoryActive ? "text-primary" : "text-foreground/80 hover:text-primary"}`}
                  >
                    {category.title}
                  </a>
                ) : (
                  <Link
                    key={`cat-${cidx}`}
                    to={category.href || "#"}
                    onClick={() => setOpen(false)}
                    className={`block text-[13px] font-[500] !no-underline py-2.5 transition-colors ${isCategoryActive ? "text-primary" : "text-foreground/80 hover:text-primary"}`}
                  >
                    {category.title}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function MobileMenu() {
  const [open, setOpen] = React.useState(false);
  const [openTopLevel, setOpenTopLevel] = React.useState<string | null>(null);
  const location = useLocation();
  const currentPath = location.pathname;

  const handleToggle = (title: string) => {
    setOpenTopLevel((prev) => (prev === title ? null : title));
  };

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
            "transition-all duration-200 cursor-pointer lg:hidden",
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
          "p-0 flex flex-col justify-between h-[100dvh]", // Ensure full height on mobile
        ].join(" ")}
      >
        {/* ── Scrollable body ── */}
        <div className="flex-1 overflow-y-auto min-h-0 px-5 py-5">
          {/* Header with logo */}
          <div className="p-0 text-center pb-5 mb-0">
            <div className="text-xl font-bold flex items-center justify-center">
              <Link to="/" onClick={() => setOpen(false)} className="block">
                <img
                  src="/arccilogoWithText.png"
                  alt="AECCI"
                  className="h-[90px] w-auto object-contain"
                />
              </Link>
            </div>
          </div>

          <Separator className="bg-black/[0.08] dark:bg-white/[0.08] mb-2" />

          {/* Accordion nav */}
          <div className="w-full flex flex-col pb-6">
            {menuConfig.map((item, idx) => (
              <MobileTopLevelItem
                key={idx}
                item={item}
                currentPath={currentPath}
                setOpen={setOpen}
                isOpen={openTopLevel === item.title}
                onToggle={() => handleToggle(item.title)}
              />
            ))}
          </div>
        </div>

        {/* ── Footer ── */}
        <div className="shrink-0 px-5 py-4 border-t border-black/[0.06] dark:border-white/[0.06] space-y-3 bg-background">
          {/* Auth buttons */}
          <div className="flex flex-col gap-2.5">
            <Link
              to="/login"
              onClick={() => setOpen(false)}
              className="w-full h-10 inline-flex items-center justify-center text-[13px] font-medium border border-black/[0.1] dark:border-white/[0.1] hover:bg-black/[0.02] dark:hover:bg-white/[0.02] rounded-full transition-all duration-200"
            >
              Login
            </Link>
            <Link
              to="/signup"
              onClick={() => setOpen(false)}
              className="w-full h-10 inline-flex items-center justify-center text-[13px] font-semibold bg-primary text-primary-foreground hover:bg-primary/90 rounded-full transition-all duration-200"
            >
              Join Now
            </Link>
          </div>

          <p className="text-center text-[8px] uppercase tracking-[2px] font-medium text-foreground/25">
            Facilitating Trade Since 2005
          </p>
        </div>
      </SheetContent>
    </Sheet>
  );
}
