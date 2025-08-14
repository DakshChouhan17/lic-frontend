// src/pages/Home.jsx
import Hero from "../components/Hero";
import About from "../components/About";
import WhyMe from "../components/WhyMe";
import Services from "../components/Services" // Make sure this is imported
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <WhyMe />
      <Services limit={6} /> {/* <-- Pass limit={6} here */}
      <Testimonials />
      <Contact />
    </>
  );
};

export default Home;