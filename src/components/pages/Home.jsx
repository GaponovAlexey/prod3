import React, { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router"
import { getAllCategories } from "../API/api"
import { Search } from "../layout/Search"
import { CategoreList } from "./Category/CategoreList"

export const Home = () => {
  const { pathname, search } = useLocation()
  const navigate = useNavigate()
  const from = navigate.part

  console.log(from)
  const [catalog, setCatalog] = useState([])
  const [filteredCatalog, setFilteredCatalog] = useState([])

  const handleSearch = (str) => {
    setFilteredCatalog(
      catalog.filter((item) =>
        item.strCategory.toLowerCase().includes(str.toLowerCase()),
      ),
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
      <div className="main-logo">
        <div className="main-text-wrapper ">
          <div className="main-text">FIND YOUR PERFECT RECIPE</div>
          <div className="main-text-shadow">FIND YOUR PERFECT RECIPE</div>
        </div>
        <div className="main-buddy"></div>
      </div>
      <div>
        <Search cb={handleSearch} />
        <CategoreList catalog={filteredCatalog} />
      </div>
    </div>
  )
}
