import { AnimatePresence, type Variants } from "motion/react";
import { useMatch, useNavigate } from "react-router-dom";
import { useState } from "react";

import {
  useGetNowPlayingQuery,
  useGetPopularQuery,
  useGetTopRatedQuery,
  useGetUpcomingQuery,
} from "../api/moviesApi";
import { makeImagePath } from "../../../utils/imageUtils";
import Slider from "../../../components/common/Slider";
import {
  Container,
  LoaderDiv,
  SliderBox,
  SliderBoxImg,
  SliderTitle,
  WrapperDiv,
  WrapperSlider,
} from "./MovieLists.style";
import type { MoviesResponse } from "../types";
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

function MovieLists() {
  const { data: nowPlayingData, isLoading: nowPlayingLoading } = useGetNowPlayingQuery();
  const { data: popularData, isLoading: popularLoading } = useGetPopularQuery();
  const { data: topRatedData, isLoading: topRatedLoading } = useGetTopRatedQuery();
  const { data: upcomingData, isLoading: upcomingLoading } = useGetUpcomingQuery();

  const [chosenData, setChosenData] = useState<MoviesResponse | undefined>(undefined);
  const [chosenSlider, setChosenSlider] = useState<string>("");

  const navigate = useNavigate();
  const movieModalMatch = useMatch("/movies/:movieId");

  const clickedSliderBox = movieModalMatch?.params.movieId
    ? chosenData?.results.find((movie) => String(movie.id) === movieModalMatch.params.movieId)
    : undefined;

  const handleClickSliderBox =
    (movieId: number, movieData: MoviesResponse, slider: string) => () => {
      setChosenData(movieData);
      setChosenSlider(slider);
      navigate(`/movies/${movieId}`);
    };

  const isLoading = nowPlayingLoading || popularLoading || topRatedLoading || upcomingLoading;

  return (
    <WrapperDiv>
      {isLoading ? (
        <LoaderDiv>Loading...</LoaderDiv>
      ) : (
        <>
          <Container>
            <WrapperSlider>
              <SliderTitle>Latest movies</SliderTitle>
              <Slider>
                {nowPlayingData?.results.slice(1).map((movie) => (
                  <SliderBox
                    key={movie.id}
                    variants={sliderBoxVariants}
                    whileHover="hover"
                    transition={{ type: "tween" }}
                    onClick={handleClickSliderBox(movie.id, nowPlayingData, "latest")}
                    layoutId={String(movie.id) + "latest"}
                  >
                    <SliderBoxImg
                      layoutId={movie.backdrop_path + String(movie.id) + "latest"}
                      $bgPhoto={makeImagePath(movie.poster_path)}
                      transition={{ type: "tween" }}
                    />
                  </SliderBox>
                ))}
              </Slider>
            </WrapperSlider>
            <WrapperSlider>
              <SliderTitle>Popular movies</SliderTitle>
              <Slider>
                {popularData?.results.slice(1).map((movie) => (
                  <SliderBox
                    key={movie.id}
                    variants={sliderBoxVariants}
                    whileHover="hover"
                    transition={{ type: "tween" }}
                    onClick={handleClickSliderBox(movie.id, popularData, "popular")}
                    layoutId={String(movie.id) + "popular"}
                  >
                    <SliderBoxImg
                      layoutId={movie.backdrop_path + String(movie.id) + "popular"}
                      $bgPhoto={makeImagePath(movie.poster_path)}
                      transition={{ type: "tween" }}
                    />
                  </SliderBox>
                ))}
              </Slider>
            </WrapperSlider>
            <WrapperSlider>
              <SliderTitle>Top Rated movies</SliderTitle>
              <Slider>
                {topRatedData?.results.slice(1).map((movie) => (
                  <SliderBox
                    key={movie.id}
                    variants={sliderBoxVariants}
                    whileHover="hover"
                    transition={{ type: "tween" }}
                    onClick={handleClickSliderBox(movie.id, topRatedData, "top")}
                    layoutId={String(movie.id) + "top"}
                  >
                    <SliderBoxImg
                      layoutId={movie.backdrop_path + String(movie.id) + "top"}
                      $bgPhoto={makeImagePath(movie.poster_path)}
                      transition={{ type: "tween" }}
                    />
                  </SliderBox>
                ))}
              </Slider>
            </WrapperSlider>
            <WrapperSlider>
              <SliderTitle>Upcoming movies</SliderTitle>
              <Slider>
                {upcomingData?.results.slice(1).map((movie) => (
                  <SliderBox
                    key={movie.id}
                    variants={sliderBoxVariants}
                    whileHover="hover"
                    transition={{ type: "tween" }}
                    onClick={handleClickSliderBox(movie.id, upcomingData, "upcoming")}
                    layoutId={String(movie.id) + "upcoming"}
                  >
                    <SliderBoxImg
                      layoutId={movie.backdrop_path + String(movie.id) + "upcoming"}
                      $bgPhoto={makeImagePath(movie.poster_path)}
                      transition={{ type: "tween" }}
                    />
                  </SliderBox>
                ))}
              </Slider>
            </WrapperSlider>
          </Container>
          <AnimatePresence>
            {movieModalMatch ? (
              <Modal clickedSliderBox={clickedSliderBox} slider={chosenSlider} isMovie={true} />
            ) : null}
          </AnimatePresence>
        </>
      )}
    </WrapperDiv>
  );
}

export default MovieLists;
