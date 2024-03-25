import React from 'react';
import './About.css'; 

const About = () => {
  return (
    <div className="about-us">
      <h2>About Us</h2>
      <div className="about-content">
        <div className='about-image'>
            <img src="../../../public/About-.png" alt="" />
        </div>
        <div className="about-text">
          <p>Discover a world of possibilities with our comprehensive range of services and studies
          From cutting-edge design to efficient project management, we provide the tools and expertise to bring your ideas to life
          Dive into the realm of front-end development, backend development, mobile app development, and more. Let's collaborate to turn your vision into reality.
          Discover a world of possibilities with our comprehensive range of services and studies
          From cutting-edge design to efficient project management, we provide the tools and expertise to bring your ideas to life
          Dive into the realm of front-end development, backend development, mobile app development, and more. Let's collaborate to turn your vision into reality
          Discover a world of possibilities with our comprehensive range of services and studies
          From cutting-edge design to efficient project management, we provide the tools and expertise to bring your ideas to life
          Dive into the realm of front-end development, backend development, mobile app development, and more. Let's collaborate to turn your vision into reality</p>
        </div>
        <div className="about-team">
          {/* Insérez ici des images ou illustrations de votre équipe */}
        </div>
      </div>
    </div>
  );
};

export default About;