// -------------------------------------------------
// Packages
// -------------------------------------------------
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// -------------------------------------------------
// Components
// -------------------------------------------------
import { Layout } from '../components/Layout';

export const RoutesComponent = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} />

        <Route path="*" element={<h1>Não existe essa pagina</h1>} />
      </Routes>
    </BrowserRouter>
  );
};
