// -------------------------------------------------
// Packages
// -------------------------------------------------
import { Dispatch, ReactNode } from 'react';
// -------------------------------------------------
// Types
// -------------------------------------------------

export interface IProductProps {
  id: number;
  name: string;
  brand: string;
  score: number;
  price: string;
  amountOfFuel: string;
  haveMoreColors: {
    imgOne: string;
    imgTwo: string;
  }[];
  ethanolFuel: boolean;
  maximumPower: {
    score: number;
  }[];
  maximumTorque: {
    score: number;
  }[];
}

export interface IContextApplication {
  values: number;
  handleValue: () => void;
  data: IProductProps[] | null;
  array: [];
  setArray: Dispatch<React.SetStateAction<any[]>>;
}

export interface IContextApplicationProvider {
  children: ReactNode | JSX.Element;
}
