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
