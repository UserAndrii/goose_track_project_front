import { configureStore } from '@reduxjs/toolkit';
import {
  //   persistStore,
  //   persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import { reviewsApi } from './reviews/reviewsApi';
import { tasksApi } from './tasks/tasksApi';

export const store = configureStore({
  reducer: {
    [reviewsApi.reducerPath]: reviewsApi.reducer,
    [tasksApi.reducerPath]: tasksApi.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    reviewsApi.middleware,
  ],
});
