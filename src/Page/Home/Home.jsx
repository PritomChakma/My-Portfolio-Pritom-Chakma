import React from "react";
import Projects from "../../Projects/Projects";
import About from "../About/About";
import Skills from "../Skills/Skills";
import Hero from "./Hero/Hero";
import ContactMe from "../../Contact/ContactMe";


const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <Hero></Hero>

      {/* About section */}
      <About></About>

      {/* Skills Section */}
      <Skills></Skills>

      {/* Projects section */}
      <Projects></Projects>

      {/* Contact Section */}
      <ContactMe></ContactMe>

    
    </div>
  );
};

export default Home;
