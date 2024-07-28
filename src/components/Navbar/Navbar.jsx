import React from 'react'
import { NavItem } from '../NavItem/NavItem'

export const Navbar = () => {
  return (
    <nav>
      <ul>
        <NavItem content = 'Inicio' />
        <NavItem content = 'Nuestra Compañia' />
        <NavItem content = 'Nuestros Valores' />
        <NavItem content = 'Contactanos' />
      </ul>
      <p>Envío Gratis a todo el país por compras superiores a $150.000,00 COP</p>
    </nav>
  )
}