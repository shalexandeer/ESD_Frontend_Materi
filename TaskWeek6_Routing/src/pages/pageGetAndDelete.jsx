import React, { useEffect, useState } from 'react';
import '../pages/css/style1.css';
import { Link } from "react-router-dom";

function GetandDelete() {
    const [products, setProducts] = useState([0]);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = () => {
        fetch('https://9833-36-65-255-46.ngrok-free.app/produk', {
            mode: "cors",
            method: "GET",
            headers: {
                "ngrok-skip-browser-warning": "true",
            }
        })
        .then(response => response.json())
        .then(data => setProducts(data.data))
        .catch(error => console.error('Error fetching data:', error));
    };

    const deleteProduct = (productId) => {
        fetch(`https://f053-2001-448a-50c2-2390-ec5a-775c-7fe1-73eb.ngrok-free.app/produk/${productId}`, {
            mode: "cors",
            method: "DELETE",
            headers: {
                "ngrok-skip-browser-warning": "true",
            }
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to delete product');
            }
            return response.json();
        })
        .then(() => {
            fetchProducts();
        })
        .catch(error => console.error('Error deleting product:', error));
    };

    return (
        <div>
            <div className="container-wrapper">
                <div className="container">
                <nav>
                        <Link className="logo" to={'/'}>
                            TOKOPEDEI <img src="./src/Assets/logo.png" alt="Logo E-Commerce Tokopedei" />
                        </Link>
                        <input type="text" className="search-bar" placeholder="Cari di Tokopedei" />
                        <div className="image-container">
                            <Link to={'/'}>
                                <img className="nav-logo" src="./src/Assets/home.png" alt="Button Home" />
                            </Link>
                            <Link to={'/InsertProduct'}>
                                <img className="nav-logo" src="./src/Assets/upload-big-arrow.png" alt="Button Upload" />
                            </Link>
                            <Link to={'/UpdateProduct'}>
                                <img className="nav-logo" src="./src/Assets/refresh.png" alt="Button Update" />
                            </Link>
                        </div>
                    </nav>
                </div>
            </div>
        <div className="container-wrapper">
            <div className="category-container">
                <div className="heading-page">
                    <a className="heading-page-text">Dashboard Penjual</a>
                </div>
                <div className="product-btn">
                    <button type="button" className="product-category-btn"> Semua Kategori</button>
                    <button type="button" className="product-category-btn"> Smartphone</button>
                    <button type="button" className="product-category-btn"> Laptop</button>
                    <button type="button" className="product-category-btn"> TV</button>
                </div>
            </div>
        </div>
            <div id="card-container-wrapper" className="container-wrapper">
                {products.map(product => (
                    <div className="card-container" key={product.id}>
                        <div className="card">
                            <div className="card-content">
                                <img src={product.image} alt={product.nama} />
                                <div className="card-info">
                                    <a className="product-title">{product.nama}</a>
                                    <p className="product-description">{product.deskripsi}</p>
                                </div>
                            </div>
                        </div>
                        <div className="card-description">
                            <div className="card-stock">
                                <div>
                                    <a className="stock-price">Harga: {product.harga}</a>
                                </div>
                                <div>
                                    <a className="stock-description">Jumlah Stock: {product.stok}</a>
                                </div>
                            </div>
                            <button className="btn-delete" type="button" onClick={() => deleteProduct(product.id)}>Delete</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default GetandDelete;
