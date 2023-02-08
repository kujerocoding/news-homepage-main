import React from 'react'
import IconMenu from '../assets/images/icon-menu.svg'
import IconMenuClose from '../assets/images/icon-menu-close.svg'
import Logo from '../assets/images/logo.svg'


const Navbar = (props) => {
    const style = {
        display: props.menuIsOn ? "flex" : "none"
    }
  return (
    <div>  
        <nav>
            <img src={Logo} alt="" className='nav-logo'  />
            <img src={IconMenu} alt="" onClick={props.handleClick} />
        </nav>
        <div className='menu-active' style={style} onClick={props.handleClick}>           
            <img src={IconMenuClose} alt="" />
            <ul>
                <li>Home</li>
                <li>New</li>
                <li>Popular</li>
                <li>Trending</li>
                <li>Categories</li>
            </ul>
        </div>
    </div>
    
  )
}

export default Navbar
