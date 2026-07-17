import { User } from "@phosphor-icons/react";
import { AnimatePresence, motion } from "framer-motion";
import * as React from "react";

import { Link, useLocation } from "react-router-dom";
import MegaMenu from "./MegaMenu";
import { menuConfig } from "./menu-config";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const location = useLocation();
  const [activeSection, setActiveSection] = React.useState<string | null>(null);
  const [brandVisible, setBrandVisible] = React.useState(true);


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
    };
  }, []);

  const handleClose = () => setActiveSection(null);

  const activeSectionConfig = menuConfig.find((s) => s.title === activeSection);
  const isAnyOpen = !!activeSectionConfig;

  // Shared frosted glass bg classes
  const glassBg = brandVisible
    ? "bg-[rgba(255,255,255,0.82)] dark:bg-[rgba(18,18,19,0.88)] backdrop-blur-2xl"
    : "bg-white dark:bg-[#121213] shadow-sm";

  return (
    <>
      <header className="sticky top-0 z-50 w-full transition-colors duration-300">
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
          <div className="mx-auto flex h-[84px] lg:h-[70px] w-full max-w-[95%] 2xl:max-w-[1600px] items-center justify-between px-4 lg:px-6 relative">
            {/* Mobile: Hamburger */}
            <div className="flex lg:hidden items-center w-1/3">
              <MobileMenu />
            </div>

            {/* Mobile: Logo center */}
            <div className="flex lg:hidden items-center justify-center w-1/3">
              <Link to="/" onClick={handleClose} className="group">
                <img
                  src="/aecci-logo-horizontal.png"
                  alt="AECCI"
                  className="h-[60px] sm:h-[68px] w-auto object-contain"
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

            {/* Desktop: Logo Left */}
            <div className="hidden lg:flex items-center flex-none ">
              <Link to="/" onClick={handleClose} className="group">
                <img
                  src="/aecci-logo-horizontal.png"
                  alt="AECCI"
                  className="h-[60px] xl:h-[70px] w-auto object-contain"
                />
              </Link>
            </div>

            {/* Desktop: Nav links centered */}
            <nav className="hidden lg:flex items-center justify-center gap-0 flex-1">
              {menuConfig.map((item, idx) => {
                const isActivePath = location.pathname.startsWith(item.href);

                return (
                  <Link
                    key={idx}
                    to={item.href}
                    onClick={(e) => {
                      if (item.hasDropdown) {
                        e.preventDefault();
                        if (activeSection === item.title) {
                          handleClose();
                        } else {
                          setActiveSection(item.title);
                        }
                      } else {
                        handleClose();
                      }
                    }}
                    className={[
                      "cursor-pointer select-none no-underline",
                      "px-2 xl:px-3 py-2.5 whitespace-nowrap",
                      "text-[14px] font-bold tracking-wide",
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
                "hidden lg:flex items-center justify-end flex-none gap-2",
                "transition-opacity duration-200",
                "opacity-100",
              ].join(" ")}
            >
              {/* Auth */}
              <Link
                to="/login"
                onClick={handleClose}
                className="inline-flex items-center justify-center h-10 px-4 text-[14px] font-[500] text-foreground/75 hover:text-foreground hover:bg-black/[0.04] dark:hover:bg-white/[0.05] cursor-pointer rounded-full transition-all duration-200"
              >
                Login
              </Link>

              <Link
                to="/signup"
                onClick={handleClose}
                className="inline-flex items-center justify-center h-10 px-6 text-[14px] font-[600] rounded-full bg-primary text-primary-foreground hover:bg-primary/90 cursor-pointer shadow-sm transition-all duration-200"
              >
                Join Now
              </Link>
            </div>
          </div>
        </div>

        {/* ─────────────────────────────────────── */}
        {/* Mega Menu Panel */}
        {/* ─────────────────────────────────────── */}
        <AnimatePresence>
          {activeSectionConfig && (
            <div className="absolute left-0 right-0 top-full z-50">
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
                  onClose={handleClose}
                  onMouseEnter={() => {}}
                  onMouseLeave={() => {}}
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
