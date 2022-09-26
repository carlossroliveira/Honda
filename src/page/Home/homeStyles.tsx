// -------------------------------------------------
// Packages
// -------------------------------------------------
import styled from 'styled-components';
import { getCircleStyled } from './styleUtils';

export const ContainerSC = styled.section`
  box-sizing: border-box;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 64px 100px 1fr;
  grid-template-areas:
    'header header header'
    'info info info'
    'content content content';
`;

//=============== Div header

export const HeaderSC = styled.header`
  grid-area: header;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 2rem;

  background: linear-gradient(165.98deg, #3135c6 14.08%, #00aaff 89.86%);
`;

export const DivHeaderSC = styled.div`
  display: flex;
  align-items: center;
`;

export const LoaderSC = styled.div<{ value: number }>`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-left: 4px;

  background-color: ${({ theme }) => theme.background.quaternary};

  transition: all 1s;

  ${({ value }) => getCircleStyled(value)}
`;

//=============== Div info

export const InfoSC = styled.div`
  grid-area: info;

  background-color: ${({ theme }) => theme.background.secondary};
`;

export const DivParagraphSC = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    display: flex;
    padding: 3px;
    font-size: 30px;
    margin-right: 3rem;

    transition: filter 0.2s;
    transition: 0.2s ease-in;

    &:hover {
      filter: brightness(0.9);
      cursor: pointer;
    }

    svg {
      color: ${({ theme }) => theme.color.quaternary};
    }
  }
`;

export const ParagraphInfoSC = styled.p<{ weight: boolean }>`
  padding: 0 2rem;

  font-size: 18px;
  line-height: 22px;
  font-style: normal;
  text-transform: capitalize;

  color: ${({ theme }) => theme.color.primary};
  font-weight: ${({ weight }) => (weight ? '700' : '400')};
`;

export const SpanInfoSC = styled.span`
  font-size: 18px;
  font-weight: 700;
  line-height: 22px;
  font-style: normal;
  text-transform: capitalize;
  color: ${({ theme }) => theme.color.tertiary};
`;

//=============== Div content

export const MainSC = styled.main`
  grid-area: content;

  gap: 1rem;
  padding-top: 2rem;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  background-color: ${({ theme }) => theme.background.secondary};
`;
