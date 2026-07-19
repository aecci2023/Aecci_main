import { Link } from "react-router-dom";
import {
  BadgeCheck,
  ChevronsUpDown,
  LogOut,
  User,
  Settings,
  Bell,
} from "lucide-react";
import useDialogState from "@/hooks/use-dialog-state";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { SignOutDialog } from "@/components/sign-out-dialog";

type NavUserProps = {
  user: {
    name: string;
    email: string;
    avatar: string;
  };
};

export function NavUser({ user: fallback }: NavUserProps) {
  const { isMobile } = useSidebar();
  const [open, setOpen] = useDialogState();

  const stored = localStorage.getItem("user");
  const lsUser = stored
    ? (() => {
        try {
          return JSON.parse(stored);
        } catch {
          return null;
        }
      })()
    : null;

  const name =
    lsUser?.companyName || lsUser?.fullName || fallback.name || "Member";
  const email = lsUser?.email || fallback.email;
  const avatar = lsUser?.profilePicture || fallback.avatar || "";
  const role = lsUser?.role || "user";
  const initials = name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((n: string) => n[0].toUpperCase())
    .join("");

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

  return (
    <>
      <SidebarMenu>
        <SidebarMenuItem>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <SidebarMenuButton
                size="lg"
                className="data-[state=open]:bg-white/10 data-[state=open]:text-white"
              >
                <Avatar className="h-8 w-8 rounded-lg">
                  <AvatarImage src={avatar} alt={name} />
                  <AvatarFallback className="rounded-lg bg-primary/10 text-primary font-bold text-xs">
                    {initials}
                  </AvatarFallback>
                </Avatar>
                <div className="grid flex-1 text-start text-sm leading-tight">
                  <span className="truncate font-semibold">{name}</span>
                  <span className="truncate text-xs text-white/70">
                    {email}
                  </span>
                </div>
                <ChevronsUpDown className="ms-auto size-4" />
              </SidebarMenuButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
              side={isMobile ? "bottom" : "right"}
              align="end"
              sideOffset={4}
            >
              <DropdownMenuLabel className="p-0 font-normal">
                <div className="flex items-center gap-2 px-1 py-1.5 text-start text-sm">
                  <Avatar className="h-8 w-8 rounded-lg">
                    <AvatarImage src={avatar} alt={name} />
                    <AvatarFallback className="rounded-lg bg-primary/10 text-primary font-bold text-xs">
                      {initials}
                    </AvatarFallback>
                  </Avatar>
                  <div className="grid flex-1 text-start text-sm leading-tight">
                    <span className="truncate font-semibold">{name}</span>
                    <span className="truncate text-xs text-white/70">
                      {email}
                    </span>
                  </div>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
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
                  <Link
                    to={`${profileLink}`}
                    className="flex items-center gap-2"
                  >
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
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                variant="destructive"
                onClick={() => setOpen(true)}
              >
                <LogOut className="size-4" />
                Sign out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </SidebarMenuItem>
      </SidebarMenu>

      <SignOutDialog open={!!open} onOpenChange={setOpen} />
    </>
  );
}
