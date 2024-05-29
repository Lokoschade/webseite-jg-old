import React, { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo_w.png';
import german from '../../assets/german flag.svg';
import english from '../../assets/uk flag.svg';
import './navbar.css'

const Menu = () => (
  <>
  <p><a href='#vorstellung'>Über mich</a></p>
  <p><a href='#problem'>Problem</a></p>
  <p><a href='#ziele'>Ziele</a></p>
  <p><a href='#stimmen'>Stimmen für Jamila</a></p>
  </>)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className='jg__navbar'>
      <div className='jg__navbar-links'>
        <div className='jg__navbar-links_logo'>
          <img src={logo} alt='logo'/>
        </div>
        <div className='jg__navbar-links_container'>
          <Menu/>
        </div>
      </div>
      <div className='jg__navbar-lang'>
        <button type='button'>
          <img src={german} alt='Deutsch'/>
        </button>
        <button type='button'>
          <img src={english} alt='English'/>
        </button>
      </div>
      <div className='jg__navbar-menu'>
        {toggleMenu
        ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)}/>
        : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)}/>}
        {toggleMenu && (
          <div className='jg__navbar-menu_container scale-up-center'>
            <div className='jg__navbar-menu_container-links'>
              <Menu/>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar