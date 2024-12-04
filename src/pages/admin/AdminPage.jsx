// src/pages/admin/AdminPage.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminLogin from "./AdminLogin";
import AdminDashboard from "./AdminDashboard";

const AdminPage = () => {
  return (
    <div className="admin-page">
      <Routes>
        {/* Admin Login */}
        <Route path="/" element={<AdminLogin />} />
        {/* Admin Dashboard */}
        <Route path="/dashboard" element={<AdminDashboard />} />
      </Routes>
    </div>
  );
};

export default AdminPage;
