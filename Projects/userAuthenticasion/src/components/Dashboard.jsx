// src/components/Dashboard.jsx
import React from 'react';
import { useAuth } from '../contexts/AuthContext';

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Welcome, {user.username}!</p>
    </div>
  );
};

export default Dashboard;
