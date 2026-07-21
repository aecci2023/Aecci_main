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
import {
  User,
  Settings,
  BadgeCheck,
  LogOut,
  Bell,
  Home,
  ChevronDown,
} from "lucide-react";
import { NotificationBell } from "@/components/notification-bell";

function getInitials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((n) => n[0].toUpperCase())
    .join("");
}

export function ProfileDropdown({
  hideNotifications,
  isOutside,
  exporterHeader,
}: {
  hideNotifications?: boolean;
  isOutside?: boolean;
  exporterHeader?: boolean;
} = {}) {
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

  const displayName = user?.fullName || user?.companyName || "Swarn Dhiman";
  const displayEmail = user?.email || "member@aecci.org.in";
  const avatar = user?.profilePicture || "";
  const initials = getInitials(displayName) || "SD";
  const role = user?.role || "exporter";
  const roleLabel = role.charAt(0).toUpperCase() + role.slice(1);

  const profileLink =
    role === "partner"
      ? "/partner/settings"
      : role === "admin"
        ? "/admin/settings"
        : role === "exporter"
          ? "/dashboard/my-profile"
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
        {!hideNotifications && !exporterHeader && <NotificationBell />}

        <DropdownMenu modal={false}>
          <DropdownMenuTrigger asChild>
            {exporterHeader ? (
              <Button
                variant="ghost"
                className="relative h-11 gap-2.5 rounded-full px-1.5 pr-1.5 text-left hover:bg-[#F8FAFC]"
              >
                <Avatar className="size-9">
                  <AvatarImage src={avatar} alt={displayName} />
                  <AvatarFallback className="bg-[#0EA5A6] text-xs font-bold text-white">
                    {initials}
                  </AvatarFallback>
                </Avatar>
                <div className="hidden min-w-0 flex-col leading-tight sm:flex">
                  <span className="max-w-[140px] truncate text-[13px] font-bold text-[#101828]">
                    {displayName}
                  </span>
                  <span className="text-[11px] font-medium text-[#667085]">
                    {roleLabel}
                  </span>
                </div>
                <span className="flex size-6 items-center justify-center rounded-full border border-[#E4E7EC] bg-[#F9FAFB]">
                  <ChevronDown className="size-3.5 text-[#667085]" />
                </span>
              </Button>
            ) : (
              <Button
                variant="ghost"
                className={
                  isOutside
                    ? "relative h-10 w-10 rounded-full p-0"
                    : "relative h-11 gap-2 rounded-full px-1.5 pr-2 text-left hover:bg-[#F8FAFC]"
                }
              >
                <Avatar className={isOutside ? "h-10 w-10" : "h-9 w-9"}>
                  <AvatarImage src={avatar} alt={displayName} />
                  <AvatarFallback className="bg-[#0EA5A6] text-xs font-bold text-white">
                    {initials}
                  </AvatarFallback>
                </Avatar>
                {!isOutside && (
                  <>
                    <div className="hidden min-w-0 flex-col leading-tight sm:flex">
                      <span className="max-w-32 truncate text-[13px] font-bold text-[#101828]">
                        {displayName}
                      </span>
                      <span className="text-[10px] font-medium capitalize text-[#667085]">
                        {roleLabel}
                      </span>
                    </div>
                    <ChevronDown className="size-4 text-[#98A2B3]" />
                  </>
                )}
              </Button>
            )}
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
                    <Link
                      to={`${profileLink}/account`}
                      className="flex items-center gap-2"
                    >
                      <BadgeCheck className="size-4" />
                      Account
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to={profileLink} className="flex items-center gap-2">
                      <Settings className="size-4" />
                      Settings
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link
                      to={notificationsLink}
                      className="flex items-center gap-2"
                    >
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
