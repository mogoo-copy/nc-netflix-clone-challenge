import type { Variants } from "motion";
import { useState } from "react";
import { useMatch, useNavigate } from "react-router-dom";
import { AnimatePresence } from "motion/react";

import {
  Container,
  LoaderDiv,
  SliderBox,
  SliderBoxImg,
  SliderTitle,
  WrapperDiv,
  WrapperSlider,
} from "./TvLists.style";
import Slider from "../../../components/common/Slider";
import { makeImagePath } from "../../../utils/imageUtils";
import Modal from "../../../components/common/Modal";
import {
  useGetAiringTodayQuery,
  useGetOnTheAirQuery,
  useGetTvPopularQuery,
  useGetTvTopRatedQuery,
} from "../api/tvsApi";
import type { TvsResponse } from "../types";

const sliderBoxVariants: Variants = {
  hover: {
    scale: 1.3,
    transition: {
      delay: 0.5,
      duration: 0.3,
    },
  },
};

function TvLists() {
  const { data: airingTodayData, isLoading: airingTodayLoading } = useGetAiringTodayQuery();
  const { data: popularData, isLoading: popularLoading } = useGetTvPopularQuery();
  const { data: topRatedData, isLoading: topRatedLoading } = useGetTvTopRatedQuery();
  const { data: onTheAirData, isLoading: onTheAirLoading } = useGetOnTheAirQuery();

  const [chosenData, setChosenData] = useState<TvsResponse | undefined>(undefined);
  const [chosenSlider, setChosenSlider] = useState<string>("");

  const navigate = useNavigate();
  const tvModalMatch = useMatch("/tvs/:tvId");

  const clickedSliderBox =
    tvModalMatch?.params.tvId &&
    chosenData?.results.find((tv) => String(tv.id) === tvModalMatch.params.tvId);

  const handleClickSliderBox = (tvId: number, tvData: TvsResponse, slider: string) => () => {
    setChosenData(tvData);
    setChosenSlider(slider);
    navigate(`/tvs/${tvId}`);
  };

  const isLoading = airingTodayLoading || popularLoading || topRatedLoading || onTheAirLoading;

  return (
    <WrapperDiv>
      {isLoading ? (
        <LoaderDiv>Loading...</LoaderDiv>
      ) : (
        <>
          <Container>
            <WrapperSlider>
              <SliderTitle>Airing today</SliderTitle>
              <Slider>
                {airingTodayData?.results.slice(1).map((tv) => (
                  <SliderBox
                    key={tv.id}
                    variants={sliderBoxVariants}
                    whileHover="hover"
                    transition={{ type: "tween" }}
                    onClick={handleClickSliderBox(tv.id, airingTodayData, "airingToday")}
                    layoutId={String(tv.id) + "airingToday"}
                  >
                    <SliderBoxImg
                      layoutId={tv.backdrop_path + "airingToday"}
                      $bgPhoto={makeImagePath(tv.poster_path)}
                      transition={{ type: "tween" }}
                    />
                  </SliderBox>
                ))}
              </Slider>
            </WrapperSlider>
            <WrapperSlider>
              <SliderTitle>Popular tvs</SliderTitle>
              <Slider>
                {popularData?.results.slice(1).map((tv) => (
                  <SliderBox
                    key={tv.id}
                    variants={sliderBoxVariants}
                    whileHover="hover"
                    transition={{ type: "tween" }}
                    onClick={handleClickSliderBox(tv.id, popularData, "popular")}
                    layoutId={String(tv.id) + "popular"}
                  >
                    <SliderBoxImg
                      layoutId={tv.backdrop_path + "popular"}
                      $bgPhoto={makeImagePath(tv.poster_path)}
                      transition={{ type: "tween" }}
                    />
                  </SliderBox>
                ))}
              </Slider>
            </WrapperSlider>
            <WrapperSlider>
              <SliderTitle>Top Rated tvs</SliderTitle>
              <Slider>
                {topRatedData?.results.slice(1).map((tv) => (
                  <SliderBox
                    key={tv.id}
                    variants={sliderBoxVariants}
                    whileHover="hover"
                    transition={{ type: "tween" }}
                    onClick={handleClickSliderBox(tv.id, topRatedData, "top")}
                    layoutId={String(tv.id) + "top"}
                  >
                    <SliderBoxImg
                      layoutId={tv.backdrop_path + "top"}
                      $bgPhoto={makeImagePath(tv.poster_path)}
                      transition={{ type: "tween" }}
                    />
                  </SliderBox>
                ))}
              </Slider>
            </WrapperSlider>
            <WrapperSlider>
              <SliderTitle>On the air</SliderTitle>
              <Slider>
                {onTheAirData?.results.slice(1).map((tv) => (
                  <SliderBox
                    key={tv.id}
                    variants={sliderBoxVariants}
                    whileHover="hover"
                    transition={{ type: "tween" }}
                    onClick={handleClickSliderBox(tv.id, onTheAirData, "onTheAir")}
                    layoutId={String(tv.id) + "onTheAir"}
                  >
                    <SliderBoxImg
                      layoutId={tv.backdrop_path + "onTheAir"}
                      $bgPhoto={makeImagePath(tv.poster_path)}
                      transition={{ type: "tween" }}
                    />
                  </SliderBox>
                ))}
              </Slider>
            </WrapperSlider>
          </Container>
          <AnimatePresence>
            {/* {tvModalMatch ? (
              <Modal clickedSliderBox={clickedSliderBox} slider={chosenSlider} />
            ) : null} */}
          </AnimatePresence>
        </>
      )}
    </WrapperDiv>
  );
}

export default TvLists;
