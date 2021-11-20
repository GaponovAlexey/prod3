import { url } from './config'

export const getMealById = async (mealId) => {
  const res = await fetch(url + 'lookup.php?i=' + mealId)
  return await res.json()
}

export const getAllCategories = async (mealId) => {
  const res = await fetch(url + 'categories.php')
  return await res.json()
}

export const filterByCategiry = async (mealId) => {
  const res = await fetch(url + 'filter.php?c=' + mealId)
  return await res.json()
}