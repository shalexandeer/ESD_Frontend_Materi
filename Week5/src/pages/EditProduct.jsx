import React from 'react';
import '../css/style-editproduct.css';

function EditProduct() {
    return (
        <div className="form-container">
            <h2 className="greetings1">Edit Produk</h2>
            <form id="editProductForm">
                <div className="form-group">
                    <label htmlFor="productId">ID Produk</label>
                    <input type="text" id="productId" name="productId" required />
                </div>
                <div className="form-group">
                    <label htmlFor="productName">Nama Produk</label>
                    <input type="text" id="productName" name="productName" required />
                </div>
                <div className="form-group">
                    <label htmlFor="productPrice">Harga</label>
                    <input type="number" id="productPrice" name="productPrice" required />
                </div>
                <div className="form-group">
                    <label htmlFor="productQuantity">Jumlah</label>
                    <input type="number" id="productQuantity" name="productQuantity" required />
                </div>
                <div className="form-group">
                    <label htmlFor="productDescription">Deskripsi</label>
                    <textarea id="productDescription" name="productDescription" rows="5" required></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="productImage">Gambar Produk</label>
                    <input type="file" id="productImage" name="productImage" accept="image/*" required />
                </div>
                <div className="form-group">
                    <button type="submit">Simpan</button>
                </div>
            </form>
        </div>
    );
}

export default EditProduct;
