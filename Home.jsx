import React from 'react';
import Hero from '../components/Hero';
import CategoriesHome from '../components/CategoriesHome';
import About from '../components/About';
import NewsLetter from '../components/NewsLetter';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="section-container">
        <Hero />
      </section>

      {/* Categories Section */}
      <section className="section-container">
        <CategoriesHome />
      </section>

      {/* About Section */}
      <section className="section-container">
        <About />
      </section>

      {/* Newsletter Section */}
      <section className="section-container">
        <NewsLetter />
      </section>
    </div>
  );
};

export default Home;
