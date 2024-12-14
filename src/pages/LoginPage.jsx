// import React, { useState } from "react";
// import { useAuth } from "../context/AuthContext";

// const LoginPage = () => {
//   const { login } = useAuth();
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     login(username, password); // Call the login function from AuthContext
//   };

//   return (
//     <div className="flex justify-center items-center h-screen bg-gray-100">
//       <form
//         onSubmit={handleSubmit}
//         className="bg-white p-8 shadow-md rounded w-96"
//       >
//         <h2 className="text-2xl font-bold mb-6">Admin Login</h2>
//         <div className="mb-4">
//           <label className="block mb-2">Username</label>
//           <input
//             type="text"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
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
//         <button
//           type="submit"
//           className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
//         >
//           Login
//         </button>
//       </form>
//     </div>
//   );
// };

// export default LoginPage;

import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";

const LoginPage = () => {
  const { login } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false); // Add loading state

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true when form is submitted
    await login(username, password);
    setLoading(false); // Set loading to false after login attempt
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 shadow-md rounded w-96"
      >
        <h2 className="text-2xl font-bold mb-6">Admin Login</h2>
        <div className="mb-4">
          <label className="block mb-2">Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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
        <button
          type="submit"
          className={`w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={loading} // Disable button when loading
        >
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
