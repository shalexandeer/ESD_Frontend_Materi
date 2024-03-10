import React from 'react';
import { Link } from 'react-router-dom';


function Header() {
  return (
    <header>
      <h1>BajuBuddies</h1>
      <ul>
        <li><Link to="/">Delete user</Link></li>
        <li><Link to="/posting">Add user</Link></li>
        <li><Link to="/put">Edit user information</Link></li>
      </ul>
    </header>
  );
}

export default Header;
