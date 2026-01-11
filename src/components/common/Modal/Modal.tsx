import { useScroll } from "motion/react";
import { useNavigate } from "react-router-dom";

import { makeImagePath } from "../../../utils/imageUtils";
import type { Movie } from "../../../features/movies/types";
import { ModalDescription, ModalImg, ModalTitle, Overlay, SliderBoxModal } from "./style";

interface ModalProps {
  clickedSliderBox: Movie | undefined | "";
  slider: string;
}

function Modal({ clickedSliderBox, slider }: ModalProps) {
  const navigate = useNavigate();
  const { scrollY } = useScroll();

  const handleClickOverlay = () => {
    navigate("/", { replace: true });
  };

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
              clickedSliderBox.backdrop_path,
              "w500"
            )})`,
            originX: 0.5,
            originY: 0.5,
          }}
          transition={{ type: "tween" }}
        />
        <ModalTitle>{clickedSliderBox.title}</ModalTitle>
        <ModalDescription>{clickedSliderBox.overview}</ModalDescription>
      </SliderBoxModal>
    </>
  );
}

export default Modal;
