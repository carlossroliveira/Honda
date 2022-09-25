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
import photoThree from '../../assets/fluent_pill-20-filled.png';
import photoFour from '../../assets/Picture2 (image).png';
import photoFive from '../../assets/Vector (1).png';
import photoSix from '../../assets/Vector.png';
// -------------------------------------------------
// Styles
// -------------------------------------------------
import {
  DivMainSC,
  DivOneSC,
  DivThreeSC,
  DivTwoSC,
  ImgOneSC,
  SpanOneSC,
  SpanSC,
  SpanTwoSC,
  SubDivThreeSC,
  SubDivTwoSC,
  SubMiniDivThreeSC,
  SubMiniDivTwoSC,
} from './productStyles';
// -------------------------------------------------
// Types
// -------------------------------------------------
/* import { INumberProps } from './types'; */

export const Product = () => {
  const info = useMyHookApplication();

  return (
    <>
      {info?.data?.map((item) => (
        <>
          <DivMainSC key={item.id}>
            <DivOneSC>
              <div>
                <ImgOneSC>
                  <img src={photoSix} alt="logo" />
                </ImgOneSC>
                <img src={photoFive} alt="logo" />
                <img src={photoThree} alt="logo" />

                <SpanOneSC>{item.brand}</SpanOneSC>
                <SpanOneSC>{item.name}</SpanOneSC>
                <SpanOneSC>Votré compatibilité {item.score}/100</SpanOneSC>
              </div>

              <div>
                <img src={photoFour} alt="logo" />
              </div>
            </DivOneSC>

            <DivTwoSC>
              <SubDivTwoSC>
                <SubMiniDivTwoSC>
                  <SpanSC>Health goals</SpanSC>
                  <Number />
                </SubMiniDivTwoSC>

                <SpanTwoSC>Améliorer les performances</SpanTwoSC>

                <SubMiniDivTwoSC>
                  <SpanSC>Symptoms</SpanSC>
                  <Number />
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
