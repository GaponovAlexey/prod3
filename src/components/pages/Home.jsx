import React, { useEffect, useState } from 'react'
import { CategoreList } from './Category/CategoreList'
import { getAllCategories } from '../API/api'
import { Search } from '../base/Search'
import { useLocation, useNavigate } from 'react-router'

export const Home = () => {
  const { pathname, search } = useLocation()
  const navigate = useNavigate()
  const from = navigate.part

  console.log(from);
  const [catalog, setCatalog] = useState([])
  const [filteredCatalog, setFilteredCatalog] = useState([])

  const handleSearch = (str) => {
    setFilteredCatalog(
      catalog.filter((item) =>
        item.strCategory.toLowerCase().includes(str.toLowerCase())
      )
    )
  }

  useEffect(() => {
    getAllCategories().then((data) => {
      setCatalog(data.categories)
      setFilteredCatalog(data.categories)
    })
  }, [])

  return (
    <div>
      <Search cb={handleSearch} />
      <CategoreList catalog={filteredCatalog} />
    </div>
  )
}
