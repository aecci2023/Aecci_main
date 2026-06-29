import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Main } from "@/components/layout/main";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Separator } from "@/components/ui/separator";
import { MultiSelect } from "@/components/ui/multi-select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { toast } from "sonner";
import { useGetMyPartnerProfileQuery, useSetupPartnerProfileMutation } from "@/store/api/adminApi";
import { useUploadFileMutation } from "@/store/api/authApi";
import { COUNTRIES } from "@/lib/countries";
import {
  Save,
  Camera,
  Loader2,
  User,
  Briefcase,
  Globe,
  Link as LinkIcon,
  Star,
  CheckCircle2,
  Clock,
} from "lucide-react";

const LANGUAGE_OPTIONS = [
  "Afrikaans","Albanian","Amharic","Arabic","Armenian","Azerbaijani","Basque",
  "Belarusian","Bengali","Bosnian","Bulgarian","Burmese","Catalan","Cebuano",
  "Chinese (Cantonese)","Chinese (Mandarin)","Croatian","Czech","Danish","Dutch",
  "English","Esperanto","Estonian","Finnish","French","Galician","Georgian",
  "German","Greek","Gujarati","Haitian Creole","Hausa","Hebrew","Hindi",
  "Hungarian","Icelandic","Igbo","Indonesian","Irish","Italian","Japanese",
  "Javanese","Kannada","Kazakh","Khmer","Korean","Kurdish","Kyrgyz","Lao",
  "Latin","Latvian","Lithuanian","Luxembourgish","Macedonian","Malagasy","Malay",
  "Malayalam","Maltese","Maori","Marathi","Mongolian","Nepali","Norwegian","Odia",
  "Pashto","Persian (Farsi)","Polish","Portuguese","Punjabi","Romanian","Russian",
  "Samoan","Serbian","Sinhalese","Slovak","Slovenian","Somali","Spanish","Swahili",
  "Swedish","Tagalog","Tajik","Tamil","Tatar","Telugu","Thai","Tibetan","Turkish",
  "Turkmen","Ukrainian","Urdu","Uzbek","Vietnamese","Welsh","Xhosa","Yiddish",
  "Yoruba","Zulu",
].map((l) => ({ label: l, value: l }));

const SECTOR_OPTIONS = [
  "Legal Services","Trade Advisory","Export Consulting","Market Entry",
  "Pharmaceuticals","Agriculture & Food","Textiles & Apparel","Technology & IT",
  "Manufacturing","Finance & Banking","Real Estate","Energy & Mining",
  "Logistics & Supply Chain","FMCG","Automotive","Arbitration","Other",
].map((s) => ({ label: s, value: s }));

const schema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  mobile: z.string().optional(),
  country: z.string().optional(),
  nationality: z.string().optional(),
  professionalTitle: z.string().optional(),
  yearsOfExperience: z.string().optional(),
  organization: z.string().optional(),
  languagesSpoken: z.array(z.string()).optional(),
  bio: z.string().max(1000).optional(),
  motivation: z.string().max(2000).optional(),
  expertiseCountries: z.array(z.string()).optional(),
  expertiseSectors: z.array(z.string()).optional(),
  linkedinProfileUrl: z.string().url().optional().or(z.literal("")),
  websiteUrl: z.string().url().optional().or(z.literal("")),
  references: z.string().optional(),
});

type FormValues = z.infer<typeof schema>;

const COUNTRY_OPTIONS = COUNTRIES.map((c) => ({
  label: c.name,
  value: c.name,
}));

function getInitials(name: string) {
  return name.split(" ").filter(Boolean).slice(0, 2).map((n) => n[0].toUpperCase()).join("");
}

const tierColor: Record<string, string> = {
  Standard: "bg-blue-500/10 text-blue-600 border-blue-500/20",
  Premium: "bg-amber-500/10 text-amber-600 border-amber-500/20",
  Specialist: "bg-purple-500/10 text-purple-600 border-purple-500/20",
};

export default function PartnerProfilePage() {
  const [uploadingPhoto, setUploadingPhoto] = useState(false);
  const [profilePicture, setProfilePicture] = useState("");

  const { data: profileData, isLoading } = useGetMyPartnerProfileQuery();
  const [setupProfile, { isLoading: isSaving }] = useSetupPartnerProfileMutation();
  const [uploadFile] = useUploadFileMutation();

  const form = useForm<FormValues>({ resolver: zodResolver(schema) });

  useEffect(() => {
    const userStr = localStorage.getItem("user");
    const localUser = userStr ? JSON.parse(userStr) : {};

    if (profileData?.data) {
      const p = profileData.data;
      const u = p.user || localUser;
      if (u.profilePicture) setProfilePicture(u.profilePicture);
      form.reset({
        fullName: u.fullName || "",
        mobile: u.mobile || "",
        country: u.country || "",
        nationality: u.nationality || "",
        professionalTitle: u.professionalTitle || "",
        yearsOfExperience: u.yearsOfExperience || "",
        organization: p.organization || "",
        languagesSpoken: (u.languagesSpoken as string[]) || localUser.languagesSpoken || [],
        bio: p.bio || "",
        motivation: p.motivation || "",
        expertiseCountries: (p.expertiseCountries as string[]) || [],
        expertiseSectors: (p.expertiseSectors as string[]) || [],
        linkedinProfileUrl: p.linkedinProfileUrl || "",
        websiteUrl: p.websiteUrl || "",
        references: p.references || "",
      });
    } else if (!isLoading) {
      if (localUser.profilePicture) setProfilePicture(localUser.profilePicture);
      form.reset({
        fullName: localUser.fullName || "",
        mobile: localUser.mobile || "",
        country: localUser.country || "",
        nationality: localUser.nationality || "",
        professionalTitle: localUser.professionalTitle || "",
        yearsOfExperience: localUser.yearsOfExperience || "",
        organization: "",
        languagesSpoken: localUser.languagesSpoken || [],
        bio: "",
        motivation: "",
        expertiseCountries: [],
        expertiseSectors: [],
        linkedinProfileUrl: "",
        websiteUrl: "",
        references: "",
      });
    }
  }, [profileData, isLoading, form]);

  const handlePhotoChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploadingPhoto(true);
    try {
      const res = await uploadFile({ file, folder: "partner-avatars" }).unwrap();
      const url = res.data?.url;
      if (url) {
        setProfilePicture(url);
        await setupProfile({ profilePicture: url }).unwrap();
        // update localStorage so header reflects new photo
        const stored = localStorage.getItem("user");
        if (stored) {
          try {
            const u = JSON.parse(stored);
            localStorage.setItem("user", JSON.stringify({ ...u, profilePicture: url }));
          } catch {
            toast.error("Failed to update profile photo");
          }
        }
        toast.success("Photo updated");
      }
    } catch {
      toast.error("Photo upload failed");
    } finally {
      setUploadingPhoto(false);
      e.target.value = "";
    }
  };

  const onSubmit = async (values: FormValues) => {
    try {
      await setupProfile({ ...values, profilePicture }).unwrap();
      // sync fullName to localStorage
      const stored = localStorage.getItem("user");
      if (stored) {
        try {
          const u = JSON.parse(stored);
          localStorage.setItem("user", JSON.stringify({ ...u, fullName: values.fullName }));
        } catch {
          toast.error("Failed to update profile");
        }
      }
      toast.success("Profile saved successfully");
    } catch {
      toast.error("Failed to save profile");
    }
  };

  if (isLoading) {
    return (
      <Main fluid className="space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <Skeleton className="h-80 rounded-xl" />
          <Skeleton className="h-80 lg:col-span-3 rounded-xl" />
        </div>
      </Main>
    );
  }

  const profile = profileData?.data;
  const userStr = localStorage.getItem("user");
  const localUser = userStr ? JSON.parse(userStr) : null;
  const user = profile?.user || localUser;
  const displayName = form.watch("fullName") || user?.fullName || "Partner";

  return (
    <Main fluid className="pb-10">
      <div className="mb-6">
        <h1 className="text-3xl font-bold tracking-tight">My Profile</h1>
        <p className="text-muted-foreground text-sm mt-1">
          Your public partner brief — visible to clients on the marketplace
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Left — Identity card */}
            <div className="space-y-4">
              <Card>
                <CardContent className="pt-6 flex flex-col items-center text-center gap-3">
                  <div className="relative group">
                    <Avatar className="size-24 border-2 border-border">
                      <AvatarImage src={profilePicture} alt={displayName} className="object-cover" />
                      <AvatarFallback className="text-2xl bg-primary/10 text-primary font-bold">
                        {getInitials(displayName)}
                      </AvatarFallback>
                    </Avatar>
                    <label
                      htmlFor="photo-upload"
                      className="absolute inset-0 flex items-center justify-center rounded-full bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                    >
                      {uploadingPhoto ? (
                        <Loader2 className="size-5 text-white animate-spin" />
                      ) : (
                        <Camera className="size-5 text-white" />
                      )}
                    </label>
                    <input
                      id="photo-upload"
                      type="file"
                      accept="image/jpeg,image/png,image/webp"
                      className="hidden"
                      onChange={handlePhotoChange}
                      disabled={uploadingPhoto}
                    />
                  </div>

                  <div>
                    <p className="font-semibold text-base">{displayName}</p>
                    <p className="text-xs text-muted-foreground">{user?.email}</p>
                  </div>

                  <div className="flex flex-wrap justify-center gap-1.5">
                    {profile?.tier && (
                      <Badge variant="outline" className={tierColor[profile.tier] || ""}>
                        <Star className="size-3 mr-1" />
                        {profile.tier}
                      </Badge>
                    )}
                    <Badge
                      variant="outline"
                      className={
                        profile?.status === "active"
                          ? "bg-emerald-500/10 text-emerald-600 border-emerald-500/20"
                          : "bg-amber-500/10 text-amber-600 border-amber-500/20"
                      }
                    >
                      {profile?.status === "active" ? (
                        <CheckCircle2 className="size-3 mr-1" />
                      ) : (
                        <Clock className="size-3 mr-1" />
                      )}
                      {profile?.status || "pending"}
                    </Badge>
                  </div>

                  <p className="text-xs text-muted-foreground">
                    Click the photo to update your profile picture
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-4 space-y-2 text-xs">
                  <p className="font-medium text-sm">Account Info</p>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Email</span>
                    <span className="font-medium truncate ml-2 max-w-[130px]">{user?.email}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Tier</span>
                    <span className="font-medium">{profile?.tier || "—"}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Status</span>
                    <span className="font-medium capitalize">{profile?.status || "—"}</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right — Form sections */}
            <div className="lg:col-span-3 space-y-6">
              {/* Section 1: Basic Info */}
              <Card>
                <CardHeader className="pb-4">
                  <CardTitle className="text-base flex items-center gap-2">
                    <User className="size-4 text-primary" /> Basic Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="fullName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="mobile"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Mobile Number</FormLabel>
                          <FormControl>
                            <Input placeholder="+1 234 567 8900" {...field} value={field.value || ""} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="country"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Country</FormLabel>
                          <Select onValueChange={field.onChange} value={field.value || ""}>
                            <FormControl>
                              <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select country" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {COUNTRIES.map((c) => (
                                <SelectItem key={c.code} value={c.name}>{c.name}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="nationality"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nationality</FormLabel>
                          <Select onValueChange={field.onChange} value={field.value || ""}>
                            <FormControl>
                              <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select nationality" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {COUNTRIES.map((c) => (
                                <SelectItem key={c.code} value={c.name}>{c.name}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Section 2: Professional Profile */}
              <Card>
                <CardHeader className="pb-4">
                  <CardTitle className="text-base flex items-center gap-2">
                    <Briefcase className="size-4 text-primary" /> Professional Profile
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="professionalTitle"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Professional Title</FormLabel>
                          <FormControl>
                            <Input placeholder="e.g. Trade Consultant, Lawyer" {...field} value={field.value || ""} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="yearsOfExperience"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Years of Experience</FormLabel>
                          <Select onValueChange={field.onChange} value={field.value || ""}>
                            <FormControl>
                              <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select experience" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="0-2">0–2 Years</SelectItem>
                              <SelectItem value="3-5">3–5 Years</SelectItem>
                              <SelectItem value="6-10">6–10 Years</SelectItem>
                              <SelectItem value="10+">10+ Years</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="organization"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Organisation / Firm</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g. Global Trade Advisory LLP" {...field} value={field.value || ""} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="languagesSpoken"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Languages Spoken</FormLabel>
                        <FormControl>
                          <MultiSelect
                            options={LANGUAGE_OPTIONS}
                            selected={field.value || []}
                            onChange={field.onChange}
                            placeholder="Select languages..."
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="bio"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Professional Biography</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Your background, expertise, track record, and how you help businesses expand internationally..."
                            className="min-h-32 resize-y"
                            {...field}
                            value={field.value || ""}
                          />
                        </FormControl>
                        <div className="flex justify-end">
                          <span className="text-xs text-muted-foreground">
                            {(field.value || "").length}/1000
                          </span>
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="motivation"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Why do you want to be an AECCI Partner?</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Describe your motivation, how you can help Indian businesses, your network and expertise..."
                            className="min-h-24 resize-y"
                            {...field}
                            value={field.value || ""}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </CardContent>
              </Card>

              {/* Section 3: Expertise & Coverage */}
              <Card>
                <CardHeader className="pb-4">
                  <CardTitle className="text-base flex items-center gap-2">
                    <Globe className="size-4 text-primary" /> Expertise & Coverage
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <FormField
                    control={form.control}
                    name="expertiseCountries"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Countries of Expertise</FormLabel>
                        <FormControl>
                          <MultiSelect
                            options={COUNTRY_OPTIONS}
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
                    control={form.control}
                    name="expertiseSectors"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Sectors of Expertise</FormLabel>
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

                  <FormField
                    control={form.control}
                    name="references"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Professional References</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="List any professional references, past clients, or organisations you have worked with..."
                            className="min-h-20 resize-y"
                            {...field}
                            value={field.value || ""}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </CardContent>
              </Card>

              {/* Section 4: Online Presence */}
              <Card>
                <CardHeader className="pb-4">
                  <CardTitle className="text-base flex items-center gap-2">
                    <LinkIcon className="size-4 text-primary" /> Online Presence
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="linkedinProfileUrl"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>LinkedIn Profile URL</FormLabel>
                          <FormControl>
                            <Input placeholder="https://linkedin.com/in/yourprofile" {...field} value={field.value || ""} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="websiteUrl"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Website / Portfolio URL</FormLabel>
                          <FormControl>
                            <Input placeholder="https://yourwebsite.com" {...field} value={field.value || ""} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </CardContent>
              </Card>

              <div className="flex justify-end">
                <Button type="submit" disabled={isSaving} className="gap-2 min-w-32">
                  {isSaving ? (
                    <Loader2 className="size-4 animate-spin" />
                  ) : (
                    <Save className="size-4" />
                  )}
                  {isSaving ? "Saving..." : "Save Changes"}
                </Button>
              </div>
            </div>
          </div>
        </form>
      </Form>
    </Main>
  );
}
