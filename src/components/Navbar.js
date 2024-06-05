import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext';

export default function Navbar() {
  const { cartCount } = useContext(CartContext);

  return (
    <div>
      <nav className='navbar navbar-expand-sm navbar-dark bg-dark'>
        <div className='container'>
          <h1 className='navbar-brand'>
            LifeStyle Shopping Cart <i className="fa-solid fa-shop"></i>
          </h1>
          <div className='collapse navbar-collapse' id="collapsibleNavId">
            <ul className='navbar-nav ml-auto mt-2 mt-lg-0'>
              <li className='nav-item'>
                <Link className='nav-link' to='/'>
                  Home <i className="fa-solid fa-house"></i>
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/cart'>
                  Cart <i className="fa-solid fa-cart-shopping"></i>
                  <span className='badge badge-pill badge-warning ml-1'>{cartCount}</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}