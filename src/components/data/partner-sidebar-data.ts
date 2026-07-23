import {
  LayoutDashboard,
  User,
  Award,
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
  Briefcase,
  BarChart3,
  LifeBuoy,
  Handshake,
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
      title: "Workspace",
      items: [
        {
          title: "Deal Room & Services",
          icon: Briefcase,
          items: [
            {
              title: "Deal Rooms",
              url: "/partner/deal-rooms",
              icon: Handshake,
            },
            {
              title: "Consultations",
              url: "/partner/consultations",
              icon: MessageSquare,
              locked: true,
            },
            {
              title: "Legal Compliance",
              url: "/partner/legal-compliance",
              icon: Scale,
              locked: true,
            },
            {
              title: "Trade Establishment",
              url: "/partner/trade-establishment",
              icon: Building2,
              locked: true,
            },
            {
              title: "Opportunities",
              url: "/partner/opportunities",
              icon: TrendingUp,
              locked: true,
            },
            {
              title: "Partner Network",
              url: "/partner/network",
              icon: Users,
              locked: true,
            },
            {
              title: "Meetings",
              url: "/partner/meetings",
              icon: Calendar,
              locked: true,
            },
          ],
        },
        {
          title: "Intelligence & Resources",
          icon: BarChart3,
          items: [
            {
              title: "Reports & Insights",
              url: "/partner/reports",
              icon: FileText,
              locked: true,
            },
            {
              title: "Communications",
              url: "/partner/communications",
              icon: MessageSquare,
              locked: true,
            },
            {
              title: "Resources",
              url: "/partner/resources",
              icon: BookOpen,
              locked: true,
            },
            {
              title: "AECCI Services",
              url: "/partner/services",
              icon: Wrench,
              locked: true,
            },
          ],
        },
        {
          title: "Account & Support",
          icon: LifeBuoy,
          items: [
            {
              title: "Account Settings",
              url: "/partner/settings",
              icon: Settings,
              locked: true,
            },
            {
              title: "Support Center",
              url: "/partner/support",
              icon: Headphones,
              locked: true,
            },
          ],
        },
      ],
    },
  ],
};
