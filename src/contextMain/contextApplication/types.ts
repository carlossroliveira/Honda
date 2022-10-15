// -------------------------------------------------
// Packages
// -------------------------------------------------
import { ReactNode } from 'react';
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
  logo: string;
}

export interface IContextApplication {
  values: number;
  handleValue: () => void;
  data: IProductProps[] | null;
}

export interface IContextApplicationProvider {
  children: ReactNode | JSX.Element;
}
