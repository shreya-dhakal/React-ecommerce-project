import React, { useState } from 'react';
import './App.css';
import ProductList from './Productlist';
import Cartlist from './components/Cartlist';
import Header from './components/Header';

function App() {
  const [products, setProducts] = useState([
    {
      id: 1,
      url: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 109.95,
      category: "men's clothing",
    },
    {
      id: 2,
      url: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      title: "Mens Casual Premium Slim Fit T-Shirts ",
      price: 22.3,
      category: "men's clothing",
    },
    {
      id: 3,
      url: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
      title: "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
      price: 695,
      category: "jewelery",
    },
    {
      id: 4,
      url: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
      title: "White Gold Plated Princess",
      price: 9.99,
      category: "jewelery",
    },
    {
      id: 5,
      url: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
      title: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
      price: 56.99,
      category: "women's clothing",
    },
    {
      id: 6,
      url: "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
      title: "Opna Women's Short Sleeve Moisture",
      price: 7.95,
      category: "women's clothing",
    },
    {
      id: 7,
      url: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80",
      title: "Stylish bag",
      price: 500,
      category: "Women's item",
    },
    {
      id: 8,
      url: "https://kinclimg7.bluestone.com/f_jpg,c_scale,w_828,q_80,b_rgb:f0f0f0/giproduct/BISP0503N21_YAA18DIG6XXXXXXXX_ABCD00-PICS-00003-1024-42012.png",
      title: "Gold Necklace",
      price: 1000,
      category:"Pearl",
    },
    
  ]);

  const [cart, setCart] = useState([]); // State for cart
  const [showCart, setShowCart] = useState(false); // State for toggling cart visibility

  // Add selected product to cart or update quantity if it exists
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProductIndex = prevCart.findIndex(item => item.id === product.id);
      if (existingProductIndex >= 0) {
        const updatedCart = [...prevCart];
        updatedCart[existingProductIndex].quantity += 1;
        return updatedCart;
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  // Increase quantity of product in cart
  const increaseQuantity = (productId) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.map(item =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      );
      return updatedCart;
    });
  };

  // Decrease quantity of product in cart
  const decreaseQuantity = (productId) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.map(item =>
        item.id === productId && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
      );
      return updatedCart;
    });
  };

  return (
    <div className="App">
      <Header 
        cart={cart} 
        increaseQuantity={increaseQuantity} 
        decreaseQuantity={decreaseQuantity} 
        setShowCart={setShowCart} 
        showCart={showCart} 
      />
      <ProductList products={products} addToCart={addToCart} />
    </div>
  );
}

export default App;