import React, { useState } from 'react';
import '../pages/css/style2.css';

function PagePOST() {
    const [imagePreview, setImagePreview] = useState(null);

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const productName = document.getElementById('productName').value;
        const productDescription = document.getElementById('productDescription').value;
        const productPrice = document.getElementById('productPrice').value;
        const productStock = document.getElementById('productStock').value;
        const productImage = document.getElementById('image-input').files[0];

        const formData = new FormData();
        formData.append('nama', productName);
        formData.append('deskripsi', productDescription);
        formData.append('harga', productPrice);
        formData.append('stok', productStock);
        formData.append('image', productImage);

        fetch('https://9833-36-65-255-46.ngrok-free.app/produk', {
            mode: 'cors',
            method: 'POST',
            headers: {
                'ngrok-skip-browser-warning': 'true',
            },
            body: formData,
        })
            .then(response => response.json())
            .then(data => {
                console.log('Product uploaded successfully:', data);
            })
            .catch(error => {
                console.error('Error uploading product:', error);
            });
    };

    return (
        <div>
            <div className="container-wrapper">
                <div className="container">
                    <nav>
                        <a className="logo">
                            TOKOPEDEI <img src="./src/Assets/logo.png" alt="Logo E-Commerce Tokopedei" />
                        </a>
                        <input type="text" className="search-bar" placeholder="Cari di Tokopedei" />
                        <div className="image-container">
                            <a href="{% url 'html:pageGetAndDelete' %}">
                                <img className="nav-logo" src="./src/Assets/home.png" alt="Button Home" />
                            </a>
                            <a href="{% url 'html:pagePOST' %}">
                                <img className="nav-logo" src="./src/Assets/upload-big-arrow.png" alt="Button Upload" />
                            </a>
                            <a href="{% url 'html:pagePUT' %}">
                                <img className="nav-logo" src="./src/Assets/refresh.png" alt="Button Update" />
                            </a>
                        </div>
                    </nav>
                </div>
            </div>
            <div className="container-wrapper">
                <div className="category-container">
                    <div className="heading-page">
                        <a className="heading-page-text">Input Produk Baru</a>
                    </div>
                </div>
            </div>
            <div className="container-wrapper">
                <div className="input-container">
                    <form id="product-form" onSubmit={handleSubmit}>
                        <input className="name-input" id="productName" type="text" placeholder="Masukan nama produk" required />
                        <div className="container-input">
                            <input className="price-input" id="productPrice" type="number" placeholder="Masukan harga produk" required />
                            <input className="stock-input" id="productStock" type="number" placeholder="Masukan stok produk" required />
                        </div>
                        <div className="container-input">
                            <textarea className="description-input" id="productDescription" placeholder="Masukan deskripsi produk" required />
                            <label htmlFor="image-input" id="drop-area">
                                <input className="image-input" type="file" id="image-input" accept="image/*" onChange={handleImageChange} required hidden/>
                                <div id="img-view">
                                    {imagePreview ? (
                                        <img className="logo-upload" src={imagePreview} alt="Preview" />
                                    ) : (
                                        <div>
                                            <img className="logo-upload" src="./src/Assets/Upload.png" alt="Logo upload" />
                                            <div>
                                                <a className="logo-upload-text">Seret dan lepaskan gambar di sini</a>
                                                <br />
                                                <a className="logo-upload-text">untuk unggah gambar dari desktop!</a>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </label>
                        </div>
                        <div className="container-btn">
                            <button type="reset" className="cancel-btn">
                                CANCEL
                            </button>
                            <button type="submit" className="insert-btn" id="submit-btn">
                                INSERT
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default PagePOST;
