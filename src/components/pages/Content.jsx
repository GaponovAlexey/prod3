import React, { useEffect, useState } from 'react'
import { getMealById } from '../API/api'
import { ItemList } from './Item/ItemList'

export const Content = () => {
const [item, setItem] = useState([])

  useEffect(() => {
    getMealById().then(data => setItem(data.meals))
  },[])

console.log(item);
  return (
    <div>
      <ItemList />
    </div>
  )
}
