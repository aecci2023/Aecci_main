import {
  LayoutDashboard,
  Globe,
  Users,
  MessageSquare,
  Clock,
  Video,
  FileText,
  BarChart,
  Briefcase,
  CreditCard,
  Calendar,
  Settings,
  HelpCircle
} from 'lucide-react'
import { type SidebarData } from '../layout/types'

export const sidebarData: SidebarData = {
  user: {
    name: 'AECCI Member',
    email: 'member@aecci.org.in',
    avatar: '',
  },
  teams: [],
  navGroups: [
    {
      title: 'Overview',
      items: [
        {
          title: 'Client Dashboard',
          url: '/dashboard',
          icon: LayoutDashboard,
        },
        {
          title: 'Deal Room Marketplace',
          url: '/dashboard/marketplace',
          icon: Globe,
        },
      ],
    },
    {
      title: 'Country Access & Intelligence',
      items: [
        {
          title: 'Country Intelligence',
          url: '/dashboard/intelligence',
          icon: Globe,
        },
        {
          title: 'Partner Brief',
          url: '/dashboard/partner-brief',
          icon: Users,
        },
        {
          title: 'Submit Questions',
          url: '/dashboard/submit-questions',
          icon: HelpCircle,
        },
      ],
    },
    {
      title: 'Live Sessions',
      items: [
        {
          title: 'Waiting Room',
          url: '/dashboard/waiting-room',
          icon: Clock,
        },
        {
          title: 'Live Deal Room',
          url: '/dashboard/live-deal-room',
          icon: Video,
        },
        {
          title: 'Session Summary',
          url: '/dashboard/session-summary',
          icon: FileText,
        },
      ],
    },
    {
      title: 'Post-Event Services',
      items: [
        {
          title: 'Opportunity Reports',
          url: '/dashboard/opportunity-report',
          icon: BarChart,
        },
        {
          title: 'Follow-Up Services',
          url: '/dashboard/follow-up-services',
          icon: Briefcase,
        },
        {
          title: 'Service Purchase',
          url: '/dashboard/service-purchase',
          icon: CreditCard,
        },
      ],
    },
    {
      title: 'Account Management',
      items: [
        {
          title: 'My Sessions',
          url: '/dashboard/my-sessions',
          icon: Calendar,
        },
        {
          title: 'Messages',
          url: '/dashboard/messages',
          icon: MessageSquare,
        },
        {
          title: 'Profile Settings',
          url: '/dashboard/profile-settings',
          icon: Settings,
        },
      ],
    },
  ],
}
