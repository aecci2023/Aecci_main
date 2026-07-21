import {
  useGetMyPartnerProfileQuery,
  useSetupPartnerProfileMutation,
} from "@/store/api/adminApi";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { toast } from "sonner";
import { Calendar as Loader2, X, Calendar as CalendarLucide } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";

export default function PartnerAvailabilityPage() {
  const {
    data: profileData,
    isLoading: isProfileLoading,
    refetch: refetchProfile,
  } = useGetMyPartnerProfileQuery();
  const partnerProfile = profileData?.data;
  const [setupProfile, { isLoading: isSaving }] =
    useSetupPartnerProfileMutation();

  const [selectedDates, setSelectedDates] = useState<Date[]>([]);
  const [slotTimes, setSlotTimes] = useState<Record<string, { start: string; end: string }>>({});
  const [prevProfile, setPrevProfile] = useState(partnerProfile);

  if (partnerProfile !== prevProfile) {
    setPrevProfile(partnerProfile);
    if (partnerProfile?.availability?.slots) {
      const savedSlots = partnerProfile.availability.slots;
      const dates: Date[] = [];
      const times: Record<string, { start: string; end: string }> = {};

      savedSlots.forEach((slot: any) => {
        // Parse date properly to avoid timezone shifts
        const [year, month, day] = slot.date.split('-');
        dates.push(new Date(parseInt(year), parseInt(month) - 1, parseInt(day)));
        times[slot.date] = { start: slot.start, end: slot.end };
      });
      setSelectedDates(dates);
      setSlotTimes(times);
    } else if (partnerProfile?.availability?.weekly) {
      // Handle legacy weekly data gracefully if it exists
      toast.info("Please set up your availability using specific dates.");
    }
  }

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

  const handleSave = async () => {
    for (const dateKey of Object.keys(slotTimes)) {
      const s = slotTimes[dateKey];
      if (s.start >= s.end) {
        toast.error(`Invalid time range for ${dateKey} — start must be before end`);
        return;
      }
    }

    try {
      const slots = Object.entries(slotTimes).map(([date, times]) => ({
        date,
        start: times.start,
        end: times.end,
      }));

      await setupProfile({
        bio: partnerProfile?.bio,
        signedAgreement: partnerProfile?.signedAgreement,
        availability: { slots },
      }).unwrap();

      toast.success("Availability settings updated successfully!");
      refetchProfile();
    } catch (err) {
      console.error("Save error:", err);
      toast.error("Failed to update availability settings.");
    }
  };

  if (isProfileLoading) {
    return (
      <div className="flex justify-center p-10 w-full">
        <div className="flex flex-col items-center gap-2">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
          <p className="text-muted-foreground animate-pulse text-sm">
            Loading availability...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full w-full overflow-y-auto pe-2">
      <div className="space-y-6 w-full py-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-primary to-emerald-600 bg-clip-text text-transparent">
              Availability Settings
            </h1>
            <p className="text-muted-foreground mt-1">
              Select the days you are available to host sessions and define your active hours.{" "}
              <span className="font-semibold text-foreground ml-1">Please select timings according to IST (Indian Standard Time).</span>
            </p>
          </div>
        </div>

        <Card className="shadow-md border-border">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2">
              <CalendarLucide className="size-5 text-primary" /> Schedule Setup
            </CardTitle>
            <CardDescription>
              Configure your active availability status and times.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex flex-col xl:flex-row gap-6">
              {/* Calendar */}
              <div className="flex flex-col items-center xl:items-start">
                <Calendar
                  mode="multiple"
                  selected={selectedDates}
                  onSelect={handleDateSelect}
                  className="rounded-md border bg-card"
                  disabled={(date) => date < new Date(new Date().setHours(0, 0, 0, 0))}
                />
                <p className="text-xs text-muted-foreground mt-2 text-center xl:text-left xl:max-w-[250px]">
                  Click dates to toggle availability. Past dates are disabled.
                </p>
              </div>

              {/* Slot list */}
              <div className="flex-1 space-y-3 min-w-0">
                {selectedDates.length === 0 ? (
                  <div className="flex flex-col items-center justify-center h-full min-h-[200px] text-center text-muted-foreground border border-dashed rounded-lg p-6">
                    <CalendarLucide className="w-8 h-8 mb-2 opacity-40" />
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
                                className="w-28 h-8 text-sm text-center bg-background"
                              />
                              <span className="text-muted-foreground text-xs">to</span>
                              <div className="flex items-center gap-1.5">
                                <Input
                                  type="time"
                                  value={slot.end}
                                  onChange={(e) => handleTimeChange(key, "end", e.target.value)}
                                  className="w-28 h-8 text-sm text-center bg-background"
                                />
                                <span className="text-muted-foreground text-xs font-semibold bg-muted px-1.5 py-0.5 rounded border">IST</span>
                              </div>
                            </div>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-7 w-7 text-muted-foreground hover:text-destructive shrink-0"
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
          </CardContent>
        </Card>

        <div className="mt-6 pb-6">
          <Button onClick={handleSave} disabled={isSaving} type="submit">
            {isSaving ? "Updating..." : "Update Availability"}
          </Button>
        </div>
      </div>
    </div>
  );
}
