import tmdbApi from "../../../api/tmdbApi";
import type { TvDetail, TvsResponse } from "../types";

const moviesApi = tmdbApi.injectEndpoints({
  endpoints: (builder) => ({
    getAiringToday: builder.query<TvsResponse, void>({
      query: () => "tv/airing_today",
      providesTags: ["Tv"],
    }),
    getTvPopular: builder.query<TvsResponse, void>({
      query: () => "tv/popular",
      providesTags: ["Tv"],
    }),
    getTvTopRated: builder.query<TvsResponse, void>({
      query: () => "tv/top_rated",
      providesTags: ["Tv"],
    }),
    getOnTheAir: builder.query<TvsResponse, void>({
      query: () => "tv/on_the_air",
      providesTags: ["Tv"],
    }),
  }),
});

export const {
  useGetAiringTodayQuery,
  useGetTvPopularQuery,
  useGetTvTopRatedQuery,
  useGetOnTheAirQuery,
} = moviesApi;
