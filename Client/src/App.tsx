import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {Login, Home, Gudang, Penjualan} from './pages'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Login />} />
        <Route path="/penjualan" element={<Penjualan />} />
        <Route path="/gudang" element={<Gudang />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
