import React from 'react'
import IconMenu from '../assets/images/icon-menu.svg'
import IconMenuClose from '../assets/images/icon-menu-close.svg'
import Logo from '../assets/images/logo.svg'


const Navbar = () => {
  return (
    <nav>
      <img src={Logo} alt="" />
      <img src={IconMenu} alt="" />
      <img src={IconMenuClose} alt="" />
      <ul>
        <li>Home</li>
        <li>New</li>
        <li>Popular</li>
        <li>Trending</li>
        <li>Categories</li>
      </ul>
    </nav>
  )
}

export default Navbar
