import { useState } from "react";
import { useFormContext, useWatch } from "react-hook-form";
import type { SignupFormData } from "../types";
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
  const { control } = useFormContext<SignupFormData>();

  const userType = useWatch({ control, name: "userType" });
  const isBusiness = userType === "business";
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
            Create an Account
          </h1>
          <p className="text-muted-foreground text-sm">
            Join the AECCI Global Deal Room.
          </p>
        </div>
        <p className="text-xs text-muted-foreground">
          <span className="text-red-500">*</span> Indicates required fields
        </p>
      </div>

      <div className="space-y-6">
        {/* User Type Selection */}
        <FormField
          control={control}
          name="userType"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel>I am joining as a:</FormLabel>
              <FormControl>
                <div className="grid grid-cols-2 gap-4">
                  <div
                    onClick={() => field.onChange("business")}
                    className={`p-4 border rounded-lg cursor-pointer transition-all ${
                      field.value === "business"
                        ? "border-primary bg-primary/5 ring-1 ring-primary"
                        : "border-border hover:border-primary/50"
                    }`}
                  >
                    <h3 className="font-semibold text-sm mb-1">Business</h3>
                    <p className="text-xs text-muted-foreground">
                      Exporters, traders, companies.
                    </p>
                  </div>
                  <div
                    onClick={() => field.onChange("individual")}
                    className={`p-4 border rounded-lg cursor-pointer transition-all ${
                      field.value === "individual"
                        ? "border-primary bg-primary/5 ring-1 ring-primary"
                        : "border-border hover:border-primary/50"
                    }`}
                  >
                    <h3 className="font-semibold text-sm mb-1">Individual</h3>
                    <p className="text-xs text-muted-foreground">
                      Consultants, solo professionals.
                    </p>
                  </div>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Inputs (Full Width) */}
        <div className="space-y-4">
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

          {isBusiness && (
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
          )}

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
                    type="email"
                    placeholder="john@example.com"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={control}
            name="mobile"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Mobile Number <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <PhoneInput
                    placeholder="Enter mobile number"
                    defaultCountry={selectedCountryCode}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

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
                        placeholder="Create a strong password"
                        {...field}
                        className="pr-10"
                      />
                      <button
                        type="button"
                        className="absolute inset-y-0 right-0 flex items-center px-3 text-muted-foreground hover:text-foreground"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <EyeOff className="h-4 w-4" />
                        ) : (
                          <Eye className="h-4 w-4" />
                        )}
                      </button>
                    </div>
                  </FormControl>
                  <FormMessage />
                  {field.value && (
                    <div className="mt-2 flex items-center justify-between">
                      <div className="flex gap-1 flex-1 mr-4">
                        {[1, 2, 3, 4].map((level) => (
                          <div
                            key={level}
                            className={`h-1.5 w-full rounded-full transition-colors ${
                              level <= passwordStrength
                                ? getStrengthColor(passwordStrength)
                                : "bg-border"
                            }`}
                          />
                        ))}
                      </div>
                      <span
                        className={`text-xs font-medium ${
                          passwordStrength <= 1
                            ? "text-red-500"
                            : passwordStrength === 2
                              ? "text-orange-500"
                              : passwordStrength === 3
                                ? "text-yellow-500"
                                : "text-green-500"
                        }`}
                      >
                        {getStrengthText(passwordStrength)}
                      </span>
                    </div>
                  )}
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
                        className="pr-10"
                      />
                      <button
                        type="button"
                        className="absolute inset-y-0 right-0 flex items-center px-3 text-muted-foreground hover:text-foreground"
                        onClick={() =>
                          setShowConfirmPassword(!showConfirmPassword)
                        }
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

      <div className="mt-8 pt-6 border-t border-border">
        <Button
          className="w-full"
          size="lg"
          onClick={(e) => {
            e.preventDefault();
            nextStep();
          }}
        >
          Create Account
        </Button>
      </div>
    </div>
  );
}
