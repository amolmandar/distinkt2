import React , {useState} from 'react';
import {Link} from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';


function Navbar() {
  const [click, setClick]=useState(false);
  const [button , setButton]=useState(true);


  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton=()=>{
    if(window.innerWidth<=960){
      setButton(false);
    }else{
      setButton(true);
    }
  };

  window.addEventListener('resize',showButton);

  return (
    <>
    {/* <header>
    </header> */}
    <div className="header">
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          DISTINKT <i className="fab fa-typo3"></i>
        </Link>
        <div className="menu-icon" onClick={handleClick}>
           <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? 'nav-menu active': 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/distinkt2' className='nav-links' onClick={closeMobileMenu} >
              Home
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/distinkt2/services' className='nav-links' onClick={closeMobileMenu} >
              Services
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/distinkt2/about-us' className='nav-links' onClick={closeMobileMenu} >
              About Us
            </Link>
          </li>
        </ul>
       {button && <button className='btn--outline'>Contact Us</button>}
      </div>
    </nav>
    </div>
    </>
  )
}

export default Navbar