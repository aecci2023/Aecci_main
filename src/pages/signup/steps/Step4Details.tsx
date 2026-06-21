import { useFormContext, useWatch } from "react-hook-form";
import type { SignupFormData } from "../schema";
import { COUNTRIES } from "@/lib/countries";
import { MultiSelect } from "@/components/ui/multi-select";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";

interface Props {
  nextStep: () => void;
}

export default function Step4Details({ nextStep }: Props) {
  const { control } = useFormContext<SignupFormData>();
  const userType = useWatch({ control, name: "userType" });
  const isBusiness = userType === "business";

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
            <FormField
              control={control}
              name="businessRole"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Primary Business Role{" "}
                    <span className="text-red-500">*</span>
                  </FormLabel>
                  <Select
                    onValueChange={(val) => field.onChange([val])}
                    value={field.value?.[0] || ""}
                  >
                    <FormControl>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select your role" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Manufacturer">Manufacturer</SelectItem>
                      <SelectItem value="Exporter">Exporter</SelectItem>
                      <SelectItem value="Merchant Exporter">
                        Merchant Exporter
                      </SelectItem>
                      <SelectItem value="Importer">Importer</SelectItem>
                      <SelectItem value="Trader">
                        Trader / Distributor
                      </SelectItem>
                      <SelectItem value="Consultant">Consultant</SelectItem>
                      <SelectItem value="Other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={control}
              name="products"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Products / Services <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="e.g. Textiles, Spices, IT Services (suggested to use HS Codes)"
                      className="h-20"
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
              name="experience"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Export / Import Experience{" "}
                    <span className="text-red-500">*</span>
                  </FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    value={field.value || ""}
                  >
                    <FormControl>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select experience level" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="None">None (New Exporter)</SelectItem>
                      <SelectItem value="<1 Year">Less than 1 Year</SelectItem>
                      <SelectItem value="1-5 Years">1 to 5 Years</SelectItem>
                      <SelectItem value="5+ Years">5+ Years</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={control}
              name="targetMarkets"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Target Markets / Countries{" "}
                    <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <MultiSelect
                      options={COUNTRIES.map((c) => ({ label: c.name, value: c.name }))}
                      selected={field.value || []}
                      onChange={field.onChange}
                      placeholder="Select target countries..."
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={control}
              name="keyCertifications"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Key Certifications</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="e.g. ISO 9001, FDA, CE"
                      {...field}
                      value={field.value || ""}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </>
        ) : (
          <>
            <FormField
              control={control}
              name="expertiseAreas"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Areas of Expertise <span className="text-red-500">*</span>
                  </FormLabel>
                  <Select
                    onValueChange={(val) => field.onChange([val])}
                    value={field.value?.[0] || ""}
                  >
                    <FormControl>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select your primary service" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Export Consulting">
                        Export Consulting
                      </SelectItem>
                      <SelectItem value="Market Research">
                        Market Research
                      </SelectItem>
                      <SelectItem value="Documentation">
                        Documentation Support
                      </SelectItem>
                      <SelectItem value="Partner Matching">
                        Partner Matching
                      </SelectItem>
                      <SelectItem value="Trading">Trading</SelectItem>
                      <SelectItem value="Other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={control}
              name="experience"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Experience Level <span className="text-red-500">*</span>
                  </FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    value={field.value || ""}
                  >
                    <FormControl>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select experience level" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Beginner">
                        Beginner / Aspiring
                      </SelectItem>
                      <SelectItem value="Intermediate">Intermediate</SelectItem>
                      <SelectItem value="Expert">Expert / Veteran</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={control}
              name="sectorsOfInterest"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Sectors of Interest <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="e.g. Agriculture, Software, Machinery"
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
              name="languagesSpoken"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Languages Spoken <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="e.g. English, Hindi, Spanish"
                      {...field}
                      value={field.value || ""}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </>
        )}

        <FormField
          control={control}
          name="objective"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Brief Business Objective <span className="text-red-500">*</span>
              </FormLabel>
              <FormControl>
                <Textarea
                  placeholder={
                    isBusiness
                      ? "e.g. Seeking market access in Kenya for textiles"
                      : "e.g. Helping Indian SMEs export to Europe"
                  }
                  className="h-24"
                  {...field}
                  value={field.value || ""}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      <div className="mt-8 pt-6 border-t border-border">
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
