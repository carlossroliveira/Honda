// -------------------------------------------------
// Packages
// -------------------------------------------------
import styled from 'styled-components';

export const SPanSC = styled.span`
  background: linear-gradient(180.32deg, #f5f7fe 15.34%, #393e46 98.15%);

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
