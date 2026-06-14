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
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ShieldAlert, Award, TrendingUp } from "lucide-react";
import { useState } from "react";

export default function IntelligencePage() {
  const [selectedCountry, setSelectedCountry] = useState("kenya");

  return (
    <>
      <Header>
        <div className="flex items-center space-x-2">
          <span className="font-semibold text-sm text-muted-foreground">
            AECCI Hub
          </span>
          <span className="text-muted-foreground">/</span>
          <span className="font-semibold text-sm">Intelligence</span>
          <span className="text-muted-foreground">/</span>
          <span className="font-semibold text-sm">Country Intelligence</span>
        </div>
        <div className="ml-auto flex items-center space-x-4">
          <Search />
          <ProfileDropdown />
        </div>
      </Header>

      <Main fluid className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">
              Country Trade Intelligence
            </h1>
            <p className="text-muted-foreground text-sm mt-1">
              Curated market reports, compliance mandates, and distribution
              networks.
            </p>
          </div>
          <div className="w-56">
            <Select value={selectedCountry} onValueChange={setSelectedCountry}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select Country" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="kenya">🇰🇪 Kenya (Nairobi Hub)</SelectItem>
                <SelectItem value="nigeria">🇳🇬 Nigeria (Lagos Hub)</SelectItem>
                <SelectItem value="uae">🇦🇪 United Arab Emirates</SelectItem>
                <SelectItem value="ghana">🇬🇭 Ghana (Accra Hub)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList className="grid grid-cols-5 w-full text-xs">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="imports">Import Rules</TabsTrigger>
            <TabsTrigger value="distribution">Distribution</TabsTrigger>
            <TabsTrigger value="opportunities">Opportunities</TabsTrigger>
            <TabsTrigger value="risks">Risks</TabsTrigger>
          </TabsList>

          {/* Overview Content */}
          <TabsContent value="overview" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Kenya Market Overview</CardTitle>
                <CardDescription>
                  Gateway to East and Central African retail corridors.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 text-sm leading-relaxed text-muted-foreground">
                <p>
                  Kenya stands as the economic anchor of East Africa. Boasting a
                  population of 55M and membership in both the East African
                  Community (EAC) and COMESA, it offers direct access to a
                  market of 300M+ consumers.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                  <div className="p-3 bg-muted/40 rounded-lg border border-border">
                    <span className="text-[10px] text-muted-foreground uppercase tracking-wider block font-bold">
                      Textile Imports
                    </span>
                    <span className="text-base font-bold text-foreground block mt-1">
                      $240M / Year
                    </span>
                  </div>
                  <div className="p-3 bg-muted/40 rounded-lg border border-border">
                    <span className="text-[10px] text-muted-foreground uppercase tracking-wider block font-bold">
                      Duty-Free Treaties
                    </span>
                    <span className="text-base font-bold text-primary block mt-1">
                      EAC, AGOA, COMESA
                    </span>
                  </div>
                  <div className="p-3 bg-muted/40 rounded-lg border border-border">
                    <span className="text-[10px] text-muted-foreground uppercase tracking-wider block font-bold">
                      Major Entry Node
                    </span>
                    <span className="text-base font-bold text-foreground block mt-1">
                      Mombasa Sea Port
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Import Rules */}
          <TabsContent value="imports" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  Import Standards & Certification Mandates
                </CardTitle>
                <CardDescription>
                  Requirements enforced by Kenya Bureau of Standards (KEBS).
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 text-sm leading-relaxed text-muted-foreground">
                <p>
                  To clear customs at Mombasa, all textile shipments require a
                  **Pre-export Verification of Conformity (PVoC)** certificate.
                  This must be obtained at the country of origin.
                </p>
                <ul className="list-disc pl-5 space-y-2 text-xs">
                  <li>
                    <strong>Standard Tariff Rate:</strong> Textiles attract a
                    baseline 25% import tariff unless routed under special
                    bilateral trade chambers.
                  </li>
                  <li>
                    <strong>Azo Dyes Ban:</strong> Strict bans on specific
                    chemicals. Swatch testing report required.
                  </li>
                  <li>
                    <strong>Labeling:</strong> Packages must state fabric
                    composition, origin, and manufacturer in English or Swahili.
                  </li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Distribution */}
          <TabsContent value="distribution" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  East African Distribution Network
                </CardTitle>
                <CardDescription>
                  Understanding how garments move from port to retailers.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 text-sm leading-relaxed text-muted-foreground">
                <p>
                  Distribution in Nairobi operates through three primary layers:
                </p>
                <div className="space-y-3 pt-2">
                  <div className="p-3 bg-muted/30 border border-border rounded-lg">
                    <h4 className="font-semibold text-foreground text-sm">
                      1. Wholesale Importers (Gikomba & River Road)
                    </h4>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      Bulk buying agents distributing raw fabrics and roll
                      textiles to country-wide tailoring centers.
                    </p>
                  </div>
                  <div className="p-3 bg-muted/30 border border-border rounded-lg">
                    <h4 className="font-semibold text-foreground text-sm">
                      2. Organized Retail Groups (Supermarkets & Fashion Chains)
                    </h4>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      Modern chain stores purchasing finished garments under
                      direct L/C contract matching.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Opportunities */}
          <TabsContent value="opportunities" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  Sectors showing High Demand
                </CardTitle>
                <CardDescription>
                  Target segments for export expansion.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 text-sm leading-relaxed text-muted-foreground">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 border border-border rounded-lg bg-background">
                    <h5 className="font-semibold text-foreground text-sm flex items-center gap-1.5 mb-2">
                      <TrendingUp className="size-4 text-primary" /> Blended
                      Uniforms
                    </h5>
                    <p className="text-xs text-muted-foreground">
                      High volume corporate, school, and security force uniforms
                      sourcing rounds are active annually in Q3.
                    </p>
                  </div>
                  <div className="p-4 border border-border rounded-lg bg-background">
                    <h5 className="font-semibold text-foreground text-sm flex items-center gap-1.5 mb-2">
                      <Award className="size-4 text-emerald-500" /> Home
                      Furnishings
                    </h5>
                    <p className="text-xs text-muted-foreground">
                      Bedsheets, organic towels, and curtains are experiencing
                      double digit import volume growth in urban centers.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Risks */}
          <TabsContent value="risks" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  Port Congestion & Currency Risks
                </CardTitle>
                <CardDescription>
                  Primary risk factors to monitor before container dispatch.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 text-sm leading-relaxed text-muted-foreground">
                <div className="p-4 bg-rose-500/5 border border-rose-500/10 rounded-lg flex gap-3 items-start">
                  <ShieldAlert className="size-5 text-rose-500 shrink-0 mt-0.5" />
                  <div className="text-xs space-y-2">
                    <p>
                      <strong>Mombasa Port Delays:</strong> Average clearance
                      timelines can fluctuate from 5 to 18 days during high
                      shipping cycles. Always include buffer periods in shipping
                      bills.
                    </p>
                    <p>
                      <strong>Currency Volatility:</strong> The Kenya Shilling
                      (KES) fluctuations against the USD can impact wholesale
                      buyer margins. L/C financing or USD invoicing is highly
                      recommended.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </Main>
    </>
  );
}
