import { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { Main } from "@/components/layout/main";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MultiSelect } from "@/components/ui/multi-select";
import { Progress } from "@/components/ui/progress";
import {
  CheckCircle2, Loader2, Upload, User, Calendar as CalendarIcon,
  Briefcase, Save,
} from "lucide-react";
import { toast } from "sonner";
import { useGetMyPartnerProfileQuery, useSetupPartnerProfileMutation } from "@/store/api/adminApi";
import { useUploadFileMutation } from "@/store/api/authApi";
import { LANGUAGE_OPTIONS, COUNTRY_OPTIONS, SECTOR_OPTIONS } from "@/components/data/form-options";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { PhoneInput } from "@/components/ui/phone-input";
import { cn } from "@/lib/utils";

const TABS = [
  { key: "professional", label: "Professional Profile", icon: Briefcase },
  { key: "brief", label: "Partner Brief", icon: User },
  { key: "availability", label: "Availability", icon: CalendarIcon },
];

const DAYS_OF_WEEK = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const TIME_SLOTS = [
  { value: "morning", label: "Morning (9:00 AM – 12:00 PM)" },
  { value: "afternoon", label: "Afternoon (12:00 PM – 4:00 PM)" },
  { value: "evening", label: "Evening (4:00 PM – 8:00 PM)" },
];

function getCompletion(profile: any) {
  if (!profile) return { percent: 0, sections: { professional: 0, brief: 0, availability: 0 } };
  const u = profile.user || {};
  const pf = ['fullName', 'mobileNumber', 'country', 'professionalTitle', 'yearsOfExperience'];
  let pt = pf.length + 2, pFilled = 0;
  pf.forEach(f => { if (u[f]) pFilled++; });
  if (profile.expertiseCountries?.length) pFilled++;
  if (profile.expertiseSectors?.length) pFilled++;
  let bt = 3, bFilled = 0;
  if (u.profilePicture) bFilled++;
  if (u.languagesSpoken?.length) bFilled++;
  if (profile.bio && profile.bio.length >= 50) bFilled++;
  let aFilled = profile.availability?.days?.length ? 1 : (profile.availability?.slots?.length ? 1 : 0);
  const total = pt + bt + 1;
  return {
    percent: Math.round(((pFilled + bFilled + aFilled) / total) * 100),
    sections: {
      professional: Math.round((pFilled / pt) * 100),
      brief: Math.round((bFilled / bt) * 100),
      availability: aFilled * 100,
    }
  };
}

export default function PartnerProfilePage() {
  const { data: profileData, isLoading } = useGetMyPartnerProfileQuery();
  const [setupProfile, { isLoading: isSaving }] = useSetupPartnerProfileMutation();
  const [uploadFile] = useUploadFileMutation();
  const [activeTab, setActiveTab] = useState("professional");
  const [profilePicture, setProfilePicture] = useState("");
  const [uploadingPhoto, setUploadingPhoto] = useState(false);

  const profile = profileData?.data;
  const user = profile?.user || {};

  // Professional Profile form (interest data — pre-filled, some disabled)
  const profForm = useForm({
    values: {
      fullName: user.fullName || "", email: user.email || "", companyName: user.companyName || "",
      country: user.country || "", cityState: "",
      phoneWhatsapp: "", contactPerson: "", professionalTitle: user.professionalTitle || "",
      yearsOfExperience: user.yearsOfExperience || "", expertiseAreas: "",
      sectorsOfInterest: "", nationality: user.nationality || "",
      organization: profile?.organization || "", linkedinProfileUrl: user.linkedinProfileUrl || "",
      websiteUrl: user.websiteUrl || "",
      mobileNumber: user.mobileNumber ? (user.countryCode && !user.mobileNumber.startsWith('+') ? `${user.countryCode}${user.mobileNumber}` : user.mobileNumber) : "",
      countryCode: user.countryCode || "+91",
      expertiseCountries: profile?.expertiseCountries || [] as string[],
      expertiseSectors: profile?.expertiseSectors || [] as string[],
      motivation: profile?.motivation || "",
    }
  });

  // Partner Brief form
  const briefForm = useForm({
    values: {
      bio: profile?.bio || "",
      languages: user.languagesSpoken || [] as string[],
      consultationTopics: (profile as any)?.consultationTopics || "",
      serviceOverview: (profile as any)?.serviceOverview || "",
    }
  });

  // Availability form
  const availForm = useForm({
    values: {
      availableDays: profile?.availability?.days || [] as string[],
      preferredSlots: profile?.availability?.preferredSlots || [] as string[],
    }
  });

  useEffect(() => {
    if (!profile) return;
    setProfilePicture(user.profilePicture || "");
  }, [profileData]);

  const completion = getCompletion(profileData?.data);

  const handlePhotoChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]; if (!file) return;
    if (file.size > 5 * 1024 * 1024) { toast.error("Photo must be under 5 MB"); return; }
    setUploadingPhoto(true);
    try { const r = await uploadFile({ file, folder: "partner-avatars" }).unwrap(); setProfilePicture(r.data.url); toast.success("Photo uploaded"); }
    catch { toast.error("Upload failed"); } finally { setUploadingPhoto(false); }
  };

  const saveProfessional = async () => {
    const d = profForm.getValues();
    if (!d.fullName.trim()) { toast.error("Full name is required"); return; }
    if (!d.country) { toast.error("Country is required"); return; }
    if (d.expertiseCountries.length === 0) { toast.error("Select at least one expertise country"); return; }
    if (d.expertiseSectors.length === 0) { toast.error("Select at least one expertise sector"); return; }
    // Parse phone number
    let mobile = d.mobileNumber;
    let code = d.countryCode;
    if (mobile && mobile.startsWith("+")) {
      try {
        const { parsePhoneNumber } = await import("react-phone-number-input");
        const parsed = parsePhoneNumber(mobile);
        if (parsed) {
          code = `+${parsed.countryCallingCode}`;
          mobile = parsed.nationalNumber;
        }
      } catch { /* keep as-is */ }
    }
    try {
      await setupProfile({
        fullName: d.fullName.trim(), mobileNumber: mobile, countryCode: code,
        country: d.country, nationality: d.nationality.trim(), organization: d.organization.trim(),
        professionalTitle: d.professionalTitle.trim(), yearsOfExperience: d.yearsOfExperience,
        linkedinProfileUrl: d.linkedinProfileUrl.trim(), websiteUrl: d.websiteUrl.trim(),
        expertiseCountries: d.expertiseCountries, expertiseSectors: d.expertiseSectors,
        motivation: d.motivation.trim(),
      }).unwrap();
      toast.success("Professional profile saved");
    } catch { toast.error("Failed to save"); }
  };

  const saveBrief = async () => {
    const d = briefForm.getValues();
    if (!d.bio.trim() || d.bio.trim().length < 50) { toast.error("Bio must be at least 50 characters"); return; }
    if (d.languages.length === 0) { toast.error("Select at least one language"); return; }
    try {
      await setupProfile({
        bio: d.bio.trim(), profilePicture, languagesSpoken: d.languages,
      }).unwrap();
      toast.success("Partner brief saved");
    } catch { toast.error("Failed to save"); }
  };

  const saveAvailability = async () => {
    const d = availForm.getValues();
    if (d.availableDays.length === 0) { toast.error("Select at least one available day"); return; }
    if (d.preferredSlots.length === 0) { toast.error("Select at least one preferred time slot"); return; }
    try {
      await setupProfile({
        availability: { days: d.availableDays, preferredSlots: d.preferredSlots },
      }).unwrap();
      toast.success("Availability saved");
    } catch { toast.error("Failed to save"); }
  };

  if (isLoading) return <Main fluid className="flex items-center justify-center min-h-[60vh]"><Loader2 className="h-8 w-8 animate-spin text-primary" /></Main>;

  return (
    <Main fluid className="p-4 sm:p-6 space-y-6">
      {/* Header + Completion */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight md:text-3xl">My Profile</h1>
          <p className="text-muted-foreground text-sm">Complete all sections to appear in the marketplace.</p>
        </div>
        <div className="flex items-center gap-3 bg-white border rounded-xl px-4 py-2.5 shadow-sm">
          <div className="relative w-10 h-10 shrink-0">
            <svg className="w-10 h-10 -rotate-90" viewBox="0 0 36 36">
              <path d="M18 2.0845a 15.9155 15.9155 0 0 1 0 31.831a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#e2e8f0" strokeWidth="3.5" />
              <path d="M18 2.0845a 15.9155 15.9155 0 0 1 0 31.831a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke={completion.percent === 100 ? "#10b981" : "#f59e0b"} strokeWidth="3.5" strokeDasharray={`${completion.percent}, 100`} strokeLinecap="round" />
            </svg>
            <span className="absolute inset-0 flex items-center justify-center text-[10px] font-bold">{completion.percent}%</span>
          </div>
          <div>
            <p className="text-xs font-bold">{completion.percent === 100 ? "Complete" : "Profile Completion"}</p>
            <Progress value={completion.percent} className="h-1.5 mt-1 w-24" />
          </div>
        </div>
      </div>

      {/* Top Tabs */}
      <div className="border-b">
        <nav className="flex gap-1 -mb-px overflow-x-auto">
          {TABS.map((t) => (
            <button key={t.key} onClick={() => setActiveTab(t.key)}
              className={cn("flex items-center gap-2 px-4 py-2.5 text-sm font-medium border-b-2 transition-colors whitespace-nowrap",
                activeTab === t.key ? "border-primary text-primary" : "border-transparent text-muted-foreground hover:text-foreground hover:border-muted-foreground/30"
              )}>
              <t.icon className="w-4 h-4" /> {t.label}
              {completion.sections[t.key as keyof typeof completion.sections] === 100 && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />}
            </button>
          ))}
        </nav>
      </div>

      {/* ── Professional Profile Tab ── */}
      {activeTab === "professional" && (
        <Card className="mt-4">
          <CardHeader>
            <CardTitle>Professional Profile</CardTitle>
            <CardDescription>Manage your personal and professional information. Only email cannot be changed.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <Label>Full Name <span className="text-red-500">*</span></Label>
                <Input {...profForm.register("fullName")} placeholder="Your full name" />
              </div>
              <div className="space-y-1.5">
                <Label>Email <span className="text-xs text-muted-foreground">(cannot be changed)</span></Label>
                <Input value={profForm.watch("email")} disabled className="bg-muted/50" />
              </div>
              <div className="space-y-1.5">
                <Label>Company / Organization</Label>
                <Input {...profForm.register("companyName")} placeholder="Company name" />
              </div>
              <div className="space-y-1.5">
                <Label>Country <span className="text-red-500">*</span></Label>
                <Controller name="country" control={profForm.control} render={({ field }) => (
                  <Select value={field.value} onValueChange={field.onChange}><SelectTrigger><SelectValue placeholder="Select country" /></SelectTrigger><SelectContent>{COUNTRY_OPTIONS.map((c) => (<SelectItem key={c.value} value={c.value}>{c.label}</SelectItem>))}</SelectContent></Select>
                )} />
              </div>
              <div className="space-y-1.5">
                <Label>Professional Title</Label>
                <Input {...profForm.register("professionalTitle")} placeholder="e.g. Trade Consultant" />
              </div>
              <div className="space-y-1.5">
                <Label>Years of Experience</Label>
                <Controller name="yearsOfExperience" control={profForm.control} render={({ field }) => (
                  <Select value={field.value} onValueChange={field.onChange}><SelectTrigger><SelectValue placeholder="Select" /></SelectTrigger><SelectContent><SelectItem value="0-2">0–2 Years</SelectItem><SelectItem value="3-5">3–5 Years</SelectItem><SelectItem value="6-10">6–10 Years</SelectItem><SelectItem value="10-15">10–15 Years</SelectItem><SelectItem value="15+">15+ Years</SelectItem></SelectContent></Select>
                )} />
              </div>
            </div>

            {/* Additional fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <Label>Organization / Company <span className="text-red-500">*</span></Label>
                <Input {...profForm.register("organization")} placeholder="Your organization name" />
              </div>
              <div className="space-y-1.5">
                <Label>Nationality</Label>
                <Input {...profForm.register("nationality")} placeholder="e.g. Indian, American" />
              </div>
              <div className="space-y-1.5">
                <Label>Mobile Number <span className="text-red-500">*</span></Label>
                <Controller name="mobileNumber" control={profForm.control} render={({ field }) => (
                  <PhoneInput placeholder="Enter mobile number" defaultCountry="IN" className="h-[42px]" {...field} />
                )} />
              </div>
              <div className="space-y-1.5">
                <Label>LinkedIn Profile URL</Label>
                <Input {...profForm.register("linkedinProfileUrl")} placeholder="https://linkedin.com/in/..." />
              </div>
              <div className="space-y-1.5">
                <Label>Website URL</Label>
                <Input {...profForm.register("websiteUrl")} placeholder="https://yourcompany.com" />
              </div>
            </div>

            <div className="space-y-1.5">
              <Label>Countries / Markets Covered <span className="text-red-500">*</span></Label>
              <Controller name="expertiseCountries" control={profForm.control} render={({ field }) => (
                <MultiSelect options={COUNTRY_OPTIONS} selected={field.value} onChange={field.onChange} placeholder="Select countries you cover" />
              )} />
              <p className="text-xs text-muted-foreground">Select all countries/markets where you provide expertise</p>
            </div>

            <div className="space-y-1.5">
              <Label>Expertise / Sectors <span className="text-red-500">*</span></Label>
              <Controller name="expertiseSectors" control={profForm.control} render={({ field }) => (
                <MultiSelect options={SECTOR_OPTIONS} selected={field.value} onChange={field.onChange} placeholder="Select your expertise sectors" />
              )} />
            </div>

            <div className="space-y-1.5">
              <Label>Motivation & Value Proposition</Label>
              <Textarea {...profForm.register("motivation")} placeholder="How can you support businesses on this platform..." className="min-h-20 resize-y" />
            </div>

            <div className="flex justify-end pt-3">
              <Button onClick={saveProfessional} disabled={isSaving} className="gap-2 bg-emerald-600 hover:bg-emerald-700 text-white"><Save className="w-4 h-4" /> Save Professional Profile</Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* ── Partner Brief Tab ── */}
      {activeTab === "brief" && (
        <Card className="mt-4">
          <CardHeader>
            <CardTitle>Partner Brief (Public Marketplace Profile)</CardTitle>
            <CardDescription>This is publicly visible to businesses looking for collaboration partners. Make it comprehensive.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-5">
            {/* Logo / Photo */}
            <div className="space-y-2">
              <Label>Company Logo / Profile Photo <span className="text-red-500">*</span></Label>
              <p className="text-xs text-muted-foreground">This will be displayed on your marketplace card</p>
              <div className="flex items-center gap-4">
                {profilePicture ? (
                  <img src={profilePicture} alt="Profile" className="w-24 h-24 rounded-xl object-cover border" />
                ) : (
                  <div className="w-24 h-24 rounded-xl bg-muted flex items-center justify-center border"><User className="w-10 h-10 text-muted-foreground" /></div>
                )}
                <div>
                  <Label htmlFor="photo-up-brief" className="flex items-center gap-2 cursor-pointer bg-muted hover:bg-muted/80 text-sm px-4 py-2 rounded-md border">
                    {uploadingPhoto ? <Loader2 className="w-4 h-4 animate-spin" /> : <Upload className="w-4 h-4" />}
                    {uploadingPhoto ? "Uploading…" : "Upload Logo / Photo"}
                  </Label>
                  <input id="photo-up-brief" type="file" accept="image/jpeg,image/png,image/webp" className="hidden" onChange={handlePhotoChange} />
                  <p className="text-xs text-muted-foreground mt-1">JPG, PNG or WebP · max 5 MB</p>
                </div>
              </div>
            </div>

            {/* Languages */}
            <div className="space-y-1.5">
              <Label>Languages Spoken <span className="text-red-500">*</span></Label>
              <Controller name="languages" control={briefForm.control} render={({ field }) => (
                <MultiSelect options={LANGUAGE_OPTIONS} selected={field.value} onChange={field.onChange} placeholder="Select languages you can conduct sessions in" />
              )} />
            </div>

            {/* Professional Overview / Bio */}
            <div className="space-y-1.5">
              <Label>Professional Overview / About <span className="text-red-500">*</span></Label>
              <p className="text-xs text-muted-foreground">Describe your expertise, experience, and what value you bring to businesses. This is your main marketplace description.</p>
              <Textarea {...briefForm.register("bio")} placeholder="I am a trade consultant with 15+ years experience in international market entry, regulatory compliance, and buyer-seller matchmaking across MENA, Europe, and South Asia..." className="min-h-40 resize-y" />
              <p className={`text-xs ${(briefForm.watch("bio")?.length || 0) < 50 ? "text-muted-foreground" : "text-emerald-600"}`}>
                {briefForm.watch("bio")?.length || 0}/1500 characters {(briefForm.watch("bio")?.length || 0) < 50 ? `(${50 - (briefForm.watch("bio")?.length || 0)} more needed)` : "✓"}
              </p>
            </div>

            {/* Consultation Topics */}
            <div className="space-y-1.5">
              <Label>Consultation Topics</Label>
              <p className="text-xs text-muted-foreground">What topics can businesses discuss with you? (e.g. Market Entry, Trade Regulations, Compliance, Buyer Matching)</p>
              <Textarea {...briefForm.register("consultationTopics")} placeholder="Market Entry Strategy, Import/Export Regulations, Distribution Channel Setup, Legal Compliance, Buyer-Seller Matchmaking..." className="min-h-20 resize-y" />
            </div>

            {/* Service Overview */}
            <div className="space-y-1.5">
              <Label>Service Overview</Label>
              <p className="text-xs text-muted-foreground">Brief overview of your services for the marketplace card</p>
              <Input {...briefForm.register("serviceOverview")} placeholder="e.g. Trade Advisory | Market Intelligence | International Compliance" />
            </div>

            <div className="flex justify-end pt-3">
              <Button onClick={saveBrief} disabled={isSaving} className="gap-2 bg-emerald-600 hover:bg-emerald-700 text-white"><Save className="w-4 h-4" /> Save Partner Brief</Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* ── Availability Tab ── */}
      {activeTab === "availability" && (
        <Card className="mt-4">
          <CardHeader>
            <CardTitle>Availability</CardTitle>
            <CardDescription>Select which days and general time slots you are available. The exact meeting time will be decided by admin.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Available Days */}
            <div className="space-y-3">
              <Label className="text-sm font-semibold">Available Days <span className="text-red-500">*</span></Label>
              <p className="text-xs text-muted-foreground">Select all days you are generally available for meetings</p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {DAYS_OF_WEEK.map((day) => {
                  const selected = availForm.watch("availableDays").includes(day);
                  return (
                    <button key={day} type="button"
                      onClick={() => {
                        const current = availForm.getValues("availableDays");
                        if (selected) { availForm.setValue("availableDays", current.filter((d: string) => d !== day)); }
                        else { availForm.setValue("availableDays", [...current, day]); }
                      }}
                      className={cn(
                        "px-4 py-2.5 rounded-lg border text-sm font-medium transition-all",
                        selected ? "bg-primary text-white border-primary shadow-sm" : "bg-white text-slate-600 border-slate-200 hover:border-primary/50 hover:bg-primary/5"
                      )}>
                      {day}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Preferred Time Slots */}
            <div className="space-y-3">
              <Label className="text-sm font-semibold">Preferred Time Slots <span className="text-red-500">*</span></Label>
              <p className="text-xs text-muted-foreground">Select your preferred time windows (IST). Admin will schedule the exact time.</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {TIME_SLOTS.map((slot) => {
                  const selected = availForm.watch("preferredSlots").includes(slot.value);
                  return (
                    <button key={slot.value} type="button"
                      onClick={() => {
                        const current = availForm.getValues("preferredSlots");
                        if (selected) { availForm.setValue("preferredSlots", current.filter((s: string) => s !== slot.value)); }
                        else { availForm.setValue("preferredSlots", [...current, slot.value]); }
                      }}
                      className={cn(
                        "px-4 py-3 rounded-lg border text-sm font-medium transition-all text-left",
                        selected ? "bg-primary text-white border-primary shadow-sm" : "bg-white text-slate-600 border-slate-200 hover:border-primary/50 hover:bg-primary/5"
                      )}>
                      {slot.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Summary */}
            {availForm.watch("availableDays").length > 0 && (
              <div className="bg-muted/30 border rounded-lg p-4 text-sm">
                <p className="font-medium text-slate-700 mb-1">Your Availability Summary:</p>
                <p className="text-slate-600"><span className="font-semibold">Days:</span> {availForm.watch("availableDays").join(", ")}</p>
                {availForm.watch("preferredSlots").length > 0 && (
                  <p className="text-slate-600"><span className="font-semibold">Slots:</span> {availForm.watch("preferredSlots").map((s: string) => TIME_SLOTS.find(t => t.value === s)?.label).join(", ")}</p>
                )}
              </div>
            )}

            <div className="flex justify-end pt-3">
              <Button onClick={saveAvailability} disabled={isSaving} className="gap-2 bg-emerald-600 hover:bg-emerald-700 text-white"><Save className="w-4 h-4" /> Save Availability</Button>
            </div>
          </CardContent>
        </Card>
      )}
    </Main>
  );
}
