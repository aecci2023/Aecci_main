import {
  LayoutDashboard,
  CalendarDays,
  CalendarClock,
  History,
  MessageSquare,
  Users,
  UserCheck,
  Globe,
  FileText,
  User,
  Settings,
  LifeBuoy,
  UserCog,
  Wrench,
  Palette,
  Bell,
} from "lucide-react";

export const partnerSidebarData = {
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
      title: "Profile & Settings",
      items: [
        {
          title: "My Profile",
          url: "/partner/profile",
          icon: User,
        },
        {
          title: "Availability Settings",
          url: "/partner/resources/availability",
          icon: Settings,
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
    {
      title: "Other",
      items: [
        {
          title: "Settings",
          icon: Settings,
          items: [
            {
              title: "Profile",
              url: "/partner/settings",
              icon: UserCog,
            },
            {
              title: "Account",
              url: "/partner/settings/account",
              icon: Wrench,
            },
            {
              title: "Appearance",
              url: "/partner/settings/appearance",
              icon: Palette,
            },
            {
              title: "Notifications",
              url: "/partner/notifications",
              icon: Bell,
            },
          ],
        },
      ],
    },
  ],
};
