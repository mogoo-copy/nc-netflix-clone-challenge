import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const tmdbApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.themoviedb.org/3/",
    prepareHeaders: (headers) => {
      const TMDB_TOKEN = import.meta.env.VITE_TMDB_API_TOKEN;
      if (TMDB_TOKEN) {
        headers.set("Authorization", `Bearer ${TMDB_TOKEN}`);
      }
      return headers;
    },
  }),
  tagTypes: ["Movie", "Tv"],
  endpoints: () => ({}),
});

export default tmdbApi;
