import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { useUpdateProfileMutation } from "@/store/api/authApi";
import { useUploadFileMutation } from "@/store/api/authApi";
import { COUNTRIES } from "@/lib/countries";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { User, Briefcase, Camera, Loader2, CheckCircle2 } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const profileFormSchema = z.object({
  fullName: z
    .string()
    .min(2, "Full name must be at least 2 characters.")
    .max(50, "Full name must not be longer than 50 characters."),
  email: z.string().email(),
  countryCode: z.string().optional(),
  mobileNumber: z.string().optional(),
  country: z.string().optional(),
  companyName: z.string().optional(),
  websiteUrl: z.string().url("Must be a valid URL").optional().or(z.literal("")),
  industrySector: z.string().optional(),
  businessAddress: z.string().optional(),
  // Read-only fields
  userType: z.string().optional(),
  applicationNumber: z.string().optional(),
});

type ProfileFormValues = z.infer<typeof profileFormSchema>;

function getInitials(name: string) {
  return name.split(" ").filter(Boolean).slice(0, 2).map((n) => n[0].toUpperCase()).join("");
}

export function ProfileForm() {
  const [updateProfile, { isLoading }] = useUpdateProfileMutation();
  const [uploadFile] = useUploadFileMutation();
  
  const [uploadingPhoto, setUploadingPhoto] = useState(false);
  const [profilePicture, setProfilePicture] = useState("");

  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      countryCode: "",
      mobileNumber: "",
      country: "",
      companyName: "",
      websiteUrl: "",
      industrySector: "",
      businessAddress: "",
      userType: "",
      applicationNumber: "",
    },
  });

  useEffect(() => {
    const userStr = localStorage.getItem("user");
    if (userStr) {
      try {
        const localUser = JSON.parse(userStr);
        if (localUser.profilePicture) {
          setProfilePicture(localUser.profilePicture);
        }
        form.reset({
          fullName: localUser.fullName || "",
          email: localUser.email || "",
          countryCode: localUser.countryCode || "",
          mobileNumber: (localUser.mobileNumber || localUser.mobile || "").replace(/\s+/g, ""),
          country: localUser.country || "",
          companyName: localUser.companyName || "",
          websiteUrl: localUser.websiteUrl || "",
          industrySector: localUser.industrySector || "",
          businessAddress: localUser.businessAddress || "",
          userType: localUser.userType || "",
          applicationNumber: localUser.applicationNumber || "",
        });
      } catch (e) {
        console.error("Failed to parse user for profile form", e);
      }
    }
  }, [form]);

  const handlePhotoChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploadingPhoto(true);
    try {
      const res = await uploadFile({ file, folder: "user-avatars" }).unwrap();
      const url = res.data?.url;
      if (url) {
        setProfilePicture(url);
        // Save immediately
        await updateProfile({ profilePicture: url }).unwrap();
        const stored = localStorage.getItem("user");
        if (stored) {
          const u = JSON.parse(stored);
          localStorage.setItem("user", JSON.stringify({ ...u, profilePicture: url }));
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

  async function onSubmit(data: ProfileFormValues) {
    try {
      const payload = { ...data, profilePicture };
      const res = await updateProfile(payload).unwrap();
      
      const stored = localStorage.getItem("user");
      if (stored) {
        const u = JSON.parse(stored);
        localStorage.setItem("user", JSON.stringify({ ...u, ...payload }));
      }
      
      toast.success(res.message || "Profile updated successfully");
    } catch (error: any) {
      toast.error(error?.data?.message || "Failed to update profile");
    }
  }

  const userStr = localStorage.getItem("user");
  const localUser = userStr ? JSON.parse(userStr) : null;
  const displayName = form.watch("fullName") || localUser?.fullName || "User";

  return (
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
                  <p className="text-xs text-muted-foreground">{localUser?.email}</p>
                </div>

                <div className="flex flex-wrap justify-center gap-1.5">
                  <Badge
                    variant="outline"
                    className={
                      localUser?.status === "active"
                        ? "bg-emerald-500/10 text-emerald-600 border-emerald-500/20"
                        : "bg-emerald-500/10 text-emerald-600 border-emerald-500/20"
                    }
                  >
                    {localUser?.status === "active" ? (
                      <CheckCircle2 className="size-3 mr-1" />
                    ) : (
                      <CheckCircle2 className="size-3 mr-1" />
                    )}
                    {localUser?.status || "active"}
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
                  <span className="font-medium truncate ml-2 max-w-[130px]">{localUser?.email}</span>
                </div>
                <Separator />
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Account Type</span>
                  <span className="font-medium capitalize">{localUser?.userType || "—"}</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right — Form sections */}
          <div className="lg:col-span-3 space-y-6">
            {/* Basic Information */}
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
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="m@example.com" {...field} disabled />
                        </FormControl>
                        <FormDescription>
                          Cannot be changed here.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex gap-2">
                    <FormField
                      control={form.control}
                      name="countryCode"
                      render={({ field }) => (
                        <FormItem className="w-1/3">
                          <FormLabel>Code</FormLabel>
                          <FormControl>
                            <Input placeholder="+91" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="mobileNumber"
                      render={({ field }) => (
                        <FormItem className="w-2/3">
                          <FormLabel>Mobile Number</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter mobile number" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={form.control}
                    name="country"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Country</FormLabel>
                        <Select onValueChange={field.onChange} value={field.value}>
                          <FormControl>
                            <SelectTrigger>
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
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="applicationNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Application Number</FormLabel>
                        <FormControl>
                          <Input {...field} disabled placeholder="N/A" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="userType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Account Type</FormLabel>
                        <FormControl>
                          <Input {...field} disabled placeholder="e.g. Business" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Business Profile */}
            <Card>
              <CardHeader className="pb-4">
                <CardTitle className="text-base flex items-center gap-2">
                  <Briefcase className="size-4 text-primary" /> Business Profile
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="companyName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Company Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your Company Ltd." {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="industrySector"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Industry Sector</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g. Trade Facilitation" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="websiteUrl"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Website URL</FormLabel>
                      <FormControl>
                        <Input placeholder="https://example.com" {...field} value={field.value || ""} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="businessAddress"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Business Address</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Enter full business address" 
                          className="resize-y" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
            </Card>

            <div>
              <Button type="submit" disabled={isLoading}>
                {isLoading ? "Updating..." : "Update profile"}
              </Button>
            </div>
          </div>
        </div>
      </form>
    </Form>
  );
}
