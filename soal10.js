function hitungKembalian(totalPembayaran, totalBelanja) {
    const uang = [100000, 50000, 20000, 10000, 5000, 2000, 1000, 500, 200, 100];
    let kembalian = totalPembayaran - totalBelanja;
    let hasil = {};
  
    for (let i = 0; i < uang.length; i++) {
      const nilaiUang = uang[i];
  
      if (kembalian >= nilaiUang) {
        const jumlah = Math.floor(kembalian / nilaiUang);
        hasil[nilaiUang] = jumlah;
        kembalian %= nilaiUang;
      }
    }
  
    return hasil;
  }
  
  console.log(hitungKembalian(10000, 7500));
  console.log(hitungKembalian(5000, 1100));
  console.log(hitungKembalian(178000, 90500));
  