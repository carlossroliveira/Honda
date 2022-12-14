// -------------------------------------------------
// Packages
// -------------------------------------------------
import React from 'react';
// -------------------------------------------------
// Styles
// -------------------------------------------------
import { SPanSC } from './numberStyles';
// -------------------------------------------------
// Types
// -------------------------------------------------
import { INumberProps } from './types';

export const Number = (props: INumberProps) => {
  return <SPanSC>{props.score}</SPanSC>;
};
