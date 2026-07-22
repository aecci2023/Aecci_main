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

export const interestApi = createApi({
  reducerPath: "interestApi",
  baseQuery,
  tagTypes: ["Interest"],
  endpoints: (builder) => ({
    submitInterestForm: builder.mutation<any, any>({
      query: (body) => ({
        url: "interest",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Interest"],
    }),
    updateInterestStatus: builder.mutation<any, { id: string; status: string }>({
      query: ({ id, status }) => ({
        url: `interest/${id}/status`,
        method: "PATCH",
        body: { status },
      }),
      invalidatesTags: ["Interest"],
    }),
    approveInterest: builder.mutation<any, string>({
      query: (id) => ({
        url: `interest/${id}/approve`,
        method: "POST",
      }),
      invalidatesTags: ["Interest"],
    }),
    getAllInterests: builder.query<any, void>({
      query: () => "interest",
      providesTags: ["Interest"],
    }),
    getInterestById: builder.query<any, string>({
      query: (id) => `interest/${id}`,
      providesTags: ["Interest"],
    }),
  }),
});

export const {
  useSubmitInterestFormMutation,
  useGetAllInterestsQuery,
  useUpdateInterestStatusMutation,
  useApproveInterestMutation,
  useGetInterestByIdQuery,
} = interestApi;
