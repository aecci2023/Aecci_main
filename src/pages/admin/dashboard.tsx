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
  TrendingUp,
  Globe,
  FileText
} from "lucide-react";
import { Link } from "react-router-dom";

export default function AdminDashboard() {
  return (
    <Main fluid className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-primary via-emerald-600 to-teal-500 bg-clip-text text-transparent">
            System Overview
          </h1>
          <p className="text-muted-foreground text-sm mt-1">
            Monitor platform health, verify accounts, and manage active global deal rooms.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Badge
            variant="outline"
            className="px-3 py-1 flex items-center gap-1.5 bg-primary/10 text-primary border-primary/20"
          >
            <Activity className="size-4 animate-pulse" /> All Systems Operational
          </Badge>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total Active Users
            </CardTitle>
            <Users className="size-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2,405</div>
            <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
              <TrendingUp className="size-3 text-emerald-500" /> +12% from last month
            </p>
          </CardContent>
        </Card>
        <Card className="hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Business Accounts
            </CardTitle>
            <Building2 className="size-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">842</div>
            <p className="text-xs text-muted-foreground mt-1">
              Primarily from India & Kenya
            </p>
          </CardContent>
        </Card>
        <Card className="hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Pending Verifications
            </CardTitle>
            <ShieldAlert className="size-4 text-amber-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-amber-600">18</div>
            <p className="text-xs text-muted-foreground mt-1">
              Requires manual KYC review
            </p>
          </CardContent>
        </Card>
        <Card className="hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Live Deal Rooms
            </CardTitle>
            <Globe className="size-4 text-teal-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4</div>
            <p className="text-xs text-muted-foreground mt-1">
              Currently active sessions
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Action Area */}
        <Card className="lg:col-span-2 border-2 border-amber-500/20 bg-gradient-to-br from-amber-500/5 via-background to-background">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle className="text-lg">Urgent Approvals Required</CardTitle>
              <CardDescription>
                Business entities waiting for KYC and compliance verification.
              </CardDescription>
            </div>
            <Button asChild variant="outline" size="sm">
              <Link to="/admin/verifications" className="flex items-center gap-1">
                View All <ArrowRight className="size-4" />
              </Link>
            </Button>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { id: 1, name: "Global Textiles Ltd.", docs: "IEC & GST", time: "2 hours ago" },
              { id: 2, name: "Nairobi Logistics Group", docs: "Business Reg.", time: "4 hours ago" },
              { id: 3, name: "Apex Manufacturing", docs: "PAN & IEC", time: "5 hours ago" }
            ].map((item) => (
              <div key={item.id} className="flex items-center justify-between p-4 bg-background border border-border rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Building2 className="size-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm">{item.name}</h4>
                    <p className="text-xs text-muted-foreground">Submitted {item.docs} • {item.time}</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="ghost" size="sm" className="text-xs h-8">Review Docs</Button>
                  <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700 text-xs h-8">Approve</Button>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Quick Links / System Status */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Recent Reports</CardTitle>
              <CardDescription>Generated platform analytics</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="p-3 bg-muted/30 rounded-lg border border-border flex items-center gap-3 cursor-pointer hover:bg-muted/50 transition-colors">
                <FileText className="size-5 text-blue-500" />
                <div>
                  <span className="text-sm font-medium block">Weekly User Growth</span>
                  <span className="text-[10px] text-muted-foreground">Generated today, 08:00 AM</span>
                </div>
              </div>
              <div className="p-3 bg-muted/30 rounded-lg border border-border flex items-center gap-3 cursor-pointer hover:bg-muted/50 transition-colors">
                <Globe className="size-5 text-teal-500" />
                <div>
                  <span className="text-sm font-medium block">Kenya Session Metrics</span>
                  <span className="text-[10px] text-muted-foreground">Generated yesterday</span>
                </div>
              </div>
              <Button asChild variant="outline" className="w-full mt-2">
                <Link to="/admin/reports">Generate New Report</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </Main>
  );
}
