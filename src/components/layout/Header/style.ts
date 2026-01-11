import { motion } from "motion/react";
import styled from "styled-components";

export const Nav = styled(motion.nav)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  top: 0;
  background-color: ${(props) => props.theme.black.darker};
  font-size: 14px;
  padding: 20px 60px;
  color: ${(props) => props.theme.white.lighter};
  z-index: 100;
`;

export const Col = styled.div`
  display: flex;
  align-items: center;
`;

export const Logo = styled(motion.svg)`
  margin-right: 50px;
  width: 95px;
  height: 25px;
  fill: ${(props) => props.theme.red};
  path {
    stroke: ${(props) => props.theme.red};
    stroke-width: 3px;
    stroke-miterlimit: 10;
  }
`;

export const Items = styled.ul`
  display: flex;
  align-items: center;
  min-height: 40px;
`;

export const Item = styled.li`
  margin-right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
`;

export const ItemBottomBar = styled(motion.div)`
  width: 100%;
  height: 3px;
  border-radius: 2px;
  background-color: ${(props) => props.theme.red};
  position: absolute;
  bottom: -5px;
`;

export const SearchForm = styled.form`
  color: ${(props) => props.theme.white.lighter};
  display: flex;
  align-items: center;
  position: relative;
`;

export const SearchSVG = styled(motion.svg)`
  height: 25px;
  fill: ${(props) => props.theme.white.lighter};
  cursor: pointer;
`;

export const SearchInput = styled(motion.input)`
  position: absolute;
  right: 0px;
  z-index: -1;
  height: 40px;
  border: 1px solid ${(props) => props.theme.white.lighter};
  outline: none;
  border-radius: 5px;
  transform-origin: right center;
  min-width: 280px;
  padding: 5px 10px;
  padding-left: 40px;
  font-size: 16px;
  color: ${(props) => props.theme.white.lighter};
  background-color: transparent;
`;
