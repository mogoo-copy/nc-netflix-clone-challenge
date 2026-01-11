import styled from "styled-components";

export const WrapperDiv = styled.div`
  background-color: ${(props) => props.theme.black.veryDark};
`;

export const LoaderDiv = styled.div`
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BannerDiv = styled.div<{ $bgPhoto: string }>`
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 60px;
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)),
    url(${(props) => props.$bgPhoto});
  background-size: cover;
`;

export const TvTitle = styled.h2`
  font-size: 68px;
  text-indent: 30px;
  margin-bottom: 20px;
`;

export const TvOverview = styled.p`
  width: 50%;
  font-size: 30px;
`;
