import type { SignupFormData } from "../types";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface Props {
  data: SignupFormData;
  updateData: (data: Partial<SignupFormData>) => void;
  nextStep: () => void;
}

export default function Step3Profile({ data, updateData, nextStep }: Props) {
  const isBusiness = data.userType === "business";
  const isIndia = data.country === "India";

  return (
    <div className="flex flex-col h-full">
      <div className="mb-8">
        <h1 className="text-2xl font-bold tracking-tight mb-2">
          {isBusiness ? "Company Profile" : "Personal & Professional Profile"}
        </h1>
        <p className="text-muted-foreground text-sm">
          {isBusiness 
            ? "Tell us about your organization."
            : "Tell us about your background and expertise."}
        </p>
      </div>

      <div className="space-y-6">
        {isBusiness ? (
          <>
            <div className="space-y-2">
              <Label htmlFor="companyName2">Company Name *</Label>
              <Input
                id="companyName2"
                placeholder="Your Company Ltd."
                value={data.companyName || ""}
                onChange={(e) => updateData({ companyName: e.target.value })}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="yearEstablished">Year Established</Label>
                <Input
                  id="yearEstablished"
                  placeholder="e.g. 2010"
                  value={data.yearEstablished || ""}
                  onChange={(e) => updateData({ yearEstablished: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="companySize">Company Size</Label>
                <Select value={data.companySize} onValueChange={(val) => updateData({ companySize: val })}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Size" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1-10">1-10 Employees</SelectItem>
                    <SelectItem value="11-50">11-50 Employees</SelectItem>
                    <SelectItem value="51-200">51-200 Employees</SelectItem>
                    <SelectItem value="200+">200+ Employees</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="legalStructure">Legal Structure</Label>
                <Select value={data.legalStructure} onValueChange={(val) => updateData({ legalStructure: val })}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Structure" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Sole Proprietorship">Sole Proprietorship</SelectItem>
                    <SelectItem value="Partnership">Partnership</SelectItem>
                    <SelectItem value="LLP">LLP</SelectItem>
                    <SelectItem value="Private Limited">Private Limited</SelectItem>
                    <SelectItem value="Public Limited">Public Limited</SelectItem>
                    <SelectItem value="Other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="turnover">Annual Turnover</Label>
                <Select value={data.turnover} onValueChange={(val) => updateData({ turnover: val })}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="< 1 Cr">Under ₹1 Cr / $120k</SelectItem>
                    <SelectItem value="1-5 Cr">₹1-5 Cr / $120k - $600k</SelectItem>
                    <SelectItem value="5-50 Cr">₹5-50 Cr / $600k - $6M</SelectItem>
                    <SelectItem value="> 50 Cr">Above ₹50 Cr / $6M+</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="industrySector">Industry / Sector</Label>
              <Select value={data.industrySector} onValueChange={(val) => updateData({ industrySector: val })}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select primary industry" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Agriculture">Agriculture & Food</SelectItem>
                  <SelectItem value="Textiles">Textiles & Apparel</SelectItem>
                  <SelectItem value="Technology">Technology & IT</SelectItem>
                  <SelectItem value="Manufacturing">Manufacturing & Machinery</SelectItem>
                  <SelectItem value="Retail">Retail & Consumer Goods</SelectItem>
                  <SelectItem value="Other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="websiteUrl">Website URL</Label>
                <Input
                  id="websiteUrl"
                  placeholder="https://www.example.com"
                  value={data.websiteUrl || ""}
                  onChange={(e) => updateData({ websiteUrl: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="linkedinUrl">LinkedIn Company Page</Label>
                <Input
                  id="linkedinUrl"
                  placeholder="LinkedIn URL"
                  value={data.linkedinUrl || ""}
                  onChange={(e) => updateData({ linkedinUrl: e.target.value })}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="businessAddress">Registered Business Address</Label>
              <Input
                id="businessAddress"
                placeholder="Full registered address"
                value={data.businessAddress || ""}
                onChange={(e) => updateData({ businessAddress: e.target.value })}
              />
            </div>

            {/* Conditional Tax IDs */}
            {isIndia ? (
              <div className="p-4 bg-muted/50 rounded-lg space-y-4 border border-border">
                <h3 className="font-medium text-sm">India Compliance Details</h3>
                <div className="space-y-2">
                  <Label htmlFor="iec">IEC Number (Import Export Code)</Label>
                  <Input id="iec" value={data.iecNumber || ""} onChange={(e) => updateData({ iecNumber: e.target.value })} placeholder="10-digit IEC" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="gst">GST Number</Label>
                    <Input id="gst" value={data.gstNumber || ""} onChange={(e) => updateData({ gstNumber: e.target.value })} placeholder="15-digit GSTIN" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="pan">PAN Number</Label>
                    <Input id="pan" value={data.panNumber || ""} onChange={(e) => updateData({ panNumber: e.target.value })} placeholder="10-digit PAN" />
                  </div>
                </div>
                <p className="text-xs text-muted-foreground italic">Don't have these yet? You can skip and apply later.</p>
              </div>
            ) : (
              <div className="p-4 bg-muted/50 rounded-lg space-y-4 border border-border">
                <h3 className="font-medium text-sm">International Business Details</h3>
                <div className="space-y-2">
                  <Label htmlFor="companyRegType">Registration Document Type</Label>
                  <Select value={data.companyRegistrationType} onValueChange={(val) => updateData({ companyRegistrationType: val })}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select Document Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="TIN">Tax Identification Number (TIN)</SelectItem>
                      <SelectItem value="VAT">VAT Registration Number</SelectItem>
                      <SelectItem value="EIN">Employer Identification Number (EIN)</SelectItem>
                      <SelectItem value="CRN">Company Registration Number</SelectItem>
                      <SelectItem value="Other">Other Business License</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="taxId">Document Number</Label>
                  <Input
                    id="taxId"
                    placeholder="Enter document number"
                    value={data.taxId || ""}
                    onChange={(e) => updateData({ taxId: e.target.value })}
                  />
                </div>
                <p className="text-xs text-muted-foreground italic">Don't have these yet? You can skip and apply later.</p>
              </div>
            )}
          </>
        ) : (
          <>
            {/* Individual Profile Fields */}
            <div className="space-y-2">
              <Label htmlFor="profTitle">Professional Title / Designation</Label>
              <Input
                id="profTitle"
                placeholder="e.g. Export Consultant, Freelance Trader"
                value={data.professionalTitle || ""}
                onChange={(e) => updateData({ professionalTitle: e.target.value })}
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="nationality">Nationality</Label>
                <Input
                  id="nationality"
                  placeholder="e.g. Indian, Kenyan"
                  value={data.nationality || ""}
                  onChange={(e) => updateData({ nationality: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="yearsOfExperience">Years of Experience</Label>
                <Select value={data.yearsOfExperience} onValueChange={(val) => updateData({ yearsOfExperience: val })}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Experience" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0-2">0-2 Years</SelectItem>
                    <SelectItem value="3-5">3-5 Years</SelectItem>
                    <SelectItem value="6-10">6-10 Years</SelectItem>
                    <SelectItem value="10+">10+ Years</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="linkedinProfileUrl">LinkedIn Profile URL</Label>
              <Input
                id="linkedinProfileUrl"
                placeholder="https://linkedin.com/in/..."
                value={data.linkedinProfileUrl || ""}
                onChange={(e) => updateData({ linkedinProfileUrl: e.target.value })}
              />
            </div>
            
            {isIndia ? (
              <div className="p-4 bg-muted/50 rounded-lg space-y-4 border border-border">
                <h3 className="font-medium text-sm">India KYC Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="indPan">PAN Number</Label>
                    <Input id="indPan" value={data.panNumber || ""} onChange={(e) => updateData({ panNumber: e.target.value })} placeholder="10-digit PAN" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="aadhar">Aadhar Number</Label>
                    <Input id="aadhar" value={data.aadharNumber || ""} onChange={(e) => updateData({ aadharNumber: e.target.value })} placeholder="12-digit Aadhar" />
                  </div>
                </div>
                <p className="text-xs text-muted-foreground italic">Don't have these yet? You can skip and apply later.</p>
              </div>
            ) : (
              <div className="p-4 bg-muted/50 rounded-lg space-y-4 border border-border">
                <h3 className="font-medium text-sm">International KYC Details</h3>
                <div className="space-y-2">
                  <Label htmlFor="govIdType">Primary Identification Type</Label>
                  <Select value={data.governmentIdType} onValueChange={(val) => updateData({ governmentIdType: val })}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select ID Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Passport">Passport</SelectItem>
                      <SelectItem value="NationalID">National ID Card</SelectItem>
                      <SelectItem value="SSN">Social Security Number (or Equivalent)</SelectItem>
                      <SelectItem value="DrivingLicense">Driving License</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="govId">Document Number</Label>
                  <Input
                    id="govId"
                    placeholder="Enter ID number"
                    value={data.governmentId || ""}
                    onChange={(e) => updateData({ governmentId: e.target.value })}
                  />
                </div>
                <p className="text-xs text-muted-foreground italic">Don't have these yet? You can skip and apply later.</p>
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="assoc">Business Association (if any)</Label>
              <Input
                id="assoc"
                placeholder="Company you represent or 'Independent'"
                value={data.businessAssociation || ""}
                onChange={(e) => updateData({ businessAssociation: e.target.value })}
              />
            </div>
          </>
        )}
      </div>

      <div className="mt-8 pt-6 border-t border-border flex gap-4">
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
