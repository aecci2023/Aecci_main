import { Link } from "react-router-dom";
import useDialogState from "@/hooks/use-dialog-state";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SignOutDialog } from "@/components/sign-out-dialog";
import { User, Settings, BadgeCheck, LogOut, Bell, Home } from "lucide-react";
import { NotificationBell } from "@/components/notification-bell";

function getInitials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((n) => n[0].toUpperCase())
    .join("");
}

export function ProfileDropdown({ hideNotifications, isOutside }: { hideNotifications?: boolean; isOutside?: boolean } = {}) {
  const [open, setOpen] = useDialogState();

  const userStr = localStorage.getItem("user");
  const user = userStr
    ? (() => {
        try {
          return JSON.parse(userStr);
        } catch {
          return null;
        }
      })()
    : null;

  const displayName = user?.companyName || user?.fullName || "AECCI Member";
  const displayEmail = user?.email || "member@aecci.org.in";
  const avatar = user?.profilePicture || "";
  const initials = getInitials(displayName);
  const role = user?.role || "user";

  const profileLink =
    role === "partner"
      ? "/partner/settings"
      : role === "admin"
        ? "/admin/settings"
        : "/dashboard/settings";

  const notificationsLink =
    role === "partner"
      ? "/partner/notifications"
      : role === "admin"
        ? "/admin/notifications"
        : "/dashboard/notifications";

  const dashboardLink =
    role === "admin"
      ? "/admin/dashboard"
      : role === "partner"
      ? "/partner/dashboard"
      : role === "importer"
      ? "/importer/dashboard"
      : role === "agent"
      ? "/agent/dashboard"
      : "/dashboard";

  return (
    <>
      <div className="flex items-center gap-3">
        {!hideNotifications && <NotificationBell />}

        <DropdownMenu modal={false}>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className={`relative rounded-full ${isOutside ? 'h-10 w-10' : 'h-8 w-8'}`}>
              <Avatar className={isOutside ? 'h-10 w-10' : 'h-8 w-8'}>
                <AvatarImage src={avatar} alt={displayName} />
                <AvatarFallback className="bg-primary/10 text-primary font-bold text-xs">
                  {initials}
                </AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="end" forceMount>
            <DropdownMenuLabel className="font-normal">
              <div className="flex flex-col gap-1.5">
                <p className="text-sm leading-none font-medium">{displayName}</p>
                <p className="text-xs leading-none text-muted-foreground">
                  {displayEmail}
                </p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              {isOutside ? (
                <DropdownMenuItem asChild>
                  <Link to={dashboardLink} className="flex items-center gap-2">
                    <Home className="size-4" />
                    Dashboard
                  </Link>
                </DropdownMenuItem>
              ) : (
                <>
                  <DropdownMenuItem asChild>
                    <Link to="/" className="flex items-center gap-2">
                      <Home className="size-4" />
                      Home
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to={profileLink} className="flex items-center gap-2">
                      <User className="size-4" />
                      Profile
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to={`${profileLink}/account`} className="flex items-center gap-2">
                      <BadgeCheck className="size-4" />
                      Account
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to={`${profileLink}`} className="flex items-center gap-2">
                      <Settings className="size-4" />
                      Settings
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to={notificationsLink} className="flex items-center gap-2">
                      <Bell className="size-4" />
                      Notifications
                    </Link>
                  </DropdownMenuItem>
                </>
              )}
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              variant="destructive"
              onClick={() => setOpen(true)}
              className="flex items-center gap-2"
            >
              <LogOut className="size-4" />
              Sign out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <SignOutDialog open={!!open} onOpenChange={setOpen} />
    </>
  );
}
