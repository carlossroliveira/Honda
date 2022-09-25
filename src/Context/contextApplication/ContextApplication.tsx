// -------------------------------------------------
// Packages
// -------------------------------------------------
import React, { createContext, useContext, useState } from 'react';
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

  const [values, setValues] = useState<number>(0);

  const handleValue = () => setValues(values + 1);

  return (
    <Context.Provider value={{ data, handleValue, values }}>
      {children}
    </Context.Provider>
  );
};

export const useMyHookApplication = (): IContextApplication =>
  useContext(Context);
