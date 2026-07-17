import {
  LayoutDashboard,
  User,
  Building2,
  ShoppingCart,
  FileText,
  Search,
  Store,
  CalendarClock,
  CalendarCheck,
  Video,
  ClipboardList,
  Globe,
  BarChart2,
  Handshake,
  CreditCard,
  MessageSquare,
  Settings,
  HelpCircle,
  PhoneCall,
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
          url: "/importer/sourcing-requirements",
          icon: ShoppingCart,
        },
        {
          title: "Documents",
          url: "/importer/documents",
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
          icon: Search,
        },
        {
          title: "Marketplace",
          url: "/importer/marketplace",
          icon: Store,
        },
        {
          title: "Available Sessions",
          url: "/importer/available-sessions",
          icon: CalendarClock,
        },
        {
          title: "Meeting Requests",
          url: "/importer/meeting-requests",
          icon: CalendarCheck,
        },
        {
          title: "My Meetings",
          url: "/importer/my-meetings",
          icon: Video,
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
          url: "/importer/market-reports",
          icon: BarChart2,
        },
        {
          title: "Partner Brief",
          url: "/importer/partner-brief",
          icon: Handshake,
        },
      ],
    },
    {
      title: "Account",
      items: [
        {
          title: "Billing & Plans",
          url: "/importer/billing",
          icon: CreditCard,
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
          url: "/importer/help",
          icon: HelpCircle,
        },
      ],
    },
    {
      title: "Support",
      items: [
        {
          title: "Contact Support",
          url: "/importer/contact-support",
          icon: PhoneCall,
        },
      ],
    },
  ],
};
