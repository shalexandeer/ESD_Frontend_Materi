fetch("https://aa2c-120-188-87-141.ngrok-free.app/pembeli",{
  mode: "cors",
  headers: {
    "ngrok-skip-browser-warning": "true",
  },
})
.then((res) => res.json())
.then((data) => {
  data.forEach(product => {
    let nama = document.createElement("h2");
    nama.classList.add("namaProduct");
    nama.textContent = "Namanya adalah: " + product.nama;



    document.getElementById("cardProduct").appendChild(nama);

    

  });
});