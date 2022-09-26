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
import { NamePage } from '../../components/NamePage';
// -------------------------------------------------
// Context
// -------------------------------------------------
import { ThemeProviderApplication } from '../../context/contextApplication/ContextApplication';
// -------------------------------------------------
// Styles
// -------------------------------------------------
import dark from '../../styles/themes/dark';

describe('NamePage Testing', () => {
  it('component rendering matches snapshot correctly', () => {
    render(
      <ThemeProvider theme={dark}>
        <ThemeProviderApplication>
          <NamePage title={'Testing'} />
        </ThemeProviderApplication>
      </ThemeProvider>,
    );
    expect(
      render(
        <ThemeProvider theme={dark}>
          <ThemeProviderApplication>
            <NamePage title={'Testing'} />
          </ThemeProviderApplication>
        </ThemeProvider>,
      ),
    ).toMatchSnapshot();
  });
});
