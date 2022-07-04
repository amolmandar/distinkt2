import React from 'react';
import { Button } from './Button';
import './Home.css';
import '../App.css';
import {Link } from "react-router-dom";


const Home = () => {
  return (
    <div className='home-container'>
        <h1>DISTINKT</h1>
        <p>Luxury awaits you ...</p>
        <div className="home-btns">
            <Link to='/about-us'><button className='btn--outline'> LEARN MORE </button></Link>
            <button className='btn--outline'  > CONTACT US </button>
        </div>
    </div>
  )
}

export default Home