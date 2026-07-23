import { useMemo, useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Calendar as CalendarLucide,
  Clock,
  Lock,
  Save,
  X,
} from "lucide-react";
import { format } from "date-fns";
import { toast } from "sonner";
import {
  useGetMyAvailabilityQuery,
  useSaveMyAvailabilityMutation,
} from "@/store/api/adminApi";

// Deal Room availability: partners open slots starting 15 days from today (IST), no upper cap.
const LEAD_DAYS = 15;
const DURATION_OPTIONS = [30, 45, 60, 90, 120];

type Slot = { start: string; end: string; status: "open" | "booked" };
type DayConfig = {
  windowStart: string;
  windowEnd: string;
  duration: number;
  // slot start-time -> slot (generated or booked)
  slots: Record<string, Slot>;
  // start-times the partner has toggled OFF (won't be saved)
  disabled: Set<string>;
};

const dayKey = (d: Date) => format(d, "yyyy-MM-dd");

/** Generate "HH:mm" start times between window bounds for a given duration. */
function generateSlotTimes(start: string, end: string, duration: number): Array<{ start: string; end: string }> {
  const [sh, sm] = start.split(":").map(Number);
  const [eh, em] = end.split(":").map(Number);
  const startMin = sh * 60 + sm;
  const endMin = eh * 60 + em;
  const out: Array<{ start: string; end: string }> = [];
  for (let t = startMin; t + duration <= endMin; t += duration) {
    const a = t;
    const b = t + duration;
    const fmt = (m: number) =>
      `${String(Math.floor(m / 60)).padStart(2, "0")}:${String(m % 60).padStart(2, "0")}`;
    out.push({ start: fmt(a), end: fmt(b) });
  }
  return out;
}

function defaultDayConfig(): DayConfig {
  return {
    windowStart: "09:00",
    windowEnd: "17:00",
    duration: 60,
    slots: {},
    disabled: new Set(),
  };
}

export function PartnerAvailabilityScheduler() {
  const { data, isLoading } = useGetMyAvailabilityQuery();
  const [saveAvailability, { isLoading: isSaving }] = useSaveMyAvailabilityMutation();

  const [selectedDates, setSelectedDates] = useState<Date[]>([]);
  const [configs, setConfigs] = useState<Record<string, DayConfig>>({});
  const [activeKey, setActiveKey] = useState<string | null>(null);
  const [hydratedFrom, setHydratedFrom] = useState<any>(null);

  // Earliest openable date = today + LEAD_DAYS. No upper cap.
  const minDate = useMemo(() => {
    const d = new Date(new Date().setHours(0, 0, 0, 0));
    d.setDate(d.getDate() + LEAD_DAYS);
    return d;
  }, []);

  // Hydrate from saved slots once loaded (or when the server data changes).
  const serverSlots = data?.data;
  if (serverSlots && serverSlots !== hydratedFrom) {
    setHydratedFrom(serverSlots);
    const nextConfigs: Record<string, DayConfig> = {};
    const dates: Date[] = [];
    (serverSlots as any[]).forEach((s) => {
      const key = s.date as string;
      if (!nextConfigs[key]) {
        const [y, m, d] = key.split("-").map(Number);
        dates.push(new Date(y, m - 1, d));
        nextConfigs[key] = defaultDayConfig();
      }
      nextConfigs[key].slots[s.startTime] = {
        start: s.startTime,
        end: s.endTime,
        status: s.status === "booked" ? "booked" : "open",
      };
    });
    // Derive a sensible window/duration per day from its saved slots.
    Object.values(nextConfigs).forEach((cfg) => {
      const starts = Object.values(cfg.slots).map((sl) => sl.start).sort();
      const ends = Object.values(cfg.slots).map((sl) => sl.end).sort();
      if (starts.length) {
        cfg.windowStart = starts[0];
        cfg.windowEnd = ends[ends.length - 1];
        const first = Object.values(cfg.slots)[0];
        const [sh, sm] = first.start.split(":").map(Number);
        const [eh, em] = first.end.split(":").map(Number);
        const dur = eh * 60 + em - (sh * 60 + sm);
        if (DURATION_OPTIONS.includes(dur)) cfg.duration = dur;
      }
    });
    setConfigs(nextConfigs);
    setSelectedDates(dates);
    if (dates.length && !activeKey) setActiveKey(dayKey(dates[0]));
  }

  const handleDateSelect = (dates: Date[] | undefined) => {
    const next = dates || [];
    setSelectedDates(next);
    setConfigs((prev) => {
      const updated = { ...prev };
      // Add configs for new dates
      next.forEach((d) => {
        const key = dayKey(d);
        if (!updated[key]) updated[key] = defaultDayConfig();
      });
      // Drop configs for removed dates — but keep any with booked slots.
      Object.keys(updated).forEach((key) => {
        const stillSelected = next.some((d) => dayKey(d) === key);
        const hasBooked = Object.values(updated[key].slots).some((s) => s.status === "booked");
        if (!stillSelected && !hasBooked) delete updated[key];
      });
      return updated;
    });
    if (next.length) {
      const lastKey = dayKey(next[next.length - 1]);
      setActiveKey(lastKey);
    } else {
      setActiveKey(null);
    }
  };

  const updateConfig = (key: string, patch: Partial<DayConfig>) => {
    setConfigs((prev) => ({ ...prev, [key]: { ...prev[key], ...patch } }));
  };

  const toggleSlot = (key: string, start: string) => {
    setConfigs((prev) => {
      const cfg = prev[key];
      const disabled = new Set(cfg.disabled);
      if (disabled.has(start)) disabled.delete(start);
      else disabled.add(start);
      return { ...prev, [key]: { ...cfg, disabled } };
    });
  };

  const removeDate = (key: string) => {
    const cfg = configs[key];
    const hasBooked = cfg && Object.values(cfg.slots).some((s) => s.status === "booked");
    if (hasBooked) {
      toast.error("This day has booked slots and can't be removed.");
      return;
    }
    setSelectedDates((prev) => prev.filter((d) => dayKey(d) !== key));
    setConfigs((prev) => {
      const next = { ...prev };
      delete next[key];
      return next;
    });
    if (activeKey === key) setActiveKey(null);
  };

  // Build the flat slot list to persist (open slots only; booked are preserved server-side).
  const buildPayload = () => {
    const slots: Array<{ date: string; startTime: string; endTime: string; status: string }> = [];
    Object.entries(configs).forEach(([date, cfg]) => {
      const generated = generateSlotTimes(cfg.windowStart, cfg.windowEnd, cfg.duration);
      generated.forEach((g) => {
        // A generated slot is saved unless the partner toggled it off, or it's already booked.
        if (cfg.disabled.has(g.start)) return;
        const existing = cfg.slots[g.start];
        if (existing?.status === "booked") return; // preserved server-side
        slots.push({ date, startTime: g.start, endTime: g.end, status: "open" });
      });
    });
    return slots;
  };

  const handleSave = async () => {
    const slots = buildPayload();
    if (slots.length === 0) {
      toast.error("Add at least one open slot before saving.");
      return;
    }
    try {
      await saveAvailability({ slots }).unwrap();
      toast.success("Availability saved. Your profile is now complete.");
    } catch (err: any) {
      toast.error(err?.data?.message || "Failed to save availability.");
    }
  };

  const activeConfig = activeKey ? configs[activeKey] : null;
  const activeGenerated = activeConfig
    ? generateSlotTimes(activeConfig.windowStart, activeConfig.windowEnd, activeConfig.duration)
    : [];

  const totalOpenSlots = useMemo(() => buildPayload().length, [configs]);

  // Booked slots come straight from the server (with bookedBy), so they render
  // reliably regardless of what's selected on the calendar or the slot-length grid.
  const bookedSlots = useMemo(() => {
    return ((serverSlots as any[]) || [])
      .filter((s) => s.status === "booked")
      .sort((a, b) => new Date(a.startsAt).getTime() - new Date(b.startsAt).getTime());
  }, [serverSlots]);

  if (isLoading) {
    return (
      <Card className="p-6 rounded-2xl border border-slate-100 shadow-sm">
        <div className="flex flex-col lg:flex-row gap-6">
          <Skeleton className="h-72 w-full lg:w-80 rounded-xl" />
          <div className="flex-1 space-y-3">
            <Skeleton className="h-8 w-48" />
            <Skeleton className="h-24 w-full" />
            <Skeleton className="h-40 w-full" />
          </div>
        </div>
      </Card>
    );
  }

  return (
    <Card className="rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
      {/* Header */}
      <div className="px-6 pt-6 pb-4 border-b border-slate-100 bg-slate-50/60">
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <div>
            <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <CalendarLucide className="w-5 h-5 text-[#D4A64A]" />
              My Availability
            </h3>
            <p className="text-xs text-slate-500 mt-1 max-w-xl">
              Open time slots (from {LEAD_DAYS} days ahead onward) so clients can book you in
              the Deal Room. All times are in{" "}
              <span className="font-semibold text-slate-700">IST (Indian Standard Time)</span>.
              Saving your slots completes your profile.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="text-right">
              <p className="text-2xl font-extrabold text-slate-900 leading-none">{totalOpenSlots}</p>
              <p className="text-[10px] uppercase tracking-wide font-bold text-slate-400">Open slots</p>
            </div>
            <Button
              onClick={handleSave}
              disabled={isSaving}
              className="bg-[#D4A64A] hover:bg-[#C5973A] text-white font-bold gap-2 rounded-xl"
            >
              <Save className="w-4 h-4" />
              {isSaving ? "Saving…" : "Save Availability"}
            </Button>
          </div>
        </div>
      </div>

      {/* Booked slots (read-only, straight from server) */}
      {bookedSlots.length > 0 && (
        <div className="px-6 pt-5 pb-1">
          <p className="text-sm font-bold text-slate-800 flex items-center gap-2 mb-3">
            <Lock className="w-4 h-4 text-amber-500" />
            Booked Sessions
            <span className="text-[10px] font-bold uppercase tracking-wide text-amber-600 bg-amber-50 border border-amber-200 rounded-full px-2 py-0.5">
              {bookedSlots.length}
            </span>
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3">
            {bookedSlots.map((s) => (
              <div
                key={s.id}
                className="flex items-center gap-3 rounded-xl border border-amber-200 bg-amber-50/60 p-3"
              >
                <div className="w-10 h-10 rounded-full bg-amber-100 border border-amber-200 flex items-center justify-center shrink-0">
                  <Lock className="w-4 h-4 text-amber-600" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-bold text-slate-800 truncate">
                    {s.bookedBy?.fullName || "Client"}
                    {s.bookedBy?.country ? (
                      <span className="font-medium text-slate-400"> · {s.bookedBy.country}</span>
                    ) : null}
                  </p>
                  <p className="text-[11px] text-slate-500 font-medium">
                    {format(new Date(`${s.date}T00:00:00`), "EEE, MMM d, yyyy")}
                  </p>
                  <p className="text-[11px] text-amber-700 font-semibold">
                    {s.startTime}–{s.endTime} IST
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="h-px bg-slate-100 mt-5" />
        </div>
      )}

      <div className="p-6 flex flex-col lg:flex-row gap-6">
        {/* Calendar */}
        <div className="flex flex-col items-center lg:items-start shrink-0">
          <Calendar
            mode="multiple"
            selected={selectedDates}
            onSelect={handleDateSelect}
            defaultMonth={minDate}
            startMonth={minDate}
            className="rounded-xl border bg-card"
            disabled={(date) => date < minDate}
          />
          <p className="text-xs text-slate-400 mt-2 max-w-[16rem] text-center lg:text-left">
            Slots open from{" "}
            <span className="font-semibold text-slate-600">
              {format(minDate, "MMM d, yyyy")}
            </span>{" "}
            onward (15 days ahead). Earlier dates are locked.
          </p>
        </div>

        {/* Right: selected days + slot editor */}
        <div className="flex-1 min-w-0 space-y-4">
          {selectedDates.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full min-h-[16rem] text-center text-slate-400 border border-dashed rounded-xl p-6">
              <CalendarLucide className="w-8 h-8 mb-2 opacity-40" />
              <p className="text-sm font-medium">No days selected yet.</p>
              <p className="text-xs mt-1">Click dates on the calendar to open availability.</p>
            </div>
          ) : (
            <>
              {/* Day chips */}
              <div className="flex flex-wrap gap-2">
                {[...selectedDates]
                  .sort((a, b) => a.getTime() - b.getTime())
                  .map((d) => {
                    const key = dayKey(d);
                    const cfg = configs[key];
                    const hasBooked = cfg && Object.values(cfg.slots).some((s) => s.status === "booked");
                    const isActive = key === activeKey;
                    return (
                      <button
                        key={key}
                        onClick={() => setActiveKey(key)}
                        className={`group inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-semibold transition-all ${
                          isActive
                            ? "bg-[#07192F] text-white border-[#07192F]"
                            : "bg-white text-slate-600 border-slate-200 hover:border-[#D4A64A]/60"
                        }`}
                      >
                        {format(d, "EEE, MMM d")}
                        {hasBooked && <Lock className="w-3 h-3 text-amber-400" />}
                        <span
                          role="button"
                          tabIndex={0}
                          onClick={(e) => {
                            e.stopPropagation();
                            removeDate(key);
                          }}
                          className="opacity-50 hover:opacity-100"
                        >
                          <X className="w-3 h-3" />
                        </span>
                      </button>
                    );
                  })}
              </div>

              {/* Active day editor */}
              {activeConfig && activeKey && (
                <div className="border border-slate-100 rounded-xl p-4 space-y-4 bg-slate-50/40">
                  <div className="flex items-center justify-between flex-wrap gap-3">
                    <p className="text-sm font-bold text-slate-800 flex items-center gap-2">
                      <Clock className="w-4 h-4 text-[#D4A64A]" />
                      {format(new Date(activeKey), "EEEE, MMMM d, yyyy")}
                    </p>
                  </div>

                  {/* Window + duration controls */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    <div className="space-y-1">
                      <label className="text-[11px] font-semibold text-slate-500">From (IST)</label>
                      <Input
                        type="time"
                        value={activeConfig.windowStart}
                        onChange={(e) => updateConfig(activeKey, { windowStart: e.target.value })}
                        className="h-9 bg-white"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[11px] font-semibold text-slate-500">To (IST)</label>
                      <Input
                        type="time"
                        value={activeConfig.windowEnd}
                        onChange={(e) => updateConfig(activeKey, { windowEnd: e.target.value })}
                        className="h-9 bg-white"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[11px] font-semibold text-slate-500">Slot length</label>
                      <Select
                        value={String(activeConfig.duration)}
                        onValueChange={(v) => updateConfig(activeKey, { duration: Number(v) })}
                      >
                        <SelectTrigger className="h-9 bg-white">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {DURATION_OPTIONS.map((d) => (
                            <SelectItem key={d} value={String(d)}>
                              {d} min
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Generated slots */}
                  {activeGenerated.length === 0 ? (
                    <p className="text-xs text-red-500">
                      The end time must be after the start time by at least one slot length.
                    </p>
                  ) : (
                    <div className="space-y-2">
                      <p className="text-[11px] font-semibold text-slate-500">
                        Tap a slot to toggle it. Booked slots are locked.
                      </p>
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                        {activeGenerated.map((g) => {
                          const booked = activeConfig.slots[g.start]?.status === "booked";
                          const off = activeConfig.disabled.has(g.start);
                          return (
                            <button
                              key={g.start}
                              type="button"
                              disabled={booked}
                              onClick={() => toggleSlot(activeKey, g.start)}
                              className={`rounded-lg border px-2 py-2 text-xs font-semibold transition-all ${
                                booked
                                  ? "bg-amber-50 border-amber-200 text-amber-700 cursor-not-allowed"
                                  : off
                                    ? "bg-white border-slate-200 text-slate-300 line-through"
                                    : "bg-emerald-50 border-emerald-200 text-emerald-700 hover:border-emerald-400"
                              }`}
                            >
                              <span className="flex items-center justify-center gap-1">
                                {booked && <Lock className="w-3 h-3" />}
                                {g.start}–{g.end}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </Card>
  );
}
