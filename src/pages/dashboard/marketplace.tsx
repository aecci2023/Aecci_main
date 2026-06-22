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
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { MapPin, ArrowRight, Briefcase, GraduationCap, Loader2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useGetMarketplacePartnersQuery } from "@/store/api/adminApi";
import { useState } from "react";

export default function MarketplacePage() {
  const navigate = useNavigate();
  const [filterCountry, setFilterCountry] = useState<string>("");
  
  const { data, isLoading } = useGetMarketplacePartnersQuery(
    filterCountry ? { country: filterCountry } : undefined
  );
  
  const partners = data?.data || [];

  // Extract unique countries from partners list dynamically if not filtering, or define a standard list
  const countries = ["Kenya", "UAE", "Germany", "India", "South Africa", "United Kingdom", "United States"];

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

      <Main fluid className="space-y-6 max-w-7xl mx-auto py-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b pb-6">
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-primary to-emerald-600 bg-clip-text text-transparent">
              Verified Partners Directory
            </h1>
            <p className="text-muted-foreground text-sm mt-1">
              Connect 1-on-1 with accredited trade officers, logistics experts, and local chamber representatives.
            </p>
          </div>
        </div>

        {/* Filter bar */}
        <div className="space-y-2">
          <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Filter by country of operation</label>
          <div className="flex flex-wrap gap-2">
            <Button
              variant={filterCountry === "" ? "secondary" : "outline"}
              size="sm"
              onClick={() => setFilterCountry("")}
              className={filterCountry === "" ? "bg-primary/10 text-primary hover:bg-primary/20 border-none" : "text-xs"}
            >
              All Countries
            </Button>
            {countries.map((country) => (
              <Button
                key={country}
                variant={filterCountry === country ? "secondary" : "outline"}
                size="sm"
                onClick={() => setFilterCountry(country)}
                className={filterCountry === country ? "bg-primary/10 text-primary hover:bg-primary/20 border-none" : "text-xs"}
              >
                {country}
              </Button>
            ))}
          </div>
        </div>

        {/* Grid */}
        {isLoading ? (
          <div className="flex flex-col items-center justify-center p-12 gap-2">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
            <p className="text-muted-foreground animate-pulse text-sm">Loading Verified Partners...</p>
          </div>
        ) : partners.length === 0 ? (
          <div className="flex flex-col items-center justify-center p-12 border rounded-xl bg-muted/10 text-center space-y-2">
            <Briefcase className="size-8 text-muted-foreground/50" />
            <p className="text-muted-foreground text-sm">No verified partners found for {filterCountry || "any country"} at this time.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partners.map((partner: any) => {
              const userDetails = partner.user || {};
              const initials = userDetails.fullName
                ? userDetails.fullName.split(" ").map((n: string) => n[0]).join("").slice(0, 2).toUpperCase()
                : "PA";

              return (
                <Card
                  key={partner.id}
                  className="flex flex-col h-full hover:shadow-md transition-all duration-300 border hover:border-primary/20 group cursor-pointer"
                  onClick={() => navigate(`/dashboard/partner-brief?userId=${partner.userId}`)}
                >
                  <CardHeader className="pb-3 flex flex-row gap-4 items-start">
                    <Avatar className="h-14 w-14 rounded-xl border-2 border-background shadow-sm shrink-0">
                      {userDetails.profilePicture ? (
                        <img src={userDetails.profilePicture} alt={userDetails.fullName} className="size-full object-cover" />
                      ) : (
                        <AvatarFallback className="bg-primary/10 text-primary font-bold text-base rounded-xl">
                          {initials}
                        </AvatarFallback>
                      )}
                    </Avatar>
                    <div className="space-y-1 flex-1 min-w-0">
                      <div className="flex items-center gap-1.5 justify-between">
                        <Badge className="bg-primary/5 text-primary border-primary/10 text-[10px] font-semibold px-2">
                          {partner.tier} Expert
                        </Badge>
                      </div>
                      <CardTitle className="text-base font-bold truncate group-hover:text-primary transition-colors">
                        {userDetails.fullName || "Trade Representative"}
                      </CardTitle>
                      <CardDescription className="text-xs truncate font-medium text-foreground/80">
                        {partner.organization || "Independent Advisory"}
                      </CardDescription>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="flex-1 space-y-3 pt-0">
                    <div className="flex items-center gap-1 text-[11px] text-muted-foreground">
                      <MapPin className="size-3.5 text-primary shrink-0" />
                      <span>Operates in: <strong className="text-foreground/80">{partner.expertiseCountries?.join(", ")}</strong></span>
                    </div>

                    <p className="text-xs text-muted-foreground line-clamp-3 leading-relaxed">
                      {partner.bio || "No professional biography provided yet. This partner facilitates global trade compliance and buyer matchmaking."}
                    </p>

                    {/* Trade specialties tags */}
                    <div className="space-y-1 pt-1">
                      <span className="text-[10px] uppercase font-bold text-muted-foreground tracking-wider block">Specialties</span>
                      <div className="flex flex-wrap gap-1">
                        {partner.expertiseSectors?.slice(0, 3).map((sector: string, idx: number) => (
                          <Badge key={idx} variant="secondary" className="text-[10px] px-2 py-0">
                            {sector}
                          </Badge>
                        ))}
                        {partner.expertiseSectors?.length > 3 && (
                          <Badge variant="outline" className="text-[10px] px-1 py-0">
                            +{partner.expertiseSectors.length - 3} more
                          </Badge>
                        )}
                      </div>
                    </div>
                  </CardContent>
                  
                  <CardFooter className="border-t border-border/50 pt-3 pb-3 bg-muted/10 justify-between items-center text-xs">
                    <span className="text-muted-foreground text-[10px] flex items-center gap-1">
                      <GraduationCap className="size-3.5" /> Language: {userDetails.languagesSpoken?.join(", ") || "English"}
                    </span>
                    <span className="text-primary font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      View Profile <ArrowRight className="size-3.5" />
                    </span>
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
