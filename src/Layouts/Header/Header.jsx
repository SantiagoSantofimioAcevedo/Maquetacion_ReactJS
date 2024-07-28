import React from 'react'
import { Navbar } from '../../components/Navbar/Navbar'
import { Logo } from '../../components/Logo/Logo'
import './Header.css'

export const Header = () => {
  return (
    <header className='header'>
      <Logo />
      <Navbar />
    </header>
  )
}