import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Aos from 'aos';
import "aos/dist/aos.css"
import Checkout from "./components/Checkout";
import { CartProvider } from './components/CartContext';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    Aos.init();
    }, [])

  return (
    <CartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
