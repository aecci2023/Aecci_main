import { Main } from "@/components/layout/main";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Users,
  Building2,
  ShieldAlert,
  Activity,
  ArrowRight,
  Globe,
  FileText,
  Video,
  CreditCard,
  User,
  Loader2,
  CheckCircle2,
  Calendar,
  Clock,
  TrendingUp,
} from "lucide-react";
import { Link } from "react-router-dom";
import {
  useGetAdminDashboardStatsQuery,
  useUpdateKycStatusMutation,
} from "@/store/api/adminApi";
import { formatDistanceToNow, format } from "date-fns";
import { toast } from "sonner";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  BarChart,
  Bar,
  Cell,
} from "recharts";

const PLAN_COLORS = ["#6366f1", "#10b981", "#f59e0b", "#ef4444"];

const registrationChartConfig: ChartConfig = {
  registrations: { label: "Registrations", color: "hsl(var(--primary))" },
};

const planChartConfig: ChartConfig = {
  count: { label: "Users", color: "hsl(var(--primary))" },
};

export default function AdminDashboard() {
  const { data, isLoading, refetch } = useGetAdminDashboardStatsQuery();
  const [updateKyc, { isLoading: isUpdating }] = useUpdateKycStatusMutation();

  const stats = data?.data?.stats;
  const verifications: any[] = data?.data?.recentVerifications || [];
  const reports: any[] = data?.data?.recentReports || [];
  const upcomingSessions: any[] = data?.data?.upcomingSessions || [];
  const registrationTrend: any[] = data?.data?.registrationTrend || [];
  const planDistribution: any[] = data?.data?.planDistribution || [];
  const recentSubscriptions: any[] = data?.data?.recentSubscriptions || [];

  const handleApprove = async (id: string) => {
    try {
      await updateKyc({ id, kycStatus: "approved" }).unwrap();
      toast.success("KYC approved");
      refetch();
    } catch {
      toast.error("Failed to approve");
    }
  };

  if (isLoading) {
    return (
      <Main fluid className="flex h-full items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </Main>
    );
  }

  const statRows = [
    [
      {
        label: "Total Users",
        value: stats?.totalUsers ?? 0,
        icon: Users,
        color: "text-blue-500",
        bg: "bg-blue-500/10",
      },
      {
        label: "Business Accounts",
        value: stats?.businessUsers ?? 0,
        icon: Building2,
        color: "text-primary",
        bg: "bg-primary/10",
      },
      {
        label: "Individual Accounts",
        value: stats?.individualUsers ?? 0,
        icon: User,
        color: "text-emerald-500",
        bg: "bg-emerald-500/10",
      },
      {
        label: "Global Partners",
        value: stats?.partners ?? 0,
        icon: Globe,
        color: "text-teal-500",
        bg: "bg-teal-500/10",
      },
    ],
    [
      {
        label: "Active Sessions",
        value: stats?.activeSessions ?? 0,
        icon: Video,
        color: "text-purple-500",
        bg: "bg-purple-500/10",
      },
      {
        label: "Subscriptions",
        value: stats?.activeSubscriptions ?? 0,
        icon: CreditCard,
        color: "text-amber-500",
        bg: "bg-amber-500/10",
      },
      {
        label: "Completed Sessions",
        value: stats?.completedSessions ?? 0,
        icon: CheckCircle2,
        color: "text-green-600",
        bg: "bg-green-500/10",
      },
      {
        label: "Pending Verifications",
        value: stats?.pendingVerifications ?? 0,
        icon: ShieldAlert,
        color:
          (stats?.pendingVerifications ?? 0) > 0
            ? "text-red-500"
            : "text-muted-foreground",
        bg:
          (stats?.pendingVerifications ?? 0) > 0
            ? "bg-red-500/10"
            : "bg-muted/30",
        highlight: (stats?.pendingVerifications ?? 0) > 0,
      },
    ],
  ];

  const docSummary = (u: any) => {
    const docs = [];
    if (u.iecDocument) docs.push("IEC");
    if (u.gstDocument) docs.push("GST");
    if (u.panDocument) docs.push("PAN");
    return docs.length > 0 ? docs.join(" & ") : "Documents";
  };

  return (
    <Main fluid className="space-y-6 pb-10">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold tracking-tight bg-linear-to-r from-primary via-emerald-600 to-teal-500 bg-clip-text text-transparent">
            System Overview
          </h1>
          <p className="text-muted-foreground text-sm mt-1">
            Monitor platform health, verify accounts, and manage active deal
            rooms.
          </p>
        </div>
        <Badge
          variant="outline"
          className="px-3 py-1 flex items-center gap-1.5 bg-primary/10 text-primary border-primary/20 self-start"
        >
          <Activity className="size-3.5 animate-pulse" /> All Systems
          Operational
        </Badge>
      </div>

      {/* Stats — 2 rows of 4 */}
      <div className="space-y-3">
        {statRows.map((row, rowIdx) => (
          <div key={rowIdx} className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {row.map(({ label, value, icon: Icon, color, bg, highlight }) => (
              <Card
                key={label}
                className={`hover:shadow-md transition-shadow ${highlight ? "border-red-200 dark:border-red-800/40" : ""}`}
              >
                <CardContent className="p-4 flex items-center gap-3">
                  <div
                    className={`h-10 w-10 rounded-lg ${bg} flex items-center justify-center shrink-0`}
                  >
                    <Icon className={`size-5 ${color}`} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-muted-foreground leading-tight truncate">
                      {label}
                    </p>
                    <p
                      className={`text-2xl font-bold leading-tight ${highlight ? "text-red-500" : ""}`}
                    >
                      {value}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Registration Trend */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <TrendingUp className="size-4 text-primary" /> Registration Trend
            </CardTitle>
            <CardDescription>
              New user registrations over the last 7 days
            </CardDescription>
          </CardHeader>
          <CardContent>
            {registrationTrend.length > 0 ? (
              <ChartContainer
                config={registrationChartConfig}
                className="h-50 w-full"
              >
                <AreaChart
                  data={registrationTrend}
                  margin={{ top: 4, right: 4, left: -20, bottom: 0 }}
                >
                  <defs>
                    <linearGradient
                      id="regGradient"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop
                        offset="5%"
                        stopColor="hsl(var(--primary))"
                        stopOpacity={0.3}
                      />
                      <stop
                        offset="95%"
                        stopColor="hsl(var(--primary))"
                        stopOpacity={0}
                      />
                    </linearGradient>
                  </defs>
                  <CartesianGrid
                    strokeDasharray="3 3"
                    stroke="hsl(var(--border))"
                  />
                  <XAxis
                    dataKey="date"
                    tick={{ fontSize: 11 }}
                    tickLine={false}
                    axisLine={false}
                  />
                  <YAxis
                    tick={{ fontSize: 11 }}
                    tickLine={false}
                    axisLine={false}
                    allowDecimals={false}
                  />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Area
                    type="monotone"
                    dataKey="registrations"
                    stroke="hsl(var(--primary))"
                    strokeWidth={2}
                    fill="url(#regGradient)"
                    dot={{ r: 3, fill: "hsl(var(--primary))" }}
                  />
                </AreaChart>
              </ChartContainer>
            ) : (
              <div className="h-50 flex items-center justify-center text-sm text-muted-foreground">
                No registration data yet
              </div>
            )}
          </CardContent>
        </Card>

        {/* Plan Distribution */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <CreditCard className="size-4 text-amber-500" /> Plan Distribution
            </CardTitle>
            <CardDescription>
              Active subscription plans breakdown
            </CardDescription>
          </CardHeader>
          <CardContent>
            {planDistribution.length > 0 ? (
              <>
                <ChartContainer
                  config={planChartConfig}
                  className="h-35 w-full"
                >
                  <BarChart
                    data={planDistribution}
                    margin={{ top: 4, right: 4, left: -20, bottom: 0 }}
                  >
                    <CartesianGrid
                      strokeDasharray="3 3"
                      stroke="hsl(var(--border))"
                    />
                    <XAxis
                      dataKey="plan"
                      tick={{ fontSize: 10 }}
                      tickLine={false}
                      axisLine={false}
                    />
                    <YAxis
                      tick={{ fontSize: 11 }}
                      tickLine={false}
                      axisLine={false}
                      allowDecimals={false}
                    />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Bar dataKey="count" radius={[4, 4, 0, 0]}>
                      {planDistribution.map((_entry, index) => (
                        <Cell
                          key={index}
                          fill={PLAN_COLORS[index % PLAN_COLORS.length]}
                        />
                      ))}
                    </Bar>
                  </BarChart>
                </ChartContainer>
                <div className="flex flex-wrap gap-x-3 gap-y-1 mt-3">
                  {planDistribution.map((p, i) => (
                    <div
                      key={p.plan}
                      className="flex items-center gap-1 text-xs text-muted-foreground"
                    >
                      <span
                        className="h-2 w-2 rounded-full inline-block shrink-0"
                        style={{
                          background: PLAN_COLORS[i % PLAN_COLORS.length],
                        }}
                      />
                      {p.plan}:{" "}
                      <span className="font-semibold text-foreground ml-0.5">
                        {p.count}
                      </span>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <div className="h-40 flex flex-col items-center justify-center text-sm text-muted-foreground gap-2">
                <CreditCard className="size-6 opacity-30" />
                <p>No active subscriptions</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Upcoming Sessions + Recent Subscriptions */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2 text-base">
                <Calendar className="size-4 text-purple-500" /> Upcoming
                Sessions
              </CardTitle>
              <CardDescription>
                Next scheduled Deal Room meetings
              </CardDescription>
            </div>
            <Button asChild variant="outline" size="sm">
              <Link to="/admin/sessions" className="flex items-center gap-1">
                View All <ArrowRight className="size-4" />
              </Link>
            </Button>
          </CardHeader>
          <CardContent className="space-y-3">
            {upcomingSessions.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-8 text-muted-foreground text-sm gap-2">
                <Calendar className="h-7 w-7 opacity-30" />
                <p>No upcoming sessions scheduled</p>
              </div>
            ) : (
              upcomingSessions.map((s: any) => (
                <div
                  key={s.id}
                  className="flex items-center justify-between p-3 bg-muted/20 border border-border rounded-lg hover:bg-muted/40 transition-colors"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="h-9 w-9 rounded-lg bg-purple-500/10 flex items-center justify-center shrink-0">
                      <Video className="size-4 text-purple-500" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-medium truncate">{s.title}</p>
                      <p className="text-xs text-muted-foreground truncate">
                        {s.client?.companyName ||
                          s.client?.fullName ||
                          "No client"}{" "}
                        • {s.partner?.fullName || "Unassigned partner"}
                      </p>
                    </div>
                  </div>
                  <div className="text-right shrink-0 ml-3">
                    <p className="text-xs font-medium flex items-center gap-1 justify-end text-muted-foreground">
                      <Clock className="size-3" />
                      {format(new Date(s.date), "d MMM, h:mm a")}
                    </p>
                    <Badge
                      variant="outline"
                      className="text-[10px] mt-0.5 capitalize"
                    >
                      {s.status.replace(/_/g, " ")}
                    </Badge>
                  </div>
                </div>
              ))
            )}
          </CardContent>
        </Card>

        {/* Recent Subscriptions */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <CreditCard className="size-4 text-amber-500" /> Recent
              Subscriptions
            </CardTitle>
            <CardDescription>Latest plan purchases</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {recentSubscriptions.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-8 text-muted-foreground text-sm gap-2">
                <CreditCard className="h-6 w-6 opacity-30" />
                <p>No subscriptions yet</p>
              </div>
            ) : (
              recentSubscriptions.map((sub: any) => (
                <div
                  key={sub.id}
                  className="flex items-center gap-3 p-2.5 rounded-lg bg-muted/20 border border-border"
                >
                  <div className="h-8 w-8 rounded-full bg-amber-500/10 flex items-center justify-center shrink-0">
                    <User className="size-4 text-amber-500" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-medium truncate">
                      {sub.user?.companyName ||
                        sub.user?.fullName ||
                        sub.user?.email}
                    </p>
                    <p className="text-[10px] text-muted-foreground capitalize">
                      {sub.planName?.replace(/_/g, " ")} • ₹
                      {sub.amount?.toLocaleString("en-IN")}
                    </p>
                  </div>
                  <Badge
                    variant="outline"
                    className={`text-[10px] shrink-0 ${
                      sub.paymentStatus === "paid"
                        ? "text-emerald-500 border-emerald-500/30 bg-emerald-500/10"
                        : "text-amber-500 border-amber-500/30 bg-amber-500/10"
                    }`}
                  >
                    {sub.paymentStatus}
                  </Badge>
                </div>
              ))
            )}
            <Button asChild variant="outline" size="sm" className="w-full mt-1">
              <Link to="/admin/invoices">View All Invoices</Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Pending KYC + Recent Reports */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2 border-amber-500/20">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2 text-base">
                <ShieldAlert className="size-4 text-amber-500" /> Pending KYC
                Approvals
              </CardTitle>
              <CardDescription>
                Business entities waiting for compliance verification
              </CardDescription>
            </div>
            <Button asChild variant="outline" size="sm">
              <Link
                to="/admin/verifications"
                className="flex items-center gap-1"
              >
                View All <ArrowRight className="size-4" />
              </Link>
            </Button>
          </CardHeader>
          <CardContent className="space-y-3">
            {verifications.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-8 text-muted-foreground text-sm gap-2">
                <CheckCircle2 className="h-7 w-7 text-emerald-500 opacity-70" />
                <p>No pending verifications — all caught up!</p>
              </div>
            ) : (
              verifications.map((item: any) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between p-3 bg-background border border-border rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Building2 className="size-4 text-primary" />
                    </div>
                    <div className="min-w-0">
                      <p className="font-medium text-sm truncate">
                        {item.companyName || item.fullName || item.email}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {docSummary(item)} •{" "}
                        {formatDistanceToNow(new Date(item.createdAt), {
                          addSuffix: true,
                        })}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-2 shrink-0 ml-2">
                    <Button
                      asChild
                      variant="ghost"
                      size="sm"
                      className="text-xs h-8"
                    >
                      <Link to={`/admin/verifications/${item.id}`}>Review</Link>
                    </Button>
                    <Button
                      size="sm"
                      className="bg-emerald-600 hover:bg-emerald-700 text-xs h-8"
                      disabled={isUpdating}
                      onClick={() => handleApprove(item.id)}
                    >
                      Approve
                    </Button>
                  </div>
                </div>
              ))
            )}
          </CardContent>
        </Card>

        {/* Recent Reports */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <FileText className="size-4 text-blue-500" /> Recent Reports
            </CardTitle>
            <CardDescription>
              Latest opportunity reports generated
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {reports.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-8 text-muted-foreground text-sm gap-2">
                <FileText className="h-6 w-6 opacity-30" />
                <p>No reports yet</p>
              </div>
            ) : (
              reports.map((r: any) => (
                <div
                  key={r.id}
                  className="p-2.5 bg-muted/20 rounded-lg border border-border flex items-center gap-3 hover:bg-muted/40 transition-colors"
                >
                  <FileText className="size-4 text-blue-500 shrink-0" />
                  <div className="min-w-0">
                    <p className="text-xs font-medium truncate">
                      {r.session?.title ||
                        r.user?.companyName ||
                        "Opportunity Report"}
                    </p>
                    <p className="text-[10px] text-muted-foreground">
                      {r.session?.country ? `${r.session.country} • ` : ""}
                      {format(new Date(r.createdAt), "d MMM yyyy")}
                    </p>
                  </div>
                </div>
              ))
            )}
            <Button asChild variant="outline" size="sm" className="w-full mt-1">
              <Link to="/admin/reports">View All Reports</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </Main>
  );
}
