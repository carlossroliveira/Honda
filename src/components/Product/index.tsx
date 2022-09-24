// -------------------------------------------------
// Packages
// -------------------------------------------------
import React from 'react';
// -------------------------------------------------
// Components
// -------------------------------------------------
import { Number } from '../../components/Number';
import { useMyHookApplication } from '../../context/contextApplication/ContextApplication';
// -------------------------------------------------
// Styles
// -------------------------------------------------
import { DivMainSC } from './productStyles';
// -------------------------------------------------
// Types
// -------------------------------------------------
/* import { INumberProps } from './types'; */

export const Product = () => {
  const bla = useMyHookApplication();

  console.log('INfoooo', bla);
  return (
    <DivMainSC>
      <div>info</div>

      <div>
        <p>Health goals</p>
        <Number />
      </div>

      <div>
        <button>65156 +</button>
      </div>
    </DivMainSC>
  );
};
