const Header = () =>{
    return(
        <div className="navbar">
        <div className="tokotuku">
          <p style={{fontSize: '24px',fontWeight: '600',color: 'var(--primary-color)'}}>
            Ngobat</p>
        </div>
        <div className="navbutton">
          <p >Halaman Utama</p>
          <p >Produk</p>
          <p >Hubungi Kami</p>
        </div>
        <div className="keranjang">
          <p style={{margin: 0}}>Keranjang</p>
          <img src="Images/Vector.png" alt="keranjang" width="24px" height="24px"/>
        </div>
      </div>
    )
}

export default Header