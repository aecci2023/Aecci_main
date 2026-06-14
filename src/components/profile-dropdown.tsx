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
import { User, Settings, BadgeCheck, LogOut, Bell } from "lucide-react";

export function ProfileDropdown() {
  const [open, setOpen] = useDialogState();

  return (
    <>
      <div className="flex items-center gap-3">
        {/* Notifications Bell Dropdown */}
        <DropdownMenu modal={false}>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="relative size-8 rounded-full border border-border"
            >
              <Bell className="size-4 text-muted-foreground hover:text-foreground" />
              <span className="absolute -top-1.5 -right-1.5 size-4 bg-primary text-primary-foreground text-[9px] font-bold rounded-full flex items-center justify-center animate-pulse">
                3
              </span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-80" align="end" forceMount>
            <DropdownMenuLabel className="font-semibold text-sm">
              Notifications (3 Unread)
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <div className="max-h-64 overflow-y-auto">
              <DropdownMenuItem
                asChild
                className="p-3 cursor-pointer focus:bg-muted/50 border-b border-border/40 last:border-b-0"
              >
                <Link
                  to="/dashboard/messages"
                  className="flex flex-col items-start gap-1"
                >
                  <span className="text-xs font-bold text-foreground flex items-center gap-1.5">
                    <span className="size-1.5 rounded-full bg-primary animate-ping" />
                    New Sourcing Inquiry
                  </span>
                  <span className="text-[11px] text-muted-foreground leading-relaxed">
                    KNCCI Nairobi desk matched your cotton woven label specs to
                    a buyer.
                  </span>
                  <span className="text-[9px] text-muted-foreground mt-0.5">
                    10 minutes ago
                  </span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem
                asChild
                className="p-3 cursor-pointer focus:bg-muted/50 border-b border-border/40 last:border-b-0"
              >
                <Link
                  to="/dashboard/messages"
                  className="flex flex-col items-start gap-1"
                >
                  <span className="text-xs font-bold text-foreground flex items-center gap-1.5">
                    <span className="size-1.5 rounded-full bg-primary animate-ping" />
                    Slot Confirmed
                  </span>
                  <span className="text-[11px] text-muted-foreground leading-relaxed">
                    Your matchmaking session slot for India-Kenya textile round
                    is active.
                  </span>
                  <span className="text-[9px] text-muted-foreground mt-0.5">
                    2 hours ago
                  </span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem
                asChild
                className="p-3 cursor-pointer focus:bg-muted/50"
              >
                <Link
                  to="/dashboard/messages"
                  className="flex flex-col items-start gap-1"
                >
                  <span className="text-xs font-bold text-foreground flex items-center gap-1.5">
                    <span className="size-1.5 rounded-full bg-primary animate-ping" />
                    GST ID Verified
                  </span>
                  <span className="text-[11px] text-muted-foreground leading-relaxed">
                    Bilateral trade clearance desk has verified your GSTIN
                    registration.
                  </span>
                  <span className="text-[9px] text-muted-foreground mt-0.5">
                    Yesterday
                  </span>
                </Link>
              </DropdownMenuItem>
            </div>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              asChild
              className="text-center font-medium text-xs text-primary justify-center cursor-pointer py-2 hover:underline"
            >
              <Link to="/dashboard/messages">View all in Message Hub</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Profile Dropdown */}
        <DropdownMenu modal={false}>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="relative h-8 w-8 rounded-full">
              <Avatar className="h-8 w-8">
                <AvatarImage src="" alt="AECCI Member" />
                <AvatarFallback className="bg-primary/10 text-primary font-bold">
                  AM
                </AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="end" forceMount>
            <DropdownMenuLabel className="font-normal">
              <div className="flex flex-col gap-1.5">
                <p className="text-sm leading-none font-medium">AECCI Member</p>
                <p className="text-xs leading-none text-muted-foreground">
                  member@aecci.org.in
                </p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem asChild>
                <Link
                  to="/dashboard/profile-settings"
                  className="flex items-center gap-2"
                >
                  <User className="size-4" />
                  Profile
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link
                  to="/dashboard/profile-settings"
                  className="flex items-center gap-2"
                >
                  <BadgeCheck className="size-4" />
                  Account
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link
                  to="/dashboard/profile-settings"
                  className="flex items-center gap-2"
                >
                  <Settings className="size-4" />
                  Settings
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link
                  to="/dashboard/messages"
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
