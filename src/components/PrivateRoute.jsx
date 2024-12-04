import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const PrivateRoute = ({ children }) => {
  const { user } = useAuth();

  // If no user is logged in, redirect to the login page
  return user ? children : <Navigate to="/admin" />;
};

export default PrivateRoute;