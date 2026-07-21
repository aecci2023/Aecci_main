import { Link } from "react-router-dom";
import {
  ArrowRight,
  BarChart3,
  Briefcase,
  FileBadge,
  Globe2,
  GraduationCap,
  Headphones,
  Scale,
  UserRound,
  Users,
} from "lucide-react";
import { Main } from "@/components/layout/main";
import { Button } from "@/components/ui/button";
import AnimatedWorldMap from "@/components/portal/AnimatedWorldMap";

const HERO_STATS = [
  { value: "50+", label: "Countries", icon: Globe2 },
  { value: "1000+", label: "Global Partners", icon: Users },
  { value: "24/7", label: "Expert Support", icon: Headphones },
];

const SERVICES = [
  {
    title: "Trade Advisory",
    description:
      "Expert advisory on international trade regulations, market entry and strategy development.",
    Icon: Globe2,
    iconBg: "bg-[#FFF8EE]",
    iconColor: "text-[#D4A44C]",
  },
  {
    title: "Market Intelligence",
    description:
      "Comprehensive market research and intelligence to identify global opportunities.",
    Icon: BarChart3,
    iconBg: "bg-[#EFF4FF]",
    iconColor: "text-[#3366CC]",
  },
  {
    title: "Business Matching",
    description:
      "Connect with verified global partners, suppliers and buyers.",
    Icon: UserRound,
    iconBg: "bg-[#EEFBF4]",
    iconColor: "text-[#12B76A]",
  },
  {
    title: "Legal Support",
    description:
      "Legal assistance for contracts, compliance, and dispute resolution.",
    Icon: Scale,
    iconBg: "bg-[#F3EEFF]",
    iconColor: "text-[#7B61FF]",
  },
  {
    title: "Certification Support",
    description:
      "Assistance with international certifications and compliance requirements.",
    Icon: FileBadge,
    iconBg: "bg-[#FFF3E6]",
    iconColor: "text-[#E8873A]",
  },
  {
    title: "Training & Workshops",
    description:
      "Capacity building programs and workshops on global trade topics.",
    Icon: GraduationCap,
    iconBg: "bg-[#E8F4FD]",
    iconColor: "text-[#1E88C7]",
  },
];

export default function AgentAecciServicesPage() {
  return (
    <Main
      fluid
      className="min-h-full space-y-6 overflow-x-hidden bg-[#F8FAFC]! px-3 pb-8 sm:space-y-7 sm:px-5"
    >
      {/* Hero banner */}
      <section className="relative overflow-hidden rounded-2xl bg-[#061B3A]">
        {/* World map — positioned on the right half only */}
        <div className="pointer-events-none absolute inset-y-0 right-0 w-[60%] z-0 overflow-hidden [&>div]:!translate-x-0 [&>div]:!opacity-100 [&>div]:!h-full [&>div]:!static [&>div]:!w-full">
          <AnimatedWorldMap />
        </div>
        {/* Fade from dark left into the map */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-[1] w-[55%] bg-gradient-to-r from-[#061B3A] via-[#061B3A] to-transparent" />

        <div className="relative z-10 grid min-h-[280px] grid-cols-1 lg:grid-cols-[1fr_1fr]">
          {/* Left content */}
          <div className="flex flex-col justify-center px-6 pb-0 pt-8 sm:px-8 sm:pt-10 lg:px-10">
            <h1 className="text-[32px] font-bold leading-[1.1] tracking-tight text-white sm:text-[36px]">
              AECCI <span className="text-[#D4A574]">Services</span>
            </h1>
            <p className="mt-3 max-w-md text-[14px] leading-relaxed text-white/70">
              Explore world-class solutions by AECCI
              <br />
              to accelerate your global business.
            </p>

            {/* Stat pills */}
            <div className="mt-8 flex flex-wrap gap-6 sm:gap-8">
              {HERO_STATS.map((stat) => (
                <div key={stat.label} className="flex items-center gap-3">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/8 text-white/80">
                    <stat.icon className="size-5 stroke-[1.5]" />
                  </span>
                  <div>
                    <p className="text-[20px] font-bold leading-none text-white">{stat.value}</p>
                    <p className="mt-1 text-[12px] font-medium text-white/55">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side — map shows through (no content needed) */}
          <div className="hidden lg:block" />
        </div>

        {/* Bottom row inside hero */}
        <div className="relative z-10 flex items-center justify-between gap-4 px-6 pb-6 pt-4 sm:px-8 lg:px-10">
          <p className="text-[15px] font-semibold text-white sm:text-[16px]">
            Your Global Growth, Our Expertise.
          </p>
          <Button className="h-11 shrink-0 rounded-xl bg-[#E9B444] px-5 text-[13px] font-semibold text-[#1E2330] shadow-[0_4px_14px_rgba(233,180,68,0.3)] hover:bg-[#DDA93C]">
            All Services
            <ArrowRight className="ml-1.5 size-3.5" />
          </Button>
        </div>
      </section>

      {/* Service cards — 3 columns */}
      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {SERVICES.map((service) => (
          <div
            key={service.title}
            className="flex flex-col items-center rounded-2xl border border-[#E4E7EC] bg-white px-6 py-8 text-center shadow-[0_1px_3px_rgba(16,24,40,0.06)] transition hover:shadow-[0_4px_12px_rgba(16,24,40,0.08)]"
          >
            <span
              className={`flex size-14 items-center justify-center rounded-full ${service.iconBg} ${service.iconColor}`}
            >
              <service.Icon className="size-7 stroke-[1.5]" />
            </span>
            <h3 className="mt-5 text-[16px] font-bold text-[#101828]">{service.title}</h3>
            <p className="mt-2 max-w-[280px] flex-1 text-[13px] leading-relaxed text-[#667085]">
              {service.description}
            </p>
            <Link
              to="/agent/support"
              className="mt-5 inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#D4A44C] hover:text-[#C09540]"
            >
              Learn More
              <ArrowRight className="size-3.5" />
            </Link>
          </div>
        ))}
      </section>

      {/* Bottom CTA — image left, content right */}
      <section className="overflow-hidden rounded-2xl border border-[#E4E7EC] bg-white shadow-[0_1px_2px_rgba(16,24,40,0.05)]">
        <div className="flex flex-col lg:flex-row">
          <div className="relative h-44 w-full shrink-0 lg:h-auto lg:w-[300px] xl:w-[340px]">
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=600&q=80"
              alt=""
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20 lg:bg-gradient-to-r lg:from-transparent lg:to-white" />
          </div>

          <div className="flex flex-1 flex-col items-start justify-center gap-5 px-5 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-8 sm:py-8">
            <div className="flex items-center gap-4">
              <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#F5F0EA] text-[#D4A44C]">
                <Headphones className="size-5 stroke-[1.5]" />
              </span>
              <div>
                <h2 className="text-[17px] font-bold text-[#101828] sm:text-[18px]">
                  Need a Custom Solution?
                </h2>
                <p className="mt-1 text-[13px] text-[#667085]">
                  Our experts are here to help you grow globally.
                </p>
                <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1.5 text-[12px] font-medium text-[#344054]">
                  <span className="inline-flex items-center gap-1.5">
                    <Headphones className="size-3.5 text-[#D4A44C]" />
                    Expert Guidance
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Briefcase className="size-3.5 text-[#D4A44C]" />
                    Tailored Solutions
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Globe2 className="size-3.5 text-[#D4A44C]" />
                    Global Impact
                  </span>
                </div>
              </div>
            </div>
            <Button
              asChild
              className="h-11 w-full shrink-0 rounded-xl bg-[#E9B444] px-5 text-[13px] font-semibold text-[#1E2330] hover:bg-[#DDA93C] sm:w-auto"
            >
              <Link to="/agent/support" className="inline-flex items-center gap-1.5">
                Contact Our Team
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Main>
  );
}
