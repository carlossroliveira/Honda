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

  // eslint-disable-next-line no-unused-vars
  const [values, setValues] = useState<number>(0);
  const [handleProduct, setHandleProduct] = useState<string>('');

  const handleValue = () => {
    const bla = [];

    bla.push(handleProduct);

    console.log(...[bla]);

    /* if (values < 4) {
      setValues(values + 1);
    } else if (values > 1 && bla?.find((v) => v === handleProduct)) {
      alert('jÁ EXISTE');
    } */
  };

  return (
    <Context.Provider value={{ data, handleValue, values, setHandleProduct }}>
      {children}
    </Context.Provider>
  );
};

export const useMyHookApplication = (): IContextApplication =>
  useContext(Context);
