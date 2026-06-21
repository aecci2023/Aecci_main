import { useLayout } from "@/context/layout-provider";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { AppTitle } from "./app-title";
import { adminSidebarData } from "../data/admin-sidebar-data";
import { NavGroup } from "./nav-group";
import { NavUser } from "./nav-user";
import { useGetUsersQuery } from "@/store/api/adminApi";
import { useMemo } from "react";

export function AppAdminSidebar() {
  const { collapsible, variant } = useLayout();
  const { data: usersResponse } = useGetUsersQuery({});
  
  const dynamicNavGroups = useMemo(() => {
    const users = usersResponse?.data || [];
    const totalUsers = users.length;
    const businessAccounts = users.filter((u: any) => u.userType === 'business').length;
    const individualAccounts = users.filter((u: any) => u.userType === 'individual').length;
    const globalPartners = users.filter((u: any) => u.role === 'partner').length;
    const pendingVerifications = users.filter((u: any) => 
      u.kycStatus === 'pending' || u.kycStatus === 'pending_verification'
    ).length;

    // Deep copy to avoid mutating the exported constant
    const groups = JSON.parse(JSON.stringify(adminSidebarData.navGroups));
    
    // Update Network & People badges
    const networkGroup = groups.find((g: any) => g.title === "Network & People");
    if (networkGroup) {
      networkGroup.items.find((i: any) => i.title === "All Users").badge = totalUsers > 0 ? totalUsers.toString() : undefined;
      networkGroup.items.find((i: any) => i.title === "Business Accounts").badge = businessAccounts > 0 ? businessAccounts.toString() : undefined;
      networkGroup.items.find((i: any) => i.title === "Individual Accounts").badge = individualAccounts > 0 ? individualAccounts.toString() : undefined;
      networkGroup.items.find((i: any) => i.title === "Global Partners").badge = globalPartners > 0 ? globalPartners.toString() : undefined;
    }

    // Update Compliance & Approvals badges
    const complianceGroup = groups.find((g: any) => g.title === "Compliance & Approvals");
    if (complianceGroup) {
      complianceGroup.items.find((i: any) => i.title === "Pending Verifications").badge = pendingVerifications > 0 ? pendingVerifications.toString() : undefined;
    }

    // Since we lost the icons in JSON.parse, we need to map them back
    return adminSidebarData.navGroups.map((originalGroup, gIdx) => ({
      ...groups[gIdx],
      items: groups[gIdx].items.map((item: any, iIdx: number) => ({
        ...item,
        icon: originalGroup.items[iIdx].icon,
      })),
    }));
  }, [usersResponse]);

  return (
    <Sidebar collapsible={collapsible} variant={variant}>
      <SidebarHeader>
        <AppTitle />
      </SidebarHeader>
      <SidebarContent>
        {dynamicNavGroups.map((props) => (
          <NavGroup key={props.title} {...props} />
        ))}
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={adminSidebarData.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
