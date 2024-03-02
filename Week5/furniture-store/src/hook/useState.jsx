import React, { useEffect, useState } from 'react';

function ProductList() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch('https://normal-utterly-raptor.ngrok-free.app/products', {
        mode: "cors",
        method: "GET",
        headers: {
          "ngrok-skip-browser-warning": "true",
        },
      });
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
      const data = await response.json();
      setProducts(data.data);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      {error && <p>Error: {error}</p>}
      <div id="product-list">
        {products.map(product => (
          <div key={product.id} className="product-box">
            <img src={product.image} alt={product.name} />
            <h2 className="product-title">{product.name}</h2>
            <p className="stock">Stok: {product.stock}</p>
            <p className="category">Kategori: {product.category}</p>
            <p className="product-price">Harga: Rp{product.price}</p>
            <p className="desc">{product.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
