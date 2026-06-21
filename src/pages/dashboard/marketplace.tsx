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
import { useNavigate } from "react-router-dom";
import { useGetSessionsQuery } from "@/store/api/sessionApi";
import { format } from "date-fns";
import { useState } from "react";

export default function MarketplacePage() {
  const navigate = useNavigate();
  const [filterCountry, setFilterCountry] = useState<string>("");
  
  const { data, isLoading } = useGetSessionsQuery(filterCountry ? { country: filterCountry } : {});
  const sessions = data?.data || [];

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
            variant={filterCountry === "" ? "secondary" : "outline"}
            size="sm"
            onClick={() => setFilterCountry("")}
            className={filterCountry === "" ? "bg-primary/10 text-primary hover:bg-primary/20 border-none" : ""}
          >
            All Countries
          </Button>
          <Button 
            variant={filterCountry === "Kenya" ? "secondary" : "outline"} 
            size="sm"
            onClick={() => setFilterCountry("Kenya")}
          >
            Kenya
          </Button>
          <Button 
            variant={filterCountry === "UAE" ? "secondary" : "outline"} 
            size="sm"
            onClick={() => setFilterCountry("UAE")}
          >
            UAE
          </Button>
          <Button 
            variant={filterCountry === "Germany" ? "secondary" : "outline"} 
            size="sm"
            onClick={() => setFilterCountry("Germany")}
          >
            Germany
          </Button>
        </div>

        {/* Grid */}
        {isLoading ? (
          <div className="flex justify-center p-10"><p className="text-muted-foreground animate-pulse">Loading Deal Rooms...</p></div>
        ) : sessions.length === 0 ? (
          <div className="flex justify-center p-10"><p className="text-muted-foreground">No upcoming Deal Rooms found.</p></div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sessions.map((deal: any) => {
              const isClosed = deal.status === "completed" || deal.seatsAvailable <= 0;
              return (
                <Card
                  key={deal.id}
                  className={`flex flex-col h-full hover:shadow-md transition-shadow relative ${isClosed ? "opacity-75" : ""}`}
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-mono">
                        <span>{deal.id.slice(-6)}</span>
                        <span>•</span>
                        <span>{deal.country}</span>
                      </div>
                      <Badge
                        className={
                          isClosed
                            ? "bg-muted text-muted-foreground"
                            : "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20"
                        }
                      >
                        {isClosed ? "Closed" : "Booking Open"}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl flex items-center gap-2 leading-tight">
                      {deal.title}
                    </CardTitle>
                    <CardDescription className="mt-1">
                      Co-Host:{" "}
                      <span className="font-medium text-foreground">
                        {deal.partner?.companyName || deal.partner?.fullName || "AECCI Partner"}
                      </span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1 space-y-4">
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {deal.marketOverview || deal.rules || "Join this deal room session to connect directly with international buyers and distribution partners."}
                    </p>
                    <div className="grid grid-cols-2 gap-4 text-xs bg-muted/40 p-3 rounded-lg border border-border/50">
                      <div className="flex items-center gap-1.5 text-muted-foreground">
                        <Calendar className="size-3.5 text-primary shrink-0" />
                        <span>{format(new Date(deal.date), "MMM dd, yyyy h:mm a")}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-muted-foreground justify-end font-semibold text-primary">
                        <Tag className="size-3.5 shrink-0" />
                        <span>${deal.price} USD</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="border-t border-border/50 pt-4 flex items-center justify-between">
                    <span className={`text-xs font-medium ${deal.seatsAvailable <= 2 ? 'text-rose-500' : 'text-emerald-600'}`}>
                      {deal.seatsAvailable} Slots Left (of {deal.seatsTotal})
                    </span>
                    <Button
                      disabled={isClosed}
                      size="sm"
                      onClick={() => navigate(`/dashboard/session-details?id=${deal.id}`)}
                      className="bg-primary hover:bg-primary/90 text-primary-foreground"
                    >
                      <span className="flex items-center gap-1.5">
                        {isClosed ? "Closed" : "Book Match Slot"} <ArrowRight className="size-4" />
                      </span>
                    </Button>
                  </CardFooter>
                </Card>
              );
            })}
          </div>
        )}
      </Main>
    </>
  );
}
