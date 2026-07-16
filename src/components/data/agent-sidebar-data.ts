import {
  LayoutDashboard,
  MessageSquare,
  Settings,
  UserCog,
  Wrench,
  Palette,
  Bell,
  BellRing,
} from "lucide-react";
import { type SidebarData } from "../layout/types";

export const agentSidebarData: SidebarData = {
  navGroups: [
    {
      title: "Main",
      items: [
        {
          title: "Dashboard",
          url: "/agent/dashboard",
          icon: LayoutDashboard,
        },
        {
          title: "Messages",
          url: "/agent/messages",
          icon: MessageSquare,
        },
      ],
    },
    {
      title: "Other",
      items: [
        {
          title: "System Alerts",
          url: "/agent/notifications",
          icon: BellRing,
        },
        {
          title: "Settings",
          icon: Settings,
          items: [
            {
              title: "Profile",
              url: "/agent/settings",
              icon: UserCog,
            },
            {
              title: "Account",
              url: "/agent/settings/account",
              icon: Wrench,
            },
            {
              title: "Appearance",
              url: "/agent/settings/appearance",
              icon: Palette,
            },
            {
              title: "Notifications",
              url: "/agent/settings/notifications",
              icon: Bell,
            },
          ],
        },
      ],
    },
  ],
};
