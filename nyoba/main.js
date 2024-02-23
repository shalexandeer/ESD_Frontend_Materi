function post(){
    let jumlah = [];
    let nama = prompt("Masukkan Nama: ");
    let notelp = parseInt(prompt("Masukkan no telp: "));
    while(true){
        let pesanan = prompt("Masukkan pesanan: ");
        let lagi = prompt("Pesan lagi? (y/n): ")
        lagi = lagi.toUpperCase();

        if(lagi == "N"){
            jumlah.push(pesanan);
            break;
        }
        else{
            jumlah.push(pesanan);
        }

    };
    
    let total = parseInt(prompt("Masukkan total pembelian: "));
    fetch("https://640d-114-5-220-184.ngrok-free.app/pembeli",{
        mode: "cors",
        method: "POST",
        headers: {
            "ngrok-skip-browser-warning": "true",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            nama: nama,
            noTelp: notelp,
            pesananMakanan: jumlah,
            totalPembelian: total,
        }),
    })
        .then((res) => res.json())
        .then((data) => console.log(data));
}

function edit(){
    const id = prompt("Masukkan ID menu yang akan diedit:");
    let jumlah = [];
    const nama = prompt("Masukkan Nama: ");
    const notelp = parseInt(prompt("Masukkan no telp: "));
    // while(true){
    //     let pesanan = prompt("Masukkan pesanan: ");
    //     let lagi = prompt("Pesan lagi? (y/n): ")
    //     lagi = lagi.toUpperCase();

    //     if(lagi == "N"){
    //         jumlah.push(pesanan);
    //         break;
    //     }
    //     else{
    //         jumlah.push(pesanan);
    //     }

    // };
    const total = parseInt(prompt("Masukkan total pembelian: "));

    fetch(`https://2c60-120-188-72-183.ngrok-free.app/pembeli/${id}`, {
        method: "POST",
        headers: {
            "ngrok-skip-browser-warning": "true",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            nama: nama,
            noTelp: notelp,
            // pesananMakanan: jumlah,
            totalPembelian: total,
        }),
    })
    .then((response) => response.json())
    .then((data) => console.log("Menu updated:", data))
    .catch((error) => console.error("Error:", error));
}
function deleteni(){
    let id = parseInt(prompt("Masukkan id: "));
    fetch(`https://aa2c-120-188-87-141.ngrok-free.app/pembeli/${id}`, {
        method: "DELETE",
        headers: {
            "ngrok-skip-browser-warning": "true",
        },
    })
        .then((res) => res.json())
        .then((json) => console.log(json));
}
