import '../../App.css'
import Home from '../Home';
import React from 'react';
import Cards from '../Cards';
// import Router from 'react-router-dom';
import Footer from '../Footer';


function HomePage (){
    return (
        <>
        <Home />
        <Cards />
        {/* <Footer /> */}
        </>
    )
}
export default HomePage;