import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const token = '';

export const reviewsApi = createApi({
  reducerPath: 'reviews',

  baseQuery: fetchBaseQuery({
    baseUrl: 'https://goose-track-project-back.onrender.com/',
  }),

  tagTypes: ['Reviews'],

  endpoints: builder => ({
    fetchReviews: builder.query({
      query: () => '/reviews',
      providesTags: ['Reviews'],
    }),

    getUserReview: builder.query({
      query: () => ({
        url: '/reviews/own',
        async onQueryStarted(request) {
          request.headers.set('Authorization', `Bearer ${token}`);
        },
      }),
      providesTags: ['Reviews'],
    }),

    createReview: builder.mutation({
      query: ({ rating, message }) => ({
        url: '/reviews/own',
        method: 'POST',
        body: { rating, message },
        async onQueryStarted(request) {
          request.headers.set('Authorization', `Bearer ${token}`);
        },
      }),
      providesTags: ['Reviews'],
    }),

    editReview: builder.mutation({
      query: ({ rating, message }) => ({
        url: '/reviews/own',
        method: 'PATCH',
        body: { rating, message },
        async onQueryStarted(request) {
          request.headers.set('Authorization', `Bearer ${token}`);
        },
      }),
      providesTags: ['Reviews'],
    }),

    deleteReview: builder.mutation({
      query: () => ({
        url: '/reviews/own',
        method: 'DELETE',
        async onQueryStarted(request) {
          request.headers.set('Authorization', `Bearer ${token}`);
        },
      }),
      providesTags: ['Reviews'],
    }),
  }),
});

export const {
  useFetchReviewsQuery,
  useGetUserReviewQuery,
  useCreateReviewQuery,
  useEditReviewQuery,
  useDeleteReviewQuery,
} = reviewsApi;
