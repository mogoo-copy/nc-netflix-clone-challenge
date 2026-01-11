import { motion } from "motion/react";
import styled from "styled-components";

export const WrapperDiv = styled.div`
  background-color: ${(props) => props.theme.black.veryDark};
`;

export const LoaderDiv = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MovieSliderDiv = styled.div`
  position: relative;
  height: 200px;
  width: 100%;
  margin-bottom: 50px;
`;

export const SliderBtn = styled(motion.button)`
  height: 50px;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  cursor: pointer;
  position: absolute;
  top: 100px;
  transform: translateY(-50%);
  z-index: 2;
  border: none;
  border-radius: 25px;
  outline: none;
  font-size: 30px;
  color: ${(props) => props.theme.white.darker};
`;

export const SliderRow = styled(motion.div)`
  height: 200px;
  width: 100%;
  position: absolute;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 10px;
  :first-child {
    transform-origin: left center;
  }
  :last-child {
    transform-origin: right center;
  }
`;
