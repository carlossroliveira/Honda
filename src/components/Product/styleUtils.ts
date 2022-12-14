// -------------------------------------------------
// Packages
// -------------------------------------------------
import { css } from 'styled-components';
// -------------------------------------------------
// Types
// -------------------------------------------------

export const EFFECT_STYLES = css`
  -webkit-transform: scale(1.3);
  -ms-transform: scale(1.3);
  transform: scale(1.3);
`;

const CIRCLE_STYLE = css`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 2px solid #bdbdbd;
`;

export const getCircleStyled = (value: number) => {
  if (value === 25) {
    return css`
      ${CIRCLE_STYLE}
      border-top-color: #e74428;
    `;
  }
  if (value === 50) {
    return css`
      ${CIRCLE_STYLE}
      border-top-color: #e74428;
      border-right-color: #e74428;
    `;
  }
  if (value === 75) {
    return css`
      ${CIRCLE_STYLE}
      border-top-color: #e74428;
      border-right-color: #e74428;
      border-bottom-color: #e74428;
    `;
  }
  if (value === 100) {
    return css`
      ${CIRCLE_STYLE}
      border-top-color: #e74428;
      border-right-color: #e74428;
      border-bottom-color: #e74428;
      border-left-color: #e74428;
    `;
  }
  return css`
    ${CIRCLE_STYLE}
  `;
};
