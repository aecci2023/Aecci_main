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

export const adminApi = createApi({
  reducerPath: 'adminApi',
  baseQuery,
  tagTypes: ['Users'],
  endpoints: (builder) => ({
    getUsers: builder.query<any, { role?: string; userType?: string; kycStatus?: string; partnerId?: string }>({
      query: (params) => {
        let queryString = '';
        if (params.role || params.userType || params.kycStatus || params.partnerId) {
          const searchParams = new URLSearchParams();
          if (params.role) searchParams.append('role', params.role);
          if (params.userType) searchParams.append('userType', params.userType);
          if (params.kycStatus) searchParams.append('kycStatus', params.kycStatus);
          if (params.partnerId) searchParams.append('partnerId', params.partnerId);
          queryString = `?${searchParams.toString()}`;
        }
        return `users${queryString}`;
      },
      providesTags: ['Users'],
    }),
    getUserById: builder.query<any, string>({
      query: (id) => `users/${id}`,
      providesTags: (_result, _error, id) => [{ type: 'Users', id }],
    }),
    updateKycStatus: builder.mutation<any, { id: string; kycStatus: string }>({
      query: ({ id, kycStatus }) => ({
        url: `users/${id}/kyc`,
        method: 'PATCH',
        body: { kycStatus },
      }),
      invalidatesTags: ['Users'],
    }),
    assignPartner: builder.mutation<any, { id: string; partnerId: string }>({
      query: ({ id, partnerId }) => ({
        url: `users/${id}/assign-partner`,
        method: 'POST',
        body: { partnerId },
      }),
      invalidatesTags: ['Users'],
    }),
    setPricing: builder.mutation<any, { id: string; dealRoomPrice: number }>({
      query: ({ id, dealRoomPrice }) => ({
        url: `users/${id}/pricing`,
        method: 'POST',
        body: { dealRoomPrice },
      }),
      invalidatesTags: ['Users'],
    }),
    processPayment: builder.mutation<any, string>({
      query: (id) => ({
        url: `users/${id}/payment`,
        method: 'POST',
      }),
      invalidatesTags: ['Users'],
    }),
    
    // --- Payments ---
    createPaymentOrder: builder.mutation<any, { sessionId: string; userId: string }>({
      query: (body) => ({
        url: '/payment/create-order',
        method: 'POST',
        body,
      }),
    }),
    verifyPayment: builder.mutation<any, any>({
      query: (body) => ({
        url: '/payment/verify',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Users'],
    }),

  }),
});

export const { 
  useGetUsersQuery, 
  useGetUserByIdQuery, 
  useUpdateKycStatusMutation,
  useAssignPartnerMutation,
  useSetPricingMutation,
  useProcessPaymentMutation,
  useCreatePaymentOrderMutation,
  useVerifyPaymentMutation,
} = adminApi;
