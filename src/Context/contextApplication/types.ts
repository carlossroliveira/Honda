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
  capsuleAmount: number;
  isInPack: boolean;
  hasPrecaution: boolean;
  hasSynergy: boolean;
  healthGoals: {
    score: number;
  }[];
  symptoms: {
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
