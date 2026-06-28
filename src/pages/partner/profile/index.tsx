import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Save, User } from "lucide-react";

const schema = z.object({
  bio: z.string().max(1000).optional(),
  organization: z.string().max(200).optional(),
});

type FormValues = z.infer<typeof schema>;

interface PartnerProfile {
  bio: string | null;
  organization: string | null;
  expertiseCountries: string[];
  expertiseSectors: string[];
  tier: string;
  status: string;
  user: {
    fullName: string | null;
    email: string;
    profilePicture: string | null;
    country: string | null;
    languagesSpoken: string[];
    yearsOfExperience: string | null;
    professionalTitle: string | null;
  };
}

export default function PartnerProfilePage() {
  const [profile, setProfile] = useState<PartnerProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  const form = useForm<FormValues>({ resolver: zodResolver(schema) });

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    fetch(`${import.meta.env.VITE_API_URL}/api/partners/me`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((r) => r.json())
      .then((data) => {
        if (data.success) {
          setProfile(data.data);
          form.reset({
            bio: data.data.bio || "",
            organization: data.data.organization || "",
          });
        }
      })
      .finally(() => setLoading(false));
  }, []);

  const onSubmit = async (values: FormValues) => {
    setSaving(true);
    setSaved(false);
    const token = localStorage.getItem("accessToken");
    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/api/partners/setup`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(values),
        },
      );
      const data = await res.json();
      if (data.success) setSaved(true);
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
      </div>
    );
  }

  if (!profile) return null;

  const initials = profile.user.fullName
    ? profile.user.fullName
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()
    : "P";

  return (
    <div className="max-w-2xl mx-auto space-y-6 p-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">My Profile</h1>
        <p className="text-muted-foreground">
          Your public partner brief visible to clients
        </p>
      </div>

      <Card>
        <CardContent className="pt-6">
          <div className="flex items-center gap-4">
            <Avatar className="h-20 w-20">
              <AvatarImage src={profile.user.profilePicture || undefined} />
              <AvatarFallback className="text-xl">{initials}</AvatarFallback>
            </Avatar>
            <div className="space-y-1">
              <h2 className="text-xl font-semibold">{profile.user.fullName}</h2>
              <p className="text-muted-foreground text-sm">
                {profile.user.email}
              </p>
              <div className="flex gap-2 flex-wrap">
                <Badge variant="outline">{profile.tier}</Badge>
                <Badge
                  className={
                    profile.status === "active"
                      ? "bg-green-100 text-green-700 border-green-200"
                      : "bg-yellow-100 text-yellow-700 border-yellow-200"
                  }
                  variant="outline"
                >
                  {profile.status}
                </Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <User className="h-5 w-5" />
            Profile Details
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="organization"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Organisation</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Your company or organisation name"
                        {...field}
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
                        placeholder="Describe your expertise, experience and what you offer to clients..."
                        className="min-h-36 resize-y"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="pt-2 space-y-2">
                <p className="text-sm font-medium">Expertise Countries</p>
                <div className="flex flex-wrap gap-2">
                  {profile.expertiseCountries.map((c) => (
                    <Badge key={c} variant="secondary">
                      {c}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <p className="text-sm font-medium">Expertise Sectors</p>
                <div className="flex flex-wrap gap-2">
                  {profile.expertiseSectors.map((s) => (
                    <Badge key={s} variant="secondary">
                      {s}
                    </Badge>
                  ))}
                </div>
              </div>

              {saved && (
                <p className="text-sm text-green-600">
                  Profile saved successfully.
                </p>
              )}

              <Button type="submit" disabled={saving} className="gap-2">
                <Save className="h-4 w-4" />
                {saving ? "Saving..." : "Save Changes"}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
