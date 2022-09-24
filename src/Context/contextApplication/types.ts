/* eslint-disable @typescript-eslint/no-empty-interface */
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
  data: IProductProps[] | null;
}

export interface IContextApplicationProvider {
  children: ReactNode | JSX.Element;
}
