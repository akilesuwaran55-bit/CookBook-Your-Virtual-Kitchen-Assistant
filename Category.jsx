import React, { useEffect, useState } from 'react';
import '../styles/CategoryPage.css';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const Category = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch items when id changes
  useEffect(() => {
    const fetchItems = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/filter.php?c=${id}`
        );
        setItems(response.data.meals || []);
      } catch (error) {
        console.error('Error fetching meals:', error);
        setItems([]);
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, [id]);

  const categories = ['Chicken', 'Vegetarian', 'Starter', 'Seafood', 'Dessert'];

  return (
    <div className="category-page">
      <div className="categorypage-head">
        <h2>
          Category: <i>{id}</i>
        </h2>
        <div className="categorypage-head-options">
          <p>Other popular categories:</p>
          <span>
            {categories.map((cat) => (
              <button key={cat} onClick={() => navigate(`/category/${cat}`)}>
                {cat}
              </button>
            ))}
          </span>
        </div>
      </div>

      <div className="categorypage-body">
        {loading ? (
          <p>Loading...</p>
        ) : items.length > 0 ? (
          <div className="food-items">
            {items.map((item) => (
              <div
                key={item.idMeal}
                className="food-item"
                onClick={() => navigate(`/recipie/${item.idMeal}`)}
              >
                <img src={item.strMealThumb} alt={item.strMeal} />
                <h4>{item.strMeal}</h4>
              </div>
            ))}
          </div>
        ) : (
          <p>No meals found for this category.</p>
        )}
      </div>
    </div>
  );
};

export default Category;
