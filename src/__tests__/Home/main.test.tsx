// -------------------------------------------------
// Packages
// -------------------------------------------------
import React from 'react';
import 'jest-styled-components';
import '@testing-library/jest-dom';
import { ThemeProvider } from 'styled-components';
import { render, screen } from '@testing-library/react';
// -------------------------------------------------
// Components
// -------------------------------------------------
import { Home } from '../../page/Home';
// -------------------------------------------------
// Context
// -------------------------------------------------
import { ThemeProviderApplication } from '../../context/contextApplication/ContextApplication';
// -------------------------------------------------
// Styles
// -------------------------------------------------
import dark from '../../styles/themes/dark';

describe('Layout Testing', () => {
  it('Should...', () => {
    render(
      <ThemeProvider theme={dark}>
        <ThemeProviderApplication>
          <Home />
        </ThemeProviderApplication>
      </ThemeProvider>,
    );

    screen.logTestingPlaygroundURL();
  });
});
