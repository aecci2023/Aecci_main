import { useEffect } from "react";
import { useRoutes, useLocation } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/portal/Footer";
import { routes } from "@/router";
import { ActiveThemeProvider } from "@/components/themes/active-theme";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useNotificationsSocket } from "@/hooks/useNotificationsSocket";
import { ScrollToTop } from "@/components/ui/ScrollToTop";

export default function App() {
  useNotificationsSocket();
  const element = useRoutes(routes);
  const location = useLocation();
  const isSignupPage = location.pathname.startsWith("/signup") || location.pathname.startsWith("/interest-form");
  const isDashboardPage = location.pathname.startsWith("/dashboard");
  const isLoginPage = location.pathname.startsWith("/login");
  const isAdminPage = location.pathname.startsWith("/admin");
  const isPartnerPage = location.pathname.startsWith("/partner");
  const isImporterPage = location.pathname.startsWith("/importer");
  const isRegisterPage = location.pathname.startsWith("/register");
  const isAgentPage = location.pathname.startsWith("/agent");
  const hideChrome =
    isSignupPage ||
    isDashboardPage ||
    isLoginPage ||
    isAdminPage ||
    isPartnerPage ||
    isImporterPage ||
    isRegisterPage ||
    isAgentPage;

  useEffect(() => {
    if (hideChrome) {
      document.body.classList.add("hide-collect-chat");
    } else {
      document.body.classList.remove("hide-collect-chat");
    }
  }, [hideChrome]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <ActiveThemeProvider>
      <TooltipProvider>
        <div className="min-h-screen flex flex-col bg-background text-foreground font-body transition-colors duration-300 relative">
          <Toaster position="top-right" />

          {/* Atmospheric Theme Gradient Layer (Dark mode only) */}
          <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-primary/5 opacity-0 dark:opacity-100 -z-10 pointer-events-none transition-opacity duration-500 fixed" />

          {/* Subtle Grid Dot Accent */}
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff08_1px,transparent_1px)] bg-[size:32px_32px] -z-10 pointer-events-none fixed" />

          {!hideChrome && <Navbar />}

          <div className="flex-1">{element}</div>
          {!hideChrome && <Footer />}
          
          <ScrollToTop />
        </div>
      </TooltipProvider>
    </ActiveThemeProvider>
  );
}
