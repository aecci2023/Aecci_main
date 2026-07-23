import { useLayout } from "@/context/layout-provider";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { AppTitle } from "./app-title";
import { agentSidebarData } from "../data/agent-sidebar-data";
import { NavGroup } from "./nav-group";

export function AppAgentSidebar() {
  const { collapsible, variant } = useLayout();

  return (
    <Sidebar
      collapsible={collapsible || "offcanvas"}
      variant={variant}
      className="[&_[data-sidebar=menu-button][data-active=true]]:bg-[#D4A574] [&_[data-sidebar=menu-button][data-active=true]]:font-semibold [&_[data-sidebar=menu-button][data-active=true]]:text-[#061A33] [&_[data-sidebar=menu-button][data-active=true]:hover]:bg-[#C4935F] [&_[data-sidebar=menu-button][data-active=true]:hover]:text-[#061A33] [&_[data-sidebar=menu-button][data-active=true]_svg]:text-[#061A33] [&_[data-sidebar=menu-button]_svg]:size-5"
    >
      <SidebarHeader className="border-b border-white/10 px-3 py-4">
        <AppTitle />
      </SidebarHeader>
      <SidebarContent className="min-h-0 flex-1 overflow-x-hidden overflow-y-auto py-4 pl-3 pr-3">
        {agentSidebarData.navGroups.map((props) => (
          <NavGroup key={props.title} {...props} />
        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
