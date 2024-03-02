function Delete() {
    return (
        <>
            <div>
                <h2>Hapus Produk</h2>
                <form class="delete-product-form">
                <label for="id">ID Produk:</label><br />
                <input type="number" /><br />
                <button className="hapus" type="hapus">Hapus</button>
            </form>
            </div>
        </>
    )
}

export default Delete