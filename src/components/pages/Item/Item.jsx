import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { getMealById } from '../../API/api'

export const Item = ({
  strMeal,
  strCategory,
  strArea,
  strInstructions,
  strMealThumb,
  strTags,
  strYoutube,
  
}) => {
  const { id } = useParams()
  const navigate = useNavigate()
  const back = () => navigate(-1)

  const [recipe, setItem] = useState([])

  useEffect(() => {
    getMealById(id).then((data) => setItem(data.meals[0]))
  }, [id])


  return (
    <div>
      <div className='recipe'>
        <img src={strMealThumb} alt={strMeal} />
        <h1>{strMeal}</h1>
        {strCategory ? <h6> Category: {recipe.strCategory}</h6> : ''}
        {strArea ? <h6>Area: {strArea}</h6> : ''}
        <p>{strInstructions}</p>

        <table className='centered'>
          <thead>
            <tr>
              <th>Ingredient</th>
              <th>Measure</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(recipe).map((key) => {
              if (key.includes('Ingredient') && recipe[key]) {
                return (
                  <tr key={key}>
                    <td>{recipe[key]}</td>
                    <td>{recipe[`strMeasure${key.slice(13)}`]}</td>
                  </tr>
                )
              }
              return null
            })}
          </tbody>
        </table>

        {strYoutube ? (
          <div className='div-row'>
            <h5>Video Recipe</h5>
            <iframe
              title={id}
              src={`https://www.youtube.com/embed/${strYoutube.slice(-11)}`}
              allowfullscreen
            />
          </div>
        ) : null}
      </div>
      <button className='btn' onClick={back}>
        back
      </button>
    </div>
  )
}
