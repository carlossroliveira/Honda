// -------------------------------------------------
// Packages
// -------------------------------------------------
import React from 'react';
import ReactDOM from 'react-dom/client';
// -------------------------------------------------
// Components
// -------------------------------------------------
import { App } from './App';
// -------------------------------------------------
// Context
// -------------------------------------------------
import { ThemeProvider } from './contextMain/themes/ContextTheme';
import { ThemeProviderApplication } from './contextMain/contextApplication/ContextApplication';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <ThemeProviderApplication>
        <App />
      </ThemeProviderApplication>
    </ThemeProvider>
  </React.StrictMode>,
);
