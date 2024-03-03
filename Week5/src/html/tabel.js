document.addEventListener("DOMContentLoaded", function() {
    const endpoint = 'https://a6d0-2404-8000-1027-16c1-bd80-580b-7f69-b202.ngrok-free.app/Langganan';

    function fetchAPI(){
        fetch(endpoint,{
            mode: "cors",
            method: 'GET',
            headers: {
                "ngrok-skip-browser-warning": "true",
            }
        })
        .then(res => res.json())
        .then(object => {
            let rowNumber = 1; // Inisialisasi nomor urut
            object.data.forEach(Langganan => {
                // Menambahkan baris baru ke dalam tabel
                Langganan.namaPelanggan.forEach(nama => {
                    addRow(rowNumber++, Langganan.id, Langganan.name, nama);
                });
            });
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
    }

    fetchAPI();

    // Fungsi menambah baris tabel
    function addRow(rowNumber, id, name, namaPelanggan){
        // Target elemen tbody
        var tbody = document.querySelector('tbody');

        // Buat elemen baris baru
        var newRow = document.createElement('tr');

        // Isi elemen baris baru dengan sel-sel data
        newRow.innerHTML = `
            <td>${rowNumber}</td>
            <td>${id}</td>
            <td>${name}</td>
            <td>${namaPelanggan}</td>
            <td>
                <button class="delete-button"><i class="fa-solid fa-trash"></i></button>
            </td>
        `;

        // Tambahkan event listener ke tombol delete
        newRow.querySelector('.delete-button').addEventListener('click', function() {
            deleteRow(id, namaPelanggan);
            // Hapus baris dari tabel setelah penghapusan berhasil
            tbody.removeChild(newRow);
        });

        // Tambahkan baris baru ke dalam elemen tbody
        tbody.appendChild(newRow);
    }

    function deleteRow(id, namaPelanggan) {
        // Kirim permintaan DELETE ke API
        fetch(`${endpoint}/${id}`, {
            mode: "cors",
            method: 'DELETE',
            headers: {
                "ngrok-skip-browser-warning": "true",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ namaPelanggan: namaPelanggan })
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            console.log(`Row with course ID ${id} and customer ${namaPelanggan} deleted successfully`);
            alert('Berhasil Menghapus Data!')
        })
        .catch(error => {
            console.error('Error deleting row:', error);
        });
    }
});
