import React, { useEffect, useState } from 'react'
import { CategoreList } from './Category/CategoreList'
import { getAllCategories } from '../api'

export const Home = () => {
  const [catalog, setCatalog] = useState([])

  useEffect(() => {
    getAllCategories().then((data) => setCatalog(data.categories))
  }, [])

  return (
    <div>
      hone
      <CategoreList catalog={catalog} />
    </div>
  )
}
