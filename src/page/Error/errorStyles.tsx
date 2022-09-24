// -------------------------------------------------
// Packages
// -------------------------------------------------
import styled, { css } from 'styled-components';

export const STYLES_DEFAULT = css`
  display: flex;
  flex: 1 500px;
`;

export const ContainerSC = styled.section`
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const DivOneSC = styled.div`
  ${STYLES_DEFAULT}

  @media (max-width: 768px) {
    display: none;
  }

  img {
    height: 30rem;
    margin: auto;
  }

  background-image: url('./backgroundError.png');
  background-position: top right;
  background-repeat: no-repeat;
  background-size: 40px 100%;
`;

export const DivTwoSC = styled.div`
  ${STYLES_DEFAULT}

  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: ${({ theme }) => theme.color.tertiary};
`;

export const TitleSC = styled.h1`
  font-size: 2rem;
  margin-bottom: 0;
  color: ${({ theme }) => theme.color.secondary};
`;

export const ParagraphSC = styled.p`
  font-size: 1.6rem;
  color: ${({ theme }) => theme.color.secondary};
`;
