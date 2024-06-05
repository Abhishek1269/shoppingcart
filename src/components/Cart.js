import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from './CartContext';

export default function Cart() {
  const { cart, incrementQuantity, decrementQuantity } = useContext(CartContext);
  const navigate = useNavigate();

  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleCheckout = () => {
    navigate('/checkout');
  };

  return (
    <div className='container card mt-5 mb-3' data-aos="zoom-in" data-aos-duration="2000">
      <h1 className='mt-3 font-weight-bold'>Your Cart</h1>
      <div className='row'>
        <div className='col-md-6 offset-md-3'>
          {cart.length === 0 ? (
            <p>No items in cart.</p>
          ) : (
            <>
              <ul className='list-group'>
                {cart.map((item) => (
                  <li key={item.id} className='list-group-item d-flex justify-content-between align-items-center'>
                    <div className='d-flex align-items-center'>
                      <img src={`${process.env.PUBLIC_URL}/assets/${item.img}`} alt={item.title} style={{ width: '50px', height: '50px', marginRight: '10px' }} />
                      <div>
                        <h5 className='mb-1'>{item.title}</h5>
                        <p className='mb-1'>Rs. {item.price}</p>
                      </div>
                    </div>
                    <div className='d-flex align-items-center'>
                      <button 
                        className='btn btn-outline-secondary btn-sm mx-2' 
                        onClick={() => decrementQuantity(item.id)}
                      >-</button>
                      <span>{item.quantity}</span>
                      <button 
                        className='btn btn-outline-secondary btn-sm mx-2' 
                        onClick={() => incrementQuantity(item.id)}
                      >+</button>
                    </div>
                  </li>
                ))}
              </ul>
              <div className='mt-3 text-center'>
                <h5>Total Price: Rs. {calculateTotalPrice()}</h5>
                <button 
                  className='btn btn-primary mt-3 mb-5' 
                  onClick={handleCheckout}
                >
                  Proceed to Checkout
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}