import {
  LayoutDashboard,
  Calendar,
  MessageSquare,
  Globe,
  FileText,
  Search,
  Store,
  Settings,
  User,
  Building2,
  ClipboardList,
  Handshake,
  BadgeCheck,
  Users,
  Headphones,
  TrendingUp,
  Receipt,
  HelpCircle,
} from "lucide-react";
import { type SidebarData } from "../layout/types";

export const importerSidebarData: SidebarData = {
  navGroups: [
    {
      title: "My Business",
      items: [
        {
          title: "Dashboard",
          url: "/importer/dashboard",
          icon: LayoutDashboard,
        },
        {
          title: "My Profile",
          url: "/importer/profile",
          icon: User,
        },
        {
          title: "My Company",
          url: "/importer/company",
          icon: Building2,
        },
        {
          title: "Sourcing Requirements",
          url: "/importer/opportunity-report",
          icon: ClipboardList,
        },
        {
          title: "Documents",
          url: "/importer/verification",
          icon: FileText,
        },
      ],
    },
    {
      title: "Deal Room",
      items: [
        {
          title: "Browse Exporters",
          url: "/importer/browse-exporters",
          icon: Users,
        },
        {
          title: "Marketplace",
          url: "/importer/marketplace",
          icon: Store,
        },
        {
          title: "Available Sessions",
          url: "/importer/my-sessions",
          icon: Calendar,
        },
        {
          title: "Meeting Requests",
          url: "/importer/waiting-room",
          icon: Handshake,
        },
        {
          title: "My Meetings",
          url: "/importer/my-meetings",
          icon: Calendar,
        },
        {
          title: "Session Summary",
          url: "/importer/session-summary",
          icon: ClipboardList,
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
          title: "Market Reports",
          url: "/importer/opportunity-report",
          icon: TrendingUp,
        },
        {
          title: "Partner Brief",
          url: "/importer/partner-brief",
          icon: BadgeCheck,
        },
      ],
    },
    {
      title: "Account",
      items: [
        {
          title: "Billing & Plans",
          url: "/importer/invoices",
          icon: Receipt,
        },
        {
          title: "Messages",
          url: "/importer/messages",
          icon: MessageSquare,
        },
        {
          title: "Settings",
          url: "/importer/settings",
          icon: Settings,
        },
        {
          title: "Help Center",
          url: "/importer/submit-questions",
          icon: HelpCircle,
        },
      ],
    },
    {
      title: "Support",
      items: [
        {
          title: "Contact Support",
          url: "/importer/submit-questions",
          icon: Headphones,
        },
      ],
    },
  ],
};
