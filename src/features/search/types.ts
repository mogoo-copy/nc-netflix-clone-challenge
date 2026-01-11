interface BaseMedia {
  id: number;
  popularity: number;
  overview?: string;
  poster_path?: string | null;
  backdrop_path?: string | null;
  vote_average?: number;
  vote_count?: number;
  genre_ids?: number[];
  adult: boolean;
  original_language?: string;
}

export interface MovieResult extends BaseMedia {
  media_type: "movie";
  title: string;
  original_title: string;
  release_date?: string;
  video?: boolean;
}

export interface TvResult extends BaseMedia {
  media_type: "tv";
  name: string;
  original_name: string;
  first_air_date?: string;
  origin_country?: string[];
}

export interface PersonResult {
  media_type: "person";
  id: number;
  name: string;
  original_name?: string;
  popularity: number;
  gender?: number;
  known_for_department?: string;
  profile_path?: string | null;
  adult: boolean;

  known_for?: (MovieResult | TvResult)[];
}

export interface MultiSearchResponse {
  page: number;
  results: (MovieResult | TvResult | PersonResult)[];
  total_pages: number;
  total_results: number;
}

export interface MultiSearchOmitPersonResponse {
  page: number;
  results: (MovieResult | TvResult)[];
  total_pages: number;
  total_results: number;
}
