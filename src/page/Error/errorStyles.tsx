// -------------------------------------------------
// Packages
// -------------------------------------------------
import styled from 'styled-components';
import { STYLES_DEFAULT } from './styleUtils';

export const ContainerSC = styled.section`
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
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
