import React from 'react';

function ProductList({ products, addToCart }) {  // Receive both products and addToCart as props
  return (
    <div className='flex'>
      {products.map((productItem, productIndex) => (
        <div key={productIndex} className="product-item">
          {/* Show product image */}
          <img
  src={productItem.url}
  alt={productItem.title}
  style={{ width: '50%', maxWidth: '200px', height: 'auto' }}/>
          <a href={productItem.url} target="_blank" rel="noopener noreferrer">
          <h3>{productItem.title}</h3>
          </a>
          <p>Category: {productItem.category}</p>
          <p>Seller: {productItem.seller || 'Unknown'}</p>  {/* Add fallback for seller */}
          <p>Price: ${productItem.price}</p>
          <button onClick={() => addToCart(productItem)}>Add to Cart</button> {/* Add to cart button */}
            </div>
      ))}
    </div>
  );
}

export default ProductList;
