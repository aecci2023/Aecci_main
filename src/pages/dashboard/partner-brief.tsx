import { Header } from "@/components/layout/header";
import { Main } from "@/components/layout/main";
import { ProfileDropdown } from "@/components/profile-dropdown";
import { Search } from "@/components/search";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  ShieldAlert, 
  MapPin, 
  Calendar, 
  Clock, 
  ChevronRight, 
  Globe, 
  AlertCircle,
  Loader2,
  CalendarCheck
} from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import { useGetMarketplacePartnerDetailQuery, useGetUserByIdQuery } from "@/store/api/adminApi";
import { useRequestSessionMutation } from "@/store/api/sessionApi";
import { toast } from "sonner";

const DAYS_OF_WEEK = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

export default function PartnerBriefPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const partnerUserId = queryParams.get('userId') || "";

  const [currentUser] = useState<any>(() => {
    const userStr = localStorage.getItem("user");
    return userStr ? JSON.parse(userStr) : null;
  });

  // Queries
  const { data: partnerData, isLoading: isPartnerLoading } = useGetMarketplacePartnerDetailQuery(partnerUserId, {
    skip: !partnerUserId,
  });
  const partner = partnerData?.data;
  const userDetails = partner?.user || {};

  const { data: userData } = useGetUserByIdQuery(currentUser?.id as string, {
    skip: !currentUser?.id,
  });
  const dbUser = userData?.data;

  // Mutations
  const [requestSession, { isLoading: isBooking }] = useRequestSessionMutation();

  // Booking Modal States
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isPaywallOpen, setIsPaywallOpen] = useState(false);
  const [selectedDay, setSelectedDay] = useState<string>("");
  const [bookingDate, setBookingDate] = useState("");
  const [bookingTime, setBookingTime] = useState("");
  const [objective, setObjective] = useState("");
  const [questions, setQuestions] = useState("");

  const initials = userDetails.fullName
    ? userDetails.fullName.split(" ").map((n: string) => n[0]).join("").slice(0, 2).toUpperCase()
    : "PA";

  const handleSlotSelect = (dayName: string) => {
    // 1. Paywall Check
    const hasSlots = dbUser?.planActive && dbUser?.slotsRemaining > 0;
    if (!hasSlots) {
      setIsPaywallOpen(true);
      return;
    }

    // 2. Open Booking Request Questionnaire
    setSelectedDay(dayName);
    const daySchedule = partner?.availability?.weekly?.[dayName] || {};
    setBookingTime(daySchedule.start || "09:00");
    setIsBookingOpen(true);
  };

  const handleBookingSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!bookingDate || !bookingTime || !objective.trim()) {
      toast.error("Please fill in all required fields.");
      return;
    }

    // Enforce selected day matches the date chosen
    const selectedDateObj = new Date(bookingDate);
    const dayOptions: Intl.DateTimeFormatOptions = { weekday: 'long' };
    const dateDayName = new Intl.DateTimeFormat('en-US', dayOptions).format(selectedDateObj);

    if (dateDayName !== selectedDay) {
      toast.error(`Please pick a date that falls on a ${selectedDay}.`);
      return;
    }

    const fullDateTimeString = `${bookingDate}T${bookingTime}:00`;
    const compiledQuestionnaire = `Objective: ${objective}\n\nPre-Session Questions: ${questions || "None provided"}`;

    try {
      await requestSession({
        partnerId: partnerUserId,
        date: fullDateTimeString,
        questionnaire: compiledQuestionnaire
      }).unwrap();

      toast.success("Deal Room Booking requested successfully!");
      setIsBookingOpen(false);
      navigate("/dashboard/my-sessions");
    } catch (err: any) {
      console.error(err);
      toast.error(err?.data?.message || "Failed to submit booking request.");
    }
  };

  if (isPartnerLoading) {
    return (
      <Main fluid className="flex justify-center p-12">
        <div className="flex flex-col items-center gap-2">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
          <p className="text-muted-foreground animate-pulse text-sm">Loading Partner Brief...</p>
        </div>
      </Main>
    );
  }

  if (!partner) {
    return (
      <Main fluid className="max-w-4xl mx-auto py-12 text-center space-y-4">
        <AlertCircle className="size-12 text-destructive mx-auto" />
        <h2 className="text-xl font-bold">Partner Brief Not Found</h2>
        <p className="text-muted-foreground text-sm">The selected partner profile does not exist or has not been approved.</p>
        <Button onClick={() => navigate("/dashboard/marketplace")}>Back to Marketplace</Button>
      </Main>
    );
  }

  return (
    <>
      <Header>
        <div className="flex items-center space-x-2">
          <span className="font-semibold text-sm text-muted-foreground">
            AECCI Hub
          </span>
          <span className="text-muted-foreground">/</span>
          <span className="font-semibold text-sm">Marketplace</span>
          <span className="text-muted-foreground">/</span>
          <span className="font-semibold text-sm">Partner Brief</span>
        </div>
        <div className="ml-auto flex items-center space-x-4">
          <Search />
          <ProfileDropdown />
        </div>
      </Header>

      <Main fluid className="space-y-6 max-w-6xl mx-auto py-6">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-primary to-emerald-600 bg-clip-text text-transparent">
            Partner Brief & Profile
          </h1>
          <p className="text-muted-foreground text-sm mt-1">
            Review trade specialties and check calendar availability before requesting a Deal Room booking.
          </p>
        </div>

        {/* Disclaimer Panel */}
        <Card className="border-amber-500/20 bg-amber-500/5">
          <CardContent className="pt-4 flex gap-3 items-start">
            <ShieldAlert className="size-5 text-amber-600 shrink-0 mt-0.5" />
            <div className="text-xs text-muted-foreground leading-relaxed">
              <strong>Collaboration Confidentiality:</strong> All direct contact details (emails, phone numbers, and social links) are strictly protected by the chamber ecosystem until a formal session is approved by AECCI.
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Brief Details */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="shadow-sm border-border">
              <CardHeader className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pb-4 border-b">
                <Avatar className="h-16 w-16 border rounded-xl shrink-0">
                  {userDetails.profilePicture ? (
                    <img src={userDetails.profilePicture} alt={userDetails.fullName} className="size-full object-cover" />
                  ) : (
                    <AvatarFallback className="bg-primary/10 text-primary font-bold text-xl rounded-xl">
                      {initials}
                    </AvatarFallback>
                  )}
                </Avatar>
                <div className="space-y-1">
                  <div className="flex flex-wrap gap-2 items-center">
                    <Badge className="bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20">
                      Verified AECCI Partner
                    </Badge>
                    <Badge variant="outline">{partner.tier} Tier</Badge>
                  </div>
                  <CardTitle className="text-2xl font-bold">
                    {userDetails.fullName || "Trade Partner"}
                  </CardTitle>
                  <CardDescription className="flex items-center gap-1 mt-1 text-sm font-medium">
                    <MapPin className="size-4 text-primary shrink-0" /> {partner.organization || "Chamber Delegate"}
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent className="space-y-6 pt-6 text-sm leading-relaxed">
                <div>
                  <h3 className="font-bold text-foreground text-base mb-2">Professional Biography</h3>
                  <p className="text-muted-foreground whitespace-pre-line">{partner.bio || "No professional biography provided yet."}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-t pt-4">
                  <div>
                    <h4 className="font-bold text-foreground text-xs uppercase tracking-wider mb-2">Expertise Fields</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {partner.expertiseSectors?.map((sector: string, idx: number) => (
                        <Badge key={idx} variant="outline" className="text-xs">{sector}</Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground text-xs uppercase tracking-wider mb-2">Operation Countries</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {partner.expertiseCountries?.map((country: string, idx: number) => (
                        <Badge key={idx} variant="secondary" className="text-xs">{country}</Badge>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="border-t pt-4 grid grid-cols-2 gap-4">
                  <div>
                    <span className="text-xs text-muted-foreground block">Languages Spoken</span>
                    <span className="font-semibold text-foreground text-sm flex items-center gap-1.5 mt-0.5">
                      <Globe className="size-4 text-primary" /> {userDetails.languagesSpoken?.join(", ") || "English"}
                    </span>
                  </div>
                  <div>
                    <span className="text-xs text-muted-foreground block">Years of Experience</span>
                    <span className="font-semibold text-foreground text-sm block mt-0.5">
                      {userDetails.yearsOfExperience || "N/A"}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Availability Scheduler Side Column */}
          <div className="space-y-6">
            <Card className="shadow-sm border-border bg-muted/10">
              <CardHeader className="pb-3 border-b">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Calendar className="size-5 text-primary" /> Weekly Slot Calendar
                </CardTitle>
                <CardDescription className="text-xs">
                  Select an available day to draft your Deal Room booking request.
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-4 space-y-3">
                {DAYS_OF_WEEK.map((day) => {
                  const daySched = partner.availability?.weekly?.[day];
                  const isAvailable = daySched && daySched.enabled;

                  return (
                    <div 
                      key={day} 
                      className={`flex items-center justify-between p-3 rounded-lg border text-sm transition-all duration-200 ${
                        isAvailable 
                          ? "bg-background border-emerald-500/20 hover:border-emerald-500/60" 
                          : "bg-muted/30 border-dashed border-border opacity-60"
                      }`}
                    >
                      <div className="space-y-0.5">
                        <span className="font-bold text-xs tracking-wide block">{day}</span>
                        {isAvailable ? (
                          <span className="text-xs text-muted-foreground flex items-center gap-1">
                            <Clock className="size-3 text-emerald-600" /> {daySched.start} - {daySched.end}
                          </span>
                        ) : (
                          <span className="text-[10px] text-muted-foreground italic">Unavailable</span>
                        )}
                      </div>
                      
                      {isAvailable ? (
                        <Button 
                          size="sm" 
                          variant="ghost" 
                          className="text-primary font-semibold hover:text-primary-foreground hover:bg-primary text-xs"
                          onClick={() => handleSlotSelect(day)}
                        >
                          Book Slot <ChevronRight className="size-3.5 ml-0.5" />
                        </Button>
                      ) : (
                        <span className="text-[10px] text-muted-foreground pr-2 font-mono">CLOSED</span>
                      )}
                    </div>
                  );
                })}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Booking Dialog Modal */}
        <Dialog open={isBookingOpen} onOpenChange={setIsBookingOpen}>
          <DialogContent className="max-w-lg">
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2 text-xl font-extrabold text-primary">
                <CalendarCheck className="size-6" /> Pre-Session Questionnaire
              </DialogTitle>
              <DialogDescription>
                Provide detailed objectives for your 1-on-1 meeting. Your request goes to the Admin for approval.
              </DialogDescription>
            </DialogHeader>
            
            <form onSubmit={handleBookingSubmit} className="space-y-4 py-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label htmlFor="selectedDay" className="text-xs font-semibold text-muted-foreground uppercase">Selected Day</Label>
                  <Input id="selectedDay" value={selectedDay} disabled className="bg-muted text-xs font-bold" />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="bookingTime" className="text-xs font-semibold text-muted-foreground uppercase">Time Slot</Label>
                  <Input 
                    id="bookingTime" 
                    type="time" 
                    value={bookingTime} 
                    onChange={(e) => setBookingTime(e.target.value)} 
                    className="text-xs font-medium" 
                    required 
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="bookingDate" className="text-xs font-semibold text-muted-foreground uppercase">Target Date <span className="text-red-500">*</span></Label>
                <Input 
                  id="bookingDate" 
                  type="date" 
                  value={bookingDate} 
                  onChange={(e) => setBookingDate(e.target.value)} 
                  className="text-xs font-medium" 
                  required 
                />
                <span className="text-[10px] text-amber-600 block">Must select a date corresponding to a <strong>{selectedDay}</strong>.</span>
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="objective" className="text-xs font-semibold text-muted-foreground uppercase">What do you want to achieve? (Objective) <span className="text-red-500">*</span></Label>
                <Textarea 
                  id="objective" 
                  value={objective} 
                  onChange={(e) => setObjective(e.target.value)} 
                  placeholder="e.g. I need to understand import requirements for medical equipment in Nairobi, or find textile buyers." 
                  className="text-xs min-h-[80px]"
                  required 
                />
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="questions" className="text-xs font-semibold text-muted-foreground uppercase">Specific Questions for the Partner (Optional)</Label>
                <Textarea 
                  id="questions" 
                  value={questions} 
                  onChange={(e) => setQuestions(e.target.value)} 
                  placeholder="List specific tariff questions, custom codes, or certifications you want reviewed." 
                  className="text-xs min-h-[60px]"
                />
              </div>

              <DialogFooter className="pt-4 border-t flex justify-end gap-2">
                <Button type="button" variant="outline" size="sm" onClick={() => setIsBookingOpen(false)}>Cancel</Button>
                <Button type="submit" size="sm" disabled={isBooking} className="bg-primary text-white">
                  {isBooking ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Submitting...
                    </>
                  ) : (
                    "Submit Request"
                  )}
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>

        {/* Paywall Intercept Dialog Modal */}
        <Dialog open={isPaywallOpen} onOpenChange={setIsPaywallOpen}>
          <DialogContent className="max-w-sm text-center py-6">
            <DialogHeader className="items-center">
              <div className="h-12 w-12 rounded-full bg-amber-500/10 flex items-center justify-center mb-2">
                <AlertCircle className="size-6 text-amber-500 shrink-0" />
              </div>
              <DialogTitle className="text-lg font-bold">Subscription Required</DialogTitle>
              <DialogDescription className="text-xs">
                You must purchase an active subscription plan to schedule sessions in the Deal Room.
              </DialogDescription>
            </DialogHeader>
            <div className="py-4 text-xs text-muted-foreground leading-relaxed">
              Your account currently has <strong className="text-foreground">0 active Deal Room credits</strong>. explorer, Growth, and Market Entry plans provide matching session slot credits.
            </div>
            <DialogFooter className="flex flex-col gap-2 sm:flex-col sm:space-x-0 w-full">
              <Button 
                onClick={() => {
                  setIsPaywallOpen(false);
                  navigate("/dashboard/payment");
                }}
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs"
              >
                View Pricing Plans
              </Button>
              <Button 
                variant="ghost" 
                onClick={() => setIsPaywallOpen(false)}
                className="w-full text-xs"
              >
                Close
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </Main>
    </>
  );
}
