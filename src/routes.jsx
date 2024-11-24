import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import OurProject from "./pages/OurProject";
import ContactForm from "./pages/ContactForm";

const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/our-project" element={<OurProject />} />
      <Route path="/contact" element={<ContactForm />} />
    </Routes>
  </Router>
);

export default AppRoutes;