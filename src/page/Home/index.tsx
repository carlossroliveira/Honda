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
import photoOne from '../../assets/Group.png';
import photoTwo from '../../assets/Group 378.png';
// -------------------------------------------------
// Styles
// -------------------------------------------------
import {
  ContainerSC,
  DivHeaderSC,
  ParagraphInfoSC,
  HeaderSC,
  ImgHeaderSC,
  InfoSC,
  MainSC,
  SpanInfoSC,
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
          <ImgHeaderSC src={photoTwo} alt="Cart logo" />
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
