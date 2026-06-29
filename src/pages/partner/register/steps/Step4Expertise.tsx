import { useFormContext } from "react-hook-form";
import type { PartnerSignupFormData } from "../schema";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { MultiSelect } from "@/components/ui/multi-select";
import { COUNTRIES } from "@/lib/countries";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";

interface Props {
  nextStep: () => void;
}

const SECTOR_OPTIONS = [
  { label: "Legal Services", value: "Legal Services" },
  { label: "Trade Advisory", value: "Trade Advisory" },
  { label: "Export Consulting", value: "Export Consulting" },
  { label: "Market Entry", value: "Market Entry" },
  { label: "Pharmaceuticals", value: "Pharmaceuticals" },
  { label: "Agriculture & Food", value: "Agriculture & Food" },
  { label: "Textiles & Apparel", value: "Textiles & Apparel" },
  { label: "Technology & IT", value: "Technology & IT" },
  { label: "Manufacturing", value: "Manufacturing" },
  { label: "Finance & Banking", value: "Finance & Banking" },
  { label: "Real Estate", value: "Real Estate" },
  { label: "Energy & Mining", value: "Energy & Mining" },
  { label: "Logistics & Supply Chain", value: "Logistics & Supply Chain" },
  { label: "FMCG", value: "FMCG" },
  { label: "Automotive", value: "Automotive" },
  { label: "Arbitration", value: "Arbitration" },
  { label: "Other", value: "Other" },
];

export default function Step4Expertise({ nextStep }: Props) {
  const { control } = useFormContext<PartnerSignupFormData>();

  return (
    <div className="flex flex-col h-full">
      <div className="mb-8">
        <h1 className="text-2xl font-bold tracking-tight mb-2">
          Expertise, Coverage & Online Presence
        </h1>
        <p className="text-muted-foreground text-sm">
          Help clients find you — define your geographic coverage, sector focus, and professional links.
        </p>
      </div>

      <div className="space-y-5">
        <FormField
          control={control}
          name="expertiseCountries"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Countries of Expertise <span className="text-red-500">*</span>
              </FormLabel>
              <FormControl>
                <MultiSelect
                  options={COUNTRIES.map((c) => ({
                    label: c.name,
                    value: c.name,
                  }))}
                  selected={field.value || []}
                  onChange={field.onChange}
                  placeholder="Select countries you cover..."
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="expertiseSectors"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Sectors of Expertise <span className="text-red-500">*</span>
              </FormLabel>
              <FormControl>
                <MultiSelect
                  options={SECTOR_OPTIONS}
                  selected={field.value || []}
                  onChange={field.onChange}
                  placeholder="Select sectors you specialise in..."
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={control}
            name="linkedinProfileUrl"
            render={({ field }) => (
              <FormItem>
                <FormLabel>LinkedIn Profile URL</FormLabel>
                <FormControl>
                  <Input
                    placeholder="https://linkedin.com/in/yourprofile"
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
            name="websiteUrl"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Website / Portfolio URL</FormLabel>
                <FormControl>
                  <Input
                    placeholder="https://yourwebsite.com"
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
          name="references"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Professional References</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="List any professional references, past clients, or organisations you have worked with (optional but strengthens your application)..."
                  className="h-24"
                  {...field}
                  value={field.value || ""}
                />
              </FormControl>
              <FormDescription className="text-xs">
                Optional — admin reviewers use this during vetting.
              </FormDescription>
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
