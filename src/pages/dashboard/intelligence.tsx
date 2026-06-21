import { Main } from "@/components/layout/main";
import { useGetCountryBriefsQuery } from "@/store/api/countryIntelligenceApi";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Search } from "lucide-react";

export default function IntelligencePage() {
  const { data: response, isLoading } = useGetCountryBriefsQuery();
  const briefs = response?.data || [];
  const [search, setSearch] = useState("");

  const filteredBriefs = briefs.filter((brief: any) =>
    brief.country.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Main fluid className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            Country Intelligence
          </h1>
          <p className="text-muted-foreground mt-1">
            Explore market overviews, opportunities, and risks by country.
          </p>
        </div>
        <div className="relative w-full md:w-64">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search country..."
            className="pl-8"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(3)].map((_, i) => (
            <Card key={i} className="animate-pulse">
              <CardHeader className="h-20 bg-muted/50 rounded-t-xl" />
              <CardContent className="h-40 bg-background" />
            </Card>
          ))}
        </div>
      ) : filteredBriefs.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-64 border rounded-md border-dashed">
          <p className="text-muted-foreground">No intelligence briefs found.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBriefs.map((brief: any) => (
            <Card key={brief.id} className="overflow-hidden hover:shadow-lg transition-all duration-300">
              <CardHeader className="bg-primary/5 pb-4 border-b">
                <CardTitle className="text-xl">{brief.country}</CardTitle>
                <CardDescription className="line-clamp-2">
                  {brief.marketOverview}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-4 space-y-4 text-sm">
                <div>
                  <h4 className="font-semibold text-primary mb-1">Opportunities</h4>
                  <p className="text-muted-foreground line-clamp-2">
                    {brief.opportunities || "No data provided."}
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-1">Risks</h4>
                  <p className="text-muted-foreground line-clamp-2">
                    {brief.risks || "No data provided."}
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-1">Import Requirements</h4>
                  <p className="text-muted-foreground line-clamp-2">
                    {brief.importRequirements || "No data provided."}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </Main>
  );
}
