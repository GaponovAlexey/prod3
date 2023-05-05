import React from "react"
import { Link } from "react-router-dom"

export const Meal = ({ idMeal, strMealThumb, strMeal }) => {
  return (
    <div className="card">
      <div className="card-image">
        <img src={strMealThumb} alt={strMeal} />
      </div>
      <div className="card-content">
        <span className="card-title">{strMeal}</span>
      </div>
      <div className="card-action">
        <Link to={`/${idMeal}`}>watch recipe</Link>
      </div>
    </div>
  )
}
