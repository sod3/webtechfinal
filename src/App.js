// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import CartPage from './pages/CartPage';
import ThankyouPage from './pages/ThankYouPage';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (index) => {
    const newCart = cart.filter((_, i) => i !== index);
    setCart(newCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage addToCart={addToCart} />} />
        <Route path="/cart" element={<CartPage cart={cart} removeFromCart={removeFromCart} clearCart={clearCart} />} />
        <Route path="/thankyou" element={<ThankyouPage />} />
      </Routes>
    </Router>
  );
}

export default App;
