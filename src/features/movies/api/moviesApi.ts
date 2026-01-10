import tmdbApi from "../../../api/tmdbApi";
import type { MovieDetail, MoviesResponse } from "../types";

const moviesApi = tmdbApi.injectEndpoints({
  endpoints: (builder) => ({
    getNowPlaying: builder.query<MoviesResponse, void>({
      query: () => "movie/now_playing",
      providesTags: ["Movie"],
    }),
  }),
});

export const { useGetNowPlayingQuery } = moviesApi;
