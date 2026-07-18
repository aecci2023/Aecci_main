import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Building2,
  UserSquare2,
  Users,
  HelpCircle,
  Scale,
  FileText,
  ShieldCheck,
  GraduationCap,
  Globe2,
  Calendar,
  Briefcase,
  FileCheck,
  Search,
  BookOpen,
} from "lucide-react";
import { useLocation, Link } from "react-router-dom";
import type { MegaMenuSection, SubMenuItem } from "./menu-config";

interface MegaMenuProps {
  section: MegaMenuSection;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  onClose: () => void;
}

function getMenuItemIcon(title: string) {
  const lowercase = title.toLowerCase();
  if (lowercase.includes("chamber") || lowercase.includes("head office")) return Building2;
  if (lowercase.includes("message") || lowercase.includes("chairman")) return UserSquare2;
  if (lowercase.includes("partner")) return Users;
  if (lowercase.includes("job") || lowercase.includes("career") || lowercase.includes("oppor")) return Briefcase;
  if (lowercase.includes("rule") || lowercase.includes("policy") || lowercase.includes("clause")) return Scale;
  if (lowercase.includes("membership") || lowercase.includes("enroll")) return ShieldCheck;
  if (lowercase.includes("event") || lowercase.includes("seminar") || lowercase.includes("conference")) return Calendar;
  if (lowercase.includes("publication") || lowercase.includes("document") || lowercase.includes("report") || lowercase.includes("formalities") || lowercase.includes("fees")) return FileText;
  if (lowercase.includes("verification") || lowercase.includes("attestation") || lowercase.includes("bond")) return FileCheck;
  if (lowercase.includes("faq") || lowercase.includes("help") || lowercase.includes("support")) return HelpCircle;
  if (lowercase.includes("trial") || lowercase.includes("platform") || lowercase.includes("portal") || lowercase.includes("login")) return Globe2;
  if (lowercase.includes("research") || lowercase.includes("index") || lowercase.includes("economic") || lowercase.includes("analysis")) return Search;
  if (lowercase.includes("guide") || lowercase.includes("academy") || lowercase.includes("training")) return GraduationCap;
  return BookOpen;
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
  const hasMiddleColumn = !!((section.quickLinks && section.quickLinks.length > 0) || 
                            (section.resources && section.resources.length > 0));

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
          className={[
            "flex flex-col gap-4 pr-8 transition-all duration-300",
            hasMiddleColumn
              ? (showThirdColumn ? "w-[40%] border-r border-black/[0.06] dark:border-white/[0.07]" : "w-[55%] border-r border-black/[0.06] dark:border-white/[0.07]")
              : (showThirdColumn ? "w-[50%] border-r border-black/[0.06] dark:border-white/[0.07]" : "w-full")
          ].join(" ")}
        >
          {section.featured?.map((item, idx) => {
            const isActive =
              currentPath === item.href ||
              currentPath.startsWith(item.href + "/");
            const Icon = getMenuItemIcon(item.title);

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
                className="group pb-3.5 border-b border-black/[0.05] dark:border-white/[0.05] last:border-0 last:pb-0"
              >
                {item.href.startsWith("http") ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={onClose}
                    className="group/link flex items-start gap-3 no-underline py-0.5"
                  >
                    <div className="p-1.5 bg-primary/10 rounded-lg text-primary transition-all duration-300 group-hover/link:bg-primary group-hover/link:text-white group-hover/link:scale-105 shrink-0">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="flex-1">
                      <span
                        className={`text-sm font-semibold tracking-tight transition-colors duration-200 group-hover/link:text-primary ${isActive ? "text-primary font-bold" : "text-foreground"}`}
                      >
                        {item.title}
                      </span>
                      <p className="mt-0.5 text-[11px] leading-relaxed text-foreground/50 group-hover/link:text-foreground/75 transition-colors duration-200">
                        {item.description}
                      </p>
                    </div>
                    {item.items && item.items.length > 0 && (
                      <ArrowRight
                        className={`mt-1 size-[14px] shrink-0 transition-all duration-200 group-hover/link:translate-x-0.5 ${isActive ? "text-primary opacity-50" : "text-foreground/30 group-hover/link:text-foreground/50"}`}
                      />
                    )}
                  </a>
                ) : (
                  <Link
                    to={item.href}
                    onClick={onClose}
                    className="group/link flex items-start gap-3 no-underline py-0.5"
                  >
                    <div className="p-1.5 bg-primary/10 rounded-lg text-primary transition-all duration-300 group-hover/link:bg-primary group-hover/link:text-white group-hover/link:scale-105 shrink-0">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="flex-1">
                      <span
                        className={`text-sm font-semibold tracking-tight transition-colors duration-200 group-hover/link:text-primary ${isActive ? "text-primary font-bold" : "text-foreground"}`}
                      >
                        {item.title}
                      </span>
                      <p className="mt-0.5 text-[11px] leading-relaxed text-foreground/50 group-hover/link:text-foreground/75 transition-colors duration-200">
                        {item.description}
                      </p>
                    </div>
                    {item.items && item.items.length > 0 && (
                      <ArrowRight
                        className={`mt-1 size-[14px] shrink-0 transition-all duration-200 group-hover/link:translate-x-0.5 ${isActive ? "text-primary opacity-50" : "text-foreground/30 group-hover/link:text-foreground/50"}`}
                      />
                    )}
                  </Link>
                )}
              </div>
            );
          })}
        </div>

        {/* ── MIDDLE: Explore & Resources ── */}
        {hasMiddleColumn && (
          <div
            className={`flex flex-col pl-0 md:pl-8 transition-all duration-300 ${showThirdColumn ? "w-[30%] border-r border-black/[0.06] dark:border-white/[0.07] pr-8 mr-8" : "w-[45%] pl-0 md:pl-8"}`}
          >
            {section.quickLinks && section.quickLinks.length > 0 && (
              <div className="mb-6 text-left">
                <span className="block uppercase text-[9px] font-bold tracking-[2px] text-foreground/40 mb-3 pl-1">
                  Explore
                </span>
                <nav className="flex flex-col gap-1">
                  {section.quickLinks?.map((link, idx) => {
                    const isActive = currentPath === link.href;
                    const LinkIcon = getMenuItemIcon(link.title);

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
                        className={`group/q flex items-center gap-2.5 py-[6px] px-2 rounded-lg text-[13px] font-[500] transition-colors duration-150 no-underline ${isActive ? "bg-primary/5 text-primary" : "text-foreground/70 hover:bg-black/[0.02] dark:hover:bg-white/[0.02] hover:text-primary"}`}
                      >
                        <LinkIcon className="w-3.5 h-3.5 opacity-60 group-hover/q:opacity-100 transition-opacity" />
                        <span>{link.title}</span>
                        {link.items && link.items.length > 0 && (
                          <span className="text-[11px] opacity-0 translate-x-0 group-hover/q:opacity-50 group-hover/q:translate-x-0.5 transition-all duration-150 ml-auto">
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
                        className={`group/q flex items-center gap-2.5 py-[6px] px-2 rounded-lg text-[13px] font-[500] transition-colors duration-150 no-underline ${isActive ? "bg-primary/5 text-primary" : "text-foreground/70 hover:bg-black/[0.02] dark:hover:bg-white/[0.02] hover:text-primary"}`}
                      >
                        <LinkIcon className="w-3.5 h-3.5 opacity-60 group-hover/q:opacity-100 transition-opacity" />
                        <span>{link.title}</span>
                        {link.items && link.items.length > 0 && (
                          <span className="text-[11px] opacity-0 translate-x-0 group-hover/q:opacity-50 group-hover/q:translate-x-0.5 transition-all duration-150 ml-auto">
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
              <div className="text-left">
                <span className="block uppercase text-[9px] font-bold tracking-[2px] text-foreground/40 mb-3 pl-1">
                  Resources
                </span>
                <div className="flex flex-col gap-1.5">
                  {section.resources?.map((link, idx) => {
                    const isActive = currentPath === link.href;
                    const LinkIcon = getMenuItemIcon(link.title);

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
                        className={`group/r flex items-start gap-2.5 p-2 rounded-lg transition-colors duration-150 no-underline ${isActive ? "bg-primary/5 text-primary" : "text-foreground/70 hover:bg-black/[0.02] dark:hover:bg-white/[0.02] hover:text-primary"}`}
                      >
                        <LinkIcon className="w-4 h-4 opacity-60 group-hover/r:opacity-100 transition-opacity shrink-0 mt-0.5" />
                        <div>
                          <span className="block text-[13px] font-[500] leading-none">{link.title}</span>
                          {link.description && (
                            <span className="block mt-1 text-[11px] font-[300] leading-relaxed text-foreground/45">
                              {link.description}
                            </span>
                          )}
                        </div>
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
                        className={`group/r flex items-start gap-2.5 p-2 rounded-lg transition-colors duration-150 no-underline ${isActive ? "bg-primary/5 text-primary" : "text-foreground/70 hover:bg-black/[0.02] dark:hover:bg-white/[0.02] hover:text-primary"}`}
                      >
                        <LinkIcon className="w-4 h-4 opacity-60 group-hover/r:opacity-100 transition-opacity shrink-0 mt-0.5" />
                        <div>
                          <span className="block text-[13px] font-[500] leading-none">{link.title}</span>
                          {link.description && (
                            <span className="block mt-1 text-[11px] font-[300] leading-relaxed text-foreground/45">
                              {link.description}
                            </span>
                          )}
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        )}

        {/* ── RIGHT: Dynamic 3rd Column for Sub-items ── */}
        <AnimatePresence>
          {showThirdColumn && (
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.2 }}
              className={[
                "flex flex-col text-left transition-all duration-300",
                hasMiddleColumn ? "w-[30%] pl-0" : "w-[50%] pl-8"
              ].join(" ")}
            >
              <span className="block uppercase text-[9px] font-bold tracking-[2px] text-primary mb-3 pl-3">
                {activeSubItems.title}
              </span>
              <div className="flex flex-col gap-1">
                {activeSubItems.items.map((subItem, idx) => {
                  const isActive = currentPath === subItem.href;
                  const SubIcon = getMenuItemIcon(subItem.title);

                  return subItem.href.startsWith("http") ? (
                    <a
                      key={idx}
                      href={subItem.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={onClose}
                      className={`flex items-center gap-2.5 py-1.5 px-3 rounded-lg text-[13px] font-[400] transition-colors duration-150 no-underline ${isActive ? "bg-primary/5 text-primary" : "text-foreground/70 hover:bg-black/[0.03] dark:hover:bg-white/[0.03] hover:text-primary"}`}
                    >
                      <SubIcon className="w-3.5 h-3.5 opacity-60" />
                      <span>{subItem.title}</span>
                    </a>
                  ) : (
                    <Link
                      key={idx}
                      to={subItem.href}
                      onClick={onClose}
                      className={`flex items-center gap-2.5 py-1.5 px-3 rounded-lg text-[13px] font-[400] transition-colors duration-150 no-underline ${isActive ? "bg-primary/5 text-primary" : "text-foreground/70 hover:bg-black/[0.03] dark:hover:bg-white/[0.03] hover:text-primary"}`}
                    >
                      <SubIcon className="w-3.5 h-3.5 opacity-60" />
                      <span>{subItem.title}</span>
                    </Link>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}
