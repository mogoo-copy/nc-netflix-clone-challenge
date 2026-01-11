import { makeImagePath } from "../../../utils/imageUtils";
import { useGetAiringTodayQuery } from "../api/tvsApi";
import { BannerDiv, LoaderDiv, TvOverview, TvTitle, WrapperDiv } from "./TvMain.style";

function TvMain() {
  const { data, isLoading } = useGetAiringTodayQuery();
  return (
    <WrapperDiv>
      {isLoading ? (
        <LoaderDiv>Loading...</LoaderDiv>
      ) : (
        <>
          <BannerDiv $bgPhoto={makeImagePath(data?.results[0].backdrop_path || "")}>
            <TvTitle>{data?.results[0].name}</TvTitle>
            <TvOverview>{data?.results[0].overview}</TvOverview>
          </BannerDiv>
        </>
      )}
    </WrapperDiv>
  );
}

export default TvMain;
