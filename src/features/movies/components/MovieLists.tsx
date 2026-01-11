import type { Variants } from "motion/react";
import { useNavigate } from "react-router-dom";

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

  const navigate = useNavigate();

  const handleClickSliderBox = (movieId: number) => () => {
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
                    onClick={handleClickSliderBox(movie.id)}
                    layoutId={String(movie.id) + "latest"}
                  >
                    <SliderBoxImg
                      layoutId={movie.backdrop_path + "latest"}
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
                    onClick={handleClickSliderBox(movie.id)}
                    layoutId={String(movie.id) + "popular"}
                  >
                    <SliderBoxImg
                      layoutId={movie.backdrop_path + "popular"}
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
                    onClick={handleClickSliderBox(movie.id)}
                    layoutId={String(movie.id) + "top"}
                  >
                    <SliderBoxImg
                      layoutId={movie.backdrop_path + "top"}
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
                    onClick={handleClickSliderBox(movie.id)}
                    layoutId={String(movie.id) + "upcoming"}
                  >
                    <SliderBoxImg
                      layoutId={movie.backdrop_path + "upcoming"}
                      $bgPhoto={makeImagePath(movie.poster_path)}
                      transition={{ type: "tween" }}
                    />
                  </SliderBox>
                ))}
              </Slider>
            </WrapperSlider>
          </Container>
        </>
      )}
    </WrapperDiv>
  );
}

export default MovieLists;
