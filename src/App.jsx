import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import Projects from "./components/Projects";
import Services from "./components/Services";
import AnimatedBackground from "./components/ui/AnimatedBackground";
import ChatWidget from "./components/Chatbot/ChatWidget";
import Testimonials from "./components/Testimonials/Testimonials";
import BlogList from "./components/Blog/BlogList";
import BlogPost from "./components/Blog/BlogPost";
import AdminLogin from "./components/admin/AdminLogin";
import AdminLayout from "./components/admin/AdminLayout";
import { AuthProvider } from "./context/AuthContext";

// Portfolio Home Page (your existing layout)
const PortfolioHome = () => {
  return (
    <div className="relative min-h-screen bg-light-bg dark:bg-dark-bg">
      {/* Global Animated Background */}
      <AnimatedBackground />

      {/* Skip to Content Link */}
      <a href="#main-content" className="skip-to-content focus-neon">
        Skip to main content
      </a>

      <Header />
      <main id="main-content">
        <Home />
        <About />
        <Services />
        <Education />
        <Certifications />
        <Projects />
        <Testimonials />
        <BlogList isHomePage={true} />
        <Contact />
      </main>
      <Footer />

      {/* AI Chatbot Widget */}
      <ChatWidget />
    </div>
  );
};

// All Blogs Page
const AllBlogsPage = () => {
  return (
    <div className="relative min-h-screen bg-light-bg dark:bg-dark-bg">
      <Header />
      <main className="pt-10">
        <BlogList isHomePage={false} />
      </main>
      <Footer />
    </div>
  );
};

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Public portfolio */}
          <Route path="/" element={<PortfolioHome />} />

          {/* All Blogs list page */}
          <Route path="/blog" element={<AllBlogsPage />} />

          {/* Blog post page */}
          <Route path="/blog/:slug" element={<BlogPost />} />

          {/* Admin routes */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin" element={<AdminLayout />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
