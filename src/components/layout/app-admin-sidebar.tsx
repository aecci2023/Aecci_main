import { useLayout } from "@/context/layout-provider";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { AppTitle } from "./app-title";
import { adminSidebarData } from "../data/admin-sidebar-data";
import { NavGroup } from "./nav-group";
import { useGetUsersQuery } from "@/store/api/adminApi";
import { useGetAllInterestsQuery } from "@/store/api/interestApi";
import { useMemo } from "react";

export function AppAdminSidebar() {
  const { collapsible, variant } = useLayout();
  const { data: usersResponse } = useGetUsersQuery({});
  const { data: interestsResponse } = useGetAllInterestsQuery();

  const dynamicNavGroups = useMemo(() => {
    const users = usersResponse?.data || [];
    const interests = interestsResponse?.data || [];
    const totalUsers = users.filter((u: any) => u.role !== "admin").length;
    const businessAccounts = users.filter(
      (u: any) => u.userType === "business" && u.role === "user",
    ).length;
    const individualAccounts = users.filter(
      (u: any) => u.userType === "individual" && u.role === "user",
    ).length;
    const globalPartners = users.filter(
      (u: any) => u.role === "partner",
    ).length;
    const pendingVerifications = users.filter(
      (u: any) =>
        u.verificationStatus === "pending" || u.verificationStatus === "pending_verification",
    ).length;
    const pendingInterests = interests.filter(
      (i: any) => i.status === "pending" || !i.status
    ).length;

    // Deep copy to avoid mutating the exported constant
    const groups = JSON.parse(JSON.stringify(adminSidebarData.navGroups));

    // Update Network & People badges
    const networkGroup = groups.find(
      (g: any) => g.title === "Network & People",
    );
    if (networkGroup) {
      networkGroup.items.find((i: any) => i.title === "All Users").badge =
        totalUsers > 0 ? totalUsers.toString() : undefined;
      networkGroup.items.find(
        (i: any) => i.title === "Business Accounts",
      ).badge = businessAccounts > 0 ? businessAccounts.toString() : undefined;
      networkGroup.items.find(
        (i: any) => i.title === "Individual Accounts",
      ).badge =
        individualAccounts > 0 ? individualAccounts.toString() : undefined;
      networkGroup.items.find((i: any) => i.title === "Global Partners").badge =
        globalPartners > 0 ? globalPartners.toString() : undefined;
    }

    // Update Compliance & Approvals badges
    const complianceGroup = groups.find(
      (g: any) => g.title === "Compliance & Approvals",
    );
    if (complianceGroup) {
      const interestsItem = complianceGroup.items.find((i: any) => i.title === "Interests");
      if (interestsItem) {
        interestsItem.badge = pendingInterests > 0 ? pendingInterests.toString() : undefined;
      }
      const pendingVerificationsItem = complianceGroup.items.find((i: any) => i.title === "Pending Verifications");
      if (pendingVerificationsItem) {
        pendingVerificationsItem.badge = pendingVerifications > 0 ? pendingVerifications.toString() : undefined;
      }
    }

    // Since we lost the icons in JSON.parse, we need to map them back
    return adminSidebarData.navGroups.map((originalGroup, gIdx) => ({
      ...groups[gIdx],
      items: groups[gIdx].items.map((item: any, iIdx: number) => ({
        ...item,
        icon: originalGroup.items[iIdx].icon,
        items: item.items
          ? item.items.map((subItem: any, subIdx: number) => ({
              ...subItem,
              icon: (originalGroup.items[iIdx] as any).items?.[subIdx]?.icon,
            }))
          : undefined,
      })),
    }));
  }, [usersResponse, interestsResponse]);

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
      <SidebarRail />
    </Sidebar>
  );
}
