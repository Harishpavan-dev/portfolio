import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Services from "./components/Services";
import { Analytics } from "@vercel/analytics/react";

const App = () => {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Services />
      <Education />
      <Projects />
      <Contact />
      <Footer />
      <Analytics />
    </div>
  );
};
export default App;
