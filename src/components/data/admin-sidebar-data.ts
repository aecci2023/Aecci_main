import {
  LayoutDashboard,
  Users,
  Building2,
  User,
  Handshake,
  ShieldCheck,
  Video,
  MessageSquare,
  Globe,
  FileText,
  DollarSign,
  CreditCard,
  Bell,
  Award,
  Settings,
  UserCog,
  Wrench,
  Palette,
} from "lucide-react";

export const adminSidebarData = {
  navGroups: [
    {
      title: "Overview",
      items: [
        {
          title: "Dashboard",
          url: "/admin/dashboard",
          icon: LayoutDashboard,
        },
      ],
    },
    {
      title: "Network & People",
      items: [
        {
          title: "All Users",
          url: "/admin/users",
          icon: Users,
          badge: "245",
        },
        {
          title: "Business Accounts",
          url: "/admin/businesses",
          icon: Building2,
        },
        {
          title: "Individual Accounts",
          url: "/admin/individuals",
          icon: User,
        },
        {
          title: "Global Partners",
          url: "/admin/partners",
          icon: Handshake,
        },
      ],
    },
    {
      title: "Compliance & Approvals",
      items: [
        {
          title: "Pending Verifications",
          url: "/admin/verifications",
          icon: ShieldCheck,
          badge: "18",
        },
      ],
    },
    {
      title: "Deal Room Operations",
      items: [
        {
          title: "All Sessions",
          url: "/admin/sessions",
          icon: Video,
        },
        {
          title: "Marketplace",
          url: "/admin/marketplace",
          icon: Globe,
        },
        {
          title: "Q&A Management",
          url: "/admin/questions",
          icon: MessageSquare,
        },
      ],
    },
    {
      title: "Content & Intelligence",
      items: [
        {
          title: "Country Intelligence",
          url: "/admin/country-intelligence",
          icon: Globe,
        },
        {
          title: "Opportunity Reports",
          url: "/admin/reports",
          icon: FileText,
        },
        {
          title: "Announcements",
          url: "/admin/announcements",
          icon: Bell,
        },
      ],
    },
    {
      title: "Finance & Billing",
      items: [
        {
          title: "Transactions",
          url: "/admin/transactions",
          icon: DollarSign,
        },
        {
          title: "Invoices & Payouts",
          url: "/admin/invoices",
          icon: CreditCard,
        },
        {
          title: "Subscriptions",
          url: "/admin/subscriptions",
          icon: Award,
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
              url: "/admin/settings",
              icon: UserCog,
            },
            {
              title: "Account",
              url: "/admin/settings/account",
              icon: Wrench,
            },
            {
              title: "Appearance",
              url: "/admin/settings/appearance",
              icon: Palette,
            },
            {
              title: "Notifications",
              url: "/admin/notifications",
              icon: Bell,
            },
          ],
        },
      ],
    },
  ],
};
