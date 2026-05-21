import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Sun, Moon } from "@phosphor-icons/react";
import { AuthDialog } from "@/components/auth-dialogs";
import { menuConfig } from "./menu-config";
import MegaMenu from "./MegaMenu";
import MobileMenu from "./MobileMenu";

interface NavbarProps {
  theme: "dark" | "light";
  setTheme: (t: "dark" | "light") => void;
}

export default function Navbar({ theme, setTheme }: NavbarProps) {
  const [activeSection, setActiveSection] = React.useState<string | null>(null);
  const closeTimeoutRef = React.useRef<number | null>(null);

  // Escape key closes immediately
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveSection(null);
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);

      if (closeTimeoutRef.current) {
        window.clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);

  const handleMouseEnter = (title: string) => {
    if (closeTimeoutRef.current) {
      window.clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }

    setActiveSection(title);
  };

  const handleMouseLeave = () => {
    if (closeTimeoutRef.current) {
      window.clearTimeout(closeTimeoutRef.current);
    }

    closeTimeoutRef.current = window.setTimeout(() => {
      setActiveSection(null);
    }, 150);
  };

  const handleDropdownMouseEnter = () => {
    if (closeTimeoutRef.current) {
      window.clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  };

  const handleClose = () => setActiveSection(null);

  const activeSectionConfig = menuConfig.find(
    (item) => item.title === activeSection
  );

  const isAnyOpen = !!activeSectionConfig;

  return (
    <>
      <header className="sticky top-0 z-50 w-full">

        {/* ───────────────────────────────────────────── */}
        {/* Desktop Top Brand Strip */}
        {/* Hidden on Mobile */}
        {/* ───────────────────────────────────────────── */}
        <div
          className={[
            "relative hidden md:block w-full",
            "bg-[rgba(255,255,255,0.85)] dark:bg-[rgba(22,22,23,0.90)]",
            "backdrop-blur-2xl",
            "border-b border-black/[0.06] dark:border-white/[0.06]",
          ].join(" ")}
        >
          <div className="mx-auto flex h-[52px] max-w-7xl items-center justify-center px-4 md:px-6">

            {/* Centered brand group */}
            <a
              href="#hero"
              onClick={handleClose}
              className="flex items-center gap-2 group"
            >

              {/* Left English Logo */}
              <img
                src="/left_logo.png"
                alt="Asian Exporters' Chamber Of Commerce and Industry"
                className="h-[22px] w-auto object-contain"
              />

              {/* Center Main Logo */}
              <img
                src="/aecci-logo.png"
                alt="AECCI Logo"
                className="h-[42px] w-auto object-contain transition-transform duration-200 group-hover:scale-105"
              />

              {/* Right Hindi Logo */}
              <img
                src="/right_logo.png"
                alt="एशियन एक्सपोर्टर्स चैंबर ऑफ कॉमर्स एंड इंडस्ट्री"
                className="h-[22px] w-auto object-contain"
              />
            </a>
          </div>
        </div>

        {/* ───────────────────────────────────────────── */}
        {/* Main Navigation Row */}
        {/* ───────────────────────────────────────────── */}
        <div
          className={[
            "relative w-full",
            "bg-[rgba(255,255,255,0.72)] dark:bg-[rgba(22,22,23,0.80)]",
            "backdrop-blur-2xl",
            !isAnyOpen
              ? "border-b border-black/[0.08] dark:border-white/[0.08]"
              : "",
          ].join(" ")}
        >
          <div className="mx-auto flex h-[64px] md:h-[42px] max-w-7xl items-center justify-between px-4 md:px-6">

            {/* ───────────────────────────────────────── */}
            {/* Mobile Single Logo */}
            {/* ───────────────────────────────────────── */}
            <a
              href="#hero"
              onClick={handleClose}
              className="flex md:hidden items-center group shrink-0"
            >
              <img
                src="/aecci-logo.png"
                alt="AECCI"
                className="h-[42px] w-auto object-contain"
              />
            </a>

            {/* ───────────────────────────────────────── */}
            {/* Desktop Navigation */}
            {/* ───────────────────────────────────────── */}
            <nav
              className="hidden md:flex items-center justify-center gap-0 flex-1"
              onMouseLeave={handleMouseLeave}
            >
              {menuConfig.map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  onMouseEnter={() => handleMouseEnter(item.title)}
                  onMouseLeave={handleMouseLeave}
                  onClick={handleClose}
                  className={[
                    "cursor-pointer select-none px-3.5 py-2",
                    "text-[13px] font-medium tracking-wide",
                    "transition-all duration-200",
                    isAnyOpen
                      ? activeSection === item.title
                        ? "text-primary opacity-100"
                        : "text-foreground opacity-40 hover:opacity-70"
                      : "text-foreground opacity-80 hover:text-primary hover:opacity-100",
                  ].join(" ")}
                >
                  {item.title}
                </a>
              ))}
            </nav>

            {/* ───────────────────────────────────────── */}
            {/* Right Actions */}
            {/* ───────────────────────────────────────── */}
            <div className="flex items-center gap-2.5">

              {/* Theme Toggle */}
              <button
                onClick={() =>
                  setTheme(theme === "dark" ? "light" : "dark")
                }
                className={[
                  "hidden sm:flex size-8 items-center justify-center rounded-full",
                  "cursor-pointer text-foreground transition-all duration-200",
                  "hover:bg-foreground/5",
                  isAnyOpen
                    ? "opacity-40"
                    : "opacity-70 hover:opacity-100",
                ].join(" ")}
                title="Toggle Theme"
              >
                {theme === "dark" ? (
                  <Sun className="size-4" />
                ) : (
                  <Moon className="size-4" />
                )}
              </button>

              {/* Auth Buttons */}
              <div
                className={[
                  "hidden sm:flex items-center gap-2 transition-opacity duration-200",
                  isAnyOpen ? "opacity-40" : "opacity-100",
                ].join(" ")}
              >
                <AuthDialog
                  triggerText="Member Login"
                  defaultTab="login"
                  variant="ghost"
                  className="h-8 cursor-pointer px-3 text-[12px] font-medium text-foreground/80 transition-opacity hover:text-foreground hover:opacity-60"
                />

                <AuthDialog
                  triggerText="Become Member"
                  defaultTab="register"
                  variant="default"
                  className="h-8 cursor-pointer rounded-full bg-primary px-4 text-[12px] font-semibold text-primary-foreground shadow-sm hover:bg-primary/90"
                />
              </div>

              {/* Mobile Menu */}
              <MobileMenu
                theme={theme}
                setTheme={setTheme}
              />
            </div>
          </div>
        </div>

        {/* ───────────────────────────────────────────── */}
        {/* Mega Menu Dropdown */}
        {/* ───────────────────────────────────────────── */}
        <AnimatePresence>
          {activeSectionConfig && (
            <div
              className="absolute left-0 right-0 top-[64px] md:top-[94px] z-50"
              onMouseEnter={handleDropdownMouseEnter}
              onMouseLeave={handleMouseLeave}
            >

              {/* Frosted Background */}
              <div className="absolute inset-0 border-b border-black/[0.08] bg-[rgba(255,255,255,0.85)] backdrop-blur-2xl dark:border-white/[0.08] dark:bg-[rgba(22,22,23,0.90)]" />

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

      {/* ───────────────────────────────────────────── */}
      {/* Background Overlay */}
      {/* ───────────────────────────────────────────── */}
      <AnimatePresence>
        {isAnyOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.35,
              ease: [0.25, 0.1, 0.25, 1.0],
            }}
            onClick={handleClose}
            className="fixed inset-0 z-40 bg-black/[0.12] backdrop-blur-md dark:bg-black/[0.30]"
            style={{ top: 0 }}
          />
        )}
      </AnimatePresence>
    </>
  );
}