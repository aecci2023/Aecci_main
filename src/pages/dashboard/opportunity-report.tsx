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
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Download, Globe, Ship, Landmark, ShieldAlert } from "lucide-react";
import { useState } from "react";

export default function OpportunityReportPage() {
  const [agreed, setAgreed] = useState(false);
  const [downloading, setDownloading] = useState(false);

  const handleDownload = () => {
    if (!agreed) return;
    setDownloading(true);
    setTimeout(() => {
      setDownloading(false);
      // Trigger simple download simulation
      alert("Opportunity Report PDF downloaded successfully!");
    }, 1500);
  };

  return (
    <>
      <Header>
        <div className="flex items-center space-x-2">
          <span className="font-semibold text-sm text-muted-foreground">
            AECCI Hub
          </span>
          <span className="text-muted-foreground">/</span>
          <span className="font-semibold text-sm">Reports</span>
          <span className="text-muted-foreground">/</span>
          <span className="font-semibold text-sm">Opportunity Report</span>
        </div>
        <div className="ml-auto flex items-center space-x-4">
          <Search />
          <ProfileDropdown />
        </div>
      </Header>

      <Main fluid className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            Kenya Matchmaking Opportunity Report
          </h1>
          <p className="text-muted-foreground text-sm mt-1">
            Industry Sector: Textiles & Apparel • Generated June 15, 2026
          </p>
        </div>

        {/* Disclaimer acceptance card (Business Outcome Disclaimer) */}
        <Card className="border-amber-500/20 bg-amber-500/5">
          <CardHeader className="pb-3">
            <div className="flex items-center gap-2">
              <ShieldAlert className="size-5 text-amber-500 shrink-0" />
              <CardTitle className="text-lg">
                Business Outcome & Sourcing Disclaimer
              </CardTitle>
            </div>
            <CardDescription>
              AECCI provides access and facilitation only. Review carefully to
              unlock your report download.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-xs text-muted-foreground leading-relaxed">
              Participant acknowledges that AECCI does not guarantee sales,
              purchase orders, contracts, distributors, investment, or market
              access approvals. Collaboration partners are independent
              organizations and participants must conduct their own due
              diligence before entering transactions.
            </div>

            <div className="flex items-start gap-2.5 pt-1">
              <Checkbox
                id="outcome-disclaimer"
                checked={agreed}
                onCheckedChange={(checked) => setAgreed(checked === true)}
                className="mt-0.5"
              />
              <label
                htmlFor="outcome-disclaimer"
                className="text-xs font-semibold text-muted-foreground leading-tight cursor-pointer"
              >
                I understand AECCI does not guarantee business outcomes and
                provides facilitation only{" "}
                <span className="text-red-500">*</span>
              </label>
            </div>
          </CardContent>
        </Card>

        {/* Preview Tabs */}
        <Tabs defaultValue="summary" className="space-y-4">
          <TabsList className="grid grid-cols-3 w-full max-w-lg">
            <TabsTrigger value="summary" className="flex items-center gap-1">
              <Globe className="size-4" /> Market Summary
            </TabsTrigger>
            <TabsTrigger value="routes" className="flex items-center gap-1">
              <Ship className="size-4" /> Trade Routes
            </TabsTrigger>
            <TabsTrigger
              value="recommendations"
              className="flex items-center gap-1"
            >
              <Landmark className="size-4" /> Next Steps
            </TabsTrigger>
          </TabsList>

          <TabsContent value="summary" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">
                  Nairobi Textile Market Outlook
                </CardTitle>
                <CardDescription>
                  Analysis of apparel imports, regional distribution, and
                  consumer demand.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 text-sm leading-relaxed text-muted-foreground">
                <p>
                  The East African Community (EAC) textile sector is growing at
                  a compound rate of 7.2%. Kenya is the primary distribution
                  hub, imports over 180,000 tons of fabric annually, and acts as
                  the gatekeeper for trade into Uganda, Rwanda, and South Sudan.
                </p>
                <p>
                  <strong>Demand Hotspots:</strong> Synthetic blended cotton and
                  value-added denim are seeing highest demand increase among
                  retail stores in Nairobi and Mombasa.
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="routes" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">
                  Logistics & Customs Clearance Corridors
                </CardTitle>
                <CardDescription>
                  Shipping guidelines, ports of entry, and clearance frameworks.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 text-sm leading-relaxed text-muted-foreground">
                <p>
                  <strong>Port of Entry:</strong> Mombasa Sea Port remains the
                  cheapest logistics node for bulk container shipments from
                  Mumbai or Nhava Sheva. Typical transit time is 12-14 days.
                </p>
                <p>
                  <strong>Certification Milestones:</strong> Exporters must
                  conform to the Pre-export Verification of Conformity (PVoC)
                  program to avoid delays at Mombasa port customs.
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="recommendations" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">
                  Chamber Strategic Recommendations
                </CardTitle>
                <CardDescription>
                  Price structures and agent matchmaking frameworks.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 text-sm leading-relaxed text-muted-foreground">
                <p>
                  1. <strong>Pricing Strategy:</strong> Quote on a CIF basis
                  (Cost, Insurance, Freight) in USD. Nairobi buyers rarely
                  purchase on FOB (Free on Board) terms due to complex freight
                  pricing.
                </p>
                <p>
                  2. <strong>Sample Dispatch:</strong> Send sample swatches of
                  1m x 1m lengths via air courier directly to the KNCCI Nairobi
                  office for physical verification before the buyers dispatch
                  orders.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Download Block */}
        <div className="flex justify-center pt-2">
          <Button
            onClick={handleDownload}
            disabled={!agreed || downloading}
            size="lg"
            className="w-full md:w-64 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6 text-base"
          >
            {downloading ? (
              <span>Downloading Report...</span>
            ) : (
              <span className="flex items-center gap-2">
                Download Full Report (PDF) <Download className="size-5" />
              </span>
            )}
          </Button>
        </div>
      </Main>
    </>
  );
}
