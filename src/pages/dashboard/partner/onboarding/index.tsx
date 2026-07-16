import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { MultiSelect } from "@/components/ui/multi-select";
import { CheckCircle2, ChevronRight, ChevronLeft, Loader2, Upload, User, Calendar as CalendarIcon, FileText, X } from "lucide-react";
import { toast } from "sonner";
import { useGetMyPartnerProfileQuery, useSetupPartnerProfileMutation } from "@/store/api/adminApi";
import { useUploadFileMutation } from "@/store/api/authApi";
import { format } from "date-fns";
import { LANGUAGE_OPTIONS } from "@/components/data/form-options";



const STEPS = [
  { label: "Partner Brief", icon: User },
  { label: "Availability", icon: CalendarIcon },
  { label: "Agreement", icon: FileText },
];

interface SlotTime {
  start: string;
  end: string;
}

export default function PartnerOnboardingPage() {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [submitting, setSubmitting] = useState(false);

  // Step 1 state
  const [profilePicture, setProfilePicture] = useState<string>("");
  const [uploadingPhoto, setUploadingPhoto] = useState(false);
  const [languages, setLanguages] = useState<string[]>([]);
  const [bio, setBio] = useState("");

  // Step 2 state
  const [selectedDates, setSelectedDates] = useState<Date[]>([]);
  const [slotTimes, setSlotTimes] = useState<Record<string, SlotTime>>({});

  // Step 3 state
  const [agreed, setAgreed] = useState(false);

  const { data: profileData, isLoading: isProfileLoading } = useGetMyPartnerProfileQuery();
  const [setupProfile] = useSetupPartnerProfileMutation();
  const [uploadFile] = useUploadFileMutation();

  const [prevProfileData, setPrevProfileData] = useState(profileData);
  if (profileData !== prevProfileData) {
    setPrevProfileData(profileData);
    if (profileData?.data) {
      const p = profileData.data;
      const u = p.user;
      let step1Complete = true;

      if (u?.profilePicture) {
        setProfilePicture(u.profilePicture);
      } else {
        step1Complete = false;
      }

      if (u?.languagesSpoken?.length) {
        setLanguages(u.languagesSpoken as string[]);
      } else {
        step1Complete = false;
      }

      if (p.bio) {
        setBio(p.bio);
        if (p.bio.length < 50) step1Complete = false;
      } else {
        step1Complete = false;
      }

      if (step1Complete && step === 0) {
        setStep(1);
      }
    }
  }
  if (isProfileLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-muted/20">
        <div className="flex flex-col items-center gap-3">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
          <p className="text-sm text-muted-foreground">Loading your profile…</p>
        </div>
      </div>
    );
  }

  const handlePhotoChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > 5 * 1024 * 1024) {
      toast.error("Photo must be under 5 MB");
      return;
    }
    setUploadingPhoto(true);
    try {
      const result = await uploadFile({ file, folder: "partner-avatars" }).unwrap();
      setProfilePicture(result.data.url);
      toast.success("Photo uploaded");
    } catch {
      toast.error("Upload failed");
    } finally {
      setUploadingPhoto(false);
    }
  };

  const handleDateSelect = (dates: Date[] | undefined) => {
    const next = dates || [];
    setSelectedDates(next);
    // Init slot times for newly added dates
    const nextTimes = { ...slotTimes };
    next.forEach((d) => {
      const key = format(d, "yyyy-MM-dd");
      if (!nextTimes[key]) nextTimes[key] = { start: "09:00", end: "17:00" };
    });
    // Remove times for deselected dates
    Object.keys(nextTimes).forEach((k) => {
      if (!next.find((d) => format(d, "yyyy-MM-dd") === k)) delete nextTimes[k];
    });
    setSlotTimes(nextTimes);
  };

  const handleTimeChange = (dateKey: string, type: "start" | "end", value: string) => {
    setSlotTimes((prev) => ({
      ...prev,
      [dateKey]: { ...prev[dateKey], [type]: value },
    }));
  };

  const removeDate = (dateKey: string) => {
    setSelectedDates((prev) => prev.filter((d) => format(d, "yyyy-MM-dd") !== dateKey));
    setSlotTimes((prev) => {
      const next = { ...prev };
      delete next[dateKey];
      return next;
    });
  };

  const handleNext = () => {
    if (step === 0) {
      if (!bio.trim() || bio.trim().length < 50) {
        toast.error("Bio must be at least 50 characters");
        return;
      }
      if (languages.length === 0) {
        toast.error("Select at least one language");
        return;
      }
    }
    if (step === 1) {
      for (const dateKey of Object.keys(slotTimes)) {
        const s = slotTimes[dateKey];
        if (s.start >= s.end) {
          toast.error(`Invalid time range for ${dateKey} — start must be before end`);
          return;
        }
      }
    }
    setStep((p) => p + 1);
  };

  const handleSubmit = async () => {
    if (!agreed) {
      toast.error("You must agree to the terms before proceeding");
      return;
    }
    setSubmitting(true);
    try {
      const slots = Object.entries(slotTimes).map(([date, times]) => ({
        date,
        start: times.start,
        end: times.end,
      }));
      await setupProfile({
        bio: bio.trim(),
        profilePicture,
        languagesSpoken: languages,
        signedAgreement: true,
        availability: { slots },
      }).unwrap();
      setStep(3);
    } catch {
      toast.error("Failed to save profile. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  if (step === 3) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-muted/20 p-6">
        <Card className="max-w-md w-full text-center">
          <CardContent className="pt-10 pb-8 space-y-4">
            <CheckCircle2 className="h-16 w-16 text-emerald-500 mx-auto" />
            <h2 className="text-2xl font-bold">You're All Set!</h2>
            <p className="text-muted-foreground text-sm">
              Your Partner Brief is live and your availability is published. Users can now discover and book sessions with you.
            </p>
            <Button className="w-full" onClick={() => navigate("/partner/dashboard")}>
              Go to Dashboard
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-muted/20 p-4 sm:p-6 md:p-10 lg:p-12">
      <div className="w-full max-w-[1300px] mx-auto space-y-6 md:space-y-8">
        {/* Header */}
        <div className="text-center space-y-1">
          <h1 className="text-2xl font-bold tracking-tight">Complete Your Profile Setup</h1>
          <p className="text-muted-foreground text-sm">
            Please build your Partner Brief and availability settings to host Deal Room sessions.
          </p>
        </div>

        {/* Step indicators */}
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
                <p className={`text-xs font-medium ${i === step ? "text-foreground" : "text-muted-foreground"}`}>
                  {s.label}
                </p>
              </div>
              {i < STEPS.length - 1 && (
                <div className={`h-px flex-1 mx-3 ${i < step ? "bg-emerald-500" : "bg-border"}`} />
              )}
            </div>
          ))}
        </div>

        {/* ── Step 1: Partner Brief ── */}
        {step === 0 && (
          <Card>
            <CardHeader>
              <CardTitle>1. Partner Brief (Public Profile)</CardTitle>
              <CardDescription>
                This information is shown on your marketplace card and to clients booking sessions.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Photo */}
              <div className="space-y-2">
                <Label>Company Logo / Profile Photo</Label>
                <div className="flex items-center gap-4">
                  {profilePicture ? (
                    <img
                      src={profilePicture}
                      alt="Profile"
                      className="w-20 h-20 rounded-full object-cover border border-border"
                    />
                  ) : (
                    <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center border border-border">
                      <User className="w-8 h-8 text-muted-foreground" />
                    </div>
                  )}
                  <div>
                    <Label
                      htmlFor="photo-upload"
                      className="flex items-center gap-2 cursor-pointer bg-muted hover:bg-muted/80 text-sm px-4 py-2 rounded-md border transition-colors"
                    >
                      {uploadingPhoto ? (
                        <Loader2 className="w-4 h-4 animate-spin" />
                      ) : (
                        <Upload className="w-4 h-4" />
                      )}
                      {uploadingPhoto ? "Uploading…" : "Select Photo"}
                    </Label>
                    <input
                      id="photo-upload"
                      type="file"
                      accept="image/jpeg,image/png,image/webp"
                      className="hidden"
                      onChange={handlePhotoChange}
                    />
                    <p className="text-xs text-muted-foreground mt-1">JPG, PNG or WebP · max 5 MB</p>
                  </div>
                </div>
              </div>

              {/* Languages */}
              <div className="space-y-2">
                <Label>Languages Spoken</Label>
                <MultiSelect
                  options={LANGUAGE_OPTIONS}
                  selected={languages}
                  onChange={setLanguages}
                  placeholder="e.g. English, Hindi, Arabic"
                />
                <p className="text-xs text-muted-foreground">Select all languages you can conduct sessions in</p>
              </div>

              {/* Bio */}
              <div className="space-y-2">
                <Label>Professional Biography</Label>
                <Textarea
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                  placeholder="Briefly describe your trade experience, focus markets, and the legal/compliance advisory services you offer..."
                  className="min-h-36 resize-y"
                />
                <p className={`text-xs ${bio.length < 50 ? "text-muted-foreground" : "text-emerald-600"}`}>
                  {bio.length} / 1500 characters {bio.length < 50 ? `(${50 - bio.length} more needed)` : "✓"}
                </p>
              </div>

              <div className="flex justify-end pt-2">
                <Button onClick={handleNext} className="gap-2">
                  Next <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* ── Step 2: Availability ── */}
        {step === 1 && (
          <Card>
            <CardHeader>
              <CardTitle>2. Weekly Availability Schedule</CardTitle>
              <CardDescription>
                Select the days you are available to host sessions and define your active hours. 
                <span className="font-semibold text-foreground ml-1">Please select timings according to IST (Indian Standard Time).</span>
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-col lg:flex-row gap-6">
                {/* Calendar */}
                <div className="flex flex-col items-center">
                  <Calendar
                    mode="multiple"
                    selected={selectedDates}
                    onSelect={handleDateSelect}
                    className="rounded-md border bg-card"
                    disabled={(date) => date < new Date(new Date().setHours(0, 0, 0, 0))}
                  />
                  <p className="text-xs text-muted-foreground mt-2 text-center">
                    Click dates to toggle availability. Past dates are disabled.
                  </p>
                </div>

                {/* Slot list */}
                <div className="flex-1 space-y-3 min-w-0">
                  {selectedDates.length === 0 ? (
                    <div className="flex flex-col items-center justify-center h-full min-h-[200px] text-center text-muted-foreground border border-dashed rounded-lg p-6">
                      <CalendarIcon className="w-8 h-8 mb-2 opacity-40" />
                      <p className="text-sm">No dates selected yet.</p>
                      <p className="text-xs mt-1">Click dates on the calendar to set your availability.</p>
                    </div>
                  ) : (
                    <div className="max-h-[350px] overflow-y-auto space-y-3 pr-2 scrollbar-thin scrollbar-thumb-muted-foreground/20 scrollbar-track-transparent">
                      {[...selectedDates]
                        .sort((a, b) => b.getTime() - a.getTime())
                        .map((date) => {
                          const key = format(date, "yyyy-MM-dd");
                          const slot = slotTimes[key] || { start: "09:00", end: "17:00" };
                          return (
                            <div
                              key={key}
                              className="flex items-center gap-3 p-3 border rounded-lg bg-muted/20 hover:bg-muted/30 transition-colors"
                            >
                              <div className="min-w-[110px]">
                                <p className="text-sm font-medium">{format(date, "EEE, MMM d")}</p>
                                <p className="text-xs text-muted-foreground">{format(date, "yyyy")}</p>
                              </div>
                              <div className="flex items-center gap-2 flex-1 text-sm flex-wrap">
                                <span className="text-muted-foreground text-xs">From</span>
                                <Input
                                  type="time"
                                  value={slot.start}
                                  onChange={(e) => handleTimeChange(key, "start", e.target.value)}
                                  className="w-28 h-8 text-sm text-center"
                                />
                                <span className="text-muted-foreground text-xs">to</span>
                                <div className="flex items-center gap-1.5">
                                  <Input
                                    type="time"
                                    value={slot.end}
                                    onChange={(e) => handleTimeChange(key, "end", e.target.value)}
                                    className="w-28 h-8 text-sm text-center"
                                  />
                                  <span className="text-muted-foreground text-xs font-semibold bg-muted px-1.5 py-0.5 rounded border">IST</span>
                                </div>
                              </div>
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-7 w-7 text-muted-foreground hover:text-destructive"
                                onClick={() => removeDate(key)}
                              >
                                <X className="w-4 h-4" />
                              </Button>
                            </div>
                          );
                        })}
                    </div>
                  )}
                  {selectedDates.length > 0 && (
                    <p className="text-xs text-muted-foreground">
                      {selectedDates.length} date{selectedDates.length !== 1 ? "s" : ""} selected
                    </p>
                  )}
                </div>
              </div>

              <div className="flex justify-between pt-2">
                <Button variant="outline" onClick={() => setStep(0)} className="gap-2">
                  <ChevronLeft className="h-4 w-4" /> Back
                </Button>
                <Button onClick={handleNext} className="gap-2">
                  Next <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* ── Step 3: Agreement ── */}
        {step === 2 && (
          <Card>
            <CardHeader>
              <CardTitle>3. Digital Agreement</CardTitle>
              <CardDescription>AECCI Partner Terms &amp; Code of Conduct</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-muted/30 border rounded-lg p-5 space-y-3 text-sm text-muted-foreground leading-relaxed">
                <p className="text-foreground font-medium">By signing this digital agreement, you commit to:</p>
                <ul className="space-y-2 list-none">
                  {[
                    "Maintaining absolute confidentiality of all member information, trade documents, and business briefs shared.",
                    "Providing verified, accurate trade compliance guidance, import/export rules, and localized market insights.",
                    "Conducting live video sessions on-time with suitable networking environments (high bandwidth).",
                    "Avoiding direct communication or business routing off-platform with clients met via the platform.",
                  ].map((item, i) => (
                    <li key={i} className="flex gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-start gap-3 p-4 border rounded-lg">
                <Checkbox
                  id="agree"
                  checked={agreed}
                  onCheckedChange={(v) => setAgreed(v === true)}
                  className="mt-0.5"
                />
                <Label htmlFor="agree" className="cursor-pointer leading-relaxed text-sm">
                  I have read and agree to the AECCI Partner Terms &amp; Code of Conduct. I understand that violations may result in suspension of my partner account.
                </Label>
              </div>

              <div className="flex justify-between pt-2">
                <Button variant="outline" onClick={() => setStep(1)} className="gap-2">
                  <ChevronLeft className="h-4 w-4" /> Back
                </Button>
                <Button
                  onClick={handleSubmit}
                  disabled={!agreed || submitting}
                  className="gap-2 bg-emerald-600 hover:bg-emerald-700 text-white"
                >
                  {submitting ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <CheckCircle2 className="h-4 w-4" />
                  )}
                  Complete Setup &amp; Activate Dashboard
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
