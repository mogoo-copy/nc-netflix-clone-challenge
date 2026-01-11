import { useScroll } from "motion/react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPlus, faStar } from "@fortawesome/free-solid-svg-icons";
import { faThumbsUp } from "@fortawesome/free-regular-svg-icons";

import { makeImagePath } from "../../../utils/imageUtils";

import type { Movie } from "../../../features/movies/types";
import type { Tv } from "../../../features/tvs/types";

import {
  AddBtn,
  Average,
  BtnRow,
  LikeBtn,
  ModalDescription,
  ModalImg,
  ModalTitle,
  Overlay,
  PlayBtn,
  SliderBoxModal,
  TitleArea,
} from "./style";

interface ModalProps {
  clickedSliderBox: Movie | Tv | undefined;
  slider: string;
  isMovie: boolean;
}

function Modal({ clickedSliderBox, slider, isMovie }: ModalProps) {
  const navigate = useNavigate();
  const { scrollY } = useScroll();

  const handleClickOverlay = () => {
    navigate(-1);
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  if (!clickedSliderBox) return null;

  return (
    <>
      <Overlay
        onClick={handleClickOverlay}
        initial={false}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />
      <SliderBoxModal
        layoutId={clickedSliderBox.id + slider}
        style={{ top: scrollY.get() + 100 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ type: "tween" }}
      >
        <ModalImg
          layoutId={clickedSliderBox.backdrop_path + slider}
          style={{
            backgroundImage: `linear-gradient(to top, black, transparent), url(${makeImagePath(
              clickedSliderBox.backdrop_path || "",
              "w500"
            )})`,
            originX: 0.5,
            originY: 0.5,
          }}
          transition={{ type: "tween" }}
        />
        <TitleArea>
          <ModalTitle>
            {isMovie ? (clickedSliderBox as Movie).title : (clickedSliderBox as Tv).name}
          </ModalTitle>
          <BtnRow>
            <PlayBtn>
              <FontAwesomeIcon icon={faPlay} />
              Play
            </PlayBtn>
            <AddBtn>
              <FontAwesomeIcon icon={faPlus} />
            </AddBtn>
            <LikeBtn>
              <FontAwesomeIcon icon={faThumbsUp} />
            </LikeBtn>
            <Average>
              <FontAwesomeIcon icon={faStar} />
              {clickedSliderBox.vote_average.toFixed(1)}
            </Average>
          </BtnRow>
        </TitleArea>
        <ModalDescription>{clickedSliderBox.overview}</ModalDescription>
      </SliderBoxModal>
    </>
  );
}

export default Modal;
