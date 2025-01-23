 
import React from 'react';
import { FaCartPlus, FaPlus, FaMinus } from 'react-icons/fa'; 
const Header = ({ cart, increaseQuantity, decreaseQuantity, setShowCart, showCart }) => {
  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0); // Calculate total quantity of cart items

  return (
    <header className="header">
      <div className="logo">
        <h1>Shopping App</h1>
      </div>

      {/* Cart Toggle Button */}
      <button className="cart-toggle" onClick={() => setShowCart(!showCart)}>
        <FaCartPlus /> Cart ({totalQuantity})
      </button>

      {/* If cart is visible, show cart items */}
      {showCart && cart.length > 0 && (
        <div className="cart-items">
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.url} alt={item.title} className="cart-item-image" />
              <div className="cart-item-info">
                <span>{item.title}</span>
                <div className="quantity-controls">
                  <button onClick={() => decreaseQuantity(item.id)}><FaMinus /></button>
                  <span>{item.quantity}</span>
                  <button onClick={() => increaseQuantity(item.id)}><FaPlus /></button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
