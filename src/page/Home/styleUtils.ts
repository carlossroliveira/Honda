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
      border-top-color: #21E7C5;
    `;
  }
  if (value === 2) {
    return css`
      ${CIRCLE_STYLE}
      border-top-color: #21E7C5;
      border-right-color: #21e7c5;
    `;
  }
  if (value === 3) {
    return css`
      ${CIRCLE_STYLE}
      border-top-color: #21E7C5;
      border-right-color: #21e7c5;
      border-bottom-color: #21e7c5;
    `;
  }
  if (value === 4) {
    return css`
      ${CIRCLE_STYLE}
      border-top-color: #21E7C5;
      border-right-color: #21e7c5;
      border-bottom-color: #21e7c5;
      border-left-color: #21e7c5;
    `;
  }
  return css`
    ${CIRCLE_STYLE}
  `;
};
