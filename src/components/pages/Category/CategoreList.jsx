import React from "react"
import { CategoryItem } from "./CategoryItem"

export const CategoreList = ({ catalog = [] }) => {
  return (
    <div className="list">
      {catalog?.map((el) => (
        <CategoryItem key={el.idCategory} {...el} />
      ))}
    </div>
  )
}
