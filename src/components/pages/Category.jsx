import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { getfilterByCategiry } from '../API/api'
import { MealList } from './Meal/MealList'

export const Category = () => {
  const [meals, setMeals] = useState([])
  const { name } = useParams()

  useEffect(() => {
    getfilterByCategiry(name).then((data) => setMeals(data.meals))
  }, [name])

  return  <MealList meals={meals} />

}