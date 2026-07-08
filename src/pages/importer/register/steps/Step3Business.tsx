import { useFormContext, useWatch } from "react-hook-form";
import type { ImporterSignupFormData } from "../schema";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { COUNTRIES } from "@/lib/countries";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { useState } from "react";
import { X, Loader2 } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";

interface Props {
  nextStep: () => void;
  isSubmitting?: boolean;
}

const BUSINESS_ROLES = [
  "Manufacturer",
  "Distributor / Wholesaler",
  "Retailer",
  "Trading Company",
  "Buying Office",
  "E-commerce",
  "Other"
];

const IMPORT_VOLUMES = [
  "Less than $100,000",
  "$100,000 - $500,000",
  "$500,000 - $1,000,000",
  "$1,000,000 - $5,000,000",
  "Over $5,000,000"
];

export default function Step3Business({ nextStep, isSubmitting }: Props) {
  const { control, setValue } = useFormContext<ImporterSignupFormData>();
  
  const products = useWatch({ control, name: "products" }) || [];
  const targetMarkets = useWatch({ control, name: "targetMarkets" }) || [];
  
  const [productInput, setProductInput] = useState("");

  const addProduct = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && productInput.trim()) {
      e.preventDefault();
      if (!products.includes(productInput.trim())) {
        setValue("products", [...products, productInput.trim()], { shouldValidate: true });
      }
      setProductInput("");
    }
  };

  const removeProduct = (prod: string) => {
    setValue("products", products.filter((p) => p !== prod), { shouldValidate: true });
  };

  const addMarket = (val: string) => {
    if (!targetMarkets.includes(val)) {
      setValue("targetMarkets", [...targetMarkets, val], { shouldValidate: true });
    }
  };

  const removeMarket = (market: string) => {
    setValue("targetMarkets", targetMarkets.filter((m) => m !== market), { shouldValidate: true });
  };

  return (
    <div className="flex flex-col h-full animate-in fade-in slide-in-from-right-4 duration-500">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight mb-2">
            Business Information
          </h1>
          <p className="text-muted-foreground text-sm">
            Tell us about your sourcing needs to get better matches.
          </p>
        </div>
        <p className="text-xs text-muted-foreground">
          <span className="text-red-500">*</span> Required fields
        </p>
      </div>

      <div className="space-y-6">
        <FormField
          control={control}
          name="businessRole"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Nature of Business <span className="text-red-500">*</span>
              </FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select business nature" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {BUSINESS_ROLES.map((role) => (
                    <SelectItem key={role} value={role}>
                      {role}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="importVolume"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Annual Import Volume <span className="text-red-500">*</span>
              </FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select import volume" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {IMPORT_VOLUMES.map((vol) => (
                    <SelectItem key={vol} value={vol}>
                      {vol}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="products"
          render={() => (
            <FormItem>
              <FormLabel>
                Products You Import <span className="text-red-500">*</span>
              </FormLabel>
              <FormControl>
                <div className="space-y-2">
                  <Input
                    placeholder="Type a product and press Enter"
                    value={productInput}
                    onChange={(e) => setProductInput(e.target.value)}
                    onKeyDown={addProduct}
                  />
                  {products.length > 0 && (
                    <div className="flex flex-wrap gap-2 pt-2">
                      {products.map((p) => (
                        <Badge key={p} variant="secondary" className="flex items-center gap-1 px-3 py-1 bg-blue-500/10 text-blue-500 hover:bg-blue-500/20">
                          {p}
                          <button type="button" onClick={() => removeProduct(p)} className="ml-1 hover:text-red-500">
                            <X className="w-3 h-3" />
                          </button>
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="targetMarkets"
          render={() => (
            <FormItem>
              <FormLabel>
                Preferred Countries to Import From <span className="text-red-500">*</span>
              </FormLabel>
              <FormControl>
                <div className="space-y-2">
                  <Select onValueChange={addMarket} value="">
                    <SelectTrigger>
                      <SelectValue placeholder="Select countries" />
                    </SelectTrigger>
                    <SelectContent>
                      {COUNTRIES.filter((c) => !targetMarkets.includes(c.name)).map((c) => (
                        <SelectItem key={c.code} value={c.name}>
                          {c.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {targetMarkets.length > 0 && (
                    <div className="flex flex-wrap gap-2 pt-2">
                      {targetMarkets.map((m) => (
                        <Badge key={m} variant="secondary" className="flex items-center gap-1 px-3 py-1 bg-emerald-500/10 text-emerald-500 hover:bg-emerald-500/20">
                          {m}
                          <button type="button" onClick={() => removeMarket(m)} className="ml-1 hover:text-red-500">
                            <X className="w-3 h-3" />
                          </button>
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="pt-4">
          <FormField
            control={control}
            name="agreedToTerms"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 shadow-sm bg-card">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <p className="text-sm text-muted-foreground">
                    By submitting this form, I agree to the{" "}
                    <a
                      href="https://www.aecci.org.in/terms-conditions"
                      className="text-primary hover:underline underline-offset-4 font-medium"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Terms and Conditions
                    </a>{" "}
                    and{" "}
                    <a
                      href="https://www.aecci.org.in/privacy-policy"
                      className="text-primary hover:underline underline-offset-4 font-medium"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Privacy Policy
                    </a>{" "}
                    of AECCI Global Deal Room.
                  </p>
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-border flex justify-end">
        <Button
          size="lg"
          className="w-full md:w-auto min-w-[200px]"
          onClick={(e) => {
            e.preventDefault();
            nextStep();
          }}
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Submitting...
            </>
          ) : (
            "Complete Registration"
          )}
        </Button>
      </div>
    </div>
  );
}
