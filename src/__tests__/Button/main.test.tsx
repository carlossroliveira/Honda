// -------------------------------------------------
// Packages
// -------------------------------------------------
import React from 'react';
import 'jest-styled-components';
import '@testing-library/jest-dom';
import { ThemeProvider } from 'styled-components';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
// -------------------------------------------------
// Components
// -------------------------------------------------
import { Button } from '../../components/Button';
// -------------------------------------------------
// Context
// -------------------------------------------------
import { ThemeProviderApplication } from '../../contextMain/contextApplication/ContextApplication';
// -------------------------------------------------
// Styles
// -------------------------------------------------
import dark from '../../styles/themes/dark';

describe('Button Testing', () => {
  it('Should render the component correctly.', () => {
    render(
      <ThemeProvider theme={dark}>
        <ThemeProviderApplication>
          <Button text={'Button'} variant={'default'} />
        </ThemeProviderApplication>
      </ThemeProvider>,
    );

    expect(
      screen.getByRole('button', {
        name: /button/i,
      }),
    ).toBeInTheDocument();
  });

  it('When clicking the button should be called correctly.', () => {
    const onClickTest = jest.fn();
    render(
      <ThemeProvider theme={dark}>
        <ThemeProviderApplication>
          <Button text={'Button'} onClick={onClickTest} variant={'default'} />
        </ThemeProviderApplication>
      </ThemeProvider>,
    );

    userEvent.click(
      screen.getByRole('button', {
        name: /button/i,
      }),
    );

    expect(onClickTest).toHaveBeenCalled();
    expect(onClickTest).toHaveBeenCalledTimes(1);
  });

  it('component rendering matches snapshot correctly', () => {
    render(
      <ThemeProvider theme={dark}>
        <ThemeProviderApplication>
          <Button text={'Button'} variant={'default'} />
        </ThemeProviderApplication>
      </ThemeProvider>,
    );
    expect(
      render(
        <ThemeProvider theme={dark}>
          <ThemeProviderApplication>
            <Button text={'Button'} variant={'default'} />
          </ThemeProviderApplication>
        </ThemeProvider>,
      ),
    ).toMatchSnapshot();
  });
});
