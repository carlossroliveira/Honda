// -------------------------------------------------
// Packages
// -------------------------------------------------
import { ButtonHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons';
// -------------------------------------------------
// Types
// -------------------------------------------------

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  icon?: IconBaseProps;
  onClick?: () => void;
  shadow?: boolean;
  variant: ButtonVariantType;
}

export type ButtonVariantType = 'default' | 'normal';
