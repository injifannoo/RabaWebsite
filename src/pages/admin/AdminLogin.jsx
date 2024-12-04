// src/pages/admin/AdminLogin.jsx
import React, { useState } from 'react';
import axios from 'axios';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/admin/login', { email, password });
      localStorage.setItem('adminToken', response.data.token); // Store the token
      window.location.href = '/admin/dashboard'; // Redirect to Admin Dashboard
    } catch (err) {
      setError('Invalid credentials. Please try again.');
    }
  };

  return (
    <div className="login-container">
      <h2>Admin Login</h2>
      <div className="flex justify-center items-center h-screen bg-gray-100">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 shadow-md rounded w-96"
      >
        <h2 className="text-2xl font-bold mb-6">Admin Login</h2>
        <div className="mb-4">
          <label className="block mb-2">email</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block mb-2">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        {error && <p className="error">{error}</p>}
        <button type="submit">Login</button>
      </form>
    </div>
    </div>
  );
};

export default AdminLogin;
