// -------------------------------------------------
// Packages
// -------------------------------------------------
import { css } from 'styled-components';
// -------------------------------------------------
// Types
// -------------------------------------------------
import { ButtonVariantType } from './types';

const DEFAULT_STYLE = css`
  width: 172px;
  height: 28px;
`;

const NORMAL_STYLE = css`
  width: 165px;
  height: 44px;
`;

export const getStyled = (variant: ButtonVariantType) => {
  const Styled = {
    default: DEFAULT_STYLE,
    normal: NORMAL_STYLE,
  };
  return css`
    ${() => Styled[variant] || Styled.default}
  `;
};
