import { useEffect, useRef, useState } from "react";
import { Bell } from "lucide-react";
import { io, Socket } from "socket.io-client";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { formatDistanceToNow } from "date-fns";
import { Link } from "react-router-dom";

interface Notification {
  id: string;
  type: "new-verification";
  fullName: string | null;
  companyName: string | null;
  userType: string | null;
  userId: string;
  createdAt: string;
  read: boolean;
}

export function AdminNotificationBell() {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [open, setOpen] = useState(false);
  const socketRef = useRef<Socket | null>(null);

  const unread = notifications.filter((n) => !n.read).length;

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    const socket = io(import.meta.env.VITE_API_URL, {
      auth: { token },
      transports: ["websocket"],
    });
    socketRef.current = socket;

    socket.emit("join-admin-room");

    socket.on(
      "new-verification",
      (payload: Omit<Notification, "id" | "type" | "read">) => {
        setNotifications((prev) => [
          {
            ...payload,
            id: `${payload.userId}-${Date.now()}`,
            type: "new-verification",
            read: false,
          },
          ...prev.slice(0, 49),
        ]);
      },
    );

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
            notifications.map((n) => (
              <Link
                key={n.id}
                to={`/admin/verifications`}
                className="flex items-start gap-3 px-4 py-3 hover:bg-muted/40 transition-colors border-b last:border-0 no-underline"
                onClick={() => setOpen(false)}
              >
                <div
                  className={`mt-1 h-2 w-2 rounded-full shrink-0 ${n.read ? "bg-transparent" : "bg-primary"}`}
                />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-foreground truncate">
                    {n.companyName || n.fullName || "New user"}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {n.userType || "User"} submitted for verification
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {formatDistanceToNow(new Date(n.createdAt), {
                      addSuffix: true,
                    })}
                  </p>
                </div>
              </Link>
            ))
          )}
        </div>
        {notifications.length > 0 && (
          <div className="border-t px-4 py-2">
            <Link
              to="/admin/verifications"
              className="text-xs text-primary hover:underline"
              onClick={() => setOpen(false)}
            >
              View all verifications →
            </Link>
          </div>
        )}
      </PopoverContent>
    </Popover>
  );
}
