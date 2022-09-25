// -------------------------------------------------
// Packages
// -------------------------------------------------
import styled from 'styled-components';

export const DivMainSC = styled.div`
  width: 396px;
  height: 334px;
  padding: 1rem;
  border-radius: 8px;

  box-shadow: ${({ theme }) => theme.boxShadow.primary};
`;

//================== DivOne

export const DivOneSC = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const DivImagesSC = styled.div`
  display: flex;

  div + div {
    margin-left: 6px;
  }
`;

export const ImgOneSC = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 24px;
  height: 24px;
  border-radius: 3px;

  background: linear-gradient(165.98deg, #3135c6 14.08%, #00aaff 89.86%);
`;

export const ImgTwoSC = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 24px;
  height: 24px;
  border-radius: 3px;
`;

export const ImgThreeSC = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 46px;
  height: 24px;
  border-radius: 4px;

  background-color: ${({ theme }) => theme.background.quaternary};

  img {
    margin-right: 5px;
  }
`;

export const ParagraphThreeSC = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;

  color: ${({ theme }) => theme.color.primary};
`;

export const SpanColorSC = styled.span`
  color: ${({ theme }) => theme.color.quaternary};
`;
export const SpanOneSC = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 22px;
  margin: 5px 0 0 0;
  color: ${({ theme }) => theme.color.primary};
`;

export const BrandSC = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  opacity: 0.9;
  margin: 1rem 0 0 0;
  color: ${({ theme }) => theme.color.primary};
`;

//================== DivTwo

export const DivTwoSC = styled.div`
  display: flex;

  width: 362px;
  border-radius: 8px;
  height: fit-content;

  margin-top: 10px;

  background-color: ${({ theme }) => theme.background.quaternary};
`;

export const SubDivTwoSC = styled.div`
  padding-bottom: 17px;
`;

export const SubMiniDivTwoSC = styled.div`
  display: flex;
  align-items: center;
  padding: 17px 0 0px 16px;
`;

export const SpanSC = styled.span`
  margin-right: 8px;

  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 12px;
  color: ${({ theme }) => theme.color.primary};
`;

export const SpanTwoSC = styled.span`
  padding: 17px 0 0px 16px;
  opacity: 0.6;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 12px;
  color: ${({ theme }) => theme.color.primary};
`;

//================== DivThree

export const SubDivThreeSC = styled.div`
  margin: 0 auto;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
`;

export const SubMiniDivThreeSC = styled.div`
  background: linear-gradient(white, white) padding-box,
    linear-gradient(165.98deg, #3135c6 14.08%, #00aaff 89.86%) border-box;
  border-radius: 50em;
  border: 2px solid transparent;

  padding: 10px;
  width: 44px;
  height: 44px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DivThreeSC = styled.div`
  display: flex;
  justify-content: end;

  margin-top: 15px;
`;
