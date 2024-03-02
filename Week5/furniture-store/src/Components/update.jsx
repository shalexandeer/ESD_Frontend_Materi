function Update() {
    return (
        <>
            <div className="Updateproduk">
                <h2> Perbarui Produk</h2>
                <form className="update_form">
                    <label for="id" >ID Produk</label><br />
                    <input type="number" /><br />
                    <label  for="name" >Nama Produk</label><br />
                    <input type="text" /><br />
                    <label for="price" >Harga</label><br />
                    <input type="text" /><br />
                    <button className="submit" >Perbarui</button>
                </form>
            </div>
        </>
    )
}

export default Update