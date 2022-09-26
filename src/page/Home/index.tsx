// -------------------------------------------------
// Packages
// -------------------------------------------------
import React from 'react';
// -------------------------------------------------
// Components
// -------------------------------------------------
import { Number } from '../../components/Number';
// -------------------------------------------------
// Context
// -------------------------------------------------
import { useMyHookApplication } from '../../context/contextApplication/ContextApplication';
// -------------------------------------------------
// Images
// -------------------------------------------------
import photoOne from '../../assets/logo.svg';
import photoTwo from '../../assets/Group 377.svg';
// -------------------------------------------------
// Styles
// -------------------------------------------------
import {
  ContainerSC,
  DivHeaderSC,
  ParagraphInfoSC,
  HeaderSC,
  InfoSC,
  MainSC,
  SpanInfoSC,
  LoaderSC,
} from './homeStyles';
import { Product } from '../../components/Product';

export const Home = (): JSX.Element => {
  const info = useMyHookApplication();

  return (
    <ContainerSC>
      <HeaderSC>
        <div>
          <img src={photoOne} alt="Company logo" />
        </div>

        <DivHeaderSC>
          <Number score={info.values} />

          <LoaderSC value={info.values}>
            <img src={photoTwo} alt="Cart logo" />
          </LoaderSC>
        </DivHeaderSC>
      </HeaderSC>

      <InfoSC>
        <ParagraphInfoSC weight>Best products</ParagraphInfoSC>

        <ParagraphInfoSC weight={false}>
          From a base of
          <SpanInfoSC> 3456 products</SpanInfoSC>
        </ParagraphInfoSC>
      </InfoSC>

      <MainSC>
        <Product />
      </MainSC>
    </ContainerSC>
  );
};
