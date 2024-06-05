import React, { useContext } from 'react';
import Products from './data/productdata.json';
import { CartContext } from './CartContext';

export default function Home() {
  const { addToCart } = useContext(CartContext);

  return (
    <div className='container project my-3' id='projects'>
      <h1 className='font-weight-bold'>PRODUCTS</h1>
      <div className='row d-flex justify-content-center align-content-center' data-aos="zoom-in" data-aos-duration="2000">
        {Products.map((data) => (
          <div key={data.id} className="my-4 col-sm-6 col-md-4 col-lg-3 mx-4" >
            <div className="card bg-dark text-light" style={{ width: '18rem' }}>
              <div className='d-flex justify-content-center align-content-center p-3'>
                <img src={`${process.env.PUBLIC_URL}/assets/${data.img}`} className="card-img-top" alt="" style={{ width: '250px', height: '250px' }} />
              </div>
              <div className="card-body text-center">
                <h5 className="card-title font-weight-bold">{data.title}</h5>
                <p className="card-text">{data.info}</p>
                <h5 className="card-title">Rs. {data.price}</h5>
                <button 
                  onClick={() => addToCart(data)} 
                  className="btn btn-outline-warning">
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}