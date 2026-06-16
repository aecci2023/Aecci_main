export interface SubMenuItem {
  title: string;
  href: string;
}

export interface FeaturedItem {
  title: string;
  href: string;
  description: string;
  badge?: string;
  items?: SubMenuItem[];
}

export interface SubLink {
  title: string;
  href: string;
  description?: string;
  items?: SubMenuItem[];
}

export interface MenuCategory {
  title: string;
  href: string;
  items?: SubMenuItem[];
}

export interface MegaMenuSection {
  title: string;
  href: string;
  hasDropdown: boolean;
  featured?: FeaturedItem[];
  quickLinks?: SubLink[];
  resources?: SubLink[];
  mobileMenu?: MenuCategory[]; // Hierarchical structure for mobile branching
}

export const menuConfig: MegaMenuSection[] = [
  {
    title: "About AECCI",
    href: "/about/about-chamber",
    hasDropdown: true,
    featured: [
      {
        title: "About Chamber",
        href: "/about/about-chamber",
        description: "Pioneering trade facilitation and industry advocacy since 2005.",
      },
      // {
      //   title: "Our History",
      //   href: "/about/our-history",
      //   description: "A legacy of growth, enabling global trade pathways for Indian exporters.",
      // },
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

    ],
    quickLinks: [
      // { title: "Roles & Responsibility", href: "/about/roles-responsibility" },
      { title: "Strategic Partners", href: "/about/strategic-partners" },
      { title: "Chamber Dynamics", href: "/about/chamber-dynamics" },
      // { title: "Job Opportunities", href: "/about/jobs-opportunities" },
    ],
    mobileMenu: [
      { title: "About Chamber", href: "/about/about-chamber" },
      { title: "Our History", href: "/about/our-history" },
      { title: "Chairman Message", href: "/about/chairman-message" },
      { title: "Chamber Policy", href: "/about/chamber-policy" },

      // { title: "Roles & Responsibility", href: "/about/roles-responsibility" },
      { title: "Strategic Partners", href: "/about/strategic-partners" },
      { title: "Chamber Dynamics", href: "/about/chamber-dynamics" },
      { title: "Job Opportunities", href: "/about/jobs-opportunities" },
    ]
  },
  {
    title: "Services",
    href: "/services",
    hasDropdown: true,
    featured: [
      {
        title: "Membership",
        href: "/services/membership",
        description: "Exclusive access to premium tools, discounts, and trade networks.",
        items: [
          { title: "Patron Membership", href: "/services/membership/patron-membership" },
          { title: "Membership & its benefits", href: "/services/membership/benefits" },
          { title: "Fee, Forms & Guidelines", href: "/services/membership/fee-forms-guidelines" },
          { title: "Enrollment Offers", href: "/services/membership/enrollment-offers" },
          { title: "Visa Recommendation", href: "/services/membership/visa-recommendation" },
        ],
      },
    ],
    quickLinks: [
      {
        title: "AECCI Affiliate Program",
        href: "/services/aecci-affiliate-program",
        items: [
          { title: "Meet our Wings Experts", href: "/services/affiliate-program/meet-experts" },
          { title: "Join Our Affiliate Network", href: "/services/affiliate-program/join-network" },
        ],
      },
    ],
    resources: [], // Moved the wings here before, now they are in featured -> items
    mobileMenu: [
      {
        title: "Membership",
        href: "/services/membership",
        items: [
          { title: "Patron Membership", href: "/services/membership/patron-membership" },
          { title: "Membership & its benefits", href: "/services/membership/benefits" },
          { title: "Fee, Forms & Guidelines", href: "/services/membership/fee-forms-guidelines" },
          { title: "Enrollment Offers", href: "/services/membership/enrollment-offers" },
          { title: "Visa Recommendation", href: "/services/membership/visa-recommendation" },
        ],
      },
      {
        title: "AECCI Affiliate Program",
        href: "/services/affiliate-program",
        items: [
          { title: "Meet our Wings Experts", href: "/services/affiliate-program/meet-experts" },
          { title: "Join Our Affiliate Network", href: "/services/affiliate-program/join-network" },
        ],
      },
    ]
  },
  {
    title: "Arbitration Center",
    href: "/arbitration-center",
    hasDropdown: true,
    featured: [
      {
        title: "Why AECCI-IAC?",
        href: "/arbitration-center/why-aecci-iac",
        description: "International Arbitration Centre resolving cross-border disputes.",
      },
      {
        title: "Schedule Fees",
        href: "/arbitration-center/schedule-fees",
        description: "Transparent fee structures for streamlined dispute resolution.",
      },
      {
        title: "Panel of Arbitrators",
        href: "/arbitration-center/panel-of-arbitrators",
        description: "Distinguished panel of certified trade arbitrators and legal minds.",
      },
    ],
    quickLinks: [
      { title: "Rules and Policies", href: "/arbitration-center/rules-and-policies" },
      { title: "AECCI-IAC Model Clause", href: "/arbitration-center/model-clause" },
    ],
    resources: [
      { title: "AECCI-IAC FAQ", href: "/arbitration-center/faq", description: "Case management guidance" },
    ],
    mobileMenu: [
      { title: "Why AECCI-IAC?", href: "/arbitration-center/why-aecci-iac" },
      { title: "Schedule Fees", href: "/arbitration-center/schedule-fees" },
      { title: "Rules and Policies", href: "/arbitration-center/rules-and-policies" },
      { title: "AECCI-IAC Model Clause", href: "/arbitration-center/model-clause" },
      { title: "AECCI-IAC FAQ", href: "/arbitration-center/faq" },
      { title: "Panel of Arbitrators", href: "/arbitration-center/panel-of-arbitrators" },
    ]
  },
  {
    title: "Ways & Means",
    href: "/ways-means",
    hasDropdown: true,
    featured: [
      {
        title: "Commercial Directory",
        href: "/ways-means/commercial-directory",
        description: "Verified database of high-performing Asian exporting enterprises.",
      },
    ],
    mobileMenu: [
      { title: "Commercial Directory", href: "/ways-means/commercial-directory" },
    ]
  },
  {
    title: "Media",
    href: "/media",
    hasDropdown: true,
    featured: [
      {
        title: "Media Center",
        href: "/media/media-center",
        description: "Latest press releases, video coverages, and industry news bulletins.",
      },
      {
        title: "Publications",
        href: "/media/publications",
        description: "A curated repository of export handbooks, manuals, and templates.",
      },
    ],
    quickLinks: [
      { title: "E-Newsletters", href: "/media/e-newsletters" },
      { title: "Gallery", href: "/media/gallery" },
    ],
    mobileMenu: [
      { title: "e-Newsletters", href: "/media/e-newsletters" },
      { title: "Media Center", href: "/media/media-center" },
      { title: "Gallery", href: "/media/gallery" },
      { title: "Publications", href: "/media/publications" },
    ]
  },
  {
    title: "Events",
    href: "/events",
    hasDropdown: true,
    featured: [
      {
        title: "Upcoming events",
        href: "/events/upcoming-events",
        description: "Key meetings, roundtables, and governmental policy discussions.",
      },
      {
        title: "Virtual B2B Forum",
        href: "/events/virtual-b2b-forum",
        description: "Exhibitions and expos matching international trade buyers.",
      },
      {
        title: "Sponsorship",
        href: "/events/sponsorship",
        description: "Elevate your brand presence in premium international business events.",
      },
    ],
    quickLinks: [
      { title: "Past Events", href: "/events/past-events" },
      { title: "Advertise With Us", href: "/events/advertise-with-us" },
      { title: "International Collaboration", href: "/events/international-collaboration" },
      // { title: "World conference Information", href: "/events/world-conference-information" },
    ],
    mobileMenu: [
      { title: "Upcoming events", href: "/events/upcoming-events" },
      { title: "Past Events", href: "/events/past-events" },
      { title: "Virtual B2B Forum", href: "/events/virtual-b2b-forum" },
      { title: "Sponsorship", href: "/events/sponsorship" },
      { title: "Advertise With Us", href: "/events/advertise-with-us" },
      { title: "International Collaboration", href: "/events/international-collaboration" },
      // { title: "World conference Information", href: "/events/world-conference-information" },
    ]
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
      },
      {
        title: "Request Trial Version",
        href: "https://e-platform.aecci.org.in/request-trial-version",
        description: "Experience our digital portal with a 14-day comprehensive trial.",
      },
      {
        title: "Document Verification",
        href: "/e-platform/document-verification",
        description: "Verify Certificates of Origin instantly with blockchain-grade trust.",
      },
    ],
    quickLinks: [
      { title: "E-Platform Information", href: "/e-platform/information" },
      {
        title: "Formalities & Guidelines",
        href: "/e-platform/formalities-guidelines",
        items: [
          { title: "Information for E-Services", href: "/e-platform/formalities-guidelines/information-for-e-services" },
          { title: "Indemnity Bond Format", href: "/e-platform/formalities-guidelines/indemnity-bond-format" },
          { title: "COO Format", href: "/e-platform/formalities-guidelines/coo-format" },
          { title: "Attestation Fees information", href: "/e-platform/formalities-guidelines/attestation-fees-information" },
          { title: "Authorized Chamber Card", href: "/e-platform/formalities-guidelines/authorized-chamber-card" },
        ],
      },
    ],
    resources: [], // Moved the sub items to Formalities & Guidelines
    mobileMenu: [
      { title: "E-Platform Information", href: "/e-platform/information" },
      { title: "Members Login", href: "https://e-platform.aecci.org.in/login" },
      { title: "Request Trial Version", href: "https://e-platform.aecci.org.in/request-trial-version" },
      {
        title: "Formalities & Guidelines",
        href: "/e-platform/formalities-guidelines",
        items: [
          { title: "Information for E-Services", href: "/e-platform/formalities-guidelines/information-for-e-services" },
          { title: "Indemnity Bond Format", href: "/e-platform/formalities-guidelines/indemnity-bond-format" },
          { title: "COO Format", href: "/e-platform/formalities-guidelines/coo-format" },
          { title: "Attestation Fees information", href: "/e-platform/formalities-guidelines/attestation-fees-information" },
          { title: "Authorized Chamber Card", href: "/e-platform/formalities-guidelines/authorized-chamber-card" },
        ],
      },
      { title: "Document Verification", href: "/e-platform/document-verification" },
    ]
  },
  {
    title: "Contact Us",
    href: "/contact-us",
    hasDropdown: true,
    featured: [
      {
        title: "AECCI Head Office",
        href: "/contact-us/head-office",
        description: "Reach out to our main offices, helpline, or specialized desks.",
      },
      {
        title: "AECCI International Hub",
        href: "/contact-us/international-hub",
        description: "Connect with our international trade facilitation branches.",
      },
    ],
    mobileMenu: [
      { title: "AECCI Head Office", href: "/contact-us/head-office" },
      { title: "AECCI International Hub", href: "/contact-us/international-hub" },
    ]
  },
];