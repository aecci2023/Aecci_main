import { AdminLayout } from "@/components/layout/admin-layout";
import { AuthenticatedLayout } from "@/components/layout/authenticated-layout";
import { ProtectedRoute } from "@/components/layout/protected-route";
import { Chats } from "@/features/chats";
import { Settings } from "@/features/settings";
import { SettingsAccount } from "@/features/settings/account";
import { SettingsAppearance } from "@/features/settings/appearance";
import { SettingsNotifications } from "@/features/settings/notifications";
import { SettingsProfile } from "@/features/settings/profile";
import AdminAnnouncementsPage from "@/pages/admin/announcements";
import AdminBusinessesPage from "@/pages/admin/businesses";
import AdminCountryIntelligencePage from "@/pages/admin/country-intelligence";
import AdminDashboard from "@/pages/admin/dashboard";
import AdminIndividualsPage from "@/pages/admin/individuals";
import AdminInvoicesPage from "@/pages/admin/invoices";
import AdminMarketplacePage from "@/pages/admin/marketplace";
import AdminPartnersPage from "@/pages/admin/partners";
import AdminQuestionsPage from "@/pages/admin/questions";
import AdminReportsPage from "@/pages/admin/reports";
import AdminSessionsPage from "@/pages/admin/sessions";
import AdminTransactionsPage from "@/pages/admin/transactions";
import AdminUsersPage from "@/pages/admin/users";
import AdminVerificationsPage from "@/pages/admin/verifications";
import AdminVerificationDetailsPage from "@/pages/admin/verifications/details";
import AdminPartnerVerificationDetailsPage from "@/pages/admin/verifications/partner-details";
import DashboardPage from "@/pages/dashboard";
import ApplicationPage from "@/pages/dashboard/application";
import ApprovalPage from "@/pages/dashboard/approval";
import FollowUpServicesPage from "@/pages/dashboard/follow-up-services";
import IntelligencePage from "@/pages/dashboard/intelligence";
import LiveDealRoomPage from "@/pages/dashboard/live-deal-room";
import MarketplacePage from "@/pages/dashboard/marketplace";
import MySessionsPage from "@/pages/dashboard/my-sessions";
import OpportunityReportPage from "@/pages/dashboard/opportunity-report";
import PartnerBriefPage from "@/pages/dashboard/partner-brief";
import PaymentPage from "@/pages/dashboard/payment";
import PaymentSuccessPage from "@/pages/dashboard/payment-success";
import RejectedApplicationPage from "@/pages/dashboard/rejected";
import ServicePurchasePage from "@/pages/dashboard/service-purchase";
import SessionDetailsPage from "@/pages/dashboard/session-details";
import SessionSummaryPage from "@/pages/dashboard/session-summary";
import SubmitQuestionsPage from "@/pages/dashboard/submit-questions";
import VerificationPage from "@/pages/dashboard/verification";
import WaitingRoomPage from "@/pages/dashboard/waiting-room";
import MainHomepage from "@/pages/MainHomepage";
import Home from "@/pages/Home";
import LoginPage from "@/pages/login";
import { NotFound } from "@/pages/not-found";
import SignupPage from "@/pages/signup";
import type { RouteObject } from "react-router-dom";

import { PartnerLayout } from "@/components/layout/partner-layout";

import AdminSubscriptionsPage from "@/pages/admin/subscriptions";
import UserInvoicesPage from "@/pages/dashboard/invoices";
import AdvertiseWithUsPage from "@/pages/events/advertise-with-us";
import PublicationsPage from "@/pages/events/publications";
import SponsorshipPage from "@/pages/events/sponsorship";
import ImporterRegisterPage from "@/pages/importer/register";
import NotificationsPage from "@/pages/notifications";
import BecomePartnerPage from "@/pages/partner/apply";
import PartnerAvailabilityPage from "@/pages/partner/availability";
import PartnerDashboard from "@/pages/partner/dashboard";
import PartnerOnboardingPage from "@/pages/partner/onboarding";
import PartnerProfilePage from "@/pages/partner/profile";
import PartnerQuestionsPage from "@/pages/partner/questions";
import PartnerRegisterPage from "@/pages/partner/register";
import PartnerPastSessionsPage from "@/pages/partner/sessions/past";
import PartnerSubmitSummaryPage from "@/pages/partner/sessions/submit-summary";
import PartnerUpcomingSessionsPage from "@/pages/partner/sessions/upcoming";
import RegisterRoleSelection from "@/pages/register";

import AboutChamberPage from "@/pages/about/AboutChamber";
import ChairmanMessagePage from "@/pages/about/ChairmanMessage";
import ChamberDynamicsPage from "@/pages/about/ChamberDynamics";
import ChamberPolicyPage from "@/pages/about/ChamberPolicy";
import JobOpportunitiesPage from "@/pages/about/JobOpportunities";
import OfficeBearersPage from "@/pages/about/OfficeBearers";
import OurHistoryPage from "@/pages/about/OurHistory";
import RolesResponsibilityPage from "@/pages/about/RolesResponsibility";
import StrategicPartnersPage from "@/pages/about/strategic-partners";
import AecciIacPanelPage from "@/pages/arbitration-center/aecci-iac-panel";
import AecciIacFaqPage from "@/pages/arbitration-center/faq";
import ModelClausePage from "@/pages/arbitration-center/model-clause";
import RulesAndPoliciesPage from "@/pages/arbitration-center/rules-and-policies";
import ScheduleFeesPage from "@/pages/arbitration-center/schedule-fees";
import WhyAecciIacPage from "@/pages/arbitration-center/why-aecci-iac";
import HeadOfficePage from "@/pages/contact-us/head-office";
import InternationalHubPage from "@/pages/contact-us/international-hub";
import EPlatformInformationPage from "@/pages/e-platform/e-platform-information";
import FormalitiesGuidelinesPage from "@/pages/e-platform/formalities-guidelines";
import AttestationFeesInformationPage from "@/pages/e-platform/formalities-guidelines/attestation-fees-information";
import CooFormatPage from "@/pages/e-platform/formalities-guidelines/coo-format";
import IndemnityBondFormatPage from "@/pages/e-platform/formalities-guidelines/indemnity-bond-format";
import InformationForEServicesPage from "@/pages/e-platform/formalities-guidelines/information-for-e-services";
import PastEventsPage from "@/pages/events/past-events";
import InternationalCollaborationPage from "@/pages/international-collaboration";
import { PartnershipsIndex as PartnershipsIndexPage } from "@/pages/international-collaboration/partnerships/index";
import PartnerDetailPage from "@/pages/international-collaboration/partnerships/PartnerDetail";
import MediaCenterPage from "@/pages/media/media-center";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import EnrollmentOffers from "@/pages/services/membership/EnrollmentOffers";
import FeeFormsGuidelines from "@/pages/services/membership/FeeFormsGuidelines";
import Membership from "@/pages/services/membership/Membership";
import MembershipBenefits from "@/pages/services/membership/MembershipBenefits";
import PatronMembership from "@/pages/services/membership/patron-membership";
import RenewMembership from "@/pages/services/membership/RenewMembership";
import VisaRecommendation from "@/pages/services/membership/VisaRecommendation";
import TermsConditions from "@/pages/TermsConditions";
import UpcomingEventsPage from "@/pages/upcoming-events";

// Generic placeholder for partner routes
const PartnerPlaceholder = ({ title }: { title: string }) => (
  <div className="flex flex-col items-center justify-center h-[calc(100vh-100px)]">
    <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
    <p className="text-muted-foreground mt-2">
      This module is currently under development.
    </p>
  </div>
);

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <MainHomepage />,
  },
  {
    path: "/global-connect",
    element: <Home />,
  },
  {
    path: "/signup",
    element: <SignupPage />,
  },
  {
    path: "/register",
    element: <RegisterRoleSelection />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/importer",
    children: [
      { path: "register", element: <ImporterRegisterPage /> },
    ],
  },
  {
    path: "/partner",
    children: [
      { path: "apply", element: <BecomePartnerPage /> },
      { path: "register", element: <PartnerRegisterPage /> },
      { path: "onboarding", element: <PartnerOnboardingPage /> },
      {
        path: "",
        element: <ProtectedRoute allowedRoles={["partner"]} />,
        children: [
          {
            path: "",
            element: <PartnerLayout />,
            children: [
              { path: "dashboard", element: <PartnerDashboard /> },
              {
                path: "sessions/schedule",
                element: <PartnerPlaceholder title="My Schedule" />,
              },
              {
                path: "sessions/upcoming",
                element: <PartnerUpcomingSessionsPage />,
              },
              { path: "sessions/past", element: <PartnerPastSessionsPage /> },
              {
                path: "sessions/:id/summary",
                element: <PartnerSubmitSummaryPage />,
              },
              {
                path: "engagement/questions",
                element: <PartnerQuestionsPage />,
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
                path: "engagement/active",
                element: <PartnerPlaceholder title="Active Clients" />,
              },
              {
                path: "engagement/assignments",
                element: <PartnerPlaceholder title="Client Assignments" />,
              },
              {
                path: "content/country-briefs",
                element: <PartnerPlaceholder title="Country Briefs" />,
              },
              {
                path: "content/opportunity-reports",
                element: <PartnerPlaceholder title="Opportunity Reports" />,
              },

              {
                path: "support/messages",
                element: <PartnerPlaceholder title="Messages" />,
              },
              {
                path: "support/help",
                element: <PartnerPlaceholder title="Help & Support" />,
              },
              {
                path: "settings",
                element: <Settings />,
                children: [
                  { index: true, element: <PartnerProfilePage /> },
                  { path: "availability", element: <PartnerAvailabilityPage /> },
                  { path: "account", element: <SettingsAccount /> },
                  { path: "appearance", element: <SettingsAppearance /> },
                  { path: "notifications", element: <SettingsNotifications /> },
                ],
              },
              {
                path: "notifications",
                element: <NotificationsPage />,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    path: "/admin",
    element: <ProtectedRoute allowedRoles={["admin"]} />,
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
            path: "verifications/partner/:id",
            element: <AdminPartnerVerificationDetailsPage />,
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
            path: "subscriptions",
            element: <AdminSubscriptionsPage />,
          },
          {
            path: "settings",
            element: <Settings />,
            children: [
              { index: true, element: <SettingsProfile /> },
              { path: "account", element: <SettingsAccount /> },
              { path: "appearance", element: <SettingsAppearance /> },
              { path: "notifications", element: <SettingsNotifications /> },
            ],
          },
          {
            path: "notifications",
            element: <NotificationsPage />,
          },
          {
            path: "*",
            element: <NotFound />,
          },
        ],
      },
    ],
  },
  {
    path: "/dashboard",
    element: <ProtectedRoute allowedRoles={["user"]} />,
    children: [
      {
        path: "rejected",
        element: <RejectedApplicationPage />,
      },
      {
        path: "",
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
            path: "settings",
            element: <Settings />,
            children: [
              { index: true, element: <SettingsProfile /> },
              { path: "account", element: <SettingsAccount /> },
              { path: "appearance", element: <SettingsAppearance /> },
              { path: "notifications", element: <SettingsNotifications /> },
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
            path: "verification",
            element: <VerificationPage />,
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
          {
            path: "invoices",
            element: <UserInvoicesPage />,
          },
          {
            path: "notifications",
            element: <NotificationsPage />,
          },
        ],
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
    element: <AboutChamberPage />,
  },
  {
    path: "/about/our-history",
    element: <OurHistoryPage />,
  },
  {
    path: "/about/chairman-message",
    element: <ChairmanMessagePage />,
  },
  {
    path: "/about/chamber-policy",
    element: <ChamberPolicyPage />,
  },
  {
    path: "/about/office-bearers",
    element: <OfficeBearersPage />,
  },
  {
    path: "/about/roles-responsibility",
    element: <RolesResponsibilityPage />,
  },
  {
    path: "/about/strategic-partners",
    element: <StrategicPartnersPage />,
  },
  {
    path: "/about/chamber-dynamics",
    element: <ChamberDynamicsPage />,
  },
  {
    path: "/about/jobs-opportunities",
    element: <JobOpportunitiesPage />,
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
    element: <Membership />,
  },
  {
    path: "/services/membership/patron-membership",
    element: <PatronMembership />,
  },
  {
    path: "/membership-and-its-benefits",
    element: <MembershipBenefits />,
  },
  {
    path: "/services/membership/benefits",
    element: <MembershipBenefits />,
  },
  {
    path: "/services/membership/guidelines-and-form",
    element: <FeeFormsGuidelines />,
  },
  {
    path: "/services/membership/fee-forms-guidelines",
    element: <FeeFormsGuidelines />,
  },
  {
    path: "/services/membership/enrollment-offers",
    element: <EnrollmentOffers />,
  },
  {
    path: "/services/membership/visa-recommendation",
    element: <VisaRecommendation />,
  },
  {
    path: "/services/membership/renew",
    element: <RenewMembership />,
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
    path: "/arbitration-center/why-aecci-iac",
    element: <WhyAecciIacPage />,
  },
  {
    path: "/why-aecci",
    element: <NotFound />,
  },
  {
    path: "/arbitration-center/schedule-fees",
    element: <ScheduleFeesPage />,
  },
  {
    path: "/arbitration-center/rules-and-policies",
    element: <RulesAndPoliciesPage />,
  },
  {
    path: "/arbitration-center/model-clause",
    element: <ModelClausePage />,
  },
  {
    path: "/aecci-iac-faq",
    element: <NotFound />,
  },
  {
    path: "/arbitration-center/faq",
    element: <AecciIacFaqPage />,
  },
  {
    path: "/arbitration-center/panel-of-arbitrators",
    element: <AecciIacPanelPage />,
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
    path: "/ways-means/export-promotion-council",
    element: <NotFound />,
  },
  {
    path: "/media",
    element: <NotFound />,
  },

  {
    path: "/media/media-center",
    element: <NotFound />,
  },
  {
    path: "/events/media-center",
    element: <MediaCenterPage />,
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
    element: <PublicationsPage />,
  },
  {
    path: "/events/publications",
    element: <PublicationsPage />,
  },
  {
    path: "/events/publication",
    element: <PublicationsPage />,
  },
  {
    path: "/events",
    element: <NotFound />,
  },
  {
    path: "/events/upcoming-events",
    element: <UpcomingEventsPage />,  
  },
  {
    path: "/events/past-events",
    element: <PastEventsPage />,
  },
  {
    path: "/aecci-iac-virtual-b2b-forum",
    element: <NotFound />,
  },
  {
    path: "/events/sponsorship",
    element: <SponsorshipPage />,
  },
  {
    path: "/events/advertise-with-us",
    element: <AdvertiseWithUsPage />,
  },
  {
    path: "/events/international-collaboration",
    element: <InternationalCollaborationPage />,
  },
  {
    path: "/events/international-collaboration/partnerships",
    element: <PartnershipsIndexPage />,
  },
  {
    path: "/events/international-collaboration/partnerships/:country",
    element: <PartnerDetailPage />,
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
    element: <EPlatformInformationPage />,
  },
  {
    path: "/e-platform/information",
    element: <EPlatformInformationPage />,
  },
  {
    path: "/e-platform/formalities-guidelines",
    element: <FormalitiesGuidelinesPage />,
  },
  {
    path: "/e-platform/formalities-guidelines/information-for-e-services",
    element: <InformationForEServicesPage />,
  },
  {
    path: "/e-platform/formalities-guidelines/indemnity-bond-format",
    element: <IndemnityBondFormatPage />,
  },
  {
    path: "/e-platform/formalities-guidelines/coo-format",
    element: <CooFormatPage />,
  },
  {
    path: "/e-platform/formalities-guidelines/attestation-fees-information",
    element: <AttestationFeesInformationPage />,
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
    path: "/contact-us/head-office",
    element: <HeadOfficePage />,
  },
  {
    path: "/contact-us/international-hub",
    element: <InternationalHubPage />,
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
  path: "/terms-conditions",
  element: <TermsConditions />,
},
{
  path: "/privacy-policy",
  element: <PrivacyPolicy />,
},
  {
    path: "*",
    element: <NotFound />,
  },
];
