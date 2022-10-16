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
import { Footer } from '../../components/Footer';
// -------------------------------------------------
// Context
// -------------------------------------------------
import { ThemeProviderApplication } from '../../contextMain/contextApplication/ContextApplication';
// -------------------------------------------------
// Styles
// -------------------------------------------------
import dark from '../../styles/themes/dark';

describe('Footer Testing', () => {
  it('Should render the component correctly.', () => {
    render(
      <ThemeProvider theme={dark}>
        <ThemeProviderApplication>
          <Footer />
        </ThemeProviderApplication>
      </ThemeProvider>,
    );

    expect(screen.getByText(/© 2022 \| carlos oliveira/i)).toBeInTheDocument();
  });

  it('component rendering matches snapshot correctly', () => {
    render(
      <ThemeProvider theme={dark}>
        <ThemeProviderApplication>
          <Footer />
        </ThemeProviderApplication>
      </ThemeProvider>,
    );
    expect(
      render(
        <ThemeProvider theme={dark}>
          <ThemeProviderApplication>
            <Footer />
          </ThemeProviderApplication>
        </ThemeProvider>,
      ),
    ).toMatchSnapshot();
  });
});
