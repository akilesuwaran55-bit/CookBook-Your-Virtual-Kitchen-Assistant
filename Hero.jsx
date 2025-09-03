import React from 'react'
import { Link } from 'react-scroll'   // smooth scrolling
import '../styles/Hero.css'
import heroImg1 from '../images/hero-img1.png'
import heroImg2 from '../images/hero-img2.png'
import heroImg3 from '../images/hero-img3.png'
import heroImg4 from '../images/hero-img4.png'

const Hero = () => {
  return (
    <div className="hero-container">
      {/* Hero Text Section */}
      <div className="hero-text animate-fade">
        <div className="hero-line" />
        <h1>Discover delicious recipes for every occasion 🍴</h1>
        <p>
          Ready to tantalize your taste buds? Explore our recipe library 
          and find your next food adventure.
        </p>

        {/* Smooth scroll to recipes section */}
        <Link to="recipies" smooth={true} duration={700}>
          <button className="hero-btn">Explore Recipes</button>
        </Link>
      </div>

      {/* Hero Images Section */}
      <div className="hero-images">
        <span className="span1">
          <img src={heroImg2} alt="Fresh Salad" className="animate-float" />
          <img src={heroImg4} alt="Fruit Bowl" className="animate-float delay-2" />
        </span>
        <span className="span2">
          <img src={heroImg3} alt="Tasty Pasta" className="animate-float delay-1" />
          <img src={heroImg1} alt="Dessert Cake" className="animate-float delay-3" />
        </span>
      </div>
    </div>
  )
}

export default Hero
