import { Outlet, useLocation } from "react-router-dom";
import { getCookie } from "@/lib/cookies";
import { cn } from "@/lib/utils";
import { LayoutProvider } from "@/context/layout-provider";
import { SearchProvider } from "@/context/search-provider";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { AppImporterSidebar } from "@/components/layout/app-importer-sidebar";
import { SkipToMain } from "@/components/skip-to-main";
import { Header } from "@/components/layout/header";
import { ProfileDropdown } from "@/components/profile-dropdown";
import { Search } from "@/components/search";
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
        <SidebarProvider defaultOpen={defaultOpen}>
          <SkipToMain />
          <AppImporterSidebar />
          <SidebarInset
            className={cn(
              "@container/content",
              "has-data-[layout=fixed]:h-svh",
              "peer-data-[variant=inset]:has-data-[layout=fixed]:h-[calc(100svh-(var(--spacing)*4))]",
            )}
          >
            {!isOnRoomPage && (
              <Header fixed>
                <div className="flex items-center space-x-2">
                  <span className="font-semibold text-sm text-muted-foreground">
                    AECCI Importer Portal
                  </span>
                </div>
                <div className="ml-auto flex items-center space-x-4">
                  <Search />
                  <ProfileDropdown />
                </div>
              </Header>
            )}
            {children ?? <Outlet />}
            <RoleTour role="importer" />
          </SidebarInset>
        </SidebarProvider>
      </LayoutProvider>
    </SearchProvider>
  );
}
