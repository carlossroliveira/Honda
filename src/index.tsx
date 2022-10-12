// -------------------------------------------------
// Packages
// -------------------------------------------------
import React from 'react';
import ReactDOM from 'react-dom';
// -------------------------------------------------
// Components
// -------------------------------------------------
import { App } from './App';
// -------------------------------------------------
// Context
// -------------------------------------------------
import { ThemeProvider } from './contextMain/themes/ContextTheme';
import { ThemeProviderApplication } from './contextMain/contextApplication/ContextApplication';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <ThemeProviderApplication>
        <App />
      </ThemeProviderApplication>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
