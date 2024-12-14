// // src/pages/admin/AdminLogin.jsx
// import React, { useState } from 'react';
// import axios from 'axios';


// const AdminLogin = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post('http://localhost:3000/api/auth/admin/login', { email, password });
//       localStorage.setItem('adminToken', response.data.token); // Store the token
//       window.location.href = '/dashboard'; // Redirect to Admin Dashboard
//     } catch (err) {

//       console.error('Login error: ', err.response ? err.response.data : err.message);
//       setError('Invalid credential. Please try again.');
//     }
//   };

//   return (
//     <div className="login-container">
//       <h2>Admin Login</h2>
//       <div className="flex justify-center items-center h-screen bg-gray-100">
//       <form
//         onSubmit={handleLogin}
//         className="bg-white p-8 shadow-md rounded w-96"
//       >
//         <h2 className="text-2xl font-bold mb-6">Admin Login</h2>
//         <div className="mb-4">
//           <label className="block mb-2">email</label>
//           <input
//             type="text"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="w-full p-2 border rounded"
//             required
//           />
//         </div>
//         <div className="mb-6">
//           <label className="block mb-2">Password</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="w-full p-2 border rounded"
//             required
//           />
//         </div>
//         {error && <p className="error">{error}</p>}
//         <button type="submit">Login</button>
//       </form>
//     </div>
//     </div>
//   );
// };

// export default AdminLogin;
import React, { useState } from "react";
import axios from "axios";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading state
    setError(""); // Reset error state

    try {
      const response = await axios.post("http://localhost:3000/api/auth/admin/login", {
        email,
        password,
      });

      localStorage.setItem("adminToken", response.data.token); // Store the token
      window.location.href = "/create"; // Redirect to Admin Dashboard
    } catch (err) {
      console.error("Login error:", err.response ? err.response.data : err.message);

      // Handle specific error messages
      if (err.response && err.response.status === 401) {
        setError("Invalid credentials. Please check your email and password.");
      } else {
        setError("Something went wrong. Please try again later.");
      }
    } finally {
      setLoading(false); // End loading state
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 shadow-md rounded w-96"
      >
        <h2 className="text-2xl font-bold mb-6">Admin Login</h2>
        <div className="mb-4">
          <label className="block mb-2">Email</label>
          <input
            type="email"
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
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 disabled:bg-gray-300"
          disabled={loading} // Disable button while loading
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;