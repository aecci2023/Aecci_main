import { useEffect, useRef, useState } from "react";
import { Bell, CheckCircle2, XCircle, Info, AlertTriangle } from "lucide-react";
import { io, Socket } from "socket.io-client";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { formatDistanceToNow } from "date-fns";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface Notification {
  id: string;
  title: string;
  message: string;
  type: "success" | "info" | "warning" | "error" | "new-verification";
  link?: string;
  createdAt: string;
  read: boolean;
}

function getTokenPayload(): { id?: string; role?: string } {
  try {
    const token = localStorage.getItem("accessToken");
    if (!token) return {};
    const raw = token.split(".")[1];
    return JSON.parse(atob(raw.replace(/-/g, "+").replace(/_/g, "/")));
  } catch {
    return {};
  }
}

const typeIcon = {
  success: <CheckCircle2 className="size-4 text-emerald-500 shrink-0 mt-0.5" />,
  error: <XCircle className="size-4 text-red-500 shrink-0 mt-0.5" />,
  warning: <AlertTriangle className="size-4 text-amber-500 shrink-0 mt-0.5" />,
  info: <Info className="size-4 text-blue-500 shrink-0 mt-0.5" />,
  "new-verification": <Bell className="size-4 text-primary shrink-0 mt-0.5" />,
};

const typeDot = {
  success: "bg-emerald-500",
  error: "bg-red-500",
  warning: "bg-amber-500",
  info: "bg-blue-500",
  "new-verification": "bg-primary",
};

export function NotificationBell() {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [open, setOpen] = useState(false);
  const socketRef = useRef<Socket | null>(null);

  const unread = notifications.filter((n) => !n.read).length;

  useEffect(() => {
    const { id: userId, role } = getTokenPayload();
    if (!userId) return;

    const token = localStorage.getItem("accessToken");
    const socket = io(import.meta.env.VITE_API_URL || "http://localhost:5000", {
      auth: { token },
      transports: ["websocket"],
    });
    socketRef.current = socket;

    // Join rooms once connected (and re-join on reconnect)
    const joinRooms = () => {
      socket.emit("join-user-room", userId);
      if (role === "admin") {
        socket.emit("join-admin-room");
      }
    };
    socket.on("connect", joinRooms);

    // Generic notification events (KYC status, session updates, etc.)
    socket.on("notification", (payload: Omit<Notification, "id" | "read">) => {
      setNotifications((prev) => [
        {
          ...payload,
          id: `${Date.now()}-${Math.random()}`,
          read: false,
        },
        ...prev.slice(0, 49),
      ]);
    });

    // Admin-specific: new KYC submission
    if (role === "admin") {
      socket.on(
        "new-verification",
        (payload: { userId: string; fullName: string | null; companyName: string | null; userType: string | null; createdAt: string }) => {
          setNotifications((prev) => [
            {
              id: `${payload.userId}-${Date.now()}`,
              title: "New KYC Submission",
              message: `${payload.companyName || payload.fullName || "A user"} submitted for verification.`,
              type: "new-verification",
              link: "/admin/verifications",
              createdAt: payload.createdAt,
              read: false,
            },
            ...prev.slice(0, 49),
          ]);
        }
      );
    }

    return () => {
      socket.disconnect();
    };
  }, []);

  const markAllRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
  };

  const handleOpen = (val: boolean) => {
    setOpen(val);
    if (val && unread > 0) markAllRead();
  };

  return (
    <Popover open={open} onOpenChange={handleOpen}>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          {unread > 0 && (
            <span className="absolute -top-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white leading-none">
              {unread > 9 ? "9+" : unread}
            </span>
          )}
          <span className="sr-only">Notifications</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent align="end" className="w-80 p-0">
        <div className="flex items-center justify-between px-4 py-3 border-b">
          <h3 className="text-sm font-semibold">Notifications</h3>
          {notifications.length > 0 && (
            <button
              className="text-xs text-muted-foreground hover:text-foreground"
              onClick={markAllRead}
            >
              Mark all read
            </button>
          )}
        </div>
        <div className="max-h-80 overflow-y-auto">
          {notifications.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-10 text-muted-foreground text-sm gap-2">
              <Bell className="h-6 w-6 opacity-40" />
              <p>No notifications yet</p>
            </div>
          ) : (
            notifications.map((n) => {
              const inner = (
                <div className={cn(
                  "flex items-start gap-3 px-4 py-3 transition-colors border-b last:border-0",
                  !n.read ? "bg-muted/30" : "hover:bg-muted/20"
                )}>
                  {typeIcon[n.type] ?? typeIcon.info}
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-foreground flex items-center gap-1.5">
                      {!n.read && (
                        <span className={cn("h-1.5 w-1.5 rounded-full shrink-0", typeDot[n.type] ?? "bg-primary")} />
                      )}
                      {n.title}
                    </p>
                    <p className="text-xs text-muted-foreground mt-0.5 line-clamp-2">{n.message}</p>
                    <p className="text-[10px] text-muted-foreground mt-1">
                      {formatDistanceToNow(new Date(n.createdAt), { addSuffix: true })}
                    </p>
                  </div>
                </div>
              );

              return n.link ? (
                <Link
                  key={n.id}
                  to={n.link}
                  className="block no-underline"
                  onClick={() => setOpen(false)}
                >
                  {inner}
                </Link>
              ) : (
                <div key={n.id}>{inner}</div>
              );
            })
          )}
        </div>
        {notifications.length > 0 && (
          <div className="border-t px-4 py-2 flex justify-between items-center">
            <span className="text-xs text-muted-foreground">{notifications.length} notification{notifications.length !== 1 ? "s" : ""}</span>
            <button
              className="text-xs text-destructive hover:underline"
              onClick={() => setNotifications([])}
            >
              Clear all
            </button>
          </div>
        )}
      </PopoverContent>
    </Popover>
  );
}
