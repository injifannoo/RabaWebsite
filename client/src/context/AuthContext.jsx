// import React, { createContext, useContext, useState } from "react"; 
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null); // `null` means no user is logged in
//   const navigate = useNavigate();

//   // Login function with backend API call
//   const login = async (email, password) => {
//     try {
//       const response = await axios.post("http://localhost:3000/api/auth/admin/login", { email, password });
//      // Check if response contains token
//      if (response.data.token) {
//       console.log("Login successful. Token received:", response.data.token); // Debugging
//       localStorage.setItem("adminToken", response.data.token); // Store the token
//       setUser({ email }); // Set user after successful login
//       navigate("/dashboard"); // Redirect to Admin Dashboard after login
//     } else {
//       alert("Login failed: No token received");
//     }
//   } catch (err) {
//     console.error("Login failed:", err);
//     alert("Invalid credentials. Please try again.");
//   }
// };


//   // Logout function
//   const logout = () => {
//     setUser(null);
//     localStorage.removeItem("adminToken");
//     navigate("/"); // Redirect to home page after logout
//   };

//   return (
//     <AuthContext.Provider value={{ user, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// // Custom hook to access the AuthContext
// export const useAuth = () => useContext(AuthContext);

import React, { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // `null` means no user is logged in
  const navigate = useNavigate();

  // Check if a user is already logged in when the app loads
  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    if (token) {
      // Optionally, you can verify the token validity here with an API request
      setUser({ email: "user@example.com" }); // You can modify this based on your user info from token
    }
  }, []);

  // Login function with backend API call
  const login = async (email, password) => {
    try {
      const response = await axios.post("http://localhost:3000/api/auth/admin/login", { email, password });
      // Check if response contains token
      if (response.data.token) {
        console.log("Login successful. Token received:", response.data.token); // Debugging
        localStorage.setItem("adminToken", response.data.token); // Store the token
        setUser({ email }); // Set user after successful login
        navigate("/dashboard"); // Redirect to Admin Dashboard after login
      } else {
        alert("Login failed: No token received");
      }
    } catch (err) {
      console.error("Login failed:", err);
      alert("Invalid credentials. Please try again.");
    }
  };

  // Logout function
  const logout = () => {
    setUser(null);
    localStorage.removeItem("adminToken");
    navigate("/"); // Redirect to home page after logout
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to access the AuthContext
export const useAuth = () => useContext(AuthContext);
