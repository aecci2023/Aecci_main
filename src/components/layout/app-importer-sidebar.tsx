import React from "react";
import { useLayout } from "@/context/layout-provider";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { AppTitle } from "./app-title";
import { importerSidebarData } from "../data/importer-sidebar-data";
import { NavGroup } from "./nav-group";

export function AppImporterSidebar() {
  const { collapsible, variant } = useLayout();
  return (
    <Sidebar
      collapsible={collapsible}
      variant={variant}
      style={
        {
          "--sidebar": "#010B1F",
          "--sidebar-foreground": "#e2e8f0",
          "--sidebar-accent": "#012BAC",
          "--sidebar-accent-foreground": "#ffffff",
          "--sidebar-border": "rgba(255,255,255,0.08)",
          "--sidebar-primary": "#012BAC",
          "--sidebar-primary-foreground": "#ffffff",
          "--sidebar-ring": "#012BAC",
        } as React.CSSProperties
      }
    >
      <SidebarHeader>
        <AppTitle />
      </SidebarHeader>
      <SidebarContent>
        {importerSidebarData.navGroups.map((props) => (
          <NavGroup key={props.title} {...props} />
        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
