// -------------------------------------------------
// Packages
// -------------------------------------------------
import React from 'react';
import 'jest-styled-components';
import '@testing-library/jest-dom';
import { ThemeProvider } from 'styled-components';
import { render } from '@testing-library/react';
// -------------------------------------------------
// Components
// -------------------------------------------------
import { Product } from '../../components/Product';
// -------------------------------------------------
// Context
// -------------------------------------------------
import { ThemeProviderApplication } from '../../contextMain/contextApplication/ContextApplication';
// -------------------------------------------------
// Styles
// -------------------------------------------------
import dark from '../../styles/themes/dark';

describe('Product Testing', () => {
  it('component rendering matches snapshot correctly', () => {
    render(
      <ThemeProvider theme={dark}>
        <ThemeProviderApplication>
          <Product />
        </ThemeProviderApplication>
      </ThemeProvider>,
    );
    expect(
      render(
        <ThemeProvider theme={dark}>
          <ThemeProviderApplication>
            <Product />
          </ThemeProviderApplication>
        </ThemeProvider>,
      ),
    ).toMatchSnapshot();
  });
});
