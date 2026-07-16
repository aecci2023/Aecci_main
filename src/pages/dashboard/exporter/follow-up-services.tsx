import { Header } from "@/components/layout/header";
import { Main } from "@/components/layout/main";
import { ProfileDropdown } from "@/components/profile-dropdown";
import { Search } from "@/components/search";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Briefcase, ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";

export default function FollowUpServicesPage() {
  const services = [
    {
      id: "advisory",
      title: "Bespoke Trade Advisory Desk",
      price: "₹45,000 / $540",
      description:
        "Personalized consult with AECCI export advisors. Reviews duty mitigations, shipping lines, and local currency hedging.",
      features: [
        "2x 60min private strategy consultations",
        "Bespoke country tariff assessment",
        "Direct legal wing compliance review",
      ],
      badge: "Popular",
    },
    {
      id: "documentation",
      title: "Compliance & Customs Desk",
      price: "₹30,000 / $360",
      description:
        "Full handling of PVoC certificate submissions, customs classification, and KEBS standard approvals for East Africa.",
      features: [
        "Preparation of product conformity documentation",
        "Liaising with inspection agencies",
        "Mombasa customs pre-clearance checks",
      ],
      badge: "",
    },
    {
      id: "coordination",
      title: "Direct Buyer Coordination",
      price: "₹60,000 / $720",
      description:
        "AECCI Nairobi desk acts as your local facilitator. We handle sample delivery handovers and coordinate draft trade contracts.",
      features: [
        "Nairobi sample delivery & tracking",
        "Face-to-face buyer follow-up by KNCCI officers",
        "Facilitated contract draft reviews",
      ],
      badge: "New",
    },
    {
      id: "entry-desk",
      title: "Nairobi Market Entry Desk",
      price: "₹1,20,000 / $1,440",
      description:
        "Premium package establishing a physical representative shelf for your textile samples inside KNCCI’s Nairobi showroom.",
      features: [
        "Showroom shelf space for 6 months",
        "Direct local phone answering desk",
        "Bi-weekly buyer feedback logs",
      ],
      badge: "Premium",
    },
  ];

  return (
    <>
      <Header>
        <div className="flex items-center space-x-2">
          <span className="font-semibold text-sm text-muted-foreground">
            AECCI Hub
          </span>
          <span className="text-muted-foreground">/</span>
          <span className="font-semibold text-sm">Services</span>
          <span className="text-muted-foreground">/</span>
          <span className="font-semibold text-sm">Follow-Up Services</span>
        </div>
        <div className="ml-auto flex items-center space-x-4">
          <Search />
          <ProfileDropdown />
        </div>
      </Header>

      <Main fluid className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            Post-Session Follow-Up Services
          </h1>
          <p className="text-muted-foreground text-sm mt-1">
            Accelerate your trade matching outputs. Engage the AECCI trade desks
            to handle compliance, contracts, and local coordination.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((svc) => (
            <Card
              key={svc.id}
              className="hover:shadow-md transition-shadow flex flex-col justify-between h-full border border-border"
            >
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-sm font-bold text-primary">
                    {svc.price}
                  </span>
                  {svc.badge && (
                    <Badge
                      className={
                        svc.badge === "Premium"
                          ? "bg-amber-600 hover:bg-amber-600 text-white"
                          : "bg-primary hover:bg-primary/90 text-primary-foreground"
                      }
                    >
                      {svc.badge}
                    </Badge>
                  )}
                </div>
                <CardTitle className="text-lg md:text-xl flex items-center gap-2">
                  <Briefcase className="size-5 text-primary shrink-0" />
                  {svc.title}
                </CardTitle>
                <CardDescription className="mt-1">
                  {svc.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1 border-t border-border/40 pt-4 mt-1">
                <ul className="space-y-2 text-xs text-muted-foreground">
                  {svc.features.map((feat, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <Check className="size-4 text-emerald-500 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="border-t border-border/50 pt-4">
                <Button
                  asChild
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  <Link
                    to={`/dashboard/service-purchase?service=${svc.id}`}
                    className="flex items-center justify-center gap-1.5"
                  >
                    Acquire Package <ArrowRight className="size-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </Main>
    </>
  );
}
