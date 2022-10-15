// -------------------------------------------------
// Packages
// -------------------------------------------------
import { css } from 'styled-components';
// -------------------------------------------------
// Types
// -------------------------------------------------
const CIRCLE_STYLE = css`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 4px solid #bdbdbd;
`;

export const getCircleStyled = (value: number) => {
  if (value === 1) {
    return css`
      ${CIRCLE_STYLE}
      border-top-color: #393E46;
    `;
  }
  if (value === 2) {
    return css`
      ${CIRCLE_STYLE}
      border-top-color: #393E46;
      border-right-color: #393e46;
    `;
  }
  if (value === 3) {
    return css`
      ${CIRCLE_STYLE}
      border-top-color: #393E46;
      border-right-color: #393e46;
      border-bottom-color: #393e46;
    `;
  }
  if (value === 4) {
    return css`
      ${CIRCLE_STYLE}
      border-top-color: #393E46;
      border-right-color: #393e46;
      border-bottom-color: #393e46;
      border-left-color: #393e46;
    `;
  }
  return css`
    ${CIRCLE_STYLE}
  `;
};
