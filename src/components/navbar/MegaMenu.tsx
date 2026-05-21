import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { MegaMenuSection } from "./menu-config";

interface MegaMenuProps {
  section: MegaMenuSection;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onClose: () => void;
}

export default function MegaMenu({
  section,
  onMouseEnter,
  onMouseLeave,
  onClose,
}: MegaMenuProps) {
  if (!section.hasDropdown) return null;

  return (
    <motion.div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      // Apple style: no separate card/box — the nav bar itself expands downward
      // The panel is flush with the header, same background, no separate border
      initial={{ height: 0 }}
      animate={{ height: "auto" }}
      exit={{ height: 0 }}
      transition={{ duration: 0.38, ease: [0.32, 0.72, 0, 1] }}
      style={{ overflow: "hidden" }}
      className="w-full"
    >
      {/* Inner content fades/slides in after the panel height expands */}
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1], delay: 0.06 }}
        className="mx-auto max-w-[980px] px-6 md:px-10 pt-6 pb-10 grid grid-cols-12 gap-8 text-left"
      >

        {/* LEFT COLUMN: Featured */}
        <div className="col-span-12 md:col-span-5 flex flex-col gap-5 pr-6 md:border-r border-black/[0.06] dark:border-white/[0.08]">
          <span className="uppercase text-[10px] font-semibold tracking-widest text-foreground/40 block">
            Featured
          </span>

          {section.featured?.map((item, idx) => (
            <div key={idx} className="group space-y-2 border-b border-black/[0.06] dark:border-white/[0.06] last:border-0 pb-5 last:pb-0">
              {item.badge && (
                <span className="inline-block text-[10px] font-semibold text-foreground/40 uppercase tracking-wider">
                  {item.badge}
                </span>
              )}
              <a
                href={item.href}
                onClick={onClose}
                className="flex items-start gap-1 group/link"
              >
                <span className="text-[22px] font-semibold leading-tight text-foreground group-hover/link:opacity-60 transition-opacity duration-200">
                  {item.title}
                </span>
                <ArrowRight className="size-4 text-foreground/40 group-hover/link:text-foreground/60 transition-all duration-200 mt-1.5 shrink-0 group-hover/link:translate-x-0.5" />
              </a>
              <p className="text-[13px] text-foreground/50 leading-relaxed font-light">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* MIDDLE COLUMN: Core Links */}
        <div className="col-span-12 md:col-span-4 flex flex-col gap-3 pl-0 md:pl-6 md:border-r border-black/[0.06] dark:border-white/[0.08]">
          <span className="uppercase text-[10px] font-semibold tracking-widest text-foreground/40 block mb-1">
            Explore
          </span>
          <nav className="flex flex-col gap-0.5">
            {section.quickLinks?.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                onClick={onClose}
                className="text-[13px] font-normal text-foreground/70 hover:text-foreground transition-all duration-150 py-1.5 pl-0 pr-2 flex items-center gap-1 group rounded"
              >
                <span>{link.title}</span>
                <span className="opacity-0 group-hover:opacity-60 group-hover:translate-x-0.5 transition-all duration-150 text-[11px]">›</span>
              </a>
            ))}
          </nav>
        </div>

        {/* RIGHT COLUMN: Resources */}
        <div className="col-span-12 md:col-span-3 flex flex-col gap-4 pl-0 md:pl-6">
          <span className="uppercase text-[10px] font-semibold tracking-widest text-foreground/40 block mb-1">
            Resources
          </span>
          <div className="flex flex-col gap-4">
            {section.resources?.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                onClick={onClose}
                className="group block space-y-0.5"
              >
                <span className="block text-[13px] font-medium text-foreground/80 group-hover:text-foreground transition-opacity duration-150">
                  {link.title}
                </span>
                {link.description && (
                  <span className="block text-[12px] text-foreground/45 leading-snug font-light">
                    {link.description}
                  </span>
                )}
              </a>
            ))}
          </div>
        </div>

      </motion.div>
    </motion.div>
  );
}