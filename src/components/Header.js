import React from 'react';
import './Header.css';


const Header = () => {
  return (
    <header>
      <div className="header-content">
        <div className="logo">
          <img src="law-enforcement.png" alt="Your Legal Hub Logo" style={{ maxWidth: '100px' }} />
        </div>
        <div className="title">
          <h1>Your Legal Hub</h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
