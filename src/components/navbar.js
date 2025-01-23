import React from 'react';

function Navbar() {
  return (
    <nav style={navbarStyle}>
      <a href="/" style={linkStyle}>Home</a>
      <a href="/products" style={linkStyle}>Products</a>
      <a href="/about" style={linkStyle}>About</a>
      <a href="/contact" style={linkStyle}>Contact</a>
    </nav>
  );
}

const navbarStyle = {
  backgroundColor: '#333',
  padding: '10px',
  display: 'flex',
  justifyContent: 'space-around',
};

const linkStyle = {
  color: 'white',
  textDecoration: 'none',
  fontSize: '18px',
};

export default Navbar;
