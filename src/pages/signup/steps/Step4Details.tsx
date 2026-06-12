
import type { SignupFormData } from "../types";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";

interface Props {
  data: SignupFormData;
  updateData: (data: Partial<SignupFormData>) => void;
  nextStep: () => void;
}

export default function Step4Details({ data, updateData, nextStep }: Props) {
  const isBusiness = data.userType === "business";

  return (
    <div className="flex flex-col h-full">
      <div className="mb-8">
        <h1 className="text-2xl font-bold tracking-tight mb-2">
          {isBusiness ? "Business Details" : "Expertise & Interests"}
        </h1>
        <p className="text-muted-foreground text-sm">
          Help us match you with the right opportunities.
        </p>
      </div>

      <div className="space-y-6">
        {isBusiness ? (
          <>
            <div className="space-y-2">
              <Label>Primary Business Role</Label>
              <Select value={data.businessRole?.[0] || ""} onValueChange={(val) => updateData({ businessRole: [val] })}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select your role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Manufacturer">Manufacturer</SelectItem>
                  <SelectItem value="Exporter">Exporter</SelectItem>
                  <SelectItem value="Merchant Exporter">Merchant Exporter</SelectItem>
                  <SelectItem value="Importer">Importer</SelectItem>
                  <SelectItem value="Trader">Trader / Distributor</SelectItem>
                  <SelectItem value="Consultant">Consultant</SelectItem>
                  <SelectItem value="Other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Products / Services</Label>
              <Textarea 
                placeholder="e.g. Textiles, Spices, IT Services (suggested to use HS Codes)" 
                value={data.products || ""}
                onChange={(e) => updateData({ products: e.target.value })}
                className="h-20"
              />
            </div>

            <div className="space-y-2">
              <Label>Export / Import Experience</Label>
              <Select value={data.experience} onValueChange={(val) => updateData({ experience: val })}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select experience level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="None">None (New Exporter)</SelectItem>
                  <SelectItem value="<1 Year">Less than 1 Year</SelectItem>
                  <SelectItem value="1-5 Years">1 to 5 Years</SelectItem>
                  <SelectItem value="5+ Years">5+ Years</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="targetMarkets">Target Markets / Countries</Label>
              <Input 
                id="targetMarkets"
                placeholder="e.g. UAE, United States, Kenya" 
                value={data.targetMarkets || ""}
                onChange={(e) => updateData({ targetMarkets: e.target.value })}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="preferredShippingMode">Preferred Shipping Mode</Label>
                <Select value={data.preferredShippingMode} onValueChange={(val) => updateData({ preferredShippingMode: val })}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select mode" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Air">Air Freight</SelectItem>
                    <SelectItem value="Sea">Sea Freight</SelectItem>
                    <SelectItem value="Land">Land Transport</SelectItem>
                    <SelectItem value="Multimodal">Multimodal</SelectItem>
                    <SelectItem value="Any">Any / Flexible</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="keyCertifications">Key Certifications</Label>
                <Input 
                  id="keyCertifications"
                  placeholder="e.g. ISO 9001, FDA, CE" 
                  value={data.keyCertifications || ""}
                  onChange={(e) => updateData({ keyCertifications: e.target.value })}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="tradeMemberships">Trade Association Memberships</Label>
              <Input 
                id="tradeMemberships"
                placeholder="e.g. FIEO, APEDA, local chambers" 
                value={data.tradeMemberships || ""}
                onChange={(e) => updateData({ tradeMemberships: e.target.value })}
              />
            </div>
          </>
        ) : (
          <>
            <div className="space-y-2">
              <Label>Areas of Expertise</Label>
              <Select value={data.expertiseAreas?.[0] || ""} onValueChange={(val) => updateData({ expertiseAreas: [val] })}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select your primary service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Export Consulting">Export Consulting</SelectItem>
                  <SelectItem value="Market Research">Market Research</SelectItem>
                  <SelectItem value="Documentation">Documentation Support</SelectItem>
                  <SelectItem value="Partner Matching">Partner Matching</SelectItem>
                  <SelectItem value="Trading">Trading</SelectItem>
                  <SelectItem value="Other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Experience Level</Label>
              <Select value={data.experience} onValueChange={(val) => updateData({ experience: val })}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select experience level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Beginner">Beginner / Aspiring</SelectItem>
                  <SelectItem value="Intermediate">Intermediate</SelectItem>
                  <SelectItem value="Expert">Expert / Veteran</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="sectorsOfInterest">Sectors of Interest</Label>
              <Input 
                id="sectorsOfInterest"
                placeholder="e.g. Agriculture, Software, Machinery" 
                value={data.sectorsOfInterest || ""}
                onChange={(e) => updateData({ sectorsOfInterest: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="languagesSpoken">Languages Spoken</Label>
              <Input 
                id="languagesSpoken"
                placeholder="e.g. English, Hindi, Spanish" 
                value={data.languagesSpoken || ""}
                onChange={(e) => updateData({ languagesSpoken: e.target.value })}
              />
            </div>
          </>
        )}

        <div className="space-y-2">
          <Label>Brief Business Objective</Label>
          <Textarea 
            placeholder={isBusiness ? "e.g. Seeking market access in Kenya for textiles" : "e.g. Helping Indian SMEs export to Europe"} 
            value={data.objective || ""}
            onChange={(e) => updateData({ objective: e.target.value })}
            className="h-24"
          />
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-border">
        <Button
          className="w-full"
          size="lg"
          onClick={nextStep}
        >
          Save & Continue
        </Button>
      </div>
    </div>
  );
}
