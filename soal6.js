const menu = [
    { nama: "Ayam Goreng Krispi", tipe: "Makanan", harga: 15000 },
    { nama: "Ayam Puk Puk", tipe: "Makanan", harga: 13000 },
    { nama: "Ayam Bakar", tipe: "Makanan", harga: 20000 },
    { nama: "Es Teh", tipe: "Minuman", harga: 5000 },
    { nama: "Es Jeruk", tipe: "Minuman", harga: 7000 },  
];
function hitungHarga(pesanan) {
    let totalHarga = 0;
    for (const pesananitem of pesanan) {
        const menutype = menu.find((item) => item.nama === pesananitem.nama);
        let potongPajak;
        if (menutype.tipe === "Makanan") {
            potongPajak = menutype.harga * 1.05; 
        } else {
            potongPajak = menutype.harga * 1.03; 
        }
        totalHarga += potongPajak * pesananitem.jumlah;
        }
        totalHarga *= 1.15;
        return Math.round(totalHarga);
}
const listRehan = [
    { nama: "Ayam Bakar", jumlah: 2 },
    { nama: "Es Teh", jumlah: 1 },
];
const listAmba = [
    { nama: "Ayam Puk Puk", jumlah: 1 },
    { nama: "Es Teh", jumlah: 3 },
];
const listFaiz = [
    { nama: "Ayam Goreng Krispi", jumlah: 1 },
    { nama: "Ayam Puk Puk", jumlah: 1 },
    { nama: "Ayam Bakar", jumlah: 1 },
    { nama: "Es Teh", jumlah: 1 },
    { nama: "Es Jeruk", jumlah: 1 },
];

const hargaRehan = hitungHarga(listRehan);
const hargaAmba = hitungHarga(listAmba);
const hargaFaiz = hitungHarga(listFaiz);
console.log("Total Harga Rehan Whangsap: Rp." + hargaRehan);
console.log("Total Harga Amba Roni: Rp." + hargaAmba);
console.log("Total Harga Faiz Ngawi: Rp." + hargaFaiz);