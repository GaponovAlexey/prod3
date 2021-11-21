import React from 'react'
import { Routes, Route } from 'react-router'
import { Footer } from './base/Footer'
import { Headers } from './base/Headers'
import { About } from './pages/About'
import { Category } from './pages/Category'
import { Content } from './pages/Content'
import { Home } from './pages/Home'
import { ItemList } from './pages/Item/ItemList'
import { NotFound } from './pages/NotFound'

export const Main = () => {
  return (
    <>
      <Headers />
      <main className='container main'>
        <div>
          <Routes>
            <Route index element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='cont/:id' element={<Content />} />
            <Route path='category/:name/' element={<Category />} />
            <Route path='/:id' element={<ItemList />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}
