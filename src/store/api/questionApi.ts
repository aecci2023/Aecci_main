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

export const questionApi = createApi({
  reducerPath: 'questionApi',
  baseQuery,
  tagTypes: ['Questions'],
  endpoints: (builder) => ({
    askQuestion: builder.mutation<any, any>({
      query: (body) => ({
        url: 'questions',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Questions'],
    }),
    getMyQuestions: builder.query<any, void>({
      query: () => 'questions/my-questions',
      providesTags: ['Questions'],
    }),
    getPartnerQuestions: builder.query<any, void>({
      query: () => 'questions/partner-questions',
      providesTags: ['Questions'],
    }),
    answerQuestion: builder.mutation<any, { id: string; answer: string }>({
      query: ({ id, answer }) => ({
        url: `questions/${id}/answer`,
        method: 'PUT',
        body: { answer },
      }),
      invalidatesTags: ['Questions'],
    }),
  }),
});

export const { 
  useAskQuestionMutation, 
  useGetMyQuestionsQuery, 
  useGetPartnerQuestionsQuery, 
  useAnswerQuestionMutation 
} = questionApi;
