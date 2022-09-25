// -------------------------------------------------
// Packages
// -------------------------------------------------
import styled from 'styled-components';

export const DivMainSC = styled.div`
  width: 396px;
  height: 334px;
  padding: 1rem;
  border-radius: 8px;
  border: 5px solid blue;

  box-shadow: ${({ theme }) => theme.boxShadow.primary};
`;

//================== DivOne

export const DivOneSC = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ImgOneSC = styled.div`
  background: linear-gradient(165.98deg, #3135c6 14.08%, #00aaff 89.86%);
  border-radius: 3px;
  width: 24px;
  height: 24px;
`;

export const SpanOneSC = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  color: ${({ theme }) => theme.color.primary};
`;

//================== DivTwo

export const DivTwoSC = styled.div`
  display: flex;

  width: 362px;
  height: fit-content;
  border-radius: 8px;

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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin: 0 auto;
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

  margin-top: 21px;
`;
