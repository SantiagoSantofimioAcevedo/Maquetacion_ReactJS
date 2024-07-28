import React from 'react';
import { ProductList } from '../../components/ProductList/ProductList';
import './Main.css';

export const Main = () => {
  return (
    <main className="main">
      <h1>Mis Artículos</h1>
      <ProductList />
    </main>
  );
};


