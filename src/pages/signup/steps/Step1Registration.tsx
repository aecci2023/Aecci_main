import { useState } from "react";
import type { SignupFormData } from "../types";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { PhoneInput } from "@/components/ui/phone-input";
import { COUNTRIES } from "@/lib/countries";
import { Eye, EyeOff } from "lucide-react";
import type { Country } from "react-phone-number-input";

interface Props {
  data: SignupFormData;
  updateData: (data: Partial<SignupFormData>) => void;
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

export default function Step1Registration({ data, updateData, nextStep }: Props) {
  const isBusiness = data.userType === "business";
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const passwordStrength = calculateStrength(data.password);
  const isPasswordMatch = data.password && data.confirmPassword && data.password === data.confirmPassword;
  
  const selectedCountryObj = COUNTRIES.find((c) => c.name === data.country);
  const selectedCountryCode = (selectedCountryObj?.code || "IN") as Country;

  const handleNext = () => {
    if (data.password !== data.confirmPassword) return;
    nextStep();
  };

  return (
    <div className="flex flex-col h-full">
      <div className="mb-8">
        <h1 className="text-2xl font-bold tracking-tight mb-2">Create an Account</h1>
        <p className="text-muted-foreground text-sm">Join the AECCI Global Deal Room.</p>
      </div>

      <div className="space-y-6">
        {/* User Type Selection */}
        <div className="space-y-3">
          <Label>I am joining as a:</Label>
          <div className="grid grid-cols-2 gap-4">
            <div
              onClick={() => updateData({ userType: "business" })}
              className={`p-4 border rounded-lg cursor-pointer transition-all ${
                data.userType === "business" ? "border-primary bg-primary/5 ring-1 ring-primary" : "border-border hover:border-primary/50"
              }`}
            >
              <h3 className="font-semibold text-sm mb-1">Business</h3>
              <p className="text-xs text-muted-foreground">Exporters, traders, companies.</p>
            </div>
            <div
              onClick={() => updateData({ userType: "individual" })}
              className={`p-4 border rounded-lg cursor-pointer transition-all ${
                data.userType === "individual" ? "border-primary bg-primary/5 ring-1 ring-primary" : "border-border hover:border-primary/50"
              }`}
            >
              <h3 className="font-semibold text-sm mb-1">Individual</h3>
              <p className="text-xs text-muted-foreground">Consultants, solo professionals.</p>
            </div>
          </div>
        </div>

        {/* Inputs (Full Width) */}
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="fullName">Full Name</Label>
              <Input
                id="fullName"
                placeholder="John Doe"
                value={data.fullName}
                onChange={(e) => updateData({ fullName: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="country">Country of Residence</Label>
              <Select value={data.country} onValueChange={(val) => updateData({ country: val })}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select Country" />
                </SelectTrigger>
                <SelectContent>
                  {COUNTRIES.map((country) => (
                    <SelectItem key={country.code} value={country.name}>
                      {country.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {isBusiness && (
            <div className="space-y-2">
              <Label htmlFor="companyName">Company Name</Label>
              <Input
                id="companyName"
                placeholder="Your Company Ltd."
                value={data.companyName || ""}
                onChange={(e) => updateData({ companyName: e.target.value })}
              />
            </div>
          )}

          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              type="email"
              placeholder="john@example.com"
              value={data.email}
              onChange={(e) => updateData({ email: e.target.value })}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="mobile">Mobile Number</Label>
            <PhoneInput
              id="mobile"
              placeholder="Enter mobile number"
              value={data.mobile}
              onChange={(val) => updateData({ mobile: val || "" })}
              defaultCountry={selectedCountryCode}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Create a strong password"
                  value={data.password}
                  onChange={(e) => updateData({ password: e.target.value })}
                  className="pr-10"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 flex items-center px-3 text-muted-foreground hover:text-foreground"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
              {data.password && (
                <div className="mt-2 flex items-center justify-between">
                  <div className="flex gap-1 flex-1 mr-4">
                    {[1, 2, 3, 4].map((level) => (
                      <div
                        key={level}
                        className={`h-1.5 w-full rounded-full transition-colors ${
                          level <= passwordStrength ? getStrengthColor(passwordStrength) : "bg-border"
                        }`}
                      />
                    ))}
                  </div>
                  <span className={`text-xs font-medium ${
                    passwordStrength <= 1 ? "text-red-500" :
                    passwordStrength === 2 ? "text-orange-500" :
                    passwordStrength === 3 ? "text-yellow-500" : "text-green-500"
                  }`}>
                    {getStrengthText(passwordStrength)}
                  </span>
                </div>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <div className="relative">
                <Input
                  id="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm your password"
                  value={data.confirmPassword || ""}
                  onChange={(e) => updateData({ confirmPassword: e.target.value })}
                  className={`pr-10 ${
                    data.confirmPassword && !isPasswordMatch ? "border-red-500 focus-visible:ring-red-500/20" : ""
                  }`}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 flex items-center px-3 text-muted-foreground hover:text-foreground"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
              {data.confirmPassword && !isPasswordMatch && (
                <p className="text-xs text-red-500 mt-1">Passwords do not match.</p>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-border">
        <Button
          className="w-full"
          size="lg"
          onClick={handleNext}
          disabled={!data.userType || !data.fullName || !data.email || !data.password || !isPasswordMatch}
        >
          Create Account
        </Button>
      </div>
    </div>
  );
}
