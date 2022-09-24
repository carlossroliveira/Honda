// -------------------------------------------------
// Packages
// -------------------------------------------------
import React from 'react';
// -------------------------------------------------
// Styles
// -------------------------------------------------
import { ButtonSC } from './buttonStyles';
// -------------------------------------------------
// Types
// -------------------------------------------------
import { ButtonProps } from './types';

export const Button = (props: ButtonProps) => {
  return (
    <ButtonSC
      role="button"
      shadow={props.shadow}
      variant={props.variant}
      onClick={props.onClick}
    >
      <>
        {props.text}
        {props.icon}
      </>
    </ButtonSC>
  );
};
