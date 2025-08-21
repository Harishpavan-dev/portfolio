import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Education from "./components/Education";
import Projects from "./components/Projects";

const App = () => {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Education />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};
export default App;
