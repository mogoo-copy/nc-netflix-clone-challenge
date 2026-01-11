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
  background-color: ${(props) => props.theme.black.veryDark};
  z-index: 6;
`;

export const ModalImg = styled(motion.div)`
  width: 100%;
  height: 500px;
  background-size: cover;
  background-position: center center;
`;

export const TitleArea = styled.div`
  position: relative;
  top: -130px;
  padding: 20px;
`;

export const ModalTitle = styled.h3`
  font-size: 46px;

  color: ${(props) => props.theme.white.lighter};
`;

export const BtnRow = styled.div`
  padding: 10px;
  font-size: 30px;
  display: flex;
  align-items: center;
`;

export const PlayBtn = styled.button`
  cursor: pointer;
  outline: none;
  border: none;
  height: 30px;
  width: 80px;
  :first-child {
    font-size: 20px;
  }
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  margin-right: 10px;
  border-radius: 5px;
`;

export const AddBtn = styled.button`
  height: 30px;
  width: 30px;
  border-radius: 50%;
  cursor: pointer;
  color: ${(props) => props.theme.white.lighter};
  background-color: transparent;
  outline: none;
  margin-right: 10px;
  border: 1px solid ${(props) => props.theme.white.lighter};
`;

export const LikeBtn = styled.button`
  height: 30px;
  width: 30px;
  border-radius: 50%;
  cursor: pointer;
  color: ${(props) => props.theme.white.lighter};
  background-color: transparent;
  outline: none;
  border: 1px solid ${(props) => props.theme.white.lighter};
  margin-right: 30px;
`;

export const Average = styled.div`
  font-size: 20px;
  :first-child {
    color: yellow;
  }
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
  z-index: 5;
`;
