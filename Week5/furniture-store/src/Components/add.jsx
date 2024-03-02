function tambahproduk() {
    return (
        <>
        <div className="form-input">
            <h2 className="judul">Tambah Produk Baru</h2>
            <form className="add-product-form">
                    <label for="id" >Stok</label><br />
                    <input type="number" /><br />
                    <label  for="name" >Nama Produk</label><br />
                    <input type="text" /><br />
                    <label for="price" >Harga</label><br />
                    <input type="text" /><br />
                    <label for="category" >Kategori</label><br />
                    <input type="text" /><br />
                    <label  for="deskripsi" >Deskripsi</label><br />
                    <input type="text" /><br />
                    <label  for="foto" >Foto Produk</label><br />
                    <input type="file" /><br />
                    <button className="submit" >Tambah</button>
            </form>
        </div>
    </>
    )
}

export default tambahproduk