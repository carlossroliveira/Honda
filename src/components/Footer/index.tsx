// -------------------------------------------------
// Packages
// -------------------------------------------------
import React from 'react';
// -------------------------------------------------
// Styles
// -------------------------------------------------
import { ParagraphSC } from './footerStyles';

export const Footer = () => {
  const currentYear: number = new Date().getFullYear();

  return <ParagraphSC>&copy; {currentYear} | Carlos Oliveira</ParagraphSC>;
};
