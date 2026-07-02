import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface AppNotification {
  id: string;
  type: "success" | "info" | "warning" | "error" | "new-verification";
  title?: string;
  message?: string;
  link?: string;
  createdAt: string;
  read: boolean;
  // Admin specific fields for KYC
  fullName?: string | null;
  companyName?: string | null;
  userType?: string | null;
  userId?: string;
}

interface NotificationsState {
  items: AppNotification[];
  isConnected: boolean;
}

const initialState: NotificationsState = {
  items: [],
  isConnected: false,
};

const notificationsSlice = createSlice({
  name: "notifications",
  initialState,
  reducers: {
    setConnectionStatus: (state, action: PayloadAction<boolean>) => {
      state.isConnected = action.payload;
    },
    addNotification: (state, action: PayloadAction<AppNotification>) => {
      // Ensure no duplicates by ID
      const exists = state.items.some(n => n.id === action.payload.id);
      if (!exists) {
        state.items.unshift(action.payload);
      }
    },
    markAllAsRead: (state) => {
      state.items.forEach((n) => {
        n.read = true;
      });
    },
    markAsRead: (state, action: PayloadAction<string>) => {
      const notif = state.items.find((n) => n.id === action.payload);
      if (notif) {
        notif.read = true;
      }
    },
    clearAll: (state) => {
      state.items = [];
    },
  },
});

export const {
  setConnectionStatus,
  addNotification,
  markAllAsRead,
  markAsRead,
  clearAll,
} = notificationsSlice.actions;

export default notificationsSlice.reducer;
