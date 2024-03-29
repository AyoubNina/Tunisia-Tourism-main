
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";

import './NavBar.css'

import React, { useState, useEffect } from 'react';
import { Button, Icon } from "react-materialize";
import { Link } from 'react-router-dom';

function NavBar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            Tunisia Map
            <i className='fab fa-typo3' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Acceuil
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/booking'
                className='nav-links'
                onClick={closeMobileMenu}>
                Réservation
              </Link>
            </li>
          </ul>
          {false && (
            <button>
              Visit Us
            </button>
          )}
        </div>
      </nav>
    </>
  );
}

export default NavBar;
