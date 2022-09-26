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
  // eslint-disable-next-line no-unused-vars
  const [handleProduct, setHandleProduct] = useState<string>('');

  const handleValue = () => {
    /* const bla = [];

    bla.push([...handleProduct]);

    console.log(bla); */

    if (values < 4) {
      setValues(values + 1);
    } else {
      alert('Carrinho cheio');
    }
  };

  return (
    <Context.Provider value={{ data, handleValue, values, setHandleProduct }}>
      {children}
    </Context.Provider>
  );
};

export const useMyHookApplication = (): IContextApplication =>
  useContext(Context);
