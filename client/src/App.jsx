import React from "react";
import { useLocation } from "react-router-dom";
import AppRoutes from "./routes.jsx";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer.jsx"

const App = () => {
  const location = useLocation();

  // Define paths where the Navbar should not be displayed
  const hideNavbarRoutes = ["/admin", "/dashboard", "/login"];

  // Check if the current path matches any of the routes to hide the Navbar
  const shouldHideNavbar = hideNavbarRoutes.includes(location.pathname);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Conditionally render Navbar */}
      {!shouldHideNavbar && <Navbar />}

      {/* App Routes */}
      <AppRoutes />
      {/* Footer */}
      <Footer/>
      {/* <footer className="bg-gray-800 text-white text-center p-4 mt-auto -mb-10">
        &copy; {new Date().getFullYear()} Raba Technologies. All rights reserved.
      </footer> */}
    </div>
  );
};

export default App;
