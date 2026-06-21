import { createApi, fetchBaseQuery, type BaseQueryFn, type FetchArgs, type FetchBaseQueryError } from '@reduxjs/toolkit/query/react';

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

const baseQueryWithReauth: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);
  
  if (result.error && result.error.status === 401) {
    const refreshToken = localStorage.getItem('refreshToken');
    if (refreshToken) {
      const refreshResult: any = await baseQuery(
        {
          url: 'auth/refresh-token',
          method: 'POST',
          body: { refreshToken },
        },
        api,
        extraOptions
      );
      
      if (refreshResult.data?.success) {
        localStorage.setItem('accessToken', refreshResult.data.data.accessToken);
        result = await baseQuery(args, api, extraOptions);
      } else {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        window.location.href = '/signup';
      }
    } else {
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      window.location.href = '/signup';
    }
  }
  return result;
};

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({
    uploadFile: builder.mutation<{ success: boolean; data: { url: string; key: string } }, { file: File, folder: string }>({
      query: ({ file, folder }) => {
        const formData = new FormData();
        formData.append('file', file);
        return {
          url: `upload?folder=${folder}`,
          method: 'POST',
          body: formData,
        };
      },
    }),
    sendOtp: builder.mutation<any, any>({
      query: (data) => ({
        url: 'auth/send-otp',
        method: 'POST',
        body: data,
      }),
    }),
    signup: builder.mutation<any, any>({
      query: (userData) => ({
        url: 'auth/signup',
        method: 'POST',
        body: userData,
      }),
    }),
    login: builder.mutation<any, any>({
      query: (userData) => ({
        url: 'auth/login',
        method: 'POST',
        body: userData,
      }),
    }),
    verifyOtp: builder.mutation<any, { email: string; otp: string }>({
      query: (data) => ({
        url: 'auth/verify-otp',
        method: 'POST',
        body: data,
      }),
    }),
    updateProfile: builder.mutation<any, any>({
      query: (profileData) => ({
        url: 'auth/profile',
        method: 'PATCH',
        body: profileData,
      }),
    }),
    refreshToken: builder.mutation<any, { refreshToken: string }>({
      query: (data) => ({
        url: 'auth/refresh-token',
        method: 'POST',
        body: data,
      }),
    }),
    forgotPassword: builder.mutation<any, { email: string }>({
      query: (data) => ({
        url: 'auth/forgot-password',
        method: 'POST',
        body: data,
      }),
    }),
    verifyResetOtp: builder.mutation<any, { email: string; otp: string }>({
      query: (data) => ({
        url: 'auth/verify-reset-otp',
        method: 'POST',
        body: data,
      }),
    }),
    resetPassword: builder.mutation<any, any>({
      query: (data) => ({
        url: 'auth/reset-password',
        method: 'POST',
        body: data,
      }),
    }),
  }),
});

export const { 
  useUploadFileMutation, 
  useSendOtpMutation, 
  useSignupMutation, 
  useLoginMutation, 
  useVerifyOtpMutation, 
  useUpdateProfileMutation, 
  useRefreshTokenMutation,
  useForgotPasswordMutation,
  useVerifyResetOtpMutation,
  useResetPasswordMutation
} = authApi;
