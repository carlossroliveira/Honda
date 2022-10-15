// -------------------------------------------------
// Packages
// -------------------------------------------------
import styled from 'styled-components';

export const ContainerSC = styled.div`
  width: 396px;
  height: 334px;
  padding: 1rem;
  border-radius: 8px;

  box-shadow: ${({ theme }) => theme.boxShadow.primary};
`;

export const DivOneSC = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  span + span {
    margin-left: 10px;
  }
`;

export const SubOneSpanOneSC = styled.span`
  width: 50px;
  padding: 10px;
  border-radius: 8px;

  background-color: ${({ theme }) => theme.background.tertiary};
`;

export const SubOneSpanTwoSC = styled.span`
  width: 80px;
  padding: 10px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.background.tertiary};
`;

export const DivTwoSC = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  div + div {
    margin-top: 5px;
  }
`;

export const SubTwoDivOneSC = styled.div`
  width: 200px;
  padding: 7px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.background.tertiary};
`;

export const SubTwoDivTwoSC = styled.div`
  width: 110px;
  height: 80px;
  padding: 7px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.background.quaternary};
`;

export const DivThreeSC = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 5px;
  margin-top: 10px;

  border-radius: 4px;

  background-color: ${({ theme }) => theme.background.quaternary};

  div + div {
    margin-top: 10px;
  }
`;
export const SubDivThreeSC = styled.div`
  margin: 10px 0;
`;

export const SubThreeSpanOneSC = styled.div`
  width: 150px;
  padding: 7px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.background.tertiary};
`;

export const SubThreeSpanTwoSC = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 1rem;
  background-color: ${({ theme }) => theme.background.tertiary};
`;

export const DivFourSC = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;

  margin-top: 10px;
`;

export const SubFourSpanOneSC = styled.div`
  opacity: 0.6;

  width: 165px;
  height: 22px;
  border-radius: 29px;
  background-color: ${({ theme }) => theme.background.primary};
`;
