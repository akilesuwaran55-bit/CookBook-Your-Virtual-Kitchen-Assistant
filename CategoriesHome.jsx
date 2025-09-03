import React, { useEffect, useState } from 'react'
import '../styles/CategoriesHome.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const CategoriesHome = () => {
  const navigate = useNavigate()

  const [items, setItems] = useState([])
  const [categories, setCategories] = useState([])
  const [loadingCategories, setLoadingCategories] = useState(true)
  const [loadingItems, setLoadingItems] = useState(true)

  useEffect(() => {
    fetchCategories()
    fetchItems()
  }, [])

  const fetchCategories = async () => {
    try {
      const response = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
      setCategories(response.data.categories || [])
    } catch (error) {
      console.error("Error fetching categories:", error)
    } finally {
      setLoadingCategories(false)
    }
  }

  const fetchItems = async () => {
    try {
      const response = await axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?a=Indian')
      setItems(response.data.meals || [])
    } catch (error) {
      console.error("Error fetching items:", error)
    } finally {
      setLoadingItems(false)
    }
  }

  return (
    <div className="home-categories-container" id="popular">

      {/* Categories Section */}
      <div className="popular-categories-body">
        <h3>Most Popular Categories</h3>
        <p>Be sure not to miss out on these most popular categories. Enjoy trying them out!</p>

        {loadingCategories ? (
          <p>Loading categories...</p>
        ) : (
          <div className="popular-categories">
            {categories.slice(0, 9).map((category, index) => (
              <div
                className="popular-category"
                key={index}
                onClick={() => navigate(`/category/${category.strCategory}`)}
              >
                <img src={category.strCategoryThumb} alt={category.strCategory} />
                <span>
                  <h4>{category.strCategory}</h4>
                  <p>View All Recipes</p>
                </span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Dishes Section */}
      <div className="popular-dishes-body" id="recipes">
        <h3>Trending Dishes</h3>

        {loadingItems ? (
          <p>Loading dishes...</p>
        ) : items.length > 0 ? (
          <div className="popular-dishes">
            {items.slice(0, 8).map((dish, index) => (
              <div
                className={`popular-dish ${index === 0 || index === 5 ? 'big' : 'small'}`}
                key={dish.idMeal}
                onClick={() => navigate(`/recipe/${dish.idMeal}`)}
              >
                <img src={dish.strMealThumb} alt={dish.strMeal} />
                <p>{dish.strMeal}</p>
              </div>
            ))}
          </div>
        ) : (
          <p>No dishes found.</p>
        )}
      </div>
    </div>
  )
}

export default CategoriesHome
