import './App.css'

import React from 'react';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import Navbar from './component/Navbar';
import AboutUs from './component/home-page/AboutUs';
import Home from './component/home-page/Home';
import ShopPage from './component/shop/ShopPage';
import ContactUs from './component/contact-us/ContactUs';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/home-page/AboutUs" element={<AboutUs />} />
          <Route path="/shop" element={<ShopPage/>} />
          <Route path="/contactUs" element={<ContactUs/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
