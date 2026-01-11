import type { Variants } from "motion/react";
import { useNavigate } from "react-router-dom";

import { useGetNowPlayingQuery } from "../api/moviesApi";
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
  const { data, isLoading } = useGetNowPlayingQuery();

  const navigate = useNavigate();

  const handleClickSliderBox = (movieId: number) => () => {
    navigate(`/movies/${movieId}`);
  };

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
                {data?.results.slice(1).map((movie) => (
                  <SliderBox
                    key={movie.id}
                    variants={sliderBoxVariants}
                    whileHover="hover"
                    transition={{ type: "tween" }}
                    onClick={handleClickSliderBox(movie.id)}
                    layoutId={String(movie.id)}
                  >
                    <SliderBoxImg
                      layoutId={movie.backdrop_path}
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
