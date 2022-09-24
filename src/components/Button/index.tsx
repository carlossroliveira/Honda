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
    <ButtonSC ClassName={false} onClick={props.onClick} role="button">
      <>
        {props.text}
        {props.icon}
      </>
    </ButtonSC>
  );
};
