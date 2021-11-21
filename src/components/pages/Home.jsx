import React, { useEffect, useState } from 'react'
import { CategoreList } from './Category/CategoreList'
import { getAllCategories } from '../API/api'

export const Home = () => {
  const [catalog, setCatalog] = useState([])

  useEffect(() => {
    getAllCategories().then((data) => setCatalog(data.categories))
  }, [])

  return (
    <div>
      <CategoreList catalog={catalog} />
    </div>
  )
}
