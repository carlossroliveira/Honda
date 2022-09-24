// -------------------------------------------------
// Packages
// -------------------------------------------------
import React, { createContext, useContext, useState } from 'react';
// -------------------------------------------------
// Components
// -------------------------------------------------
import dark from '../../styles/themes/dark';
import light from '../../styles/themes/light';
// -------------------------------------------------
// Types
// -------------------------------------------------
import { ITheme, IThemeContext, IThemeProvider } from './types';

const Context = createContext({} as IThemeContext);

export const ThemeProvider = ({ children }: IThemeProvider): JSX.Element => {
  const [themes, setThemes] = useState<ITheme>(light);

  const handleThemes = () =>
    themes.title === 'light' ? setThemes(dark) : setThemes(light);

  return (
    <Context.Provider value={{ handleThemes, themes }}>
      {children}
    </Context.Provider>
  );
};

export const useMyHook = (): IThemeContext => useContext(Context);
