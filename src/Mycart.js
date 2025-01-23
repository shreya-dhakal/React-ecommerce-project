import React from 'react';
import ProductList from './Productlist';

function MyCart({ cart }) {
  return (
    <div>
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        cart.map((item, index) => (
          <div key={index}>
            <h3>{item.title}</h3>
            <p>Quantity: {item.quantity}</p>
            <p>Price: ${item.price}</p>
            <button>
              onClick={()=>addtoCart(ProductList)}
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default MyCart;
