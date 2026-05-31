import type { RouteObject } from "react-router-dom";
import Home from "@/pages/Home";

import AboutChamber from "@/pages/about/AboutChamber";
import OurHistory from "@/pages/about/OurHistory";
import ChairmanMessage from "@/pages/about/ChairmanMessage";
import ChamberPolicy from "@/pages/about/ChamberPolicy";
import OfficeBearers from "@/pages/about/OfficeBearers";
import RolesResponsibility from "@/pages/about/RolesResponsibility";
import StrategicPartners from "@/pages/about/StrategicPartners";
import ChamberDynamics from "@/pages/about/ChamberDynamics";
import JobOpportunities from "@/pages/about/JobOpportunities";

import ArbitrationCenter from "@/pages/arbitration-center/index";
import WhyAecci from "@/pages/why-aecci/index";
import ScheduleFees from "@/pages/schedule-fees/index";
import RulesAndPolicies from "@/pages/rules-and-policies/index";
import AecciIacModelClause from "@/pages/aecci-iac-model-clause/index";
import AecciIacFaq from "@/pages/aecci-iac-faq/index";
import AecciIacPanel from "@/pages/aecci-iac-panel/index";
import WaysMeans from "@/pages/ways-means/index";
import ResearchAndInformation from "@/pages/ways-means/research-and-information/index";
import EconomicAnalysis from "@/pages/ways-means/research-and-information/economic-analysis/index";
import BusinessOpportunitiesBrief from "@/pages/ways-means/research-and-information/business-opportunities-brief/index";
import IndianEconomicReport from "@/pages/ways-means/research-and-information/indian-economic-report/index";
import OperationalGuides from "@/pages/ways-means/research-and-information/operational-guides/index";
import IndiaInnovationIndex from "@/pages/ways-means/india-innovation-index/index";
import AnnualReport from "@/pages/ways-means/annual-report/index";
import CommercialDirectory from "@/pages/ways-means/commercial-directory/index";
import ExportPromotionCouncil from "@/pages/ways-means/export-promotion-council/index";

import Media from "@/pages/media/index";
import ENewsletters from "@/pages/media/e-newsletters/index";
import MediaCenter from "@/pages/media/media-center/index";
import AecciViewpoints from "@/pages/aecci-viewpoints/index";
import Gallery from "@/pages/media/gallery/index";
import Publications from "@/pages/media/publications/index";

import Events from "@/pages/events/index";
import UpcomingEvents from "@/pages/upcoming-events/index";
import PastEvents from "@/pages/events/past-events/index";
import VirtualB2bForum from "@/pages/aecci-iac-virtual-b2b-forum/index";
import Sponsorship from "@/pages/events/sponsorship/index";
import AdvertiseWithUs from "@/pages/advertise-with-us/index";
import InternationalCollaboration from "@/pages/international-collaboration/index";
import WorldConference from "@/pages/world-conference/index";

import EPlatform from "@/pages/e-platform/index";
import EPlatformInformation from "@/pages/e-platform/e-platform-information/index";
import FormalitiesGuidelines from "@/pages/e-platform/formalities-guidelines/index";
import InformationForEServices from "@/pages/e-platform/formalities-guidelines/information-for-e-services/index";
import IndemnityBondFormat from "@/pages/e-platform/formalities-guidelines/indemnity-bond-format/index";
import CooFormat from "@/pages/e-platform/formalities-guidelines/coo-format/index";
import AttestationFeesInformation from "@/pages/e-platform/formalities-guidelines/attestation-fees-information/index";
import AuthorizedChamberCard from "@/pages/e-platform/formalities-guidelines/authorized-chamber-card/index";

import TradeAssistantCentre from "@/pages/trade-assistant-centre/index";
import AboutTac from "@/pages/about-tac/index";
import TacProcess from "@/pages/tac-process/index";
import TacLocations from "@/pages/tac-locations/index";

import ContactUs from "@/pages/contact-us/index";
import AecciHeadOffice from "@/pages/contact-us/aecci-head-office/index";
import AecciInternationalHub from "@/pages/contact-us/aecci-international-hub/index";

import PlaceholderPage from "@/pages/PlaceholderPage";
import OurServices from "@/pages/services/OurServices";
import TheWings from "@/pages/services/the-wings/TheWings";
import ExportsWing from "@/pages/services/the-wings/ExportsWing";
import LegalWing from "@/pages/services/the-wings/LegalWing";
import HrSupportWing from "@/pages/services/the-wings/HrSupportWing";
import ProfessionalWing from "@/pages/services/the-wings/ProfessionalWing";
import BusinessAdviceWing from "@/pages/services/the-wings/BusinessAdviceWing";
import WomenWing from "@/pages/services/the-wings/WomenWing";
import EventSeminarWing from "@/pages/services/the-wings/EventSeminarWing";

import EntrepreneurHub from "@/pages/services/entrepreneur-hub/EntrepreneurHub";
import StartupIndia from "@/pages/services/entrepreneur-hub/StartupIndia";
import InvestmentIndia from "@/pages/services/entrepreneur-hub/InvestmentIndia";
import MakeInIndia from "@/pages/services/entrepreneur-hub/MakeInIndia";

import B2bConnect from "@/pages/services/b2b-connect/B2bConnect";
import Membership from "@/pages/services/membership/Membership";
import AffiliateProgram from "@/pages/services/affiliate-program/AffiliateProgram";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  // Added mappings for simple /about and /contact standard paths
  {
    path: "/about",
    element: <AboutChamber />,
  },
  {
    path: "/contact",
    element: <ContactUs />,
  },
  {
    path: "/about/about-chamber",
    element: <AboutChamber />,
  },
  {
    path: "/about/our-history",
    element: <OurHistory />,
  },
  {
    path: "/about/chairman-message",
    element: <ChairmanMessage />,
  },
  {
    path: "/about/chamber-policy",
    element: <ChamberPolicy />,
  },
  {
    path: "/about/office-bearers",
    element: <OfficeBearers />,
  },
  {
    path: "/about/roles-responsibility",
    element: <RolesResponsibility />,
  },
  {
    path: "/about/strategic-partners",
    element: <StrategicPartners />,
  },
  {
    path: "/about/chamber-dynamics",
    element: <ChamberDynamics />,
  },
  {
    path: "/about/jobs-opportunities",
    element: <JobOpportunities />,
  },

  // Services Main & The Wings
  {
    path: "/services",
    element: <OurServices />,
  },
  {
    path: "/services/the-wings",
    element: <TheWings />,
  },
  {
    path: "/services/the-wings/exports-wing",
    element: <ExportsWing />,
  },
  {
    path: "/services/legal-wing",
    element: <LegalWing />,
  },
  {
    path: "/services/the-wings/hr-support-wing",
    element: <HrSupportWing />,
  },
  {
    path: "/services/the-wings/professional-wing",
    element: <ProfessionalWing />,
  },
  {
    path: "/services/the-wings/business-advice-wing",
    element: <BusinessAdviceWing />,
  },
  {
    path: "/services/the-wings/women-wing",
    element: <WomenWing />,
  },
  {
    path: "/services/the-wings/event-and-seminar-wing",
    element: <EventSeminarWing />,
  },

  // Added nested routes matching user's format explicitly
  {
    path: "/services/exports-wing",
    element: <ExportsWing />,
  },

  {
    path: "/services/the-wings/exports-wing-our-export-wing",
    element: <PlaceholderPage title="Our Export Wing" />,
  },
  {
    path: "/services/the-wings/exports-wing-our-initiatives",
    element: <PlaceholderPage title="Export Wing Initiatives" />,
  },
  {
    path: "/aecci-export-our-team",
    element: <PlaceholderPage title="Export Team" />,
  },

  {
    path: "/aecci-legal-expertise",
    element: <PlaceholderPage title="Legal Expertise" />,
  },
  {
    path: "/aecci-legal-what-we-do",
    element: <PlaceholderPage title="What We Do" />,
  },
  {
    path: "/aecci-legal-initiatives",
    element: <PlaceholderPage title="Legal Initiatives" />,
  },
  {
    path: "/aecci-legal-our-team",
    element: <PlaceholderPage title="Legal Team" />,
  },

  {
    path: "/services/the-wings/event-and-seminar-wing-our-expertise",
    element: <PlaceholderPage title="Event Wing Expertise" />,
  },
  {
    path: "/services/the-wings/event-and-seminar-wing-what-we-do",
    element: <PlaceholderPage title="Event Wing What We Do" />,
  },
  {
    path: "/services/the-wings/event-and-seminar-wing-our-initiatives",
    element: <PlaceholderPage title="Event Wing Initiatives" />,
  },
  {
    path: "/services/the-wings/event-and-seminar-wing-our-team",
    element: <PlaceholderPage title="Event Wing Team" />,
  },

  {
    path: "/submit-professionals-profile",
    element: <PlaceholderPage title="Submit Professionals Profile" />,
  },

  // Entrepreneur Hub
  {
    path: "/services/entrepreneur-hub",
    element: <EntrepreneurHub />,
  },
  {
    path: "/services/entrepreneur-hub/startup-india",
    element: <StartupIndia />,
  },
  {
    path: "/services/entrepreneur-hub/investment-india",
    element: <InvestmentIndia />,
  },
  {
    path: "/services/entrepreneur-hub/make-in-india",
    element: <MakeInIndia />,
  },

  // B2B Connect
  {
    path: "/services/b2b-connect",
    element: <B2bConnect />,
  },
  {
    path: "/services/b2b-connect/consultations",
    element: <PlaceholderPage title="B2B Consultations" />,
  },
  {
    path: "/services/b2b-connect/business-matches",
    element: <PlaceholderPage title="B2B Business Matches" />,
  },
  {
    path: "/services/b2b-connect/market-studies",
    element: <PlaceholderPage title="B2B Market Studies" />,
  },
  {
    path: "/b2b-about",
    element: <PlaceholderPage title="Virtual B2B Forum" />,
  },

  // Membership
  {
    path: "/services/membership",
    element: <Membership />,
  },
  {
    path: "/patron-members",
    element: <PlaceholderPage title="Patron Membership" />,
  },
  {
    path: "/membership-and-its-benefits",
    element: <PlaceholderPage title="Membership & Its Benefits" />,
  },
  {
    path: "/services/membership/guidelines-and-form",
    element: <PlaceholderPage title="Guidelines and Form" />,
  },
  {
    path: "/services/membership/enrollment-offers",
    element: <PlaceholderPage title="Enrollment Offers" />,
  },
  {
    path: "/services/membership/visa-recommendations-letter",
    element: <PlaceholderPage title="Visa Recommendations Letter" />,
  },

  // Affiliate Program
  {
    path: "/aecci-affiliate-program",
    element: <AffiliateProgram />,
  },
  {
    path: "/meet-our-wings-experts",
    element: <PlaceholderPage title="Meet Our Wing Experts" />,
  },
  {
    path: "/join-our-affiliate-network",
    element: <PlaceholderPage title="Join Our Affiliate Network" />,
  },

  {
    path: "/arbitration-center",
    element: <ArbitrationCenter />,
  },
  {
    path: "/why-aecci",
    element: <WhyAecci />,
  },
  {
    path: "/schedule-fees",
    element: <ScheduleFees />,
  },
  {
    path: "/rules-and-policies",
    element: <RulesAndPolicies />,
  },
  {
    path: "/aecci-iac-model-clause",
    element: <AecciIacModelClause />,
  },
  {
    path: "/aecci-iac-faq",
    element: <AecciIacFaq />,
  },
  {
    path: "/aecci-iac-panel",
    element: <AecciIacPanel />,
  },
  {
    path: "/ways-means",
    element: <WaysMeans />,
  },
  {
    path: "/ways-means/research-and-information",
    element: <ResearchAndInformation />,
  },
  {
    path: "/ways-means/research-and-information/economic-analysis",
    element: <EconomicAnalysis />,
  },
  {
    path: "/ways-means/research-and-information/business-opportunities-brief",
    element: <BusinessOpportunitiesBrief />,
  },
  {
    path: "/ways-means/research-and-information/indian-economic-report",
    element: <IndianEconomicReport />,
  },
  {
    path: "/ways-means/research-and-information/operational-guides",
    element: <OperationalGuides />,
  },
  {
    path: "/ways-means/india-innovation-index",
    element: <IndiaInnovationIndex />,
  },
  {
    path: "/ways-means/annual-report",
    element: <AnnualReport />,
  },
  {
    path: "/ways-means/commercial-directory",
    element: <CommercialDirectory />,
  },
  {
    path: "/ways-means/export-promotion-council",
    element: <ExportPromotionCouncil />,
  },
  {
    path: "/media",
    element: <Media />,
  },
  {
    path: "/media/e-newsletters",
    element: <ENewsletters />,
  },
  {
    path: "/media/media-center",
    element: <MediaCenter />,
  },
  {
    path: "/aecci-viewpoints",
    element: <AecciViewpoints />,
  },
  {
    path: "/media/gallery",
    element: <Gallery />,
  },
  {
    path: "/media/publications",
    element: <Publications />,
  },
  {
    path: "/events",
    element: <Events />,
  },
  {
    path: "/upcoming-events",
    element: <UpcomingEvents />,
  },
  {
    path: "/events/past-events",
    element: <PastEvents />,
  },
  {
    path: "/aecci-iac-virtual-b2b-forum",
    element: <VirtualB2bForum />,
  },
  {
    path: "/events/sponsorship",
    element: <Sponsorship />,
  },
  {
    path: "/advertise-with-us",
    element: <AdvertiseWithUs />,
  },
  {
    path: "/international-collaboration",
    element: <InternationalCollaboration />,
  },
  {
    path: "/world-conference",
    element: <WorldConference />,
  },
  {
    path: "/e-platform",
    element: <EPlatform />,
  },
  {
    path: "/e-platform/e-platform-information",
    element: <EPlatformInformation />,
  },
  {
    path: "/e-platform/formalities-guidelines",
    element: <FormalitiesGuidelines />,
  },
  {
    path: "/e-platform/formalities-guidelines/information-for-e-services",
    element: <InformationForEServices />,
  },
  {
    path: "/e-platform/formalities-guidelines/indemnity-bond-format",
    element: <IndemnityBondFormat />,
  },
  {
    path: "/e-platform/formalities-guidelines/coo-format",
    element: <CooFormat />,
  },
  {
    path: "/e-platform/formalities-guidelines/attestation-fees-information",
    element: <AttestationFeesInformation />,
  },
  {
    path: "/e-platform/formalities-guidelines/authorized-chamber-card",
    element: <AuthorizedChamberCard />,
  },
  {
    path: "/trade-assistant-centre",
    element: <TradeAssistantCentre />,
  },
  {
    path: "/about-tac",
    element: <AboutTac />,
  },
  {
    path: "/tac-process",
    element: <TacProcess />,
  },
  {
    path: "/tac-locations",
    element: <TacLocations />,
  },
  {
    path: "/contact-us",
    element: <ContactUs />,
  },
  {
    path: "/contact-us/aecci-head-office",
    element: <AecciHeadOffice />,
  },
  {
    path: "/contact-us/aecci-international-hub",
    element: <AecciInternationalHub />,
  },
];
