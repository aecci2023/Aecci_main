import type { RouteObject } from "react-router-dom";
import Home from "@/pages/Home";
import { NotFound } from "@/pages/not-found";
import SignupPage from "@/pages/signup";
import { AuthenticatedLayout } from "@/components/layout/authenticated-layout";
import DashboardPage from "@/pages/dashboard";
import IntelligencePage from "@/pages/dashboard/intelligence";
import PartnerBriefPage from "@/pages/dashboard/partner-brief";
import SubmitQuestionsPage from "@/pages/dashboard/submit-questions";
import WaitingRoomPage from "@/pages/dashboard/waiting-room";
import LiveDealRoomPage from "@/pages/dashboard/live-deal-room";
import SessionSummaryPage from "@/pages/dashboard/session-summary";
import OpportunityReportPage from "@/pages/dashboard/opportunity-report";
import FollowUpServicesPage from "@/pages/dashboard/follow-up-services";
import ServicePurchasePage from "@/pages/dashboard/service-purchase";
import MySessionsPage from "@/pages/dashboard/my-sessions";
import { Chats } from "@/features/chats";
import { Settings } from "@/features/settings";
import { SettingsProfile } from "@/features/settings/profile";
import { SettingsAccount } from "@/features/settings/account";
import { SettingsAppearance } from "@/features/settings/appearance";
import { SettingsNotifications } from "@/features/settings/notifications";
import { SettingsDisplay } from "@/features/settings/display";
import MarketplacePage from "@/pages/dashboard/marketplace";
import SessionDetailsPage from "@/pages/dashboard/session-details";
import ApplicationPage from "@/pages/dashboard/application";
import ScreeningPage from "@/pages/dashboard/screening";
import ApprovalPage from "@/pages/dashboard/approval";
import PaymentPage from "@/pages/dashboard/payment";
import PaymentSuccessPage from "@/pages/dashboard/payment-success";
import LoginPage from "@/pages/login";
import { AdminLayout } from "@/components/layout/admin-layout";
import { AdminRoute } from "@/components/layout/admin-route";
import AdminDashboard from "@/pages/admin/dashboard";
import AdminUsersPage from "@/pages/admin/users";
import AdminBusinessesPage from "@/pages/admin/businesses";
import AdminIndividualsPage from "@/pages/admin/individuals";
import AdminPartnersPage from "@/pages/admin/partners";
import AdminVerificationsPage from "@/pages/admin/verifications";
import AdminVerificationDetailsPage from "@/pages/admin/verifications/details";
import AdminDocumentsPage from "@/pages/admin/documents";
import AdminPartnerOnboardingPage from "@/pages/admin/partner-onboarding";
import AdminSessionsPage from "@/pages/admin/sessions";
import AdminMarketplacePage from "@/pages/admin/marketplace";
import AdminQuestionsPage from "@/pages/admin/questions";
import AdminCountryIntelligencePage from "@/pages/admin/country-intelligence";
import AdminReportsPage from "@/pages/admin/reports";
import AdminAnnouncementsPage from "@/pages/admin/announcements";
import AdminTransactionsPage from "@/pages/admin/transactions";
import AdminInvoicesPage from "@/pages/admin/invoices";

import PartnerDashboard from "@/pages/partner/dashboard";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/signup",
    element: <SignupPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/partner",
    children: [
      { path: "dashboard", element: <PartnerDashboard /> },
    ],
  },
  {
    path: "/admin",
    element: <AdminRoute />,
    children: [
      {
        path: "",
        element: <AdminLayout />,
        children: [
          {
            path: "dashboard",
            element: <AdminDashboard />,
          },
          {
            path: "verifications",
            element: <AdminVerificationsPage />,
          },
          {
            path: "verifications/:id",
            element: <AdminVerificationDetailsPage />,
          },
          {
            path: "users",
            element: <AdminUsersPage />,
          },
          {
            path: "businesses",
            element: <AdminBusinessesPage />,
          },
          {
            path: "individuals",
            element: <AdminIndividualsPage />,
          },
          {
            path: "partners",
            element: <AdminPartnersPage />,
          },
          {
            path: "documents",
            element: <AdminDocumentsPage />,
          },
          {
            path: "partner-onboarding",
            element: <AdminPartnerOnboardingPage />,
          },
          {
            path: "sessions",
            element: <AdminSessionsPage />,
          },
          {
            path: "marketplace",
            element: <AdminMarketplacePage />,
          },
          {
            path: "questions",
            element: <AdminQuestionsPage />,
          },
          {
            path: "country-intelligence",
            element: <AdminCountryIntelligencePage />,
          },
          {
            path: "reports",
            element: <AdminReportsPage />,
          },
          {
            path: "announcements",
            element: <AdminAnnouncementsPage />,
          },
          {
            path: "transactions",
            element: <AdminTransactionsPage />,
          },
          {
            path: "invoices",
            element: <AdminInvoicesPage />,
          },
          {
            path: "*",
            element: <NotFound />,
          }
        ]
      }
    ]
  },
  {
    path: "/dashboard",
    element: <AuthenticatedLayout />,
    children: [
      {
        path: "",
        element: <DashboardPage />,
      },
      {
        path: "intelligence",
        element: <IntelligencePage />,
      },
      {
        path: "partner-brief",
        element: <PartnerBriefPage />,
      },
      {
        path: "submit-questions",
        element: <SubmitQuestionsPage />,
      },
      {
        path: "waiting-room",
        element: <WaitingRoomPage />,
      },
      {
        path: "live-deal-room",
        element: <LiveDealRoomPage />,
      },
      {
        path: "session-summary",
        element: <SessionSummaryPage />,
      },
      {
        path: "opportunity-report",
        element: <OpportunityReportPage />,
      },
      {
        path: "follow-up-services",
        element: <FollowUpServicesPage />,
      },
      {
        path: "service-purchase",
        element: <ServicePurchasePage />,
      },
      {
        path: "my-sessions",
        element: <MySessionsPage />,
      },
      {
        path: "messages",
        element: <Chats />,
      },
      {
        path: "profile-settings",
        element: <Settings />,
        children: [
          { index: true, element: <SettingsProfile /> },
          { path: "account", element: <SettingsAccount /> },
          { path: "appearance", element: <SettingsAppearance /> },
          { path: "notifications", element: <SettingsNotifications /> },
          { path: "display", element: <SettingsDisplay /> },
        ],
      },
      {
        path: "marketplace",
        element: <MarketplacePage />,
      },
      {
        path: "session-details",
        element: <SessionDetailsPage />,
      },
      {
        path: "application",
        element: <ApplicationPage />,
      },
      {
        path: "screening",
        element: <ScreeningPage />,
      },
      {
        path: "approval",
        element: <ApprovalPage />,
      },
      {
        path: "payment",
        element: <PaymentPage />,
      },
      {
        path: "payment-success",
        element: <PaymentSuccessPage />,
      },
    ],
  },
  // Added mappings for simple /about and /contact standard paths
  {
    path: "/about",
    element: <NotFound />,
  },
  {
    path: "/contact",
    element: <NotFound />,
  },
  {
    path: "/about/about-chamber",
    element: <NotFound />,
  },
  {
    path: "/about/our-history",
    element: <NotFound />,
  },
  {
    path: "/about/chairman-message",
    element: <NotFound />,
  },
  {
    path: "/about/chamber-policy",
    element: <NotFound />,
  },
  {
    path: "/about/office-bearers",
    element: <NotFound />,
  },
  {
    path: "/about/roles-responsibility",
    element: <NotFound />,
  },
  {
    path: "/about/strategic-partners",
    element: <NotFound />,
  },
  {
    path: "/about/chamber-dynamics",
    element: <NotFound />,
  },
  {
    path: "/about/jobs-opportunities",
    element: <NotFound />,
  },

  // Services Main & The Wings
  {
    path: "/services",
    element: <NotFound />,
  },
  {
    path: "/services/the-wings",
    element: <NotFound />,
  },
  {
    path: "/services/the-wings/exports-wing",
    element: <NotFound />,
  },
  {
    path: "/services/legal-wing",
    element: <NotFound />,
  },
  {
    path: "/services/the-wings/hr-support-wing",
    element: <NotFound />,
  },
  {
    path: "/services/the-wings/professional-wing",
    element: <NotFound />,
  },
  {
    path: "/services/the-wings/business-advice-wing",
    element: <NotFound />,
  },
  {
    path: "/services/the-wings/women-wing",
    element: <NotFound />,
  },
  {
    path: "/services/the-wings/event-and-seminar-wing",
    element: <NotFound />,
  },

  // Added nested routes matching user's format explicitly
  {
    path: "/services/exports-wing",
    element: <NotFound />,
  },

  {
    path: "/services/the-wings/exports-wing-our-export-wing",
    element: <NotFound />,
  },
  {
    path: "/services/the-wings/exports-wing-our-initiatives",
    element: <NotFound />,
  },
  {
    path: "/aecci-export-our-team",
    element: <NotFound />,
  },

  {
    path: "/aecci-legal-expertise",
    element: <NotFound />,
  },
  {
    path: "/aecci-legal-what-we-do",
    element: <NotFound />,
  },
  {
    path: "/aecci-legal-initiatives",
    element: <NotFound />,
  },
  {
    path: "/aecci-legal-our-team",
    element: <NotFound />,
  },

  {
    path: "/services/the-wings/event-and-seminar-wing-our-expertise",
    element: <NotFound />,
  },
  {
    path: "/services/the-wings/event-and-seminar-wing-what-we-do",
    element: <NotFound />,
  },
  {
    path: "/services/the-wings/event-and-seminar-wing-our-initiatives",
    element: <NotFound />,
  },
  {
    path: "/services/the-wings/event-and-seminar-wing-our-team",
    element: <NotFound />,
  },

  {
    path: "/submit-professionals-profile",
    element: <NotFound />,
  },

  // Entrepreneur Hub
  {
    path: "/services/entrepreneur-hub",
    element: <NotFound />,
  },
  {
    path: "/services/entrepreneur-hub/startup-india",
    element: <NotFound />,
  },
  {
    path: "/services/entrepreneur-hub/investment-india",
    element: <NotFound />,
  },
  {
    path: "/services/entrepreneur-hub/make-in-india",
    element: <NotFound />,
  },

  // B2B Connect
  {
    path: "/services/b2b-connect",
    element: <NotFound />,
  },
  {
    path: "/services/b2b-connect/consultations",
    element: <NotFound />,
  },
  {
    path: "/services/b2b-connect/business-matches",
    element: <NotFound />,
  },
  {
    path: "/services/b2b-connect/market-studies",
    element: <NotFound />,
  },
  {
    path: "/b2b-about",
    element: <NotFound />,
  },

  // Membership
  {
    path: "/services/membership",
    element: <NotFound />,
  },
  {
    path: "/patron-members",
    element: <NotFound />,
  },
  {
    path: "/membership-and-its-benefits",
    element: <NotFound />,
  },
  {
    path: "/services/membership/guidelines-and-form",
    element: <NotFound />,
  },
  {
    path: "/services/membership/enrollment-offers",
    element: <NotFound />,
  },
  {
    path: "/services/membership/visa-recommendations-letter",
    element: <NotFound />,
  },

  // Affiliate Program
  {
    path: "/aecci-affiliate-program",
    element: <NotFound />,
  },
  {
    path: "/meet-our-wings-experts",
    element: <NotFound />,
  },
  {
    path: "/join-our-affiliate-network",
    element: <NotFound />,
  },

  {
    path: "/arbitration-center",
    element: <NotFound />,
  },
  {
    path: "/why-aecci",
    element: <NotFound />,
  },
  {
    path: "/schedule-fees",
    element: <NotFound />,
  },
  {
    path: "/rules-and-policies",
    element: <NotFound />,
  },
  {
    path: "/aecci-iac-model-clause",
    element: <NotFound />,
  },
  {
    path: "/aecci-iac-faq",
    element: <NotFound />,
  },
  {
    path: "/aecci-iac-panel",
    element: <NotFound />,
  },
  {
    path: "/ways-means",
    element: <NotFound />,
  },
  {
    path: "/ways-means/research-and-information",
    element: <NotFound />,
  },
  {
    path: "/ways-means/research-and-information/economic-analysis",
    element: <NotFound />,
  },
  {
    path: "/ways-means/research-and-information/business-opportunities-brief",
    element: <NotFound />,
  },
  {
    path: "/ways-means/research-and-information/indian-economic-report",
    element: <NotFound />,
  },
  {
    path: "/ways-means/research-and-information/operational-guides",
    element: <NotFound />,
  },
  {
    path: "/ways-means/india-innovation-index",
    element: <NotFound />,
  },
  {
    path: "/ways-means/annual-report",
    element: <NotFound />,
  },
  {
    path: "/ways-means/commercial-directory",
    element: <NotFound />,
  },
  {
    path: "/ways-means/export-promotion-council",
    element: <NotFound />,
  },
  {
    path: "/media",
    element: <NotFound />,
  },
  {
    path: "/media/e-newsletters",
    element: <NotFound />,
  },
  {
    path: "/media/media-center",
    element: <NotFound />,
  },
  {
    path: "/aecci-viewpoints",
    element: <NotFound />,
  },
  {
    path: "/media/gallery",
    element: <NotFound />,
  },
  {
    path: "/media/publications",
    element: <NotFound />,
  },
  {
    path: "/events",
    element: <NotFound />,
  },
  {
    path: "/upcoming-events",
    element: <NotFound />,
  },
  {
    path: "/events/past-events",
    element: <NotFound />,
  },
  {
    path: "/aecci-iac-virtual-b2b-forum",
    element: <NotFound />,
  },
  {
    path: "/events/sponsorship",
    element: <NotFound />,
  },
  {
    path: "/advertise-with-us",
    element: <NotFound />,
  },
  {
    path: "/international-collaboration",
    element: <NotFound />,
  },
  {
    path: "/world-conference",
    element: <NotFound />,
  },
  {
    path: "/e-platform",
    element: <NotFound />,
  },
  {
    path: "/e-platform/e-platform-information",
    element: <NotFound />,
  },
  {
    path: "/e-platform/formalities-guidelines",
    element: <NotFound />,
  },
  {
    path: "/e-platform/formalities-guidelines/information-for-e-services",
    element: <NotFound />,
  },
  {
    path: "/e-platform/formalities-guidelines/indemnity-bond-format",
    element: <NotFound />,
  },
  {
    path: "/e-platform/formalities-guidelines/coo-format",
    element: <NotFound />,
  },
  {
    path: "/e-platform/formalities-guidelines/attestation-fees-information",
    element: <NotFound />,
  },
  {
    path: "/e-platform/formalities-guidelines/authorized-chamber-card",
    element: <NotFound />,
  },
  {
    path: "/trade-assistant-centre",
    element: <NotFound />,
  },
  {
    path: "/about-tac",
    element: <NotFound />,
  },
  {
    path: "/tac-process",
    element: <NotFound />,
  },
  {
    path: "/tac-locations",
    element: <NotFound />,
  },
  {
    path: "/contact-us",
    element: <NotFound />,
  },
  {
    path: "/contact-us/aecci-head-office",
    element: <NotFound />,
  },
  {
    path: "/contact-us/aecci-international-hub",
    element: <NotFound />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];
