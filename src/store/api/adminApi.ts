import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api/",
  prepareHeaders: (headers) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

export const adminApi = createApi({
  reducerPath: "adminApi",
  baseQuery,
  tagTypes: ["Users", "Availability"],
  endpoints: (builder) => ({
    getUsers: builder.query<
      any,
      {
        role?: string;
        userType?: string;
        verificationStatus?: string;
        partnerId?: string;
      }
    >({
      query: (params) => {
        let queryString = "";
        if (
          params.role ||
          params.userType ||
          params.verificationStatus ||
          params.partnerId
        ) {
          const searchParams = new URLSearchParams();
          if (params.role) searchParams.append("role", params.role);
          if (params.userType) searchParams.append("userType", params.userType);
          if (params.verificationStatus)
            searchParams.append("verificationStatus", params.verificationStatus);
          if (params.partnerId)
            searchParams.append("partnerId", params.partnerId);
          queryString = `?${searchParams.toString()}`;
        }
        return `users${queryString}`;
      },
      providesTags: ["Users"],
    }),
    getUserById: builder.query<any, string>({
      query: (id) => `users/${id}`,
      providesTags: (_result, _error, id) => [{ type: "Users", id }],
    }),
    updateVerificationStatus: builder.mutation<
      any,
      {
        id: string;
        verificationStatus: string;
        reason?: string;
        partnerId?: string;
        assignedPartnerFee?: number | string;
        assignedPartnerSlot?: string;
      }
    >({
      query: ({ id, ...body }) => ({
        url: `users/${id}/verification`,
        method: "PATCH",
        body,
      }),
      invalidatesTags: ["Users"],
    }),
    createPartnerManually: builder.mutation<any, any>({
      query: (body) => ({
        url: "partners/admin/create",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Users"],
    }),
    assignPartner: builder.mutation<any, { id: string; partnerId: string }>({
      query: ({ id, partnerId }) => ({
        url: `users/${id}/assign-partner`,
        method: "POST",
        body: { partnerId },
      }),
      invalidatesTags: ["Users"],
    }),
    setPricing: builder.mutation<any, { id: string; dealRoomPrice: number }>({
      query: ({ id, dealRoomPrice }) => ({
        url: `users/${id}/pricing`,
        method: "POST",
        body: { dealRoomPrice },
      }),
      invalidatesTags: ["Users"],
    }),
    processPayment: builder.mutation<any, string>({
      query: (id) => ({
        url: `users/${id}/payment`,
        method: "POST",
      }),
      invalidatesTags: ["Users"],
    }),

    // --- Payments ---
    createPaymentOrder: builder.mutation<
      any,
      { sessionId: string; userId: string }
    >({
      query: (body) => ({
        url: "/payment/create-order",
        method: "POST",
        body,
      }),
    }),
    verifyPayment: builder.mutation<any, any>({
      query: (body) => ({
        url: "/payment/verify",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Users"],
    }),

    // --- Subscriptions ---
    createSubscriptionOrder: builder.mutation<any, { planName: string }>({
      query: (body) => ({
        url: "/payment/subscription/create-order",
        method: "POST",
        body,
      }),
    }),
    verifySubscriptionPayment: builder.mutation<
      any,
      {
        razorpay_order_id: string;
        razorpay_payment_id: string;
        razorpay_signature: string;
        planName: string;
      }
    >({
      query: (body) => ({
        url: "/payment/subscription/verify",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Users"],
    }),
    getAdminDashboardStats: builder.query<any, void>({
      query: () => "admin/dashboard",
      providesTags: ["Users"],
    }),
    getSubscriptionHistory: builder.query<any, void>({
      query: () => "/payment/subscription/history",
      providesTags: ["Users"],
    }),

    // --- Marketplace Partners ---
    getMarketplacePartners: builder.query<any, { country?: string } | void>({
      query: (params) => {
        let queryString = "";
        const country = (params as { country?: string })?.country;
        if (country) {
          queryString = `?country=${encodeURIComponent(country)}`;
        }
        return `partners/marketplace/list${queryString}`;
      },
      providesTags: ["Users"],
    }),
    getMarketplacePartnerDetail: builder.query<any, string>({
      query: (userId) => `partners/marketplace/detail/${userId}`,
      providesTags: (_result, _error, userId) => [
        { type: "Users", id: userId },
      ],
    }),

    // --- Partners ---
    getPartnerProfiles: builder.query<any, string | void>({
      query: (status) =>
        status ? `partners/profiles?status=${status}` : `partners/profiles`,
      providesTags: ["Users"],
    }),
    updatePartnerStatus: builder.mutation<
      any,
      { userId: string; status: string; tier?: string; reason?: string }
    >({
      query: ({ userId, status, tier, reason }) => ({
        url: `partners/profiles/${userId}/status`,
        method: "PUT",
        body: { status, tier, reason },
      }),
      invalidatesTags: ["Users"],
    }),
    getPartnerProfile: builder.query<any, string | void>({
      query: (userId) =>
        userId ? `partners/profiles/${userId}` : `partners/me`,
      providesTags: ["Users"],
    }),
    getMyPartnerProfile: builder.query<any, void>({
      query: () => `partners/me`,
      providesTags: ["Users"],
    }),
    setupPartnerProfile: builder.mutation<any, any>({
      query: (body) => ({
        url: `partners/setup`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["Users"],
    }),

    // --- Deal Room Availability (date-wise IST slots) ---
    getMyAvailability: builder.query<any, void>({
      query: () => `partners/availability`,
      providesTags: ["Availability"],
    }),
    saveMyAvailability: builder.mutation<
      any,
      {
        slots: Array<{
          date: string;
          startTime: string;
          endTime: string;
          status?: string;
          note?: string;
        }>;
      }
    >({
      query: (body) => ({
        url: `partners/availability`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["Availability", "Users"],
    }),
    getPartnerOpenSlots: builder.query<any, string>({
      query: (partnerId) => `partners/${partnerId}/open-slots`,
      providesTags: (_result, _error, partnerId) => [
        { type: "Availability", id: partnerId },
      ],
    }),
  }),
});

export const {
  useGetUsersQuery,
  useGetUserByIdQuery,
  useUpdateVerificationStatusMutation,
  useAssignPartnerMutation,
  useSetPricingMutation,
  useProcessPaymentMutation,
  useCreatePaymentOrderMutation,
  useVerifyPaymentMutation,
  useGetPartnerProfilesQuery,
  useUpdatePartnerStatusMutation,
  useGetPartnerProfileQuery,
  useGetMyPartnerProfileQuery,
  useSetupPartnerProfileMutation,
  useCreatePartnerManuallyMutation,
  useCreateSubscriptionOrderMutation,
  useVerifySubscriptionPaymentMutation,
  useGetSubscriptionHistoryQuery,
  useGetMarketplacePartnersQuery,
  useGetMarketplacePartnerDetailQuery,
  useGetAdminDashboardStatsQuery,
  useGetMyAvailabilityQuery,
  useSaveMyAvailabilityMutation,
  useGetPartnerOpenSlotsQuery,
} = adminApi;
