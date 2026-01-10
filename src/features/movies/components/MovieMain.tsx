import { useGetNowPlayingQuery } from "../api/moviesApi";
import { makeImagePath } from "../../../utils/imageUtils";
import { BannerDiv, LoaderDiv, MovieOverview, MovieTitle, WrapperDiv } from "./MovieMain.style";

function MovieMain() {
  const { data, isLoading } = useGetNowPlayingQuery();
  return (
    <WrapperDiv>
      {isLoading ? (
        <LoaderDiv>Loading...</LoaderDiv>
      ) : (
        <>
          <BannerDiv $bgPhoto={makeImagePath(data?.results[0].backdrop_path || "")}>
            <MovieTitle>{data?.results[0].title}</MovieTitle>
            <MovieOverview>{data?.results[0].overview}</MovieOverview>
          </BannerDiv>
        </>
      )}
    </WrapperDiv>
  );
}

export default MovieMain;
