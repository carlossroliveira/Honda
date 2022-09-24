// -------------------------------------------------
// Packages
// -------------------------------------------------
import styled from 'styled-components';

export const SPanSC = styled.span`
  background: linear-gradient(180.32deg, #2effaf 15.34%, #00aaff 98.15%);

  color: ${({ theme }) => theme.color.secondary};
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
`;
