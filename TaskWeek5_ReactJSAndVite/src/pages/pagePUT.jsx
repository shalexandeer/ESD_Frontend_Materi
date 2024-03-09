import React, { useState } from 'react';
import '../pages/css/style3.css';

function UpdateProduct() {
    const [productName, setProductName] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [productStock, setProductStock] = useState('');
    const [productImage, setProductImage] = useState(null);

    const handleImageUpload = (event) => {
        const imageFile = event.target.files[0];
        setProductImage(imageFile);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append('nama', productName);
        formData.append('deskripsi', productDescription);
        formData.append('harga', productPrice);
        formData.append('stok', productStock);
        formData.append('image', productImage);

        fetch("https://9833-36-65-255-46.ngrok-free.app/produk/1", {
            mode: "cors",
            method: "PUT",
            headers: {
                "ngrok-skip-browser-warning": "true",
            },
            body: formData,
        })
        .then(response => response.json())
        .then(data => {
            console.log("Product updated successfully:", data);
        })
        .catch(error => {
            console.error("Error updating product:", error);
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
                        <a className="heading-page-text">Update Produk</a>
                    </div>
                </div>
            </div>
            <div className="container-wrapper">
                <div className="input-container">
                    <form onSubmit={handleSubmit}>
                        <input className="name-input" type="text" placeholder="Masukan nama produk" value={productName} onChange={(e) => setProductName(e.target.value)} />
                        <div className="container-input">
                            <input className="price-input" type="number" placeholder="Masukan harga produk" value={productPrice} onChange={(e) => setProductPrice(e.target.value)} />
                            <input className="stock-input" type="number" placeholder="Masukan stok produk" value={productStock} onChange={(e) => setProductStock(e.target.value)} />
                        </div>
                        <div className="container-input">
                            <textarea className="description-input" placeholder="Masukan deskripsi produk" value={productDescription} onChange={(e) => setProductDescription(e.target.value)}></textarea>
                            <label htmlFor="image-input" id="drop-area">
                                <input className="image-input" type="file" id="image-input" accept="image/*" hidden onChange={handleImageUpload} />
                                <div id="img-view">
                                    <img className="logo-upload" src="./Assets\Upload.png" alt="Logo upload" />
                                    <div>
                                        <a className="logo-upload-text">Seret dan lepaskan gambar di sini</a><br />
                                        <a className="logo-upload-text"> untuk unggah gambar dari desktop!</a>
                                    </div>
                                </div>
                            </label>
                        </div>
                        <div className="container-btn">
                            <button className="cancel-btn" type="reset">CANCEL</button>
                            <button type="submit" className="insert-btn" id="submit-btn">UPDATE</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default UpdateProduct;
