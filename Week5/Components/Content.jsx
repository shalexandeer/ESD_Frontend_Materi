import CartItems from "./Cart";
const Content = () =>{
    return(
        <div className="content">
        <p style={{fontWeight: '800', fontSize: 'larger'}}>
          Keranjang</p>
        <div className="content-content">
            <div id="cartItems">
              <CartItems />
            </div>
            <div className="addtocart">
              <p style={{fontWeight: '700'}}>Rekomendasi obat untukmu</p>
              <div className="additem">
                <p style={{fontSize: '16px', fontWeight: '500'}}>Betadine</p>
                <p>Rp. 10000,00</p>
                <button style={{marginBottom: '20px', width:' 40%'}} id="betadine">Tambahkan ke keranjang</button>
              </div>
              <div className="additem">
                <p style={{fontSize: '16px', fontWeight: '500'}} >Bodrex</p>
                <p>Rp. 3000,00</p>
                <button style={{marginBottom: '20px', width: '40%'}} id="bodrex">Tambahkan ke keranjang</button>
              </div>
            </div>
        </div>
      </div>
    );
}

export default Content