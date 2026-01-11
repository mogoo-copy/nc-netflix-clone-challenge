import tmdbApi from "../../../api/tmdbApi";
import type {
  MovieResult,
  MultiSearchOmitPersonResponse,
  MultiSearchResponse,
  TvResult,
} from "../types";

const searchApi = tmdbApi.injectEndpoints({
  endpoints: (builder) => ({
    getMultiSearch: builder.query<MultiSearchOmitPersonResponse, string>({
      query: (keyword) => `search/multi?query=${keyword}`,
      transformResponse: (response: MultiSearchResponse) => {
        return {
          ...response,
          results: response.results.filter((item): item is MovieResult | TvResult => {
            if (item.media_type === "person") return false;

            const hasImage = item.poster_path || item.backdrop_path;

            return !!hasImage;
          }),
        };
      },
    }),
  }),
});

export const { useGetMultiSearchQuery } = searchApi;
