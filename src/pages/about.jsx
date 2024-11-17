import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import AboutAnimation from '../components/about-animation';
import AboutInfoSection from '../components/about-info-section';
import TeamSection from '../components/team_section';


const About = () => {
    return (
      <div>
        <Header />
        <main>   
          <AboutAnimation />  
          <AboutInfoSection />
          <TeamSection />
        </main>
        <Footer/>
      </div>
    );
  };
  
  export default About;

