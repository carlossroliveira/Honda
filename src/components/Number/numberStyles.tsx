// -------------------------------------------------
// Packages
// -------------------------------------------------
import styled from 'styled-components';

export const SPanSC = styled.span`
  background: linear-gradient(180.32deg, #810000 15.34%, #ff8d66 98.15%);

  @media (max-width: 768px) {
    background: #cc0000;
  }

  box-shadow: ${({ theme }) => theme.boxShadow.secondary};

  display: flex;
  align-items: center;
  justify-content: center;

  width: 26px;
  height: 26px;
  border-radius: 50%;

  font-size: 14px;
  font-weight: 400;
  line-height: 39px;
  text-transform: capitalize;

  color: ${({ theme }) => theme.color.secondary};
`;
