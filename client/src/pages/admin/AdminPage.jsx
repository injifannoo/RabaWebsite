// src/pages/admin/AdminPage.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminLogin from "./AdminLogin";
import AdminDashboard from "./AdminDashboard";
import CreateBlog from "../../components/Blog/createBlog";

const AdminPage = () => {
  return (
    <div className="admin-page">
      <Routes>
        {/* Admin Login */}
        <Route path="/" element={<AdminLogin />} />
        {/* Admin Dashboard */}
        <Route path="/create" element={<CreateBlog />} />
      </Routes>
    </div>
  );
};

export default AdminPage;
