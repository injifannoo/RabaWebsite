import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import OurProject from "./pages/OurProject";
import Services from "./pages/Services";
import ContactForm from "./pages/ContactForm";
import Blogs from "./pages/BlogPage";
import ErrorPage from "./pages/ErroPage.jsx";
import AdminLogin from './pages/admin/AdminLogin';
import LoginPage from "./pages/LoginPage";
import AdminDashboard from './pages/admin/AdminDashboard';
import PrivateRoute from './components/PrivateRoute';
import Testimonials from "./pages/Testimonials.jsx";
import TeamSection from "./pages/About/Team.jsx";
import LearnMore from "./pages/About/LearnMore.jsx";
import CreateBlog from "./components/Blog/createBlog.jsx";
import BlogList from "./components/Blog/BlogList.jsx";
import EditBlog from "./components/Blog/BlogEditor.jsx"
import Dashboard from "./pages/admin/AdminDashboard";
const SinglePageLayout = () => {
  return (
    <div className="bg-gray-100 flex-grow">
      {/* Home Section */}
      <section
        id="home"
        className="h-screen bg-cover bg-center"
        style={{ backgroundImage: `url('/assets/images/homebg.png')` }}
      >
        <HomePage />
      </section>

      {/* About Us Section */}
      <section id="about-us" className="flex justify-center items-center px-1 py-8">
        <AboutUs />
      </section>

      {/* Services Section */}
      <section id="services" className="flex justify-center items-center px-1 py-8">
        <Services />
      </section>

      {/* Our Project Section */}
      <section
        id="our-project"
        className="min-h-screen flex justify-center items-center px-1 py-8"
      >
        <OurProject />
      </section>

      {/* Blogs Section */}
      <section id="blogs" className="min-h-screen flex justify-center items-center px-1 py-8">
        <Blogs />
      </section>

      <section id="teams" className="min-h-screen flex justify-center items-center px-1 py-8">

             <TeamSection />
        </section>
        {/* <section id="learn-more" className="flex justify-center items-center px-1 py-8 mt-auto mb-16">

<LearnMore />
</section> */}

        <section id="testimonials" className=" min-h-screen flex justify-center items-center px-1 py-8">
          <Testimonials />
       </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="min-h-screen flex justify-center items-center px-1 py-8"
      >
        <ContactForm />
      </section>
    </div>
  );
};

const AppRoutes = () => (
    <Routes>
      {/* Single Page Layout */}
      <Route path="/" element={<SinglePageLayout />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/services" element={<Services />} />
      <Route path="/our-project" element={<OurProject />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/contact" element={<ContactForm />} />
      <Route path="/admin" element={<LoginPage />} />
      <Route path="/learn-more" element={<LearnMore/>}/>
      <Route path="/teams" element={<TeamSection/>}/>
      <Route path="*" element={<ErrorPage />} />
      {/* Other Routes */}
      <Route path="/admin" element={<LoginPage />} />
      <Route path="*" element={<ErrorPage />} />
      <Route path="blog-list" element={<BlogList />} />
    <Route path="/create-blog" element={<CreateBlog />} />
    <Route path="/edit-blog/:id" element={<EditBlog />} />



      {/* Protected Admin Route */}
      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <AdminDashboard />
          </PrivateRoute>
        }
      />
    </Routes>
);

export default AppRoutes;