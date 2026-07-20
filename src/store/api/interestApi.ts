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
    getAllInterests: builder.query<any, void>({
      query: () => "interest",
      providesTags: ["Interest"],
    }),
  }),
});

export const {
  useSubmitInterestFormMutation,
  useGetAllInterestsQuery,
} = interestApi;
