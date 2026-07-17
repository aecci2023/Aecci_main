import {
  LayoutDashboard,
  Calendar,
  MessageSquare,
  Globe,
  FileText,
  HelpCircle,
  TrendingUp,
  Receipt,
  Store,
  Settings,
  User,
  Building2,
  ClipboardList,
  CircleDollarSign,
  Handshake,
  BadgeCheck,
} from "lucide-react";
import { type SidebarData } from "../layout/types";

export const sidebarData: SidebarData = {
  navGroups: [
    {
      title: "",
      items: [
        {
          title: "Dashboard",
          url: "/dashboard",
          icon: LayoutDashboard,
        },
      ],
    },
    {
      title: "My Business",
      items: [
        {
          title: "My Profile",
          url: "/dashboard/settings",
          icon: User,
        },
        {
          title: "My Company",
          url: "/dashboard/settings/account",
          icon: Building2,
        },
        {
          title: "My Requirements",
          url: "/dashboard/opportunity-report",
          icon: ClipboardList,
          badge: "2",
        },
        {
          title: "Documents",
          url: "/dashboard/verification",
          icon: FileText,
        },
      ],
    },
    {
      title: "Deal Room",
      items: [
        {
          title: "Marketplace",
          url: "/dashboard/marketplace",
          icon: Store,
        },
        {
          title: "Browse Countries",
          url: "/dashboard/intelligence",
          icon: Globe,
        },
        {
          title: "Sessions",
          url: "/dashboard/my-sessions",
          icon: Calendar,
        },
        {
          title: "My Meetings",
          url: "/dashboard/my-sessions",
          icon: Calendar,
          badge: "3",
        },
        {
          title: "Meeting Requests",
          url: "/dashboard/waiting-room",
          icon: Handshake,
          badge: "1",
        },
        {
          title: "Session Summary",
          url: "/dashboard/session-summary",
          icon: FileText,
        },
      ],
    },
    {
      title: "Intelligence",
      items: [
        {
          title: "Country Intelligence",
          url: "/dashboard/intelligence",
          icon: Globe,
        },
        {
          title: "Market Reports",
          url: "/dashboard/opportunity-report",
          icon: TrendingUp,
        },
        {
          title: "Partner Brief",
          url: "/dashboard/partner-brief",
          icon: BadgeCheck,
        },
      ],
    },
    {
      title: "Account",
      items: [
        {
          title: "Billing & Plans",
          url: "/dashboard/invoices",
          icon: Receipt,
        },
        {
          title: "Messages",
          url: "/dashboard/messages",
          icon: MessageSquare,
          badge: "3",
        },
        {
          title: "Settings",
          url: "/dashboard/settings",
          icon: Settings,
        },
        {
          title: "Help Center",
          url: "/dashboard/submit-questions",
          icon: HelpCircle,
        },
        {
          title: "Payments",
          url: "/dashboard/payment",
          icon: CircleDollarSign,
        },
      ],
    },
  ],
};
