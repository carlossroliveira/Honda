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
import { Button } from '../../components/Button';
// -------------------------------------------------
// Context
// -------------------------------------------------
import { ThemeProviderApplication } from '../../context/contextApplication/ContextApplication';
// -------------------------------------------------
// Styles
// -------------------------------------------------
import dark from '../../styles/themes/dark';

describe('Button Testing', () => {
  it('Should...', () => {
    render(
      <ThemeProvider theme={dark}>
        <ThemeProviderApplication>
          <Button text={'testing'} variant={'default'} />
        </ThemeProviderApplication>
      </ThemeProvider>,
    );

    screen.logTestingPlaygroundURL();
  });
});
