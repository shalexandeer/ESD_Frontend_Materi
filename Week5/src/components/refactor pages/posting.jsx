import React, { useState, useEffect } from 'react';

function AddUser() {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({
    username: '',
    foto_profil: null,
    nama_lengkap: '',
    password: '',
    email: '',
    role: 'admin'
  });

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    fetch('https://42e0-111-94-134-70.ngrok-free.app/user', {
      mode: "cors",
      method: "GET",
      headers: {
        "ngrok-skip-browser-warning": "true",
      },
    })
      .then(res => res.json())
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => console.error('Error fetching users:', error));
  };

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleFileChange = (event) => {
    setFormData({
      ...formData,
      foto_profil: event.target.files[0]
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formDataToSend = new FormData();
    for (const key in formData) {
      formDataToSend.append(key, formData[key]);
    }

    fetch('https://6d78-103-139-10-152.ngrok-free.app/user', {
      mode: "cors",
      method: 'POST',
      body: formDataToSend
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setUsers([...users, data]);
        setFormData({
          username: '',
          foto_profil: null,
          nama_lengkap: '',
          password: '',
          email: '',
          role: 'admin'
        });
      })
      .catch(error => console.error('Error:', error));
  };

  return (
    <>

      <h1>Add User</h1>
      <form id="user-form" onSubmit={handleSubmit}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label htmlFor="username">Username</label>
          <input
            autoFocus
            id="username"
            placeholder="Username"
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
          />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label htmlFor="foto_profil">Foto Profil</label>
          <input
            autoFocus
            id="foto_profil"
            type="file"
            accept="image/*"
            name="foto_profil"
            onChange={handleFileChange}
          />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label htmlFor="nama_lengkap">Nama Lengkap</label>
          <input
            autoFocus
            id="nama_lengkap"
            placeholder="Nama Lengkap"
            type="text"
            name="nama_lengkap"
            value={formData.nama_lengkap}
            onChange={handleInputChange}
          />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label htmlFor="password">Password</label>
          <input
            autoFocus
            id="password"
            placeholder="Password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label htmlFor="email">Email</label>
          <input
            autoFocus
            id="email"
            placeholder="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label htmlFor="role">Role</label>
          <select
            id="role"
            name="role"
            value={formData.role}
            onChange={handleInputChange}
          >
            <option value="admin">Admin</option>
            <option value="user">Customer</option>
          </select>
        </div>
        <input type="submit" />
      </form>
      <section id="user-Table">
        <h2>User Baru</h2>
        <ul>
          {users.map(user => (
            <li key={user.id}>
              <p>{user.id}</p>
              <p>{user.username}</p>
              <p><img src={`https://6d78-103-139-10-152.ngrok-free.app/${user.fotoProfil}`} alt="" /></p>
              <p>{user.namaLengkap}</p>
              <p>{user.password}</p>
              <p>{user.email}</p>
              <p>{user.role}</p>
            </li>
          ))}
        </ul>
      </section>
      <a href="put.html" style={{ textDecoration: 'underline' }}>halaman show PUT</a>
      <a href="getAndHapus.html" style={{ textDecoration: 'underline' }}>halaman get and hapus</a>
    </>
  );
}

export default AddUser;
