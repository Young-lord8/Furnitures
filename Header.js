import React from 'react';

const Header = ({ setCurrentPage }) => {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="nav-brand">
          <h1>🛋️ FurnitureHub</h1>
        </div>
        <ul className="nav-menu">
          <li><button onClick={() => setCurrentPage('home')} className="nav-link">Home</button></li>
          <li><button onClick={() => setCurrentPage('products')} className="nav-link">Products</button></li>
          <li><button onClick={() => setCurrentPage('about')} className="nav-link">About</button></li>
          <li><button onClick={() => setCurrentPage('contact')} className="nav-link">Contact</button></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
