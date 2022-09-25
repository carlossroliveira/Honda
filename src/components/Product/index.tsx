// -------------------------------------------------
// Packages
// -------------------------------------------------
import React from 'react';
import { AiOutlinePlusCircle } from 'react-icons/ai';
// -------------------------------------------------
// Components
// -------------------------------------------------
import { Button } from '../Button';
import { Number } from '../../components/Number';
// -------------------------------------------------
// Context
// -------------------------------------------------
import { useMyHookApplication } from '../../context/contextApplication/ContextApplication';
// -------------------------------------------------
// Images
// -------------------------------------------------
import photoOne from '../../assets/Shape.png';
import photoTwo from '../../assets/Vector (2).png';
import photoThree from '../../assets/fluent_pill-20-filled.svg';
import photoFour from '../../assets/Picture2 (image).svg';
import photoFive from '../../assets/Vector (1).svg';
import photoSix from '../../assets/Vector.svg';
// -------------------------------------------------
// Styles
// -------------------------------------------------
import {
  BrandSC,
  DivImagesSC,
  DivMainSC,
  DivOneSC,
  DivThreeSC,
  DivTwoSC,
  ImgOneSC,
  ImgThreeSC,
  ImgTwoSC,
  ParagraphThreeSC,
  SpanColorSC,
  SpanOneSC,
  SpanSC,
  SpanTwoSC,
  SubDivThreeSC,
  SubDivTwoSC,
  SubMiniDivThreeSC,
  SubMiniDivTwoSC,
} from './productStyles';

export const Product = () => {
  const info = useMyHookApplication();

  return (
    <>
      {info?.data?.map((item) => (
        <>
          <DivMainSC key={item.id}>
            <DivOneSC>
              <div>
                <DivImagesSC>
                  {item.isInPack && (
                    <ImgOneSC>
                      <img src={photoSix} alt="logo" />
                    </ImgOneSC>
                  )}

                  {item.hasPrecaution && (
                    <ImgTwoSC>
                      <img src={photoFive} alt="logo" />
                    </ImgTwoSC>
                  )}

                  <ImgThreeSC>
                    <img src={photoThree} alt="logo" />
                    <ParagraphThreeSC>{item.capsuleAmount}</ParagraphThreeSC>
                  </ImgThreeSC>
                </DivImagesSC>

                <BrandSC>{item.brand}</BrandSC>
                <SpanOneSC>{item.name}</SpanOneSC>
                <SpanOneSC>
                  Votré compatibilité{' '}
                  <SpanColorSC>{item.score}/100</SpanColorSC>
                </SpanOneSC>
              </div>

              <div>
                <img src={photoFour} alt="logo" />
              </div>
            </DivOneSC>

            <DivTwoSC>
              <SubDivTwoSC>
                <SubMiniDivTwoSC>
                  <SpanSC>Health goals</SpanSC>
                  <Number score={item.healthGoals.length} />
                </SubMiniDivTwoSC>

                <SpanTwoSC>Améliorer les performances</SpanTwoSC>

                <SubMiniDivTwoSC>
                  <SpanSC>Symptoms</SpanSC>
                  <Number score={item.symptoms.length} />
                </SubMiniDivTwoSC>

                <SpanTwoSC>Mémorie</SpanTwoSC>
              </SubDivTwoSC>

              <SubDivThreeSC>
                <SubMiniDivThreeSC>
                  <img src={photoTwo} alt="Health goals logo" />
                </SubMiniDivThreeSC>

                <SubMiniDivThreeSC>
                  <img src={photoOne} alt="Symptoms logo" />
                </SubMiniDivThreeSC>
              </SubDivThreeSC>
            </DivTwoSC>

            <DivThreeSC>
              <Button
                onClick={() => info.handleValue()}
                variant={'default'}
                icon={<AiOutlinePlusCircle />}
                text={`${String(item.price).replace('.', ',')} €`}
              />
            </DivThreeSC>
          </DivMainSC>
        </>
      ))}
    </>
  );
};
