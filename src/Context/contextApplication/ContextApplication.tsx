// -------------------------------------------------
// Packages
// -------------------------------------------------
import React, { createContext, useContext } from 'react';
// -------------------------------------------------
// Hooks
// -------------------------------------------------
import { useFetch } from '../../hooks/useFetch';
// -------------------------------------------------
// Types
// -------------------------------------------------
import {
  IContextApplication,
  IContextApplicationProvider,
  IProductProps,
} from './types';

const Context = createContext({} as IContextApplication);

export const ThemeProviderApplication = ({
  children,
}: IContextApplicationProvider): JSX.Element => {
  const { data } = useFetch<IProductProps[]>('http://localhost:5000/info');

  return <Context.Provider value={{ data }}>{children}</Context.Provider>;
};

export const useMyHookApplication = (): IContextApplication =>
  useContext(Context);
