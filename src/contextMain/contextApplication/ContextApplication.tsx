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

  const [array, setArray] = useState<any>([]);
  const [values, setValues] = useState<number>(0);

  if (values !== 4) {
    if (array.some((x: any) => array.indexOf(x) !== array.lastIndexOf(x))) {
      console.log('a');
    }
  }

  const handleValue = () => {
    if (values < 4) {
      setValues(values + 1);
    }
  };

  return (
    <Context.Provider value={{ data, handleValue, values, setArray, array }}>
      {children}
    </Context.Provider>
  );
};

export const useMyHookApplication = (): IContextApplication =>
  useContext(Context);
