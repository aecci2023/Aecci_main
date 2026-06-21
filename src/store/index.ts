import { configureStore } from '@reduxjs/toolkit';
import { authApi } from './api/authApi';
import { adminApi } from './api/adminApi';
import { sessionApi } from './api/sessionApi';
import { countryIntelligenceApi } from './api/countryIntelligenceApi';
import { questionApi } from './api/questionApi';

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [adminApi.reducerPath]: adminApi.reducer,
    [sessionApi.reducerPath]: sessionApi.reducer,
    [countryIntelligenceApi.reducerPath]: countryIntelligenceApi.reducer,
    [questionApi.reducerPath]: questionApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authApi.middleware, 
      adminApi.middleware, 
      sessionApi.middleware,
      countryIntelligenceApi.middleware,
      questionApi.middleware
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
