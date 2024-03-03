const Content = () =>{
    return(
        <div className="content">
        <p style={{fontWeight: '800', fontSize: 'larger'}}>
          Keranjang</p>
        <div className="content-content">
            <div id="cartItems">
            </div>
            <div className="addtocart">
              <p style={{fontWeight: '700'}}>Rekomendasi alat untukmu</p>
              <div className="additem">
                <p style={{fontSize: '16px', fontWeight: '500'}}>Obeng2ml</p>
                <p>Rp. 8000,00</p>
                <button style={{marginBottom: '20px', width:' 40%'}} id="obeng2ml">Masukkan Keranjang</button>
              </div>
              <div className="additem">
                <p style={{fontSize: '16px', fontWeight: '500'}} >Palu/p>
                <p>Rp. 10.000,00</p>
                <button style={{marginBottom: '20px', width: '40%'}} id="Palu">Tambahkan ke keranjang</button>
              </div>
            </div>
        </div>
      </div>
    );
}

export default Content