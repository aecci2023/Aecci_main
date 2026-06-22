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
import { useGetOpportunityReportsQuery } from "@/store/api/sessionApi";

export default function OpportunityReportPage() {
  const [agreed, setAgreed] = useState(false);
  const [downloading, setDownloading] = useState(false);

  const { data: response, isLoading } = useGetOpportunityReportsQuery();
  const reports = response?.data || [];
  const latestReport = reports.length > 0 ? reports[0] : null;

  const handleDownload = async () => {
    if (!agreed || !latestReport) return;
    setDownloading(true);
    try {
      const token = localStorage.getItem('accessToken');
      const url = `${import.meta.env.VITE_API_BASE_URL?.replace('/api/', '/api') || 'http://localhost:5000/api'}/reports/${latestReport.id}/pdf`;
      
      const res = await fetch(url, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      
      if (!res.ok) throw new Error('Download failed');
      
      const blob = await res.blob();
      const downloadUrl = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = downloadUrl;
      a.download = `Opportunity_Report_${latestReport.id}.pdf`;
      document.body.appendChild(a);
      a.click();
      a.remove();
    } catch (e) {
      console.error(e);
      alert('Failed to download PDF.');
    } finally {
      setDownloading(false);
    }
  };

  if (isLoading) {
    return <Main fluid className="flex justify-center p-10"><p className="text-muted-foreground animate-pulse">Loading Report...</p></Main>;
  }

  if (!latestReport) {
    return (
      <Main fluid className="flex justify-center p-10 flex-col items-center gap-4">
        <ShieldAlert className="size-10 text-muted-foreground opacity-50" />
        <h2 className="text-xl font-bold">No Opportunity Reports Found</h2>
        <p className="text-muted-foreground">You will receive a report after completing a Deal Room session.</p>
      </Main>
    );
  }

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
            {latestReport.session?.country || 'Global'} Matchmaking Opportunity Report
          </h1>
          <p className="text-muted-foreground text-sm mt-1">
            Session: {latestReport.session?.title} • Generated {new Date(latestReport.createdAt).toLocaleDateString()}
          </p>
        </div>

        {/* Disclaimer acceptance card */}
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
                  Market Outlook
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm leading-relaxed text-muted-foreground whitespace-pre-wrap">
                {latestReport.marketSummary}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="routes" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">
                  Logistics & Customs Clearance Corridors
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm leading-relaxed text-muted-foreground whitespace-pre-wrap">
                {latestReport.potentialRoutes}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="recommendations" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">
                  Chamber Strategic Recommendations
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm leading-relaxed text-muted-foreground whitespace-pre-wrap">
                {latestReport.recommendations}
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
              <span>Generating PDF...</span>
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
