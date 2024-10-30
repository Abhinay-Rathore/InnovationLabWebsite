import React from 'react';
import Header from '../components/header';
import ImageSlider from '../components/slider';
import HeroSection from '../components/herosection';
import NewsAndUpdates from '../components/news_updates';
import Footer from '../components/footer';
import AnimatedPinDemo from '../components/card';
import '../styles/home.css';

const Home = () => {
  return (
    <div>
      <Header />
      <main>
        <HeroSection />
        <AnimatedPinDemo />
        <NewsAndUpdates />
        <ImageSlider />
      </main>
      <Footer/>
    </div>
  );
};

export default Home;


/* Color palette */

/* color: #f4a500;
color: #159edd;
color: #061ba4;
color: #1ed4d7; */