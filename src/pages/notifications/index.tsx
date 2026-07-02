import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "@/store";
import { markAllAsRead, markAsRead } from "@/store/slices/notificationsSlice";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { formatDistanceToNow } from "date-fns";
import { CheckCircle2, Info, AlertTriangle, XCircle, Bell, ExternalLink, Check } from "lucide-react";
import { useLocation, Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Header } from "@/components/layout/header";
import { Main } from "@/components/layout/main";
import { Search } from "@/components/search";
import { ProfileDropdown } from "@/components/profile-dropdown";
const typeIcon: Record<string, React.ReactNode> = {
  success: <CheckCircle2 className="size-5 text-emerald-500 shrink-0 mt-0.5" />,
  error: <XCircle className="size-5 text-red-500 shrink-0 mt-0.5" />,
  warning: <AlertTriangle className="size-5 text-amber-500 shrink-0 mt-0.5" />,
  info: <Info className="size-5 text-blue-500 shrink-0 mt-0.5" />,
  "new-verification": <Bell className="size-5 text-primary shrink-0 mt-0.5" />,
};

const typeDot: Record<string, string> = {
  success: "bg-emerald-500",
  error: "bg-red-500",
  warning: "bg-amber-500",
  info: "bg-blue-500",
  "new-verification": "bg-primary",
};

export default function NotificationsPage() {
  const dispatch = useDispatch();
  const notifications = useSelector((state: RootState) => state.notifications.items);
  
  const [tab, setTab] = useState("all");

  const unreadCount = notifications.filter(n => !n.read).length;
  const readCount = notifications.filter(n => n.read).length;

  const filteredNotifications = notifications.filter(n => {
    if (tab === "unread") return !n.read;
    if (tab === "read") return n.read;
    return true;
  });

  const handleMarkAllAsRead = () => {
    dispatch(markAllAsRead());
  };

  const handleMarkAsRead = (id: string) => {
    dispatch(markAsRead(id));
  };

  const location = useLocation();
  const isUserPortal = location.pathname.startsWith("/dashboard");

  return (
    <>
      {isUserPortal && (
        <Header>
          <div className="flex items-center space-x-2">
            <span className="font-semibold text-sm text-muted-foreground">
              AECCI Hub
            </span>
            <span className="text-muted-foreground">/</span>
            <span className="font-semibold text-sm">Notifications</span>
          </div>
          <div className="ml-auto flex items-center space-x-4">
            <Search />
            <ProfileDropdown />
          </div>
        </Header>
      )}
      <Main fluid className="space-y-6 pb-10 pt-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Notifications</h1>
            <p className="text-muted-foreground mt-1">
              View and manage all your notifications.
            </p>
          </div>
          <Button variant="outline" onClick={handleMarkAllAsRead} disabled={unreadCount === 0}>
            Mark all as read
          </Button>
        </div>

        <Tabs defaultValue="all" value={tab} onValueChange={setTab} className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="all">All ({notifications.length})</TabsTrigger>
            <TabsTrigger value="unread">Unread ({unreadCount})</TabsTrigger>
            <TabsTrigger value="read">Read ({readCount})</TabsTrigger>
          </TabsList>

          <div className="space-y-4">
            {filteredNotifications.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-20 text-muted-foreground border rounded-lg border-dashed">
                <Bell className="h-12 w-12 opacity-20 mb-4" />
                <p className="text-lg font-medium">No notifications found</p>
                <p className="text-sm opacity-70">You're all caught up!</p>
              </div>
            ) : (
              filteredNotifications.map((n) => (
                <div 
                  key={n.id} 
                  className={cn(
                    "relative flex flex-col sm:flex-row gap-4 p-5 rounded-lg border transition-colors",
                    !n.read ? "bg-muted/10 border-muted-foreground/30" : "bg-card hover:bg-muted/10 border-border"
                  )}
                >
                  <div className="flex gap-3 flex-1">
                    {typeIcon[n.type] ?? typeIcon.info}
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <h4 className="font-semibold text-base leading-none">
                          {n.type === "new-verification" ? "New KYC Submission" : (n.title || "Notification")}
                        </h4>
                        {!n.read && (
                          <span className={cn("h-2 w-2 rounded-full", typeDot[n.type] ?? "bg-primary")} />
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {n.type === "new-verification" 
                          ? `${n.companyName || n.fullName || "A user"} submitted for verification.`
                          : n.message}
                      </p>
                      
                      {n.link && (
                        <div className="pt-2">
                          <Button variant="secondary" size="sm" asChild className="h-8">
                            <Link to={n.link} onClick={() => handleMarkAsRead(n.id)}>
                              View Details <ExternalLink className="ml-2 size-3" />
                            </Link>
                          </Button>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex flex-row sm:flex-col items-center sm:items-end justify-between sm:justify-start gap-4">
                    {!n.read ? (
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        onClick={() => handleMarkAsRead(n.id)}
                        className="h-8 w-8 text-muted-foreground hover:text-foreground"
                        title="Mark as read"
                      >
                        <Check className="size-4" />
                      </Button>
                    ) : (
                      <div className="h-8 w-8" />
                    )}
                    <span className="text-xs text-muted-foreground whitespace-nowrap">
                      {formatDistanceToNow(new Date(n.createdAt), { addSuffix: true })}
                    </span>
                  </div>
                </div>
              ))
            )}
          </div>
        </Tabs>
      </Main>
    </>
  );
}
