import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import OurProject from "./pages/OurProject.jsx";
import Services from "./pages/Services.jsx";
import ContactForm from "./pages/ContactForm.jsx";
import Blogs from "./pages/BlogPage.jsx";
import ErrorPage from "./pages/ErroPage.jsx";
import AdminLogin from './pages/admin/AdminLogin.jsx';
import LoginPage from "./pages/LoginPage.jsx";
import AdminDashboard from './pages/admin/AdminDashboard.jsx';
import PrivateRoute from './components/PrivateRoute.jsx';
import Testimonials from "./pages/Testimonials.jsx";
import LearnMore from "./pages/About/LearnMore.jsx";
import CreateBlog from "./components/Blog/createBlog.jsx";
import BlogList from "./components/Blog/BlogList.jsx";
import EditBlog from "./components/Blog/BlogEditor.jsx"
import Dashboard from "./pages/admin/AdminDashboard.jsx";
import TeamSection from "./pages/about/Team.jsx";
import Ebba from "./pages/about/Team/Ebba.jsx";
import Enjifano from "./pages/about/Team/Enjifano.jsx";
import Gizachew from "./pages/about/Team/Gizachew.jsx";
import Naol from "./pages/about/Team/Naol.jsx";
import AllBlogPage from "./pages/AllBlogPage.jsx";
import WebDevelopment from "./components/Services/webDevelopment.jsx";
import AppDevelopment from "./components/Services/appDevelopment.jsx";
import VideoEditing from "./components/Services/videoEditing.jsx";
import DigitalMarketing from "./components/Services/digitalMarketing.jsx";
import ContinousMaintenance from "./components/Services/continousMaintenance.jsx";
import GraphicsDesign from "./components/Services/graphicsDesign.jsx";
import UiUxDesign from "./components/Services/uiUxDesign.jsx";

const SinglePageLayout = () => {
  return (
    <div className="bg--100 flex flex-col  flex-grow">
      {/* Home Section */}
      <section
        id="home"
        className="h-screen bg-cover bg-center"
        style={{ backgroundImage: `url('/assets/images/homebg.png')` }}
      >
        <HomePage />
      </section>

      {/* About Us Section */}
      <section id="about-us" className="flex justify-center items-center px-1 pt-8 md:py-8">
        <AboutUs />
      </section>

      {/* Services Section */}
      <section id="services" className="flex justify-center items-center px-1 md:py-8">
        <Services />
      </section>

      {/* Our Project Section */}
      <section
        id="our-project"
        className="min-h-scren flex justify-center items-center px-1 md:py-8"
      >
        <OurProject />
      </section>

      {/* Blogs Section */}
      <section id="blogs" className="min-h-screen flex justify-center items-center px-1 py-">
        <Blogs />
      </section>

      <section id="teams" className="min-h-scren flex justify-center items-center px-1 md:py-8 ">

        <TeamSection />
      </section>
      {/* <section id="learn-more" className="flex justify-center items-center px-1 py-8 mt-auto mb-16">

<LearnMore />
</section> */}

        {/* <section id="testimonials" className=" min-h-screen flex justify-center items-center px-1 py-">
          <Testimonials />
       </section> */}

      {/* Contact Section */}
      <section
        id="contact"
        className="max-h-scren flex justify-center items-center px-1 md:py-20"
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
    <Route path="/learn-more" element={<LearnMore />} />
    <Route path="/teams" element={<TeamSection />} />
    <Route path="*" element={<ErrorPage />} />
    {/* Other Routes */}
    <Route path="/admin" element={<LoginPage />} />
    <Route path="*" element={<ErrorPage />} />
    <Route path="blog-list" element={<BlogList />} />
    <Route path="/create-blog" element={<CreateBlog />} />
    <Route path="/edit-blog/:id" element={<EditBlog />} />
    <Route path="/teams/ebba" element={<Ebba />} />
    <Route path="/teams/enjifano" element={<Enjifano />} />
    <Route path="/teams/gizachew" element={<Gizachew />} />
    <Route path="/teams/naol" element={<Naol />} />
    <Route path="/all-blogs" element={<AllBlogPage />} />
    <Route path="/teams" element={<TeamSection />} />
    <Route path="/web-development" element={<WebDevelopment />} />
    <Route path="/app-development" element={<AppDevelopment />} />
    <Route path="/video-editing" element={<VideoEditing />} />
    <Route path="/digital-marketing" element={<DigitalMarketing />} />
    <Route path="/continous-maintenance" element={<ContinousMaintenance />} />
    <Route path="/graphics-design" element={<GraphicsDesign />} />
    <Route path="/ui-ux-design" element={<UiUxDesign />} />


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