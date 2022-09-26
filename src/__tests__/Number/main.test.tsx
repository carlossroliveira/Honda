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
import { Number } from '../../components/Number';
// -------------------------------------------------
// Context
// -------------------------------------------------
import { ThemeProviderApplication } from '../../context/contextApplication/ContextApplication';
// -------------------------------------------------
// Styles
// -------------------------------------------------
import dark from '../../styles/themes/dark';

describe('Button Testing', () => {
  it('Should render the component correctly.', () => {
    render(
      <ThemeProvider theme={dark}>
        <ThemeProviderApplication>
          <Number score={0} />
        </ThemeProviderApplication>
      </ThemeProvider>,
    );

    expect(screen.getByText(/0/i)).toBeInTheDocument();
  });

  it('Should render with the value 10 correctly.', () => {
    render(
      <ThemeProvider theme={dark}>
        <ThemeProviderApplication>
          <Number score={10} />
        </ThemeProviderApplication>
      </ThemeProvider>,
    );

    expect(screen.getByText(/10/i)).toBeInTheDocument();
  });

  it('component rendering matches snapshot correctly', () => {
    render(
      <ThemeProvider theme={dark}>
        <ThemeProviderApplication>
          <Number score={10} />
        </ThemeProviderApplication>
      </ThemeProvider>,
    );
    expect(
      render(
        <ThemeProvider theme={dark}>
          <ThemeProviderApplication>
            <Number score={10} />
          </ThemeProviderApplication>
        </ThemeProvider>,
      ),
    ).toMatchSnapshot();
  });
});
