// import { ThemeSelector } from "@/components/themes/theme-selector";
import {
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
  TwitterLogo,
  YoutubeLogo,
} from "@phosphor-icons/react";
import { Link } from "react-router-dom";

type FooterLink = { label: string; href: string; badge?: string };

const footerSections: { title: string; links: FooterLink[] }[] = [
  {
    title: "About Us",
    links: [
      { label: "About Chamber", href: "/about/about-chamber" },
      // { label: "Our History", href: "/about/our-history" },
      { label: "Chairman Message", href: "/about/chairman-message" },
      // { label: "Chamber Policy", href: "/about/chamber-policy" },

      // { label: "Roles & Responsibility", href: "/about/roles-responsibility" },
      { label: "Strategic Partners", href: "/about/strategic-partners" },
      // { label: "Chamber Dynamics", href: "/about/chamber-dynamics" },
      { label: "Job Opportunities", href: "/about/jobs-opportunities" },
    ],
  },

  {
    title: "Our Services",
    links: [
      { label: "Global Connect", href: "/global-connect", badge: "New" },
      { label: "Membership", href: "/services/membership" },
      { label: "Membership & its benefits", href: "/services/membership/benefits" },
      { label: "Fee, Forms & Guidelines", href: "/services/membership/fee-forms-guidelines" },
      { label: "Enrollment Offers", href: "/services/membership/enrollment-offers" },
      { label: "Visa Recommendation", href: "/services/membership/visa-recommendation" },
      { label: "Renew Membership", href: "/services/membership/renew" },
    ],
  },

  {
    title: "AECCI Spotlight",
    links: [
      { label: "Sponsorship", href: "/events/sponsorship" },
      { label: "Past Events", href: "/events/past-events" },
      { label: "Advertise With Us", href: "/events/advertise-with-us" },
      {
        label: "International Collaboration",
        href: "/events/international-collaboration",
      },
      { label: "Media Center", href: "/events/media-center" },
      { label: "Publications", href: "/events/publications" },
    ],
  },

  {
    title: "Contact Us",
    links: [
      { label: "AECCI Head Office", href: "/contact-us/head-office" },
    ],
  },
];

const socialLinks = [
  { label: "Facebook", icon: FacebookLogo, href: "#" },
  { label: "Twitter", icon: TwitterLogo, href: "#" },
  { label: "YouTube", icon: YoutubeLogo, href: "#" }, 
  { label: "LinkedIn", icon: LinkedinLogo, href: "#" },
  { label: "Instagram", icon: InstagramLogo, href: "#" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border bg-card text-card-foreground">
      {/* subtle texture */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.04] bg-[radial-gradient(#000_1px,transparent_1px)] bg-[size:18px_18px]" />

      <div className="relative mx-auto max-w-[1280px] px-6 md:px-10 py-8">
        {/* Top Footer */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          {/* Brand */}
          <div className="md:col-span-3 flex flex-col items-start">
            <Link to="/" className="block cursor-pointer">
              <img
                src="/aecci-logo-horizontal.png"
                alt="AECCI"
                className="h-16 md:h-20 w-auto object-contain"
              />
            </Link>

            <h3 className="mt-4 text-[16px] font-extrabold uppercase tracking-tight text-primary">
              Come Grow With Us!
            </h3>

            <div className="mt-3 text-[12.5px] leading-relaxed text-muted-foreground font-light max-w-xs">
              <p className="font-semibold text-foreground">
                Asian Exporters’ Chamber Of Commerce & Industry
              </p>
              <p className="mt-1">
                604 | 6th floor | Hilton Center | Plot no.66 | Sector No.11 |
                CBD Belapur | Navi Mumbai-400614 | Maharashtra-India</p>
            </div>
          </div>

          {/* Menus */}
          <div className="md:col-span-9 grid grid-cols-2 md:grid-cols-4 gap-6">
            {footerSections.map((section) => (
              <div key={section.title}>
                <h4 className="mb-3 text-[16px] font-semibold tracking-tight">
                  {section.title}
                </h4>

                <ul className="space-y-1">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.href}
                        className="text-[14px] text-muted-foreground transition-colors duration-200 hover:text-primary flex items-center gap-1.5"
                      >
                        {link.label}
                        {link.badge && (
                          <span className="inline-flex items-center justify-center rounded-full bg-primary/10 px-1.5 py-0.5 text-[10px] font-medium text-primary leading-none uppercase tracking-wider">
                            {link.badge}
                          </span>
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>

                {/* Social */}
                {section.title === "Contact Us" && (
                  <div className="mt-6">
                    <h5 className="mb-3 text-[16px] font-bold tracking-tight text-primary">
                      Stay Connected:
                    </h5>

                    <div className="flex items-center gap-2">
                      {socialLinks.map((item, idx) => {
                        const Icon = item.icon;

                        return (
                          <a
                            key={idx}
                            href={item.href}
                            aria-label={item.label}
                            rel="noopener noreferrer"
                            className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform duration-200 hover:scale-110 hover:bg-primary/85"
                          >
                            <Icon weight="fill" className="w-4 h-4" />
                          </a>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="my-6 h-px w-full bg-border" />

        {/* Bottom Footer */}
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          {/* Left */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <p className="text-[13px] text-muted-foreground">
              Copyright © {new Date().getFullYear()}{" "}
              <span className="font-semibold text-foreground">
                Asian Exporters' Chamber of Commerce and Industry
              </span>
            </p>
            {/* <ThemeSelector /> */}
          </div>

          {/* Right */}
          <div className="flex flex-col items-start gap-2 md:items-end">
            <div className="flex flex-wrap items-center gap-2 text-[13px] font-medium">
              <Link to="/terms-conditions" className="hover:text-primary">
                Terms & Conditions
              </Link>

              <span>|</span>

              <Link to="/privacy-policy" className="hover:text-primary">
                Privacy Policy
              </Link>

              <span>|</span>

              <Link to="/sitemap" className="hover:text-primary">
                Sitemap
              </Link>

              <span>|</span>

              <span>Site maintained and Developed by AECCI.</span>
            </div>

            <p className="text-[12px] text-muted-foreground">
              The site is best viewed using IE11 and above, Mozilla Firefox,
              Safari and Chrome.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
