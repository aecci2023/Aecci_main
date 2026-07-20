import type React from "react";
import { Outlet } from "react-router-dom";
import { getCookie } from "@/lib/cookies";
import { cn } from "@/lib/utils";
import { LayoutProvider } from "@/context/layout-provider";
import { SearchProvider } from "@/context/search-provider";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { AppExporterSidebar } from "@/components/layout/app-exporter-sidebar";
import { DashboardHeader } from "@/components/layout/dashboard-header";
import { SkipToMain } from "@/components/skip-to-main";
import { RoleTour } from "@/components/tour/RoleTour";

type ExporterLayoutProps = {
  children?: React.ReactNode;
};

export function ExporterLayout({ children }: ExporterLayoutProps) {
  const defaultOpen = getCookie("sidebar_state") !== "false";
  return (
    <SearchProvider>
      <LayoutProvider>
        <SidebarProvider
          defaultOpen={defaultOpen}
          className="h-svh overflow-hidden items-stretch"
          style={{ "--sidebar-width": "256px" } as React.CSSProperties}
        >
          <SkipToMain />
          <AppExporterSidebar />
          <SidebarInset
            className={cn(
              "@container/content",
              "min-w-0 flex flex-col",
            )}
          >
            <DashboardHeader />
            <div className="flex-1 overflow-y-auto relative">
              {children ?? <Outlet />}
              <RoleTour role="exporter" />
            </div>
          </SidebarInset>
        </SidebarProvider>
      </LayoutProvider>
    </SearchProvider>
  );
}
