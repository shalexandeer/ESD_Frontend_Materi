
import React, { useState, useEffect } from 'react';


function FetchingUser() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    const url = 'https://6d78-103-139-10-152.ngrok-free.app/User';
    fetch(url, {
      mode: "cors",
      method: "GET",
      headers: {
        "ngrok-skip-browser-warning": "true",
      },
    })
    .then(res => res.json())
    .then(response => {
      console.log('Fetched users:', response); 
      if (Array.isArray(response)) { 
        setUsers(response);
      } 
    })
    .catch(error => console.error('Error fetching users:', error));
  };

  return (
    <>
      <header>
        <h1>BajuBuddies</h1>
      </header>
      <h2 style={{ display: 'flex', justifyContent: 'center' }}>List Users</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
}

function DeleteUser() {
  const [id, setId] = useState(0);

  const handleInputChange = (event) => {
    setId(event.target.value);
    console.log(id);
  };

  const handleDeleteUser = (event) => {
    event.preventDefault();
    fetch(`https://6d78-103-139-10-152.ngrok-free.app/user/${id}`, {
      method: "DELETE",
    })
    .then((res) => res.json())
    .then((json) => {
      console.log(json);

    })
    .catch(error => console.error('Error deleting user:', error));
  };

  return (
    <>

      <form id="form-list">
        <h2 style={{ display: 'flex', justifyContent: 'center' }}>List Users</h2>
      </form>
      <form id="form-Delete" onSubmit={handleDeleteUser}>
        <h2>Delete User</h2>
        <label htmlFor="userId">ID:</label>
        <input min="0" type="number" id="number" name="userId" required onChange={handleInputChange} />
        <input id="submit" type="submit" value="Delete" />
      </form>
      
    </>
  );
}

export default DeleteUser ;

