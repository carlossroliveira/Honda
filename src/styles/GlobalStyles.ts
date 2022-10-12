import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
* { 
  box-sizing: border-box;
}

body {
  margin: 0 auto;
  padding: 0;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  font-family: ${({ theme }) => theme.fontFamily.fontDefault};
}

::-webkit-scrollbar {
  width: 12px
}
::-webkit-scrollbar-thumb {
  border-radius: 50px;
  border: 1px solid ${({ theme }) => theme.background.primary};

  background: ${({ theme }) => theme.background.primary};
}
::-webkit-scrollbar-button {
  background: ${({ theme }) => theme.background.primary};
}
`;
