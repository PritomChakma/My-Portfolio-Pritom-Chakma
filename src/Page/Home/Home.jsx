import React from 'react';
import Hero from './Hero/Hero';
import About from '../About/About';
import Skills from '../Skills/Skills';

const Home = () => {
    return (
        <div>
           {/* Hero Section */}
           <Hero></Hero>

           {/* About section */}
           <About></About>

           {/* Skills Section */}
           <Skills></Skills>
        </div>
    );
};

export default Home;