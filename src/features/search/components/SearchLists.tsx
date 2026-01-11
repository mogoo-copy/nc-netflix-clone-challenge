import { useLocation, useMatch, useNavigate } from "react-router-dom";
import { AnimatePresence, type Variants } from "motion/react";
import { useState } from "react";

import { useGetMultiSearchQuery } from "../api/searchApi";
import {
  Container,
  LoaderDiv,
  SliderBox,
  SliderBoxImg,
  SliderTitle,
  WrapperDiv,
  WrapperSlider,
} from "./SearchLists.style";
import Slider from "../../../components/common/Slider";
import { makeImagePath } from "../../../utils/imageUtils";
import type { MultiSearchOmitPersonResponse } from "../types";
import Modal from "../../../components/common/Modal";

const sliderBoxVariants: Variants = {
  hover: {
    scale: 1.3,
    transition: {
      delay: 0.5,
      duration: 0.3,
    },
  },
};

function SearchLists() {
  const location = useLocation();
  const keyword = new URLSearchParams(location.search).get("keyword");
  const { data, isLoading } = useGetMultiSearchQuery(keyword ?? "", { skip: !keyword });

  const [chosenData, setChosenData] = useState<MultiSearchOmitPersonResponse | undefined>(
    undefined
  );
  const [chosenSlider, setChosenSlider] = useState<string>("");

  const navigate = useNavigate();
  const searchModalMatch = useMatch("/search/:searchId");

  const clickedSliderBox = searchModalMatch?.params.searchId
    ? chosenData?.results.find((result) => String(result.id) === searchModalMatch.params.searchId)
    : undefined;

  const handleClickSliderBox =
    (searchId: number, searchData: MultiSearchOmitPersonResponse, slider: string) => () => {
      setChosenData(searchData);
      setChosenSlider(slider);
      navigate(`/search/${searchId}`);
    };

  return (
    <WrapperDiv>
      {isLoading ? (
        <LoaderDiv>Loading...</LoaderDiv>
      ) : (
        <>
          <Container>
            <WrapperSlider>
              <SliderTitle>Search result</SliderTitle>
              <Slider>
                {data?.results.map((result) => (
                  <SliderBox
                    key={result.id}
                    variants={sliderBoxVariants}
                    whileHover="hover"
                    transition={{ type: "tween" }}
                    onClick={handleClickSliderBox(result.id, data, "multi")}
                    layoutId={String(result.id) + "multi"}
                  >
                    <SliderBoxImg
                      layoutId={result.backdrop_path + String(result.id) + "multi"}
                      $bgPhoto={makeImagePath(result.poster_path || result.backdrop_path || "")}
                      transition={{ type: "tween" }}
                    />
                  </SliderBox>
                ))}
              </Slider>
            </WrapperSlider>
          </Container>
          <AnimatePresence>
            {searchModalMatch ? (
              <Modal clickedSliderBox={clickedSliderBox} slider={chosenSlider} isMovie={false} />
            ) : null}
          </AnimatePresence>
        </>
      )}
    </WrapperDiv>
  );
}

export default SearchLists;
