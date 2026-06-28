import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_API_BASE_URL,
  prepareHeaders: (headers) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

export const sessionApi = createApi({
  reducerPath: "sessionApi",
  baseQuery,
  tagTypes: ["Sessions", "Registrations"],
  endpoints: (builder) => ({
    getSessions: builder.query<any, Record<string, any> | void>({
      query: (params) => {
        let queryString = "";
        if (params) {
          const searchParams = new URLSearchParams();
          Object.keys(params).forEach((key) => {
            if (params[key]) searchParams.append(key, params[key]);
          });
          queryString = `?${searchParams.toString()}`;
        }
        return `sessions${queryString}`;
      },
      providesTags: ["Sessions"],
    }),
    getSessionById: builder.query<any, string>({
      query: (id) => `sessions/${id}`,
      providesTags: (_result, _error, id) => [{ type: "Sessions", id }],
    }),
    createSession: builder.mutation<any, any>({
      query: (body) => ({
        url: `sessions`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["Sessions"],
    }),
    bookSession: builder.mutation<any, string>({
      query: (sessionId) => ({
        url: `sessions/${sessionId}/book`,
        method: "POST",
      }),
      invalidatesTags: ["Sessions", "Registrations"],
    }),
    requestSession: builder.mutation<
      any,
      { partnerId: string; date: string; questionnaire: string }
    >({
      query: (body) => ({
        url: `sessions/request`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["Sessions"],
    }),
    getMySessions: builder.query<any, void>({
      query: () => `sessions/my-sessions`,
      providesTags: ["Sessions"],
    }),
    getPendingSessions: builder.query<any, void>({
      query: () => `sessions/admin/pending`,
      providesTags: ["Sessions"],
    }),
    approveSession: builder.mutation<any, string>({
      query: (id) => ({
        url: `sessions/${id}/approve`,
        method: "PATCH",
      }),
      invalidatesTags: ["Sessions"],
    }),
    rejectSession: builder.mutation<any, string>({
      query: (id) => ({
        url: `sessions/${id}/reject`,
        method: "PATCH",
      }),
      invalidatesTags: ["Sessions"],
    }),
    submitSessionSummary: builder.mutation<
      any,
      { sessionId: string; summary: string }
    >({
      query: ({ sessionId, summary }) => ({
        url: `sessions/${sessionId}/summary`,
        method: "POST",
        body: { summary },
      }),
      invalidatesTags: ["Sessions"],
    }),

    // --- Services ---
    getServices: builder.query<any, void>({
      query: () => `services`,
    }),
    purchaseService: builder.mutation<
      any,
      { serviceType: string; price: number }
    >({
      query: (body) => ({
        url: `services/purchase`,
        method: "POST",
        body,
      }),
    }),
    getUserPurchases: builder.query<any, void>({
      query: () => `services/my-purchases`,
    }),

    // --- Reports ---
    getOpportunityReports: builder.query<any, void>({
      query: () => `reports`,
    }),
    createOpportunityReport: builder.mutation<
      any,
      {
        sessionId: string;
        marketSummary: string;
        potentialRoutes: string;
        recommendations: string;
        userId: string;
      }
    >({
      query: (body) => ({
        url: `reports`,
        method: "POST",
        body,
      }),
    }),
  }),
});

export const {
  useGetSessionsQuery,
  useGetSessionByIdQuery,
  useCreateSessionMutation,
  useBookSessionMutation,
  useRequestSessionMutation,
  useGetMySessionsQuery,
  useGetPendingSessionsQuery,
  useApproveSessionMutation,
  useRejectSessionMutation,
  useSubmitSessionSummaryMutation,
  useGetServicesQuery,
  usePurchaseServiceMutation,
  useGetUserPurchasesQuery,
  useGetOpportunityReportsQuery,
  useCreateOpportunityReportMutation,
} = sessionApi;
