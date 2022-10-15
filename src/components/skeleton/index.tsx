// -------------------------------------------------
// Packages
// -------------------------------------------------
import React from 'react';
import {
  ContainerSC,
  DivOneSC,
  SubTwoDivOneSC,
  SubOneSpanOneSC,
  SubOneSpanTwoSC,
  DivTwoSC,
  SubTwoDivTwoSC,
  DivFourSC,
  SubFourSpanOneSC,
  DivThreeSC,
  SubThreeSpanOneSC,
  SubThreeSpanTwoSC,
  SubDivThreeSC,
} from './skeleton.Styles';
// -------------------------------------------------
// Styles
// -------------------------------------------------

export const Skeleton = () => {
  return (
    <ContainerSC>
      <DivOneSC>
        <SubOneSpanOneSC />
        <SubOneSpanOneSC />
        <SubOneSpanTwoSC />
      </DivOneSC>

      <DivTwoSC>
        <div>
          <SubTwoDivOneSC />
          <SubTwoDivOneSC />
          <SubTwoDivOneSC />
        </div>

        <div>
          <SubTwoDivTwoSC />
        </div>
      </DivTwoSC>

      <DivThreeSC>
        <div>
          <SubThreeSpanOneSC />
          <SubThreeSpanOneSC />
          <SubThreeSpanOneSC />
          <SubThreeSpanOneSC />
        </div>

        <SubDivThreeSC>
          <SubThreeSpanTwoSC />
          <SubThreeSpanTwoSC />
        </SubDivThreeSC>
      </DivThreeSC>

      <DivFourSC>
        <SubFourSpanOneSC />
      </DivFourSC>
    </ContainerSC>
  );
};
