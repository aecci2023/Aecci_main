import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useLocation, Link } from "react-router-dom";
import type { MegaMenuSection, SubMenuItem } from "./menu-config";

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
  const location = useLocation();
  const currentPath = location.pathname;

  const [activeSubItems, setActiveSubItems] = React.useState<{
    title: string;
    items: SubMenuItem[];
  } | null>(null);
  const [prevSectionTitle, setPrevSectionTitle] = React.useState(section.title);

  // Reset when section changes (React-recommended pattern instead of useEffect)
  if (section.title !== prevSectionTitle) {
    setPrevSectionTitle(section.title);
    setActiveSubItems(null);
  }

  if (!section.hasDropdown) return null;

  const showThirdColumn = activeSubItems && activeSubItems.items.length > 0;

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
        className="mx-auto max-w-7xl px-4 md:px-6 pt-7 pb-10 flex gap-0 text-left transition-all duration-300"
      >
        {/* ── LEFT: Menus (Featured) ── */}
        <div
          className={`flex flex-col gap-5 pr-8 border-r border-black/[0.06] dark:border-white/[0.07] transition-all duration-300 ${showThirdColumn ? "w-[38%]" : "w-[55%]"}`}
        >
          {section.featured?.map((item, idx) => {
            const isActive =
              currentPath === item.href ||
              currentPath.startsWith(item.href + "/");
            return (
              <div
                key={idx}
                onMouseEnter={() =>
                  item.items
                    ? setActiveSubItems({
                        title: item.title,
                        items: item.items,
                      })
                    : setActiveSubItems(null)
                }
                className="group pb-4 border-b border-black/[0.05] dark:border-white/[0.05] last:border-0 last:pb-0"
              >
                {item.href.startsWith("http") ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={onClose}
                    className="group/link flex items-start gap-1 no-underline"
                  >
                    <span
                      className={`text-[20px] font-[450] leading-tight tracking-[-0.3px] transition-opacity duration-200 group-hover/link:opacity-70 ${isActive ? "text-primary" : "text-foreground"}`}
                    >
                      {item.title}
                    </span>
                    {item.items && item.items.length > 0 && (
                      <ArrowRight
                        className={`mt-[4px] size-[15px] shrink-0 transition-all duration-200 group-hover/link:translate-x-0.5 ${isActive ? "text-primary opacity-50" : "text-foreground/30 group-hover/link:text-foreground/50"}`}
                      />
                    )}
                  </a>
                ) : (
                  <Link
                    to={item.href}
                    onClick={onClose}
                    className="group/link flex items-start gap-1 no-underline"
                  >
                    <span
                      className={`text-[20px] font-[450] leading-tight tracking-[-0.3px] transition-opacity duration-200 group-hover/link:opacity-70 ${isActive ? "text-primary" : "text-foreground"}`}
                    >
                      {item.title}
                    </span>
                    {item.items && item.items.length > 0 && (
                      <ArrowRight
                        className={`mt-[4px] size-[15px] shrink-0 transition-all duration-200 group-hover/link:translate-x-0.5 ${isActive ? "text-primary opacity-50" : "text-foreground/30 group-hover/link:text-foreground/50"}`}
                      />
                    )}
                  </Link>
                )}
                <p className="mt-1 text-[12px] leading-relaxed font-light text-foreground/50 line-clamp-2 pr-4">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* ── MIDDLE: Dynamic 3rd Column for Sub-items ── */}
        <AnimatePresence>
          {showThirdColumn && (
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.2 }}
              className="w-[32%] flex flex-col px-8 border-r border-black/[0.06] dark:border-white/[0.07]"
            >
              <span className="block uppercase text-[9px] font-semibold tracking-[2px] text-primary mb-3">
                {activeSubItems.title}
              </span>
              <div className="flex flex-col gap-[2px]">
                {activeSubItems.items.map((subItem, idx) => {
                  const isActive = currentPath === subItem.href;
                  return subItem.href.startsWith("http") ? (
                    <a
                      key={idx}
                      href={subItem.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={onClose}
                      className={`block py-1.5 px-3 -ml-3 rounded-md text-[13px] font-[400] transition-colors duration-150 no-underline ${isActive ? "bg-primary/5 text-primary" : "text-foreground/70 hover:bg-black/[0.03] dark:hover:bg-white/[0.03] hover:text-foreground"}`}
                    >
                      {subItem.title}
                    </a>
                  ) : (
                    <Link
                      key={idx}
                      to={subItem.href}
                      onClick={onClose}
                      className={`block py-1.5 px-3 -ml-3 rounded-md text-[13px] font-[400] transition-colors duration-150 no-underline ${isActive ? "bg-primary/5 text-primary" : "text-foreground/70 hover:bg-black/[0.03] dark:hover:bg-white/[0.03] hover:text-foreground"}`}
                    >
                      {subItem.title}
                    </Link>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── RIGHT: Explore & Resources ── */}
        <div
          className={`flex flex-col pl-0 md:pl-8 transition-all duration-300 ${showThirdColumn ? "w-[30%]" : "w-[45%] pl-0 md:pl-8"}`}
        >
          {section.quickLinks && section.quickLinks.length > 0 && (
            <div className="mb-6">
              <span className="block uppercase text-[9px] font-semibold tracking-[2px] text-foreground/40 mb-3">
                Explore
              </span>
              <nav className="flex flex-col gap-1">
                {section.quickLinks?.map((link, idx) => {
                  const isActive = currentPath === link.href;
                  return link.href.startsWith("http") ? (
                    <a
                      key={idx}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={onClose}
                      onMouseEnter={() =>
                        link.items
                          ? setActiveSubItems({
                              title: link.title,
                              items: link.items,
                            })
                          : setActiveSubItems(null)
                      }
                      className={`group/q flex items-center gap-1 py-[6px] text-[13px] font-[400] transition-colors duration-150 no-underline ${isActive ? "text-primary" : "text-foreground/70 hover:text-foreground"}`}
                    >
                      <span>{link.title}</span>
                      {link.items && link.items.length > 0 && (
                        <span className="text-[11px] opacity-0 translate-x-0 group-hover/q:opacity-50 group-hover/q:translate-x-0.5 transition-all duration-150">
                          ›
                        </span>
                      )}
                    </a>
                  ) : (
                    <Link
                      key={idx}
                      to={link.href}
                      onClick={onClose}
                      onMouseEnter={() =>
                        link.items
                          ? setActiveSubItems({
                              title: link.title,
                              items: link.items,
                            })
                          : setActiveSubItems(null)
                      }
                      className={`group/q flex items-center gap-1 py-[6px] text-[13px] font-[400] transition-colors duration-150 no-underline ${isActive ? "text-primary" : "text-foreground/70 hover:text-foreground"}`}
                    >
                      <span>{link.title}</span>
                      {link.items && link.items.length > 0 && (
                        <span className="text-[11px] opacity-0 translate-x-0 group-hover/q:opacity-50 group-hover/q:translate-x-0.5 transition-all duration-150">
                          ›
                        </span>
                      )}
                    </Link>
                  );
                })}
              </nav>
            </div>
          )}

          {section.resources && section.resources.length > 0 && (
            <div>
              <span className="block uppercase text-[9px] font-semibold tracking-[2px] text-foreground/40 mb-3">
                Resources
              </span>
              <div className="flex flex-col gap-3">
                {section.resources?.map((link, idx) => {
                  const isActive = currentPath === link.href;
                  return link.href.startsWith("http") ? (
                    <a
                      key={idx}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={onClose}
                      onMouseEnter={() =>
                        link.items
                          ? setActiveSubItems({
                              title: link.title,
                              items: link.items,
                            })
                          : setActiveSubItems(null)
                      }
                      className="group/r block no-underline"
                    >
                      <span
                        className={`block text-[13px] font-[500] transition-opacity duration-150 group-hover/r:opacity-70 ${isActive ? "text-primary" : "text-foreground/80"}`}
                      >
                        {link.title}
                      </span>
                      {link.description && (
                        <span className="block mt-[2px] text-[11px] font-[300] leading-snug text-foreground/45">
                          {link.description}
                        </span>
                      )}
                    </a>
                  ) : (
                    <Link
                      key={idx}
                      to={link.href}
                      onClick={onClose}
                      onMouseEnter={() =>
                        link.items
                          ? setActiveSubItems({
                              title: link.title,
                              items: link.items,
                            })
                          : setActiveSubItems(null)
                      }
                      className="group/r block no-underline"
                    >
                      <span
                        className={`block text-[13px] font-[500] transition-opacity duration-150 group-hover/r:opacity-70 ${isActive ? "text-primary" : "text-foreground/80"}`}
                      >
                        {link.title}
                      </span>
                      {link.description && (
                        <span className="block mt-[2px] text-[11px] font-[300] leading-snug text-foreground/45">
                          {link.description}
                        </span>
                      )}
                    </Link>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
