export interface FeaturedItem {
  title: string;
  href: string;
  description: string;
  badge?: string;
}

export interface SubLink {
  title: string;
  href: string;
  description?: string;
}

export interface MegaMenuSection {
  title: string;
  href: string;
  hasDropdown: boolean;
  featured?: FeaturedItem[];
  quickLinks?: SubLink[];
  resources?: SubLink[];
}

export const menuConfig: MegaMenuSection[] = [
  {
    title: "About Us",
    href: "/about/about-chamber",
    hasDropdown: true,
    featured: [
      {
        title: "About Chamber",
        href: "/about/about-chamber",
        description: "Pioneering trade facilitation and industry advocacy since 2005.",
        badge: "Overview",
      },
      {
        title: "Our History",
        href: "/about/our-history",
        description: "A legacy of growth, enabling global trade pathways for Indian exporters.",
        badge: "Legacy",
      },
      {
        title: "Chairman Message",
        href: "/about/chairman-message",
        description: "Leadership vision driving technological innovation and seamless exports.",
      },
      {
        title: "Chamber Policy",
        href: "/about/chamber-policy",
        description: "Unwavering commitment to ethical, progressive, and efficient commerce.",
      },
      {
        title: "Office Bearers",
        href: "/about/office-bearers",
        description: "Distinguished board of directors and executive administrative staff.",
      },
    ],
    quickLinks: [
      { title: "Roles & Responsibility", href: "/about/roles-responsibility" },
      { title: "Strategic Partners", href: "/about/strategic-partners" },
      { title: "Chamber Dynamics", href: "/about/chamber-dynamics" },
      { title: "Job Opportunities", href: "/about/jobs-opportunities" },
    ],
    resources: [
      { title: "Media Kit", href: "#media-kit", description: "Official assets and logos" },
      { title: "Contact Us", href: "#contact", description: "Direct chamber coordinates" },
    ],
  },
  {
    title: "Our Services",
    href: "/services",
    hasDropdown: true,
    featured: [
      {
        title: "The Wings",
        href: "/services/the-wings",
        href: "/about-tac",
        description: "Specialized departments driving targeted growth and compliance.",
        badge: "Departments",
      },
      {
        title: "Entrepreneur Hub",
        href: "/services/entrepreneur-hub",
        description: "Empowering startups with cross-border trade knowledge and support.",
        badge: "Startup",
      },
      {
        title: "B2B Connect",
        href: "/services/b2b-connect",
        description: "Global business matchmaking platform connecting buyers and suppliers.",
      },
      {
        title: "Membership",
        href: "/services/membership",
        description: "Exclusive access to premium tools, discounts, and trade networks.",
      },
    ],
    quickLinks: [
      { title: "AECCI Affiliate Program", href: "/aecci-affiliate-program" },
      { title: "Arbitration Center", href: "/arbitration-center" },
      { title: "Media", href: "/media" },
    ],
    resources: [
      { title: "Export Wing", href: "/services/the-wings/exports-wing", description: "Certificates of origin & customs" },
      { title: "Legal Wing", href: "/services/legal-wing", description: "Export dispute resolution & legalities" },
      { title: "HR Support Wing", href: "/services/the-wings/hr-support-wing", description: "Corporate and talent facilitation" },
      { title: "Professional Wing", href: "/services/the-wings/professional-wing", description: "Technical consultancies & certifications" },
      { title: "Business Advice Wing", href: "/services/the-wings/business-advice-wing", description: "Taxation and business strategy advice" },
      { title: "Women Wing", href: "/services/the-wings/women-wing", description: "Empowering women entrepreneurs" },
      { title: "Event & Seminar Wing", href: "/services/the-wings/event-and-seminar-wing", description: "Exhibitions & international seminars" },
    ],
  },
  {
    title: "e-Platform",
    href: "/e-platform",
    hasDropdown: true,
    featured: [
      {
        title: "Members Login",
        href: "https://e-platform.aecci.org.in/login",
        description: "Access your dashboard to manage, track, and pay with ease.",
        badge: "Portal",
      },
      {
        title: "Request Trial Version",
        href: "https://e-platform.aecci.org.in/request-trial-version",
        description: "Experience our digital portal with a 14-day comprehensive trial.",
        badge: "Demo",
      },
      {
        title: "e-CO Verification",
        href: "https://e-platform.aecci.org.in/e-co-verification",
        description: "Verify Certificates of Origin instantly with blockchain-grade trust.",
      },
      {
        title: "Track Your Document",
        href: "#",
        description: "Real-time state tracking for customs and trade certificates.",
      },
    ],
    quickLinks: [
      { title: "Formalities & Guidelines", href: "/e-platform/formalities-guidelines" },
      { title: "e-Platform Information", href: "/e-platform/e-platform-information" },
      { title: "Digital Library", href: "#" },
      { title: "Wallet", href: "#" },
    ],
    resources: [
      { title: "Membership Services", href: "#", description: "Apply and renew digitally" },
      { title: "Recommendation Letters", href: "#", description: "Visa and trade recommendations" },
      { title: "Commercial Directory", href: "/ways-means/commercial-directory", description: "Sitemap lists and entries" },
      { title: "B2B Registrations", href: "#", description: "Register your brand catalog" },
    ],
  },
  {
    title: "Arbitration Center",
    href: "/arbitration-center",
    hasDropdown: true,
    featured: [
      {
        title: "AECCI-IAC",
        href: "/why-aecci",
        description: "International Arbitration Centre resolving cross-border disputes.",
        badge: "Judicial",
      },
      {
        title: "Raise your Dispute",
        href: "/schedule-fees",
        description: "Streamlined online dispute filing system for member protection.",
        badge: "Action",
      },
      {
        title: "Panel Name",
        href: "/aecci-iac-panel",
        description: "Distinguished panel of certified trade arbitrators and legal minds.",
      },
    ],
    quickLinks: [
      { title: "Rules & Policies", href: "/rules-and-policies" },
      { title: "List Of Agreement", href: "/aecci-iac-model-clause" },
    ],
    resources: [
      { title: "Arbitration Support", href: "/aecci-iac-faq", description: "Case management guidance" },
      { title: "Legal Consultation", href: "#", description: "1-on-1 advice with trade lawyers" },
    ],
  },
  {
    title: "Ways & Means",
    href: "/ways-means",
    hasDropdown: true,
    featured: [
      {
        title: "Research & Information",
        href: "/ways-means/research-and-information",
        description: "Data-driven research reports on emerging global market shifts.",
        badge: "Insights",
      },
      {
        title: "Commercial Directory",
        href: "/ways-means/commercial-directory",
        description: "Verified database of high-performing Asian exporting enterprises.",
        badge: "Database",
      },
      {
        title: "Annual Reports",
        href: "/ways-means/annual-report",
        description: "Comprehensive review of trade progress and economic insights.",
      },
    ],
    quickLinks: [
      { title: "Indian Innovation Index", href: "/ways-means/india-innovation-index" },
      { title: "Export Promotion Council", href: "/ways-means/export-promotion-council" },
    ],
    resources: [
      { title: "Trade Insights", href: "#", description: "Bi-monthly economic newsletters" },
      { title: "Business Resources", href: "#", description: "Ready-to-use policy templates" },
    ],
  },
  {
    title: "Events",
    href: "/events",
    hasDropdown: true,
    featured: [
      {
        title: "Chamber Events",
        href: "/events/past-events",
        description: "Key meetings, roundtables, and governmental policy discussions.",
        badge: "Internal",
      },
      {
        title: "B2B Events",
        href: "/aecci-iac-virtual-b2b-forum",
        description: "Exhibitions and expos matching international trade buyers.",
        badge: "Global",
      },
      {
        title: "Sponsorships",
        href: "/events/sponsorship",
        description: "Elevate your brand presence in premium international business events.",
      },
    ],
    quickLinks: [
      { title: "Upcoming Events", href: "/upcoming-events" },
      { title: "Event Registration", href: "#" },
    ],
    resources: [
      { title: "Networking", href: "#", description: "Monthly member meetup sessions" },
      { title: "Business Forums", href: "#", description: "Interactive cross-border discussions" },
    ],
  },
  {
    title: "Publications",
    href: "/media/publications",
    hasDropdown: true,
    featured: [
      {
        title: "Digital Library",
        href: "#",
        description: "A curated repository of export handbooks, manuals, and templates.",
        badge: "Archive",
      },
      {
        title: "Media",
        href: "/media",
        description: "Latest press releases, video coverages, and industry news bulletins.",
        badge: "Press",
      },
      {
        title: "Notifications",
        href: "#",
        description: "Direct updates on custom policies, tariffs, and trade mandates.",
      },
    ],
    quickLinks: [
      { title: "Trade Updates", href: "#" },
      { title: "Export News", href: "/media/e-newsletters" },
    ],
    resources: [
      { title: "Business Articles", href: "/aecci-viewpoints", description: "Expert viewpoints and case studies" },
      { title: "Research Papers", href: "/ways-means/research-and-information", description: "Academic research on trade policies" },
    ],
  },
  {
    title: "Membership",
    href: "#",
    hasDropdown: true,
    featured: [
      {
        title: "Membership Plans",
        href: "#",
        description: "Flexible tiers designed for single exporters up to massive conglomerates.",
        badge: "Pricing",
      },
      {
        title: "Membership Renewal",
        href: "#",
        description: "Fast renewal pathway with uninterrupted member benefits.",
        badge: "Quick Pay",
      },
      {
        title: "Benefits",
        href: "#",
        description: "Key insights, priority custom services, and premium networking access.",
      },
    ],
    quickLinks: [
      { title: "Register", href: "#" },
      { title: "Support", href: "#" },
    ],
    resources: [
      { title: "Business Networking", href: "#", description: "Interact with 10k+ local members" },
      { title: "Global Partnerships", href: "/international-collaboration", description: "Strategic tie-ups with foreign chambers" },
    ],
  },
  {
    title: "Contact",
    href: "/contact-us",
    hasDropdown: true,
    featured: [
      {
        title: "Contact Us",
        href: "/contact-us/aecci-head-office",
        description: "Reach out to our main offices, helpline, or specialized desks.",
        badge: "Helpdesk",
      },
      {
        title: "Support",
        href: "#",
        description: "24/7 dedicated support portal for urgent customs and trade challenges.",
        badge: "Urgent",
      },
    ],
    quickLinks: [
      { title: "Office Locations", href: "/tac-locations" },
      { title: "Help Desk", href: "#" },
    ],
    resources: [
      { title: "Customer Support", href: "#", description: "Resolve transaction or e-CO issues" },
      { title: "Business Enquiry", href: "#", description: "Request commercial quotes & partnerships" },
    ],
  },
];