import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle2,
  User,
  Globe,
  Calendar,
  ChevronRight,
  ChevronLeft,
  Loader2,
} from "lucide-react";
import { toast } from "sonner";

const STEPS = [
  {
    title: "Personal Profile",
    description: "Tell clients about yourself",
    icon: User,
  },
  {
    title: "Expertise & Focus",
    description: "Countries and sectors you specialise in",
    icon: Globe,
  },
  {
    title: "Availability",
    description: "Set your weekly schedule",
    icon: Calendar,
  },
];

const step1Schema = z.object({
  organization: z.string().min(2, "Organisation name is required").max(200),
  professionalTitle: z
    .string()
    .min(2, "Professional title is required")
    .max(150),
  bio: z.string().min(50, "Bio must be at least 50 characters").max(1500),
  linkedinUrl: z
    .string()
    .url("Enter a valid LinkedIn URL")
    .or(z.literal(""))
    .optional(),
});

const step2Schema = z.object({
  expertiseCountriesRaw: z.string().min(2, "Add at least one country"),
  expertiseSectorsRaw: z.string().min(2, "Add at least one sector"),
  yearsOfExperience: z.string().min(1, "Required"),
});

const step3Schema = z.object({
  availabilityNotes: z.string().max(500).optional(),
});

type Step1 = z.infer<typeof step1Schema>;
type Step2 = z.infer<typeof step2Schema>;
type Step3 = z.infer<typeof step3Schema>;

const DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export default function PartnerOnboardingPage() {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [submitting, setSubmitting] = useState(false);
  const [selectedDays, setSelectedDays] = useState<string[]>([]);

  const [s1Data, setS1Data] = useState<Step1 | null>(null);
  const [s2Data, setS2Data] = useState<Step2 | null>(null);

  const form1 = useForm<Step1>({ resolver: zodResolver(step1Schema) });
  const form2 = useForm<Step2>({ resolver: zodResolver(step2Schema) });
  const form3 = useForm<Step3>({ resolver: zodResolver(step3Schema) });

  const handleStep1 = (values: Step1) => {
    setS1Data(values);
    setStep(1);
  };

  const handleStep2 = (values: Step2) => {
    setS2Data(values);
    setStep(2);
  };

  const handleStep3 = async (values: Step3) => {
    if (!s1Data || !s2Data) return;
    setSubmitting(true);

    const payload = {
      organization: s1Data.organization,
      bio: s1Data.bio,
      linkedinUrl: s1Data.linkedinUrl || undefined,
      expertiseCountries: s2Data.expertiseCountriesRaw
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean),
      expertiseSectors: s2Data.expertiseSectorsRaw
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean),
      yearsOfExperience: s2Data.yearsOfExperience,
      availableDays: selectedDays,
      availabilityNotes: values.availabilityNotes || "",
    };

    try {
      const token = localStorage.getItem("accessToken");
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/api/partners/setup`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(payload),
        },
      );
      const data = await res.json();
      if (data.success) {
        setStep(3);
      } else {
        toast.error(data.message || "Failed to save profile");
      }
    } catch {
      toast.error("Network error. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const toggleDay = (day: string) => {
    setSelectedDays((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day],
    );
  };

  if (step === 3) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-muted/20 p-6">
        <Card className="max-w-md w-full text-center">
          <CardContent className="pt-10 pb-8 space-y-4">
            <CheckCircle2 className="h-16 w-16 text-emerald-500 mx-auto" />
            <h2 className="text-2xl font-bold">Profile Complete!</h2>
            <p className="text-muted-foreground text-sm">
              Your partner profile is set up. You can now start accepting client
              sessions and grow your practice through AECCI Global Deal Room.
            </p>
            <Button
              className="w-full"
              onClick={() => navigate("/partner/dashboard")}
            >
              Go to Dashboard
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-muted/20 p-6">
      <div className="max-w-xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center space-y-1">
          <h1 className="text-2xl font-bold tracking-tight">
            Welcome to AECCI Global Deal Room
          </h1>
          <p className="text-muted-foreground text-sm">
            Complete your partner profile to start working with clients
          </p>
        </div>

        {/* Progress */}
        <div className="flex items-center gap-2">
          {STEPS.map((s, i) => (
            <div key={i} className="flex items-center flex-1 last:flex-none">
              <div
                className={`flex items-center justify-center h-8 w-8 rounded-full text-xs font-bold shrink-0 transition-colors
                  ${i < step ? "bg-emerald-500 text-white" : i === step ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}
              >
                {i < step ? <CheckCircle2 className="h-4 w-4" /> : i + 1}
              </div>
              <div className="ml-2 hidden sm:block">
                <p
                  className={`text-xs font-medium ${i === step ? "text-foreground" : "text-muted-foreground"}`}
                >
                  {s.title}
                </p>
              </div>
              {i < STEPS.length - 1 && (
                <div
                  className={`h-px flex-1 mx-3 ${i < step ? "bg-emerald-500" : "bg-border"}`}
                />
              )}
            </div>
          ))}
        </div>

        {/* Step 1 */}
        {step === 0 && (
          <Card>
            <CardHeader>
              <CardTitle>Personal Profile</CardTitle>
              <CardDescription>
                This information is visible to clients when they browse partners
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form1}>
                <form
                  onSubmit={form1.handleSubmit(handleStep1)}
                  className="space-y-4"
                >
                  <FormField
                    control={form1.control}
                    name="organization"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Organisation / Company Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="e.g. Global Trade Advisors Pvt Ltd"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form1.control}
                    name="professionalTitle"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Professional Title</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="e.g. Senior Trade Consultant"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form1.control}
                    name="bio"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Professional Biography</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Describe your background, expertise, and what value you offer to exporters..."
                            className="min-h-36 resize-y"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form1.control}
                    name="linkedinUrl"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          LinkedIn URL{" "}
                          <span className="text-muted-foreground font-normal">
                            (optional)
                          </span>
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="https://linkedin.com/in/yourprofile"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="flex justify-end pt-2">
                    <Button type="submit" className="gap-2">
                      Next <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </form>
              </Form>
            </CardContent>
          </Card>
        )}

        {/* Step 2 */}
        {step === 1 && (
          <Card>
            <CardHeader>
              <CardTitle>Expertise &amp; Focus Areas</CardTitle>
              <CardDescription>
                Clients filter partners by country and sector — be specific
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form2}>
                <form
                  onSubmit={form2.handleSubmit(handleStep2)}
                  className="space-y-4"
                >
                  <FormField
                    control={form2.control}
                    name="expertiseCountriesRaw"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Expertise Countries</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="e.g. UAE, Saudi Arabia, Germany (comma-separated)"
                            {...field}
                          />
                        </FormControl>
                        <p className="text-xs text-muted-foreground">
                          Separate multiple countries with commas
                        </p>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form2.control}
                    name="expertiseSectorsRaw"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Expertise Sectors</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="e.g. Pharmaceuticals, Textiles, IT Services"
                            {...field}
                          />
                        </FormControl>
                        <p className="text-xs text-muted-foreground">
                          Separate multiple sectors with commas
                        </p>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form2.control}
                    name="yearsOfExperience"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          Years of International Trade Experience
                        </FormLabel>
                        <FormControl>
                          <select
                            {...field}
                            className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          >
                            <option value="">Select years...</option>
                            <option value="1-3">1–3 years</option>
                            <option value="3-5">3–5 years</option>
                            <option value="5-10">5–10 years</option>
                            <option value="10+">10+ years</option>
                          </select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="flex justify-between pt-2">
                    <Button
                      type="button"
                      variant="outline"
                      className="gap-2"
                      onClick={() => setStep(0)}
                    >
                      <ChevronLeft className="h-4 w-4" /> Back
                    </Button>
                    <Button type="submit" className="gap-2">
                      Next <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </form>
              </Form>
            </CardContent>
          </Card>
        )}

        {/* Step 3 */}
        {step === 2 && (
          <Card>
            <CardHeader>
              <CardTitle>Availability</CardTitle>
              <CardDescription>
                Let clients know when you are typically available for sessions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form3}>
                <form
                  onSubmit={form3.handleSubmit(handleStep3)}
                  className="space-y-4"
                >
                  <div className="space-y-2">
                    <p className="text-sm font-medium">Available Days</p>
                    <div className="flex flex-wrap gap-2">
                      {DAYS.map((day) => (
                        <button
                          key={day}
                          type="button"
                          onClick={() => toggleDay(day)}
                          className="focus:outline-none"
                        >
                          <Badge
                            variant={
                              selectedDays.includes(day) ? "default" : "outline"
                            }
                            className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                          >
                            {day}
                          </Badge>
                        </button>
                      ))}
                    </div>
                    <p className="text-xs text-muted-foreground">
                      {selectedDays.length === 0
                        ? "No days selected"
                        : `${selectedDays.length} day(s) selected`}
                    </p>
                  </div>

                  <FormField
                    control={form3.control}
                    name="availabilityNotes"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          Additional Notes{" "}
                          <span className="text-muted-foreground font-normal">
                            (optional)
                          </span>
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="e.g. Available mornings IST, prefer 1-hour slots, public holidays excluded..."
                            className="min-h-24"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="flex justify-between pt-2">
                    <Button
                      type="button"
                      variant="outline"
                      className="gap-2"
                      onClick={() => setStep(1)}
                    >
                      <ChevronLeft className="h-4 w-4" /> Back
                    </Button>
                    <Button
                      type="submit"
                      disabled={submitting}
                      className="gap-2"
                    >
                      {submitting ? (
                        <Loader2 className="h-4 w-4 animate-spin" />
                      ) : (
                        <CheckCircle2 className="h-4 w-4" />
                      )}
                      Complete Setup
                    </Button>
                  </div>
                </form>
              </Form>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
