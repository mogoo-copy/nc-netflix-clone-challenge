import { motion } from "motion/react";
import styled from "styled-components";

export const SliderBoxModal = styled(motion.div)`
  position: fixed;
  width: 40vw;
  height: 80vh;
  left: 0;
  right: 0;
  margin: 0 auto;
  overflow: hidden;
  background-color: ${(props) => props.theme.black.lighter};
`;

export const ModalImg = styled(motion.div)`
  width: 100%;
  height: 500px;
  background-size: cover;
  background-position: center center;
`;

export const ModalTitle = styled.h3`
  font-size: 46px;
  position: relative;
  top: -100px;
  color: ${(props) => props.theme.white.lighter};
  padding: 20px;
`;

export const ModalDescription = styled.p`
  padding: 20px;
  position: relative;
  top: -80px;
  color: ${(props) => props.theme.white.darker};
`;

export const Overlay = styled(motion.div)`
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
`;
