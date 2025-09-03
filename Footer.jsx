import React from 'react';
import '../styles/Footer.css';
import { useNavigate } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  const navigate = useNavigate();

  // Categories grouped into columns
  const footerLinks = [
    ['Home', 'Chicken', 'Breakfast'],
    ['Dessert', 'Goat', 'Lamb'],
    ['Pasta', 'Seafood', 'Starter'],
    ['Vegan', 'Side', 'Miscellaneous'],
  ];

  return (
    <div className="footer">
      <h3>SB Recipes</h3>

      {/* Footer Navigation Links */}
      <div className="footer-options">
        {footerLinks.map((group, index) => (
          <ul key={index}>
            {group.map((item) => (
              <li
                key={item}
                onClick={() =>
                  item === 'Home'
                    ? navigate('/')
                    : navigate(`/category/${item}`)
                }
              >
                {item}
              </li>
            ))}
          </ul>
        ))}
      </div>

      <hr />

      {/* Social Media Section */}
      <div className="footer-social">
        <FaFacebookF className="social-icon" />
        <FaInstagram className="social-icon" />
        <FaTwitter className="social-icon" />
      </div>

      <p>SB Recipes - &copy; {new Date().getFullYear()} - All Rights Reserved</p>
    </div>
  );
};

export default Footer;
