import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './Components/About';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Inicial from './Components/Inicial';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <img
          className="bg-img"
          src="https://ipfs.io/ipfs/QmScdWHfN65Ktu4EakbWuKRCLXAxkufoKaDcXjdBoDK38J"
          alt=""
        />
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Inicial />} />
            <Route path="about" element={<About />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
