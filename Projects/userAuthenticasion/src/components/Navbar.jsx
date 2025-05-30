// src/components/Navbar.jsx
import React from 'react';
import { useAuth } from '../contexts/AuthContext';

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav>
      <h1>My App</h1>
      {user ? (
        <div>
          <span>Hello, {user.username}</span>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <span>Please log in</span>
      )}
    </nav>
  );
};

export default Navbar;
