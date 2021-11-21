import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { getMealById } from '../../API/api'
import { Item } from './Item'

export const ItemList = () => {
  const { id } = useParams()
  const [item, setItem] = useState([])

  useEffect(() => {
    getMealById(id).then((data) => setItem(data.meals))
  }, [id])

  return (
    <div className='conteiner'>
      {item.map((el) => (
        <Item key={el.idMeal} {...el} recipe={item} />
      ))}
    </div>
  )
}
