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
import { ContainerSC, DivTwoSC, ParagraphSC, TitleSC } from './errorStyles';

export const Error = (): JSX.Element => {
  const navigate = useNavigate();

  return (
    <ContainerSC>
      <NamePage title="Error" />

      <DivTwoSC>
        <TitleSC>Está página não existe!</TitleSC>

        <ParagraphSC>Clique no botão voltar</ParagraphSC>

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
