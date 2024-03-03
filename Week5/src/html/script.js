document.addEventListener("DOMContentLoaded",function(){
    document.querySelector("form").onsubmit = function(){
        let coursID = document.querySelector("#input_courseID").value;
        let id = parseInt(coursID)
        // let hargaCourse = document.querySelector("#input_harga").value;
        let namaCustomer = document.querySelector("#input_pelanggan").value;
        let namaPelanggan = namaCustomer;

        console.log(id)
        // console.log(hargaCourse)
        console.log(namaPelanggan)

        document.querySelector("#course_ID").innerHTML += ` : ${id}`;
        // document.querySelector("#harga_course").innerHTML += ` : Rp. ${hargaCourse}`;
        document.querySelector("#nama_cust").innerHTML += ` : ${namaPelanggan}`;

        document.querySelector("#input_courseID").value = "";
        // document.querySelector("#input_harga").value = "";
        document.querySelector("#input_pelanggan").value = "";

        // alert(`Successfully add ${id} course!`)

        // Hindari pengiriman formulir (halaman tidak akan direfresh)
        event.preventDefault('disabled');

        // Masukkan data ke API
        const endpoint = "https://a6d0-2404-8000-1027-16c1-bd80-580b-7f69-b202.ngrok-free.app/Langganan"

        const addData = {
            id : id,
            namaPelanggan : namaPelanggan,
        };

        fetch(endpoint,{
            method : "POST",
            headers : {
                "Content-Type" : "application/json",
            },
            body : JSON.stringify(addData),
        })
            .then((res => res.json()))
            .then((data) => {
                console.log(data)
                alert('Berhasil Menambah Data!')
            })
        

    }
})