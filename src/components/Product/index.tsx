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
import photoOne from '../../assets/Shape.svg';
import photoTwo from '../../assets/Vectorr.svg';
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
  DivProduct,
  DivThreeSC,
  DivTwoSC,
  ImgOneSC,
  ImgThreeSC,
  ImgTwoSC,
  LoaderSC,
  ParagraphThreeSC,
  SpanColorSC,
  SpanOneSC,
  SpanSC,
  SpanTwoSC,
  SubDivThreeSC,
  SubDivTwoSC,
  SubMiniDivTwoSC,
} from './productStyles';
import { IProductProps } from '../../context/contextApplication/types';

export const Product = () => {
  const info = useMyHookApplication();

  const scoreSearch = (item: IProductProps | any, list: string) => {
    return item[list]
      .map(
        (
          i: [
            {
              score: number;
            },
          ],
        ) => i,
      )
      .reduce(
        (prev: { score: number }, current: { score: number }) =>
          prev.score > current.score ? prev : current,
        0,
      );
  };

  return (
    <>
      {info?.data?.map((item: IProductProps) => (
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

              <DivProduct>
                <img src={photoFour} alt="logo" />
              </DivProduct>
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
                <LoaderSC value={scoreSearch(item, 'healthGoals').score}>
                  <img src={photoTwo} alt="Health goals logo" />
                </LoaderSC>

                <LoaderSC value={scoreSearch(item, 'symptoms').score}>
                  <img src={photoOne} alt="Symptoms logo" />
                </LoaderSC>
              </SubDivThreeSC>
            </DivTwoSC>

            <DivThreeSC>
              <Button
                variant={'default'}
                icon={<AiOutlinePlusCircle />}
                onClick={() => info.handleValue()}
                text={`${String(item.price).replace('.', ',')} €`}
              />
            </DivThreeSC>
          </DivMainSC>
        </>
      ))}
    </>
  );
};
