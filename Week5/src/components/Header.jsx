import React from 'react';

function Header() {
  return (
    <header>
      <div className="logo">4 Sehat 5 Rungkat</div>
      <nav className="header-nav">
        <ul>
          <li><a href="addproduct.html">Add Product</a></li>
          <li><a href="editproduct.html">Edit Product</a></li>
        </ul>
      </nav>
      <div className="chart-container">
        <button className="chart-btn">
          <span className="chart-text">Keranjang</span>
          <img className="chart-img" src="../assets/keranjang.png" alt="Keranjang Icon" />
        </button>
      </div>
    </header>
  );
}

export default Header;
