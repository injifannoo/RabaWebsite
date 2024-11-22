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
