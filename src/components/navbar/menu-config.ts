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
    href: "#services",
    hasDropdown: true,
    featured: [
      {
        title: "The Wings",
        href: "#wings",
        description: "Specialized departments driving targeted growth and compliance.",
        badge: "Departments",
      },
      {
        title: "Entrepreneur Hub",
        href: "#hub",
        description: "Empowering startups with cross-border trade knowledge and support.",
        badge: "Startup",
      },
      {
        title: "B2B Connect",
        href: "#b2b-connect",
        description: "Global business matchmaking platform connecting buyers and suppliers.",
      },
      {
        title: "Membership",
        href: "#membership-featured",
        description: "Exclusive access to premium tools, discounts, and trade networks.",
      },
    ],
    quickLinks: [
      { title: "AECCI Affiliate Program", href: "#affiliate" },
      { title: "Arbitration Center", href: "#arbitration" },
      { title: "Media", href: "#services-media" },
    ],
    resources: [
      { title: "Export Wing", href: "#export-wing", description: "Certificates of origin & customs" },
      { title: "Legal Wing", href: "#legal-wing", description: "Export dispute resolution & legalities" },
      { title: "HR Support Wing", href: "#hr-wing", description: "Corporate and talent facilitation" },
      { title: "Professional Wing", href: "#prof-wing", description: "Technical consultancies & certifications" },
      { title: "Business Advice Wing", href: "#advice-wing", description: "Taxation and business strategy advice" },
      { title: "Women Wing", href: "#women-wing", description: "Empowering women entrepreneurs" },
      { title: "Event & Seminar Wing", href: "#event-wing", description: "Exhibitions & international seminars" },
    ],
  },
  {
    title: "e-Platform",
    href: "#e-platform",
    hasDropdown: true,
    featured: [
      {
        title: "Members Login",
        href: "#login",
        description: "Access your dashboard to manage, track, and pay with ease.",
        badge: "Portal",
      },
      {
        title: "Request Trial Version",
        href: "#trial",
        description: "Experience our digital portal with a 14-day comprehensive trial.",
        badge: "Demo",
      },
      {
        title: "e-CO Verification",
        href: "#eco-verify",
        description: "Verify Certificates of Origin instantly with blockchain-grade trust.",
      },
      {
        title: "Track Your Document",
        href: "#track-doc",
        description: "Real-time state tracking for customs and trade certificates.",
      },
    ],
    quickLinks: [
      { title: "Formalities & Guidelines", href: "#guidelines" },
      { title: "e-Platform Information", href: "#platform-info" },
      { title: "Digital Library", href: "#platform-library" },
      { title: "Wallet", href: "#wallet" },
    ],
    resources: [
      { title: "Membership Services", href: "#member-services", description: "Apply and renew digitally" },
      { title: "Recommendation Letters", href: "#reco-letters", description: "Visa and trade recommendations" },
      { title: "Commercial Directory", href: "#directory-res", description: "Sitemap lists and entries" },
      { title: "B2B Registrations", href: "#b2b-register", description: "Register your brand catalog" },
    ],
  },
  {
    title: "Arbitration Center",
    href: "#arbitration",
    hasDropdown: true,
    featured: [
      {
        title: "AECCI-IAC",
        href: "#iac",
        description: "International Arbitration Centre resolving cross-border disputes.",
        badge: "Judicial",
      },
      {
        title: "Raise your Dispute",
        href: "#raise-dispute",
        description: "Streamlined online dispute filing system for member protection.",
        badge: "Action",
      },
      {
        title: "Panel Name",
        href: "#panel-name",
        description: "Distinguished panel of certified trade arbitrators and legal minds.",
      },
    ],
    quickLinks: [
      { title: "Rules & Policies", href: "#rules" },
      { title: "List Of Agreement", href: "#agreements" },
    ],
    resources: [
      { title: "Arbitration Support", href: "#arbitration-support", description: "Case management guidance" },
      { title: "Legal Consultation", href: "#legal-consult", description: "1-on-1 advice with trade lawyers" },
    ],
  },
  {
    title: "Ways & Means",
    href: "#ways-means",
    hasDropdown: true,
    featured: [
      {
        title: "Research & Information",
        href: "#research",
        description: "Data-driven research reports on emerging global market shifts.",
        badge: "Insights",
      },
      {
        title: "Commercial Directory",
        href: "#directory",
        description: "Verified database of high-performing Asian exporting enterprises.",
        badge: "Database",
      },
      {
        title: "Annual Reports",
        href: "#annual-reports",
        description: "Comprehensive review of trade progress and economic insights.",
      },
    ],
    quickLinks: [
      { title: "Indian Innovation Index", href: "#innovation-index" },
      { title: "Export Promotion Council", href: "#epc" },
    ],
    resources: [
      { title: "Trade Insights", href: "#trade-insights", description: "Bi-monthly economic newsletters" },
      { title: "Business Resources", href: "#biz-resources", description: "Ready-to-use policy templates" },
    ],
  },
  {
    title: "Events",
    href: "#events",
    hasDropdown: true,
    featured: [
      {
        title: "Chamber Events",
        href: "#chamber-events",
        description: "Key meetings, roundtables, and governmental policy discussions.",
        badge: "Internal",
      },
      {
        title: "B2B Events",
        href: "#b2b-events",
        description: "Exhibitions and expos matching international trade buyers.",
        badge: "Global",
      },
      {
        title: "Sponsorships",
        href: "#sponsorships",
        description: "Elevate your brand presence in premium international business events.",
      },
    ],
    quickLinks: [
      { title: "Upcoming Events", href: "#upcoming-events" },
      { title: "Event Registration", href: "#event-register" },
    ],
    resources: [
      { title: "Networking", href: "#networking-sessions", description: "Monthly member meetup sessions" },
      { title: "Business Forums", href: "#biz-forums", description: "Interactive cross-border discussions" },
    ],
  },
  {
    title: "Publications",
    href: "#publications",
    hasDropdown: true,
    featured: [
      {
        title: "Digital Library",
        href: "#digital-library",
        description: "A curated repository of export handbooks, manuals, and templates.",
        badge: "Archive",
      },
      {
        title: "Media",
        href: "#media-pubs",
        description: "Latest press releases, video coverages, and industry news bulletins.",
        badge: "Press",
      },
      {
        title: "Notifications",
        href: "#notifications",
        description: "Direct updates on custom policies, tariffs, and trade mandates.",
      },
    ],
    quickLinks: [
      { title: "Trade Updates", href: "#trade-updates" },
      { title: "Export News", href: "#export-news" },
    ],
    resources: [
      { title: "Business Articles", href: "#biz-articles", description: "Expert viewpoints and case studies" },
      { title: "Research Papers", href: "#research-papers", description: "Academic research on trade policies" },
    ],
  },
  {
    title: "Membership",
    href: "#membership",
    hasDropdown: true,
    featured: [
      {
        title: "Membership Plans",
        href: "#plans",
        description: "Flexible tiers designed for single exporters up to massive conglomerates.",
        badge: "Pricing",
      },
      {
        title: "Membership Renewal",
        href: "#renewal",
        description: "Fast renewal pathway with uninterrupted member benefits.",
        badge: "Quick Pay",
      },
      {
        title: "Benefits",
        href: "#benefits-featured",
        description: "Key insights, priority custom services, and premium networking access.",
      },
    ],
    quickLinks: [
      { title: "Register", href: "#register-now" },
      { title: "Support", href: "#membership-support" },
    ],
    resources: [
      { title: "Business Networking", href: "#biz-net", description: "Interact with 10k+ local members" },
      { title: "Global Partnerships", href: "#global-partners", description: "Strategic tie-ups with foreign chambers" },
    ],
  },
  {
    title: "Contact",
    href: "#contact-section",
    hasDropdown: true,
    featured: [
      {
        title: "Contact Us",
        href: "#contact-us",
        description: "Reach out to our main offices, helpline, or specialized desks.",
        badge: "Helpdesk",
      },
      {
        title: "Support",
        href: "#support-help",
        description: "24/7 dedicated support portal for urgent customs and trade challenges.",
        badge: "Urgent",
      },
    ],
    quickLinks: [
      { title: "Office Locations", href: "#office-locations" },
      { title: "Help Desk", href: "#helpdesk" },
    ],
    resources: [
      { title: "Customer Support", href: "#cust-support", description: "Resolve transaction or e-CO issues" },
      { title: "Business Enquiry", href: "#biz-enquiry", description: "Request commercial quotes & partnerships" },
    ],
  },
];