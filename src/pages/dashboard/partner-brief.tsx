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
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ShieldAlert, BookOpen, Star, MapPin } from "lucide-react";

export default function PartnerBriefPage() {
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
          <span className="font-semibold text-sm">Partner Brief</span>
        </div>
        <div className="ml-auto flex items-center space-x-4">
          <Search />
          <ProfileDropdown />
        </div>
      </Header>

      <Main fluid className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            Co-Host Chamber Brief
          </h1>
          <p className="text-muted-foreground text-sm mt-1">
            Review profiles, capabilities, and FAQ guidelines of our country
            collaboration partners.
          </p>
        </div>

        {/* Disclaimer Panel */}
        <Card className="border-amber-500/20 bg-amber-500/5">
          <CardContent className="pt-4 flex gap-3 items-start">
            <ShieldAlert className="size-5 text-amber-500 shrink-0 mt-0.5" />
            <div className="text-xs text-muted-foreground leading-relaxed">
              <strong>Collaboration Partner Disclaimer:</strong> Country
              collaboration partners (chambers, trade bodies, ministries) are
              independent organisations. AECCI does not control their final
              procurement or matching decisions. Participants must conduct their
              own business due diligence before signing contracts.
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Partner profile details */}
          <Card className="md:col-span-2">
            <CardHeader className="flex flex-row items-start gap-4 pb-4">
              <Avatar className="h-16 w-16 border rounded-lg shrink-0">
                <AvatarFallback className="bg-primary/10 text-primary font-bold text-xl">
                  KE
                </AvatarFallback>
              </Avatar>
              <div>
                <Badge className="bg-primary hover:bg-primary/90 text-primary-foreground mb-1">
                  Active Co-Host
                </Badge>
                <CardTitle className="text-xl">
                  Kenya National Chamber of Commerce & Industry (KNCCI)
                </CardTitle>
                <CardDescription className="flex items-center gap-1 mt-1">
                  <MapPin className="size-3 text-muted-foreground" /> Nairobi
                  Headquarters, Kenya
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 text-sm leading-relaxed text-muted-foreground">
              <p>
                KNCCI is the umbrella body representing the private sector in
                Kenya. For our bilateral deal rooms, they coordinate direct
                matching lists with garment retailers, chain stores, and import
                distributors across Nairobi and East Africa.
              </p>

              <h4 className="font-semibold text-foreground mt-4 mb-1">
                Officer In Charge
              </h4>
              <div className="flex items-center gap-3 bg-muted/30 p-3 rounded-lg border border-border">
                <Avatar className="h-10 w-10">
                  <AvatarFallback className="bg-muted-foreground/10 text-muted-foreground font-bold">
                    MJ
                  </AvatarFallback>
                </Avatar>
                <div>
                  <span className="font-semibold text-foreground block text-sm">
                    Mwaniki Jomo
                  </span>
                  <span className="text-xs block text-muted-foreground">
                    Senior Trade Commissioner, KNCCI Nairobi Desk
                  </span>
                </div>
              </div>

              <h4 className="font-semibold text-foreground mt-4 mb-2">
                Covered Sectors
              </h4>
              <div className="flex flex-wrap gap-1.5">
                <Badge variant="outline">Textiles & Finished Apparel</Badge>
                <Badge variant="outline">Agri-processing & Spices</Badge>
                <Badge variant="outline">Logistics & Supply Chains</Badge>
              </div>
            </CardContent>
          </Card>

          {/* Partner Stats / Info */}
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg">Desk Info</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm">
              <div className="space-y-1">
                <span className="text-xs text-muted-foreground block">
                  Verified Matches
                </span>
                <div className="flex items-center gap-1">
                  <Star className="size-4 text-amber-500 fill-amber-500" />
                  <span className="font-bold text-foreground">
                    120+ Exporters Matched
                  </span>
                </div>
              </div>

              <div className="space-y-1">
                <span className="text-xs text-muted-foreground block">
                  Response Time
                </span>
                <span className="font-semibold text-foreground">
                  Usually within 24 Hours
                </span>
              </div>

              <div className="space-y-1">
                <span className="text-xs text-muted-foreground block">
                  Mombasa Port Liaison
                </span>
                <span className="font-semibold text-emerald-600 dark:text-emerald-400">
                  Available
                </span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* FAQs */}
        <Card className="shadow-sm">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <BookOpen className="size-5 text-primary" /> Frequently Asked
              Questions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-sm">
                  How are matchmaking buyers chosen?
                </AccordionTrigger>
                <AccordionContent className="text-xs text-muted-foreground">
                  KNCCI queries their registered member database and verifies
                  the importer’s physical warehouse capacity, financial history,
                  and active demand before inviting them to the Live Deal Room.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-sm">
                  What happens if a matched buyer fails to show up?
                </AccordionTrigger>
                <AccordionContent className="text-xs text-muted-foreground">
                  In the rare event of a no-show, AECCI coordinates with KNCCI
                  to schedule a direct 1-on-1 private call with the buyer’s
                  procurement desk within 14 days, or issues credit terms
                  according to our policy.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-sm">
                  Are samples required before entering the Deal Room?
                </AccordionTrigger>
                <AccordionContent className="text-xs text-muted-foreground">
                  While not mandatory to enter the virtual room, sending sample
                  swatches to the Nairobi desk dramatically increases conversion
                  and speeds up contract discussions.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
      </Main>
    </>
  );
}
