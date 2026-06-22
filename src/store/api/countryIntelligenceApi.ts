import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({ 
  baseUrl: import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api/',
  prepareHeaders: (headers) => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      headers.set('authorization', `Bearer ${token}`);
    }
    return headers;
  },
});

export const countryIntelligenceApi = createApi({
  reducerPath: 'countryIntelligenceApi',
  baseQuery,
  tagTypes: ['CountryIntelligence'],
  endpoints: (builder) => ({
    getCountryBriefs: builder.query<any, void>({
      query: () => 'country-intelligence',
      providesTags: ['CountryIntelligence'],
    }),
    getCountryBriefById: builder.query<any, string>({
      query: (id) => `country-intelligence/${id}`,
      providesTags: (_result, _error, id) => [{ type: 'CountryIntelligence', id }],
    }),
    createCountryBrief: builder.mutation<any, any>({
      query: (body) => ({
        url: 'country-intelligence',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['CountryIntelligence'],
    }),
    updateCountryBrief: builder.mutation<any, { id: string; body: any }>({
      query: ({ id, body }) => ({
        url: `country-intelligence/${id}`,
        method: 'PUT',
        body,
      }),
      invalidatesTags: ['CountryIntelligence'],
    }),
    deleteCountryBrief: builder.mutation<any, string>({
      query: (id) => ({
        url: `country-intelligence/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['CountryIntelligence'],
    }),
  }),
});

export const { 
  useGetCountryBriefsQuery, 
  useGetCountryBriefByIdQuery, 
  useCreateCountryBriefMutation, 
  useUpdateCountryBriefMutation, 
  useDeleteCountryBriefMutation 
} = countryIntelligenceApi;
