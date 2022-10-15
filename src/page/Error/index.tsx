// -------------------------------------------------
// Packages
// -------------------------------------------------
import React from 'react';
import { useNavigate } from 'react-router-dom';
// -------------------------------------------------
// Components
// -------------------------------------------------
import { Button } from '../../components/Button';
import { NamePage } from '../../components/NamePage';
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
      <NamePage title="Error" />

      <DivOneSC>{/*   <img src={photo} alt="image error" /> */}</DivOneSC>

      <DivTwoSC>
        <TitleSC>This page does not exist!</TitleSC>

        <ParagraphSC>Click back button</ParagraphSC>

        <Button
          shadow
          text="Voltar"
          variant="normal"
          onClick={() => navigate('/')}
        />
      </DivTwoSC>
    </ContainerSC>
  );
};
