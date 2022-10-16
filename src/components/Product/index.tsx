// -------------------------------------------------
// Packages
// -------------------------------------------------
import React, { useState } from 'react';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { BsLightningCharge } from 'react-icons/bs';
import { BiTrendingUp } from 'react-icons/bi';
// -------------------------------------------------
// Components
// -------------------------------------------------
import { Button } from '../Button';
import { Number } from '../../components/Number';
// -------------------------------------------------
// Context
// -------------------------------------------------
import { useMyHookApplication } from '../../contextMain/contextApplication/ContextApplication';
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
  ImgThreeSC,
  LoaderSC,
  ParagraphThreeSC,
  ButtonBackOneSC,
  SpanColorSC,
  SpanOneSC,
  SpanSC,
  SpanTwoSC,
  SubDivThreeSC,
  SubDivTwoSC,
  SubMiniDivTwoSC,
} from './productStyles';
import { IProductProps } from '../../contextMain/contextApplication/types';
import { Skeleton } from '../FirstSkeleton';

export const Product = () => {
  const info = useMyHookApplication();

  const [background, setBackground] = useState<boolean>(false);
  const [identifier, setIdentifier] = useState<number | undefined>();

  const motorcycleIdentifier = (id: number) => {
    setIdentifier(id);
    setBackground(!background);
  };

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
      {!info.data && (
        <>
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </>
      )}
      {info?.data?.map((item: IProductProps) => (
        <DivMainSC key={item.id}>
          <DivOneSC>
            <div>
              <DivImagesSC>
                <ImgThreeSC>
                  <ParagraphThreeSC>
                    <ButtonBackOneSC
                      disabled={
                        item?.haveMoreColors?.find((img) => img.imgOne === null)
                          ? true
                          : false
                      }
                      onClick={() => motorcycleIdentifier(item.id)}
                    >
                      Cor
                    </ButtonBackOneSC>
                  </ParagraphThreeSC>
                </ImgThreeSC>

                <ImgThreeSC>
                  <ParagraphThreeSC>
                    {item.amountOfFuel.replace('.', ',')} Litros
                  </ParagraphThreeSC>
                </ImgThreeSC>

                {item.ethanolFuel && (
                  <ImgThreeSC>
                    <ParagraphThreeSC>
                      <span>Etanol</span>
                    </ParagraphThreeSC>
                  </ImgThreeSC>
                )}
              </DivImagesSC>

              <BrandSC>
                Marca: <SpanColorSC>{item.brand}</SpanColorSC>
              </BrandSC>

              <SpanOneSC>
                Nome: <SpanColorSC>{item.name}</SpanColorSC>
              </SpanOneSC>

              <SpanOneSC>
                Pontuação: <SpanColorSC>{item.score}/100</SpanColorSC>
              </SpanOneSC>
            </div>

            <DivProduct>
              <img
                src={`${item.haveMoreColors?.map((itens) =>
                  identifier === item.id && background
                    ? itens?.imgOne
                    : itens?.imgTwo,
                )}`}
                alt="logo"
              />
            </DivProduct>
          </DivOneSC>
          <DivTwoSC>
            <SubDivTwoSC>
              <SubMiniDivTwoSC>
                <SpanSC>Potência Máxima</SpanSC>
                <Number score={item.maximumPower.length} />
              </SubMiniDivTwoSC>

              <SpanTwoSC>Corresponde ao valor máximo</SpanTwoSC>

              <SubMiniDivTwoSC>
                <SpanSC>Torque Máximo</SpanSC>
                <Number score={item.maximumTorque.length} />
              </SubMiniDivTwoSC>

              <SpanTwoSC>Quilograma força por metro</SpanTwoSC>
            </SubDivTwoSC>

            <SubDivThreeSC>
              <LoaderSC value={scoreSearch(item, 'maximumPower').score}>
                <BsLightningCharge />
              </LoaderSC>

              <LoaderSC value={scoreSearch(item, 'maximumTorque').score}>
                <BiTrendingUp />
              </LoaderSC>
            </SubDivThreeSC>
          </DivTwoSC>
          <DivThreeSC>
            <Button
              variant={'default'}
              icon={<AiOutlinePlusCircle />}
              onClick={() => info.handleValue()}
              text={`${String(item.price).replace('.', ',')} `}
            />
          </DivThreeSC>
        </DivMainSC>
      ))}
    </>
  );
};
