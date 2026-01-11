import tmdbApi from "../../../api/tmdbApi";
import type { TvDetail, TvsResponse } from "../types";

const moviesApi = tmdbApi.injectEndpoints({
  endpoints: (builder) => ({
    getAiringToday: builder.query<TvsResponse, void>({
      query: () => "tv/airing_today",
      providesTags: ["Tv"],
    }),
    getPopular: builder.query<TvsResponse, void>({
      query: () => "tv/popular",
      providesTags: ["Tv"],
    }),
    getTopRated: builder.query<TvsResponse, void>({
      query: () => "tv/top_rated",
      providesTags: ["Tv"],
    }),
    getOnTheAir: builder.query<TvsResponse, void>({
      query: () => "tv/OnTheAir",
      providesTags: ["Tv"],
    }),
  }),
});

export const {
  useGetAiringTodayQuery,
  useGetPopularQuery,
  useGetTopRatedQuery,
  useGetOnTheAirQuery,
} = moviesApi;
