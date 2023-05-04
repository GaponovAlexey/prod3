import React from "react"
import { Meal } from "./Meal"

export const MealList = ({ meals }) => {
  return (
    <div className="list">
      {meals?.map((el) => (
        <Meal key={el.strMeal} {...el} />
      ))}
    </div>
  )
}
