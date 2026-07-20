import { Outlet, useLocation } from "react-router-dom";

import { getCookie } from "@/lib/cookies";
import { LayoutProvider } from "@/context/layout-provider";
import { SearchProvider } from "@/context/search-provider";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppImporterSidebar } from "@/components/layout/app-importer-sidebar";
import { DashboardHeader } from "@/components/layout/dashboard-header";
import { SkipToMain } from "@/components/skip-to-main";
import { RoleTour } from "@/components/tour/RoleTour";


type ImporterLayoutProps = {
  children?: React.ReactNode;
};

export function ImporterLayout({ children }: ImporterLayoutProps) {
  const defaultOpen = getCookie("sidebar_state") !== "false";
  const location = useLocation();

  const isOnRoomPage =
    location.pathname.includes("/waiting-room") ||
    location.pathname.includes("/live-deal-room");



  return (
    <SearchProvider>
      <LayoutProvider>
        <SidebarProvider 
          defaultOpen={defaultOpen}
          style={{ "--sidebar": "#061A33" } as React.CSSProperties}
        >
          <SkipToMain />
          {/* App-shell: full viewport, sidebar fixed left, content scrolls */}
          <div className="flex h-screen w-full overflow-hidden bg-[#061A33]">
            
            {/* SIDEBAR — fixed height, scrolls internally if needed */}
            <div className="w-[240px] shrink-0 h-full overflow-y-auto bg-[#061A33]">
              <AppImporterSidebar />
            </div>

            {/* MAIN CONTENT AREA — takes remaining width */}
            <div className="flex flex-1 flex-col min-w-0 h-full bg-white relative">
              {!isOnRoomPage && (
                <DashboardHeader />
              )}
              <div className="flex-1 overflow-y-auto relative">
                {children ?? <Outlet />}
                <RoleTour role="importer" />
              </div>
            </div>

          </div>
        </SidebarProvider>
      </LayoutProvider>
    </SearchProvider>
  );
}
