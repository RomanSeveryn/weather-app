import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/home/Home';
import { City } from './pages/city/City';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="city/:name" element={<City />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
