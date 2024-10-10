import React from 'react';
import Header from '../components/header';
import ImageSlider from '../components/slider';
import HeroSection from '../components/herosection';
import NewsAndUpdates from '../components/news_updates';
import Footer from '../components/footer';

const Home = () => {
  return (
    <div>
      <Header />
      <main>
        <HeroSection />
        <NewsAndUpdates />
        <ImageSlider />
      </main>
      <Footer/>
    </div>
  );
};

export default Home;
