// -------------------------------------------------
// Packages
// -------------------------------------------------
import React from 'react';
import { useNavigate } from 'react-router-dom';
// -------------------------------------------------
// Components
// -------------------------------------------------
import { Button } from '../../components/Button';
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
  const navigate = useNavigate();

  return (
    <ContainerSC>
      <DivOneSC>
        <img src={photo} alt="image error" />
      </DivOneSC>

      <DivTwoSC>
        <TitleSC>This page does not exist!</TitleSC>

        <ParagraphSC>Click back button</ParagraphSC>

        <Button text="Voltar" onClick={() => navigate(-1)} />
      </DivTwoSC>
    </ContainerSC>
  );
};
