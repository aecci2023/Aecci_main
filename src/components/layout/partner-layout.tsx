import { Outlet, Navigate, useLocation } from "react-router-dom";
import { getCookie } from "@/lib/cookies";
import { cn } from "@/lib/utils";
import { LayoutProvider } from "@/context/layout-provider";
import { SearchProvider } from "@/context/search-provider";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { AppPartnerSidebar } from "@/components/layout/app-partner-sidebar";
import { SkipToMain } from "@/components/skip-to-main";
import { Header } from "@/components/layout/header";
import { ProfileDropdown } from "@/components/profile-dropdown";
import { Search } from "@/components/search";
import { useGetPartnerProfileQuery } from "@/store/api/adminApi";

type PartnerLayoutProps = {
  children?: React.ReactNode;
};

export function PartnerLayout({ children }: PartnerLayoutProps) {
  const defaultOpen = getCookie("sidebar_state") !== "false";
  const location = useLocation();

  const { data: profileData, isLoading } = useGetPartnerProfileQuery();
  const partnerProfile = profileData?.data;

  // If profile is loaded and setup is incomplete, force partner to dashboard setup page
  const needsSetup =
    !isLoading &&
    partnerProfile &&
    (!partnerProfile.bio || !partnerProfile.signedAgreement);
  const isOnDashboard =
    location.pathname === "/partner/dashboard" ||
    location.pathname === "/partner/dashboard/";

  if (needsSetup && !isOnDashboard) {
    return <Navigate to="/partner/dashboard" replace />;
  }

  return (
    <SearchProvider>
      <LayoutProvider>
        <SidebarProvider defaultOpen={defaultOpen}>
          <SkipToMain />
          <AppPartnerSidebar />
          <SidebarInset
            className={cn(
              "@container/content",
              "has-data-[layout=fixed]:h-svh",
              "peer-data-[variant=inset]:has-data-[layout=fixed]:h-[calc(100svh-(var(--spacing)*4))]",
            )}
          >
            <Header fixed>
              <div className="flex items-center space-x-2">
                <span className="font-semibold text-sm text-muted-foreground">
                  AECCI Partner Portal
                </span>
              </div>
              <div className="ml-auto flex items-center space-x-4">
                <Search />
                <ProfileDropdown />
              </div>
            </Header>
            {children ?? <Outlet />}
          </SidebarInset>
        </SidebarProvider>
      </LayoutProvider>
    </SearchProvider>
  );
}
