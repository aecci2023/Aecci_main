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

export const jobApplicationApi = createApi({
  reducerPath: "jobApplicationApi",
  baseQuery,
  tagTypes: ["JobApplications"],
  endpoints: (builder) => ({
    createJobApplication: builder.mutation<any, any>({
      query: (body) => ({
        url: "job-applications",
        method: "POST",
        body,
      }),
      invalidatesTags: ["JobApplications"],
    }),
    getAllJobApplications: builder.query<any, void>({
      query: () => "job-applications",
      providesTags: ["JobApplications"],
    }),
  }),
});

export const {
  useCreateJobApplicationMutation,
  useGetAllJobApplicationsQuery,
} = jobApplicationApi;
