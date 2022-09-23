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
import { Layout } from '../../components/Layout';
// -------------------------------------------------
// Context
// -------------------------------------------------
import { ThemeProviderApplication } from '../../Context/contextApplication/ContextTheme';
// -------------------------------------------------
// Styles
// -------------------------------------------------
import dark from '../../styles/themes/dark';

describe('Layout Testing', () => {
  it('Should...', () => {
    render(
      <ThemeProvider theme={dark}>
        <ThemeProviderApplication>
          <Layout />
        </ThemeProviderApplication>
      </ThemeProvider>,
    );

    screen.logTestingPlaygroundURL();
  });
});
