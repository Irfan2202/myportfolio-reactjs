import Navbar from "./components/Navbar/Navbar";
import Hero from "./sections/Hero/Hero";
import About from "./sections/About/About";
import Skill from "./sections/Skill/Skill";
import Contact from "./sections/Contact/Contact";
import Footer from "./sections/Footer/Footer";
import Portfolio from "./sections/Portfolio/Portfolio";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skill />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
