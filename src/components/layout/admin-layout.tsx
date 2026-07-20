import { Outlet } from "react-router-dom";
import { getCookie } from "@/lib/cookies";
import { cn } from "@/lib/utils";
import { LayoutProvider } from "@/context/layout-provider";
import { SearchProvider } from "@/context/search-provider";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { AppAdminSidebar } from "@/components/layout/app-admin-sidebar";
import { SkipToMain } from "@/components/skip-to-main";
import { DashboardHeader } from "@/components/layout/dashboard-header";
import { RoleTour } from "@/components/tour/RoleTour";

type AdminLayoutProps = {
  children?: React.ReactNode;
};

export function AdminLayout({ children }: AdminLayoutProps) {
  const defaultOpen = getCookie("sidebar_state") !== "false";
  return (
    <SearchProvider>
      <LayoutProvider>
        <SidebarProvider defaultOpen={defaultOpen} className="h-svh overflow-hidden items-stretch">
          <SkipToMain />
          <AppAdminSidebar />
          <SidebarInset
            className={cn(
              "@container/content",
              "min-w-0 flex flex-col",
            )}
          >
            <DashboardHeader />
            <div className="flex-1 overflow-y-auto relative">
              {children ?? <Outlet />}
              <RoleTour role="admin" />
            </div>
          </SidebarInset>
        </SidebarProvider>
      </LayoutProvider>
    </SearchProvider>
  );
}
