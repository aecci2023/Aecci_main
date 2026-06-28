import {
  LayoutDashboard,
  CalendarDays,
  CalendarClock,
  History,
  PlusCircle,
  MessageSquare,
  Users,
  UserCheck,
  Globe,
  FileText,
  DollarSign,
  CreditCard,
  User,
  BookOpen,
  Settings,
  FolderOpen,
  LifeBuoy,
} from "lucide-react";

export const partnerSidebarData = {
  user: {
    name: "Partner",
    email: "partner@aecci.org.in",
    avatar: "",
  },
  teams: [],
  navGroups: [
    {
      title: "Overview",
      items: [
        {
          title: "Dashboard",
          url: "/partner/dashboard",
          icon: LayoutDashboard,
        },
      ],
    },
    {
      title: "Sessions",
      items: [
        {
          title: "My Schedule",
          url: "/partner/sessions/schedule",
          icon: CalendarDays,
        },
        {
          title: "Upcoming Sessions",
          url: "/partner/sessions/upcoming",
          icon: CalendarClock,
        },
        {
          title: "Past Sessions",
          url: "/partner/sessions/past",
          icon: History,
        },
        {
          title: "Host New Session",
          url: "/partner/sessions/host",
          icon: PlusCircle,
        },
      ],
    },
    {
      title: "Client Engagement",
      items: [
        {
          title: "Pending Questions",
          url: "/partner/engagement/questions",
          icon: MessageSquare,
          badge: "3",
        },
        {
          title: "Active Clients",
          url: "/partner/engagement/active",
          icon: Users,
        },
        {
          title: "Client Assignments",
          url: "/partner/engagement/assignments",
          icon: UserCheck,
        },
      ],
    },
    {
      title: "Content & Intelligence",
      items: [
        {
          title: "Country Briefs",
          url: "/partner/content/country-briefs",
          icon: Globe,
        },
        {
          title: "Opportunity Reports",
          url: "/partner/content/opportunity-reports",
          icon: FileText,
        },
      ],
    },
    {
      title: "Earnings",
      items: [
        {
          title: "Earnings Overview",
          url: "/partner/earnings/overview",
          icon: DollarSign,
        },
        {
          title: "Invoices & Payouts",
          url: "/partner/earnings/invoices",
          icon: CreditCard,
        },
      ],
    },
    {
      title: "Profile & Resources",
      items: [
        {
          title: "My Profile",
          url: "/partner/profile",
          icon: User,
        },
        {
          title: "Training & Guidelines",
          url: "/partner/resources/training",
          icon: BookOpen,
        },
        {
          title: "Availability Settings",
          url: "/partner/resources/availability",
          icon: Settings,
        },
        {
          title: "Resources & Documents",
          url: "/partner/resources/documents",
          icon: FolderOpen,
        },
      ],
    },
    {
      title: "Support",
      items: [
        {
          title: "Messages",
          url: "/partner/support/messages",
          icon: MessageSquare,
        },
        {
          title: "Help & Support",
          url: "/partner/support/help",
          icon: LifeBuoy,
        },
      ],
    },
  ],
};
