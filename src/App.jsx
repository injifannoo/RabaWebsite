// import React from "react";
// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import Home from "./pages/HomePage.jsx";
// import AboutUs from "./pages/AboutUs";
// import Services from "./pages/Services";
// import OurProject from "./pages/OurProject";
// import ContactForm from "./pages/ContactForm";

// const App = () => {
//   return (
//     <Router>
//       {/* Main container with flex and min-h-screen */}
//       <div className="flex flex-col min-h-screen">
//         <div className="flex-grow">
//         <nav className="bg-gray-800 text-white p-4">
//           <ul className="flex space-x-4 justify-center">
//           <li>
//               <a href="/home" className="hover:text-blue-300">Home</a>
//             </li>
//             <li>
//               <a href="/about-us" className="hover:text-blue-300">About Us</a>
//             </li>
//             <li>
//               <a href="/services" className="hover:text-blue-300">Services</a>
//             </li>
//             <li>
//               <a href="/our-project" className="hover:text-blue-300">Our Project</a>
//             </li>
//             <li>
//               <a href="/contact" className="hover:text-blue-300">Contact</a>
//             </li>
//           </ul>
//         </nav>

//         {/* Define routes */}
//         <Routes>
//           <Route path="/" element={<Navigate to="/Home" />} /> {/* Default route */}
//           <Route path="/home" element={<Home />} />
//           <Route path="/about-us" element={<AboutUs />} />
//           <Route path="/services" element={<Services />} />
//           <Route path="/our-project" element={<OurProject />} />
//           <Route path="/contact" element={<ContactForm />} />
//         </Routes>

//           </div>
//         {/* Footer Area */}
//         <footer className="bg-gray-800 text-white text-center p-4">
//           &copy; {new Date().getFullYear()} Raba Technologies. All rights reserved.
//         </footer>
//       </div>
//     </Router>
//   );
// };

// export default App;

import React from "react";
import Home from "./pages/HomePage.jsx";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import OurProject from "./pages/OurProject";
import ContactForm from "./pages/ContactForm";
import './styles/responsive.scss';
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen  bg-white ">
      {/* Navigation */}
      <Navbar/>
      {/* <nav className="bg-neutral-600 text-white p-4 fixed top-0 left-0 right-0 z-50">
        <ul className="flex space-x-4 justify-center">
          <li>
            <a href="#home" className="hover:text-blue-300">Home</a>
          </li>
          <li>
            <a href="#about-us" className="hover:text-blue-300">About Us</a>
          </li>
          <li>
            <a href="#services" className="hover:text-blue-300">Services</a>
          </li>
          <li>
            <a href="#our-project" className="hover:text-blue-300">Our Project</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-300">Contact</a>
          </li>
        </ul>
      </nav> */}

      {/* Sections */}
      <div className=" bg-white flex-grow ">
        <section id="home" className="h-screen bg-cover bg-center" style={{ backgroundImage: `url('/assets/images/homebg.png')` }}>
          <Home/>
        </section>

        <section id="about-us" className="flex justify-center items-center p-8">
          <AboutUs />
        </section>

        <section id="services" className=" flex justify-center items-center p-8">
          <Services />
        </section>

        <section id="our-project" className="min-h-screen flex justify-center items-center p-8 ">
          <OurProject />
        </section>

        <section id="contact" className="flex justify-center items-center p-8 mt-auto mb-16">
          <ContactForm />
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center p-4 mt-auto -mb-10">
        &copy; {new Date().getFullYear()} Raba Technologies. All rights reserved.
      </footer>
    </div>
  );
};

export default App;
