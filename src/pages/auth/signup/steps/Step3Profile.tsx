import { useFormContext, useWatch, useFieldArray } from "react-hook-form";
import type { SignupFormData } from "../schema";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Plus, Trash2 } from "lucide-react";

interface Props {
  nextStep: () => void;
}

export default function Step3Profile({ nextStep }: Props) {
  const { control } = useFormContext<SignupFormData>();

  const userType = useWatch({ control, name: "userType" });
  const country = useWatch({ control, name: "country" });
  const companyNameVal = useWatch({ control, name: "companyName" });

  const isBusiness = userType === "business";
  const isIndia = country === "India";

  const {
    fields: bizIds,
    append: appendBizId,
    remove: removeBizId,
  } = useFieldArray({
    control,
    name: "internationalBusinessIds",
  });

  const {
    fields: internationalIdsArray,
    append: appendId,
    remove: removeId,
  } = useFieldArray({
    control,
    name: "internationalIds",
  });

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
            <FormField
              control={control}
              name="companyName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Company Name <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Your Company Ltd."
                      {...field}
                      value={field.value || ""}
                      disabled={!!companyNameVal}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={control}
                name="yearEstablished"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Year Established <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="e.g. 2010"
                        {...field}
                        value={field.value || ""}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name="companySize"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Company Size <span className="text-red-500">*</span>
                    </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select Size" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="1-10">1-10 Employees</SelectItem>
                        <SelectItem value="11-50">11-50 Employees</SelectItem>
                        <SelectItem value="51-200">51-200 Employees</SelectItem>
                        <SelectItem value="200+">200+ Employees</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={control}
                name="legalStructure"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Legal Structure <span className="text-red-500">*</span>
                    </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select Structure" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Sole Proprietorship">
                          Sole Proprietorship
                        </SelectItem>
                        <SelectItem value="Partnership">Partnership</SelectItem>
                        <SelectItem value="LLP">LLP</SelectItem>
                        <SelectItem value="Private Limited">
                          Private Limited
                        </SelectItem>
                        <SelectItem value="Public Limited">
                          Public Limited
                        </SelectItem>
                        <SelectItem value="Other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name="turnover"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Annual Turnover <span className="text-red-500">*</span>
                    </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select Range" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="< 1 Cr">
                          Under ₹1 Cr / $120k
                        </SelectItem>
                        <SelectItem value="1-5 Cr">
                          ₹1-5 Cr / $120k - $600k
                        </SelectItem>
                        <SelectItem value="5-50 Cr">
                          ₹5-50 Cr / $600k - $6M
                        </SelectItem>
                        <SelectItem value="> 50 Cr">
                          Above ₹50 Cr / $6M+
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={control}
              name="industrySector"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Industry / Sector <span className="text-red-500">*</span>
                  </FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select primary industry" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Agriculture">
                        Agriculture & Food
                      </SelectItem>
                      <SelectItem value="Textiles">
                        Textiles & Apparel
                      </SelectItem>
                      <SelectItem value="Technology">
                        Technology & IT
                      </SelectItem>
                      <SelectItem value="Manufacturing">
                        Manufacturing & Machinery
                      </SelectItem>
                      <SelectItem value="Retail">
                        Retail & Consumer Goods
                      </SelectItem>
                      <SelectItem value="Other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={control}
                name="websiteUrl"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Website URL</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="https://www.example.com"
                        {...field}
                        value={field.value || ""}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name="linkedinUrl"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>LinkedIn Company Page</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="LinkedIn URL"
                        {...field}
                        value={field.value || ""}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={control}
              name="businessAddress"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Registered Business Address{" "}
                    <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Full registered address"
                      {...field}
                      value={field.value || ""}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Conditional Tax IDs */}
            {isIndia ? (
              <div className="p-4 bg-muted/50 rounded-lg space-y-4 border border-border">
                <h3 className="font-medium text-sm">
                  India Compliance Details
                </h3>
                <FormField
                  control={control}
                  name="iecNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>IEC Number (Import Export Code)</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="10-digit IEC"
                          {...field}
                          value={field.value || ""}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={control}
                    name="gstNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>GST Number</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="15-digit GSTIN"
                            {...field}
                            value={field.value || ""}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={control}
                    name="panNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>PAN Number</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="10-digit PAN"
                            {...field}
                            value={field.value || ""}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <p className="text-xs text-muted-foreground italic">
                  Don't have these yet? You can skip and apply later.
                </p>
              </div>
            ) : (
              <div className="p-4 bg-muted/50 rounded-lg space-y-4 border border-border">
                <h3 className="font-medium text-sm">
                  International Business Details{" "}
                  <span className="text-red-500">*</span>
                </h3>
                <p className="text-xs text-muted-foreground mb-4">
                  Please provide at least one registration or tax document
                  number.
                </p>

                {bizIds.map((item, index) => (
                  <div
                    key={item.id}
                    className="grid grid-cols-1 md:grid-cols-[1fr_1fr_auto] gap-4 items-end bg-background p-3 rounded-md border border-border mb-3"
                  >
                    <FormField
                      control={control}
                      name={`internationalBusinessIds.${index}.type`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Document Type</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select Document" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="TIN">
                                Tax Identification Number (TIN)
                              </SelectItem>
                              <SelectItem value="VAT">
                                VAT Registration Number
                              </SelectItem>
                              <SelectItem value="EIN">
                                Employer Identification Number (EIN)
                              </SelectItem>
                              <SelectItem value="CRN">
                                Company Registration Number
                              </SelectItem>
                              <SelectItem value="Other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={control}
                      name={`internationalBusinessIds.${index}.idNumber`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Document Number</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Enter number"
                              {...field}
                              value={field.value || ""}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="text-muted-foreground hover:text-destructive"
                      onClick={() => removeBizId(index)}
                      disabled={bizIds.length === 1}
                    >
                      <Trash2 className="size-4" />
                    </Button>
                  </div>
                ))}

                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  className="w-full mt-2"
                  onClick={() => appendBizId({ type: "", idNumber: "" })}
                >
                  <Plus className="size-4 mr-2" /> Add Another Document
                </Button>
              </div>
            )}
          </>
        ) : (
          <>
            {/* Individual Profile Fields */}
            <FormField
              control={control}
              name="professionalTitle"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Professional Title / Designation</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="e.g. Export Consultant, Freelance Trader"
                      {...field}
                      value={field.value || ""}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={control}
                name="nationality"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nationality</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="e.g. Indian, Kenyan"
                        {...field}
                        value={field.value || ""}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name="yearsOfExperience"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Years of Experience</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select Experience" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="0-2">0-2 Years</SelectItem>
                        <SelectItem value="3-5">3-5 Years</SelectItem>
                        <SelectItem value="6-10">6-10 Years</SelectItem>
                        <SelectItem value="10+">10+ Years</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={control}
              name="linkedinProfileUrl"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>LinkedIn Profile URL</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="https://linkedin.com/in/..."
                      {...field}
                      value={field.value || ""}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {isIndia ? (
              <div className="p-4 bg-muted/50 rounded-lg space-y-4 border border-border">
                <h3 className="font-medium text-sm">India Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={control}
                    name="aadharNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Aadhar Number</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="12-digit Aadhar"
                            {...field}
                            value={field.value || ""}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={control}
                    name="panNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>PAN Number</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="10-digit PAN"
                            {...field}
                            value={field.value || ""}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <p className="text-xs text-muted-foreground italic">
                  Don't have these yet? You can skip and apply later.
                </p>
              </div>
            ) : (
              <div className="p-4 bg-muted/50 rounded-lg space-y-4 border border-border">
                <h3 className="font-medium text-sm">
                  International Details{" "}
                  <span className="text-red-500">*</span>
                </h3>
                <p className="text-xs text-muted-foreground mb-4">
                  Please provide at least one government identification
                  document.
                </p>

                {internationalIdsArray.map((item, index) => (
                  <div
                    key={item.id}
                    className="grid grid-cols-1 md:grid-cols-[1fr_1fr_auto] gap-4 items-end bg-background p-3 rounded-md border border-border mb-3"
                  >
                    <FormField
                      control={control}
                      name={`internationalIds.${index}.type`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>ID Type</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select ID Type" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="Passport">Passport</SelectItem>
                              <SelectItem value="NationalID">
                                National ID Card
                              </SelectItem>
                              <SelectItem value="SSN">
                                Social Security Number
                              </SelectItem>
                              <SelectItem value="DrivingLicense">
                                Driving License
                              </SelectItem>
                              <SelectItem value="Other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={control}
                      name={`internationalIds.${index}.idNumber`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>ID Number</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Enter ID number"
                              {...field}
                              value={field.value || ""}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="text-muted-foreground hover:text-destructive"
                      onClick={() => removeId(index)}
                      disabled={internationalIdsArray.length === 1}
                    >
                      <Trash2 className="size-4" />
                    </Button>
                  </div>
                ))}

                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  className="w-full mt-2"
                  onClick={() => appendId({ type: "", idNumber: "" })}
                >
                  <Plus className="size-4 mr-2" /> Add Another ID
                </Button>
              </div>
            )}
          </>
        )}
      </div>

      <div className="mt-8 pt-6 border-t border-border flex gap-4">
        <Button
          className="w-full"
          size="lg"
          onClick={(e) => {
            e.preventDefault();
            nextStep();
          }}
          type="button"
        >
          Save & Continue
        </Button>
      </div>
    </div>
  );
}
