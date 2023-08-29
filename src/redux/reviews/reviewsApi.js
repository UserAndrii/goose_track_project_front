import axios from 'axios';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const token = axios.defaults.headers.common.Authorization;

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
          request.headers.set('Authorization', token);
        },
      }),
      providesTags: ['Reviews'],
    }),

    createReview: builder.mutation({
      query: data => ({
        url: '/reviews/own',
        method: 'POST',
        body: data,
        async onQueryStarted(request) {
          request.headers.set('Authorization', token);
        },
      }),
      providesTags: ['Reviews'],
    }),

    editReview: builder.mutation({
      query: data => ({
        url: '/reviews/own',
        method: 'PATCH',
        body: data,
        async onQueryStarted(request) {
          request.headers.set('Authorization', token);
        },
      }),
      providesTags: ['Reviews'],
    }),

    deleteReview: builder.mutation({
      query: () => ({
        url: '/reviews/own',
        method: 'DELETE',
        async onQueryStarted(request) {
          request.headers.set('Authorization', token);
        },
      }),
      providesTags: ['Reviews'],
    }),
  }),
});

export const {
  useFetchReviewsQuery,
  useGetUserReviewQuery,
  useCreateReviewMutation,
  useEditReviewMutation,
  useDeleteReviewMutation,
} = reviewsApi;
