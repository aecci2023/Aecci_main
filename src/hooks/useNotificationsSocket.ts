import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { io, Socket } from "socket.io-client";
import {
  addNotification,
  setConnectionStatus,
  type AppNotification,
} from "@/store/slices/notificationsSlice";

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

export function useNotificationsSocket() {
  const dispatch = useDispatch();
  const socketRef = useRef<Socket | null>(null);

  useEffect(() => {
    const { id: userId, role } = getTokenPayload();
    if (!userId) return;

    const token = localStorage.getItem("accessToken");
    const socketUrl = import.meta.env.VITE_API_URL || "http://localhost:5000";

    const socket = io(socketUrl, {
      auth: { token },
      transports: ["websocket"],
    });

    socketRef.current = socket;

    socket.on("connect", () => {
      dispatch(setConnectionStatus(true));
      socket.emit("join-user-room", userId);
      if (role === "admin") {
        socket.emit("join-admin-room");
      }
    });

    socket.on("disconnect", () => {
      dispatch(setConnectionStatus(false));
    });

    // Generic notification events
    socket.on("notification", (payload: Omit<AppNotification, "id" | "read">) => {
      dispatch(
        addNotification({
          ...payload,
          id: `${Date.now()}-${Math.random()}`,
          read: false,
        })
      );
    });

    // Admin-specific events
    if (role === "admin") {
      socket.on(
        "new-verification",
        (payload: {
          userId: string;
          fullName: string | null;
          companyName: string | null;
          userType: string | null;
          createdAt: string;
        }) => {
          dispatch(
            addNotification({
              id: `${payload.userId}-${Date.now()}`,
              type: "new-verification",
              title: "New User Registration",
              message: `${payload.companyName || payload.fullName || "A user"} submitted for verification.`,
              link: "/admin/verifications",
              read: false,
              ...payload, // Keep extra fields if needed
            })
          );
        }
      );
    }

    return () => {
      socket.disconnect();
      dispatch(setConnectionStatus(false));
    };
  }, [dispatch]);

  return socketRef;
}
