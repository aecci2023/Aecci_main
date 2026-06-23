import {
  LayoutDashboard,
  Calendar,
  MessageSquare,
  Globe,
  Clock,
  Video,
  FileText,
  Users,
  HelpCircle,
  TrendingUp,
  Briefcase,
  Receipt,
  Store,
} from "lucide-react";
import { type SidebarData } from "../layout/types";

export const sidebarData: SidebarData = {
  user: {
    name: "AECCI Member",
    email: "member@aecci.org.in",
    avatar: "",
  },
  teams: [],
  navGroups: [
    {
      title: "Main",
      items: [
        {
          title: "Dashboard",
          url: "/dashboard",
          icon: LayoutDashboard,
        },
        {
          title: "My Sessions",
          url: "/dashboard/my-sessions",
          icon: Calendar,
          badge: "2",
        },
        {
          title: "Messages",
          url: "/dashboard/messages",
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
          url: "/dashboard/marketplace",
          icon: Store,
        },
        {
          title: "Waiting Room",
          url: "/dashboard/waiting-room",
          icon: Clock,
        },
        {
          title: "Live Deal Room",
          url: "/dashboard/live-deal-room",
          icon: Video,
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
          title: "Partner Brief",
          url: "/dashboard/partner-brief",
          icon: Users,
        },
        {
          title: "Submit Questions",
          url: "/dashboard/submit-questions",
          icon: HelpCircle,
        },
      ],
    },
    {
      title: "Reports & Services",
      items: [
        {
          title: "Opportunity Report",
          url: "/dashboard/opportunity-report",
          icon: TrendingUp,
        },
        {
          title: "Follow-Up Services",
          url: "/dashboard/follow-up-services",
          icon: Briefcase,
          badge: "New",
        },
        {
          title: "Invoices & Payments",
          url: "/dashboard/invoices",
          icon: Receipt,
        },
      ],
    },
  ],
};
