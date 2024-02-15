function post(){
    addEventListener("submit", event => {
        event.preventDefault();
    
        let nama = document.getElementById("nama").value;
        let notelp = parseInt(document.getElementById("notelp").value);
        let pesanan = document.getElementById("pesanan").value;
        let total = parseInt(document.getElementById("total").value);
        fetch("https://aa2c-120-188-87-141.ngrok-free.app/pembeli",{
            mode: "cors",
            method: "POST",
            headers: {
                "ngrok-skip-browser-warning": "true",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                nama: nama,
                noTelp: notelp,
                pesananMakanan: pesanan,
                totalPembelian: total,
            }),
        })  
            .then((res) => res.json())
            .then((data) => console.log(data));
    });
}


document.addEventListener("DOMContentLoaded", function(){
    const customerCard = document.getElementById("card");

    fetch("https://aa2c-120-188-87-141.ngrok-free.app/pembeli",{
        mode: "cors",
        headers: {
            "ngrok-skip-browser-warning": "true",
            "Content-Type": "application/json",
        },
    })
        .then((res) => res.json())
        .then((data) => {
            data.forEach(product => {
                const dalem = document.createElement("div");
                dalem.classList.add("dalem")

                const info = document.createElement("div");
                info.classList.add("info")

                let namaKastemer = document.createElement("h4");
                namaKastemer.classList.add("namaKastemer");
                namaKastemer.textContent = product.nama;

                let noTelpKastemer = document.createElement("h6");
                noTelpKastemer.classList.add("noTelpKastemer");
                noTelpKastemer.textContent = product.noTelp;

                let pesananKastemer = document.createElement("h6");
                pesananKastemer.classList.add("pesananKastemer");
                pesananKastemer.textContent = product.pesananMakanan;

                let totalKastemer = document.createElement("h5");
                totalKastemer.classList.add("totalKastemer");
                totalKastemer.textContent = "Rp."+product.totalPembelian;

                let id = document.createElement("h5")
                id.classList.add("idKastemer");
                id.textContent ="#" + product.id;
                
                info.appendChild(totalKastemer);
                info.appendChild(id);

                dalem.appendChild(namaKastemer);
                dalem.appendChild(noTelpKastemer);
                dalem.appendChild(pesananKastemer);
                dalem.appendChild(info);

                customerCard.appendChild(dalem);
            });
        });
});

function deletes(){
    addEventListener("click", function () {
        let id = document.getElementById("deleting").value;
        
        fetch(`https://aa2c-120-188-87-141.ngrok-free.app/pembeli/${id}`, {
            mode: "cors",
            method: "DELETE",
            headers: {
                "ngrok-skip-browser-warning": "true",
            },
        })
            .then((res) => res.json())
            .then((data) => console.log(data));
    });
}




