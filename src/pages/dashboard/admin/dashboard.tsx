import { Main } from "@/components/layout/main";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Users,
  Building2,
  ShieldAlert,
  Activity,
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
  useUpdateVerificationStatusMutation,
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

function SectionLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link
      to={to}
      className="shrink-0 whitespace-nowrap text-[12px] font-semibold text-[#2563EB] hover:underline"
    >
      {children}
    </Link>
  );
}

function KpiCard({
  label,
  icon,
  iconBg,
  children,
  sub,
}: {
  label: string;
  icon: React.ReactNode;
  iconBg: string;
  children: React.ReactNode;
  sub?: string;
}) {
  return (
    <div className="rounded-xl border border-[#E4E7EC] bg-white p-4 shadow-[0_1px_2px_rgba(16,24,40,0.05)]">
      <div className="flex items-start justify-between gap-2">
        <p className="text-[10px] font-medium text-[#98A2B3]">{label}</p>
        <span
          className={`flex size-8 shrink-0 items-center justify-center rounded-lg ${iconBg}`}
        >
          {icon}
        </span>
      </div>
      <div className="mt-2">{children}</div>
      {sub && <p className="mt-1 text-[10px] text-[#98A2B3]">{sub}</p>}
    </div>
  );
}

export default function AdminDashboard() {
  const { data, isLoading, refetch } = useGetAdminDashboardStatsQuery();
  const [updateVerification, { isLoading: isUpdating }] = useUpdateVerificationStatusMutation();

  const stats = data?.data?.stats;
  const verifications: any[] = data?.data?.recentVerifications || [];
  const reports: any[] = data?.data?.recentReports || [];
  const upcomingSessions: any[] = data?.data?.upcomingSessions || [];
  const registrationTrend: any[] = data?.data?.registrationTrend || [];
  const planDistribution: any[] = data?.data?.planDistribution || [];
  const recentSubscriptions: any[] = data?.data?.recentSubscriptions || [];

  const handleApprove = async (id: string) => {
    try {
      await updateVerification({ id, verificationStatus: "approved" }).unwrap();
      toast.success("User approved");
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
        icon: <Users className="size-4 text-[#175CD3]" />,
        bg: "bg-[#EFF8FF]",
      },
      {
        label: "Business Accounts",
        value: stats?.businessUsers ?? 0,
        icon: <Building2 className="size-4 text-[#039855]" />,
        bg: "bg-[#ECFDF3]",
      },
      {
        label: "Individual Accounts",
        value: stats?.individualUsers ?? 0,
        icon: <User className="size-4 text-[#7A5AF8]" />,
        bg: "bg-[#F4F3FF]",
      },
      {
        label: "Global Partners",
        value: stats?.partners ?? 0,
        icon: <Globe className="size-4 text-[#F79009]" />,
        bg: "bg-[#FFFAEB]",
      },
    ],
    [
      {
        label: "Active Sessions",
        value: stats?.activeSessions ?? 0,
        icon: <Video className="size-4 text-[#6941C6]" />,
        bg: "bg-[#F9F5FF]",
      },
      {
        label: "Subscriptions",
        value: stats?.activeSubscriptions ?? 0,
        icon: <CreditCard className="size-4 text-[#E31B54]" />,
        bg: "bg-[#FFF1F3]",
      },
      {
        label: "Completed Sessions",
        value: stats?.completedSessions ?? 0,
        icon: <CheckCircle2 className="size-4 text-[#027A48]" />,
        bg: "bg-[#ECFDF3]",
      },
      {
        label: "Pending Verifications",
        value: stats?.pendingVerifications ?? 0,
        icon: <ShieldAlert className="size-4 text-[#B42318]" />,
        bg: "bg-[#FEF3F2]",
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
    <Main fluid className="space-y-4 overflow-x-hidden bg-[#F8FAFC]! px-3 pb-6 sm:px-5">
      {/* Welcome Header */}
      <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <h1 className="text-[22px] font-bold leading-tight text-[#101828] sm:text-[24px]">
            Admin Overview 👋
          </h1>
          <p className="mt-1 text-[13px] leading-relaxed text-[#667085]">
            Monitor platform health, verify accounts, and manage active deal rooms.
          </p>
        </div>
        <div className="inline-flex h-fit shrink-0 items-center gap-1.5 rounded-full border border-[#B2DDFF] bg-[#EFF8FF] px-3 py-1.5 text-[12px] font-semibold text-[#175CD3]">
          <Activity className="size-3.5 animate-pulse" />
          All Systems Operational
        </div>
      </div>

      <div className="grid grid-cols-1 items-start gap-4 xl:grid-cols-[minmax(0,1fr)_260px]">
        <div className="min-w-0 space-y-4">
          {/* Stats */}
          <div className="space-y-3">
        {statRows.map((row, rowIdx) => (
          <div key={rowIdx} className="grid grid-cols-2 gap-2.5 md:grid-cols-4">
            {row.map(({ label, value, icon, bg, highlight }) => (
              <KpiCard
                key={label}
                label={label}
                icon={icon}
                iconBg={bg}
                sub={highlight ? "Requires attention" : undefined}
              >
                <p className={`text-[22px] font-bold leading-none ${highlight ? "text-[#B42318]" : "text-[#101828]"}`}>
                  {value}
                </p>
              </KpiCard>
            ))}
          </div>
        ))}
      </div>

      {/* Main grids */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Registration Trend */}
        <div className="lg:col-span-2 rounded-2xl border border-[#E4E7EC] bg-white p-4 shadow-[0_1px_2px_rgba(16,24,40,0.05)]">
          <div className="mb-4">
            <h3 className="text-[15px] font-bold text-[#101828] flex items-center gap-2">
              <TrendingUp className="size-4 text-[#175CD3]" /> Registration Trend
            </h3>
            <p className="mt-0.5 text-[12px] text-[#667085]">
              New user registrations over the last 7 days
            </p>
          </div>
          
          <div>
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
                        stopColor="#175CD3"
                        stopOpacity={0.3}
                      />
                      <stop
                        offset="95%"
                        stopColor="#175CD3"
                        stopOpacity={0}
                      />
                    </linearGradient>
                  </defs>
                  <CartesianGrid
                    strokeDasharray="3 3"
                    stroke="#E4E7EC"
                  />
                  <XAxis
                    dataKey="date"
                    tick={{ fill: "#667085", fontSize: 11 }}
                    tickLine={false}
                    axisLine={false}
                  />
                  <YAxis
                    tick={{ fill: "#667085", fontSize: 11 }}
                    tickLine={false}
                    axisLine={false}
                    allowDecimals={false}
                  />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Area
                    type="monotone"
                    dataKey="registrations"
                    stroke="#175CD3"
                    strokeWidth={2}
                    fill="url(#regGradient)"
                    dot={{ r: 3, fill: "#175CD3" }}
                  />
                </AreaChart>
              </ChartContainer>
            ) : (
              <div className="h-50 flex items-center justify-center text-[13px] text-[#667085]">
                No registration data yet
              </div>
            )}
          </div>
        </div>

        {/* Plan Distribution */}
        <div className="rounded-2xl border border-[#E4E7EC] bg-white p-4 shadow-[0_1px_2px_rgba(16,24,40,0.05)]">
          <div className="mb-4">
            <h3 className="text-[15px] font-bold text-[#101828] flex items-center gap-2">
              <CreditCard className="size-4 text-[#F79009]" /> Plan Distribution
            </h3>
            <p className="mt-0.5 text-[12px] text-[#667085]">
              Active subscription plans breakdown
            </p>
          </div>
          
          <div>
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
                      stroke="#E4E7EC"
                    />
                    <XAxis
                      dataKey="plan"
                      tick={{ fill: "#667085", fontSize: 10 }}
                      tickLine={false}
                      axisLine={false}
                    />
                    <YAxis
                      tick={{ fill: "#667085", fontSize: 11 }}
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
                      className="flex items-center gap-1.5 text-[11px] text-[#667085]"
                    >
                      <span
                        className="h-2 w-2 rounded-full inline-block shrink-0"
                        style={{
                          background: PLAN_COLORS[i % PLAN_COLORS.length],
                        }}
                      />
                      {p.plan}:{" "}
                      <span className="font-semibold text-[#101828] ml-0.5">
                        {p.count}
                      </span>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <div className="h-40 flex flex-col items-center justify-center text-[13px] text-[#667085] gap-2">
                <CreditCard className="size-6 opacity-30" />
                <p>No active subscriptions</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Upcoming Sessions & Subscriptions */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Upcoming Sessions */}
        <div className="lg:col-span-2 rounded-2xl border border-[#E4E7EC] bg-white p-4 shadow-[0_1px_2px_rgba(16,24,40,0.05)]">
          <div className="mb-4 flex items-start justify-between gap-2">
            <div>
              <h3 className="text-[15px] font-bold text-[#101828] flex items-center gap-2">
                <Calendar className="size-4 text-[#6941C6]" /> Upcoming Sessions
              </h3>
              <p className="mt-0.5 text-[12px] text-[#667085]">
                Next scheduled Deal Room meetings
              </p>
            </div>
            <SectionLink to="/admin/sessions">View All →</SectionLink>
          </div>
          
          <div>
            {upcomingSessions.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-8 text-[#667085] text-[13px] gap-2">
                <Calendar className="size-7 opacity-30" />
                <p>No upcoming sessions scheduled</p>
              </div>
            ) : (
              upcomingSessions.map((s: any, i: number) => (
                <div
                  key={s.id}
                  className={`flex items-center justify-between py-3 ${i > 0 ? "border-t border-[#F2F4F7]" : ""}`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="h-9 w-9 rounded-lg bg-[#F9F5FF] flex items-center justify-center shrink-0">
                      <Video className="size-4 text-[#6941C6]" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[13px] font-semibold text-[#101828] truncate">{s.title}</p>
                      <p className="text-[11px] text-[#667085] truncate">
                        {s.client?.companyName || s.client?.fullName || "No client"}{" "}
                        • {s.partner?.fullName || "Unassigned partner"}
                      </p>
                    </div>
                  </div>
                  <div className="text-right shrink-0 ml-3">
                    <p className="text-[11px] font-semibold flex items-center gap-1 justify-end text-[#475467]">
                      <Clock className="size-3" />
                      {format(new Date(s.date), "d MMM, h:mm a")}
                    </p>
                    <Badge
                      className="mt-1 h-5 rounded-md border-0 bg-[#F2F4F7] px-1.5 text-[10px] font-semibold capitalize text-[#344054] hover:bg-[#F2F4F7]"
                    >
                      {s.status.replace(/_/g, " ")}
                    </Badge>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Recent Subscriptions */}
        <div className="rounded-2xl border border-[#E4E7EC] bg-white p-4 shadow-[0_1px_2px_rgba(16,24,40,0.05)]">
          <div className="mb-4 flex items-start justify-between gap-2">
            <div>
              <h3 className="text-[15px] font-bold text-[#101828] flex items-center gap-2">
                <CreditCard className="size-4 text-[#F79009]" /> Subscriptions
              </h3>
              <p className="mt-0.5 text-[12px] text-[#667085]">Latest plan purchases</p>
            </div>
            <SectionLink to="/admin/invoices">View All →</SectionLink>
          </div>
          
          <div>
            {recentSubscriptions.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-8 text-[#667085] text-[13px] gap-2">
                <CreditCard className="size-6 opacity-30" />
                <p>No subscriptions yet</p>
              </div>
            ) : (
              recentSubscriptions.map((sub: any, i: number) => (
                <div
                  key={sub.id}
                  className={`flex items-center justify-between py-2.5 ${i > 0 ? "border-t border-[#F2F4F7]" : ""}`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="h-8 w-8 rounded-full bg-[#FFFAEB] flex items-center justify-center shrink-0">
                      <User className="size-4 text-[#F79009]" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[12px] font-semibold text-[#101828] truncate">
                        {sub.user?.companyName || sub.user?.fullName || sub.user?.email}
                      </p>
                      <p className="text-[10px] text-[#667085] capitalize">
                        {sub.planName?.replace(/_/g, " ")} • ₹{sub.amount?.toLocaleString("en-IN")}
                      </p>
                    </div>
                  </div>
                  <Badge
                    className={`ml-2 h-5 shrink-0 rounded-md border-0 px-1.5 text-[10px] font-semibold ${
                      sub.paymentStatus === "paid"
                        ? "bg-[#ECFDF3] text-[#027A48] hover:bg-[#ECFDF3]"
                        : "bg-[#FFFAEB] text-[#B54708] hover:bg-[#FFFAEB]"
                    }`}
                  >
                    {sub.paymentStatus}
                  </Badge>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      {/* Pending Verifications & Recent Reports */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Pending Verifications */}
        <div className="lg:col-span-2 rounded-2xl border border-[#FEE4E2] bg-white p-4 shadow-[0_1px_2px_rgba(16,24,40,0.05)]">
          <div className="mb-4 flex items-start justify-between gap-2">
            <div>
              <h3 className="text-[15px] font-bold text-[#101828] flex items-center gap-2">
                <ShieldAlert className="size-4 text-[#B42318]" /> Pending Verifications
              </h3>
              <p className="mt-0.5 text-[12px] text-[#667085]">
                Business entities waiting for compliance verification
              </p>
            </div>
            <SectionLink to="/admin/verifications">View All →</SectionLink>
          </div>
          
          <div>
            {verifications.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-8 text-[#667085] text-[13px] gap-2">
                <CheckCircle2 className="size-7 text-[#039855] opacity-70" />
                <p>No pending verifications — all caught up!</p>
              </div>
            ) : (
              verifications.map((item: any, i: number) => (
                <div
                  key={item.id}
                  className={`flex items-center justify-between py-3 ${i > 0 ? "border-t border-[#F2F4F7]" : ""}`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="h-9 w-9 rounded-full bg-[#EFF8FF] flex items-center justify-center shrink-0">
                      <Building2 className="size-4 text-[#175CD3]" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[13px] font-semibold text-[#101828] truncate">
                        {item.companyName || item.fullName || item.email}
                      </p>
                      <p className="text-[11px] text-[#667085]">
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
                      variant="outline"
                      size="sm"
                      className="h-7 rounded-lg border-[#E4E7EC] px-2.5 text-[11px] font-semibold text-[#344054]"
                    >
                      <Link to={`/admin/verifications/${item.id}`}>Review</Link>
                    </Button>
                    <Button
                      size="sm"
                      className="h-7 rounded-lg bg-[#039855] px-2.5 text-[11px] font-semibold text-white hover:bg-[#027A48]"
                      disabled={isUpdating}
                      onClick={() => handleApprove(item.id)}
                    >
                      Approve
                    </Button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Recent Reports */}
        <div className="rounded-2xl border border-[#E4E7EC] bg-white p-4 shadow-[0_1px_2px_rgba(16,24,40,0.05)]">
          <div className="mb-4 flex items-start justify-between gap-2">
            <div>
              <h3 className="text-[15px] font-bold text-[#101828] flex items-center gap-2">
                <FileText className="size-4 text-[#175CD3]" /> Recent Reports
              </h3>
              <p className="mt-0.5 text-[12px] text-[#667085]">Latest opportunity reports</p>
            </div>
            <SectionLink to="/admin/reports">View All →</SectionLink>
          </div>
          
          <div>
            {reports.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-8 text-[#667085] text-[13px] gap-2">
                <FileText className="size-6 opacity-30" />
                <p>No reports yet</p>
              </div>
            ) : (
              reports.map((r: any, i: number) => (
                <div
                  key={r.id}
                  className={`flex items-center gap-3 py-2.5 ${i > 0 ? "border-t border-[#F2F4F7]" : ""}`}
                >
                  <div className="h-8 w-8 rounded-lg bg-[#EEF4FF] flex items-center justify-center shrink-0">
                    <FileText className="size-4 text-[#444CE7]" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[12px] font-semibold text-[#101828] truncate">
                      {r.session?.title || r.user?.companyName || "Opportunity Report"}
                    </p>
                    <p className="text-[10px] text-[#667085]">
                      {r.session?.country ? `${r.session.country} • ` : ""}
                      {format(new Date(r.createdAt), "d MMM yyyy")}
                    </p>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
      </div>
        
      <aside className="space-y-4 xl:sticky xl:top-4">
          <div className="rounded-2xl border border-[#E4E7EC] bg-white p-4 shadow-[0_1px_2px_rgba(16,24,40,0.05)]">
            <p className="text-[11px] font-medium text-[#667085]">System Status</p>
            <div className="mt-1 flex flex-wrap items-center gap-2">
              <h3 className="text-[15px] font-bold text-[#039855]">Operational</h3>
              <span className="rounded-full bg-[#ECFDF3] px-2 py-0.5 text-[9px] font-bold text-[#027A48]">
                Healthy
              </span>
            </div>
            <ul className="mt-3 space-y-2">
              <li className="flex items-start gap-2 text-[11px] leading-snug text-[#344054]">
                <span className="mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full bg-[#ECFDF3] text-[#039855]">
                  <CheckCircle2 className="size-2.5 stroke-3" />
                </span>
                API Services online
              </li>
              <li className="flex items-start gap-2 text-[11px] leading-snug text-[#344054]">
                <span className="mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full bg-[#ECFDF3] text-[#039855]">
                  <CheckCircle2 className="size-2.5 stroke-3" />
                </span>
                Database healthy
              </li>
              <li className="flex items-start gap-2 text-[11px] leading-snug text-[#344054]">
                <span className="mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full bg-[#ECFDF3] text-[#039855]">
                  <CheckCircle2 className="size-2.5 stroke-3" />
                </span>
                Storage active
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-[#E4E7EC] bg-white p-4 shadow-[0_1px_2px_rgba(16,24,40,0.05)]">
            <h3 className="text-[14px] font-bold text-[#101828]">Quick Actions</h3>
            <div className="mt-2 space-y-1">
              <Link
                to="/admin/verifications"
                className="flex items-center gap-2.5 rounded-lg px-1 py-2 transition hover:bg-[#F9FAFB]"
              >
                <span className="flex size-8 shrink-0 items-center justify-center rounded-lg text-[#175CD3] bg-[#EFF8FF]">
                  <ShieldAlert className="size-4" />
                </span>
                <div>
                  <p className="text-[13px] font-semibold text-[#101828]">Review Verifications</p>
                  <p className="text-[11px] text-[#667085]">Pending user approvals</p>
                </div>
              </Link>
              <Link
                to="/admin/sessions"
                className="flex items-center gap-2.5 rounded-lg px-1 py-2 transition hover:bg-[#F9FAFB]"
              >
                <span className="flex size-8 shrink-0 items-center justify-center rounded-lg text-[#6941C6] bg-[#F9F5FF]">
                  <Calendar className="size-4" />
                </span>
                <div>
                  <p className="text-[13px] font-semibold text-[#101828]">Manage Sessions</p>
                  <p className="text-[11px] text-[#667085]">Upcoming deal rooms</p>
                </div>
              </Link>
              <Link
                to="/admin/invoices"
                className="flex items-center gap-2.5 rounded-lg px-1 py-2 transition hover:bg-[#F9FAFB]"
              >
                <span className="flex size-8 shrink-0 items-center justify-center rounded-lg text-[#039855] bg-[#ECFDF3]">
                  <CreditCard className="size-4" />
                </span>
                <div>
                  <p className="text-[13px] font-semibold text-[#101828]">View Invoices</p>
                  <p className="text-[11px] text-[#667085]">Check recent payments</p>
                </div>
              </Link>
              <Link
                to="/admin/reports"
                className="flex items-center gap-2.5 rounded-lg px-1 py-2 transition hover:bg-[#F9FAFB]"
              >
                <span className="flex size-8 shrink-0 items-center justify-center rounded-lg text-[#F79009] bg-[#FFFAEB]">
                  <FileText className="size-4" />
                </span>
                <div>
                  <p className="text-[13px] font-semibold text-[#101828]">System Reports</p>
                  <p className="text-[11px] text-[#667085]">Platform analytics</p>
                </div>
              </Link>
            </div>
          </div>
        </aside>
      </div>
    </Main>
  );
}
