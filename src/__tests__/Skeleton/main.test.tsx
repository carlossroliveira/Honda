// -------------------------------------------------
// Packages
// -------------------------------------------------
import React from 'react';
import 'jest-styled-components';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
// -------------------------------------------------
// Components
// -------------------------------------------------
import { Skeleton } from '../../components/Skeleton';
// -------------------------------------------------
// Context
// -------------------------------------------------
import { ThemeProviderApplication } from '../../contextMain/contextApplication/ContextApplication';
// -------------------------------------------------
// Styles
// -------------------------------------------------
import dark from '../../styles/themes/dark';

describe('Skeleton Testing', () => {
  it('component rendering matches snapshot correctly', () => {
    render(
      <ThemeProvider theme={dark}>
        <ThemeProviderApplication>
          <Skeleton />
        </ThemeProviderApplication>
      </ThemeProvider>,
    );
    expect(
      render(
        <ThemeProvider theme={dark}>
          <ThemeProviderApplication>
            <Skeleton />
          </ThemeProviderApplication>
        </ThemeProvider>,
      ),
    ).toMatchSnapshot();
  });
});
