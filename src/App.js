import './App.css';
import React from 'react'; 
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from './components/pages/HomePage';
import AboutUs from './components/pages/AboutUs';
import SignUp from './components/pages/SignUp';
import TravelManagement from './components/pages/TravelManagement';
import GeneralManagement from './components/pages/GeneralManagement';
import JetCharters from './components/pages/JetCharters';
import LuxoryConcierge from './components/pages/LuxoryConcierge';
import LuxoryGoods from './components/pages/LuxoryGoods';
import SportingEvents from './components/pages/SportingEvents';
import VipEvents from './components/pages/VipEvents';
import Services from './components/pages/Services';
import EventManagement from './components/pages/EventManagement';
import Footer from './components/Footer';
import NotFound from './components/pages/NotFound';

function App() {
  return (
   <>
   <Router>
    <Navbar />
    <Routes>
      <Route path='/distinkt2' element={<HomePage />} />
      <Route path='/about-us' element={<AboutUs/>} />
      {/*<Route path='/services' element={<Services />} />
      <Route path='/sign-up' element={<SignUp/>} />
      <Route path='/travel-management' element={<TravelManagement />} />
      <Route path='/general-management' element={<GeneralManagement />} />
      <Route path='/jet-charters' element={<JetCharters />} />
      <Route path='/luxory-concierge' element={<LuxoryConcierge />} />
      <Route path='/luxory-goods' element={<LuxoryGoods />} />
      <Route path='/sporting-events' element={<SportingEvents />} />
      <Route path='/vip-events' element={<VipEvents />} />
      <Route path='/event-management' element={<EventManagement />} /> */}

      <Route path='*' element={<NotFound />} />
  
    </Routes>
    <Footer />
  </Router>
   </>
  );
}

export default App;
