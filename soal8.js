const produk = [
    { nama: "TV", kategori: "elektronik", harga: 1000 },
    { nama: "headphone", kategori: "elektronik", harga: 200 },
    { nama: "baju", kategori: "fashion", harga: 50 },
    { nama: "gitar", kategori: "musik", harga: 300 },
    { nama: "sepatu", kategori: "olahraga", harga: 80 },
    { nama: "kamera", kategori: "elektronik", harga: 600 }
  ];

  const pelanggan = [
    { nama: "Rina", minat: ["elektronik", "musik"], beli: ["TV", "headphone"] },
    { nama: "Budi", minat: ["fashion", "musik"], beli: ["baju", "gitar"] },
    { nama: "Hartono", minat: ["olahraga", "elektronik"], beli: ["sepatu", "kamera"] }
  ];
  
  function rekomendasiProduk(namaPelanggan) {
    const pelangganTerpilih = pelanggan.find(p => p.nama === namaPelanggan);
  
    if (!pelangganTerpilih) {
      return "Pelanggan tidak ditemukan.";
    }
  
    const produkRekomendasi = produk.filter(item => pelangganTerpilih.minat.includes(item.kategori));
    const namaProdukRekomendasi = produkRekomendasi.map(item => item.nama);
    return namaProdukRekomendasi;
  }
  
  const rekomendasiRina = rekomendasiProduk("Rina");
  console.log(rekomendasiRina);
  