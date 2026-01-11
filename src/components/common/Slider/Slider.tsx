import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AnimatePresence, type Variants } from "motion/react";
import { Children, useEffect, useState, type ReactNode } from "react";
import { MovieSliderDiv, SliderBtn, SliderRow } from "./style";

const sliderVariants: Variants = {
  hidden: ([direction, windowWidth]: [number, number]) => ({
    x: direction > 0 ? -windowWidth - 10 : windowWidth + 10,
  }),
  normal: { x: 0 },
  exit: ([direction, windowWidth]: [number, number]) => ({
    x: direction > 0 ? windowWidth + 10 : -windowWidth - 10,
  }),
};

const offset = 6;

interface SliderProps {
  children: ReactNode;
}

function Slider({ children }: SliderProps) {
  const [index, setIndex] = useState(0);
  const [leaving, setLeaving] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [direction, setDirection] = useState(0);
  const childArray = Children.toArray(children);
  const totalChildren = childArray.length;
  const maxIndex = Math.floor(totalChildren / offset - 1);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleLeaving = () => setLeaving((prev) => !prev);

  const decreaseIndex = () => {
    if (leaving) return;
    setLeaving(true);
    setDirection(1);
    setIndex((prev) => Math.max(prev - 1, 0));
  };

  const increaseIndex = () => {
    if (leaving) return;
    setLeaving(true);
    setDirection(-1);
    setIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  return (
    <MovieSliderDiv>
      <SliderBtn
        onClick={decreaseIndex}
        initial={false}
        animate={{ visibility: index === 0 ? "hidden" : "visible" }}
        style={{ left: "15px" }}
      >
        <FontAwesomeIcon icon={faAngleLeft} />
      </SliderBtn>
      <AnimatePresence
        initial={false}
        onExitComplete={toggleLeaving}
        custom={[direction, windowWidth]}
      >
        <SliderRow
          key={index}
          custom={[direction, windowWidth]}
          variants={sliderVariants}
          initial="hidden"
          animate="normal"
          exit="exit"
          transition={{ type: "tween", duration: 1 }}
        >
          {childArray.slice(index * offset, index * offset + offset)}
        </SliderRow>
      </AnimatePresence>
      <SliderBtn
        onClick={increaseIndex}
        animate={{ visibility: index === maxIndex ? "hidden" : "visible" }}
        style={{ right: "15px" }}
      >
        <FontAwesomeIcon icon={faAngleRight} />
      </SliderBtn>
    </MovieSliderDiv>
  );
}

export default Slider;
