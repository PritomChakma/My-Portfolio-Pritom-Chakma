import React from "react";
import Projects from "../../Projects/Projects";
import About from "../About/About";
import Skills from "../Skills/Skills";
import Hero from "./Hero/Hero";

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
    </div>
  );
};

export default Home;
