import { useState } from "react";
import { useFormContext, useWatch } from "react-hook-form";
import type { ImporterSignupFormData } from "../schema";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PhoneInput } from "@/components/ui/phone-input";
import { COUNTRIES } from "@/lib/countries";
import { Eye, EyeOff } from "lucide-react";
import type { Country } from "react-phone-number-input";
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

const calculateStrength = (password: string) => {
  let score = 0;
  if (!password) return score;
  if (password.length >= 8) score += 1;
  if (/[A-Z]/.test(password)) score += 1;
  if (/[0-9]/.test(password)) score += 1;
  if (/[^A-Za-z0-9]/.test(password)) score += 1;
  return score; // 0 to 4
};

const getStrengthColor = (score: number) => {
  if (score === 0) return "bg-border";
  if (score <= 1) return "bg-red-500";
  if (score === 2) return "bg-orange-500";
  if (score === 3) return "bg-yellow-500";
  return "bg-green-500";
};

const getStrengthText = (score: number) => {
  if (score === 0) return "";
  if (score <= 1) return "Weak";
  if (score === 2) return "Fair";
  if (score === 3) return "Good";
  return "Strong";
};

export default function Step1Registration({ nextStep }: Props) {
  const { control } = useFormContext<ImporterSignupFormData>();

  const country = useWatch({ control, name: "country" });
  const password = useWatch({ control, name: "password" });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const passwordStrength = calculateStrength(password);

  const selectedCountryObj = COUNTRIES.find((c) => c.name === country);
  const selectedCountryCode = (selectedCountryObj?.code || "IN") as Country;

  return (
    <div className="flex flex-col h-full">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight mb-2">
            Register as an Importer
          </h1>
          <p className="text-muted-foreground text-sm">
            Join the AECCI Global Deal Room and connect with verified exporters.
          </p>
        </div>
        <p className="text-xs text-muted-foreground">
          <span className="text-red-500">*</span> Indicates required fields
        </p>
      </div>

      <div className="space-y-6">
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={control}
                name="companyName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Company Name <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="Your Company Ltd." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

            <FormField
              control={control}
              name="professionalTitle"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Designation <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="e.g. Procurement Manager" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Full Name <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="John Doe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Email Address <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="john@example.com"
                      type="email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={control}
              name="mobileNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Mobile Number <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <PhoneInput
                      defaultCountry={selectedCountryCode}
                      placeholder="Enter phone number"
                      value={field.value}
                      onChange={field.onChange}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={control}
              name="country"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Country of Residence <span className="text-red-500">*</span>
                  </FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select Country" />
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Password <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        type={showPassword ? "text" : "password"}
                        placeholder="Create a password"
                        {...field}
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                      >
                        {showPassword ? (
                          <EyeOff className="h-4 w-4" />
                        ) : (
                          <Eye className="h-4 w-4" />
                        )}
                      </button>
                    </div>
                  </FormControl>
                  {password && (
                    <div className="mt-2 space-y-1">
                      <div className="flex gap-1 h-1">
                        {[1, 2, 3, 4].map((level) => (
                          <div
                            key={level}
                            className={`flex-1 rounded-full ${
                              level <= passwordStrength
                                ? getStrengthColor(passwordStrength)
                                : "bg-border"
                            }`}
                          />
                        ))}
                      </div>
                      <p
                        className={`text-xs text-right ${
                          passwordStrength >= 3
                            ? "text-green-500"
                            : "text-muted-foreground"
                        }`}
                      >
                        {getStrengthText(passwordStrength)}
                      </p>
                    </div>
                  )}
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Confirm Password <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="Confirm your password"
                        {...field}
                      />
                      <button
                        type="button"
                        onClick={() =>
                          setShowConfirmPassword(!showConfirmPassword)
                        }
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                      >
                        {showConfirmPassword ? (
                          <EyeOff className="h-4 w-4" />
                        ) : (
                          <Eye className="h-4 w-4" />
                        )}
                      </button>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
      </div>

      <div className="mt-8 flex justify-end">
        <Button onClick={nextStep} size="lg" className="w-full md:w-auto">
          Continue
        </Button>
      </div>
    </div>
  );
}
