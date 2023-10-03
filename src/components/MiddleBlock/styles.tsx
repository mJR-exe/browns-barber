import styled from "styled-components";

export const MiddleBlockSection = styled("section")`
  width: 100%;
  height: 80vh;
  position: relative;
  padding: 7.5rem 0 3rem;
  text-align: center;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 1024px) {
    padding: 5.5rem 0 3rem;
  }
`;

export const Content = styled("p")`
  padding: 0.75rem 0 0.75rem;
  color: #fff;
  align-items: center;
`;

export const Title = styled("h6")`
  color: #fff;
`;

export const ContentWrapper = styled("div")`
  max-width: 570px;
  padding-top: 6rem;

  @media only screen and (max-width: 768px) {
    max-width: 100%;
    padding-top: 0;
  }
`;
