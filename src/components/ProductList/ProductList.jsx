import React from 'react';
import { ProductCard } from '../ProductCard/ProductCard';
import './ProductList.css';
import  futbol  from "../../assets/Images/balon_futbol.png";


const products = [
  {
    image:{futbol},
    title: 'Balón de fútbol',
    description: 'Balón oficial de tamaño estándar para jugar futbol en cualquier superficie.'
  },
  
  {
    image: '/assets/Images/raqueta_tenis.png',
    title: 'Raqueta de tenis de mesa',
    description: 'Raqueta profesional para jugar tenis de mesa, con mango ergonómico y gomas de alta adherencia.'
  },
  {
    image: '/assets/images/balon_baloncesto.png',
    title: 'Balón de baloncesto',
    description: 'Balón oficial de baloncesto, tamaño y peso reglamentario para competencias y entrenamientos.'
  },
  {
    image: '/assets/images/patines.png',
    title: 'Patines',
    description: 'Patines ajustables ideales para patinaje recreativo, con ruedas de alta resistencia y bota acolchada.'
  },
  {
    image: '/assets/images/mancuernas.png',
    title: 'Mancuernas de 5kg',
    description: 'Par de mancuernas de 5kg cada una, recubiertas de vinilo para un agarre cómodo y seguro.'
  },
  {
    image: '/assets/images/bate_beisbol.png',
    title: 'Bate de béisbol',
    description: 'Bate de madera de alta calidad para prácticas y juegos de béisbol, disponible en diferentes longitudes.'
  },
  {
    image: '/assets/images/bola_bolos.png',
    title: 'Bola de bolos',
    description: 'Bola de boliche profesional, disponible en varios pesos y diseños para adaptarse a diferentes estilos de juego.'
  },
  {
    image: '/assets/images/taco_billar.png',
    title: 'Taco de billar',
    description: 'Taco de billar de alta calidad, fabricado en madera de arce con punta de cuero para precisión y control.'
  }
];

export const ProductList = () => {
  return (
    <div className="product-list">
      {products.map((product, index) => (
        <ProductCard key={index} {...product} />
      ))}
    </div>
  );
};
