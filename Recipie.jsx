import React, { useEffect, useState } from 'react';
import YouTube from 'react-youtube';
import '../styles/Recipie.css';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const Recipie = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [recipie, setRecipie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchRecipie();
  }, [id]);

  const fetchRecipie = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
      );
      if (response.data.meals) {
        setRecipie(response.data.meals[0]);
      } else {
        setError('Recipe not found!');
      }
    } catch (err) {
      setError('Failed to fetch recipe.');
    } finally {
      setLoading(false);
    }
  };

  const getYouTubeId = (url) => {
    if (!url) return null;
    const urlObj = new URL(url);
    return urlObj.searchParams.get('v');
  };

  return (
    <div className='Recipie-page'>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {recipie && !loading && (
        <>
          <div className="recipie-img">
            <img src={recipie.strMealThumb} alt={recipie.strMeal} />
          </div>

          <div className="recipie-data-container">
            <div className="recipie-data">
              <div className="recipie-header">
                <h4>{recipie.strMeal}</h4>
                <div className="recipie-specials">
                  {recipie.strArea && <p>{recipie.strArea}</p>}
                  {recipie.strCategory && <p>{recipie.strCategory}</p>}
                </div>
              </div>

              <div className="procedure">
                <h5>Procedure</h5>
                <p>{recipie.strInstructions}</p>
              </div>

              {recipie.strYoutube && (
                <div className="youtube-video-container">
                  <h5>Video Tutorial</h5>
                  <YouTube
                    videoId={getYouTubeId(recipie.strYoutube)}
                    opts={{ width: '100%', height: '315' }}
                  />
                </div>
              )}
            </div>

            <div className="ingredients-container">
              <h3>Ingredients</h3>
              <ul className="ingredients">
                {Object.entries(recipie)
                  .filter(([key, value]) => key.startsWith('strIngredient') && value)
                  .map(([key, value], index) => {
                    const measure =
                      recipie[`strMeasure${key.slice('strIngredient'.length)}`] || '';
                    return (
                      <li key={key} className="ingredient">
                        <h5>{value}</h5>
                        <p>{measure}</p>
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Recipie;
