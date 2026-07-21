import { Outlet, useLocation } from "react-router-dom";
import { getCookie } from "@/lib/cookies";
import { cn } from "@/lib/utils";
import { LayoutProvider } from "@/context/layout-provider";
import { SearchProvider } from "@/context/search-provider";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { AppAgentSidebar } from "@/components/layout/app-agent-sidebar";
import { SkipToMain } from "@/components/skip-to-main";
import { DashboardHeader } from "@/components/layout/dashboard-header";
import { RoleTour } from "@/components/tour/RoleTour";

type AgentLayoutProps = {
  children?: React.ReactNode;
};

export function AgentLayout({ children }: AgentLayoutProps) {
  const defaultOpen = getCookie("sidebar_state") !== "false";
  const location = useLocation();

  const isOnRoomPage =
    location.pathname.includes("/waiting-room") ||
    location.pathname.includes("/live-deal-room");

  return (
    <SearchProvider>
      <LayoutProvider>
        <SidebarProvider defaultOpen={defaultOpen} className="h-svh overflow-hidden items-stretch">
          <SkipToMain />
          <AppAgentSidebar />
          <SidebarInset
            className={cn(
              "@container/content",
              "min-w-0 flex flex-col",
            )}
          >
            {!isOnRoomPage && (
              <DashboardHeader />
            )}
            <div className="flex-1 overflow-y-auto relative">
              {children ?? <Outlet />}
              <RoleTour role="agent" />
            </div>
          </SidebarInset>
        </SidebarProvider>
      </LayoutProvider>
    </SearchProvider>
  );
}
