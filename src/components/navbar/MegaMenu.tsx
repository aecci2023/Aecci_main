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
      initial={{ height: 0 }}
      animate={{ height: "auto" }}
      exit={{ height: 0 }}
      transition={{ duration: 0.38, ease: [0.32, 0.72, 0, 1] }}
      style={{ overflow: "hidden" }}
      className="w-full"
    >
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -6 }}
        transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1], delay: 0.06 }}
        className="mx-auto max-w-7xl px-4 md:px-6 pt-7 pb-10 grid grid-cols-12 gap-0 text-left"
      >

        {/* ── LEFT: Featured ── */}
        <div className="col-span-12 md:col-span-5 flex flex-col gap-5 pr-8 md:border-r border-black/[0.06] dark:border-white/[0.07]">
          <span className="block uppercase text-[9px] font-semibold tracking-[2px] text-foreground/35">
            Featured
          </span>

          {section.featured?.map((item, idx) => (
            <div
              key={idx}
              className="group pb-5 border-b border-black/[0.05] dark:border-white/[0.05] last:border-0 last:pb-0"
            >
              {item.badge && (
                <span className="inline-block mb-1.5 text-[9px] font-semibold uppercase tracking-wide text-foreground/40">
                  {item.badge}
                </span>
              )}
              <a
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                onClick={onClose}
                className="group/link flex items-start gap-1 no-underline"
              >
                <span className="text-[21px] font-[450] leading-tight tracking-[-0.3px] text-foreground transition-opacity duration-200 group-hover/link:opacity-50">
                  {item.title}
                </span>
                <ArrowRight
                  className="mt-[5px] size-[15px] shrink-0 text-foreground/30 transition-all duration-200
                             group-hover/link:text-foreground/50 group-hover/link:translate-x-0.5"
                />
              </a>
              <p className="mt-1 text-[12px] leading-relaxed font-light text-foreground/45">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* ── MIDDLE: Explore ── */}
        <div className="col-span-12 md:col-span-4 flex flex-col px-0 md:px-8 md:border-r border-black/[0.06] dark:border-white/[0.07]">
          <span className="block uppercase text-[9px] font-semibold tracking-[2px] text-foreground/35 mb-3">
            Explore
          </span>
          <nav className="flex flex-col">
            {section.quickLinks?.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                onClick={onClose}
                className="group/q flex items-center gap-1 py-[7px] text-[13px] font-[350] text-foreground/60
                           hover:text-foreground transition-colors duration-150 no-underline"
              >
                <span>{link.title}</span>
                <span className="text-[11px] opacity-0 translate-x-0 group-hover/q:opacity-50 group-hover/q:translate-x-0.5 transition-all duration-150">
                  ›
                </span>
              </a>
            ))}
          </nav>
        </div>

        {/* ── RIGHT: Resources ── */}
        <div className="col-span-12 md:col-span-3 flex flex-col pl-0 md:pl-8">
          <span className="block uppercase text-[9px] font-semibold tracking-[2px] text-foreground/35 mb-3">
            Resources
          </span>
          <div className="flex flex-col gap-[14px]">
            {section.resources?.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                onClick={onClose}
                className="group/r block no-underline"
              >
                <span className="block text-[13px] font-[450] text-foreground/75 transition-opacity duration-150 group-hover/r:opacity-50">
                  {link.title}
                </span>
                {link.description && (
                  <span className="block mt-0.5 text-[11px] font-light leading-snug text-foreground/40">
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