import { motion } from "motion/react";
import styled from "styled-components";

export const WrapperDiv = styled.div`
  background-color: ${(props) => props.theme.black.darker};
  height: 100vh;
`;

export const LoaderDiv = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const WrapperSlider = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-bottom: 50px;
`;

export const SliderTitle = styled.h3`
  font-size: 30px;
  color: ${(props) => props.theme.white.lighter};
  margin-bottom: 20px;
  padding: 0 30px;
  font-weight: 600;
`;

export const SliderBox = styled(motion.div)`
  font-size: 66px;
  cursor: pointer;
`;

export const SliderBoxImg = styled(motion.div)<{ $bgPhoto: string }>`
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.$bgPhoto});
  background-size: 100% 100%;
  background-position: center center;
`;
