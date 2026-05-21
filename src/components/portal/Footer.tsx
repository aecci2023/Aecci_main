import {
  FacebookLogo,
  TwitterLogo,
  YoutubeLogo,
  LinkedinLogo,
  InstagramLogo,
} from "@phosphor-icons/react"

const footerSections = [
  {
    title: "About Us",
    links: [
      { label: "About Chamber", href: "#" },
      { label: "Our History", href: "#" },
      { label: "Chairman Message", href: "#" },
      { label: "Chamber Policy", href: "#" },
      { label: "Office Bearers", href: "#" },
      { label: "Roles & Responsibility", href: "#" },
      { label: "Strategic Partners", href: "#" },
      { label: "Chamber Dynamics", href: "#" },
      { label: "Job Opportunities", href: "#" },
    ],
  },

  {
    title: "Our Services",
    links: [
      { label: "The Wings", href: "#" },
      { label: "Entrepreneur Hub", href: "#" },
      { label: "B2B Connect", href: "#" },
      { label: "Membership", href: "#" },
      { label: "AECCI Affiliate Program", href: "#" },
      { label: "Arbitration Center", href: "#" },
    ],
  },

  {
    title: "Media",
    links: [
      { label: "Ways & Means", href: "#" },
      { label: "Media", href: "#" },
      { label: "Events", href: "#" },
      { label: "e-Platform", href: "#" },
      { label: "AECCI-TAC", href: "#" },
    ],
  },

  {
    title: "Contact Us",
    links: [
      { label: "AECCI Head Office", href: "#" },
      { label: "AECCI International Hub", href: "#" },
      { label: "Upcoming", href: "#" },
    ],
  },
]

const socialLinks = [
  { label: "Facebook", icon: FacebookLogo, href: "#", bg: "bg-[#3b5998]" },
  { label: "Twitter", icon: TwitterLogo, href: "#", bg: "bg-[#1DA1F2]" },
  { label: "YouTube", icon: YoutubeLogo, href: "#", bg: "bg-[#FF0000]" },
  { label: "LinkedIn", icon: LinkedinLogo, href: "#", bg: "bg-[#0077B5]" },
  { label: "Instagram", icon: InstagramLogo, href: "#", bg: "bg-[#222]" },
]

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border bg-[#f7f7f7] text-[#1f2937] dark:bg-[#111111] dark:text-white">

      {/* subtle texture */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.04] bg-[radial-gradient(#000_1px,transparent_1px)] bg-[size:18px_18px]" />

      <div className="relative mx-auto max-w-[1280px] px-6 md:px-10 py-8">

        {/* Top Footer */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">

          {/* Brand */}
          <div className="md:col-span-3 flex flex-col items-start">

            <img src="/aecci-logo.png" alt="AECCI" className="h-16 w-auto object-contain" />

            <h3 className="mt-4 text-[16px] font-extrabold uppercase tracking-tight text-[#0f5132] dark:text-primary">
              Come Grow With Us!
            </h3>
          </div>

          {/* Menus */}
          <div className="md:col-span-9 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">

            {footerSections.map((section) => (
              <div key={section.title}>
                <h4 className="mb-3 text-[16px] font-semibold tracking-tight">
                  {section.title}
                </h4>

                  <ul className="space-y-1">
                    {section.links.map((link) => (
                      <li key={link.label}>
                        <a
                          href={link.href}
                          className="text-[14px] text-muted-foreground transition-colors duration-200 hover:text-primary"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>

                {/* Social */}
                {section.title === "Contact Us" && (
                  <div className="mt-6">

                    <h5 className="mb-3 text-[16px] font-bold tracking-tight text-[#0f5132] dark:text-primary">
                      Stay Connected:
                    </h5>

                    <div className="flex items-center gap-2">
                      {socialLinks.map((item, idx) => {
                        const Icon = item.icon

                        return (
                          <a
                            key={idx}
                            href={item.href}
                            aria-label={item.label}
                            rel="noopener noreferrer"
                            className={[
                              "flex h-8 w-8 items-center justify-center rounded-full text-white",
                              "transition-transform duration-200 hover:scale-110",
                              item.bg,
                            ].join(" ")}
                          >
                            <Icon weight="fill" className="w-4 h-4" />
                          </a>
                        )
                      })}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="my-6 h-px w-full bg-black/20 dark:bg-white/10" />

        {/* Bottom Footer */}
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

          {/* Left */}
          <p className="text-[13px] text-muted-foreground">
            Copyright © 2024{" "}
            <span className="font-semibold text-foreground">
              Asian Exporters' Chamber of Commerce and Industry
            </span>
          </p>

          {/* Right */}
          <div className="flex flex-col items-start gap-2 md:items-end">

            <div className="flex flex-wrap items-center gap-2 text-[13px] font-medium">
              <a href="#" className="hover:text-primary">
                Terms & Conditions
              </a>

              <span>|</span>

              <a href="#" className="hover:text-primary">
                Privacy Policy
              </a>

              <span>|</span>

              <a href="#" className="hover:text-primary">
                Sitemap
              </a>

              <span>|</span>

              <span>Site maintained by AECCI.</span>
            </div>

            <p className="text-[12px] text-muted-foreground">
              The site is best viewed using IE11 and above, Mozilla Firefox,
              Safari and Chrome.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}