import React from 'react';

function ProductCard({ product }) {
    return (
        <div className="product-card">
            <img className="product-image" src={`https://0feb-202-80-216-125.ngrok-free.app/${product.image}`} alt={product.name} />
            <div className="product-details">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-description">{product.description}</p>
                <p className="product-price">Price: {product.price}</p>
            </div>
            <button className="product-btn">Buy Now</button>
            <button className="delete-btn">Delete</button>
        </div>
    );
}

export default ProductCard;
