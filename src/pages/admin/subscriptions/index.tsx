import { useState } from "react";
import { Main } from "@/components/layout/main";
import { useGetUsersQuery } from "@/store/api/adminApi";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { format } from "date-fns";
import { Search, CreditCard, Users, CheckCircle2, XCircle } from "lucide-react";

const PLAN_LABELS: Record<string, string> = {
  explorer: "Explorer",
  growth: "Growth",
  market_entry: "Market Entry",
  enterprise: "Enterprise",
};

const PLAN_COLORS: Record<string, string> = {
  explorer: "bg-blue-100 text-blue-700 border-blue-200",
  growth: "bg-purple-100 text-purple-700 border-purple-200",
  market_entry: "bg-amber-100 text-amber-700 border-amber-200",
  enterprise: "bg-emerald-100 text-emerald-700 border-emerald-200",
};

export default function AdminSubscriptionsPage() {
  const [search, setSearch] = useState("");
  const [planFilter, setPlanFilter] = useState("all");

  const { data, isLoading } = useGetUsersQuery({ role: "user" });

  const allUsers: any[] = data?.data || [];

  const subscribed = allUsers.filter((u) => u.planActive || u.planName);

  const filtered = subscribed.filter((u) => {
    const matchSearch =
      !search ||
      u.fullName?.toLowerCase().includes(search.toLowerCase()) ||
      u.email?.toLowerCase().includes(search.toLowerCase()) ||
      u.companyName?.toLowerCase().includes(search.toLowerCase());
    const matchPlan = planFilter === "all" || u.planName === planFilter;
    return matchSearch && matchPlan;
  });

  const stats = {
    total: subscribed.length,
    active: subscribed.filter((u) => u.planActive).length,
    explorer: subscribed.filter((u) => u.planName === "explorer").length,
    growth: subscribed.filter((u) => u.planName === "growth").length,
    market_entry: subscribed.filter((u) => u.planName === "market_entry").length,
    enterprise: subscribed.filter((u) => u.planName === "enterprise").length,
  };

  return (
    <Main fluid className="space-y-6 max-w-7xl mx-auto py-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Subscriptions</h1>
        <p className="text-muted-foreground text-sm mt-1">
          Overview of all active and lapsed plan subscriptions across the platform.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {[
          { label: "Total", value: stats.total, icon: Users, color: "text-foreground" },
          { label: "Active", value: stats.active, icon: CheckCircle2, color: "text-emerald-600" },
          { label: "Explorer", value: stats.explorer, icon: CreditCard, color: "text-blue-600" },
          { label: "Growth", value: stats.growth, icon: CreditCard, color: "text-purple-600" },
          { label: "Market Entry", value: stats.market_entry, icon: CreditCard, color: "text-amber-600" },
          { label: "Enterprise", value: stats.enterprise, icon: CreditCard, color: "text-emerald-600" },
        ].map(({ label, value, icon: Icon, color }) => (
          <div key={label} className="bg-background border rounded-lg p-4 space-y-1">
            <div className="flex items-center justify-between">
              <p className="text-xs text-muted-foreground">{label}</p>
              <Icon className={`h-4 w-4 ${color}`} />
            </div>
            <p className={`text-2xl font-bold ${color}`}>{value}</p>
          </div>
        ))}
      </div>

      {/* Filters */}
      <div className="flex gap-3 flex-wrap">
        <div className="relative flex-1 min-w-52">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search by name, email or company..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-9"
          />
        </div>
        <Select value={planFilter} onValueChange={setPlanFilter}>
          <SelectTrigger className="w-44">
            <SelectValue placeholder="All Plans" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Plans</SelectItem>
            <SelectItem value="explorer">Explorer</SelectItem>
            <SelectItem value="growth">Growth</SelectItem>
            <SelectItem value="market_entry">Market Entry</SelectItem>
            <SelectItem value="enterprise">Enterprise</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Table */}
      <div className="bg-background border rounded-lg overflow-hidden">
        {isLoading ? (
          <div className="flex items-center justify-center h-48 text-muted-foreground text-sm">
            Loading subscriptions...
          </div>
        ) : filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-48 gap-2 text-muted-foreground">
            <CreditCard className="h-8 w-8" />
            <p className="text-sm">No subscriptions match the current filters</p>
          </div>
        ) : (
          <Table>
            <TableHeader className="bg-muted/40">
              <TableRow>
                <TableHead>Member</TableHead>
                <TableHead>Company</TableHead>
                <TableHead>Plan</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Slots</TableHead>
                <TableHead>Expires</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filtered.map((user: any) => {
                const isExpired =
                  user.planExpiresAt && new Date(user.planExpiresAt) < new Date();
                return (
                  <TableRow key={user.id} className="hover:bg-muted/20">
                    <TableCell>
                      <div className="font-medium text-sm">{user.fullName || "—"}</div>
                      <div className="text-xs text-muted-foreground">{user.email}</div>
                    </TableCell>
                    <TableCell className="text-sm">{user.companyName || "—"}</TableCell>
                    <TableCell>
                      {user.planName ? (
                        <Badge
                          variant="outline"
                          className={`text-xs ${PLAN_COLORS[user.planName] || ""}`}
                        >
                          {PLAN_LABELS[user.planName] || user.planName}
                        </Badge>
                      ) : (
                        <span className="text-xs text-muted-foreground">No plan</span>
                      )}
                    </TableCell>
                    <TableCell>
                      {user.planActive && !isExpired ? (
                        <Badge
                          variant="outline"
                          className="bg-emerald-50 text-emerald-700 border-emerald-200 text-xs gap-1"
                        >
                          <CheckCircle2 className="h-3 w-3" /> Active
                        </Badge>
                      ) : (
                        <Badge
                          variant="outline"
                          className="bg-red-50 text-red-700 border-red-200 text-xs gap-1"
                        >
                          <XCircle className="h-3 w-3" /> {isExpired ? "Expired" : "Inactive"}
                        </Badge>
                      )}
                    </TableCell>
                    <TableCell className="text-sm">
                      <span className="font-medium">{user.slotsRemaining ?? 0}</span>
                      <span className="text-muted-foreground"> / {user.slotsTotal ?? 0}</span>
                    </TableCell>
                    <TableCell className="text-sm text-muted-foreground">
                      {user.planExpiresAt
                        ? format(new Date(user.planExpiresAt), "d MMM yyyy")
                        : "—"}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        )}
      </div>
    </Main>
  );
}
