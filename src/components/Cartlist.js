import React from 'react';

const Cartlist = ({ cart, increaseQuantity, decreaseQuantity }) => {
  return (
    <div
      className={`fixed top-0 right-0 w-1/3 h-full bg-white shadow-lg transition-transform duration-500 ease-in-out transform ${cart.length > 0 ? 'translate-x-0' : 'translate-x-full'}`}
    >
      <h2 className="text-xl font-bold p-4 border-b">Your Cart</h2>
      {cart.length === 0 ? (
        <div className="flex justify-center items-center h-full">
          <p className="text-lg">Your cart is empty</p>
        </div>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id} className="flex justify-between items-center p-4 border-b">
              <div className="flex items-center">
                <img src={item.url} alt={item.title} className="w-12 h-12 mr-4" />
                <span className="font-medium">{item.title}</span>
              </div>
              <div className="flex items-center">
                <button
                  onClick={() => decreaseQuantity(item.id)}
                  className="p-2 bg-gray-300 text-sm rounded-md hover:bg-gray-400"
                >
                  -
                </button>
                <span className="mx-2">{item.quantity}</span>
                <button
                  onClick={() => increaseQuantity(item.id)}
                  className="p-2 bg-gray-300 text-sm rounded-md hover:bg-gray-400"
                >
                  +
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cartlist;
