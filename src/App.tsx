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
import { useMyHook } from './contextMain/themes/ContextTheme';
import { ThemeProviderApplication } from './contextMain/contextApplication/ContextApplication';
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
