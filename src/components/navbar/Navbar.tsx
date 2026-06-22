import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { User } from "@phosphor-icons/react";

import { useLocation, Link } from "react-router-dom";
import { menuConfig } from "./menu-config";
import MegaMenu from "./MegaMenu";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const location = useLocation();
  const [activeSection, setActiveSection] = React.useState<string | null>(null);
  const [brandVisible, setBrandVisible] = React.useState(true);
  const closeTimeoutRef = React.useRef<number | null>(null);

  // ── Scroll: collapse brand bar after 40px ──
  React.useEffect(() => {
    const onScroll = () => setBrandVisible(window.scrollY < 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ── Escape key ──
  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveSection(null);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    };
  }, []);

  const clearClose = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  };

  const handleMouseEnter = (title: string) => {
    clearClose();
    setActiveSection(title);
  };

  const handleMouseLeave = () => {
    clearClose();
    closeTimeoutRef.current = window.setTimeout(() => {
      setActiveSection(null);
    }, 160);
  };

  const handleDropdownMouseEnter = () => clearClose();

  const handleClose = () => setActiveSection(null);

  const activeSectionConfig = menuConfig.find((s) => s.title === activeSection);
  const isAnyOpen = !!activeSectionConfig;

  // Shared frosted glass bg classes
  const glassBg = brandVisible
    ? "bg-[rgba(255,255,255,0.82)] dark:bg-[rgba(18,18,19,0.88)] backdrop-blur-2xl"
    : "bg-white dark:bg-[#121213] shadow-sm";

  return (
    <>
      <header className="sticky top-0 lg:top-[-72px] z-50 w-full transition-colors duration-300">
        {/* ─────────────────────────────────────── */}
        {/* Brand Bar — desktop only, hides on scroll */}
        {/* ─────────────────────────────────────── */}
        <div
          className={[
            "hidden lg:block w-full overflow-hidden h-[72px] transition-colors duration-300",
            glassBg,
            "border-b border-black/[0.06] dark:border-white/[0.06]",
          ].join(" ")}
        >
          <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-center px-6">
            <Link
              to="/"
              onClick={handleClose}
              className="flex items-center gap-3 group no-underline"
              aria-label="AECCI Home"
            >
              <img
                src="/aecci-logo.png"
                alt="AECCI"
                className="h-[58px] w-auto object-contain "
              />
            </Link>
          </div>
        </div>

        {/* ─────────────────────────────────────── */}
        {/* Main Nav Row */}
        {/* ─────────────────────────────────────── */}
        <div
          className={[
            "relative w-full",
            glassBg,
            !isAnyOpen
              ? "border-b border-black/[0.07] dark:border-white/[0.07]"
              : "",
          ].join(" ")}
        >
          <div className="mx-auto flex h-[54px] lg:h-[44px] max-w-7xl items-center justify-between px-4 lg:px-6 relative">
            {/* Mobile: Hamburger */}
            <div className="flex lg:hidden items-center w-1/3">
              <MobileMenu />
            </div>

            {/* Mobile: Logo center */}
            <div className="flex lg:hidden items-center justify-center w-1/3">
              <Link to="/" onClick={handleClose} className="group">
                <img
                  src="/aecci-logoonly.png"
                  alt="AECCI"
                  className="h-[34px] w-auto object-contain"
                />
              </Link>
            </div>

            {/* Mobile: User icon right */}
            <div className="flex lg:hidden items-center justify-end w-1/3">
              <a
                href="https://e-platform.aecci.org.in/login"
                target="_blank"
                rel="noopener noreferrer"
                className={[
                  "flex size-9 items-center justify-center rounded-full p-0",
                  "bg-black/[0.04] dark:bg-white/[0.06]",
                  "border border-black/[0.08] dark:border-white/[0.08]",
                  "text-foreground hover:text-primary transition-all duration-200",
                ].join(" ")}
              >
                <User className="size-[18px]" />
              </a>
            </div>

            {/* Desktop: Nav links centered */}
            <nav
              className="hidden lg:flex items-center justify-center gap-0 flex-1"
              onMouseLeave={handleMouseLeave}
            >
              {menuConfig.map((item, idx) => {
                const isActivePath = location.pathname.startsWith(item.href);

                return (
                  <Link
                    key={idx}
                    to={item.href}
                    onMouseEnter={() => handleMouseEnter(item.title)}
                    onMouseLeave={handleMouseLeave}
                    onClick={handleClose}
                    className={[
                      "cursor-pointer select-none no-underline",
                      "px-[11px] py-2",
                      "text-[12.5px] font-[600] tracking-wide",
                      "transition-all duration-200",
                      activeSection === item.title || isActivePath
                        ? "text-primary opacity-100 font-bold"
                        : "text-foreground opacity-75 hover:text-primary hover:opacity-100",
                    ].join(" ")}
                  >
                    {item.title}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop: Right actions */}
            <div
              className={[
                "hidden lg:flex items-center gap-2",
                "transition-opacity duration-200",
                "opacity-100",
              ].join(" ")}
            >
              {/* Auth */}
              <a
                href="https://e-platform.aecci.org.in/login"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-8 px-3 text-[12px] font-[400] text-foreground/65 hover:text-foreground hover:bg-black/[0.04] dark:hover:bg-white/[0.05] cursor-pointer rounded-full transition-all duration-200"
              >
                Member Login
              </a>

              <a
                href="https://e-platform.aecci.org.in/register"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-8 px-4 text-[12px] font-[500] rounded-full bg-primary text-primary-foreground hover:bg-primary/90 cursor-pointer shadow-sm transition-all duration-200"
              >
                Become Member
              </a>
            </div>
          </div>
        </div>

        {/* ─────────────────────────────────────── */}
        {/* Mega Menu Panel */}
        {/* ─────────────────────────────────────── */}
        <AnimatePresence>
          {activeSectionConfig && (
            <div
              className="absolute left-0 right-0 top-full z-50"
              onMouseEnter={handleDropdownMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {/* Panel frosted background */}
              <div
                className={[
                  "absolute inset-0",
                  "bg-white dark:bg-[#141415]",
                  "border-b border-black/[0.07] dark:border-white/[0.07]",
                ].join(" ")}
              />
              <div className="relative">
                <MegaMenu
                  section={activeSectionConfig}
                  onMouseEnter={handleDropdownMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  onClose={handleClose}
                />
              </div>
            </div>
          )}
        </AnimatePresence>
      </header>

      {/* ─────────────────────────────────────── */}
      {/* Backdrop overlay */}
      {/* ─────────────────────────────────────── */}
      <AnimatePresence>
        {isAnyOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1.0] }}
            onClick={handleClose}
            className="fixed inset-0 z-40 bg-transparent"
            style={{ top: 0 }}
          />
        )}
      </AnimatePresence>
    </>
  );
}
