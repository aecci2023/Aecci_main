import { Main } from "@/components/layout/main";
import { useGetUsersQuery, useSetPricingMutation, useGetPartnerProfileQuery, useSetupPartnerProfileMutation } from "@/store/api/adminApi";
import { useUploadFileMutation } from "@/store/api/authApi";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { toast } from "sonner";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, UploadCloud, Calendar, User, FileText, Loader2, Video } from "lucide-react";
import { Link } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useGetMySessionsQuery, useSubmitSessionSummaryMutation } from "@/store/api/sessionApi";

const DAYS_OF_WEEK = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

export default function PartnerDashboard() {
  const { data: profileData, isLoading: isProfileLoading, refetch: refetchProfile } = useGetPartnerProfileQuery();
  const partnerProfile = profileData?.data;

  const { data: usersData, isLoading: isUsersLoading } = useGetUsersQuery({ kycStatus: 'assigned_pending_pricing' });
  const users = usersData?.data || [];

  const [setPricing, { isLoading: isSettingPricing }] = useSetPricingMutation();
  const [setupProfile, { isLoading: isSettingUp }] = useSetupPartnerProfileMutation();
  const [uploadFile, { isLoading: isUploading }] = useUploadFileMutation();

  const [prices, setPrices] = useState<Record<string, string>>({});
  
  // Wizard Setup Form States
  const [bio, setBio] = useState("");
  const [languages, setLanguages] = useState("");
  const [profilePicUrl, setProfilePicUrl] = useState("");
  const [signedAgreement, setSignedAgreement] = useState(false);
  const [weeklySchedule, setWeeklySchedule] = useState<Record<string, { enabled: boolean; start: string; end: string }>>({
    Monday: { enabled: true, start: "09:00", end: "17:00" },
    Tuesday: { enabled: true, start: "09:00", end: "17:00" },
    Wednesday: { enabled: true, start: "09:00", end: "17:00" },
    Thursday: { enabled: true, start: "09:00", end: "17:00" },
    Friday: { enabled: true, start: "09:00", end: "17:00" },
    Saturday: { enabled: false, start: "09:00", end: "17:00" },
    Sunday: { enabled: false, start: "09:00", end: "17:00" }
  });

  // Deal Room Sessions Query and States
  const { data: mySessionsData, refetch: refetchSessions } = useGetMySessionsQuery();
  const mySessions = mySessionsData?.data || [];

  const [summarySession, setSummarySession] = useState<any>(null);
  const [outcomes, setOutcomes] = useState("");
  const [nextSteps, setNextSteps] = useState("");
  const [localContacts, setLocalContacts] = useState("");
  const [recommendations, setRecommendations] = useState("");
  const [submitSummary, { isLoading: isSubmittingSummary }] = useSubmitSessionSummaryMutation();

  const formatDate = (dateString: string) => {
    try {
      const d = new Date(dateString);
      return d.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });
    } catch (e) {
      return dateString;
    }
  };

  const handleOutcomesSubmit = async () => {
    if (!outcomes.trim() || !nextSteps.trim()) {
      toast.error("Please fill in the outcomes and next steps.");
      return;
    }

    const compiledSummary = `
OUTCOMES & ADVICE:
${outcomes}

ACTIONABLE NEXT STEPS:
${nextSteps}

LOCAL CONTACTS PROMISED:
${localContacts || "None"}

RECOMMENDED SERVICES:
${recommendations || "None"}
`.trim();

    try {
      await submitSummary({ sessionId: summarySession.id, summary: compiledSummary }).unwrap();
      toast.success("Post-session summary submitted successfully!");
      setSummarySession(null);
      setOutcomes("");
      setNextSteps("");
      setLocalContacts("");
      setRecommendations("");
      refetchSessions();
    } catch (err: any) {
      console.error(err);
      toast.error(err?.data?.message || "Failed to submit post-session summary.");
    }
  };

  const upcomingSessions = mySessions.filter((s: any) => s.status === 'upcoming');
  const pastSessions = mySessions.filter((s: any) => s.status === 'completed' || s.status === 'upcoming');

  const handlePriceChange = (userId: string, value: string) => {
    setPrices(prev => ({ ...prev, [userId]: value }));
  };

  const handleSubmitPricing = async (userId: string) => {
    const price = Number(prices[userId]);
    if (!price || isNaN(price) || price <= 0) {
      toast.error("Please enter a valid price.");
      return;
    }

    try {
      await setPricing({ id: userId, dealRoomPrice: price }).unwrap();
      toast.success("Pricing set successfully.");
    } catch (err) {
      console.error(err);
      toast.error("Failed to set pricing.");
    }
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      if (!file.type.startsWith("image/")) {
        toast.error("Please upload an image file.");
        return;
      }
      try {
        const res = await uploadFile({ file, folder: "profile_pictures" }).unwrap();
        if (res.success) {
          setProfilePicUrl(res.data.url);
          toast.success("Profile photo uploaded successfully!");
        }
      } catch (err) {
        console.error("Upload error:", err);
        toast.error("Failed to upload profile photo.");
      }
    }
  };

  const handleScheduleToggle = (day: string, checked: boolean) => {
    setWeeklySchedule(prev => ({
      ...prev,
      [day]: { ...prev[day], enabled: checked }
    }));
  };

  const handleTimeChange = (day: string, type: "start" | "end", value: string) => {
    setWeeklySchedule(prev => ({
      ...prev,
      [day]: { ...prev[day], [type]: value }
    }));
  };

  const handleCompleteSetup = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!signedAgreement) {
      toast.error("You must sign the agreement to proceed.");
      return;
    }
    if (!bio.trim()) {
      toast.error("Professional biography is required.");
      return;
    }
    if (!languages.trim()) {
      toast.error("Spoken languages are required.");
      return;
    }

    try {
      await setupProfile({
        bio,
        signedAgreement,
        profilePicture: profilePicUrl || undefined,
        languagesSpoken: languages.split(",").map(s => s.trim()).filter(Boolean),
        availability: { weekly: weeklySchedule }
      }).unwrap();
      toast.success("Profile setup complete!");
      refetchProfile();
    } catch (err) {
      console.error("Setup error:", err);
      toast.error("Failed to complete setup.");
    }
  };

  if (isProfileLoading || isUsersLoading) {
    return <Main fluid className="flex justify-center p-10"><p className="text-muted-foreground animate-pulse">Loading dashboard...</p></Main>;
  }

  // Check if profile needs setup
  const needsSetup = partnerProfile && (!partnerProfile.bio || !partnerProfile.signedAgreement);

  if (needsSetup) {
    return (
      <Main fluid className="py-12 max-w-4xl mx-auto space-y-6">
        <div className="space-y-1">
          <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-primary to-emerald-600 bg-clip-text text-transparent">Complete Your Profile Setup</h1>
          <p className="text-muted-foreground text-sm">Please build your Partner Brief and availability settings to host Deal Room sessions.</p>
        </div>
        
        <Card className="shadow-md border-border">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2">
              <User className="size-5 text-primary" /> Profile Setup Wizard
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleCompleteSetup} className="space-y-8">
              {/* Photo and Bio */}
              <div className="space-y-4">
                <h3 className="font-semibold text-lg border-b pb-2">1. Partner Brief (Public Profile)</h3>
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="flex flex-col items-center gap-3">
                    <Label className="text-sm font-medium">Profile Photo</Label>
                    <div className="relative size-32 rounded-full border-2 border-dashed border-muted-foreground/30 flex items-center justify-center overflow-hidden bg-muted/30">
                      {profilePicUrl ? (
                        <img src={profilePicUrl} alt="Preview" className="size-full object-cover" />
                      ) : (
                        <UploadCloud className="size-8 text-muted-foreground/50" />
                      )}
                    </div>
                    <div className="relative">
                      <Button type="button" variant="outline" size="sm" disabled={isUploading}>
                        {isUploading ? "Uploading..." : "Select Photo"}
                      </Button>
                      <input 
                        type="file" 
                        accept="image/*"
                        className="absolute inset-0 opacity-0 cursor-pointer"
                        onChange={handleFileChange}
                      />
                    </div>
                  </div>
                  
                  <div className="flex-1 space-y-4 w-full">
                    <div className="space-y-2">
                      <Label htmlFor="languages">Languages Spoken (comma separated) <span className="text-red-500">*</span></Label>
                      <Input 
                        id="languages"
                        required
                        value={languages}
                        onChange={(e) => setLanguages(e.target.value)}
                        placeholder="e.g. English, Hindi, Arabic"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="bio">Professional Biography <span className="text-red-500">*</span></Label>
                      <Textarea 
                        id="bio"
                        name="bio"
                        required
                        value={bio}
                        onChange={(e) => setBio(e.target.value)}
                        placeholder="Briefly describe your trade experience, focus markets, and the legal/compliance advisory services you offer..."
                        className="min-h-[100px]"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Availability */}
              <div className="space-y-4 pt-4 border-t">
                <h3 className="font-semibold text-lg flex items-center gap-2 border-b pb-2">
                  <Calendar className="size-5 text-primary" /> 2. Weekly Availability Schedule
                </h3>
                <p className="text-xs text-muted-foreground">Select the days you are available to host sessions and define your active hours.</p>
                
                <div className="space-y-3">
                  {DAYS_OF_WEEK.map((day) => {
                    const sched = weeklySchedule[day];
                    return (
                      <div key={day} className="flex flex-col sm:flex-row sm:items-center justify-between p-3 bg-muted/30 border rounded-lg gap-4">
                        <div className="flex items-center gap-3">
                          <Checkbox 
                            id={`day-${day}`}
                            checked={sched.enabled}
                            onCheckedChange={(checked) => handleScheduleToggle(day, checked === true)}
                          />
                          <Label htmlFor={`day-${day}`} className="font-semibold text-sm w-24 cursor-pointer">{day}</Label>
                        </div>
                        
                        {sched.enabled ? (
                          <div className="flex items-center gap-2 text-sm">
                            <span>From</span>
                            <Input 
                              type="time" 
                              value={sched.start}
                              onChange={(e) => handleTimeChange(day, "start", e.target.value)}
                              className="w-28 text-center"
                            />
                            <span>to</span>
                            <Input 
                              type="time" 
                              value={sched.end}
                              onChange={(e) => handleTimeChange(day, "end", e.target.value)}
                              className="w-28 text-center"
                            />
                          </div>
                        ) : (
                          <span className="text-xs text-muted-foreground italic sm:pr-8">Unavailable</span>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Digital Agreement */}
              <div className="space-y-4 pt-4 border-t">
                <h3 className="font-semibold text-lg flex items-center gap-2 border-b pb-2">
                  <FileText className="size-5 text-primary" /> 3. Digital Agreement
                </h3>
                <div className="bg-muted p-4 rounded-md text-xs text-muted-foreground h-32 overflow-y-auto border">
                  <p className="font-semibold mb-1">AECCI Partner Terms & Code of Conduct</p>
                  <p>By signing this digital agreement, you commit to:</p>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>Maintaining absolute confidentiality of all member information, trade documents, and business briefs shared.</li>
                    <li>Providing verified, accurate trade compliance guidance, import/export rules, and localized market insights.</li>
                    <li>Conducting live video sessions on-time with suitable networking environments (high bandwidth).</li>
                    <li>Avoiding direct communication or business routing off-platform with clients met via the platform.</li>
                  </ul>
                </div>
                <div className="flex items-center gap-2.5 mt-2">
                  <Checkbox 
                    id="agreement" 
                    checked={signedAgreement}
                    onCheckedChange={(checked) => setSignedAgreement(checked === true)}
                  />
                  <Label htmlFor="agreement" className="text-sm font-medium cursor-pointer">I have read and agree to the AECCI Partner Code of Conduct.</Label>
                </div>
              </div>

              <Button type="submit" className="w-full bg-primary hover:bg-primary/95 text-primary-foreground" disabled={isSettingUp || !signedAgreement}>
                <CheckCircle2 className="w-4 h-4 mr-2" /> Complete Setup & Activate Dashboard
              </Button>
            </form>
          </CardContent>
        </Card>
      </Main>
    );
  }

  return (
    <Main fluid className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-primary to-emerald-600 bg-clip-text text-transparent">Partner Desk</h1>
          <p className="text-muted-foreground mt-1">Manage assigned clients, set pricing, view schedule, and submit session summaries.</p>
        </div>
      </div>

      <Tabs defaultValue="sessions" className="space-y-6">
        <TabsList className="grid grid-cols-2 w-full max-w-md">
          <TabsTrigger value="sessions">Deal Room Sessions</TabsTrigger>
          <TabsTrigger value="clients">Client Pricing</TabsTrigger>
        </TabsList>

        <TabsContent value="sessions" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Upcoming Sessions */}
            <Card className="shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary font-bold text-lg">
                  <Calendar className="size-5" /> Upcoming Advisory Sessions
                </CardTitle>
                <CardDescription>Scheduled 1-on-1 bilateral deal rooms with exporters.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {upcomingSessions.length === 0 ? (
                  <p className="text-sm text-muted-foreground py-6 text-center border-2 border-dashed rounded-lg">No upcoming sessions scheduled.</p>
                ) : (
                  upcomingSessions.map((session: any) => (
                    <div key={session.id} className="p-4 border rounded-lg bg-muted/20 flex flex-col gap-3">
                      <div className="flex items-center justify-between">
                        <Badge className="bg-primary/10 text-primary border-primary/20">Upcoming</Badge>
                        <span className="text-xs text-muted-foreground font-semibold">{formatDate(session.date)}</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-sm text-foreground">{session.title}</h4>
                        <p className="text-xs text-muted-foreground mt-1">Client: <span className="font-medium text-foreground">{session.client?.fullName || "Exporter"}</span> ({session.client?.companyName || "Individual"})</p>
                      </div>
                      <Button asChild size="sm" className="w-full bg-primary hover:bg-primary/95 text-primary-foreground font-semibold">
                        <Link to={`/dashboard/live-deal-room?sessionId=${session.id}`}>
                          <Video className="size-4 mr-1.5" /> Join Live Room
                        </Link>
                      </Button>
                    </div>
                  ))
                )}
              </CardContent>
            </Card>

            {/* Completed & Action Required */}
            <Card className="shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-emerald-600 font-bold text-lg">
                  <CheckCircle2 className="size-5" /> Past Consulting Records
                </CardTitle>
                <CardDescription>Submit post-session summaries to trigger client Opportunity Reports.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {pastSessions.length === 0 ? (
                  <p className="text-sm text-muted-foreground py-6 text-center border-2 border-dashed rounded-lg">No past session records found.</p>
                ) : (
                  pastSessions.map((session: any) => (
                    <div key={session.id} className="p-4 border rounded-lg bg-muted/20 flex flex-col gap-3">
                      <div className="flex items-center justify-between">
                        <Badge className={session.postSessionSummary ? "bg-emerald-500/10 text-emerald-600 border-emerald-500/20" : "bg-rose-500/10 text-rose-600 border-rose-500/20"}>
                          {session.postSessionSummary ? "Summary Submitted" : "Summary Required"}
                        </Badge>
                        <span className="text-xs text-muted-foreground font-semibold">{formatDate(session.date)}</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-sm text-foreground">{session.title}</h4>
                        <p className="text-xs text-muted-foreground mt-1">Client: {session.client?.fullName}</p>
                      </div>
                      {!session.postSessionSummary ? (
                        <Button onClick={() => setSummarySession(session)} size="sm" variant="outline" className="w-full text-xs font-semibold">
                          Fill Outcomes Form
                        </Button>
                      ) : (
                        <div className="bg-background/80 p-3 rounded border text-[11px] text-muted-foreground italic max-h-24 overflow-y-auto">
                          {session.postSessionSummary}
                        </div>
                      )}
                    </div>
                  ))
                )}
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="clients" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {users.map((user: any) => (
              <Card key={user.id} className="shadow-sm">
                <CardHeader>
                  <CardTitle className="font-bold text-base">{user.fullName || user.companyName}</CardTitle>
                  <CardDescription className="text-xs">{user.email}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Badge variant="outline" className="text-xs">Pending Pricing</Badge>
                  <div className="space-y-2">
                    <label className="text-xs font-semibold">Set Deal Room Price (USD)</label>
                    <div className="flex gap-2">
                      <Input 
                        type="number" 
                        placeholder="e.g. 500" 
                        value={prices[user.id] || ""}
                        onChange={(e) => handlePriceChange(user.id, e.target.value)}
                        className="h-9"
                      />
                      <Button 
                        onClick={() => handleSubmitPricing(user.id)}
                        disabled={isSettingPricing}
                        className="h-9"
                      >
                        Submit
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {users.length === 0 && (
              <p className="text-muted-foreground col-span-full text-sm">No pending clients assigned to you at the moment.</p>
            )}
          </div>
        </TabsContent>
      </Tabs>

      {/* Summary Dialog */}
      <Dialog open={!!summarySession} onOpenChange={(open) => !open && setSummarySession(null)}>
        <DialogContent className="max-w-xl">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-xl font-bold text-primary">
              <FileText className="size-5" /> Post-Session Summary Submission
            </DialogTitle>
            <DialogDescription>
              Submit outcomes, actionable next steps, local contacts, and follow-up recommendations.
            </DialogDescription>
          </DialogHeader>

          {summarySession && (
            <div className="space-y-4 py-3 text-xs leading-relaxed max-h-[60vh] overflow-y-auto pr-1">
              <div className="bg-muted/50 p-3 rounded-lg border">
                <span className="font-bold text-[10px] text-muted-foreground uppercase block mb-1">Pre-Session Objectives:</span>
                <p className="italic">"{summarySession.questionnaire || "No questionnaire details submitted."}"</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="outcomes" className="text-xs font-semibold">1. Session Outcomes & Advice Provided <span className="text-red-500">*</span></Label>
                <Textarea 
                  id="outcomes"
                  required
                  value={outcomes}
                  onChange={(e) => setOutcomes(e.target.value)}
                  placeholder="Summarize the core discussion points and advice shared regarding tariffs, compliance, routes, etc..."
                  className="min-h-[80px]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="nextSteps" className="text-xs font-semibold">2. Actionable Next Steps <span className="text-red-500">*</span></Label>
                <Textarea 
                  id="nextSteps"
                  required
                  value={nextSteps}
                  onChange={(e) => setNextSteps(e.target.value)}
                  placeholder="Detail clear, sequential next steps for the client/exporter..."
                  className="min-h-[60px]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="localContacts" className="text-xs font-semibold">3. Verified Local Contacts Promised (Optional)</Label>
                <Textarea 
                  id="localContacts"
                  value={localContacts}
                  onChange={(e) => setLocalContacts(e.target.value)}
                  placeholder="Provide name, position, email, phone of local logistics, buyers, or legal entities..."
                  className="min-h-[50px]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="recommendations" className="text-xs font-semibold">4. Recommended Paid Follow-Up Services (Optional)</Label>
                <Textarea 
                  id="recommendations"
                  value={recommendations}
                  onChange={(e) => setRecommendations(e.target.value)}
                  placeholder="Recommend specific legal filing, certification help, or buyer introduction follow-ups..."
                  className="min-h-[50px]"
                />
              </div>
            </div>
          )}

          <DialogFooter className="flex items-center justify-end w-full pt-4 border-t gap-2">
            <Button variant="outline" size="sm" onClick={() => setSummarySession(null)}>Cancel</Button>
            <Button 
              className="bg-primary hover:bg-primary/95 text-primary-foreground font-semibold h-9 text-xs"
              onClick={handleOutcomesSubmit}
              disabled={isSubmittingSummary}
            >
              {isSubmittingSummary ? (
                <Loader2 className="w-4 h-4 mr-1.5 animate-spin" />
              ) : (
                <CheckCircle2 className="w-4 h-4 mr-1.5" />
              )}
              Submit Summary
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </Main>
  );
}
