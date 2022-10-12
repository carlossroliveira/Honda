// -------------------------------------------------
// Packages
// -------------------------------------------------
import React from 'react';
import { MdOutlineLightMode, MdOutlineNightlight } from 'react-icons/md';
// -------------------------------------------------
// Components
// -------------------------------------------------
import { Number } from '../../components/Number';
// -------------------------------------------------
// Context
// -------------------------------------------------
import { useMyHook } from '../../contextMain/themes/ContextTheme';
import { useMyHookApplication } from '../../contextMain/contextApplication/ContextApplication';
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
  DivParagraphSC,
} from './homeStyles';
import { Product } from '../../components/Product';

export const Home = (): JSX.Element => {
  const infoTheme = useMyHook();
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
        <DivParagraphSC>
          <ParagraphInfoSC weight>Best products</ParagraphInfoSC>

          <span onClick={() => infoTheme.handleThemes()}>
            {infoTheme?.themes.title === 'light' ? (
              <MdOutlineLightMode />
            ) : (
              <MdOutlineNightlight />
            )}
          </span>
        </DivParagraphSC>

        <ParagraphInfoSC weight={false}>
          From a base of <SpanInfoSC> 3456 products</SpanInfoSC>
        </ParagraphInfoSC>
      </InfoSC>

      <MainSC>
        <Product />
      </MainSC>
    </ContainerSC>
  );
};
