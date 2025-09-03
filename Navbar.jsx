import React, { useState } from 'react';
import '../styles/Navbar.css';
import { IoSearch } from 'react-icons/io5';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Navbar = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [menuOpen, setMenuOpen] = useState(false); // ✅ for mobile toggle

  const handleSearch = async () => {
    if (!search.trim()) return;

    try {
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
      );
      if (response.data.meals && response.data.meals.length > 0) {
        navigate(`/recipie/${response.data.meals[0].idMeal}`);
      } else {
        alert('No such recipe found!');
        navigate('/');
      }
    } catch (error) {
      console.error(error);
      alert('Something went wrong while searching!');
      navigate('/');
    }
    setSearch('');
  };

  // ✅ handle Enter key
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="Navbar">
      {/* Logo */}
      <h3 onClick={() => navigate('/')}>SB Recipes</h3>

      {/* Hamburger icon (mobile only) */}
      <div
        className={`hamburger ${menuOpen ? 'active' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Navigation Options */}
      <div className={`nav-options ${menuOpen ? 'open' : ''}`}>
        <ul>
          <li onClick={() => navigate('/')}>Home</li>
          <a href="#popular">
            <li>Popular</li>
          </a>
        </ul>

        {/* Search Bar */}
        <div className="nav-search">
          <span>
            <IoSearch className="nav-search-icon" />
            <input
              type="text"
              placeholder="Search recipes..."
              onChange={(e) => setSearch(e.target.value)}
              value={search}
              onKeyDown={handleKeyDown}
            />
          </span>
          <button onClick={handleSearch}>Search</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
