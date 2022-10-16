// -------------------------------------------------
// Packages
// -------------------------------------------------
import styled, { keyframes } from 'styled-components';

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

const FadeInAnimation = keyframes`  
  70%{
        transform: translateX(350px) skew(20deg);
      }
      100%{
          transform: translateX(350px) skew(20deg);
      }
`;

export const SubOneSpanOneSC = styled.span`
  width: 50px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.background.tertiary};
  height: 20px;
  overflow: hidden;

  &::before {
    content: '';
    display: block;
    height: 20px;
    width: 50px;
    left: -80px;
    position: relative;
    transform: skew(20deg);
    background-color: rgba(255, 255, 255, 0.5);
    animation: ${FadeInAnimation} 1.5s linear infinite;
  }
`;

export const SubOneSpanTwoSC = styled.span`
  width: 80px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.background.tertiary};

  height: 20px;
  overflow: hidden;

  &::before {
    content: '';
    display: block;
    height: 20px;
    width: 80px;
    left: -100px;
    position: relative;
    transform: skew(20deg);
    background-color: rgba(255, 255, 255, 0.5);
    animation: ${FadeInAnimation} 1.5s linear infinite;
  }
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
  border-radius: 8px;
  background-color: ${({ theme }) => theme.background.tertiary};

  height: 10px;
  overflow: hidden;

  &::before {
    content: '';
    display: block;
    height: 20px;
    width: 80px;
    left: -100px;
    position: relative;
    transform: skew(20deg);
    background-color: rgba(255, 255, 255, 0.5);
    animation: ${FadeInAnimation} 1.5s linear infinite;
  }
`;

export const SubTwoDivTwoSC = styled.div`
  width: 110px;
  height: 80px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.background.quaternary};

  overflow: hidden;

  &::before {
    content: '';
    display: block;
    height: 80px;
    width: 50px;
    left: -100px;
    position: relative;
    transform: skew(20deg);
    background-color: rgba(255, 255, 255, 0.5);
    animation: ${FadeInAnimation} 1.5s linear infinite;
  }
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
  border-radius: 8px;
  background-color: ${({ theme }) => theme.background.tertiary};

  height: 15px;
  overflow: hidden;

  &::before {
    content: '';
    display: block;
    height: 15px;
    width: 80px;
    left: -100px;
    position: relative;
    transform: skew(20deg);
    background-color: rgba(255, 255, 255, 0.5);
    animation: ${FadeInAnimation} 1.5s linear infinite;
  }
`;

export const SubThreeSpanTwoSC = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 1rem;
  background-color: ${({ theme }) => theme.background.tertiary};

  overflow: hidden;

  &::before {
    content: '';
    display: block;
    height: 50px;
    width: 50px;
    left: -100px;
    position: relative;
    transform: skew(20deg);
    background-color: rgba(255, 255, 255, 0.5);
    animation: ${FadeInAnimation} 1.5s linear infinite;
  }
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

  overflow: hidden;

  &::before {
    content: '';
    display: block;
    height: 22px;
    width: 50px;
    left: -100px;
    position: relative;
    transform: skew(20deg);
    background-color: rgba(255, 255, 255, 0.5);
    animation: ${FadeInAnimation} 1.5s linear infinite;
  }
`;
