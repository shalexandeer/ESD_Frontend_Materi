function hitungKombinasi(namaLengkap, panjangMaks) {
    const namaTanpaSpasi = namaLengkap.replace(/\s/g, '').toLowerCase();
    const panjangNama = namaTanpaSpasi.length;
    let jumlahKombinasi = 0;
  
    for (let panjangUsername = 1; panjangUsername <= panjangMaks; panjangUsername++) {
      jumlahKombinasi += panjangNama - panjangUsername + 1;
    }
  
    return jumlahKombinasi;
  }
  
  const namaLengkap = "Naip Lovyu";
  const maksUsername = 6;
  
  const jumlahKombinasi = hitungKombinasi(namaLengkap, maksUsername);
  console.log(`Jumlah kombinasi username yang mungkin: ${jumlahKombinasi}`);
  