// src/pages/Home.jsx
import Hero from "../components/Hero.jsx";
import About from "../components/About.jsx";
import WhyMe from "../components/Whyme.jsx";
import Services from "../components/Services.jsx" // Make sure this is imported
import Testimonials from "../components/Testimonials.jsx";
import Contact from "../components/Contact.jsx";

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