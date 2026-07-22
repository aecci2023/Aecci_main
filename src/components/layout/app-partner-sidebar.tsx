import { useLayout } from "@/context/layout-provider";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { AppTitle } from "./app-title";
import { partnerSidebarData } from "../data/partner-sidebar-data";
import { NavGroup } from "./nav-group";
import { Lock } from "lucide-react";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

// Items that are always accessible
const UNLOCKED_URLS = ["/partner/dashboard", "/partner/profile", "/partner/expertise"];

export function AppPartnerSidebar() {
  const { collapsible, variant } = useLayout();

  // All other menus stay locked permanently for partners
  const isProfileComplete = false;

  return (
    <Sidebar collapsible={collapsible} variant={variant}>
      <SidebarHeader>
        <AppTitle />
      </SidebarHeader>
      <SidebarContent>
        {partnerSidebarData.navGroups.map((group) => {
          // Check if any items in this group should be locked
          const hasLockedItems = !isProfileComplete && group.items.some(
            (item) => !UNLOCKED_URLS.includes(item.url as string)
          );

          if (!hasLockedItems || isProfileComplete) {
            return <NavGroup key={group.title} {...group} />;
          }

          // Render group with locked items
          const unlockedItems = group.items.filter((item) => UNLOCKED_URLS.includes(item.url as string));
          const lockedItems = group.items.filter((item) => !UNLOCKED_URLS.includes(item.url as string));

          return (
            <div key={group.title}>
              {unlockedItems.length > 0 && (
                <NavGroup title={group.title} items={unlockedItems} />
              )}
              {lockedItems.length > 0 && (
                <SidebarGroup>
                  {unlockedItems.length === 0 && <SidebarGroupLabel>{group.title}</SidebarGroupLabel>}
                  <SidebarMenu>
                    {lockedItems.map((item) => (
                      <SidebarMenuItem key={item.title}>
                        <TooltipProvider delayDuration={0}>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <button className="flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-sm opacity-40 cursor-not-allowed" onClick={(e) => e.preventDefault()}>
                                <Lock className="w-4 h-4" />
                                <span className="flex-1 truncate text-left">{item.title}</span>
                              </button>
                            </TooltipTrigger>
                            <TooltipContent side="right">
                              <p className="text-xs">Complete your profile to unlock</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroup>
              )}
            </div>
          );
        })}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
