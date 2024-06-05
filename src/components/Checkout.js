import React, { useContext } from 'react';
import { CartContext } from './CartContext';

export default function Checkout() {
  const { cart } = useContext(CartContext);

  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handlePlaceOrder = () => {
    alert('Your order has been placed!');
  };

  return (
    <div className='container'>
      <h1 className='text-center font-weight-bold'>Checkout</h1>
      <div className='row justify-content-center'>
        <div className='col-md-6'>
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
                        <p className='mb-1'>Quantity: {item.quantity}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
              <div className='mt-3 text-center'>
                <h5>Total Price: Rs. {calculateTotalPrice()}</h5>
                <button 
                  className='btn btn-primary mt-3' 
                  onClick={handlePlaceOrder}
                >
                  Place Order
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}