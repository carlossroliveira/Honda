// -------------------------------------------------
// Packages
// -------------------------------------------------
import styled from 'styled-components';
import { getStyled } from './styleUtils';
// -------------------------------------------------
// Types
// -------------------------------------------------
import { ButtonVariantType } from './types';

export const ButtonSC = styled.button<{
  variant: ButtonVariantType;
  shadow?: boolean;
}>`
  border: none;
  border-radius: 29px;
  transition: filter 0.2s;
  transition: 0.2s ease-in;

  color: ${({ theme }) => theme.color.secondary};
  box-shadow: ${({ shadow, theme }) => shadow && theme.boxShadow.primary};

  &:hover {
    filter: brightness(0.9);
    cursor: pointer;
  }

  ${({ variant }) => getStyled(variant)}
`;
