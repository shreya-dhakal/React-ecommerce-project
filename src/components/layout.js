import React from 'react';
import Header from './components/Header';
import ProductList from './Productlist';
import Cartlist from './components/Cartlist';

const Layout = ({ products, cart, setCart, showCart, setShowCart, addToCart, increaseQuantity, decreaseQuantity }) => {
  return (
    <div>
      {/* Header Component */}
      <Header 
        cart={cart} 
        setShowCart={setShowCart}
        showCart={showCart}
      />

      {/* Conditional rendering of Product List or Cartlist */}
      {showCart ? (
        <Cartlist 
          cart={cart} 
          increaseQuantity={increaseQuantity} 
          decreaseQuantity={decreaseQuantity} 
        />
      ) : (
        <ProductList products={products} addToCart={addToCart} />
      )}
    </div>
  );
};

export default Layout;
