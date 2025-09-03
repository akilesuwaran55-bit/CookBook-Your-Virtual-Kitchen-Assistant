import React from 'react'
import '../styles/About.css'  // optional CSS file if you want styling

const About = () => {
  return (
    <div className="about-container">
      <h2>About Us</h2>
      <p>
        Welcome to our Recipe App! 🍴  
        We bring you a wide variety of delicious meals and popular food categories 
        from around the world. Our goal is to make cooking fun, simple, 
        and enjoyable for everyone.
      </p>

      <h3>What You’ll Find Here</h3>
      <ul>
        <li>👉 Explore food categories</li>
        <li>👉 Discover trending dishes</li>
        <li>👉 Learn new recipes step by step</li>
      </ul>

      <h3>Our Mission</h3>
      <p>
        To inspire people to cook and enjoy homemade meals by providing 
        easy-to-follow recipes and food ideas.
      </p>

      <h3>Contact Us</h3>
      <p>Email: support@recipeapp.com</p>
    </div>
  )
}

export default About
