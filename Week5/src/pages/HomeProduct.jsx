import React from 'react';
import '../css/style-homeproduct.css';

function HomeProduct() {
    return (
        <div>
            <p className="greetings1">Welcome Sahabat Sehat</p>
            <p className="greetings2">Produk Unggulan Kami</p>
            <nav className="category-nav">
                <ul>
                    <li>Semua Produk</li>
                    <li>Sepak Bola</li>
                    <li>Basket</li>
                    <li>Bulutangkis</li>
                    <li>Tennis</li>
                </ul>
            </nav>
            <div className="product-cards-container" id="productContainer">
                {/* Product data will be dynamically added here */}
            </div>
        </div>
    );
}

export default HomeProduct;
