import React from "react"
import { Route, Routes } from "react-router"
import { Footer } from "./layout/Footer"
import { Headers } from "./layout/Headers"
import { About } from "./pages/About"
import { Category } from "./pages/Category"
import { Content } from "./pages/Content"
import { Home } from "./pages/Home"
import { ItemList } from "./pages/Item/ItemList"
import { NotFound } from "./pages/NotFound"

export const Main = () => {
  return (
    <>
      <Headers />
      <main className="container main">
        <Routes>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="cont/:id" element={<Content />} />
          <Route path="category/:name/" element={<Category />} />
          <Route path="/:id" element={<ItemList />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}
