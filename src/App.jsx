// import React from "react";
// import Home from "./pages/HomePage.jsx";
// import AboutUs from "./pages/AboutUs";
// import Services from "./pages/Services";
// import OurProject from "./pages/OurProject";
// import ContactForm from "./pages/ContactForm";
// import './styles/responsive.scss';
// import Navbar from "./components/Navbar";
// import Blogs from "./pages/BlogPage.jsx";  // Import the LatestBlogs component

// const App = () => {
//   return (
//     <div className="flex flex-col min-h-screen  bg-white ">
//       {/* Navigation */}
//       <Navbar/>
//       {/* Sections */}
//       <div className=" bg-white flex-grow ">
//         <section id="home" className="h-screen bg-cover bg-center" style={{ backgroundImage: `url('/assets/images/homebg.png')` }}>
//           <Home/>
//         </section>

//         <section id="about-us" className="flex justify-center items-center p-8">
//           <AboutUs />
//         </section>

//         <section id="services" className=" flex justify-center items-center p-8">
//           <Services />
//         </section>

//         <section id="our-project" className="min-h-screen flex justify-center items-center p-8 ">
//           <OurProject />
//         </section>
//          {/* Latest Blogs Section */}
//          <section id="blogs" className="py-16 bg-gray-100">
//           <Blogs />
//         </section>

//         <section id="contact" className="flex justify-center items-center p-8 mt-auto mb-16">
//           <ContactForm />
//         </section>
//       </div>

//       {/* Footer */}
//       <footer className="bg-gray-800 text-white text-center p-4 mt-auto -mb-10">
//         &copy; {new Date().getFullYear()} Raba Technologies. All rights reserved.
//       </footer>
//     </div>
//   );
// };

// export default App;

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
