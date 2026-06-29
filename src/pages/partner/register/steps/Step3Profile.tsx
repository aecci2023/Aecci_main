import { useFormContext } from "react-hook-form";
import type { PartnerSignupFormData } from "../schema";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { MultiSelect } from "@/components/ui/multi-select";
import { COUNTRIES } from "@/lib/countries";
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

interface Props {
  nextStep: () => void;
}

const LANGUAGE_OPTIONS = [
  "Afrikaans", "Albanian", "Amharic", "Arabic", "Armenian", "Azerbaijani",
  "Basque", "Belarusian", "Bengali", "Bosnian", "Bulgarian", "Burmese",
  "Catalan", "Cebuano", "Chinese (Cantonese)", "Chinese (Mandarin)", "Croatian",
  "Czech", "Danish", "Dutch", "English", "Esperanto", "Estonian", "Finnish",
  "French", "Galician", "Georgian", "German", "Greek", "Gujarati", "Haitian Creole",
  "Hausa", "Hebrew", "Hindi", "Hungarian", "Icelandic", "Igbo", "Indonesian",
  "Irish", "Italian", "Japanese", "Javanese", "Kannada", "Kazakh", "Khmer",
  "Korean", "Kurdish", "Kyrgyz", "Lao", "Latin", "Latvian", "Lithuanian",
  "Luxembourgish", "Macedonian", "Malagasy", "Malay", "Malayalam", "Maltese",
  "Maori", "Marathi", "Mongolian", "Nepali", "Norwegian", "Odia", "Pashto",
  "Persian (Farsi)", "Polish", "Portuguese", "Punjabi", "Romanian", "Russian",
  "Samoan", "Serbian", "Sinhalese", "Slovak", "Slovenian", "Somali", "Spanish",
  "Swahili", "Swedish", "Tagalog", "Tajik", "Tamil", "Tatar", "Telugu", "Thai",
  "Tibetan", "Turkish", "Turkmen", "Ukrainian", "Urdu", "Uzbek", "Vietnamese",
  "Welsh", "Xhosa", "Yiddish", "Yoruba", "Zulu",
].map((l) => ({ label: l, value: l }));

export default function Step3Profile({ nextStep }: Props) {
  const { control } = useFormContext<PartnerSignupFormData>();

  return (
    <div className="flex flex-col h-full">
      <div className="mb-8">
        <h1 className="text-2xl font-bold tracking-tight mb-2">
          Your Professional Profile
        </h1>
        <p className="text-muted-foreground text-sm">
          This information appears on your public Partner Brief in the marketplace.
        </p>
      </div>

      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={control}
            name="professionalTitle"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Professional Title <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="e.g. Trade Consultant, Lawyer, Export Adviser"
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
                <FormLabel>
                  Years of Experience <span className="text-red-500">*</span>
                </FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={control}
            name="organization"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Organization / Firm Name <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="e.g. Global Trade Advisory LLP"
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
            name="nationality"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nationality</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select nationality" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {COUNTRIES.map((c) => (
                      <SelectItem key={c.code} value={c.name}>
                        {c.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={control}
          name="languagesSpoken"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Languages Spoken <span className="text-red-500">*</span>
              </FormLabel>
              <FormControl>
                <MultiSelect
                  options={LANGUAGE_OPTIONS}
                  selected={field.value || []}
                  onChange={field.onChange}
                  placeholder="Select languages you speak..."
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="bio"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Professional Biography <span className="text-red-500">*</span>
              </FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Write a compelling public bio — your background, expertise, track record, and how you help businesses expand internationally. (min 50 characters)"
                  className="h-32"
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
          name="motivation"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Why do you want to become an AECCI partner?{" "}
                <span className="text-red-500">*</span>
              </FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Describe your motivation, how you can help Indian businesses, your network and expertise..."
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
