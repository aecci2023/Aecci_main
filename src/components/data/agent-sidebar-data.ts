import {
  LayoutDashboard,
  User,
  Globe,
  Users,
  Briefcase,
  Handshake,
  Calendar,
  UserPlus,
  MessageSquare,
  FileText,
  Building,
  HelpCircle,
  Settings
} from "lucide-react";
import { type SidebarData } from "../layout/types";

export const agentSidebarData: SidebarData = {
  navGroups: [
    {
      title: "My Business",
      items: [
        {
          title: "Dashboard",
          url: "/agent/dashboard",
          icon: LayoutDashboard,
        },
        {
          title: "My Profile",
          url: "/agent/profile",
          icon: User,
        },
        {
          title: "Represented Markets",
          url: "/agent/represented-markets",
          icon: Globe,
        },
      ],
    },
    {
      title: "Deal Room",
      items: [
        {
          title: "Business Connections",
          url: "/agent/business-connections",
          icon: Users,
        },
        {
          title: "Opportunities",
          url: "/agent/opportunities",
          icon: Briefcase,
        },
        {
          title: "Deal Room",
          url: "/agent/deal-room",
          icon: Handshake,
        },
        {
          title: "Meetings",
          url: "/agent/meetings",
          icon: Calendar,
        },
      ],
    },
    {
      title: "Network & Communication",
      items: [
        {
          title: "Referrals",
          url: "/agent/referrals",
          icon: UserPlus,
        },
        {
          title: "Communications",
          url: "/agent/communications",
          icon: MessageSquare,
        },
      ],
    },
    {
      title: "Intelligence & Services",
      items: [
        {
          title: "Resources & Reports",
          url: "/agent/resources",
          icon: FileText,
        },
        {
          title: "AECCI Services",
          url: "/agent/aecci-services",
          icon: Building,
        },
      ],
    },
    {
      title: "Account & Support",
      items: [
        {
          title: "Account Settings",
          url: "/agent/settings",
          icon: Settings,
        },
        {
          title: "Support Center",
          url: "/agent/support",
          icon: HelpCircle,
        },
      ],
    },
  ],
};
