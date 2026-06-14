"use client";
import { Activity, Map as MapIcon, MessageCircle } from "lucide-react";
import { Area, AreaChart, CartesianGrid } from "recharts";
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export function Features9() {
  return (
    <section className="px-4 py-16 md:py-24 bg-card/15 border-b border-border">
      <div className="mx-auto max-w-5xl border border-border rounded-3xl overflow-hidden bg-card/40 backdrop-blur-md grid md:grid-cols-2">
        <div className="text-left flex flex-col justify-between">
          <div className="p-8 sm:p-12">
            <span className="text-primary flex items-center gap-2 text-xs font-bold uppercase tracking-widest">
              <MapIcon className="size-4 text-primary" />
              Bilateral Trade Tracking
            </span>

            <p className="mt-6 text-xl font-heading font-black text-foreground">
              Advanced Cargo Logistics. Instantly track certified shipments.
            </p>
          </div>

          <div aria-hidden className="relative p-6 pt-0">
            <div className="absolute inset-0 z-10 m-auto size-fit">
              <div className="rounded-xl bg-card border border-border relative flex size-fit w-fit items-center gap-2 px-3 py-1.5 text-xs font-bold shadow-lg shadow-black/10">
                <span className="text-[10px] bg-primary/10 border border-primary/20 text-primary px-1.5 py-0.5 rounded font-mono">
                  IN
                </span>{" "}
                Attestation verification route: Mumbai -&gt; Dubai
              </div>
            </div>

            <div className="relative overflow-hidden border border-border bg-slate-950/20 rounded-2xl p-6">
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60 pointer-events-none" />
              <Map />
            </div>
          </div>
        </div>

        <div className="overflow-hidden border-t border-border bg-muted/20 p-8 sm:p-12 md:border-0 md:border-l text-left flex flex-col justify-between">
          <div className="relative z-10">
            <span className="text-primary flex items-center gap-2 text-xs font-bold uppercase tracking-widest">
              <MessageCircle className="size-4 text-primary" />
              Exporters Desk Support
            </span>

            <p className="my-6 text-xl font-heading font-black text-foreground">
              Direct assistance for attestation and custom regulations.
            </p>
          </div>

          <div aria-hidden className="flex flex-col gap-6 mt-8">
            <div className="text-left">
              <div className="flex items-center gap-2">
                <span className="flex justify-center items-center size-5 rounded-full border border-border bg-card">
                  <span className="size-2 rounded-full bg-primary" />
                </span>
                <span className="text-muted-foreground text-[10px] uppercase font-bold tracking-wider">
                  Member Exporter
                </span>
              </div>
              <div className="rounded-2xl bg-card border border-border mt-1.5 w-4/5 p-4 text-xs text-foreground shadow-sm">
                Hello, we need an urgent attestation validation for our customs
                clearance at Nhava Sheva port.
              </div>
            </div>

            <div className="text-right">
              <div className="rounded-2xl mb-1 ml-auto w-4/5 bg-primary p-4 text-xs text-primary-foreground shadow-md text-left">
                Our digital e-platform verification is complete. The Certificate
                of Origin has been cryptographically signed and routed.
              </div>
              <span className="text-muted-foreground block text-[10px] uppercase font-bold tracking-wider mr-2">
                Chamber Agent
              </span>
            </div>
          </div>
        </div>

        <div className="col-span-full border-y border-border p-8 bg-card/60">
          <p className="text-center text-3xl font-heading font-black text-foreground md:text-5xl">
            99.99% E-Platform Uptime
          </p>
        </div>

        <div className="relative col-span-full text-left">
          <div className="absolute z-10 max-w-lg px-8 pr-12 pt-8 md:px-12 md:pt-12">
            <span className="text-primary flex items-center gap-2 text-xs font-bold uppercase tracking-widest">
              <Activity className="size-4" />
              Activity metrics
            </span>

            <p className="my-6 text-xl font-heading font-black text-foreground">
              Real-time processing logs.{" "}
              <span className="text-muted-foreground font-normal">
                Monitor application volumes and attestation speed.
              </span>
            </p>
          </div>
          <MonitoringChart />
        </div>
      </div>
    </section>
  );
}

const Map = () => {
  const viewBox = `0 0 120 60`;
  const points = [
    { x: 20, y: 15 },
    { x: 25, y: 18 },
    { x: 22, y: 22 },
    { x: 30, y: 25 },
    { x: 35, y: 22 },
    { x: 32, y: 30 },
    { x: 40, y: 28 },
    { x: 45, y: 24 },
    { x: 42, y: 35 },
    { x: 50, y: 32 },
    { x: 55, y: 28 },
    { x: 52, y: 38 },
    { x: 60, y: 35 },
    { x: 65, y: 32 },
    { x: 62, y: 40 },
    { x: 70, y: 38 },
    { x: 75, y: 35 },
    { x: 72, y: 45 },
    { x: 80, y: 42 },
    { x: 85, y: 38 },
    { x: 82, y: 48 },
  ];
  return (
    <svg viewBox={viewBox} className="w-full h-auto text-primary opacity-60">
      <path
        d="M 20 15 Q 50 35 85 38"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeDasharray="4 4"
      />
      {points.map((point, index) => (
        <circle
          key={index}
          cx={point.x}
          cy={point.y}
          r={index % 3 === 0 ? 1.2 : 0.8}
          className={
            index % 3 === 0 ? "fill-primary" : "fill-muted-foreground/40"
          }
        />
      ))}
    </svg>
  );
};

const chartConfig = {
  desktop: {
    label: "Approved e-COs",
    color: "var(--color-primary)",
  },
  mobile: {
    label: "Requests Filed",
    color: "var(--color-muted-foreground)",
  },
} satisfies ChartConfig;

const chartData = [
  { month: "Jan", desktop: 120, mobile: 180 },
  { month: "Feb", desktop: 180, mobile: 240 },
  { month: "Mar", desktop: 250, mobile: 310 },
  { month: "Apr", desktop: 380, mobile: 420 },
  { month: "May", desktop: 460, mobile: 520 },
  { month: "Jun", desktop: 580, mobile: 640 },
];

const MonitoringChart = () => {
  return (
    <ChartContainer
      className="h-96 w-full aspect-auto pt-48"
      config={chartConfig}
    >
      <AreaChart
        accessibilityLayer
        data={chartData}
        margin={{
          left: 0,
          right: 0,
          top: 100,
          bottom: 0,
        }}
      >
        <defs>
          <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
            <stop
              offset="0%"
              stopColor="var(--color-primary)"
              stopOpacity={0.4}
            />
            <stop
              offset="100%"
              stopColor="var(--color-primary)"
              stopOpacity={0.0}
            />
          </linearGradient>
          <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
            <stop
              offset="0%"
              stopColor="var(--color-muted-foreground)"
              stopOpacity={0.2}
            />
            <stop
              offset="100%"
              stopColor="var(--color-muted-foreground)"
              stopOpacity={0.0}
            />
          </linearGradient>
        </defs>
        <CartesianGrid vertical={false} strokeDasharray="3 3" opacity={0.1} />
        <ChartTooltip
          active
          cursor={false}
          content={<ChartTooltipContent className="bg-card border-border" />}
        />
        <Area
          strokeWidth={2}
          dataKey="mobile"
          type="monotone"
          fill="url(#fillMobile)"
          stroke="var(--color-muted-foreground)"
          stackId="a"
        />
        <Area
          strokeWidth={2.5}
          dataKey="desktop"
          type="monotone"
          fill="url(#fillDesktop)"
          stroke="var(--color-primary)"
          stackId="b"
        />
      </AreaChart>
    </ChartContainer>
  );
};
