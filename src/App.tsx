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
import { useMyHook } from './context/themes/ContextTheme';
import { ThemeProviderApplication } from './context/contextApplication/ContextTheme';
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
