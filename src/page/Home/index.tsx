// -------------------------------------------------
// Packages
// -------------------------------------------------
import React from 'react';
import { BsCartX, BsCartCheck } from 'react-icons/bs';
import { MdOutlineLightMode, MdOutlineNightlight } from 'react-icons/md';
// -------------------------------------------------
// Components
// -------------------------------------------------
import { Number } from '../../components/Number';
import { Product } from '../../components/Product';
// -------------------------------------------------
// Context
// -------------------------------------------------
import { useMyHook } from '../../contextMain/themes/ContextTheme';
import { useMyHookApplication } from '../../contextMain/contextApplication/ContextApplication';
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
  FooterSC,
} from './homeStyles';
import { Footer } from '../../components/Footer';

export const Home = (): JSX.Element => {
  const infoTheme = useMyHook();
  const info = useMyHookApplication();

  return (
    <ContainerSC>
      <HeaderSC>
        <div>
          <img
            src={
              'https://www.honda.com.br/sites/hda/themes/hondahda/assets/img/honda-horizontal.svg'
            }
            alt="logo"
          />
        </div>

        <DivHeaderSC>
          <Number score={info.values} />

          <LoaderSC value={info.values}>
            {info.values > 0 ? <BsCartCheck /> : <BsCartX />}
          </LoaderSC>
        </DivHeaderSC>
      </HeaderSC>

      <InfoSC>
        <DivParagraphSC>
          <ParagraphInfoSC weight>As melhores motos!</ParagraphInfoSC>

          <span onClick={() => infoTheme.handleThemes()}>
            {infoTheme?.themes.title === 'light' ? (
              <MdOutlineLightMode />
            ) : (
              <MdOutlineNightlight />
            )}
          </span>
        </DivParagraphSC>

        <ParagraphInfoSC weight={false}>
          mais de <SpanInfoSC> 1000 </SpanInfoSC> motos vendidas por dia.
        </ParagraphInfoSC>
      </InfoSC>

      <MainSC>
        <Product />
      </MainSC>

      <FooterSC>
        <Footer />
      </FooterSC>
    </ContainerSC>
  );
};
