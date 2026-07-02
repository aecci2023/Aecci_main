import {
  useGetPartnerProfileQuery,
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
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useState, useEffect } from "react";
import { toast } from "sonner";
import { Calendar, Clock, Save, Loader2 } from "lucide-react";

const DAYS_OF_WEEK = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

interface ScheduleDay {
  enabled: boolean;
  start: string;
  end: string;
}

export default function PartnerAvailabilityPage() {
  const {
    data: profileData,
    isLoading: isProfileLoading,
    refetch: refetchProfile,
  } = useGetPartnerProfileQuery();
  const partnerProfile = profileData?.data;
  const [setupProfile, { isLoading: isSaving }] =
    useSetupPartnerProfileMutation();

  const [weeklySchedule, setWeeklySchedule] = useState<
    Record<string, ScheduleDay>
  >({
    Monday: { enabled: true, start: "09:00", end: "17:00" },
    Tuesday: { enabled: true, start: "09:00", end: "17:00" },
    Wednesday: { enabled: true, start: "09:00", end: "17:00" },
    Thursday: { enabled: true, start: "09:00", end: "17:00" },
    Friday: { enabled: true, start: "09:00", end: "17:00" },
    Saturday: { enabled: false, start: "09:00", end: "17:00" },
    Sunday: { enabled: false, start: "09:00", end: "17:00" },
  });

  useEffect(() => {
    if (partnerProfile?.availability?.weekly) {
      // Merge saved settings with default weeklySchedule keys to ensure type safety
      const savedWeekly = partnerProfile.availability.weekly;
      const merged: Record<string, ScheduleDay> = {};
      DAYS_OF_WEEK.forEach((day) => {
        merged[day] = savedWeekly[day] || {
          enabled: false,
          start: "09:00",
          end: "17:00",
        };
      });
      setWeeklySchedule(merged);
    }
  }, [partnerProfile]);

  const handleScheduleToggle = (day: string, checked: boolean) => {
    setWeeklySchedule((prev) => ({
      ...prev,
      [day]: { ...prev[day], enabled: checked },
    }));
  };

  const handleTimeChange = (
    day: string,
    type: "start" | "end",
    value: string,
  ) => {
    setWeeklySchedule((prev) => ({
      ...prev,
      [day]: { ...prev[day], [type]: value },
    }));
  };

  const handleSave = async () => {
    // Basic validation
    for (const day of DAYS_OF_WEEK) {
      const sched = weeklySchedule[day];
      if (sched.enabled && sched.start >= sched.end) {
        toast.error(
          `Invalid times for ${day}. Start time must be before end time.`,
        );
        return;
      }
    }

    try {
      await setupProfile({
        bio: partnerProfile?.bio,
        signedAgreement: partnerProfile?.signedAgreement,
        availability: { weekly: weeklySchedule },
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
      <div className="space-y-6 max-w-4xl mx-auto py-6 w-full">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-primary to-emerald-600 bg-clip-text text-transparent">
            Availability Settings
          </h1>
          <p className="text-muted-foreground mt-1">
            Define your weekly working hours and time slots for hosting Live
            Deal Room sessions.
          </p>
        </div>
        <Button
          onClick={handleSave}
          disabled={isSaving}
          className="w-full md:w-auto self-start"
        >
          {isSaving ? (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <Save className="mr-2 h-4 w-4" />
          )}
          Save Changes
        </Button>
      </div>

      <Card className="shadow-md border-border">
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2">
            <Calendar className="size-5 text-primary" /> Weekly Schedule Setup
          </CardTitle>
          <CardDescription>
            Configure your active availability status and times for each day of
            the week.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-3">
            {DAYS_OF_WEEK.map((day) => {
              const sched = weeklySchedule[day];
              return (
                <div
                  key={day}
                  className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-muted/20 border rounded-lg gap-4 transition-colors hover:bg-muted/30"
                >
                  <div className="flex items-center gap-3">
                    <Checkbox
                      id={`day-${day}`}
                      checked={sched.enabled}
                      onCheckedChange={(checked) =>
                        handleScheduleToggle(day, checked === true)
                      }
                    />
                    <Label
                      htmlFor={`day-${day}`}
                      className="font-semibold text-base w-24 cursor-pointer"
                    >
                      {day}
                    </Label>
                  </div>

                  {sched.enabled ? (
                    <div className="flex items-center gap-3 text-sm">
                      <div className="flex items-center gap-2">
                        <Clock className="size-4 text-muted-foreground" />
                        <span>From</span>
                      </div>
                      <Input
                        type="time"
                        value={sched.start}
                        onChange={(e) =>
                          handleTimeChange(day, "start", e.target.value)
                        }
                        className="w-28 text-center bg-background"
                      />
                      <span>to</span>
                      <Input
                        type="time"
                        value={sched.end}
                        onChange={(e) =>
                          handleTimeChange(day, "end", e.target.value)
                        }
                        className="w-28 text-center bg-background"
                      />
                    </div>
                  ) : (
                    <span className="text-sm text-muted-foreground italic sm:pr-8">
                      Unavailable
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
      </div>
    </div>
  );
}
