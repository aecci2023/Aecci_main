import { Main } from "@/components/layout/main";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Settings, Shield, Bell, Globe, Mail, CreditCard } from "lucide-react";

const SETTING_GROUPS = [
  {
    icon: Globe,
    title: "Platform",
    description: "General platform configuration — name, timezone, maintenance mode",
    status: "coming soon",
  },
  {
    icon: Mail,
    title: "Email & Notifications",
    description: "Configure SES sender address, reply-to, notification templates",
    status: "coming soon",
  },
  {
    icon: CreditCard,
    title: "Payment Gateway",
    description: "Razorpay API keys, webhook secret, test/live mode toggle",
    status: "coming soon",
  },
  {
    icon: Shield,
    title: "Security & Auth",
    description: "OTP TTL, session token expiry, allowed IP ranges",
    status: "coming soon",
  },
  {
    icon: Bell,
    title: "Alerts & Thresholds",
    description: "Slot warning thresholds, expiry notice days, admin notification rules",
    status: "coming soon",
  },
];

export default function AdminSettingsPage() {
  return (
    <Main fluid className="space-y-6 max-w-4xl mx-auto py-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Global Settings</h1>
          <p className="text-muted-foreground text-sm mt-1">
            System-wide configuration for the AECCI Global Deal Room platform.
          </p>
        </div>
        <Settings className="h-8 w-8 text-muted-foreground" />
      </div>

      <div className="grid gap-4">
        {SETTING_GROUPS.map(({ icon: Icon, title, description, status }) => (
          <Card key={title} className="opacity-70">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2 text-base">
                  <Icon className="h-5 w-5 text-muted-foreground" />
                  {title}
                </CardTitle>
                <Badge variant="outline" className="text-xs">
                  {status}
                </Badge>
              </div>
              <CardDescription className="text-sm">{description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-10 border border-dashed rounded-md flex items-center justify-center text-xs text-muted-foreground">
                Configuration UI will be available in a future release
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <p className="text-xs text-muted-foreground text-center">
        For urgent configuration changes, update environment variables directly on the server.
      </p>
    </Main>
  );
}
