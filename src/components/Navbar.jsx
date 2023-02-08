import React from 'react'
import IconMenu from '../assets/images/icon-menu.svg'
import IconMenuClose from '../assets/images/icon-menu-close.svg'
import Logo from '../assets/images/logo.svg'


const Navbar = (props) => {
    
  return (
        <nav>
            <img src={Logo} alt="" className='nav-logo'  />
            <img src={IconMenu} alt="" onClick={props.handleClick} className='nav-menu-icon' />
            <div className={props.menuIsOn ? "menu-active" : "menu-close"} >           
                <img src={IconMenuClose} alt="" className='nav-menu-close' onClick={props.handleClick}/>
                <ul className='menu-open'>
                    <li>Home</li>
                    <li>New</li>
                    <li>Popular</li>
                    <li>Trending</li>
                    <li>Categories</li>
                </ul>
            </div>
        </nav>
  )
}

export default Navbar
