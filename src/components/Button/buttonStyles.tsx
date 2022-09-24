// -------------------------------------------------
// Packages
// -------------------------------------------------
import styled from 'styled-components';

export const ButtonSC = styled.button<{ ClassName: boolean }>`
  border: none;
  border-radius: 29px;
  transition: filter 0.2s;
  transition: 0.2s ease-in;

  width: ${({ ClassName }) => (ClassName ? '172px' : '165px')};
  height: ${({ ClassName }) => (ClassName ? '28px' : '44px')};

  color: ${({ theme }) => theme.color.secondary};
  background-color: ${({ theme }) => theme.background.primary};

  &:hover {
    filter: brightness(0.9);
    cursor: pointer;
  }
`;
