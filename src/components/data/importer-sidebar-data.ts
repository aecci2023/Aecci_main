import {
  LayoutDashboard,
  Calendar,
  MessageSquare,
  Globe,
  Clock,
  Video,
  FileText,
  HelpCircle,
  TrendingUp,
  Receipt,
  Store,
  Bell,
  Settings,
  UserCog,
  Wrench,
  Palette,
  BellRing,
} from "lucide-react";
import { type SidebarData } from "../layout/types";

export const importerSidebarData: SidebarData = {
  navGroups: [
    {
      title: "Main",
      items: [
        {
          title: "Dashboard",
          url: "/importer/dashboard",
          icon: LayoutDashboard,
        },
        {
          title: "My Sessions",
          url: "/importer/my-sessions",
          icon: Calendar,
          badge: "2",
        },
        {
          title: "Messages",
          url: "/importer/messages",
          icon: MessageSquare,
          badge: "3",
        },
      ],
    },
    {
      title: "Deal Room",
      items: [
        {
          title: "Marketplace",
          url: "/importer/marketplace",
          icon: Store,
        },
        {
          title: "Waiting Room",
          url: "/importer/waiting-room",
          icon: Clock,
        },
        {
          title: "Live Deal Room",
          url: "/importer/live-deal-room",
          icon: Video,
        },
        {
          title: "Session Summary",
          url: "/importer/session-summary",
          icon: FileText,
        },
      ],
    },
    {
      title: "Intelligence",
      items: [
        {
          title: "Country Intelligence",
          url: "/importer/intelligence",
          icon: Globe,
        },
        {
          title: "Submit Questions",
          url: "/importer/submit-questions",
          icon: HelpCircle,
        },
      ],
    },
    {
      title: "Reports & Services",
      items: [
        {
          title: "Opportunity Report",
          url: "/importer/opportunity-report",
          icon: TrendingUp,
        },
        {
          title: "Invoices & Payments",
          url: "/importer/invoices",
          icon: Receipt,
        },
      ],
    },
    {
      title: "Other",
      items: [
        {
          title: "System Alerts",
          url: "/importer/notifications",
          icon: BellRing,
        },
        {
          title: "Settings",
          icon: Settings,
          items: [
            {
              title: "Profile",
              url: "/importer/settings",
              icon: UserCog,
            },
            {
              title: "Account",
              url: "/importer/settings/account",
              icon: Wrench,
            },
            {
              title: "Appearance",
              url: "/importer/settings/appearance",
              icon: Palette,
            },
            {
              title: "Notifications",
              url: "/importer/settings/notifications",
              icon: Bell,
            },
          ],
        },
      ],
    },
  ],
};
