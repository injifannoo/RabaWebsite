// import * as jwtDecode from 'jwt-decode';
import { jwtDecode } from 'jwt-decode';

export const isAdmin = () => {
  const token = localStorage.getItem('adminToken');
  if (!token) {
    console.log("No token found");
    return false;
  }

  try {
    const decoded = jwtDecode(token);
    console.log("Decoded JWT:", decoded); // Check the decoded token structure
    return decoded.role === 'admin';
  } catch (error) {
    console.log("Error decoding token:", error);
    return false;
  }
};
export const isAdminAuthenticated = () => {
  const token = localStorage.getItem('adminToken');  // Use the same key
  console.log("Admin Token:", token);  // Debugging log
  if (!token) {
    console.log("No token found");
    return false;
  }

  try {
    const decoded = jwtDecode(token);
    if (decoded.exp * 1000 < Date.now()) {
      localStorage.removeItem('adminToken');  // Remove expired token
      return false;
    }
    return decoded.role === 'admin';  // Check if the role is admin
  } catch (error) {
    return false;
  }
};
