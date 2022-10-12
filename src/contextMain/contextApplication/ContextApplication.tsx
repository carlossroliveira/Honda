/* eslint-disable @typescript-eslint/no-explicit-any */
// -------------------------------------------------
// Packages
// -------------------------------------------------
import React, { createContext, useContext, useState } from 'react';
import photo from '../../assets/GroupModal.svg';
import Swal from 'sweetalert2';
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
      Swal.fire({
        text: `You've already added ${array.name} to your basket. Do you want to remove it ?`,
        showCancelButton: true,
        confirmButtonColor: '#21E7C5',
        confirmButtonText: 'Yes',
        cancelButtonText: 'No keep it',
        cancelButtonColor: '#C6C9D6',

        imageUrl: photo,
        imageWidth: 200,
        imageHeight: 200,
        imageAlt: 'Custom image',
      }).then(() => {
        array.pop();
      });
    }
  }

  const handleValue = () => {
    if (values < 4) {
      setValues(values + 1);
    } else {
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer);
          toast.addEventListener('mouseleave', Swal.resumeTimer);
        },
      });

      Toast.fire({
        icon: 'error',
        title: 'Full cart!',
      });
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
