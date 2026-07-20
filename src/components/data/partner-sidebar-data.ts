import {
  LayoutDashboard,
  User,
  Award,
  Lock,
  MessageSquare,
  Scale,
  Building2,
  TrendingUp,
  Users,
  Calendar,
  FileText,
  BookOpen,
  Wrench,
  Headphones,
  Settings,
} from "lucide-react";
import { type SidebarData } from "../layout/types";

export const partnerSidebarData: SidebarData = {
  navGroups: [
    {
      title: "My Business",
      items: [
        {
          title: "Dashboard",
          url: "/partner/dashboard",
          icon: LayoutDashboard,
        },
        {
          title: "My Profile",
          url: "/partner/profile",
          icon: User,
        },
        {
          title: "My Expertise",
          url: "/partner/expertise",
          icon: Award,
        },
      ],
    },
    {
      title: "Deal Room & Services",
      items: [
        {
          title: "Deal Rooms",
          url: "/partner/deal-rooms",
          icon: Lock,
        },
        {
          title: "Consultations",
          url: "/partner/consultations",
          icon: MessageSquare,
        },
        {
          title: "Legal Compliance",
          url: "/partner/legal-compliance",
          icon: Scale,
        },
        {
          title: "Trade Establishment",
          url: "/partner/trade-establishment",
          icon: Building2,
        },
        {
          title: "Opportunities",
          url: "/partner/opportunities",
          icon: TrendingUp,
        },
        {
          title: "Partner Network",
          url: "/partner/network",
          icon: Users,
        },
        {
          title: "Meetings",
          url: "/partner/meetings",
          icon: Calendar,
        },
      ],
    },
    {
      title: "Intelligence & Resources",
      items: [
        {
          title: "Reports & Insights",
          url: "/partner/reports",
          icon: FileText,
        },
        {
          title: "Communications",
          url: "/partner/communications",
          icon: MessageSquare,
        },
        {
          title: "Resources",
          url: "/partner/resources",
          icon: BookOpen,
        },
        {
          title: "AECCI Services",
          url: "/partner/services",
          icon: Wrench,
        },
      ],
    },
    {
      title: "Account & Support",
      items: [
        {
          title: "Account Settings",
          url: "/partner/settings",
          icon: Settings,
        },
        {
          title: "Support Center",
          url: "/partner/support",
          icon: Headphones,
        },
      ],
    },
  ],
};

