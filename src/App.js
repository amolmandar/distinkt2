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

function App() {
  return (
   <>
   <Router>
    {/* <Navbar /> */}
    <Routes>
      <Route path='/distinkt2' element={< HomePage />} />
      <Route path='/distinkt2/services' element={<Services />} />
      <Route path='/distinkt2/about-us' element={<AboutUs/>} />
      <Route path='/distinkt2/sign-up' element={<SignUp/>} />
      <Route path='/distinkt2/travel-management' element={<TravelManagement />} />
      <Route path='/distinkt2/general-management' element={<GeneralManagement />} />
      <Route path='/distinkt2/jet-charters' element={<JetCharters />} />
      <Route path='/distinkt2/luxory-concierge' element={<LuxoryConcierge />} />
      <Route path='/distinkt2/luxory-goods' element={<LuxoryGoods />} />
      <Route path='/distinkt2/sporting-events' element={<SportingEvents />} />
      <Route path='/distinkt2/vip-events' element={<VipEvents />} />
      <Route path='/distinkt2/event-management' element={<EventManagement />} />
  
    </Routes>
    <Footer />
  </Router>
   </>
  );
}

export default App;
