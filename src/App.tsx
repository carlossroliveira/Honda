// -------------------------------------------------
// Packages
// -------------------------------------------------
import React from 'react';
import { ThemeProvider } from 'styled-components';
// -------------------------------------------------
// Components
// -------------------------------------------------
import { RoutesComponent } from './routes';
// -------------------------------------------------
// Context
// -------------------------------------------------
import { useMyHook } from './Context/themes/ContextTheme';
import { ThemeProviderApplication } from './Context/contextApplication/ContextTheme';
// -------------------------------------------------
// Styles
// -------------------------------------------------
import { GlobalStyle } from './styles/GlobalStyles';

export const App = (): JSX.Element => {
  const { themes } = useMyHook();

  return (
    <ThemeProvider theme={themes}>
      <ThemeProviderApplication>
        <GlobalStyle />
        <RoutesComponent />
      </ThemeProviderApplication>
    </ThemeProvider>
  );
};
