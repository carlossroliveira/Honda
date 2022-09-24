// -------------------------------------------------
// Packages
// -------------------------------------------------
import React from 'react';
// -------------------------------------------------
// Images
// -------------------------------------------------
import photo from '../../assets/imageError.png';
// -------------------------------------------------
// Styles
// -------------------------------------------------
import {
  ContainerSC,
  DivOneSC,
  DivTwoSC,
  ParagraphSC,
  TitleSC,
} from './errorStyles';

export const Error = (): JSX.Element => {
  return (
    <ContainerSC>
      <DivOneSC>
        <img src={photo} alt="image error" />
      </DivOneSC>

      <DivTwoSC>
        <TitleSC>This page does not exist!</TitleSC>

        <ParagraphSC>Click back button</ParagraphSC>
      </DivTwoSC>
    </ContainerSC>
  );
};
