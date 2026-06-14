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
import { Calendar, ArrowRight, Tag } from "lucide-react";
import { Link } from "react-router-dom";

export default function MarketplacePage() {
  const deals = [
    {
      id: "AECCI-2026-06B",
      title: "India-Kenya Bilateral Textile Matchmaking",
      sector: "Textiles & Apparel",
      partner: "Kenya Chamber of Commerce (KNCCI)",
      country: "Kenya",
      flag: "🇰🇪",
      dateTime: "June 15, 2026 at 14:00 IST",
      slots: "2 Slots Left",
      price: "₹25,000 / $300",
      status: "Booking Open",
      description:
        "Connect directly with leading Nairobi garment importers, retail chains, and trade commissioners.",
    },
    {
      id: "AECCI-2026-06C",
      title: "Gulf-India Agro-Export Sourcing Desk",
      sector: "Agriculture & Foodstuffs",
      partner: "Dubai Trade & Logistics Council",
      country: "United Arab Emirates",
      flag: "🇦🇪",
      dateTime: "June 29, 2026 at 11:30 IST",
      slots: "5 Slots Left",
      price: "₹35,000 / $420",
      status: "Booking Open",
      description:
        "B2B discussions for wholesale exporters of organic spices, fresh mangoes, and milled grains.",
    },
    {
      id: "AECCI-2026-07A",
      title: "Germany-India IT Outsourcing Panel",
      sector: "Technology & SaaS",
      partner: "German-Indian Chamber of Commerce (AHK)",
      country: "Germany",
      flag: "🇩🇪",
      dateTime: "July 14, 2026 at 16:00 IST",
      slots: "Fully Booked",
      price: "₹40,000 / $480",
      status: "Closed",
      description:
        "High-level procurement event matching mid-sized German industrial firms with custom software developers.",
    },
    {
      id: "AECCI-2026-07B",
      title: "West Africa Shea Butter Supply Corridor",
      sector: "Cosmetics & Raw Materials",
      partner: "Ghana Chamber of Commerce",
      country: "Ghana",
      flag: "🇬🇭",
      dateTime: "July 28, 2026 at 13:00 IST",
      slots: "8 Slots Left",
      price: "₹20,000 / $240",
      status: "Booking Open",
      description:
        "Exclusive sourcing session for cosmetics manufacturers seeking organic grade Shea butter suppliers.",
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
          <span className="font-semibold text-sm">Marketplace</span>
        </div>
        <div className="ml-auto flex items-center space-x-4">
          <Search />
          <ProfileDropdown />
        </div>
      </Header>

      <Main fluid className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            B2B Deal Room Marketplace
          </h1>
          <p className="text-muted-foreground text-sm mt-1">
            Explore upcoming trade match rounds. Book slots to pitch directly to
            verified buyers and distribution partners.
          </p>
        </div>

        {/* Filter bar */}
        <div className="flex flex-wrap gap-2 pb-2">
          <Button
            variant="secondary"
            size="sm"
            className="bg-primary/10 text-primary hover:bg-primary/20 border-none"
          >
            All Sectors
          </Button>
          <Button variant="outline" size="sm">
            Textiles
          </Button>
          <Button variant="outline" size="sm">
            Agriculture
          </Button>
          <Button variant="outline" size="sm">
            Technology
          </Button>
          <Button variant="outline" size="sm">
            Raw Materials
          </Button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {deals.map((deal) => (
            <Card
              key={deal.id}
              className={`flex flex-col h-full hover:shadow-md transition-shadow relative ${deal.status === "Closed" ? "opacity-75" : ""}`}
            >
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-mono">
                    <span>{deal.id}</span>
                    <span>•</span>
                    <span>{deal.sector}</span>
                  </div>
                  <Badge
                    className={
                      deal.status === "Closed"
                        ? "bg-muted text-muted-foreground"
                        : "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20"
                    }
                  >
                    {deal.status}
                  </Badge>
                </div>
                <CardTitle className="text-xl flex items-center gap-2 leading-tight">
                  <span className="text-2xl">{deal.flag}</span>
                  {deal.title}
                </CardTitle>
                <CardDescription className="mt-1">
                  Co-Host:{" "}
                  <span className="font-medium text-foreground">
                    {deal.partner}
                  </span>
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1 space-y-4">
                <p className="text-sm text-muted-foreground">
                  {deal.description}
                </p>
                <div className="grid grid-cols-2 gap-4 text-xs bg-muted/40 p-3 rounded-lg border border-border/50">
                  <div className="flex items-center gap-1.5 text-muted-foreground">
                    <Calendar className="size-3.5 text-primary shrink-0" />
                    <span>{deal.dateTime}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-muted-foreground justify-end font-semibold text-primary">
                    <Tag className="size-3.5 shrink-0" />
                    <span>{deal.price}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="border-t border-border/50 pt-4 flex items-center justify-between">
                <span className="text-xs text-rose-500 font-medium">
                  {deal.slots}
                </span>
                <Button
                  asChild
                  disabled={deal.status === "Closed"}
                  size="sm"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  <Link
                    to="/dashboard/session-details"
                    className="flex items-center gap-1.5"
                  >
                    {deal.status === "Closed" ? "Closed" : "Book Match Slot"}{" "}
                    <ArrowRight className="size-4" />
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
