import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
export const reviewsApi = createApi({
  reducerPath: 'reviews',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://goose-track-project-back.onrender.com/',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
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
      }),
      providesTags: ['Reviews'],
    }),
    createReview: builder.mutation({
      query: data => ({
        url: '/reviews/own',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Reviews'],
    }),
    editReview: builder.mutation({
      query: data => ({
        url: '/reviews/own',
        method: 'PATCH',
        body: data,
      }),
      invalidatesTags: ['Reviews'],
    }),
    deleteReview: builder.mutation({
      query: () => ({
        url: '/reviews/own',
        method: 'DELETE',
      }),
      invalidatesTags: ['Reviews'],
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