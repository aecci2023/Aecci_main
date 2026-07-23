import { Outlet, useLocation } from "react-router-dom";
import { getCookie } from "@/lib/cookies";
import { cn } from "@/lib/utils";
import { LayoutProvider } from "@/context/layout-provider";
import { SearchProvider } from "@/context/search-provider";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { AppPartnerSidebar } from "@/components/layout/app-partner-sidebar";
import { SkipToMain } from "@/components/skip-to-main";
import { DashboardHeader } from "@/components/layout/dashboard-header";
import { useGetPartnerProfileQuery } from "@/store/api/adminApi";
import { RoleTour } from "@/components/tour/RoleTour";

type PartnerLayoutProps = {
  children?: React.ReactNode;
};

export function PartnerLayout({ children }: PartnerLayoutProps) {
  const defaultOpen = getCookie("sidebar_state") !== "false";
  const location = useLocation();

  // Loading state gates the one-time onboarding tour until the profile query settles.
  const { isLoading } = useGetPartnerProfileQuery();

  const isOnRoomPage =
    location.pathname.includes("/waiting-room") ||
    location.pathname.includes("/live-deal-room");

  return (
    <SearchProvider>
      <LayoutProvider>
        <SidebarProvider defaultOpen={defaultOpen} className="h-svh overflow-hidden items-stretch">
          <SkipToMain />
          <AppPartnerSidebar />
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
              {/* Onboarding tour runs once (RoleTour checks user.hasCompletedTour). */}
              {!isLoading && <RoleTour role="partner" />}
            </div>
          </SidebarInset>
        </SidebarProvider>
      </LayoutProvider>
    </SearchProvider>
  );
}
