import React from 'react';

function EditInformation() {
    const handleFormSubmit = (event) => {
        event.preventDefault();

        const userId = document.getElementById('userId').value;
        const url = `https://42e0-111-94-134-70.ngrok-free.app/user/${userId}`;

        const username = document.getElementById('username').value;
        const fotoProfil = document.getElementById('foto_profil').files[0];
        const namaLengkap = document.getElementById('nama_lengkap').value;
        const password = document.getElementById('password').value;
        const email = document.getElementById('email').value;
        const role = document.getElementById('role').value;

        const formData = new FormData();
        formData.append('username', username);
        formData.append('foto_profil', fotoProfil);
        formData.append('nama_lengkap', namaLengkap);
        formData.append('password', password);
        formData.append('email', email);
        formData.append('role', role);

        fetch(url, {
            method: 'PUT',
            body: formData
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Terjadi kesalahan saat melakukan PUT request.');
            }
            return response.json();
        })
        .then(data => {
            console.log('Data telah diperbarui:', data);
            const userList = document.getElementById('user-list');
            userList.innerHTML = '';
            const listItem = document.createElement('li');
            listItem.textContent = `ID: ${data.userId}, Username: ${data.username}, Foto Profil: ${data.fotoProfil},Nama Lengkap: ${data.nama_lengkap}, Email: ${data.email}, Role: ${data.role}`;
            userList.appendChild(listItem);
        })
        .catch(error => {
            console.error('Terjadi kesalahan:', error);
        });
    };

    return (
        <>

            <section className="registration-section">
                <h2>Edit Informasi</h2>
                <form id="edit-form" onSubmit={handleFormSubmit}>
                    <label htmlFor="userId">Input ID yang ingin diubah DATA:</label>
                    <input type="text" id="userId" name="userId" />
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" name="username" /> 
                    <label htmlFor="foto_profil">Foto Profil:</label>
                    <input type="file" id="foto_profil" name="foto_profil" required />
                    <label htmlFor="nama_lengkap">Nama Lengkap:</label>
                    <input type="text" id="nama_lengkap" name="nama_lengkap" required />
                    <label htmlFor="password">Password:</label>
                    <input type="text" id="password" name="password" required />
                    <label htmlFor="email">Email:</label>
                    <input type="text" id="email" name="email" required />
                    <label htmlFor="role">Role:</label>
                    <select id="role" name="role">
                        <option value="admin">Admin</option>
                        <option value="user">Customer</option>
                    </select>
                    <button style={{ marginTop: '20px' }} type="submit">Ubah</button>
                </form>
                <a href="posting.html" style={{ textDecoration: 'underline' }}>Halaman Show POST</a>
                <a href="getAndHapus.html" style={{ textDecoration: 'underline' }}>Halaman Show Get And Hapus</a>
            </section>
            <section className="show-user">
                <h2>User yang Telah Diperbarui</h2>
                <ul id="user-list"></ul>
            </section>
        </>
    );
}

export default EditInformation;
