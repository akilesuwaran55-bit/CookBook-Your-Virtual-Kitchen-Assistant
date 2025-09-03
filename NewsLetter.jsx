import React from 'react'
import { IoFastFoodOutline, IoMailOutline } from "react-icons/io5";
import { FaRegCheckCircle } from "react-icons/fa";
import '../styles/NewsLetter.css'

const NewsLetter = () => {
  const [subscribe, setSubscribe] = React.useState(false);
  const [error, setError] = React.useState('');
  const [email, setEmail] = React.useState('');

  // ✅ simple email regex
  const validateEmail = (mail) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail);
  };

  const handleSubscribe = (e) => {
    e.preventDefault();

    if (!email) {
      setError("Email is required!");
      return;
    }
    if (!validateEmail(email)) {
      setError("Please enter a valid email address!");
      return;
    }

    // ✅ reset states
    setError('');
    setEmail('');
    setSubscribe(true);

    // auto-hide success after 5s
    setTimeout(() => {
      setSubscribe(false);
    }, 5000);
  };

  return (
    <div className='newsletter-container'>
      <div className="newsletter-body">
        {/* Left Text */}
        <div className="newsletter-text">
          <IoFastFoodOutline className='food-icon' />
          <span>
            <h4>Unlock exclusive recipes, and foodie delights straight to your inbox.</h4>
            <p>
              Get weekly meal inspiration, cooking tips, and expert advice delivered directly to you. 
              Subscribe to our newsletter and level up your culinary skills.
            </p>
          </span>
        </div>

        {/* Right Input Section */}
        <form className="newsletter-input-body" onSubmit={handleSubscribe}>
          <div className="newsletter-input">
            <span>
              <IoMailOutline className='mail-icon' />
              <input 
                type="email" 
                placeholder="Your email address" 
                onChange={(e) => setEmail(e.target.value)} 
                value={email} 
                required 
              />
            </span>
            <button type="submit">Subscribe</button>
          </div>

          {/* ✅ Error Message */}
          {error && <p style={{ color: "red", fontSize: "0.8rem" }}>{error}</p>}

          {/* ✅ Success Message */}
          {subscribe && (
            <p style={{ color: "green", fontWeight: "500" }}>
              🎉 Thanks for subscribing!
            </p>
          )}

          <p>
            <FaRegCheckCircle className='tick-icon' />
            We promise no spam, just yummy inspiration! Sign up now!
          </p>
        </form>
      </div>
    </div>
  );
};

export default NewsLetter;
