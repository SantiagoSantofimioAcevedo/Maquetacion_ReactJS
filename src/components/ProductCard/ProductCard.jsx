import React from 'react';
import './ProductCard.css';

export const ProductCard = ({ image, title, description }) => {
  return (
    <div className="product-card">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
      <button>Comprar</button>
    </div>
  );
};



