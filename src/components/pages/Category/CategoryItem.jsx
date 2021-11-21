import React from 'react'
import { Link } from 'react-router-dom'

export const CategoryItem = ({
  idCategory,
  strCategory,
  strCategoryThumb,
  strCategoryDescription,
}) => {
  return (
    <div className='card'>
      <div className='card-image'>
        <img src={strCategoryThumb} alt={strCategory} />
      </div>
      <div className='card-content'>
        <span className='card-title'>{strCategory}</span>
        <p>{strCategoryDescription.slice(0, 60)}...</p>
      </div>
      <div className='card-action'>
        <Link to={`/category/${strCategory}`}>watch category</Link>
      </div>
    </div>
  )
}
