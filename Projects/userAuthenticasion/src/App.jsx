// src/App.jsx
import React from 'react';
import './App.css';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

const AppContent = () => {
  const { user } = useAuth();

  return (
    <div>
      <Navbar />
      {user ? <Dashboard /> : <Login />}
    </div>
  );
};

const App = () => (
  <AuthProvider>
    <AppContent />
  </AuthProvider>
);

export default App;
