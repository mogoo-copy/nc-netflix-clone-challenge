import tmdbApi from "../../../api/tmdbApi";
import type { MovieDetail, MoviesResponse } from "../types";

const moviesApi = tmdbApi.injectEndpoints({
  endpoints: (builder) => ({
    getNowPlaying: builder.query<MoviesResponse, void>({
      query: () => "movie/now_playing",
      providesTags: ["Movie"],
    }),
    getPopular: builder.query<MoviesResponse, void>({
      query: () => "movie/popular",
      providesTags: ["Movie"],
    }),
    getTopRated: builder.query<MoviesResponse, void>({
      query: () => "movie/top_rated",
      providesTags: ["Movie"],
    }),
    getUpcoming: builder.query<MoviesResponse, void>({
      query: () => "movie/upcoming",
      providesTags: ["Movie"],
    }),
    getMovieDetail: builder.query<MovieDetail, string>({
      query: (movieId) => `movie/${movieId}`,
      providesTags: ["Movie"],
    }),
  }),
});

export const {
  useGetNowPlayingQuery,
  useGetPopularQuery,
  useGetTopRatedQuery,
  useGetUpcomingQuery,
  useGetMovieDetailQuery,
} = moviesApi;
